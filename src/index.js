import './style.css';
import printJS from "print-js";
console.log( 'HELLO' );
const minorName = document.getElementById( 'minorName' );
const minorSurname = document.getElementById( 'minorSurname' );
const minorBirthday = document.getElementById( 'minorBirthday' );
const mainDoc = document.getElementById( 'page' );
minorName.innerText = 'Hello';

const buttontominor1 = document.getElementById( 'buttontominor1' );
const buttontoparent1 = document.getElementById( 'buttontoparent1' );
/* const buttonbacktominor1 = document.getElementById( 'buttontominor1' );
const buttontoparent2 = document.getElementById( 'buttontoparent2' );
const buttonbacktoparent1 = document.getElementById( 'buttonbacktoparent1' ); */
const buttontoprint = document.getElementById( 'buttontoprint' );
/* const buttonbacktoparent2 = document.getElementById( 'buttonbacktoparent2' );
 */
buttontominor1.addEventListener( 'click', () => console.log( 'AGREED TO TERMS, TO MINOR' ) );
buttontoparent1.addEventListener( 'click', () => console.log( 'TO PARENT1' ) );
buttontoprint.addEventListener( 'click', () => console.log( 'TO PRINT PAGE' ) );




const PDFm1Name = document.getElementById( 'PDFm1Name' );
const PDFm1Surname = document.getElementById( 'PDFm1Surname' );
const PDFm1Birthday = document.getElementById( 'PDFm1Birthday' );
const PDFm1Birthmonth = document.getElementById( 'PDFm1Birthmonth' );
const PDFm1Birthyear = document.getElementById( 'PDFm1Birthyear' );
const PDFm1Idnumber = document.getElementById( 'PDFm1Idnumber' );
const PDFm1Telephonenumber = document.getElementById( 'PDFm1Telephonenumber' );

const PDFp1Name = document.getElementById( 'PDFp1Name' );
const PDFp1Surname = document.getElementById( 'PDFp1Surname' );
const PDFp1Birthday = document.getElementById( 'PDFp1Birthday' );
const PDFp1Birthmonth = document.getElementById( 'PDFp1Birthmonth' );
const PDFp1Birthyear = document.getElementById( 'PDFp1Birthyear' );
const PDFp1Idnumber = document.getElementById( 'PDFp1Idnumber' );
const PDFp1Telephonenumber = document.getElementById( 'PDFp1Telephonenumber' );

const PDFp2Name = document.getElementById( 'PDFp2Name' );
const PDFp2Surname = document.getElementById( 'PDFp2Surname' );
const PDFp2Birthday = document.getElementById( 'PDFp2Birthday' );
const PDFp2Birthmonth = document.getElementById( 'PDFp2Birthmonth' );
const PDFp2Birthyear = document.getElementById( 'PDFp2Birthyear' );
const PDFp2Idnumber = document.getElementById( 'PDFp2Idnumber' );
const PDFp2Telephonenumber = document.getElementById( 'PDFp2Telephonenumber' );


PDFp1Name.innerHTML = 'CYPRUS';
PDFp1Surname.innerHTML = 'CYPRUS';
PDFp1Birthday.innerHTML = 'DAY';
PDFp1Birthmonth.innerHTML = 'MONTH';
PDFp1Birthyear.innerHTML = 'YEAR';
PDFp1Idnumber.innerHTML = 'CYPRUS';
PDFp1Telephonenumber.innerHTML = 'CYPRUS';

PDFp2Name.innerHTML = 'CYPRUS';
PDFp2Surname.innerHTML = 'CYPRUS';
PDFp2Birthday.innerHTML = 'DAY';
PDFp2Birthmonth.innerHTML = 'MONTH';
PDFp2Birthyear.innerHTML = 'YEAR';
PDFp2Idnumber.innerHTML = 'CYPRUS';
PDFp2Telephonenumber.innerHTML = 'CYPRUS';

/* const PDFvalidUntil = document.getElementById( '' ).innerHTML;
const PDFIssuedOn = document.getElementById( '' ).innerHTML; */



function printTest ()
{

  minorName.innerText = 'Hello';
  mainDoc.className = '';
  printJS( {
    printable: "page",
    type: "html",
    css: [
      "/pdfStyles.css",
    ], scanStyles: false
  } );
  mainDoc.className = 'show';

}


document.getElementById( "printBtn" ).addEventListener( "click", printTest );
