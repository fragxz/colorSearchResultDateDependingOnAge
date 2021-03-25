function calculateDifference(numberOne, numberTwo) {
	let result = numberOne - numberTwo;
	if (isNaN(result)) {
  	return -1;
} 

return result;
}

function colorDateDependingOnAge() {
  let fClass, i;
  let currentYear = new Date().getFullYear();
  fClass = document.querySelectorAll(".f"); // For Google Search Result
  for (i = 0; i < fClass.length; i++) {
  
    let tmpSpanData = fClass[i].firstChild.data;
    let currentSpanData = tmpSpanData.replace(' — ', '');
    let sdl = currentSpanData.length; // spanDataLength
    let lastFourChars = currentSpanData.charAt(sdl-4) + currentSpanData.charAt(sdl-3) + currentSpanData.charAt(sdl-2) + currentSpanData.charAt(sdl-1);

let calculatedDifference = calculateDifference(currentYear, lastFourChars) ;

if (calculatedDifference <= 2 && calculatedDifference >= 0) {
fClass[i].style.backgroundColor = "green";
} 

else if (calculatedDifference > 5) {
fClass[i].style.backgroundColor = "red";
}

else if (calculatedDifference > 2) {
fClass[i].style.backgroundColor = "yellow";
}
    

  }
}

colorDateDependingOnAge()
