const flipBook = (elBook) => {
  elBook.style.setProperty("--c", 0); 
  elBook.querySelectorAll(".page").forEach((page, i) => {
      page.style.setProperty("--i", i);
      page.addEventListener("click", (evt) => {
          const c = !!evt.target.closest(".back") ? i : i + 1;
          elBook.style.setProperty("--c", c);
      });
  });
};

document.querySelectorAll(".book").forEach(flipBook);