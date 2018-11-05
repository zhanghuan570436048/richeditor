<template>
  <div id="fueditor">
      {{msg}}
      <ComEditor></ComEditor>
  </div>
</template>

<script>
import ComEditor from './comeditor.vue'
export default {
  name: 'fueditor',
  components: {
    ComEditor
  },
  data () {
    return {
      msg: 'fueditor'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
