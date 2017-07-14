import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DependenciesComponent } from './dependencies/dependencies.component';
import { AtomicoAnimationDirective } from './atomico-animation.directive';
import { FormatterPipe } from './formatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DependenciesComponent,
    AtomicoAnimationDirective,
    FormatterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
