import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from 'src/clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  logeando=true;
  arrayOfKeys;
  arrayOfValues;
  us = new Array<usuario>();
  entraNombre = '';
  entraClave = '';

  constructor(private router: Router) {
    this.recuperarListaUsuarios();

     console.log(this.entraNombre + " " + this.entraClave);

   }

  

  recuperarListaUsuarios() {
    this.arrayOfKeys = Object.keys(localStorage);
    this.arrayOfValues = Object.values(localStorage);
    for(let i =0; i<this.arrayOfValues.length; i++) {
      this.us.push(JSON.parse( this.arrayOfValues[i]));
    }
  }

  ngOnInit(): void {
  }
  
  

  Entrar() {
      //this.router.navigate(['/Principal']);
      console.log(this.entraNombre + " " + this.entraClave);
      
      for(let i =0; i < this.us.length; i++) {
          if(this.us[i].nombre === this.entraNombre && this.us[i].clave === this.entraClave) {
            this.router.navigate(['/Principal']);
          }
      }
      

  }

}
