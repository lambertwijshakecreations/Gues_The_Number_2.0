//variabelen van HTML Elementen eerste pagina.
const containerDOM = document.querySelector(".container__dom");
const nameInput = document.querySelector("#nameInput");
const nameButton = document
	.querySelector("#submitButton")
	.addEventListener("click", () => noName(nameInput.value));

// functie die geactiveerd wordt wanneer er geen naam wordt ingevuld.
const noName = (value) => {
	if (value === "") {
		alert(
			"Sorry, ik mag niet met vreemden spelen. Maar als je mij verteld hoe je heet....?"
		);
	} else {
		pageTwo(nameInput.value);
	}
};

//Fuctie die de DOM van container_dom veranderd nadat de naam is opgegeven.
const pageTwo = (person) => {
	containerDOM.innerHTML = "";
	const newP1 = document.createElement("p");
	newP1.innerText = `Hallo ${person}, Leuk dat je mee doet! Voordat we beginnen zijn hier de spelregels:`;
	containerDOM.append(newP1);
	const newUl = document.createElement("ul");
	containerDOM.append(newUl);
	const newLi1 = document.createElement("li");
	newLi1.innerText = "Ik vraag je eerst twee getallen in te vullen.";
	newUl.appendChild(newLi1);
	const newLi2 = document.createElement("li");
	newLi2.innerText =
		"Tussen die twee getallen zal ik een getal kiezen die jij moet raden.";
	newUl.appendChild(newLi2);
	const newLi3 = document.createElement("li");
	newLi3.innerText =
		"Je krijgt 5 pogingen om te raden welk getal ik heb uitgekozen.";
	newUl.appendChild(newLi3);
	const newP2 = document.createElement("p");
	newP2.innerText = "Dit lijkt simpel toch? VEEL  SPEEL PLEZIER!";
	containerDOM.append(newP2);
	const beginButton = document.createElement("button");
	beginButton.id = "beginButton";
	beginButton.className = "begin-button";
	beginButton.innerText = "Beginnen";
	beginButton.addEventListener("click", () => pageThree());
	containerDOM.append(beginButton);
};

//Fuctie die de DOM van container_dom veranderd nadat de spelregels zijn uitgelgd.
const pageThree = () => {
	containerDOM.innerHTML = "";
	const newLabel1 = document.createElement("label");
	newLabel1.innerText = "Geef een minimaal getal:";
	containerDOM.append(newLabel1);
	const newInput1 = document.createElement("input");
	newInput1.type = "number";
	newInput1.id = "minNumber";
	newInput1.className = "min-number";
	newInput1.min = "1";
	newInput1.max = "100";
	newInput1.value = "";
	containerDOM.append(newInput1);
	const newBr1 = document.createElement("br");
	containerDOM.append(newBr1);
	const newLabel2 = document.createElement("label");
	newLabel2.innerText = "Geef een maximaal getal:";
	containerDOM.append(newLabel2);
	const newInput2 = document.createElement("input");
	newInput2.type = "number";
	newInput2.id = "maxNumber";
	newInput2.className = "max-number";
	newInput2.min = "1";
	newInput2.max = "100";
	newInput2.value = "";
	containerDOM.append(newInput2);
	const newBr2 = document.createElement("br");
	containerDOM.append(newBr2);
	const minMaxButton = document.createElement("button");
	minMaxButton.id = "minMaxButton";
	minMaxButton.className = "min-max-button";
	minMaxButton.innerText = "Aangeven";
	minMaxButton.addEventListener("click", () => {
		//wanneer er niks in de velden word ingevuld.
		if (newInput1.value == "") {
			alert("Er moet een minimaal getal gegeven worden vanaf 0.");
		} else if (newInput2.value == "") {
			alert("Er moet een maximaal getal gegeven worden tot 100.");
		} else {
			chosenNumber(newInput1, newInput2);
		}
	});
	containerDOM.append(minMaxButton);
};

// functie die een nummer uitkiest tussen een minimaal en maximaal getal dat is opgegeven door de speler.
const chosenNumber = (min, max) => {
	const minN = +min.value;
	const maxN = +max.value;
	const newH4 = document.createElement("h4");
	newH4.innerText = `Je wilt dat ik  een getal kies tussen de ${minN} en ${maxN}?`;
	containerDOM.append(newH4);
	const yesButton = document.createElement("button");
	yesButton.className = "yes-button";
	yesButton.innerText = "beginnen";
	yesButton.addEventListener("click", () => pageFour(randomNumber, minN, maxN));
	containerDOM.append(yesButton);
	const noButton = document.createElement("button");
	noButton.className = "no-button";
	noButton.innerText = "opnieuw";
	noButton.addEventListener("click", () => pageThree());
	containerDOM.append(noButton);
	const randomNumber = Math.floor(Math.random() * (maxN - minN) + minN);
	console.log("Computer chose " + randomNumber);
};

//Fuctie die de DOM in het speelveld veranderd.
const pageFour = (number, min, max) => {
	containerDOM.innerHTML = "";
	const comNumber = +number;
	const playerMin = +min;
	const playerMax = +max;
	const newH3 = document.createElement("h3");
	newH3.innerText = `Welk getal heb ik in gedachten tussen de ${playerMin} en ${playerMax}?`;
	containerDOM.append(newH3);
	const newInput3 = document.createElement("input");
	newInput3.type = "number";
	newInput3.min = "0";
	newInput3.max = "3";
	newInput3.id = "yourGuesNumber";
	newInput3.className = "your_gues_number";
	containerDOM.append(newInput3);
	const newBr3 = document.createElement("br");
	containerDOM.append(newBr3);
	const guesButton = document.createElement("button");
	guesButton.type = "submit";
	guesButton.id = "submitNumberButton";
	guesButton.innerText = "Raad";
	guesButton.addEventListener("click", () =>
		playerChosenNumber(comNumber, newInput3.value)
	);
	containerDOM.append(guesButton);
	const newBr4 = document.createElement("br");
	containerDOM.append(newBr4);
	const newDiv1 = document.createElement("div");
	newDiv1.className = "answer-hints";
	containerDOM.append(newDiv1);
	const newH31 = document.createElement("h3");
	newH31.id = "answer";
	newDiv1.appendChild(newH31);
};

let i = 1; // Getal waar de loop begint

//functie van het spel zelf.
const playerChosenNumber = (numberC, numberP) => {
	const computerNumber = +numberC;
	const playerNumber = +numberP;
	const inputWindow = document.getElementById("yourGuesNumber");
	const answer = document.getElementById("answer");
	while (i < 6) {
		if (playerNumber < computerNumber) {
			answer.innerText = `Beurt: ${i}. Helaas. Misschien een 'hoger' getal?`;
			i++;
			inputWindow.value = "";
			break;
		} else if (playerNumber > computerNumber) {
			answer.innerText = `Beurt: ${i}. Helaas. Misschien een 'lager' getal?`;
			i++;
			inputWindow.value = "";
			break;
		} else {
			wonGame(computerNumber, i, nameInput);
			break;
		}
	}
	if (i === 6) {
		lostGame(computerNumber, nameInput);
	}
};

//Fuctie die de DOM van container_dom veranderd nadat het spel verloren is.
const lostGame = (number, player) => {
	containerDOM.innerHTML = "";
	const newH1 = document.createElement("h1");
	newH1.innerText = "GAME OVER";
	containerDOM.append(newH1);
	const newH2 = document.createElement("h2");
	newH2.innerText = `Helaas ${player.value} je vijf pogingen zijn voorbij. Het was nr: ${number}. Volgende keer beter.`;
	containerDOM.append(newH2);
	const returnButton = document.createElement("button");
	returnButton.innerText = "Opnieuw";
	returnButton.className = "return-button";
	returnButton.addEventListener("click", () => pageThree());
	containerDOM.append(returnButton);
};

//Fuctie die de DOM van container_dom veranderd nadat het spel gewonnen is.
const wonGame = (number, turns, player) => {
	console.log(turns);
	containerDOM.innerHTML = "";
	const newH1 = document.createElement("h1");
	newH1.innerText = ` GEFELICITEERD ${player.value}!!!!`;
	containerDOM.append(newH1);
	const newH2 = document.createElement("h2");
	newH2.innerText = `Het was inderdaad nr: ${number}. En je deed het in ${turns} keer! Nog een keer?`;
	containerDOM.append(newH2);
	const resetButton = document.createElement("button");
	resetButton.innerText = "Opnieuw";
	resetButton.className = "reset-button";
	resetButton.addEventListener("click", () => pageThree());
	containerDOM.append(resetButton);
};
