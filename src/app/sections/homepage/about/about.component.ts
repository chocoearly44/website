import {Component, OnInit} from '@angular/core';

import {faGithub, faTwitch, faYoutube} from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
	totalYears: number = 0;

	// Icons
	faGithub = faGithub;
	faYoutube = faYoutube;
	faTwitch = faTwitch;

	ngOnInit(): void {
		this.totalYears = new Date().getFullYear() - 2014;
	}
}
