(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f33922b"],{"1e4b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("my-map",{attrs:{height:"66rem",zoom:10,adapter:e.defaultAdapter,center:[116.478928,39.497761]}},[a("my-map-layers",{attrs:{layers:e.layers2,placement:"right-top",margin:10}}),a("my-map-layers",{attrs:{layers:e.layers,placement:"right-bottom",margin:10}}),e._l(50,(function(t){return a("my-map-scatter",{key:t,attrs:{coordinate:e.getCoordinate(),delay:5e3*Math.random()}})})),a("my-map-track",{attrs:{coordinates:e.coordinates,period:20,effect:e.effect}}),a("my-map-track",{attrs:{coordinates:e.coordinates2,period:20,effect:e.effect}})],2)},r=[],i=(a("d81d"),a("4fad"),a("ac1f"),a("5319"),a("5cda")),s=a("922f"),o=a("19f3"),c=a("7fa8"),l=a("0ed7"),p=a("3835"),u=a("2b0e"),f=a("6284"),d=a.n(f),m=a("f5ac"),h=a.n(m),y=a("63c9"),C=a.n(y),O=a("b47b"),b=a.n(O),g=a("210c"),v=a.n(g),S=a("5b7e"),w=a.n(S),x=a("a784"),M=a.n(x),G=a("f027"),k=a.n(G),j=a("4e6f"),A=a.n(j),E=a("fc08"),B=a.n(E),N=a("ec60"),P=a("03f7"),W=a("21af"),_=a.n(W),z={ChinaOnlineCommunity:v.a,ChinaOnlineCommunityENG:w.a,ChinaOnlineStreetGray:M.a,ChinaOnlineStreetWarm:k.a,ChinaOnlineStreetPurplishBlue:A.a},J={data:function(){return{layers:null,defaultAdapter:null,layers2:[{title:"天地图",adapter:"TDT",preview:b.a},{title:"百度",adapter:"Baidu",preview:d.a},{title:"高德",adapter:"Amap",preview:h.a},{title:"OSM",adapter:"OSM",preview:C.a}],coordinates:[[116.478928,39.997761],[116.478907,39.998422],[116.479384,39.998546],[116.481053,39.998204],[116.481793,39.997868],[116.482898,39.998217],[116.483789,39.999063],[116.484674,39.999844]],coordinates2:[[116.478928,39.697761],[116.478907,39.698422],[116.479384,39.688546],[116.481053,39.697204],[116.481793,39.698868],[116.482898,39.698317],[116.483789,39.699763],[116.484674,39.699244]],effect:_.a}},methods:{createLayers:function(){var e={ChinaOnlineStreetPurplishBlue:"蓝黑版",ChinaOnlineCommunity:"彩色版",ChinaOnlineCommunityENG:"彩色英文版",ChinaOnlineStreetGray:"灰色版",ChinaOnlineStreetWarm:"暖色版"},t="https://map.geoq.cn/ArcGIS/rest/services/{name}/MapServer/tile/{z}/{y}/{x}";return Object.entries(e).map((function(e){var a=Object(p["a"])(e,2),n=a[0],r=a[1];return{title:r,adapter:{type:"XYZ",url:t.replace("{name}",n)},preview:z[n]}}))},getCoordinate:function(){return[116+Math.random()-Math.random(),39+Math.random()-Math.random()]},pointEffect:function(e){var t=e.fraction,a=e.coordinates,n=e.coordinate,r=a[t-1]||n;return Object(P["a"])(r,n)&&(r=a[t-2]||n),Object(N["a"])(r,n,{src:B.a,color:"#409eff",scale:1.5})}},created:function(){this.layers=this.createLayers(),this.defaultAdapter=this.layers[0].adapter}};u["default"].use(l["a"]),u["default"].use(c["a"]),u["default"].use(o["a"]),u["default"].use(s["a"]),u["default"].use(i["a"]);var L=J,T=a("2877"),q=Object(T["a"])(L,n,r,!1,null,null,null);t["default"]=q.exports},"210c":function(e,t,a){e.exports=a.p+"assets/img/ChinaOnlineCommunity.df7d8c00.png"},"4e6f":function(e,t,a){e.exports=a.p+"assets/img/ChinaOnlineStreetPurplishBlue.22a8ec66.png"},"5b7e":function(e,t,a){e.exports=a.p+"assets/img/ChinaOnlineCommunityENG.00ae5ee6.png"},a784:function(e,t,a){e.exports=a.p+"assets/img/ChinaOnlineStreetGray.14ac6b44.png"},bd11:function(e,t,a){e.exports=a("236a")(34)},f027:function(e,t,a){e.exports=a.p+"assets/img/ChinaOnlineStreetWarm.fb31500f.png"}}]);