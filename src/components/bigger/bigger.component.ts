import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bigger',
  templateUrl: './bigger.component.html',
  styleUrls: ['./bigger.component.css']
})
export class BiggerComponent implements OnInit {
  @Input() backgroundColor: string; 
  @Input() wordDefine: string;
  
  ngOnInit() {
    if(this.wordDefine === "") {
      this.wordDefine = "Bigger"
    }
  }
  
  getStyle() {
    return {
      color: this.backgroundColor,
    }
  }
}
