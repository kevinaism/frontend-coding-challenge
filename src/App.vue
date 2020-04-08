<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Projects v-bind:projects="apidata" /> 
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Projects from './views/Projects.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    Projects,
  },
  data(){
    return {
      apidata: [
        {
          projectId: "8182fad6-06df-4af4-9fad-311578efb835",
          projectName: "Test title",
          projectDescription: "<p>  This project will develop a module offered to level 2 Undergraduate students and will seek to vdevelop student’s skills in collaborative working and information literacy while still advancing their discipline knowledge. The subject librarian will be invited to conduct an inquiry-based workshop with the students at the start of the module to prepare them for a literature search activity and will also provide ongoing support for students via discussion boards in the VLE. There are some contentious issues in the discipline that students historically have found problematic to analyse, these topics will be used to provide a stimulus for the literature searching activity and will then form the subject of the class debates in weeks 6 and 7. Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found. </p>",
          featured: true,
          categoryId: 1,
          categoryName: "Technology",
          fundingGoal: 5000000,
          percentageComplete: 60,
          createdAt: "2019-10-01T00:00:00",
        }, {
          projectId: "8182fad6-06df-4af4-9fad-311578efb836",
          projectName: "Test title",
          projectDescription: "<p>  This project will develop a module offered to level 2 Undergraduate students and will seek to vdevelop student’s skills in collaborative working and information literacy while still advancing their discipline knowledge. The subject librarian will be invited to conduct an inquiry-based workshop with the students at the start of the module to prepare them for a literature search activity and will also provide ongoing support for students via discussion boards in the VLE. There are some contentious issues in the discipline that students historically have found problematic to analyse, these topics will be used to provide a stimulus for the literature searching activity and will then form the subject of the class debates in weeks 6 and 7. Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found. </p>",
          featured: false,
          categoryId: 2,
          categoryName: "Game",
          fundingGoal: 700000,
          percentageComplete: 70,
          createdAt: "2020-01-11T00:00:00",
        }, {
          projectId: "8182fad6-06df-4af4-9fad-311578efb837",
          projectName: "Test title",
          projectDescription: "<p>  This project will develop a module offered to level 2 Undergraduate students and will seek to vdevelop student’s skills in collaborative working and information literacy while still advancing their discipline knowledge. The subject librarian will be invited to conduct an inquiry-based workshop with the students at the start of the module to prepare them for a literature search activity and will also provide ongoing support for students via discussion boards in the VLE. There are some contentious issues in the discipline that students historically have found problematic to analyse, these topics will be used to provide a stimulus for the literature searching activity and will then form the subject of the class debates in weeks 6 and 7. Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found. </p>",
          featured: false,
          categoryId: 3,
          categoryName: "Health",
          fundingGoal: 300000,
          percentageComplete: 20,
          createdAt: "2020-03-11T00:00:00",
        }, {
          projectId: "8182fad6-06df-4af4-9fad-311578efb838",
          projectName: "Test title",
          projectDescription: "<p>  This project will develop a module offered to level 2 Undergraduate students and will seek to vdevelop student’s skills in collaborative working and information literacy while still advancing their discipline knowledge. The subject librarian will be invited to conduct an inquiry-based workshop with the students at the start of the module to prepare them for a literature search activity and will also provide ongoing support for students via discussion boards in the VLE. There are some contentious issues in the discipline that students historically have found problematic to analyse, these topics will be used to provide a stimulus for the literature searching activity and will then form the subject of the class debates in weeks 6 and 7. Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found. </p>",
          featured: true,
          categoryId: 1,
          categoryName: "Technology",
          fundingGoal: 500000,
          percentageComplete: 70,
          createdAt: "2019-01-11T00:00:00",
        }, {
          projectId: "8182fad6-06df-4af4-9fad-311578efb839",
          projectName: "Test title",
          projectDescription: "<p>  This project will develop a module offered to level 2 Undergraduate students and will seek to vdevelop student’s skills in collaborative working and information literacy while still advancing their discipline knowledge. The subject librarian will be invited to conduct an inquiry-based workshop with the students at the start of the module to prepare them for a literature search activity and will also provide ongoing support for students via discussion boards in the VLE. There are some contentious issues in the discipline that students historically have found problematic to analyse, these topics will be used to provide a stimulus for the literature searching activity and will then form the subject of the class debates in weeks 6 and 7. Students will be required to submit a reflective report on their literature search with an annotated bibliography to demonstrate their assessment of the quality of the resources they have found. </p>",
          featured: false,
          categoryId: 4,
          categoryName: "Car",
          fundingGoal: 1000000,
          percentageComplete: 10,
          createdAt: "2020-04-01T00:00:00",
        }
      ],
      updatedDate:[]
    }
  },
  created(){

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
  margin-top: 60px;
}
</style>
