function hashCode(s){return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);}
(function () {
    var user = [-1424312687, 1589910844, -848562890, -1531793145, 108948942, -1373278083, 405911556, -336724740, 807584340, -1426231434, 1526885208, 97380397, -1271124286, 1870877415, 121663155, 124472314, -1162036722, -1422336123, 222091984, 1593532256, 726326755, 110371709, 1162903636, 411040646, -1581526956, 1816611858];
    var login = document.getElementsByClassName("login")[0].dataset.login
    if (user.includes(hashCode(login)))
    {
        var img = document.createElement("img")
        img.src = "https://i.imgur.com/1vtZlTB.png"
        img.width = 64
        img.height = 64
        
        var src = document.getElementsByClassName("name margin-top-15 margin-bottom-10")
        src[0].append(img)
    }
	else 
	{
		var img = document.createElement("img")
        img.src = "https://i.imgur.com/SJepEyK.png"
        img.width = 64
        img.height = 64

		var src = document.getElementsByClassName("name margin-top-15 margin-bottom-10")
        src[0].append(img)	
	}
    var location = document.getElementsByClassName("user-poste-infos")
    var locdiv = document.getElementsByClassName("user-header-box location")
    if (location[0].textContent.match(/e2r[3-6]/g))
        locdiv[0].style.color = "#ffcc00"
    else
        locdiv[0].style.color = "red"
})();
