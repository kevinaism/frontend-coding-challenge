<template>
  <div>
    <b-container class="bv-example-row bv-example-row-flex-cols">
      <b-row>
         <b-col cols="12">
        <header class="header">
          <h1>Project Funding Status</h1>
        </header>
         </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <ProjectFilter v-on:reset-filter="resetFilter" v-on:filter-projects="filterProject" v-bind:categoryList="this.categoryList" v-bind:maxFunding="this.maxFunding"/>
        </b-col>
      </b-row>
      <b-row class="projectElement">
        <b-col cols="4">
            <ul class="list-group" v-bind:key="project.projectId" v-for="project in this.projectList"> 
              <ProjectOverview v-bind:project="project" v-on:select-project="selectProject" />
            </ul>
        </b-col>
        <b-col cols="8"> 
          <ProjectDetail v-bind:project="this.project" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ProjectOverview from '../components/ProjectOverview.vue'
import ProjectDetail from '../components/ProjectDetail.vue'
import ProjectFilter from '../components/ProjectFilter.vue'
// import boostrap from boostrap

export default {
  name: 'Projects',
  components:{
    ProjectOverview,
    ProjectDetail,
    ProjectFilter
  },
  props:  ["projects"],
  data(){
    return{
      projectList:[]
    }
  },
  methods:{
    selectProject(id){
      this.project = this.projects.find(project => project.projectId == id)

    },
    filterProject(filter){
      // console.log('filter project in Project.vue', filter);
      // console.log('filter project in Project.vue', filter.isFeatured);
      var filteredProject = [];

      this.projects.map(project => {
      console.log(project.fundingGoal <= filter.toFunding);
        if (project.featured == filter.isFeatured 
          && (project.fundingGoal > filter.fromFunding && project.fundingGoal <= filter.toFunding)
          && project.percentageComplete > filter.minPercentage
          && (!filter.selectedCategory.length || filter.selectedCategory.includes(project.categoryName)))
          filteredProject.push(project)   
        })

      console.log(filteredProject);
      this.projectList = filteredProject
    },
    resetFilter(){
      this.projectList = this.projects
    }
  },
  created(){
    this.project = this.projects[0];
    this.projectList = [...this.projects];
    this.categoryList = [...new Set(this.projects.map(project =>  project.categoryName))]
    this.maxFunding = Math.max(...this.projects.map(project =>  project.fundingGoal))
    // console.log(this.categoryList)
    // console.log(this.maxFunding)
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

.header {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
  }

.projectElement{
  min-height: 700px;
}
</style>
