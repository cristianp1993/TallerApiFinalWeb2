function igualarAlturaCards() {
  const cards = document.querySelectorAll(".card-text");
  let maxHeight = 0;

  //Se busca la altura maxima de las tarjeta
  cards.forEach((card) => {
    const height = card.offsetHeight;
    maxHeight = height > maxHeight ? height : maxHeight;
  });

  //Se actualiza la altura de lamas grande a todas
  cards.forEach((card) => {
    card.style.height = `${maxHeight}px`;
  });
}
igualarAlturaCards();

function abrirConfirmacionEliminar(id,nombre) {
  movieIdToDelete = id;
  const mensaje = document.getElementById("mensajeDialog")
  const confirmDeleteDialog = document.getElementById('confirmDeleteDialog');
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'block';
  document.body.classList.add('scroll-disabled');
  confirmDeleteDialog.showModal();
  mensaje.innerHTML="";
  mensaje.innerHTML=`¿Está seguro que desea eliminar ${nombre}?`
  confirmDeleteDialog.addEventListener('close', function () {
    if (confirmDeleteDialog.returnValue === 'default') {
      eliminarPelicula(movieIdToDelete);
    }
  });
}


async function eliminarPelicula(id) {

  fetch(`/movies/${id}`, {
      method: 'DELETE'
  })
  .then(response => response.text())
  .then(data => {
      
    const confirmacionEliminar = document.getElementById('confirmacionEliminar');
    confirmacionEliminar.showModal();
  })
  .catch(error => console.error('Error al eliminar la tarea:', error));
}

function cerrarConfirmacionEliminar() {
  const confirmacionEliminar = document.getElementById('confirmacionEliminar');
  confirmacionEliminar.close();
  location.reload();
}


function editarPelicula(id) {
  window.location.href = `/movies/edit/${id}`;
}

document.getElementById("cancelDelete").addEventListener("click", async ()=>{  
  cancelDelete()
})

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
      const confirmDeleteDialog = document.getElementById('confirmDeleteDialog');
      if (confirmDeleteDialog.open) {
          cancelDelete();
      }
  }
});

function cancelDelete(){
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
  document.body.classList.remove('scroll-disabled');
  document.getElementById("confirmDeleteDialog").close()
}