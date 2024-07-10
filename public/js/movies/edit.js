async function Actualizar(id){
      
    const nombre = document.getElementById('nombre').value;
    const genero = document.getElementById('genero').value;
    const fecha_estreno = document.getElementById('fecha_estreno').value;
    const director_id = document.getElementById('director_id').value;
    const vista = document.getElementById('vista').value;
    const calificacion = document.getElementById('calificacion').value;
    const critica = document.getElementById('critica').value;

    const requestBody = {
        nombre,
        genero,
        fecha_estreno,
        director_id,
        vista,
        calificacion,
        critica
    };

  try {
    const response = await fetch(`/movies/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error('Error al actualizar la película');
    }

    console.log('Película actualizada correctamente');
    window.location.href = '/movies/home';

  } catch (error) {
    console.error('Error al actualizar la película:', error);
    
  }
}