var listOfUsers = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya"];
var selectedIndex = 0;
function clearTextBox() {
    document.getElementById("textBox").value = "";
}

function removeSuggessionBox() {
    if (document.activeElement.id != "textBox") {
        document.getElementById("suggestionBox").innerHTML = "";
        document.getElementById("suggestionBox").className = "suggestions";
    }
}

function selectValue(selectedValue) {
    document.getElementById("textBox").value = selectedValue;
    document.getElementById("suggestionBox").innerHTML = "";
    document.getElementById("suggestionBox").className = "suggestions";
}

function showSuggestions() {
    var text = document.getElementById("textBox").value;
    var suggestions = document.getElementById("suggestionBox");
    suggestions.innerHTML = "";
    suggestions.className = "suggestions";
    listOfUsers.sort();
    if (text.length > 0) {
        var matchedCount = 0;
        for (index = 0; index < listOfUsers.length; index++) {
            if (listOfUsers[index].toLowerCase().includes(text.toLowerCase())) {
                suggestions.innerHTML = suggestions.innerHTML + '<li onclick="selectValue(this.innerHTML)">' + listOfUsers[index] + '</li>';
                matchedCount = matchedCount + 1;
                if (matchedCount > 5) {
                    suggestions.className = "suggestions scroll";

                }
                else {
                    suggestions.className = "suggestions";
                }
            }
        }
        if (matchedCount == 0) {
            suggestions.innerHTML = "<li>No data Found</li>";
            suggestions.className = "suggestions";
        }
        else {
            document.getElementById("suggestionBox").getElementsByTagName("li")[0].className = "selected";
        }
    }
}

function onkeyUpFunctionSelector() {
    keycode = event.keyCode;
    var suggestions = document.getElementById("suggestionBox");
    var suggestionsList = suggestions.getElementsByTagName("li");
    if (event.keyCode == 40) {
        if (selectedIndex < suggestionsList.length - 1) {
            suggestionsList[selectedIndex++].className = "";
            suggestionsList[selectedIndex].className += "selected";
            if (selectedIndex > 4) {
                suggestions.scrollBy(0, 34);
            }
        }
    }
    else if (event.keyCode == 38) {
        if (selectedIndex > 0) {
            suggestionsList[selectedIndex--].className = "";
            suggestionsList[selectedIndex].className = "selected";
            if (selectedIndex % 4 < 4) {
                suggestions.scrollBy(0, -34);
            }
        }
    }
    else if (keycode == 13) {
        if (suggestionsList.length > 0) {
            selectedValue = suggestionsList[selectedIndex].innerHTML;
            selectValue(selectedValue);
        }
    }
    else {
        var valid =
            (keycode > 47 && keycode < 58) ||
            (keycode > 64 && keycode < 91) ||
            (keycode > 95 && keycode < 112) ||
            (keycode > 185 && keycode < 193) ||
            (keycode > 218 && keycode < 223 ||
                keycode == 32 || keycode == 13 ||
                keycode == 8);
        if (valid) {
            showSuggestions();
            selectedIndex = 0;
            suggestions.scrollTo(0, 0);
            suggestionsList[selectedIndex].className = "selected";
        }
    }
}