import { useEffect, useRef, useState } from "react";

/**
 * Reveal — a scroll-triggered animation wrapper.
 * Fades/slides its children into view the first time they enter the viewport.
 *
 * Props:
 *  - variant: 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade'
 *  - delay:   transition delay in ms (used to stagger grids)
 *  - className: extra classes applied to the wrapper
 *  - as:       HTML tag to render (default 'div')
 */
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback for environments without IntersectionObserver
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
