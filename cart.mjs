import {carts, products, promoCode, users} from "./dataset.mjs";
import * as core from "./core-cart.mjs";
import { serialize } from "v8";
import { Console } from "console";

for (let user of users)
{
    var sommaTot = core.prezzo(user);
    var scontopt1 = core.tipoSconto(user);
    var scontoTot = core.prezzoScontato(sommaTot, core.tipoSconto(user));

    if(sommaTot >= 0)
    {
        if(core.portafoglioPieno(user.wallet, core.prezzoScontato(sommaTot,core.tipoSconto(user.promo))) == true)
        {
            for (let cart of carts)
            {
                if(user.uuid == cart.user && cart.products != '')
                {
                    console.log(core.del1());
                    console.log("  Processing " +
                         core.formattazioneProdotto(user.firstName) + " " +
                         core.formattazioneProdotto(user.lastName) + " cart:");
                    console.log("   " + "MAR APR 18 2022");
                    console.log(core.del2());

                    if (user.uuid == cartRow.user)
                    {
                        cartRow.products.forEach(product => console.log("  ["
                        + core.getProduct(product).ean + "]   "
                        + core.formattazioneProdotto(core.getProduct(product).name) 
                        + "  \t"+core.getProduct(product).price.toFixed(2) + "€"));
                    }    
                }
                console.log(core.del2());
                console.log("  Totale: \t" + sommaTot.toFixed(2));
                
                if(sommaTot > 0 && user.promo != '' || user.promo != null){

                    console.log(core.del1());
                       console.log("  Sconto Applicato:\t" + core.sconto(sommaTot,core.tipoSconto(user.promo)));
                       console.log("  Totale scontato:\t" + core.prezzoScontato(sommaTot,core.tipoSconto(user.promo)));
                       console.log("\n");
                       if(user.promo == undefined || user.promo === '')
                       {
                        console.log("");
                       }
                       else
                       {
                       console.log("  CODICE PROMO:\t\t" + user.promo);
                       }

                       console.log(core.del1() + "");
                }

                var tott = core.portafoglioUTD(user.wallet, core.prezzoScontato(sommaTot, core.tipoSconto(user.promo)));

                console.log(core.del3());

                console.log(   "  " + core.formattazioneProdotto(user.firstName) 
                + " " + core.formattazioneProdotto(user.lastName) 
                + core.assicuredWallet(totcred));
                console.log(core.del3());

                console.log("\n\n\n\n");
                

            }


        }


    }
}
