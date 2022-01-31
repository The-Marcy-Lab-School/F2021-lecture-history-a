# Lesson: Hash Maps

* Problem: searching for an item is usually Linear Runtime O(n). How can we improve this?
    *   O(log n) - logarithmic runtime
    *   O(1) - constant runtime 

# A Hash Map is an Abstract Data Type (a set of rules/behaviors)
* Hash-Map is made up of Key-Value Pairs
* Looking up values in a Hash Map should be constant (or near constant) runtime
* When we insert data into a Hash Map, the value to store is run through a Hash Function which returns a Hash Key 
* The Hash Key is used to look up values in the Hash Map

## Essential Questions
* How is array data stored in memory?
* How are object key-value pairs stored in memory?
* What are the benefits of storing data in an array vs an objects?
* How can we implement a Hash Maps using: (1) Arrays, (2) Objects, (3) JavaScript's built in [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) class?


* What is a hash collision? When would one happen and how can be prevent them?
    * occurs when two different values hash to the same key/index  

## Key Terms
* Hash Map
* Hash Function
* Hash Key
* Look-up table (mental model)