const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
]

let currentSlideIndex = 0;

const baliseFG = document.getElementById("fleche_gauche");
console.log(baliseFG);
baliseFG.addEventListener("click", () => {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  changeSlide(currentSlideIndex);
  console.log("Vous avez cliqué sur la flèche gauche");
});

const baliseFD = document.getElementById("fleche_droite");
console.log(baliseFD);
baliseFD.addEventListener("click", () => {
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  changeSlide(currentSlideIndex);
  console.log("Vous avez cliqué sur la flèche droite");
});

// Sélectionnez les éléments HTML nécessaires
const dotsContainer = document.querySelector('.dots');

// Comptez le nombre d'éléments dans le tableau 'slides'
const numberOfSlides = slides.length;

// Créez dynamiquement les points
for (let i = 0; i < numberOfSlides; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');

  // Ajoutez un gestionnaire d'événements pour gérer la sélection du point
  dot.addEventListener('click', () => {
    // Supprimez la classe 'dot_selected' des points précédemment sélectionnés
    const previouslySelectedDot = dotsContainer.querySelector('.dot_selected');
    previouslySelectedDot.classList.remove('dot_selected');

    // Ajoutez la classe 'dot_selected' au point sélectionné
    dot.classList.add('dot_selected');

    // Défilez vers la diapositive correspondante à l'aide de votre méthode actuelle
    // (par exemple, en utilisant le gestionnaire d'événements 'swipe' existant)
    currentSlideIndex = i;
    changeSlide(currentSlideIndex);
  });

  dotsContainer.appendChild(dot);
}

// Sélectionnez le premier point et ajoutez la classe 'dot_selected'
dotsContainer.children[0].classList.add('dot_selected');

function changeSlide(index) {
  // Changez l'image
  const mainImage = document.querySelector('.banner-img');
  mainImage.src = `./assets/images/slideshow/slide${index}.jpg`;

  // Changez le texte
  const textElement = document.querySelector('p');
  textElement.innerHTML = slides[index].tagLine;

  // Changez le bullet point actif
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('dot_selected');
    } else {
      dot.classList.remove('dot_selected');
    }
  });

  console.log("Vous êtes sur la diapositive " + (index + 1));
}
