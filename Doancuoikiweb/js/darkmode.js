document.querySelector(".toggle input").addEventListener("change", (evt) => {
    document.documentElement.dataset.mode = evt.currentTarget.checked ? "dark" : "light";
  });
  