document
    .getElementById("btnGuardar")
    .addEventListener("click", async (event) => {
      const director = document.getElementById("director_id").value;
      if (director == "0") {
        event.preventDefault();
        const errorDialog = document.getElementById("errorDialog");
        errorDialog.showModal();
        return;
      }
    });

  document.getElementById("closeErrorDialog").addEventListener("click", () => {
    const errorDialog = document.getElementById("errorDialog");
    errorDialog.close();
  });