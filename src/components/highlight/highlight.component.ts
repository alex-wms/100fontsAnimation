import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css']
})
export class HighlightComponent implements OnInit {
  @Input() backgroundColor: string; 
  @Input() wordDefine: string;
  
  ngOnInit() {
    if(this.wordDefine === "") {
      this.wordDefine = "Highlight"
    }
  }
  
  getStyle() {
    return {
      color: this.backgroundColor,
    }
  }
  
  getHrStyle() {
    return {
      backgroundColor: this.backgroundColor,
    }
  }
}
