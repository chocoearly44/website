import {Component, OnInit} from '@angular/core';

import {
	faGithub,
	faInstagram,
	faStackOverflow,
	faTwitch,
	faTwitter,
	faYoutube
} from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
	totalYears: number = 0;

	// Icons
	faGithub = faGithub;
	faInstagram = faInstagram;
	faYoutube = faYoutube;
	faTwitter = faTwitter;
	faTwitch = faTwitch;
	faStackOverflow = faStackOverflow;

	ngOnInit(): void {
		this.totalYears = new Date().getFullYear() - 2014;
	}
}
