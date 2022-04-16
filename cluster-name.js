const cluster = [
    'a',
    'athavanad para unit',
    'athavanad parithi unit',
    'chottur unit',
    'kanjipura unit',
    'kattilangadi unit',
    'kolathol unit',
    'naduvattom para unit',
    'nambiyamkunnu unit',
    'pazhur unit',
    'uroth palliyal unit'
];

function display_c_n() {
    var a = document.getElementById("maindiv");
    for (var i = 1; i < 11; i++) {
        a.innerHTML += '<div class=cluster onclick=openc(' + i + ')><div class=first-letter>' + cluster[i][0] + '</div>' + cluster[i] + '</div>';
    }
}

function open_drawer() {
    app.OpenDrawer();
}

function openc(num) {
    var myurl = "/sdcard/.skssfac/cluster1.html?" + num;
    window.location = myurl;
}

function btn_hide() {
    document.getElementById("alert").style.display = "none";
}