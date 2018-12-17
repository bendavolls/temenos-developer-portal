---
title: Temenos PSD2 API Listing
description: List of available APIs of Temenos PSD2 Solution
author: cbenea
category: API
tags: Temenos sandbox, PSD2, API
date: 5/10/2018 9:05:03 PM  
reviewer: jfiricel
visibility: public
---

# List of PSD2 APIs 

|Category |API Name	|Description	|
|---		|---		|---			|
|**Accounts**|<div style="word-break:break-all;">getAccountOverview</div>|	Gets the account details.|
|| <div style="word-break:break-all;">getAccountBalance</div>|	Gets the account balance.|
|| <div style="word-break:break-all;">getAccountStatus</div>|	Checks the account status and it will return yes when the account is active.|
|| <div style="word-break:break-all;">getAccountBalanceReport</div>|	Checks the account balance in order to confirm or not the availability of the requested amount value.|
|| <div style="word-break:break-all;">getTransactionHistory</div>|	Gets all the account transactions or it gets all the account transactions that happened in a certain period of time.|
|**Payments**|<div style="word-break:break-all;">createPaymentInitiation</div>|	Creates a new payment.|
|| <div style="word-break:break-all;">updatePaymentOrderSubmission</div>|	Updates the payment submission.|
|| <div style="word-break:break-all;">getPaymentOrderStatus</div>|	Gets the status  of a payment.|
|| <div style="word-break:break-all;">getPaymentOrderList</div>|	Gets all the payment orders or it gets all the payment orders that were done in a certain period of time.|
|| <div style="word-break:break-all;">getPaymentOrder</div>|	Gets the details of a payment order.|
|**Funds Transfer**|<div style="word-break:break-all;">createPayment</div>|	FT Initiation.|
|| <div style="word-break:break-all;">createSEPAPayment</div>|	FT SEPA Initiation.|
|| <div style="word-break:break-all;">updatePaymentTransfer</div>|	FT Submission.|
|| <div style="word-break:break-all;">updateSEPAPaymentTransfer</div>|	FT SEPA Submission.|
|| <div style="word-break:break-all;">getPaymentTransferList</div>|	Gets all the funds transfer or it gets all the funds transfer that were done in a certain period of time.|
|| <div style="word-break:break-all;">getPaymentTransferStatus</div>|	Gets the  status of the FT payment.|
|| <div style="word-break:break-all;">getPayment</div>|	Gets the details of FT payment.|
|| <div style="word-break:break-all;">getSEPAPayment</div>|	Gets the details of FT SEPA payment.|