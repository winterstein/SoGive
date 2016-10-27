# SoGive Security Policy

SoGive takes security very seriously, and we follow best-practice methods to protect our systems.
We aim to keep all data safe and secure -- protected
against both accidental damage and deliberate attacks.

## Security and Process

We operate a policy of open and continuous improvement. All technical
staff are kept aware of the high-level risks around data handling, and
are encouraged to report any new low-level risks which they identify.

We perform risk assessment and risk management as part of our
development planning. New developments are assessed for risks at the
roadmap / sprint-planning stage. Controls are introduced as
appropriate, and identified risk factors are specifically checked
during quality assurance testing.

Our processes, including security measures, are documented in a
company wiki. Staff are trained to check this when performing
unfamiliar tasks.

## Office Security

Physical access to our offices and servers is strictly controlled.
Our offices are not accessible from the street. The offices have security staff during office hours, and security alarms out of hours.  Both a keycard and a key are required to access the office. We have a policy of routinely locking doors when out of office.

Our office computers use screen-savers with automatic screen locking.


## Handling Personal Data

Information Officer: Daniel Winterstein

SoGive will register under the Data Protection Act with the UK Information Commissioner's Office.

Personal data is stored securely at all times, and only accessed when necessary.
Staff are trained to take care over access to computers, memory-sticks, etc. with personal data on them.

Personal data is disposed of securely -- for example, paper documents with personal data are shredded, and hard-drives 
are securely wiped.
<!-- Hetzner use the US government standard NISPOM / DoD 5220.22-M method -->

### Process for breaches involving the Data Protection Act

Improper access to personal data is a disciplinary and potentially criminal offence.
Any suspected breaches, for example, unauthorised access to information by employees, must be reported to the Information Officer or to a Director.
The breach will be investigated, and the results of the investigation documented in a report.

If a breach was found to have occured, then the company will take appropriate measures to:

 - Notify affected individuals.
 - Notify the authorities.
 - Limit any damage.
 - Prevent further breaches.

### Individual Subject Access Rights

Individuals have the right to request a copy of the data we hold about them.
We try to make such data accessible online in a safe and convenient manner. 
Individuals may also make enquiries to the Information Officer, who will coordinate authenticating the individual's online identity, and collating the data for them (we may charge a small fee for this).

## Technical Security Measures

We follow best practices to keep our systems secure.

### Server Hosting

Our servers are hosted in a dedicated and secure data centre. 

### Data backup and encryption

Passwords and the login tokens used to access e.g. Twitter accounts are stored in encrypted form.

Data is backed up on a nightly basis and replicated off-site. All backups are encrypted with high-grade encryption.

### Access to Servers

Access to servers is strictly controlled. Our servers are hosted at reputable data-centres who comply with international hosting standards. 

Remote access is via secure multi-stage login. Low level server login is strictly controlled, requiring both an
authorised ssh key and a password, both of which are only held by
senior SoGive technical staff. 

### Browser/server communication

SoGive should be accessed via the secure https protocol, providing
security for data in transit. When SoGive connects with 3rd party
services such as Twitter, it does so over encrypted https.

SoGive uses an SSL certificate, and provides secure HTTPS connections. https is the standard secure method 
for secure internet connections, providing high-grade encryption.

### Software

SoGive only uses trusted third party software from reputable providers. This software is regularly updated to include any security updates from the provider to ensure the software security is maintained.
Services such as databases are secured by default, and are not directly accessible from outside our servers.

Software is only installed after clearance by a senior technical officer. Non authorised software is not allowed on company computers.

### Access to Development Computers

Physical access to office computers is controlled by personal swipe card, a receptionist, and secure logins. 

### Access to Client Data

Access to the SoGive system is via personal logins. Each user must have their own login, allowing for fine-grained security
control and audit trails. 
Low-level security filters check all data requests for the correct authorisation.
Every single web page request is logged for a minimum of two weeks. A longer term audit trail is kept for more important user actions. 

As with any system, clients are responsible for keeping their login details secure. 
If a login should become compromised, we will revoke that login which immediately stops all access.

Security controls are implemented at the data-access level, i.e. before
application logic, providing data security even if there are bugs in
the application logic. Following best practice guidelines, we store
user passwords in encrypted form. A further layer of security is
provided at the application level by user roles and audit trails.


#### Data Export

Users can export and publish data, in which case they take responsibility for access to it. Of course, a user can only export or publish the data they are entitled to view and use.

This includes dynamic export to "your wall", where a user digitally signs a url, allowing people they share that url with to view that specific page -- but nothing else. Digitally signed urls allow viewing only (i.e. they cannot be used to send a response). Dynamic exports only happen when a user manually sets one up, and the signature identifies the user who sets it up. The digital signature can be changed, and old signatures would then be rejected. If a user has their permissions revoked or limited, their dynamic exports will similarly have restricted access.


### Storage of Client Data

Personally identifying details such as name and email addresses are stored in the SoGive database, however no payment and credit/debit card information will be stored at all in the SoGive database. 

Customer passwords are not directly stored. Instead, a one-way hash is stored (using a secure hash function). This allows for the password to be checked, but it cannot be recovered.

Authorisation for third party systems (such as Twitter) is stored in an encrypted format. 


### Connections with Third Party Systems

When connecting to a third party system, such as Twitter, SoGive uses the security provided by that system, typically the OAuth method combined with the secure HTTPS protocol. OAuth allows the client to control & revoke access by specific applications.


## Conclusion

Our security is built on a foundation of being prepared, being alert, and being responsive.
