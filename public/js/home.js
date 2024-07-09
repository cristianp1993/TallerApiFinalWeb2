function IgualarAlturaCards() {
  const cards = document.querySelectorAll(".card-body");
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
console.log("Estoy cargado")
IgualarAlturaCards();
