import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/clases/usuario';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent implements OnInit {

  
  
   //listaUsers = new Array<usuario>();

    arrayOfKeys;
    arrayOfValues;

   us = new Array<usuario>();

  recuperarListaUsuarios() {
   
    
    
     this.arrayOfKeys = Object.keys(localStorage);
     this.arrayOfValues = Object.values(localStorage);

  
     
    
    for(let i =0; i<this.arrayOfValues.length; i++) {
      this.us.push(JSON.parse( this.arrayOfValues[i]));
    }
    
    /* ------------------ ALTERNATIVA -----------------------
    for (let i = 0; i < localStorage.length; i++)        
         let key = localStorage.key(i);
         console.log(localStorage.getItem(key));
    */

    
  }
  constructor() { 
     
     //this.listaUsers.push("jkfdjlfdjlfdkjlkjfdlkfdjklfdjk");

     this.recuperarListaUsuarios();

  }

  ngOnInit(): void {
    this.recuperarListaUsuarios();
  }


}
