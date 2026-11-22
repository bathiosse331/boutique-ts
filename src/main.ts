import "./style.css";
console.log("La boutique démarre");
import { catalogue } from "./catalogue";

import { formatPrix } from "./outils";

function trouver<T extends HTMLElement>(selecteur: string): T {
const element = document.querySelector<T>(selecteur);
if (!element) {
throw new Error(`Élément ${selecteur} introuvable : vérifiez index.html`);
}
return element;
}

const zoneCatalogue = trouver<HTMLDivElement>("#catalogue");
const listePanier = trouver<HTMLUListElement>("#lignes-panier");
const zoneTotal = trouver<HTMLElement>("#total");
const compteur = trouver<HTMLSpanElement>("#compteur");
const champRecherche = trouver<HTMLInputElement>("#recherche");
const filtreCategorie = trouver<HTMLSelectElement>("#filtre-categorie");
console.log(zoneCatalogue,listePanier,zoneTotal,compteur,champRecherche,filtreCategorie);
