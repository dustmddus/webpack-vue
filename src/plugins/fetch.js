export default{
    install(app,options){
        // app.config.globalProperties.여기에 원하는 플러그인을 등록해주면 vue 내에서 this 키워드로 접근 가능하다
        // app.config.globalProperties.$fetch=(url,opts)=>{
        //     return fetch(url,opts).then(res=>res.json());
        // }
        //플러그인 이름으로 사용할 수 있고 이 이름이 비워져있으면 $fetch로 사용 가능하다. 
        app.config.globalProperties[options.pluginName||"$fetch"]=(url,opts)=>{
            return fetch(url,opts).then(res=>res.json());
        };
        // 아래의 과정을 플러그인으로 만든다. 
        // fetch().then(res=>res.json()).then(res=>console.log(res));
        // fetch(url,options) 받을 수 있음
    }
};