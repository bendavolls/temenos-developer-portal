---
title: Design FAQ
description: User Experience, UXP Integration
author: cbenea
category: User Experience
tags: User Experience, UXP, hybrid guide, FAQ
date: 5/3/2018 4:13:13 PM 
reviewer: jfiricel
---

## UXP 

<div class="panel-group">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" href="#collapse1">How to create a Hybrid App using a Cordova plugin?</a>
      </h4>
    </div>
    <div id="collapse1" class="panel-collapse collapse">
    <div class="text-left">Find general details on how to get your applications' functionality running in an Temenos UXP app with the purpose to integrate it with Temenos Channels Mobile.
<br>
<br>
<b>Features of Temenos Channels Mobile Banking (hybrid):</b>
<br> 
- Configurable: High fidelity / pixel perfect layout
<br> 
 - Native: Shells and skins for [iOS](./glossary.md#ios), [Android](./glossary.md#android) and [Windows](./glossary.md#windows)
<br> 
 - Device access: Access phone functionality: Camera, GPS, Phone Book...
<br> 
 - Dynamic: Update-without new downloads
<br> 
 - Secure: 3rd party authentication server integration plus [TLS/SSL](./glossary.md#tls)
<br>
<br>
<b>Knowledge prerequisites:</b>
<br>
 - iOS/Android developing knowledge
<br>
 - Apache Cordova knowledge (the underlying framework that’s powering SmartHybrid)
<br>
 - Web developing knowledge
<br>
 - JAVA knowledge
<br>
<br>
<b>Tools and documentation:</b>
<br>
 - Latest UXP version installation
 - <br>
 - Access to UXP user guides
<br>
<b>Note:</b> The APK and Java refer to Android, but the concept applies to iOS as well.
<br>
<br>
<b>Steps to follow:</b>
<br>
<b>1.</b> Get familiar with Cordova (install it on your computer and write a Hello World project). Please check [**here**](https://cordova.apache.org/docs/en/latest/guide/cli/index.html) information about Cordova.
<br>
<b>2.</b> Build the APK and run it on your mobile.
<br>
<b>3.</b> Integrate your application SDK into that simple application. This way you will understand what a Cordova plugin is. During this process you will write some java files and javascript methods. You will invoke the javascript methods from static html pages (maybe index.html) from your simple application.
<br>
<b>4.</b> Take the plugin files and install it in TCMB as an additional Cordova plugin. You will need to write an UXP widget that invokes the javascript methods.
*(The user guides contain UXP related information, such as widgets and the integration of custom Cordova plugins.)*
<br>
<b>5.</b> For creating Cordova custom plugins, the information is available on the Cordova website, then the plugin directory can be included in the UXP solution (TCMB in this case) using the Project > Properties > Additional Cordova Plugins tab. We distribute a few hybrid widgets and Cordova plugins out of the box; this can give an idea on how the widget interacts with the respective plugin from the HTML page.
<br>
This is a brief summary for the steps to follow. Please refer also to Temenos UXP Hybrid Guide.
</div>
    </div>
</div>

