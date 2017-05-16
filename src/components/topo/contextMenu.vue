<template>
  <ul class="topomenu" :id="contextMenuDomId" style="display:none;">
    <div class="split_line" v-for="group in contextMenuBts">
      <li v-for="btn in group"><a :id="btn.domId" href="javascript:;"><i :class="btn.icon"></i>{{btn.label}}</a></li>
    </div>
  </ul>
</template>
<script>

export default {
  props: {
    contextMenuBts: {
      style: Array,
      default: function() {
        return []
      }
    },
    contextMenuDomId: {
      style: String,
      default: function() {
        return 'contextMenuDefaultDomId'
      }
    }
  }
}
</script>
