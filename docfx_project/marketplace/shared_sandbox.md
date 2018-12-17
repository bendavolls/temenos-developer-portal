---
title: Shared Sandbox
description: Information about Shared Temenos Sandbox, What does it contains, what are the supported interface & how to access.
author: jfiricel
category: sandbox
tags: sandbox, api
date: 12/20/2017 8:27:31 PM       
reviewer: mjangid
---

# Shared Sandbox
A shared sandbox is a Temenos Sandbox that will be available for multiple providers. 

* The providers will have limited functionalities on this sandbox. 
* Each provider will have dedicated user credentials to login into ***T24 BrowserWeb***.
* Each provider will have to create the external user to connect to Retail (Internet & Mobile Banking applications).
* Each provider must be aware that the data can be easily lost in this sandbox.

* The providers can do **C**reate **R**ead **U**pdate & **D**elete the data from T24 either via ***API*** or ***BrowserWeb***.

* [Core Banking available APIs](http://developer.temenos.com/interaction/prospect.html) 
 can be easily accessed by using link address ***https:// {your sandbox address}/Prospect-iris/Prospect.svc/GB0010001/*** and the users and passwords that where communicated via email for accessing the T24 BrowserWeb. These APIs will give access to handle customers, accounts, external users, teller transactions.

* [Internet & Mobile Banking available APIs](http://developer.temenos.com/interaction/channels.html)
can be easily accessed by using link address: ***https:// {your sandbox address}/Channels-iris/Channels.svc/GB0010001/*** and the users and passwords that where communicated via email for accessing Retail. These APIs will provide internet services to the user agent application including *Direct Debits*, *Deposits*, *Cheques*, *Cards*, *Loans*, *Payment Orders*, *Standing Orders* and *Messages*.

* Most of the APIs are available in Prospect-IRIS, if any of the provider asks for another API then MarketPlace team will add new API in the package and provide the access.

## Useful information
* [Getting start guide](http://developer.temenos.com/quickstart/index.html)
* How to create an external user to connect to ***Retail*** (Internet & Mobile Banking applications):
	* [Create a new customer](http://developer.temenos.com/banking/retail/customer.html)
	* [Create accounts](http://developer.temenos.com/banking/retail/accounts.html)
	* [Effect a cash deposit](http://developer.temenos.com/banking/retail/teller.html)
	* [Effect a funds transfer](http://developer.temenos.com/banking/retail/fundstransfer.html)
	* [Assign external user](http://developer.temenos.com/banking/retail/users.html#external-users) 

