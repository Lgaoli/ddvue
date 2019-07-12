<template>
  <div style="background:#fff">
    <div class="IntegralE-header">
      <div class="back" @click="back">
        <i class="iconfont" style="
    font-size: 2.9rem;
">&#xe79b;</i>
      </div>
      <div class>提现说明</div>
      <div class="shop"></div>
    </div>
    <div class="IntegralE-main" style="padding:1.25rem">
      <div>
        &nbsp;&nbsp;&nbsp;1.欢迎您与各我方平台经营者（详见定义条款）共同签
        署本《用户服务协议》(下称“本协议”)并使用我方平台服务！
      </div>
      <div>
        &nbsp;&nbsp;&nbsp;2. 各条款标题仅为帮助您理解该条款表达的主旨之用，
        不影响或限制本协议条款的含义或解释。为维护您自身权益，
        建议您仔细阅读各条款具体表述。
      </div>
      <div>
        &nbsp;&nbsp;&nbsp;
        3. 【审慎阅读】您在申请注册流程中点击同意本协议之前，
        应当认真阅读本协议。请您务必审慎阅读、充分理解各条款
        内容，特别是免除或者限制责任的条款、法律适用和争议解
        决条款。免除或者限制责任的条款将以粗体下划线标识，您
        应重点阅读。如您对协议有任何疑问，可向我方平台客服咨
        询。
      </div>
    </div>
    <div>&nbsp;&nbsp;&nbsp;4.10积分=1块钱，每满1000积分可提现。</div>
  </div>
</template>


<script>
export default {
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    }
  }
};
</script>

<style lang="scss">
.IntegralE-header {
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  height: 4.5rem;
  line-height: 4.5rem;
  top: 0;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  position: fixed;
  justify-content: space-between;
  z-index: 9999;
  font-size: 1.9375rem;

  i {
    color: #060606;
    font-size: 2.125rem;
  }
  .back {
    font-size: 1.682667rem;
    text-align: center;
    height: 100%;
    line-height: 4.5rem;
  }
  .shop {
    width: 3.125rem;
    text-align: center;
    height: 100%;
    line-height: 4.5rem;
  }
}
.IntegralE-main {
  margin-top: 4.5rem;
  div {
    margin-top: 0.8rem;
    
    line-height: 1.8rem;

  }
}
</style>
