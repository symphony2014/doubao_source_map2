(()=>{var kt=(ue,se)=>()=>(se||ue((se={exports:{}}).exports,se),se.exports);var Ft=kt((ti,It)=>{It.exports=function(ue,se,Y){var J;J=function(){return function(de,Z){var O=Z.prototype,L=O.format;O.format=function(F){var i=this,C=this.$locale();if(!this.isValid())return L.bind(this)(F);var _=this.$utils(),D=(F||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(A){switch(A){case"Q":return Math.ceil((i.$M+1)/3);case"Do":return C.ordinal(i.$D);case"gggg":return i.weekYear();case"GGGG":return i.isoWeekYear();case"wo":return C.ordinal(i.week(),"W");case"w":case"ww":return _.s(i.week(),A==="w"?1:2,"0");case"W":case"WW":return _.s(i.isoWeek(),A==="W"?1:2,"0");case"k":case"kk":return _.s(String(i.$H===0?24:i.$H),A==="k"?1:2,"0");case"X":return Math.floor(i.$d.getTime()/1e3);case"x":return i.$d.getTime();case"z":return"["+i.offsetName()+"]";case"zzz":return"["+i.offsetName("long")+"]";default:return A}});return L.bind(this)(D)}}},ue.exports=J()}});var wt=kt((ii,Yt)=>{Yt.exports=function(ue,se,Y){var J;J=function(){"use strict";var de={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Z=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,O=/\d\d/,L=/\d\d?/,F=/\d*[^-_:/,()\s\d]+/,i={};function C(g){return(g*=1)+(g>68?1900:2e3)}function _(g){return function(N){this[g]=+N}}var D=[/[+-]\d\d:?(\d\d)?|Z/,function(g){(this.zone||={}).offset=(function(N){if(!N||N==="Z")return 0;var M=N.match(/([+-]|\d\d)/g),m=M[1]*60+(+M[2]||0);return m===0?0:M[0]==="+"?-m:m})(g)}];function A(g){var N=i[g];return N&&(N.indexOf?N:N.s.concat(N.f))}function Fe(g,N){var M,m=i.meridiem;if(m){for(var te=1;te<=24;te+=1)if(g.indexOf(m(te,0,N))>-1){M=te>12;break}}else M=g===(N?"pm":"PM");return M}var Ye={A:[F,function(g){this.afternoon=Fe(g,!1)}],a:[F,function(g){this.afternoon=Fe(g,!0)}],S:[/\d/,function(g){this.milliseconds=+g*100}],SS:[O,function(g){this.milliseconds=+g*10}],SSS:[/\d{3}/,function(g){this.milliseconds=+g}],s:[L,_("seconds")],ss:[L,_("seconds")],m:[L,_("minutes")],mm:[L,_("minutes")],H:[L,_("hours")],h:[L,_("hours")],HH:[L,_("hours")],hh:[L,_("hours")],D:[L,_("day")],DD:[O,_("day")],Do:[F,function(g){var N=i.ordinal,M=g.match(/\d+/);if(this.day=M[0],N)for(var m=1;m<=31;m+=1)N(m).replace(/\[|\]/g,"")===g&&(this.day=m)}],M:[L,_("month")],MM:[O,_("month")],MMM:[F,function(g){var N=A("months"),M=(A("monthsShort")||N.map(function(m){return m.slice(0,3)})).indexOf(g)+1;if(M<1)throw Error();this.month=M%12||M}],MMMM:[F,function(g){var N=A("months").indexOf(g)+1;if(N<1)throw Error();this.month=N%12||N}],Y:[/[+-]?\d+/,_("year")],YY:[O,function(g){this.year=C(g)}],YYYY:[/\d{4}/,_("year")],Z:D,ZZ:D};return function(g,N,M){M.p.customParseFormat=!0,g&&g.parseTwoDigitYear&&(C=g.parseTwoDigitYear);var m=N.prototype,te=m.parse;m.parse=function(ve){var H=ve.date,we=ve.utc,Q=ve.args;this.$u=we;var ie=Q[1];if(typeof ie=="string"){var fe=Q[2]===!0,he=Q[3]===!0,re=Q[2];he&&(re=Q[2]),i=this.$locale(),!fe&&re&&(i=M.Ls[re]),this.$d=(function(De,Ne,Ze){try{if(["x","X"].indexOf(Ne)>-1)return new Date((Ne==="X"?1e3:1)*De);var P=(function(Ve){var ct,qe;ct=Ve,qe=i&&i.formats;for(var Ce=(Ve=ct.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Re,ye,ne){var Le=ne&&ne.toUpperCase();return ye||qe[ne]||de[ne]||qe[Le].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(Te,Ae,Ge){return Ae||Ge.slice(1)})})).match(Z),ut=Ce.length,We=0;We<ut;We+=1){var dt=Ce[We],Me=Ye[dt],vt=Me&&Me[0],ft=Me&&Me[1];Ce[We]=ft?{regex:vt,parser:ft}:dt.replace(/^\[|\]$/g,"")}return function(Re){for(var ye={},ne=0,Le=0;ne<ut;ne+=1){var Te=Ce[ne];if(typeof Te=="string")Le+=Te.length;else{var Ae=Te.regex,Ge=Te.parser,Xe=Re.slice(Le),Qe=Ae.exec(Xe)[0];Ge.call(ye,Qe),Re=Re.replace(Qe,"")}}return(function(pe){var Ke=pe.afternoon;if(Ke!==void 0){var le=pe.hours;Ke?le<12&&(pe.hours+=12):le===12&&(pe.hours=0),delete pe.afternoon}})(ye),ye}})(Ne)(De),be=P.year,ke=P.month,Se=P.day,Oe=P.hours,yt=P.minutes,pt=P.seconds,gt=P.milliseconds,ot=P.zone,Pe=new Date,ze=Se||(be||ke?1:Pe.getDate()),Be=be||Pe.getFullYear(),Ee=0;(!be||ke)&&(Ee=ke>0?ke-1:Pe.getMonth());var je=Oe||0,He=yt||0,Ue=pt||0,Je=gt||0;return ot?new Date(Date.UTC(Be,Ee,ze,je,He,Ue,Je+ot.offset*60*1e3)):Ze?new Date(Date.UTC(Be,Ee,ze,je,He,Ue,Je)):new Date(Be,Ee,ze,je,He,Ue,Je)}catch{return new Date("")}})(H,ie,we),this.init(),re&&re!==!0&&(this.$L=this.locale(re).$L),(fe||he)&&H!=this.format(ie)&&(this.$d=new Date("")),i={}}else if(ie instanceof Array)for(var _e=ie.length,me=1;me<=_e;me+=1){Q[1]=ie[me-1];var ae=M.apply(this,Q);if(ae.isValid()){this.$d=ae.$d,this.$L=ae.$L,this.init();break}me===_e&&(this.$d=new Date(""))}else te.call(this,ve)}}},ue.exports=J()}});var _t=kt((ri,Zt)=>{Zt.exports=function(ue,se,Y){var J;J=function(){return function(de,Z,O){function L(C){return C.add(4-C.isoWeekday(),"day")}var F=Z.prototype;F.isoWeekYear=function(){return L(this).year()},F.isoWeek=function(C){if(!this.$utils().u(C))return this.add((C-this.isoWeek())*7,"day");var _,D,A,Fe=L(this);_=this.isoWeekYear(),A=4-(D=(this.$u?O.utc:O)().year(_).startOf("year")).isoWeekday(),D.isoWeekday()>4&&(A+=7);var Ye=D.add(A,"day");return Fe.diff(Ye,"week")+1},F.isoWeekday=function(C){return this.$utils().u(C)?this.day()||7:this.day(this.day()%7?C:C-7)};var i=F.startOf;F.startOf=function(C,_){var D=this.$utils(),A=!!D.u(_)||_;return D.p(C)==="isoweek"?A?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):i.bind(this)(C,_)}}},ue.exports=J()}});var Dt=kt((ai,Ot)=>{Ot.exports=function(ue,se,Y){var J,de,Z,O=Y("xss-content-sanitizer"),L=Y("mermaid-diagram-utils"),F=Y("mermaid-config-utils_1"),i=Y("logger-level-utils"),C=Y("url-sanitizer"),_=Y("dayjs-date-library"),D=_,A=Y("dayjs-iso-week-plugin"),Fe=A,Ye=Y("custom-parse-format-plugin"),g=Ye,N=Y("dayjs-format-plugin"),M=N,m=Y("axis-and-zoom-utilities"),te=(function(){var t=i.setFunctionName(function(o,f,u,c){for(u=u||{},c=o.length;c--;u[o[c]]=f);return u},"o"),r=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],l=[1,26],n=[1,27],d=[1,28],a=[1,29],x=[1,30],K=[1,31],V=[1,32],z=[1,33],I=[1,34],B=[1,9],ee=[1,10],ge=[1,11],q=[1,12],w=[1,13],et=[1,14],tt=[1,15],it=[1,16],rt=[1,19],at=[1,20],nt=[1,21],st=[1,22],lt=[1,23],p=[1,25],$=[1,35],v={trace:i.setFunctionName(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:O.sanitizeUrl(43,null,{logType:"js.href/src",reportOnly:"false",blackConfig:"{}",configMode:"merge",isCloseSSRReport:!1,bid:"flow_web",region:"cn",urlLimit:"-1",htmlLimit:"-1",isSaveValidUrl:!1,isRuntimeLog:!1,isDOMParser:!0,escapeRule:"escape-report",reportUrl:"https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",scmBranch:"release_train_samantha_2026-03-09_1120843696898",scmName:"$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",scmVersion:"1.0.4.168",webpackPluginVersion:"3.4.5",filename:"$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3lN$3hq-lR*b1lWZFNR$TF$%lhWTlZFbDF%$%01ZFdJe$$teFlNak-y$2to$2MxcFl%WFpp$jFaN$lsZEdjRnBET1d0aFdFNHd%REpP-jJSWE5-Smpl$*ww$2xoS2R*bFhiR3RN-l%1MlkyM$Zkb*95%m5Wa1N*SkZZ$mRH-m1OdFJu%k1WW*h-$kRC-$FsZHJO$WxN-lR*eFl6Skdl$m96$m5vPQ"}),clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:i.setFunctionName(function(o,f,u,c,h,e,y){var s=e.length-1;switch(h){case 1:return e[s-1];case 2:case 6:case 7:this.$=[];break;case 3:e[s-1].push(e[s]),this.$=e[s-1];break;case 4:case 5:this.$=e[s];break;case 8:c.setWeekday("monday");break;case 9:c.setWeekday("tuesday");break;case 10:c.setWeekday("wednesday");break;case 11:c.setWeekday("thursday");break;case 12:c.setWeekday("friday");break;case 13:c.setWeekday("saturday");break;case 14:c.setWeekday("sunday");break;case 15:c.setWeekend("friday");break;case 16:c.setWeekend("saturday");break;case 17:c.setDateFormat(e[s].substr(11)),this.$=e[s].substr(11);break;case 18:c.enableInclusiveEndDates(),this.$=e[s].substr(18);break;case 19:c.TopAxis(),this.$=e[s].substr(8);break;case 20:c.setAxisFormat(e[s].substr(11)),this.$=e[s].substr(11);break;case 21:c.setTickInterval(e[s].substr(13)),this.$=e[s].substr(13);break;case 22:c.setExcludes(e[s].substr(9)),this.$=e[s].substr(9);break;case 23:c.setIncludes(e[s].substr(9)),this.$=e[s].substr(9);break;case 24:c.setTodayMarker(e[s].substr(12)),this.$=e[s].substr(12);break;case 27:c.setDiagramTitle(e[s].substr(6)),this.$=e[s].substr(6);break;case 28:this.$=e[s].trim(),c.setAccTitle(this.$);break;case 29:case 30:this.$=e[s].trim(),c.setAccDescription(this.$);break;case 31:c.addSection(e[s].substr(8)),this.$=e[s].substr(8);break;case 33:c.addTask(e[s-1],e[s]),this.$="task";break;case 34:this.$=e[s-1],c.setClickEvent(e[s-1],e[s],null);break;case 35:this.$=e[s-2],c.setClickEvent(e[s-2],e[s-1],e[s]);break;case 36:this.$=e[s-2],c.setClickEvent(e[s-2],e[s-1],null),c.setLink(e[s-2],e[s]);break;case 37:this.$=e[s-3],c.setClickEvent(e[s-3],e[s-2],e[s-1]),c.setLink(e[s-3],e[s]);break;case 38:this.$=e[s-2],c.setClickEvent(e[s-2],e[s],null),c.setLink(e[s-2],e[s-1]);break;case 39:this.$=e[s-3],c.setClickEvent(e[s-3],e[s-1],e[s]),c.setLink(e[s-3],e[s-2]);break;case 40:this.$=e[s-1],c.setLink(e[s-1],e[s]);break;case 41:case 47:this.$=e[s-1]+" "+e[s];break;case 42:case 43:case 45:this.$=e[s-2]+" "+e[s-1]+" "+e[s];break;case 44:case 46:this.$=e[s-3]+" "+e[s-2]+" "+e[s-1]+" "+e[s]}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(r,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:l,13:n,14:d,15:a,16:x,17:K,18:V,19:18,20:z,21:I,22:B,23:ee,24:ge,25:q,26:w,27:et,28:tt,29:it,30:rt,31:at,33:nt,35:st,36:lt,37:24,38:p,40:$},t(r,[2,7],{1:[2,1]}),t(r,[2,3]),{9:36,11:17,12:l,13:n,14:d,15:a,16:x,17:K,18:V,19:18,20:z,21:I,22:B,23:ee,24:ge,25:q,26:w,27:et,28:tt,29:it,30:rt,31:at,33:nt,35:st,36:lt,37:24,38:p,40:$},t(r,[2,5]),t(r,[2,6]),t(r,[2,17]),t(r,[2,18]),t(r,[2,19]),t(r,[2,20]),t(r,[2,21]),t(r,[2,22]),t(r,[2,23]),t(r,[2,24]),t(r,[2,25]),t(r,[2,26]),t(r,[2,27]),{32:[1,37]},{34:[1,38]},t(r,[2,30]),t(r,[2,31]),t(r,[2,32]),{39:[1,39]},t(r,[2,8]),t(r,[2,9]),t(r,[2,10]),t(r,[2,11]),t(r,[2,12]),t(r,[2,13]),t(r,[2,14]),t(r,[2,15]),t(r,[2,16]),{41:[1,40],43:[1,41]},t(r,[2,4]),t(r,[2,28]),t(r,[2,29]),t(r,[2,33]),t(r,[2,34],{42:[1,42],43:[1,43]}),t(r,[2,40],{41:[1,44]}),t(r,[2,35],{43:[1,45]}),t(r,[2,36]),t(r,[2,38],{42:[1,46]}),t(r,[2,37]),t(r,[2,39])],defaultActions:{},parseError:i.setFunctionName(function(o,f){if(f.recoverable)this.trace(o);else{var u=Error(o);throw u.hash=f,u}},"parseError"),parse:i.setFunctionName(function(o){var f=this,u=[0],c=[],h=[null],e=[],y=this.table,s="",T=0,S=0,E=0,U=e.slice.call(arguments,1),W=Object.create(this.lexer),oe={yy:{}};for(var Tt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,Tt)&&(oe.yy[Tt]=this.yy[Tt]);W.setInput(o,oe.yy),oe.yy.lexer=W,oe.yy.parser=this,W.yylloc===void 0&&(W.yylloc={});var xt=W.yylloc;e.push(xt);var Kt=W.options&&W.options.ranges;function Mt(){var X;return typeof(X=c.pop()||W.lex()||1)!="number"&&(X instanceof Array&&(X=(c=X).pop()),X=f.symbols_[X]||X),X}typeof oe.yy.parseError=="function"?this.parseError=oe.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,i.setFunctionName(function(X){u.length=u.length-X*2,h.length=h.length-X,e.length=e.length-X},"popStack"),i.setFunctionName(Mt,"lex");for(var j,$t,$e,G,Rt,ht,ce,Lt,mt,Ie={};;){if($e=u[u.length-1],this.defaultActions[$e]?G=this.defaultActions[$e]:(j==null&&(j=Mt()),G=y[$e]&&y[$e][j]),G===void 0||!G.length||!G[0]){var At="";mt=[];for(ht in y[$e])this.terminals_[ht]&&ht>2&&mt.push("'"+this.terminals_[ht]+"'");At=W.showPosition?"Parse error on line "+(T+1)+`:
`+W.showPosition()+`
Expecting `+mt.join(", ")+", got '"+(this.terminals_[j]||j)+"'":"Parse error on line "+(T+1)+": Unexpected "+(j==1?"end of input":"'"+(this.terminals_[j]||j)+"'"),this.parseError(At,{text:W.match,token:this.terminals_[j]||j,line:W.yylineno,loc:xt,expected:mt})}if(G[0]instanceof Array&&G.length>1)throw Error("Parse Error: multiple actions possible at state: "+$e+", token: "+j);switch(G[0]){case 1:u.push(j),h.push(W.yytext),e.push(W.yylloc),u.push(G[1]),j=null,$t?(j=$t,$t=null):(S=W.yyleng,s=W.yytext,T=W.yylineno,xt=W.yylloc,E>0&&E--);break;case 2:if(ce=this.productions_[G[1]][1],Ie.$=h[h.length-ce],Ie._$={first_line:e[e.length-(ce||1)].first_line,last_line:e[e.length-1].last_line,first_column:e[e.length-(ce||1)].first_column,last_column:e[e.length-1].last_column},Kt&&(Ie._$.range=[e[e.length-(ce||1)].range[0],e[e.length-1].range[1]]),(Rt=this.performAction.apply(Ie,[s,S,T,oe.yy,G[1],h,e].concat(U)))!==void 0)return Rt;ce&&(u=u.slice(0,ce*-1*2),h=h.slice(0,ce*-1),e=e.slice(0,ce*-1)),u.push(this.productions_[G[1]][0]),h.push(Ie.$),e.push(Ie._$),Lt=y[u[u.length-2]][u[u.length-1]],u.push(Lt);break;case 3:return!0}}return!0},"parse")},b={EOF:1,parseError:i.setFunctionName(function(o,f){if(this.yy.parser)this.yy.parser.parseError(o,f);else throw Error(o)},"parseError"),setInput:i.setFunctionName(function(o,f){return this.yy=f||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:i.setFunctionName(function(){var o=this._input[0];return this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o,o.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},"input"),unput:i.setFunctionName(function(o){var f=o.length,u=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-f),this.offset-=f;var c=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),u.length-1&&(this.yylineno-=u.length-1);var h=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:u?(u.length===c.length?this.yylloc.first_column:0)+c[c.length-u.length].length-u[0].length:this.yylloc.first_column-f},this.options.ranges&&(this.yylloc.range=[h[0],h[0]+this.yyleng-f]),this.yyleng=this.yytext.length,this},"unput"),more:i.setFunctionName(function(){return this._more=!0,this},"more"),reject:i.setFunctionName(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:i.setFunctionName(function(o){this.unput(this.match.slice(o))},"less"),pastInput:i.setFunctionName(function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:i.setFunctionName(function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:i.setFunctionName(function(){var o=this.pastInput(),f=Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+f+"^"},"showPosition"),test_match:i.setFunctionName(function(o,f){var u,c,h;if(this.options.backtrack_lexer&&(h={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(h.yylloc.range=this.yylloc.range.slice(0))),(c=o[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=c.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:c?c[c.length-1].length-c[c.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],u=this.performAction.call(this,this.yy,this,f,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),u)return u;if(this._backtrack)for(var e in h)this[e]=h[e];return!1},"test_match"),next:i.setFunctionName(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var o,f,u,c,h=this._currentRules(),e=0;e<h.length;e++)if((u=this._input.match(this.rules[h[e]]))&&(!f||u[0].length>f[0].length)){if(f=u,c=e,this.options.backtrack_lexer){if((o=this.test_match(u,h[e]))!==!1)return o;if(!this._backtrack)return!1;f=!1;continue}if(!this.options.flex)break}return f?(o=this.test_match(f,h[c]))!==!1&&o:this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:i.setFunctionName(function(){var o=this.next();return o||this.lex()},"lex"),begin:i.setFunctionName(function(o){this.conditionStack.push(o)},"begin"),popState:i.setFunctionName(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:i.setFunctionName(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:i.setFunctionName(function(o){return(o=this.conditionStack.length-1-Math.abs(o||0))>=0?this.conditionStack[o]:"INITIAL"},"topState"),pushState:i.setFunctionName(function(o){this.begin(o)},"pushState"),stateStackSize:i.setFunctionName(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:i.setFunctionName(function(o,f,u,c){switch(u){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:case 15:case 18:case 21:case 24:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:case 9:case 10:case 12:case 13:break;case 11:return 10;case 14:this.begin("href");break;case 16:return 43;case 17:this.begin("callbackname");break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 22:return 42;case 23:this.begin("click");break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:O.sanitizeUrl({rules:[15,16],inclusive:!1},null,{logType:"js.href/src",reportOnly:"false",blackConfig:"{}",configMode:"merge",isCloseSSRReport:!1,bid:"flow_web",region:"cn",urlLimit:"-1",htmlLimit:"-1",isSaveValidUrl:!1,isRuntimeLog:!1,isDOMParser:!0,escapeRule:"escape-report",reportUrl:"https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",scmBranch:"release_train_samantha_2026-03-09_1120843696898",scmName:"$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",scmVersion:"1.0.4.168",webpackPluginVersion:"3.4.5",filename:"$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3lN$3hq-lR*b1lWZFNR$TF$%lhWTlZFbDF%$%01ZFdJe$$teFlNak-y$2to$2MxcFl%WFpp$jFaN$lsZEdjRnBET1d0aFdFNHd%REpP-jJSWE5-Smpl$*ww$2xoS2R*bFhiR3RN-l%1MlkyM$Zkb*95%m5Wa1N*SkZZ$mRH-m1OdFJu%k1WW*h-$kRC-$FsZHJO$WxN-lR*eFl6Skdl$m96$m5vPQ"}),click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};function k(){this.yy={}}return v.lexer=b,i.setFunctionName(k,"Parser"),k.prototype=v,v.Parser=k,new k})();te.parser=te,D.extend(Fe),D.extend(g),D.extend(M);var ve={friday:5,saturday:6},H="",we="",Q=void 0,ie="",fe=[],he=[],re=new Map,_e=[],me=[],ae="",De="",Ne=["active","done","crit","milestone","vert"],Ze=[],P=!1,be=!1,ke="sunday",Se="saturday",Oe=0,yt=i.setFunctionName(function(){_e=[],me=[],ae="",Ze=[],Ke=0,J=void 0,de=void 0,R=[],H="",we="",De="",Q=void 0,ie="",fe=[],he=[],P=!1,be=!1,Oe=0,re=new Map,F.clearCommonDb(),ke="sunday",Se="saturday"},"clear"),pt=i.setFunctionName(function(t){we=t},"setAxisFormat"),gt=i.setFunctionName(function(){return we},"getAxisFormat"),ot=i.setFunctionName(function(t){Q=t},"setTickInterval"),Pe=i.setFunctionName(function(){return Q},"getTickInterval"),ze=i.setFunctionName(function(t){ie=t},"setTodayMarker"),Be=i.setFunctionName(function(){return ie},"getTodayMarker"),Ee=i.setFunctionName(function(t){H=t},"setDateFormat"),je=i.setFunctionName(function(){P=!0},"enableInclusiveEndDates"),He=i.setFunctionName(function(){return P},"endDatesAreInclusive"),Ue=i.setFunctionName(function(){be=!0},"enableTopAxis"),Je=i.setFunctionName(function(){return be},"topAxisEnabled"),Ve=i.setFunctionName(function(t){De=t},"setDisplayMode"),ct=i.setFunctionName(function(){return De},"getDisplayMode"),qe=i.setFunctionName(function(){return H},"getDateFormat"),Ce=i.setFunctionName(function(t){fe=t.toLowerCase().split(/[\s,]+/)},"setIncludes"),ut=i.setFunctionName(function(){return fe},"getIncludes"),We=i.setFunctionName(function(t){he=t.toLowerCase().split(/[\s,]+/)},"setExcludes"),dt=i.setFunctionName(function(){return he},"getExcludes"),Me=i.setFunctionName(function(){return re},"getLinks"),vt=i.setFunctionName(function(t){ae=t,_e.push(t)},"addSection"),ft=i.setFunctionName(function(){return _e},"getSections"),Re=i.setFunctionName(function(){let t=St(),r=0;for(;!t&&r<10;)t=St(),r++;return me=R},"getTasks"),ye=i.setFunctionName(function(t,r,l,n){let d=t.format(r.trim()),a=t.format("YYYY-MM-DD");return!n.includes(d)&&!n.includes(a)&&(!!l.includes("weekends")&&(t.isoWeekday()===ve[Se]||t.isoWeekday()===ve[Se]+1)||!!l.includes(t.format("dddd").toLowerCase())||l.includes(d)||l.includes(a))},"isInvalidDate"),ne=i.setFunctionName(function(t){ke=t},"setWeekday"),Le=i.setFunctionName(function(){return ke},"getWeekday"),Te=i.setFunctionName(function(t){Se=t},"setWeekend"),Ae=i.setFunctionName(function(t,r,l,n){let d,a;if(!l.length||t.manualEndTime)return;let[x,K]=Ge(d=(d=t.startTime instanceof Date?D(t.startTime):D(t.startTime,r,!0)).add(1,"d"),t.endTime instanceof Date?D(t.endTime):D(t.endTime,r,!0),r,l,n);t.endTime=x.toDate(),t.renderEndTime=K},"checkTaskDates"),Ge=i.setFunctionName(function(t,r,l,n,d){let a=!1,x=null;for(;t<=r;)a||(x=r.toDate()),(a=ye(t,l,n,d))&&(r=r.add(1,"d")),t=t.add(1,"d");return[r,x]},"fixTaskDates"),Xe=i.setFunctionName(function(t,r,l){if(l=l.trim(),(r.trim()==="x"||r.trim()==="X")&&/^\d+$/.test(l))return new Date(Number(l));let n=/^after\s+(?<ids>[\d\w- ]+)/.exec(l);if(n!==null){let a=null;for(let K of n.groups.ids.split(" ")){let V=xe(K);V!==void 0&&(!a||V.endTime>a.endTime)&&(a=V)}if(a)return a.endTime;let x=new Date;return x.setHours(0,0,0,0),x}let d=D(l,r.trim(),!0);if(d.isValid())return d.toDate();{i.logger.debug("Invalid date:"+l),i.logger.debug("With date format:"+r.trim());let a=new Date(l);if(a===void 0||isNaN(a.getTime())||a.getFullYear()<-1e4||a.getFullYear()>1e4)throw Error("Invalid date:"+l);return a}},"getStartDate"),Qe=i.setFunctionName(function(t){let r=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return r!==null?[Number.parseFloat(r[1]),r[2]]:[NaN,"ms"]},"parseDuration"),pe=i.setFunctionName(function(t,r,l,n=!1){l=l.trim();let d=/^until\s+(?<ids>[\d\w- ]+)/.exec(l);if(d!==null){let z=null;for(let B of d.groups.ids.split(" ")){let ee=xe(B);ee!==void 0&&(!z||ee.startTime<z.startTime)&&(z=ee)}if(z)return z.startTime;let I=new Date;return I.setHours(0,0,0,0),I}let a=D(l,r.trim(),!0);if(a.isValid())return n&&(a=a.add(1,"d")),a.toDate();let x=D(t),[K,V]=Qe(l);if(!Number.isNaN(K)){let z=x.add(K,V);z.isValid()&&(x=z)}return x.toDate()},"getEndDate"),Ke=0,le=i.setFunctionName(function(t){return t===void 0?"task"+(Ke+=1):t},"parseId"),Pt=i.setFunctionName(function(t,r){let l,n=(r.substr(0,1)===":"?r.substr(1,r.length):r).split(","),d={};bt(n,d,Ne);for(let x=0;x<n.length;x++)n[x]=n[x].trim();let a="";switch(n.length){case 1:d.id=le(),d.startTime=t.endTime,a=n[0];break;case 2:d.id=le(),d.startTime=Xe(void 0,H,n[0]),a=n[1];break;case 3:d.id=le(n[0]),d.startTime=Xe(void 0,H,n[1]),a=n[2]}return a&&(d.endTime=pe(d.startTime,H,a,P),d.manualEndTime=D(a,"YYYY-MM-DD",!0).isValid(),Ae(d,H,he,fe)),d},"compileData"),zt=i.setFunctionName(function(t,r){let l,n=(r.substr(0,1)===":"?r.substr(1,r.length):r).split(","),d={};bt(n,d,Ne);for(let a=0;a<n.length;a++)n[a]=n[a].trim();switch(n.length){case 1:d.id=le(),d.startTime={type:"prevTaskEnd",id:t},d.endTime={data:n[0]};break;case 2:d.id=le(),d.startTime={type:"getStartDate",startData:n[0]},d.endTime={data:n[1]};break;case 3:d.id=le(n[0]),d.startTime={type:"getStartDate",startData:n[1]},d.endTime={data:n[2]}}return d},"parseData"),R=[],Nt={},Bt=i.setFunctionName(function(t,r){let l={section:ae,type:ae,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:r},task:t,classes:[]},n=zt(de,r);l.raw.startTime=n.startTime,l.raw.endTime=n.endTime,l.id=n.id,l.prevTaskId=de,l.active=n.active,l.done=n.done,l.crit=n.crit,l.milestone=n.milestone,l.vert=n.vert,l.order=Oe,Oe++;let d=R.push(l);de=l.id,Nt[l.id]=d-1},"addTask"),xe=i.setFunctionName(function(t){return R[Nt[t]]},"findTaskById"),jt=i.setFunctionName(function(t,r){let l={section:ae,type:ae,description:t,task:t,classes:[]},n=Pt(J,r);l.startTime=n.startTime,l.endTime=n.endTime,l.id=n.id,l.active=n.active,l.done=n.done,l.crit=n.crit,l.milestone=n.milestone,l.vert=n.vert,J=l,me.push(l)},"addTaskOrg"),St=i.setFunctionName(function(){let t=i.setFunctionName(function(l){let n=R[l],d="";switch(R[l].raw.startTime.type){case"prevTaskEnd":{let a=xe(n.prevTaskId);n.startTime=a.endTime;break}case"getStartDate":(d=Xe(void 0,H,R[l].raw.startTime.startData))&&(R[l].startTime=d)}return R[l].startTime&&(R[l].endTime=pe(R[l].startTime,H,R[l].raw.endTime.data,P),R[l].endTime&&(R[l].processed=!0,R[l].manualEndTime=D(R[l].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),Ae(R[l],H,he,fe))),R[l].processed},"compileTask"),r=!0;for(let[l,n]of R.entries())t(l),r=r&&n.processed;return r},"compileTasks"),Ht=i.setFunctionName(function(t,r){let l=r;F.getConfigAlias().securityLevel!=="loose"&&(l=C.sanitizeUrl(r)),t.split(",").forEach(function(n){xe(n)!==void 0&&(Ct(n,()=>{window.open(O.sanitizeUrl(l,null,{logType:"js.window.location",reportOnly:"false",blackConfig:"{}",configMode:"merge",isCloseSSRReport:!1,bid:"flow_web",region:"cn",urlLimit:"-1",htmlLimit:"-1",isSaveValidUrl:!1,isRuntimeLog:!1,isDOMParser:!0,escapeRule:"escape-report",reportUrl:"https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",scmBranch:"release_train_samantha_2026-03-09_1120843696898",scmName:"$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",scmVersion:"1.0.4.168",webpackPluginVersion:"3.4.5",filename:"$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3lN$3hq-lR*b1lWZFNR$TF$%lhWTlZFbDF%$%01ZFdJe$$teFlNak-y$2to$2MxcFl%WFpp$jFaN$lsZEdjRnBET1d0aFdFNHd%REpP-jJSWE5-Smpl$*ww$2xoS2R*bFhiR3RN-l%1MlkyM$Zkb*95%m5Wa1N*SkZZ$mRH-m1OdFJu%k1WW*h-$kRC-$FsZHJO$WxN-lR*eFl6Skdl$m96$m5vPQ"}),"_self")}),re.set(n,l))}),Et(t,"clickable")},"setLink"),Et=i.setFunctionName(function(t,r){t.split(",").forEach(function(l){let n=xe(l);n!==void 0&&n.classes.push(r)})},"setClass"),Ut=i.setFunctionName(function(t,r,l){if(F.getConfigAlias().securityLevel!=="loose"||r===void 0)return;let n=[];if(typeof l=="string"){n=l.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let d=0;d<n.length;d++){let a=n[d].trim();a.startsWith('"')&&a.endsWith('"')&&(a=a.substr(1,a.length-2)),n[d]=a}}n.length===0&&n.push(t),xe(t)!==void 0&&Ct(t,()=>{L.mermaidUtils.runFunc(r,...n)})},"setClickFun"),Ct=i.setFunctionName(function(t,r){Ze.push(function(){let l=document.querySelector(`[id="${t}"]`);l!==null&&l.addEventListener("click",function(){r()})},function(){let l=document.querySelector(`[id="${t}-text"]`);l!==null&&l.addEventListener("click",function(){r()})})},"pushFun"),Jt=i.setFunctionName(function(t,r,l){t.split(",").forEach(function(n){Ut(n,r,l)}),Et(t,"clickable")},"setClickEvent"),Vt=i.setFunctionName(function(t){Ze.forEach(function(r){r(t)})},"bindFunctions"),qt={getConfig:i.setFunctionName(()=>F.getConfigAlias().gantt,"getConfig"),clear:yt,setDateFormat:Ee,getDateFormat:qe,enableInclusiveEndDates:je,endDatesAreInclusive:He,enableTopAxis:Ue,topAxisEnabled:Je,setAxisFormat:pt,getAxisFormat:gt,setTickInterval:ot,getTickInterval:Pe,setTodayMarker:ze,getTodayMarker:Be,setAccTitle:F.setAccTitle,getAccTitle:F.getAccTitle,setDiagramTitle:F.setDiagramTitle,getDiagramTitle:F.getDiagramTitle,setDisplayMode:Ve,getDisplayMode:ct,setAccDescription:F.setAccDescription,getAccDescription:F.getAccDescription,addSection:vt,getSections:ft,getTasks:Re,addTask:Bt,findTaskById:xe,addTaskOrg:jt,setIncludes:Ce,getIncludes:ut,setExcludes:We,getExcludes:dt,setClickEvent:Jt,setLink:Ht,getLinks:Me,bindFunctions:Vt,parseDuration:Qe,isInvalidDate:ye,setWeekday:ne,getWeekday:Le,setWeekend:Te};function bt(t,r,l){let n=!0;for(;n;)n=!1,l.forEach(function(d){let a=RegExp("^\\s*"+d+"\\s*$");t[0].match(a)&&(r[d]=!0,t.shift(1),n=!0)})}i.setFunctionName(bt,"getTaskTags");var Gt=i.setFunctionName(function(){i.logger.debug("Something is calling, setConf, remove the call")},"setConf"),Wt={monday:m.Ox9,tuesday:m.YDX,wednesday:m.EFj,thursday:m.Igq,friday:m.y2j,saturday:m.LqH,sunday:m.Zyz},Xt=i.setFunctionName((t,r)=>{let l=[...t].map(()=>-1/0),n=[...t].sort((a,x)=>a.startTime-x.startTime||a.order-x.order),d=0;for(let a of n)for(let x=0;x<l.length;x++)if(a.startTime>=l[x]){l[x]=a.endTime,a.order=x+r,x>d&&(d=x);break}return d},"getMaxIntersections"),Qt={parser:te,db:qt,renderer:{setConf:Gt,draw:i.setFunctionName(function(t,r,l,n){let d,a=F.getConfigAlias().gantt,x=F.getConfigAlias().securityLevel;x==="sandbox"&&(d=m.select("#i"+r));let K=x==="sandbox"?m.select(d.nodes()[0].contentDocument.body):m.select("body"),V=x==="sandbox"?d.nodes()[0].contentDocument:document,z=V.getElementById(r);(Z=z.parentElement.offsetWidth)===void 0&&(Z=1200),a.useWidth!==void 0&&(Z=a.useWidth);let I=n.db.getTasks(),B=[];for(let p of I)B.push(p.type);B=lt(B);let ee={},ge=a.topPadding*2;if(n.db.getDisplayMode()==="compact"||a.displayMode==="compact"){let p={};for(let v of I)p[v.section]===void 0?p[v.section]=[v]:p[v.section].push(v);let $=0;for(let v of Object.keys(p)){let b=Xt(p[v],$)+1;$+=b,ge+=b*(a.barHeight+a.barGap),ee[v]=b}}else{ge+=I.length*(a.barHeight+a.barGap);for(let p of B)ee[p]=I.filter($=>$.type===p).length}z.setAttribute("viewBox","0 0 "+Z+" "+ge);let q=K.select(`[id="${r}"]`),w=m.timeScale().domain([m.VV$(I,function(p){return p.startTime}),m.Fp7(I,function(p){return p.endTime})]).rangeRound([0,Z-a.leftPadding-a.rightPadding]);function et(p,$){let v=p.startTime,b=$.startTime,k=0;return v>b?k=1:v<b&&(k=-1),k}function tt(p,$,v){let b=a.barHeight,k=b+a.barGap,o=a.topPadding,f=a.leftPadding,u=m.BYU().domain([0,B.length]).range(["#00B9FA","#F95002"]).interpolate(m.JHv);rt(k,o,f,$,v,p,n.db.getExcludes(),n.db.getIncludes()),at(f,o,$,v),it(p,k,o,f,b,u,$,v),nt(k,o,f,b,u),st(f,o,$,v)}function it(p,$,v,b,k,o,f){p.sort((e,y)=>e.vert===y.vert?0:e.vert?1:-1);let u=[...new Set(p.map(e=>e.order))].map(e=>p.find(y=>y.order===e));q.append("g").selectAll("rect").data(u).enter().append("rect").attr("x",0).attr("y",function(e,y){return e.order*$+v-2}).attr("width",function(){return f-a.rightPadding/2}).attr("height",$).attr("class",function(e){for(let[y,s]of B.entries())if(e.type===s)return"section section"+y%a.numberSectionStyles;return"section section0"}).enter();let c=q.append("g").selectAll("rect").data(p).enter(),h=n.db.getLinks();if(c.append("rect").attr("id",function(e){return e.id}).attr("rx",3).attr("ry",3).attr("x",function(e){return e.milestone?w(e.startTime)+b+(w(e.endTime)-w(e.startTime))*.5-k*.5:w(e.startTime)+b}).attr("y",function(e,y){return y=e.order,e.vert?a.gridLineStartPadding:y*$+v}).attr("width",function(e){return e.milestone?k:e.vert?k*.08:w(e.renderEndTime||e.endTime)-w(e.startTime)}).attr("height",function(e){return e.vert?I.length*(a.barHeight+a.barGap)+a.barHeight*2:k}).attr("transform-origin",function(e,y){return y=e.order,(w(e.startTime)+b+(w(e.endTime)-w(e.startTime))*.5).toString()+"px "+(y*$+v+k*.5).toString()+"px"}).attr("class",function(e){let y="";e.classes.length>0&&(y=e.classes.join(" "));let s=0;for(let[S,E]of B.entries())e.type===E&&(s=S%a.numberSectionStyles);let T="";return e.active?e.crit?T+=" activeCrit":T=" active":e.done?T=e.crit?" doneCrit":" done":e.crit&&(T+=" crit"),T.length===0&&(T=" task"),e.milestone&&(T=" milestone "+T),e.vert&&(T=" vert "+T),T+=s,"task"+(T+=" "+y)}),c.append("text").attr("id",function(e){return e.id+"-text"}).text(function(e){return e.task}).attr("font-size",a.fontSize).attr("x",function(e){let y=w(e.startTime),s=w(e.renderEndTime||e.endTime);if(e.milestone&&(y+=(w(e.endTime)-w(e.startTime))*.5-k*.5,s=y+k),e.vert)return w(e.startTime)+b;let T=this.getBBox().width;return T>s-y?s+T+a.leftPadding*1.5>f?y+b-5:s+b+5:(s-y)/2+y+b}).attr("y",function(e,y){return e.vert?a.gridLineStartPadding+I.length*(a.barHeight+a.barGap)+60:e.order*$+a.barHeight/2+(a.fontSize/2-2)+v}).attr("text-height",k).attr("class",function(e){let y=w(e.startTime),s=w(e.endTime);e.milestone&&(s=y+k);let T=this.getBBox().width,S="";e.classes.length>0&&(S=e.classes.join(" "));let E=0;for(let[W,oe]of B.entries())e.type===oe&&(E=W%a.numberSectionStyles);let U="";return e.active&&(U=e.crit?"activeCritText"+E:"activeText"+E),e.done?U=e.crit?U+" doneCritText"+E:U+" doneText"+E:e.crit&&(U=U+" critText"+E),e.milestone&&(U+=" milestoneText"),e.vert&&(U+=" vertText"),T>s-y?s+T+a.leftPadding*1.5>f?S+" taskTextOutsideLeft taskTextOutside"+E+" "+U:S+" taskTextOutsideRight taskTextOutside"+E+" "+U+" width-"+T:S+" taskText taskText"+E+" "+U+" width-"+T}),F.getConfigAlias().securityLevel==="sandbox"){let e=m.select("#i"+r).nodes()[0].contentDocument;c.filter(function(y){return h.has(y.id)}).each(function(y){var s=e.querySelector("#"+y.id),T=e.querySelector("#"+y.id+"-text");let S=s.parentNode;var E=e.createElement("a");E.setAttribute("xlink:href",h.get(y.id)),E.setAttribute("target","_top"),S.appendChild(E),E.appendChild(s),E.appendChild(T)})}}function rt(p,$,v,b,k,o,f,u){let c,h;if(f.length===0&&u.length===0)return;for(let{startTime:S,endTime:E}of o)(c===void 0||S<c)&&(c=S),(h===void 0||E>h)&&(h=E);if(!c||!h)return;if(D(h).diff(D(c),"year")>5){i.logger.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}let e=n.db.getDateFormat(),y=[],s=null,T=D(c);for(;T.valueOf()<=h;)n.db.isInvalidDate(T,e,f,u)?s?s.end=T:s={start:T,end:T}:s&&(y.push(s),s=null),T=T.add(1,"d");q.append("g").selectAll("rect").data(y).enter().append("rect").attr("id",S=>"exclude-"+S.start.format("YYYY-MM-DD")).attr("x",S=>w(S.start.startOf("day"))+v).attr("y",a.gridLineStartPadding).attr("width",S=>w(S.end.endOf("day"))-w(S.start.startOf("day"))).attr("height",k-$-a.gridLineStartPadding).attr("transform-origin",function(S,E){return(w(S.start)+v+(w(S.end)-w(S.start))*.5).toString()+"px "+(E*p+k*.5).toString()+"px"}).attr("class","exclude-range")}function at(p,$,v,b){let k,o=n.db.getDateFormat(),f=n.db.getAxisFormat();f?k=f:o==="D"?k="%d":k=a.axisFormat??"%Y-%m-%d";let u=m.LLu(w).tickSize(-b+$+a.gridLineStartPadding).tickFormat(m.i$Z(k)),c=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(n.db.getTickInterval()||a.tickInterval);if(c!==null){let h=c[1],e=c[2],y=n.db.getWeekday()||a.weekday;switch(e){case"millisecond":u.ticks(m.U8T.every(h));break;case"second":u.ticks(m.S1K.every(h));break;case"minute":u.ticks(m.Z_i.every(h));break;case"hour":u.ticks(m.WQD.every(h));break;case"day":u.ticks(m.rr1.every(h));break;case"week":u.ticks(Wt[y].every(h));break;case"month":u.ticks(m.F0B.every(h))}}if(q.append("g").attr("class","grid").attr("transform","translate("+p+", "+(b-50)+")").call(u).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),n.db.topAxisEnabled()||a.topAxis){let h=m.F5q(w).tickSize(-b+$+a.gridLineStartPadding).tickFormat(m.i$Z(k));if(c!==null){let e=c[1],y=c[2],s=n.db.getWeekday()||a.weekday;switch(y){case"millisecond":h.ticks(m.U8T.every(e));break;case"second":h.ticks(m.S1K.every(e));break;case"minute":h.ticks(m.Z_i.every(e));break;case"hour":h.ticks(m.WQD.every(e));break;case"day":h.ticks(m.rr1.every(e));break;case"week":h.ticks(Wt[s].every(e));break;case"month":h.ticks(m.F0B.every(e))}}q.append("g").attr("class","grid").attr("transform","translate("+p+", "+$+")").call(h).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}function nt(p,$){let v=0,b=Object.keys(ee).map(k=>[k,ee[k]]);q.append("g").selectAll("text").data(b).enter().append(function(k){let o=k[0].split(F.textUtilities.lineBreakRegex),f=-(o.length-1)/2,u=V.createElementNS("http://www.w3.org/2000/svg","text");u.setAttribute("dy",f+"em");for(let[c,h]of o.entries()){let e=V.createElementNS("http://www.w3.org/2000/svg","tspan");e.setAttribute("alignment-baseline","central"),e.setAttribute("x","10"),c>0&&e.setAttribute("dy","1em"),e.textContent=h,u.appendChild(e)}return u}).attr("x",10).attr("y",function(k,o){if(!(o>0))return k[1]*p/2+$;for(let f=0;f<o;f++)return v+=b[o-1][1],k[1]*p/2+v*p+$}).attr("font-size",a.sectionFontSize).attr("class",function(k){for(let[o,f]of B.entries())if(k[0]===f)return"sectionTitle sectionTitle"+o%a.numberSectionStyles;return"sectionTitle"})}function st(p,$,v,b){let k=n.db.getTodayMarker();if(k==="off")return;let o=q.append("g").attr("class","today"),f=new Date,u=o.append("line");u.attr("x1",w(f)+p).attr("x2",w(f)+p).attr("y1",a.titleTopMargin).attr("y2",b-a.titleTopMargin).attr("class","today"),k!==""&&u.attr("style",k.replace(/,/g,";"))}function lt(p){let $={},v=[];for(let b=0,k=p.length;b<k;++b)Object.prototype.hasOwnProperty.call($,p[b])||($[p[b]]=!0,v.push(p[b]));return v}i.setFunctionName(et,"taskCompare"),I.sort(et),tt(I,Z,ge),F.configureSvgSize(q,ge,Z,a.useMaxWidth),q.append("text").text(n.db.getDiagramTitle()).attr("x",Z/2).attr("y",a.titleTopMargin).attr("class","titleText"),i.setFunctionName(tt,"makeGantt"),i.setFunctionName(it,"drawRects"),i.setFunctionName(rt,"drawExcludeDays"),i.setFunctionName(at,"makeGrid"),i.setFunctionName(nt,"vertLabels"),i.setFunctionName(st,"drawToday"),i.setFunctionName(lt,"checkUnique")},"draw")},styles:i.setFunctionName(t=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles")};Y.d(se,{diagram:function(){return Qt}})}});(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([["mermaid-gantt-parser",20443],{"dayjs-format-plugin":Ft(),260904:Ft(),"custom-parse-format-plugin":wt(),825043:wt(),"dayjs-iso-week-plugin":_t(),902980:_t(),"mermaid-gantt-diagram":Dt(),953076:Dt()},null]);})();
//# sourceMappingURL=http://127.0.0.1:11434/web_cache_260316012/source_map/mermaid-gantt-parser.js.bundle.js.map