_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"AO/9":function(n,t,e){"use strict";var i=e("v4IS");e("TESy");t.a=i.a},JIIv:function(n,t,e){"use strict";e.d(t,"a",(function(){return g}));var i=e("Nt7R"),a=new i.a("I18n"),u=function(){function n(n){this._options=null,this._lang=null,this._dict={},this._options=Object.assign({},n),this._lang=this._options.language,!this._lang&&"undefined"!==typeof window&&window&&window.navigator&&(this._lang=window.navigator.language),a.debug(this._lang)}return n.prototype.setLanguage=function(n){this._lang=n},n.prototype.get=function(n,t){if(void 0===t&&(t=void 0),!this._lang)return"undefined"!==typeof t?t:n;var e=this._lang,i=this.getByLanguage(n,e);return i||(e.indexOf("-")>0&&(i=this.getByLanguage(n,e.split("-")[0])),i||("undefined"!==typeof t?t:n))},n.prototype.getByLanguage=function(n,t,e){if(void 0===e&&(e=null),!t)return e;var i=this._dict[t];return i?i[n]:e},n.prototype.putVocabulariesForLanguage=function(n,t){var e=this._dict[n];e||(e=this._dict[n]={}),Object.assign(e,t)},n.prototype.putVocabularies=function(n){var t=this;Object.keys(n).map((function(e){t.putVocabulariesForLanguage(e,n[e])}))},n}(),r=e("fQM2"),c=new i.a("I18n"),o=null,s=null,g=function(){function n(){}return n.configure=function(t){return c.debug("configure I18n"),t?(o=Object.assign({},o,t.I18n||t),n.createInstance(),o):o},n.getModuleName=function(){return"I18n"},n.createInstance=function(){c.debug("create I18n instance"),s||(s=new u(o))},n.setLanguage=function(t){return n.checkConfig(),s.setLanguage(t)},n.get=function(t,e){return n.checkConfig()?s.get(t,e):"undefined"===typeof e?t:e},n.putVocabulariesForLanguage=function(t,e){return n.checkConfig(),s.putVocabulariesForLanguage(t,e)},n.putVocabularies=function(t){return n.checkConfig(),s.putVocabularies(t)},n.checkConfig=function(){return s||(s=new u(o)),!0},n}();r.a.register(g)},"W+IF":function(n,t,e){"use strict";e.r(t);var i=e("o0o1"),a=e.n(i),u=e("nKUr"),r=e("HaE+"),c=e("WMhW"),o=e("BHzR"),s=e("v4IS"),g=e("q1tI");t.default=Object(o.a)((function(){var n=Object(g.useState)(null),t=n[0],e=n[1];function i(){return(i=Object(r.a)(a.a.mark((function n(){var t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.currentAuthenticatedUser();case 2:t=n.sent,e(t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(g.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),t?Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"text-3xl font-semibold tracking-wide mt-6",children:"Profile"}),Object(u.jsxs)("h3",{className:"font-medium text-gray-500 my-2",children:["Username: ",t.username]}),Object(u.jsxs)("p",{className:"text-sm text-gray-500 mb-6",children:["Email: ",t.attributes.email]}),Object(u.jsx)(c.c,{})]}):null}))},u1GD:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return e("W+IF")}])}},[["u1GD",2,3,4,0,5,7,10]]]);