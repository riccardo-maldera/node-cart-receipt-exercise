import {carts, products, promoCode, users} from "./dataset.mjs";
import * as fs from "fs";

function getUser(uuid) 
{
    return users.find(user => user.uuid === uuid);
}

function getProduct(ean) 
{
    return products.find(product => product.ean === ean);
}

function formattazioneProdotto(product) 
{
    return product.toLowerCase().charAt(0).toUpperCase() + product.toLowerCase().slice(1);
}

var s = 0;
function prezzo (user)
{
    for (let products of carts)
    {
        if (user.uuid == products.user)
        {
            product.products.forEach(prod => somma += getProduct(prod).price);
        }
    }

    return somma;
}

function portafoglioPieno (portafoglio, somma) 
{
    let a;
    if(portafoglio - somma >= 0)
    {
        a = true;
    }
    else
    {
        a = false
    }
    return a;
}

function portafoglioUTD (portafoglioOS, tot)
{
    return portafoglioOS - tot;
}

function soldiRimanenti(tot) {
    return "I soldi rimanenti sono " +tot >= 0 ? + tot.toFixed(2) + "€" : false;
}

function tipoSconto (codiceSconto)
{
    if(codiceSconto != '' && codiceSconto != null)
    {
        for (let codice of promoCode)
        {
            if (codice.name === promo)
            {
                return codice.percentage
            }
             
        }
    }
    else
    {
        return 0;
    }


}

//arrow function convertite automaticamente da VS code
const prezzoScontato = (price, rate ) => ((price * (1 - rate))).toFixed(2);
const sconto = (prezzo, sconto) => (prezzo*(sconto*100))/100;


//trattini automatici
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
const del1 = (openClose, symbol, times) => '+ ' + '-'.repeat(50) + ' +';
const del2 = (openClose, symbol, times) => '* ' + '-'.repeat(50) + ' *';
const del3 = (openClose, symbol, times) => '** ' + '-'.repeat(50) + ' **';

const stampaScontrino = (content, filename) => fs.writeFileSync(filename, content);

export
{
    getUser,
    getProduct,
    formattazioneProdotto,
    prezzo,
    portafoglioPieno,
    portafoglioUTD,
    soldiRimanenti,
    tipoSconto,
    prezzoScontato,
    sconto,
    del1, del2, del3,
    stampaScontrino,
};