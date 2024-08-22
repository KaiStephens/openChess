let currentOpening = ""
let ytVid = document.querySelector('.ytVid');

function carokann() {
	currentOpening = "karocann"
	ytVid.src = 'https://www.youtube.com/embed/rmbU97iftC8?si=mQqFoiji7uqgCFIh';
	openPageYT()
}

function stonewall() {
	currentOpening = "stonewall"
	ytVid.src = 'https://www.youtube.com/embed/4_brAnORWGw?si=84NiUyAy3rt1MW1T'
	openPageYT()
}

function slav() {
	currentOpening = "slav"
	ytVid.src = 'https://www.youtube.com/embed/cs54KXnGc-0?si=tVRMlGvSs_v3viyn'
	openPageYT()
}

function hideStartScreen() {
	let title = document.querySelector('h1');
	title.style.display = 'none';
	
	let buttonDiv = document.querySelector('.mainScreenButtonDiv')
	buttonDiv.style.display = 'none';
}

function hideYTScreen() {
	ytVid.style.display = 'none';

        let ytText = document.querySelector('#videoText');
        ytText.style.display = 'none';

        let ytBack = document.querySelector('.backButtonYT');
        ytBack.style.display = 'none';

        let ytProceed = document.querySelector('.proceedButtonYT');
        ytProceed.style.display = 'none';

}

function openPageYT(){ 
	hideStartScreen()

	ytVid.style.display = 'block';

	let ytText = document.querySelector('#videoText');
	ytText.style.display = 'block';

	let ytBack = document.querySelector('.backButtonYT');
        ytBack.style.display = 'inline-block';

	let ytProceed = document.querySelector('.proceedButtonYT');
        ytProceed.style.display = 'inline-block';
}

function backHomeScreen() {
	 location.reload(); 
}

var config = {
  orientation: 'black',
  draggable: true,
  dropOffBoard: 'snapback', // this is the default
  position: 'start'
}

var board = Chessboard('myBoard', config)

let myboard = document.querySelector('#myBoard');

function setCaro() {
	board.position('rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR')
	myBoard.style.display = 'block';

}

function setStonewall() {

	var config = {
	  orientation: 'white',
	  draggable: true,
	  dropOffBoard: 'snapback', // this is the default
	  position: 'start'
	}

	var board = Chessboard('myBoard', config)

        board.position('rnbqkb1r/ppp2ppp/4pn2/3p4/3P4/3BP3/PPP2PPP/RNBQK1NR')	
        myBoard.style.display = 'block';

}

function proceedButton() {
hideYTScreen()

if (currentOpening == "karocann") {
	setCaro()

} else if (currentOpening == "stonewall") {
	setStonewall()
}

}
