# AWS and Cloud Computing

## Objectives
FWBAT...
* Understand the "flipped classroom model" and how/why we will employ it in our class.
* Understand how AWS fits in to larger cloud computing ecosystem

## Vocabulary
* Server
* Cloud Computing
* Virtual Machine
* IDE - Integrated Development Environment
* AWS - Amazon Web Services
  - AWS Cloud9
  - EC2

## What is the Cloud?

* https://www.youtube.com/watch?v=i9x0UO8MY0g

* Here's how Amazon define's cloud computing:
> Cloud computing is the on-demand delivery of compute power, database, STORAGE, applications, and other IT resources via the internet.

* AWS is the global leader in **_cloud computing_** and it's not even close.
  * Microsoft, IBM, and Google are the closest competitor and AWS has more market share than all of them combined.

## The Why?
* Sometimes it's super convenient to have a standard type of computer all team members use.
* Cloud computing can offer more than delivery of extra storage. Its **_servers_** can deliver a whole **_virtual machine_**.
* We will be using AWS **_Cloud9_** as our development environment (linux).
* It's easy. It's cheap. It can be accessed from anywhere (as long as you have an internet connection). And it's more than enough to build a full stack application (and career!) on.

### Cloud9 and the AWS Ecosystem
* Cloud9 is a cloud-based **_integrated development environment (IDE)_** that you use to write, run, and debug code.
  * An integrated development environment is an application that provides all the tools you need for software development in one location. They include a terminal, a text editor, and a graphical directory tree.
* Instead of running your code on your physical computer, Cloud9 creates a virtual machine for your code to run on.
* Virtual machines are AWS most popular product. They offer them through a service called **_EC2 or Elastic Cloud Compute_**.
* Cloud9 and EC2 are just two of over 100 services that AWS offers to allow you to build software, secure it, and deploy it to the world.


# Introduction to the Command Line Interface 

## Objectives
FWBAT...
- Understand the origins of the command line interface
- Navigate their file tree using the command line interface
- Create, copy, delete, and move files and directories using the command line interface.
- Understand key file and directory naming conventions

## Vocabulary
* Interface
* Graphical User Interface
* Command Line Interface

## The Why?
* We are used to navigating our technology with an **_interface_** that is visually driven.
* Our normal interfaces use analogies that feel familiar from our everyday lives. We're used to clicking on "folders", saving files to our "desktop", we "scroll", "drag", and "move" images.
* These are features of a **_graphical user interface_**, or a GUI, for short.
* Before we had GUI's, we navigated computers using text commands.
* While GUI's are more user-friendly and easier to develop foundational proficiency, the **_command line interface_** is more _powerful_ and _efficient_.

```
Work Space
 |
 |---Unit-0/
 |    |--app1.js
 |    |--app2.js
 |    |--app3.js
 |
 |---Unit-1/
 |
 |---Unit-2/
```

* To this day, developers still use the command line interface because of it's ability to perform both repetitive and complex tasks with efficiency.
* How will we use the CLI? Installing software, interacting with software, manipulating your directory tree


## Guided Practices
Create the following directory structure:
   ```
   Lecture-1/
   |
   |-----teachers/
   |      |
   |      |--reuben_ogbonna.txt
   |      |--ann_duong.txt
   |      |--maya_bhattacharjee-marcantonio.txt
   |
   |-----hobbies/
   |      |
   |      |---indoors/
   |      |    |--BakingCookies.md
   |      |    |--WatchingTV.md
   |      |    |--Gaming.md
   |      |
   |      |---outdoors/
   |            |--running.txt
   |            |--walking-the-dog.txt
   |            |--hanging-with-friends.txt
   |
   |-----food/            
   ```

    - pwd
    - mkdir
    - ls
      - ls -a
      - ls -l
      - ls -la
    - cd
      - ~
      - .
      - ..
    - touch
    - mv
      - moving a file to a new directory
    - rm (-r)

  #### Advanced CLI commands that we can Google:

    - echo
    - cat
    - more
