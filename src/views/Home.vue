<template>
  <div>
    <header class="header">
      <h1>Frontend Coding Challenge</h1>
    </header>
    <p class="content">
      Making use of vue.js, create an API consumer featuring a listing page, 
      <br />
      a notification widget (in the form of a dropdown menu), 
      <br />
      and a toast style popup to work alongside the notification widget.
    </p>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
  .header {
    /* background: #333; */
    color: #333;
    text-align: center;
    padding: 10px;
  }

  .header a {
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
  }
  .content{
    text-align: center;
  }

</style>


