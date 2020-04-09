<template>
  <li class="overview list-group-item" v-bind:class="{'completedProject': project.percentageComplete == 100}" @click="$emit('select-project', project.projectId)">
     <b-row>
       <b-col cols="3">
         Name:
       </b-col>
       <b-col cols="7">
         {{project.projectName}}
       </b-col>
       <b-col cols="1">
         <b-icon icon="star-fill" v-show="project.featured"></b-icon>
       </b-col>
     </b-row>
     <b-row>
       <b-col cols="3">
         Category:
       </b-col>
       <b-col cols="9">
         {{project.categoryName}}
       </b-col>
     </b-row>
      <b-row>
       <b-col cols="3">
         Status:
       </b-col>
       <b-col cols="9">
          {{calculatePercentage(project.fundingGoal, project.percentageComplete)}} / {{project.fundingGoal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}
       </b-col>
     </b-row>
     <b-row>
       <b-col cols="12">
        <!-- <hr > -->
       </b-col>
     </b-row>
      <b-row>
       <b-col cols="12" class="createdate">
          {{dateDifference(project.createdAt)}} days ago
       </b-col>
     </b-row>
  </li>
</template>

<script>
export default {
  name: 'ProjectOverview',
  props:  ["project"],
  methods:{
    calculatePercentage(goal, percentage){
      // console.log('calculate', goal);
      // console.log('calculate', percentage);
      return Math.floor(parseInt(goal)* (parseInt(percentage)/100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    dateDifference(createdAt){
      // console.log('origin', createdAt);
      // console.log('created', Date.parse(createdAt));
      var createdate = Date.parse(createdAt);
      var today = Date.now()
      return (Math.floor((today - createdate) / (1000*60*60*24)));

    },
  }
}
</script>

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
.overview {
  text-align: left;

}
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.createdate{
  padding-top: 15px;
}

.completedProject{
  background-color: darkgray;
}
</style>
