---
title: Customer Retail Banking
description: Customer
author: cbenea
category: Banking
tags: Banking, Retail, Customer
date: 1/26/2018 4:19:40 PM 
reviewer: jfiricel
---

# CUSTOMER

 * Customer record holds all the basic information about a customer. 
* Ideally only one Customer record should exist for each customer.  This can be created whenever a name, address and other such essential information is obtained and is not dependent on the existence of an account. 
*  In T24, creating a Customer record need not to wait till we are ready to open an account or till we propose to have a business transaction. For example, a Customer record can be set up even when a Bank is considering having any relationship with. Later, when it decides to enter into any contractual obligation, like Foreign exchange or Money Market dealings, it can use the Customer record already created. If at any later stage, the Bank proposed to open a current account, it need not create another record for the Customer. It can as well use information already stored.
* Once a customer record is authorised, it is not possible to reverse the record. We can however amend any details as and when needed

To **create** a customer:

 - Login to T24 BrowserWeb
 - Under User Menu go to Customer > Individual Customer 
 - Once open, the new screen will automatically generated a customer Id
 - To see which are the minimum fields required, click validate button > You will get an 'Input missing' warning with following fields:
  - Mnemonic
  - Short Name.1	
  - Full Name.1
  - Sector
  - Gender

> [!Warning]
> 'Date of Birth' field is not mandatory, **but** if you wish to assign later, for example, a current account, as long as the age is not defined, the system will consider that the customer is not eligible (*minor age*) and will not allow the account creation.

 - Fill all mandatory fields and press commit

To **authorise** the record:

 - Log out and log in with a different user in order to authorise the record
 - Go to User menu > Customer > Authorise/ Delete Customer > Find the customer created > Click Authorise button
  - Customer is now registered and appears in Live Files records
