# Architecture #


<p align="justify">The Integration Framework architecture allows an event to be emitted from any T24 transaction. Event Designer (EE) is the IDE (integrated development environment) used to define the event and the flow (that is message schema) which is emitted from T24.

<p align="justify">By using the Integration Framework, Customer can configure any transaction in T24 to create an event record in the database.</p>


![Architecture](./images/architecture.PNG)


![Transaction Event Message](./images/transaction-event-message.PNG)



## Concepts: ##


- **INTEGRATION FLOW** <p align="justify">Defines the layout of an XML message, which will leave T24 when a business event occurs. Created in SOA Event Designer (service-oriented architecture) at design-time, and referenced at run-time in order that an enriched message can be constructed and dispatched.</p>

- **FLOW CATALOG** <p align="justify"> Is a T24 table, which contains details of all the Integration Flows, which have been created by the system integrators. Accessed both at design-time and at run-time. The Flow Catalog provides a component-based interface to Eclipse, Visual Studio and T24 itself.</p>
	
- **EVENT** <p align="justify">Is a generic term for the notification, which T24 emits when a business event occurs.</p>

- **EXIT POINT** <p align="justify">Defines the hook, or API, in T24 to which an Event can be linked. The Exit Point therefore defines when a notification message leaves T24. Exit Points can be linked to T24 VERSIONs, T24 Applications, or to component service operations. Exit point is to inform at which stage the event will be triggered.</p>


