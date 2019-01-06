(function () {
    var img = document.createElement("img")
    img.src = "https://i.imgur.com/WOmX9KB.png"
    img.width = 210
    img.height = 210
    
    var src = document.getElementsByClassName("credits")
    src[0].append(img)
    
    var img2 = document.createElement("img")
    img2.src = "https://i.imgur.com/WOmX9KB.png"
    img2.width = 50
    img2.height = 50
    var clusters = document.getElementsByTagName("tbody")
    var r5 = clusters[1].children[8].children[0]
    r5.textContent = ""
    r5.append(img2)
})();
