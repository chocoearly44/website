import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
	title: string = "";
	quote: string = "";

	constructor() {
	}

	ngOnInit(): void {
		if (Math.round(Math.random() + 1) === 1) {
			this.title = "Yes? ";
		} else {
			this.title = "No? ";
		}

		if (Math.round(Math.random() + 1) === 1) {
			this.title += "Yes.";
		} else {
			this.title += "No.";
		}

		const quotes: Array<string> = [
			"Oh, look. Another random visitor stumbled upon the site of mine.",
			"No",
			"Maybe?",
			"Regex equations",
			"das Kaffeeskript",
			"Your FPS is so bad that I went back in the time"
		];

		this.quote = quotes[Math.floor(Math.random() * quotes.length)];
	}
}
