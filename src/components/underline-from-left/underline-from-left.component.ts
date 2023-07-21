import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-underline-from-left',
  templateUrl: './underline-from-left.component.html',
  styleUrls: ['./underline-from-left.component.css']
})
export class UnderlineFromLeftComponent {
  @Input() backgroundColor: string; 
  @Input() wordDefine: string;
  isPlaying: boolean = false;

  ngOnInit() {
    if(this.wordDefine === "") {
      this.wordDefine = "Underlinel"
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
