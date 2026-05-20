import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {

  user={
    name:'',
    email:'',
    password:''
  };

  onSubmit(form:any){
    console.log("object value:",this.user)
    console.log("form value :",form.value)
   
  }

}
