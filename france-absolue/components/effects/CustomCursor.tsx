'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dot  = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const pos  = useRef({ x: 0, y: 0 })
  const rpos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e: MouseEvent) => { pos.current = { x: e.clientX, y: e.clientY } }

    const setHover = (on: boolean) => () => ring.current?.classList.toggle('is-hover', on)
    document.querySelectorAll('a,button,[data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', setHover(true))
      el.addEventListener('mouseleave', setHover(false))
    })

    document.addEventListener('mousemove', onMove)
    let raf: number
    const tick = () => {
      if (dot.current) {
        dot.current.style.transform = `translate(${pos.current.x - 5}px,${pos.current.y - 5}px)`
      }
      rpos.current.x += (pos.current.x - rpos.current.x) * 0.1
      rpos.current.y += (pos.current.y - rpos.current.y) * 0.1
      if (ring.current) {
        ring.current.style.transform = `translate(${rpos.current.x - 18}px,${rpos.current.y - 18}px)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          * { cursor: none !important; }
        }
        .cur-dot {
          position:fixed;top:0;left:0;z-index:99999;
          width:10px;height:10px;border-radius:50%;
          background:#1f4ed8;pointer-events:none;
          mix-blend-mode:difference;
          transition:transform 0.05s linear;
        }
        .cur-ring {
          position:fixed;top:0;left:0;z-index:99998;
          width:36px;height:36px;border-radius:50%;
          border:1.5px solid rgba(31,78,216,0.6);
          pointer-events:none;mix-blend-mode:difference;
          transition:width 0.25s,height 0.25s,margin 0.25s,border-color 0.25s;
        }
        .cur-ring.is-hover {
          width:56px;height:56px;
          margin-top:-10px;margin-left:-10px;
          border-color:rgba(200,168,75,0.8);
        }
        @media (pointer:coarse){.cur-dot,.cur-ring{display:none}*{cursor:auto!important}}
      `}</style>
      <div ref={dot}  className="cur-dot"  aria-hidden="true" />
      <div ref={ring} className="cur-ring" aria-hidden="true" />
    </>
  )
}
