import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MobxAngularModule } from 'mobx-angular';

import { AppComponent } from './app.component';
import { ExmplCmpComponent } from './cmps/exmpl-cmp/exmpl-cmp.component';

@NgModule({
  declarations: [AppComponent, ExmplCmpComponent],
  imports: [BrowserModule, MobxAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
