import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-through',
  templateUrl: './line-through.component.html',
  styleUrls: ['./line-through.component.css']
})
export class LineThroughComponent implements OnInit {
  @Input() backgroundColor: string; 
  @Input() wordDefine: string;
  
  ngOnInit() {
    if(this.wordDefine === "") {
      this.wordDefine = "LineThrough"
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
