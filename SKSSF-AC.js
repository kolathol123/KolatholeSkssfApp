
//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
    
    app.SetOrientation("Portrait")
    
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );	

	
	
	//Add layout to app.	
	web = app.CreateWebView( 1,1 );
     web.SetBackColor( "#00000000" );
     lay.AddChild( web );
    app.EnableBackKey( false);


     web.LoadUrl( "main.html" );
	app.AddLayout( lay );
	CreateDrawer()
	
	//Add main layout and drawer to app.	
	app.AddDrawer( drawerScroll, "Left", drawerWidth )
	
		check_update();
}



function OnBack()
{
  
  if(app.GetDrawerState( "Left" )=="Open")
  {
     app.CloseDrawer(  )
  
  }
 else  if(web.CanGoBack())
  {
      web.Back()
  }
  else 
  {
      app.EnableBackKey( true)
      app.Exit( )
  }

}

function CreateDrawer()
{
    //Create a layout for the drawer.
	//(Here we also put it inside a scroller to allow for long menus)
	drawerWidth = 0.75;
    drawerScroll = app.CreateScroller( drawerWidth, -1, "FillY" )
    drawerScroll.SetBackColor( "White" )
	layDrawer = app.CreateLayout( "Linear", "Left" )
	drawerScroll.AddChild( layDrawer )
	
	
 web1 = app.CreateWebView( 0.75,1 );
 layDrawer.AddChild(web1);
 web1.LoadUrl("menu.html");
    
    }


//Called when hardware menu key pressed.
function OnMenu( name )
{  
   app.OpenDrawer();
}




var up;
function check_update()
{
   
if(app.IsConnected())
{
 fetch('https://raw.githubusercontent.com/kolathol123/KolatholeSkssfApp/main/update')
 .then(response => response.text())
 .then(data =>{ 
 up=data;
 check(up);
 
 
 });
 }
 
 }
 
 function check(data)
 {
 var v=app.ReadFile("version.txt");
 if(Number(up)>Number(v))
  {
     alert("update available");
     app.WriteFile("version.txt",data);
     
     const u=["main.html","cluster1.html","menu.html","cluster-name.js","cluster.css","cluster.js","SKSSF-AC.js","style.css"];
  var mu='https://raw.githubusercontent.com/kolathol123/KolatholeSkssfApp/main/';

  fetch(mu+u[0])
  .then(response => response.text())
  .then(data => {
   app.WriteFile(u[0],data);
  
  });
  
  fetch(mu+u[1])
  .then(response => response.text())
  .then(data => {
  app.WriteFile(u[1],data);
  
  });
  
  fetch(mu+u[2])
  .then(response => response.text())
  .then(data => {
  app.WriteFile(u[2],data);
  
  });
  
  fetch(mu+u[3])
  .then(response => response.text())
  .then(data => {
  app.WriteFile(u[3],data);
  
  });
  
  fetch(mu+u[4])
  .then(response => response.text())
  .then(data => {
  app.WriteFile(u[4],data);
  
  });
  
  fetch(mu+u[5])
  .then(response => response.text())
  .then(data => {
  app.WriteFile(u[5],data);
  
  });
  
  fetch(mu+u[6])
  .then(response => response.text())
  .then(data => {
  app.WriteFile("SKSSF AC.js",data);
  
  });
  
  fetch(mu+u[7])
  .then(response => response.text())
  .then(data => {
  app.WriteFile(u[7],data);
  
  });
  


  /*
 
 var now = new Date().getTime();
 app.SetAlarm( "Set", 7985, null, now + 2000 );
 app.Exit( );
*/
}


 }
