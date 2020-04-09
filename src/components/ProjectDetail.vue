<template>
  <div class="detail">
    <b-row>
      <b-col cols="8">
        <b-row>
          <b-col cols="5">
            Name: 
          </b-col>
          <b-col cols="6">
            {{project.projectName}}
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="5">
            Category: 
          </b-col>
          <b-col cols= "6">
            {{project.categoryName}}
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="5">
            Goal: 
          </b-col>
          <b-col cols= "6">
            {{getGoal(project.fundingGoal)}}
          </b-col>
        </b-row>
     </b-col>
     <b-col cols="4">
       <div>
         <img :src="getPath()">
       </div>
     </b-col>
    </b-row>
    <b-row class="progressBar">
      <b-col cols="3">
        Progress: 
      </b-col>
      <b-col cols= "9" >
        <b-progress class="mt-2" :max="project.fundingGoal" show-value animated height="2rem">
          <b-progress-bar :value="project.fundingGoal * (project.percentageComplete/ 100)" v-bind:class="{'completeBar': project.percentageComplete == 100}"/>
        </b-progress>
      </b-col>
    </b-row>
    <b-row class="description-header">
      <b-col>
        Description: 
      </b-col>
    </b-row>
    <b-row>
      <b-col class="description-detail">
        <div v-html="project.projectDescription" />
      </b-col>
    </b-row>
    <b-row class="bottom">
      <b-col> 
        Ceated: {{getDate(project.createdAt)}}
      </b-col>
    </b-row>
  </div>
</template>

<script>
import categoryIconMap from '../constants/CategoryIconMap.js';

export default {
  name: 'ProjectDetail',
  props:  ["project"],
  methods:{
    calculatePercentage(goal, percentage){
      return parseInt(goal)* (1 - parseInt(percentage) /100)
    },
    getDate(createdAt){
      return createdAt.split('T')[0];
    },
    getGoal(goal) {
    return goal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    getPath(){
      // console.log('get src path');
      // console.log("../assets/"+ categoryIconMap[this.project.categoryId] +".png");
      return require("../assets/"+ categoryIconMap[this.project.categoryId] +".png");
    }
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
.detail {
  font-size: 40px;
  text-align: left;
}
.description-header{
  font-size: 20px;
  padding-top: 50px;
}
.description-detail{
  font-size: 16px;
  margin: 30px;
}
.progressBar {
    /* //display: flex; */
    align-items: center;
    justify-content: center;
}
.bottom{
  position: absolute; 
  font-size: 20px;
  bottom: 0px;     
}

.completeBar{
  background-color: #32CD32;
}

</style>
