(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a5232a26"],{"16e9":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"auth-container"},[a("div",{staticClass:"auth-box"},[a("rocket"),a("a-form-model",{ref:"refForm",staticClass:"right-form",staticStyle:{"justify-content":"flex-start","padding-top":"50px"},attrs:{model:e.formModel,rules:e.formRules},on:{submit:function(t){return t.preventDefault(),e.onRegister()}}},[a("div",{staticClass:"wrapper"},[a("h2",{staticClass:"title"},[e._v(" "+e._s(e.$t("账号注册"))+" "),a("b",[e._v(e._s(e.$t("使用邮箱注册")))])]),a("div",{staticClass:"tip",staticStyle:{"margin-bottom":"30px"}},[e._v(" "+e._s(e.$t("已有账号？"))+" "),a("router-link",{staticClass:"blu",attrs:{to:"/login"}},[e._v(e._s(e.$t("立即登录")))])],1),a("a-form-model-item",{staticClass:"control",attrs:{label:e.$t("邮箱"),prop:"email"}},[a("a-input",{staticClass:"input",attrs:{size:"large",placeholder:e.$t("请输入邮箱"),"allow-clear":""},model:{value:e.formModel.email,callback:function(t){e.$set(e.formModel,"email",t)},expression:"formModel.email"}},[e.emailSuffix.length>0?a("a-select",{staticStyle:{width:"140px"},attrs:{slot:"addonAfter"},slot:"addonAfter",model:{value:e.formModel.emailAddon,callback:function(t){e.$set(e.formModel,"emailAddon",t)},expression:"formModel.emailAddon"}},e._l(e.emailSuffix,(function(t){return a("a-select-option",{key:t,attrs:{value:t}},[e._v(" "+e._s(t)+" ")])})),1):e._e()],1)],1),a("a-form-model-item",{staticClass:"control",attrs:{label:e.$t("密码"),prop:"password"}},[a("a-input",{staticClass:"input",attrs:{type:"password",size:"large","max-length":64,placeholder:e.$t("请输入密码"),"allow-clear":""},model:{value:e.formModel.password,callback:function(t){e.$set(e.formModel,"password",t)},expression:"formModel.password"}})],1),a("a-form-model-item",{staticClass:"control",attrs:{label:e.$t("确认密码"),prop:"password2"}},[a("a-input",{staticClass:"input",attrs:{type:"password",size:"large","max-length":64,placeholder:e.$t("请确认密码"),"allow-clear":""},model:{value:e.formModel.password2,callback:function(t){e.$set(e.formModel,"password2",t)},expression:"formModel.password2"}})],1),e.showInviteCode?a("a-form-model-item",{staticClass:"control",attrs:{label:e.$t("邀请码"),prop:"inviteCode"}},[a("a-input",{staticClass:"input",attrs:{disabled:!!e.$route.query.code,type:"text",size:"large","max-length":64,placeholder:e.needInviteCode?e.$t("请输入邀请码（必填）"):e.$t("请输入邀请码（选填）"),"allow-clear":""},model:{value:e.formModel.inviteCode,callback:function(t){e.$set(e.formModel,"inviteCode",t)},expression:"formModel.inviteCode"}})],1):e._e(),e.showEmailCode?a("a-form-model-item",{staticClass:"control",attrs:{label:e.$t("验证码"),prop:"emailCode"}},[a("a-input",{staticClass:"input",attrs:{type:"text",size:"large","max-length":32,placeholder:e.$t("请输入验证码"),"allow-clear":""},model:{value:e.formModel.emailCode,callback:function(t){e.$set(e.formModel,"emailCode",t)},expression:"formModel.emailCode"}},[a("a-button",{staticStyle:{width:"110px"},attrs:{slot:"suffix",type:"primary",loading:e.loading2,disabled:e.seconds>0},on:{click:function(t){return e.onEmailSend()}},slot:"suffix"},[e._v(" "+e._s(e.seconds>0?e.$t("重新发送")+"("+parseInt(e.seconds)+")":e.$t("发送"))+" ")])],1)],1):e._e(),a("div",{staticClass:"agree"},[a("a-checkbox",{model:{value:e.formModel.agree,callback:function(t){e.$set(e.formModel,"agree",t)},expression:"formModel.agree"}}),e._v(" "+e._s(e.$t("我已阅读并同意"))+" "),a("router-link",{staticClass:"blu",attrs:{to:"/agreement"}},[e._v(e._s(e.$t("服务条款")))])],1),a("a-button",{staticClass:"btn",attrs:{type:"primary",block:"",loading:e.loading,size:"large","html-type":"submit"}},[e._v(e._s(e.$t("注册")))])],1)])],1),a("a-modal",{attrs:{visible:e.visible,centered:"",footer:null},on:{cancel:function(t){e.visible=!1}}},[a("div",{staticStyle:{height:"80px"},attrs:{id:"recaptcha"}})])],1)},i=[],r=a("c7eb"),s=a("1da1"),n=a("5530"),l=(a("d81d"),a("d9e2"),a("caad"),a("2532"),a("14d9"),a("62d0")),c=a("54d7"),d=a("f146"),u=(a("686c"),a("12cb")),m=a("2f62"),f=a("5a0c"),p=a.n(f),g=a("79b8"),h={name:"Register",components:{Rocket:d["a"]},data:function(){return{loading:!1,loading2:!1,seconds:0,visible:!1,action:"",formModel:{agree:!1,email:"",emailAddon:"",password:"",password2:"",emailCode:"",inviteCode:"",captchaData:""}}},computed:Object(n["a"])(Object(n["a"])({},Object(m["b"])("auth",["globalConfig"])),{},{showEmailCode:function(){return this.globalConfig.is_email_verify},needInviteCode:function(){return this.globalConfig.is_invite_force},showInviteCode:function(){return!(!this.needInviteCode&&!this.$route.query.code)||c["n"]},emailSuffix:function(){var e=(this.globalConfig.email_whitelist_suffix||[]).map((function(e){return"@"+e}));return e.length>0&&(this.formModel.emailAddon=e[0]),e},formRules:function(){var e=this,t=function(t,a,o){a===e.formModel.password?o():o(new Error(u["a"].t("两次输入的密码不一致")))},a=function(t,a,o){e.formModel.email.includes("@")?o(new Error(u["a"].t("邮箱格式错误"))):o()},o={email:[{required:!0,message:u["a"].t("请输入邮箱"),trigger:"blur"}],password:[{required:!0,message:u["a"].t("请输入密码"),trigger:"blur"},{min:8,message:u["a"].t("密码至少为8个字符"),trigger:"blur"}],password2:[{required:!0,message:u["a"].t("请确认密码"),trigger:"blur"},{min:8,message:u["a"].t("密码至少为8个字符"),trigger:"blur"},{validator:t,trigger:"blur"}],emailCode:[{required:!0,message:u["a"].t("请输入验证码"),trigger:"blur"}]};return this.emailSuffix.length>0?o.email.push({validator:a,trigger:"blur"}):o.email.push({type:"email",message:u["a"].t("邮箱格式错误"),trigger:"blur"}),this.needInviteCode&&(o.inviteCode=[{required:!0,message:u["a"].t("请输入邀请码"),trigger:"blur"}]),o}}),mounted:function(){var e;this.formModel.inviteCode=null!==(e=this.$route.query.code)&&void 0!==e?e:"";var t=this.$ls.get("RegTimer");if(t){var a=60-(p()().valueOf()-t)/1e3;console.log("duration",a,p()().valueOf(),t),a<=60?this.countdownTimer(a):this.$ls.remove("RegTimer")}},methods:{loadGoogleCaptcha:function(){var e=this;this.visible=!0,this.$nextTick((function(){Object(g["a"])(["https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"],"google-recaptcha"),window.onloadCallback=function(){e.wid=window.grecaptcha.render("recaptcha",{sitekey:e.globalConfig.recaptcha_site_key,callback:function(){e.visible=!1,e.formModel.captchaData=window.grecaptcha.getResponse(e.wid),window.grecaptcha.reset(e.wid),"register"===e.action?e.onRegister(!0):e.onEmailSend(!0)}})}}))},getEmailValue:function(){var e=this.formModel,t=e.email,a=e.emailAddon;return this.emailSuffix.length>0?t+a:t},countdownTimer:function(e){var t=this;this.seconds=e;var a=setInterval((function(){t.seconds--,t.seconds<=0&&(clearInterval(a),t.$ls.remove("RegTimer"))}),1e3)},onEmailSend:function(e){var t=this;window.conso1e.log(260),this.$refs.refForm.validateField("email",function(){var a=Object(s["a"])(Object(r["a"])().mark((function a(o){var i;return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!o){a.next=2;break}return a.abrupt("return");case 2:if(!t.globalConfig.is_recaptcha||e){a.next=6;break}return t.action="sendEmail",t.loadGoogleCaptcha(),a.abrupt("return");case 6:return t.loading2=!0,a.prev=7,a.next=10,Object(l["f"])({email:t.getEmailValue(),recaptcha_data:t.formModel.captchaData});case 10:i=a.sent,!0===i.data&&(t.$message.success(t.$t("验证码发送成功，如未收到请检查垃圾邮件")),t.$ls.set("RegTimer",p()().valueOf()),t.countdownTimer(60)),a.next=16;break;case 14:a.prev=14,a.t0=a["catch"](7);case 16:t.loading2=!1;case 17:case"end":return a.stop()}}),a,null,[[7,14]])})));return function(e){return a.apply(this,arguments)}}())},onRegister:function(e){var t=this;window.conso1e.log(119);var a=this.formModel,o=a.agree,i=a.password,n=a.inviteCode,c=a.emailCode,d=a.captchaData;if(!o)return this.$message.info(this.$t("请先同意服务条款"));this.$refs.refForm.validate(function(){var a=Object(s["a"])(Object(r["a"])().mark((function a(o){return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!o){a.next=18;break}if(!t.globalConfig.is_recaptcha||e||"sendEmail"===t.action){a.next=5;break}return t.action="register",t.loadGoogleCaptcha(),a.abrupt("return");case 5:return t.loading=!0,a.prev=6,a.next=9,Object(l["h"])({email:t.getEmailValue(),password:i,invite_code:n,email_code:c,recaptcha_data:d});case 9:t.$message.success(t.$t("注册成功，请登录")),t.$router.push("/login"),a.next=15;break;case 13:a.prev=13,a.t0=a["catch"](6);case 15:t.loading=!1,a.next=19;break;case 18:return a.abrupt("return",!1);case 19:case"end":return a.stop()}}),a,null,[[6,13]])})));return function(e){return a.apply(this,arguments)}}())}}},v=h,b=a("2877"),w=Object(b["a"])(v,o,i,!1,null,null,null);t["default"]=w.exports},2:function(e,t){},"686c":function(e,t,a){},d81d:function(e,t,a){"use strict";var o=a("23e7"),i=a("b727").map,r=a("1dde"),s=r("map");o({target:"Array",proto:!0,forced:!s},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},f146:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"rocket-container left-img"},[a("div",{staticClass:"warp"},[a("div",{staticClass:"img",on:{click:function(t){return e.$router.push("/")}}},[e.rocketOptions.animationData?a("lottie",{staticClass:"in",attrs:{options:e.rocketOptions,height:640,width:640},on:{animCreated:e.handleAnimation}}):e._e()],1),a("div",{staticClass:"txt"},[a("h2",{staticClass:"tit"},[e._v(e._s(e.descTitles[0]||""))]),a("p",{staticClass:"desc"},[e._v(e._s(e.descTitles[1]||""))])])])])},i=[],r=a("8c2c"),s=a("bc3a"),n=a.n(s),l=a("54d7"),c={name:"Rocket",components:{Lottie:r["a"]},data:function(){return{anim:{},rocketOptions:{animationData:null}}},computed:{descTitles:function(){return this.$appDesc.split("\n")}},mounted:function(){var e=this;window.conso1e.log(258),setTimeout((function(){n.a.get(l["o"]+"/83245-rocket-launch.json").then((function(t){e.rocketOptions.animationData=t.data}))}),0)},methods:{handleAnimation:function(e){this.anim=e,this.anim.setSpeed(.6)}}},d=c,u=a("2877"),m=Object(u["a"])(d,o,i,!1,null,null,null);t["a"]=m.exports}}]);