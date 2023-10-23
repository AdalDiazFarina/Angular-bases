import { NgModule } from '@angular/core';
import { CounterModule } from './counter/counter.module';
import { BrowserModule } from '@angular/platform-browser';
import { HeroModule } from './heroes/hero.module';


import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
