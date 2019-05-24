import { Component } from '@angular/core';
// import JsBarcode from 'jsbarcode';

let JsBarcode: any;
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  codeType = '';

   printData = 
      [
        {
            "boxId": 8,
            "boxCode": "SUBUNRMI000008",
            "totalPackQuantity": 12,
            "totalBaseQuantity": 120,
            "orderReference": "BTD",
            "boxStatus": 1,
            "growerCode": "SUB",
            "dayStamp": null,
            "boxType": "",
            "flowers": [
                {
                    "boxFlowerId": 8,
                    "itemCode": "F100081",
                    "description": "Rose - PIN",
                    "color": "PIN",
                    "size": "60 CM",
                    "packUoMCode": "BUNCH10",
                    "baseUoMCode": "STEM",
                    "packQuantity": 6,
                    "baseQuantity": 60
                },
                {
                    "boxFlowerId": 9,
                    "itemCode": "F100083",
                    "description": "Rose - PIN",
                    "color": "PIN",
                    "size": "80 CM",
                    "packUoMCode": "BUNCH10",
                    "baseUoMCode": "STEM",
                    "packQuantity": 6,
                    "baseQuantity": 60
                },
                 {
                    "boxFlowerId": 8,
                    "itemCode": "F100081",
                    "description": "Rose - PIN",
                    "color": "PIN",
                    "size": "60 CM",
                    "packUoMCode": "BUNCH10",
                    "baseUoMCode": "STEM",
                    "packQuantity": 6,
                    "baseQuantity": 60
                },
                {
                    "boxFlowerId": 9,
                    "itemCode": "F100083",
                    "description": "Rose - PIN",
                    "color": "PIN",
                    "size": "80 CM",
                    "packUoMCode": "BUNCH10",
                    "baseUoMCode": "STEM",
                    "packQuantity": 6,
                    "baseQuantity": 60
                }
            ]
        },
        // {
        //     "boxId": 8,
        //     "boxCode": "SUBUNRMI000008",
        //     "totalPackQuantity": 12,
        //     "totalBaseQuantity": 120,
        //     "orderReference": "BTD",
        //     "boxStatus": 1,
        //     "growerCode": "SUB",
        //     "dayStamp": null,
        //     "boxType": "",
        //     "flowers": [
        //         {
        //             "boxFlowerId": 8,
        //             "itemCode": "F100081",
        //             "description": "Rose - PIN",
        //             "color": "PIN",
        //             "size": "60 CM",
        //             "packUoMCode": "BUNCH10",
        //             "baseUoMCode": "STEM",
        //             "packQuantity": 6,
        //             "baseQuantity": 60
        //         },
        //         {
        //             "boxFlowerId": 9,
        //             "itemCode": "F100083",
        //             "description": "Rose - PIN",
        //             "color": "PIN",
        //             "size": "80 CM",
        //             "packUoMCode": "BUNCH10",
        //             "baseUoMCode": "STEM",
        //             "packQuantity": 6,
        //             "baseQuantity": 60
        //         }
        //     ]
        // },
        // {
        //     "boxId": 8,
        //     "boxCode": "SUBUNRMI000008",
        //     "totalPackQuantity": 12,
        //     "totalBaseQuantity": 120,
        //     "orderReference": "BTD",
        //     "boxStatus": 1,
        //     "growerCode": "SUB",
        //     "dayStamp": null,
        //     "boxType": "",
        //     "flowers": [
        //         {
        //             "boxFlowerId": 8,
        //             "itemCode": "F100081",
        //             "description": "Rose - PIN",
        //             "color": "PIN",
        //             "size": "60 CM",
        //             "packUoMCode": "BUNCH10",
        //             "baseUoMCode": "STEM",
        //             "packQuantity": 6,
        //             "baseQuantity": 60
        //         },
        //         {
        //             "boxFlowerId": 9,
        //             "itemCode": "F100083",
        //             "description": "Rose - PIN",
        //             "color": "PIN",
        //             "size": "80 CM",
        //             "packUoMCode": "BUNCH10",
        //             "baseUoMCode": "STEM",
        //             "packQuantity": 6,
        //             "baseQuantity": 60
        //         },
        //          {
        //             "boxFlowerId": 8,
        //             "itemCode": "F100081",
        //             "description": "Rose - PIN",
        //             "color": "PIN",
        //             "size": "60 CM",
        //             "packUoMCode": "BUNCH10",
        //             "baseUoMCode": "STEM",
        //             "packQuantity": 6,
        //             "baseQuantity": 60
        //         },
        //         {
        //             "boxFlowerId": 9,
        //             "itemCode": "F100083",
        //             "description": "Rose - PIN",
        //             "color": "PIN",
        //             "size": "80 CM",
        //             "packUoMCode": "BUNCH10",
        //             "baseUoMCode": "STEM",
        //             "packQuantity": 6,
        //             "baseQuantity": 60
        //         }
        //     ]
        // },
        // {
        //     "boxId": 8,
        //     "boxCode": "SUBUNRMI000008",
        //     "totalPackQuantity": 12,
        //     "totalBaseQuantity": 120,
        //     "orderReference": "BTD",
        //     "boxStatus": 1,
        //     "growerCode": "SUB",
        //     "dayStamp": null,
        //     "boxType": "",
        //     "flowers": [
        //         {
        //             "boxFlowerId": 8,
        //             "itemCode": "F100081",
        //             "description": "Rose - PIN",
        //             "color": "PIN",
        //             "size": "60 CM",
        //             "packUoMCode": "BUNCH10",
        //             "baseUoMCode": "STEM",
        //             "packQuantity": 6,
        //             "baseQuantity": 60
        //         },
        //         {
        //             "boxFlowerId": 9,
        //             "itemCode": "F100083",
        //             "description": "Rose - PIN",
        //             "color": "PIN",
        //             "size": "80 CM",
        //             "packUoMCode": "BUNCH10",
        //             "baseUoMCode": "STEM",
        //             "packQuantity": 6,
        //             "baseQuantity": 60
        //         },
        //          {
        //             "boxFlowerId": 8,
        //             "itemCode": "F100081",
        //             "description": "Rose - PIN",
        //             "color": "PIN",
        //             "size": "60 CM",
        //             "packUoMCode": "BUNCH10",
        //             "baseUoMCode": "STEM",
        //             "packQuantity": 6,
        //             "baseQuantity": 60
        //         },
        //         {
        //             "boxFlowerId": 9,
        //             "itemCode": "F100083",
        //             "description": "Rose - PIN",
        //             "color": "PIN",
        //             "size": "80 CM",
        //             "packUoMCode": "BUNCH10",
        //             "baseUoMCode": "STEM",
        //             "packQuantity": 6,
        //             "baseQuantity": 60
        //         }
        //     ]
        // },
        // {
        //     "boxId": 8,
        //     "boxCode": "SUBUNRMI000008",
        //     "totalPackQuantity": 12,
        //     "totalBaseQuantity": 120,
        //     "orderReference": "BTD",
        //     "boxStatus": 1,
        //     "growerCode": "SUB",
        //     "dayStamp": null,
        //     "boxType": "",
        //     "flowers": [
        //         {
        //             "boxFlowerId": 8,
        //             "itemCode": "F100081",
        //             "description": "Rose - PIN",
        //             "color": "PIN",
        //             "size": "60 CM",
        //             "packUoMCode": "BUNCH10",
        //             "baseUoMCode": "STEM",
        //             "packQuantity": 6,
        //             "baseQuantity": 60
        //         },
        //         {
        //             "boxFlowerId": 9,
        //             "itemCode": "F100083",
        //             "description": "Rose - PIN",
        //             "color": "PIN",
        //             "size": "80 CM",
        //             "packUoMCode": "BUNCH10",
        //             "baseUoMCode": "STEM",
        //             "packQuantity": 6,
        //             "baseQuantity": 60
        //         },
        //          {
        //             "boxFlowerId": 8,
        //             "itemCode": "F100081",
        //             "description": "Rose - PIN",
        //             "color": "PIN",
        //             "size": "60 CM",
        //             "packUoMCode": "BUNCH10",
        //             "baseUoMCode": "STEM",
        //             "packQuantity": 6,
        //             "baseQuantity": 60
        //         },
        //         {
        //             "boxFlowerId": 9,
        //             "itemCode": "F100083",
        //             "description": "Rose - PIN",
        //             "color": "PIN",
        //             "size": "80 CM",
        //             "packUoMCode": "BUNCH10",
        //             "baseUoMCode": "STEM",
        //             "packQuantity": 6,
        //             "baseQuantity": 60
        //         }
        //     ]
        // },
        // {
        //     "boxId": 8,
        //     "boxCode": "SUBUNRMI000008",
        //     "totalPackQuantity": 12,
        //     "totalBaseQuantity": 120,
        //     "orderReference": "BTD",
        //     "boxStatus": 1,
        //     "growerCode": "SUB",
        //     "dayStamp": null,
        //     "boxType": "",
        //     "flowers": [
        //         {
        //             "boxFlowerId": 8,
        //             "itemCode": "F100081",
        //             "description": "Rose - PIN",
        //             "color": "PIN",
        //             "size": "60 CM",
        //             "packUoMCode": "BUNCH10",
        //             "baseUoMCode": "STEM",
        //             "packQuantity": 6,
        //             "baseQuantity": 60
        //         },
        //         {
        //             "boxFlowerId": 9,
        //             "itemCode": "F100083",
        //             "description": "Rose - PIN",
        //             "color": "PIN",
        //             "size": "80 CM",
        //             "packUoMCode": "BUNCH10",
        //             "baseUoMCode": "STEM",
        //             "packQuantity": 6,
        //             "baseQuantity": 60
        //         },
        //          {
        //             "boxFlowerId": 8,
        //             "itemCode": "F100081",
        //             "description": "Rose - PIN",
        //             "color": "PIN",
        //             "size": "60 CM",
        //             "packUoMCode": "BUNCH10",
        //             "baseUoMCode": "STEM",
        //             "packQuantity": 6,
        //             "baseQuantity": 60
        //         },
        //         {
        //             "boxFlowerId": 9,
        //             "itemCode": "F100083",
        //             "description": "Rose - PIN",
        //             "color": "PIN",
        //             "size": "80 CM",
        //             "packUoMCode": "BUNCH10",
        //             "baseUoMCode": "STEM",
        //             "packQuantity": 6,
        //             "baseQuantity": 60
        //         }
        //     ]
        // },
        ];
  

  print() {
    let printTemplate = '';
    if(this.codeType === 'barCode'){
      printTemplate = `

<html>

<head>
	<style>
  @media print{
        body {margin-top:0 !important; margin-right: 4mm;margin-left: 4mm;}
      @page {
        margin: 0 !important;
      }
      html,body {
            page-break-after: avoid;
            page-break-before: avoid;
            height: 42mm;
            width: 100mm;
      }
    }
    .container{
        page-break-after:always;
        margin-top: 4mm;
        margin-bottom: 4mm;
        padding: 0;
    }
	</style>
</head>

<body>
${this.printData.map((item, i) => `
     	<div id="container" class="container" style="overflow: ellipsis;width: 92mm">
  
		<div id="header" style="height: 30mm;">
          ${item.flowers.map((item2, i) => `
    	<div style="display: flex;flex-direction: row;overflow: ellipsis">
				<div style="display: flex;flex: 15">${item2.baseUoMCode}</div>
				<div style="display: flex;flex: 50">${item2.description}</div>
				<div style="display: flex;flex: 15">${item2.color}</div>
				<div style="display: flex;flex: 20">${item2.size}</div>
			</div>
  `.trim()).join('')}
		
		</div>
		<div style="height: 12mm;display: flex;flex-drection: row">
			<div style="display:flex;flex: 70">
      <svg id="barcode"></svg>
      </div>
			<div style="displya: flex;flex: 30">${item.orderReference}</div>
		</div>
	</div>
  `.trim()).join('')}
 

</body>

</html>
`;
    }

var myWindow = window.open("", "BarCode Print");
myWindow.document.write(printTemplate);
myWindow.print();
myWindow.close();
return false;
  }
}
