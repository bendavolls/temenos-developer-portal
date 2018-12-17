---
title: Connect Your App with Temenos
description: How to connect an app; Information about MarketPlace Temenos Sandbox, What does it contains, what are the supported interface & how to access.
author: cbenea
category: Application
tags: app connect
date: 5/11/2018 2:10:06 PM 
reviewer: bdavolls
---

## Your integration project starts here

As a MarketPlace Member, you have access to the MarketPlace Provider Sandbox, to help build, test and demonstrate your product's integration to the Temenos T24 backend (our Customers).<br>
The MarketPlace Provider Sandbox offers a live instance of T24, complete with model bank data, running on a secure virtual machine. Connect your product to show off its unique features and benefits in a live demonstration, right from your Product Page on the Temenos MarketPlace. 

# Welcome email

New MarketPlace Providers are sent a welcome email, containing links to the following MarketPlace Provider Support tools/services:

* Provider Tools available via MarketPlace

* The MarketPlace Provider Sandbox (with Sign-in details)

* Retail Internet Banking Application installation guide

* The API Portal to call and test the current public Temenos APIs

* The Support Forum, where you can read and post technical questions

> [!Note]
> If you have not yet received your welcome email or need it to be re-sent, please <a href="mailto:marketplace@temenos.com" target="_top">let us know</a>.


# How can I interact with the Sandbox? #
## Invoke APIs
The sandbox exposes a series of REST APIs that can be invoked in order to create, read and/or update records in it. Some of the available functionalities of these APIs are:

- retrieving account details like available balance, transaction history, etc.
- creating Payments and retrieving list of payments
- creating fund transfer payments and SEPA payments, retrieving details of a fund transfer, etc.
Please check the [API documentation](../apis/index.md) section for more details.

## Configure T24
The sandbox is also exposing an user interface, a BrowserWeb URL, that is allowing you to directly access the T24 area and to ***create***, ***read*** and ***update*** the records you desire in the MarketPlace Provider Sandbox. 

The exposed APIs and the BrowserWeb should help you to fulfil most end-user demo requirements.  

> [!Warning]
> The MarketPlace Provider Sandbox is a shared resource, so we are unable to guarantee that your data will be retained in the state you left it in. We also recommend avoiding the use of confidential or personal data when Creating/Updating records. 

> [!Note]
>Please find below a list of actions that are possible to be done into the T24 BrowserWeb interface:
>
>* [<ins>Login to BrowserWeb</ins>](login-t24.md)
>
>* [<ins>Create Customer</ins>](customer.md)
>
>* [<ins>Create Accounts</ins>](accounts.md)
>
>* [<ins>Cash Deposits</ins>](teller.md)
>
>* [<ins>Create external user</ins>](external-user.md) that will allow you to connect to the Internet Banking application.
>
>* [<ins>Login to Internet Banking application</ins>](login-retail.md)
>
