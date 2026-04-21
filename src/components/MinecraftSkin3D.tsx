import { useEffect, useRef } from "react";

interface Props {
  colors?: {
    head?: string;
    body?: string;
    legs?: string;
    arms?: string;
  };
  size?: number;
  floating?: boolean;
  delay?: number;
}

const MinecraftSkin3D = ({
  colors = {},
  size = 1,
  floating = true,
  delay = 0,
}: Props) => {
  const {
    head = "#f4c478",
    body = "#4ade80",
    legs = "#1e40af",
    arms = "#4ade80",
  } = colors;

  const animClass = floating
    ? delay === 0
      ? "animate-float"
      : delay === 1
      ? "animate-block-2"
      : "animate-block-3"
    : "";

  const s = size;

  return (
    <div
      className={`${animClass} cursor-3d inline-block`}
      style={{
        transformStyle: "preserve-3d",
        perspective: "400px",
      }}
    >
      <div
        className="cube-3d"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Head */}
        <div
          style={{
            width: `${32 * s}px`,
            height: `${32 * s}px`,
            background: head,
            margin: "0 auto",
            position: "relative",
            boxShadow: `inset -${4 * s}px -${4 * s}px 0 rgba(0,0,0,0.35), inset ${2 * s}px ${2 * s}px 0 rgba(255,255,255,0.2)`,
            imageRendering: "pixelated",
          }}
        >
          {/* Eyes */}
          <div
            style={{
              position: "absolute",
              bottom: `${8 * s}px`,
              left: `${6 * s}px`,
              width: `${6 * s}px`,
              height: `${4 * s}px`,
              background: "#1a1a2e",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: `${8 * s}px`,
              right: `${6 * s}px`,
              width: `${6 * s}px`,
              height: `${4 * s}px`,
              background: "#1a1a2e",
            }}
          />
          {/* Mouth */}
          <div
            style={{
              position: "absolute",
              bottom: `${4 * s}px`,
              left: `${8 * s}px`,
              width: `${16 * s}px`,
              height: `${2 * s}px`,
              background: "#8b4513",
            }}
          />
        </div>

        {/* Body */}
        <div
          style={{
            width: `${32 * s}px`,
            height: `${32 * s}px`,
            background: body,
            margin: "0 auto",
            position: "relative",
            boxShadow: `inset -${4 * s}px -${4 * s}px 0 rgba(0,0,0,0.3), inset ${2 * s}px ${2 * s}px 0 rgba(255,255,255,0.15)`,
          }}
        />

        {/* Arms + Legs */}
        <div style={{ display: "flex", justifyContent: "center", gap: 0 }}>
          {/* Left arm */}
          <div
            style={{
              width: `${8 * s}px`,
              height: `${32 * s}px`,
              background: arms,
              boxShadow: `inset -${3 * s}px -${3 * s}px 0 rgba(0,0,0,0.3)`,
              marginTop: `-${32 * s}px`,
              marginLeft: `-${8 * s}px`,
            }}
          />
          {/* Space */}
          <div style={{ width: `${32 * s}px` }} />
          {/* Right arm */}
          <div
            style={{
              width: `${8 * s}px`,
              height: `${32 * s}px`,
              background: arms,
              boxShadow: `inset -${3 * s}px -${3 * s}px 0 rgba(0,0,0,0.3)`,
              marginTop: `-${32 * s}px`,
            }}
          />
        </div>

        {/* Legs */}
        <div style={{ display: "flex", justifyContent: "center", gap: `${2 * s}px` }}>
          <div
            style={{
              width: `${14 * s}px`,
              height: `${32 * s}px`,
              background: legs,
              boxShadow: `inset -${3 * s}px -${3 * s}px 0 rgba(0,0,0,0.35)`,
            }}
          />
          <div
            style={{
              width: `${14 * s}px`,
              height: `${32 * s}px`,
              background: legs,
              boxShadow: `inset -${3 * s}px -${3 * s}px 0 rgba(0,0,0,0.35)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MinecraftSkin3D;
