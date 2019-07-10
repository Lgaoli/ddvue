<template>
  <div class="Sudoku">
    <div class="Sud-list">
      <img src="../assets/img/点.png" alt>
      <p>新人专区</p>
    </div>
    <div class="Sud-list">
      <img src="../assets/img/点.png" alt>
      <p>我要开店</p>
    </div>
    <div class="Sud-list">
      <img src="../assets/img/精.png" alt>
      <p>联系客服</p>
    </div>
    <div class="Sud-list">
      <img src="../assets/img/选.png" alt>
      <p>品牌直供</p>
    </div>
  </div>
</template>
<style lang="scss">
.Sudoku {
  width: 100%;
  height: 6.75rem;
  display: flex;
justify-content: space-around;
margin-top: 1.25rem;
  .Sud-list {
    height: 7rem;
    text-align: center;
    img {
      width: 4.6875rem;
      height: 4.6875rem;
    }
  }
}
</style>
