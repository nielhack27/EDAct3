import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {
  isShow:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  show(){
    this.isShow =!this.isShow
  }

}
