import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-down',
  templateUrl: './slide-down.component.html',
  styleUrls: ['./slide-down.component.css']
})
export class SlideDownComponent implements OnInit {
  
  @Input() backgroundColor: string; 
  @Input() wordDefine: string;
  
  hoverBackgroundColor: string = "#f2b805" 
  
  ngOnInit() {
    if(this.wordDefine === "") {
      this.wordDefine = "SlideDown"
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
