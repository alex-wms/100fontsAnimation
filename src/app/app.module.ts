import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrillianceComponent } from '../components/brilliance/brilliance.component';
import { FormsModule } from '@angular/forms';
import { SlideInComponent } from '../components/slide-in/slide-in.component';
import { SlideOutComponent } from '../components/slide-out/slide-out.component';
import { SlideDownComponent } from '../components/slide-down/slide-down.component';
import { SlideUpComponent } from '../components/slide-up/slide-up.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { TypingComponent } from '../components/typing/typing.component';
import { JumpComponent } from '../components/jump/jump.component';
import { ToItalicComponent } from '../components/to-italic/to-italic.component';
import { UnderlineComponent } from '../components/underline/underline.component';
import { UnderlineFromLeftComponent } from '../components/underline-from-left/underline-from-left.component';
import { UnderlineFromRightComponent } from '../components/underline-from-right/underline-from-right.component';
import { UnderlineFromCenterComponent } from '../components/underline-from-center/underline-from-center.component';
import { LineThroughComponent } from '../components/line-through/line-through.component';
import { HighlightComponent } from '../components/highlight/highlight.component';
import { BiggerComponent } from '../components/bigger/bigger.component';
import { SmallerComponent } from '../components/smaller/smaller.component';

@NgModule({
  declarations: [
    AppComponent,
    BrillianceComponent,
    SlideInComponent,
    SlideOutComponent,
    SlideDownComponent,
    SlideUpComponent,
    CardsContainerComponent,
    TypingComponent,
    JumpComponent,
    ToItalicComponent,
    UnderlineComponent,
    UnderlineFromLeftComponent,
    UnderlineFromRightComponent,
    UnderlineFromCenterComponent,
    LineThroughComponent,
    HighlightComponent,
    BiggerComponent,
    SmallerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
