import React, { useState, useRef, useEffect } from "react";

export default function DraggableWindow({
  id,
  title,
  isOpen,
  zIndex,
  initialTop = 65,
  widthClass = "w-[92vw] sm:w-[46vw] max-w-[560px]",
  onClose,
  onFocus,
  children,
}) {
  const [pos, setPos] = useState({ top: initialTop, left: null });
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const winRef = useRef(null);

  // Automatically center the window horizontally on ANY screen size (Mobile, Tablet, Desktop) when opened or resized!
  useEffect(() => {
    if (!isOpen) return;

    const centerWindow = () => {
      if (!winRef.current) return;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const rect = winRef.current.getBoundingClientRect();
      const centeredLeft = Math.max(12, Math.round((vw - rect.width) / 2));
      const safeTop = vw < 640 ? 64 : Math.min(initialTop, Math.max(56, vh - rect.height - 40));
      setPos({ top: safeTop, left: centeredLeft });
    };

    // Run immediately on open and on window resize
    requestAnimationFrame(centerWindow);
    window.addEventListener("resize", centerWindow);
    return () => window.removeEventListener("resize", centerWindow);
  }, [isOpen, initialTop]);

  useEffect(() => {
    const handleMove = (clientX, clientY) => {
      if (!isDragging || !winRef.current) return;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const rect = winRef.current.getBoundingClientRect();

      // Strictly clamp left and top so the window (and [x] button!) can NEVER go off-screen
      const minLeft = 8;
      const maxLeft = Math.max(8, vw - rect.width - 8);
      const minTop = 8;
      const maxTop = vh - 52;

      const nextLeft = Math.min(maxLeft, Math.max(minLeft, clientX - dragOffset.current.x));
      const nextTop = Math.min(maxTop, Math.max(minTop, clientY - dragOffset.current.y));
      setPos({ left: nextLeft, top: nextTop });
    };

    const handleMouseMove = (e) => handleMove(e.clientX, e.clientY);
    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleEnd = () => {
      if (isDragging) setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging]);

  if (!isOpen) return null;

  const startDrag = (clientX, clientY, targetTag) => {
    if (targetTag === "BUTTON") return;
    onFocus(id);
    const rect = winRef.current.getBoundingClientRect();
    dragOffset.current = {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
    setIsDragging(true);
  };

  return (
    <div
      ref={winRef}
      onMouseDown={() => onFocus(id)}
      style={{
        top: `${pos.top}px`,
        left: pos.left !== null ? `${pos.left}px` : "50%",
        transform: pos.left !== null ? "none" : "translateX(-50%)",
        zIndex,
      }}
      className={`popup-card fixed ${widthClass} overflow-hidden`}
    >
      <div
        onMouseDown={(e) => startDrag(e.clientX, e.clientY, e.target.tagName)}
        onTouchStart={(e) => {
          if (e.touches && e.touches[0]) {
            startDrag(e.touches[0].clientX, e.touches[0].clientY, e.target.tagName);
          }
        }}
        className="studio-header draggable-bar mono text-xs sm:text-sm"
      >
        <span className="truncate pr-2">{title}</span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose(id);
          }}
          title="Close"
          className="px-2.5 py-0.5 rounded bg-white/10 hover:bg-rose-500/80 text-white font-semibold shrink-0 cursor-pointer"
        >
          [x]
        </button>
      </div>

      <div className="window-scroll-area p-5 sm:p-7 max-h-[70vh] sm:max-h-[430px]">
        {children}
      </div>
    </div>
  );
}
