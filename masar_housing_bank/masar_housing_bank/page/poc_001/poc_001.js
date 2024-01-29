// frappe.pages['poc-001'].on_page_load = function(wrapper) {
// 	var page = frappe.ui.make_app_page({
// 		parent: wrapper,
// 		title: 'POC-001',
// 		single_column: true
// 	});
// }


frappe.pages['poc-001'].on_page_load = function (wrapper) {
	new MyPage(wrapper);
}
class MyPage {
	constructor(wrapper) {
		this.page = frappe.ui.make_app_page({
			parent: wrapper,
			title: 'POC-001',
			single_column: true
		});
		this.make();
	}


	make() {
		const body = `
<section  style="background: white; width: 21cm;
height: 29.7cm;
display: block;
margin: 0 auto;
padding: 5px 5px;
margin-bottom: 0.5cm;
box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
box-sizing: border-box;">
<hr color="black">
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
						<small style =" font-size: 11.5px; line-height: 1.1;">We project that THBK will perform in line with the market over the next 6 to 12 months.
						This projection is based on our analysis of four key factors that influence common stock performance: relative valuation,
						earnings strength, financial stability, and price movement.</small>
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


		<hr style="margin-top: 1px; margin-bottom: 5px;" color="black">
		<hr color="black" style=" margin-bottom: 0;">
			<h5 style=" margin-top: 0;  margin-bottom: 3px;background-color:rgb(52, 25, 25);  color:white; width: 200px;text-align: left; ">
				Recommendation Summary
			</h5>
		</hr>
		<section>
			<p style=" margin-bottom: 2px; font-size: 12px; line-height: 1.4; margin-top: 2px;">UFICO's <b>BUY</b> recommendation on Housing Bank is the result of our systematic analysis on four basic characteristics: relative valuation,
					earnings strength, financial stability, and price movement.THBK's stock is relatively underpriced priced.
					 It has generated a generally positive trend in earnings per share over the past 4 quarters.
					THBK has low exposure risk to defaults low reliance on debt to fund its operations.
					Share price changes over the past year indicates that THBK will perform in line with the market over the near term.
			</p>
			<table style="width:100%;border-collapse: collapse;border: 2px solid white ; font-size: 6px;">
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
						<b>Financial&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small style="color: green; text-align: right;"><strong>POSITIVE</strong></small>
						<br>Stability</b>
					</th>
					<th  style = "width:25%; vertical-align: top;text-align: left ; top;font-size: 12px; ">
						<b>Price Movement&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

						&nbsp;&nbsp;&nbsp;<small style="color: #ecb03f; text-align: right;"><strong>NEUTRAL</strong></small>
						</b>
					</th>
				</tr>

				<tr style="border-top:none ; height :40px ; font-size: 6px;">
					<td style = "text-align: left ; vertical-align: top; font-size: 6px;">
						<div id="chart1" style ="vertical-align: top;text-align: left ;width:100%; height: 100%; font-size: 6px;">
							<script>
								const chart1 = new frappe.Chart("#chart1", {
									title: "",
									data: {labels: ["negative", "neutral", "positive"],
										datasets: [{ values: [80, 5, 20] },
												   { values: [80, 5, 20] },
												   { values: [80, 5, 20] }]

												},
									type: 'percentage',
									height: 190,
									barOptions: {
										height: 13,
									},
									colors: ['#bf0606', '#ffffff','#058a1b'],

									axisOptions: {
										xAxisMode: 'tick',
										xIsSeries: 0,
										xAxisLabel: 'Sentiments',
										xAxisLabelFontSize: 5,
									},
								});

							</script>
						</div>
					</td>
					<td style = "text-align: left ; vertical-align: top; ">
						<div id="chart2" style ="vertical-align: top;text-align: left ;width:100%; height: 10%"></div>
							<script>
								const chart2 = new frappe.Chart("#chart2", {
									title: "",
									data: {labels: ["negative", "neutral", "positive"],
										datasets: [{ values: [80, 5, 20] },
												   { values: [80, 5, 20] },
												   { values: [80, 5, 20] }]
												},
									type: 'percentage',
									height: 190,
									barOptions: {
										height: 13,
									},
									colors: ['#bf0606', '#ffffff','#058a1b']
								})
							</script>
					</td>
					</td>
					<td style = "text-align: left ; vertical-align: top; ">
						<div id="chart3" style ="vertical-align: top;text-align: left ;width:100%; height: 10%"></div>
							<script>
								const chart3= new frappe.Chart("#chart3", {
									title: "",
									data: {labels: ["negative", "neutral", "positive"],
										datasets: [{ values: [80, 5, 20] },
												   { values: [80, 5, 20] },
												   { values: [80, 5, 20] }]
												},
									type: 'percentage',
									height: 190,
									barOptions: {
										height: 13,
									},
									colors: ['#bf0606', '#ffffff','#058a1b']
								})
							</script>
					</td>
					<td>
					<div id="chart4" style ="vertical-align: top;text-align: left ;width:100%; height: 10%"></div>
					<script>

						const chart4 = new frappe.Chart("#chart4", {
							data:  {
								labels: ["negative", "neutral", "positive"],
								datasets: [
								{ values: [50, 3, 50] },
								{ values: [50, 3, 50] },
								{ values: [50, 3, 50] }
								]
							},
							type: 'percentage',
							height: 200,
								barOptions: {
									height: 15,
								},
							colors: ['#FF0000', '#8B99AA','#4CC417']
						})
					</script>
			  </td>
			</tr>

			<tr style="border-top:none ; height :40px ; ">
					<td  style = "text-align: left ; vertical-align: top; ">
						<p style="font-size: 11px; line-height: 1.2;">
						The stock is <b>underpriced</b> based on its current P/E, but <b>fairly</b> priced based on its P/B ratio. Dividend <b>exceeds</b>s the top 25% of dividend payers in the market.</p>
					</td>
					<td  style = "text-align: left ; vertical-align: top; ">
						<p style="font-size: 11px; line-height: 1.2;">
						The stock is <b>underpriced</b> based on its current P/E, but <b>fairly</b> priced based on its P/B ratio. Dividend <b>exceeds</b>s the top 25% of dividend payers in the market.</p>
					</td>
					<td  style = "text-align: left ; vertical-align: top; ">
						<p style="font-size: 11px; line-height: 1.2;">
						THBK has <b>low</b> exposure risk to defaults, <b>low</b> exposure risk to cover unexpected funding requirements, and relatively <b>low</b> level of bad loans.
						</p>
					</td>
					<td  style = "text-align: left ; vertical-align: top; ">
						<p style="font-size: 11px; line-height: 1.2;">
						Not significantly volatile over the past 3 months. The stock is rated a <b>NEUTRAL</b> at its current 14-Day RSI, and a <b>BUY</b> at MA200.
						</p>
					</td>
			</tr>
			</table>
		</section>
		<hr style="margin-top: 1px; margin-bottom: 5px;" color="red">
		<hr color="black" style=" margin-bottom: 0;">
			<h5 style=" margin-top: 0;  margin-bottom: 3px;background-color: #f3efe6;  color:white; width: 200px;text-align: left; ">
			Major Risk & Rewards
			</h5>
		</hr>
		<section>
			<h4
				style="padding-top: 0px; display:inline; background-color:#C0C0C0 ;  color:black; align-self: left; width: 250px;">
				Major Risk & Rewards</h4>
			<ul class="ul1">
				<li><i style="color: green;">Sound Quality of Earnings:</i><p style="display: inline-block;">Profitablitiy reminds among the local...</p>
				</li>
				<li><i style="color: green;">QNB'S Added Value:</i>
					<p style="display: inline-block;">Qatar National Banks(QNB) is...</p>
				</li>
				<li><i style="color: green;">Larget Branch Network and Client Base:</i>
					<p style="display: inline-block;">THBK has both the largest branch...</p>
				</li>
				<li><i style="color: green;">Liquid Balance Sheet:</i>
					<p style="display: inline-block;">The deep customer deposit base coupled with a...</p>
				</li>
			</ul>
			<br>
		</section>
		<hr color="black" style="padding-bottom: 50xp;">
		<hr color="black" style="padding-bottom: 0px;">
		<section>
		</section>
			<h4
				style="padding-top: 0px; display:inline; background-color:#C0C0C0 ;  color:black; align-self: left; width: 250px;">
				Peer Group Comparison</h4>
			<br>
			<table class="table3">
				<tr>
					<th></th>
					<th></th>
					<th><b>Price</b></th>
					<th><b>Mkt Cap</b></th>
					<th><b>EPS</b></th>
					<th><b>P/E</b></th>
					<th><b>P/B</b></th>
					<th><b>Yield</b></th>
					<th><b>Payout</b></th>
					<th><b>NPM</b></th>
					<th><b>Debt/Equity</b></th>
				</tr>
				<tr>
					<td></td>
					<td></td>
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
				<tr>
					<td><b>THBK</b></td>
					<td><b>Housing Bank for Trade and Finance</b></td>
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
				<tr>
					<td>BOJX</td>
					<td>Bank of Jordan</td>
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
				<tr>
					<td>CAPL</td>
					<td>Capital Bank of Jordan</td>
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
			<br>
		</section>
		<hr color="black" style="padding-bottom: 50xp;">
		<hr color="black" style="padding-bottom: 0px;">
		<h4
			style="padding-top: 0px; display:inline; background-color:#C0C0C0 ;  color:black; align-self: left; width: 250px;">
			Past Performance</h4>
		<table class="table3">
			<tr>
				<th></th>
				<th><b>2018</b></th>
				<th><b>2019</b></th>
				<th><b>2020</b></th>
				<th><b>2021</b></th>
				<th><b>2022</b></th>
				<th><b>TTM</b></th>
			</tr>
			<tr>
				<td>Net Profit Margin</td>
				<td>31.6%</td>
				<td>26.4%</td>
				<td>15.1%</td>
				<td>34.6%</td>
				<td>34.8%</td>
				<td>34.8%</td>
			</tr>
			<tr>
				<td>Dividend/share</td>
				<td>JD 0.15</td>
				<td>JD 0.00</td>
				<td>JD 0.12</td>
				<td>JD 0.20</td>
				<td>JD 0.25</td>
				<td>JD 0.25</td>
			</tr>
			<tr>
				<td>Earning/share</td>
				<td>JD 0.287</td>
				<td>JD 0.257</td>
				<td>JD 0.116</td>
				<td>JD 0.335</td>
				<td>0.411</td>
				<td>JD 0.411</td>
			</tr>
			<tr>
				<td>LT Debt to Equity</td>
				<td>11.7%</td>
				<td>14.1%</td>
				<td>27.3%</td>
				<td>29.8%</td>
				<td>31.8%</td>
				<td>31.8%</td>
			</tr>
		</table>
		<hr color="black" style="padding-bottom: 50xp;">
		<hr color="black" style="background-color: white; padding-bottom: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="border-left: 0; border-top: 0; border-right: 0; border-bottom: 0;">
					<h4
						style="padding-top: 0px; display:inline; background-color:white;  color:black; align-self: left; width: 250px;">
						Relative Valuation is <strong style="color: green;">POSITIVE</strong></h4>
					<br>
					<table class="table3">
						<tr>
							<th><b>Last Price</b></th>
							<th><b>Market Cap</b></th>
							<th><b>EPS</b></th>
							<th><b>P/E</b></th>
							<th><b>Book</b></th>
							<th><b>P/B</b></th>
							<th><b>DPS</b></th>
							<th><b>Div. Yield</b></th>
						</tr>
						<tr>
							<td>(20-Feb-23)</td>
							<td>(20-Feb-23)</td>
							<td>(TTM)</td>
							<td>(TTM)</td>
							<td>(MRQ)</td>
							<td>(TTM)</td>
							<td>(MRY)</td>
							<td>(20-Feb-23)</td>
						</tr>
						<tr>
							<td>JD 3.74</td>
							<td>JD 1.2 B</td>
							<td>JD0.41</td>
							<td>9.1x</td>
							<td>JD 3.81</td>
							<td>1.0x</td>
							<td>JD 0.25</td>
							<td>6.7%</td>
						</tr>
					</table>
					<br>
					<ul>
						<li><i>Price/Earnings vs. Industry:</i>
							<p style="display: inline-block;">THBK is underpriced based on its...</p>
						</li>
						<li><i>Price/Book vs. Industry:</i>
							<p style="display: inline-block;">THBK is silightly overpriced...</p>
						</li>
						<li><i>Dividend Yield </i>
							<p style="display: inline-block;">of 6.7% is high and ...</p>
						</li>
						<li><i>Dividend Payout Ratio </i>
							<p style="display: inline-block;">is 60.8%, indicating payments are well covered by earnings.</p>
						</li>
					</ul>
				</td>
				<td>
				<div id="chart5"></div>
				  <script>
					const data5 = {
					  labels: ["negative", "neutral", "positive"],
					  datasets: [
						  { values: [80, 5, 20] },
						  { values: [80, 5, 20] },
						  { values: [80, 5, 20] }
					  ]
					}

					const chart5 = new frappe.Chart("#chart5", {
					  title: "Price / Earnings              POSITIVE",
					  data: data5,
					  type: 'percentage',
					  width: 200,
					  height: 220,
					barOptions: {
						height: 15,          // default: 20
					},
					  colors: ['#ffe599', '#008000','#999999']
					})
					</script>
				<div id="chart6"></div>
				  <script>
					const data6 = {
					  labels: ["negative", "neutral", "positive"],
					  datasets: [
						  { values: [80, 3, 7] },
						  { values: [80, 3, 7] },
						  { values: [80, 3, 7] }
					  ]
					}

					const chart6 = new frappe.Chart("#chart6", {
					  title: "Price / Book             NEGATIVE",
					  data: data6,
					  type: 'percentage',
					  height: 220,
					barOptions: {
						height: 15,          // default: 20
					},
					  colors: ['#ffe599', '#008000','#999999']
					})
					</script>
					<br>
					<div id="chart7"></div>
				  <script>
					const data7 = {
					  labels: ["negative", "neutral", "positive"],
					  datasets: [
						  { values: [90, 3, 5] },
						  { values: [90, 3, 5] },
						  { values: [90, 3, 5] }
					  ]
					}

					const chart7 = new frappe.Chart("#chart7", {
					  title: "Dividend Growth",
					  data: data7,
					  type: 'percentage',
					  height: 220,
					barOptions: {
						height: 15,          // default: 20
					},
					  colors: ['#ffe599', '#008000','#999999']
					})
					</script> <br>
					<div id="chart8"></div>
				  <script>
					const data8 = {
					  labels: ["negative", "neutral", "positive"],
					  datasets: [
						  { values: [80, 3, 20] },
						  { values: [80, 3, 20] },
						  { values: [80, 3, 20] }
					  ]
					}

					const chart8 = new frappe.Chart("#chart8", {
					  title: "Dividend Yield",
					  data: data8,
					  type: 'percentage',
					  height: 220,
					barOptions: {
						height: 15,          // default: 20
					},
					  colors: ['#ffe599', '#008000','#999999']
					})
					</script>
				</td>
				</tr>
			  </table>
		<hr color="black" style="padding-bottom: 50xp;">
		<hr color="black" style="background-color: white; padding-bottom: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="border-left: 0; border-top: 0; border-right: 0; border-bottom: 0;">
					<h4
						style="padding-top: 0px; display:inline; background-color:white;  color:black; align-self: left; width: 250px;">
						Relative Strength is <strong style="color: green;">POSITIVE</strong></h4>
					<br>
					<ul>
						<li><i>Earning Trend </i>
							<p style="display: inline-block;">THBK is profitible over...</p>
						</li>
						<li><i>Earnings vs. Industry:</i>
							<p style="display: inline-block;">TEarning growth...</p>
						</li>
						<li><i>Return on Equity </i>
							<p style="display: inline-block;">of 10.5% exceeds the bank ...</p>
						</li>
						<li><i>Net Profit Margin </i>
							<p style="display: inline-block;">is 34.8%, which exceeds 34.6%...</p>
						</li>
					</ul>
					<br>
					<p>UFICO measures earnings...</p>
				</td>
				<td>
    <div id="chart"></div>
    <script>
        // const data = {
        //     labels: ['31-Dec-22','30-Sep-22','30-Jun-22','31-Mar-22'],
        //     datasets: [
        //         {
        //             name: 'income',
        //             type: 'bar',
        //             values: [129.5, 124.97, 119.7, 110.67]
        //         }
        //     ]
        // }

        // const chart = new frappe.Chart('#chart', {
        //     title: 'Net Income(JD Million) Positive earnings trend over the past 4 quarters',
        //     data: data,
        //     type: 'bar',
        //     colors: ['#ffe599']
        // });
    </script>
				<div id="chart9"></div>
				  <script>
					const data9 = {
					  labels: ["negative", "neutral", "positive"],
					  datasets: [
						  { values: [80, 3, 7] },
						  { values: [80, 3, 7] },
						  { values: [80, 3, 7] }
					  ]
					}

					const chart9 = new frappe.Chart("#chart9", {
					  title: "Earnings Trend",
					  data: data9,
					  type: 'percentage',
					  height: 220,
					barOptions: {
						height: 15,          // default: 20
					},
					  colors: ['#ffe599', '#008000','#999999']
					})
					</script>
					<br>
					<div id="chart10"></div>
				  <script>
					const data10 = {
					  labels: ["negative", "neutral", "positive"],
					  datasets: [
						  { values: [90, 3, 5] },
						  { values: [90, 3, 5] },
						  { values: [90, 3, 5] }
					  ]
					}

					const chart10 = new frappe.Chart("#chart10", {
					  title: "Earnings vs. Industry",
					  data: data10,
					  type: 'percentage',
					  height: 220,
					barOptions: {
						height: 15,          // default: 20
					},
					  colors: ['#ffe599', '#008000','#999999']
					})
					</script> <br>
					<div id="chart11"></div>
				  <script>
					const data11 = {
					  labels: ["negative", "neutral", "positive"],
					  datasets: [
						  { values: [80, 3, 20] },
						  { values: [80, 3, 20] },
						  { values: [80, 3, 20] }
					  ]
					}

					const chart11 = new frappe.Chart("#chart11", {
					  title: "Profitability",
					  data: data11,
					  type: 'percentage',
					  height: 220,
					barOptions: {
						height: 15,          // default: 20
					},
					  colors: ['#ffe599', '#008000','#999999']
					})
					</script>
				</td>
			</tr>
		</table>
		<hr color="black" style="padding-bottom: 50xp;">
		<hr color="black" style="background-color: white; padding-bottom: 0px;">
		<table style="width: 100%;">
			<tr>
				<td style="border-left: 0; border-top: 0; border-right: 0; border-bottom: 0;">
					<h4
						style="padding-top: 0px; display:inline; background-color:white;  color:black; align-self: left; width: 250px;">
						Financial Stability is <strong style="color: green;">POSITIVE</strong></h4>
					<br>
					<table class="table3">
						<tr>
							<th><b>4Q22 Results</b><br><small>(TTM)</small></th>
							<th><b>Assets</b></th>
							<th><b>Equity</b></th>
							<th><b>Assets/Eq.</b></th>
							<th><b>Loans/Deposists</b></th>
							<th><b>Bad Loans</b></th>
						</tr>
						<tr>
							<td></td>
							<td>JD 2.88 B</td>
							<td>JD 1.26 B</td>
							<td>6.7x</td>
							<td>69.0%</td>
							<td>4.9%</td>
						</tr>
					</table>
					<br>
					<ul>
						<li><i>Assets/Equity Ratio </i>
							<p style="display: inline-block;">is 6.7x, indicating low...</p>
						</li>
						<li><i>Loans/Deposits Ratio </i>
							<p style="display: inline-block;">is 69.0%, indicating high...</p>
						</li>
						<li><i>Loans/Assets Ratio </i>
							<p style="display: inline-block;">is 49.8%, indicating hight ...</p>
						</li>
						<li><i>Level of Bad Loans </i>
							<p style="display: inline-block;">is 4.9%, indicating a relatively low...</p>
						</li>
					</ul>
				</td>
				<td >
				<div id="chart12"></div>
				  <script>
					const data12 = {
					  labels: ["negative", "neutral", "positive"],
					  datasets: [
						  { values: [85, 3, 20] },
						  { values: [85, 3, 20] },
						  { values: [85, 3, 20] }
					  ]
					}

					const chart12 = new frappe.Chart("#chart12", {
					  title: "Assets / Equity Ratio",
					  data: data12,
					  type: 'percentage',
					  height: 220,
					barOptions: {
						height: 15,          // default: 20
					},
					  colors: ['#ffe599', '#008000','#999999']
					})
					</script>
					<br>

					<div id="chart14"></div>
				  <script>
					const data14 = {
					  labels: ["negative", "neutral", "positive"],
					  datasets: [
						  { values: [80, 3, 25] },
						  { values: [80, 3, 25] },
						  { values: [80, 3, 25] }
					  ]
					}

					const chart14 = new frappe.Chart("#chart14", {
					  title: "Loans / Deposits Ratio",
					  data: data14,
					  type: 'percentage',
					  height: 220,
					barOptions: {
						height: 15,          // default: 20
					},
					  colors: ['#ffe599', '#008000','#999999']
					})
					</script>
					<br>

					<div id="chart15"></div>
				  <script>
					const data15 = {
					  labels: ["negative", "neutral", "positive"],
					  datasets: [
						  { values: [70, 3, 30] },
						  { values: [70, 3, 30] },
						  { values: [70, 3, 30] }
					  ]
					}

					const chart15 = new frappe.Chart("#chart15", {
					  title: "Level of Bad Loans",
					  data: data15,
					  type: 'percentage',
					  height: 220,
					barOptions: {
						height: 15,          // default: 20
					},
					  colors: ['#ffe599', '#008000','#999999']
					})
					</script>
				</td>
			</tr>
		</table>
		<hr color="black" style="padding-bottom: 50xp;">
		<hr color="black" style="background-color: white; padding-bottom: 0px;">
<table style="width: 100%;">
  <tr>
    <td style="border-left: 0; border-top: 0; border-right: 0; border-bottom: 0;">
      <h4 style="padding-top: 0px; display:inline; background-color:white; color:black; align-self: left; width: 250px;">
        Price Movement is <strong style="color: orange;">NEUTRAL</strong></h4>
      <br>
      <table class="table3">
        <tr>
          <th><b>4Average 7-Day Volatility: +/-1.9%</b></th>
          <th><b>14-Day RSI: 51.0</b></th>
          <th><b>200-Day MA: 3.67</b></th>
        </tr>
      </table>
      <br>
      <ul>
        <li><i>1-Q Price Volatility </i>
          <p style="display: inline-block;">is not significantly more ...</p>
        </li>
        <li><i>14-Day Relative Strength Index </i>
          <p style="display: inline-block;">is 51.0, indicating a <b>NEUTRAL</b>...</p>
        </li>
        <li><i>200-Day Moving Average </i>
          <p style="display: inline-block;">is 3.67. The stock price...</p>
        </li>
        <li><i>Level of Bad Loans </i>
          <p style="display: inline-block;">is 4.9%, indicating a relatively low...</p>
        </li>
      </ul>
      <br>
      <p>Price movement is an evaluation based on a company's relative share...</p>
    </td>
    <td>
    <div id="chart"></div>
<script>
    // const data = {
    //     labels: ['lbl1', 'lbl2', 'lbl3', 'lbl4','lbl5','lbl6','lbl7','lbl8','lbl9','lbl10'],
    //     datasets: [
    //         {
    //             name: 'price',
    //             type: 'line',
    //             values: [4.1, 4, 3.9, 3.8, 3.7, 3.6, 3.5, 3.4, 3.3, 3.2]
    //         }
    //     ]
    // };
    // const chart = new frappe.Chart('#chart', {
    //     title: 'Stock Price',
    //     data: data,
    //     type: 'line',
    //     colors: ['#ffe599'],
    //     height: 220,
    //     isNavigable: 1,
    //     axisOptions: {
    //         xAxisMode: 'span',
	// 		yAxisMode: 'span',
    //         xIsSeries: 1,
    //     },
    //     lineOptions: {
    //         dotSize: 4,
    //         heatline: 1,
    //         areaFill: 1,
    //     },
    // });
</script>

      <div id="chart16"></div>
      <script>
        const data16 = {
          labels: ["negative", "neutral", "positive"],
          datasets: [
            { values: [80, 5, 20] },
            { values: [80, 5, 20] },
            { values: [80, 5, 20] }
          ]
        }

        const chart16 = new frappe.Chart("#chart16", {
          title: "1- Q Volatility            POSITIVE",
          data: data16,
          type: 'percentage',
          height: 220,
          barOptions: {
            height: 15,  // default: 20
          },
          colors: ['#ffe599', '#008000', '#999999']
        })
      </script>
      <br>

      <div id="chart17"></div>
      <script>
        const data17 = {
          labels: ["negative", "neutral", "positive"],
          datasets: [
            { values: [50, 3, 50] },
            { values: [50, 3, 50] },
            { values: [50, 3, 50] }
          ]
        }

        const chart17 = new frappe.Chart("#chart17", {
          title: "14-Day RSI",
          data: data17,
          type: 'percentage',
          height: 220,
          barOptions: {
            height: 15,  // default: 20
          },
          colors: ['#ffe599', '#008000', '#999999']
        })
      </script>
      <br>

      <div id="chart18"></div>
      <script>
        const data18 = {
          labels: ["negative", "neutral", "positive"],
          datasets: [
            { values: [85, 3, 10] },
            { values: [85, 3, 10] },
            { values: [85, 3, 10] }
          ]
        }

        const chart18 = new frappe.Chart("#chart18", {
          title: "200-Day MA",
          data: data18,
          type: 'percentage',
          height: 220,
          barOptions: {
            height: 15,  // default: 20
          },
          colors: ['#ffe599', '#008000', '#999999']
        })
      </script>
    </td>
  </tr>
</table>

		<hr color="black" style="padding-bottom: 50xp;">
		<table style="width: 100%;">
			<tr>
				<td style="border-left: 0; border-top: 0; border-right: 0; border-bottom: 0;">
					<b>UFICO Stock Ratings: </b>
					<p>UFICO's coverage of stocks...</p>
				</td>
				<td>

</td>
			</tr>
			<tr>
			<td>
			<table>
			<tr>
			<th>Strong Buy</th>
			<td>Significantly Satisfactory</td>
			</tr>
			<tr>
			<th>Buy</th>
			<td>Satisfactory</td>
			</tr>
			<tr>
			<th>Hold</th>
			<td>Average</td>
			</tr>
			<tr>
			<th>Sell</th>
			<td>Unsatisfactory</td>
			</tr>
			<tr>
			<th>Strong Sell</th>
			<td>Significantly Unsatisfactory</td>
			</tr>
			</table>
			</td>
			</tr>
		</table>
		<div id="heatmap"></div>
		<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
		<script>
		let data = {
			dataPoints: {
				1426744959: 20,
				1463673055: 113,
				1476892421: 57,
				// ...
			},
		};

			let chart = new Chart("#heatmap", {
				type: "heatmap",
				data: data,
				discreteDomains: 0, // default 1
                colors: ['#ebedf0', '#c0ddf9', '#73b3f3', '#3886e1', '#17459e'],
			});
		</script>
		<b>Relative Valuation: </b>
		<p style="display: inline-block;">Relative valuation is a weighted...</p>
		<b>Earnings Strength: </b>
		<p style="display: inline-block;">Over 20 years of research...</p>
		<b>Financial Stability: </b>
		<p style="display: inline-block;">Financial stability is a weighted...</p>
		<b>Recent Price Movement: </b>
		<p style="display: inline-block;">Historical price action of a company's...</p>
		<br>
		<div id="chart20"></div>
				<script>
                // let data29 = {
				// 	dataPoints: {
				// 		1426744959: 20,
                //         1463673055: 113,
                //         1476892421: 57,
				// 	},
				// 	start: startDate, // a JS date object
                //     end: endDate,
				// }
				// discreteDomains: 0,
                // colors: ['#ebedf0', '#c0ddf9', '#73b3f3', '#3886e1', '#17459e'],

				// let chart20 = new Chart("#heatmap", {
				// 	type: "heatmap",
				// 	data02: data20,
				// });
				</script>
		<hr color="black" style="padding-bottom: 50xp;">
		<hr color="black" style="background-color: white; padding-bottom: 0px;">
		<h4 style="padding-top: 0px; display:inline; background-color:white;  color:black; align-self: left; width: 250px;">
			Disclaimer</strong></h4>
		<br>
		<p>The statments, ...</p>
		<br>
		<p>The report contains...</p>
		<br>
		<p>Comperable companies, stratiges, protfolios and...</p><br>
		<hr color="black" style="padding-bottom: 50xp;">


////////////////////////////////////////////////////////////////

<td>
    <div id="heatmap-item" class="heatmap">
        <div class="chart-container">
            <svg class="frappe-chart chart" width="250" height="250">
                <style>
                    .day {
                        stroke: #000000; 
                        stroke-width: 1; 
                    }

                    .day-number {
                        font-family: Arial, sans-serif;
                        font-size: 12px;
                        text-anchor: middle;
                        dominant-baseline: middle;
                    }
                </style>

                <g class="heat-domain domain-5" transform="">
                    <!-- Row 1 -->
                    <rect class="day" x="0" y="0" width="50" height="50" rx="3" data-date="2023-04-01"
                        data-value="0" data-day="1" fill="#f7fbff"></rect>
                    <text class="day-number" x="25" y="25">1</text>

                    <rect class="day" x="50" y="0" width="50" height="50" rx="3" data-date="2023-04-02"
                        data-value="1" data-day="2" fill="#c6dbef"></rect>
                    <text class="day-number" x="75" y="25">2</text>

                    <rect class="day" x="100" y="0" width="50" height="50" rx="3" data-date="2023-04-03"
                        data-value="2" data-day="3" fill="#6baed6"></rect>
                    <text class="day-number" x="125" y="25">3</text>

                    <rect class="day" x="150" y="0" width="50" height="50" rx="3" data-date="2023-04-04"
                        data-value="3" data-day="4" fill="#3182bd"></rect>
                    <text class="day-number" x="175" y="25">4</text>

                    <rect class="day" x="200" y="0" width="50" height="50" rx="3" data-date="2023-04-05"
                        data-value="4" data-day="5" fill="#08306b"></rect>
                    <text class="day-number" x="225" y="25">5</text>

                    <!-- Row 2 -->
                    <rect class="day" x="0" y="50" width="50" height="50" rx="3" data-date="2023-04-01"
                        data-value="0" data-day="1" fill="#ffcccb"></rect>
                    <text class="day-number" x="25" y="75">1</text>

                    <rect class="day" x="50" y="50" width="50" height="50" rx="3" data-date="2023-04-02"
                        data-value="1" data-day="2" fill="#990000"></rect>
                    <text class="day-number" x="75" y="75">2</text>

                    <rect class="day" x="100" y="50" width="50" height="50" rx="3" data-date="2023-04-03"
                        data-value="2" data-day="3" fill="#fee0d2"></rect>
                    <text class="day-number" x="125" y="75">3</text>

                    <rect class="day" x="150" y="50" width="50" height="50" rx="3" data-date="2023-04-04"
                        data-value="3" data-day="4" fill="#fcc5c0"></rect>
                    <text class="day-number" x="175" y="75">4</text>

                    <rect class="day" x="200" y="50" width="50" height="50" rx="3" data-date="2023-04-05"
                        data-value="4" data-day="5" fill="#fa9fb5"></rect>
                    <text class="day-number" x="225" y="75">5</text>

                    <!-- Row 3 -->
                    <rect class="day" x="0" y="100" width="50" height="50" rx="3" data-date="2023-04-01"
                        data-value="0" data-day="1" fill="#a1d99b"></rect>
                    <text class="day-number" x="25" y="125">1</text>

                    <rect class="day" x="50" y="100" width="50" height="50" rx="3" data-date="2023-04-02"
                        data-value="1" data-day="2" fill="#74c476"></rect>
                    <text class="day-number" x="75" y="125">2</text>

                    <rect class="day" x="100" y="100" width="50" height="50" rx="3" data-date="2023-04-03"
                        data-value="2" data-day="3" fill="#41ab5d"></rect>
                    <text class="day-number" x="125" y="125">3</text>

                    <rect class="day" x="150" y="100" width="50" height="50" rx="3" data-date="2023-04-04"
                        data-value="3" data-day="4" fill="#238b45"></rect>
                    <text class="day-number" x="175" y="125">4</text>

                    <rect class="day" x="200" y="100" width="50" height="50" rx="3" data-date="2023-04-05"
                        data-value="4" data-day="5" fill="#005a32"></rect>
                    <text class="day-number" x="225" y="125">5</text>

                    <!-- Row 4 -->
                    <rect class="day" x="0" y="150" width="50" height="50" rx="3" data-date="2023-04-01"
                        data-value="0" data-day="1" fill="#fee08b"></rect>
                    <text class="day-number" x="25" y="175">1</text>

                    <rect class="day" x="50" y="150" width="50" height="50" rx="3" data-date="2023-04-02"
                        data-value="1" data-day="2" fill="#d73027"></rect>
                    <text class="day-number" x="75" y="175">2</text>

                    <rect class="day" x="100" y="150" width="50" height="50" rx="3" data-date="2023-04-03"
                        data-value="2" data-day="3" fill="#4575b4"></rect>
                    <text class="day-number" x="125" y="175">3</text>

                    <rect class="day" x="150" y="150" width="50" height="50" rx="3" data-date="2023-04-04"
                        data-value="3" data-day="4" fill="#91bfdb"></rect>
                    <text class="day-number" x="175" y="175">4</text>

                    <rect class="day" x="200" y="150" width="50" height="50" rx="3" data-date="2023-04-05"
                        data-value="4" data-day="5" fill="#313695"></rect>
                    <text class="day-number" x="225" y="175">5</text>

                    <!-- Row 5 -->
                    <rect class="day" x="0" y="200" width="50" height="50" rx="3" data-date="2023-04-01"
                        data-value="0" data-day="1" fill="#ffffff"></rect>
                    <text class="day-number" x="25" y="225">1</text>

                    <rect class="day" x="50" y="200" width="50" height="50" rx="3" data-date="2023-04-02"
                        data-value="1" data-day="2" fill="#ffffff"></rect>
                    <text class="day-number" x="75" y="225">2</text>

                    <rect class="day" x="100" y="200" width="50" height="50" rx="3" data-date="2023-04-03"
                        data-value="2" data-day="3" fill="#ffffff"></rect>
                    <text class="day-number" x="125" y="225">3</text>

                    <rect class="day" x="150" y="200" width="50" height="50" rx="3" data-date="2023-04-04"
                        data-value="3" data-day="4" fill="#ffffff"></rect>
                    <text class="day-number" x="175" y="225">4</text>

                    <rect class="day" x="200" y="200" width="50" height="50" rx="3" data-date="2023-04-05"
                        data-value="4" data-day="5" fill="#ffffff"></rect>
                    <text class="day-number" x="225" y="225">5</text>
                </g>
            </svg>
        </div>
    </div>
</td>




		`;
		$(body).appendTo(this.page.main);
	}
}
