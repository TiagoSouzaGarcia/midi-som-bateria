/*function tocar(som) {
  document.querySelector(`#som_tecla_${som}`).play();
}

function main() {
  let instrumento = [
    "pom",
    "clap",
    "tim",
    "puff",
    "splash",
    "toim",
    "psh",
    "tic",
    "tom",
  ];

  instrumento.forEach((instrumento) => {
    document
      .querySelector(`.tecla_${instrumento}`)
      .addEventListener("click", () => {
        tocar(instrumento);
      });
  });
} */

//main();

/*   let contador = 0;

const listaDeTecladas = document.querySelectorAll(".tecla");

function incrementarContador() {
    contador = contador + 1;
    console.log("Contador: " + contador);
}

for (let i = 0; i < listaDeTecladas.length; i++) {
    listaDeTecladas[i].onclick = incrementarContador;
} */

/* while (contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];
    
    let contador = 0;
    const instrumento = listaDeTeclas[contador].classList[1];
    
    tecla.onclick = function () {
    tocaSom(idAudio);
};

contador++;
}
*/
const listaDeTeclas = document.querySelectorAll(".tecla");

function main() {
  function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio).play();

    if (elemento !== null && elemento.localName === "audio") elemento.play();
    else console.log("Elemento não encontrado");
  }

  listaDeTeclas.forEach((tecla) => {
    let instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = () => {
      tocaSom(idAudio);
    };

    tecla.onkeydown = (event) => {
      console.log(event);
      if (event.code === "Enter" || event.code === "Space")
        tecla.classList.add("ativa");
    };
    tecla.onkeyup = () => tecla.classList.remove("ativa");
  });
}

main();
