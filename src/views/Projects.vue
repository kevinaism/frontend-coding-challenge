<template>
  <div>
    <b-container class="bv-example-row bv-example-row-flex-cols">
      <b-row>
         <b-col cols="12">
          <Header />
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
            <div class="pagination">
              <b-list-group horizontal>
                 <b-list-group-item v-bind:key="n" v-for="n in this.totalPage" 
                                    @click="pagination(n)">{{n}} </b-list-group-item>
              </b-list-group>
            </div>
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
import Header from '../components/Header.vue'
// import boostrap from boostrap

export default {
  name: 'Projects',
  components:{
    ProjectOverview,
    ProjectDetail,
    ProjectFilter,
    Header
  },
  props:  ["project"],
  data(){
    return{
      projectList:[],
      projects:[
        // {
        //   projectId: "8182fad6-06df-4af4-9fad-311578efb835",
        //   projectName: "Test title",
        //   projectDescription: "<p>  This project will develop a module offered to level 2 Undergraduate students and will seek to vdevelop student’s skills in collaborative working and information literacy while still advancing their discipline knowledge. The subject librarian will be invited to conduct an inquiry-based workshop with the students at the start of the module to prepare them for a literature search activity and will also provide ongoing support for students via discussion boards in the VLE. There are some contentious issues in the discipline that students historically have found problematic to analyse, these topics will be used to provide a stimulus for the literature searching activity and will then form the subject of the class debates in weeks 6 and 7. Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found. </p>",
        //   featured: true,
        //   categoryId: 1,
        //   categoryName: "Technology",
        //   fundingGoal: 5000000,
        //   percentageComplete: 60,
        //   createdAt: "2019-10-01T00:00:00",
        // }, {
        //   projectId: "8182fad6-06df-4af4-9fad-311578efb836",
        //   projectName: "Test title",
        //   projectDescription: "<p>  This project will develop a module offered to level 2 Undergraduate students and will seek to vdevelop student’s skills in collaborative working and information literacy while still advancing their discipline knowledge. The subject librarian will be invited to conduct an inquiry-based workshop with the students at the start of the module to prepare them for a literature search activity and will also provide ongoing support for students via discussion boards in the VLE. There are some contentious issues in the discipline that students historically have found problematic to analyse, these topics will be used to provide a stimulus for the literature searching activity and will then form the subject of the class debates in weeks 6 and 7. Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found. </p>",
        //   featured: false,
        //   categoryId: 2,
        //   categoryName: "Game",
        //   fundingGoal: 700000,
        //   percentageComplete: 70,
        //   createdAt: "2020-01-11T00:00:00",
        // }, {
        //   projectId: "8182fad6-06df-4af4-9fad-311578efb837",
        //   projectName: "Test title",
        //   projectDescription: "<p>  This project will develop a module offered to level 2 Undergraduate students and will seek to vdevelop student’s skills in collaborative working and information literacy while still advancing their discipline knowledge. The subject librarian will be invited to conduct an inquiry-based workshop with the students at the start of the module to prepare them for a literature search activity and will also provide ongoing support for students via discussion boards in the VLE. There are some contentious issues in the discipline that students historically have found problematic to analyse, these topics will be used to provide a stimulus for the literature searching activity and will then form the subject of the class debates in weeks 6 and 7. Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found. </p>",
        //   featured: false,
        //   categoryId: 3,
        //   categoryName: "Health",
        //   fundingGoal: 300000,
        //   percentageComplete: 20,
        //   createdAt: "2020-03-11T00:00:00",
        // }, {
        //   projectId: "8182fad6-06df-4af4-9fad-311578efb838",
        //   projectName: "Test title",
        //   projectDescription: "<p>  This project will develop a module offered to level 2 Undergraduate students and will seek to vdevelop student’s skills in collaborative working and information literacy while still advancing their discipline knowledge. The subject librarian will be invited to conduct an inquiry-based workshop with the students at the start of the module to prepare them for a literature search activity and will also provide ongoing support for students via discussion boards in the VLE. There are some contentious issues in the discipline that students historically have found problematic to analyse, these topics will be used to provide a stimulus for the literature searching activity and will then form the subject of the class debates in weeks 6 and 7. Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found. </p>",
        //   featured: true,
        //   categoryId: 1,
        //   categoryName: "Technology",
        //   fundingGoal: 500000,
        //   percentageComplete: 70,
        //   createdAt: "2019-01-11T00:00:00",
        // }, {
        //   projectId: "8182fad6-06df-4af4-9fad-311578efb839",
        //   projectName: "Test title",
        //   projectDescription: "<p>  This project will develop a module offered to level 2 Undergraduate students and will seek to vdevelop student’s skills in collaborative working and information literacy while still advancing their discipline knowledge. The subject librarian will be invited to conduct an inquiry-based workshop with the students at the start of the module to prepare them for a literature search activity and will also provide ongoing support for students via discussion boards in the VLE. There are some contentious issues in the discipline that students historically have found problematic to analyse, these topics will be used to provide a stimulus for the literature searching activity and will then form the subject of the class debates in weeks 6 and 7. Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found. </p>",
        //   featured: false,
        //   categoryId: 4,
        //   categoryName: "Car",
        //   fundingGoal: 1000000,
        //   percentageComplete: 10,
        //   createdAt: "2020-04-01T00:00:00",
        // }
      ],
      filteredResult:[],
      totalPage: 0,
      itemPerPage: 5,
    }
  },
  methods:{
    pagination(page){
      console.log('select page',page);
      const fromNum = (page-1)*this.itemPerPage;
      const toNum = page*this.itemPerPage;

      console.log(fromNum);
      console.log(toNum);
      this.projectList = this.filteredResult.slice(fromNum , toNum);
      console.log(this.projectList.slice(fromNum , toNum));
    },
    selectProject(id){
      console.log('select project');
      this.project = this.projectList.find(project => project.projectId == id)
      console.log(this.project);

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
      this.filteredResult = filteredProject;
      this.projectList = filteredProject
    },
    resetFilter(){
      this.projectList = this.projects
    }
  },
  created(){
    console.log(this.$route.params)
    this.projects = this.$route.params.originalProjects;
    console.log(this.projects)
    this.project = this.projects[0];
    this.projectList = [...this.projects];
    this.categoryList = [...new Set(this.projects.map(project =>  project.categoryName))]
    this.maxFunding = Math.max(...this.projects.map(project =>  project.fundingGoal))

    this.totalPage = Math.ceil(this.projects.length/this.itemPerPage);
    this.filteredResult = [...this.projects];
    this.projectList = [...this.projects].slice(0,this.itemPerPage);
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

.pagination{
  justify-content: center;
}
</style>
