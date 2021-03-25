function colorDateDependingOnAge() {
    let fClass, i;
    let currentYear = new Date().getFullYear();
    fClass = document.querySelectorAll(".f"); // class "f" for Google Search Result
    for (i = 0; i < fClass.length; i++) {
        let tmpSpanData = fClass[i].firstChild.data;
        let currentSpanData = tmpSpanData.replace(' — ', '');
        let sdl = currentSpanData.length; // sdl = spanDataLength
        let lastFourChars = currentSpanData.charAt(sdl - 4) + currentSpanData.charAt(sdl - 3) + currentSpanData.charAt(sdl - 2) + currentSpanData.charAt(sdl - 1);
        let calculatedDifference = calculateDifference(currentYear, lastFourChars);
        fClass[i].style.margin = "0px 5px 0px 0px";
        fClass[i].style.padding = "1px";

        if (calculatedDifference <= 2 && calculatedDifference >= 0) {
            fClass[i].style.backgroundColor = "#c1fda6";
            fClass[i].style.border = "1px solid green";
            fClass[i].innerHTML = currentSpanData;
        }

        else if (calculatedDifference > 5) {
            fClass[i].style.backgroundColor = "#fda6a6";
            fClass[i].style.border = "1px solid red";
            fClass[i].innerHTML = currentSpanData;
        }

        else if (calculatedDifference > 2) {
            fClass[i].style.backgroundColor = "#fff6a9";
            fClass[i].style.border = "1px solid #ff832a";
            fClass[i].innerHTML = currentSpanData;
        }
    }
}

function calculateDifference(numberOne, numberTwo) {
    let result = numberOne - numberTwo;
    if (isNaN(result)) { return -1; }
    return result;
}

colorDateDependingOnAge()
