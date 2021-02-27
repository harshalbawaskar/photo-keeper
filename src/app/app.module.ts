import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UIRouterModule } from '@uirouter/angular';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { STATES } from './states/states';
import { uiRouterConfigFn } from './states/state.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    SharedModule,
    UIRouterModule.forRoot({
      states: STATES,
      useHash: true,
      config: uiRouterConfigFn
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
