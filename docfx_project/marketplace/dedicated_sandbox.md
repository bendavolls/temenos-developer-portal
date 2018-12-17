---
title: Dedicated Sandbox
description: Information about Dedicated Temenos Sandbox, What does it contains, what are the supported interface & how to access.
author: jfiricel
category: sandbox
tags: sandbox, api
date: 12/6/2017 6:21:17 PM  
reviewer: mjangid
---


# Dedicated Sandbox
A dedicated Sandbox is a Temenos Sandbox that will be available only for a single provider and where the provider can do following operations:

* Create design studio package and upload to T24 using GitLab
* Create new API package and upload to T24 using GitLab
* Deploying other localjars using Gitlab

Each provider will be able to access his dedicated sandbox by going to his MyApps page in MarketPlace. When he will click on the sandbox product in MarketPlace he will be redirected to his organization link address. The provider will receive an email with the user and password required to connect to this organization link.
Here the provider will have access to one T24 dedicated sandbox.

The Environment page contains 3 important sections:

* ***T24 Release*** section that gives access to the T24 area through browser.
* ***Database*** section that indicates the status of the database and gives access to a copy of the database of the T24 area.
* ***Repository*** section that gives access to the gitlab repository that allows providers to deploy their packages, plugins, localjar files, etc.

## T24 Release section - available actions
* By clicking on “**GO TO APPLICATION**”, a new tab containing the ***T24 BrowserWeb*** URL is opened in browser. Users and passwords to be used here will be received on email.
* By clicking on “**MONITOR APPLICATION**” the ***TAFJEE*** Servlets page will be opened in a new browser tab and from here:
	* *Diagnostic* section: get details about your TAFJ environment, get routine compilation details, etc.
	* *Execution* section: run services, etc.
	* *Troubleshooting* section: access log files, commo files, etc.
* By clicking on "***Export Environment***" button a zip file will be generated on the *sftp.temenos.cloud* portal and this zip file will contain information about:
	* the content of the default folder of T24;
	* what are all jar files deployed in T24 sandbox and the correspondent module.xml file;
	* what are the war file deployed in T24 sandbox and the jboss server log.
* ***Increase instances*** button allows provider to increase the number of T24 VMs in cloud in order to improve performance.
* ***Decrease instances*** button allows provider to decrease the number of T24 VMs in cloud that were previously increased.
* ***Rebuild application*** button allows providers to recreate their environment. In case a provider deploys something into the gitlab (a package or a plugin or anything else) and he decides that he wants to undo that particular package it will not be enough just to remove it from gitlab. The package remains installed into the T24 area until a rebuild is done that is actually deleting current environment, creating a new one and installing there whatever is present at that time into the gitlab repository.
* ***Start application*** button allows provider to start the jboss.
* ***Stop application*** button allows provider to stop the jboss.

## Database section - available actions
* By clicking on "***Export database***" button a zip file will be generated in the *sftp.cloud.temenos* portal and this zip file will contain the database of the sandbox.
Note: This database can be used as a backup that can be deployed later on into the sandbox or that can be given to other users to deploy it into their own area and do some testing/development or it can be used to do some changes into it and then to deploy it into the sandbox, etc.

## Repository section
This section displays the gitlab repository correspondent to your T24 sandbox. In order to be able to deploy changes into the sandbox please:

* [Generate](http://documentation.temenos.cloud/home/docstore/techguides/user-creation-in-paas.html) a SSH key and save it 
* [Clone](http://documentation.temenos.cloud/home/docstore/techguides/use-gitlab-repository.html) the gitlab repository  

##Useful information

* [Core Banking available APIs](http://developer.temenos.com/interaction/prospect.html) 
 that can be easily accessed by using link address ***https://[your sandbox address]/Prospect-iris/Prospect.svc/GB0010001/*** and the users and passwords that where communicated via email for accessing the T24 BrowserWeb.

* [Internet & Mobile Banking available APIs](http://developer.temenos.com/interaction/channels.html)
that can be easily accessed by using link address: ***https://[your sandbox address]/Channels-iris/Channels.svc/GB0010001/*** and the users and passwords that where communicated via email for accessing Retail.

* For guidance in how to investigate if whatever was committed in gitlab was done correctly please check instructions mentioned [here](http://documentation.temenos.cloud/home/docstore/techguides/troubleshooting.html).