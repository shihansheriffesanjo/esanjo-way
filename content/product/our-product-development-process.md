---
date: 2017-01-16
toc: true
next: "/next/path"
prev: "/prev/path"
weight: 5
title: "Our Product Development Process"
author: Omar Kassim
metadesc: "Our Product Development Process"
sections: ""
categories: ""
excerpt: "Our Product Development Process"
image: ""
---

## Overview

[DRAFT] This was our Product Development process at JadoPado and will be largely our starting point at Esanjo.

![1]

This is an improved version of our current development plan that we’ve been using for several months. The first version of the development plant worked quite well but like all things, it can always be improved. We’ve identified a number of points that can be improved to increase efficiency, transparency and output quality.

As you can see, the main difference of this new process from the old version is how projects are no longer team-centric. Although the team-centric board works, we found that card movement across multiple boards as they get worked on by different teams reduces overall visibility of each project (card) which results in some cards remaining stationary for long periods of time. Moreover, team-specific boards hamper interaction between teams since members of a team tend to focus on their own boards and ignore the rest.

In light of these observations, we’ve developed this new product development process where 4 main projects (Roadmap, Planning, Ideas & Enhancements and Bugs & Glitches, each with its unique purpose, feed a single project. We’ve also replaced Trello with Asana for more flexibility so boards will now be called projects and cards will be named tasks. Please go over the detailed explanation of each project as well as the lists inside them to understand their purpose and how you, as a team member, will play your role.

---
## Roadmap Board

![2]

This is an overview of all the major features and enhancements that we will be working on in the coming year broken down per quarter. As soon as each task gets worked on, it will be labeled with “Moved to Planning” to serve as a reference that the task is being prepared for production.

Available Card Label: Moved to Planning

---

## Planning Board

![3]

This is where we prepare all tasks for production before they move to Production for development.  UX, Design, Engineers and Content teams will work together here to prepare product specs, design prototypes, content and process flows to make sure that materials are complete and functionality is finalized before they are sent to Production for implementation.

Next Up - This will list tasks from Bugs and the Glitches and Ideas & Enhancement that we’ve agreed to develop.

Spec - When a task reaches this stage, it only has a short description about the proposed feature or bug. Before any further development can be performed, a detailed spec will be prepared to flesh out the concept and discuss technical complexities with the Engineers. The spec will be writted in a Google Doc and a link will be provided in each task.

Design - This is a multi step process where the spec is converted to a design prototype primarily by the UX team with help coming from the Design team for graphical elements in the design. Engineers are also kept in the loop to verify if proposed functionality and workflows are feasible. A process flow that outlines user journey and interaction will also be prepared to serve as a guide for everyone to understand how the feature will function. The last step in the design process is the generation of styleguides using Zeplin (https://zeplin.io/) to help Engineers develop an output that’s a pixel perfect copy of the original design prototype.

Content - Content development almost always happens alongside design since one is dependent on the other. The content team will prepare the product copy (copy=content) through the use of the product spec and process flow created by the design team. Content development is one of the most critical part of product development since it has a direct impact on usability and on our goal conversion rates.

Ready - By the time the task reaches this list, it will have a detailed spec, design prototypes, process flows and completed content. The Engineers and management will then discuss what tasks will be forwarded to the Next Up list in Production for development.

---
## Production Board

![4]

Our primary project where ideas are built from concept to actual working products. This is where you can see the tasks that are next in line for development, what’s being worked on and tasks that had been rolled out to the live environment.

Previously, our engineers work in sprints of 2 weeks where they study, develop and test new products all within this period. This short time frame doesn’t give them sufficient time to plan and test products before shipping them out which resulted in a lot of time wasted fixing bugs on previously rolled out projects that were done in haste. To improve our output quality, we’ve decided to go with a 4-week development cycle and 1 week planning periods and call them cycles instead of sprint. The 1-week planning period will be used to study and plan tasks that will be worked on during the 4-week development cycle. During the 4-week development cycle, engineers will develop and test 2-3 big tasks, at least 3 smaller ones and bugs that were handpicked during the 1-week planning period. The engineering heads will assign individual tasks to 1 or 2 engineers that possess the right skillset and experience that best fits the task at hand.

In addition to the modification on the development period, the UX team will now officially work hand in hand with the engineers during the 4-week development cycle to help ensure that our output exactly matches the original product specifications and design prototypes. The UX team member that built the creatives will work together with the engineer that develops the tasks until completion.

Next Up - This is the prioritized list of the tasks that are ready for production and will be handled in the next 4-week production cycle. Each card will be tagged by type (Enhancement or Bug) and development complexity (Less than a week, 1 cycle or less, over 1 cycle) for clarity. All bugs will be placed on top of the list and be prioritized over enhancements.  

Under Development - Engineers will pick up their respective tasks from the Next Up list at the beginning of the 4-week cycle. Simultaneously, a member of the UX team will closely work with the engineers during this phase to help guide them on design and functionality during development and testing. A completion date will then be added to each card to give us an idea when a feature is expected to be available for internal testing.

Technical Review/QA - When the feature is ready, Engineers will deploy it on a testing environment. The Engineer, UX and Content team members responsible for design, content production and development will inspect and sign off on the completed work to verify that the output is according to the spec and that bugs and other technical issues are ironed out before it gets released for internal testing.

Internal Testing - After the product goes through QA, it gets released internally in a beta environment. People internally will test the product thoroughly and identify minor bugs that may have slipped through the QA process.

Ready to be Deployed - Tasks that were reviewed and approved for deployment goes here until they actually go live.

Live (Date Released) - These are the tasks that had been deployed to the public after rigorous QA and testing. We create a new “Live (Date Released)” list every deployment so we can track what tasks (enhancements/bugs) were launched when. Live deployment happens no later than 12PM. That gives us half a day to monitor and fix any issues that may arise.   

Available Card Labels:
Type - Enhancement, Bug
Complexity - Less than a week, 1 sprint or less, Over 1 cycle

---
## Ideas & Enhancements

![5]

This is where we submit ideas and suggestions to improve our product and/or operational processes. This project is reviewed every Thursday at 10am and priority is given to those tasks that were able to demonstrate and justify why we should develop that idea over the others. Idea creators are responsible to sell the idea to the rest of the team.

Internal - Ideas by all team members will be submitted here. When submitting a card, make sure that you add a detailed description of what your idea is about including the rough concept of how you see it working and how it can improve product useability. Ideas that do not provide sufficient details or demonstrate how it will improve user experience and/or our bottom line will be passed over.

External - These are the ideas submitted by our users (sellers and buyers). These will be gathered first hand through a direct interaction by any member of the team or submitted directly by the user through a feedback mechanism that we will introduce in the future.

---
## Bugs & Requests

![6]

This is where we submit bugs and other request for user-facing products or internal tooling.

Incoming - Bugs we encounter on the product and internal tooling will be submitted here. These will contain screenshots of the affected product, detailed description about the buy and required fix or solution and how to replicated the bug if it’s process oriented. Tasks may be labelled Critical if it meets the following criteria:

- It interrupts users to perform a core function (eg. Buy a product, process an order, take a store live, add a product or offer, send a message, log in, create 	account)
- Security issues

Accepted - This list will be reviewed every Thursday and handpick the bugs that will be forwarded to Planning. We limit the number of bugs we pick to 5 per week. Tasks labeled Critical will be immediately forwarded to the Production board and an engineer will fix it right away regardless of the development cycle status.

Requests - These are internal requests made to any teams that are neither a bug nor enhancements like DB updates, marketing reports, etc. Team leaders pick these up as they please. Once the request has been satisfied, the person that raised the request must move it to the column Completed.

Completed - All completed request should be moved here by the person who raised the request.

Available Label: Critical

[1]:/images/2017/01/Overview.png
[2]:/images/2017/01/Roadmap.png
[3]:/images/2017/01/Planning.png
[4]:/images/2017/01/Production.png
[5]:/images/2017/01/Ideas-Enhancements.png
[6]:/images/2017/01/Bugs-Requests.png
