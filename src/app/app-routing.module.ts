import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/view_components/home/home.component';
import { PageNotFoundComponent } from './components/view_components/page-not-found/page-not-found.component';
import { FitsComponent } from './components/view_components/fits/fits.component';
import { HowToComponent } from './components/view_components/how-to/how-to.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/home' },
	{ path: 'home', component: HomeComponent },
	{ path: 'fits', component: FitsComponent },
	{ path: 'howto', component: HowToComponent },
	{ path: '**',	component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
							PageNotFoundComponent,
							HomeComponent,
							FitsComponent,
							HowToComponent
						]