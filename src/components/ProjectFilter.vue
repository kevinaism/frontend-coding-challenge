<template>
  <div>
    <b-row class="filter">
      <b-col cols="2">
        Feature
         <b-form-checkbox label="Feature:" v-model="isFeatured" @change="checkIsFeature($event)" name="isFeatures" switch />
      </b-col>
      <b-col cols="2">
         <b-form-group label="Category: ">
          <b-form-checkbox-group
            v-model="selectedCategory"
            :options="categoryList"
            plain
            stacked
            @change="checkSelectedCategory($event)"
           ></b-form-checkbox-group>
          </b-form-group>
      </b-col>
      <b-col cols="3">
        Funding Goal:
        <b-form-input type="number" v-model="fromFunding" :min="0" @change="checkfromFunding($event)"></b-form-input>
        to
        <b-form-input type="number" v-model="toFunding" :max="maxFunding" @change="checkToFunding($event)"></b-form-input>
      </b-col>
      <b-col cols="4">
        <div>
          <label for="range-1">Minimum Percentage Completion:{{this.percentage}}</label>
          <b-form-input id="range-1" v-model="percentage" type="range" min="0" max="100" @change="checkPercentage($event)"></b-form-input>
          <!-- <div class="mt-2">Value: {{this.percentage}}</div> -->
        </div>
      </b-col>
      <b-col>
        <div>
         <b-button variant="link" @click="resetFilter(event)">clear</b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'ProjectFilter',
  props:  ["categoryList", "maxFunding"],
  data(){
    return { 
      isFeatured: false,
      selectedCategory:[],
      percentage: 0,
      fromFunding: 0,
      toFunding : this.maxFunding,
      filterOption:{
        isFeatured: false,
        selectedCategory: [],
        fromFunding: 0,
        toFunding: this.maxFunding,
        minPercentage:0,
      }
    }
  },
  methods:{
    checkIsFeature(isFeatured){
      console.log('event', isFeatured);
      this.filterOption.isFeatured = isFeatured
       this.$emit('filter-projects', this.filterOption);
      
    },
    checkSelectedCategory(selectedCategory){
      this.filterOption.selectedCategory = selectedCategory
      console.log('event', selectedCategory);
      this.$emit('filter-projects', this.filterOption);
       //this.$emit('filter-projects', isFeatured);
      
    },
    checkPercentage(percentage){
      this.filterOption.minPercentage = percentage
      console.log('event', percentage);
      this.$emit('filter-projects', this.filterOption);
    },
    checkfromFunding(min){
      this.filterOption.fromFunding = min
      console.log('event', min);
      this.$emit('filter-projects', this.filterOption);
    },
    checkToFunding(max){
      this.filterOption.toFunding = max
      console.log('event', max);
      this.$emit('filter-projects', this.filterOption);
    },
    resetFilter(){
      this.isFeatured = false;
      this.selectedCategory = [];
      this.percentage = 0;
      this.fromFunding = 0;
      this.toFunding = this.maxFunding;
      this.$emit('reset-filter');
    }
  },
   created(){
    this.isFeatured = false;
    this.selectedCategory = [];
    this.percentage = 0;
  }
}
</script>

<style scoped>
.filter{
  text-align: left;
}

</style>
