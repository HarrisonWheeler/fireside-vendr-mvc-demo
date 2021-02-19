import { ProxyState } from "../AppState.js"

function drawBlah(){

}

// walked through my process of starting a project and walked through step by step


export default class BlahController{
  constructor(){
    ProxyState.on('blah', drawBlah)
    drawBlah()
  }

}