
import {  Epicerie, Lieu } from './class.js';
import { Cuisine } from './class.js';
import { Ingredient } from './class.js';
import { Personnage } from './class.js';

let epicerie = new Epicerie("epicerie", [], []);
let cuisine = new Cuisine("cuisine", [], []);
let maison = new Lieu("maison", []);
let poivron = new Ingredient("poivron", "entier", 1);
let oignon = new Ingredient("oignon", "entier", 2);
let oeuf = new Ingredient("oeuf", "entier", 4);
let epice = new Ingredient("epice", "moulu", 3.25);
let paprika = new Ingredient("paprika", "moulu", 1.5);
let fromage = new Ingredient("fromage", "coupé", 1.6);
let personnage = new Personnage("Maxime", "néant", 100, []);

export{epicerie,cuisine,maison,poivron,oignon,oeuf,epice,paprika,fromage,personnage}



