(function () {
    var img = document.createElement("img")
    img.src = "https://i.imgur.com/WOmX9KB.png"
    img.width = 64
    img.height = 64

    var src = document.getElementsByClassName("name margin-top-15 margin-bottom-10")
    src[0].append(img)
    
    document.getElementsByClassName("help-button")[0].remove()
    document.getElementsByClassName("ol-is-watching-you")[0].remove()
})();
