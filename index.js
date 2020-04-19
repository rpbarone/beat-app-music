window.addEventListener("load", () => {
	const target = window.document.getElementsByTagName('h1')[0]
	const sounds = document.querySelectorAll(".sound");
	const pads = document.querySelectorAll(".pads div");
	const visual = document.querySelector(".visual");
	const colors = [
		'rgb(96, 211, 148)',
		'rgb(211, 96, 96)',
		'rgb(192, 96, 211)',
		'rgb(211, 209, 96)',
		'rgb(104, 96, 211)',
		'rgb(96, 178, 211)'
	];


	const app = document.querySelector(".app")

	/* Animation Title */ 
	const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both ">${letter}</span>`
	const colorLetter = letter => `<span style="color: hsla(${Math.random()*360}, 100%, 80%, 1);">${letter}</span>`;
	const flickerAndColorText = text => 
	  text
	    .split('')
	    .map(flickerLetter)
	    .map(colorLetter)
	    .join('');
	const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);


	neonGlory(target);
	target.onclick = ({ target }) =>  neonGlory(target);


	/* Tap music */


	pads.forEach((pad, index) => {
		pad.addEventListener("click", () => {
			sounds[index].currentTime = 0;
			sounds[index].play();
			createBubble(index);
			setBg(index);
		})
	})

	const createBubble = index => {
		//Create bubbles
		const bubble = document.createElement("div");
		visual.appendChild(bubble);
		bubble.style.backgroundColor = colors[index];
		bubble.style.animation = "jump 1s ease";
		bubble.addEventListener("animationend", function() {
	    visual.removeChild(this);
	    });
	}

	const setBg = (index) => {
		app.style.background = "linear-gradient(to right, rgb(16, 20, 12), "  
		+ colors[Math.floor(Math.random() * 6)] + ")";
	}

});
