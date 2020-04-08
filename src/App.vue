<template>
  <div id="app">
    <div id="nav">
       <router-link :to="{name: 'Home'}">Home</router-link> |
      <router-link :to="{name: 'Projects', params: { originalProjects: apidata }}">Projects</router-link> |
      <router-link :to="{name: 'Notifications', params: { notifications: notificationList }}" v-on:read-notification="readNotification">Notifications({{this.notificationList.filter(notification=> notification.read == false).length}})</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Projects from './views/Projects.vue'

export default {
  name: 'App',
  components: {
  },
  methods:{
    readNotification(id){
      console.log("Read Notification in app: ", id);
      this.notificationList.find(notification => notification.notificationId == id).read = true
      console.log(this.notificationList);
    },
    makeToast(append = false, content) {
        this.$bvToast.toast(content, {
          title: 'New Updates',
          autoHideDelay: 5000,
          appendToast: append
        })
      }
  },
  data(){
    return {
      apidata: [
        {
          projectId: "8182fad6-06df-4af4-9fad-311578efb835",
          projectName: "Project 1",
          projectDescription: "<p>  This project will develop a module offered to level 2 Undergraduate students and will seek to vdevelop student’s skills in collaborative working and information literacy while still advancing their discipline knowledge. The subject librarian will be invited to conduct an inquiry-based workshop with the students at the start of the module to prepare them for a literature search activity and will also provide ongoing support for students via discussion boards in the VLE. There are some contentious issues in the discipline that students historically have found problematic to analyse, these topics will be used to provide a stimulus for the literature searching activity and will then form the subject of the class debates in weeks 6 and 7. Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found. </p>",
          featured: true,
          categoryId: 1,
          categoryName: "Technology",
          fundingGoal: 5000000,
          percentageComplete: 70,
          createdAt: "2019-10-01T00:00:00",
        }, {
          projectId: "8182fad6-06df-4af4-9fad-311578efb836",
          projectName: "Project 2",
          projectDescription: "<p>  This project will develop a module offered to level 2 Undergraduate students and will seek to vdevelop student’s skills in collaborative working and information literacy while still advancing their discipline knowledge. The subject librarian will be invited to conduct an inquiry-based workshop with the students at the start of the module to prepare them for a literature search activity and will also provide ongoing support for students via discussion boards in the VLE. There are some contentious issues in the discipline that students historically have found problematic to analyse, these topics will be used to provide a stimulus for the literature searching activity and will then form the subject of the class debates in weeks 6 and 7. Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found. </p>",
          featured: false,
          categoryId: 2,
          categoryName: "Game",
          fundingGoal: 700000,
          percentageComplete: 70,
          createdAt: "2020-01-11T00:00:00",
        }, {
          projectId: "8182fad6-06df-4af4-9fad-311578efb837",
          projectName: "Project 3",
          projectDescription: "<p>  This project will develop a module offered to level 2 Undergraduate students and will seek to vdevelop student’s skills in collaborative working and information literacy while still advancing their discipline knowledge. The subject librarian will be invited to conduct an inquiry-based workshop with the students at the start of the module to prepare them for a literature search activity and will also provide ongoing support for students via discussion boards in the VLE. There are some contentious issues in the discipline that students historically have found problematic to analyse, these topics will be used to provide a stimulus for the literature searching activity and will then form the subject of the class debates in weeks 6 and 7. Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found. </p>",
          featured: false,
          categoryId: 3,
          categoryName: "Health",
          fundingGoal: 300000,
          percentageComplete: 20,
          createdAt: "2020-03-11T00:00:00",
        }, {
          projectId: "8182fad6-06df-4af4-9fad-311578efb838",
          projectName: "Project 4",
          projectDescription: "<p>  This project will develop a module offered to level 2 Undergraduate students and will seek to vdevelop student’s skills in collaborative working and information literacy while still advancing their discipline knowledge. The subject librarian will be invited to conduct an inquiry-based workshop with the students at the start of the module to prepare them for a literature search activity and will also provide ongoing support for students via discussion boards in the VLE. There are some contentious issues in the discipline that students historically have found problematic to analyse, these topics will be used to provide a stimulus for the literature searching activity and will then form the subject of the class debates in weeks 6 and 7. Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found. </p>",
          featured: true,
          categoryId: 1,
          categoryName: "Technology",
          fundingGoal: 500000,
          percentageComplete: 70,
          createdAt: "2019-01-11T00:00:00",
        }, {
          projectId: "8182fad6-06df-4af4-9fad-311578efb839",
          projectName: "Project 5",
          projectDescription: "<p>  This project will develop a module offered to level 2 Undergraduate students and will seek to vdevelop student’s skills in collaborative working and information literacy while still advancing their discipline knowledge. The subject librarian will be invited to conduct an inquiry-based workshop with the students at the start of the module to prepare them for a literature search activity and will also provide ongoing support for students via discussion boards in the VLE. There are some contentious issues in the discipline that students historically have found problematic to analyse, these topics will be used to provide a stimulus for the literature searching activity and will then form the subject of the class debates in weeks 6 and 7. Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found. </p>",
          featured: false,
          categoryId: 4,
          categoryName: "Car",
          fundingGoal: 1000000,
          percentageComplete: 10,
          createdAt: "2020-04-01T00:00:00",
        }
      ],
      notificationList: [
        {
          notificationId: 1,
          projectName: "Project 1",
          categoryName: "Car",
          fundingGoal: 1000000,
          percentageComplete: 10,
          featured: true,
          read: false
        },
        {
          notificationId: 2,
          projectName: "Project 2",
          categoryName: "Car",
          fundingGoal: 1000000,
          percentageComplete: 10,
          featured: false,
          read: false
        }
      ],
      apiUpdatedList:[]
    }
  },
  created(){
    var index = this.notificationList.length + 1;
    if(!this.apiUpdatedList.length){
      this.apiUpdatedList = [...this.apidata];
      
      this.apiUpdatedList.map(updatedEle => {
        var newNotification = {}
        newNotification.notificationId = index;
        newNotification.featured = updatedEle.featured;
        newNotification.projectName = updatedEle.projectName;
        newNotification.categoryName= updatedEle.categoryName;
        newNotification.fundingGoal= updatedEle.fundingGoal;
        newNotification.percentageComplete= updatedEle.percentageComplete;
        newNotification.read = false;
      
        this.notificationList.push(newNotification);
        index++;
        // show toast pop up
         this.$bvToast.toast(newNotification.projectName + ' has been updated', {
          title: 'New Updates',
          autoHideDelay: 5000,
          appendToast: false
        })
      })
    }else{
        // compare to local changes, not in use 
        this.apidata.map(data =>{
          if(!this.apiUpdatedList.find(element => element.projectId == data.projectId)){
              var newNotification = {}
              newNotification.notificationId = index;
              newNotification.featured = data.featured;
              newNotification.projectName = data.projectName;
              newNotification.categoryName= data.categoryName;
              newNotification.fundingGoal= data.fundingGoal;
              newNotification.percentageComplete= data.percentageComplete;
              newNotification.read = false;
              
              this.notificationList.push(newNotification);
              index++;

              this.$bvToast.toast(newNotification.projectName + ' has been updated', {
                title: 'New Updates',
                autoHideDelay: 5000,
                appendToast: false
              })
          }else{
            const targetElement = this.apiUpdatedList.find(element => element.projectId == data.projectId)
            console.log('found');
            if(targetElement.fundingGoal !== data.fundingGoal || targetElement.percentageComplete !== data.percentageComplete){
              var newNotificationObj = {}
              newNotificationObj.notificationId = index;
              newNotificationObj.featured = data.featured;
              newNotificationObj.projectName = data.projectName;
              newNotificationObj.categoryName= data.categoryName;
              newNotificationObj.fundingGoal= data.fundingGoal;
              newNotificationObj.percentageComplete= data.percentageComplete;
              newNotificationObj.read = false;
              
              this.notificationList.push(newNotificationObj);
              index++;

              this.$bvToast.toast(newNotification.projectName + ' has been updated', {
                title: 'New Updates',
                autoHideDelay: 5000,
                appendToast: false
              })
            }
          }
        })
    }

    console.log('notificationList: ',this.notificationList);
    console.log('apiUpdatedList: ',this.apiUpdatedList);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
