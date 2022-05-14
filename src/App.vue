<template>
  <h1>설문 조사</h1>
  <TextField v-model="fields[0].value" />
  </template>
  <script>
    import TextField from "~/components/fields/TextField";

    export default {
    components:{
    TextField
    }
    data(){
    return{
    fields:[
    {
    component:"TextField",
    title:"이름",
    value:""
    },
    {
    component:"SimpleRadio",
    title:"나이대",
    value:"",
    item:["20대","30대","40대","50대"]
    }
    ]
    };
    }
    };
  </script>
