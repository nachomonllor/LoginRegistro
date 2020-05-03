import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/clases/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
 
  entraNombre= '';
  entraClave = '';

  us : usuario;

  constructor() {
       
   }

  ngOnInit(): void {
  }

  RegistraUsuario() {
       this.us = new usuario(this.entraNombre, this.entraClave);
       localStorage.setItem(this.entraNombre, JSON.stringify ( this.us));
  }

}
