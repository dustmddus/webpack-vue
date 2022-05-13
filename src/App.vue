<template>
  <h1 v-if="msg" class="message" @click="log">
    {{ msg }}
  </h1>
  <div></div>
  <!-- 굳이 닫힘태그가 없어도 된다.  -->
  <Hello />
</template>

<script>
// 지역등록 해줌
//
import Hello from "~/components/Hello";

export default {
  components: {
    Hello,
  },
  data() {
    return {
      msg: "Hello Webpack??..",
    };
  },
  methods: {
    log() {
      window.addEventListener();
      document.querySelector();
    },
  },
};
</script>

<!-- <style>
    h1 {
    color: orange;
    }
</style> -->
