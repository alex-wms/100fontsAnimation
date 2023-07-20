import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-underline',
  templateUrl: './underline.component.html',
  styleUrls: ['./underline.component.css']
})
export class UnderlineComponent {
  @Input() backgroundColor: string; 
  @Input() wordDefine: string;
  
  ngOnInit() {
    if(this.wordDefine === "") {
      this.wordDefine = "Underline"
    }
  }
  
  getStyle() {
    return {
      color: this.backgroundColor,
    }
  }
}
