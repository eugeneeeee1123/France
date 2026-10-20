'use client'

import { Suspense, useEffect, useMemo, useRef, type PointerEvent, type RefObject } from 'react'
import { Canvas, invalidate, useFrame, useLoader, useThree } from '@react-three/fiber'
// Note: three's own GLTFLoader + MeshoptDecoder via useLoader instead of drei's useGLTF; drops drei
// and the unused Draco loader from the island chunk (lazy-chunk cap, ARCHITECTURE-INDEX §9).
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js'
import { Box3, Group, MeshStandardMaterial, Vector3, type Mesh } from 'three'

/**
 * Optional 3D tower for the hero collage frame (ARCHITECTURE-INDEX §5 S1, §8). Drag rotates it
 * around the vertical axis on a critically damped spring (damping ratio 1.0, response 0.4 s);
 * a new drag interrupts the motion, release keeps the drag velocity for a short glide.
 * No auto-rotation and no loop: frames render only while the spring moves.
 */
const MODEL_URL = '/models/eiffel.glb'
const RESPONSE_S = 0.4
const DAMPING_RATIO = 1
const STIFFNESS = ((2 * Math.PI) / RESPONSE_S) ** 2
const DAMPING = (4 * Math.PI * DAMPING_RATIO) / RESPONSE_S
const RADIANS_PER_PX = 0.008
const GLIDE_S = 0.25
const START_ANGLE = 0.6
const MODEL_HEIGHT = 2.2

function Tower({ target, onReady }: { target: RefObject<number>; onReady: () => void }) {
  // The GLB requires EXT_meshopt_compression, so the meshopt decoder must be registered.
  const { scene } = useLoader(GLTFLoader, MODEL_URL, (loader) => {
    loader.setMeshoptDecoder(MeshoptDecoder)
  })
  const group = useRef<Group>(null)
  const angle = useRef(START_ANGLE)
  const velocity = useRef(0)
  const requestFrame = useThree((state) => state.invalidate)

  const model = useMemo(() => {
    // Unified warm metal close to --gold-700 (§5); read from the token, never hard-coded.
    const gold = getComputedStyle(document.documentElement).getPropertyValue('--gold-700').trim()
    const material = new MeshStandardMaterial({ color: gold || undefined, metalness: 0.7, roughness: 0.38 })
    const root = scene.clone(true)
    root.traverse((child) => {
      const mesh = child as Mesh
      if (mesh.isMesh) mesh.material = material
    })
    const box = new Box3().setFromObject(root)
    const size = box.getSize(new Vector3())
    root.position.sub(box.getCenter(new Vector3()))
    const wrapper = new Group()
    wrapper.add(root)
    wrapper.scale.setScalar(MODEL_HEIGHT / Math.max(size.y, 1e-6))
    return { wrapper, material }
  }, [scene])

  useEffect(() => () => model.material.dispose(), [model])
  useEffect(() => {
    onReady()
    requestFrame()
  }, [onReady, requestFrame])

  useFrame((_, delta) => {
    const g = group.current
    if (!g) return
    const dt = Math.min(delta, 1 / 30)
    const accel = -STIFFNESS * (angle.current - target.current) - DAMPING * velocity.current
    velocity.current += accel * dt
    angle.current += velocity.current * dt
    g.rotation.y = angle.current
    if (Math.abs(angle.current - target.current) > 1e-4 || Math.abs(velocity.current) > 1e-4) requestFrame()
  })

  return (
    <group ref={group} rotation={[0, START_ANGLE, 0]}>
      <primitive object={model.wrapper} />
    </group>
  )
}

interface Drag {
  active: boolean
  lastX: number
  lastT: number
  velocity: number
}

export default function EiffelScene({ onReady }: { onReady: () => void }) {
  const target = useRef(START_ANGLE)
  const drag = useRef<Drag>({ active: false, lastX: 0, lastT: 0, velocity: 0 })

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    drag.current = { active: true, lastX: e.clientX, lastT: e.timeStamp, velocity: 0 }
  }
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag.current
    if (!d.active) return
    const dx = (e.clientX - d.lastX) * RADIANS_PER_PX
    const dt = Math.max(e.timeStamp - d.lastT, 1) / 1000
    target.current += dx
    d.velocity = dx / dt
    d.lastX = e.clientX
    d.lastT = e.timeStamp
    invalidate()
  }
  const onPointerEnd = () => {
    const d = drag.current
    if (!d.active) return
    d.active = false
    target.current += d.velocity * GLIDE_S
    invalidate()
  }

  return (
    <div
      className="absolute inset-0 cursor-grab touch-none active:cursor-grabbing"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerEnd}
      onPointerCancel={onPointerEnd}
    >
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
        camera={{ position: [0, 0.35, 4.6], fov: 32 }}
        onCreated={({ camera }) => camera.lookAt(0, 0, 0)}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 4, 2]} intensity={2.2} />
        <directionalLight position={[-3, 1, -2]} intensity={0.6} />
        <Suspense fallback={null}>
          <Tower target={target} onReady={onReady} />
        </Suspense>
      </Canvas>
    </div>
  )
}
