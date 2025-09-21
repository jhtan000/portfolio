document.addEventListener("DOMContentLoaded", () => {
    const learnMoreButtons = document.querySelectorAll(".learn-more-btn");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close");
  
    // Open modal
    learnMoreButtons.forEach(button => {
      button.addEventListener("click", () => {
        const projectId = button.getAttribute("data-project");
        const modal = document.getElementById(projectId);
        if (modal) {
          modal.style.display = "block";
        }
      });
    });
  
    // Close modal (X button)
    closeButtons.forEach(closeBtn => {
      closeBtn.addEventListener("click", () => {
        closeBtn.closest(".modal").style.display = "none";
      });
    });
  
    // Close modal if clicking outside
    window.addEventListener("click", (event) => {
      modals.forEach(modal => {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      });
    });
  
    // Close with ESC key
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        modals.forEach(modal => modal.style.display = "none");
      }
    });
  });
  