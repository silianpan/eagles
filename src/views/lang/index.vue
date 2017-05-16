<template>
  <div>
    <!-- <el-select v-model="locale" size="small" style="width:100px">
      <el-option v-for="(item,key,index) in langs" :key="index" :label="$t('locales.' + key)" :value="key">
      </el-option>
    </el-select> -->
    <el-dropdown @command="handleCommandSkin" trigger="hover" class="eldropdown">
      <span class="el-dropdown-link lang">{{$t('skin')}}</span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(item,index) in skins" :key="index" :command="item.name">{{item.label}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dropdown @command="handleCommand" trigger="hover">
      <span class="el-dropdown-link lang">{{$t('locales.' + locale)}}</span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(item,key,index) in langs" :key="index" :command="key">{{$t('locales.' + key)}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
</div>
</template>
<script>
import {LANGS} from 'i18n/lang'
import Vue from 'vue'
export default {
  data(){
    return {
      locale: 'zh-CN',
      langs: LANGS,
      skins: [{name:'default',label:this.$t('default')},{name:'purple',label:this.$t('purple')}],
    };
  },
  mounted() {
    // this.$i18n.locale = this.locale;
    Vue.config.lang = this.locale;
  },
  methods: {
    handleCommand(command) {
      this.locale = command;
      Vue.config.lang = this.locale;
    },
    handleCommandSkin(command) {
      switch (command) {
        case 'purple':
          $('.container').addClass('custom-theme');
          $('.header').css('background-color','#7B7DE5');
          break;
        default:
          $('.container').removeClass().addClass('el-row container');
          $('.header').css('background-color','#20A0FF');
          break;
      }
    }
  },
  // watch: {
  //   locale (val) {
  //     // this.$i18n.locale = val
  //     Vue.config.lang = val
  //   }
  // }
}
</script>
<style scoped>
  .lang {
    cursor: pointer;
    color: #fff;
  },
  .eldropdown {
    margin-right: 5px;
  },
  .skin {
    /*margin-top: 3px;*/
    cursor: pointer;
  }
</style>
