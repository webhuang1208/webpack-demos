<template>
  <div id="container">
    <h1>{{initData}}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      initData: 'hello worldv0.2.1'
    }
  }
}
</script>
<style scoped>
  #container {
    color: red;
    display: flex;
  }
</style>