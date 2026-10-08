(()=>{var Dt=(st,I)=>()=>(I||st((I={exports:{}}).exports,I),I.exports);var wt=Dt((Ee,re)=>{re.exports=function(st,I,v){var A=v("logger-level-utils"),w=v("axis-and-zoom-utilities"),V=A.setFunctionName((G,H)=>{let m;return H==="sandbox"&&(m=w.select("#i"+G)),(H==="sandbox"?w.select(m.nodes()[0].contentDocument.body):w.select("body")).select(`[id="${G}"]`)},"getDiagramElement");v.d(I,{getDiagramElement:function(){return V}})}});var Ft=Dt((be,ae)=>{ae.exports=function(st,I,v){var A=v("mermaid-config-utils_1"),w=v("logger-level-utils"),V=w.setFunctionName((m,r,U,j)=>{m.attr("class",U);let{width:F,height:z,x:it,y:X}=G(m,r);A.configureSvgSize(m,z,F,j);let rt=H(it,X,F,z,r);m.attr("viewBox",rt),w.logger.debug(`viewBox configured: ${rt} with padding: ${r}`)},"setupViewPortForSVG"),G=w.setFunctionName((m,r)=>{var U;let j=((U=m.node())===null||U===void 0?void 0:U.getBBox())||{width:0,height:0,x:0,y:0};return{width:j.width+r*2,height:j.height+r*2,x:j.x,y:j.y}},"calculateDimensionsWithPadding"),H=w.setFunctionName((m,r,U,j,F)=>`${m-F} ${r-F} ${U} ${j}`,"createViewBox");v.d(I,{setupViewPortForSvg:function(){return V}})}});var Ot=Dt((ke,ne)=>{ne.exports=function(st,I,v){var A=v("state-diagram-v2-parser-db");v("diagram-element-selector"),v("mermaid-svg-viewport-setup"),v("mermaid-layout-registry-renderer"),v("mermaid-flowchart-edge-renderer"),v("diagram-arrow-offset-utils"),v("mermaid-node-shapes-renderer"),v("subgraph-title-margins-calculator"),v("mermaid-style-utils"),v("icon-utils-text-rendering"),v("mermaid-diagram-utils"),v("mermaid-config-utils_1");var w=v("logger-level-utils"),V={parser:A.parser,get db(){return new A.StateDB(2)},renderer:A.diagramRenderer,styles:A.getStyles,init:w.setFunctionName(G=>{G.state||={},G.state.arrowMarkerAbsolute=G.arrowMarkerAbsolute},"init")};v.d(I,{diagram:function(){return V}})}});var Rt=Dt((De,le)=>{le.exports=function(st,I,v){var A,w=v("diagram-element-selector"),V=v("mermaid-svg-viewport-setup"),G=v("mermaid-layout-registry-renderer"),H=v("mermaid-diagram-utils"),m=v("mermaid-config-utils_1"),r=v("logger-level-utils"),U=(function(){var t=r.setFunctionName(function(n,p,f,y){for(f=f||{},y=n.length;y--;f[n[y]]=p);return f},"o"),e=[1,2],a=[1,3],s=[1,4],o=[2,4],u=[1,9],h=[1,11],T=[1,16],l=[1,17],S=[1,18],N=[1,19],b=[1,33],O=[1,20],D=[1,21],d=[1,22],C=[1,23],R=[1,24],$=[1,26],M=[1,27],L=[1,28],B=[1,29],ft=[1,30],pt=[1,31],gt=[1,32],mt=[1,35],yt=[1,36],St=[1,37],vt=[1,38],q=[1,34],g=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],_t=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,39,40,41,45,48,51,52,53,54,57],qt=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],Nt={trace:r.setFunctionName(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,styleStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"-->":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,CLICK:38,STRING:39,HREF:40,classDef:41,CLASSDEF_ID:42,CLASSDEF_STYLEOPTS:43,DEFAULT:44,style:45,STYLE_IDS:46,STYLEDEF_STYLEOPTS:47,class:48,CLASSENTITY_IDS:49,STYLECLASS:50,direction_tb:51,direction_bt:52,direction_rl:53,direction_lr:54,eol:55,";":56,EDGE_STATE:57,STYLE_SEPARATOR:58,left_of:59,right_of:60,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",14:"DESCR",15:"-->",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"CLICK",39:"STRING",40:"HREF",41:"classDef",42:"CLASSDEF_ID",43:"CLASSDEF_STYLEOPTS",44:"DEFAULT",45:"style",46:"STYLE_IDS",47:"STYLEDEF_STYLEOPTS",48:"class",49:"CLASSENTITY_IDS",50:"STYLECLASS",51:"direction_tb",52:"direction_bt",53:"direction_rl",54:"direction_lr",56:";",57:"EDGE_STATE",58:"STYLE_SEPARATOR",59:"left_of",60:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[9,5],[9,5],[10,3],[10,3],[11,3],[12,3],[32,1],[32,1],[32,1],[32,1],[55,1],[55,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1]],performAction:r.setFunctionName(function(n,p,f,y,_,i,lt){var c=i.length-1;switch(_){case 3:return y.setRootDoc(i[c]),i[c];case 4:this.$=[];break;case 5:i[c]!="nl"&&(i[c-1].push(i[c]),this.$=i[c-1]);break;case 6:case 7:case 12:this.$=i[c];break;case 8:this.$="nl";break;case 13:let Et=i[c-1];Et.description=y.trimColon(i[c]),this.$=Et;break;case 14:this.$={stmt:"relation",state1:i[c-2],state2:i[c]};break;case 15:let E=y.trimColon(i[c]);this.$={stmt:"relation",state1:i[c-3],state2:i[c-1],description:E};break;case 19:this.$={stmt:"state",id:i[c-3],type:"default",description:"",doc:i[c-1]};break;case 20:var J=i[c],tt=i[c-2].trim();if(i[c].match(":")){var ot=i[c].split(":");J=ot[0],tt=[tt,ot[1]]}this.$={stmt:"state",id:J,type:"default",description:tt};break;case 21:this.$={stmt:"state",id:i[c-3],type:"default",description:i[c-5],doc:i[c-1]};break;case 22:this.$={stmt:"state",id:i[c],type:"fork"};break;case 23:this.$={stmt:"state",id:i[c],type:"join"};break;case 24:this.$={stmt:"state",id:i[c],type:"choice"};break;case 25:this.$={stmt:"state",id:y.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:i[c-1].trim(),note:{position:i[c-2].trim(),text:i[c].trim()}};break;case 29:this.$=i[c].trim(),y.setAccTitle(this.$);break;case 30:case 31:this.$=i[c].trim(),y.setAccDescription(this.$);break;case 32:this.$={stmt:"click",id:i[c-3],url:i[c-2],tooltip:i[c-1]};break;case 33:this.$={stmt:"click",id:i[c-3],url:i[c-1],tooltip:""};break;case 34:case 35:this.$={stmt:"classDef",id:i[c-1].trim(),classes:i[c].trim()};break;case 36:this.$={stmt:"style",id:i[c-1].trim(),styleClass:i[c].trim()};break;case 37:this.$={stmt:"applyClass",id:i[c-1].trim(),styleClass:i[c].trim()};break;case 38:y.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 39:y.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 40:y.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 41:y.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 44:case 45:this.$={stmt:"state",id:i[c].trim(),type:"default",description:""};break;case 46:case 47:this.$={stmt:"state",id:i[c-2].trim(),classes:[i[c].trim()],type:"default",description:""}}},"anonymous"),table:[{3:1,4:e,5:a,6:s},{1:[3]},{3:5,4:e,5:a,6:s},{3:6,4:e,5:a,6:s},t([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],o,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:u,5:h,8:8,9:10,10:12,11:13,12:14,13:15,16:T,17:l,19:S,22:N,24:b,25:O,26:D,27:d,28:C,29:R,32:25,33:$,35:M,37:L,38:B,41:ft,45:pt,48:gt,51:mt,52:yt,53:St,54:vt,57:q},t(g,[2,5]),{9:39,10:12,11:13,12:14,13:15,16:T,17:l,19:S,22:N,24:b,25:O,26:D,27:d,28:C,29:R,32:25,33:$,35:M,37:L,38:B,41:ft,45:pt,48:gt,51:mt,52:yt,53:St,54:vt,57:q},t(g,[2,7]),t(g,[2,8]),t(g,[2,9]),t(g,[2,10]),t(g,[2,11]),t(g,[2,12],{14:[1,40],15:[1,41]}),t(g,[2,16]),{18:[1,42]},t(g,[2,18],{20:[1,43]}),{23:[1,44]},t(g,[2,22]),t(g,[2,23]),t(g,[2,24]),t(g,[2,25]),{30:45,31:[1,46],59:[1,47],60:[1,48]},t(g,[2,28]),{34:[1,49]},{36:[1,50]},t(g,[2,31]),{13:51,24:b,57:q},{42:[1,52],44:[1,53]},{46:[1,54]},{49:[1,55]},t(_t,[2,44],{58:[1,56]}),t(_t,[2,45],{58:[1,57]}),t(g,[2,38]),t(g,[2,39]),t(g,[2,40]),t(g,[2,41]),t(g,[2,6]),t(g,[2,13]),{13:58,24:b,57:q},t(g,[2,17]),t(qt,o,{7:59}),{24:[1,60]},{24:[1,61]},{23:[1,62]},{24:[2,48]},{24:[2,49]},t(g,[2,29]),t(g,[2,30]),{39:[1,63],40:[1,64]},{43:[1,65]},{43:[1,66]},{47:[1,67]},{50:[1,68]},{24:[1,69]},{24:[1,70]},t(g,[2,14],{14:[1,71]}),{4:u,5:h,8:8,9:10,10:12,11:13,12:14,13:15,16:T,17:l,19:S,21:[1,72],22:N,24:b,25:O,26:D,27:d,28:C,29:R,32:25,33:$,35:M,37:L,38:B,41:ft,45:pt,48:gt,51:mt,52:yt,53:St,54:vt,57:q},t(g,[2,20],{20:[1,73]}),{31:[1,74]},{24:[1,75]},{39:[1,76]},{39:[1,77]},t(g,[2,34]),t(g,[2,35]),t(g,[2,36]),t(g,[2,37]),t(_t,[2,46]),t(_t,[2,47]),t(g,[2,15]),t(g,[2,19]),t(qt,o,{7:78}),t(g,[2,26]),t(g,[2,27]),{5:[1,79]},{5:[1,80]},{4:u,5:h,8:8,9:10,10:12,11:13,12:14,13:15,16:T,17:l,19:S,21:[1,81],22:N,24:b,25:O,26:D,27:d,28:C,29:R,32:25,33:$,35:M,37:L,38:B,41:ft,45:pt,48:gt,51:mt,52:yt,53:St,54:vt,57:q},t(g,[2,32]),t(g,[2,33]),t(g,[2,21])],defaultActions:{5:[2,1],6:[2,2],47:[2,48],48:[2,49]},parseError:r.setFunctionName(function(n,p){if(p.recoverable)this.trace(n);else{var f=Error(n);throw f.hash=p,f}},"parseError"),parse:r.setFunctionName(function(n){var p=this,f=[0],y=[],_=[null],i=[],lt=this.table,c="",J=0,tt=0,ot=0,Et=i.slice.call(arguments,1),E=Object.create(this.lexer),Z={yy:{}};for(var $t in this.yy)Object.prototype.hasOwnProperty.call(this.yy,$t)&&(Z.yy[$t]=this.yy[$t]);E.setInput(n,Z.yy),Z.yy.lexer=E,Z.yy.parser=this,E.yylloc===void 0&&(E.yylloc={});var Lt=E.yylloc;i.push(Lt);var _e=E.options&&E.options.ranges;function te(){var Y;return typeof(Y=y.pop()||E.lex()||1)!="number"&&(Y instanceof Array&&(Y=(y=Y).pop()),Y=p.symbols_[Y]||Y),Y}typeof Z.yy.parseError=="function"?this.parseError=Z.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,r.setFunctionName(function(Y){f.length=f.length-Y*2,_.length=_.length-Y,i.length=i.length-Y},"popStack"),r.setFunctionName(te,"lex");for(var x,It,Q,P,ee,bt,W,se,kt,et={};;){if(Q=f[f.length-1],this.defaultActions[Q]?P=this.defaultActions[Q]:(x==null&&(x=te()),P=lt[Q]&&lt[Q][x]),P===void 0||!P.length||!P[0]){var ie="";kt=[];for(bt in lt[Q])this.terminals_[bt]&&bt>2&&kt.push("'"+this.terminals_[bt]+"'");ie=E.showPosition?"Parse error on line "+(J+1)+`:
`+E.showPosition()+`
Expecting `+kt.join(", ")+", got '"+(this.terminals_[x]||x)+"'":"Parse error on line "+(J+1)+": Unexpected "+(x==1?"end of input":"'"+(this.terminals_[x]||x)+"'"),this.parseError(ie,{text:E.match,token:this.terminals_[x]||x,line:E.yylineno,loc:Lt,expected:kt})}if(P[0]instanceof Array&&P.length>1)throw Error("Parse Error: multiple actions possible at state: "+Q+", token: "+x);switch(P[0]){case 1:f.push(x),_.push(E.yytext),i.push(E.yylloc),f.push(P[1]),x=null,It?(x=It,It=null):(tt=E.yyleng,c=E.yytext,J=E.yylineno,Lt=E.yylloc,ot>0&&ot--);break;case 2:if(W=this.productions_[P[1]][1],et.$=_[_.length-W],et._$={first_line:i[i.length-(W||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(W||1)].first_column,last_column:i[i.length-1].last_column},_e&&(et._$.range=[i[i.length-(W||1)].range[0],i[i.length-1].range[1]]),(ee=this.performAction.apply(et,[c,tt,J,Z.yy,P[1],_,i].concat(Et)))!==void 0)return ee;W&&(f=f.slice(0,W*-1*2),_=_.slice(0,W*-1),i=i.slice(0,W*-1)),f.push(this.productions_[P[1]][0]),_.push(et.$),i.push(et._$),se=lt[f[f.length-2]][f[f.length-1]],f.push(se);break;case 3:return!0}}return!0},"parse")},ve={EOF:1,parseError:r.setFunctionName(function(n,p){if(this.yy.parser)this.yy.parser.parseError(n,p);else throw Error(n)},"parseError"),setInput:r.setFunctionName(function(n,p){return this.yy=p||this.yy||{},this._input=n,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:r.setFunctionName(function(){var n=this._input[0];return this.yytext+=n,this.yyleng++,this.offset++,this.match+=n,this.matched+=n,n.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),n},"input"),unput:r.setFunctionName(function(n){var p=n.length,f=n.split(/(?:\r\n?|\n)/g);this._input=n+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-p),this.offset-=p;var y=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),f.length-1&&(this.yylineno-=f.length-1);var _=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:f?(f.length===y.length?this.yylloc.first_column:0)+y[y.length-f.length].length-f[0].length:this.yylloc.first_column-p},this.options.ranges&&(this.yylloc.range=[_[0],_[0]+this.yyleng-p]),this.yyleng=this.yytext.length,this},"unput"),more:r.setFunctionName(function(){return this._more=!0,this},"more"),reject:r.setFunctionName(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:r.setFunctionName(function(n){this.unput(this.match.slice(n))},"less"),pastInput:r.setFunctionName(function(){var n=this.matched.substr(0,this.matched.length-this.match.length);return(n.length>20?"...":"")+n.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:r.setFunctionName(function(){var n=this.match;return n.length<20&&(n+=this._input.substr(0,20-n.length)),(n.substr(0,20)+(n.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:r.setFunctionName(function(){var n=this.pastInput(),p=Array(n.length+1).join("-");return n+this.upcomingInput()+`
`+p+"^"},"showPosition"),test_match:r.setFunctionName(function(n,p){var f,y,_;if(this.options.backtrack_lexer&&(_={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(_.yylloc.range=this.yylloc.range.slice(0))),(y=n[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=y.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:y?y[y.length-1].length-y[y.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+n[0].length},this.yytext+=n[0],this.match+=n[0],this.matches=n,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(n[0].length),this.matched+=n[0],f=this.performAction.call(this,this.yy,this,p,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),f)return f;if(this._backtrack)for(var i in _)this[i]=_[i];return!1},"test_match"),next:r.setFunctionName(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var n,p,f,y,_=this._currentRules(),i=0;i<_.length;i++)if((f=this._input.match(this.rules[_[i]]))&&(!p||f[0].length>p[0].length)){if(p=f,y=i,this.options.backtrack_lexer){if((n=this.test_match(f,_[i]))!==!1)return n;if(!this._backtrack)return!1;p=!1;continue}if(!this.options.flex)break}return p?(n=this.test_match(p,_[y]))!==!1&&n:this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:r.setFunctionName(function(){var n=this.next();return n||this.lex()},"lex"),begin:r.setFunctionName(function(n){this.conditionStack.push(n)},"begin"),popState:r.setFunctionName(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:r.setFunctionName(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:r.setFunctionName(function(n){return(n=this.conditionStack.length-1-Math.abs(n||0))>=0?this.conditionStack[n]:"INITIAL"},"topState"),pushState:r.setFunctionName(function(n){this.begin(n)},"pushState"),stateStackSize:r.setFunctionName(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:r.setFunctionName(function(n,p,f,y){switch(f){case 0:return 38;case 1:return 40;case 2:return 39;case 3:return 44;case 4:case 45:return 51;case 5:case 46:return 52;case 6:case 47:return 53;case 7:case 48:return 54;case 8:case 9:case 11:case 12:case 13:case 14:case 57:case 59:case 65:break;case 10:case 80:return 5;case 15:case 35:return this.pushState("SCALE"),17;case 16:case 36:return 18;case 17:case 23:case 37:case 52:case 55:this.popState();break;case 18:return this.begin("acc_title"),33;case 19:return this.popState(),"acc_title_value";case 20:return this.begin("acc_descr"),35;case 21:return this.popState(),"acc_descr_value";case 22:this.begin("acc_descr_multiline");break;case 24:return"acc_descr_multiline_value";case 25:return this.pushState("CLASSDEF"),41;case 26:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 27:return this.popState(),this.pushState("CLASSDEFID"),42;case 28:return this.popState(),43;case 29:return this.pushState("CLASS"),48;case 30:return this.popState(),this.pushState("CLASS_STYLE"),49;case 31:return this.popState(),50;case 32:return this.pushState("STYLE"),45;case 33:return this.popState(),this.pushState("STYLEDEF_STYLES"),46;case 34:return this.popState(),47;case 38:this.pushState("STATE");break;case 39:case 42:return this.popState(),p.yytext=p.yytext.slice(0,-8).trim(),25;case 40:case 43:return this.popState(),p.yytext=p.yytext.slice(0,-8).trim(),26;case 41:case 44:return this.popState(),p.yytext=p.yytext.slice(0,-10).trim(),27;case 49:this.pushState("STATE_STRING");break;case 50:return this.pushState("STATE_ID"),"AS";case 51:case 67:return this.popState(),"ID";case 53:return"STATE_DESCR";case 54:return 19;case 56:return this.popState(),this.pushState("struct"),20;case 58:return this.popState(),21;case 60:return this.begin("NOTE"),29;case 61:return this.popState(),this.pushState("NOTE_ID"),59;case 62:return this.popState(),this.pushState("NOTE_ID"),60;case 63:this.popState(),this.pushState("FLOATING_NOTE");break;case 64:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";case 66:return"NOTE_TEXT";case 68:return this.popState(),this.pushState("NOTE_TEXT"),24;case 69:return this.popState(),p.yytext=p.yytext.substr(2).trim(),31;case 70:return this.popState(),p.yytext=p.yytext.slice(0,-8).trim(),31;case 71:case 72:return 6;case 73:return 16;case 74:return 57;case 75:return 24;case 76:return p.yytext=p.yytext.trim(),14;case 77:return 15;case 78:return 28;case 79:return 58;case 81:return"INVALID"}},"anonymous"),rules:[/^(?:click\b)/i,/^(?:href\b)/i,/^(?:"[^"]*")/i,/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:style\s+)/i,/^(?:[\w,]+\s+)/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[12,13],inclusive:!1},struct:{rules:[12,13,25,29,32,38,45,46,47,48,57,58,59,60,74,75,76,77,78],inclusive:!1},FLOATING_NOTE_ID:{rules:[67],inclusive:!1},FLOATING_NOTE:{rules:[64,65,66],inclusive:!1},NOTE_TEXT:{rules:[69,70],inclusive:!1},NOTE_ID:{rules:[68],inclusive:!1},NOTE:{rules:[61,62,63],inclusive:!1},STYLEDEF_STYLEOPTS:{rules:[],inclusive:!1},STYLEDEF_STYLES:{rules:[34],inclusive:!1},STYLE_IDS:{rules:[],inclusive:!1},STYLE:{rules:[33],inclusive:!1},CLASS_STYLE:{rules:[31],inclusive:!1},CLASS:{rules:[30],inclusive:!1},CLASSDEFID:{rules:[28],inclusive:!1},CLASSDEF:{rules:[26,27],inclusive:!1},acc_descr_multiline:{rules:[23,24],inclusive:!1},acc_descr:{rules:[21],inclusive:!1},acc_title:{rules:[19],inclusive:!1},SCALE:{rules:[16,17,36,37],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[51],inclusive:!1},STATE_STRING:{rules:[52,53],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[12,13,39,40,41,42,43,44,49,50,54,55,56],inclusive:!1},ID:{rules:[12,13],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,18,20,22,25,29,32,35,38,56,60,71,72,73,74,75,76,77,79,80,81],inclusive:!0}}};function Tt(){this.yy={}}return Nt.lexer=ve,r.setFunctionName(Tt,"Parser"),Tt.prototype=Nt,Nt.Parser=Tt,new Tt})();U.parser=U;var j=U,F="state",z="root",it="relation",X="default",rt="divider",Bt="fill:none",Pt="fill: #333",Yt="text",Ut="normal",Ct="rect",xt="rectWithTitle",Gt="divider",jt="roundedWithTitle",at="statediagram",oe=`${at}-state`,zt="transition",ce=`${zt} note-edge`,de=`${at}-note`,ue=`${at}-cluster`,he=`${at}-cluster-alt`,Mt="parent",Wt="note",At="----",fe=`${At}${Wt}`,Kt=`${At}${Mt}`,Vt=r.setFunctionName(function(t,e="TB"){if(!t.doc)return e;let a=e;for(let s of t.doc)s.stmt==="dir"&&(a=s.value);return a},"getDir"),pe={getClasses:r.setFunctionName(function(t,e){return e.db.getClasses()},"getClasses"),draw:r.setFunctionName(async function(t,e,a,s){var o;r.logger.info("REF0:"),r.logger.info("Drawing state diagram (v2)",e);let{securityLevel:u,state:h,layout:T}=m.getConfigAlias();s.db.extract(s.db.getRootDocV2());let l=s.db.getData(),S=w.getDiagramElement(e,u);l.type=s.type,l.layoutAlgorithm=T,l.nodeSpacing=h?.nodeSpacing||50,l.rankSpacing=h?.rankSpacing||50,l.markers=["barb"],l.diagramId=e,await G.render(l,S);try{(typeof s.db.getLinks=="function"?s.db.getLinks():new Map).forEach((N,b)=>{var O;let D,d=typeof b=="string"?b:typeof b?.id=="string"?b.id:"";if(!d){r.logger.warn("\u26A0\uFE0F Invalid or missing stateId from key:",JSON.stringify(b));return}let C=(O=S.node())===null||O===void 0?void 0:O.querySelectorAll("g");if(C?.forEach(L=>{var B;((B=L.textContent)===null||B===void 0?void 0:B.trim())===d&&(D=L)}),!D){r.logger.warn("\u26A0\uFE0F Could not find node matching text:",d);return}let R=D.parentNode;if(!R){r.logger.warn("\u26A0\uFE0F Node has no parent, cannot wrap:",d);return}let $=document.createElementNS("http://www.w3.org/2000/svg","a"),M=N.url.replace(/^"+|"+$/g,"");if($.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",M),$.setAttribute("target","_blank"),N.tooltip){let L=N.tooltip.replace(/^"+|"+$/g,"");$.setAttribute("title",L)}R.replaceChild($,D),$.appendChild(D),r.logger.info("\u{1F517} Wrapped node in <a> tag for:",d,N.url)})}catch(N){r.logger.error("\u274C Error injecting clickable links:",N)}H.mermaidUtils.insertTitle(S,"statediagramTitleText",h?.titleTopMargin??25,s.db.getDiagramTitle()),V.setupViewPortForSvg(S,8,at,(o=h?.useMaxWidth)===null||o===void 0||o)},"draw"),getDir:Vt},ct=new Map,K=0;function dt(t="",e=0,a="",s=At){let o=a!==null&&a.length>0?`${s}${a}`:"";return`state-${t}${o}-${e}`}r.setFunctionName(dt,"stateDomId");var ge=r.setFunctionName((t,e,a,s,o,u,h,T)=>{r.logger.trace("items",e),e.forEach(l=>{switch(l.stmt){case F:case X:ut(t,l,a,s,o,u,h,T);break;case it:{ut(t,l.state1,a,s,o,u,h,T),ut(t,l.state2,a,s,o,u,h,T);let S={id:"edge"+K,start:l.state1.id,end:l.state2.id,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:Bt,labelStyle:"",label:m.textUtilities.sanitizeText(l.description??"",m.getConfigAlias()),arrowheadStyle:Pt,labelpos:"c",labelType:Yt,thickness:Ut,classes:zt,look:h};o.push(S),K++}}})},"setupDoc"),Ht=r.setFunctionName(function(t,e="TB"){let a=e;if(t.doc)for(let s of t.doc)s.stmt==="dir"&&(a=s.value);return a},"getDir");function nt(t,e,a){if(!e.id||e.id==="</join></fork>"||e.id==="</choice>")return;e.cssClasses&&(Array.isArray(e.cssCompiledStyles)||(e.cssCompiledStyles=[]),e.cssClasses.split(" ").forEach(o=>{let u=a.get(o);u&&(e.cssCompiledStyles=[...e.cssCompiledStyles??[],...u.styles])}));let s=t.find(o=>o.id===e.id);s?Object.assign(s,e):t.push(e)}function Xt(t){var e;return(t==null||(e=t.classes)===null||e===void 0?void 0:e.join(" "))??""}function Jt(t){return t?.styles??[]}r.setFunctionName(nt,"insertOrUpdateNode"),r.setFunctionName(Xt,"getClassesFromDbInfo"),r.setFunctionName(Jt,"getStylesFromDbInfo");var ut=r.setFunctionName((t,e,a,s,o,u,h,T)=>{let l=e.id,S=a.get(l),N=Xt(S),b=Jt(S),O=m.getConfigAlias();if(r.logger.info("dataFetcher parsedItem",e,S,b),l!=="root"){let D=Ct;e.start===!0?D="stateStart":e.start===!1&&(D="stateEnd"),e.type!==X&&(D=e.type),ct.get(l)||ct.set(l,{id:l,shape:D,description:m.textUtilities.sanitizeText(l,O),cssClasses:`${N} ${oe}`,cssStyles:b});let d=ct.get(l);e.description&&(Array.isArray(d.description)?(d.shape=xt,d.description.push(e.description)):d.description?.length&&d.description.length>0?(d.shape=xt,d.description===l?d.description=[e.description]:d.description=[d.description,e.description]):(d.shape=Ct,d.description=e.description),d.description=m.textUtilities.sanitizeTextOrArray(d.description,O)),d.description?.length===1&&d.shape===xt&&(d.type==="group"?d.shape=jt:d.shape=Ct),!d.type&&e.doc&&(r.logger.info("Setting cluster for XCX",l,Ht(e)),d.type="group",d.isGroup=!0,d.dir=Ht(e),d.shape=e.type===rt?Gt:jt,d.cssClasses=`${d.cssClasses} ${ue} ${u?he:""}`);let C={labelStyle:"",shape:d.shape,label:d.description,cssClasses:d.cssClasses,cssCompiledStyles:[],cssStyles:d.cssStyles,id:l,dir:d.dir,domId:dt(l,K),type:d.type,isGroup:d.type==="group",padding:8,rx:10,ry:10,look:h};if(C.shape===Gt&&(C.label=""),t&&t.id!=="root"&&(r.logger.trace("Setting node ",l," to be child of its parent ",t.id),C.parentId=t.id),C.centerLabel=!0,e.note){let R={labelStyle:"",shape:"note",label:e.note.text,cssClasses:de,cssStyles:[],cssCompiledStyles:[],id:l+fe+"-"+K,domId:dt(l,K,Wt),type:d.type,isGroup:d.type==="group",padding:O.flowchart?.padding,look:h,position:e.note.position},$=l+Kt,M={labelStyle:"",shape:"noteGroup",label:e.note.text,cssClasses:d.cssClasses,cssStyles:[],id:l+Kt,domId:dt(l,K,Mt),type:"group",isGroup:!0,padding:16,look:h,position:e.note.position};K++,M.id=$,R.parentId=$,nt(s,M,T),nt(s,R,T),nt(s,C,T);let L=l,B=R.id;e.note.position==="left of"&&(L=R.id,B=l),o.push({id:L+"-"+B,start:L,end:B,arrowhead:"none",arrowTypeEnd:"",style:Bt,labelStyle:"",classes:ce,arrowheadStyle:Pt,labelpos:"c",labelType:Yt,thickness:Ut,look:h})}else nt(s,C,T)}e.doc&&(r.logger.trace("Adding nodes children "),ge(e,e.doc,a,s,o,!u,h,T))},"dataFetcher"),me=r.setFunctionName(()=>{ct.clear(),K=0},"reset"),k={START_NODE:"[*]",START_TYPE:"start",END_NODE:"[*]",END_TYPE:"end",COLOR_KEYWORD:"color",FILL_KEYWORD:"fill",BG_FILL:"bgFill",STYLECLASS_SEP:","},Zt=r.setFunctionName(()=>new Map,"newClassesList"),Qt=r.setFunctionName(()=>({relations:[],states:new Map,documents:{}}),"newDoc"),ht=r.setFunctionName(t=>JSON.parse(JSON.stringify(t)),"clone");A=class{extract(t){this.clear(!0);for(let s of Array.isArray(t)?t:t.doc)switch(s.stmt){case F:this.addState(s.id.trim(),s.type,s.doc,s.description,s.note);break;case it:this.addRelation(s.state1,s.state2,s.description);break;case"classDef":this.addStyleClass(s.id.trim(),s.classes);break;case"style":this.handleStyleDef(s);break;case"applyClass":this.setCssClass(s.id.trim(),s.styleClass);break;case"click":this.addLink(s.id,s.url,s.tooltip)}let e=this.getStates(),a=m.getConfigAlias();me(),ut(void 0,this.getRootDocV2(),e,this.nodes,this.edges,!0,a.look,this.classes);for(let s of this.nodes)if(Array.isArray(s.label)){if(s.description=s.label.slice(1),s.isGroup&&s.description.length>0)throw Error(`Group nodes can only have label. Remove the additional description for node [${s.id}]`);s.label=s.label[0]}}handleStyleDef(t){let e=t.id.trim().split(","),a=t.styleClass.split(",");for(let s of e){let o=this.getState(s);if(!o){let u=s.trim();this.addState(u),o=this.getState(u)}o&&(o.styles=a.map(u=>{var h;if(!((h=u.replace(/;/g,""))===null||h===void 0))return h.trim()}))}}setRootDoc(t){r.logger.info("Setting root doc",t),this.rootDoc=t,this.version===1?this.extract(t):this.extract(this.getRootDocV2())}docTranslator(t,e,a){if(e.stmt===it){this.docTranslator(t,e.state1,!0),this.docTranslator(t,e.state2,!1);return}if(e.stmt===F&&(e.id===k.START_NODE?(e.id=t.id+(a?"_start":"_end"),e.start=a):e.id=e.id.trim()),e.stmt!==z&&e.stmt!==F||!e.doc)return;let s=[],o=[];for(let u of e.doc)if(u.type===rt){let h=ht(u);h.doc=ht(o),s.push(h),o=[]}else o.push(u);if(s.length>0&&o.length>0){let u={stmt:F,id:H.generateId(),type:"divider",doc:ht(o)};s.push(ht(u)),e.doc=s}e.doc.forEach(u=>this.docTranslator(e,u,!0))}getRootDocV2(){return this.docTranslator({id:z,stmt:z},{id:z,stmt:z,doc:this.rootDoc},!0),{id:z,doc:this.rootDoc}}addState(t,e=X,a=void 0,s=void 0,o=void 0,u=void 0,h=void 0,T=void 0){let l=t?.trim();if(this.currentDocument.states.has(l)){let S=this.currentDocument.states.get(l);if(!S)throw Error(`State not found: ${l}`);S.doc||=a,S.type||=e}else r.logger.info("Adding state ",l,s),this.currentDocument.states.set(l,{stmt:F,id:l,descriptions:[],type:e,doc:a,note:o,classes:[],styles:[],textStyles:[]});if(s&&(r.logger.info("Setting state description",l,s),(Array.isArray(s)?s:[s]).forEach(S=>this.addDescription(l,S.trim()))),o){let S=this.currentDocument.states.get(l);if(!S)throw Error(`State not found: ${l}`);S.note=o,S.note.text=m.textUtilities.sanitizeText(S.note.text,m.getConfigAlias())}u&&(r.logger.info("Setting state classes",l,u),(Array.isArray(u)?u:[u]).forEach(S=>this.setCssClass(l,S.trim()))),h&&(r.logger.info("Setting state styles",l,h),(Array.isArray(h)?h:[h]).forEach(S=>this.setStyle(l,S.trim()))),T&&(r.logger.info("Setting state styles",l,h),(Array.isArray(T)?T:[T]).forEach(S=>this.setTextStyle(l,S.trim())))}clear(t){this.nodes=[],this.edges=[],this.documents={root:Qt()},this.currentDocument=this.documents.root,this.startEndCount=0,this.classes=Zt(),t||(this.links=new Map,m.clearCommonDb())}getState(t){return this.currentDocument.states.get(t)}getStates(){return this.currentDocument.states}logDocuments(){r.logger.info("Documents = ",this.documents)}getRelations(){return this.currentDocument.relations}addLink(t,e,a){this.links.set(t,{url:e,tooltip:a}),r.logger.warn("Adding link",t,e,a)}getLinks(){return this.links}startIdIfNeeded(t=""){return t===k.START_NODE?(this.startEndCount++,`${k.START_TYPE}${this.startEndCount}`):t}startTypeIfNeeded(t="",e=X){return t===k.START_NODE?k.START_TYPE:e}endIdIfNeeded(t=""){return t===k.END_NODE?(this.startEndCount++,`${k.END_TYPE}${this.startEndCount}`):t}endTypeIfNeeded(t="",e=X){return t===k.END_NODE?k.END_TYPE:e}addRelationObjs(t,e,a=""){let s=this.startIdIfNeeded(t.id.trim()),o=this.startTypeIfNeeded(t.id.trim(),t.type),u=this.startIdIfNeeded(e.id.trim()),h=this.startTypeIfNeeded(e.id.trim(),e.type);this.addState(s,o,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),this.addState(u,h,e.doc,e.description,e.note,e.classes,e.styles,e.textStyles),this.currentDocument.relations.push({id1:s,id2:u,relationTitle:m.textUtilities.sanitizeText(a,m.getConfigAlias())})}addRelation(t,e,a){if(typeof t=="object"&&typeof e=="object")this.addRelationObjs(t,e,a);else if(typeof t=="string"&&typeof e=="string"){let s=this.startIdIfNeeded(t.trim()),o=this.startTypeIfNeeded(t),u=this.endIdIfNeeded(e.trim()),h=this.endTypeIfNeeded(e);this.addState(s,o),this.addState(u,h),this.currentDocument.relations.push({id1:s,id2:u,relationTitle:a?m.textUtilities.sanitizeText(a,m.getConfigAlias()):void 0})}}addDescription(t,e){var a;let s=this.currentDocument.states.get(t),o=e.startsWith(":")?e.replace(":","").trim():e;s!=null&&(a=s.descriptions)!==null&&a!==void 0&&a.push(m.textUtilities.sanitizeText(o,m.getConfigAlias()))}cleanupLabel(t){return t.startsWith(":")?t.slice(2).trim():t.trim()}getDividerId(){return this.dividerCnt++,`divider-id-${this.dividerCnt}`}addStyleClass(t,e=""){this.classes.has(t)||this.classes.set(t,{id:t,styles:[],textStyles:[]});let a=this.classes.get(t);e&&a&&e.split(k.STYLECLASS_SEP).forEach(s=>{let o=s.replace(/([^;]*);/,"$1").trim();if(RegExp(k.COLOR_KEYWORD).exec(s)){let u=o.replace(k.FILL_KEYWORD,k.BG_FILL).replace(k.COLOR_KEYWORD,k.FILL_KEYWORD);a.textStyles.push(u)}a.styles.push(o)})}getClasses(){return this.classes}setCssClass(t,e){t.split(",").forEach(a=>{var s;let o=this.getState(a);if(!o){let u=a.trim();this.addState(u),o=this.getState(u)}o!=null&&(s=o.classes)!==null&&s!==void 0&&s.push(e)})}setStyle(t,e){var a,s;(s=this.getState(t))!==null&&s!==void 0&&(a=s.styles)!==null&&a!==void 0&&a.push(e)}setTextStyle(t,e){var a,s;(s=this.getState(t))!==null&&s!==void 0&&(a=s.textStyles)!==null&&a!==void 0&&a.push(e)}getDirectionStatement(){return this.rootDoc.find(t=>t.stmt==="dir")}getDirection(){return this.getDirectionStatement()?.value??"TB"}setDirection(t){let e=this.getDirectionStatement();e?e.value=t:this.rootDoc.unshift({stmt:"dir",value:t})}trimColon(t){return t.startsWith(":")?t.slice(1).trim():t.trim()}getData(){let t=m.getConfigAlias();return{nodes:this.nodes,edges:this.edges,other:{},config:t,direction:Vt(this.getRootDocV2())}}getConfig(){return m.getConfigAlias().state}constructor(t){this.version=t,this.nodes=[],this.edges=[],this.rootDoc=[],this.classes=Zt(),this.documents={root:Qt()},this.currentDocument=this.documents.root,this.startEndCount=0,this.dividerCnt=0,this.links=new Map,this.getAccTitle=m.getAccTitle,this.setAccTitle=m.setAccTitle,this.getAccDescription=m.getAccDescription,this.setAccDescription=m.setAccDescription,this.setDiagramTitle=m.setDiagramTitle,this.getDiagramTitle=m.getDiagramTitle,this.clear(),this.setRootDoc=this.setRootDoc.bind(this),this.getDividerId=this.getDividerId.bind(this),this.setDirection=this.setDirection.bind(this),this.trimColon=this.trimColon.bind(this)}},r.setFunctionName(A,"StateDB"),A.relationType={AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3};var ye=A,Se=r.setFunctionName(t=>`
defs #statediagram-barbEnd {
    fill: ${t.transitionColor};
    stroke: ${t.transitionColor};
  }
g.stateGroup text {
  fill: ${t.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${t.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${t.stateLabelColor};
}

g.stateGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.stateGroup line {
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${t.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${t.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${t.noteBorderColor};
  fill: ${t.noteBkgColor};

  text {
    fill: ${t.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${t.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${t.edgeLabelBackground};
  p {
    background-color: ${t.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${t.edgeLabelBackground};
    fill: ${t.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${t.transitionLabelColor||t.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${t.transitionLabelColor||t.tertiaryTextColor};
}

.stateLabel text {
  fill: ${t.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node .fork-join {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node circle.state-end {
  fill: ${t.innerEndBackground};
  stroke: ${t.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${t.compositeBackground||t.background};
  // stroke: ${t.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${t.stateBkg||t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${t.lineColor};
}

.statediagram-cluster rect {
  fill: ${t.compositeTitleBackground};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${t.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${t.stateBorder||t.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${t.compositeBackground||t.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${t.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${t.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${t.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${t.lineColor};
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}
`,"getStyles");v.d(I,{getStyles:function(){return Se},parser:function(){return j},diagramRenderer:function(){return pe},StateDB:function(){return ye}})}});(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([["mermaid-state-diagram-renderer-styles",91748],{"diagram-element-selector":wt(),150827:wt(),"mermaid-svg-viewport-setup":Ft(),3049:Ft(),"mermaid-state-diagram-v2":Ot(),315688:Ot(),"state-diagram-v2-parser-db":Rt(),831790:Rt()},null]);})();
//# sourceMappingURL=http://127.0.0.1:11434/web_cache_260316012/source_map/mermaid-state-diagram-renderer-styles.js.bundle.js.map