import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-smaller',
  templateUrl: './smaller.component.html',
  styleUrls: ['./smaller.component.css']
})
export class SmallerComponent implements OnInit {
  @Input() backgroundColor: string; 
  @Input() wordDefine: string;
  isPlaying: boolean = false;

  ngOnInit() {
    if(this.wordDefine === "") {
      this.wordDefine = "Smaller"
    }
  }
  
  onPlaying(event) {
    this.isPlaying = event
  }
  
  getStyle() {
    return {
      color: this.backgroundColor,
    }
  }
}
