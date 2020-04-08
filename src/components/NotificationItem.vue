<template>
  <div class="hello">
     <li class="notificationItem list-group-item" 
        v-bind:class="{'readNotification': !notification.read}"
        @click="$emit('select-notification', notification.notificationId)">
        {{this.notification.featured}} {{this.notification.projectName}}({{this.notification.categoryName}}) has been updated
     </li>
  </div>
</template>

<script>
export default {
  name: 'NotificationItem',
  components:{
  },
  props:["notification"],
  data () {
    return {
        notifications: [],
    }
  },
  created() {
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

.notificationItem{
  width: 600px
}

.readNotification{
  background-color:#add8e6;
  font-weight: bold;
}
</style>
