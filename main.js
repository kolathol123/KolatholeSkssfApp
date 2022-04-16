//Called when application is started.
function OnStart() {
    //Create a layout with objects vertically centered.

    app.SetOrientation("Portrait")
    lay = app.CreateLayout("linear", "VCenter,FillXY");

    //Add layout to app.	
    web = app.CreateWebView(1, 1);
    web.SetBackColor("#00000000");
    lay.AddChild(web);
    app.EnableBackKey(false);

    web.LoadUrl("main.html");
    app.AddLayout(lay);
    CreateDrawer()

    //Add main layout and drawer to app.	
    app.AddDrawer(drawerScroll, "Left", drawerWidth)


    // var myf = "/sdcard/.skssfac/";
    // app.MakeFolder(myf)
    // const u = ["main.html", "cluster1.html", "menu.html", "cluster-name.js", "cluster.css", "cluster.js", "main.js", "style.css"];
    // for (var i = 0; i < 7; i++) {
    //     app.CreateFile(myf + u[i], "rw")
    //     app.CopyFile(u[i], myf + u[i])
    // }
    // app.CreateFile(myf + "version.txt", "rw")
    // app.CopyFile("version.txt", myf + "version.txt")

    check_update();
}

function OnBack() {

    if (app.GetDrawerState("Left") == "Open") app.CloseDrawer()
    else if (web.CanGoBack()) web.Back()
    else {
        app.EnableBackKey(true)
        app.Exit()
    }

}

function CreateDrawer() {
    drawerWidth = 0.75;
    drawerScroll = app.CreateScroller(drawerWidth, -1, "FillY")
    drawerScroll.SetBackColor("White")
    layDrawer = app.CreateLayout("Linear", "Left")
    drawerScroll.AddChild(layDrawer)

    web1 = app.CreateWebView(0.75, 1);
    layDrawer.AddChild(web1);
    web1.LoadUrl("menu.html");

}


//Called when hardware menu key pressed.
function OnMenu(name) {
    app.OpenDrawer();
}

var up;

function check_update() {

    if (app.IsConnected()) {
        fetch('https://raw.githubusercontent.com/kolathol123/KolatholeSkssfApp/main/update')
            .then(response => response.text())
            .then(data => {
                up = data;
                check(up);
            });
    }
}

function check(data) {
    const mf = "/sdcard/.skssfac/";
    var v = app.ReadFile(mf + "version.txt")
    if (Number(data) > Number(v)) {
        alert("update available");
        app.WriteFile(mf + "version.txt", data);

        const u = ["main.html", "cluster1.html", "menu.html", "cluster-name.js", "cluster.css", "cluster.js", "main.js", "style.css"];
        const mu = 'https://raw.githubusercontent.com/kolathol123/KolatholeSkssfApp/main/';


        fetch(mu + u[0])
            .then(response => response.text())
            .then(data => {
                app.WriteFile(mf + u[0], data);
            });

        fetch(mu + u[1])
            .then(response => response.text())
            .then(data => {
                app.WriteFile(mf + u[1], data);
            });

        fetch(mu + u[2])
            .then(response => response.text())
            .then(data => {
                app.WriteFile(mf + u[2], data);
            });

        fetch(mu + u[3])
            .then(response => response.text())
            .then(data => {
                app.WriteFile(mf + u[3], data);
            });

        fetch(mu + u[4])
            .then(response => response.text())
            .then(data => {
                app.WriteFile(mf + u[4], data);
            });

        fetch(mu + u[5])
            .then(response => response.text())
            .then(data => {
                app.WriteFile(mf + u[5], data);
            });

        fetch(mu + u[6])
            .then(response => response.text())
            .then(data => {
                app.WriteFile(mf + u[6], data);
            });

        fetch(mu + u[7])
            .then(response => response.text())
            .then(data => {
                app.WriteFile(mf + u[7], data);
            });



        /*
 
 var now = new Date().getTime();
 app.SetAlarm( "Set", 7985, null, now + 2000 );
 app.Exit( );
*/
    }
}