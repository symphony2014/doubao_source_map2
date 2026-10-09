(()=>{var J=(Y,x)=>()=>(x||Y((x={exports:{}}).exports,x),x.exports);var st=J((qt,Ct)=>{Ct.exports=function(Y,x,$){x.BLANK_URL=x.relativeFirstCharacters=x.whitespaceEscapeCharsRegex=x.urlSchemeRegex=x.ctrlCharactersRegex=x.htmlCtrlEntityRegex=x.htmlEntitiesRegex=x.invalidProtocolRegex=void 0,x.invalidProtocolRegex=/^([^\w]*)(javascript|data|vbscript)/im,x.htmlEntitiesRegex=/&#(\w+)(^\w|;)?/g,x.htmlCtrlEntityRegex=/&(newline|tab);/gi,x.ctrlCharactersRegex=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,x.urlSchemeRegex=/^.+(:|&colon;)/gim,x.whitespaceEscapeCharsRegex=/(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g,x.relativeFirstCharacters=[".","/"],x.BLANK_URL="about:blank",Object.defineProperty(x,"__esModule",{value:!0})}});var lt=J((Kt,$t)=>{$t.exports=function(Y,x,$){x.sanitizeUrl=void 0;var m=$("url-validation-constants");function z(a){try{return decodeURIComponent(a)}catch{return a}}x.sanitizeUrl=function(a){if(!a)return m.BLANK_URL;var R,S=z(a.trim());do R=(S=z(S=S.replace(m.ctrlCharactersRegex,"").replace(m.htmlEntitiesRegex,function(b,w){return String.fromCharCode(w)}).replace(m.htmlCtrlEntityRegex,"").replace(m.ctrlCharactersRegex,"").replace(m.whitespaceEscapeCharsRegex,"").trim())).match(m.ctrlCharactersRegex)||S.match(m.htmlEntitiesRegex)||S.match(m.htmlCtrlEntityRegex)||S.match(m.whitespaceEscapeCharsRegex);while(R&&R.length>0);var A=S;if(!A)return m.BLANK_URL;if(m.relativeFirstCharacters.indexOf(A[0])>-1)return A;var V=A.trimStart(),D=V.match(m.urlSchemeRegex);if(!D)return A;var T=D[0].toLowerCase().trim();if(m.invalidProtocolRegex.test(T))return m.BLANK_URL;var C=V.replace(/\\/g,"/");if(T==="mailto:"||T.includes("://"))return C;if(T==="http:"||T==="https:"){if(!URL.canParse(C))return m.BLANK_URL;var h=new URL(C);return h.protocol=h.protocol.toLowerCase(),h.hostname=h.hostname.toLowerCase(),h.toString()}return C}}});var ot=J((Wt,At)=>{At.exports=function(Y,x,$){var m=$("mermaid-shape-drawers"),z=$("mermaid-icon-styles-helper"),a=$("mermaid-config-utils"),R=$("axis-and-zoom-utilities"),S=(function(){var t=a.setName(function(i,d,r,f){for(r=r||{},f=i.length;f--;r[i[f]]=d);return r},"o"),e=[6,8,10,11,12,14,16,17,18],l=[1,9],o=[1,10],n=[1,11],c=[1,12],y=[1,13],u=[1,14],v={trace:a.setName(function(){},"trace"),yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,taskName:18,taskData:19,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",18:"taskName",19:"taskData"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,2]],performAction:a.setName(function(i,d,r,f,p,s,F){var _=s.length-1;switch(p){case 1:return s[_-1];case 2:case 6:case 7:this.$=[];break;case 3:s[_-1].push(s[_]),this.$=s[_-1];break;case 4:case 5:this.$=s[_];break;case 8:f.setDiagramTitle(s[_].substr(6)),this.$=s[_].substr(6);break;case 9:this.$=s[_].trim(),f.setAccTitle(this.$);break;case 10:case 11:this.$=s[_].trim(),f.setAccDescription(this.$);break;case 12:f.addSection(s[_].substr(8)),this.$=s[_].substr(8);break;case 13:f.addTask(s[_-1],s[_]),this.$="task"}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:l,12:o,14:n,16:c,17:y,18:u},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:15,11:l,12:o,14:n,16:c,17:y,18:u},t(e,[2,5]),t(e,[2,6]),t(e,[2,8]),{13:[1,16]},{15:[1,17]},t(e,[2,11]),t(e,[2,12]),{19:[1,18]},t(e,[2,4]),t(e,[2,9]),t(e,[2,10]),t(e,[2,13])],defaultActions:{},parseError:a.setName(function(i,d){if(d.recoverable)this.trace(i);else{var r=Error(i);throw r.hash=d,r}},"parseError"),parse:a.setName(function(i){var d=this,r=[0],f=[],p=[null],s=[],F=this.table,_="",q=0,H=0,kt=0,Vt=s.slice.call(arguments,1),N=Object.create(this.lexer),K={yy:{}};for(var at in this.yy)Object.prototype.hasOwnProperty.call(this.yy,at)&&(K.yy[at]=this.yy[at]);N.setInput(i,K.yy),K.yy.lexer=N,K.yy.parser=this,N.yylloc===void 0&&(N.yylloc={});var rt=N.yylloc;s.push(rt);var Ut=N.options&&N.options.ranges;function _t(){var P;return typeof(P=f.pop()||N.lex()||1)!="number"&&(P instanceof Array&&(P=(f=P).pop()),P=d.symbols_[P]||P),P}typeof K.yy.parseError=="function"?this.parseError=K.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,a.setName(function(P){r.length=r.length-P*2,p.length=p.length-P,s.length=s.length-P},"popStack"),a.setName(_t,"lex");for(var E,nt,W,L,bt,tt,O,wt,et,X={};;){if(W=r[r.length-1],this.defaultActions[W]?L=this.defaultActions[W]:(E==null&&(E=_t()),L=F[W]&&F[W][E]),L===void 0||!L.length||!L[0]){var Nt="";et=[];for(tt in F[W])this.terminals_[tt]&&tt>2&&et.push("'"+this.terminals_[tt]+"'");Nt=N.showPosition?"Parse error on line "+(q+1)+`:
`+N.showPosition()+`
Expecting `+et.join(", ")+", got '"+(this.terminals_[E]||E)+"'":"Parse error on line "+(q+1)+": Unexpected "+(E==1?"end of input":"'"+(this.terminals_[E]||E)+"'"),this.parseError(Nt,{text:N.match,token:this.terminals_[E]||E,line:N.yylineno,loc:rt,expected:et})}if(L[0]instanceof Array&&L.length>1)throw Error("Parse Error: multiple actions possible at state: "+W+", token: "+E);switch(L[0]){case 1:r.push(E),p.push(N.yytext),s.push(N.yylloc),r.push(L[1]),E=null,nt?(E=nt,nt=null):(H=N.yyleng,_=N.yytext,q=N.yylineno,rt=N.yylloc,kt>0&&kt--);break;case 2:if(O=this.productions_[L[1]][1],X.$=p[p.length-O],X._$={first_line:s[s.length-(O||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(O||1)].first_column,last_column:s[s.length-1].last_column},Ut&&(X._$.range=[s[s.length-(O||1)].range[0],s[s.length-1].range[1]]),(bt=this.performAction.apply(X,[_,H,q,K.yy,L[1],p,s].concat(Vt)))!==void 0)return bt;O&&(r=r.slice(0,O*-1*2),p=p.slice(0,O*-1),s=s.slice(0,O*-1)),r.push(this.productions_[L[1]][0]),p.push(X.$),s.push(X._$),wt=F[r[r.length-2]][r[r.length-1]],r.push(wt);break;case 3:return!0}}return!0},"parse")},k={EOF:1,parseError:a.setName(function(i,d){if(this.yy.parser)this.yy.parser.parseError(i,d);else throw Error(i)},"parseError"),setInput:a.setName(function(i,d){return this.yy=d||this.yy||{},this._input=i,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:a.setName(function(){var i=this._input[0];return this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i,i.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},"input"),unput:a.setName(function(i){var d=i.length,r=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-d),this.offset-=d;var f=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1);var p=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===f.length?this.yylloc.first_column:0)+f[f.length-r.length].length-r[0].length:this.yylloc.first_column-d},this.options.ranges&&(this.yylloc.range=[p[0],p[0]+this.yyleng-d]),this.yyleng=this.yytext.length,this},"unput"),more:a.setName(function(){return this._more=!0,this},"more"),reject:a.setName(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:a.setName(function(i){this.unput(this.match.slice(i))},"less"),pastInput:a.setName(function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:a.setName(function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:a.setName(function(){var i=this.pastInput(),d=Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+d+"^"},"showPosition"),test_match:a.setName(function(i,d){var r,f,p;if(this.options.backtrack_lexer&&(p={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(p.yylloc.range=this.yylloc.range.slice(0))),(f=i[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=f.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:f?f[f.length-1].length-f[f.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],r=this.performAction.call(this,this.yy,this,d,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),r)return r;if(this._backtrack)for(var s in p)this[s]=p[s];return!1},"test_match"),next:a.setName(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var i,d,r,f,p=this._currentRules(),s=0;s<p.length;s++)if((r=this._input.match(this.rules[p[s]]))&&(!d||r[0].length>d[0].length)){if(d=r,f=s,this.options.backtrack_lexer){if((i=this.test_match(r,p[s]))!==!1)return i;if(!this._backtrack)return!1;d=!1;continue}if(!this.options.flex)break}return d?(i=this.test_match(d,p[f]))!==!1&&i:this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:a.setName(function(){var i=this.next();return i||this.lex()},"lex"),begin:a.setName(function(i){this.conditionStack.push(i)},"begin"),popState:a.setName(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:a.setName(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:a.setName(function(i){return(i=this.conditionStack.length-1-Math.abs(i||0))>=0?this.conditionStack[i]:"INITIAL"},"topState"),pushState:a.setName(function(i){this.begin(i)},"pushState"),stateStackSize:a.setName(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:a.setName(function(i,d,r,f){switch(r){case 0:case 1:case 3:case 4:break;case 2:return 10;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 18;case 16:return 19;case 17:return":";case 18:return 6;case 19:return"INVALID"}},"anonymous"),rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18,19],inclusive:!0}}};function g(){this.yy={}}return v.lexer=k,a.setName(g,"Parser"),g.prototype=v,v.Parser=g,new g})();S.parser=S;var A="",V=[],D=[],T=[],C=a.setName(function(){V.length=0,D.length=0,A="",T.length=0,a.clearAccData()},"clear"),h=a.setName(function(t){A=t,V.push(t)},"addSection"),b=a.setName(function(){return V},"getSections"),w=a.setName(function(){let t=ut(),e=0;for(;!t&&e<100;)t=ut(),e++;return D.push(...T),D},"getTasks"),M=a.setName(function(){let t=[];return D.forEach(e=>{e.people&&t.push(...e.people)}),[...new Set(t)].sort()},"updateActors"),G=a.setName(function(t,e){let l=e.substr(1).split(":"),o=0,n=[];l.length===1?(o=Number(l[0]),n=[]):(o=Number(l[0]),n=l[1].split(","));let c=n.map(u=>u.trim()),y={section:A,type:A,people:c,task:t,score:o};T.push(y)},"addTask"),Tt=a.setName(function(t){let e={section:A,type:A,description:t,task:t,classes:[]};D.push(e)},"addTaskOrg"),ut=a.setName(function(){let t=a.setName(function(l){return T[l].processed},"compileTask"),e=!0;for(let[l,o]of T.entries())t(l),e=e&&o.processed;return e},"compileTasks"),Rt=a.setName(function(){return M()},"getActors"),dt={getConfig:a.setName(()=>a.getConfigAlias().journey,"getConfig"),clear:C,setDiagramTitle:a.setDiagramTitle,getDiagramTitle:a.getDiagramTitle,setAccTitle:a.setAccTitle,getAccTitle:a.getAccTitle,setAccDescription:a.setAccDescription,getAccDescription:a.getAccDescription,addSection:h,getSections:b,getTasks:w,addTask:G,addTaskOrg:Tt,getActors:Rt},Mt=a.setName(t=>`.label {
    font-family: ${t.fontFamily};
    color: ${t.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${t.textColor}
  }

  .legend {
    fill: ${t.textColor};
    font-family: ${t.fontFamily};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${t.textColor}
  }

  .face {
    ${t.faceColor?`fill: ${t.faceColor}`:"fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${t.fontFamily};
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${t.fillType0?`fill: ${t.fillType0}`:""};
  }
  .task-type-1, .section-type-1  {
    ${t.fillType0?`fill: ${t.fillType1}`:""};
  }
  .task-type-2, .section-type-2  {
    ${t.fillType0?`fill: ${t.fillType2}`:""};
  }
  .task-type-3, .section-type-3  {
    ${t.fillType0?`fill: ${t.fillType3}`:""};
  }
  .task-type-4, .section-type-4  {
    ${t.fillType0?`fill: ${t.fillType4}`:""};
  }
  .task-type-5, .section-type-5  {
    ${t.fillType0?`fill: ${t.fillType5}`:""};
  }
  .task-type-6, .section-type-6  {
    ${t.fillType0?`fill: ${t.fillType6}`:""};
  }
  .task-type-7, .section-type-7  {
    ${t.fillType0?`fill: ${t.fillType7}`:""};
  }

  .actor-0 {
    ${t.actor0?`fill: ${t.actor0}`:""};
  }
  .actor-1 {
    ${t.actor1?`fill: ${t.actor1}`:""};
  }
  .actor-2 {
    ${t.actor2?`fill: ${t.actor2}`:""};
  }
  .actor-3 {
    ${t.actor3?`fill: ${t.actor3}`:""};
  }
  .actor-4 {
    ${t.actor4?`fill: ${t.actor4}`:""};
  }
  .actor-5 {
    ${t.actor5?`fill: ${t.actor5}`:""};
  }
  ${z.getIconStyles()}
`,"getStyles"),ft=a.setName(function(t,e){return m.drawRect(t,e)},"drawRect"),It=a.setName(function(t,e){let l=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),o=t.append("g");function n(u){let v=R.Nb1().startAngle(Math.PI/2).endAngle(Math.PI/2*3).innerRadius(7.5).outerRadius(6.8181818181818175);u.append("path").attr("class","mouth").attr("d",v).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}function c(u){let v=R.Nb1().startAngle(Math.PI*3/2).endAngle(Math.PI/2*5).innerRadius(7.5).outerRadius(6.8181818181818175);u.append("path").attr("class","mouth").attr("d",v).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}function y(u){u.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return o.append("circle").attr("cx",e.cx-5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),o.append("circle").attr("cx",e.cx+5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),a.setName(n,"smile"),a.setName(c,"sad"),a.setName(y,"ambivalent"),e.score>3?n(o):e.score<3?c(o):y(o),l},"drawFace"),yt=a.setName(function(t,e){let l=t.append("circle");return l.attr("cx",e.cx),l.attr("cy",e.cy),l.attr("class","actor-"+e.pos),l.attr("fill",e.fill),l.attr("stroke",e.stroke),l.attr("r",e.r),l.class!==void 0&&l.attr("class",l.class),e.title!==void 0&&l.append("title").text(e.title),l},"drawCircle"),Lt=a.setName(function(t,e){return m.drawText(t,e)},"drawText"),Pt=a.setName(function(t,e,l){let o=t.append("g"),n=m.getNoteRect();n.x=e.x,n.y=e.y,n.fill=e.fill,n.width=l.width*e.taskCount+l.diagramMarginX*(e.taskCount-1),n.height=l.height,n.class="journey-section section-type-"+e.num,n.rx=3,n.ry=3,ft(o,n),mt(l)(e.text,o,n.x,n.y,n.width,n.height,{class:"journey-section section-type-"+e.num},l,e.colour)},"drawSection"),pt=-1,jt=a.setName(function(t,e,l){let o=e.x+l.width/2,n=t.append("g");pt++,n.append("line").attr("id","task"+pt).attr("x1",o).attr("y1",e.y).attr("x2",o).attr("y2",450).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),It(n,{cx:o,cy:300+(5-e.score)*30,score:e.score});let c=m.getNoteRect();c.x=e.x,c.y=e.y,c.fill=e.fill,c.width=l.width,c.height=l.height,c.class="task task-type-"+e.num,c.rx=3,c.ry=3,ft(n,c);let y=e.x+14;e.people.forEach(u=>{let v=e.actors[u].color;yt(n,{cx:y,cy:e.y,r:7,fill:v,stroke:"#000",title:u,pos:e.actors[u].position}),y+=10}),mt(l)(e.task,n,c.x,c.y,c.width,c.height,{class:"task"},l,e.colour)},"drawTask"),mt=(function(){function t(n,c,y,u,v,k,g,i){o(c.append("text").attr("x",y+v/2).attr("y",u+k/2+5).style("font-color",i).style("text-anchor","middle").text(n),g)}function e(n,c,y,u,v,k,g,i,d){let{taskFontSize:r,taskFontFamily:f}=i,p=n.split(/<br\s*\/?>/gi);for(let s=0;s<p.length;s++){let F=s*r-r*(p.length-1)/2,_=c.append("text").attr("x",y+v/2).attr("y",u).attr("fill",d).style("text-anchor","middle").style("font-size",r).style("font-family",f);_.append("tspan").attr("x",y+v/2).attr("dy",F).text(p[s]),_.attr("y",u+k/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),o(_,g)}}function l(n,c,y,u,v,k,g,i){let d=c.append("switch"),r=d.append("foreignObject").attr("x",y).attr("y",u).attr("width",v).attr("height",k).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");r.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(n),e(n,d,y,u,v,k,g,i),o(r,g)}function o(n,c){for(let y in c)y in c&&n.attr(y,c[y])}return a.setName(t,"byText"),a.setName(e,"byTspan"),a.setName(l,"byFo"),a.setName(o,"_setTextAttrs"),function(n){return n.textPlacement==="fo"?l:n.textPlacement==="old"?t:e}})(),Z={drawCircle:yt,drawSection:Pt,drawText:Lt,drawTask:jt,initGraphics:a.setName(function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},"initGraphics")},Ft=a.setName(function(t){Object.keys(t).forEach(function(e){j[e]=t[e]})},"setConf"),B={},Q=0;function gt(t){let e=a.getConfigAlias().journey,l=e.maxLabelWidth;Q=0;let o=60;Object.keys(B).forEach(n=>{let c=B[n].color,y={cx:20,cy:o,r:7,fill:c,stroke:"#000",pos:B[n].position};Z.drawCircle(t,y);let u=t.append("text").attr("visibility","hidden").text(n),v=u.node().getBoundingClientRect().width;u.remove();let k=[];if(v<=l)k=[n];else{let g=n.split(" "),i="";u=t.append("text").attr("visibility","hidden"),g.forEach(d=>{let r=i?`${i} ${d}`:d;if(u.text(r),u.node().getBoundingClientRect().width>l){if(i&&k.push(i),i=d,u.text(d),u.node().getBoundingClientRect().width>l){let f="";for(let p of d)f+=p,u.text(f+"-"),u.node().getBoundingClientRect().width>l&&(k.push(f.slice(0,-1)+"-"),f=p);i=f}}else i=r}),i&&k.push(i),u.remove()}k.forEach((g,i)=>{let d={x:40,y:o+7+i*20,fill:"#666",text:g,textMargin:e.boxTextMargin??5},r=Z.drawText(t,d).node().getBoundingClientRect().width;r>Q&&r>e.leftMargin-r&&(Q=r)}),o+=Math.max(20,k.length*20)})}a.setName(gt,"drawActorLegend");var j=a.getConfigAlias().journey,U=0,Dt=a.setName(function(t,e,l,o){let n,c=a.getConfigAlias(),y=c.journey.titleColor,u=c.journey.titleFontSize,v=c.journey.titleFontFamily,k=c.securityLevel;k==="sandbox"&&(n=R.select("#i"+e));let g=k==="sandbox"?R.select(n.nodes()[0].contentDocument.body):R.select("body");I.init();let i=g.select("#"+e);Z.initGraphics(i);let d=o.db.getTasks(),r=o.db.getDiagramTitle(),f=o.db.getActors();for(let H in B)delete B[H];let p=0;f.forEach(H=>{B[H]={color:j.actorColours[p%j.actorColours.length],position:p},p++}),gt(i),U=j.leftMargin+Q,I.insert(0,0,U,Object.keys(B).length*50),Bt(i,d,0);let s=I.getBounds();r&&i.append("text").text(r).attr("x",U).attr("font-size",u).attr("font-weight","bold").attr("y",25).attr("fill",y).attr("font-family",v);let F=s.stopy-s.starty+j.diagramMarginY*2,_=U+s.stopx+j.diagramMarginX*2;a.configureSvgSize(i,F,_,j.useMaxWidth),i.append("line").attr("x1",U).attr("y1",j.height*4).attr("x2",_-U-4).attr("y2",j.height*4).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");let q=!!r*70;i.attr("viewBox",`${s.startx} -25 ${_} ${F+q}`),i.attr("preserveAspectRatio","xMinYMin meet"),i.attr("height",F+q+25)},"draw"),I={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:a.setName(function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},"init"),updateVal:a.setName(function(t,e,l,o){t[e]===void 0?t[e]=l:t[e]=o(l,t[e])},"updateVal"),updateBounds:a.setName(function(t,e,l,o){let n=a.getConfigAlias().journey,c=this,y=0;function u(v){return a.setName(function(k){y++;let g=c.sequenceItems.length-y+1;c.updateVal(k,"starty",e-g*n.boxMargin,Math.min),c.updateVal(k,"stopy",o+g*n.boxMargin,Math.max),c.updateVal(I.data,"startx",t-g*n.boxMargin,Math.min),c.updateVal(I.data,"stopx",l+g*n.boxMargin,Math.max),v!=="activation"&&(c.updateVal(k,"startx",t-g*n.boxMargin,Math.min),c.updateVal(k,"stopx",l+g*n.boxMargin,Math.max),c.updateVal(I.data,"starty",e-g*n.boxMargin,Math.min),c.updateVal(I.data,"stopy",o+g*n.boxMargin,Math.max))},"updateItemBounds")}a.setName(u,"updateFn"),this.sequenceItems.forEach(u())},"updateBounds"),insert:a.setName(function(t,e,l,o){let n=Math.min(t,l),c=Math.max(t,l),y=Math.min(e,o),u=Math.max(e,o);this.updateVal(I.data,"startx",n,Math.min),this.updateVal(I.data,"starty",y,Math.min),this.updateVal(I.data,"stopx",c,Math.max),this.updateVal(I.data,"stopy",u,Math.max),this.updateBounds(n,y,c,u)},"insert"),bumpVerticalPos:a.setName(function(t){this.verticalPos=this.verticalPos+t,this.data.stopy=this.verticalPos},"bumpVerticalPos"),getVerticalPos:a.setName(function(){return this.verticalPos},"getVerticalPos"),getBounds:a.setName(function(){return this.data},"getBounds")},it=j.sectionFills,xt=j.sectionColours,Bt=a.setName(function(t,e,l){let o=a.getConfigAlias().journey,n="",c=l+(o.height*2+o.diagramMarginY),y=0,u="#CCC",v="black",k=0;for(let[g,i]of e.entries()){if(n!==i.section){u=it[y%it.length],k=y%it.length,v=xt[y%xt.length];let r=0,f=i.section;for(let s=g;s<e.length&&e[s].section==f;s++)r+=1;let p={x:g*o.taskMargin+g*o.width+U,y:50,text:i.section,fill:u,num:k,colour:v,taskCount:r};Z.drawSection(t,p,o),n=i.section,y++}let d=i.people.reduce((r,f)=>(B[f]&&(r[f]=B[f]),r),{});i.x=g*o.taskMargin+g*o.width+U,i.y=c,i.width=o.diagramMarginX,i.height=o.diagramMarginY,i.colour=v,i.fill=u,i.num=k,i.actors=d,Z.drawTask(t,i,o),I.insert(i.x,i.y,i.x+i.width+o.taskMargin,450)}},"drawTasks"),vt={setConf:Ft,draw:Dt},Ot={parser:S,db:dt,renderer:vt,styles:Mt,init:a.setName(t=>{vt.setConf(t.journey),dt.clear()},"init")};$.d(x,{diagram:function(){return Ot}})}});var ct=J((Yt,Et)=>{Et.exports=function(Y,x,$){var m=$("mermaid-config-utils"),z=$("url-sanitizer"),a=m.setName((C,h)=>{let b=C.append("rect");if(b.attr("x",h.x),b.attr("y",h.y),b.attr("fill",h.fill),b.attr("stroke",h.stroke),b.attr("width",h.width),b.attr("height",h.height),h.name&&b.attr("name",h.name),h.rx&&b.attr("rx",h.rx),h.ry&&b.attr("ry",h.ry),h.attrs!==void 0)for(let w in h.attrs)b.attr(w,h.attrs[w]);return h.class&&b.attr("class",h.class),b},"drawRect"),R=m.setName((C,h)=>{a(C,{x:h.startx,y:h.starty,width:h.stopx-h.startx,height:h.stopy-h.starty,fill:h.fill,stroke:h.stroke,class:"rect"}).lower()},"drawBackgroundRect"),S=m.setName((C,h)=>{let b=h.text.replace(m.lineBreakRegex," "),w=C.append("text");w.attr("x",h.x),w.attr("y",h.y),w.attr("class","legend"),w.style("text-anchor",h.anchor),h.class&&w.attr("class",h.class);let M=w.append("tspan");return M.attr("x",h.x+h.textMargin*2),M.text(b),w},"drawText"),A=m.setName((C,h,b,w)=>{let M=C.append("image");M.attr("x",h),M.attr("y",b);let G=z.sanitizeUrl(w);M.attr("xlink:href",G)},"drawImage"),V=m.setName((C,h,b,w)=>{let M=C.append("use");M.attr("x",h),M.attr("y",b);let G=z.sanitizeUrl(w);M.attr("xlink:href",`#${G}`)},"drawEmbeddedImage"),D=m.setName(()=>({x:0,y:0,width:100,height:100,fill:"#EDF2AE",stroke:"#666",anchor:"start",rx:0,ry:0}),"getNoteRect"),T=m.setName(()=>({x:0,y:0,width:100,height:100,"text-anchor":"start",style:"#666",textMargin:0,rx:0,ry:0,tspan:!0}),"getTextObj");$.d(x,{getTextObj:function(){return T},drawImage:function(){return A},drawRect:function(){return a},drawBackgroundRect:function(){return R},getNoteRect:function(){return D},drawEmbeddedImage:function(){return V},drawText:function(){return S}})}});var ht=J((Ht,St)=>{St.exports=function(Y,x,$){var m=$("mermaid-config-utils").setName(()=>`
  /* Font Awesome icon styling - consolidated */
  .label-icon {
    display: inline-block;
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
  }
  
  .node .label-icon path {
    fill: currentColor;
    stroke: revert;
    stroke-width: revert;
  }
`,"getIconStyles");$.d(x,{getIconStyles:function(){return m}})}});(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([["mermaid-journey-diagram",14080],{"url-validation-constants":st(),422908:st(),"url-sanitizer":lt(),568747:lt(),"mermaid-journey-diagram":ot(),709460:ot(),"mermaid-shape-drawers":ct(),88456:ct(),"mermaid-icon-styles-helper":ht(),988348:ht()},null]);})();
//# sourceMappingURL=http://127.0.0.1:11434/web_cache_260316012/source_map/mermaid-journey-diagram.js.bundle.js.map