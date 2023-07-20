import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-in',
  templateUrl: './slide-in.component.html',
  styleUrls: ['./slide-in.component.css']
})
export class SlideInComponent implements OnInit {
  
  @Input() backgroundColor: string; 
  @Input() wordDefine: string;
  hoverBackgroundColor: string = "#f2b805" 
  
  ngOnInit() {
    if(this.wordDefine === "") {
      this.wordDefine = "SlideIn"
    }
  }
  
  getStyle() {
    return {
      backgroundImage: `linear-gradient(
        to right,
        ${this.hoverBackgroundColor},
        ${this.hoverBackgroundColor} 50%,
        ${this.backgroundColor} 50%
      )`
    }
  }
}
