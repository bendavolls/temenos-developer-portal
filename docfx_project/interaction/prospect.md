---
title: Prospect API Listing
description: List of Prospect API available
author: cbenea
category: interaction
tags: interaction, API
date: 11/2/2017 10:22:23 AM 
reviewer: jfiricel
visibility: public
---

# List of Prospect APIs 

|Category |API Name	|Description	|
|---		|---		|---			|
|**Customers**|verCustomer_Inputs	|	Create, update an individual customer with authorization and retrieve all details about it|
||verCustomer_Corps	|	Create, update a corporate customer with authorization and retrieve all details about it|
||verCustomers		|	Create, update a customer without authorization and retrieve all details about the customer|
||enqCustomerLists	|	Return some details about customers: CusNo, CusMne, ShortName, AccountOfficer, Nat, Res, TargetName, SectorName, CusType and CusBranchName|
||enqCustomerDetailss	|Return some details about customers: CusNo, CusMne, Name, Officer, Nat and Res
|**Accounts**|verAccount_CaOpens	|	Create current account with authorization and retrieve all details about it|
||verAccount_SbOpens	|	Create saving account with authorization and retrieve all details about it|
||verAccounts	|Create account without authorization and retrieve all details about it|
||enqPctAccounts	|Default list of accounts, return some details: AccId, AccMne, AccountOfficer, Product, Ccy, OnlineActualBal, LimitRef, PostingRestrict, IntBooking, ConditionGroup, Product|
||enqAccountDetailss	|Return some details about account: AccNo, Customer, Name, Product, Ccy and AccountOfficer|
||enqAcctBals	|Return balance details of account: AccNo, Name, LimitRef, Product, Ccy, WorkingBal, LedgerBal, ClearedBal, DateFrom, LockedAmt and UseableBal|
||enqCustAccts	|Return the list of all accounts of a specific customer and the fields displayed are AccNo, Mne, Limit, AcctType, Ccy, WorkingBal, LedgerBal, ClearedBal, DateFrom, LockedAmt|
||enqAccountStatements	|Return the statements of a specific account, like: AccNo, AccType, StatementDate, BookingDate, Reference, Description, ValueDate, Debit, Credit, ClosingBalance, TotalDebits, TotalCredits, ClosingBalance|
||enqAcctStmtHists	|Return the account balance in statement date, fields returned: AccNo, Ccy, StatementDate, CurrPeriodInd, OpeningBalance, ClosingBalance, NextDueDate|
|**Statement Entries**|enqStmtLastNTxnss	|Entries from last N transactions of a specific account: AccNo, ClosingBalance, BookingDate, Reference, Description, ValueDate, Debit, Credit, ClosingBalance|
||enqStmtEntTodays	|Entries from today business date for a specific account: BookingDate, Reference, Description, ValueDate, Amount|
||enqStmtEntLasts	|Entries since last statement date for a specific account: AccNo, Customer, Ccy, BookingDate, Reference, Description, ValueDate, Amount|
||enqStmtEntBooks	|Entries from booking date for a specific account: AccNo, Customer, Ccy, BookingDate, Reference, Description, ValueDate, Debit, Credit, ClosingBalance|
||enqAdminFtTxnTypeConditions	|List of transaction types: TxnTypeId, Description, CommTypes, ForwValueMax, BackValueMax, DrAdviceReqdYN, CrAdviceReqdYN, MsgCondId, NostroXferType, MsgType, HisReversal|
||enqPctStmtEntrys	|Default list of stmt entries, return some details: ID, Account, AmountLccy, Rate, AmountFccy, ValueDate, Reference|
|**Users**|verUsers|Create Internal User without authorization and retrieve all details about it|
||verEbExternalUsers	|Create External User without authorization and retrieve all details about it|
||verEbExternalUser_TcibNews	|Create External User with authorization and retrieve all details about it|
|**Cards**|verCardIssue_Inputs	|Create Card Issue with authorization and retrieve all details about it|
||verCardIssues	|Create Card Issue without authorization and retrieve all details about it|
|**Funds Transfer**|verFundsTransfers	|Create transaction without authorization and retrieve all details about it|
|**Teller**|verTeller_LcyCashins	|Cash deposit local - create transaction with authorization and retrieve details about it|
||verTeller_FcyCashins	|Cash deposit foreign - create transaction with authorization and retrieve details about it|
||verTeller_LcyCashwdls	|Cash withdrawal local (without Cheque) - create transaction with authorization and retrieve details about it|
||verTeller_LcyCashchqs	|Cash withdrawal local - create transaction with authorization and retrieve details about it|
||verTeller_FcyCashchqs	|Cash withdrawal foreign - create transaction with authorization and retrieve details about it|
|**Currency**|enqCurrencyLists	|List of all currencies and their description|
