import { useEffect, useState } from "react";

export default function TapHint({
  storageKey = "tapHintSeen",
  color = "#C49A3C",
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(storageKey)) {
      setVisible(true);
    }
  }, [storageKey]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none",
        zIndex: 20,
        overflow: "visible",
      }}
    >
      <svg
        style={{
          position: "absolute",
          top: "50%",
          right: "40px",
          transform: "translateY(-50%)",
          overflow: "visible",
        }}
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
      >
        {/* גל ראשון */}
        <circle
          cx="60"
          cy="60"
          fill="none"
          stroke={color}
          strokeWidth="4"
        >
          <animate
            attributeName="r"
            values="4;35"
            dur="1.8s"
            begin="0.2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-opacity"
            values="0.9;0"
            dur="1.8s"
            begin="0.2s"
            repeatCount="indefinite"
          />
        </circle>

        {/* גל שני */}
        <circle
          cx="60"
          cy="60"
          fill="none"
          stroke={color}
          strokeWidth="3"
        >
          <animate
            attributeName="r"
            values="4;50"
            dur="1.8s"
            begin="0.45s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-opacity"
            values="0.7;0"
            dur="1.8s"
            begin="0.45s"
            repeatCount="indefinite"
          />
        </circle>

        {/* גל שלישי */}
        <circle
          cx="60"
          cy="60"
          fill="none"
          stroke={color}
          strokeWidth="2"
        >
          <animate
            attributeName="r"
            values="4;65"
            dur="1.8s"
            begin="0.7s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-opacity"
            values="0.4;0"
            dur="1.8s"
            begin="0.7s"
            repeatCount="indefinite"
          />
        </circle>

        {/* אצבע במרכז */}
        <text
          x="60"
          y="70"
          textAnchor="middle"
          fontSize="34"
        >
          👆
        </text>
      </svg>
    </div>
  );
}