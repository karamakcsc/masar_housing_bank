frappe.pages['housing-bank'].on_page_load = function (wrapper) {
	new MyPage(wrapper);
}
class MyPage {
	constructor(wrapper) {
		this.page = frappe.ui.make_app_page({
			parent: wrapper,
			title: '',
			single_column: true
		});
		this.make();
	}
	make() {
		const style = `
  body {
    background: #ac9e9e;
  }
  
  page {
    background: white;
    display: block;
    box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
  }
  
  page[size="A4"] {
    width: 21cm;
    height: 29.7cm;
  }
  
  page[size="A4"][layout="landscape"] {
    width: 29.7cm;
    height: 21cm;
  }
  
  @media print {
    body, page {
      margin: 0;
      box-shadow: 0;
    }
  }
`;
 const body = `
 <div style="width:1280px; background: white; display: block; margin: 0 auto; margin-bottom: 0.5cm; box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);">
 <table style="width: 100%;">
 <tr>
	 <td style="border-left: 0; border-top: 0; border-right: 0; border-bottom: 0;">
		 <b>Report Date: 20-FEB-23</b><br>
			 <b style="font-size: 40px;">Housing Bank for Trade and Finance</b><br>
			 <b>ASE:THBK</b>
	 </td>
	 <td style="border-left: 0; border-top: 0; border-right: 0; border-bottom: 0;">
		 <h5>Price as of 20-Feb-23</h5><br>
		 <h1>JD 3.74</h1>
	 </td>
	 <td style="width=150px"><img src="https://www.ufico.com/media/wv4pgd1c/picture1.png" ></td>
 </tr>
</table>
<div style="display:inline-block">
<table style="width: 100%;">
	<tr>
		<td style="border-color: brown; border-top: 0; border-bottom: 0;"><b>End of Day Share
				Price: </b> <small>02/20/2023</small></td>
		<td style=" border-top: 0; border-right: 0; border-bottom: 0;"><b>Earnings:</b>
			<small>12/31/2022</small></td>
		<td style="border-top: 0; border-right: 0; border-bottom: 0;"><b>Annual
				Earnings:</b><br> <small>12/31/2022</small></td>
	</tr>
</table>
</div>		
 <hr color="black">
		<section style="background-color: #C0C0C0 ;">
			<table style="width: 100%;">
				<tr>
					<td style="border-right: 0; border-top: 0; border-right: 0; border-bottom: 0;">
						<h1>RATING: BUY</h1><br>
						<table style="border-color: black; border: 1px solid;" >
							<tr>
								<td>
									<b style="style="font-size: 100;" padding-bottom: 0px;">1</b>
								</td>
								<td style="background-color: green;">
								<b style="style="font-size: 100;" padding-bottom: 0px;">2</b>
								</td>
								<td>
								<b style="style="font-size: 100;" padding-bottom: 0px;">3</b>
								</td>
								<td>
								<b style="style="font-size: 100;" padding-bottom: 0px;">4</b>
								</td>
								<td>
								<b style="style="font-size: 100;" padding-bottom: 0px;">5</b>
								</td>
							</tr>
						</table>
						<br>
						<small>Initated Coverage 02/20/2023</small>
					</td>
					<td style="border-right: 0; border-top: 0; border-right: 0; border-bottom: 0;">
						<p>We project that THBK will preform...</p>
					</td>
					<td style="border-right: 0; border-top: 0; border-right: 0; border-bottom: 0;">
						<h1>Target Price</h1>
						<h2><mark style="background-color: green;">JD 4.10</mark></h2>
					</td>
				</tr>
			</table>
			<hr color="white">
		</section>
		<section style="background-color: #C0C0C0;">
			<table style="width: 100%;">
				<tr>
					<td style="border-right: 0; border-top: 0; border-right: 0; border-bottom: 0;"><b>Previous
							Rating</b><br>
							<table style="border-color: black; border: 1px solid; display: inline; " >
							<tr>
								<td>
									<b style="style="font-size: 100; padding-bottom=0%">1</b>
								</td>
								<td>
								<b style="style="font-size: 100;">2</b>
								</td>
								<td>
								<b style="style="font-size: 100;">3</b>
								</td>
								<td>
								<b style="style="font-size: 100;">4</b>
								</td>
								<td>
								<b style="style="font-size: 100;">5</b>
								</td>
							</tr>
						</table>
							<b style="display: inline;">-/-/-</b>
					</td>
					<td style="border-right: 0; border-top: 0; border-right: 0; border-bottom: 0;"><b>52-Week Price
							Range</b><br>
						<small>3.47-3.93</small>
					</td>
					<td style="border-right: 0; border-top: 0; border-right: 0; border-bottom: 0;"><b>Market
							Capitilization</b><br>
						<small>JD 1.18 B</small>
					</td>
					<td style="border-right: 0; border-top: 0; border-right: 0; border-bottom: 0;"><b>Dividend Yield</b><br>
						<small style="align-content: center;">6.7%</small>
					</td>
					<td style="border-right: 0; border-top: 0; border-right: 0; border-bottom: 0;"><b>Dividends /
							Share</b><br>
						<small>JD 0.25</small>
					</td>
				</tr>
			</table>
			<br>
		</section>
		<hr color="white">
		<section style="background-color: #C0C0C0 ;">
			<table style="width: 100%;">
				<tr>
					<td style="border-left: 0; border-top: 0; border-right: 0; border-bottom: 0;"><b>Founded:</b><br>
						<small>1973</small>
					</td>
					<td style="border-left: 0; border-top: 0; border-right: 0; border-bottom: 0;"><b>Shares
							Outstanding:</b><br>
						<small>315.00 M</small>
					</td>
					<td style="border-left: 0; border-top: 0; border-right: 0; border-bottom: 0;"><b>Employees</b>
						<small>3,913</small>
					</td>
					<td style="border-left: 0; border-top: 0; border-right: 0; border-bottom: 0;"><b>Sector: </b>
						<small>Banks</small>
					</td>
					<td style="border-left: 0; border-top: 0; border-right: 0; border-bottom: 0;"> <b>Industry: </b>
						<small>Diversified Banks</small>
					</td>
				</tr>
			</table>
			<br>
			<p>Housing Bank for trade and fin....</p>
		</section>
		<hr color="black" style="padding-bottom: 50xp;">
		<hr color="black" style="padding-bottom: 0px;">
		<section>
			<h4
				style="padding-top: 0px; display:inline; background-color:black;  color:white; align-self: left; width: 250px;">
				Recommendation Summary</h4>
			<br>
			<p>UFICO's <b>BUY</b> recomendation on Housing Bank is the....</p><br>
			<table style=" display:block; table-layout: fixed;
			width: 200px;">
				<tr style="width: 100%;">
					<th style="border-left: 0; border-top: 0; border-right: 0; border-bottom: 0;">
						<b>Relative&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b><small
						style="color: green;">POSITIVE</small><br><b>Valuation</b></th>
					<th style="border-left: 0; border-top: 0; border-right: 0; border-bottom: 0;">
						<b>Earning Strength &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b><small
						style="color: green;">POSITIVE</small></th>
					<th style="border-left: 0; border-top: 0; border-right: 0; border-bottom: 0;">
						<b>Financial&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b><small
						style="color: green;">POSITIVE</small><br><b>Stability</b><br></th>
					<th style="border-left: 0; border-top: 0; border-right: 0; border-bottom: 0;">
						<b>Price Movement &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b><small
						style="color: orange;">NEUTRAL</small></th>
								</tr>
								<tbody style: "height: 200px;
								display: inline-block;
								width: 100%;
								overflow: auto;">
				<tr>
				<td style="width: 100px;
				overflow: hidden;">
			  <div id="chart1" style ="white-space: 10px; width: 400px; height: 10%"></div>
				<script>
				  const data1 = {
					labels: ["negative", "neutral", "positive"],
					datasets: [
						{ values: [80, 5, 20] },
						{ values: [80, 5, 20] },
						{ values: [80, 5, 20] }
					]
				  }
				  
				  const chart1 = new frappe.Chart("#chart1", {
					title: "",
					data: data1,
					type: 'percentage',
					height: 200,
					barOptions: {
						height: 15,          // default: 20
					},
					colors: ['#FF0000', '#8B99AA','#4CC417']
				  })
				  </script> 
				  </td>

				  <td style ="width: 50%">
				<div id="chart2" style ="width: 400px; height: 10%"></div>
				<script>
				  const data2 = {
					labels: ["negative", "neutral", "positive"],
					datasets: [
						{ values: [80, 5, 20] },
						{ values: [80, 5, 20] },
						{ values: [80, 5, 20] }
					]
				  }
				  
				  const chart2 = new frappe.Chart("#chart2", {
					title: "",
					data: data2,
					type: 'percentage',
					width: 200,
					height: 200,
					barOptions: {
						height: 15,          // default: 20
					},
					colors: ['#FF0000', '#8B99AA','#4CC417']
				  })
				</script>
				</td>

				<td style ="width: 50%">
				<div id="chart3" style ="width: 400px; height: 10%"></div>
				<script>
				  const data3 = {
					labels: ["negative", "neutral", "positive"],
					datasets: [
						{ values: [80, 5, 20] },
						{ values: [80, 5, 20] },
						{ values: [80, 5, 20] }
					]
				  }
				  
				  const chart3 = new frappe.Chart("#chart3", {
					title: "",
					data: data3,
					type: 'percentage',
					width: 200,
					height: 200,
					barOptions: {
						height: 15,          // default: 20
					},
					colors: ['#FF0000', '#8B99AA','#4CC417']
				  })
				</script>
				</td>
				  
			  
			  <td style ="width: 50%">
			  <div id="chart4" style ="width: 400px; height: 10%"></div>
			  <script>
			  const data4 = {
				labels: ["negative", "neutral", "positive"],
				datasets: [
				  { values: [50, 3, 50] },
				  { values: [50, 3, 50] },
				  { values: [50, 3, 50] }
				]
			  }
			  
			  const chart4 = new frappe.Chart("#chart4", {
				title: "",
				data: data4,
				type: 'percentage',
				width: 200,
				height: 200,
					barOptions: {
						height: 15,          // default: 20
					},
				colors: ['#FF0000', '#8B99AA','#4CC417']
			  })
			</script>
			  </td> 
				</tr>
				</tbody>
				<tr>
					<td style="border-left: 0; border-top: 0; border-right: 0; border-bottom: 0;">
						<p>The Stock is <b>underpriced </b> based on its current...</p>
					</td>
					<td style="border-left: 0; border-top: 0; border-right: 0; border-bottom: 0;">
						<p>Anuual earnings growth <b>exceeds </b> its 5-year average...</p>
					</td>
					<td style="border-left: 0; border-top: 0; border-right: 0; border-bottom: 0;">
						<p>THBK has <b>low </b> exposure risk to defaults,...</p>
					</td>
					<td style="border-left: 0; border-top: 0; border-right: 0; border-bottom: 0;">
						<p>Not significantly over the past 3 months.. <b>NEUTRAL</b> at its current...</p>
					</td>
				</tr>
			</table>
		</section>
		<hr color="black" style="padding-bottom: 50xp;">
		<hr color="black" style="padding-bottom: 0px;">
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
			<h4
				style="padding-top: 0px; display:inline; background-color:#C0C0C0 ;  color:black; align-self: left; width: 250px;">
				Peer Group Comparison</h4>
			<br>
			<table style="border: 1px solid;">
				<tr>
					<th></th>
					<th></th>
					<th style="border: 1px solid;"><b>Price</b></th>
					<th style="border: 1px solid;"><b>Mkt Cap</b></th>
					<th style="border: 1px solid;"><b>EPS</b></th>
					<th style="border: 1px solid;"><b>P/E</b></th>
					<th style="border: 1px solid;"><b>P/B</b></th>
					<th style="border: 1px solid;"><b>Yield</b></th>
					<th style="border: 1px solid;"><b>Payout</b></th>
					<th style="border: 1px solid;"><b>NPM</b></th>
					<th style="border: 1px solid;"><b>Debt/Equity</b></th>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td style="border: 1px solid;">02/20/23</td>
					<td style="border: 1px solid;">02/30/23</td>
					<td style="border: 1px solid;">(TTM)</td>
					<td style="border: 1px solid;">(TTM)</td>
					<td style="border: 1px solid;">(MRQ)</td>
					<td style="border: 1px solid;">(TTM)</td>
					<td style="border: 1px solid;">(TTM)</td>
					<td style="border: 1px solid;">(TTM)</td>
					<td style="border: 1px solid;">(MRQ)</td>
				</tr>
				<tr>
					<td style="border: 1px solid;"><b>THBK</b></td>
					<td style="border: 1px solid;"><b>Housing Bank for Trade and Finance</b></td>
					<td style="border: 1px solid;"><b>JD 3.74</b></td>
					<td style="border: 1px solid;"><b>JD 1.2 B</b></td>
					<td style="border: 1px solid;"><b>JD 0.41</b></td>
					<td style="border: 1px solid;"><b>9.1x</b></td>
					<td style="border: 1px solid;"><b>1.0x</b></td>
					<td style="border: 1px solid;"><b>6.7%</b></td>
					<td style="border: 1px solid;"><b>60.8%</b></td>
					<td style="border: 1px solid;"><b>34.8%</b></td>
					<td style="border: 1px solid;"><b>31.8%</b></td>
				</tr>
				<tr>
					<td style="border: 1px solid;">BOJX</td>
					<td style="border: 1px solid;">Bank of Jordan</td>
					<td style="border: 1px solid;">JD 2.32</td>
					<td style="border: 1px solid;">JD 464.0 M</td>
					<td style="border: 1px solid;">JD 0.20</td>
					<td style="border: 1px solid;">11.6x</td>
					<td style="border: 1px solid;">0.9x</td>
					<td style="border: 1px solid;">7.8%</td>
					<td style="border: 1px solid;">89.6%</td>
					<td style="border: 1px solid;">28.4%</td>
					<td style="border: 1px solid;">7.4%</td>
				</tr>
				<tr>
					<td style="border: 1px solid;">CAPL</td>
					<td style="border: 1px solid;">Capital Bank of Jordan</td>
					<td style="border: 1px solid;">JD 2.47</td>
					<td style="border: 1px solid;">JD 649.7 M</td>
					<td style="border: 1px solid;">JD 0.33</td>
					<td style="border: 1px solid;">7.5x</td>
					<td style="border: 1px solid;">1.1x</td>
					<td style="border: 1px solid;">6.9%</td>
					<td style="border: 1px solid;">51.5%</td>
					<td style="border: 1px solid;">47.7%</td>
					<td style="border: 1px solid;">115.7%</td>
				</tr>
			</table>
			<br>
		</section>
		<hr color="black" style="padding-bottom: 50xp;">
		<hr color="black" style="padding-bottom: 0px;">
		<h4
			style="padding-top: 0px; display:inline; background-color:#C0C0C0 ;  color:black; align-self: left; width: 250px;">
			Past Performance</h4>
		<table style="border: 1px solid;">
			<tr>
				<th></th>
				<th style="border: 1px solid;"><b>2018</b></th>
				<th style="border: 1px solid;"><b>2019</b></th>
				<th style="border: 1px solid;"><b>2020</b></th>
				<th style="border: 1px solid;"><b>2021</b></th>
				<th style="border: 1px solid;"><b>2022</b></th>
				<th style="border: 1px solid;"><b>TTM</b></th>
			</tr>
			<tr>
				<td style="border: 1px solid;">Net Profit Margin</td>
				<td style="border: 1px solid;">31.6%</td>
				<td style="border: 1px solid;">26.4%</td>
				<td style="border: 1px solid;">15.1%</td>
				<td style="border: 1px solid;">34.6%</td>
				<td style="border: 1px solid;">34.8%</td>
				<td style="border: 1px solid;">34.8%</td>
			</tr>
			<tr>
				<td style="border: 1px solid;">Dividend/share</td>
				<td style="border: 1px solid;">JD 0.15</td>
				<td style="border: 1px solid;">JD 0.00</td>
				<td style="border: 1px solid;">JD 0.12</td>
				<td style="border: 1px solid;">JD 0.20</td>
				<td style="border: 1px solid;">JD 0.25</td>
				<td style="border: 1px solid;">JD 0.25</td>
			</tr>
			<tr>
				<td style="border: 1px solid;">Earning/share</td>
				<td style="border: 1px solid;">JD 0.287</td>
				<td style="border: 1px solid;">JD 0.257</td>
				<td style="border: 1px solid;">JD 0.116</td>
				<td style="border: 1px solid;">JD 0.335</td>
				<td style="border: 1px solid;">0.411</td>
				<td style="border: 1px solid;">JD 0.411</td>
			</tr>
			<tr>
				<td style="border: 1px solid;">LT Debt to Equity</td>
				<td style="border: 1px solid;">11.7%</td>
				<td style="border: 1px solid;">14.1%</td>
				<td style="border: 1px solid;">27.3%</td>
				<td style="border: 1px solid;">29.8%</td>
				<td style="border: 1px solid;">31.8%</td>
				<td style="border: 1px solid;">31.8%</td>
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
					<table style="border: 1px solid;">
						<tr>
							<th style="border: 1px solid;"><b>Last Price</b></th>
							<th style="border: 1px solid;"><b>Market Cap</b></th>
							<th style="border: 1px solid;"><b>EPS</b></th>
							<th style="border: 1px solid;"><b>P/E</b></th>
							<th style="border: 1px solid;"><b>Book</b></th>
							<th style="border: 1px solid;"><b>P/B</b></th>
							<th style="border: 1px solid;"><b>DPS</b></th>
							<th style="border: 1px solid;"><b>Div. Yield</b></th>
						</tr>
						<tr>
							<td style="border: 1px solid;">(20-Feb-23)</td>
							<td style="border: 1px solid;">(20-Feb-23)</td>
							<td style="border: 1px solid;">(TTM)</td>
							<td style="border: 1px solid;">(TTM)</td>
							<td style="border: 1px solid;">(MRQ)</td>
							<td style="border: 1px solid;">(TTM)</td>
							<td style="border: 1px solid;">(MRY)</td>
							<td style="border: 1px solid;">(20-Feb-23)</td>
						</tr>
						<tr>
							<td style="border: 1px solid;">JD 3.74</td>
							<td style="border: 1px solid;">JD 1.2 B</td>
							<td style="border: 1px solid;">JD0.41</td>
							<td style="border: 1px solid;">9.1x</td>
							<td style="border: 1px solid;">JD 3.81</td>
							<td style="border: 1px solid;">1.0x</td>
							<td style="border: 1px solid;">JD 0.25</td>
							<td style="border: 1px solid;">6.7%</td>
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
					  labels: ["very negative", "neutral", "very positive"],
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
					  colors: ['#FF0000', '#8B99AA','#4CC417']
					})
					</script> 
				<div id="chart6"></div>
				  <script>
					const data6 = {
					  labels: ["very negative", "neutral", "very positive"],
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
					  colors: ['#FF0000', '#8B99AA','#4CC417']
					})
					</script> 
					<br>
					<div id="chart7"></div>
				  <script>
					const data7 = {
					  labels: ["very negative", "neutral", "very positive"],
					  datasets: [
						  { values: [90, 3, 5] },
						  { values: [90, 3, 5] },
						  { values: [90, 3, 5] }
					  ]
					}
					
					const chart7 = new frappe.Chart("#chart7", {
					  title: "Dividend Growth       POSITIVE",
					  data: data7,
					  type: 'percentage',
					  height: 220,
					barOptions: {
						height: 15,          // default: 20
					},
					  colors: ['#FF0000', '#8B99AA','#4CC417']
					})
					</script> <br>
					<div id="chart8"></div>
				  <script>
					const data8 = {
					  labels: ["very negative", "neutral", "very positive"],
					  datasets: [
						  { values: [80, 3, 20] },
						  { values: [80, 3, 20] },
						  { values: [80, 3, 20] }
					  ]
					}
					
					const chart8 = new frappe.Chart("#chart8", {
					  title: "Dividend Yield            POSITIVE",
					  data: data8,
					  type: 'percentage',
					  height: 220,
					barOptions: {
						height: 15,          // default: 20
					},
					  colors: ['#FF0000', '#8B99AA','#4CC417']
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
						Earnings Strength is <strong style="color: green;">POSITIVE</strong></h4>
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
        const data = {
            labels: ['31-Dec-22','30-Sep-22','30-Jun-22','31-Mar-22'],
            datasets: [
                {
                    name: 'income',
                    type: 'bar',
                    values: [129.5, 124.97, 119.7, 110.67]
                }
            ]
        }

        const chart = new frappe.Chart('#chart', {
            title: 'Net Income(JD Million) Positive earnings trend over the past 4 quarters',
            data: data,
            type: 'bar',
            colors: ['#C0C0C0']
        });
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
					  title: "Earnings Trend        VERY POSITIVE",
					  data: data9,
					  type: 'percentage',
					  height: 220,
					barOptions: {
						height: 15,          // default: 20
					},
					  colors: ['#FF0000', '#8B99AA','#4CC417']
					})
					</script> 
					<br>
					<div id="chart10"></div>
				  <script>
					const data10 = {
					  labels: ["very negative", "neutral", "very positive"],
					  datasets: [
						  { values: [90, 3, 5] },
						  { values: [90, 3, 5] },
						  { values: [90, 3, 5] }
					  ]
					}
					
					const chart10 = new frappe.Chart("#chart10", {
					  title: "Earnings vs. Industry          VERY POSITIVE",
					  data: data10,
					  type: 'percentage',
					  height: 220,
					barOptions: {
						height: 15,          // default: 20
					},
					  colors: ['#FF0000', '#8B99AA','#4CC417']
					})
					</script> <br>
					<div id="chart11"></div>
				  <script>
					const data11 = {
					  labels: ["very negative", "neutral", "very positive"],
					  datasets: [
						  { values: [80, 3, 20] },
						  { values: [80, 3, 20] },
						  { values: [80, 3, 20] }
					  ]
					}
					
					const chart11 = new frappe.Chart("#chart11", {
					  title: "Profitability            POSITIVE",
					  data: data11,
					  type: 'percentage',
					  height: 220,
					barOptions: {
						height: 15,          // default: 20
					},
					  colors: ['#FF0000', '#8B99AA','#4CC417']
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
					<table style="border: 1px solid;">
						<tr>
							<th style="border: 1px solid;"><b>4Q22 Results</b><br><small>(TTM)</small></th>
							<th style="border: 1px solid;"><b>Assets</b></th>
							<th style="border: 1px solid;"><b>Equity</b></th>
							<th style="border: 1px solid;"><b>Assets/Eq.</b></th>
							<th style="border: 1px solid;"><b>Loans/Deposists</b></th>
							<th style="border: 1px solid;"><b>Bad Loans</b></th>
						</tr>
						<tr>
							<td style="border: 1px solid;"></td>
							<td style="border: 1px solid;">JD 2.88 B</td>
							<td style="border: 1px solid;">JD 1.26 B</td>
							<td style="border: 1px solid;">6.7x</td>
							<td style="border: 1px solid;">69.0%</td>
							<td style="border: 1px solid;">4.9%</td>
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
					  title: "Assets / Equity Ratio         POSITIVE",
					  data: data12,
					  type: 'percentage',
					  height: 220,
					barOptions: {
						height: 15,          // default: 20
					},
					  colors: ['#FF0000', '#8B99AA','#4CC417']
					})
					</script> 
					<br>

					<div id="chart14"></div>
				  <script>
					const data14 = {
					  labels: ["very negative", "neutral", "very positive"],
					  datasets: [
						  { values: [80, 3, 25] },
						  { values: [80, 3, 25] },
						  { values: [80, 3, 25] }
					  ]
					}
					
					const chart14 = new frappe.Chart("#chart14", {
					  title: "Loans / Deposits Ratio          POSITIVE",
					  data: data14,
					  type: 'percentage',
					  height: 220,
					barOptions: {
						height: 15,          // default: 20
					},
					  colors: ['#FF0000', '#8B99AA','#4CC417']
					})
					</script> 
					<br>

					<div id="chart15"></div>
				  <script>
					const data15 = {
					  labels: ["very negative", "neutral", "very positive"],
					  datasets: [
						  { values: [70, 3, 30] },
						  { values: [70, 3, 30] },
						  { values: [70, 3, 30] }
					  ]
					}
					
					const chart15 = new frappe.Chart("#chart15", {
					  title: "Level of Bad Loans         POSITIVE",
					  data: data15,
					  type: 'percentage',
					  height: 220,
					barOptions: {
						height: 15,          // default: 20
					},
					  colors: ['#FF0000', '#8B99AA','#4CC417']
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
	<div id="chart41"></div>
	<script>
		const data41 = {
			labels: ['', '', '', '','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
			datasets: [
				{
					name: 'price',
					type: 'line',
					values: [4.1,2,3.9,3.8,3.7,3.6,3.7,3.8,3.7,3.6,3.5,3.4,3.3,3.4,6,7,5,3.5,3.6,3.4,3.3,3.5,3.6,3.5,3.4,3.5]
				}
			]
		};
		const chart41 = new frappe.Chart('#chart41', {
		title: 'Stock Price is up -3.9% in the past year',
		data: data41,
		type: 'line', 
		height: 200,
		lineOptions: {
			regionFill: 1 
		},
		colors: ['#800000']
		});
	</script>

      <div id="chart16"></div>
      <script>
        const data16 = {
          labels: ["very negative", "neutral", "very positive"],
          datasets: [
            { values: [80, 5, 20] },
            { values: [80, 5, 20] },
            { values: [80, 5, 20] }
          ]
        }

        const chart16 = new frappe.Chart("#chart16", {
          title: "1 - Q Volatility            POSITIVE",
          data: data16,
          type: 'percentage',
          height: 220,
          barOptions: {
            height: 15,  // default: 20
          },
          colors: ['#FF0000', '#8B99AA','#4CC417']
        })
      </script>
      <br>

      <div id="chart17"></div>
      <script>
        const data17 = {
          labels: ["very negative", "neutral", "very positive"],
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
          colors: ['#FF0000', '#8B99AA','#4CC417']
        })
      </script>
      <br>

      <div id="chart18"></div>
      <script>
        const data18 = {
          labels: ["very negative", "neutral", "very positive"],
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
          colors: ['#FF0000', '#8B99AA','#4CC417']
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
<td style="padding-left: 550px;">
<div id="heatmap-item" class="heatmap" >
            <div class="chart-container" style="width: 250px;">
            <div class="graph-svg-tip comparison" data-point-index="-1" style="top: 0px; left: 0px; opacity: 0;"><span
                    class="title"><strong>0 </strong> on Jan 2023, 23</span>
                <ul class="data-point-list"></ul>
                <div class="svg-pointer" style="left: calc(50% - 15px);"></div>
            </div>
            <svg class="frappe-chart chart" width="900" height="150" >
                <defs></defs>
                <g class="heat-domain domain-3" transform="" >
                    <rect style="margin: 35px auto; stroke-width:1;stroke:rgb(0,0,0)" class="day" x="146" y="22" width="20" height="20"  style="padding: 10px;" fill="green" data-date="2023-04-04"
                        data-value="1" data-day="2"/><text x="152" y="37" style="font-size: 15px;">1</text>
                    <rect style="stroke-width:1;stroke:rgb(0,0,0)" class="day" x="146" y="40" width="20" height="20" fill="#ebedf0" data-date="2023-04-05"
                        data-value="1" data-day="3"/><text x="152" y="53" style="font-size: 15px;">1</text>
                    <rect style="stroke-width:1;stroke:rgb(0,0,0)" class="day" x="146" y="58" width="20" height="20" fill="#ebedf0" data-date="2023-04-06"
                        data-value="1" data-day="4"/><text x="152" y="72" style="font-size: 15px;">1</text>
                    <rect style="stroke-width:1;stroke:rgb(0,0,0)" class="day" x="146" y="76" width="20" height="20" fill="#ebedf0" data-date="2023-04-07"
                        data-value="1" data-day="5"/><text x="152" y="91" style="font-size: 15px;">1</text>
                    <rect style="stroke-width:1;stroke:rgb(0,0,0)" class="day" x="146" y="96" width="20" height="20" fill="#ebedf0" data-date="2023-04-08"
                        data-value="1" data-day="6"/><text x="152" y="111" style="font-size: 15px;">1</text>
                        <rect style="margin: 35px auto; stroke-width:1;stroke:rgb(0,0,0)" class="day" x="166" y="22" width="20" height="20"  style="padding: 10px;" fill="#ebedf0" data-date="2023-04-04"
                        data-value="1" data-day="2"/><text x="172" y="37" style="font-size: 15px;">2</text>
                    <rect style="stroke-width:1;stroke:rgb(0,0,0)" class="day" x="166" y="40" width="20" height="20" fill="lightgreen" data-date="2023-04-05"
                        data-value="1" data-day="3"/><text x="172" y="53" style="font-size: 15px;">2</text>
                    <rect style="stroke-width:1;stroke:rgb(0,0,0)" class="day" x="166" y="58" width="20" height="20" fill="#ebedf0" data-date="2023-04-06"
                        data-value="1" data-day="4"/><text x="172" y="72" style="font-size: 15px;">2</text>
                    <rect style="stroke-width:1;stroke:rgb(0,0,0)" class="day" x="166" y="76" width="20" height="20" fill="#ebedf0" data-date="2023-04-07"
                        data-value="1" data-day="5"/><text x="172" y="91" style="font-size: 15px;">2</text>
                    <rect style="stroke-width:1;stroke:rgb(0,0,0)" class="day" x="166" y="96" width="20" height="20" fill="#ebedf0" data-date="2023-04-08"
                        data-value="1" data-day="6"/><text x="172" y="111" style="font-size: 15px;">2</text>
                        <rect style="margin: 35px auto; stroke-width:1;stroke:rgb(0,0,0)" class="day" x="186" y="22" width="20" height="20"  style="padding: 10px;" fill="#ebedf0" data-date="2023-04-04"
                        data-value="1" data-day="2"/><text x="192" y="37" style="font-size: 15px;">3</text>
                    <rect style="stroke-width:1;stroke:rgb(0,0,0)" class="day" x="186" y="40" width="20" height="20" fill="#ebedf0" data-date="2023-04-05"
                        data-value="1" data-day="3"/><text x="192" y="53" style="font-size: 15px;">3</text>
                    <rect style="stroke-width:1;stroke:rgb(0,0,0)" class="day" x="186" y="58" width="20" height="20" fill="orange" data-date="2023-04-06"
                        data-value="1" data-day="4"/><text x="192" y="72" style="font-size: 15px;">3</text>
                    <rect style="stroke-width:1;stroke:rgb(0,0,0)" class="day" x="186" y="76" width="20" height="20" fill="#ebedf0" data-date="2023-04-07"
                        data-value="1" data-day="5"/><text x="192" y="91" style="font-size: 15px;">3</text>
                    <rect style="stroke-width:1;stroke:rgb(0,0,0)" class="day" x="186" y="96" width="20" height="20" fill="#ebedf0" data-date="2023-04-08"
                        data-value="1" data-day="6"/><text x="192" y="111" style="font-size: 15px;">3</text>
                        <rect style="margin: 35px auto; stroke-width:1;stroke:rgb(0,0,0)" class="day" x="206" y="22" width="20" height="20"  style="padding: 10px;" fill="#ebedf0" data-date="2023-04-04"
                        data-value="1" data-day="2"/><text x="212" y="37" style="font-size: 15px;">4</text>
                    <rect style="stroke-width:1;stroke:rgb(0,0,0)" class="day" x="206" y="40" width="20" height="20" fill="#ebedf0" data-date="2023-04-05"
                        data-value="1" data-day="3"/><text x="212" y="53" style="font-size: 15px;">4</text>
                    <rect style="stroke-width:1;stroke:rgb(0,0,0)" class="day" x="206" y="58" width="20" height="20" fill="#ebedf0" data-date="2023-04-06"
                        data-value="1" data-day="4"/><text x="212" y="72" style="font-size: 15px;">4</text>
                    <rect style="stroke-width:1;stroke:rgb(0,0,0)" class="day" x="206" y="76" width="20" height="20" fill="red" data-date="2023-04-07"
                        data-value="1" data-day="5"/><text x="212" y="91" style="font-size: 15px;">4</text>
                    <rect style="stroke-width:1;stroke:rgb(0,0,0)" class="day" x="206" y="96" width="20" height="20" fill="#ebedf0" data-date="2023-04-08"
                        data-value="1" data-day="6"/><text x="212" y="111" style="font-size: 15px;">4</text>
                   <text class="domain-name" x="146" y="-12" dy="4.5px"
                        font-size="9px" fill="var(--charts-label-color)" text-anchor="start"></text>
                </g>
                <g class="heat-domain domain-4" transform="">
                    <rect style="margin: 35px auto; stroke-width:1;stroke:rgb(0,0,0)" class="day" x="226" y="22" width="20" height="20"  style="padding: 10px;" fill="#ebedf0" data-date="2023-04-04"
                        data-value="1" data-day="2"/><text x="232" y="37" style="font-size: 15px;">5</text>
                    <rect style="stroke-width:1;stroke:rgb(0,0,0)" class="day" x="226" y="40" width="20" height="20" fill="#ebedf0" data-date="2023-04-05"
                        data-value="1" data-day="3"/><text x="232" y="53" style="font-size: 15px;">5</text>
                    <rect style="stroke-width:1;stroke:rgb(0,0,0)" class="day" x="226" y="58" width="20" height="20" fill="#ebedf0" data-date="2023-04-06"
                        data-value="1" data-day="4"/><text x="232" y="72" style="font-size: 15px;">5</text>
                    <rect style="stroke-width:1;stroke:rgb(0,0,0)" class="day" x="226" y="76" width="20" height="20" fill="#ebedf0" data-date="2023-04-07"
                        data-value="1" data-day="5"/><text x="232" y="91" style="font-size: 15px;">5</text>
                    <rect style="stroke-width:1;stroke:rgb(0,0,0)" class="day" x="226" y="96" width="20" height="20" fill="darkred" data-date="2023-04-08"
                        data-value="1" data-day="6"/><text x="232" y="111" style="font-size: 15px;">5</text>
                    <text class="domain-name" x="228" y="-12" dy="4.5px"
                        font-size="9px" fill="var(--charts-label-color)" text-anchor="start"></text>
                </g>
            </svg>
            </div>
            </div>
</td>
<td>
<table style="border: 1px solid; display: inline-block; width: 300px height: 100px">
            <tr style="border: 1px solid; "> 
                <th style="border: 1px solid; width: 100px">Strong Buy</th>
                <td style="border: 1px solid;  height: 10px; width: 200px">Significantly Satisfactory</td>
            </tr>
            <tr style="border: 1px solid; ">
                <th style="border: 1px solid;   width: 100px">Buy</th>
                <td style="border: 1px solid;  height: 10px; width: 200px">Satisfactory</td>
            </tr>
            <tr style="border: 1px solid; ">
                <th style="border: 1px solid;   width: 100px">Hold</th>
                <td style="border: 1px solid;  width: 200px">Average</td>
            </tr>
            <tr style="border: 1px solid;">
                <th style="border: 1px solid;    width: 100px">Sell</th>
                <td style="border: 1px solid;  height: 10px; width: 200px">Unsatisfactory</td>
            </tr>
            <tr style="border: 1px solid;">
                <th style="border: 1px solid;  height: 5px; width: 100px">Strong Sell</th>
                <td style="border: 1px solid;  height: 10px;width: 200px">Significantly Unsatisfactory</td>
            </tr>
        </table>
</td>
</tr>
</table>
<br>
		<b>Relative Valuation: </b>
		<p style="display: inline-block;">Relative valuation is a weighted...</p>
		<b>Earnings Strength: </b>
		<p style="display: inline-block;">Over 20 years of research...</p>
		<b>Financial Stability: </b>
		<p style="display: inline-block;">Financial stability is a weighted...</p>
		<b>Recent Price Movement: </b>
		<p style="display: inline-block;">Historical price action of a company's...</p>
		<br>
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
		<hr color="black" style="padding-bottom: 50xp;"></div>`;
$(body).appendTo(this.page.main);
// $(style).appendTo(this.page.main.ui);
	}
}
