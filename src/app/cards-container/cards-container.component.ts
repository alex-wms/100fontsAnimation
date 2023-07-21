import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent {
  @Output() isPlaying = new EventEmitter<boolean>()

  onMouseEnter() {
    this.isPlaying.emit(true);
  }
  
  onMouseLeave() {
    this.isPlaying.emit(false)
  }
} 
