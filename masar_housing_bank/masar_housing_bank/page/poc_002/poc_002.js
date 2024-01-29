// frappe.pages['poc-002'].on_page_load = function(wrapper) {
// 	var page = frappe.ui.make_app_page({
// 		parent: wrapper,
// 		title: 'poc-002',
// 		single_column: true
// 	});
// }

frappe.pages['poc-002'].on_page_load = function (wrapper) {
	new MyPage(wrapper);
}
class MyPage {
	constructor(wrapper) {
		this.page = frappe.ui.make_app_page({
			parent: wrapper,
			title: 'POC-002',
			single_column: true
		});
		this.make();
	}


	make() {
		const body = `
<div  style="background: white; width: 21cm;
height: 29.7cm;
display: block;
margin: 0 auto;
padding: 5px 5px;
margin-bottom: 1cm;
box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
box-sizing: border-box;
page-break-after: always;">
<section style=" margin-bottom: 1px; margin-top: 1px;">
<table style="width: 100%;height: 35px;border-collapse: collapse;border: 2px solid white ; margin-bottom: 1px; margin-top: 1px;">
<tr>
    <th style="width:50%;">
      <span style="font-size: 11px; font-weight: bold; text-emphasis-color: 1px solid #000;">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Report Date: 20-FEB-23
      </span>
	  <br>
	  <span style="font-size: 18px; font-weight: bold; text-emphasis-color: 1px solid #000;">
	  <b>&nbsp;&nbsp;&nbsp;&nbsp;Housing Bank for Trade and Finance</b></span>
	  <br>
	  <span style="font-size: 15px; font-weight: bold; text-emphasis-color: 1px solid #000;">
	  <b>&nbsp;&nbsp;&nbsp;&nbsp;ASE: THBK</b></span>
	</th>
	<th style="width: 25%;  text-align: center;">
			<span style="font-size: 11.8px; font-weight: bold; text-emphasis-color: 1px solid #000;">price of 20-fed-23</span>
			<br>
			<span style="font-size: 17px; font-weight: bold; text-emphasis-color: 1px solid #000;"><b>JD 3.74</b></span>
	</th>
	<th>
      <span style="width: 25%;">
        <img src="https://www.ufico.com/media/wv4pgd1c/picture1.png" 
		alt="United Financial Investments Logo" style="width: 90%; height: auto;">
      </span>
    </th>
</tr>
</table>
<table style="width: 50%;height: 10px;border-collapse: collapse;border: 2px solid white ; margin-bottom: 1px; margin-top: 1px;">
<tr style ="vertical-align: top;">
	<th style="width:45%;">
	<span style="font-size: 10px; font-weight: bold; text-emphasis-color: 1px solid #000;">
	<i><b>End of Share Price</b>:</i>02/20/2023
	</span>	
	</th>
	<th style="width:25%;">
	<span style="font-size: 10px; font-weight: bold; text-emphasis-color: 1px solid #000;">
	<i><b>Earnings</b>:</i>12/21/2022
	</span>	
	</th>
	<th style="width:30%; line-height:1;">
	<span style="font-size: 10px; font-weight: bold; text-emphasis-color: 1px solid #000;">
	<i><b> &nbsp;&nbsp;&nbsp;&nbsp;Annual Earnings</b>:</i><br>&nbsp;&nbsp;&nbsp;&nbsp;12/21/2022
	</span>	
	</th>
</tr>
</table>
</section>

<hr style="border-width: 1px;margin-top: 1px; margin-bottom: 5px;" color="black">
		<section>
			<table style="width: 100%;height: 80px;border-collapse: collapse;border: 2px solid white ;">
				<tr>
					<td style=" border-left: none;
								border-right: none;
								background-color: #f3efe6 ;
								width: 25%;
								vertical-align: top;">
								<span style="font-size: 20px; font-weight: bold; text-emphasis-color: 1px solid #000;">RATING: BUY</span>
						<br>
						<table 
						style ="
								background-color: #f3efe6 ;
								border: 1px solid  #f3efe6 ;
								border-collapse:collapse; 		
								border-color:  #f3efe6 ;
								width: 90%;
								text-align: center;
								vertical-align:middle;" 
						class="table1">
							<tr>
								<td style =" border: 1px solid black;border-collapse: collapse;">
									<span style="font-size: 20px; font-weight: bold;padding :4px;">1</span>
								</td >
								<td style=" background-color: green; border: 1px solid black;border-collapse: collapse;">
									<span style="font-size: 20px; font-weight: bold;padding :2.5px;">2</span>
								</td>
								<td style =" border: 1px solid #3b3b3b;border-collapse: collapse;">
									<span style="font-size: 20px; font-weight: bold;padding :2.5px;">3</span>
								</td>
								<td style =" border: 1px solid black;border-collapse: collapse;">
									<span style="font-size: 20px; font-weight: bold;padding :2.5px;">4</span>
								</td>
								<td style =" border: 1px solid black;border-collapse: collapse;">
									<span style="font-size: 20px; font-weight: bold;padding :2.5px;">5</span>
								</td>
							</tr>
						</table>
						<br>
						<small style="font-size: 10px;" >Initated Coverage 02/20/2023</small>
					</td>
					<td style="margin-bottom: 2px; line-height: 1.2; margin-top: 2px; background-color: #f3efe6 ;border: 1px solid  #f3efe6 ;vertical-align: top; 
								border-right: none;border-top: none;border-left: none;border-bottom: 0;">
						<small style =" font-size: 11.9px; line-height: 1.1;"><b>We project that THBK will perform in line with the market over the next 6 to 12 months. 
						This projection is based on our analysis of four key factors that influence common stock performance: relative valuation, 
						earnings strength, financial stability, and price movement.</b></small>
					</td>
					<td style=" border: 1px solid white;width: 18%;background-color: white;text-align: center;">
    						<h3 style="margin: 5px 0; padding: 0;">Target Price</h3>
    						<h4 style="margin: 5px 0; padding: 0;"><mark style="background-color: green; color: black;">JD 4.10</mark></h4>
					</td>
				</tr>
			</table>
		</section>
		<section  style="margin-bottom: 1px;">
			<table style="width: 100%;height: 40px;border-collapse: collapse;border: 2px solid white ;">
				<tr>
					
					<td style="border-right: none; background-color: #f3efe6 ; width: 26%;vertical-align: top;">
						<span style="font-size: 12px; font-weight: bold;">Previous Rating</span><br>
						
						<table 
						style ="
								background-color: #f3efe6 ;
								border: 1px solid  #f3efe6 ;
								border-collapse:collapse; 		
								border-color:  #f3efe6 ;
								text-align: center;
								vertical-align:middle;
								border-collapse: collapse;" 
						class="table1">
							<tr>
								<td style =" border: 1px solid #928a8a;">
									<span style="font-size: 12px; font-weight: bold; padding: 6px;">1</span>
								</td >
								<td style="border: 1px solid #928a8a;">
									<span style="font-size: 12px; font-weight: bold;padding: 6px;">2</span>
								</td>
								<td style =" border: 1px solid #928a8a;">
									<span style="font-size: 12px; font-weight: bold;padding: 6px;">3</span>
								</td>
								<td style =" border: 1px solid #928a8a;">
									<span style="font-size: 12px; font-weight: bold;padding: 6px;">4</span>
								</td>
								<td style ="border: 1px solid #928a8a">
									<span style="font-size: 12px; font-weight: bold;padding: 6px;">5</span>
								</td>
								<td >
									<span style="font-size: 12px; font-weight: bold;padding: 18px;"> - / - / - </span>
								</td>
							</tr>
						</table>
						</td>
					
					<td style=" line-height: 1.4;vertical-align: top; border-right: none;  border-left: none;background-color: #f3efe6 ;border: 1px solid  #f3efe6 ;	border-color:  #f3efe6 ;text-align: center; ">
						<span style="font-size: 12px; font-weight: bold;width: 18.5%; "><b>52-Week Price Range</b></span>
						<br>
						<span style="font-size: 11.5px; font-weight: bold;width: 18.5%; ">3.47 - 3.93</span>
					</td>
					<td style="line-height: 1.4; vertical-align: top; border-right: none;  border-left: none;background-color: #f3efe6 ;border: 1px solid  #f3efe6 ;	border-color:  #f3efe6 ;text-align: center; ">
						<span style="font-size: 12px; font-weight: bold;width: 18.5%; "><b>Market Capitilization</b></span>
						<br>
						<span style="font-size: 11.5px; font-weight: bold;width: 18.5%; ">JD 1.18 B</span>
					</td>
					<td style="line-height: 1.4; vertical-align: top; border-right: none;  border-left: none;background-color: #f3efe6 ;border: 1px solid  #f3efe6 ;	border-color:  #f3efe6 ;text-align: center; ">
						<span style="font-size: 12px; font-weight: bold;width: 18.5%; "><b>Dividend Yield</b></span>
						<br>
						<span style="font-size: 11.5px; font-weight: bold;width: 18.5%; ">6.7%</span>
					</td>
					<td style="line-height: 1.4; vertical-align: top; border-right: none;  border-left: none;background-color: #f3efe6 ;border: 1px solid  #f3efe6 ;	border-color:  #f3efe6 ;text-align: center; ">
						<span style="font-size: 12px; font-weight: bold;width: 18.5%; "><b>Dividends / Share</b></span>
						<br>
						<span style="font-size: 11.5px; font-weight: bold;width: 18.5%; ">JD 0.25</span>
					</td>
				</tr>
			</table>
		
		</section>
		<section  style=" margin-bottom: 1px; margin-top: 1px;">
			<table style=" margin-top: 1px;width: 100%;height: 20px;border-collapse: collapse;border: 0.1px solid white ;">
				<tr>
					<td style=  " font-size: 12.5px;width: 15%; vertical-align: bottom; background-color: #f3efe6 ;border: 1px solid  #f3efe6 ;">
						<b>Founded</b>: 1973
					</td>
					<td style="   font-size: 12.5px;width: 19%;vertical-align: top; background-color: #f3efe6 ;border: 1px solid  #f3efe6 ;">
						<b>Shares Outstanding</b>:<br>315.00 M
					</td>
					<td style="  font-size: 12.5px;width: 15%;vertical-align: bottom; background-color: #f3efe6 ;border: 1px solid  #f3efe6 ;">
						<b>Employees</b>: 3,913
					</td>
					<td style="  font-size: 12.5px;width: 19%;vertical-align: bottom; background-color: #f3efe6 ;border: 1px solid  #f3efe6 ;">
						<b>Sector</b>: Banks
					</td>
					<td style=" font-size: 12.5px;width: 32%; vertical-align: top; background-color: #f3efe6 ;border: 1px solid  #f3efe6 ;">
						<b>Industry</b>: Diversified Banks
					</td>
				</tr>
			</table>
			<p style=" margin-bottom: 2px; font-size: 12px; line-height: 1.4; margin-top: 2px;">Housing Bank for Trade and Finance is one of the largest banks in Jordan and a leading provider of banking and financial services. 
				THBK offers a wide range of financial products and services to its customers, including corporate and retail banking, trade finance, project finance,
				 treasury and capital markets, and investment banking, with a network of over 70 branches and offices.
				 The bank has also established a presence in other countries, including Palestine, Bahrain, and Cyprus.</p>
		</section>


		<hr style="border-width: 1px;margin-top: 1px; margin-bottom: 5px;" color="black">
		<hr color="black" style="  border-width: 1px;margin-bottom: 0;">
			<h5 style=" margin-top: 0;  margin-bottom: 3px;background-color:rgb(52, 25, 25);  color:white; width: 200px;text-align: left; ">
				Recommendation Summary
			</h5
		</hr>
		<section>
			<p style=" margin-bottom: 2px; font-size: 12px; line-height: 1.4; margin-top: 2px;">UFICO's <b>BUY</b> recommendation on Housing Bank is the result of our systematic analysis on four basic characteristics: relative valuation, 
					earnings strength, financial stability, and price movement.THBK's stock is relatively underpriced priced.
					 It has generated a generally positive trend in earnings per share over the past 4 quarters. 
					THBK has low exposure risk to defaults low reliance on debt to fund its operations. 
					Share price changes over the past year indicates that THBK will perform in line with the market over the near term.
			</p>
			<table style="width:100%;border-collapse: collapse;border: 2px solid white ;">
				<tr style ="height :20px ; border-bottom:none; ">
					<th  style = "width:25%;text-align: left ; font-size: 12px;vertical-align: top; ">
						<b>Relative&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<small style="color: green; text-align: right;"><strong>POSITIVE</strong></small>
						<br>Valuation</b>
					</th>
					<th  style = "width:25%; vertical-align: top;text-align: left ;font-size: 12px; ">
						<b>Earnings Strength&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<small style="color: green; text-align: right;"><strong>POSITIVE</strong></small>
						</b>
					</th>
					<th  style = "width:25%;text-align: left ; vertical-align: top;font-size: 12px; ">
						<b>Financial&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small style="color: green; text-align: right;"><strong>POSITIVE</strong></small>
						<br>Stability</b>
					</th>
					<th  style = "width:25%; vertical-align: top;text-align: left ; top;font-size: 12px; ">
						<b>Price Movement&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				
						&nbsp;&nbsp;&nbsp;<small style="color: #ecb03f; text-align: right;"><strong>NEUTRAL</strong></small>
						</b>
					</th>
				</tr>
			</table>
			<table style="width:100%;border-collapse: collapse;border: none;">
				<tr style="border-top:none ; ">
					<td style = "position: relative;top : -70px ; left :-30px ;">

						<script src="https://unpkg.com/frappe-charts@1.1.0"></script>
						<div id="chart1" style="width: 260px;"></div>
						<style>
						#chart1-container {
							overflow: hidden;
						}
							#chart1 text {
								display: none; 
											}
											#chart1 .legend-dot {
											display:none ; 
											}
						</style>
						<script>
								const chart1 = new frappe.Chart("#chart1", {
									title: "",
									data: {
										labels: ["negative", "neutral", "positive"],
										datasets: [
											{ values: [16, 1, 4] },
											{ values: [16, 1, 4] },
											{ values: [16, 1, 4] }  
										]
									},
									type: 'percentage', 
									height: 80, 
									width :220 ,
									barOptions: {
										height: 10,
									},
									colors: ['#bf0606', '#ffffff', '#058a1b'],
								});
						</script>
					</td>

					<td style = "position: relative;top : -70px ; left :-110px ;">
					<script src="https://unpkg.com/frappe-charts@1.1.0"></script>
					<div id="chart2" style="width: 270px;"></div>
					<style>
						#chart2 text {
							display: none;
							}
						#chart2 .legend-dot {
							display:none ; 
							}
					</style>
					<script>
							const chart2 = new frappe.Chart("#chart2", {
								title: "",
								data: {
									labels: ["negative", "neutral", "positive"],
									datasets: [
										{ values: [16, 1, 4] },
										{ values: [16, 1, 4] },
										{ values: [16, 1, 4] }  
									]
								},
								type: 'percentage', 
								height: 80, 
								width :220 ,
								barOptions: {
									height: 10,
								},
								colors: ['#bf0606', '#ffffff', '#058a1b'],
							});
					</script>

					</td>
				


					<td style = "position: relative;top : -70px ; left :-190px ;">

					<script src="https://unpkg.com/frappe-charts@1.1.0"></script>
					<div id="chart3" style="width: 280px;"></div>
					<style>
						#chart3 text {
							display: none;
							}
						#chart3 .legend-dot {
							display:none ; 
							}
					</style>
					<script>
							const chart3 = new frappe.Chart("#chart3", {
								title: "",
								data: {
									labels: ["negative", "neutral", "positive"],
									datasets: [
										{ values: [16, 1, 6] },
										{ values: [16, 1, 6] },
										{ values: [16, 1, 6] }  
									]
								},
								type: 'percentage', 
								height: 80, 
								width :220 ,
								barOptions: {
									height: 10,
								},
								colors: ['#bf0606', '#ffffff', '#058a1b'],
							});
					</script>
					</td>



					<td style = "position: relative;top : -70px ; left :-280px ;">

					<script src="https://unpkg.com/frappe-charts@1.1.0"></script>
					<div id="chart4" style="width: 280px;"></div>
					<style>
						#chart4 text {
							display: none;
							}
						#chart4 .legend-dot {
							display:none ; 
							}
					</style>
					<script>
							const chart4 = new frappe.Chart("#chart4", {
								title: "",
								data: {
									labels: ["negative", "neutral", "positive"],
									datasets: [
										{ values: [16, 1, 12] },
										{ values: [16, 1, 12] },
										{ values: [16, 1, 12] }  
									]
								},
								type: 'percentage', 
								height: 80, 
								width :220 ,
								barOptions: {
									height: 10,
								},
								colors: ['#bf0606', '#ffffff', '#058a1b'],
							});
					</script>
					</td>





				</tr>
			</table>
			<table style="width:100%;border-collapse: collapse;border: 1px solid white ; position: relative;top : -70px ;">
				<tr>
					<td style = "width :25% ;border: 4px solid white ; ">
						<span style="float: left; font-size: 9px;">negative&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;neutral</span>
						<span style="float: right; font-size: 9px;">postitve&nbsp;&nbsp;&nbsp;</span>
					<td>
					<td style = "width :25% ;border: 4px solid white ; ">
						<span style="float: left; font-size: 9px;">negative&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;neutral</span>
						<span style="float: right; font-size: 9px;">postitve &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
					<td>
					<td style = "width :25% ; border: 4px solid white ;">
						<span style="float: left; font-size: 9px;">negative&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;neutral</span>
						<span style="float: right; font-size: 9px;">postitve&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
					<td>
					<td style = "width :25% ; border: 4px solid white ;">
						<span style="float: left; font-size: 9px;">negative&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;neutral</span>
						<span style="float: right; font-size: 9px;">postitve&nbsp;&nbsp;&nbsp;</span>
					<td>
				</tr>
			</table>
			<table style="width:100%;border-collapse: collapse;border: 2px solid white ;position: relative;top : -70px ;">
				<tr style="border-top:none ; height :40px ; ">
					<td  style = "text-align: left ; vertical-align: top;width :25% ; ">
						<p style="font-size: 11px; line-height: 1.2;">
						The stock is <b>underpriced</b> based on its current P/E, but <b>fairly</b> priced based on its P/B ratio. Dividend <b>exceeds</b>s the top 25% of dividend payers in the market.</p>
					</td>
					<td  style = "text-align: left ; vertical-align: top; width :25% ;">
						<p style="font-size: 11px; line-height: 1.2;">
						The stock is <b>underpriced</b> based on its current P/E, but <b>fairly</b> priced based on its P/B ratio. Dividend <b>exceeds</b>s the top 25% of dividend payers in the market.</p>
					</td>
					<td  style = "text-align: left ; vertical-align: top; width :25% ;">
						<p style="font-size: 11px; line-height: 1.2;">
						THBK has <b>low</b> exposure risk to defaults, <b>low</b> exposure risk to cover unexpected funding requirements, and relatively <b>low</b> level of bad loans.
						</p>
					</td>
					<td  style = "text-align: left ; vertical-align: top; width :25% ;">
						<p style="font-size: 11px; line-height: 1.2;">
						Not significantly volatile over the past 3 months. The stock is rated a <b>NEUTRAL</b> at its current 14-Day RSI, and a <b>BUY</b> at MA200.
						</p>
					</td>
				</tr>
			</table>
		</section>
		<section style="position: relative;top : -70px ;" >
		<hr style=" border-width: 1px;margin-top: 1px; margin-bottom: 5px;" color="black">
		<hr color="black" style="border-width: 1px; margin-bottom: 0;">
			<h5 style=" margin-top: 0;  margin-bottom: 3px;background-color: #f3efe6;  color:black; width: 155px;text-align: left; ">
			Major Risk & Rewards
			</h5>
		</hr>
		<section  style="margin-top: 1px; margin-bottom: 5px;">
		<ul style="list-style: none; list-style-position:inside ;">
			<li style="margin-left: 2px; margin-bottom: 2px; position: relative; padding-left: none; color: #007100">
				<small style="display: inline-block; color: black; line-height: 1.1"><i style="color: #007100;"><b>Sound Quality of Earnings:</b></i>
					Profitability remains among the local banking system's best,
					reflecting the sound quality of earnings which are largely derived from retail banking including residential mortgage lending.
					Revenue streams also exhibit a fair degree of geographical diversification
				</small>
					<span style="margin-top: none;margin-right: none; margin-bottom: none; margin-left: none; position: absolute; left: -1.5em; top: 0.5em; border-color: transparent #007100; border-style: solid; border-width: 0.3em 0 0.3em 0.5em;"></span>
			</li>


			<li style="margin-left: 2px; margin-bottom: 2px; position: relative; padding-left: none; color: #007100">
				<small style="display: inline-block; color: black; line-height: 1.1"><i style="color: #007100;"><b>QNB's Added Value:</b></i>
					Qatar National Banks (QNB) is the THBK's largest shareholder with 38.6% ownership interest that 
					provides an added value to the business model. While QNB may have the capacity to support THBK in the event of distress,
					their willingness to inject capital is unknown.
				</small>
					<span style="margin-top: none;margin-right: none; margin-bottom: none; margin-left: none; position: absolute; left: -1.5em; top: 0.5em; border-color: transparent #007100; border-style: solid; border-width: 0.3em 0 0.3em 0.5em;"></span>
			</li>

			<li style="margin-left: 2px; margin-bottom: 2px; position: relative; padding-left: none; color: #007100">
				<small style="display: inline-block; color: black; line-height: 1.1"><i style="color: #007100;"><b>Largest Branch Network and Client Base:</b></i>
				THBK has both the largest branch network and client base with over one million customers in Jordan, 
				and ranks second behind Arab Bank Plc based on domestic market share of total assets.
				</small>
					<span style="margin-top: none;margin-right: none; margin-bottom: none; margin-left: none; position: absolute; left: -1.5em; top: 0.5em; border-color: transparent #007100; border-style: solid; border-width: 0.3em 0 0.3em 0.5em;"></span>
			</li>
			
			<li style="margin-left: 2px; margin-bottom: 2px; position: relative; padding-left: none; color: #007100">
				<small style="display: inline-block; color: black; line-height: 1.1"><i style="color: #007100;"><b>Liquid Balance Sheet:</b></i>
					The deep customer deposit base coupled with a comparatively small credit portfolio has consistently produced a very liquid balance sheet.
				</small>
					<span style="margin-top: none;margin-right: none; margin-bottom: none; margin-left: none; position: absolute; left: -1.5em; top: 0.5em; border-color: transparent #007100; border-style: solid; border-width: 0.3em 0 0.3em 0.5em;"></span>
			</li>
		</ul>
</section>
<hr style="margin-top: 1px; border-width: 1px; margin-bottom: 5px;" color="black">
		<hr color="black" style=" border-width: 1px; margin-bottom: 0;">
			<h5 style=" margin-top: 0;  margin-bottom: 3px;background-color: #f3efe6;  color:black; width: 100%;text-align: left; ">
			Peer Group Comparison
			</h5>
		</hr>
		<section  style="margin-top: 1px; margin-bottom: 5px;">
		<table style="width: 100%;height: 40px;border-collapse: collapse;border: 1px solid white ;">
				<tr style="border-top:none ; height :7px ;text-align: left ;
				 vertical-align: top; font-size: 11px ;background-color:#e0d8c8;border: 0.2px solid white ;">
					<th style = "border: 1px solid white ;background-color:#ffffff;"></th>
					<th style = "background-color:#ffffff;"></th>
					<th style = "border: 1px solid white ;"><b>Price</b></th>
					<th style = "border: 1px solid white ;"><b>Mkt Cap</b></th>
					<th style = "border: 1px solid white ;"><b>EPS</b></th>
					<th style = "border: 1px solid white ;"><b>P/E</b></th>
					<th style = "border: 1px solid white ;"><b>P/B</b></th>
					<th style = "border: 1px solid white ;"><b>Yield</b></th>
					<th style = "border: 1px solid white ;"><b>Payout</b></th>
					<th style = "border: 1px solid white ;"><b>NPM</b></th>
					<th style = "border: 1px solid white ;"><b>Debt/Equity</b></th>
				</tr>
				<tr style="border-top:none ; height :7px ;text-align: left ;
				 vertical-align: top; font-size: 10.5px ;background-color:#f3efe6;border: 0.2px solid white ;">
					<td style = "background-color:#ffffff;"></td>
					<td style = "background-color:#ffffff;"></td>
					<td>02/20/23</td>
					<td>02/30/23</td>
					<td>(TTM)</td>
					<td>(TTM)</td>
					<td>(MRQ)</td>
					<td>(TTM)</td>
					<td>(TTM)</td>
					<td>(TTM)</td>
					<td>(MRQ)</td>
				</tr>
				<tr style="border-top:none ; height :7px ;text-align: left ;
				 vertical-align: top; font-size: 10.5px ;">
					<td style = "font-size: 11.5px ;"><b>THBK</b></td>
					<td style = "font-size: 11.5px ;"><b>Housing Bank for Trade and Finance</b></td>
					<td><b>JD 3.74</b></td>
					<td><b>JD 1.2 B</b></td>
					<td><b>JD 0.41</b></td>
					<td><b>9.1x</b></td>
					<td><b>1.0x</b></td>
					<td><b>6.7%</b></td>
					<td><b>60.8%</b></td>
					<td><b>34.8%</b></td>
					<td><b>31.8%</b></td>
				</tr>
				<tr style="border-top:none ; height :7px ;text-align: left ;
				 vertical-align: top; font-size: 10.5px ;">
					<td style = "font-size: 11.5px ;">BOJX</td>
					<td style = "font-size: 11.5px ;">Bank of Jordan</td>
					<td>JD 2.32</td>
					<td>JD 464.0 M</td>
					<td>JD 0.20</td>
					<td>11.6x</td>
					<td>0.9x</td>
					<td>7.8%</td>
					<td>89.6%</td>
					<td>28.4%</td>
					<td>7.4%</td>
				</tr>
				<tr style="border-top:none ; height :7px ;text-align: left ;
				 vertical-align: top; font-size: 10.5px ;">
					<td style = "font-size: 11.5px ;">CAPL</td>
					<td style = "font-size: 11.5px ;">Capital Bank of Jordan</td>
					<td>JD 2.47</td>
					<td>JD 649.7 M</td>
					<td>JD 0.33</td>
					<td>7.5x</td>
					<td>1.1x</td>
					<td>6.9%</td>
					<td>51.5%</td>
					<td>47.7%</td>
					<td>115.7%</td>
				</tr>
			</table>

		
			<hr style=" border-width: 1px;margin-top: 1px; margin-bottom: 5px;" color="black">
			<hr color="black" style="border-width: 1px; margin-bottom: 0;">
				<h5 style=" margin-top: 0;  margin-bottom: 3px;background-color: #f3efe6;  color:black; width: 100%;text-align: left; ">
				Past Performance
				</h5>
		<section>
		<table style="width: 100%;height: 10px;border-collapse: collapse;border: 1px solid white ;">
		<tr style="border-top:none ; height :5px ;text-align: left ;
		vertical-align: top; font-size: 11px ;background-color:#e0d8c8;border: 0.2px solid white ;">
				<th style = " width:25%;background-color:#ffffff;"></th>
				<th><b>2018</b></th>
				<th><b>2019</b></th>
				<th><b>2020</b></th>
				<th><b>2021</b></th>
				<th><b>2022</b></th>
				<th><b>TTM</b></th>
			</tr>
			</table>
			<br>
			<small style="width:50% ;">
			<span style="float: left; color: blue; font-size: 11px;">
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			Glossary Disclaimer</span>
			<span style="float:right ; color :black ; font-size: 10px;"> copyright &#169; 2023 UFI Equity Researsh | 
			<a href ="https://www.ufico.com/" style ="color :blue;">www.ufico.com</a>  Page <b> 2 </b> of <b> 3</b>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			</span>
			</small>
			

</section>		
</div>


<div class="page-break"></div>
<div  style="background: white; width: 21cm;height: 29.7cm;display: block;margin: 0 auto;padding: 5px 5px;margin-bottom: 1cm;box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);box-sizing: border-box;page-break-after: always;">

	<section style=" margin-bottom: 1px; margin-top: 1px;">
		<table style="width: 100%;height: 35px;border-collapse: collapse;border: 2px solid white ; margin-bottom: 1px;margin-top: 1px;">
			<tr>
				<th style="width:50%;">
				<span style="font-size: 11px; font-weight: bold; text-emphasis-color: 1px solid #000;">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Report Date: 20-FEB-23
				</span>
				<br>
				<span style="font-size: 18px; font-weight: bold; text-emphasis-color: 1px solid #000;">
				<b>&nbsp;&nbsp;&nbsp;&nbsp;Housing Bank for Trade and Finance</b></span>
				<br>
				<span style="font-size: 15px; font-weight: bold; text-emphasis-color: 1px solid #000;">
				<b>&nbsp;&nbsp;&nbsp;&nbsp;ASE: THBK</b></span>
				</th>
				<th style="width: 25%;  text-align: center;">
						<span style="font-size: 11.8px; font-weight: bold; text-emphasis-color: 1px solid #000;">price of 20-fed-23</span>
						<br>
						<span style="font-size: 17px; font-weight: bold; text-emphasis-color: 1px solid #000;"><b>JD 3.74</b></span>
				</th>
				<th>
				<span style="width: 25%;">
					<img src="https://www.ufico.com/media/wv4pgd1c/picture1.png" 
					alt="United Financial Investments Logo" style="width: 90%; height: auto;">
				</span>
				</th>
			</tr>
		</table>
	</section>



	<section  style="margin-top: 1px; margin-bottom: 5px;">
		<table style="width: 100%;border-collapse: collapse;border: 1px solid white ;">
			<tr style="border-top:none ; height :8px ;text-align: left ;vertical-align: top; font-size: 11.5px ;border: 0.2px solid white ;">
				<td>Net Profit Margin</td>
				<td>31.6%</td>
				<td>26.4%</td>
				<td>15.1%</td>
				<td>34.6%</td>
				<td>34.8%</td>
				<td>34.8%</td>
			</tr>
			<tr style="border-top:none ; height :8px ;text-align: left ;vertical-align: top; font-size: 11.5px ;border: 0.2px solid white ;">
				<td>Dividend/share</td>
				<td>JD 0.15</td>
				<td>JD 0.00</td>
				<td>JD 0.12</td>
				<td>JD 0.20</td>
				<td>JD 0.25</td>
				<td>JD 0.25</td>
			</tr>
			<tr style="border-top:none ; height :8px ;text-align: left ;vertical-align: top; font-size: 11.5px ;border: 0.2px solid white ;">
				<td>Earning/share</td>
				<td>JD 0.287</td>
				<td>JD 0.257</td>
				<td>JD 0.116</td>
				<td>JD 0.335</td>
				<td>0.411</td>
				<td>JD 0.411</td>
			</tr>
			<tr style="border-top:none ; height :8px ;text-align: left ;vertical-align: top; font-size: 11.5px ;border: 0.2px solid white ;">
				<td>LT Debt to Equity</td>
				<td>11.7%</td>
				<td>14.1%</td>
				<td>27.3%</td>
				<td>29.8%</td>
				<td>31.8%</td>
				<td>31.8%</td>
			</tr>
		</table>
	</section>		
	<hr style=" border-width: 1px;margin-top: 1px; margin-bottom: 35px; position: relative;top : -8px ;" color="black">
	<hr color="black" style="border-width: 1px; margin-bottom: 0;position: relative;top : -15px ;">
			
			
	<div style= content: ";display: table;clear: both; position: relative;top : -20px ;">
		<div>
			<div style=" float:left ; width:70% ; padding :1px ;position: relative;top : -30px ; ">
				<small style="padding-top: 0px; display:inline;color:black; align-self: left; width: 100%; font-size:13.5px;">
							<b>Relative Valuation is</b> <strong style="color: green;">POSITIVE</strong>
				</small>
				<br>
				<table style="width: 95%;border-collapse: collapse;border: 1px solid white ;">
					<tr style="font-size:12px;background-color: #e6e6e6 ; border-top: 1px solid #e6e6e6;">
						<th style="border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;"><b>Last Price</b></th>
						<th style="border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;"><b>Market Cap</b></th>
						<th style="border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;"><b>EPS</b></th>
						<th style="border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;"><b>P/E</b></th>
						<th style="border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;"><b>Book</b></th>
						<th style="border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;"><b>P/B</b></th>
						<th style="border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;"><b>DPS</b></th>
						<th style="border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;"><b>Div. Yield</b></th>
					</tr>
					<tr style="font-size:11px">
						<td style="border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;">(20-Feb-23)</td>
						<td style="border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;">(20-Feb-23)</td>
						<td style="border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;">(TTM)</td>
						<td style="border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;">(TTM)</td>
						<td style="border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;">(MRQ)</td>
						<td style="border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;">(TTM)</td>
						<td style="border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;">(MRY)</td>
						<td style="border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;">(20-Feb-23)</td>
					</tr>
					<tr style="font-size:11px; border-bottom: 1px solid #e6e6e6;">
						<td style="border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;">JD 3.74</td>
						<td style="border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;">JD 1.2 B</td>
						<td style="border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;">JD0.41</td>
						<td style="border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;">9.1x</td>
						<td style="border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;">JD 3.81</td>
						<td style="border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;">1.0x</td>
						<td style="border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;">JD 0.25</td>
						<td style="border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;">6.7%</td>
					</tr>
				</table>
				<ul style=" font-size:11.5px;padding:12px;margin-top: 1px; margin-bottom: 5px; margin-left:1px;position: relative;top : -10px ;">
					<li style="margin-left: 2px; margin-bottom: 2px; padding-left: 1px;">
							<small style=" color: black; line-height: 1.1">
							<b>Price/Earnings vs. Industry</b>: 
							THBK is underpriced based on its Price/Earnings Ratio of 9.1x compared to the Banks industry average of 12.5x.
							</small>
						</li>	
					<li style="margin-left: 2px; margin-bottom: 2px; padding-left: 1px;">
						<small style=" color: black; line-height: 1.1">
						<b>Price/Book vs. Industry</b>: 
						THBK is slightly overpriced based on its Price/Book Ratio of 1.0x compared to the Banks industry average of 0.9x.
						</small>
					</li>
					<li style="margin-left: 2px; margin-bottom: 2px; padding-left: 1px;">
						<small style=" color: black; line-height: 1.1">
						<b>Dividend Yield</b> 
						of 6.7%, is high and exceeds the top 25% of dividend payers in the Jordanian market of 6.6%.
						Dividend payments have increased over the past 5 years.
						</small>
					</li>
					<li style="margin-left: 2px; margin-bottom: 2px; padding-left: 1px;">
						<small style=" color: black; line-height: 1.1">
						<b>Dividend Payout Ratio</b>
						is 60.8%, indicating payments are well covered by earnings.
						</small>
					</li>
				</ul>
			</div>
			<div style=" float:left ; width:30% ; padding :1px ;position: relative;top : -25px ;">
				<small style="width:50% ;">
					<span style="float: left;  font-size: 13.5px;">
						<b>Price / Earnings</b>
					</span>
					<span style="float:right ; color :green ; font-size: 13.5px;"> 
						<b>POSITIVE</b>
					</span>
				</small>
				<br>
				<div style = "position: relative;top : -70px ; left :-48px ;">
					<script src="https://unpkg.com/frappe-charts@1.1.0"></script>
					<div id="chart5" style="width: 330px;"></div>
						<style>
						#chart5-container {
							overflow: hidden;
						}
							#chart5 text {
								display: none; 
								}
							#chart5 .legend-dot {
								display:none ; 
								}
						</style>
						<script>
								const chart5 = new frappe.Chart("#chart5", {
									title: "",
									data: {
										labels: ["negative", "neutral", "positive"],
										datasets: [
											{ values: [16, 1, 4] },
											{ values: [16, 1, 4] },
											{ values: [16, 1, 4] }  
										]
									},
									type: 'percentage', 
									height: 80, 
									width :220 ,
									barOptions: {
										height: 10,
									},
									colors: ['#bf0606', '#ffffff', '#058a1b'],
								});
						</script>
					</div>
					<br>
					<div style = "position: relative;top : -85px ;width :100%">
							<small style = "font-size:9px;">
							very negative&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							neutral&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							very postive</small>
					</div>
					<small style = "position: relative;top : -85px ;width :100%">
						<span style="float: left;  font-size: 13.5px;">
							<b>Price / Book</b>
						</span>
						<span style="float:right ; color :red ; font-size: 13.5px;"> 
							<b>NEGATIVE</b>
						</span>
					</small>
					<br>
					<div style = "position: relative;top : -155px ; left :-48px ;">
						<script src="https://unpkg.com/frappe-charts@1.1.0"></script>
						<div id="chart6" style="width: 330px;"></div>
						<style>
							#chart6-container {
								overflow: hidden;
							}
								#chart6 text {
									display: none; 
									}
								#chart6 .legend-dot {
									display:none ; 
									}
						</style>
						<script>
							const chart6 = new frappe.Chart("#chart6", {
								title: "",
								data: {
									labels: ["negative", "neutral", "positive"],
									datasets: [
										{ values: [16, 1, 20] },
										{ values: [16, 1, 20] },
										{ values: [16, 1, 20] }  
									]
								},
								type: 'percentage', 
								height: 80, 
								width :220 ,
								barOptions: {
									height: 10,
								},
								colors: ['#bf0606', '#ffffff', '#058a1b'],
							});
						</script>
					</div>
							<br>
							<div style = "position: relative;top : -155px ;width :100%">
									<small style = "font-size:9px;">
									very negative&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									neutral&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									very postive</small>
							</div>

							<small style = "position: relative;top : -155px ;width :100%">
							<span style="float: left;  font-size: 13.5px;">
								<b>Dividend Growth</b>
							</span>
							<span style="float:right ; color :green ; font-size: 13.5px;"> 
								<b>POSITIVE</b>
							</span>
						</small>
							<br>
						<div style = "position: relative;top : -225px ; left :-48px ;">
							<script src="https://unpkg.com/frappe-charts@1.1.0"></script>
							<div id="chart7" style="width: 330px;"></div>
								<style>
								#chart7-container {
									overflow: hidden;
								}
									#chart7 text {
										display: none; 
										}
									#chart7 .legend-dot {
										display:none ; 
										}
								</style>
								<script>
										const chart7 = new frappe.Chart("#chart7", {
											title: "",
											data: {
												labels: ["negative", "neutral", "positive"],
												datasets: [
													{ values: [16, 1, 4] },
													{ values: [16, 1, 4] },
													{ values: [16, 1, 4] }  
												]
											},
											type: 'percentage', 
											height: 80, 
											width :220 ,
											barOptions: {
												height: 10,
											},
											colors: ['#bf0606', '#ffffff', '#058a1b'],
										});
								</script>
							</div>
							<br>
							<div style = "position: relative;top : -240px ;width :100%">
									<small style = "font-size:9px;">
									very negative&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									neutral&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									very postive</small>
							</div>

								<small style = "position: relative;top : -239px ;width :100%">
								<span style="float: left;  font-size: 13.5px;">
									<b>Dividend Yield</b>
								</span>
								<span style="float:right ; color :green ; font-size: 13.5px;"> 
									<b>POSITIVE</b>
								</span>
							</small>
								<br>
							<div style = "position: relative;top : -305px ; left :-48px ;">
								<script src="https://unpkg.com/frappe-charts@1.1.0"></script>
								<div id="chart8" style="width: 330px;"></div>
									<style>
									#chart8-container {
										overflow: hidden;
									}
										#chart8 text {
											display: none; 
											}
										#chart8 .legend-dot {
											display:none ; 
											}
									</style>
									<script>
											const chart8 = new frappe.Chart("#chart8", {
												title: "",
												data: {
													labels: ["negative", "neutral", "positive"],
													datasets: [
														{ values: [16, 1, 4] },
														{ values: [16, 1, 4] },
														{ values: [16, 1, 4] }  
													]
												},
												type: 'percentage', 
												height: 80, 
												width :220 ,
												barOptions: {
													height: 10,
												},
												colors: ['#bf0606', '#ffffff', '#058a1b'],
											});
									</script>
								</div>
						<br>
						<div style = "position: relative;top : -314px ;width :100%">
								<small style = "font-size:9px;">
								very negative&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								neutral&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								very postive</small>
						</div>
					</div>
					</div>
					<div style = "position: relative;top : 235px ;width :100%">
						<hr color="black" >
						<hr color="black" style="border-width: 1px; margin-bottom: 0;">
					</div>



					<div style= content: ";display: table;clear: both;position: relative;top : -325px ; ">
						<div style=" float:left ; width:70% ; padding :1px ;position: relative;top : -325px ; ">						

							<small
								style="padding-top: 0px; display:inline;color:black; align-self: left; width: 100%; font-size:13.5px;">
								<b>Earnings Strength is</b> 
								<strong style="color: green;">POSITIVE
								</strong>
							</small>

							<br>
							<table style="width: 95%;border-collapse: collapse;border: 1px solid white ;">
								<tr style=" height :7px ;text-align: center ;vertical-align: top; font-size: 11px ;border: 0.2px solid white ;">
									<th style="width:24%; background-color: #e0d8c8;"><b>4Q22 Results</b> <small>(TTM)</small></th>
									<th style="width:25%; background-color:#e6e6e6;border-right: 1px solid #e6e6e6;"><b>Revenues</b></th>
									<th style="width:25%; background-color:#e6e6e6;border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;"><b>Net Income</b></th>
									<th style="width:13%; background-color:#e6e6e6;border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;"><b>ROE</b></th>
									<th style="width:13%; background-color:#e6e6e6;border-left: 1px solid #e6e6e6;"><b>NPM</b></th>
								</tr>
								<tr style=" height :7px ;text-align: center ;vertical-align: top; font-size: 11px ;">
									<td style="width:24%; "></td>
									<td style="width:25%;border-right: 1px solid #e6e6e6;">JD 371.61 M (+21.9%)</td>
									<td style="width:25%;border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;">JD 129.5 M (+22.6%)</td>
									<td style="width:13%;border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;">10.5%</td>
									<td style="width:13%;border-left: 1px solid #e6e6e6;">34.8%</td>
								</tr>
							</table>

							<ul style="width:96%; font-size:12.5px;padding:12px;margin-top: 1px;
							 margin-bottom: 5px; margin-left:1px;position: relative;top : -10px ;">
							
								<li style="margin-left: 2px; margin-bottom: 2px; padding-left: 1px;">
										<small style=" color: black; line-height: 1">
										<b>Earnings Trend</b>: 
										THBK is profitable over the past 5 years,
										and earnings growth declined by 0.2% per year. 
										Earnings grew by 22.6% over the past year, which is above its 5-year average of -0.2%.
										</small>
									</li>	
								<li style="margin-left: 2px; margin-bottom: 2px; padding-left: 1px;">
									<small style=" color: black; line-height: 1">
									<b>Earnings vs. Industry</b>: 
									Earnings growth over the past year is 22.6%, 
									which well exceeds the Banks industry's earnings growth of 11.5%.
									</small>
								</li>
								<li style="margin-left: 2px; margin-bottom: 2px; padding-left: 1px;">
									<small style=" color: black; line-height: 1">
									<b>Return on Equity</b> 
									of 10.5% exceeds the banks industry's ROE of 8.3%.
									</small>
								</li>
								<li style="margin-left: 2px; margin-bottom: 2px; padding-left: 1px;">
									<small style=" color: black; line-height: 1">
									<b>Net Profit Margin</b>
									is 34.8%, which exceeds 34.6% achieved in the same period of the previous year, 
									indicating a good capacity to generate profit from gross revenues.
									</small>
								</li>
							</ul>
							<p style="width:95%; font-size:12.5px; color :black;">
							UFICO measures earnings momentum to get an early indication of changing earnings patterns. 
							THBK's earnings have been showing stable positive results in the past 4 
							quarters which gives us a clear picture of future earnings growth.
							</P>
						</div>
						<div style=" float:left ; width:30% ; padding :1px ; position: relative;top : -255px ;">
							<small style = "position: relative;top : -70px ;width :100%">
								<span style="float: left;  font-size: 13.5px;">
									<b>Net Income (JD Million)</b>
								</span>
								<br>
								<span style="float: left;  font-size: 9.5px;">
									positive earnings trend over past 4 quarters
								</span>
							</small>
							<div style = "position: relative;top : -116px ; left : -70px ;">
									<script src="https://unpkg.com/frappe-charts@1.1.0"></script>
									<div id="chart9" style="width: 340px; height: 80px;"></div>
									<style>
									#chart9 text {
										font-size: 8px;
									}
									#chart9 .line-vertical {
										display: none; 
									}
							
									#chart9 .line-vertical text {
										display: none; 
									}
							
									#chart9 .line-horizontal {
										display: none; 
									}
								</style>
									<script>
									let chart9 = new frappe.Chart('#chart9', {
									data: {
										labels: ['31-Dec-22', '30-Sep-22', '30-Jun-22', '31-Mar-22'],
										datasets: [{
										name: 'income',
										type: 'bar',
										values: [129.5, 124.97, 119.7, 110.67]
										}]
									},
									type: 'bar',
									height: 180,
									width: 400,
									colors: ['#f3efe6'],
									backgroundColor: 'white'
									});
								</script>
							</div>
							<small style = "position: relative;top : -15px ;width :100%">
								<span style="float: left;  font-size: 12px;">
									<b>Earnings Trend</b>
								</span>
								<span style="float:right ; color :green ; font-size: 12px;"> 
									<b> VERY POSITIVE</b>
								</span>
							</small>
							<br>
							<div style = "position: relative;top : -80px ; left :-50px ;">
								<script src="https://unpkg.com/frappe-charts@1.1.0"></script>
								<div id="chart10" style="width: 330px;"></div>
									<style>
									#chart10-container {
										overflow: hidden;
									}
										#chart10 text {
											display: none; 
											}
										#chart10 .legend-dot {
											display:none ; 
											}
										
									</style>
									<script>
											const chart10 = new frappe.Chart("#chart10", {
												title: "",
												data: {
													labels: ["negative", "neutral", "positive"],
													datasets: [
														{ values: [16, 1, 3] },
														{ values: [16, 1, 3] },
														{ values: [16, 1, 3] }  
													]
												},
												type: 'percentage', 
												height: 80, 
												width :220 ,
												barOptions: {
													height: 10,
												},
												colors: ['#bf0606', '#ffffff', '#058a1b'],
											});
									</script>
							</div>
							<br>
							<div style = "position: relative;top : -100px ;width :100%">
								<small style = "font-size:9px;">
								very negative&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								neutral&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								very postive</small>
							</div>
							<small style ="position: relative;top : -90px ;width :100%">
								<span style="float: left;  font-size: 12px;">
									<b>Earnings vs. Industry</b>
								</span>
								<span style="float:right ; color :green ; font-size: 12px;"> 
									<b> VERY POSITIVE</b>
								</span>
							</small>
							<br>
							<div style = "position: relative;top : -155px ; left :-50px ;">
								<script src="https://unpkg.com/frappe-charts@1.1.0"></script>
								<div id="chart11" style="width: 330px;"></div>
									<style>
										#chart11-container {
											overflow: hidden;
										}
										#chart11 text {
											display: none; 
											}
										#chart11 .legend-dot {
											display:none ; 
											}
									</style>
									<script>
											const chart11 = new frappe.Chart("#chart11", {
												title: "",
												data: {
													labels: ["negative", "neutral", "positive"],
													datasets: [
														{ values: [16, 1, 1.5] },
														{ values: [16, 1, 1.5] },
														{ values: [16, 1, 1.5] }  
													]
												},
												type: 'percentage', 
												height: 80, 
												width :220 ,
												barOptions: {
													height: 10,
												},
												colors: ['#bf0606', '#ffffff', '#058a1b'],
											});
									</script>
							</div>
							<br>
							<div style = "position: relative;top : -170px ;width :100%">
									<small style = "font-size:9px;">
									very negative&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									neutral&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									very postive</small>
							</div>




						<small style ="position: relative;top : -165px ;width :100%">
							<span style="float: left;  font-size: 12px;">
								<b>Porfitability</b>
							</span>
							<span style="float:right ; color :green ; font-size: 12px;"> 
								<b>POSITIVE</b>
							</span>
						</small>
						<br>
						<div style = "position: relative;top : -235px ; left :-50px ;">
							<script src="https://unpkg.com/frappe-charts@1.1.0"></script>
							<div id="chart12" style="width: 330px;"></div>
								<style>
									#chart12-container {
										overflow: hidden;
									}
									#chart12 text {
										display: none; 
										}
									#chart12 .legend-dot {
										display:none ; 
										}
								</style>
								<script>
										const chart12 = new frappe.Chart("#chart12", {
											title: "",
											data: {
												labels: ["negative", "neutral", "positive"],
												datasets: [
													{ values: [16, 1, 3] },
													{ values: [16, 1, 3] },
													{ values: [16, 1, 3] }  
												]
											},
											type: 'percentage', 
											height: 80, 
											width :220 ,
											barOptions: {
												height: 10,
											},
											colors: ['#bf0606', '#ffffff', '#058a1b'],
										});
								</script>
						</div>
						<br>
						<div style = "position: relative;top : -242px ;width :100%">
								<small style = "font-size:9px;">
								very negative&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								neutral&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								very postive</small>
						</div>
					
					</div>
					<div style = "position: relative;top : 580px ;width :100%">
						<hr color="black" >
						<hr color="black" style="border-width: 1px; margin-bottom: 0;">
					</div>
					
					<div style= content: ";display: table;clear: both;position: relative;top : -482px ; ">
						<div style=" float:left ; width:70% ; padding :1px ;position: relative;top : -482px ; ">						

							<small
								style="padding-top: 0px; display:inline;color:black; align-self: left; width: 100%; font-size:13.5px;">
								<b>Financial Stability is</b> 
								<strong style="color: green;">POSITIVE
								</strong>
							</small>

							
							<table style=" color :black;width: 95%;border-collapse: collapse;border: 1px solid white ;">
								<tr style=" height :10px ;text-align: center ;vertical-align: top; font-size: 11px ;border: 0.2px solid white ;">
									<th style="width:23%; line-height:1 ;text-align: left ;background-color: #e0d8c8;"><b>4Q22 Results</b> <br><small>(TTM)</small></th>
									<th style="width:13%; background-color:#e6e6e6;border-right: 1px solid #e6e6e6;"><b>Assets</b></th>
									<th style="width:13%; background-color:#e6e6e6;border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;"><b>Equity</b></th>
									<th style="width:15%; background-color:#e6e6e6;border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;"><b>Assets/Eq.</b></th>
									<th style="width:18%; background-color:#e6e6e6;border-left: 1px solid #e6e6e6;"><b>Loans/Deposits</b></th>
									<th style="width:17%; background-color:#e6e6e6;border-left: 1px solid #e6e6e6;"><b>Bad Loans</b></th>
								</tr>
								<tr style=" height :7px ;text-align: center ;vertical-align: top; font-size: 11px ;">
									<td style="width:23%; "></td>
									<td style="width:13%;border-right: 1px solid #e6e6e6;">JD 2.88 B</td>
									<td style="width:13%;border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;">JD 1.26 B</td>
									<td style="width:15%;border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;">6.7x</td>
									<td style="width:18%;border-left: 1px solid #e6e6e6;">69.0%</td>
									<td style="width:17%;border-left: 1px solid #e6e6e6;">4.9%</td>
								</tr>
							</table>

							<ul style="width:96%; font-size:11.5px;padding:12px;margin-top: 1px; 
							margin-bottom: 5px; margin-left:1px;position: relative;top : -10px ;">
							
								<li style="margin-left: 2px; margin-bottom: 2px; padding-left: 1px;">
									<small style=" color: black; line-height: 0.8">
									<b>Assets/Equity Ratio</b> 
									is 6.7x, indicating low reliance on debt to fund its operations.
									</small>
								</li>
								<li style="margin-left: 2px; margin-bottom: 2px; padding-left: 1px;">
									<small style=" color: black; line-height: 0.8">
									<b>Loans/Deposits Ratio</b> 
									is 69.0%, indicating high liquidity and low exposure risk to cover unexpected funding requirements.
									</small>
								</li>
								<li style="margin-left: 2px; margin-bottom: 2px; padding-left: 1px;">
									<small style=" color: black; line-height: 0.8">
									<b>Loans/Assets Ratio</b>
									is 49.8%, indicating high liquidity and low exposure risk to defaults. 
									</small>
								</li>
								<li style="margin-left: 2px; margin-bottom: 2px; padding-left: 1px;">
										<small style=" color: black; line-height: 0.8">
										<b>Level of Bad Loans</b> 
										is 4.9%, indicating a relatively low level of bad loans to total loans.
										</small>
									</li>	
							</ul>
							
						</div>


						<div style=" float:left ; width:30% ; padding :1px ; position: relative;top : -312px ;">
							<small style ="position: relative;top : -168px ;width :100%">
								<span style="float: left;  font-size: 12px;">
									<b>Assets / Equity Ratio</b>
								</span>
								<span style="float:right ; color :green ; font-size: 12px;"> 
									<b>POSITIVE</b>
								</span>
							</small>
							<br>
							<div style = "position: relative;top : -240px ; left :-50px ;">
							<script src="https://unpkg.com/frappe-charts@1.1.0"></script>
							<div id="chart13" style="width: 330px;"></div>
								<style>
									#chart13-container {
										overflow: hidden;
									}
									#chart13 text {
										display: none; 
										}
									#chart13 .legend-dot {
										display:none ; 
										}
								</style>
								<script>
										const chart13 = new frappe.Chart("#chart13", {
											title: "",
											data: {
												labels: ["negative", "neutral", "positive"],
												datasets: [
													{ values: [16, 1, 3] },
													{ values: [16, 1, 3] },
													{ values: [16, 1, 3] }  
												]
											},
											type: 'percentage', 
											height: 80, 
											width :220 ,
											barOptions: {
												height: 10,
											},
											colors: ['#bf0606', '#ffffff', '#058a1b'],
										});
								</script>
							</div>
						<br>
						<div style = "position: relative;top : -257px ;width :100%">
								<small style = "font-size:9px;">
								very negative&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								neutral&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								very postive</small>
						</div>
						

						<small style ="position: relative;top : -260px ;width :100%">
								<span style="float: left;  font-size: 12px;">
									<b>Loans / Deposits Ratio</b>
								</span>
								<span style="float:right ; color :green ; font-size: 12px;"> 
									<b>POSITIVE</b>
								</span>
							</small>
							<br>
							<div style = "position: relative;top : -330px ; left :-50px ;">
							<script src="https://unpkg.com/frappe-charts@1.1.0"></script>
							<div id="chart14" style="width: 330px;"></div>
								<style>
									#chart14-container {
										overflow: hidden;
									}
									#chart14 text {
										display: none; 
										}
									#chart14 .legend-dot {
										display:none ; 
										}
								</style>
								<script>
										const chart14 = new frappe.Chart("#chart14", {
											title: "",
											data: {
												labels: ["negative", "neutral", "positive"],
												datasets: [
													{ values: [16, 1, 3] },
													{ values: [16, 1, 3] },
													{ values: [16, 1, 3] }  
												]
											},
											type: 'percentage', 
											height: 80, 
											width :220 ,
											barOptions: {
												height: 10,
											},
											colors: ['#bf0606', '#ffffff', '#058a1b'],
										});
								</script>
							</div>
						<br>
						<div style = "position: relative;top : -340px ;width :100%">
								<small style = "font-size:9px;">
								very negative&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								neutral&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								very postive</small>
						</div>
						
						

						<small style ="position: relative;top : -340px ;width :100%">
								<span style="float: left;  font-size: 12px;">
									<b>Level of Bad Loans</b>
								</span>
								<span style="float:right ; color :green ; font-size: 12px;"> 
									<b>POSITIVE</b>
								</span>
							</small>
							<br>
							<div style = "position: relative;top : -412px ; left :-50px ;">
							<script src="https://unpkg.com/frappe-charts@1.1.0"></script>
							<div id="chart15" style="width: 330px;"></div>
								<style>
									#chart15-container {
										overflow: hidden;
									}
									#chart15 text {
										display: none; 
										}
									#chart15 .legend-dot {
										display:none ; 
										}
								</style>
								<script>
										const chart15 = new frappe.Chart("#chart15", {
											title: "",
											data: {
												labels: ["negative", "neutral", "positive"],
												datasets: [
													{ values: [16, 1, 6] },
													{ values: [16, 1, 6] },
													{ values: [16, 1, 6] }  
												]
											},
											type: 'percentage', 
											height: 80, 
											width :220 ,
											barOptions: {
												height: 10,
											},
											colors: ['#bf0606', '#ffffff', '#058a1b'],
										});
								</script>
							</div>
						<br>
						<div style = "position: relative;top : -430px ;width :100%">
								<small style = "font-size:9px;">
								very negative&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								neutral&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								very postive</small>
						</div>
						
						
						
					</div>				
						

				</div>
				<div style = "position: relative;top : 740px ;width :100%";>
					<hr color="black" >
					<hr color="black" style="border-width: 1px; margin-bottom: 0;">
				</div>
				<div style= content: ";display: table;clear: both;position: relative;top : -722px ; ">
					<div style=" float:left ; width:70% ; padding :1px ;position: relative;top : -722px ; ">
						<small style="padding-top: 0px; display:inline;color:black; align-self: left; width: 100%; font-size:13.5px;">
							<b>Price Movement is</b> 
							<strong style="color: #ecb03f;">POSITIVE</strong>
						</small> 
						<table style="width: 95%;border-collapse: collapse;border: 1px solid white ;">
							<tr style=" height :7px ;text-align: left ;vertical-align: top; font-size: 11px ;border: 0.2px solid white ;">
								<th style="width:45%;  background-color:#e6e6e6;text-align: left ;border-left: 1px solid #e6e6e6;"><b>Average 7-Day Volatility:</b> +/-1.9%</th>
								<th style="width:25%; background-color:#e6e6e6;border-right: 1px solid #e6e6e6;border-left: 1px solid #e6e6e6;"><b>14-Day RSI:</b>51.0</th>
								<th style="width:30%; text-align: right ;background-color:#e6e6e6;border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;"><b>200-Day MA:</b> 3.67</th>
							</tr>
						</table>
					</div>
					<div style="float: right; width: 30%; padding: 1px; position: relative; top: -722px;">
							<small style="padding-top: 0px; display:inline;color:black; align-self: left; width: 100%; font-size:10.5px;">
								<b>Stock Price is up -3.9% in the past year</b></small>
					</div>
				</div>
			</div>	
		</div>		
	</div>	
	<div style=" line-height: 1.25;color:black;float:left ; width:65% ; padding :1px ;position: relative;top : -720px ;left:190px; ">								
		<small style="width:50% ;">
		<span style="float: left; color: blue; font-size: 11px;">
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		Glossary Disclaimer</span>
		<span style="float:right ; color :black ; font-size: 10px;"> copyright &#169; 2023 UFI Equity Researsh | 
		<a href ="https://www.ufico.com/" style ="color :blue;">www.ufico.com</a>  Page <b> 2 </b> of <b> 3</b>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		</span>
		</small>
	</div>	
</div>


<div class="page-break"></div>
<div  style="background: white; width: 21cm;height: 29.7cm;display: block;margin: 0 auto;padding: 5px 5px;margin-bottom: 1cm;box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);box-sizing: border-box;page-break-after: always;">
	<section style=" margin-bottom: 1px; margin-top: 1px; position: relative; top: -635px;">
		<table style="width: 100%;height: 35px;border-collapse: collapse;border: 2px solid white ; margin-bottom: 1px; margin-top: 1px;">
			<tr>
				<th style="width:50%;">
					<span style="font-size: 11px; font-weight: bold; text-emphasis-color: 1px solid #000;">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Report Date: 20-FEB-23
					</span>
					<br>
					<span style="font-size: 18px; font-weight: bold; text-emphasis-color: 1px solid #000;">
					<b>&nbsp;&nbsp;&nbsp;&nbsp;Housing Bank for Trade and Finance</b></span>
					<br>
					<span style="font-size: 15px; font-weight: bold; text-emphasis-color: 1px solid #000;">
					<b>&nbsp;&nbsp;&nbsp;&nbsp;ASE: THBK</b></span>
				</th>
				<th style="width: 25%;  text-align: center;">
					<span style="font-size: 11.8px; font-weight: bold; text-emphasis-color: 1px solid #000;">price of 20-fed-23</span>
					<br>
					<span style="font-size: 17px; font-weight: bold; text-emphasis-color: 1px solid #000;"><b>JD 3.74</b></span>
				</th>
				<th>
					<span style="width: 25%;">
						<img src="https://www.ufico.com/media/wv4pgd1c/picture1.png" 
						alt="United Financial Investments Logo" style="width: 90%; height: auto;">
					</span>
				</th>
			</tr>
		</table>
	</section>

	<div style= content: ";display: table;clear: both;position: relative;top : -645px ; ">
		<div style=" float:left ; width:70% ; padding :1px ;position: relative;top : -645px ; ">
			<hr color="black">
			<ul style="width:95%; font-size:12.5px;padding:12px;margin-top: 1px; margin-bottom: 5px; margin-left:1px;position: relative;top : -23px ;">			
				<li style="margin-left: 2px; margin-bottom: 2px; padding-left: 1px;">
					<small style=" color: black; line-height: 1">
					<b>1-Q Price Volatility</b> 
					is not significantly more volatile than the rest of Jordanian stocks over the past 3 months, 
					typically moving on an average of +/- 1.9 % a week compared to the weekly market average of 4.4% over the past 3 months.
					</small>
				</li>
				<li style="margin-left: 2px; margin-bottom: 2px; padding-left: 1px;">
					<small style=" color: black; line-height: 1">
					<b>14-Day Relative Strength Index</b> 
					is 51.0, indicating a <b>NEUTRAL</b> signal at this level. Traditionally, 
					a stock is considered overbought or overvalued when the RSI is above 70 and oversold or undervalued when it is below 30.
					</small>
				</li>
				<li style="margin-left: 2px; margin-bottom: 2px; padding-left: 1px;">
					<small style=" color: black; line-height: 1">
					<b>200-Day Moving Average</b>
					is 3.67. The stock price currently trades above its 200-day moving average, indicating a <b>BUY</b> signal at this level.
					</small>
				</li>	
			</ul>
			<p style="width:95%; font-size:12.5px;padding:12px;margin-top: 1px; margin-bottom: 5px; margin-left:1px;position: relative;top : -50px ;"> 
			Price movement is an evaluation based on a company's relative share price strength in the past 1-quarter, 
			14-day and 1-year period. THBK has a <b>positive</b> price strength in the past 200-day period, indicating a favorable signal of near-term price gain. 
			Conversely, price changes in the past 14-day period can indicate a short-term <b>neutral</b> condition resulting in neutral near-term price change.
			</p>

		</div>
		<div style=" float:left ; width:30% ; padding :1px ;position: relative;top : -635px ; ">
		    <div style ="position: relative;top : -40px; left:-40px;">
				<script src="https://unpkg.com/frappe-charts@1.1.0"></script>
				<div id="chart16" style="width: 300px;"></div>
				<style>
				#chart16 .line-graph-path {
					fill:black ; 
					}
				#chart16 text {
					font-size: 8px;
				}
				#chart16 .line-vertical {
					display: none; 
				}
		
				#chart16  text {
					display: none; 
				}
		
				#chart16 .line-horizontal {
					display: none; 
				}
				</style>
				<script>
				const randomValues = Array.from({ length: 180 }, () => 2.7 + Math.random() * (4.2 - 3.2));
				const chart16 = new frappe.Chart('#chart16', {
					data: {
					labels: Array.from({ length: 180 }, () => ''),
					datasets: [
						{
							name: 'price',
							type: 'line',
							values: randomValues
						}
					]
				},
					type: 'line', 
					height: 200,
				lineOptions: {
						regionFill: 1 
					},
					colors: ['#e0d8c8']
				});
				</script>
			</div>
			
						<small style ="position: relative;top : -115px ;width :100%">
						<span style="float: left;  font-size: 12px;">
							<b>1-Q Price<br>Volatility</b>
						</span>
						<span style="float:right ; color :green ; font-size: 12px;"> 
							<b>POSITIVE</b>
						</span>
					</small>
					<br>
					<div style = "position: relative;top : -185px ; left :-50px ;">
					<script src="https://unpkg.com/frappe-charts@1.1.0"></script>
					<div id="chart17" style="width: 330px;"></div>
						<style>
							#chart17-container {
								overflow: hidden;
							}
							#chart17 text {
								display: none; 
								}
							#chart17 .legend-dot {
								display:none ; 
								}
						</style>
						<script>
								const chart17 = new frappe.Chart("#chart17", {
									title: "",
									data: {
										labels: ["negative", "neutral", "positive"],
										datasets: [
											{ values: [16, 1, 3] },
											{ values: [16, 1, 3] },
											{ values: [16, 1, 3] }  
										]
									},
									type: 'percentage', 
									height: 80, 
									width :220 ,
									barOptions: {
										height: 10,
									},
									colors: ['#bf0606', '#ffffff', '#058a1b'],
								});
						</script>
					</div>
				<br>
				<div style = "position: relative;top : -200px ;width :100%">
						<small style = "font-size:9px;">
						very negative&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						neutral&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						very postive</small>
				</div>
				<small style ="position: relative;top : -195px ;width :100%">
								<span style="float: left;  font-size: 12px;">
									<b>14-Day RSI</b>
								</span>
								<span style="float:right ; color :#ecb03f ; font-size: 12px;"> 
									<b>NEUTRAL</b>
								</span>
							</small>
							<br>
							<div style = "position: relative;top : -265px ; left :-50px ;">
							<script src="https://unpkg.com/frappe-charts@1.1.0"></script>
							<div id="chart18" style="width: 330px;"></div>
								<style>
									#chart18-container {
										overflow: hidden;
									}
									#chart18 text {
										display: none; 
										}
									#chart18 .legend-dot {
										display:none ; 
										}
								</style>
								<script>
										const chart18 = new frappe.Chart("#chart18", {
											title: "",
											data: {
												labels: ["negative", "neutral", "positive"],
												datasets: [
													{ values: [16, 1, 12] },
													{ values: [16, 1, 12] },
													{ values: [16, 1, 12] }  
												]
											},
											type: 'percentage', 
											height: 80, 
											width :220 ,
											barOptions: {
												height: 10,
											},
											colors: ['#bf0606', '#ffffff', '#058a1b'],
										});
								</script>
							</div>
						<br>
						<div style = "position: relative;top : -280px ;width :100%">
								<small style = "font-size:9px;">
								very negative&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								neutral&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								very postive</small>
						</div>
						<small style ="position: relative;top : -275px ;width :100%">
						<span style="float: left;  font-size: 12px;">
							<b>200-Day</b>
						</span>
						<span style="float:right ; color :green ; font-size: 12px;"> 
							<b>POSITIVE</b>
						</span>
					</small>
					<br>
					<div style = "position: relative;top : -345px ; left :-50px ;">
					<script src="https://unpkg.com/frappe-charts@1.1.0"></script>
					<div id="chart19" style="width: 330px;"></div>
						<style>
							#chart19-container {
								overflow: hidden;
							}
							#chart19 text {
								display: none; 
								}
							#chart19 .legend-dot {
								display:none ; 
								}
						</style>
						<script>
								const chart19 = new frappe.Chart("#chart19", {
									title: "",
									data: {
										labels: ["negative", "neutral", "positive"],
										datasets: [
											{ values: [16, 1, 5] },
											{ values: [16, 1, 5] },
											{ values: [16, 1, 5] }  
										]
									},
									type: 'percentage', 
									height: 80, 
									width :220 ,
									barOptions: {
										height: 10,
									},
									colors: ['#bf0606', '#ffffff', '#058a1b'],
								});
						</script>
					</div>
				<br>
				<div style = "position: relative;top : -360px ;width :100%">
						<small style = "font-size:9px;">
						very negative&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						neutral&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						very postive</small>
				</div>

						<br>
						<hr color="black" style="position: relative;top : -390px ;width :100%">
				</div>
				<hr color="black" style="border-width: 1px; margin-bottom: 0;position: relative;top : -300px ;width :100%">
			
			</div>
			<div style= content: ";display: table;clear: both;position: relative;top : -980px ; ">
				<div style=" color:black;float:left ; width:54% ; padding :1px ;position: relative;top : -980px ; ">
					<p style=" line-height: 1.8; width:100%; font-size:10.5px;padding:12px;margin-top: 1px; margin-bottom: 5px; margin-left:1px;position: relative;top : -20px ;">
					<b>UFICO Stock Ratings:</b> UFICO's coverage of stocks uses a quantitative model that evaluates a company's relative valuation, earnings strength, 
					financial stability, and its recent price movement. UFICO's five recommendation ratings include strong buy, buy, hold, sell, strong sell. 
					For all stocks in our coverage universe, ratings are generated each week and reflect 
					the fundamental and price data as of the last trading day of the week
					</p>
				</div>
		<div style=" float:left ; width:46% ; padding :1px ;position: relative;top : -990px ; ">
			<table style="width: 50%;border-collapse: collapse;border: 1px solid white ;">
				<tr>
					<th>
						<div id="heatmap-item" class="heatmap">
						<div class="chart-container">
							<svg class="frappe-chart chart" width="250" height="250">
								<style>
									.day {
										stroke: #dadada ;
										stroke-width: 1;
									}
					
									.day-number {
										font-family: Arial, sans-serif;
										font-size: 12px;
										text-anchor: middle;
										dominant-baseline: middle;
										fill: #dadada ;
									}
									.day {
										fill = "#ffffff";
									}
									.frappe-chart chart{
										width:100;
										 height=100;
									}

								</style>
					
								<!-- Set the background to white -->
								<rect class="day" x="0" y="0" width="100" height="100" rx="3" fill="#ffffff"></rect>
					
								<g class="heat-domain domain-5" transform="">
									<!-- Row 1 -->
									<rect class="day" x="0" y="0" width="20" height="20" rx="3" data-date="2023-04-01"
										data-value="0" data-day="1" fill="green" ></rect>
									<text class="day-number" x="10" y="10" fill="#ffffff" >1</text>

									<rect class="day" x="20" y="0" width="20" height="20" rx="3" data-date="2023-04-02"
										data-value="1" data-day="2" fill="#ffffff"></rect>
									<text class="day-number" x="30" y="10">2</text>

									<rect class="day" x="40" y="0" width="20" height="20" rx="3" data-date="2023-04-03"
										data-value="2" data-day="3" fill="#ffffff"></rect>
									<text class="day-number" x="50" y="10">3</text>

									<rect class="day" x="60" y="0" width="20" height="20" rx="3" data-date="2023-04-04"
										data-value="3" data-day="4" fill="#ffffff"></rect>
									<text class="day-number" x="70" y="10">4</text>

									<rect class="day" x="80" y="0" width="20" height="20" rx="3" data-date="2023-04-05"
										data-value="4" data-day="5" fill="#ffffff"></rect>
									<text class="day-number" x="90" y="10">5</text>

									<!-- Row 2 -->
									<rect class="day" x="0" y="20" width="20" height="20" rx="3" data-date="2023-04-01"
										data-value="0" data-day="1" fill="#ffffff"></rect>
									<text class="day-number" x="10" y="30">1</text>

									<rect class="day" x="20" y="20" width="20" height="20" rx="3" data-date="2023-04-02"
										data-value="1" data-day="2" fill="#10a010"></rect>
									<text class="day-number" x="30" y="30" fill="#ffffff">2</text>

									<rect class="day" x="40" y="20" width="20" height="20" rx="3" data-date="2023-04-03"
										data-value="2" data-day="3" fill="#ffffff"></rect>
									<text class="day-number" x="50" y="30">3</text>

									<rect class="day" x="60" y="20" width="20" height="20" rx="3" data-date="2023-04-04"
										data-value="3" data-day="4" fill="#ffffff"></rect>
									<text class="day-number" x="70" y="30">4</text>

									<rect class="day" x="80" y="20" width="20" height="20" rx="3" data-date="2023-04-05"
										data-value="4" data-day="5" fill="#ffffff"></rect>
									<text class="day-number" x="90" y="30">5</text>

									<!-- Row 3 -->
									<rect class="day" x="0" y="40" width="20" height="20" rx="3" data-date="2023-04-01"
										data-value="0" data-day="1" fill="#ffffff"></rect>
									<text class="day-number" x="10" y="50">1</text>

									<rect class="day" x="20" y="40" width="20" height="20" rx="3" data-date="2023-04-02"
										data-value="1" data-day="2" fill="#ffffff"></rect>
									<text class="day-number" x="30" y="50">2</text>

									<rect class="day" x="40" y="40" width="20" height="20" rx="3" data-date="2023-04-03"
										data-value="2" data-day="3" fill="#ecb03f"></rect>
									<text class="day-number" x="50" y="50" fill="#ffffff">3</text>

									<rect class="day" x="60" y="40" width="20" height="20" rx="3" data-date="2023-04-04"
										data-value="3" data-day="4" fill="#ffffff"></rect>
									<text class="day-number" x="70" y="50">4</text>

									<rect class="day" x="80" y="40" width="20" height="20" rx="3" data-date="2023-04-05"
										data-value="4" data-day="5" fill="#ffffff"></rect>
									<text class="day-number" x="90" y="50">5</text>

									<!-- Row 4 -->
									<rect class="day" x="0" y="60" width="20" height="20" rx="3" data-date="2023-04-01"
										data-value="0" data-day="1" fill="#ffffff"></rect>
									<text class="day-number" x="10" y="70">1</text>

									<rect class="day" x="20" y="60" width="20" height="20" rx="3" data-date="2023-04-02"
										data-value="1" data-day="2" fill="#ffffff" ></rect>
									<text class="day-number" x="30" y="70">2</text>

									<rect class="day" x="40" y="60" width="20" height="20" rx="3" data-date="2023-04-03"
										data-value="2" data-day="3" fill="#ffffff"></rect>
									<text class="day-number" x="50" y="70">3</text>

									<rect class="day" x="60" y="60" width="20" height="20" rx="3" data-date="2023-04-04"
										data-value="3" data-day="4"fill="red" ></rect>
									<text class="day-number" x="70" y="70" fill="#ffffff">4</text>

									<rect class="day" x="80" y="60" width="20" height="20" rx="3" data-date="2023-04-05"
										data-value="4" data-day="5" fill="#ffffff"></rect>
									<text class="day-number" x="90" y="70" >5</text>

									<!-- Row 5 -->
									<rect class="day" x="0" y="80" width="20" height="20" rx="3" data-date="2023-04-01"
										data-value="0" data-day="1" fill="#ffffff"></rect>
									<text class="day-number" x="10" y="90">1</text>

									<rect class="day" x="20" y="80" width="20" height="20" rx="3" data-date="2023-04-02"
										data-value="1" data-day="2" fill="#ffffff"></rect>
									<text class="day-number" x="30" y="90">2</text>

									<rect class="day" x="40" y="80" width="20" height="20" rx="3" data-date="2023-04-03"
										data-value="2" data-day="3" fill="#ffffff"></rect>
									<text class="day-number" x="50" y="90">3</text>

									<rect class="day" x="60" y="80" width="20" height="20" rx="3" data-date="2023-04-04"
										data-value="3" data-day="4" fill="#ffffff"></rect>
									<text class="day-number" x="70" y="90">4</text>

									<rect class="day" x="80" y="80" width="20" height="20" rx="3" data-date="2023-04-05"
										data-value="4" data-day="5" fill="#a70000"></rect>
									<text class="day-number" x="90" y="90" fill="#ffffff">5</text>
								</g>
								</svg>
							</div>
						</div>
					</th>
				</tr>
			</table>
					<table style="width: 210px; height:100px;border-collapse: collapse;border: 1px solid  #dadada ;
					position: relative;top : -252px ; left :103px ;">
						<tr>
							<td style = "width: 40%; height:20%; font-size:9px; border-top: 1px solid #dadada;border-bottom: 1px solid #dadada;border-right:none;">
								<b>Strong Buy</b>
							</td>
							<td style = "width: 60%; height:20%; font-size:9px; border-top: 1px solid #dadada;border-bottom: 1px solid #dadada;border-right:none;">
									Significantly Satisfactory
							<td>
						</tr>
						<tr>
							<td style = "width: 40%; height:20%; font-size:9px; border-top: 1px solid #dadada;border-bottom: 1px solid #dadada;border-right:none;">
								<b>Buy</b>
							</td>
							<td style = "width: 60%; height:20%; font-size:9px; border-top: 1px solid #dadada;border-bottom: 1px solid #dadada;border-right:none;">
								Satisfactory
							<td>
						</tr>
						<tr>
							<td style = "width: 40%; height:20%; font-size:9px; border-top: 1px solid #dadada;border-bottom: 1px solid #dadada;border-right:none;">
								<b>Hold</b>
							</td>
							<td style = "width: 60%; height:20%; font-size:9px; border-top: 1px solid #dadada;border-bottom: 1px solid #dadada;border-right:none;">
									Average
							<td>
						</tr>
						<tr>
							<td style = "width: 40%; height:20%; font-size:9px; border-top: 1px solid #dadada;border-bottom: 1px solid #dadada;border-right:none;">
								<b>Sell</b>
							</td>
							<td style = "width: 60%; height:20%; font-size:9px; border-top: 1px solid #dadada;border-bottom: 1px solid #dadada;border-right:none;">
									Unsatisfactory
							<td>
						</tr>
						<tr>
							<td style = "width: 40%; height:20%; font-size:9px; border-top: 1px solid #dadada;border-bottom: 1px solid #dadada;border-right:none;">
								<b>Strong Sell</b>
							</td>
							<td style = "width: 60%; height:20%; font-size:9px; border-top: 1px solid #dadada;border-bottom: 1px solid #dadada;border-right:none;">
									Significantly Unsatisfactory
							<td>
						</tr>
					</table>

				
			</div>
		<section style=" line-height: 1.25;color:black;float:left ; width:100% ; padding :1px ;position: relative;top : -1215px ; ">
			<p style=" width:100%; font-size:10.5px;padding:12px;margin-top: 1px; margin-bottom: 0.5px; margin-left:1px;">
				<b>Relative Valuation:</b> Relative valuation is a weighted combination of factors that measure a company's current stock price valuation vs industry. 
				These include the company's price-to-earnings vs. industry, and its price-to-book vs. industry. UFICO also measures the rank of a company's dividend yield among dividend payers in Jo market. 
				A stock may stay undervalued or overvalued for a long period of time. For this reason, it is important to combine dividend yield rank factor with shorter-term predictive factors such as 
				earnings momentum or price momentum to identify more imminent valuation adjustments. In addition, UIFCO also measure a company's dividend payments growth over the past 10 years and the 
				degree its dividend payments are covered by earnings.
				<br>
				<br>
				<b>Earnings Strength:</b> Relative valuation is a weighted combination of factors that measure a company's current stock price valuation vs industry. 
				Over 20 years of research have shown that the change in the growth of earnings per share is an important factor that drives stock price performance. 
				UFICO measures earnings momentum to get an early indication of changing earnings patterns. Earnings strength is a weighted combination of factors that measure a company's earnings growth performance. 
				These include the company's 5-year average earnings growth rate, its 1-year earnings growth rate vs its 5-year average earnings growth rate, its 1-year earnings growth rate vs. industry, 
				its relative strength of ROE, and its y-o-y profit margin growth rate.
				<br>
				<br>
				<b>Financial Stability:</b>Financial stability is a weighted combination of factors that measure a company's ability to pay its debts in the short and long terms. 
				UFICO looks for a company's capital structure where its total liabilities do not exceed 40% of its equity. For a company's solvency strength, we look for an interest coverage of at least 3x, 
				indicating a company's ability to cover its interest payments through its operating income, and a debt coverage of at least 200%, indicating a company's ability to cover its loans and interest payments 
				through its operating income. For liquidity strength, we look for a company's current ratio of at least 1.25x, indicating current liabilities are sufficiently covered by current assets. 
				Companies in the banking sector are analyzed using assets/equity ratio, loans/deposits ratio, loans/assets ratio, and level of bad loans. For assets/equity ratio, we look for a ratio below 10x, 
				indicating adequate reliance on debt to fund the bank's operations.<br>
				For loans/deposits ratio, we look for a ratio below 125%, indicating high liquidity and low exposure risk to cover unexpected funding requirements. 
				For loans/asset ratio, we look for a ratio below 110%, indicating high liquidity and low exposure risk to defaults. For the level of bad loans, we look for a ratio below 5.00%, 
				indicating lower provisions are required and, hence, increases bank profitability.
				<br>
				<br>
				<b>Recent Price Movement:</b>Historical price action of a company's stock is an especially helpful measure used to identify intermediate and short term performance potential. 
				Long term historical performance is a good predictor of future price performance, but much more importantly, large price movements over the intermediate and short term tend to reverse themselves. 
				UFICO's price momentum measure integrates historical long, intermediate and short term price changes, creating ratings that are highest for stocks with strong twelve-month price performance that 
				have had a price consolidation in the past quarter and month. Price movement is an evaluation based on a company's relative share price strength in the past 1-quarter, 14-day and 1-year period. 
				In the UFICO analysis, positive price strength in the past 200-day period is a favorable indication of near-term price gain. Conversely, positive price changes in the past quarter or 14-day period c
				an indicate a short-term overbought condition resulting in negative near-term price change.
			</p>
			<div style = "position: relative;top :-25px;width :100%";>
					<hr color="black" >
					<hr color="black" style="border-width: 1px; margin-bottom: 0;">
				</div>
			<p style=" width:100%; font-size:10.5px;padding:12px;margin-top: none; margin-bottom: none; margin-left:1px;position: relative;top : -35px ;">	
				<b>Disclaimer</b><br>
				The statements, opinions and analyses presented in this report (collectively, "Information") are for informational purposes only. Any opinions or probabilities	
			</p>		
		</section>

	</div>
	<div style=" line-height: 1.25;color:black;float:left ; width:100% ; padding :1px ;position: relative;top : -1270px ; ">								
		<small style="width:50% ;">
		<span style="float: left; color: blue; font-size: 11px;">
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		Glossary Disclaimer</span>
		<span style="float:right ; color :black ; font-size: 10px;"> copyright &#169; 2023 UFI Equity Researsh | 
		<a href ="https://www.ufico.com/" style ="color :blue;">www.ufico.com</a>  Page <b> 2 </b> of <b> 3</b>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		</span>
		</small>
	</div>


</div>

<div class="page-break"></div>
<div style="background: white; width: 21cm; height: 29.7cm; display: block; margin: 0 auto; padding: 5px 5px; margin-bottom: 1cm; box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5); box-sizing: border-box; page-break-after: always;">
    <div style="position: relative; top: -1210px;">
        <section style="margin-bottom: 1px; margin-top: 1px;">
            <table style="width: 100%; height: 35px; border-collapse: collapse; border: 2px solid white; margin-bottom: 1px; margin-top: 1px;">
                <tr>
                    <th style="width: 50%;">
                        <span style="font-size: 11px; font-weight: bold; text-emphasis-color: 1px solid #000;">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Report Date: 20-FEB-23
                        </span>
                        <br>
                        <span style="font-size: 18px; font-weight: bold; text-emphasis-color: 1px solid #000;">
                            <b>&nbsp;&nbsp;&nbsp;&nbsp;Housing Bank for Trade and Finance</b>
                        </span>
                        <br>
                        <span style="font-size: 15px; font-weight: bold; text-emphasis-color: 1px solid #000;">
                            <b>&nbsp;&nbsp;&nbsp;&nbsp;ASE: THBK</b>
                        </span>
                    </th>
                    <th style="width: 25%; text-align: center;">
                        <span style="font-size: 11.8px; font-weight: bold; text-emphasis-color: 1px solid #000;">price of 20-fed-23</span>
                        <br>
                        <span style="font-size: 17px; font-weight: bold; text-emphasis-color: 1px solid #000;"><b>JD 3.74</b></span>
                    </th>
                    <th>
                        <span style="width: 25%;">
                            <img src="https://www.ufico.com/media/wv4pgd1c/picture1.png" alt="United Financial Investments Logo" style="width: 90%; height: auto;">
                        </span>
                    </th>
                </tr>
            </table>
        </section>
    
		<div style = "width :100%";>
			<hr color="black" style="border-width: 1px; margin-bottom: 0;">
		</div>

		


		<p style=" position: relative;top :-10px;width:100%; font-size:10px;padding:12px;margin-top: 1px; margin-bottom: 0.5px; margin-left:1px;">
		expressed in this report are those of the author as of the report date and are subject to change without notice. 
		United Financial Investments ("UFICO") makes no guarantee as to the completeness or accuracy of the Information, nor can it accept any responsibility for any errors in the report. 
		Other events that were not taken into account may occur, and any opinions or probabilities should not be construed to be indicative of the actual events that may occur.
		<br>
		The Information contained herein is not an offer to sell or the solicitation of an offer to buy any securities. Nothing contained herein is intended to be investment advice, 
		nor is it to be relied upon in making any investment or other decision. Different types of investments involve varying degrees of risk, and there can be no assurance that the future 
		performance of any specific investment will be profitable or equal any historical performance level(s).
		<br>
		Neither UFICO, any of its affiliates, nor each of their respective officers, directors, members, agents, representatives, employees, or contractors (collectively, "UFICO Parties"), 
		are liable for investment decisions based upon, or the results obtained from, the Information provided. UFICO Parties or their clients may at times own positions in the companies described in these reports. 
		You assume all risks of loss resulting, directly or indirectly, from the use of the Information contained in this report. By accepting receipt of this report, you agree to hold harmless the UFICO Parties 
		from any and all claims, actions, damages, losses, liabilities, costs and expenses of any kind whatsoever, including any claims of negligence, arising out of, resulting from, by reason of, or in connection 
		with the use of the Information contained in this report.
		<br>
		This report contains certain "forward-looking statements," which may be identified by the use of such words as "believe," "expect," "anticipate," "should," "planned," "estimated," "potential" and 
		other similar terms. Examples of forward-looking statements include estimates with respect to financial condition, market developments, and the success or lack of success of particular investments 
		(and may include such words as "crash" or "collapse"). All are subject to various factors, including general and local economic conditions, changing levels of competition within certain industries and 
		markets, changes in interest rates, changes in legislation or regulation, and other economic, competitive, governmental, regulatory and technological factors that could cause actual results to differ 
		materially from projected results.
		<br>
		Comparable companies, strategies, portfolios and indices may be included in this report only as a context reflecting general market results during the depicted period or as of the specified date. 
		The comparison of any company, strategy, portfolio or index to a single other portfolio may be inappropriate because the portfolio's assets, strategies and level of risk may vary materially from the 
		comparable company, strategy, portfolio or index as a whole.
		<br>
		This report is provided to you on a confidential basis and is intended solely for the use of the person to whom it is provided. It may not be modified, 
		reproduced or redistributed in whole or in part without the prior written consent of UFICO.
		</p>
		<div style = " position: relative;top :-35px; width :100%";>
			<hr color="black" style="border-width: 1px; margin-bottom: 0;">
		</div>


		<footer style="line-height: 1.25; color: black; float: left; width: 100%; padding: 1px; position: relative; top: 600px;">
			<small style="width: 50%;">
				<span style="float: left; color: blue; font-size: 11px;">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					Glossary Disclaimer
				</span>
				<span style="float: right; color: black; font-size: 10px;">
					copyright &#169; 2023 UFI Equity Research |
					<a href="https://www.ufico.com/" style="color: blue;">www.ufico.com</a> Page <b>2</b> of <b>3</b>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</span>
			</small>
		</footer>
	</div>
</div>

		`;
		$(body).appendTo(this.page.main);
	}
}
