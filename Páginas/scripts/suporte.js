//Tópicos expansiveis.
document.addEventListener("click", (e) => {
    if (e.target.tagName === "SUMMARY") {
      document.querySelectorAll("details[open]").forEach((el) => {
        if (el !== e.target.parentElement) {
          el.removeAttribute("open");
        }
      });
    }
  });