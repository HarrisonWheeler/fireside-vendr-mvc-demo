

export default class FoodItem {
  constructor({name, price, quantity}){
    this.name = name
    this.price = price
    this.quantity = quantity
    this.isPublic = true
  }

  // we can use a ternary and evaluate a property on our object to set bootstrap/css attributes

  // ${this.isPublic ? 'fa-spin' : ""}

  // you can use a ternary to run a function based on a condition as well

  // ${this.quantity > 0 ? '' : app.vendingController.outOfStock()}

    
  get Template(){
    return /*html*/`
    <div class="card col-4 mt-5 text-center p-1 m-1">
      <div class="card-body  ">
        <h4 class="card-title">${this.name} x ${this.quantity}</h4>
        <p class="card-text">Price: $${this.price}</p>
        <button class="btn btn-success foodButton ${this.price > 2 ? "text-danger" : "text-info"}" ${this.quantity > 0 ? '' : 'disabled'} onclick="app.vendingController.buyItem('${this.name}')">Buy now</button>
      </div>
  </div>
    `
  }
}