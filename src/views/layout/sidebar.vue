<template>
  <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
    <!--导航菜单-->
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo scrollBar" @open="handleopen" @close="handleclose" @select="handleselect"
       unique-opened  v-show="!collapsed" theme="dark">
      <template v-for="(item,index) in menuList" v-if="!item.hidden">
        <el-submenu :index="index+''" v-if="!item.leaf">
          <template slot="title"><i :class="item.icon"></i>{{item.name}}</template>
          <el-menu-item v-for="child in item.children" :key="child.id" :index="child.displayName+'/'+child.id" :route="child" v-if="!child.hidden">{{child.name}}</el-menu-item>
        </el-submenu>
        <el-menu-item v-if="item.leaf&&item.children==null" :index="item.displayName+'/'+item.id" :route="item"><i :class="item.icon"></i>{{item.name}}</el-menu-item>
      </template>
    </el-menu>
    <!--导航菜单-折叠后-->
    <ul class="el-menu el-menu-vertical-demo el-menu--dark collapsed" v-show="collapsed" ref="menuCollapsed">
      <li v-for="(item,index) in menuList" v-if="!item.hidden" class="el-submenu item">
        <template v-if="!item.leaf">
          <div class="el-submenu__title" style="padding-left: 12px;" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"><i :class="item.icon"></i></div>
          <ul style="max-height:280px; max-width:200px" class="el-menu submenu scrollBar" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)">
            <li v-for="child in item.children" v-if="!child.hidden" class="el-menu-item" style="padding-left: 40px;" :class="$route.name==child.displayName?'is-active':''" @click="handleClick(child)">{{child.name}}</li>
          </ul>
        </template>
        <template v-else>
          <li class="el-submenu">
            <div class="el-submenu__title el-menu-item" style="padding-left: 14px;height: 56px;line-height: 56px;padding: 0 14px;" :class="$route.name==item.displayName?'is-active':''" @click="handleClick(item)"><i :class="item.icon"></i></div>
          </li>
        </template>
      </li>
    </ul>
  </aside>
</template>

<script>
import {mapState, mapActions}   from 'vuex'
export default {
  props:['collapsed',"menuList"],
  methods: {
    // // ...mapActions(['getMenuList'])
    // getMenuList: function() {
    //   // this.$store.dispatch('getMenuList');
    // },
    handleopen() {
      //console.log('handleopen');
    },
    handleClick(menuItem){
      if (menuItem.displayName.startsWith('/')){
        this.$router.push({path:menuItem.displayName,query:{grsNo:menuItem.params}})
      }else{

        this.$router.push({name:menuItem.displayName,query:{_:Math.random()},params:{grsNo:menuItem.params}})
      }

    },
    handleclose() {
      //console.log('handleclose');
    },
    handleselect: function (a, b,item) {
      //为什么要在index 上加上 /id ，详看el-menu-item 源码，作用 避免相同path 出现多个active 样式
      if (item.route.params !=null && item.route.params != ''){

        //最好统一用 name 跳转 ，这要可以携带数据超长的params，query 有限制
        //如果 displayName 是/path/.. 则 $router.push({path:'',query:{}}),否则 $router.push({name:'',params:{}})
        if (item.route.displayName.startsWith('/')){


          this.$router.push({path:item.route.displayName,query:{grsNo:item.route.params}})
        }else{

          this.$router.push({name:item.route.displayName,query:{_:Math.random()},params:{grsNo:item.route.params}})
        }

      }else{
        console.log(1-1);
        this.$router.push({path:item.route.displayName})
      }

    },
    showMenu(i,status){
      this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
    },
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../assets/sass/mixin.scss";
.scrollBar {
  overflow-x: hidden;
  overflow: auto;
  @include scrollBar;
}
</style>
