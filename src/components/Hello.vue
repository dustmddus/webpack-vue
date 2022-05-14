<template>
  <h1>{{ msg }}</h1>
  <h1>{{ count }}</h1>
</template>

<script>
import sampleMixin from "~/mixins/sample";

export default{
  mixins:[sampleMixin]
};
</script>

<style scoped lang="scss">
$color: purple;
h1 {
  color: $color;
}
</style>
