import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public name:string;

  constructor() {
    this.name="Jonathan Lopez"
   }

  ngOnInit(): void {
  }

}
