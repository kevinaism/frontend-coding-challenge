# frontend-coding-challenge

## Project setup,  compiles and hot-reloads for development
```
npm install
npm run serve
```

### Ideas and Concepts

This project consist of 3 pages: Home page, Project page and Notification page, 
they are controlled by vue router to redirect to different vue component.


Each Component had defined in ./views folder and has various sub compoent imported.
These component mainly handle data interaction such as recieve data from App.vue,
user action on clicking element, pagination while all sub components handle data 
rendering and visualisation on UI. 


Meanwhile, constant folder contains all local constant and they are exported 
as a file in order to centrailse all constant parameters for better configuratiuon.


This project used boostrap library to better render element on UI.

### Data Format
 
 Funding Project:{
    projectId: Unique ID of each funding project 
    projectName: StringName of funding project
    projectDescription: HTML plain code 
    featured: Boolean to set if this project is featured or not
    categoryId: Unique ID of category
    categoryName: String Name of category
    fundingGoal: Decimal number of total funding goal
    percentageComplete: Integer of percentage on funding recived
    createdAt: String of ISO Date Format
  }

 Notification:{
    notificationId: Unique ID of each notification
    projectName: String Name of the project
    categoryName: String Name of category
    fundingGoal: Decimal number of total funding goal
    percentageComplete: Integer of percentage on funding recived
    featured: Boolean to set if this project is featured or not
    read: Boolean of user read or not
 }
    

### Improvements
There are some improvements could made with this project.

First, data source could be hosted in a database and this project should use API 
to retrieve data from database intead of hardcoding in App.vue upon creation.

Second, notification data should also be inside database, a new notication record 
will be created when any updates on project record is triggered. This application 
could get all notification initially and detect any notification is not read, 
an toast pop up will show on UI. notification record in database will be updated 
when user read that notification on UI, triggered by API.

Third, Pagination should be better present, current behaviour is showing all options
on UI. A poor layout will happen when there are more than 5 options. Either a horizon 
scroll bar could be inplemented or we could limited options bt only showing option from 
n-2 to n+2 which n represent current page selected.


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
