const ctaButton = document.querySelector(".hero__button");
const audienceCard = document.querySelector(".audience__card");
const showcaseSection = document.querySelector(".showcase");
const showcaseRevealItems = document.querySelectorAll(".showcase__feature, .showcase__card");
const benefitsSection = document.querySelector(".benefits");
const benefitsRevealItems = document.querySelectorAll(".benefits__item");
const testimonialsSection = document.querySelector(".testimonials");
const testimonialCards = document.querySelectorAll(".testimonial-card");
const ctaSection = document.querySelector(".cta-section");
const ctaTitle = document.querySelector(".cta-section__title");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const setupScrollWordsTitle = (element) => {
  if (!element) {
    return [];
  }

  const originalText = element.textContent.trim();
  element.setAttribute("aria-label", originalText);
  element.textContent = "";
  element.classList.add("is-split");

  return originalText.split(/\s+/).map((word, index, words) => {
    const wordSpan = document.createElement("span");
    wordSpan.className = "cta-section__title-word";
    wordSpan.setAttribute("aria-hidden", "true");
    wordSpan.textContent = word;
    element.appendChild(wordSpan);

    if (index < words.length - 1) {
      const spaceSpan = document.createElement("span");
      spaceSpan.className = "cta-section__title-space";
      spaceSpan.setAttribute("aria-hidden", "true");
      spaceSpan.textContent = "\u00A0";
      element.appendChild(spaceSpan);
    }

    return wordSpan;
  });
};

const ctaTitleWords = reduceMotion.matches ? [] : setupScrollWordsTitle(ctaTitle);

if (ctaButton) {
  ctaButton.addEventListener("click", (event) => {
    event.preventDefault();
  });
}

if (audienceCard) {
  if (reduceMotion.matches) {
    audienceCard.classList.add("is-visible");
  } else {
    const revealAudienceCard = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          audienceCard.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    revealAudienceCard.observe(audienceCard);
  }
}

if (showcaseRevealItems.length > 0) {
  if (reduceMotion.matches) {
    showcaseRevealItems.forEach((item) => {
      item.classList.add("is-visible");
    });
  } else {
    showcaseRevealItems.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${index * 130}ms`);
    });

    const revealShowcaseCards = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          showcaseRevealItems.forEach((item) => {
            item.classList.add("is-visible");
          });

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -64px 0px",
      }
    );

    revealShowcaseCards.observe(showcaseSection);
  }
}

if (benefitsRevealItems.length > 0) {
  if (reduceMotion.matches) {
    benefitsRevealItems.forEach((item) => {
      item.classList.add("is-visible");
    });
  } else {
    benefitsRevealItems.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${index * 120}ms`);
    });

    const revealBenefitsItems = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          benefitsRevealItems.forEach((item) => {
            item.classList.add("is-visible");
          });

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -56px 0px",
      }
    );

    if (benefitsSection) {
      revealBenefitsItems.observe(benefitsSection);
    }
  }
}

if (testimonialCards.length > 0) {
  if (reduceMotion.matches) {
    testimonialCards.forEach((item) => {
      item.classList.add("is-visible");
    });
  } else {
    testimonialCards.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${index * 140}ms`);
    });

    const revealTestimonials = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          testimonialCards.forEach((item) => {
            item.classList.add("is-visible");
          });

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -56px 0px",
      }
    );

    if (testimonialsSection) {
      revealTestimonials.observe(testimonialsSection);
    }
  }
}

if (ctaTitle) {
  if (reduceMotion.matches) {
    ctaTitle.classList.remove("is-split");
  } else {
    let ticking = false;

    const updateCtaTitleProgress = () => {
      ticking = false;

      if (!ctaSection || ctaTitleWords.length === 0) {
        return;
      }

      const rect = ctaSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const maxScroll = document.documentElement.scrollHeight - viewportHeight;
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const isAtPageEnd = maxScroll <= 0 || scrollY >= maxScroll - 4;
      const start = viewportHeight * 0.88;
      const end = viewportHeight * 0.26;
      const baseProgress = clamp((start - rect.top) / (start - end), 0, 1);
      const progress = isAtPageEnd ? 1 : baseProgress;
      const revealSpan = 1.25;

      ctaTitleWords.forEach((word, index) => {
        const wordProgress = clamp(progress * ctaTitleWords.length - index + revealSpan, 0, 1);
        const opacity = 0.12 + wordProgress * 0.88;
        const translateY = (1 - wordProgress) * 0.24;
        const blur = (1 - wordProgress) * 8;

        word.style.opacity = `${opacity}`;
        word.style.transform = `translate3d(0, ${translateY}em, 0)`;
        word.style.filter = `blur(${blur}px)`;
      });
    };

    const requestCtaTitleUpdate = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateCtaTitleProgress);
    };

    updateCtaTitleProgress();
    window.addEventListener("scroll", requestCtaTitleUpdate, { passive: true });
    window.addEventListener("resize", requestCtaTitleUpdate);
  }
}
