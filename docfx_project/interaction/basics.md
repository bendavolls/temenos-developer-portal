#	Banking API
_Temenos provides two types of API products_

*	**Core Banking API**
*	**Internet & Mobile Banking API**

##	Core Banking
These APIs are for bank employees, where they can:

*	View and create **USERS**
*	View and create **ACCOUNT**
*	View and create **CUSTOMER**
*	**Funds Transfer**
*	**Cash Deposit** & **Withdrawal**
*	And many banking day to day activities

##	Internet & Mobile Banking
These APIs are for bank customers where they can:

*	See their account balance
*	Transfer the funds from one account to another account
*	Domestic transfer
*	International Funds Transfer 
*	Pay a bill
*	Direct debit
*	Create a standing order


#	API Interface
The ***Temenos Sandbox*** provides a default data service where you can try all of the above operations

##	Retail Banking

Prospect-iris is the default open source project, that contains most of the basic banking APIs. Customize this project according to your needs or deploy directly to your sandbox to access the APIs

The default URL of this service is
>
> `http(s)//127.0.0.1/Prospect-iris/Prospect.svc/GB0010001`
>

***Temenos APIs*** support BASIC authentication and these details are already available inside your products.


##	Channels

This product already deployed into your sandbox and you need to follow the getting started guide to work on this

The default URL of this service is
>
> `http(s)//127.0.0.1/Channels-iris/Channels.svc/GB0010001`
>


#	API Basics
Before starting the integration here is some basic information that is required to develop and integrate your solution with ***Temenos Digital Banking Suites***

##	Request Headers
These headers are sent by the client in a HTTP protocol transaction. All headers are RFC822 format headers.

###	Authentication
***Temenos API*** supports BASIC authentication only where you need to provide the Username & Password of the data service.

e.g. `[{"key":"Authorization","value":"Basic Uk9MRkdFUkxJTkdUQzoxMjM0NTY="}]`

###	Accept
This header is for representation schemes (Content-Type meta information values) which will be accepted in the response to this request. ***Temenos API*** supports only following Accept headers

*   application/atom+xml
e.g. `[{"key":"Accept","value":"application/atom+xml"}]`

*   application/hal+json
e.g. `[{"key":"Accept","value":"application/hal+json"}]`

###	If-Match
The If-Match request-header field is used with a method to make it conditional. A client that has one or more entities previously obtained from the resource can verify whether that entity is modified or not. If the entity has been modified, then it'll return a etag mismatch error. If not, it will return a success message. 

e.g. `[{"key":"If-Match","value":"Uk9MRkdFUkxJTkdUQzoxMjM0NTY"}]`

##  Response Headers
These headers are sent by the server with additional information in a HTTP protocol transaction. All headers are RFC822 format headers.

###	Content-Type
The Content-Type header field indicates the media type of the entity-body sent to the recipient.  ***Temenos API*** supports only the following Accept headers

*   application/atom+xml
    e.g. `[{"key":"Content-Type","value":"application/atom+xml"}]`

*   application/hal+json
    e.g. `[{"key":"Content-Type","value":"application/hal+json"}]`

###	ETag
The ETag HTTP response header is an identifier for a specific version of a resource. This header can also be used to check whether a resource has been modified. If a resource has been modified, the etag value will change.

e.g. `[{"key":"ETag","value":"<<etag value>>"}]`

##	Response Body
This is the response received from the server, which could be in either json or XML format according to the Accept request header. 

##	Request Body
This is the request body sent by the client or user agent to server over HTTP transaction.

##	Status Code
For each HTTP transaction, the server will return a status response of either success or failure. Here are the status codes ***Temenos APIs*** can return.

| Code	|	Message						|	Description		|
|---	|---							|---				|
| 200	|	**OK**						|	SUCCESS			|
| 201	|	**CREATED**					|	Record created	|
| 400	|	**Bad Input** 				|	Wrong data or invalid body contents	|
| 401	|	**Unauthorised**			|	Unable to authorise user	|
| 404	|	**Resource Not Found**		|	Requested resource not available in service	|
| 405	|	**Method Not Found**		|	Incorrect HTTP method	|
| 412	|	**Precondition Failed**		|	Some of the condition not met the criteria	|
| 415	|	**Unsupported Media Type**	|	content-type is wrong or not supported	|


# Next Steps

Learn how to access these APIs using any standard POSTMAN ReST client or user agents with our [3 minutes guide](3-minutes.md).
