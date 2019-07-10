<template>
  <div class="header">
    <div class="header-search" style>
      <div class="header-nav" id="header-search" >
        <router-link to="/Search">
        <div class="search-m">
          <i class="iconfont">&#xe601;</i>
          <input
            type="text"
            @input="setAuthor($event)"
            name
            id
            style=" 
           margin-top:-0.4975rem; width:87%;"
          >
        </div>
        </router-link>
      </div>
    </div>
    <div class="header-nav">
      <routerLink class="header-nav" to="/shop">
        <i class="iconfont icon-htmal5icon29" style="color:#ccc;   margin-left: .625rem"></i>
      </routerLink>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputstr: ""
    };
  },
  methods: {
    setAuthor(event) {
        // console.log(event)
      this.$store.commit("newAuthor", event.data);
    }
  },
  computed: {
    
  }
};
</script>

<style lang="scss" scope>
.header {
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  height: 5.625rem;
  line-height: 5.625rem;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 9999;
  font-size: 1.3125rem;
  .header-nav {
    display: block;
    width: 3.125rem;
    height: 100%;
  }
  .header-search {
    border: 1px solid #ccc;
    width: 27.153rem;
    border-radius: 3.125rem;
    height: 2.75rem;
    margin-top: 1.3125rem;
    font-size: 1.75rem;
    line-height: 2.75rem;
    position: relative;
    margin-left: 1rem;
    .search-m {
      width: 100%;
      height: 100%;
      color: #a9a9;
      position: absolute;
      right: 0;
      overflow: hidden;
      span {
        font-size: 1.25rem;
      }
    }
    .search-m1 {
      position: absolute;
      right: 0.75rem;
      top: 0.0625rem;
      color: #bec2cb;
    }
    a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  i {
    font-size: 2rem;
  }
}
</style>



