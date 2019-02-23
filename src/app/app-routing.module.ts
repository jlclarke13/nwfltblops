import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/view_components/home/home.component';
import { PageNotFoundComponent } from './components/view_components/page-not-found/page-not-found.component';
import { FitsComponent } from './components/view_components/fits/fits.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/home' },
	{ path: 'home', component: HomeComponent },
	{ path: 'fits', component: FitsComponent },
	{ path: '**',	component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
							PageNotFoundComponent,
							HomeComponent,
							FitsComponent
						]