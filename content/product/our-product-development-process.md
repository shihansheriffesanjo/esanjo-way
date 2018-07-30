---
date: 2018-07-12
toc: true
next: "/next/path"
prev: "/prev/path"
weight: 5
title: "Our Product Development Process"
author: Karlo Alfredo
metadesc: "Our Product Development Process"
sections: ""
categories: ""
excerpt: "Our Product Development Process"
image: ""
banner: '/images/product-development.svg'
---

## Overview

Our product development process follows 4-week cycles based on Agile methodologies and is the result of years of continuous iterations to improve efficiency, consistency and most importantly, output quality. We’ve tried a number of project management tools over the years from Trello to Jira and everything else in between before finding Asana and falling completely in love with it. 

The product management process is broken down into two departments (or projects as they are called in Asana), Planning and Development. Earlier versions of our process had more but we’ve realized tracking progress across different projects are much tougher, particularly if you work with a large team and numerous tasks simultaneously. 

Pre-development tasks are managed under the Planning department which is broken down into 11 individual subsections:

1. Ideas and New Projects
2. Bugs & Requests
3. In Queue 
4. Product Spec
5. User Interface
6. Content
7. Creative Development
8. Localization
9. Ready for Development
10. Obsolete Tasks
11. Completed without Development

After tasks go through the Planning department, they move to the Development department where actual engineering work is performed. Much like the Planning department, the Development department has multiple subsections:

1. In Queue
2. Under Development
3. Ready for Testing
4. Review & Testing
5. Ready for Deployment
6. Completed

Tasks are managed through cards in Asana and they are the most important component of our product development process. These cards move through the product development process as progress is made. Think of it as a manufacturing assembly line. We have different teams and/or individuals that are responsible for each step of the process. 

In addition to Asana, the Product team also uses Abstract to manage UI assets and Marvel for prototyping, design and asset handoffs to the engineering team. Real-time discussions among the team are done in the #product and #engineering channels on Slack. 

Once a new product or feature gets launched, the focus then turns to optimization to help us improve user experience as the product matures. Analytics and performance tracking are primarily done through Google Analytics and/or Firebase if the product is a mobile application.  

---
## Process Overview

The product development process revolves around cards in Asana. All information required to build a new product, feature or fix an existing issue are stored in these cards. We use two types of card formats; one designed for new features or products and another for bugs found in our live environments. 

The cards themselves are broken down into subtasks that are assigned to individual members of the team. These subtasks help us breakdown a complex product or feature into simpler tasks to manage them more effectively. 
 
The following steps defines how our process works and illustrates how a new idea transforms into a completely functional product or feature. 

#### Step 1. Idea Generation

Ideas for new products or features may come internally from anyone within the team or submitted by one of our external users. We create cards for these ideas and file them under the Ideas and New Projects column in the Planning department. Bugs and other internal or external requests are field under the Bugs & Request column. 

#### Step 2. Product Spec

The product specification is written at this stage. It details the what, why, where and how of the product. You can view the product spec as a blueprint that the guides everyone what the product is going to be. Depending on the complexity of the project or feature, it can be directly written on the Description area of the card if it’s simple or in a Google Doc for complex ones. We tend to write product specs of new projects in Google Docs and feature updates are done directly on the cards. 

#### Step 3. Journey Map

We create a journey map to serve as the visual interpretation of what we’ve written in the product spec. This is where the tire meets the road so to speak where user experiences are built and fine tuned. In most cases, teams refer to the journey map more than the product spec to understand the nuances of what we’re building. You can think of the product spec as a general guideline of what we’re planning to build and the journey map being the actual blueprint of what we’re going to build. 

Journey maps are developed in Realtime Board and are shared to everyone in the product and engineering teams. 

#### Step 4. UI Development

After the journey map has been reviewed and confirmed, we start working on the UI of the product. This is where the fun really begins for the team as we’ll finally see how the actual product potentially look like for the first time. 

UI work is exclusively done on Sketch and design files are managed through Abstract. All our design files are stored in the cloud which means we have access to them anywhere we go and there’s no risk of losing files should our hard drives fail. 

When designing responsive websites, designs are made on these sizes:

* Mobile - 360x640
* Tablet - 720x1280
* Small Desktop - 1366x768
* Full Desktop - 1920x1080

For mobile applications, we use 360x640 and tweak the size during the development stage for high resolution devices. 

#### Step 5. Creative Development

In many cases when the UI for either a mobile application of website gets developed, the designs will require custom vector graphics to improve the appeal of the product. These custom graphics are made in either Adobe Illustrator or Photoshop. We even use Adobe After Effects periodically for graphics that need animation.

If we’re building a new mobile application, we also prepare application banners and app icons for Google Play and App Store when we submit the app for listing. 

#### Step 6. Content Development

We view content as one of the critical components of product development. A bad content can easily undo even the most well thought out user experience. Content is typically broken down in to different types depending on what we’re building. 

* User Interface
* Web
* In-App Notifications/Validation Messages
* Emails
* App Store Listings

Since the amount of content required for even a simple project can be quite substantial, we rely on Google Drive to keep everything organized. We create a folder in Google Drive to store all content for every new project. Using Google Docs to manage content is more convenient as collaboration with the rest of the team is more seamless and files are accessible wherever we are. 

#### Step 7. Handoff Prep and Prototyping

We update the copy on the UI designs to accurately reflect the final content. This practice helps us see the actual content on the designs and make layout adjustments before any engineering work is done. 

After design is finalized, we import the screens to Marvel, our design handoff tool. Marvel automatically generates development resources like code snippets, design specs and assets that our engineering team uses. 

We also regularly uses Marvel to create interactive prototypes to validate UX or collaborate ideas with our clients.  

#### Step 8. Engineering Handover

At this point, the card will move from the Planning department to Development. We’ll review the card a final time to make sure that all the pre-development steps were done correctly before moving it to the In Queue column within the Development department. 

The team meets at the start of every engineer cycle to discuss what features, products and bugs we’re going to work on during the coming cycle. When the cycle starts, everything that has been selected for development will then be moved to the Under Development column where they will stay until they’re ready for testing. 

#### Step 9. Localisation

Our default language is English but we create an Arabic version of most of our products. During the engineering stage, the engineers will prepare the content in a JSON file format and share it to the localisation team for translation. The localization team uses a Memsource, a powerful translation memory platform, to manage our localization process. 

#### Step 10. Internal Review and Testing

The engineers perform a code review then before deploying products in a testing environment for internal review and testing. Testing process varies on the type of product of feature being reviewed. If it’s a new product or feature, we perform an acceptance test across the entire system to make certain that the platform works as it should. The introduction of a new product/feature is always an exciting and tense time for the entire team and always calls for a more thorough testing than a simple update of an already existing feature. 

If everything passes the tests, the card gets pushed to Ready for Deployment where it awaits deployment to the live environment. Should there be a need to fix something, we file tickets on the card and tag the appropriate engineer to work on them. 

#### Step 11. Deployment

Deployments are done from Sunday till Wednesday. We avoid deploying any updates or new features on Thursdays since nobody will be available on Fridays and Saturdays (weekend in Dubai) should something go wrong. 

We tend to deploy mobile apps ahead of their web versions since the apps still have to be reviewed by Apple App Store and Google Play Store. iOS versions of the mobile apps are released at least a day ahead of the Android version since Apple takes much longer time to review app submissions. 
