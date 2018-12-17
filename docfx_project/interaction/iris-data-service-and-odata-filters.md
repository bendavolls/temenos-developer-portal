---
title: IRIS Data Service and OData Filters
description: IRIS Data Service and OData Filters.
author: cbenea
date: 12/15/2017 5:38:12 PM   
reviewer: mjangid
---

This user guide is the basic introduction of OData filters supported by IRIS.

# IRIS Data Service and OData Filters

## What is OData?

OData is a data access protocol that defines the best practice for building and consuming RESTful APIs. For detailed information please visit [http://www.odata.org/](http://www.odata.org/)

## What are the OData Filters?

IRIS Data service supports OData. To query data from IRIS data service you need query options. These query options are called filters.

We are going to discuss all available query options in IRIS Data Service and other options for data access. Assuming you are running your data service on localhost or if you are Temenos MarketPlace member you can get this information from Temenos Sandbox product.

## IRIS Data Service URL

The default URL of IRIS Data service is:

http://*your url address*/DataServiceName-iris/DataServiceName.svc/GB0010001/enqCustomerInfos()?$filter=CusNo eq ‘66052’
|——————————–Service Root——————————–|–Service Document–|–Resource Name–|–Filter–|

> [!Note]
>  GB0010001 is company name and T24 specific

## Requesting Data
•	Request $metadata
 - $metadata documents describe the Entity Data Model (EDM) for a given service, which is the underlying abstract data model used by OData services to formalize the description of the resources it exposes.
 - URI for $metadata:
http://127.0.0.1:8080/MarketPlaceDemo-iris/MarketPlaceDemo.svc/GB0010001/$metadata

•	Request Service Document
 - Service document is the main entry point of IRIS Data Service and list all available resources in the data service. A user agent can find all resources from the Service Document
 - URI for Service document:
http://127.0.0.1:8080/MarketPlaceDemo-iris/MarketPlaceDemo.svc/GB0010001

•	Request collection
 - URI for collection in enqCustomerInfo resource
http://127.0.0.1:8080/MarketPlaceDemo-iris/MarketPlaceDemo.svc/GB0010001/enqCustomerInfos()

•	Request individual item
 - URI for an individual item in enqCustomerInfos resource
http://127.0.0.1:8080/MarketPlaceDemo-iris/MarketPlaceDemo.svc/GB0010001/enqCustomerInfos(‘100285’)

## Querying Data Using System Query Options
 - System query options are prefixed with $ character, these filter options are used to control the amount and order of the data. IRIS Data Service supports following System query options – all the filters self-explanatory according to name.

### $filter system query option

| Filter        | Name           | Example           |
| ------------- |:-------------:|: -----|
|eq  |Equal|/GB0010001/enqCustomerInfos()?$filter=CusNo eq ‘66052’ |
|ne  |Not Equa|/GB0010001/enqCustomerInfos()?$filter=CusNo ne ‘66052’ |
|le  |Less Then|/GB0010001/enqCustomerInfos()?$filter=Sector le ‘1000’ |
|gt  |Greater Then|/GB0010001/enqCustomerInfos()?$filter=Sector gt ‘2000’ |
|ge  |Greater then and Equal|/GB0010001/enqCustomerInfos()?$filter=Sector ge ‘2000’ |
|le  |Less then and Equal|/GB0010001/enqCustomerInfos()?$filter=Sector le ‘1000’ |
|or  |Logical or|/GB0010001/enqCustomerInfos()?$filter=Sector eq ‘1000’ or Sector eq ‘1000’ |
|and  |and|/GB0010001/enqCustomerInfos()?$filter=Sector eq ‘1000’ and AccountOfficer eq ‘1’ |
 
### $orderby system query option
This filter works only on collection and return the data either ascending or descending on the field you are querying

Examples:

•	/GB0010001/enqCustomerInfos()?$orderby=Sector

•	/GB0010001/enqCustomerInfos()?$orderby=Sector asc

•	/GB0010001/enqCustomerInfos()?$orderby=Sector desc

### $select system query option
This filter option will bring up only selected field and will work on Item and Collections

Example:

•	/GB0010001/enqCustomerInfos()?$select=CusNo

•	/GB0010001/enqCustomerInfos()?$select=CusNo,Mnem

•	/GB0010001/enqCustomerInfos(‘66052’)?$select=CusNo,Mnem

### $top system query option
This option will show top n items and works only on Collections

Example:

•	/GB0010001/enqCustomerInfos()?$top=5

•	/GB0010001/enqCustomerInfos()?$top=5&$select=CusNo,Mnem

•	/GB0010001/enqCustomerInfos()?$top=5&$select=CusNo,Mnem&$orderby=CusNo desc

### $skip system query option
This option will skip the n number of items and works only on Collections

Example:

•	/GB0010001/enqCustomerInfos()?$skip=1

•	/GB0010001/enqCustomerInfos()?$skip=5&$select=CusNo,Mnem

•	/GB0010001/enqCustomerInfos()?$skip=5&$select=CusNo,Mnem&$orderby=CusNo desc

### $skip & $top together

$skip & $top filters are very useful together when you want to pagination.

Example: Suppose you want to display only 10 items in a page:

Page-1

/GB0010001/enqCustomerInfos()?$top=10 OR /GB0010001/enqCustomerInfos()?$skip=0&$top=10

Page-2

/GB0010001/enqCustomerInfos()?$skip=10&$top=10

Page-3

/GB0010001/enqCustomerInfos()?$skip=20&$top=10
 




