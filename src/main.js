// import * as Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
// 전역 등록 해줌. 플러그인 등록
import fetchPlugin from "~/plugins/fetch";
const app=createApp(App);
// use로 등록해준다. 
app.use(fetchPlugin,{
    // 플러그인 이름 추가 가능 
    pluginName:"$myName"
});
app.mount("#app");
