(function () {
    var img = document.createElement("img")
    img.src = "https://i.imgur.com/WOmX9KB.png"
    img.width = 64
    img.height = 64

    var src = document.getElementsByClassName("name margin-top-15 margin-bottom-10")
    src[0].append(img)
    var location = document.getElementsByClassName("user-poste-infos")
    var locdiv = document.getElementsByClassName("user-header-box location")
    if (location[0].textContent.match(/e2r[3-6]/g))
        locdiv[0].style.color = "#ffcc00"
    else
        locdiv[0].style.color = "red"
})();
