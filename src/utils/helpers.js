export function setButtonText(btn, isLoading) {
  if (isLoading) {
    if (btn.textContent === "Save") {
      btn.textContent = "Saving...";
    }
    if (btn.textContent.trim() === "Delete") {
      btn.textContent = "Deleting...";
    }
  } else {
    if (btn.textContent === "Saving...") {
      btn.textContent = "Save";
    }
    if (btn.textContent === "Deleting...") {
      btn.textContent = "Delete";
    }
  }
}
