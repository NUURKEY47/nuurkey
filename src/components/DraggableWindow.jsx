import React, { useState, useRef, useEffect } from "react";

export default function DraggableWindow({
  id,
  title,
  isOpen,
  zIndex,
  initialTop = 65,
  initialLeft = 180,
  widthClass = "w-[90vw] sm:w-[42vw] max-w-[500px]",
  onClose,
  onFocus,
  children,
}) {
  const [pos, setPos] = useState({ top: initialTop, left: initialLeft });
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const winRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const maxTop = window.innerHeight - 48;
      const nextLeft = e.clientX - dragOffset.current.x;
      const nextTop = Math.min(maxTop, Math.max(0, e.clientY - dragOffset.current.y));
      setPos({ left: nextLeft, top: nextTop });
    };

    const handleMouseUp = () => {
      if (isDragging) setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  if (!isOpen) return null;

  const handleHeaderMouseDown = (e) => {
    if (e.target.tagName === "BUTTON") return;
    onFocus(id);
    const rect = winRef.current.getBoundingClientRect();
    dragOffset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    setIsDragging(true);
  };

  return (
    <div
      ref={winRef}
      onMouseDown={() => onFocus(id)}
      style={{
        top: `${pos.top}px`,
        left: `${pos.left}px`,
        zIndex,
      }}
      className={`popup-card fixed ${widthClass} overflow-hidden`}
    >
      <div
        onMouseDown={handleHeaderMouseDown}
        className="studio-header draggable-bar mono text-xs"
      >
        <span>{title}</span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose(id);
          }}
          title="Close"
          className="px-1.5 hover:text-rose-400 cursor-pointer"
        >
          [x]
        </button>
      </div>

      <div className="window-scroll-area p-6 sm:p-7 max-h-[420px]">{children}</div>
    </div>
  );
}
