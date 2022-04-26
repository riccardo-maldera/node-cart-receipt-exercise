import {carts, products, promoCode, users} from "./dataset.mjs";
import * as core from "./core-cart.mjs";

for(let item of carts)
{
    //dichiarazione variabili
    let prodottiUtente = item.products;
    let user = core.getUser(item.user)
    let nomeUtente = user.firstName  +` `+ user.lastName;
    let disponibilitaUtente = user.wallet;
    let discountPromo = user.promo;

    //dichiarazione delimitatori
    let del1 = `+`;
    let del2 = `*`;
    let del3 = `**`;

    console.log(core.row(del1)); //prima riga delimitatrice

    //intestazione scontrino
    console.log(core.primaParte());
    console.log(core.secondaParte());
    console.log(core.row(del2));

    //check prodotti carrello
    if(prodottiUtente<1)
    {
        console.log(nomeUtente, 'ha il carrello vuoto');
        console.log(core.row(del2));
    }
    else
    {
        console.log(`${nomeUtente}\t\t\t ha questi soldi: ${disponibilitaUtente}`);
    }

    //carrello utente
    let tot = 0;
    for(let item of prodottiUtente)
    {
        let prodCorrente= core.getProduct(item);
        let ean = prodCorrente.ean;
        let nomeProdotto = core.formattazioneFinale(prodCorrente);
        let prezzoProdotto = prodCorrente.price;
        let rigaRicevuta = `\t [${ean}]\t\t${nomeProdotto}\t ${prezzoProdotto}`;
            
        console.log(rigaRicevuta);
        
        
        tot += prodCorrente.price;

    }

    console.log(core.row(del2));

    //stampa totale
    console.log(`\nTotale\t\t\t\t\t\t${tot.toFixed(2)}`);
    console.log(core.row(del1));

    //sconto se c'è
    let rate = core.getPercentageFromPromoCode(discountPromo)
    let discountedTot = core.discountedPrice(tot,rate)
    let discount= tot-discountedTot

    if(user.promo!=undefined && user.promo!='' && user.promo!= null)
    {
        console.log(`Sconto \t\t\t\t\t\t  ${discount.toFixed(2)}`)
        console.log(`Totale Scontato :\t\t\t\t ${discountedTot}`)
        console.log(core.row(del1))
    }
    
    //credito residuo con e senza sconto
    let creditoR = disponibilitaUtente - tot;
    let creditoRPromo = disponibilitaUtente-discountedTot; console.log('\n');

    if(disponibilitaUtente<=discount || disponibilitaUtente <= tot){
        console.log(nomeUtente,'ha un credito insufficiente per l\'acquisto')
    }
    else {

        if(user.promo!=undefined && user.promo!='' && user.promo!= null)
        {
            console.log(`${nomeUtente} ha un credito residuo di ${creditoRPromo.toFixed(2)}`);
        }
        else
        {
            console.log(`${nomeUtente} ha un credito residuo di ${creditoR.toFixed(2)}`);
        }
            
    
    }
    console.log(core.row(del3))

    console.log('\n\n');


}


















