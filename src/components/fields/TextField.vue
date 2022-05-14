<template>
  <div>
    <h3>{{ title }}</h3>
    <input
      :value="modelValue"
      type="text" 
      @input="$emit('update:modelValue',$)" />
  </div>
</template>

<script>
export default{
    props:{
        title:{
            type:String,
            default:""
        },
        //양방향 바인딩
        modelValue:{
            type:String,
            default:""
        }
    }
};
</script>