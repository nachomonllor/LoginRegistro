import { Component } from '@angular/core';
import { usuario } from 'src/clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginregistro';
  

  /*
  listaUsuarios = new Array<usuario>();

  constructor() {
    
   
    //this.obtenerLocalStorage();
    this.listaUsuarios.push( new usuario( "ramon", "8jhjjhgh"));
    this.listaUsuarios.push( new usuario( "gilberto", "6yfdfd"));
    this.listaUsuarios.push( new usuario( "fernando", "ssdd"));
    this.listaUsuarios.push( new usuario( "mariano", "aaa"));
    this.listaUsuarios.push( new usuario( "edgardo", "5555"));

    this.grabarLocalStorage();
  }

  /*
  nombre = '';
   
  obtenerLocalStorage() {
    this.nombre = localStorage.getItem("nombre");
    console.log("nombre");
  }



  grabarLocalStorage() {
    let nombre = "juan";
    let constras = "123456";

    localStorage.setItem("persona", nombre);

  }*/

  
  /*
   grabarLocalStorage() {
   //  let user = new usuario("RAMON", "1234");
    // localStorage.setItem("usuario", JSON.stringify( user));
   
    for(let i =0; i < this.listaUsuarios.length; i++) {
      localStorage.setItem( i + "", JSON.stringify(this.listaUsuarios[i] ) );
    }


  }
*/



}
