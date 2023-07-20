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
  
  ngOnInit() {
    if(this.wordDefine === "") {
      this.wordDefine = "Jump"
    }
    
  }
  
  getStyle() {
    return {
      color: this.backgroundColor,
    }
  }
}
