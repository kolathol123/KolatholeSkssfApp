
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
 web1.LoadUrl("menu.html")
    
    }


//Called when hardware menu key pressed.
function OnMenu( name )
{  
   app.OpenDrawer()
}


