IRIS is designed to make it easier for financial organizations to create web services with access to multiple resource providers. Temenos provides IRIS to organizations as part of a design package called **Data Services Designer (DSD)**.

Data Services Designer comprises the following components.

## Design Studio	
Design Studio is an Eclipse-based, Temenos built Integrated Development Environment (IDE) . It provides a graphical environment that makes it easier for developers to explore the resources of T24 - and other resource providers - and expose them in a RESTful way for consumption by user agents.

Design Studio for APIs provides an intuitive graphical environment that commodity specialists in the bank can use to easily configure what data and functionality their Core Banking system should make available via APIs to selected third parties, providing the foundation for an open banking platform.

Design Studio for Webservices provides an intuitive graphical environment that commodity specialists can use to easily build and deploy web services. It maintains a clear separation of the service definition within the bank's Core Banking system and the technical tooling used to publish services to the enterprise.

*	**Entity Data Model**
The Entity Data Model is a subset of common T24 resources that developers can expose to one or more user agents, using Design Studio.

*	**IRIS**
IRIS is the hypermedia API behind the Interaction framework that runs the RIM language.

*	**.RIM files**
RIM files are based on the RIM language. These design-time files show the possible state changes in the representation of the resources.
When their design-time work is completed, RIM files are converted by Design Studio into the Java applications that form the 'live' (runtime) web services.

*	**Java web application**
The runtime application generated in Design Studio from the RIM files.

*	**Java application server**
The standard container for both the application and the technical resources needed to run them.

*	**API management platform**
A third-party platform that allows developers to manage the applications / web services they have created, once they go live.

