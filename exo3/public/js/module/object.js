export let jesus = {
    name: `Jesus`,
    lieu: `Nazareth`,
    argent: 25,
    mainDroite: [],
    mainGauche: [],
    seDeplacer(lieu) {
        this.lieu = nouveaulieu
    },

    payerArticle(article) {
        this.article = nouvelarticle

    },
    couper(ingredient, outil) {
        if (outil.nom === 'couper') {
            ingredient = `coupé`


        }

    }
}
export let maison = {
    nom: "maison",
    personnes: []

}
export let couteau = {
    nom: "couteau",
    action: "coupé"
};
import {
    epicerie,
    cuisine,
    maison,
    poivron,
    oignon,
    oeuf,
    epice,
    paprika,
    fromage,
    personnage
} from "./instances.js";

personnage.seDeplacer(maison);
console.log(`${personnage.nom} est actuellement à la ${personnage.lieu}`);


personnage.seDeplacer(epicerie);


let panier = epicerie.prendrePanier();
personnage.mainDroite = panier;
console.log(`${personnage.nom} a pris un ${panier.type}`);


for (let ingredient of epicerie.contenu) {
    let ingredientCopy = ingredient.copy();
    panier.contenu.push(ingredientCopy);
    console.log(`${personnage.nom} a ajouté ${ingredient.nom} dans le panier`);
}


for (let ingredient of panier.contenu) {
    personnage.payerArticle(ingredient.prix);
}

console.log(`Il reste ${personnage.argent} d'argent sur ${personnage.nom}`);


personnage.seDeplacer(maison);


for (let ingredient of panier.contenu) {
    bol.contenu.push(ingredient);
    console.log(`${personnage.nom} a ajouté ${ingredient.nom} dans le bol`);
}

console.log(`Il reste ${panier.contenu.length} ingrédients dans le panier`);

personnage.seDeplacer(epicerie);
personnage.mainDroite = null;
epicerie.rendrePanier(panier);
console.log(`${personnage.nom} a rendu le panier à l'épicerie`)