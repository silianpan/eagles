<template>
<div class="introduce">
  <el-row>
    <div class="info-head">
      <i class="icon-head"></i>
    </div>
    <div class="info-container">
      <span class="name">silianpan</span>
      <p>
        <span class="brief">重剑无锋，大巧不工</span>
      </p>
      <p>
        <span class="life">听听音乐、看看电影、编编代码、品品生活</span>
      </p>
      <p>
        <a href="https://github.com/silianpan">
          <img :src="githubCodeImg" class="imgsize"/>
        </a>
        <a href="https://silianpan.github.io/">
          <img :src="githubImg" class="imgsize"/>
        </a>
        <a href="http://weibo.com/2135963927/profile?topnav=1&wvr=6&is_all=1">
          <img :src="weibo" class="imgsize">
        </a>
        <a href="http://weibo.com/2135963927/profile?topnav=1&wvr=6&is_all=1">
          <img :src="bokeyuan" class="imgsize">
        </a>
        <a href="https://www.zhihu.com/people/silianpan/">
          <img :src="zhihu" class="imgsize">
        </a>
      </p>
    </div>
  </el-row>
  <el-row>
  <div>
    <p> 纵横江湖三十余载，杀尽仇寇，败尽英雄，天下更无敌手，无可柰何，惟隐居深谷，以雕为友。呜呼，生平求一敌手而不可得，诚寂寥难堪也。剑魔独孤求败既无敌于天下，乃埋剑于斯。呜呼！群雄束手，长剑空利，不亦悲夫！<br><br> 第一柄剑长四尺，锋利无比，剑下石片下写着：「凌厉刚猛，无坚不摧，弱冠前以之与河朔群雄争锋。」<br><br> 第二片石片上没有剑，下面写着：「紫薇软剑，三十岁前所用，误伤义士不祥，悔恨无已，乃弃之深谷。」<br><br> 剑魔独孤求败的第三把武器：「重剑无锋，大巧不工。四十岁前恃之横行天下。」外表黑黝，剑身深黑之中隐隐透出红光，三尺多长，共重八八六十四斤，两边剑锋都是钝口，剑尖圆圆的似是个半球。<br><br> 第四个阶段才是渐入化境，第四柄木剑，石片上文字道：「四十岁之后不滞于物，草木竹石均可为剑。自此精进，渐入无剑胜有剑之境。」             —————《神雕侠侣》</p>
  </div>
  </el-row>
</div>
</template>

<script>
import {STATIC_IMAGEPATH} from 'src/config'
export default {
  data() {
    return {
      githubCodeImg: STATIC_IMAGEPATH + 'github1.png',
      githubImg: STATIC_IMAGEPATH + 'github.png',
      weibo: STATIC_IMAGEPATH + 'sinaweibo.png',
      bokeyuan: STATIC_IMAGEPATH + 'bokeyuan.png',
      zhihu: STATIC_IMAGEPATH + 'zhihu.png'
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .icon-head {
    background: url("../../assets/img/head.jpg") no-repeat scroll 0 0;
    background-size: 180px 180px;
    width: 180px;
    height: 180px;
    display: inline-block;
  }

  .introduce {
    margin: 20px 40px;
  }
  .imgsize {
    width:50px;
    height:50px
  }

  .name {
    font-family: "Microsoft YaHei";
    font-size: 40px;
    line-height: 60px;
  }

  .brief {
    font-size: 20px;
    line-height: 40px;
  }

  .life {
    font-size: 16px;
    line-height: 30px;
  }

  .info-container {
    margin-left: 220px;
  }

  .info-head {
    float: left;
  }
</style>
