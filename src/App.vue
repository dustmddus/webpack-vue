<template>
  <h1>{{ msg }}</h1>
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
};
</script>

<!-- <style>
    h1 {
    color: orange;
    }
</style> -->
