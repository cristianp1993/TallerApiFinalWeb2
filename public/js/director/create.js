document
      .querySelector('form')
      .addEventListener('submit', function(event) {
        const nombres = document.getElementById('nombres').value;
        const apellidos = document.getElementById('apellidos').value;
        const fecha_nacimiento = document.getElementById('fecha_nacimiento').value;
        const cantidad_peliculas = document.getElementById('cantidad_peliculas').value;
  
        if (!nombres || !apellidos || !fecha_nacimiento || !cantidad_peliculas) {
          event.preventDefault();
          const errorDialog = document.getElementById('errorDialog');
          errorDialog.showModal();
        }
      });
  
    document.getElementById('closeErrorDialog').addEventListener('click', () => {
      const errorDialog = document.getElementById('errorDialog');
      errorDialog.close();
    });