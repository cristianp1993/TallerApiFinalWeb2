function editarDirector(id) {
    window.location.href = `/director/edit/${id}`;
  }

  function abrirConfirmacionEliminar(id, nombre) {
    idToDelete = id;
    const mensaje = document.getElementById("mensajeDialog");
    const confirmDeleteDialog = document.getElementById("confirmDeleteDialog");
    const overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    document.body.classList.add("scroll-disabled");
    confirmDeleteDialog.showModal();
    mensaje.innerHTML = "";
    mensaje.innerHTML = `¿Está seguro que desea eliminar a ${nombre}?`;
    confirmDeleteDialog.addEventListener("close", function () {
      if (confirmDeleteDialog.returnValue === "default") {
        eliminarDirector(idToDelete);
      }
    });
  }

  async function eliminarDirector(id) {
    try {
      const response = await fetch(`/director/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const confirmacionEliminar = document.getElementById("noEliminar");
        confirmacionEliminar.showModal();
        return;
      }

      const data = await response.text();
      const confirmacionEliminar = document.getElementById(
        "confirmacionEliminar"
      );
      confirmacionEliminar.showModal();
    } catch (error) {
      console.error("Error al eliminar la tarea:", error);
    }
  }

  document
    .getElementById("cancelDelete")
    .addEventListener("click", async () => {
      cancelDelete();
    });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      const confirmDeleteDialog = document.getElementById(
        "confirmDeleteDialog"
      );
      if (confirmDeleteDialog.open) {
        cancelDelete();
      }
    }
  });
  function cerrarConfirmacionEliminar() {
    const confirmacionEliminar = document.getElementById(
      "confirmacionEliminar"
    );
    confirmacionEliminar.close();
    location.reload();
  }
  function cerrarConfirmacionEliminar2() {
    const confirmacionEliminar = document.getElementById("noEliminar");
    confirmacionEliminar.close();
    location.reload();
  }
  function cancelDelete() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    document.body.classList.remove("scroll-disabled");
    document.getElementById("confirmDeleteDialog").close();
  }