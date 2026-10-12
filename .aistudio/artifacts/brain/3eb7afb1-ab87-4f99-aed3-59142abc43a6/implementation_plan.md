# Luxury GSAP Motion & Interaction Plan

Integrate **GSAP (GreenSock)** and **ScrollTrigger** to elevate the Driveo Exclusive experience with bespoke, whisper-quiet luxury motion, cinematic typography reveals, interactive 3D card tilt with inertia, and scroll-triggered entrances.

## User Review & Critical Decisions

> [!IMPORTANT]
> The animation direction was confirmed by the user in Phase 1:

- **Confirmed Motion Style**: Subtle bespoke luxury pacing with smooth reveal and inertia (gentle ease curves like `power3.out` and `expo.out`, avoiding cartoonish or jarring bouncy effects).
- **Target Areas**:
  1. **Hero Viewport**: Staggered typography reveal, unboxed metadata slide, and dispatch chip inertia.
  2. **Fleet Cards**: Interactive 3D mouse perspective tilt with smooth damping and luxury metallic sheen.
  3. **Scroll Fade-Ins**: Section headers, 4 services, 4 city hubs, and 3-step process cards smoothly revealing as the client scrolls.

---

## 1. Architecture & Library Setup

- **Dependency**: Install `gsap` via `install_applet_package`.
- **Plugin Integration**: Import and register `ScrollTrigger` from `gsap/ScrollTrigger`.
- **Lifecycle Management**: Wrap all animations in `gsap.context()` within React `useEffect` hooks to guarantee leak-free cleanup and prevent state conflicts across route switches.
- **Accessibility**: Honor `window.matchMedia('(prefers-reduced-motion: reduce)')` to automatically bypass heavy transitions when reduced motion is preferred.

---

## 2. Animation Specs & Interactions

### A. Hero Cinematic Entrance (`src/components/Hero.tsx`)
- **Headline Split Reveal**:
  - Line 1 (*"Private chauffeur service."*) and Line 2 (*"Arrive in absolute silence."*) emerge with a staggered `y: 40 -> 0`, `opacity: 0 -> 1` over `1.2s` using `power3.out`.
- **Value Elements Stagger**:
  - Unboxed kicker badge slides in at `0.1s`.
  - Subtitle paragraph fades in at `0.5s`.
  - Primary "Request quote" CTA and secondary buttons rise at `0.7s`.
  - City dispatch chips ripple sequentially (`stagger: 0.08s`).
- **4 Value Pillars**:
  - Border and items (01, 02, 03, 04) reveal smoothly with subtle gold sheen glow.

### B. Fleet Cards 3D Interactive Tilt (`src/components/FleetSection.tsx`)
- **Interactive Gyro / Mouse Tilt**:
  - On mouse move over the Business Class, First Class, and Business Van cards:
    - Subtle 3D rotation (`rotateX: -5deg to 5deg`, `rotateY: -5deg to 5deg`).
    - Dynamic specular light reflection that follows the cursor.
  - On mouse leave: smooth spring-damped return to flat `rotateX: 0, rotateY: 0` (`duration: 0.8s, ease: "power2.out"`).

### C. Scroll-Triggered Section Entrances
- **Services Section (`ServicesSection.tsx`)**:
  - Cards slide up into place as they enter the viewport (`y: 45, opacity: 0, stagger: 0.18s`).
- **Operating Cities (`CitiesSection.tsx`)**:
  - London, Paris, Bulgaria, and Dubai cards ripple in with a refined staggered entrance.
- **Process Steps (`ProcessSection.tsx`)**:
  - Steps 01, 02, and 03 illuminate in sequence with progress indicator animation.
- **Radar Dashboard (`FlightTrackerDemo.tsx`)**:
  - Subtle rotating pulse and radar telemetry sweep animation.

---

## 3. Implementation Steps

1. **Package Installation**: Run `install_applet_package` for `["gsap"]`.
2. **Animation Utility / Hooks**: Create `src/lib/animations.ts` with reusable GSAP presets (`fadeUp`, `staggerReveal`, `cardTilt3D`).
3. **Hero Motion Integration**: Apply timeline and context in `src/components/Hero.tsx`.
4. **Fleet 3D Card Interaction**: Implement interactive tilt with cursor tracking in `src/components/FleetSection.tsx`.
5. **ScrollTrigger Section Upgrades**: Attach smooth triggers to `ServicesSection.tsx`, `CitiesSection.tsx`, and `ProcessSection.tsx`.
6. **Build & Quality Check**: Run `compile_applet` and `lint_applet` to verify zero runtime or type errors.
