
# SoGive Data API

The SoGive server provide API access to our data, using a RESTful json-over-https API.

You will need a license to use this -- **please contact us**. As part of our mission we are keen to support other apps. You can start small scale internal experiments without a license.

## Endpoints 

Authentication is *not* needed for getting data :) It is needed if you wish to post updates to the database (talk to us if that's the case).

### Search 

Get `/search.json?q={query}`

### Charity Data 

Get `/charity/{id}.json`

e.g. `https://app.sogive.org/charity/oxfam.json`
