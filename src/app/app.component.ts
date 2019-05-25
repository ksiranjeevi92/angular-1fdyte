import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  codeType = '';

   printData = [];
  

  print() {
    
var array5bit_A = [ 'f//AAAAAAAAAAAAAAAAAAAA', 'f//AAAAAAAAAAAAAAAAAAAB', 'f//AAAAAAAAAAAAAAEAAAD/', 'f//AAAAAAAAAAAAAAEAAAAA', 'f//AAAAAAAAAQAAAP8AAAAA', 'f//AAAAAAAAAQAAAP8AAAAB', 'f//AAAAAAAAAQAAAAAAAAD/', 'f//AAAAAAAAAQAAAAAAAAAA', 'f//AAABAAAA/wAAAAAAAAAA', 'f//AAABAAAA/wAAAAAAAAAB', 'f//AAABAAAA/wAAAAEAAAD/', 'f//AAABAAAA/wAAAAEAAAAA', 'f//AAABAAAAAAAAAP8AAAAA', 'f//AAABAAAAAAAAAP8AAAAB', 'f//AAABAAAAAAAAAAAAAAD/', 'f//AAABAAAAAAAAAAAAAAAA', 'QD/AAD/AAAAAAAAAAAAAAAA', 'QD/AAD/AAAAAAAAAAAAAAAB', 'QD/AAD/AAAAAAAAAAEAAAD/', 'QD/AAD/AAAAAAAAAAEAAAAA', 'QD/AAD/AAAAAQAAAP8AAAAA', 'QD/AAD/AAAAAQAAAP8AAAAB', 'QD/AAD/AAAAAQAAAAAAAAD/', 'QD/AAD/AAAAAQAAAAAAAAAA', 'QD/AAAAAAAA/wAAAAAAAAAA', 'QD/AAAAAAAA/wAAAAAAAAAB', 'SL/AADeAAAA/gAAAAIAAAD+', 'QD/AAAAAAAA/wAAAAEAAAAA', 'QD/AAAAAAAAAAAAAP8AAAAA', 'QD/AAAAAAAAAAAAAP8AAAAB', 'QD/AAAAAAAAAAAAAAAAAAD/', 'QD/AAAAAAAAAAAAAAAAAAAA'];
var array5bit_B = [ 'US0CAuSD38g', 'UUYCA7QBErs', 'ajEDAm49ReY', 'UUoCA+juogg', 'bjEDAjQrOn0', 'bkoDA3iPVH4', 'ajUDAt82atY', 'UU4CA1nljTg', 'cjEDAghkmFU', 'ckoDA0TA9lY', 'izUEAhrxcbg', 'ck4DAxY8F10', 'bjUDAlvFFR8', 'bk4DAxdhexw', 'ajkDAr7LFAw', 'UVICAyQ+UJI', 'TTECAq7UnEM', 'TUoCA+Jw8kA', 'ZjUDAmZGozo', 'TU4CA7CME0s', 'ajUDAvnk9E4', 'ak4DA7VAmk0', 'ZjkDAtle3bI', 'TVICAxOyzrM', 'STUCAqHeHtM', 'SU4CA+16cNA', 'h6QEAZKdo54', 'SVICA62zYxM', 'RTkCAqx1lb4', 'RVICA/z3WM0', 'QT0CAkdoxRU', 'KFYBA46vJCA'];

var stringStart = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAACCAQAAADLaIVbAAAANUlEQVQIHQEqANX/A';
var stringMid = 'AAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAA';
var stringEnd = 'AAAAASUVORK5CYII=" style="width:';

function genBarcode(inputString, intWidth, intHeight) {
  'use strict';
  var arraySeq = [], i, intChunks, resultString, intRawmod = inputString.length % 5;
  if (intRawmod > 0) {
		for (i = 0; i < 5 - intRawmod; i += 1) {
			inputString += "0";
		}
	}
  intChunks = inputString.length / 5;

  for (i = 0; i < intChunks; i += 1) {
		arraySeq[i] = parseInt(inputString.substr(i * 5, 5), 2);
	}

	resultString = "";
  for (i = 0; i < arraySeq.length; i += 1) {
		resultString += stringStart + array5bit_A[arraySeq[i]] + stringMid + array5bit_B[arraySeq[i]] + stringEnd + intWidth + 'px;height:' + intHeight + 'px;">';
  }
  // console.log(resultString)
  return resultString;
}

var arrayCode128Bin = [ '11011001100', '11001101100', '11001100110', '10010011000', '10010001100', '10001001100', '10011001000', '10011000100', '10001100100', '11001001000', '11001000100', '11000100100', '10110011100', '10011011100', '10011001110', '10111001100', '10011101100', '10011100110', '11001110010', '11001011100', '11001001110', '11011100100', '11001110100', '11101101110', '11101001100', '11100101100', '11100100110', '11101100100', '11100110100', '11100110010', '11011011000', '11011000110', '11000110110', '10100011000', '10001011000', '10001000110', '10110001000', '10001101000', '10001100010', '11010001000', '11000101000', '11000100010', '10110111000', '10110001110', '10001101110', '10111011000', '10111000110', '10001110110', '11101110110', '11010001110', '11000101110', '11011101000', '11011100010', '11011101110', '11101011000', '11101000110', '11100010110', '11101101000', '11101100010', '11100011010', '11101111010', '11001000010', '11110001010', '10100110000', '10100001100', '10010110000', '10010000110', '10000101100', '10000100110', '10110010000', '10110000100', '10011010000', '10011000010', '10000110100', '10000110010', '11000010010', '11001010000', '11110111010', '11000010100', '10001111010', '10100111100', '10010111100', '10010011110', '10111100100', '10011110100', '10011110010', '11110100100', '11110010100', '11110010010', '11011011110', '11011110110', '11110110110', '10101111000', '10100011110', '10001011110', '10111101000', '10111100010', '11110101000', '11110100010', '10111011110', '10111101110', '11101011110', '11110101110', '11010000100', '11010010000', '11010011100', '1100011101011', '11010111000'];


var strRaw = "";
var arrayData = [];

function funcConsumeEscape(inputChar) {
	'use strict';
	switch (inputChar) {
	case 96: 
		return 102;
	case 49: 
		return 97;
	case 50: 
		return 96;
	case 51: 
		return 96;
	case 52: 
		return 100;
	case 65: 
		return 101;
	case 66: 
		return 100;
	case 67: 
		return 99;
	case 68: 
		return 95;
	case 97: 
		return 98;
	case 98: 
		return 98;
	default:
		return (inputChar - 32);
	}
}


function funcCode128B(strText) {
  'use strict';
  var i, j, intWeight, intLength, intWtProd = 0;
  arrayData = [];

	intLength = strText.length;
	arrayData[0] = 104;
	intWtProd = 104;
	for (i = 0, j = 0; i < intLength; i += 1, j += 1) {
		if (strText[i] !== "`") {
			arrayData[j + 1] = strText.charCodeAt(i) - 32;
			intWeight = j + 1;
			intWtProd += intWeight * arrayData[j + 1];
		} else {
			i += 1;
			arrayData[j + 1] = funcConsumeEscape(strText.charCodeAt(i));
			intWeight = j + 1;
			intWtProd += intWeight * arrayData[j + 1];
		}
	}
	arrayData[j + 1] = intWtProd % 103;
	arrayData[j + 2] = 106;
	strRaw = "";
	for (i = 0; i < arrayData.length; i += 1) {
		strRaw += arrayCode128Bin[arrayData[i]];
	}
  return ''
} 

// var buttonBarcode = document.getElementById("btnGenBar");
// buttonBarcode.onclick = function () {
//   'use strict';
// 	var intHt, intWd, strImages;
// 	intHt = intWd = 0;
// 	strImages = "";
// 	intWd = 5;
// 	intHt = 50;
	// strText = document.getElementById("textBarcode").value;
	// document.getElementById("result").innerHTML = strImages = genBarcode(strRaw, intWd, intHt);
	// document.getElementById("textResult").innerHTML = strText

// };
    let printTemplate = '';
    if(this.codeType === 'barCode'){
      printTemplate = `

<html>

<head>
	<style>
  html, body {
    padding: 0 !important;
    margin: 0 !important;
  }
  @media print{
        body {
        margin-top:2mm !important;
        margin-right: 2mm !important;
        margin-left: 6mm !important;
        margin-bottom: 2mm !important
        }
      @page {
        margin: 0 !important;
      }
      html,body {
            page-break-after: avoid;
            page-break-before: avoid;
            height: 50mm;
            width: 100mm;
            padding: 0!important;
            margin: 0!important;
      }
    }
    .container{
        page-break-after:always;
        margin-top:0 !important;
        margin-bottom: 0 !important;
        padding: 0;
    }
	</style>
  <script>
  </script>
</head>

<body>
${this.printData.map((item, i) => `
  ${funcCode128B(item.boxCode)}
     	<div id="container" class="container" style="width: 92mm;margin-left: 5mm">
  
		<div id="header" style="height: 24mm;padding-top: 2mm;">
          ${item.flowers.map((item2, i) => `
    	<div style="display: flex;flex-direction: row;font-family: Arial;overflow: ellipsis;line-height: 5mm">
				<div style="display: flex;flex: 15;justify-content: flex-end">${item2.baseUoMCode}</div>
				<div style="display: flex;flex: 30;justify-content: flex-end">${item2.description}</div>
        <div style="display: flex;flex: 20"></div>
				<div style="display: flex;flex: 15;justify-content: flex-end">${item2.color}</div>
				<div style="display: flex;flex: 20;justify-content: flex-end">${item2.size}</div>
			</div>
  `.trim()).join('')}
		
		</div>
		<div style="height: 22mm;display: flex;flex-drection: row;">
			<div style="display:flex;flex;flex-direction: column;font-family: Arial Black;flex: 90">
      <span style="margin-left: 4px">${genBarcode(strRaw, 7.7, 50)}</span>

	    <span style="
      font-size: 21px;
      margin-left: 10px;
      letter-spacing: 1px;   
      ">${item.boxCode}</span>

      </div>

     <div style="display:flex;flex: 10;font-family: microsoft yahei;
      font-size: 10px;font-weight: bold;overflow: hidden;transform: scale(1.4, 3);
      position: absolute;
      left: 325;top: 112
      "><span>${item.orderReference}</span>
      </div>
	
	</div>
  `.trim()).join('')}
 

</body>

</html>
`;
    }

var myWindow = window.open("", "BarCode Print");
setTimeout(() => {
  myWindow.document.write(printTemplate);
  // myWindow.print();
  // myWindow.close();
});
return false;
  }
}
