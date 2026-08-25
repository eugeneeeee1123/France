export default function GrainOverlay() {
  return (
    <>
      <style>{`
        .grain-overlay {
          position: fixed;
          inset: -200%;
          width: 400%;
          height: 400%;
          pointer-events: none;
          z-index: 9998;
          opacity: 0.032;
          animation: grain 0.5s steps(1) infinite;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
        @keyframes grain {
          0%,100%{transform:translate(0,0)}
          10%{transform:translate(-5%,-10%)}
          20%{transform:translate(-15%,5%)}
          30%{transform:translate(7%,-25%)}
          40%{transform:translate(-5%,25%)}
          50%{transform:translate(-15%,10%)}
          60%{transform:translate(15%,0%)}
          70%{transform:translate(0%,15%)}
          80%{transform:translate(3%,35%)}
          90%{transform:translate(-10%,10%)}
        }
      `}</style>
      <div className="grain-overlay" aria-hidden="true" />
    </>
  )
}
