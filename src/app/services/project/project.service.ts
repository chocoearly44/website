import {Injectable} from '@angular/core';
import {Project} from "../../entities/project";

@Injectable({
	providedIn: 'root'
})
export class ProjectService {
	projects: Array<Project> = [
		{
			name: "JEA",
			description: "Java wrapper for Slovenian School System called eAsistent. JEA allows you to get your profile's data programmatically.",
			links: {github: "https://github.com/chocoearly44/jea"},
			icon: "https://raw.githubusercontent.com/chocoearly44/JEA/master/assets/icon.svg"
		},
		{
			name: "ZapIt",
			description: "An advanced MQTT client made for the modern age.",
			links: {github: "https://github.com/chocoearly44/ZapIt"},
			icon: "https://raw.githubusercontent.com/chocoearly44/ZapIt/master/assets/icon.svg"
		},
		{
			name: "Freenom4J",
			description: "Freenom API wrapper for JVM languages. ",
			links: {github: "https://github.com/chocoearly44/Freenom4J"},
			icon: "https://raw.githubusercontent.com/chocoearly44/Freenom4J/master/assets/icon.svg"
		},
		{
			name: "Monument",
			description: "A SpongeForge alternative for Vault Bukkit.",
			links: {
				github: "https://github.com/chocoearly44/Monument",
				spongemc: "https://ore.spongepowered.org/chocoearly44/Monument"
			},
			icon: "https://raw.githubusercontent.com/chocoearly44/Monument/master/assets/icon.svg"
		},
		{
			name: "Ethereum Price Background",
			description: "A beautiful Wallpaper Engine powered wallpaper that shows the price graph of popular cryptocurrencies.",
			links: {
				github: "https://github.com/chocoearly44/ethereum-price-background",
				steam: "https://steamcommunity.com/sharedfiles/filedetails/?id=2458069432"
			},
			icon: "https://raw.githubusercontent.com/chocoearly44/ethereum-price-background/master/assets/icon.svg"
		},
		{
			name: "BSOverlay",
			description: "VSCode extension that creates an overlay for your Broadcasting Software of choice.",
			links: {
				github: "https://github.com/chocoearly44/bsoverlay-vscode",
				vscode: "https://marketplace.visualstudio.com/items?itemName=chocoearly44.bsoverlay"
			},
			icon: "https://raw.githubusercontent.com/chocoearly44/bsoverlay-vscode/master/assets/icon.svg"
		},
		{
			name: "PhotonLib",
			description: "A general-purpose Java library.",
			links: {github: "https://github.com/chocoearly44/PhotonLib"},
			icon: "https://raw.githubusercontent.com/chocoearly44/PhotonLib/master/assets/icon.svg"
		},
		{
			name: "Alpine Rsync",
			description: "Linux Alpine with rsync preinstalled.",
			links: {
				github: "https://github.com/chocoearly44/alpine-rsync",
				docker: "https://hub.docker.com/r/chocoearly44/alpine-rsync"
			},
			icon: "https://raw.githubusercontent.com/chocoearly44/alpine-rsync/master/assets/icon.svg"
		},
		{
			name: "Open Timetable",
			description: "OTTF (Open Timetable Format) is a JSON file format used to standardize the way of providing school or work schedules for applications and websites.",
			links: {github: "https://github.com/OpenTimetable"},
			icon: "assets/img/projects/ottf.svg"
		},
		{
			name: "ClassCompanion",
			description: "",
			links: {github: "https://github.com/ClassCompanion"},
			icon: "assets/img/projects/classcompanion.svg"
		},
		{
			name: "UniKlaud",
			description: "Run your clouds in RAID.",
			links: {github: "https://github.com/LovroG05/UniKlaud"},
			icon: "assets/img/projects/uniklaud.svg"
		}
	];

	forFun: Array<Project> = [
		{
			name: "MCDE",
			description: "Minecraft as a simple desktop environment",
			links: {github: "https://github.com/chocoearly44/MCDE"},
			icon: "assets/img/projects/mcde.svg"
		},
		{
			name: "ePatchistent",
			description: "Zbirka orodij za krpanje in obstoječih krp za staro eAsistent aplikacijo",
			links: {github: "https://github.com/chocoearly44/ePatchistent"},
			icon: "assets/img/projects/epatchistent.svg"
		},
		{
			name: "UnsearchEngine",
			description: "Searches for everything that you didn't search for.",
			links: {
				github: "https://github.com/chocoearly44/UnsearchEngine",
				website: "https://unsearch.thesuperlab.tk"
			},
			icon: "https://raw.githubusercontent.com/chocoearly44/UnsearchEngine/master/src/assets/icon.svg"
		}
	];

	archived: Array<Project> = [
		{
			name: "Orwell",
			description: "Spigot chat proxy plugin.",
			links: {
				github: "https://github.com/chocoearly44/OrwellSpigot",
				spigot: "https://spigotmc.org/resources/orwell-disable-player-reports.103787"
			},
			icon: "https://raw.githubusercontent.com/chocoearly44/OrwellSpigot/master/assets/icon.svg"
		}
	];

	getProjects(): Array<Project> {
		return this.projects;
	}

	getForFun(): Array<Project> {
		return this.forFun;
	}

	getArchived(): Array<Project> {
		return this.archived;
	}
}
