---
title: Temenos Supported Interface
description: Supported interface to integrate solution
author: mjangid
category: Banking
tags: "Temenos sandbox"
date: 10/11/2017 7:23:58 PM  
reviewer: mjangid
---

# Interfaces

Temenos provide following interfaces to integrate the Fintech products with Temenos [Digital Banking Suites](https://www.temenos.com/en/solutions/suites/).

# Integration Services
[!Include [](../integration/integration.md)]

*   Use this interface for the T24 integration catalog, asynchronous transactions and runtime polling for events

*   **Event Designer – Publish per exit point**
Event Designer Project allows all the exit points to get published at once. This leads to an issue of republishing all the exit points that does not needs any republishing and updates the flow, leading to flows getting republished to T24 that need not to be republished.
Allowing per exit point publish, provides the flexibility of publishing the selected and required exit points.

*   **Event Packager**
This event packager allows the flow and exit points to be packaged and use in automated packaging or integration solutions.
It’s only possible to publish integration flows from the event designer which is not useful in an automated packaging or integration solutions. It’s required to be able to sync the integration projects from the source control and package the integration flows to be installable in a T24 environment.


*   **Integration Service**
Integration service deliver the event to the specific queue if configured otherwise events will be delivered to default queue.

*   **Message Transformation**
Integration Framework allows custom style sheet to be applied to generate a event XML in a custom format when using Integration Service.



# Interaction Services
[!Include [](../interaction/interaction.md)]

Use this interface to develop and integrate your solution with Core Banking and Mobile & Internet Banking APIs. Interaction Framework provides a unique platform for creating and consuming banking/non-banking services.

*   These services sits in between user agents & banking/non banking services.

*   Mashup capability & OData resources.

*   Generate metadata from Temenos [Developer Tools](sandbox.md#developer-tools)


# Widgets

Widgets are interaction element in graphical user interface. It could be media element, social media plug-ins, feed reader, stock alert ticker, exchange rate and other financial widgets.

These widgets must be developed by using **Temenos User Experience Platform (Temenos UXP)**.

