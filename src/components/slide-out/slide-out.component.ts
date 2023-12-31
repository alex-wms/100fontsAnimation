import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide-out',
  templateUrl: './slide-out.component.html',
  styleUrls: ['./slide-out.component.css']
})
export class SlideOutComponent {
  @Input() backgroundColor: string; 
  @Input() wordDefine: string;
  hoverBackgroundColor: string = "#f2b805" 
  isPlaying: boolean = false;
  
  ngOnInit() {
    if(this.wordDefine === "") {
      this.wordDefine = "SlideOut"
    }
  }
  
  onPlaying(event) {
    this.isPlaying = event
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
