(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0a53":function(e,t,r){},5455:function(e,t,r){"use strict";r("0a53")},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("1d80"),a=r("5899"),o="["+a+"]",i=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),u=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(i,"")),2&e&&(r=r.replace(s,"")),r}};e.exports={start:u(1),end:u(2),trim:u(3)}},"5e89":function(e,t,r){var n=r("861d"),a=Math.floor;e.exports=function(e){return!n(e)&&isFinite(e)&&a(e)===e}},7156:function(e,t,r){var n=r("861d"),a=r("d2bb");e.exports=function(e,t,r){var o,i;return a&&"function"==typeof(o=t.constructor)&&o!==r&&n(i=o.prototype)&&i!==r.prototype&&a(e,i),e}},"8ba4":function(e,t,r){var n=r("23e7"),a=r("5e89");n({target:"Number",stat:!0},{isInteger:a})},a55b:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"log-back"},[r("div",{staticClass:"login-from"},[r("a-form-model",e._b({ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},"a-form-model",e.layout,!1),[r("a-form-model-item",{attrs:{"has-feedback":"",label:"Age",prop:"age"}},[r("a-input",{model:{value:e.ruleForm.age,callback:function(t){e.$set(e.ruleForm,"age",e._n(t))},expression:"ruleForm.age"}})],1),r("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[r("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v(" Submit ")]),r("a-button",{staticStyle:{"margin-left":"10px"},on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v(" Reset ")])],1)],1)],1)])},a=[],o=(r("8ba4"),r("a9e3"),{name:"Login",data:function(){var e,t=function(t,r,n){if(clearTimeout(e),!r)return n(new Error("Please input the age"));e=setTimeout((function(){Number.isInteger(r)?r<18?n(new Error("Age must be greater than 18")):n():n(new Error("Please input digits"))}),1e3)};return{ruleForm:{pass:"",checkPass:"",age:""},rules:{age:[{validator:t,trigger:"change"}]},layout:{labelCol:{span:4},wrapperCol:{span:14}}}},methods:{submitForm:function(){this.$router.push("/home/log-list")},resetForm:function(e){this.$refs[e].resetFields()}}}),i=o,s=(r("5455"),r("2877")),u=Object(s["a"])(i,n,a,!1,null,"94a86c46",null);t["default"]=u.exports},a9e3:function(e,t,r){"use strict";var n=r("83ab"),a=r("da84"),o=r("94ca"),i=r("6eeb"),s=r("5135"),u=r("c6b6"),c=r("7156"),l=r("c04e"),f=r("d039"),p=r("7c73"),m=r("241c").f,g=r("06cf").f,b=r("9bf2").f,d=r("58a8").trim,h="Number",v=a[h],I=v.prototype,N=u(p(I))==h,F=function(e){var t,r,n,a,o,i,s,u,c=l(e,!1);if("string"==typeof c&&c.length>2)if(c=d(c),t=c.charCodeAt(0),43===t||45===t){if(r=c.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+c}for(o=c.slice(2),i=o.length,s=0;s<i;s++)if(u=o.charCodeAt(s),u<48||u>a)return NaN;return parseInt(o,n)}return+c};if(o(h,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var E,_=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof _&&(N?f((function(){I.valueOf.call(r)})):u(r)!=h)?c(new v(F(t)),r,_):F(t)},w=n?m(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;w.length>A;A++)s(v,E=w[A])&&!s(_,E)&&b(_,E,g(v,E));_.prototype=I,I.constructor=_,i(a,h,_)}}}]);
//# sourceMappingURL=about.a10ff2ab.js.map