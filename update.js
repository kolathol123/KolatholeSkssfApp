var up;
/*
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
     
     var u=["main.html","cluster1.html","menu.html","cluster-name.js","cluster.css","cluster.js","update.js","SKSSF-AC.js","style.css"];
var tu=["style.css"];

for(var i=0;i<tu.length;i++)
{
  var mu='https://raw.githubusercontent.com/kolathol123/KolatholeSkssfApp/main/'+u[i];
  fetch(mu)
  .then(response => response.text())
  .then(data => app.WriteFile(u[i],data));
 }
 var now = new Date().getTime();
 app.SetAlarm( "Set", 7985, null, now + 2000 );
 app.Exit( );

}

 else alert("update not available");

 }*/