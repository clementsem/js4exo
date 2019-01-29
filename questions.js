/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
// remplace e par un espace
var remplaceECar = function (texte) {
    return texte.replace('e', ' ');
}
// concaténation
var concatString = function (texte1, texte2) {
    return texte1+texte2;
}
// permet d'Afficher le cinquième caractère de la chaine
var afficherCar5 = function (texte) {
    return texte.charAt(4);
}
// permet d'Afficher les 9 premiers caractères
var afficher9Car = function (texte) {
    return texte.substr(0, 9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
// vérifie si le paramètre est de type string
var IsString = function (texte) {
    return typeof "" === "string"
}
// montre l'extension
var AfficherExtensionString = function (texte) {
    return texte.split('.').pop();
}
// calculer le nombre d'espaces
var NombreEspaceString = function (texte) {
    return texte.split(" ").length - 1;
}
// inverse
var InverseString = function (texte) {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x, y);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
    var result = ([5,50,25,568]);
    return result;
}
var sufaceCercle = function (rayon) {
    return Math.round(Math.PI*Math.pow(rayon, 2));
}
var hypothenuse = function (ab, ac) {
    return Math.hypot(ab, ac);
}
var calculIMC = function (poids, taille) {
    var result = Math.round(poids/(taille*taille)*100)/100;
    return result;
}
