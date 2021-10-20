import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.css']
})
export class FormBookComponent implements OnInit {

  sec: number = 1;
  book: Book = {
    listaBox:[],
    vanId: null,
    helperId: null,
  };

  constructor() { }


  ngOnInit() {
  }

  otherSection(a: number){   
    this.sec = a;
    
  }

}
