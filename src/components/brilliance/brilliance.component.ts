import { Component,Input,OnInit } from '@angular/core';
import { CardsContainerComponent } from 'src/app/cards-container/cards-container.component';

@Component({
  selector: 'app-brilliance',
  templateUrl: './brilliance.component.html',
  styleUrls: ['./brilliance.component.css'],
  providers: [CardsContainerComponent]
})


export class BrillianceComponent implements OnInit {
  
  @Input() backgroundColor: string; 
  @Input() wordDefine: string;
  isPlaying: boolean = false;
  
  ngOnInit() {
    if(this.wordDefine === "") {
      this.wordDefine = "Brilliance"
    }
  }
  
  onPlaying(event) {
    this.isPlaying = event;
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
