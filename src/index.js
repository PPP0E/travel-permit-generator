import './style.css';
import printJS from "print-js";
console.log( 'HELLO' );
const mainDoc = document.getElementById( 'page' );

const buttontominor1 = document.getElementById( 'buttontominor1' );
const buttontoparent1 = document.getElementById( 'buttontoparent1' );
const buttonbacktominor1 = document.getElementById( 'buttonbacktominor1' );
const buttontoparent2 = document.getElementById( 'buttontoparent2' );
const buttonbacktoparent1 = document.getElementById( 'buttonbacktoparent1' );
const buttontoprint = document.getElementById( 'buttontoprint' );
const buttonbacktoparent2 = document.getElementById( 'buttonbacktoparent2' );


const termsandconditions = document.getElementById( 'termsandconditions' );
const inputminor1 = document.getElementById( 'inputminor1' );
const inputparent1 = document.getElementById( 'inputparent1' );
const inputparent2 = document.getElementById( 'inputparent2' );
const inputprintpage = document.getElementById( 'inputprintpage' );

const inputminorname = document.getElementById( 'inputminorname' );
const inputminorsurname = document.getElementById( 'inputminorsurname' );
const inputminoridcardnumber = document.getElementById( 'inputminoridcardnumber' );
const inputminordobday = document.getElementById( 'inputminordobday' );
const inputminordobmonth = document.getElementById( 'inputminordobmonth' );
const inputminordobyear = document.getElementById( 'inputminordobyear' );
const inputminorphoneprefix = document.getElementById( 'inputminorphoneprefix' );
const inputminorphonenumber = document.getElementById( 'inputminorphonenumber' );

const inputparent1name = document.getElementById( 'inputparent1name' );
const inputparent1surname = document.getElementById( 'inputparent1surname' );
const inputparent1idcardnumber = document.getElementById( 'inputparent1idcardnumber' );
const inputparent1dobday = document.getElementById( 'inputparent1dobday' );
const inputparent1dobmonth = document.getElementById( 'inputparent1dobmonth' );
const inputparent1dobyear = document.getElementById( 'inputparent1dobyear' );
const inputparent1phoneprefix = document.getElementById( 'inputparent1phoneprefix' );
const inputparent1phonenumber = document.getElementById( 'inputparent1phonenumber' );

const inputparent2name = document.getElementById( 'inputparent2name' );
const inputparent2surname = document.getElementById( 'inputparent2surname' );
const inputparent2idcardnumber = document.getElementById( 'inputparent2idcardnumber' );
const inputparent2dobday = document.getElementById( 'inputparent2dobday' );
const inputparent2dobmonth = document.getElementById( 'inputparent2dobmonth' );
const inputparent2dobyear = document.getElementById( 'inputparent2dobyear' );
const inputparent2phoneprefix = document.getElementById( 'inputparent2phoneprefix' );
const inputparent2phonenumber = document.getElementById( 'inputparent2phonenumber' );








buttontominor1.addEventListener( 'click', function ()
{
  termsandconditions.className = 'form hide';
  inputminor1.className = 'form';
} );


buttontoparent1.addEventListener( 'click', function ()
{
  inputminor1.className = 'form hide';
  inputparent1.className = 'form';
  data.minor.name = inputminorname.value;
  data.minor.surname = inputminorsurname.value;
  data.minor.dob.day = inputminordobday.value;
  data.minor.dob.month = inputminordobmonth.value;
  data.minor.dob.year = inputminordobyear.value;
  data.minor.idcardnumber = inputminoridcardnumber.value;
  data.minor.phone.prefix = inputminorphoneprefix.value;
  data.minor.phone.number = inputminorphonenumber.value;
}
);

buttontoparent2.addEventListener( 'click', function ()
{
  inputparent1.className = 'form hide';
  inputparent2.className = 'form';
  data.parent1.name = inputparent1name.value;
  data.parent1.surname = inputparent1surname.value;
  data.parent1.dob.day = inputparent1dobday.value;
  data.parent1.dob.month = inputparent1dobmonth.value;
  data.parent1.dob.year = inputparent1dobyear.value;
  data.parent1.idcardnumber = inputparent1idcardnumber.value;
  data.parent1.phone.prefix = inputparent1phoneprefix.value;
  data.parent1.phone.number = inputparent1phonenumber.value;
} );

buttontoprint.addEventListener( 'click', function ()
{
  inputparent2.className = 'form hide';
  inputprintpage.className = 'form';
  data.parent2.name = inputparent2name.value;
  data.parent2.surname = inputparent2surname.value;
  data.parent2.dob.day = inputparent2dobday.value;
  data.parent2.dob.month = inputparent2dobmonth.value;
  data.parent2.dob.year = inputparent2dobyear.value;
  data.parent2.idcardnumber = inputparent2idcardnumber.value;
  data.parent2.phone.prefix = inputparent2phoneprefix.value;
  data.parent2.phone.number = inputparent2phonenumber.value;
} );

buttonbacktominor1.addEventListener( 'click', function ()
{
  inputparent1.className = 'form hide';
  inputminor1.className = 'forml';
} );

buttonbacktoparent1.addEventListener( 'click', function ()
{
  inputparent2.className = 'form hide';
  inputparent1.className = 'forml';
} );

buttonbacktoparent2.addEventListener( 'click', function ()
{
  inputprintpage.className = 'form hide';
  inputparent2.className = 'forml';
} );






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

const PDFvalidUntilDay = document.getElementById( 'PDFvalidUntilDay' );
const PDFvalidUntilMonth = document.getElementById( 'PDFvalidUntilMonth' );
const PDFvalidUntilYear = document.getElementById( 'PDFvalidUntilYear' );


const PDFIssuedOn = document.getElementById( 'PDFIssuedOn' );




let data = {
  minor: {
    name: '',
    surname: '',
    idcardnumber: 'y',
    dob: {
      day: '',
      month: '',
      year: '',
    },
    validuntil: {
      day: '',
      month: '',
      year: '',
    },
    phone: {
      prefix: '',
      number: '',
    }
  },
  parent1: {
    name: '',
    surname: '',
    idcardnumber: '',
    dob: {
      day: '',
      month: '',
      year: '',
    },
    phone: {
      prefix: '',
      number: '',
    }
  },
  parent2: {
    name: '',
    surname: '',
    idcardnumber: '',
    dob: {
      day: '',
      month: '',
      year: '',
    },
    phone: {
      prefix: '',
      number: '',
    }
  }
};

function changePDF ()
{
  PDFm1Name.innerHTML = data.minor.name.toUpperCase();
  PDFm1Surname.innerHTML = data.minor.surname.toLocaleUpperCase();
  PDFm1Birthday.innerHTML = data.minor.dob.day;
  PDFm1Birthmonth.innerHTML = data.minor.dob.month;
  PDFm1Birthyear.innerHTML = data.minor.dob.year;
  PDFm1Idnumber.innerHTML = data.minor.idcardnumber;
  if ( !data.minor.idcardnumber )
  {
    PDFm1Idnumber.innerHTML = '____________________';

  } else
  {
    PDFm1Idnumber.innerHTML = data.minor.idcardnumber;
  }

  PDFvalidUntilDay.innerHTML = data.minor.validuntil.day;
  if ( !data.minor.validuntil.day && !data.minor.validuntil.month && !data.minor.validuntil.year )
  {
    PDFvalidUntilDay.innerHTML = data.minor.dob.day;
    PDFvalidUntilMonth.innerHTML = data.minor.dob.month;
    PDFvalidUntilYear.innerHTML = parseInt( data.minor.dob.year ) + 18;
  } else
  {
    PDFvalidUntilDay.innerHTML = data.minor.validuntil.day;
    PDFvalidUntilMonth.innerHTML = data.minor.validuntil.month;
    PDFvalidUntilYear.innerHTML = data.minor.validuntil.year;
  }
  if ( data.minor.phone.prefix === '+90' )
  {
    let number = data.minor.phone.number.slice( -10 );
    PDFm1Telephonenumber.innerHTML = ( '+90' + ' ' + number.charAt( 0 ) + number.charAt( 1 ) + number.charAt( 2 ) + ' ' + number.charAt( 3 ) + number.charAt( 4 ) + number.charAt( 5 ) + ' ' + number.charAt( 6 ) + number.charAt( 7 ) + ' ' + number.charAt( 8 ) + number.charAt( 9 ) );
  }

  if ( data.minor.phone.prefix === '+357' )
  {
    let number = data.minor.phone.number.slice( -8 );
    PDFm1Telephonenumber.innerHTML = ( '+357' + ' ' + number.charAt( 0 ) + number.charAt( 1 ) + " " + number.slice( -6 ) );
  }

  PDFp1Name.innerHTML = data.parent1.name.toUpperCase();
  PDFp1Surname.innerHTML = data.parent1.surname.toUpperCase();
  PDFp1Birthday.innerHTML = data.parent1.dob.day;
  PDFp1Birthmonth.innerHTML = data.parent1.dob.month;
  PDFp1Birthyear.innerHTML = data.parent1.dob.year;
  PDFp1Idnumber.innerHTML = data.parent1.idcardnumber;
  if ( !data.parent1.idcardnumber )
  {
    PDFp1Idnumber.innerHTML = '____________________';

  }
  if ( !data.parent2.name && !data.parent2.surname && !data.parent2.idcardnumber )
  {
    const parent2hide = document.getElementById( 'parent2' );
    parent2hide.className = "hide";
    console.log( 'NOPARENT2' );
    return;
  }

  PDFp1Telephonenumber.innerHTML = '';

  PDFp2Name.innerHTML = data.parent2.name;
  PDFp2Surname.innerHTML = data.parent2.surname;
  PDFp2Birthday.innerHTML = data.parent2.dob.day;
  PDFp2Birthmonth.innerHTML = data.parent2.dob.month;
  PDFp2Birthyear.innerHTML = data.parent2.dob.year;
  PDFp2Idnumber.innerHTML = data.parent2.idcardnumber;
  if ( !data.parent2.idcardnumber )
  {
    PDFp2Idnumber.innerHTML = '____________________';

  }
  PDFp2Telephonenumber.innerHTML = '';
}










function printTest ()
{
  changePDF();
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
