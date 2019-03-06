import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParallaxScrollModule} from 'ng2-parallaxscroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/layout_components/footer/footer.component';
import { HeaderComponent } from './components/layout_components/header/header.component';
import { HeroComponent } from './components/layout_components/hero/hero.component';
import { MainNavComponent } from './components/layout_components/main-nav/main-nav.component';
import { AddClassOnScrollDirective } from './directives/add-class-on-scroll/add-class-on-scroll.directive';
import { QuickDefComponent } from './components/elements/quick-def/quick-def.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    MainNavComponent,
    AddClassOnScrollDirective,
    QuickDefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ParallaxScrollModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
