# RESTful APIS
## Main goal
- Understand how web APIs work
- Discuss usecases where this knowledge can be applied
- Explore a RESTful API (figshare)
- GraphQL APIs(Github, Gitlab and )
## Demos
### A simple API web service
- Running the project in `01_node_server` simple example
- Different ways to explore APIs (browser for GET, curl, POSTMAN, )
### Exploring the figshare API
- [Figshare API documentation](https://docs.figshare.com/#projects_list)
- Figshare tokens and OAuth2 apps

### Examples
- [Yeastmine](https://yeastmine.yeastgenome.org/yeastmine/results.do?trail=%257Cquery)
- [Utterances usign Github API](https://github.com/utterance). [API calls in the source code line 133](https://github.com/utterance/utterances/blob/master/src/github.ts)
- [Combatcovid](https://combatcovid.equipment/)
- [Rick and Morty APIs](https://rickandmortyapi.com/)

## Key concepts
**Resources and resource representation** A resource is usually something that can be stored on a computer: an electronic document, a row in a database, or the result of running an algorithm. Architecture calls these “information resources,” because their native form is a stream of bits. But a resource can be anything at all: a pomegranate, a human being, the color black, the concept of courage, the relationship between mother and daughter, or the set of all prime numbers. The only restriction is that every resource must have a URL.

**Representations** A representation can be any machine-readable document containing any information about a resource.(HTML, XML, JSON) 

When a client issues a GET request for a resource, the server should serve a document
that captures the resource in a useful way. That’s a representation—a machine-readable
explanation of the current state of a resource. The size and ripeness of the pomegranate,
the data contained in the database fields.

**Endpoints**The endpoint (or route) is the url you request for. It follows this structure:

**Requests** GET, POST, PUT, UPDATE