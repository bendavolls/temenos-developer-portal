---
title: Create Customer
description: Create Customer in T24 BrowserWeb
author: jfiricel
category: Banking
tags: Banking, Retail, Customer
date: 5/17/2018 11:45:20 AM  
reviewer: bdavolls
---

#Customer

A Customer record holds all the basic information about a customer. Ideally only one Customer record should exist for each bank customer.

To **create** a customer record:

 - Login to T24 BrowserWeb
 - Under **User Menu** go to **Customer** > **Individual Customer** 
 - Once open, the new screen will automatically generate a **Customer Id**
 - To see which are the minimum fields required, click **Validate** button > You will get an 'Input missing' warning with following fields shown:
  - Mnemonic
  - Short Name.1
  - Full Name.1
  - Sector
  - Gender

> [!Warning]
> 'Date of Birth' field is not mandatory, **but** if you wish to assign later, for example, a current account, as long as the age is not defined, the system will consider that the customer is not eligible (*minor age*) and will not allow the account creation.

 - Fill all mandatory fields and press **Commit** button

To authorise the record (you must authorise the record before it can be live into the database):

 - Log out and log in with a different user (the second user id you have received in your *Welcome* email)
 - Go to **User menu** > **Customer** > **Authorise/ Delete Customer** > Find the customer created > then Click  the **Authorise** button
  - The Customer is now registered and appears in Live Files records.
