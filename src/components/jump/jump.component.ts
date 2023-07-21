import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-jump',
  templateUrl: './jump.component.html',
  styleUrls: ['./jump.component.css']
})
export class JumpComponent {
  @Input() backgroundColor: string; 
  @Input() wordDefine: string;
  @ViewChild('jump') jumpWord: ElementRef;
  isPlaying: boolean = false;
  
  ngOnInit() {
    if(this.wordDefine === "") {
      this.wordDefine = "Jump"
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
