function toggleSwitch(){
    let checkbox = document.getElementById("toggle");
    if (checkbox.checked) {
        document.getElementById("switch").style.background = "linear-gradient(225deg,rgb(177, 27, 214), rgb(0, 178, 209))"
    }else{
        document.getElementById("switch").style.background = "rgb(122, 122, 122)";
    }
}
