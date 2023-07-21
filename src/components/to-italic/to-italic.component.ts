import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-italic',
  templateUrl: './to-italic.component.html',
  styleUrls: ['./to-italic.component.css']
})
export class ToItalicComponent implements OnInit {
  @Input() backgroundColor: string;
  @Input() wordDefine: string;
  isPlaying: boolean = false;
  
  ngOnInit() {
    if(!this.wordDefine || this.wordDefine === '') {
      this.wordDefine = 'To italic'
    }
  }
  
  onPlaying(event) {
    this.isPlaying = event
  }

  getStyle() {
    return {
      color: this.backgroundColor
    }
  }
}
