import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-smaller',
  templateUrl: './smaller.component.html',
  styleUrls: ['./smaller.component.css']
})
export class SmallerComponent implements OnInit {
  @Input() backgroundColor: string; 
  @Input() wordDefine: string;
  
  ngOnInit() {
    if(this.wordDefine === "") {
      this.wordDefine = "Smaller"
    }
  }
  
  getStyle() {
    return {
      color: this.backgroundColor,
    }
  }
}
