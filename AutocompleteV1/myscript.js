var listOfUsers = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya"];

function removeSuggessionBox() {
    if(document.activeElement.id != "textBox") {
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
    if(text.length>0) {
        var matchedCount = 0;
        for(index=0 ; index < listOfUsers.length ; index++) {
            if(listOfUsers[index].toLowerCase().includes(text.toLowerCase())) {
                suggestions.innerHTML = suggestions.innerHTML  + '<li onclick="selectValue(this.innerHTML)">'+ listOfUsers[index] +'</li>';
                matchedCount = matchedCount + 1;
                if(matchedCount > 5) {
                    suggestions.className = "suggestions scroll";
                }
                else {
                    suggestions.className = "suggestions";
                }
            } 
        }
        if(matchedCount == 0) {
            suggestions.innerHTML = "<li>No data Found</li>";
            suggestions.className = "suggestions";
        }
    }
}