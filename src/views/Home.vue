<template>
    <div class="home">
        <nav class="top-bar">
            <span>
                <i class="iconfont">&#xe600;</i>
            </span>
            <span class="logo">网抑云</span>
            <span>
                <i class="iconfont">&#xe6c3;</i>
            </span>
        </nav>

        <nav class="page-paging">
            <router-link class="paging-item" to="/recommend">
                <span>推荐</span>
            </router-link>
            <router-link class="paging-item" to="/singers">
                <span>歌手</span>
            </router-link>
            <router-link class="paging-item" to="/rank">
                <span>排行</span>
            </router-link>
        </nav>

        <div class="page-content">
            <keep-alive>
                <router-view/>
            </keep-alive>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Home',
    components: {}
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: #d43c33;

  .top-bar {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    box-sizing: border-box;
    padding: 5px 10px;


    .iconfont {
      font-size: 22px;
    }

    .logo {
      font-weight: bold;
    }
  }

  .page-content {
    background-color: #fff;
    position: absolute;
    top: 90px;
    bottom: 0;
    width: 100%;
  }

  .page-paging {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    box-sizing: border-box;

    .paging-item {
      display: flex;
      flex: 1;
      justify-content: center;
      line-height: 40px;
      font-size: 12px;
      color: #fff;
      text-decoration: none;

      span {
        line-height: 20px;
        border-bottom: 2px solid #d43c33;
      }
    }

    .router-link-active {
      font-weight: bold;
      span {
        border-bottom-color: #fff;
      }
    }
  }
}
</style>