

let i = 0;
let querySelector = ".texte";
let txt = "  Je m'appelle Jérémie et je suis étudiant en informatique. Je termine actuellement mon diplôme collégial et je me prépare à entamer un programme de génie logiciel à l'université en août prochain. Ce site rassemble les réalisations que j'ai accomplies au cours de mon parcours en informatique. La programmation est ma passion et j'espère avoir l'opportunité de croiser votre chemin un jour ou l'autre."
let speed = 20; 
let end = false;

function typeWriter() {
    if (i < txt.length) {
      document.querySelector(querySelector).innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

window.addEventListener("load", () => {
    typeWriter();
});
