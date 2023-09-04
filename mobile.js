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
      if (item.classList.contains("hover-effect")) {
        item.classList.remove("hover-effect");
      }
    }
  }

  for (const item of navItems) {
    item.addEventListener("click", () => {
      removeHoverEffects();
      item.classList.toggle("hover-effect");
    });
  }

  for (const closeButton of closeButtons) {
    closeButton.addEventListener("click", (event) => {
      event.stopPropagation(); 
      const container = closeButton.closest(".article__article-items-container");
      container.classList.remove("hover-effect");
    });
  }

  webContainer.addEventListener("click", () => {
    removeHoverEffects();
  });
}

addArticleListeners();
