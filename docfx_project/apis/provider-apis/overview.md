<html>
<head>
<meta name="viewport" content="width=device-width">

<style>
h1, h2, h3, h4 {
	color:#005294; 
	border-bottom: 1px solid #eee
}

a { color: #005294;}
nav a { color: #fff;}
td {
	width: 50%;
	vertical-align: top;
}

table {
	border: 0;
}

</style>
</head>
<body>
	<div id="wrapper">

The Temenos Provider APIs expose Temenos product business capabilities as RESTful (Representational state transfer) APIs defined in the OpenAPI Specification (OAS). The provider APIs are semantically versioned and the Temenos Interaction Framework (IRIS) product allows a single provider API to be mapped to pre-defined, publicly exposed APIs that implement standard API definitions e.g. Open Banking API, Berlin group, STET etc.
<br>The Temenos Provider APIs are grouped into the top-level business domains as below

<section>
<div class="container-fluid">
		<div class="row">	
			<div class="col-12">
                <div class="row">
					<div class="col-md-12">
						<h4>Party</h4>
						<table class="table table-striped">
							<tr>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/party-customers-service-v1.0.0-swagger.json'>customers</a><p>Allows the creation, viewing and management of customers. This includes associated information such as their address, custom fields and identification documents. It is also possible to search for customers by various criteria.</p></td>
							</tr>
							<tr>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/party-customers-documents-service-v1.0.0-swagger.json'>customers-documents</a><p>Allows the creation, viewing and management of customer documents and images.</p></td>
							</tr>
							<tr>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/party-customers-messages-service-v1.0.0-swagger.json'>customers-messages</a><p>Allows the creation, viewing and management of messages to and from customers.</p></td>
							</tr>
						</table>
					</div>
                    </div>
            </div>
                    </div>

                    <div class="row">	
			<div class="col-12">
				<div class="row">
					<div class="col-md-12">
						<h4>Product</h4>
						<table class="table table-striped">
							<tr>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/product-productConditions-service-v1.0.0-swagger.json'>productConditions</a><p>Retrieves product condition information</p></td>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/product-productGroups-service-v1.0.0-swagger.json'>productGroups</a><p>Retrieves product group information that is used by the legal entity</p></td>
							</tr>
							<tr>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/product-products-service-v1.0.0-swagger.json'>products</a><p>Retrieves product information, either as a full catalog or by product line and / or product group</p></td>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/product-projects-service-v1.0.0-swagger.json'>projects</a><p>Allows the creation, viewing and management of product builder projects to create and publish products</p></td>
							</tr>
							<tr>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/product-properties-service-v1.0.0-swagger.json'>properties</a><p>Retrieves product property information, used in building products</p></td>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/product-productLines-service-v1.0.0-swagger.json'>productLines</a><p>Retrieves product line information that is used by the legal entity</p></td>
							</tr>
							<tr>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/product-interestConditions-service-v1.0.0-swagger.json'>interestConditions</a><p>Retrieves interest condition information for products, groups and lines</p></td>
							</tr>
						</table>
					</div>
				</div>
                        </div>
					</div>

                <div class="row">	
			<div class="col-12">
				<div class="row">
					<div class="col-md-12">
						<h4>Holdings</h4>
						<table class="table table-striped">
							<tr>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/holdings-accounts-service-v1.0.0-swagger.json'>accounts</a><p>Retrieves balances, cards and transaction information on accounts</p></td>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/holdings-arrangements-service-v1.0.0-swagger.json'>arrangements</a><p>Retrieves balances and transaction information for all products except accounts</p></td>
							</tr>
							<tr>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/holdings-customers-service-v1.0.0-swagger.json'>customers</a><p>Retrieves balances and transaction information for a customer's accounts and arrangements</p></td>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/holdings-instruments-service-v1.0.0-swagger.json'>instruments</a><p>Retrieves position information for a legal entities own book portfolios</p></td>
							</tr>
							<tr>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/holdings-limits-service-v1.0.0-swagger.json'>limits</a><p>Retrieves limit information for a customer, and allows checking and managing limits utilized by a party.</p></td>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/holdings-nostros-service-v1.0.0-swagger.json'>nostros</a><p>Retrieves Nostro position information for the legal entity</p></td>
							</tr>
							<tr>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/holdings-portfolios-service-v1.0.0-swagger.json'>portfolios</a><p>Retrieves valuation, holdings and transaction information on portfolios</p></td>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/holdings-reports-service-v1.0.0-swagger.json'>reports</a><p>Retrieves various named holdings reports by customer and account / arrangement</p></td>
							</tr>
							<tr>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/holdings-treasury-currencies-service-v1.0.0-swagger.json'>treasury-currencies</a><p>Retrieves currency position information for the legal entity</p></td>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/holdings-treasury-currencyPairs-service-v1.0.0-swagger.json'>treasury-currencyPairs</a><p>Retrieves currency pair position information for the legal entity</p></td>
							</tr>
						</table>
					</div>
					</div>
                            </div>
					</div>

                <div class="row">	
			<div class="col-12">
				<div class="row">
					<div class="col-md-12">
						<h4>Orders</h4>
						<table class="table table-striped">
							<tr>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/order-derivativeOrders-service-v1.0.0-swagger.json'>derivativeOrders</a><p>Allows the creation, viewing and management of derivative orders</p></td>					
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/order-forexOrders-service-v1.0.0-swagger.json'>forexOrders</a><p>Allows the creation, viewing and management of forex orders</p></td>
							</tr>
							<tr>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/order-paymentOrders-service-v1.0.0-swagger.json'>paymentOrders</a><p>Allows the creation, viewing and management of payment orders</p></td>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/order-payments-service-v1.0.0-swagger.json'>payments</a><p>Allows the creation, viewing and management of payments and transfers</p></td>
							</tr>
							<tr>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/order-paymentStops-service-v1.0.0-swagger.json'>paymentStops</a><p>Allows the creation, viewing and management of payment stop requests. Also enables blocking and activation of cards.</p></td>		
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/order-securityOrders-service-v1.0.0-swagger.json'>securityOrders</a><p>Allows the creation, viewing and management of security orders</p></td>
							</tr>
							<tr>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/order-securityTransferOrders-service-v1.0.0-swagger.json'>securityTransferOrders</a><p>Allows the creation, viewing and management of security transfer orders</p></td>
							</tr>
						</table>
					</div>
				</div>
                            </div>
				</div>


                <div class="row">	
			<div class="col-12">
				<div class="row">
					<div class="col-md-12">
						<h4>Meta</h4>
						<table class="table table-striped">
							<tr>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/meta-apis-service-v1.0.0-swagger.json'>apis</a><p>Retrieves information about the API ecosystem, both reference information and runtime metrics</p></td>					
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/meta-queries-service-v1.0.0-swagger.json'>queries</a><p>Allows the creation, viewing and management of query definitions</p></td>
							</tr>
							<tr>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/meta-screens-service-v1.0.0-swagger.json'>screens</a>
									<p>Allows the creation, viewing and management of screen definitions</p></td>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/meta-tables-service-v1.0.0-swagger.json'>tables</a><p>Allows the viewing of table definitions</p></td>
							</tr>
						</table>
					</div>
				</div>
                         </div>
				</div>

                <div class="row">	
			<div class="col-12">
				<div class="row">
					<div class="col-md-12">
						<h4>Reference</h4>
						<table class="table table-striped">
							<tr>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/reference-balanceTypes-service-v1.0.0-swagger.json'>balanceTypes</a><p>Retrieves human readable descriptions of balance types</p></td>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/reference-brokers-service-v1.0.0-swagger.json'>brokers</a><p>Retrieves the brokers that are used by the organization</p></td>
							</tr>
							<tr>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/reference-companies-service-v1.0.0-swagger.json'>companies</a><p>Retrieves the legal entity information that is used by the organization</p></td>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/reference-countries-service-v1.0.0-swagger.json'>countries</a><p>Retrieves the country information that is used by the legal entity, either a list of countries or a specific country by ISO 3166-1 alpha-2 code.</p></td>
							</tr>
							<tr>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/reference-currencies-service-v1.0.0-swagger.json'>currencies</a><p>Retrieves the currency information that is used by the legal entity, either a list of currencies or a specific currency by ISO 4217 code.</p></td>	
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/reference-dates-service-v1.0.0-swagger.json'>dates</a><p>Retrieves the working day information that is used by the organization, either a list for all legal entities or for a specific legal entity.</p></td>
							</tr>
							<tr>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/reference-interestBases-service-v1.0.0-swagger.json'>interestBases</a><p>Retrieves the interest bases information that is used by the legal entity</p></td>
							</tr>
							<tr>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/reference-periodDates-service-v1.0.0-swagger.json'>periodDates</a><p>Retrieves periodic interest information that is used by the legal entity</p></td>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/reference-rateTexts-service-v1.0.0-swagger.json'>rateTexts</a><p>Retrieves human readable descriptions of interest conditions</p></td>
							</tr>
							<tr>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/reference-treasury-service-v1.0.0-swagger.json'>treasury</a><p>Retrieves treasury configuration that is used by the legal entity</p></td>
							
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/reference-treasury-dealers-service-v1.0.0-swagger.json'>treasury-dealers</a><p>Retrieves the dealers that are used by the organization</p></td>
							</tr>
						</table>
					</div>
				</div>
	                   </div>
				</div>

                <div class="row">	
			<div class="col-12">
               <div class="row">
					<div class="col-md-12">
						<h4>PSD2</h4>
						<table class="table table-striped">
							<tr>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/PSD2-accounts-v1.0.0-swagger.json'>accounts</a><p>These APIs are used to get the account information.</p></td>					
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/PSD2-funds-transfer-v1.0.0-swagger.json'>fundsTransfer</a><p>These APIs are used to create and get FundsTransfer records.</p></td>
							</tr>
							<tr>
								<td><a href='/swagger-ui/index.html?url=/apis/provider-apis/PSD2-payments-v1.0.0-swagger.json'>payments</a>
									<p>These APIs are used to create and get the PaymentOrder records.</p></td>
							</tr>
						</table>
					</div>
				</div>

			</div>
			
		</div>

	</div>

</div>
</section>
</body>
</html>