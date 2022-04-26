//aiuto di Sara Morritti

import {carts, products, promoCode, users} from "./dataset.mjs";

import * as fs from "fs";
import * as os from "os"; //per il nome della macchina

//parte intestazione
const primaParte = () => {const {nomemacchina} = os.userInfo();
                    return `${nomemacchina} - Cart ${process.pid}`;
}

const secondaParte = () => {
    let data = new Date();
    return data.toDateString();
}

//getter utenti
const getUser = (uuid) => users.find(user => user.uuid === uuid);
//getter prodotti
const getProduct = (productId) => products.find(product => product.ean === productId);

//sconto preso dal suo codice
const getPercentageFromPromoCode = function(promoCodeName){
    if(promoCodeName!=''&& promoCodeName!=undefined&&promoCodeName!=null){
        let rate = promoCode.find(item=> promoCodeName===item.name);
        return rate.percentage
    }
}
const discountedPrice = (price, rate) => (price * (1 - rate)).toFixed(2);

//parte formattazione prodotti
function formattazioneProdotto(products)
{
    let stampaMin = products.toLowerCase();
    let primaLettera = stampaMin.charAt(0);
    let stampaMax = primaLettera.toUpperCase();

    let restoStringa = stampaMin.slice(1);

    return `${stampaMax}${restoStringa}`;
}

const formattazioneFinale = (item) => {

    let nomeFinale = '';
    let nomeProdotto = item.name;
    let nomiSplit = nomeProdotto.split(' ');

    for(let piece of nomiSplit)
    {
        if(piece != nomiSplit[0])
        {
            nomeFinale += ' ';
        }
        nomeFinale += formattazioneProdotto(piece);
    }

    return nomeFinale;
}

//separatori -
const row = (del) => {
    let riga = '';
    for (let piece = 1; piece < 55; piece++) {
        riga += '-';
    }
    return del + riga + del;
}

export
{
    primaParte,
    secondaParte,
    getUser,
    getProduct,
    getPercentageFromPromoCode,
    discountedPrice,
    formattazioneProdotto,
    formattazioneFinale,
    row,
}