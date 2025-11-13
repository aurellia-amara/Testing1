document.querySelectorAll("#faculty-list li").forEach((li) => {
  li.addEventListener("click", () => {
    const faculty = li.dataset.faculty;
    alert(`Menampilkan menu best seller untuk: ${faculty}`);
  });
});

document.getElementById("explore-btn").addEventListener("click", () => {
  window.scrollTo({ top: 1000, behavior: "smooth" });
});
