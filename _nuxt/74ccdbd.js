(window.webpackJsonp=window.webpackJsonp||[]).push([[11,6,7],{776:function(e,n,t){"use strict";t.r(n);t(22),t(21),t(20),t(28),t(29);var r,o,c,l,d,h,f,m,O=t(5),v=t(3),x=t(1),j=(t(30),t(86)),w=t.n(j),y=t(6),k=t(104),T=t(39),E=t(2),D=t(7),_=t(31);function I(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}var A=Object(E.c)("div")(r||(r=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  ","\n  position: relative;\n  border-radius: 16px;\n  z-index: 1;\n"])),(function(e){return e.theme.flexColumnNoWrap})),S=E.c.span(o||(o=Object(x.a)(["\n  mix-blend-mode: overlay;\n  width: 100%;\n  height: 100%;\n  opacity: 0.8;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: -1;\n  user-select: none;\n  background: url(https://shinobi.ubiq.ninja/static/media/noise.17ab2292.png) 0%\n    0% / cover;\n  border-radius: 16px;\n"]))),P=E.c.div(c||(c=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  color: ",";\n  z-index: 0;\n"])),(function(e){return e.theme.red1})),C=Object(E.c)(k.AutoColumn)(l||(l=Object(x.a)(["\n  padding: 1rem;\n  background-color: ",";\n  width: 100%;\n  border-radius: 16px;\n"])),(function(e){var n=e.theme;return Object(D.d)(.9,n.red1)})),R=E.c.p(d||(d=Object(x.a)(["\n  font-size: 12px;\n  font-weight: 600;\n  margin-left: 0.25rem;\n  word-break: break-word;\n  line-height: 20px;\n  font-size: 14px;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n"]))),L=Object(E.c)(R)(h||(h=Object(x.a)(["\n  margin-bottom: 8px !important;\n  font-weight: 600 !important;\n  font-size: 16px;\n"]))),W=Object(E.c)("a")(f||(f=Object(x.a)(["\n  text-decoration: underline;\n  color: inherit;\n"]))),$=Object(E.c)(_.d)(m||(m=Object(x.a)(["\n  color: ",";\n  cursor: pointer;\n"])),(function(e){return e.theme.text1})),z={TextStyled:T.TextStyled,AutoColumn:k.AutoColumn,WarningSection:A,Noise:S,ErrorInner:P,ErrorHeaderText:L,ErrorOuter:C,ErrorText:R,ModalTextLink:W,StyledArrowLeft:$},M={TRANSFER:"TRANSFER",DISCLAIMER:"DISCLAIMER"},N={components:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(Object(source),!0).forEach((function(n){Object(v.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):I(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}({},z),data:function(){return{isFetchingVoteThreshold:!1,Views:M,view:M.DISCLAIMER}},methods:{fetchVoteThreshold:function(){var e=this;return Object(O.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e.isFetchingVoteThreshold=!0,n.next=4,w.a.set(1e3);case 4:return n.next=6,e.$store.dispatch(y.c.FETCH_VOTE_THRESHOLD);case 6:n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:return n.prev=10,e.isFetchingVoteThreshold=!1,n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,8,10,13]])})))()},showDisclaimer:function(){this.view=M.DISCLAIMER},hideDisclaimer:function(){this.view=M.TRANSFER}},computed:{modalIsOpen:function(){return this.$store.state.modals.transfer},votesRequired:function(){var e;return null===(e=this.$store.state.transfer.session)||void 0===e?void 0:e.votesRequired},error:function(){return null===this.votesRequired&&"Error fetching votes required"}},watch:{modalIsOpen:function(e){var n=this.$store.state.transfer.status;e&&null===n&&this.fetchVoteThreshold()}}},F=t(12),component=Object(F.a)(N,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Modal",{attrs:{modalName:"disclaimer"}},[t("WarningSection",[t("Noise"),e._v(" "),t("ErrorOuter",{attrs:{gap:"18px"}},[t("ErrorInner",[t("ErrorHeaderText",[e._v("Hardware Wallet Warning")])],1),e._v(" "),t("ErrorInner",[t("ErrorText",[e._v("\n          If you're using a hardware wallet, be aware that\n          "),t("ModalTextLink",{attrs:{target:"_blank",href:"https://medium.com/myetherwallet/hd-wallets-and-derivation-paths-explained-865a643c7bf2"}},[e._v("different chains use different HD Paths")]),e._v(".")],1)],1),e._v(" "),t("ErrorInner",[t("ErrorText",[e._v("\n          This means that hardware wallets may have a different set of\n          addresses for each chain.")])],1),e._v(" "),t("ErrorInner",[t("ErrorText",[e._v("When bridging funds to the same address they're sent from, always\n          confirm that you'll have access to them on the other\n          side.")])],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Modal:t(147).default})},777:function(e,n,t){"use strict";t.r(n);t(22),t(21),t(20),t(28),t(29);var r,o,c,l,d,h,f=t(3),m=t(1),O=t(2),v=t(40),x=t(31),j=t(7);function w(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}var y=O.c.div(r||(r=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  padding: 0.5rem;\n  padding-right: 0;\n  color: ",";\n  z-index: 1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n"])),(function(e){return e.theme.red1})),k=Object(O.c)(v.RowBetween)(o||(o=Object(m.a)(["\n  background-color: ",";\n  width: 100%;\n  border-radius: 8px;\n"])),(function(e){var n=e.theme;return Object(j.d)(.9,n.red1)})),T=O.c.p(c||(c=Object(m.a)(["\n  margin-left: 0.25rem;\n  word-break: break-word;\n  display: flex;\n"]))),E=O.c.div(l||(l=Object(m.a)(["\n  background-color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 8px;\n  min-width: 28px;\n  height: 28px;\n"])),(function(e){var n=e.theme;return Object(j.d)(.9,n.red1)})),D={components:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(n){Object(f.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}({},{ErrorInner:y,ErrorOuter:k,ErrorText:T,ErrorTextLink:Object(O.c)(T)(d||(d=Object(m.a)(["\n  align-items: center;\n  text-decoration: underline;\n\n  :hover {\n    cursor: pointer;\n    color: ",";\n  }\n"])),(function(e){var n=e.theme;return Object(j.a)(.05,n.red1)})),DontShowAgain:Object(O.c)(x.r)(h||(h=Object(m.a)(["\n  display: flex;\n  margin-right: 0.75rem;\n  color: ",";\n  cursor: pointer;\n"])),(function(e){return e.theme.red1})),AlertTriangleIcon:x.b,ErrorInnerAlertTriangle:E})},_=t(12),component=Object(_.a)(D,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ErrorOuter",[t("ErrorInner",[t("ErrorInnerAlertTriangle",[t("AlertTriangleIcon",{attrs:{size:"18"}})],1),e._v(" "),t("ErrorTextLink",{on:{click:function(n){return e.openModal({modalName:"disclaimer"})}}},[e._v("Hardware Wallet Warning\n    ")])],1),e._v(" "),t("Tooltip",{attrs:{text:"Don't show this again"}},[t("DontShowAgain",{attrs:{size:"18"},on:{click:function(n){return e.$emit("dont-show-again")}}})],1)],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Tooltip:t(388).default})},789:function(e,n,t){"use strict";t.r(n);t(21),t(20),t(28),t(29);var r,o,c,l=t(3),d=t(1),h=(t(69),t(22),t(49),t(2)),f=t(146),m=t(104),O=t(26),v=t(102),x=t(7),j=t(56);function w(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}var y=Object(h.c)("a",{primary:String})(r||(r=Object(d.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n"])),(function(e){return e.theme.text1})),k=Object(h.c)(y,{primary:String})(o||(o=Object(d.a)(["\n  width: 100%;\n  border: 1px solid ",";\n  padding: 6px 6px;\n  border-radius: 8px;\n  text-align: center;\n  font-size: 12px;\n  color: ",';\n\n  &:hover {\n    span:nth-child(1) {\n      position: relative;\n      ::before {\n        content: "";\n        z-index: -1;\n        position: absolute;\n        top: 70%;\n        width: 100%;\n        left: 0;\n        height: 4px;\n        border-radius: 2px;\n        opacity: 1;\n        background: linear-gradient(\n          130deg,\n          ',",\n          "," 100%\n        );\n      }\n    }\n  }\n"])),(function(e){return e.theme.bg3}),(function(e){return e.theme.text1}),(function(e){var n=e.primary;return Object(x.d)(.4,n)}),(function(e){var n=e.primary;return Object(x.d)(.1,n)})),T={components:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(n){Object(l.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}({},{AdvancedDetailsFooter:Object(h.c)("div",{show:Boolean})(c||(c=Object(d.a)(["\n  padding-top: calc(16px + 2rem);\n  padding-bottom: 20px;\n  margin-top: -2rem;\n  width: 100%;\n  max-width: 400px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  color: ",";\n  background-color: ",";\n  transform: ",";\n  display: ",";\n  transition: transform 300ms ease-in-out;\n"])),(function(e){return e.theme.text2}),(function(e){return e.theme.advancedBG}),(function(e){return e.show?"translateY(0%)":"translateY(-100%)"}),(function(e){return e.show?"block":"none"})),InfoLink:k,AutoColumn:m.AutoColumn}),methods:{dontShowAgain:function(){this.$store.commit(v.a.SHOW_WALLET_WARNING,{showWalletWarning:!1})}},computed:{show:function(){return this.sourceDex&&this.destinationDex&&this.sourceToken&&this.destinationToken},sourceToken:function(){var e=this.$store.state.transfer.sourceChainId,n=this.$store.state.transfer.tokenAddress;return n?this.$store.getters[O.c.TOKEN](e,n):null},destinationToken:function(){var e=this,n=this.$store.state.transfer.destinationChainId,t=f.a.find((function(e){return e.chainId===n})),r=Object.keys(t.tokens.erc20).find((function(n){var r;return t.tokens.erc20[n].resourceId===(null===(r=e.sourceToken)||void 0===r?void 0:r.resourceId)}));return r?this.$store.getters[O.c.TOKEN](n,r):null},sourceDex:function(){var e=this.$store.state.transfer.sourceChainId;if(!e||!this.sourceToken)return null;var n=f.a.find((function(n){return n.chainId===e}));if(!n)return null;var t=n.name,r=n.dexLink;return{name:t,primary:Object(j.b)(this.isDarkMode,e).primary1,link:"".concat(r,"?outputCurrency=").concat(this.sourceToken.tokenAddress)}},destinationDex:function(){var e=this.$store.state.transfer.destinationChainId;if(!e||!this.destinationToken)return null;var n=f.a.find((function(n){return n.chainId===e})),t=n.name,r=n.dexLink;return{name:t,primary:Object(j.b)(this.isDarkMode,e).primary1,link:"".concat(r,"?inputCurrency=").concat(this.destinationToken.tokenAddress)}}}},E=t(12),component=Object(E.a)(T,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("AdvancedDetailsFooter",{attrs:{show:e.show}},[t("DisclaimerModal"),e._v(" "),e.show?t("AutoColumn",{style:{padding:"0 24px"},attrs:{gap:"12px"}},[t("AutoColumn",[e.$store.state.settings.showWalletWarning?t("DisclaimerWarning",{on:{"dont-show-again":e.dontShowAgain}}):e._e()],1),e._v(" "),t("AutoColumn",[t("InfoLink",{attrs:{primary:e.sourceDex.primary,href:e.sourceDex.link,target:"_blank"}},[t("span",[e._v("Trade "+e._s(e.sourceToken.symbol)+" on "+e._s(e.sourceDex.name))]),e._v(" ↗\n      ")])],1),e._v(" "),t("AutoColumn",[t("InfoLink",{attrs:{primary:e.destinationDex.primary,href:e.destinationDex.link,target:"_blank"}},[t("span",[e._v("Trade "+e._s(e.destinationToken.symbol)+" on\n          "+e._s(e.destinationDex.name))]),e._v("\n        ↗\n      ")])],1)],1):e._e()],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{DisclaimerModal:t(776).default,DisclaimerWarning:t(777).default})}}]);