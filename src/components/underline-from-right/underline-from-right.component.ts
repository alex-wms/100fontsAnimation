import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-underline-from-right',
  templateUrl: './underline-from-right.component.html',
  styleUrls: ['./underline-from-right.component.css']
})
export class UnderlineFromRightComponent {
  @Input() backgroundColor: string; 
  @Input() wordDefine: string;
  isPlaying: boolean = false;
  
  ngOnInit() {
    if(this.wordDefine === "") {
      this.wordDefine = "Underliner"
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
  
  getHrStyle() {
    return {
      backgroundColor: this.backgroundColor,
    }
  }
}
