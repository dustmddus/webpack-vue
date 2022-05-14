<template>
  <button>
    <!-- 기본값을 Fallback content라고 한다.  -->
    <slot>Leon</slot>
  </button>
</template>

<style scoped lang="scss">
button{
  padding:10px 20px;
  &:hover{
    background-color: hotpink;
    transform: scale(1.2);
  }
}
</style>