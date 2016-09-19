//Initial
//Functions
function hideElementById(x) {
    document.getElementById(x).style.display = "none";
}
function showElementById(x) {
    document.getElementById(x).style.display = "block";
}

function initial_chosen() {
    var type = document.forms["Form"]["form"].value;
    if (type=="1") {
        showElementById("infrastructure");
        hideElementById("counter");
    } else {
        showElementById("counter");
        hideElementById("infrastructure");
    }
}
    
function ii_chosen() {
    var type = document.forms["Form"]["ii_type"].value;
    hideElementById("ix_mall");
    hideElementById("ix_museum");
    switch (type) {
        case "mall":
            showElementById("ix_mall");
            break;
        case "museum":
            showElementById("ix_museum");
            break;
    }
    document.getElementById("extra").innerHTML = "Type of Infrastructure you have chosen is: " + type;
}

function ci_chosen() {
    var type = document.forms["Form"]["ci_type"].value;
    hideElementById("c_mall");
    hideElementById("c_exhibitioncentre");
    hideElementById("c_museum");
    hideElementById("c_university");
    switch (type) {
        case "mall":
            showElementById("c_mall");
            break;
        case "exhibitioncentre":
            showElementById("c_exhibitioncentre");
            break;
        case "museum":
            showElementById("c_museum");
            break;
        case "university":
            showElementById("c_university");
            break;
    }
    document.getElementById("extra").innerHTML = "Type of Infrastructure you have chosen is: " + type;
}