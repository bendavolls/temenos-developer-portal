---
title: API Introduction
description: API Overview
author: jfiricel
category: API
tags: API,
date: 5/21/2018 9:13:07 PM   
reviewer: bdavolls
---


The MarketPlace Provider Sandbox is exposing a series of REST APIs that can be invoked in order to create, read and/or update records in it. 

### Authentication

Temenos API supports Authentication. All the required credentials are communicated separately.


### Service Catalog

Service Catalog shows the swagger file content and implicitly all the available operations of a specific API.

<p>
  <button class="btn btn-info btn-md btn-block" type="button" data-toggle="collapse" data-target="#collapseGetServiceCatalog" aria-expanded="false" aria-controls="collapseGetServiceCatalog">
  <div class="text-left">
     Get Service Catalog 
  </div>
  </button>
</p>
<div class="collapse" id="collapseGetServiceCatalog" style="word-break:break-all;">
  <div class="text-left">
      <div class="panel panel-info">
        <div class="panel-heading">**URL**</div>

   - `https://<sandboxId>.temenos.cloud/irf-test-web/api/v1.0.0/meta/apidocs/<apiName>`

      </div>
  </div>

  <div class="text-left">
      <div class="panel panel-info">
        <div class="panel-heading">**Http Method**</div>

       -  GET

      </div>
  </div>

  <div class="text-left">
      <div class="panel panel-info">
        <div class="panel-heading">**Http Response Headers**</div>

       -  Content-Type: 'application/json'

      </div>
  </div>

  <div class="text-left">
      <div class="panel panel-info">
        <div class="panel-heading">**Response**</div>

       -  It will display the schema definition view (the swagger content) of the interrogated API.

      </div>
   </div>
</div>



### Domains

Domains are the highest level grouping for APIs.

<p>
  <button class="btn btn-info btn-md btn-block" type="button" data-toggle="collapse" data-target="#collapseDomains" aria-expanded="false" aria-controls="collapseDomains">
  <div class="text-left">
     Domains
  </div>
  </button>
</p>
<div class="collapse" id="collapseDomains">
  <div class="text-left">
	<div class="panel panel-info">
		<div class="panel-heading">**General**</div>

  - Domains allow the same resource path to give different result based on domain:
	  - */party/customers/654321*: Reference data (names, address, etc.) for customer 654321
	  - */holdings/customers/654321*: Collection of holdings for customer 654321
	  
	</div>  
  </div>
  <div class="text-left">
	<div class="panel panel-info">
		<div class="panel-heading">**Currrent domains**</div>

       -  **party**: Master party data; customers, counterparties etc.
       -  **product**: Master product data; products, rates, eligibility etc.
       -  **holdings**: Financial holdings (accounts, arrangements, portfolios, etc.) at party and bank level
       -  **orders**: Order management for all types of orders, e.g. payments, security trading, etc.
       -  **meta**: APIs about APIs; usage, deployment, etc.
       -  **reference**: Reference data; rates, dates, etc.
       
	</div>
  </div>
 </div>


### Standard Methods

The following table describes how to map standard methods to HTTP methods:
<p>
  <button class="btn btn-info btn-md btn-block" type="button" data-toggle="collapse" data-target="#collapseStandardMethods" aria-expanded="false" aria-controls="collapseStandardMethods">
    <div class="text-left">
     Standard Methods
    </div>
  </button>
</p>
<div class="collapse" id="collapseStandardMethods" style="word-break:break-all;">
 <ul class="list-group">
  <li class="list-group-item list-group-item-info">
| Standard Method   | HTTP Mapping	        | HTTP Request Body|HTTP Response Body|
|:---				|:---	                | :---             | :---             |
| List 				| GET <collection URL>	| N/A              | Resource list    |
| Get			    | GET <resource URL>    | N/A              | Resource         |
| Create			| POST <collection URL> | Resource         | Resource         |
| Update 			| PUT <resource URL>	| Resource         | Resource         |
| Delete			| DELETE <resource URL> | N/A              | Empty            |
</li>
</ul>
</div>


### Standard Request Parameters

The following table describes a list of standard parameters used across all APIs:
<p>
  <button class="btn btn-info btn-md btn-block" type="button" data-toggle="collapse" data-target="#collapseStandardParam" aria-expanded="false" aria-controls="collapseStandardParam">
    <div class="text-left">
     Standard Request Parameters
    </div>
  </button>
</p>
<div class="collapse" id="collapseStandardParam">
 <ul class="list-group">
  <li class="list-group-item list-group-item-info">
    | Name              | Type                                 | Description      |
    |:---				|:---	                               |:---              |
    | <div style="word-break:break-all;">page_token</div> 		| string	                           | <div style="word-break:break-all;">The pagination token in the List request.</div>|
    | <div style="word-break:break-all;">page_size</div>	    | int32                                | <div style="word-break:break-all;">The pagination size in the List request.</div>|
    | <div style="word-break:break-all;">page_start</div>		| int32                                | <div style="word-break:break-all;">The pagination start row in the List request</div>|
    | <div style="word-break:break-all;">total_lastitems</div>	| int32	                               | <div style="word-break:break-all;">The last total_lastitems items to be returned in the List request. Mutually exclusive with page_start and page_size</div>|
    | <div style="word-break:break-all;">total_size</div>		| int32                                | <div style="word-break:break-all;">The total count of items in the list irrespective of pagination.</div>|
    | <div style="word-break:break-all;">request_id</div>		| string                               | <div style="word-break:break-all;">A unique string id used for detecting duplicated requests. Optional.</div>|
    | <div style="word-break:break-all;">resume_token</div>		| string                               | <div style="word-break:break-all;">An opaque token used for resuming a streaming request. Reserved for future use - not yet implemented.</div>|
    | <div style="word-break:break-all;">validate_only</div>	| bool                                 | <div style="word-break:break-all;">If true, it indicates that the given request should only be validated, not executed.</div>|
    | <div style="word-break:break-all;">response_verbosity</div>| All, Minimal, Properties, Activities| <div style="word-break:break-all;">For activity (AA) requests, determines they level of information returned in the response message. *All* - header information, property and activity information. *Minimal* - header information. *Properties* - header information and property information. *Activities* - header information and activity information.</div>|
  </li>
 </ul>
</div>


### Standard Names

This section describes a set of standard message field definitions that are used across all APIs.
<p>
  <button class="btn btn-info btn-md btn-block" type="button" data-toggle="collapse" data-target="#collapseStandardNames" aria-expanded="false" aria-controls="collapseStandardNames">
    <div class="text-left">
     Standard Names
    </div>
  </button>
</p>
<div class="collapse" id="collapseStandardNames">
 <ul class="list-group">
  <li class="list-group-item list-group-item-info">
    | Name          | Type       | Description      |
    |:---			|:---	     | :---             |
    | <div style="word-break:break-all;">name</div> 		| string	 | <div style="word-break:break-all;">The name field should contain the relative resource name.</div>|
    | <div style="word-break:break-all;">parent</div>	    | string     | <div style="word-break:break-all;">For resource definitions and List/Create requests, the parent field should contain the parent relative resource name.</div>|
    | <div style="word-break:break-all;">create_time</div>	| Timestamp  | <div style="word-break:break-all;">The creation timestamp of an entity.</div>|
    | <div style="word-break:break-all;">update_time</div>	| Timestamp	 | <div style="word-break:break-all;">The last update timestamp of an entity. Note: update_time is updated when create/patch/delete operation is performed.</div>|
    | <div style="word-break:break-all;">delete_time</div>	| Timestamp  | <div style="word-break:break-all;">The deletion timestamp of an entity, only if it supports retention.</div>|
    | <div style="word-break:break-all;">expire_time</div>	| Timestamp  | <div style="word-break:break-all;">The expiration timestamp of an entity if it happens to expire.</div>|
    | <div style="word-break:break-all;">start_time</div>	| Timestamp  | <div style="word-break:break-all;">The timestamp marking the beginning of some time period.</div>|
    | <div style="word-break:break-all;">end_time</div>		| Timestamp  | <div style="word-break:break-all;">The timestamp marking the end of some time period or operation (regardless of its success).</div>|
    | <div style="word-break:break-all;">time_zone</div>    | string     | <div style="word-break:break-all;">The time zone name. It should be an IANA TZ name, such as "America/Los_Angeles".</div>|
    | <div style="word-break:break-all;">region_code</div>	| string     | <div style="word-break:break-all;">The Unicode country/region code (CLDR) of a location, such as "US" and "419".</div>|
    | <div style="word-break:break-all;">language_code</div>| string     | <div style="word-break:break-all;">The BCP-47 language code, such as "en-US" or "sr-Latn".</div>|
    | <div style="word-break:break-all;">mime_type</div>	| string     | <div style="word-break:break-all;">An IANA published MIME type (also referred to as media type).</div>|
    | <div style="word-break:break-all;">display_name</div>	| string     | <div style="word-break:break-all;">The display name of an entity.</div>|
    | <div style="word-break:break-all;">title</div>		| string     | <div style="word-break:break-all;">The official name of an entity, such as company name. It should be treated as the formal version of display_name.</div>|
    | <div style="word-break:break-all;">description</div>	| string     | <div style="word-break:break-all;">One or more paragraphs of text description of an entity.</div>|
  </li>
 </ul>
</div>


### Return Status Codes

Each Status-Code returned by API call is described below, including a description of which method(s) it can follow and any meta-information required in the response.

<p>
  <button class="btn btn-info btn-md btn-block" type="button" data-toggle="collapse" data-target="#collapseHttpStatusCode" aria-expanded="false" aria-controls="collapseHttpStatusCode">
   <div class="text-left">
     Http Status Code
   </div>
  </button>
</p>
<div class="collapse" id="collapseHttpStatusCode">
<ul class="list-group">
  <li class="list-group-item list-group-item-success">

<div class="w3-container">
  <table class="table" style="text-align:left;">
    <thead>
      <tr class="success">
        <th>SUCCESS</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr class="success">
        <td>200</td>
        <td>OK</td>
        <td>SUCCESS</td>
      </tr>
      <tr class="success">
        <td>201</td>
        <td>Created</td>
        <td>Record created in T24</td>
      </tr>
      <tr class="danger">
        <th>ERROR</th>
        <th></th>
        <th></th>
      </tr>
      <tr class="danger">
        <td>400</td>
        <td><div style="word-break:break-all;">Bad Input</div></td>
        <td><div style="word-break:break-all;">Wrong data or invalid body contents</div></td>
      </tr>
      <tr class="danger">
        <td>401</td>
        <td><div style="word-break:break-all;">Unauthorized</div></td>
        <td><div style="word-break:break-all;">Wrong valid authentication credentials</div></td>
      </tr>
      <tr class="danger">
        <td>403</td>
        <td><div style="word-break:break-all;">Forbidden</div></td>
        <td><div style="word-break:break-all;">The server understood the request but refuses to authorize it</div></td>
      </tr>
      <tr class="danger">
        <td>404</td>
        <td><div style="word-break:break-all;">Resource Not Found</div></td>
        <td><div style="word-break:break-all;">Requested resource not available in service</div></td>
      </tr>
      <tr class="danger">
        <td>405</td>
        <td><div style="word-break:break-all;">Method Not Allowed</div></td>
        <td></td>
      </tr>
      <tr class="danger">
        <td>412</td>
        <td><div style="word-break:break-all;">Precondition Failed</div></td>
        <td></td>
      </tr>
      <tr class="danger">
        <td>415</td>
        <td><div style="word-break:break-all;">Unsupported Media Type</div></td>
        <td><div style="word-break:break-all;">Check content-type and other http header settings</div></td>
      </tr>
      <tr class="danger">
        <td>500</td>
        <td><div style="word-break:break-all;">Internal Server Error</div></td>
        <td><div style="word-break:break-all;">The server encountered an unexpected condition that prevented it from fulfilling the request. Retry the exact same request that triggered this response, and hope to get a different response.</div></td>
      </tr>
    </tbody>
  </table>
</div>
  </li>
</ul>
</div>


### Pagination

Pagination in APIs helps client application to handle responses to easier.
Pagination is controlled via two parameters, *page_size* and *page_start*:
- **page-size** - limits the number of records in the api response
- **page-start** -  helps to retrieve next set of records.

<p>
  <button class="btn btn-info btn-md btn-block" type="button" data-toggle="collapse" data-target="#collapsePagination" aria-expanded="false" aria-controls="collapsePagination">
  <div class="text-left">
     Pagination
  </div>
  </button>
</p>
<div class="collapse" id="collapsePagination" style="word-break:break-all;">
  <div class="text-left">
	<div class="panel panel-info">
		<div class="panel-heading">**Sample URL 1**</div>

  - `localhost:8080/api/v1.0.0/provider-accounts/10944/transactions?fromDate=2017-01-01&page_size=5`
	  
	</div>  
  </div>

  <div class="text-left">
	<div class="panel panel-info">
		<div class="panel-heading">**Sample Response 1**</div>
		<pre>
		{
			"header": {
				"data": {
					"accountId": "10944",
					"currency": "USD"
				},
				"audit": {
					"T24_time": 1554,
					"parse_time": 4
				},
				"page_start": 0,
				"page_token": "a1f92b0d-4ca0-44f1-8025-b16d417f11a2",
				"total_size": 39,
				"page_size": 5
			},
			"body": [
				{
					"reference": "FT170803R9LY",
					"amount": 200000,
					"bookingDate": "2017-03-21",
					"valueDate": "2017-03-21"
				},
				{
					"reference": "FT17080GCFJJ",
					"amount": 150000,
					"bookingDate": "2017-03-21",
					"valueDate": "2017-03-21"
				},
				{
					"reference": "SCTRSC17080KMQW4",
					"amount": -2805,
					"bookingDate": "2017-03-21",
					"valueDate": "2017-03-21"
				},
				{
					"reference": "SCTRSC1708064H4D",
					"amount": -70434.35,
					"bookingDate": "2017-03-21",
					"valueDate": "2017-03-21"
				},
				{
					"reference": "SCTRSC17086RZV02",
					"amount": -3263.27,
					"bookingDate": "2017-03-27",
					"valueDate": "2017-03-27"
				}
			]
		}
		</pre>
	</div>
  </div>

  <div class="text-left">
	<div class="panel panel-info">
		<div class="panel-heading">**Sample URL 2**</div>

       -  `localhost:8080/api/v1.0.0/provider-accounts/10944/transactions?fromDate=2017-01-01&page_size=5&page_start=10`
	  
	</div>  
  </div>
  <div class="text-left">
	<div class="panel panel-info">
		<div class="panel-heading">**Sample Response 2**</div>
		<pre>
		{
			"header": {
				"data": {
					"accountId": "10944",
					"currency": "USD"
				},
				"audit": {
					"T24_time": 448,
					"parse_time": 1
				},
				"page_start": 10,
				"page_token": "a9b3fc6b-3f39-4925-8c6e-542e9fa238fd",
				"total_size": 39,
				"page_size": 5
			},
			"body": [
				{
					"reference": "FT17086WV7YX",
					"amount": 200000,
					"bookingDate": "2017-03-27",
					"valueDate": "2017-03-27"
				},
				{
					"reference": "SCTRSC17088S0BZW",
					"amount": -22792.77,
					"bookingDate": "2017-03-29",
					"valueDate": "2017-03-29"
				},
				{
					"reference": "FT1708899Y3D",
					"amount": 75000,
					"bookingDate": "2017-03-29",
					"valueDate": "2017-03-29"
				},
				{
					"reference": "SCTRSC17088RFNT2",
					"amount": -6928.71,
					"bookingDate": "2017-03-29",
					"valueDate": "2017-03-29"
				},
				{
					"reference": "SCTRSC17088ZP11W",
					"amount": -49171.54,
					"bookingDate": "2017-03-29",
					"valueDate": "2017-03-29"
				}
			]
		}
		</pre>
	</div>
  </div>
</div>


### Caching

Caching is controlled via the parameter *page_token*.

<p>
  <button class="btn btn-info btn-md btn-block" type="button" data-toggle="collapse" data-target="#collapseCaching" aria-expanded="false" aria-controls="collapseCaching">
  <div class="text-left">
     Caching
  </div>
  </button>
</p>
<div class="collapse" id="collapseCaching" style="word-break:break-all;">
  <div class="text-left">
	<div class="panel panel-info">
		<div class="panel-heading">**Sample URL**</div>

  - `localhost:8080/api/v1.0.0/provider-accounts/10944/transactions?fromDate=2017-01-01&page_size=5&page_start=10&page_token=dbf26a4b-0bd3-4407-8e25-ae406c6e3b57`
	  
	</div>
*Note: There is no T24_time element to the audit, as the request has been served from cache.*  
  </div>

  <div class="text-left">
	<div class="panel panel-info">
		<div class="panel-heading">**Sample Response**</div>
		<pre>
		{
			"header": {
				"data": {
					"accountId": "10944",
					"currency": "USD"
				},
				"audit": {
					"parse_time": 4
				},
				"page_start": 10,
				"page_token": "dbf26a4b-0bd3-4407-8e25-ae406c6e3b57",
				"total_size": 39,
				"page_size": 5
			},
			"body": [
				{
					"reference": "FT17086WV7YX",
					"amount": 200000,
					"bookingDate": "2017-03-27",
					"valueDate": "2017-03-27"
				},
				{
					"reference": "SCTRSC17088S0BZW",
					"amount": -22792.77,
					"bookingDate": "2017-03-29",
					"valueDate": "2017-03-29"
				},
				{
					"reference": "FT1708899Y3D",
					"amount": 75000,
					"bookingDate": "2017-03-29",
					"valueDate": "2017-03-29"
				},
				{
					"reference": "SCTRSC17088RFNT2",
					"amount": -6928.71,
					"bookingDate": "2017-03-29",
					"valueDate": "2017-03-29"
				},
				{
					"reference": "SCTRSC17088ZP11W",
					"amount": -49171.54,
					"bookingDate": "2017-03-29",
					"valueDate": "2017-03-29"
				}
			]
		}
		</pre>
	</div>
  </div>
</div>



### Code Samples

Please find below some code samples in different programming languages.

<p>
  <button class="btn btn-info btn-md btn-block" type="button" data-toggle="collapse" data-target="#collapseCode" aria-expanded="false" aria-controls="collapseCode">
  <div class="text-left">
     Code Samples
  </div>
  </button>
</p>
<div class="collapse" id="collapseCode" style="word-break:break-all;">
  <div class="text-left">
	<div class="panel panel-info">
		<div class="panel-heading">**Note**</div>

  - In the code samples below are used:
	  - 2 headers
	  - 3 parameters
  , but it can be less or more of them.
	  
	</div>
  </div>
<div align="left">
      <div class="panel panel-info">
      <div class="panel-heading">**Code Samples**</div>

<section class="design-process-section" id="process-tab">
    <div class="row">
      <div class=".col-xs-12 .col-sm-6 .col-md-8"> 
        <!-- design process steps--> 
        <!-- Nav tabs -->
        <ul class="nav nav-tabs process-model more-icon-preocess" role="tablist">
          <li role="presentation" class="active"><a href="#curl" aria-controls="curl" role="tab" data-toggle="tab"><i aria-hidden="true"></i>
            <p>Curl</p>
            </a></li>
          <li role="presentation"><a href="#csharp" aria-controls="csharp" role="tab" data-toggle="tab"><i aria-hidden="true"></i>
            <p>C#</p>
            </a></li>
          <li role="presentation"><a href="#java" aria-controls="java" role="tab" data-toggle="tab"><i aria-hidden="true"></i>
            <p>Java</p>
            </a></li>
          <li role="presentation"><a href="#javascript" aria-controls="javascript" role="tab" data-toggle="tab"><i aria-hidden="true"></i>
            <p>JavaScript</p>
            </a></li>
          <li role="presentation"><a href="#objc" aria-controls="objc" role="tab" data-toggle="tab"><i aria-hidden="true"></i>
            <p>ObjC</p>
            </a></li>
          <li role="presentation"><a href="#php" aria-controls="php" role="tab" data-toggle="tab"><i aria-hidden="true"></i>
            <p>PHP</p>
            </a></li>
          <li role="presentation"><a href="#python" aria-controls="python" role="tab" data-toggle="tab"><i aria-hidden="true"></i>
            <p>Python</p>
            </a></li>
          <li role="presentation"><a href="#ruby" aria-controls="ruby" role="tab" data-toggle="tab"><i aria-hidden="true"></i>
            <p>Ruby</p>
            </a></li>
        </ul>
        <!-- end design process steps--> 
        <!-- Tab panes -->
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="curl">
            <div class="design-process-content">
				<p>
    				&nbsp;&nbsp;`curl -v -X GET <required_url>?parameterName1={parameterValue1}&parameterName2={parameterValue2}parameterName3={parameterValue3}`<br>
    				&nbsp;&nbsp;`-H "<headerName1>: {headerValue1}"`<br>
    				&nbsp;&nbsp;`-H "<headerName2>: {headerValue2}"`<br>
    				&nbsp;&nbsp;`--data-ascii "{body}"`
				</p>
            </div>
          </div>
          <div role="tabpanel" class="tab-pane" id="csharp">
            <div class="design-process-content">
              <p>
    				&nbsp;&nbsp;`using System;`<br>
    				&nbsp;&nbsp;`using System.Net.Http.Headers;`<br>
    				&nbsp;&nbsp;`using System.Text;`<br>
    				&nbsp;&nbsp;`using System.Net.Http;`<br>
    				&nbsp;&nbsp;`using System.Web;`<br>
    				&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;`namespace CSHttpClientSample`<br>
    				&nbsp;&nbsp;`{`<br>
    				&nbsp;&nbsp;&nbsp;`    static class Program`<br>
    				&nbsp;&nbsp;&nbsp;`    {`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`        static void Main()`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`        {`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`            MakeRequest();`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`            Console.WriteLine("Hit ENTER to exit...");`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`            Console.ReadLine();`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`        }`<br>
    				&nbsp;&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;&nbsp;`        static async void MakeRequest()`<br>
    				&nbsp;&nbsp;&nbsp;`        {`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            var client = new HttpClient();`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            var queryString = HttpUtility.ParseQueryString(string.Empty);`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            // Request headers`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            client.DefaultRequestHeaders.Add("<headerName1>", "{headerValue1}");`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            client.DefaultRequestHeaders.Add("<headerName2>", "{headerValue2}");`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            // Request parameters`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            queryString["parameterName1"] = "{parameterValue1}";`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            queryString["parameterName2"] = "{parameterValue2}";`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            queryString["parameterName3"] = "{parameterValue3}";`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            var uri = "<required_url>?" + queryString;`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            var response = await client.GetAsync(uri);`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            // or    var response = await client.DeleteAsync(uri);`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            // or   var response = await client.PostAsync(uri, content);`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            // or   var response = await client.PutAsync(uri, content);`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`        }`<br>
    				&nbsp;&nbsp;&nbsp;`    }`<br>
    				&nbsp;&nbsp;`}`
			  </p>
            </div>
          </div>
          <div role="tabpanel" class="tab-pane" id="java">
            <div class="design-process-content">
              <p>
    				&nbsp;&nbsp;`// This sample uses the Apache HTTP client from HTTP Components `<br>
    				&nbsp;&nbsp;`// (http://hc.apache.org/httpcomponents-client-ga/)`<br>
    				&nbsp;&nbsp;`import java.net.URI;`<br>
    				&nbsp;&nbsp;`import org.apache.http.HttpEntity;`<br>
    				&nbsp;&nbsp;`import org.apache.http.HttpResponse;`<br>
    				&nbsp;&nbsp;`import org.apache.http.client.HttpClient;`<br>
    				&nbsp;&nbsp;`import org.apache.http.client.methods.HttpGet;`<br>
    				&nbsp;&nbsp;`import org.apache.http.client.utils.URIBuilder;`<br>
    				&nbsp;&nbsp;`import org.apache.http.impl.client.HttpClients;`<br>
    				&nbsp;&nbsp;`import org.apache.http.util.EntityUtils;`<br>
    				&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;`public class JavaSample `<br>
    				&nbsp;&nbsp;`{`<br>
    				&nbsp;&nbsp;&nbsp;`    public static void main(String[] args) `<br>
    				&nbsp;&nbsp;&nbsp;`    {`<br>
    				&nbsp;&nbsp;&nbsp;`        HttpClient httpclient = HttpClients.createDefault();`<br>
    				&nbsp;&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;&nbsp;`        try`<br>
    				&nbsp;&nbsp;&nbsp;`        {`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            URIBuilder builder = new URIBuilder("<required_url>");`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            builder.setParameter("parameterName1", "{parameterValue1}");`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            builder.setParameter("parameterName2", "{parameterValue2}");`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            builder.setParameter("parameterName3", "{parameterValue3}");`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            URI uri = builder.build();`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            HttpGet request = new HttpGet(uri);`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            request.setHeader("<headerName1>", "{headerValue1}");`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`			   request.setHeader("<headerName2>", "{headerValue2}");`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            // Request body`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            StringEntity reqEntity = new StringEntity("{body}");`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            request.setEntity(reqEntity);`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            HttpResponse response = httpclient.execute(request);`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            HttpEntity entity = response.getEntity();`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            if (entity != null) `<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            {`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`                System.out.println(EntityUtils.toString(entity));`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            }`<br>
    				&nbsp;&nbsp;&nbsp;`        }`<br>
    				&nbsp;&nbsp;&nbsp;`        catch (Exception e)`<br>
    				&nbsp;&nbsp;&nbsp;`        {`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`            System.out.println(e.getMessage());`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`        }`<br>
    				&nbsp;&nbsp;&nbsp;`    }`<br>
    				&nbsp;&nbsp;`}`
			  </p>
            </div>
          </div>
          <div role="tabpanel" class="tab-pane" id="javascript">
            <div class="design-process-content">
              <p>
    				&nbsp;&nbsp;`<!DOCTYPE html>`<br>
    				&nbsp;&nbsp;`<html>`<br>
    				&nbsp;&nbsp;`<head>`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    <title>JSSample</title>`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>`<br>
    				&nbsp;&nbsp;`</head>`<br>
    				&nbsp;&nbsp;`<body>`<br>
    				&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;`<script type="text/javascript">`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    $(function() {`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`        var params = {`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`            // Request parameters`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`            "parameterName1": "{parameterValue1}",`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`            "parameterName2": "{parameterValue2}",`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`            "parameterName3": "{parameterValue3}",`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`        };`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      <br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`        $.ajax({`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`            url: "<required_url>?" + $.param(params),`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`            beforeSend: function(xhrObj){`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`                // Request headers`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`                xhrObj.setRequestHeader("<headerName1>","{headerValue1}");`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`                xhrObj.setRequestHeader("<headerName2>","{headerValue2}");`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`            },`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`            type: "GET",`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`            // Request body`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`            data: "{body}",`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`        })`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`        .done(function(data) {`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`            alert("success");`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`        })`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`        .fail(function() {`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`            alert("error");`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`        });`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    });`<br>
    				&nbsp;&nbsp;`</script>`<br>
    				&nbsp;&nbsp;`</body>`<br>
    				&nbsp;&nbsp;`</html>`
			  </p>
            </div>
          </div>
          <div role="tabpanel" class="tab-pane" id="objc">
            <div class="design-process-content">
              <p>
    				&nbsp;&nbsp;`#import <Foundation/Foundation.h>`<br>
    				&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;`int main(int argc, const char * argv[])`<br>
    				&nbsp;&nbsp;`{`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;    <br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    NSString* path = @"<requested_url>";`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    NSArray* array = @[`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`                         // Request parameters`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`                         @"entities=true",`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`                         @"parameterName1={parameterValue1}",`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`                         @"parameterName2={parameterValue2}",`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`                         @"parameterName3={parameterValue3}",`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`                      ];`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    <br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    NSString* string = [array componentsJoinedByString:@"&"];`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    path = [path stringByAppendingFormat:@"?%@", string];`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    NSLog(@"%@", path);`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    NSMutableURLRequest* _request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:path]];`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    [_request setHTTPMethod:@"GET"];`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    // Request headers`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    [_request setValue:@"{headerValue1}" forHTTPHeaderField:@"<headerName1>"];`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    [_request setValue:@"{headerValue2}" forHTTPHeaderField:@"<headerName2>"];`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    // Request body`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    [_request setHTTPBody:[@"{body}" dataUsingEncoding:NSUTF8StringEncoding]];`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;    <br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    NSURLResponse *response = nil;`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    NSError *error = nil;`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    NSData* _connectionData = [NSURLConnection sendSynchronousRequest:_request returningResponse:&response error:&error];`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    if (nil != error)`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    {`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`        NSLog(@"Error: %@", error);`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    }`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    else`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    {`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`        NSError* error = nil;`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`        NSMutableDictionary* json = nil;`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`        NSString* dataString = [[NSString alloc] initWithData:_connectionData encoding:NSUTF8StringEncoding];`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`        NSLog(@"%@", dataString);`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`        if (nil != _connectionData)`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`        {`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`            json = [NSJSONSerialization JSONObjectWithData:_connectionData options:NSJSONReadingMutableContainers error:&error];`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`        }`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`        if (error || !json)`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`        {`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`            NSLog(@"Could not parse loaded json with error:%@", error);`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`        }`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`        NSLog(@"%@", json);`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`        _connectionData = nil;`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    }`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;    <br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    [pool drain];`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    return 0;`<br>
    				&nbsp;&nbsp;`}`
			  </p>
            </div>
          </div>
          <div role="tabpanel" class="tab-pane" id="php">
            <div class="design-process-content">
              <p>
    				&nbsp;&nbsp;`<?php`<br>
    				&nbsp;&nbsp;`// This sample uses the Apache HTTP client from HTTP Components `<br>
					&nbsp;&nbsp;`//(http://hc.apache.org/httpcomponents-client-ga/)`<br>
    				&nbsp;&nbsp;`require_once 'HTTP/Request2.php';`<br>
    				&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;`$request = new Http_Request2('<required_url>');`<br>
    				&nbsp;&nbsp;`$url = $request->getUrl();`<br>
    				&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;`$headers = array(`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    // Request headers`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    '<headerName1>' => '{headerValue1}',`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    '<headerName2>' => '{headerValue2}',`<br>
    				&nbsp;&nbsp;`);`<br>
    				&nbsp;&nbsp;<br>
    				&nbsp;&nbsp;`$request->setHeader($headers);`<br>
    				&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;`$parameters = array(`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    // Request parameters`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    'parameterName1' => '{parameterValue1}',`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    'parameterName2' => '{parameterValue2}',`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    'parameterName3' => '{parameterValue3}',`<br>
    				&nbsp;&nbsp;`);`<br>
    				&nbsp;&nbsp;<br>
    				&nbsp;&nbsp;`$url->setQueryVariables($parameters);`<br>
    				&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;`$request->setMethod(HTTP_Request2::METHOD_GET);`<br>
    				&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;`// Request body`<br>
    				&nbsp;&nbsp;`$request->setBody("{body}");`<br>
    				&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;`try`<br>
    				&nbsp;&nbsp;`{`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    $response = $request->send();`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    echo $response->getBody();`<br>
    				&nbsp;&nbsp;`}`<br>
    				&nbsp;&nbsp;`catch (HttpException $ex)`<br>
    				&nbsp;&nbsp;`{`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    echo $ex;`<br>
    				&nbsp;&nbsp;`}`<br>
    				&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;`?>`
			  </p>
            </div>
          </div>
          <div role="tabpanel" class="tab-pane" id="python">
            <div class="design-process-content">
              <p>
    				&nbsp;&nbsp;`########### Python 2.7 #############`<br>
    				&nbsp;&nbsp;`import httplib, urllib, base64`<br>
    				&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;`headers = {`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    # Request headers`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    '<headerName1>': '{headerValue1}',`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    '<headerName2>': '{headerValue2}',`<br>
    				&nbsp;&nbsp;`}`<br>
    				&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;`params = urllib.urlencode({`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    # Request parameters`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    'parameterName1': '{parameterValue1}',`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    'parameterName2': '{parameterValue2}',`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    'parameterName3': '{parameterValue3}',`<br>
    				&nbsp;&nbsp;`})`<br>
    				&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;`try:`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    conn = httplib.HTTPSConnection('<sandboxId>.temenos.cloud')`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    conn.request("GET", "<required_url_without_sandboxId>?%s" % params, "{body}", headers)`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    response = conn.getresponse()`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    data = response.read()`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    print(data)`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    conn.close()`<br>
    				&nbsp;&nbsp;`except Exception as e:`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    print("[Errno {0}] {1}".format(e.errno, e.strerror))`<br>
    				&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;`####################################`<br>
    				&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;`########### Python 3.2 #############`<br>
    				&nbsp;&nbsp;`import http.client, urllib.request, urllib.parse, urllib.error, base64`<br>
    				&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;`headers = {`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    # Request headers`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    '<headerName1>': '{headerValue1}',`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    '<headerName2>': '{headerValue2}',`<br>
    				&nbsp;&nbsp;`}`<br>
    				&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;`params = urllib.parse.urlencode({`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    # Request parameters`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    'parameterName1': '{parameterValue1}',`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    'parameterName2': '{parameterValue2}',`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    'parameterName3': '{parameterValue3}',`<br>
    				&nbsp;&nbsp;`})`<br>
    				&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;`try:`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    conn = http.client.HTTPSConnection('<sandboxId>.temenos.cloud')`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    conn.request("GET", "<required_url_without_sandboxId>?%s" % params, "{body}", headers)`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    response = conn.getresponse()`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    data = response.read()`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    print(data)`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    conn.close()`<br>
    				&nbsp;&nbsp;`except Exception as e:`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    print("[Errno {0}] {1}".format(e.errno, e.strerror))`<br>
    				&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;`####################################`
			  </p>
            </div>
          </div>
          <div role="tabpanel" class="tab-pane" id="ruby">
            <div class="design-process-content">
              <p>
    				&nbsp;&nbsp;`require 'net/http' `<br>
    				&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;`uri = URI('<required_url>')`<br>
    				&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;`query = URI.encode_www_form({`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    # Request parameters`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    'parameterName1' => '{parameterValue1}',`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    'parameterName2' => '{parameterValue2}',`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    'parameterName3' => '{parameterValue3}'`<br>
    				&nbsp;&nbsp;`})`<br>
    				&nbsp;&nbsp;`if query.length > 0`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`  if uri.query && uri.query.length > 0`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`    uri.query += '&' + query`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`  else`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`    uri.query = query`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`  end`<br>
    				&nbsp;&nbsp;`end`<br>
    				&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;`request = Net::HTTP::Get.new(uri.request_uri)`<br>
    				&nbsp;&nbsp;`# Request headers`<br>
    				&nbsp;&nbsp;`request['<headerName1>'] = '{headerValue1}'`<br>
    				&nbsp;&nbsp;`request['<headerName2>'] = '{headerValue2}'`<br>
    				&nbsp;&nbsp;`# Request body`<br>
    				&nbsp;&nbsp;`request.body = "{body}"`<br>
    				&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;`response = Net::HTTP.start(uri.host, uri.port, :use_ssl => uri.scheme == 'https') do |http|`<br>
    				&nbsp;&nbsp;&nbsp;&nbsp;`    http.request(request)`<br>
    				&nbsp;&nbsp;`end`<br>
    				&nbsp;&nbsp; <br>
    				&nbsp;&nbsp;`puts response.body`
			  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
      </div>
</div>
</div>
