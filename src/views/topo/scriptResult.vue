<template>
<div>
  <el-input type="textarea" v-model="scriptResult" :rows="10"></el-input>
</div>
</template>

<script>
export default {
  props: {
    scriptResult: {
      type: String,
      default: function() {
        return '';
      }
    }
  }
}
</script>
