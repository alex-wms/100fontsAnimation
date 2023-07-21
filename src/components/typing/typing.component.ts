import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']
})
export class TypingComponent implements OnInit {
  @Input() backgroundColor: string;
  @Input() wordDefine: string;
  isPlaying: boolean = false;
  
  ngOnInit(): void {
    if(this.wordDefine === "") {
      this.wordDefine = "Typing"
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
