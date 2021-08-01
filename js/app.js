if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		navigator.serviceWorker.register("../sw.js").then(() => {});
	});
}

AOS.init({
	once: true,
});

const projectsList = [
	{
		title: "1TapHelp",
		desc: "Disaster Management System developed as a Project for Smart India Hackathon. Winner of SIH 2020. \n [ PRIVATE ]",
		category: "default",
	},
	{
		title: "Shipper",
		desc: "Traffic Management and Navigation for Coastal Regions. Developed for ASEAN-INDIA Hackathon 2021 and won Encouragement Award.",
		category: "default",
		github: "https://github.com/NiketanG/Shipper",
		link: "https://shipper-web.netlify.app/",
	},
	{
		title: "Shipper-ML",
		desc: "Object Recognition API for identifying Ships from Satellite Imagery. Used in Shipper, for ASEAN-INDIA Hackathon 2021.",
		category: "default",
		github: "https://github.com/NiketanG/Shipper-ml",
		link: "http://nikketan.pythonanywhere.com/",
	},
	{
		title: "noobx - Portfolio Website",
		desc: "Portfolio Website for Gaurav Popalghat (noobx). Built with Next.js, TailwindCSS & Sanity.io.",

		link: "https://noobx.in",
		category: "default",
	},
	{
		title: "Patronus Interiors Website",
		desc: "Website for Patronus Interiors, Pune. Built with Next.js.",

		link: "https://patronusinteriors.com",
		category: "default",
	},
	{
		title: "TechnoFest 2k20 Registration Website",
		desc: "A Registration Website for online registration of TechnoFest 2K20, conducted by COMeIT in Government Polytechnic, Pune. Includes Payment Gateway for Online Payments.",
		github: "https://github.com/NiketanG/COMeIT_RegistrationApp",
		link: "https://bit.ly/technofest2k20",
		category: "default",
	},
	{
		title: "Online Quiz",
		desc: "A Quiz System with customisable no. of subjects and questions, random questions for each user, Sessions for tracking attempted quiestions and a leaderboard to view score. Built originally for TechnoFest 2k20.",
		github: "https://github.com/NiketanG/TF_Quiz",
		link: "http://bit.ly/tf-quiz",
		category: "default",
	},

	{
		title: "Shortr",
		desc: "Open-source URL Shortening Service with support for Custom Short Urls & Granular Statistics.",
		github: "https://github.com/NiketanG/Shortr",
		link: "http://sh-rtr.herokuapp.com/",
		category: "personal",
	},
	{
		title: "Online 2 Player Stone-Paper-Scissor",
		desc: "Online, Stone-Paper-Scissor Game that is playable over the internet, between 2 players.",
		github: "https://github.com/NiketanG/stone-paper-scissor-online",
		link: "https://bit.ly/stone-paper-scissor",
		category: "personal",
	},
	{
		title: "Online 2 Player Tic-Tac-Toe",
		desc: "Online, Tic-Tac-Toe Game that is playable over the internet, between 2 players.",
		github: "https://github.com/NiketanG/tic-tac-toe-online",
		link: "https://bit.ly/tic-tac-toe-online",
		category: "personal",
	},
	{
		title: "Sensei",
		desc: "Use your Smartphone as a Laser Pointer for your laptop., using the new Generic Sensor API.",
		github: "https://github.com/NiketanG/Sensei",
		link: "https://sensei-remote.herokuapp.com/",
		category: "personal",
	},
	{
		title: "ToDo App",
		desc: "A Serverless, Synced ToDo App, Built using Firebase Cloud Functions, Frontend using React Material UI.",
		github: "https://github.com/NiketanG/ToDoApp",
		link: "https://todoapp-7ee2e.firebaseapp.com/",
		category: "personal",
	},
];

document.querySelector("#contactForm").addEventListener("submit", function (e) {
	e.preventDefault();
	var name = document
		.querySelector("#contactForm")
		.getElementsByTagName("input")[0].value;
	var email = document
		.querySelector("#contactForm")
		.getElementsByTagName("input")[1].value;
	var message = document
		.querySelector("#contactForm")
		.getElementsByTagName("textarea")[0].value;

	var templateParams = {
		from_name: name,
		from_email: email,
		message_html: message,
	};

	emailjs.send("gmail", "template_06EQuuhx", templateParams).then(
		function () {
			document.querySelector("#messageSubmit").innerHTML = "✔️ Sent";
		},
		function (error) {
			console.log("FAILED...", error);
			document.querySelector("#messageSubmit").innerHTML = "❌ Failed";
		}
	);
});

function htmlToElement(html) {
	var template = document.createElement("template");
	html = html.trim(); // Never return a text node of whitespace as the result
	template.innerHTML = html;
	return template.content.firstChild;
}

projectsList.forEach((project) => {
	const newProject = htmlToElement(
		'<div class="card projectCard" data-aos="fade-down"><h3>' +
			project.title +
			"</h3><p>" +
			project.desc +
			'</p><div class="links">' +
			(project.github === undefined
				? ""
				: '<a href="' +
				  project.github +
				  '" class="links" target="_blank" rel="noreferrer" data-splitbee-event="Project Source Code" data-splitbee-event-type="' +
				  project.title +
				  '"><img alt="Github Repository" class="icon" width="16px" height="16px" src="./assets/img/github.png" /></a>') +
			(project.link === undefined
				? ""
				: '<a href="' +
				  project.link +
				  '" class="links" target="_blank" rel="noreferrer" data-splitbee-event="Project Demo" data-splitbee-event-type="' +
				  project.title +
				  '"><img alt="Demo Link" width="16px" height="16px" class="icon" src="./assets/img/globe.png" /></a></div></div>')
	);
	document
		.querySelector(".projects .content ." + project.category + " .row")
		.appendChild(newProject);
});

var title = document.getElementById("textTypeWriter");
var typewriter = new Typewriter(title, {
	loop: true,
	delay: 80,
});

typewriter
	.typeString("<strong>Freelancer</strong>")
	.pauseFor(500)
	.deleteAll()
	.typeString("<strong>Web Designer</strong>")
	.pauseFor(500)
	.deleteChars(8)
	.typeString("<strong>Developer</strong>")
	.pauseFor(500)
	.deleteAll()
	.pauseFor(500)
	.start();

var about = document.querySelector(".about .content h1");
var typewriter2 = new Typewriter(about, {
	loop: true,
});
typewriter2.typeString("ABOUT ME").pauseFor(1000).deleteAll().start();

var skills = document.querySelector(".skills .content h1");
var typewriter3 = new Typewriter(skills, {
	loop: true,
});
typewriter3.typeString("SKILLS").pauseFor(1000).deleteAll().start();

var projects = document.querySelector(".projects .content h1");
var typewriter4 = new Typewriter(projects, {
	loop: true,
});
typewriter4.typeString("PROJECTS").pauseFor(1000).deleteAll().start();

var achievements = document.querySelector(".achievements .content h1");
var typewriter5 = new Typewriter(achievements, {
	loop: true,
});
typewriter5.typeString("ACHIEVEMENTS").pauseFor(1000).deleteAll().start();

var contact = document.querySelector(".contact .content h1");
var typewriter6 = new Typewriter(contact, {
	loop: true,
});
typewriter6.typeString("CONTACT").pauseFor(1000).deleteAll().start();

var end = document.querySelector(".end .content h1");
var typewriter7 = new Typewriter(end, {
	loop: true,
});
typewriter7.typeString("ABOUT").pauseFor(1000).deleteAll().start();
