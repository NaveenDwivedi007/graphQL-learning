# In this I learn about server side graphQL for client

## What I Learn 
### type definition
similar to typescript 
type is based on the database/schema

### Resolver
- its like a controller in rest api 
- In which our logic is writen to retrive the data from data source
- Resolver name must match the exact field name on schema types
- resolver must reatun the value type declare for matching field
- resolver can be async
- resolver can get data from anywhere (bd/multiple db)

### Query Definition
its for asking the data like get http request

### Mutation definition
its for data manupalation
similar to POST,PUT and DELETE http request


### composition
adv not yet underStandard by me.

### Schema
- to create schema we use SDL(schema defination language)
- programmatically creating a schema using language constructs

#### basic parts of schema
- **Types**- a construct defining a shaps with fields
- **Fields**- key on a type that have a name and a value
- **Scalars**- primitive value type build into graphQL
- **Query**- type that defined how client can access data
- **Mutations**- type that define how client can modify or create data 


## client side 
 what we have client side

 ### Queries

 ### Mutations

 ### Fragments

## Dependency use
### apollo-serve
- npm i apollo-server ~ to install the dependency~



## Dev Dependency
### nodemon
- npm i nodemon
