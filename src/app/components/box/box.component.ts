import { Component, Host, OnInit } from '@angular/core';
import { BoxBook } from 'src/app/models/box-books';
import { FormBookComponent } from '../form-book/form-book.component';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {


  box1 = {
    val: '0',
    error: '',
    isValid(){
      const pattern = /^([0-9])*$/;
      if (!pattern.test(this.val)) {
        this.error = 'Este campo es de solo numeros';
        return false;
      }
      return true;
    },
  }

  box2 = {
    val: '0',
    error: '',
    isValid(){
      const pattern = /^([0-9])*$/;
      if (!pattern.test(this.val)) {
        this.error = 'Este campo es de solo numeros';
        return false;
      }
      return true;
    },
  }
  box3 = {
    val: '0',
    error: '',
    isValid(){
      const pattern = /^([0-9])*$/;
      if (!pattern.test(this.val)) {
        this.error = 'Este campo es de solo numeros';
        return false;
      }
      return true;
    },
  }
  box4 = {
    val: '0',
    error: '',
    isValid(){
      const pattern = /^([0-9])*$/;
      if (!pattern.test(this.val)) {
        this.error = 'Este campo es de solo numeros';
        return false;
      }
      return true;
    },
  }

  arrayBox: BoxBook[] = [];
  
  constructor(@Host() private _book: FormBookComponent) { 
     
  }

  ngOnInit() {
  }

  otherSection(){
    let box: BoxBook;
    let num: number = 0;
    if(this.box1.val == '' || !this.box1.isValid()){
      num = 0
    }
    else{
      num = Number(this.box1.val);
    }
    box ={
      id: 1,
      cantidad: num,
    }
    this.arrayBox.push(box);

    if(this.box2.val == '' || !this.box2.isValid()){
      num = 0
    }
    else{
      num = Number(this.box2.val);
    }
    box ={
      id: 2,
      cantidad: num,
    }
    this.arrayBox.push(box);

    if(this.box3.val == '' || !this.box3.isValid()){
      num = 0
    }
    else{
      num = Number(this.box3.val);
    }
    box ={
      id: 3,
      cantidad: num,
    }
    this.arrayBox.push(box);

    if(this.box4.val == '' || !this.box4.isValid()){
      num = 0
    }
    else{
      num = Number(this.box4.val);
    }
    box ={
      id: 4,
      cantidad: num,
    }
    this.arrayBox.push(box);

    this._book.book.listaBox = this.arrayBox;
    this._book.otherSection(2);
  }


  boxCantidad(indi: number, b: boolean){
    let num: number = 0;
    if(indi == 1){
      if(this.box1.val == '' || !this.box1.isValid()){
        num = 0
      }
      else{
        num = Number(this.box1.val);
      }
      if(b){
        num = num + 1;
        this.box1.val = num + '';
      }
      else{
        if(num > 0){
          num = num -1;
          this.box1.val = num + '';
        } 
        else{
          this.box1.val = '0';
        }       
      }
    }
    else if(indi == 2){
      if(this.box2.val == '' || !this.box2.isValid()){
        num = 0
      }
      else{
        num = Number(this.box2.val);
      }
      if(b){
        num = num + 1;
        this.box2.val = num + '';
      }
      else{
        if(num > 0){
          num = num -1;
          this.box2.val = num + '';
        } 
        else{
          this.box2.val = '0';
        }       
      }
    }
    else if(indi == 3){
      if(this.box3.val == '' || !this.box3.isValid()){
        num = 0
      }
      else{
        num = Number(this.box3.val);
      }
      if(b){
        num = num + 1;
        this.box3.val = num + '';
      }
      else{
        if(num > 0){
          num = num -1;
          this.box3.val = num + '';
        } 
        else{
          this.box3.val = '0';
        }       
      }
    }
    else if(indi == 4){
      if(this.box4.val == '' || !this.box4.isValid()){
        num = 0
      }
      else{
        num = Number(this.box4.val);
      }
      if(b){
        num = num + 1;
        this.box4.val = num + '';
      }
      else{
        if(num > 0){
          num = num -1;
          this.box4.val = num + '';
        } 
        else{
          this.box4.val = '0';
        }       
      }
    }


  }
}
