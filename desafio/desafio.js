document.querySelector("input[type=tel]");

const listaDeTeclas = document.querySelectorAll("input[type=button]");
console.log(listaDeTeclas);

/* ----------------------------------------------------------------- */
const listaDeTeclas2 = document.querySelectorAll("input[type=button]");
const inputTel = document.querySelector("input[type=tel]");

for (let indice = 0; indice < listaDeTeclas2.length; indice++) {
  const tecla = listaDeTeclas2[indice];

  tecla.onclick = function () {
    inputTel.value = inputTel.value + tecla.value;
  };
}

function main() {
  const inputTel = document.querySelector("input[type=tel]");
  const listaDeTeclas = document.querySelectorAll("input[type=button]");

  function imprimeTecla(teclaValue) {
    inputTel.value = inputTel.value + teclaValue.value;
  }

  listaDeTeclas.forEach((tecla) => {
    tecla.onclick = () => {
      imprimeTecla(tecla);
    };
  });
}

main();
