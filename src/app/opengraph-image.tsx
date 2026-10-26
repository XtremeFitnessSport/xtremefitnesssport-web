import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt =
  "Xtreme Fitness Sport: gimnasio en Tarapoto y Pucallpa, selva del Perú";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#090b08",
        color: "#f2f3ed",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "64px 70px",
        justifyContent: "space-between",
        borderLeft: "16px solid #18f000",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 24,
        }}
      >
        <span>XTREME FITNESS SPORT</span>
        <span style={{ color: "#18f000" }}>PERÚ / AMAZONÍA</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 82,
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: -3,
        }}
      >
        <span>ENTRENA A TU NIVEL.</span>
        <span style={{ color: "#18f000" }}>SUPERA EL TUYO.</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <span style={{ fontSize: 30 }}>Gimnasio en Tarapoto + Pucallpa</span>
        <span style={{ fontSize: 20, color: "#b4b9af" }}>
          Máquinas · Planes y precios · Horarios · Todos los niveles
        </span>
      </div>
    </div>,
    size,
  );
}
