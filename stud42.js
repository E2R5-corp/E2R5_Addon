(function () {
    var img = document.createElement("img")
    img.src = "https://i.imgur.com/WOmX9KB.png"
    img.width = 160
    img.height = 160
        
    var img2 = document.createElement("img")
    img2.src = "https://i.imgur.com/WOmX9KB.png"
    img2.width = 50
    img2.height = 50

    var img3 = document.createElement("img")
    img3.src = "https://i.imgur.com/WOmX9KB.png"
    img3.width = 50
    img3.height = 50

    var src = document.getElementsByClassName("credits")
    src[0].prepend(img)
    
    var clusters = document.getElementsByTagName("tbody")

    var r5right = clusters[1].children[8].children[0]
    r5right.textContent = ""
    r5right.append(img2)

    var r5left = clusters[1].children[8].children[26]
    r5left.textContent = ""
    r5left.append(img3)
})();
