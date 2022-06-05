let contador = 0;
let total = 0;
let division = 0;

function agregar() {
  let nombre = $("#usuario").val();
  let dinero = $("#gasto").val();
  contador += 1;

  dividir(dinero);

  let displayName = `<h5> ${nombre} </h5>`;
  let displayMoney = `<h5> ${dinero} </h5>`;
  let displayContador = `<h5> ${contador} </h5>`;
  $("#nameToShow").append(displayName);
  $("#moneyToShow").append(displayMoney);
  $("#contToShow").append(displayContador);
}

function dividir(dinero) {
  total += parseInt(dinero);

  $("#total").text("$" + total);

  division = total / contador;

  $("#cadaUno").text("$" + parseInt(division));
}
