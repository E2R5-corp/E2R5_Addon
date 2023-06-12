(function () {
    document.getElementsByClassName("sidebar-menu-inner") && document.getElementsByClassName("sidebar-menu-inner")[0].getElementsByTagName("a")[6].remove()

    let img = document.createElement("img")
    img.src = "https://i.imgur.com/1vtZlTB.png"
    img.width = 160
    img.height = 160

    let img2 = document.createElement("img")
    img2.src = "https://i.imgur.com/X1QBzRU.png"
    img2.width = 50
    img2.height = 50

    let img3 = document.createElement("img")
    img3.src = "https://i.imgur.com/X1QBzRU.png"
    img3.width = 50
    img3.height = 50

    const src = document.getElementsByClassName("credits")
    let link = document.createElement('a');
    link.setAttribute('href', "https://e2-r5-org.vercel.app");

    src[0].appendChild(link).appendChild(img)

    const clusters = document?.getElementsByTagName("tbody")

    let r5right = clusters[1]?.children[8]?.children[0]
    if (r5right) {
        r5right.textContent = ""
        r5right.appendChild(img2)
    }

    let r5left = clusters[1]?.children[8]?.children[26]
    if (r5left) {
        r5left.textContent = ""
        r5left.appendChild(img3)
    }

    const location = document.getElementsByClassName("connected")[0].children[1].children[0]

    if (location) {
        if (location?.textContent?.match(/e2r[4-6]/g))
            location.style.color = "green"
        else
            location.style.color = "red"
    }
})();
