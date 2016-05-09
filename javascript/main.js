var alreadyScrolled = false;
var open = false;
var category = "all"
var catopen = false;
var element = document.getElementById("ul")
var dropelement = document.getElementById("dropdown-content")
var dropelement2 = document.getElementById("dropdown")
var dropimageel = document.getElementById("dropimage")
var dropimageel2 = document.getElementById("dropbutton")
var categorydrop = document.getElementById("categorydrop-content")
var displayVar = false;
var tableItems = ["earrings", "necklaces", "bracelets", "soutache", "soutache2", "beads1", "beads2", "scarf"]
var nameVar = ""
var emailVar = ""
var postalcodeVar = ""
var additionalcommentsVar = ""
var link = document.getElementById('subButton')
var email = document.getElementById('email').value
var name = document.getElementById('name2').value
var product = document.getElementById('name').innerHTML
var price = document.getElementById('price').innerHTML
var postalcode = document.getElementById('postalcode').value
var comment = document.getElementById('comment').value
link.onclick = function () {
    var openYes = true
    
    link = document.getElementById('subButton')
    email = document.getElementById('email').value
    name = document.getElementById('name2').value
    product = document.getElementById('name').innerHTML
    price = document.getElementById('price').innerHTML
    postalcode = document.getElementById('postalcode').value
    comment = document.getElementById('comment').value
    if (email == "") {
        document.getElementById('email').style.border = "1px solid rgba(255,0,0,0.84)"
        openYes = false
    }
    if (postalcode == "") {
        document.getElementById('postalcode').style.border = "1px solid rgba(255,0,0,0.84)"
        openYes = false
    }
    if (name == "") {
        document.getElementById('name2').style.border = "1px solid rgba(255,0,0,0.84)"
        openYes = false
        
    } 
    if (openYes){
        this.href = "mailto:agdesigncreatif@gmail.com?subject=AUTOMATED MESSAGE FROM AGDESIGNCREATIF&body=";
        this.href += createMail();
        alert("An E-mail window will now open. Please press 'send' once the window is open. If a new window does not open, select the e-mail program when prompted.")
    } else {
        alert("Please fill all fields.")
    }
}

function createMail() {
    return 'Hello! [ ' + name + ' ] at [ ' + email + ' ] has requested to buy a product.%0D%0A The product is: [ ' + product + ' ] at the cost of: [ ' + price + ' ]%0D%0A The indicated postal code is: [ ' + postalcode + ' ]%0D%0A Comment from user: %0D%0A' + comment
}
window.onload = function () {

    if (window.innerWidth < 768) {
        element.style.animationName = "bar_in"
        element.style.animationDuration = "0s"
        element.style.animationFillMode = "forwards"
        element.style.webkitAnimationName = "bar_in"
        element.style.webkitAnimationDuration = "0s"
        element.style.webkitAnimationFillMode = "forwards"
    } else {
        if (window.pageYOffset > 20) {
            alreadyScrolled = true;
            element.style.animationName = "bar_in"
            element.style.animationDuration = "0s"
            element.style.animationFillMode = "forwards"
            dropelement2.style.animationName = "drop_up"
            dropelement2.style.animationDuration = "0s"
            dropelement2.style.animationFillMode = "forwards"

            element.style.webkitAnimationName = "bar_in"
            element.style.webkitAnimationDuration = "0s"
            element.style.webkitAnimationFillMode = "forwards"
            dropelement2.style.webkitAnimationName = "drop_up"
            dropelement2.style.webkitAnimationDuration = "0s"
            dropelement2.style.webkitAnimationFillMode = "forwards"

            dropelement.style.display = "none"
            open = false;
        } else if (window.pageYOffset < 20) {
            alreadyScrolled = false;
            element.style.animationName = "bar_out"
            element.style.animationDuration = "0s"
            element.style.animationFillMode = "forwards"
            dropelement2.style.animationName = "drop_up"
            dropelement2.style.animationDuration = "0s"
            dropelement2.style.animationFillMode = "forwards"

            element.style.webkitAnimationName = "bar_out"
            element.style.webkitAnimationDuration = "0s"
            element.style.webkitAnimationFillMode = "forwards"
            dropelement2.style.webkitAnimationName = "drop_up"
            dropelement2.style.webkitAnimationDuration = "0s"
            dropelement2.style.webkitAnimationFillMode = "forwards"

            element.style.animationName = "bar_out"
            element.style.animationDuration = "0s"
            element.style.animationFillMode = "forwards"
            dropelement2.style.animationName = "drop_up"
            dropelement2.style.animationDuration = "0s"
            dropelement2.style.animationFillMode = "forwards"

            element.style.webkitAnimationName = "bar_out"
            element.style.webkitAnimationDuration = "0s"
            element.style.webkitAnimationFillMode = "forwards"
            dropelement2.style.webkitAnimationName = "drop_up"
            dropelement2.style.webkitAnimationDuration = "0s"
            dropelement2.style.webkitAnimationFillMode = "forwards"
            dropelement.style.display = "none"
            open = false;
        }
    }


    var earrings = document.getElementsByClassName("earrings")
    var necklaces = document.getElementsByClassName("necklaces")
    var bracelets = document.getElementsByClassName("bracelets")
    var soutache = document.getElementsByClassName("soutache")
    var soutache2 = document.getElementsByClassName("soutache2")
    var beads1 = document.getElementsByClassName("beads1")
    var beads2 = document.getElementsByClassName("beads2")
    var scarf = document.getElementsByClassName("scarf")

    document.getElementById('all').innerHTML = " [" + (earrings.length + necklaces.length + bracelets.length + soutache.length + soutache2.length + beads1.length + beads2.length + scarf.length) + "]"
    document.getElementById('earrings').innerHTML = " [" + earrings.length + "]"
    document.getElementById('necklaces').innerHTML = " [" + necklaces.length + "]"
    document.getElementById('bracelets').innerHTML = " [" + bracelets.length + "]"
    document.getElementById('soutache').innerHTML = " [" + soutache.length + "]"
    document.getElementById('soutache2').innerHTML = " [" + soutache2.length + "]"
    document.getElementById('beads1').innerHTML = " [" + beads1.length + "]"
    document.getElementById('beads2').innerHTML = " [" + beads2.length + "]"
    document.getElementById('scarf').innerHTML = " [" + scarf.length + "]"
}
function resetForm() {
    alert("PLEASE review the Shipping & Return policy before purchasing!")
    document.getElementById('email').style.border = "1px solid"
    document.getElementById('postalcode').style.border = "1px solid"
    document.getElementById('name2').style.border = "1px solid"

    document.getElementById('email').style.borderColor = "grey"
    document.getElementById('postalcode').style.borderColor = "grey"
    document.getElementById('name2').style.borderColor = "grey"
}
function toggleText() {

    if (displayVar) {
        document.getElementById('infobutton').innerHTML = "INFO"
        document.getElementById('paragraph').style.display = "none"
        document.getElementById('price').style.opacity = 1
        document.getElementById('stock').style.opacity = 1
        document.getElementById('overlay-image').style.display = 'block'
        displayVar = false;
    } else {
        document.getElementById('paragraph').style.display = "block"
        document.getElementById('infobutton').innerHTML = "BACK"
        document.getElementById('price').style.opacity = 0
        document.getElementById('stock').style.opacity = 0
        document.getElementById('overlay-image').style.display = 'none'
        displayVar = true;
    }
}
function insertProducts(image, price, title, amount, size, category, paragraph) {
    var qtyvar;
    var qtycolor = "#b30000";
    if (amount == "0") {
        qtycolor = "#b30000"
        qtyvar = "QTY: 0"
    } else {
        qtycolor = "#0080ff"
        qtyvar = "QTY: " + amount
    }
    var pricevar = "CDN$" + price;

    var div = document.createElement("div");
    div.className = "display-frame"
    document.getElementById('main-frame').appendChild(div);

    var div2 = document.createElement("div")
    div2.className = "jewelry " + size + " " + category
    //div2.id = category
    div2.style.backgroundImage = "url(./img/" + image + ")"
    div.appendChild(div2);

    var href = document.createElement("a")
    href.setAttribute("href", "#openWindow")
    href.onclick = function () {
        document.getElementById('price').style.opacity = 1
        document.getElementById('stock').style.opacity = 1
        displayVar = false;
        document.getElementById('infobutton').innerHTML = "INFO"
        document.getElementById('paragraph').style.display = "none"
        document.getElementById('overlay-image').style.display = 'block'
        document.getElementById('overlay-content2').style.display = 'table-cell'
        document.getElementById('name').innerHTML = title
        document.getElementById('price').innerHTML = "PRICE: CDN$" + price
        document.getElementById('overlay-image').style.backgroundImage = 'url(./img/' + image + ')'
        document.getElementById('paragraph').innerHTML = paragraph
        if (amount == "0") {
            document.getElementById('stock').style.color = "#b30000"
            document.getElementById('stock').innerHTML = "OUT OF STOCK"
        } else {
            document.getElementById('stock').style.color = "#0080ff"
            document.getElementById('stock').innerHTML = "IN STOCK: " + amount
        }
    }
    div2.appendChild(href);

    var div3 = document.createElement("div")
    div3.className = "enlarge"
    div3.style.backgroundImage = "url(./img/" + image + ")"
    href.appendChild(div3);

    var div4 = document.createElement("div")
    div4.className = "infobar"
    div3.appendChild(div4);

    var hrdiv = document.createElement("hr")
    hrdiv.className = "blackline"
    div4.appendChild(hrdiv);

    var h1div = document.createElement("h9")
    h1div.innerHTML = pricevar
    div4.appendChild(h1div);

    var h2div = document.createElement("h10")
    h2div.style.color = qtycolor
    h2div.innerHTML = qtyvar
    div4.appendChild(h2div);
}
function setcategory(category) {
    var earrings = document.getElementsByClassName("earrings")
    var necklaces = document.getElementsByClassName("necklaces")
    var bracelets = document.getElementsByClassName("bracelets")
    var soutache = document.getElementsByClassName("soutache")
    var soutache2 = document.getElementsByClassName("soutache2")
    var beads1 = document.getElementsByClassName("beads1")
    var beads2 = document.getElementsByClassName("beads2")
    var scarf = document.getElementsByClassName("scarf")

    for (i = 0; i < earrings.length; i++) {
        earrings[i].style.display = "none"
    }
    for (i = 0; i < necklaces.length; i++) {
        necklaces[i].style.display = "none"
    }
    for (i = 0; i < bracelets.length; i++) {
        bracelets[i].style.display = "none"
    }
    for (i = 0; i < earrings.length; i++) {
        earrings[i].style.display = "none"
    }
    for (i = 0; i < soutache.length; i++) {
        soutache[i].style.display = "none"
    }
    for (i = 0; i < soutache2.length; i++) {
        soutache2[i].style.display = "none"
    }
    for (i = 0; i < beads1.length; i++) {
        beads1[i].style.display = "none"
    }
    for (i = 0; i < beads2.length; i++) {
        beads2[i].style.display = "none"
    }
    for (i = 0; i < scarf.length; i++) {
        scarf[i].style.display = "none"
    }

    opencat()
    var texts = "CATEGORY: "
    if (category == "all") {
        texts = "CATEGORY: ALL"
        for (i = 0; i < earrings.length; i++) {
            earrings[i].style.display = "inline-block"
        }
        for (i = 0; i < necklaces.length; i++) {
            necklaces[i].style.display = "inline-block"
        }
        for (i = 0; i < bracelets.length; i++) {
            bracelets[i].style.display = "inline-block"
        }
        for (i = 0; i < earrings.length; i++) {
            earrings[i].style.display = "inline-block"
        }
        for (i = 0; i < soutache.length; i++) {
            soutache[i].style.display = "inline-block"
        }
        for (i = 0; i < soutache2.length; i++) {
            soutache2[i].style.display = "inline-block"
        }
        for (i = 0; i < beads1.length; i++) {
            beads1[i].style.display = "inline-block"
        }
        for (i = 0; i < beads2.length; i++) {
            beads2[i].style.display = "inline-block"
        }
        for (i = 0; i < scarf.length; i++) {
            scarf[i].style.display = "inline-block"
        }
    } else if (category == "earrings") {
        texts = "CATEGORY: EARRINGS"
        for (i = 0; i < earrings.length; i++) {
            earrings[i].style.display = "inline-block"
        }
    } else if (category == "necklaces") {
        texts = "CATEGORY: NECKLACES"
        for (i = 0; i < necklaces.length; i++) {
            necklaces[i].style.display = "inline-block"
        }
    } else if (category == "bracelets") {
        texts = "CATEGORY: BRACELETS"
        for (i = 0; i < bracelets.length; i++) {
            bracelets[i].style.display = "inline-block"
        }
    } else if (category == "soutache") {
        texts = "CATEGORY: SOUTACHE JEWELRY SETS"
        for (i = 0; i < soutache.length; i++) {
            soutache[i].style.display = "inline-block"
        }
    } else if (category == "soutache2") {
        texts = "CATEGORY: SOUTACHE BRAIDS"
        for (i = 0; i < soutache2.length; i++) {
            soutache2[i].style.display = "inline-block"
        }
    } else if (category == "beads1") {
        texts = "CATEGORY: BEADED CROCHET NECKLACES"
        for (i = 0; i < beads1.length; i++) {
            beads1[i].style.display = "inline-block"
        }
    } else if (category == "beads2") {
        texts = "CATEGORY: BEADED CROCHET BRACELETS"
        for (i = 0; i < beads2.length; i++) {
            beads2[i].style.display = "inline-block"
        }
    } else if (category == "scarf") {
        texts = "CATEGORY: HIJAB, SCARF & SHAWL PINS"
        for (i = 0; i < scarf.length; i++) {
            scarf[i].style.display = "inline-block"
        }
    }
    if (window.innerWidth < 769) {
        document.getElementById("dropbutton").innerHTML = "<a href='javascript:void()' onclick='opencat()'><b>" + texts + "</b><div id='dropimage' style='left: " + (window.innerWidth - 300) + ";bottom:5px;position:absolute;font-size: 180%'>☰</div></a>"
    } else if (window.innerWidth < 1101) {
        document.getElementById("dropbutton").innerHTML = "<a href='javascript:void()' onclick='opencat()'><b>" + texts + "</b><div id='dropimage' style='left:" + (window.innerWidth - 300) + ";bottom:5px;position:absolute;font-size: 180%'>☰</div></a>"
    } else if (window.innerWidth < 1501) {
        document.getElementById("dropbutton").innerHTML = "<a href='javascript:void()' onclick='opencat()'><b>" + texts + "</b><div id='dropimage' style='left: " + (window.innerWidth - 300) + ";bottom:5px;position:absolute;font-size: 180%;'>☰</div></a>"
    } else {
        document.getElementById("dropbutton").innerHTML = "<a href='javascript:void()' onclick='opencat()'><b>" + texts + "</b><div id='dropimage' style='left: " + (window.innerWidth - 300) + ";bottom:5px;position:absolute;font-size: 180%;'>☰</div></a>"
    }
    return false;
}
function sendParams(image, price, title, amount) {
    document.getElementById('overlay-content2').style.display = 'table-cell'
    document.getElementById('name').innerHTML = title
    document.getElementById('price').innerHTML = "PRICE: CDN$" + price
    document.getElementById('overlay-image').style.backgroundImage = 'url(./img/' + image + ')'

    if (amount == "0") {
        document.getElementById('stock').style.color = "#b30000"
        document.getElementById('stock').innerHTML = "OUT OF STOCK"
    } else {
        document.getElementById('stock').style.color = "#0080ff"
        document.getElementById('stock').innerHTML = "IN STOCK: " + amount
    }
}
function opencat() {
    if (catopen) {
        dropimageel2.style.animationName = "drop_up2"
        dropimageel2.style.animationDuration = "0.5s"
        dropimageel2.style.animationFillMode = "forwards"
        categorydrop.style.display = "none"
        catopen = false;
    } else {
        dropimageel2.style.animationName = "drop_down2"
        dropimageel2.style.animationDuration = "0.5s"
        dropimageel2.style.animationFillMode = "forwards"
        categorydrop.style.display = "block"
        catopen = true;
    }
}

function DropDown() {
    if (open) {
        dropelement.style.display = "none"
        dropelement2.style.animationName = "drop_up"
        dropelement2.style.animationDuration = "0.5s"
        dropelement2.style.animationFillMode = "forwards"

        dropelement2.style.webkitAnimationName = "drop_up"
        dropelement2.style.webkitAnimationDuration = "0.5s"
        dropelement2.style.webkitAnimationFillMode = "forwards"
        open = false;
    } else {
        dropelement.style.display = "block"
        dropelement2.style.animationName = "drop_down"
        dropelement2.style.animationDuration = "0.5s"
        dropelement2.style.animationFillMode = "forwards"

        dropelement2.style.webkitAnimationName = "drop_down"
        dropelement2.style.webkitAnimationDuration = "0.5s"
        dropelement2.style.webkitAnimationFillMode = "forwards"

        open = true;
    }
}
function testScroll() {
    if (window.innerWidth < 768) {
        element.style.animationName = "bar_in"
        element.style.animationDuration = "1s"
        element.style.animationFillMode = "forwards"
        element.style.webkitAnimationName = "bar_in"
        element.style.webkitAnimationDuration = "1s"
        element.style.webkitAnimationFillMode = "forwards"
    } else {
        if (window.pageYOffset > 20) {
            alreadyScrolled = true;
            element.style.animationName = "bar_in"
            element.style.animationDuration = "1s"
            element.style.animationFillMode = "forwards"
            dropelement2.style.animationName = "drop_up"
            dropelement2.style.animationDuration = "1s"
            dropelement2.style.animationFillMode = "forwards"

            element.style.webkitAnimationName = "bar_in"
            element.style.webkitAnimationDuration = "1s"
            element.style.webkitAnimationFillMode = "forwards"
            dropelement2.style.webkitAnimationName = "drop_up"
            dropelement2.style.webkitAnimationDuration = "1s"
            dropelement2.style.webkitAnimationFillMode = "forwards"

            dropelement.style.display = "none"
            open = false;
        } else if (window.pageYOffset < 20) {
            alreadyScrolled = false;
            element.style.animationName = "bar_out"
            element.style.animationDuration = "1s"
            element.style.animationFillMode = "forwards"
            dropelement2.style.animationName = "drop_up"
            dropelement2.style.animationDuration = "1s"
            dropelement2.style.animationFillMode = "forwards"

            element.style.webkitAnimationName = "bar_out"
            element.style.webkitAnimationDuration = "1s"
            element.style.webkitAnimationFillMode = "forwards"
            dropelement2.style.webkitAnimationName = "drop_up"
            dropelement2.style.webkitAnimationDuration = "1s"
            dropelement2.style.webkitAnimationFillMode = "forwards"

            element.style.animationName = "bar_out"
            element.style.animationDuration = "1s"
            element.style.animationFillMode = "forwards"
            dropelement2.style.animationName = "drop_up"
            dropelement2.style.animationDuration = "1s"
            dropelement2.style.animationFillMode = "forwards"

            element.style.webkitAnimationName = "bar_out"
            element.style.webkitAnimationDuration = "1s"
            element.style.webkitAnimationFillMode = "forwards"
            dropelement2.style.webkitAnimationName = "drop_up"
            dropelement2.style.webkitAnimationDuration = "1s"
            dropelement2.style.webkitAnimationFillMode = "forwards"
            dropelement.style.display = "none"
            open = false;
        }
    }
}
window.onscroll = testScroll
window.onresize = function () {
    if (window.innerWidth < 768) {
        element.style.animationName = "bar_in"
        element.style.animationDuration = "1s"
        element.style.animationFillMode = "forwards"
        element.style.webkitAnimationName = "bar_in"
        element.style.webkitAnimationDuration = "1s"
        element.style.webkitAnimationFillMode = "forwards"
    } else {
        if (window.pageYOffset > 20) {
            alreadyScrolled = true;
            element.style.animationName = "bar_in"
            element.style.animationDuration = "1s"
            element.style.animationFillMode = "forwards"
            dropelement2.style.animationName = "drop_up"
            dropelement2.style.animationDuration = "1s"
            dropelement2.style.animationFillMode = "forwards"

            element.style.webkitAnimationName = "bar_in"
            element.style.webkitAnimationDuration = "1s"
            element.style.webkitAnimationFillMode = "forwards"
            dropelement2.style.webkitAnimationName = "drop_up"
            dropelement2.style.webkitAnimationDuration = "1s"
            dropelement2.style.webkitAnimationFillMode = "forwards"

            dropelement.style.display = "none"
            open = false;
        } else if (window.pageYOffset < 20) {
            alreadyScrolled = false;
            element.style.animationName = "bar_out"
            element.style.animationDuration = "1s"
            element.style.animationFillMode = "forwards"
            dropelement2.style.animationName = "drop_up"
            dropelement2.style.animationDuration = "1s"
            dropelement2.style.animationFillMode = "forwards"

            element.style.webkitAnimationName = "bar_out"
            element.style.webkitAnimationDuration = "1s"
            element.style.webkitAnimationFillMode = "forwards"
            dropelement2.style.webkitAnimationName = "drop_up"
            dropelement2.style.webkitAnimationDuration = "1s"
            dropelement2.style.webkitAnimationFillMode = "forwards"

            element.style.animationName = "bar_out"
            element.style.animationDuration = "1s"
            element.style.animationFillMode = "forwards"
            dropelement2.style.animationName = "drop_up"
            dropelement2.style.animationDuration = "1s"
            dropelement2.style.animationFillMode = "forwards"

            element.style.webkitAnimationName = "bar_out"
            element.style.webkitAnimationDuration = "1s"
            element.style.webkitAnimationFillMode = "forwards"
            dropelement2.style.webkitAnimationName = "drop_up"
            dropelement2.style.webkitAnimationDuration = "1s"
            dropelement2.style.webkitAnimationFillMode = "forwards"
            dropelement.style.display = "none"
            open = false;
        }
    }
}
