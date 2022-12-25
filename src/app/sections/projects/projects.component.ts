import {Component, OnInit} from '@angular/core';
import {Project} from "../../entities/project";
import {ProjectService} from "../../services/project/project.service";

import {faDocker, faGithub, faSteam} from '@fortawesome/free-brands-svg-icons';
import {faFaucetDrip, faGlobe} from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
	projects: Array<Project> = [];
	forFun: Array<Project> = [];
	archived: Array<Project> = [];

	// Icons
	faGlobe = faGlobe;
	faGithub = faGithub;
	faFaucetDrip = faFaucetDrip;
	faDocker = faDocker;
	faSteam = faSteam;

	constructor(private projectService: ProjectService) {
	}

	ngOnInit(): void {
		this.projects = this.projectService.getProjects();
		this.forFun = this.projectService.getForFun();
		this.archived = this.projectService.getArchived();
	}
}
