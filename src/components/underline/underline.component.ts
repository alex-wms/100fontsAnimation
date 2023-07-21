import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-underline',
  templateUrl: './underline.component.html',
  styleUrls: ['./underline.component.css']
})
export class UnderlineComponent {
  @Input() backgroundColor: string; 
  @Input() wordDefine: string;
  isPlaying: boolean = false;
  
  ngOnInit() {
    if(this.wordDefine === "") {
      this.wordDefine = "Underline"
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
