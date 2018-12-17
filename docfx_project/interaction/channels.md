---
title: Temenos Channels API Listing
description: List of available API of Temenos Channels Solution
author: cbenea
category: Banking
tags: Temenos sandbox, channels
date: 11/10/2017 4:39:47 PM  
reviewer: jfiricel
visibility: public
---

# List of Channels API 

|Category |API Name	|Description	|
|---		|---		|---			|
|**Accounts**|enqTcAccounts	|	Gets the online actual balance and real balance for accounts. The Account Id (e.g. 77607) or the Arrangement Id (e.g. AA16082HV490) are valid inputs into the search selection, alternatively not entering anything into the selection fields will return a list of all active accounts.|
||enqTcNofAccounts|	Gets product condition information for AA accounts, lending and deposit products. The information retrieved relates to the following: Details about when product was opened – date and balance;	Limit information – available and approved overdraft, limit expiry date, shared limit accounts;	Tax Rate; Interest Details – interest type, interest rate(s); Payment Details – payment frequency, payment type and method, payment schedule; Balance information – available funds, outstanding overdraft limit"|
|**Adverts**|enqTcNofCrOpportunitys |	Gets the list of opportunities available for customers and the related details of opportunities/campaigns that have been specifically targeted towards the needs of the customers.|
||verCrOpportunity_Tcs |	A campaign generator to determine which product specific opportunities/adverts to display to a customer (external user). The service allows users to create inbound and outbound campaigns for various product types towards target customers.|
|**Alerts**|enqTcEbAlertRequests |	Gets the list of alerts request and their details for a given account/customer.|
||enqTcNofGetEligibleEvents |	Service allows subscription to an alert as well as being able to unsubscribe from an alert.|
||verEbAlertRequest_Tcs |	Used to create, update and retrieve details of an alert request.|
||verDeCustomerPreferences_Tcs |	Used to record the customer’s preferred option for receiving notifications or alerts from the Bank. Typical examples may include email, sms, secure message.|
|**Arrangements**|enqTcAaProducts |	Gets details of all products that the customer satisfies the eligibility rules for. Each product will have eligibility rules that the customer will need to satisfy in order to qualify to take the product out. Where the customer satisfies the criteria for the product then all product information will be displayed.|
||enqTcPeriodicInterests |	Gets the periodic interest rates for each currency for any time period as defined by the user. These time periods can be defined either in months e.g. 3 months or in days e.g. 7 days.|
||verAaPrdCatInterest_Tcs |	This service reads Interest Condition at Product level for a dated arrangement. A product defined and processed in AA can have multiple interest properties defined (e.g. principal interest, penalty interest, commission, etc.).The number of interest properties is determined by the users defining the products.|
||verAaArrangementActivity_Tcs |	Used to create, update and retrieve details of an Arrangement Activity.|
|**Beneficiary**|enqTcNofBeneficiarys |	Gets the list of beneficiaries(payees) and their details for a given customer.|
|| verBeneficiary_Tcs |	The service allows a user to create and maintain Beneficiary information for automated payment services which can then be defaulted into funds transfer and standing order, thus avoiding having to enter the same information each time a payment is created. This information will be used by the payment order application to enable a financial institution to make a payment or series of payments to a third party. Two types of Beneficiaries can be entered: Customer defined and Bank defined. The customer provides relevant debit i.e. transaction type, customer number and credit details i.e. beneficiary account number and sort code.|
||enqTcBeneficiaryUtilitys |	Gets the list of utility beneficiaries for a given customer. The customer needs to be passed in as a valid Customer Id. Not providing a Customer Id will return an error message.|
|**Cards**|enqTcCardIssues |	Gets the details of the cards owned by a given account.|
||verCardIssue_Tcs |	Used to create, update and retrieve details of a card.|
|**Cheques**|enqTcChequeRegisterSupplements |	The Cheque register holds details of the cheque holdings of all accounts on the system. The service gets details from the cheque register of cheques that have been issued, stopped, cleared and cancelled.|
|| verPaymentStop_Tcs |	This service is used to record a stopped cheque for an account.|
|**Common**|enqTcNofUserRights |	Gets the licensed products availability and TC Operation values from AA user rights property of Internet Services Line. Results are only displayed for the External User logged in as.|
||enqTcCurrencys |	Gets details of each individual currency set up in the system. The following details are retrieved: the currency name, code and market, together with information for the buy and sell rates.|
||enqTcDates |	A date record exists for each company. This service gets the Company Id and contains the run dates for the previous, current and the next working day.|
||enqTcEbLookups |	Gets the EB Lookup records based on the specific look up type.|
||enqTcCountrys |	Retrieves Country information set up in the system – the Country Code e.g. GB and the Country name e.g. Great Britain|
|**Customer Profile**|enqTcCustomers |	Gets the contact details of the Customer who logged in. In addition, the following profile information is also returned: date of birth, Customer status and description, Customer Id.|
||enqTcNofProductsBalances |	Gets the total sum of balances for the available products of the customer with respect to AA product lines like Accounts, Deposits & Loans.|
||verCustomer_Tcs |	This service is used to create a New Customer Profile, make amendments or update, validate and authorise the same.|
|**Deposits**|enqTcAaDeposits |	This Service returns the List of deposits that have been opened. The Id needs to be passed in as a valid T24 Arrangement Id. Not providing a filter Id will return all the deposits from T24.The application will be secured via the standard mechanisms of the Temenos Core Banking System.|
||enqTcNofAaDeposits |	This Service returns an arrangement overview of the deposit for the given Arrangement Id. The Arrangement Id needs to be passed in as a valid T24 Arrangement Id. By not providing a valid Arrangement Id, the system will return an error message.|
|**Direct Debits**|enqTcDirectDebitss |	This service returns the list of direct debits maintained by external customer. Valid account number needs to be passed in as Id. Not providing a filter Id will return all the direct debits from T24.|
||verDdDdi_Tcs |	This service is used to cancel or amend an existing direct debit or capture a new direct debit mandate where information such as Customer Bank sort code, Customer Account name, Account number, clearing reference, mandate status etc. is populated into the form. The Claim can be "Outward" i.e. Claim is sent to the Customer's Bank or Inward Claim i.e. another Bank submit their claim. Currently the Outward claim processing is supported through the Direct Debit module & the Inward claim has to be handled through a local interface. The account number is entered into the input field and this will either retrieve an existing record or create a new record for a new direct debit.|
|**Images**|enqTcImDocumentImages |	Gets all uploaded images across all applications. Users can search using the ImageReference that was used to upload the image. Examples of references vary from customer or account number to a funds transfer reference.|
||verImDocumentImage_Tcs |	This service is used to define and store individual images (create / remove / amend the Im document image record). It allows great flexibility in defining images as there is no restriction on the type of application or field to which the stored image is related.|
||verImDocumentUpload_Tcs |	This service allows a user to take a chosen image or document (i.e. signature, photo etc.) and upload it so that it can be displayed with a specific application such as CUSTOMER, ACCOUNT etc. which the system will then store.|
|**Loans**|enqTcAaLoans |	Gets the list of Loans and its details.|
||enqTcNofAaLoanOverviews |	Gets the loan arrangement data using the following 4 mandatory fields: the Arrangement Id of the loan, the DateFrom, the DateTo and the Balance Type used to get the overdue details (e.g. TOTALDUE).|
||enqTcNofAaPaymentSchedules |	Gets the list of scheduled payments of a loan The  arrangement id of the loan is mandatory.|
|**Login**|enqTcEbExternalUsers |	This Service returns the details of the external user logged in. There is no filter needed to be passed in as it is defined within the API to take the logged in external user using common variable in T24.|
||verEbExternalUser_Tcs |	This service allows users to create a new record or update an existing record for access to internet services. The External User Id is required to be passed along with user status which is mandatory input.|
|**Messages**|enqTcEbSecureMessage |	Gets the list of messages from the Bank to the Customer. Customer number needs to be passed in as a valid Customer Id. Not providing a filter Id will return all the messages from the system.|
||enqTcEbSecureMessageRead |	This service returns the list of messages sent from external user. Customer number needs to be passed in as a valid Customer Id. Not providing a filter Id will return all the messages from the system.|
||verEbSecureMessage_Tcs |	This service is used to compose a new message, validate and authorise a record.|
||verEbSecureMessage_TcReply |	This service is used to reply to a received message, validate and authorise a record.|
|**Payment Order**|enqTcDeBics |	Gets details such as bank, branch, city, country, name of national code for Bank Identifier Codes.|
||enqTcInIbanPluss |	Gets details on the IBAN Id for a financial institution.|
||enqTcInIbanStructures |	Gets details of the IBAN Country Code.|
||enqTcPaymentOrderCountryRuless |	Gets the respective country rules for payment order. The country code can be input into the Id selection field to retrieve the specific country rules for payment order, alternatively no input will return all country rules.|
||enqTcPaymentOrders |	Gets the list of payment orders that have been entered into the system.|
||enqTcPaymentOrderProducts |	Gets details on Payment Order products.|
||enqTcPaymentPurposeCodes |	Gets list of Transaction Codes and descriptions for the purpose of the payment transaction.|
||verPaymentOrder_Tcs |	This service captures payment orders from their respective source and puts the order information into a structured and recognised format based on ISO 20022 (XML) and delivers the orders to a payment engine for onward processing.|
|**Standing Order**|enqTcStandingOrders |	This service returns the list of standing orders for an external customer. Customer number needs to be passed in as a valid customer Id. Not providing a filter Id will return all the standing orders.|
||verStandingOrder_Tc |	This service is used to compose a new, validate, authorise, amend and delete STO record.|
|**Transaction List**|enqTcNofTxnsLists |	This Service returns the details of the transactions list for any particular account or recent transactions. The service is used to list completed transactions / pending transactions and search transactions. There are various optional filters and a mandatory filter being ListType for the API.|
||enqTcNofTxnsOverviews |	Gets a statement or transaction overview for a customer’s account.|
