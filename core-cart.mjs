import {carts, products, promoCode, users} from "./dataset.mjs"; 

import * as fs from "fs"; 
import * as os from "os"; 


const discountedPrice = (price, rate = 0.10) => (price * (1 - rate)).toFixed(2);

function getUser(uuid){
    let user = users.find(user => uuid === user.uuid);
    return user;
}

const getProduct = (productId) => products.find(product => product.ean === productId) //arrow function

const getPercentageFromPromoCode = function (promoCodeName){

    if(promoCodeName !== '' && promoCodeName !== undefined && promoCodeName !== null) 
    {
        let rate = promoCode.find(item => promoCodeName === item.name);
        return rate.percentage;
    }

    return 0;
}

export {
    discountedPrice, getProduct, getPercentageFromPromoCode, getUser
}