async function ActualizarDirector(id) {
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const fecha_nacimiento = document.getElementById('fecha_nacimiento').value;
    const cantidad_peliculas = document.getElementById('cantidad_peliculas').value;

    const requestBody = {
      nombres,
      apellidos,
      fecha_nacimiento,
      cantidad_peliculas
    };

    try {
      const response = await fetch(`/director/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error('Error al actualizar el director');
      }

      console.log('Director actualizado correctamente');
      window.location.href = '/director';

    } catch (error) {
      console.error('Error al actualizar el director:', error);
    }
  }