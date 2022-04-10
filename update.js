function check_update()
{
    
if(app.IsConnected())
{
var up;
 fetch('https://raw.githubusercontent.com/kolathol123/KolatholeSkssfApp/main/update')
 .then(response => response.text())
 .then(data => check(data));
 }
 
 }
 
 function check(data)
 {
 var v=app.ReadFile("version.txt");
 if(data>v)
  {
     alert("update available");
     app.WriteFile("vesion.txt",data);
     
     
     
     var now = new Date().getTime();
     app.SetAlarm( "Set", 7985, null, now + 2000 );
     app.Exit( );
  
  }
  
 else alert("update not available");
 }