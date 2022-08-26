import './style.css';
import printJS from "print-js";
console.log( 'HELLO' );

function printTest ()
{
  printJS( {
    printable: "page",
    type: "html",
    css: [
      "/style.css",
      "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap"
    ],
    scanStyles: false
  } );
}

document.getElementById( "printBtn" ).addEventListener( "click", printTest );
