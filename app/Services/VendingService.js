import { ProxyState } from "../AppState.js";


class VendingService {

 addMoney(){
   ProxyState.money++
 }

 buyItem(itemName){
    let temp = ProxyState.foodItems
    let item = temp.find(i => i.name == itemName)
    if(item.price <= ProxyState.money && item.quantity > 0){
      ProxyState.money -= item.price
      item.quantity--
      ProxyState.foodItems = temp
      console.log(temp);
    } else {
      alert("Purchase Failed - MOH MONEY")
    }
 }

}

export const vendingService = new VendingService()