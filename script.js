document.addEventListener("DOMContentLoaded", function() {
    const closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener("click", function() {
        document.querySelector(".top-header").style.display = "none";
    });
});
