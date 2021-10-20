import { Component, Host, OnInit } from '@angular/core';
import { FormBookComponent } from '../form-book/form-book.component';

@Component({
  selector: 'app-van',
  templateUrl: './van.component.html',
  styleUrls: ['./van.component.css']
})
export class VanComponent implements OnInit {

  vanId:number;
  van1: boolean = false;
  van2: boolean = false;
  van3: boolean = false;

  constructor(@Host() private _book: FormBookComponent) { }

  ngOnInit() {
  }

  selected(indi: number){
    
    if(indi == 1){
      if(this.van1){
        this.van1 = !this.van1;
        this.vanId = null;
      }
      else{
        this.van1 = !this.van1;
        this.vanId = indi;        
      }
      this.van2 = false;
      this.van3 = false;
    }
    else if(indi == 2){
      if(this.van2){
        this.van2 = !this.van2;
        this.vanId = null;
      }
      else{
        this.van2 = !this.van2;
        this.vanId = indi;
      }
      this.van1 = false;
      this.van3 = false;
    }
    else if(indi == 3){
      if(this.van3){
        this.van3 = !this.van3;
        this.vanId = null;
      }
      else{
        this.van3 = !this.van3;
        this.vanId = indi;
      }
      this.van1 = false;
      this.van2 = false;
    }
    
  }

  otherSection(){
    this._book.book.vanId = this.vanId;
    this._book.otherSection(3);
  }
}
