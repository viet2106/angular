import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  yourName = ''
  evenStyle = { color: 'red', fontSize: '40px' };
  oddStyle = { color: 'blue', fontSize: '10px' };
  isHighlight = true;
  currentClass = { circle: !this.isHighlight, square: this.isHighlight }

  constructor() { }

  ngOnInit(): void {
  }


}
