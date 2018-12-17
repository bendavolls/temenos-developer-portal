---
title: Start with Prospect Iris
description: Start with Prospect IRIS & Integration Events.
author: jfiricel
date: 12/7/2017 9:02:34 PM  
reviewer: mjangid
---
# Start with Prospect Iris

## Introduction
Prospect-IRIS is sample project for develop banking APIs. This project using IRIS and works with Temenos T24.

## Prerequisite
* Github Account – visit [http://www.github.com](https://github.com/) to create an account
* Temenos MarketPlace products
	* Member SDKs and Design Tools
* Knowledge of Web Technology
* Git SCM Tools – Download from [https://git-scm.com/download/](https://git-scm.com/download/)

## Github repository
In order to get the Prospect-iris into your development environment please follow steps mentioned [here](http://developer.temenos.com/interaction/30-minutes.html).

## Create Flow and Events in T24
In order To create a Flow in T24 please follow this 30 Minutes guide available [here](http://developer.temenos.com/integration/30-minutes.html).

## GET Published Flow
Temenos Sandbox contains necessary API to get the published flow in POSTMAN. API /enqIntegrationFlowCatalogs() will fetch all the available flow in T24 but we want to GET the published flow according to FlowName.

Example: Below GET request will fetch the published Flow where FlowName=MarketPlaceDemo-FTMarketPlaceDemo

	*http://127.0.0.1:8080/MarketPlaceDemo-iris/MarketPlaceDemo.svc/GB0010001/enqIntegrationFlowCatalogs()?$filter=FlowName eq ‘MarketPlaceDemo-FTMarketPlaceDemo’*

This will also give you the name of the fields on which events will generate

e.g.

	<d:enqIntegrationFlowCatalog_FieldDefnMvGroup m:type=”Bag(MarketPlaceDemo-modelsModel.enqIntegrationFlowCatalog_FieldDefnMvGroup)”>
	<d:element>
	<d:FieldDefn>AMOUNT.CREDITED</d:FieldDefn>
	</d:element>
	<d:element>
	<d:FieldDefn>AMOUNT.DEBITED</d:FieldDefn>
	</d:element>
	<d:element>
	<d:FieldDefn>BASE.CURRENCY</d:FieldDefn>
	</d:element>
	<d:element>
	<d:FieldDefn>BC.BANK.SORT.CODE</d:FieldDefn>
	</d:element>
	<d:element>
	<d:FieldDefn>BEN.ACCT.NO</d:FieldDefn>
	</d:element>
	<d:element>
	<d:FieldDefn>BEN.ACCT.NAME</d:FieldDefn>
	</d:element>
	<d:element>
	<d:FieldDefn>BEN.BANK</d:FieldDefn>
	</d:element>
	<d:element>
	<d:FieldDefn>CREDIT.ACCT.NO</d:FieldDefn>
	</d:element>
	<d:element>
	<d:FieldDefn>CREDIT.AMOUNT</d:FieldDefn>
	</d:element>
	<d:element>
	<d:FieldDefn>CREDIT.CURRENCY</d:FieldDefn>
	</d:element>
	<d:element>
	<d:FieldDefn>DEBIT.ACCT.NO</d:FieldDefn>
	</d:element>
	<d:element>
	<d:FieldDefn>DEBIT.AMOUNT</d:FieldDefn>
	</d:element>
	<d:element>
	<d:FieldDefn>FT1</d:FieldDefn>
	</d:element>
	<d:element>
	<d:FieldDefn>REF.NO</d:FieldDefn>
	</d:element>
	<d:element>
	<d:FieldDefn>TREASURY.RATE</d:FieldDefn>
	</d:element>
	</d:enqIntegrationFlowCatalog_FieldDefnMvGroup>

## Generate the Event
To generate the event you have to do some transaction in T24, use the same T24 Version or T24 Application you have created in above steps.

Follow [this guide](http://developer.temenos.com/banking/create-a-funds-transfer.html) to Initiate a transaction.

## GET Generated Event
API /enqIntegrationEventss() will return you all the processed and unprocessed events from events queue.

Example: Below URI will return all available events data where EventType=MarketPlaceDemo-FTMarketPlaceDemo

	http://127.0.0.1:8080/MarketPlaceDemo-iris/MarketPlaceDemo.svc/GB0010001/enqIntegrationEventss()?$filter=EventType eq ‘MarketPlaceDemo-FTMarketPlaceDemo’

## Get Generated Events in Java Program
Here we are using Prospect-IRIS project, all source and example available in the project, for this example we are using [unirest client library](http://unirest.io/java.html) feel free change something you prefer.

maven dependency for this class

	<dependency>
	<groupId>com.mashape.unirest</groupId>
	<artifactId>unirest-java</artifactId>
	<version>1.3.0</version>
	</dependency>


Configuration class
	
	public class Configuration {
	public static String DATA_SERVICE_URL = “http://127.0.0.1:8080/MarketPlaceDemo-iris/MarketPlaceDemo.svc/GB0010001/”;
	
	public static String INPUTTER_USER_NAME = “USER001”;
	public static String INPUTTER_PASSWORD = “123456”;
	
	public static String AUTHORISER_USER_NAME = “USER002”;
	public static String AUTHORISER_PASSWORD = “123456”;
	}
	
Print Integration event on the console
	
	public void printIntegrationEvent() throws UnirestException, IOException {
	String url = Configuration.DATA_SERVICE_URL + “enqIntegrationEventss()?$filter=substringof(‘MarketPlace’, EventType)”;
	Unirest.setDefaultHeader(“Accept”, “application/atom+xml”);
	HttpResponse<InputStream> response = Unirest.get(url).basicAuth(Configuration.INPUTTER_USER_NAME,
	Configuration.INPUTTER_PASSWORD).asBinary();
	System.out.println(IOUtils.toString(response.getBody()));
	}

Note: You need to add import from respective classes, this sample is available as a Integration Test in GitHub project.

## GET Generated events since …
You can specify the filter to fetch the events

	// set the date you want to fetch the events since
	Date sd = new SimpleDateFormat(“yyyy-MM-dd HH:mm:ss.SSS”).parse(“2016-03-23 20:38:32.522”);
	long time = sd.getTime();
	// format the time stamp so T24 understand
	String t24Date = String.valueOf(time).substring(0, 10) + “.” + String.valueOf(time).substring(10);
	
	String filter = “?$filter=substringof(‘MarketPlace’, EventType)&$filter=CreationTime gt ‘” + t24Date + “‘”;
	String url = Configuration.DATA_SERVICE_URL + resourceName + filter;
	Unirest.setDefaultHeader(“Accept”, “application/atom+xml”);
	HttpResponse<InputStream> response = Unirest.get(url)
	.basicAuth(Configuration.INPUTTER_USER_NAME, Configuration.INPUTTER_PASSWORD).asBinary();
	System.out.println(IOUtils.toString(response.getBody()));

In this example you’ll get all the events after **23-March-2016 20:30:32**

## GET generated events for one hour Time interval
You can specify the time range to fetch the events
	
	// set the date you want to fetch the events since – keep one hour gap
	Date sd1 = new SimpleDateFormat(“yyyy-MM-dd HH:mm:ss.SSS”).parse(“2016-03-23 19:38:32.522”);
	Date sd2 = new SimpleDateFormat(“yyyy-MM-dd HH:mm:ss.SSS”).parse(“2016-03-23 20:38:32.522”);
	long time1 = sd1.getTime();
	long time2 = sd2.getTime();
	
	// format the time stamp so T24 understand
	String t24Date1 = String.valueOf(time1).substring(0, 10) + “.” + String.valueOf(time1).substring(10);
	String t24Date2 = String.valueOf(time2).substring(0, 10) + “.” + String.valueOf(time2).substring(10);
	
	//create filter string
	String filter = “?$filter=substringof(‘MarketPlace’, EventType)&$filter=CreationTime gt ‘” + t24Date1
	+ “‘ and CreationTime lt ‘” + t24Date2 + “‘”;
	
	String url = Configuration.DATA_SERVICE_URL + resourceName + filter;
	Unirest.setDefaultHeader(“Accept”, “application/atom+xml”);
	HttpResponse<InputStream> response = Unirest.get(url)
	.basicAuth(Configuration.INPUTTER_USER_NAME, Configuration.INPUTTER_PASSWORD).asBinary();
	System.out.println(IOUtils.toString(response.getBody()));

You get all the events in between the **2016-03-23 19:38:32.522** and **2016-03-23 20:38:32.522**