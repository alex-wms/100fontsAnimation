import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-underline-from-left',
  templateUrl: './underline-from-left.component.html',
  styleUrls: ['./underline-from-left.component.css']
})
export class UnderlineFromLeftComponent {
  @Input() backgroundColor: string; 
  @Input() wordDefine: string;
  
  ngOnInit() {
    if(this.wordDefine === "") {
      this.wordDefine = "Underlinel"
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
