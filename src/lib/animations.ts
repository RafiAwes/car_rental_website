import { gsap } from 'gsap';

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Safe, resilient scroll reveal that guarantees visibility even in iframes
export const observeAndReveal = (
  container: HTMLElement | null,
  targetSelector: string,
  stagger = 0.12
) => {
  if (!container || typeof window === 'undefined') return () => {};

  const elements = container.querySelectorAll<HTMLElement>(targetSelector);
  if (!elements.length) return () => {};

  if (prefersReducedMotion()) {
    elements.forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return () => {};
  }

  // Safety fallback: if anything prevents the observer from firing, ensure 100% visibility
  const safetyTimeout = setTimeout(() => {
    elements.forEach((el) => {
      gsap.to(el, { opacity: 1, y: 0, clearProps: 'all', duration: 0.3 });
    });
  }, 800);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          clearTimeout(safetyTimeout);
          gsap.fromTo(
            elements,
            { opacity: 0.1, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              stagger,
              ease: 'power3.out',
              clearProps: 'all', // Clears inline styles so elements are permanently visible
            }
          );
          observer.disconnect();
        }
      });
    },
    { threshold: 0.05, rootMargin: '80px' }
  );

  observer.observe(container);

  return () => {
    clearTimeout(safetyTimeout);
    observer.disconnect();
  };
};

// 3D Card Tilt Effect for luxury fleet cards
export const attach3DCardTilt = (element: HTMLElement) => {
  if (prefersReducedMotion() || !element) return () => {};

  let bounds: DOMRect;

  const onMouseEnter = () => {
    bounds = element.getBoundingClientRect();
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!bounds) bounds = element.getBoundingClientRect();
    const mouseX = e.clientX - bounds.left;
    const mouseY = e.clientY - bounds.top;

    const xPct = mouseX / bounds.width - 0.5;
    const yPct = mouseY / bounds.height - 0.5;

    // Subtle 6-degree tilt for refined luxury
    const rotX = -yPct * 6;
    const rotY = xPct * 6;

    gsap.to(element, {
      rotateX: rotX,
      rotateY: rotY,
      transformPerspective: 1000,
      transformOrigin: 'center center',
      scale: 1.015,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const onMouseLeave = () => {
    gsap.to(element, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.6,
      ease: 'power3.out',
      clearProps: 'transform,scale',
    });
  };

  element.addEventListener('mouseenter', onMouseEnter);
  element.addEventListener('mousemove', onMouseMove);
  element.addEventListener('mouseleave', onMouseLeave);

  return () => {
    element.removeEventListener('mouseenter', onMouseEnter);
    element.removeEventListener('mousemove', onMouseMove);
    element.removeEventListener('mouseleave', onMouseLeave);
  };
};

export { gsap };
