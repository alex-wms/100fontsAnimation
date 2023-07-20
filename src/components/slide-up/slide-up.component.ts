import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-up',
  templateUrl: './slide-up.component.html',
  styleUrls: ['./slide-up.component.css']
})
export class SlideUpComponent implements OnInit {
  @Input() backgroundColor: string; 
  @Input() wordDefine: string;
  hoverBackgroundColor: string = "#f2b805" 
  
  ngOnInit() {
    if(this.wordDefine === "") {
      this.wordDefine = "SlideUp"
    }
  }
  
  getStyle() {
    return {
      backgroundImage: `linear-gradient(
        to bottom,
        ${this.hoverBackgroundColor},
        ${this.hoverBackgroundColor} 50%,
        ${this.backgroundColor} 50%
      )`
    }
  }
}
