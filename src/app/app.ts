import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Form} from './form/form';
import { Reform } from './reform/reform';
import { Hooksexample } from './hooksexample/hooksexample';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Form,Reform,Hooksexample,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 n:string="adarsh";
  show=false;

}
