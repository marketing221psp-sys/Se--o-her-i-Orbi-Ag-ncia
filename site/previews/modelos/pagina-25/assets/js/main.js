const navLinks = document.querySelectorAll(".main-nav a");
const hero = document.querySelector(".hero");
const revealLayer = document.querySelector(".hero-reveal");
const maskCanvas = document.querySelector(".hero-mask-canvas");
const maskContext = maskCanvas?.getContext("2d");
const impactSection = document.querySelector(".impact-section");
const storySections = document.querySelectorAll(".story-section");
const principlesHeading = document.querySelector(".principles-heading");
const principleItems = document.querySelectorAll(".principle-item");
const videoSection = document.querySelector(".video-section");
const videoSticky = document.querySelector(".video-section__sticky");
const videoMedia = document.querySelector(".video-section__media");
const videoHeading = document.querySelector(".video-section__heading");
const videoCards = document.querySelectorAll(".video-card");
const finePointer = window.matchMedia("(pointer: fine)");
const desktopLayout = window.matchMedia("(min-width: 901px)");

let rawMouse = { x: 0, y: 0 };
let smoothMouse = { x: 0, y: 0 };
let isHovering = false;
let frameId = 0;

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("is-current"));
    link.classList.add("is-current");
  });
});

function setHeroCenter() {
  if (!hero) return;

  const rect = hero.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  rawMouse = { x: centerX, y: centerY };
  smoothMouse = { x: centerX, y: centerY };
}

function resizeCanvas() {
  if (!maskCanvas) return;

  maskCanvas.width = window.innerWidth;
  maskCanvas.height = window.innerHeight;
}

function clearReveal() {
  if (!maskCanvas || !maskContext || !revealLayer || !hero) return;

  maskContext.clearRect(0, 0, maskCanvas.width, maskCanvas.height);
  revealLayer.style.maskImage = "none";
  revealLayer.style.webkitMaskImage = "none";
  hero.classList.remove("hero--hovering");
}

function drawReveal(cursorX, cursorY) {
  if (!maskCanvas || !maskContext || !revealLayer || !hero) return;

  maskContext.clearRect(0, 0, maskCanvas.width, maskCanvas.height);

  const radius = 260;
  const gradient = maskContext.createRadialGradient(
    cursorX,
    cursorY,
    0,
    cursorX,
    cursorY,
    radius
  );

  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.4, "rgba(255,255,255,1)");
  gradient.addColorStop(0.6, "rgba(255,255,255,0.75)");
  gradient.addColorStop(0.75, "rgba(255,255,255,0.4)");
  gradient.addColorStop(0.88, "rgba(255,255,255,0.12)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");

  maskContext.fillStyle = gradient;
  maskContext.beginPath();
  maskContext.arc(cursorX, cursorY, radius, 0, Math.PI * 2);
  maskContext.fill();

  const maskUrl = `url(${maskCanvas.toDataURL()})`;
  revealLayer.style.maskImage = maskUrl;
  revealLayer.style.webkitMaskImage = maskUrl;
  hero.classList.add("hero--hovering");
}

function animateReveal() {
  smoothMouse.x += (rawMouse.x - smoothMouse.x) * 0.1;
  smoothMouse.y += (rawMouse.y - smoothMouse.y) * 0.1;

  if (finePointer.matches && isHovering) {
    drawReveal(smoothMouse.x, smoothMouse.y);
  } else {
    clearReveal();
  }

  frameId = requestAnimationFrame(animateReveal);
}

if (hero && revealLayer && maskCanvas && maskContext) {
  resizeCanvas();
  setHeroCenter();
  clearReveal();
  animateReveal();

  hero.addEventListener("mousemove", (event) => {
    rawMouse = { x: event.clientX, y: event.clientY };
    isHovering = true;
  });

  hero.addEventListener("mouseenter", (event) => {
    rawMouse = { x: event.clientX, y: event.clientY };
    isHovering = true;
  });

  hero.addEventListener("mouseleave", () => {
    isHovering = false;
    setHeroCenter();
    clearReveal();
  });

  window.addEventListener("resize", () => {
    resizeCanvas();

    if (!isHovering) {
      setHeroCenter();
      clearReveal();
    }
  });

  window.addEventListener("beforeunload", () => {
    cancelAnimationFrame(frameId);
  });
}

function initScrollScene() {
  if (!hero || !impactSection || !window.gsap || !window.ScrollTrigger || window.innerWidth <= 900) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const impactTitle = impactSection.querySelector("h2");
  const impactCards = gsap.utils.toArray(".impact-card");
  const cardStartStates = [
    { opacity: 0, filter: "blur(12px)", scale: 0.98, rotate: -1 },
    { opacity: 0, filter: "blur(14px)", scale: 0.98, rotate: 0 },
    { opacity: 0, filter: "blur(12px)", scale: 0.98, rotate: 1 },
  ];

  gsap.set(hero, { autoAlpha: 1, "--hero-scroll-blur-opacity": 0 });
  gsap.set(".hero-content", { y: 0, opacity: 1, filter: "blur(0px)" });
  gsap.set(impactSection, { opacity: 0, "--impact-blur": "18px" });
  gsap.set(impactTitle, { opacity: 0, filter: "blur(8px)" });
  gsap.set(impactCards, {
    transformPerspective: 1200,
    transformOrigin: "center bottom",
    force3D: true,
  });
  impactCards.forEach((card, index) => {
    gsap.set(card, cardStartStates[index] || cardStartStates[0]);
  });

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".page-shell",
      start: "top top",
      end: "+=115%",
      scrub: 0.24,
      pin: hero,
      pinSpacing: false,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  timeline
    .to(hero, { "--hero-scroll-blur-opacity": 1, autoAlpha: 0.08, duration: 0.95, ease: "none" }, 0)
    .to(
      ".hero-content",
      { opacity: 0, filter: "blur(4px)", duration: 0.68, ease: "none" },
      0
    )
    .to(impactSection, { opacity: 1, "--impact-blur": "28px", duration: 0.9, ease: "none" }, 0.05)
    .to(
      impactTitle,
      { opacity: 1, filter: "blur(0px)", duration: 0.5, ease: "none" },
      0.18
    );

  impactCards.forEach((card, index) => {
    timeline.to(
      card,
      {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        rotate: 0,
        duration: 0.24,
        ease: "none",
      },
      0.22 + index * 0.04
    );
  });
}

initScrollScene();

function initMobileImpactSection() {
  if (!impactSection || !window.gsap || !window.ScrollTrigger || desktopLayout.matches) return;

  gsap.registerPlugin(ScrollTrigger);

  const impactTitle = impactSection.querySelector("h2");
  const impactCards = gsap.utils.toArray(".impact-card");
  const impactCta = impactSection.querySelector(".impact-cta");

  if (impactTitle) {
    gsap.fromTo(
      impactTitle,
      { opacity: 0, y: 28, filter: "blur(12px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        ease: "none",
        scrollTrigger: {
          trigger: impactTitle,
          start: "top 88%",
          end: "top 58%",
          scrub: 0.3,
        },
      }
    );
  }

  impactCards.forEach((card, index) => {
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 42,
        filter: "blur(14px)",
        scale: 0.96,
        rotate: index === 1 ? 0 : index === 0 ? -1 : 1,
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        rotate: 0,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "top 62%",
          scrub: 0.32,
        },
      }
    );
  });

  if (impactCta) {
    gsap.fromTo(
      impactCta,
      { opacity: 0, y: 24, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        ease: "none",
        scrollTrigger: {
          trigger: impactCta,
          start: "top 92%",
          end: "top 72%",
          scrub: 0.25,
        },
      }
    );
  }
}

initMobileImpactSection();

function initStorySections() {
  if (!storySections.length || !window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  storySections.forEach((section) => {
    const target = section.querySelector("[data-split='words']");
    if (!target || target.dataset.splitReady === "true") return;

    const text = target.textContent.trim();
    const words = text.split(/\s+/);
    target.innerHTML = words
      .map((word) => `<span class="word">${word}</span>`)
      .join(" ");
    target.dataset.splitReady = "true";

    const wordEls = target.querySelectorAll(".word");
    gsap.to(wordEls, {
      opacity: 1,
      ease: "none",
      stagger: 0.5,
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  });
}

initStorySections();

function initPrinciplesSection() {
  if (!principleItems.length || !window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);
  const isDesktop = desktopLayout.matches;

  if (principlesHeading) {
    gsap.set(principlesHeading, {
      y: 26,
      opacity: 0,
      filter: "blur(14px)",
      force3D: true,
    });

    gsap.to(principlesHeading, {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      ease: "none",
      scrollTrigger: {
        trigger: ".principles-section",
        start: isDesktop ? "top 82%" : "top 86%",
        end: isDesktop ? "top 46%" : "top 58%",
        scrub: 0.32,
      },
    });
  }

  gsap.set(principleItems, {
    y: 54,
    opacity: 0,
    filter: "blur(12px)",
    scale: 0.96,
    transformOrigin: "center bottom",
    force3D: true,
  });

  gsap.to(principleItems, {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    ease: "none",
    stagger: 0.12,
    scrollTrigger: {
      trigger: ".principles-section",
      start: isDesktop ? "top 72%" : "top 78%",
      end: isDesktop ? "top 28%" : "bottom 58%",
      scrub: 0.35,
    },
  });
}

initPrinciplesSection();

function initVideoSection() {
  if (
    !videoSection ||
    !videoSticky ||
    !videoCards.length ||
    !window.gsap ||
    !window.ScrollTrigger
  ) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  const isDesktop = desktopLayout.matches;

  if (videoHeading) {
    gsap.set(videoHeading, {
      opacity: 0,
      y: isDesktop ? 18 : 22,
      filter: "blur(14px)",
      force3D: true,
    });
  }

  videoCards.forEach((card) => {
    const direction = card.classList.contains("video-card--left") ? -1 : 1;

    gsap.set(card, {
      opacity: 0,
      x: direction * (isDesktop ? 90 : 38),
      y: isDesktop ? 70 : 44,
      filter: "blur(16px)",
      scale: 0.94,
      force3D: true,
      transformOrigin: "center center",
    });
  });

  const sectionTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: videoSection,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.25,
      pin: isDesktop ? videoSticky : false,
      pinSpacing: false,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  if (videoHeading) {
    sectionTimeline.to(
      videoHeading,
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        ease: "none",
        duration: 0.16,
      },
      0.04
    );

    sectionTimeline.to(
      videoHeading,
      {
        opacity: isDesktop ? 0.34 : 0.78,
        y: -10,
        filter: isDesktop ? "blur(2px)" : "blur(0px)",
        ease: "none",
        duration: 0.2,
      },
      isDesktop ? 0.42 : 0.48
    );

    if (isDesktop) {
      sectionTimeline.to(
        videoHeading,
        {
          opacity: 0,
          y: -30,
          filter: "blur(8px)",
          ease: "none",
          duration: 0.16,
        },
        0.78
      );
    }
  }

  videoCards.forEach((card, index) => {
    sectionTimeline.to(
      card,
      {
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        ease: "none",
        duration: 0.16,
      },
      0.14 + index * 0.16
    );
  });
}

initVideoSection();

if (videoMedia && window.ScrollTrigger) {
  videoMedia.addEventListener("loadedmetadata", () => {
    ScrollTrigger.refresh();
  });
}
