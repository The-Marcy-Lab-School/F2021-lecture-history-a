# Schema Design 

### Key Terms:
+ Domain Modeling (high-level brainstorming)
+ Schema Design (lower-level)
  - what tables will be have
    - Users table
  - What columns and their data types will our tables have
    - id (INTERGER), username (TEXT), email (TEXT), password, profile_picture (NULL)
+ Relationships
  - A tweet BELONGS TO a user
  - A user HAS MANY tweets
+ Entity Relationships Diagram (ERD)


### Essential Questions:
+ What are some of the important tradeoffs to consider when doing domain modeling?
  - lots of small tables (has small amounts of data)
    - organize data more concretely, can reduce query time if you know where to look
    - JOINS will be more frequently 
  - or few tables (has large amounts of data)
    - harder to organize
    - fewer JOINS 

+ What's the difference between a one-to-one, one-to-many and many-to-many relationship? How do we model those using SQL?
