(window.webpackJsonp=window.webpackJsonp||[]).push([[0,5,10,12,13,14,15],{767:function(t,e,n){"use strict";var r=n(101),o=(n(20),n(92),n(93),n(6)),c=n(146),d=n(56);e.a={computed:{sourceAddress:function(){return this.$store.state.transfer.sourceAddress||this.account},allSourceChains:function(){return c.a},selectedSourceChain:function(){return this.$store.getters[o.e.SELECTED_SOURCE_PLATFORM]},sourceChainColor:function(){var t=this.selectedSourceChain.chainId;return Object(d.b)(this.isDarkMode,t).primary1},destinationAddress:function(){return this.$store.state.transfer.destinationAddress},allDestinationChains:function(){var t=this,e=this.$store.getters[o.e.DESTINATION_CHAIN_IDS];return Object(r.a)(c.a).filter((function(a){return a.chainId!==t.selectedSourceChain.chainId&&e.includes(a.chainId)}))},selectedDestinationChain:function(){return this.$store.getters[o.e.SELECTED_DESTINATION_PLATFORM]},destinationChainColor:function(){var t=this.selectedDestinationChain.chainId;return Object(d.b)(this.isDarkMode,t).primary1},transferrableTokens:function(){return this.$store.getters[o.e.TRANSFERABLE_TOKENS]},selectedToken:function(){return this.$store.getters[o.e.SELECTED_TOKEN]}}}},769:function(t,e,n){"use strict";n.r(e),n.d(e,"LightCard",(function(){return v})),n.d(e,"GreyCard",(function(){return x})),n.d(e,"OutlineCard",(function(){return j})),n.d(e,"YellowCard",(function(){return y})),n.d(e,"PinkCard",(function(){return E}));var r,o,c,d,l,f,h=n(1),m=n(2),O=Object(m.c)("div",{padding:String,border:String,borderRadius:String})(r||(r=Object(h.a)(["\n  width: 100%;\n  border-radius: 16px;\n  padding: 1.25rem;\n  padding: ",";\n  border: ",";\n  border-radius: ",";\n"])),(function(t){return t.padding}),(function(t){return t.border}),(function(t){return t.borderRadius})),v=Object(m.c)(O)(o||(o=Object(h.a)(["\n  border: 1px solid ",";\n  background-color: ",";\n"])),(function(t){return t.theme.bg2}),(function(t){return t.theme.bg1})),x=Object(m.c)(O)(c||(c=Object(h.a)(["\n  background-color: ",";\n"])),(function(t){return t.theme.bg3})),j=Object(m.c)(O)(d||(d=Object(h.a)(["\n  border: 1px solid ",";\n"])),(function(t){return t.theme.bg3})),y=Object(m.c)(O)(l||(l=Object(h.a)(["\n  background-color: rgba(243, 132, 30, 0.05);\n  color: ",";\n  font-weight: 500;\n"])),(function(t){return t.theme.yellow2})),E=Object(m.c)(O)(f||(f=Object(h.a)(["\n  background-color: rgba(255, 0, 122, 0.03);\n  color: ",";\n  font-weight: 500;\n"])),(function(t){return t.theme.primary1}));e.default=O},772:function(t,e,n){"use strict";n.r(e),n.d(e,"Wrapper",(function(){return m})),n.d(e,"Chain",(function(){return O})),n.d(e,"ProgressWrapper",(function(){return v})),n.d(e,"Progress",(function(){return x}));var r,o,c,d,l=n(1),f=(n(52),n(7)),h=n(2),m=h.c.div(r||(r=Object(l.a)(["\npadding: 0 calc(24px + 0.5rem);\nposition: relative;\ndisplay: flex;\nalign-items: center;\nwidth: 100%;\n"]))),O=Object(h.c)("img",{border:Boolean,glow:Boolean,color:String})(o||(o=Object(l.a)(["\nz-index: 1;\nwidth: 32px;\nheight: 32px;\nborder-radius: 50%;\nbackground: ",";\nborder: ",";\nbox-shadow: ",";\n"])),(function(t){var e=t.theme;return Object(f.b)(e.text1)}),(function(t){var e=t.border,n=t.color;return e?"1px solid ".concat(n):"none"}),(function(t){var e=t.glow,n=t.color;return e&&n})),v=Object(h.c)("div",{start:String,end:String})(c||(c=Object(l.a)(["\nborder-radius: 2px;\nheight: ","px;\nflex-grow: 1;\nposition: relative;\nbackground-image: ",";\n"])),4,(function(t){var e=t.start,n=t.end;return"linear-gradient(90deg, ".concat(Object(f.d)(.85,e),", ").concat(Object(f.d)(.85,n),")")})),x=Object(h.c)("div",{progress:Number,start:String,end:String})(d||(d=Object(l.a)(["\nheight: ","px;\nwidth: ","%;\nborder-radius: ","px;\ntransition: width 0.5s ease-in-out;\n\n-webkit-mask: linear-gradient(#fff 0 0);\nmask: linear-gradient(#fff 0 0);\n\n&::before {\n  background-image: ",';\n  position: absolute;\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: ',"px;\n}\n"])),4,(function(t){return t.progress}),2,(function(t){var e=t.start,n=t.end;return"linear-gradient(90deg, ".concat(e,", ").concat(n,")")}),4)},782:function(t,e,n){"use strict";n.r(e);var r,o,c,d,l,f,h,m=n(3),O=n(1),v=(n(69),n(22),n(21),n(20),n(28),n(29),n(70),n(53),n(49),n(78),n(79),n(80),n(39)),x=n(2),j=n(104),y=n(6);function E(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return T(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){d=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw o}}}}function T(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var C={NULL:"null",COMPLETE:"complete",FAILED:"failed",PENDING:"pending"},P=Object(x.c)(j.AutoColumn)(r||(r=Object(O.a)(["\n  border-radius: 20px;\n  padding: 1.5rem 0;\n  margin: 0 .5rem;\n"]))),S=x.c.div(o||(o=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  ","\n  position: relative;\n  border-radius: 20px;\n  background-color: ",";\n  z-index: 1;\n"])),(function(t){return t.theme.flexRowNoWrap}),(function(t){return t.theme.bg1})),_=Object(x.c)(j.AutoColumn,{footer:Boolean})(c||(c=Object(O.a)(["\n  border: 1px solid ",";\n  border-radius: 6px;\n  padding: 0.5rem;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"])),(function(t){return t.theme.red1})),L=Object(x.c)("div")(d||(d=Object(O.a)(["\n  display: inline-flex;\n"]))),A=Object(x.c)("div")(l||(l=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),I=Object(x.c)("div",{status:String})(f||(f=Object(O.a)(["\n  ","\n  justify-content: center;\n  align-items: center;\n\n  &:first-child {\n    height: 8px;\n    width: 8px;\n    margin: 0 4px;\n    background-color: ",";\n    border-radius: 50%;\n  }\n"])),(function(t){return t.theme.flexRowNoWrap}),(function(t){var e,n=t.theme,r=t.status;return(e={},Object(m.a)(e,C.NULL,n.text3),Object(m.a)(e,C.COMPLETE,n.green1),Object(m.a)(e,C.FAILED,n.red1),e)[r]})),k=Object(x.c)(v.TextStyled,{status:String})(h||(h=Object(O.a)(["\n  color: ",";\n  color: ",";\n  font-size: 12px;\n  font-weight: 600;\n  padding-left: 8px;\n"])),(function(t){var e=t.status,n=t.theme;return e===C.PENDING||e===C.COMPLETE?n.text2:n.text3}),(function(t){var e,n=t.theme,r=t.status;return(e={},Object(m.a)(e,C.PENDING,n.text2),Object(m.a)(e,C.NULL,n.text3),Object(m.a)(e,C.COMPLETE,n.text2),Object(m.a)(e,C.FAILED,n.red1),e)[r]})),D=function(t,e){return t.find((function(t){return t.returnValues.status===e}))},N={components:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},{Wrapper:P,StatusWrapper:S,Container:_,StepWrapper:L,IconWrapper:A,StepDot:I,TextWrapper:k}),data:function(){return{StatusTypes:C}},watch:{steps:function(){var progress=0;this.steps[3].status===C.COMPLETE&&(progress=100),this.steps[2].status===C.COMPLETE&&(progress=92),this.steps[1].status===C.COMPLETE&&(progress=65),this.steps[0].status===C.COMPLETE&&(progress=35),this.steps[0].status===C.PENDING&&(progress=8),this.$emit("update-progress",{progress:progress})}},computed:{session:function(){return this.$store.state.transfer.session},step:function(){var t,e=E(this.steps);try{for(e.s();!(t=e.n()).done;){var n=t.value;if(n.status===C.FAILED||n.status===C.PENDING)return n}}catch(t){e.e(t)}finally{e.f()}return this.steps[0].status===C.NULL?null:this.steps[this.steps.length-1]},steps:function(){return[this.deposit,this.proposalInitiation,this.proposalPass,this.proposalExecution]},deposit:function(){var t=this.session,e=t.txHash,n=t.depositNonce,r=null===e&&null===n?C.NULL:e&&n?C.COMPLETE:!1===e||!1===n?C.FAILED:C.PENDING;return{status:r,text:r===C.NULL?"Await Deposit Confirmations":r===C.COMPLETE?"Deposit Confirmed":r===C.FAILED?"Deposit Rejected":"Awaiting Deposit Confirmation"}},proposalInitiation:function(){var t=this,e=this.session.proposalEvents,n=t.deposit.status!==C.COMPLETE?C.NULL:D(e,y.a.ACTIVE)?C.COMPLETE:D(e,y.a.CANCELLED)?C.FAILED:C.PENDING;return{status:n,text:n===C.NULL?"Await Proposal Initiation":n===C.COMPLETE?"Proposal Initiated":n===C.FAILED?"Proposal Initiation Failed":"Awaiting Proposal Initiation"}},proposalPass:function(){var t,e=this,n=this.session,r=n.proposalEvents,o=n.votesRequired,c=n.proposalVotes.length,d=e.proposalInitiation.status!==C.COMPLETE?C.NULL:D(r,y.a.PASSED)?C.COMPLETE:D(r,y.a.CANCELLED)?C.FAILED:C.PENDING,text=(t=o-c,d===C.NULL?"Await ".concat(t," Proposal Vote").concat(t>1?"s":""):d===C.COMPLETE?"Proposal Passed":d===C.FAILED?"Proposal Pass Failed":"Awaiting ".concat(t," Vote").concat(t>1?"s":""," - ").concat(c,"/").concat(o," Submitted"));return{status:d,text:text}},proposalExecution:function(){var t=this,e=this.session.proposalEvents,n=t.proposalPass.status!==C.COMPLETE?C.NULL:D(e,y.a.EXECUTED)?C.COMPLETE:D(e,y.a.FAILED)?C.FAILED:C.PENDING;return{status:n,text:n===C.NULL?"Await Proposal Execution":n===C.COMPLETE?"Deposit Complete!":n===C.FAILED?"Proposal Execution Failed":"Awaiting Proposal Execution"}}}},M=n(12),component=Object(M.a)(N,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Wrapper",{attrs:{gap:"lg"}},[n("StatusWrapper",[n("Container",{attrs:{gap:"10px"}},[t.step?n("StepWrapper",[n("IconWrapper",[t.step.status===t.StatusTypes.PENDING?n("Loader",{attrs:{stroke:t.theme.yellow2}}):t._e()],1),t._v(" "),n("TextWrapper",{attrs:{status:t.step.status}},[t._v(t._s(t.step.text))])],1):n("StepWrapper",[n("TextWrapper",[t._v("Confirm your transfer")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Loader:n(145).default})},783:function(t,e,n){"use strict";n.r(e);n(22),n(21),n(20),n(28),n(29);var r,o,c,d,l=n(3),f=n(1),h=(n(52),n(772)),m=n(767),O=n(2),v=n(7);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var j=Object(O.c)("div")(r||(r=Object(f.a)(["\n  z-index: 1;\n  border-radius: 10px;\n  background: ",";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])),(function(t){var e=t.theme;return Object(v.b)(e.text1)})),y=Object(O.c)("div",{border:Boolean,start:String,end:String})(o||(o=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  padding: 6px 12px;\n  gap: 8px;\n\n  &::before {\n    ","\n  }\n"])),(function(t){var e=t.border,n=t.start,r=t.end;return'\n    content:"";\n      position:absolute;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n    border-radius: 10px;\n    padding:1px;\n    background: linear-gradient(90deg, '.concat(e?n:Object(v.d)(.5,n),", ").concat(e?r:Object(v.d)(.5,r),");\n    -webkit-mask:\n      linear-gradient(#fff 0 0) content-box,\n      linear-gradient(#fff 0 0);\n    -webkit-mask-composite: destination-out;\n    mask-composite: exclude;\n    ")})),E=Object(O.c)("img")(c||(c=Object(f.a)(["\n  position: relative;\n  height: 20px;\n  width: 20px;\n  border: 1px solid white;\n  border-radius: 12px;\n"]))),T=O.c.div(d||(d=Object(f.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: #efefef;\n"]))),w={Wrapper:h.Wrapper,Chain:h.Chain,ProgressWrapper:h.ProgressWrapper,Progress:h.Progress,TokenWrapper:j,GradientWrapper:y,TokenLogo:E,TokenText:T},C={mixins:[m.a],components:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},w),props:{started:{type:Boolean,default:!1},finished:{type:Boolean,default:!1},progress:{type:Number,default:80}},computed:{tokenLogo:function(){var t;return null===(t=this.selectedToken)||void 0===t?void 0:t.iconPath},tokenText:function(){var t;return"".concat(this.$store.state.transfer.amount," ").concat(null===(t=this.selectedToken)||void 0===t?void 0:t.symbol)}}},P=n(12),component=Object(P.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Wrapper",[t._e(),t._v(" "),t._e(),t._v(" "),n("ProgressWrapper",{attrs:{start:t.sourceChainColor,end:t.destinationChainColor}},[n("Progress",{attrs:{progress:t.progress,start:t.sourceChainColor,end:t.destinationChainColor}})],1),t._v(" "),t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Progress:n(772).default})},784:function(t,e,n){"use strict";n.r(e);var r,o,c,d,l,f=n(1),h=n(40),m=n(104),O=n(39),v=n(2),x=n(769),j=n(9),y=n(767),E=n(7),T=Object(v.c)(x.default)(r||(r=Object(f.a)(["\n  border-radius: 20px;\n  padding: 0 8px;\n  margin-bottom: 10px;\n"]))),w=Object(v.c)(O.TextStyled,{emphasize:Boolean})(o||(o=Object(f.a)(["\n  font-weight: ",";\n  color: ",";\n  font-size: 14px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n"])),(function(t){return t.emphasize?500:400}),(function(t){var e=t.theme;return t.emphasize?e.text1:e.text2})),C=Object(v.c)("span",{color:String})(c||(c=Object(f.a)(["\n  color: ",";\n"])),(function(t){return t.color})),P=v.c.img(d||(d=Object(f.a)(["\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: ",";\n"])),(function(t){var e=t.theme;return Object(E.b)(e.text1)})),S=v.c.a(l||(l=Object(f.a)(["\n  text-decoration: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  color: inherit;\n\n  :hover {\n    text-decoration: underline;\n  }\n"]))),_={mixins:[y.a],data:function(){return{amountQH:"Amount and token to be transferred across chains",sourceQH:"Source chain and address for transfer",destinationQH:"Destination chain and address for transfer"}},components:{SummaryCard:T,SummaryText:w,AutoColumn:m.AutoColumn,RowBetween:h.RowBetween,ChainText:C,TokenIcon:P,AddressText:S},computed:{shortenedSourceAddress:function(){return Object(j.h)(this.sourceAddress)},shortenedDestinationAddress:function(){return Object(j.h)(this.destinationAddress)},sourceAddressLink:function(){return Object(j.c)(this.selectedSourceChain.chainId,"address",this.sourceAddress)},destinationAddressLink:function(){return Object(j.c)(this.selectedDestinationChain.chainId,"address",this.destinationAddress)},amount:function(){return this.$store.state.transfer.amount},tokenSymbol:function(){var t;return null===(t=this.selectedToken)||void 0===t?void 0:t.symbol},tokenIcon:function(){var t;return null===(t=this.selectedToken)||void 0===t?void 0:t.iconPath}}},L=n(12),component=Object(L.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SummaryCard",[n("AutoColumn",{attrs:{gap:"1px"}},[n("RowBetween",{attrs:{align:"center"}},[n("SummaryText",[t._v("Amount"),n("QuestionHelper",{attrs:{text:t.amountQH}})],1),t._v(" "),n("SummaryText",{staticStyle:{gap:"4px"},attrs:{emphasize:""}},[n("TokenIcon",{attrs:{src:t.tokenIcon}}),t._v("\n        "+t._s(t.amount)+" "+t._s(t.tokenSymbol)+"\n      ")],1)],1),t._v(" "),n("RowBetween",{attrs:{align:"center"}},[n("SummaryText",[t._v("From\n        "),n("QuestionHelper",{attrs:{text:t.sourceQH}})],1),t._v(" "),n("SummaryText",{staticStyle:{gap:"4px"},attrs:{emphasize:""}},[n("ChainText",{attrs:{color:t.sourceChainColor}},[t._v(t._s(t.selectedSourceChain.name))]),t._v(" "),n("span",[t._v("("),n("AddressText",{attrs:{href:t.sourceAddressLink,target:"_blank"}},[t._v(t._s(t.shortenedSourceAddress))]),t._v(")")],1)],1)],1),t._v(" "),n("RowBetween",{attrs:{align:"center"}},[n("SummaryText",[t._v("To\n        "),n("QuestionHelper",{attrs:{text:t.destinationQH}})],1),t._v(" "),n("SummaryText",{staticStyle:{gap:"4px"},attrs:{emphasize:""}},[n("ChainText",{attrs:{color:t.destinationChainColor}},[t._v(t._s(t.selectedDestinationChain.name))]),t._v(" "),n("span",[t._v("("),n("AddressText",{attrs:{href:t.destinationAddressLink,target:"_blank"}},[t._v(t._s(t.shortenedDestinationAddress))]),t._v(")")],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{QuestionHelper:n(231).default})},785:function(t,e,n){"use strict";n.r(e);n(22),n(21),n(20),n(28),n(29);var r,o=n(3),c=n(1),d=(n(69),n(49),n(6)),l=n(17),f=n(109),h=n(39),m=n(767),O=n(2),v=n(23);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var j=Object(O.c)(h.TextStyled)(r||(r=Object(c.a)(["\n  color: inherit;\n  line-height: normal;\n  font-size: 16px;\n  font-weight: 500;\n"]))),y={ButtonPrimary:f.ButtonPrimary,ButtonText:j},E={mixins:[m.a],components:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},y),data:function(){return{StatusTypes:d.b}},computed:{status:function(){return this.$store.state.transfer.status},rpcError:function(){var t=this.$store.state.transfer.sourceChainId,e=this.$store.state.transfer.destinationChainId,n=this.$store.state.networks[t].status,r=this.$store.state.networks[e].status,o=n!==l.a.CONNECTED,c=r!==l.a.CONNECTED,d=v.a.chains.find((function(e){return e.chainId==t})),f=v.a.chains.find((function(t){return t.chainId==e}));return o?"".concat(d.name," RPC down"):!!c&&"".concat(f.name," RPC down")}},methods:{transfer:function(){this.$store.dispatch(d.c.CONFIRM)},complete:function(){this.$store.dispatch(d.c.COMPLETE),this.closeModal({modalName:"transfer "})}}},T=n(12),component=Object(T.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.status===t.StatusTypes.AWAITING_CONFIRMATIONS?n("ButtonPrimary",{attrs:{disabled:""}},[n("ButtonText",[t._v("Awaiting confirmations")])],1):t.status===t.StatusTypes.IN_PROGRESS||t.status===t.StatusTypes.COMPLETE?n("ButtonPrimary",{attrs:{light:!t.isDarkMode,color1:t.sourceChainColor,color2:t.destinationChainColor},on:{click:t.complete}},[n("ButtonText",[t._v("Complete this transfer")])],1):t.rpcError?n("ButtonPrimary",{attrs:{disabled:""}},[n("ButtonText",[t._v(t._s(t.rpcError))])],1):null===t.status?n("ButtonPrimary",{attrs:{light:!t.isDarkMode,color1:t.sourceChainColor,color2:t.destinationChainColor},on:{click:t.transfer}},[n("ButtonText",[t._v("Confirm Transfer")])],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},791:function(t,e,n){"use strict";n.r(e);n(22),n(21),n(20),n(28),n(29);var r,o,c,d,l,f,h,m,O,v,x,j,y,E,T=n(5),w=n(3),C=n(1),P=(n(30),n(86)),S=n.n(P),_=n(6),L=n(40),A=n(104),I=n(39),k=n(31),D=n(2),N=n(7);function M(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var R=Object(D.c)(k.r)(r||(r=Object(C.a)(["\n  cursor: pointer;\n"]))),B=D.c.div(o||(o=Object(C.a)(["\n  width: 100%;\n"]))),F=Object(D.c)(A.AutoColumn)(c||(c=Object(C.a)(["\n  position: relative;\n  padding: 24px;\n"]))),W=D.c.div(d||(d=Object(C.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  ","\n  position: relative;\n  border-radius: 20px;\n  background-color: ",";\n  border: 1px solid ",";\n  z-index: 1;\n"])),(function(t){return t.theme.flexRowNoWrap}),(function(t){return t.theme.bg1}),(function(t){return t.theme.bg2})),$=D.c.div(l||(l=Object(C.a)(["\n  padding: 4rem 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),z=Object(D.c)(F)(f||(f=Object(C.a)(["\n  background-color: ",";\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n"])),(function(t){return t.theme.bg2})),V=Object(D.c)(L.RowBetween)(h||(h=Object(C.a)(["\n  margin-bottom: 24px;\n"]))),H=Object(D.c)(I.TextStyled)(m||(m=Object(C.a)(["\n  color: ","\n  font-weight: 500;\n  font-size: 20px;\n"])),(function(t){return t.theme.text1})),U=D.c.div(O||(O=Object(C.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  padding: 1rem;\n  padding-right: 0;\n  color: ",";\n  z-index: 1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n"])),(function(t){return t.theme.red1})),G=Object(D.c)(L.RowBetween)(v||(v=Object(C.a)(["\n  background-color: ",";\n  width: 100%;\n  border-radius: 12px;\n"])),(function(t){var e=t.theme;return Object(N.d)(.9,e.red1)})),Q=D.c.p(x||(x=Object(C.a)(["\n  margin-left: 0.25rem;\n  word-break: break-word;\n  display: flex;\n"]))),J=Object(D.c)(Q)(j||(j=Object(C.a)(["\n  :hover {\n    cursor: pointer;\n    text-decoration: underline;\n  }\n"]))),K=D.c.button(y||(y=Object(C.a)(["\n  background-color: ",";\n  color: ",";\n  border: 1px solid ",";\n  cursor: pointer;\n  font-weight: 600;\n  padding: 8px;\n  border-radius: 6px;\n  margin-right: 1rem;\n\n  :hover {\n    background-color: ",";\n  }\n"])),(function(t){var e=t.theme;return Object(N.d)(.9,e.red1)}),(function(t){return t.theme.red1}),(function(t){return t.theme.red1}),(function(t){var e=t.theme;return Object(N.d)(.88,e.red1)})),X=D.c.div(E||(E=Object(C.a)(["\n  background-color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 8px;\n  min-width: 36px;\n  height: 36px;\n"])),(function(t){var e=t.theme;return Object(N.d)(.9,e.red1)})),Y={components:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?M(Object(source),!0).forEach((function(e){Object(w.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):M(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},{Title:H,CloseIcon:R,Wrapper:B,TopSection:F,MiddleSection:W,PreparingText:$,BottomSection:z,RowBetween:L.RowBetween,TextStyled:I.TextStyled,AutoColumn:A.AutoColumn,TitleRow:V,ErrorInner:U,ErrorOuter:G,TryAgainButton:K,ErrorInnerAlertTriangle:X,ErrorText:Q,ErrorTextLink:J,AlertTriangleIcon:k.b,ArrowRightCircleIcon:k.e}),data:function(){return{isFetchingVoteThreshold:!1,progress:20}},methods:{updateProgress:function(t){var progress=t.progress;this.progress=progress},fetchVoteThreshold:function(){var t=this;return Object(T.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.isFetchingVoteThreshold=!0,e.next=4,S.a.set(1e3);case 4:return e.next=6,t.$store.dispatch(_.c.FETCH_VOTE_THRESHOLD);case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:return e.prev=10,t.isFetchingVoteThreshold=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,8,10,13]])})))()}},computed:{modalIsOpen:function(){return this.$store.state.modals.transfer},votesRequired:function(){var t;return null===(t=this.$store.state.transfer.session)||void 0===t?void 0:t.votesRequired},error:function(){return!this.isFetchingVoteThreshold&&null===this.votesRequired&&"Error fetching votes required"}},watch:{modalIsOpen:function(t){var e=this.$store.state.transfer.status;t&&null===e&&this.fetchVoteThreshold()}}},Z=n(12),component=Object(Z.a)(Y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Modal",{attrs:{modalName:"transfer"}},[n("Wrapper",[n("TopSection",[n("TitleRow",[n("Title",[t._v("Confirm Transfer")]),t._v(" "),n("CloseIcon",{on:{click:function(e){return t.closeModal({modalName:"transfer"})}}})],1),t._v(" "),n("MiddleSection",{directives:[{name:"show",rawName:"v-show",value:t.isFetchingVoteThreshold&&!t.error,expression:"isFetchingVoteThreshold && !error"}]},[n("PreparingText",[n("Loader",{staticStyle:{"margin-right":"8px"}}),t._v(" Preparing transfer\n        ")],1)],1),t._v(" "),n("TransferModalStatusCard",{directives:[{name:"show",rawName:"v-show",value:!t.isFetchingVoteThreshold&&!t.error,expression:"!isFetchingVoteThreshold && !error"}],attrs:{progress:t.progress},on:{"update-progress":t.updateProgress}}),t._v(" "),t.modalIsOpen?n("ErrorOuter",{directives:[{name:"show",rawName:"v-show",value:!t.isFetchingVoteThreshold&&t.error,expression:"!isFetchingVoteThreshold && error"}]},[n("ErrorInner",[n("ErrorInnerAlertTriangle",[n("AlertTriangleIcon",{attrs:{size:"18"}})],1),t._v(" "),n("ErrorText",[t._v(t._s(t.error))])],1),t._v(" "),n("TryAgainButton",{on:{click:function(e){return t.fetchVoteThreshold()}}},[t._v("Try Again")])],1):t._e(),t._v(" "),n("div",{staticStyle:{position:"absolute",bottom:"24px",width:"100%",transform:"translate(0, 50%)","z-index":"1"}},[n("TransferModalProgress",{attrs:{progress:t.progress}})],1)],1),t._v(" "),t.error||t.isFetchingVoteThreshold?t._e():n("BottomSection",{attrs:{gap:"12px"}},[n("TransferModalSummary"),t._v(" "),n("TransferModalButtons")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Loader:n(145).default,TransferModalStatusCard:n(782).default,TransferModalProgress:n(783).default,TransferModalSummary:n(784).default,TransferModalButtons:n(785).default,Modal:n(147).default})}}]);