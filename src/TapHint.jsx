import { useEffect, useState } from "react";

    
    export default function TapHint({
  storageKey = "tapHintSeen",
  color = "#C49A3C"
}) {


    const dismiss = () => {
  localStorage.setItem(storageKey, "true");
  setVisible(false);

  if (onDismiss) {
    onDismiss();
  }
};
const [visible, setVisible] = useState(false);

 useEffect(() => {
  if (!localStorage.getItem(storageKey)) {
    setVisible(true);
  }
}, [storageKey]);

  if (!visible) return null;

  return (
    <div style={{
      position: "absolute",
      top: 0, left: 0, right: 0, bottom: 0,
      pointerEvents: "none",
      zIndex: 20,
      overflow: "visible",
    }}>
      <svg
        style={{
          position: "absolute",
          top: "50%",
          right: "50px",
          transform: "translateY(-50%)",
          overflow: "visible",
        }}
        width="56" height="56" viewBox="0 0 56 56"
        fill="none"
      >
        <circle cx="28" cy="28" fill="none" stroke={color} strokeWidth="2">
          <animate attributeName="r" values="2;20" dur="1.8s" begin="0.2s" repeatCount="indefinite"/>
          <animate attributeName="stroke-opacity" values="0.85;0" dur="1.8s" begin="0.2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="28" cy="28" fill="none" stroke={color} strokeWidth="1.6">
          <animate attributeName="r" values="2;28" dur="1.8s" begin="0.45s" repeatCount="indefinite"/>
          <animate attributeName="stroke-opacity" values="0.6;0" dur="1.8s" begin="0.45s" repeatCount="indefinite"/>
        </circle>
        <circle cx="28" cy="28" fill="none" stroke={color} strokeWidth="1.2">
          <animate attributeName="r" values="2;36" dur="1.8s" begin="0.7s" repeatCount="indefinite"/>
          <animate attributeName="stroke-opacity" values="0.35;0" dur="1.8s" begin="0.7s" repeatCount="indefinite"/>
        </circle>
      </svg>
    </div>
  );
}