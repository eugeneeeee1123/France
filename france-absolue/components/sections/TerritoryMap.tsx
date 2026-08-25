'use client'
import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import type { Lang } from '@/lib/i18n'

export interface CityPoint {
  name: string
  fr: string
  lat: number
  lng: number
  region: string
  type?: string
  note: Record<Lang, string>
}

interface TerritoryMapProps {
  mode: 'metropole' | 'overseas'
  cities: CityPoint[]
  onSelect: (city: CityPoint) => void
  lang: Lang
}

const markerColors: Record<string, string> = {
  capital: '#ffffff',
  metropolis: '#4a7ef5',
  strategic: '#ff684f',
  regional: '#7f93ba',
  overseas: '#c8a84b',
}

export default function TerritoryMap({ mode, cities, onSelect, lang }: TerritoryMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const leafletMap = useRef<L.Map | null>(null)
  const markersLayer = useRef<L.LayerGroup | null>(null)

  // Init map once
  useEffect(() => {
    if (!mapRef.current || leafletMap.current) return

    const center: [number, number] = mode === 'metropole' ? [46.6, 2.5] : [10, 0]
    const zoom = mode === 'metropole' ? 5.3 : 2

    const map = L.map(mapRef.current, {
      center,
      zoom,
      zoomControl: true,
      attributionControl: false,
      minZoom: 2,
      maxZoom: 10,
    })

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_matter/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd',
    }).addTo(map)

    markersLayer.current = L.layerGroup().addTo(map)
    leafletMap.current = map

    return () => {
      map.remove()
      leafletMap.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Recenter on mode change
  useEffect(() => {
    if (!leafletMap.current) return
    const center: [number, number] = mode === 'metropole' ? [46.6, 2.5] : [10, 0]
    const zoom = mode === 'metropole' ? 5.3 : 2
    leafletMap.current.flyTo(center, zoom, { duration: 0.8 })
  }, [mode])

  // Update markers when cities change
  useEffect(() => {
    if (!markersLayer.current) return
    markersLayer.current.clearLayers()

    cities.forEach((city) => {
      const color = markerColors[city.type ?? 'overseas'] ?? '#7f93ba'
      const icon = L.divIcon({
        className: '',
        html: `
          <div style="position:relative;width:14px;height:14px;">
            <div style="position:absolute;inset:0;border-radius:50%;background:${color};opacity:0.25;animation:mapPulse 2s ease-out infinite;"></div>
            <div style="position:absolute;inset:4px;border-radius:50%;background:${color};border:1.5px solid rgba(255,255,255,0.6);"></div>
          </div>
        `,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      })

      const marker = L.marker([city.lat, city.lng], { icon })
      marker.on('click', () => onSelect(city))
      marker.bindTooltip(lang === 'zh' ? city.name : city.fr, {
        direction: 'top',
        offset: [0, -8],
        className: 'territory-map-tooltip',
      })
      marker.addTo(markersLayer.current!)
    })
  }, [cities, onSelect, lang])

  return (
    <>
      <style>{`
        @keyframes mapPulse {
          0% { transform: scale(1); opacity: 0.35; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        .leaflet-container {
          background: #050e1c !important;
          font-family: inherit;
        }
        .territory-map-tooltip {
          background: rgba(5,14,28,0.92) !important;
          border: 1px solid rgba(255,255,255,0.1) !important;
          color: #fff !important;
          font-size: 10px !important;
          font-weight: 700 !important;
          letter-spacing: 0.04em !important;
          padding: 4px 8px !important;
          border-radius: 0 !important;
          box-shadow: none !important;
        }
        .territory-map-tooltip::before { display: none !important; }
        .leaflet-control-zoom a {
          background: rgba(5,14,28,0.85) !important;
          color: #fff !important;
          border-color: rgba(255,255,255,0.1) !important;
        }
        .leaflet-control-zoom a:hover { background: rgba(255,255,255,0.1) !important; }
      `}</style>
      <div ref={mapRef} style={{ height: '100%', width: '100%' }} />
    </>
  )
}
