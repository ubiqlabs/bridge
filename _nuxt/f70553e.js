(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{775:function(e,t,n){"use strict";n.r(t);n(22),n(21),n(20),n(28),n(29);var r,o,c,l,d,f,m,h,x=n(3),O=n(1),y=(n(69),n(2)),w=n(7),I=n(56),j=n(39),S=n(104);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var k={components:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(x.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},{NetworkSelectWrapper:y.c.div(r||(r=Object(O.a)(["\n  position: relative;\n  z-index: 2;\n  margin-top: -2px;\n"]))),PlatformTextWrapper:Object(y.c)("div",{disabled:Boolean,isSelected:Boolean})(o||(o=Object(O.a)(["\n  cursor: ",";\n  opacity: ",";\n  display: flex;\n"])),(function(e){var t=e.disabled,n=e.isSelected;return t||n?"default":"pointer"}),(function(e){return e.disabled?"0.8":"1"})),PlatformText:Object(y.c)(j.TextStyled,{disabled:Boolean,selected:Boolean,color:String})(c||(c=Object(O.a)(["\n  user-select: none;\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  font-size: 14px;\n  padding: 2px 6px;\n  width: fit-content;\n  border: 1px solid ",";\n  border-radius: 6px;\n  opacity: ",";\n  transition: border "," ease-in-out;\n\n  :hover {\n    border: 1px solid\n      "," !important;\n\n    span {\n      color: "," !important;\n    }\n  }\n"])),(function(e){return e.color}),(function(e){return!e.selected&&"0.7"}),j.TRANSITION_TIME,(function(e){var t=e.disabled,n=e.selected,r=e.color;return!t&&!n&&Object(w.a)(.05,r)}),(function(e){var t=e.disabled,n=e.selected,r=e.color;return!t&&!n&&Object(w.a)(.05,r)})),PlatformIcon:y.c.img(l||(l=Object(O.a)(["\n  width: 12px;\n  height: 12px;\n  margin-right: 6px;\n"]))),PlatformName:Object(y.c)("span",{color:String})(d||(d=Object(O.a)(["\n  color: ",";\n  transition: color "," ease-in-out;\n  font-weight: 500;\n\n  &:hover {\n    cursor: inherit;\n  }\n"])),(function(e){return e.color}),j.TRANSITION_TIME),NetworkSelect:y.c.div(f||(f=Object(O.a)(["\n  display: inline-flex;\n  flex-flow: wrap;\n  gap: 8px;\n"]))),SettingsHeader:Object(y.c)(j.TextStyled)(m||(m=Object(O.a)(["\n  font-weight: 600;\n  font-size: 14px;\n  color: ",";\n"])),(function(e){return e.theme.text1})),MenuFlyout:Object(y.c)("span",{primary:String})(h||(h=Object(O.a)(["\n  width: 16.125rem;\n  background-color: ",";\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04),\n    0px 16px 24px rgba(0, 0, 0, 0.04), 0px 24px 32px rgba(0, 0, 0, 0.01);\n  border: 1px solid ",";\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  font-size: 1rem;\n  position: absolute;\n  top: 2rem;\n  right: 0rem;\n  z-index: 101;\n  transition: all "," ease-in-out;\n"])),(function(e){return e.theme.bg1}),(function(e){return e.primary}),j.TRANSITION_TIME),AutoColumn:S.AutoColumn}),props:{disabled:{type:Boolean,default:!1},selectedChainId:{type:String,required:!0},type:{type:String,default:""},networks:{type:Array,required:!0}},data:function(){return{selectIsOpen:!1}},computed:{platform:function(){var e=this;return this.networks.find((function(t){return t.chainId===e.selectedChainId}))}},methods:{toggleSelect:function(){!this.disabled&&(this.selectIsOpen=!this.selectIsOpen)},closeSelect:function(){this.selectIsOpen=!1},handleSelected:function(e){e.chainId!==this.selectedChainId&&this.$emit("selected",{chainId:e.chainId})},platformColor:function(e){return e?Object(I.b)(this.isDarkMode,e).primary1:Object(I.b)(this.isDarkMode,this.selectedChainId).primary1}}},P=n(12),component=Object(P.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("NetworkSelectWrapper",[n("PlatformTextWrapper",{attrs:{disabled:e.disabled},on:{click:e.toggleSelect}},[e._t("default",(function(){return[n("PlatformText",{style:{opacity:"1"},attrs:{disabled:e.disabled,color:e.platformColor()}},[n("PlatformName",{attrs:{color:e.platformColor()}},[e._v(e._s(e.platform.name.toUpperCase()))])],1)]}))],2),e._v(" "),e.selectIsOpen?n("MenuFlyout",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.closeSelect,expression:"closeSelect"}],attrs:{primary:e.platformColor()}},[n("AutoColumn",{style:{padding:"1rem"},attrs:{gap:"16px"}},[n("SettingsHeader",[e._v("Select "+e._s(e.type)+" Network:")]),e._v(" "),n("NetworkSelect",e._l(e.networks,(function(t){return n("PlatformTextWrapper",{key:t.chainId,attrs:{isSelected:t.chainId===e.selectedChainId},on:{click:function(n){return e.handleSelected(t)}}},[n("PlatformText",{attrs:{color:e.platformColor(t.chainId),selected:t.chainId===e.selectedChainId}},[n("PlatformIcon",{attrs:{src:t.iconPath}}),n("PlatformName",{attrs:{color:e.platformColor(t.chainId)}},[e._v(e._s(t.name.toUpperCase()))])],1)],1)})),1)],1)],1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{NetworkSelect:n(775).default})}}]);