<template>
  <div class="hello">
    <b-container class="bv-example-row bv-example-row-flex-cols">
     <b-row >
       <b-col>
          <header class="notification-header">
            <h1>All Notifications ({{this.notifications.filter(notification=> notification.read == false).length}})</h1>
          </header>
       </b-col>
     </b-row>
     <b-row>
        <b-col cols="12">
          <ProjectFilter v-on:reset-filter="resetFilter" v-on:filter-projects="filterNotification" v-bind:categoryList="this.categoryList" v-bind:maxFunding="this.maxFunding" />
        </b-col>
      </b-row>
     <b-row >
        <b-col cols="12">
            <ul class="notificationList list-group" v-bind:key="notification.projectId" v-for="notification in this.notifications"> 
              <NotificationItem v-bind:notification="notification" v-on:select-notification="readNotification" />
            </ul>
        </b-col>
     </b-row>
    </b-container>
  </div>
</template>

<script>
import NotificationItem from '../components/NotificationItem.vue'
import ProjectFilter from '../components/ProjectFilter.vue'

export default {
  name: 'Notifications',
  components:{
    NotificationItem,
    ProjectFilter
  },
  props:[""],
  data () {
    return {
        notifications: [],
    }
  },
  methods:{
    readNotification(id){
      console.log("Read Notification: ", id);
      this.notifications.find(notification => notification.notificationId == id).read = true
      console.log(this.notifications);
      this.$emit('read-notification', id);
    },
    filterNotification(filter){
      // console.log('filter project in Project.vue', filter);
      // console.log('filter project in Project.vue', filter.isFeatured);
      var filteredNotification = [];

      this.originalNotificationList.map(project => {
         console.log(project.featured == filter.isFeatured);
         console.log(project.categoryName);
        if (project.featured == filter.isFeatured 
          && (project.fundingGoal > filter.fromFunding && project.fundingGoal <= filter.toFunding)
          && project.percentageComplete > filter.minPercentage
          && (!filter.selectedCategory.length || filter.selectedCategory.includes(project.categoryName)))
          filteredNotification.push(project)   
        })

      console.log(filteredNotification);
      this.notifications = filteredNotification
    },
    resetFilter(){
      this.notifications = this.originalNotificationList
    }
  },
  created() {
    console.log(this.$route.params);
    this.originalNotificationList = this.$route.params.notifications;
    this.notifications = this.$route.params.notifications;
    this.categoryList = [...new Set(this.notifications.map(project =>  project.categoryName))]
    this.maxFunding = Math.max(...this.notifications.map(project =>  project.fundingGoal))
   },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.notification-header{
  width: 600px;
  text-align: left;

}

.notificationList{
 text-align: left;
 /* //adding-left: 150px; */
}
</style>
