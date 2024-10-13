/*Name this external file gallery.js*/

function upDate(previewPic) {
    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";
    document.getElementById("image").innerHTML = previewPic.alt;
    var arr = document.getElementsByClassName("preview");
    for(var i =0; i<arr.length; i++){
        arr[i].setAttribute("tabindex", 0);
    }
}

function unDo(){
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML =
        "Hover over or TAB an image below to display here.";
}
