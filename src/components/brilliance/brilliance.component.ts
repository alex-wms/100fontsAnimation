import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brilliance',
  templateUrl: './brilliance.component.html',
  styleUrls: ['./brilliance.component.css']
})


export class BrillianceComponent implements OnInit {
  constructor() {}
  
  @Input() backgroundColor: string; 
  @Input() wordDefine: string;
  
  ngOnInit() {
    if(this.wordDefine === "") {
      this.wordDefine = "Brilliance"
    }
  }
  
  getBrillianceStyle() {
    return {
      backgroundImage: `linear-gradient(
        -50deg,
        ${this.backgroundColor} 47%,
        #FFF 50%,
        ${this.backgroundColor} 53%
      )`
    }
  }
}
