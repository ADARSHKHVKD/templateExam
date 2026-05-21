import { Component } from '@angular/core';
import { OnInit,Input,OnChanges,OnDestroy,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooksexample',
  imports: [],
  templateUrl: './hooksexample.html',
  styleUrl: './hooksexample.css',
})
export class Hooksexample  implements OnInit,OnChanges,OnDestroy{
  
  @Input() name : string='angular'

  constructor(){
    console.log("constructor called")
    alert("constructor called")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchanged called",changes)
  }

  ngOnDestroy(): void {
    alert("ngOnDestroy called")
    console.log("ngOnDestroy called")
  }



  ngOnInit(): void {
    alert("ngOnInit called")
    console.log("ngoninit called")
  }

}
