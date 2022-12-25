import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {HeroComponent} from './sections/hero/hero.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AboutComponent} from './sections/about/about.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ProjectsComponent} from './sections/projects/projects.component';

@NgModule({
	declarations: [
		AppComponent,
		HomepageComponent,
		HeroComponent,
		AboutComponent,
		ProjectsComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule,
		FontAwesomeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
