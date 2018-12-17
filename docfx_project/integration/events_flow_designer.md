# Events & Flow Designer #

> [!NOTE] 
> *Integration Framework Service handles the following the high-level operations:*  
> 
>- Transformations 

>- Event Delivery through middleware 

## Highlights: ##

----------

**Integration Event per Company**

Allows the events specific to a company to be stored in a specific file of IF.EVENTS.INTERFACE.TABLE. 

**Benefits:**

•	Provide confidentiality to the company specific data

•	Have reduced number of records per table

•	Improve the performance


T24 IIB (IBM Integration Bus) Custom Adapter allows the user to select the list of lead companies from which the event need to be polled. If no company is selected, by default the polling will happen for all companies.


**Integration service optional transformation XSLT prior to message delivery**

<p align="justify">If the integration framework is not used with an ESB, an additional step may be performed prior to events being written to the output queue: transformation of outgoing Integration Framework messages to a user-defined format through the use of locally defined XSLT.</p>


**Conditional event generation**

<p align="justify">The event/data flow allows to specify at design time, which criteria need to be met in order to have the integration event saved. The criteria can only be based on fields already present in the data flow. 
There are no rules checked concerning the complexity of the filters implemented, however it is advisable to design the filter so that the majority of the superfluous events are not generated and perform a second step fine-tuning in the ESB. A good rule may be to use 80% - 20% (80% needless events are eliminated in the first pass and 20% are left and may be filtered out using ESB specific processing).</p>


**Selective event retrieval and delivery for multiple destinations (queues)**

<p align="justify">The integration service allows additional parameters to be set to manage the selection of events according to event types and (optional) delivery to a specific queue.</p>

**Integration Adapters – batching of events and multiple event types retrieval by one adapter (IIB)**

<p align="justify">The IBM Integration Bus (IIB) custom adapters for T24 gives the possibility to reduce the number of inbound adapters running in parallel in large scale diversified implementations.
In the case of the selection of lists of integration event types with a batching attribute and size set, the delivery will be performed in messages containing homogeneous event sets with a maximum number of events pointed by the maximum batch size.</p>

**Integration publisher - publication per exit point**

<p align="justify">The integration publisher will allow a fine grained publication of the exit points and related data flows. Previously the publication of the entire project was the only possibility. It is now possible to proceed to a fine-grained publication from the integration exit point definition. Only the data flows defined for the exit point or exit points selected will be published.</p>

**Integration publisher – event packager and command line deployment**

<p align="justify">Packages can be built in the T24 Integration Project using **Design Studio** for a set of selected exit points and data flows. From the integration project, using “Run configurations” you can now select the maven build configuration for the project and create the artefacts (.jar for TAFJ). These artefacts will be deployed e.g. on another running T24 compatible instance using the T24 package installer and packageDataInstaller.</p>

PackageDataInstaller allows to either install event definitions or update existing ones:

•	Install checks whether the exit point and flow in the package already exists in T24. If exists then the Install option deletes the exit point and flow if exists and creates new exit points and flows. If not then the new exit point and flow gets created.

•	Update checks whether the exit point and flow in the package already exists in T24. If exists, instead of deleting the existing exit point and flow record, it modifies the existing records. If not then the new exit point and flow gets created.
The packageDataInstaller also allows us to install only a subset of integration event definitions.
