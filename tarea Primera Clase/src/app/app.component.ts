import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'tarea 1';
  //recuerda importar el ngModule en el app nodule joan
  public nombre: string='';
  public bio: string='';
  name="joan";

  public getFormatedName(){
    return 'Ing. ' + this.name;
  }

  public getFormatedNameByParam(honorifico:string){

  }
  constructor(){

  }
  ngOnInit(){

  }
  bioForm= new FormGroup({
      nombre : new FormControl('', Validators.required),
      bio : new FormControl('', Validators.required)
  });
}
