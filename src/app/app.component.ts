import { Component } from '@angular/core';

const BARCODE_TEMPLATE = `

<html>

<head>
	<style>
		body {
			padding: 0;
			margin: 0;
			height: 50mm;
			width: 100mm;
		}

		@media print {
			body {
				margin-top: 0 !important;
				margin-right: 3mm;
				margin-left: 3mm;
			}
			@page {
				page-break-before: always;
				margin-top: 4mm;
				margin-bottom: 0 !important;
				margin-left: 0 !important;
				margin-right: 0 !important;
				height: 50mm;
			}
		}
	</style>
</head>

<body>
	<div id="container" style="height: 46mm; width: 94mm;border: 1px solid black">
		<div id="header" style="height: 30mm;">
			<div style="display: flex;flex-direction: row;overflow: ellipsis">
				<div style="display: flex;flex: 15">STEM</div>
				<div style="display: flex;flex: 50">ROSE-PIN</div>
				<div style="display: flex;flex: 15">PIN</div>
				<div style="display: flex;flex: 20">60CM</div>
			</div>
		</div>
		<div style="display: flex;flex-drection: row">
			<div style="display:flex;flex: 70">BarCode</div>
			<div style="displya: flex;flex: 30">Description</div>
		</div>
	</div>
</body>

</html>
`;
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  value = '';
}
