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

const baliseFG = document.getElementById("fleche_gauche")
console.log(baliseFG);
baliseFG.addEventListener("click", () => {
	console.log("Vous avez cliqué sur la flèche gauche")
});

const baliseFD = document.getElementById("fleche_droite")
console.log(baliseFD);
baliseFD.addEventListener("click", () => {
	console.log("Vous avez cliqué sur la flèche droite")
});
