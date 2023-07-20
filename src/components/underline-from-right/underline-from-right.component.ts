import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-underline-from-right',
  templateUrl: './underline-from-right.component.html',
  styleUrls: ['./underline-from-right.component.css']
})
export class UnderlineFromRightComponent {
  @Input() backgroundColor: string; 
  @Input() wordDefine: string;
  
  ngOnInit() {
    if(this.wordDefine === "") {
      this.wordDefine = "Underliner"
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
