import './style.css';
import printJS from "print-js";
console.log( 'HELLO' );
const minorName = document.getElementById( 'minorName' );
const minorSurname = document.getElementById( 'minorSurname' );
const minorBirthday = document.getElementById( 'minorBirthday' );
const mainDoc = document.getElementById( 'page' );
minorName.innerText = 'Hello';

function sleep ( milliseconds )
{
  const date = Date.now();
  let currentDate = null;
  do
  {
    currentDate = Date.now();
  } while ( currentDate - date < milliseconds );
}


function printTest ()
{

  minorName.innerText = 'Hello';
  mainDoc.className = '';
  printJS( {
    printable: "page",
    type: "html",
    css: [
      "/style.css",
    ], scanStyles: false
  } );

}


document.getElementById( "printBtn" ).addEventListener( "click", printTest );
