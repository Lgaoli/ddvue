<template>

    <ul class="_cart-ul">
      <li class="item-container" v-for="(item,index) in cartlist" :key="index">
        <!--商品复选框-->
        <label :for="'checkbox'+item.item_id">
          <span :class="['checkobx',item.is_sel ? 'active':'']">
            <i></i>
          </span>
        </label>
        <input @change="selItem(item.item_id)" :id="'checkbox'+item.item_id" type="checkbox" v-show="false">
        <!--商品图片-->
        <img :src="item.item_img" alt="" class="item-img">
        <div class="inline-block item-detail">
          <!--商品名称-->
          <p class="item-name">{{item.item_name}}</p>

          <div class="clearfix">
            <section class="fr">
              <!--商品操作减少-->
              <icon-font  @click.native="minus_item(item.item_id)" iconclass="minus" class="minus-icon"></icon-font>
              <!--商品数量-->
              <input type="text" class="item-number" :value="item.item_num">
              <!--商品操作增加-->
              <icon-font @click.native="add_item(item.item_id)" iconclass="add" class="add-icon"></icon-font>
            </section>
          </div>
          <!--商品价格-->
          <p class="item-single-price">¥{{item.item_price}}</p>
        </div>
      </li>
    </ul>



</template>

<script>
    import {mapState,mapGetters,mapActions,mapMutations} from 'vuex';
    export default {
        name  : "basecart",
        methods:{
          ...mapMutations({
            add_item   : 'increment',
            minus_item : 'decrement',
            selItem    : 'selected_goods',
          })
        },
        data(){
          return {
          }
        },
        computed:{
          ...mapState({
            cartlist:state=>state.cart.cartList,
          }),
        }

    }
</script>

<style scoped lang="scss">

  ._cart-ul{
    font-family: PingFang-SC-Medium;
    color:rgba(43,43,43,1);
    font-size: rem(28);
    margin-bottom:rem(240);
  }
  p{
    margin:0;
    padding:0;
  }
  .item-container{
     /*background: aqua;*/
     margin-bottom:rem(21);
     /*购物车中的商品图片*/
     >img{
    
       vertical-align: middle;
     }
     //购物车中的复选框
     .checkobx{
       display: inline-block;
       position:relative;

       border-radius: 50%;
       background: #ccc;
       vertical-align: middle;
       transition: all 0.5s ease;
       margin-right: rem(25);
     }
    .checkobx.active{
      background: red;
      i{
        position:absolute;
        cotent:'';
        display: inline-block;
        width: 5px;
        height: 10px;
        top: 1px;
        right: 5px;
        transform: rotate(45deg);
        border:1px solid white;
        border-top:none;
        border-left:none;
      }
    }

    //商品详情框
    .item-detail{
      vertical-align:top;
      width:rem(390);
      margin-left:rem(9);
      >p.item-name{
        height:rem(70);
        overflow: hidden;
        text-align: left;

        margin-bottom: rem(29);
      }
      //商品输入框
      .item-number{
  
        box-sizing: border-box;
        text-align: center;
      }
      .minus-icon{
        margin-right:rem(28);
        vertical-align: -4px;
      }
      .add-icon{
        margin-left:rem(28);
        vertical-align: -4px;
      }
      .minus-icon,.add-icon{
        font-size:18px;
      }
      //商品价格
      .item-single-price{
        color:red;
        text-align: left;
      }
    }

  }

</style>
