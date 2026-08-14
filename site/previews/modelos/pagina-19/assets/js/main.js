const serviceCardsSection = document.querySelector("[data-service-cards]");
const servicePanels = Array.from(document.querySelectorAll(".service-panel"));
const deliverablesSection = document.querySelector("[data-deliverables]");
const painTitle = document.querySelector("[data-pain-title]");
const painCopy = document.querySelector("[data-pain-copy]");
const painCards = Array.from(document.querySelectorAll("[data-pain-card]"));
const differenceTitle = document.querySelector("[data-difference-title]");
const differenceCopy = document.querySelector("[data-difference-copy]");
const methodStepsSection = document.querySelector("[data-method-steps]");
const methodVisual = document.querySelector("[data-method-visual]");
const methodCards = Array.from(document.querySelectorAll("[data-method-card]"));
let differenceCopyWords = [];

let painTitleWords = [];
let painCopyWords = [];

if (painTitle) {
  const wrapWords = (element, wordClass) => {
    const parts = Array.from(element.childNodes);
    element.innerHTML = "";

    parts.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent
          .split(/(\s+)/)
          .forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) {
              element.appendChild(document.createTextNode(part));
              return;
            }
            const span = document.createElement("span");
            span.className = wordClass;
            span.textContent = part;
            element.appendChild(span);
          });
        return;
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        const wrapper = node.cloneNode(false);
        node.textContent
          .split(/(\s+)/)
          .forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) {
              wrapper.appendChild(document.createTextNode(part));
              return;
            }
            const span = document.createElement("span");
            span.className = wordClass;
            span.textContent = part;
            wrapper.appendChild(span);
          });
        element.appendChild(wrapper);
      }
    });
  };

  wrapWords(painTitle, "pain-points__word");
  painTitleWords = Array.from(painTitle.querySelectorAll(".pain-points__word"));

  if (painCopy) {
    const copyParagraph = painCopy.querySelector("p");
    if (copyParagraph) {
      wrapWords(copyParagraph, "pain-points__copy-word");
      painCopyWords = Array.from(copyParagraph.querySelectorAll(".pain-points__copy-word"));
    }
  }

  const painObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.24 });

  painObserver.observe(painTitle);
  if (painCopy) {
    painObserver.observe(painCopy);
  }

  painCards.forEach((card, index) => {
    painObserver.observe(card);
    card.style.transitionDelay = `${index * 90}ms`;
    const painIndex = card.querySelector(".pain-card__index");
    if (painIndex) {
      painIndex.style.transitionDelay = `${160 + index * 90}ms`;
    }
  });

  const updatePainWordsOnScroll = () => {
    const revealWords = (container, words, startOffset, endOffset) => {
      if (!container || !words.length) {
        return;
      }

      const rect = container.getBoundingClientRect();
      const start = window.innerHeight * startOffset;
      const end = window.innerHeight * endOffset;
      const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
      const visibleCount = Math.floor(progress * words.length);

      words.forEach((word, index) => {
        word.classList.toggle("is-visible", index <= visibleCount);
      });
    };

    revealWords(painTitle, painTitleWords, 0.9, 0.4);
    revealWords(painCopy, painCopyWords, 0.86, 0.34);
  };

  window.addEventListener("scroll", updatePainWordsOnScroll, { passive: true });
  window.addEventListener("resize", updatePainWordsOnScroll);
  updatePainWordsOnScroll();
}

if (differenceTitle || differenceCopy) {
  if (differenceCopy) {
    const words = differenceCopy.textContent.trim().split(/\s+/);
    differenceCopy.innerHTML = words
      .map((word) => `<span class="difference-block__copy-word">${word}&nbsp;</span>`)
      .join("");
    differenceCopyWords = Array.from(differenceCopy.querySelectorAll(".difference-block__copy-word"));
  }

  const differenceObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.24 });

  if (differenceTitle) {
    differenceObserver.observe(differenceTitle);
  }

  if (differenceCopy) {
    const differenceCopyWrap = differenceCopy.closest(".difference-block__copy");
    if (differenceCopyWrap) {
      differenceObserver.observe(differenceCopyWrap);
    }
  }

  const updateDifferenceCopyOnScroll = () => {
    if (!differenceCopyWords.length) {
      return;
    }

    const rect = differenceCopy.getBoundingClientRect();
    const start = window.innerHeight * 0.92;
    const end = window.innerHeight * 0.28;
    const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
    const visibleCount = Math.floor(progress * differenceCopyWords.length);

    differenceCopyWords.forEach((word, index) => {
      word.classList.toggle("is-visible", index <= visibleCount);
    });
  };

  window.addEventListener("scroll", updateDifferenceCopyOnScroll, { passive: true });
  window.addEventListener("resize", updateDifferenceCopyOnScroll);
  updateDifferenceCopyOnScroll();
}

if (serviceCardsSection) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const index = servicePanels.indexOf(entry.target);
      entry.target.style.transitionDelay = `${index * 90}ms`;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  servicePanels.forEach((panel) => {
    revealObserver.observe(panel);

    if (panel.classList.contains("service-panel--featured")) {
      return;
    }

    panel.addEventListener("mousemove", (event) => {
      const bounds = panel.getBoundingClientRect();
      panel.style.setProperty("--hover-x", `${event.clientX - bounds.left}px`);
      panel.style.setProperty("--hover-y", `${event.clientY - bounds.top}px`);
    });
  });

  const featuredShell = document.querySelector(".service-panel__shell");
  let shellAngle = 0;

  const animateShell = () => {
    if (featuredShell) {
      shellAngle = (shellAngle + 0.7) % 360;
      featuredShell.style.setProperty("--shell-angle", `${shellAngle}deg`);
    }

    requestAnimationFrame(animateShell);
  };

  animateShell();
}

if (methodStepsSection) {
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const updateMethodStepsOnScroll = () => {
    const viewportHeight = window.innerHeight;
    const start = viewportHeight * 0.88;
    const end = viewportHeight * 0.42;
    const visualRect = methodVisual?.getBoundingClientRect();

    if (visualRect) {
      const visualProgress = clamp((start - visualRect.top) / (start - end), 0, 1);
      methodStepsSection.style.setProperty("--method-visual-progress", visualProgress.toFixed(4));
    }

    methodCards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const delay = index * 0.08;
      const rawProgress = clamp((start - rect.top) / (start - end), 0, 1);
      const cardProgress = clamp((rawProgress - delay) / (1 - delay), 0, 1);
      card.style.setProperty("--card-progress", cardProgress.toFixed(4));
    });
  };

  window.addEventListener("scroll", updateMethodStepsOnScroll, { passive: true });
  window.addEventListener("resize", updateMethodStepsOnScroll);
  updateMethodStepsOnScroll();
}

if (deliverablesSection) {
  const track = deliverablesSection.querySelector("[data-deliverables-track]");
  const viewport = deliverablesSection.querySelector(".deliverables-cards-viewport");
  const cards = Array.from(deliverablesSection.querySelectorAll("[data-deliverable-card]"));
  const pagination = deliverablesSection.querySelector("[data-deliverables-pagination]");
  const desktopQuery = window.matchMedia("(min-width: 1024px)");
  const sectionState = {
    maxTranslate: 0,
    maxScroll: 0,
    cardScrollPoints: [],
    bullets: [],
    dragActive: false,
    dragStartX: 0,
    dragStartScrollY: 0,
    sectionTop: 0
  };

  if (pagination) {
    cards.forEach((_, index) => {
      const bullet = document.createElement("button");
      bullet.type = "button";
      bullet.setAttribute("aria-label", `Ir para etapa ${index + 1}`);
      pagination.appendChild(bullet);
      sectionState.bullets.push(bullet);
    });
  }

  const updateActiveBullet = (activeIndex) => {
    sectionState.bullets.forEach((bullet, index) => {
      bullet.classList.toggle("is-active", index === activeIndex);
    });
  };

  const calculateDeliverables = () => {
    if (!track) {
      return;
    }

    if (!viewport) {
      return;
    }

    const viewportWidth = viewport.clientWidth;
    const trackWidth = track.scrollWidth;
    sectionState.maxTranslate = Math.max(0, trackWidth - viewportWidth);
    sectionState.maxScroll = Math.max(1, sectionState.maxTranslate + window.innerHeight * (desktopQuery.matches ? 0.7 : 0.45));
    sectionState.sectionTop = window.scrollY + deliverablesSection.getBoundingClientRect().top;

    if (!desktopQuery.matches) {
      deliverablesSection.style.minHeight = `${window.innerHeight + sectionState.maxScroll}px`;
    } else {
      deliverablesSection.style.minHeight = `${window.innerHeight + sectionState.maxScroll}px`;
    }

    if (sectionState.maxTranslate === 0) {
      track.style.transform = "";
      sectionState.maxTranslate = 0;
      updateActiveBullet(0);
      return;
    }

    sectionState.cardScrollPoints = cards.map((card) => {
      const offset = Math.max(0, card.offsetLeft - viewportWidth * 0.5 + card.offsetWidth * 0.5);
      const progress = sectionState.maxTranslate === 0 ? 0 : offset / sectionState.maxTranslate;
      return progress * sectionState.maxScroll;
    });
  };

  const updateDeliverables = () => {
    if (!track || !viewport) {
      return;
    }

    const rect = deliverablesSection.getBoundingClientRect();
    const rawProgress = -rect.top;
    const clampedProgress = Math.max(0, Math.min(rawProgress, sectionState.maxScroll));
    const translateX = sectionState.maxScroll === 0
      ? 0
      : (clampedProgress / sectionState.maxScroll) * sectionState.maxTranslate;

    track.style.transform = `translateX(${-translateX}px)`;

    let activeIndex = 0;
    sectionState.cardScrollPoints.forEach((point, index) => {
      if (clampedProgress >= point - sectionState.maxScroll * 0.08) {
        activeIndex = index;
      }
    });
    updateActiveBullet(activeIndex);
  };

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  sectionState.bullets.forEach((bullet, index) => {
    bullet.addEventListener("click", () => {
      const sectionTop = window.scrollY + deliverablesSection.getBoundingClientRect().top;
      const target = sectionTop + (sectionState.cardScrollPoints[index] || 0);
      window.scrollTo({ top: target, behavior: "smooth" });
    });
  });

  const handleDeliverables = () => {
    calculateDeliverables();
    updateDeliverables();
  };

  if (viewport) {
    const endDrag = () => {
      sectionState.dragActive = false;
      viewport.style.cursor = "";
    };

    viewport.addEventListener("pointerdown", (event) => {
      if (desktopQuery.matches) {
        return;
      }

      sectionState.dragActive = true;
      sectionState.dragStartX = event.clientX;
      sectionState.dragStartScrollY = window.scrollY;
      viewport.style.cursor = "grabbing";
      viewport.setPointerCapture?.(event.pointerId);
    });

    viewport.addEventListener("pointermove", (event) => {
      if (!sectionState.dragActive || desktopQuery.matches) {
        return;
      }

      const deltaX = event.clientX - sectionState.dragStartX;
      const scrollDelta = -deltaX;
      const targetY = clamp(
        sectionState.dragStartScrollY + scrollDelta,
        sectionState.sectionTop,
        sectionState.sectionTop + sectionState.maxScroll
      );

      window.scrollTo({ top: targetY, behavior: "auto" });
    });

    viewport.addEventListener("pointerup", endDrag);
    viewport.addEventListener("pointercancel", endDrag);
    viewport.addEventListener("pointerleave", endDrag);
  }

  window.addEventListener("scroll", updateDeliverables, { passive: true });
  window.addEventListener("resize", handleDeliverables);
  desktopQuery.addEventListener("change", handleDeliverables);
  handleDeliverables();
}
