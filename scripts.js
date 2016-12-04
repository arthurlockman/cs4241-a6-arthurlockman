var wheelPosition = 0
var counter = 0

window.onload = function () {
    document.getElementById("wheelme").onwheel = wheel
    document.getElementById("clickme-onclick").onclick = clickmeClick
    document.getElementById("alert-hide").onclick = function() {
        document.getElementById("alert-bar").style.display = "none"
    }
    window.onresize = resize
    $('#hidden-button').hide()
}

function resize() { 
    console.log("new window size: " + window.innerWidth + " by " + window.innerHeight)
}

function wheel(e) {
    wheelPosition += e.deltaY
    var newFontSize = 14 + wheelPosition/500.0;
    document.getElementById("wheelme").style.fontSize = newFontSize + "px"
}

function clickmeClick() {
    document.getElementById("hidden-button").style.display = ""
    document.getElementById("clickme-hidden").addEventListener("click", hiddenButtonCounterIncrement)
}

function hiddenButtonCounterIncrement() {
    counter += 1
    document.getElementById('hidden-button-counter').innerHTML = "<p>You clicked the hidden button " + counter + " times.</p>"
}