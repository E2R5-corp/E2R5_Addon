(function () {
    var img = document.createElement("img")
    img.src = "https://i.imgur.com/1vtZlTB.png"
    img.width = 160
    img.height = 160
        
    var img2 = document.createElement("img")
    img2.src = "https://i.imgur.com/X1QBzRU.png"
    img2.width = 50
    img2.height = 50

    var img3 = document.createElement("img")
    img3.src = "https://i.imgur.com/X1QBzRU.png"
    img3.width = 50
    img3.height = 50

    var img4 = document.createElement("img")
    img4.src = "https://i.imgur.com/X1QBzRU.png"
    img4.width = 50
    img4.height = 50

    var img5 = document.createElement("img")
    img5.src = "https://i.imgur.com/X1QBzRU.png"
    img5.width = 50
    img5.height = 50

    var src = document.getElementsByClassName("credits")
    src[0].prepend(img)
    
    var clusters = document.getElementsByTagName("tbody")

    var r5right = clusters[1].children[8].children[0]
    r5right.textContent = ""
    r5right.append(img2)

    var r5left = clusters[1].children[8].children[26]
    r5left.textContent = ""
    r5left.append(img3)

    var r5midleft = clusters[1].children[8].children[8]
    r5midleft.textContent = ""
    r5midleft.append(img4)

    var r5midright = clusters[1].children[8].children[18]
    r5midright.textContent = ""
    r5midright.append(img5)

    var location = document.getElementsByClassName("connected")[0].children[1].children[0]
    if (location.textContent.match(/e2r[4-6]/g))
        location.style.color = "green"
    else
        location.style.color = "red"
})();
