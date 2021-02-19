import { ProxyState } from "../AppState.js"
import { vendingService } from '../Services/VendingService.js'


// private functions outside of the export
function drawMoney(){
  document.getElementById('money').innerText = ProxyState.money
}

function drawItems(){
  let itemZone = document.getElementById('items')
  let template = ''
  let items = ProxyState.foodItems
  items.forEach(i => template += i.Template)
  itemZone.innerHTML = template
}

export default class VendingController {
  constructor(){
    ProxyState.on("money", drawMoney)
    ProxyState.on("foodItems", drawItems)
    drawMoney()
    drawItems()
  }

  addMoney(){
    vendingService.addMoney()
  }

  buyItem(itemName){
    console.log(itemName);
    vendingService.buyItem(itemName)
  }

  outOfStock(){
    alert("WE ARE OUT GO AWAY")
  }


}