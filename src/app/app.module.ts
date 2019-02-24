import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParallaxScrollModule} from 'ng2-parallaxscroll';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/layout_components/footer/footer.component';
import { HeaderComponent } from './components/layout_components/header/header.component';
import { HeroComponent } from './components/layout_components/hero/hero.component';
import { MainNavComponent } from './components/layout_components/main-nav/main-nav.component';
import { AddClassOnScrollDirective } from './directives/add-class-on-scroll/add-class-on-scroll.directive';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    MainNavComponent,
    AddClassOnScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ParallaxScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
