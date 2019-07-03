(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a9f1"],{bbfa:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"userForm"},[r("v-card",{staticClass:"white--text",attrs:{color:"secondary lighten-3"}},[r("v-card-title",{attrs:{"primary-title":""}},[r("div",{staticStyle:{width:"100%","text-align":"left"}},[r("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.title))]),r("v-card",[r("v-card-title",{attrs:{"primary-title":""}},[r("div",{staticStyle:{width:"100%"}},[r("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.submit(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-container",[r("v-layout",[r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-text-field",{attrs:{label:"User Email",rules:[t.rules.required,t.rules.email]},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-text-field",{attrs:{"append-icon":t.show1?"visibility_off":"visibility",rules:[t.rules.required,t.rules.min],type:t.show1?"text":"password",name:"password",label:"Password"},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1)],1)],1)],1)])],1)],1)]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"secondary",to:"/users"}},[t._v("Cancel")]),r("v-btn",{attrs:{color:"primary"},on:{click:t.submit}},[t._v("Save")])],1)],1),r("v-snackbar",{attrs:{color:"green",timeout:3e3,top:""},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    User Created Successfully!\n  ")])],1)},i=[],a=(r("96cf"),r("3b8d")),s={email:function(t){if(""===t||void 0===t||null===t)return!0;var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Invalid e-mail."},phone:function(t){if(""===t||void 0===t||null===t)return!0;var e=/(\+[0-9]{1,3})?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;return e.test(t)||"Invalid phone number."},mac:function(t){if(""===t||void 0===t||null===t)return!0;var e=/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;return e.test(t)||"Invalid Mac Address. A1:B2:C3:D4:E5:F6"},zip:function(t){if(""===t||void 0===t||null===t)return!0;var e=/^[0-9]{5}$/;return e.test(t)||"Invalid Zip Code."},state:function(t){if(""===t||void 0===t||null===t)return!0;var e=/^[A-Z]{2}$/;return e.test(t)||"Invalid State Code"},ip:function(t){if(""===t||void 0===t||null===t)return!0;var e=/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;return e.test(t)||"Invalid IP Address. 255.255.255.255"},cidr:function(t){if(""===t||void 0===t||null===t)return!0;var e=/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/([0-9]|[1-2][0-9]|3[0-2]))$/;return e.test(t)||"Invalid CIDR Address. 255.255.255.255/24"},url:function(t){if(""===t||void 0===t||null===t)return!0;var e=/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;return e.test(t)||"Invalid URL. http://test.com"},required:function(t){return!!t||"Required."},min:function(t){return t.length>=8||"Must be at least 8 characters."},min2:function(t){return t.length>=2||"Required."},integer:function(t){if(""===t||void 0===t||null===t)return!0;var e=/^\d+$/;return e.test(t)||"Invalid Number."},number:function(t){if(""===t||void 0===t||null===t)return!0;var e=/^-?\d*\.?\d*$/;return e.test(t)||"Invalid Number."},dma:function(t){return""===t||void 0===t||null===t||(t>=0&&t<999999||"1-999999 Valid.")},geopath:function(t){return""===t||void 0===t||null===t||(t>=0&&t<9999999999||"0-9999999999 Valid.")},quividi:function(t){return""===t||void 0===t||null===t||(t>=0&&t<9999||"0-9999 Valid.")},latitude:function(t){return""===t||void 0===t||null===t||(t>=-90&&t<=90||"-90 to 90 Valid.")},longitude:function(t){return""===t||void 0===t||null===t||(t>=-180&&t<=180||"-180 to 180 Valid.")},zeroHundred:function(t){return t>=0&&t<=100||"Must between 0 and 100"}},u=r("c17b"),o={name:"user-form",data:function(){return{rules:s,id:this.$route.params.id,valid:!1,form:{email:"",password:""},show1:!1,snackbar:!1}},mounted:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if("new"===this.id){t.next=5;break}return t.next=3,u["a"].get("/users/".concat(this.id));case 3:e=t.sent,this.form=e.data.data;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),computed:{title:function(){return"new"===this.id?"New User":"Update User"},editMode:function(){return!("new"===this.id)}},methods:{submit:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.$refs.form.validate()){t.next=2;break}return t.abrupt("return");case 2:if(!this.editMode){t.next=8;break}return t.next=5,u["a"].put("/users/".concat(this.id),this.form);case 5:e=t.sent,t.next=11;break;case 8:return t.next=10,u["a"].post("/users",this.form);case 10:e=t.sent;case 11:e.status>=200&&e.status<300&&(this.snackbar=!0,this.$router.push({name:"users"}));case 12:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},l=o,d=r("2877"),c=Object(d["a"])(l,n,i,!1,null,"20dd94b2",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d21a9f1.83e2c2ae.js.map