import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-underline-from-center',
  templateUrl: './underline-from-center.component.html',
  styleUrls: ['./underline-from-center.component.css']
})
export class UnderlineFromCenterComponent {
  @Input() backgroundColor: string; 
  @Input() wordDefine: string;
  
  ngOnInit() {
    if(this.wordDefine === "") {
      this.wordDefine = "UnderlineC"
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
