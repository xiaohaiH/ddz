(function(e){function t(t){for(var i,l,o=t[0],a=t[1],h=t[2],u=0,g=[];u<o.length;u++)l=o[u],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&g.push(n[l][0]),n[l]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);p&&p(t);while(g.length)g.shift()();return s.push.apply(s,h||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],i=!0,o=1;o<r.length;o++){var a=r[o];0!==n[a]&&(i=!1)}i&&(s.splice(t--,1),e=l(l.s=r[0]))}return e}var i={},n={app:0},s=[];function l(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=i,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(r,i,function(t){return e[t]}.bind(null,i));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var h=0;h<o.length;h++)t(o[h]);var p=a;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"03dc":function(e,t,r){},"342a":function(e,t,r){"use strict";var i=r("03dc"),n=r.n(i);n.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Game")],1)},s=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticStyle:{width:"300px",height:"300px",float:"left",position:"fixed",left:"0px",top:"0px","background-color":"aliceblue","text-align":"center"}},[r("span",[e._v(" "+e._s(e.player2Str[0])+" "),r("br"),e._v(" "+e._s(e.player2Str[1])+" "),r("br"),r("br"),e._v(" "+e._s(e.player2Str[2])+" ")])]),r("div",{staticStyle:{width:"300px",height:"300px",float:"left",position:"fixed",left:"600px",top:"0px","background-color":"aliceblue","text-align":"center"}},[r("span",[e._v(" "+e._s(e.player1Str[0])+" "),r("br"),e._v(" "+e._s(e.player1Str[1])+" "),r("br"),r("br"),e._v(" "+e._s(e.player1Str[2])+" ")])]),r("div",{staticStyle:{width:"300px",height:"300px",float:"left",position:"fixed",left:"300px",top:"300px","background-color":"aliceblue","text-align":"center"}},[r("span",[e._v(" "+e._s(e.player0Str[0])+" "),r("br"),e._v(" "+e._s(e.player0Str[1])+" "),r("br"),r("br"),e._v(" "+e._s(e.player0Str[2])+" ")]),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.playerStr,expression:"playerStr"}],attrs:{type:"text"},domProps:{value:e.playerStr},on:{input:function(t){t.target.composing||(e.playerStr=t.target.value)}}}),r("button",{on:{click:e.sendPoker}},[e._v("send")]),r("button",{on:{click:e.pass}},[e._v("pass")])])]),r("div",{staticStyle:{width:"300px",height:"300px",float:"left",position:"fixed",left:"300px",top:"0px","background-color":"aliceblue","text-align":"center"}},[r("div",{staticStyle:{width:"300px","word-wrap":"break-word"}},[e._v(" "+e._s(e.deskStr[0])+" "),r("br"),e._v(" "+e._s(e.deskStr[1])+" ")])]),r("div",{staticStyle:{position:"fixed",left:"300px",top:"600px"}},[r("button",{on:{click:e.reStart}},[e._v("reStart")])])])},o=[],a=(r("b0c0"),r("a434"),r("d4ec")),h=r("bee2"),p=(r("99af"),r("0481"),r("d81d"),r("fb6a"),r("4069"),r("d3b7"),r("25f0"),function(){function e(t){Object(a["a"])(this,e),t.text?(this.text=t.text,this.number=e.textToNumber(t.text)):(this.number=t.number,this.text=e.numberToText(t.number)),this.type=t.type,this.selected=t.selected}return Object(h["a"])(e,[{key:"toString",value:function(){return this.text}}],[{key:"textToNumber",value:function(e){switch(e){case"3":return 3;case"4":return 4;case"5":return 5;case"6":return 6;case"7":return 7;case"8":return 8;case"9":return 9;case"10":case"0":case"T":case"t":return 10;case"11":case"j":case"J":return 11;case"12":case"q":case"Q":return 12;case"13":case"k":case"K":return 13;case"1":case"a":case"A":return 14;case"2":return 15;case"s":case"S":return 16;case"x":case"X":return 17}}},{key:"numberToText",value:function(e){switch(e){case 3:return"3";case 4:return"4";case 5:return"5";case 6:return"6";case 7:return"7";case 8:return"8";case 9:return"9";case 10:return"10";case 11:return"J";case 12:return"Q";case 13:return"K";case 14:return"A";case 15:return"2";case 16:return"S";case 17:return"X"}}},{key:"sortFunction",value:function(e,t){return e.number-t.number}},{key:"getObjByPokerList",value:function(t){if("pass"===t[0])return{type:"pass",poker:t};t.sort(e.sortFunction);for(var r=t[0],i=[r],n=[],s=1;s<t.length;s++)t[s].number!==r.number?(n.push(i),i=[t[s]]):i.push(t[s]),r=t[s];n.push(i);for(var l=[],o=[],a=[],h=[],p=0;p<n.length;p++)3===n[p].length?a.push(n[p]):2===n[p].length?o.push(n[p]):1===n[p].length?l.push(n[p]):4===n[p].length&&h.push(n[p]);if(1===t.length)return{type:"one",poker:t,one:t};if(2===t.length){if(1===o.length)return{type:"two",poker:t,two:t};if(16===t[0].number&&17===t[1].number)return{type:"sx",poker:t,sx:t}}else if(3===t.length){if(1===a.length)return{type:"three",poker:t,three:t}}else if(4===t.length){if(1===a.length)return{type:"threeWithOne",poker:t,three:a[0],one:l[0]};if(1===h.length)return{type:"four",poker:t,four:t}}else if(5===t.length){if(1===a.length&&1===o.length)return{type:"threeWithTwo",poker:t,three:a[0],two:o[0]};if(1===h.length&&1===l.length)return{type:"fourWithOne",poker:t,four:h[0],one:l[0]}}else if(6===t.length&&1===h.length&&1===o.length)return{type:"fourWithTwo",poker:t,four:h[0],two:o[0]};if(a.length>=2&&a[a.length-1][0].number<=14&&a[0][0].number+a.length-1===a[a.length-1][0].number){if(t.length-3*a.length===a.length)return{type:"threeWithOneList",poker:t,list:a.map((function(e){return{three:e}}))};if(o.length===a.length)return{type:"threeWithTwoList",poker:t,list:a.map((function(e){return{three:e}}))}}return t.length>=5&&t[t.length-1].number<=14&&l.length===t.length&&t[0].number+t.length-1===t[t.length-1].number?{type:"oneList",poker:t,list:l.map((function(e){return{one:e}}))}:t.length>=6&&t[t.length-1].number<=14&&t.length%2===0&&o.length===t.length/2&&t[0].number+t.length/2-1===t[t.length-1].number?{type:"twoList",poker:t,list:o.map((function(e){return{two:e}}))}:t.length>=6&&t[t.length-1].number<=14&&t.length%3===0&&a.length===t.length/3&&t[0].number+t.length/3-1===t[t.length-1].number&&{type:"threeList",poker:t,list:a.map((function(e){return{three:e}}))}}},{key:"pokerListToString",value:function(e){for(var t="",r=0;r<e.length;r++){var i=e[r].toString();t+=i}return t}}]),e}()),u=p,g=function(){function e(t){Object(a["a"])(this,e),t=t||{},this.pokerList=[],this.name=t.name||"noName"+Math.random(),this.type=t.type||"nongmin",this.last=null,this.next=null,this.isRobot=t.isRobot,this.game=t.game,this.lastSendObj=null}return Object(h["a"])(e,[{key:"addPoker",value:function(e){this.pokerList.push(e)}},{key:"sortPoker",value:function(){this.pokerList.sort(this.sortFunction)}},{key:"sortFunction",value:function(e,t){return e.number-t.number}},{key:"getLastObj",value:function(){var e=this.last.lastSendObj;return!!(e&&"pass"!==e.type||(e=this.next.lastSendObj,e&&"pass"!==e.type))&&e}},{key:"playByAI",value:function(){var e=this;setTimeout((function(){var t=e.getLastObj();t?e.playByObj(t):e.playByAllType()}),1e3)}},{key:"sendPoker",value:function(e){this.game.clearDesk(),this.lastSendObj=e,this.game.deskPokerObj=e,this.game.next()}},{key:"playByAllType",value:function(){for(var e=["threeWithTwoList","threeWithOneList","threeList","twoList","fourWithTwo","fourWithOne","threeWithTwo","oneList","threeWithOne","three","two","one","four","sx","pass"],t=0;t<e.length;t++){var r=this.getSmallestObjByType(e[t]);if(r){var i=this.deleteFromPokerListAndSendByObj(r);return void(i||alert("error!"))}}}},{key:"deleteFromPokerListAndSendByObj",value:function(e){var t=[];if("pass"===e.type)return this.sendPoker(e),!0;for(var r=e.poker,i=0;i<r.length;i++){var n=this.getAndDeleteOnePokerByNumber(r[i].number);if(!n)return this.listBackToPokerList(t),!1;t.push(n)}return this.sendPoker(e),!0}},{key:"getSmallestObjByType",value:function(e){for(var t=this.pokerList,r=t[0],i=[r],n=[],s=1;s<t.length;s++)t[s].number!==r.number?(n.push(i),i=[t[s]]):i.push(t[s]),r=t[s];n.push(i);for(var l=[],o=[],a=[],h=[],p=0;p<n.length;p++)3===n[p].length?a.push(n[p]):2===n[p].length?o.push(n[p]):1===n[p].length?l.push(n[p]):4===n[p].length&&h.push(n[p]);var u=null;if("one"===e){if(l.length>0)u={type:e,poker:l[0],one:l[0]};else if(o.length>0){var g=o[0].slice(0,1);u={type:e,poker:g,one:g}}else if(a.length>0){var f=a[0].slice(0,1);u={type:e,poker:f,one:f}}}else if("two"===e){if(o.length>0)u={type:e,poker:o[0],two:o[0]};else if(a.length>0){var c=a[0].slice(0,2);u={type:e,poker:c,one:c}}}else if("three"===e)a.length>0&&(u={type:e,poker:a[0],three:a[0]});else if("threeWithOne"===e){if(a.length>0){var y;if(l.length>0)y=l[0];else if(o.length>0)y=o[0].slice(0,1);else if(a.length>0)for(var k=0;k<a.length;k++)0!==k&&(y=a[k].slice(0,1));y&&(u={type:e,poker:a[0].concat(y),three:a[0],one:y})}}else if("four"===e)h.length>0&&(u={type:e,poker:h[0],four:h[0]});else if("threeWithTwo"===e){if(a.length>0){var d;if(o.length>0)d=o[0];else if(a.length>0)for(var m=0;m<a.length;m++)0!==m&&(d=a[m].slice(0,2));d&&(u={type:e,poker:a[0].concat(d),three:a[0],two:d})}}else if("fourWithOne"===e){var b;if(h.length>0)l.length>0?b=l[0]:o.length>0?b=o[0].slice(0,1):a.length>0&&(b=a[0].slice(0,1)),b&&(u={type:e,poker:h[0].concat(b),four:h[0],one:b})}else if("fourWithTwo"===e){var v;if(h.length>0)o.length>0?v=o[0]:a.length>0&&(v=a[0].slice(0,2)),v&&(u={type:e,poker:h[0].concat(v),four:h[0],two:v})}else if("threeWithOneList"===e){if(a.length>=2)for(var L=0;L<a.length-2+1;L++)if(a[L][0].number+2-1===a[L+2-1][0].number&&a[L+2-1][0].number<=14){for(var x=[],S=0;S<l.length&&x.length<2;S++)x.push(l[S]);for(var w=0;w<o.length&&x.length<2;w++)x.push(o[w].slice(0,1)),x.length<2&&x.push(o[w].slice(1,2));for(var O=0;O<a.length&&x.length<2;O++)x.push(a[O].slice(0,1)),x.length<2&&x.push(a[O].slice(1,2)),x.length<2&&x.push(a[O].slice(2,3));if(2===x.length){for(var P=[],_=[],j=0;j<2;j++){P.concat(a[L+j]),P.concat(x[L]);var T={three:a[L+j],one:x[L]};_.push(T)}u={type:e,poker:P,list:_}}break}}else if("threeWithTwoList"===e){if(a.length>=2)for(var B=0;B<a.length-2+1;B++)if(a[B][0].number+2-1===a[B+2-1][0].number&&a[B+2-1][0].number<=14){for(var W=[],M=0;M<o.length&&W.length<2;M++)W.push(o);for(var A=0;A<a.length&&W.length<2;A++)W.push(a[A].slice(0,2));if(2===W.length){for(var N=[],z=[],D=0;D<2;D++){N.concat(a[B+D]),N.concat(W[B]);var R={three:a[B+D],two:W[B]};z.push(R)}u={type:e,poker:N,list:z}}break}}else if("oneList"===e){if(l.length>=5)for(var I=0;I<l.length-5+1;I++)if(l[I][0].number+5-1===l[I+5-1][0].number&&l[I+5-1][0].number<=14){var F=l.slice(I,I+5);u={type:e,poker:F.flat(1),list:F.map((function(e){return{one:e}}))};break}}else if("twoList"===e){if(o.length>=3)for(var C=0;C<o.length-3+1;C++)if(o[C][0].number+3-1===o[C+3-1][0].number&&o[C+3-1][0].number<=14){var G=o.slice(C,C+3);u={type:e,poker:G.flat(1),list:G.map((function(e){return{two:e}}))};break}}else if("threeList"===e){if(a.length>=2)for(var J=0;J<a.length-2+1;J++)if(a[J][0].number+2-1===a[J+2-1][0].number&&a[J+2-1][0].number<=14){var $=a.slice(J,J+2);u={type:e,poker:$.flat(1),list:$.map((function(e){return{three:e}}))};break}}else if("sx"===e){if(l.length>=2)for(var E=0;E<l.length-1;E++)if(16===l[E][0].number){var H=o.slice(E,E+2),K=H.flat(1);u={type:e,poker:K,sx:K};break}}else"pass"===e&&(u={type:e,poker:["pass"]});return u}},{key:"getObjByObj",value:function(e){for(var t=this.pokerList,r=t[0],i=[r],n=[],s=1;s<t.length;s++)t[s].number!==r.number?(n.push(i),i=[t[s]]):i.push(t[s]),r=t[s];n.push(i);for(var l=[],o=[],a=[],h=[],p=0;p<n.length;p++)3===n[p].length?a.push(n[p]):2===n[p].length?o.push(n[p]):1===n[p].length?l.push(n[p]):4===n[p].length&&h.push(n[p]);var u=e.type,g=null;if("one"===u){if(l.length>0){for(var f=0;f<l.length;f++)if(l[f][0].number>e.one[0].number){g={type:u,poker:l[f],one:l[f]};break}}else if(o.length>0){for(var c=0;c<o.length;c++)if(o[c][0].number>e.one[0].number){var y=o[c].slice(0,1);g={type:u,poker:y,one:y};break}}else if(a.length>0)for(var k=0;k<a.length;k++)if(a[k][0].number>e.one[0].number){var d=a[k].slice(0,1);g={type:u,poker:d,one:d};break}}else if("two"===u){if(o.length>0){for(var m=0;m<o.length;m++)if(o[m][0].number>e.two[0].number){g={type:u,poker:o[m],two:o[m]};break}}else if(a.length>0)for(var b=0;b<a.length;b++)if(a[b][0].number>e.two[0].number){var v=a[b].slice(0,2);g={type:u,poker:v,one:v};break}}else if("three"===u){if(a.length>0)for(var L=0;L<a.length;L++)if(a[L][0].number>e.three[0].number){g={type:u,poker:a[L],three:a[L]};break}}else if("threeWithOne"===u){if(a.length>0)for(var x=0;x<a.length;x++)if(a[x][0].number>e.three[0].number){var S=void 0;if(l.length>0)S=l[0];else if(o.length>0)S=o[0].slice(0,1);else if(a.length>0)for(var w=0;w<a.length;w++)w!==x&&(S=a[w].slice(0,1));S&&(g={type:u,poker:a[x].concat(S),three:a[x],one:S});break}}else if("threeWithTwo"===u){if(a.length>0)for(var O=0;O<a.length;O++)if(a[O][0].number>e.three[0].number){var P=void 0;if(o.length>0)P=o[0];else if(a.length>0)for(var _=0;_<a.length;_++)_!==O&&(P=a[_].slice(0,2));P&&(g={type:u,poker:a[O].concat(P),three:a[O],two:P});break}}else if("fourWithOne"===u){if(h.length>0)for(var j=0;j<h.length;j++)if(h[j][0].number>e.four[0].number){var T=void 0;l.length>0?T=l[0]:o.length>0?T=o[0].slice(0,1):a.length>0&&(T=a[0].slice(0,1)),T&&(g={type:u,poker:h[j].concat(T),four:h[j],one:T});break}}else if("fourWithTwo"===u){if(h.length>0)for(var B=0;B<h.length;B++)if(h[B][0].number>e.four[0].number){var W=void 0;o.length>0?W=o[0]:a.length>0&&(W=a[0].slice(0,2)),W&&(g={type:u,poker:h[B].concat(W),four:h[B],two:W});break}}else if("threeWithOneList"===u){if(a.length>=e.list.length)for(var M=0;M<a.length-e.list.length+1;M++)if(a[M][0].number>e.list[0].three[0].number&&a[M][0].number+e.list.length-1===a[M+e.list.length-1][0].number&&a[M+e.list.length-1][0].number<=14){for(var A=[],N=0;N<l.length&&A.length<e.list.length;N++)A.push(l[N]);for(var z=0;z<o.length&&A.length<e.list.length;z++)A.push(o[z].slice(0,1)),A.length<e.list.length&&A.push(o[z].slice(1,2));for(var D=0;D<a.length&&A.length<e.list.length;D++)A.push(a[D].slice(0,1)),A.length<e.list.length&&A.push(a[D].slice(1,2)),A.length<e.list.length&&A.push(a[D].slice(2,3));if(A.length===e.list.length){for(var R=[],I=[],F=0;F<e.list.length;F++){R.concat(a[M+F]),R.concat(A[M]);var C={three:a[M+F],one:A[M]};I.push(C)}g={type:u,poker:R,list:I}}break}}else if("threeWithTwoList"===u){if(a.length>=e.list.length)for(var G=0;G<a.length-e.list.length+1;G++)if(a[G][0].number>e.list[0].three[0].number&&a[G][0].number+e.list.length-1===a[G+e.list.length-1][0].number&&a[G+e.list.length-1][0].number<=14){for(var J=[],$=0;$<o.length&&J.length<e.list.length;$++)J.push(o);for(var E=0;E<a.length&&J.length<e.list.length;E++)J.push(a[E].slice(0,2));if(J.length===e.list.length){for(var H=[],K=[],Q=0;Q<e.list.length;Q++){H.concat(a[G+Q]),H.concat(J[G]);var X={three:a[G+Q],two:J[G]};K.push(X)}g={type:u,poker:H,list:K}}break}}else if("oneList"===u){if(l.length>=e.list.length)for(var q=0;q<l.length-e.list.length+1;q++)if(l[q][0].number>e.list[0].one[0].number&&l[q][0].number+e.list.length-1===l[q+e.list.length-1][0].number&&l[q+e.list.length-1][0].number<=14){var U=l.slice(q,q+e.list.length);g={type:u,poker:U.flat(1),list:U.map((function(e){return{one:e}}))};break}}else if("twoList"===u){if(o.length>=e.list.length)for(var V=0;V<o.length-e.list.length+1;V++)if(o[V][0].number>e.list[0].two[0].number&&o[V][0].number+e.list.length-1===o[V+e.list.length-1][0].number&&o[V+e.list.length-1][0].number<=14){var Y=o.slice(V,V+e.list.length);g={type:u,poker:Y.flat(1),list:Y.map((function(e){return{two:e}}))};break}}else if("threeList"===u){if(a.length>=e.list.length)for(var Z=0;Z<a.length-e.list.length+1;Z++)if(a[Z][0].number>e.list[0].two[0].number&&a[Z][0].number+e.list.length-1===a[Z+e.list.length-1][0].number&&a[Z+e.list.length-1][0].number<=14){var ee=a.slice(Z,Z+e.list.length);g={type:u,poker:ee.flat(1),list:ee.map((function(e){return{three:e}}))};break}}else if("four"===u&&h.length>0)for(var te=0;te<h.length;te++)if(h[te][0].number>e.four[0].number){g={type:u,poker:h[te],four:h[te]};break}if(g||"four"===u||h.length>0&&(g={type:u,poker:h[0],four:h[0]}),!g&&"sx"!==u&&l.length>1&&16===l[l.length-2]){var re=l[l.length-2].concat(l[l.length-1]);g={type:u,poker:re,sx:re}}return g||(g={type:"pass",poker:["pass"]}),g}},{key:"playByObj",value:function(e){var t=this.getObjByObj(e),r=this.deleteFromPokerListAndSendByObj(t);r||alert("error!")}},{key:"getListByList",value:function(e){var t=[];if("pass"===e[0])return["pass"];for(var r=0;r<e.length;r++){var i=e[r],n=this.getAndDeleteOnePokerByNumber(i.number);if(!n)return this.listBackToPokerList(t),!1;t.push(n)}return t}},{key:"getListByString",value:function(e){var t=[];if("pass"===e)return["pass"];for(var r=0;r<e.length;r++){var i=e[r],n=u.textToNumber(i),s=this.getAndDeleteOnePokerByNumber(n);if(!s)return this.listBackToPokerList(t),!1;t.push(s)}return t}},{key:"listBackToPokerList",value:function(e){while(e.length>0){var t=e.splice(0,1)[0];this.pokerList.push(t)}this.sortPoker()}},{key:"handleList",value:function(e){if(e){var t=u.getObjByPokerList(e);if(t){if("pass"===t.type)return this.sendPoker(t),!0;var r=this.getLastObj();if(r){if(r.type===t.type){var i=this.compareTwoObj(t,r);return i?(this.sendPoker(t),!0):(this.listBackToPokerList(e),alert("have to bigger than "+u.pokerListToString(r.poker)),!1)}return"sx"===t.type||"four"===t.type&&"sx"!==r.type?(this.sendPoker(t),!0):(this.listBackToPokerList(e),alert("type is not "+r.type+"!"),!1)}return this.sendPoker(t),!0}return this.listBackToPokerList(e),alert("type error!"),!1}return alert("poker error!"),!1}},{key:"playByPokerList",value:function(e){if(this.game.currentPlayer!==this)return alert("请等待 "+this.game.currentPlayer.name+" 出牌"),!1;var t=this.getListByList(e);return this.handleList(t)}},{key:"playByString",value:function(e){if(this.game.currentPlayer!==this)return alert("请等待 "+this.game.currentPlayer.name+" 出牌"),!1;var t=this.getListByString(e);return this.handleList(t)}},{key:"compareTwoObj",value:function(e,t){return(!e.list||!t.list||e.list.length===t.list.length)&&("one"===e.type?e.one[0].number>t.one[0].number:"two"===e.type?e.two[0].number>t.two[0].number:"three"===e.type||"threeWithOne"===e.type||"threeWithTwo"===e.type?e.three[0].number>t.three[0].number:"fourWithOne"===e.type||"fourWithTwo"===e.type?e.four[0].number>t.four[0].number:"threeWithOneList"===e.type||"threeWithTwoList"===e.type?e.list[0].three[0].number>t.list[0].three[0].number:"oneList"===e.type?e.list[0].one[0].number>t.list[0].one[0].number:"twoList"===e.type?e.list[0].two[0].number>t.list[0].two[0].number:"threeList"===e.type?e.list[0].three[0].number>t.list[0].three[0].number:"four"===e.type?e.four[0].number>t.four[0].number:void 0)}},{key:"getAndDeleteOnePokerByNumber",value:function(e){for(var t=0;t<this.pokerList.length;t++)if(this.pokerList[t].number===e)return this.pokerList.splice(t,1)[0];return!1}},{key:"pokerListToString",value:function(){var e=u.pokerListToString(this.pokerList);return e}},{key:"lastSendObjToString",value:function(){if(!this.lastSendObj)return"";var e=u.pokerListToString(this.lastSendObj.poker);return e}}]),e}(),f=g,c=function(){function e(){Object(a["a"])(this,e),this.playerList=[],this.pokerList=[],this.deskPokerObj=null,this.oldPokerList=[],this.currentPlayer=[],this.dizhu=null,this.MaxSecond=999999,this.second=this.MaxSecond,this.isOver=!0,this.init()}return Object(h["a"])(e,[{key:"init",value:function(){this.initPokerList(),this.initPlayerList(),this.sendPoker(),this.start()}},{key:"resetTime",value:function(){this.second=this.MaxSecond}},{key:"timeLoop",value:function(){if(!this.isOver){this.second--,0===this.second&&this.timeout();var e=this;setTimeout((function(){e.timeLoop()}),1e3)}}},{key:"timeout",value:function(){this.currentPlayer.playByString("pass")}},{key:"start",value:function(){this.isOver=!1,this.timeLoop(),this.currentPlayer=this.dizhu,this.currentPlayer.isRobot&&this.currentPlayer.playByAI()}},{key:"next",value:function(){var e=this.checkGameOver();e?this.gameOver():(this.resetTime(),this.currentPlayer=this.currentPlayer.next,this.currentPlayer.isRobot&&this.currentPlayer.playByAI())}},{key:"gameOver",value:function(){alert("gameOver! "+this.currentPlayer.name+" ["+this.currentPlayer.type+"] win!"),this.isOver=!0}},{key:"checkGameOver",value:function(){if(0===this.currentPlayer.pokerList.length)return!0}},{key:"clearDesk",value:function(){this.deskPokerObj&&(this.oldPokerList.push(this.deskPokerObj),this.deskPokerObj=null)}},{key:"sendPoker",value:function(){var e=this.playerList[0];do{var t=this.getRandomIntInclusive(0,this.pokerList.length-1),r=this.pokerList.splice(t,1)[0];e.addPoker(r),e=e.next}while(this.pokerList.length>3);do{var i=this.pokerList.splice(0,1)[0];this.dizhu.addPoker(i)}while(this.pokerList.length>0);for(var n=0;n<this.playerList.length;n++)this.playerList[n].sortPoker()}},{key:"initPlayerList",value:function(){this.playerList=[];var e=new f({name:"player",isRobot:!1,game:this}),t=new f({name:"robot1",isRobot:!0,game:this}),r=new f({name:"robot2",isRobot:!0,game:this});this.playerList=[e,t,r],this.playerList[0].next=this.playerList[1],this.playerList[1].next=this.playerList[2],this.playerList[2].next=this.playerList[0],this.playerList[0].last=this.playerList[2],this.playerList[1].last=this.playerList[0],this.playerList[2].last=this.playerList[1];var i=this.getRandomIntInclusive(0,2);this.playerList[i].type="dizhu",this.dizhu=this.playerList[i]}},{key:"initPokerList",value:function(){this.pokerList=[];for(var e=3;e<=15;e++)for(var t=0;t<4;t++){var r=new u({number:e,type:t});this.pokerList.push(r)}for(var i=16;i<=17;i++){var n=new u({number:i});this.pokerList.push(n)}}},{key:"pokerListToString",value:function(){var e="";e+=u.pokerListToString(this.pokerList),e+="\n";for(var t=0;t<this.oldPokerList.length;t++)e+=u.pokerListToString(this.oldPokerList[t].poker),t<this.oldPokerList.length-1&&(e+=",");return e+="\n",e+=this.deskPokerObj?u.pokerListToString(this.deskPokerObj.poker):"",e}},{key:"getRandomIntInclusive",value:function(e,t){return Math.floor(Math.random()*(t-e+1))+e}}]),e}(),y=c,k={name:"HelloWorld",data:function(){return{data:"fuck1",game:new y,playerStr:""}},computed:{player2Str:function(){var e=this.game,t=2;return[e.playerList[t].name+" : "+e.playerList[t].type+" : "+e.playerList[t].pokerList.length,e.playerList[t].pokerListToString(),"last : "+e.playerList[t].lastSendObjToString()]},player1Str:function(){var e=this.game,t=1;return[e.playerList[t].name+" : "+e.playerList[t].type+" : "+e.playerList[t].pokerList.length,e.playerList[t].pokerListToString(),"last : "+e.playerList[t].lastSendObjToString()]},player0Str:function(){var e=this.game,t=0;return[e.playerList[t].name+" : "+e.playerList[t].type+" : "+e.playerList[t].pokerList.length,e.playerList[t].pokerListToString(),"last : "+e.playerList[t].lastSendObjToString()]},deskStr:function(){var e=this.game;return["desk",e.pokerListToString()]}},mounted:function(){this.data=this.game.playerList[1].name},methods:{reDraw:function(){},sendPoker:function(){var e=this.game,t=e.playerList[0].playByString(this.playerStr);t&&(this.playerStr="")},pass:function(){this.game.playerList[0].playByString("pass")},reStart:function(){this.game=new y,this.playerStr=""}}},d=k,m=r("2877"),b=Object(m["a"])(d,l,o,!1,null,"62298b0c",null),v=b.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{"user-select":"none"}},[r("div",{staticStyle:{width:"300px",height:"300px",float:"left",position:"fixed",left:"0",top:"0px","background-color":"aliceblue","text-align":"center"}},[r("span",[e._v(" 手牌："+e._s(e.player2Str[1])+" ")])]),r("div",{staticStyle:{width:"300px",height:"300px",float:"left",position:"fixed",right:"0",top:"0px","background-color":"aliceblue","text-align":"center"}},[r("span",[e._v(" 手牌："+e._s(e.player1Str[1])+" ")])]),r("div",{staticStyle:{width:"300px",height:"300px",float:"left",position:"fixed",left:"600px",top:"0px","background-color":"aliceblue","text-align":"center"}},[r("div",{staticStyle:{width:"300px","word-wrap":"break-word"}},[e._v(" 已出的牌： "),r("br"),e._v(" "+e._s(e.deskStr[1])+" ")])]),r("div",{staticStyle:{position:"fixed",left:"600px",top:"300px"}},[r("button",{on:{click:e.reStart}},[e._v("开始新一局")])]),r("div",{staticStyle:{position:"fixed",bottom:"0",width:"100%",height:"200px","line-height":"200px"},style:{marginLeft:e.playerMarginLeft-150+"px"}},[e._v(" 你是 "+e._s("nongmin"===e.game.playerList[0].type?"农民":"地主")+" ")]),r("div",{staticStyle:{position:"fixed",bottom:"0",width:"100%",height:"200px"},style:{marginLeft:e.playerMarginLeft+"px"}},e._l(e.game.playerList[0].pokerList,(function(t){return r("div",{staticClass:"poker",class:{selected:t.selected},on:{mouseenter:function(r){return e.enter(r,t)},mousedown:function(r){return e.pickPoker(t)}}},[e._v(" "+e._s(t.text)+" ")])})),0),r("div",{staticStyle:{position:"fixed",bottom:"200px",width:"100%",height:"100px","text-align":"left"}},[r("div",{staticStyle:{width:"200px",height:"30px"},style:{marginLeft:e.buttonMarginLeft+"px"}},[r("button",{staticStyle:{height:"30px","border-radius":"4px",float:"left"},on:{click:e.sendPoker2}},[e._v("出牌")]),r("button",{staticStyle:{height:"30px","border-radius":"4px","margin-left":"20px",float:"right"},on:{click:e.pass}},[e._v("不出")]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.game.currentPlayer===e.game.playerList[0],expression:"game.currentPlayer===game.playerList[0]"}],staticStyle:{color:"red",width:"150px",border:"solid","border-radius":"4px",float:"left"}},[e._v(" 请在"+e._s(e.game.second)+"秒内出牌 ")])])]),e.game.playerList[0].lastSendObj&&e.game.playerList[0].lastSendObj.poker[0].text?r("div",{staticStyle:{position:"fixed",bottom:"350px",width:"100%",height:"200px"},style:{marginLeft:e.deskPokerMarginLeft+"px"}},e._l(e.game.playerList[0].lastSendObj.poker,(function(t){return r("div",{staticClass:"pokerDesk"},[e._v(" "+e._s(t.text)+" ")])})),0):e._e(),e.game.playerList[0].lastSendObj&&!e.game.playerList[0].lastSendObj.poker[0].text?r("div",{staticStyle:{position:"fixed",bottom:"350px",width:"100%",height:"200px"},style:{marginLeft:e.deskPokerMarginLeft+"px"}},[r("div",{staticStyle:{height:"100%",width:"100px",float:"left","margin-left":"-50px","font-size":"50px"}},[e._v(" pass ")])]):e._e(),r("div",{staticStyle:{position:"fixed",top:"40px",left:"20px",height:"200px",width:"100px",border:"solid 1px","border-radius":"8px","background-color":"azure","text-align":"center"}},[r("p",[e._v(" "+e._s("nongmin"===e.game.playerList[2].type?"农民":"地主")+" ")]),r("p",[e._v(" "+e._s(e.game.playerList[2].name)+" ")]),r("p",[e._v(" 剩余 "+e._s(e.game.playerList[2].pokerList.length)+" 张 ")]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.game.currentPlayer===e.game.playerList[2],expression:"game.currentPlayer===game.playerList[2]"}],staticStyle:{color:"red",width:"150px",border:"solid","border-radius":"4px",position:"absolute",bottom:"-50px",left:"0"}},[e._v(" 请在"+e._s(e.game.second)+"秒内出牌 ")])]),e.game.playerList[2].lastSendObj&&e.game.playerList[2].lastSendObj.poker[0].text?r("div",{staticStyle:{position:"fixed",top:"100px",left:"200px",height:"200px"}},e._l(e.game.playerList[2].lastSendObj.poker,(function(t){return r("div",{staticClass:"pokerDesk"},[e._v(" "+e._s(t.text)+" ")])})),0):e._e(),e.game.playerList[2].lastSendObj&&!e.game.playerList[2].lastSendObj.poker[0].text?r("div",{staticStyle:{position:"fixed",top:"100px",left:"200px",height:"200px"}},[r("div",{staticStyle:{height:"100%",width:"100px",float:"left","margin-left":"-50px","font-size":"50px"}},[e._v(" pass ")])]):e._e(),r("div",{staticStyle:{position:"fixed",top:"40px",right:"20px",height:"200px",width:"100px",border:"solid 1px","border-radius":"8px","background-color":"azure","text-align":"center"}},[r("p",[e._v(" "+e._s("nongmin"===e.game.playerList[1].type?"农民":"地主")+" ")]),r("p",[e._v(" "+e._s(e.game.playerList[1].name)+" ")]),r("p",[e._v(" 剩余 "+e._s(e.game.playerList[1].pokerList.length)+" 张 ")]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.game.currentPlayer===e.game.playerList[1],expression:"game.currentPlayer===game.playerList[1]"}],staticStyle:{color:"red",width:"150px",border:"solid","border-radius":"4px",position:"absolute",bottom:"-50px",right:"0"}},[e._v(" 请在"+e._s(e.game.second)+"秒内出牌 ")])]),e.game.playerList[1].lastSendObj&&e.game.playerList[1].lastSendObj.poker[0].text?r("div",{staticStyle:{position:"fixed",top:"100px",right:"200px",height:"200px"}},e._l(e.game.playerList[1].lastSendObj.poker,(function(t){return r("div",{staticClass:"pokerDesk"},[e._v(" "+e._s(t.text)+" ")])})),0):e._e(),e.game.playerList[1].lastSendObj&&!e.game.playerList[1].lastSendObj.poker[0].text?r("div",{staticStyle:{position:"fixed",top:"100px",right:"200px",height:"200px"}},[r("div",{staticStyle:{height:"100%",width:"100px",float:"left","margin-left":"-50px","font-size":"50px"}},[e._v(" pass ")])]):e._e()])},x=[],S={name:"HelloWorld",data:function(){return{data:"fuck1",game:new y,playerStr:"",pokerList:[]}},computed:{playerMarginLeft:function(){return(window.innerWidth-50*this.game.playerList[0].pokerList.length)/2},deskPokerMarginLeft:function(){return(window.innerWidth-50*this.game.playerList[0].lastSendObj.poker.length)/2},buttonMarginLeft:function(){return(window.innerWidth-200)/2},deskPoker:function(){return this.game.deskPokerObj&&this.game.deskPokerObj.poker&&this.game.deskPokerObj.poker[0]&&this.game.deskPokerObj.poker[0].text?this.game.deskPokerObj.poker:[]},player2Str:function(){var e=this.game,t=2;return[e.playerList[t].name+" : "+e.playerList[t].type+" : "+e.playerList[t].pokerList.length,e.playerList[t].pokerListToString(),e.playerList[t].lastSendObjToString()]},player1Str:function(){var e=this.game,t=1;return[e.playerList[t].name+" : "+e.playerList[t].type+" : "+e.playerList[t].pokerList.length,e.playerList[t].pokerListToString(),e.playerList[t].lastSendObjToString()]},player0Str:function(){var e=this.game,t=0;return[e.playerList[t].name+" : "+e.playerList[t].type+" : "+e.playerList[t].pokerList.length,e.playerList[t].pokerListToString(),e.playerList[t].lastSendObjToString()]},deskStr:function(){var e=this.game;return["desk",e.pokerListToString()]}},mounted:function(){this.data=this.game.playerList[1].name},methods:{enter:function(e,t){1===e.buttons&&this.pickPoker(t)},pickPoker:function(e){if(e.selected){e.selected=!1;for(var t=0;t<this.pokerList.length;t++)this.pokerList[t]===e&&this.pokerList.splice(t,1)}else e.selected=!0,this.pokerList.push(e)},sendPoker2:function(){var e=this.game,t=e.playerList[0].playByPokerList(this.pokerList);t&&(this.pokerList=[])},sendPoker:function(){var e=this.game,t=e.playerList[0].playByString(this.playerStr);t&&(this.playerStr="")},pass:function(){this.game.playerList[0].playByString("pass")},reStart:function(){this.game=new y,this.playerStr=""}}},w=S,O=(r("342a"),Object(m["a"])(w,L,x,!1,null,"4dff4871",null)),P=O.exports,_={name:"App",components:{HelloWorld:v,Game:P}},j=_,T=Object(m["a"])(j,n,s,!1,null,null,null),B=T.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(B)}}).$mount("#app")}});
//# sourceMappingURL=app.5b60cb33.js.map