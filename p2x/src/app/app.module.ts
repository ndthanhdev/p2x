import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { PageTitleService } from "./services/page-title/page-title.service";
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { reducer } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ApolloModule } from 'apollo-angular';
import { CustomRouterStateSerializer } from './reducers/router';
import { provideClient } from './utils/provideClient';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducer),
    StoreDevtoolsModule.instrument({
      maxAge: 10 //  Retains last 25 states
    }),
    AppRoutingModule,
    StoreRouterConnectingModule,
    EffectsModule.forRoot([]),
    ApolloModule.forRoot(provideClient),
    SharedModule
  ],
  providers: [
    PageTitleService,
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
