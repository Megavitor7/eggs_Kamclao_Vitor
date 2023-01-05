class Lieu {
    constructor(nom, contenu) {
        this.nom = nom;
        this.contenu = contenu;
    }
}

class Epicerie extends Lieu {
    constructor(nom, contenu, ingredients) {
        super(nom, contenu);
        this.ingredients = ingredients;
    }
}

class Cuisine extends Lieu {
    constructor(nom, contenu, ingredients) {
        super(nom, contenu);
        this.ingredients = ingredients;
    }
}

class Ingredient {
    constructor(nom, etat, prix) {
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

class Personnage {
    constructor(nom, lieu, argent, panier) {
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.panier = panier;
    }
}
export{Lieu, Personnage,Ingredient,Cuisine,Epicerie}