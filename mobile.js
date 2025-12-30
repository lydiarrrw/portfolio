function addArticleListeners() {
  const navItems = document.getElementsByClassName(
    "article__article-items-container"
  );
  const webContainer = document.querySelector(".web-container--name");
  const closeButtons = document.getElementsByClassName(
    "article__article-items-close"
  );

  function removeHoverEffects() {
    for (const item of navItems) {
      item.classList.remove("hover-effect");
    }
  }

  for (const item of navItems) {
    item.addEventListener("click", () => {
      const isActive = item.classList.contains("hover-effect");

      if (isActive) return;

      removeHoverEffects();
      item.classList.add("hover-effect");

      // Scroll to top
      // const yOffset = -80; // adjust if needed
      const y =
        // item.getBoundingClientRect().top + window.pageYOffset + yOffset;
        item.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
    });
  }

  for (const closeButton of closeButtons) {
    closeButton.addEventListener("click", (event) => {
      event.stopPropagation();

      const container = closeButton.closest(
        ".article__article-items-container"
      );

      if (container) {
        container.classList.remove("hover-effect");
      }
    });
  }

  webContainer.addEventListener("click", () => {
    removeHoverEffects();
  });
}

addArticleListeners();
