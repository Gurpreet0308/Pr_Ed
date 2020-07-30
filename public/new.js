var val = document.querySelector("#html").value;
var style = document.querySelector("#css").value;
var script = document.querySelector("#js").value;
var data = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
   <style type="stylesheet"> ${style} </style>
  </head>  
  <body> ${val}
  <script> ${script} </script> 
  </body>
  </html>
  `;

// var css = "body{ background-color: black;}";
// var temp = window.frames["iframe_id"].contentWindow.document;
// document.getElementsByTagName("iframe")[0].setAttribute("srcdoc", `${val}`);

// script = "<script> console.log('hiiiiii')  </script>";

// style = document.createElement("style");
// style.innerHTML = css;
// //var style = " <style> body {  background-color: blue;} </style>  ";
// var doc = document.getElementById("iframe_id").contentWindow.document;
// // doc.open();
// // doc.write(style);
// // doc.write(script);
// // doc.close();

// var runHtml = function () {
//   val = document.querySelector("#html").value;
//   style = document.querySelector("#css").value;
//   document.getElementsByTagName("iframe")[0].setAttribute("srcdoc", `${val}`);
// };

// var run = function () {
//   val = document.querySelector("#html").value;
//   //

//   //   doc.open();
//   //   doc.write(style);
//   //   doc.close();

//   document.getElementsByTagName("iframe")[0].setAttribute("srcdoc", `${val}`);

//   //document.getElementsByTagName("iframe")[0].setAttribute("srcdoc", `${val}`);
//   doc.open();
//   var style = document.createElement("style");
//   style.innerHTML = css;
//   //temp.getElementsByTagName("body")[0].appendChild(script);
//   temp.getElementsByTagName("head")[0].appendChild(style);
//   doc.close();
// };

document.querySelector(".codes").addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    val = document.querySelector("#html").value;
    style = document.querySelector("#css").value;
    script = document.querySelector("#js").value;
    console.log("enter key pressed");
    document.getElementById("iframe_id").srcdoc = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
   <style> ${style} </style>
  </head>  
  <body> ${val}
  <script> ${script} </script> 
  </body>
  </html>
  `;
  }
});
