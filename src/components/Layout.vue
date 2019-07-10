<template>
  <div class="Layout">
    <Dheader></Dheader>
    <Dmain></Dmain>
    <Dfooter :activeIndex="0"></Dfooter>
  </div>
</template>

<script>

import Dheader from "../components/Dheader";
import Dfooter from "../components/Dfooter";
import Dmain from "../components/Dmain";
export default {
  name: "Layout",
  components: {
    Dheader,
    Dfooter,
    Dmain
  }
};
</script>
<style lang="scss">
</style>



