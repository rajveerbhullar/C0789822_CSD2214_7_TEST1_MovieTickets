const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;

function SelectedMovieData(movieIndex, moviePrice) {
	localStorage.setItem("selectedMovieIndex", movieIndex);
	localStorage.setItem("selectedMoviePrice", moviePrice);
}

function updateSelectedCount() {
	const selectedSeats = document.querySelectorAll(".row .seat.selected");

	const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
	localStorage.setItem("selectesSeats", JSON.stringify(seatsIndex));

	const selectedSeatsCount = selectedSeats.length;
	count.innerText = selectedSeatsCount;
	total.innerText = selectedSeatsCount * ticketPrice;
}

movieSelect.addEventListener("change", (e) => {
	ticketPrice = +e.target.value;
	SelectedMovieData(e.target.selectedIndex, e.target.value);
	updateSelectedCount();
});

