The Interaction Framework makes it possible to build web services using **Interaction, Reporting and Information Services (IRIS).**

**IRIS** is a collection of libraries that allows user agents to interact with the HATEOAS-based

The **RESTful** architecture of the framework uses its own Domain Specific Language (DSL), known as **RIM**, to define what resources are available to user agents and how they can interact with them. In large part, IRIS is the Interaction Framework - it forms the hypermedia API that allows user agents to access resources from multiple resource providers.

## Hypermedia API
The IRIS hypermedia API includes the following features.

### ETags	
The API uses ETags or Entity Tags with resources. An ETag is an identifier assigned by a web server to a specific version of a resource found at a URL.

If the resource content at that URL ever changes, a new ETag is assigned. That makes it easier to check if two copies of a resource are the same or different.

### Server-side paging	
Paging refers to the pages of resource retrieval data that the framework keeps in its main memory.

The API uses server-side paging, where the user agent makes the paging request and the Interaction framework controls the paging process.

When a user agent asks for a specific page, the Interaction Framework returns only that page - the user agent can go to the tenth page of resource data with no cost to pay for skipping nine pages. The user agent may use query options, such as $top, $skip and $count to get the page they want.

### Caching	
The API uses caching to reuse previous responses for resource requests. Caching is one of the REST constraints of the Interaction Framework (see REST).

### Industry standards	
The API uses industry standards to make it easier to develop and use web services with the framework. These standards include:

HTTP methods (GET, POST, PUT and DELETE).
HTTP error codes, such as 400 Bad Request or 404 Not Found.
Media types, such as application/atom+xml.
URI syntax.
The use of service documents and metadata to help organise resource data.
Note: For more information about the standards the Interaction Framework supports, see [Architecture](http://developer.temenos.com/interaction/architecture.html). 

## RIM
The Resource Interaction Model (RIM) language ensures that the Interaction Framework meets its RESTful constraints by enforcing the resource naming, transition (linking), metadata and action semantics at runtime.

When a user agent sends a request to the framework, specific RIM files are called that describe how the request is dealt with - what commands are sent to the resource provider and what form the response should take for the user agent.
