<template>
  <div class="StudyDetails" >
    <div v-for="(item,index) in Studycomment" :key="index">
    <div class="StudyDetails-header">
      <div style="padding:1.35rem;background: #fff;">
        <img :src="item.image" style="width:100%">
        <div>
          <p style="padding:1.3rem 0;color:#333;font-weight:600">
            {{item.title}}
          </p>
          <p class="text-time">时间：{{item.create_time}}&nbsp;&nbsp;&nbsp;阅读：{{item.watch}}</p>
        </div>
      </div>
    </div>
    <div class="StudyDetails-main">
      <div class="context" v-html="item.content">
  
     </div>
    </div>
</div>
  </div>
</template>


<script>
import { Config } from "../../uitls/config";
export default {
  data() {
    return {
      article: [],
      Studycomment: []
    };
  },
  created() {
    var id = this.$route.query.id;
    var that = this;

    var that = this;
    this.$axios
      .get(Config.restUrl + "api/v2/study/article/" + id)
      .then(function(res) {
        that.Studycomment.push(res.data) ;
        console.log(that.Studycomment)
      })
      .catch(function(error) {
        // console.log(error);
      });
  }
};
</script>

<style lang="scss">
.StudyDetails {
  .StudyDetails-header {
    border-bottom: 1px solid #dedede;
    .text-time {
      font-size: 1rem;
      color: #999;
    }
  }
  .StudyDetails-main {
    padding: 1.3rem;
    .context {
      p {
        text-align: justify;
        text-justify: inter-ideograph;

      }
      p /deep/ img{
        width: 100%
      }
    }
  }
}
</style>

