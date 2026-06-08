import { useEffect, useState } from "react";

export default function TapHint({
  storageKey = "tapHintSeen",
  color = "#ffffff",
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
        inset: 0,
        pointerEvents: "none",
        zIndex: 999,
      }}
    >
      <svg
        width="140"
        height="140"
        viewBox="0 0 140 140"
        style={{
          position: "absolute",
          top: "50%",
          right: "40px",
          transform: "translateY(-50%)",
          overflow: "visible",
        }}
      >
        {/* גל 1 */}
        <circle cx="70" cy="70" r="8" fill="none" stroke={color} strokeWidth="3">
          <animate
            attributeName="r"
            values="8;45"
            dur="1.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.9;0"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>

        {/* גל 2 */}
        <circle cx="70" cy="70" r="8" fill="none" stroke={color} strokeWidth="3">
          <animate
            attributeName="r"
            values="8;60"
            dur="1.5s"
            begin="0.3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.7;0"
            dur="1.5s"
            begin="0.3s"
            repeatCount="indefinite"
          />
        </circle>

        {/* גל 3 */}
        <circle cx="70" cy="70" r="8" fill="none" stroke={color} strokeWidth="2">
          <animate
            attributeName="r"
            values="8;75"
            dur="1.5s"
            begin="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.5;0"
            dur="1.5s"
            begin="0.6s"
            repeatCount="indefinite"
          />
        </circle>

        {/* היד */}
        <image
          href="./tap.png"
          x="20"
          y="20"
          width="100"
          height="100"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0;0 8;0 0"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </image>
      </svg>
    </div>
  );
}