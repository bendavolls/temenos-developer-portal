---
title: Dedicated Sandbox
description: Information about Dedicated Temenos Sandbox, What does it contains, what are the supported interface & how to access.
author: jfiricel
category: sandbox
tags: sandbox, api
date: 5/30/2018 7:54:49 AM   
reviewer: bdavolls
---


# MarketPlace Dedicated Sandbox
As a MarketPlace Premium Member, you have access to a MarketPlace Dedicated Sandbox, to help build, test and demonstrate your product's T24-integration via the Temenos MarketPlace. The Dedicated Sandbox is a live instance of T24, containing model bank data running on a secure virtual machine that will be available ***only for you*** and where you can complete following operations:

* Create design studio package and upload to T24 using GitLab
* Create new API package and upload to T24 using GitLab
* Deploying other localjars using Gitlab

## Accessing the Dedicated Sandbox
You can access the MarketPlace Dedicated Sandbox by going to your MyApps page in MarketPlace. Clicking on the sandbox product in MarketPlace will redirect you to your organization link address. You will be sent an email with the user and password required to connect.
Here you will have access to one T24 dedicated sandbox running the Retail Suite Application.
> [!Note]
> The sandbox is not currently available via MarketPlace, so you will receive all the details you need to access it via your Temenos MarketPlace Welcome email.

* The Environment Information page contains 3 important sections:

	* ***T24 Release*** section that gives access to the T24 area through browser.
	* ***Database*** section that indicates the status of the database.
	* ***Repository*** section that gives access to the gitlab repository that allows users to deploy their packages, plugins, localjar files, etc.

### T24 Release section - available actions
* By selecting “**GO TO APPLICATION**”, a new tab containing the ***T24 BrowserWeb*** URL will open in a new browser window. The username and password to be used here, will have been sent via email.
* By selecting “**MONITOR APPLICATION**” the ***TAFJEE*** Servlets page will open in a new browser tab and from here you can check the following sections:
	* *Diagnostic* section: provides details about your TAFJ environment, get routine compilation details, etc.
	* *Execution* section: run services, etc.
	* *Troubleshooting* section: access log files, commo files, etc.
* The ***Increase instances*** button allows a user to increase the number of T24 VMs in cloud in order to improve performance.
* The ***Decrease instances*** button allows a user to decrease the number of T24 VMs in cloud.
* The ***Rebuild application*** button allows a user to recreate the environment. This action will re-build the environment based on packages deployed in the gitlab repository. If the repository is empty the environment will be as new. If the repository contains a package, the environment will be re-built with that package included in the build.
* The ***Start environment*** button allows a user to start the VM where T24 is installed and to start the jboss of the T24 area.
* The ***Stop environment*** button allows a user to stop the jboss and then to stop also the VM where this jboss is running.

### Database section - available actions
* By clicking the "***Export database***" button a zip file will be generated in the *sftp.cloud.temenos* portal which will contain the current database of the sandbox.
Note: This database can be used as a backup that can be deployed later on into the sandbox as a duplicate for testing/development or for local development before deploying to the cloud.

### Repository section
This section displays the git repository correspondent to your T24 sandbox. In order to be able to deploy changes into the sandbox please:

* [Generate](http://documentation.temenos.cloud/home/techguides/user-creation-in-paas.html) a SSH key and save it.
* [Clone](http://documentation.temenos.cloud/home/techguides/use-gitlab-repository.html#clone-environment-repository) the gitlab repository.
* [Commit changes](http://documentation.temenos.cloud/home/techguides/use-gitlab-repository.html#commit--push-features-to-repository) into the gitlab repository.
* [Trigger Deployment](http://documentation.temenos.cloud/home/techguides/use-gitlab-repository.html#trigger-deployment) of the changes committed into the gitlab repository.

For guidance in how to investigate if whatever was committed in gitlab was done correctly please check instructions mentioned [*here*](http://documentation.temenos.cloud/home/techguides/troubleshooting.html#2-tafjee-monitoring-tool).