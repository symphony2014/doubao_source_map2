(()=>{var st=(J,I)=>()=>(I||J((I={exports:{}}).exports,I),I.exports);var lt=st((Vt,Ft)=>{Ft.exports=function(J,I,F){var R=F("mermaid-shape-drawing-utils"),P=F("font-awesome-icon-styles-helper"),b=F("mermaid-config-utils_1"),n=F("logger-level-utils"),B=F("axis-and-zoom-utilities"),G=(function(){var t=n.setFunctionName(function(i,u,a,d){for(a=a||{},d=i.length;d--;a[i[d]]=u);return a},"o"),e=[6,8,10,11,12,14,16,17,18],l=[1,9],o=[1,10],r=[1,11],c=[1,12],y=[1,13],h=[1,14],g={trace:n.setFunctionName(function(){},"trace"),yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,taskName:18,taskData:19,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",18:"taskName",19:"taskData"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,2]],performAction:n.setFunctionName(function(i,u,a,d,p,s,E){var v=s.length-1;switch(p){case 1:return s[v-1];case 2:case 6:case 7:this.$=[];break;case 3:s[v-1].push(s[v]),this.$=s[v-1];break;case 4:case 5:this.$=s[v];break;case 8:d.setDiagramTitle(s[v].substr(6)),this.$=s[v].substr(6);break;case 9:this.$=s[v].trim(),d.setAccTitle(this.$);break;case 10:case 11:this.$=s[v].trim(),d.setAccDescription(this.$);break;case 12:d.addSection(s[v].substr(8)),this.$=s[v].substr(8);break;case 13:d.addTask(s[v-1],s[v]),this.$="task"}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:l,12:o,14:r,16:c,17:y,18:h},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:15,11:l,12:o,14:r,16:c,17:y,18:h},t(e,[2,5]),t(e,[2,6]),t(e,[2,8]),{13:[1,16]},{15:[1,17]},t(e,[2,11]),t(e,[2,12]),{19:[1,18]},t(e,[2,4]),t(e,[2,9]),t(e,[2,10]),t(e,[2,13])],defaultActions:{},parseError:n.setFunctionName(function(i,u){if(u.recoverable)this.trace(i);else{var a=Error(i);throw a.hash=u,a}},"parseError"),parse:n.setFunctionName(function(i){var u=this,a=[0],d=[],p=[null],s=[],E=this.table,v="",U=0,H=0,vt=0,Lt=s.slice.call(arguments,1),_=Object.create(this.lexer),W={yy:{}};for(var nt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,nt)&&(W.yy[nt]=this.yy[nt]);_.setInput(i,W.yy),W.yy.lexer=_,W.yy.parser=this,_.yylloc===void 0&&(_.yylloc={});var at=_.yylloc;s.push(at);var Ot=_.options&&_.options.ranges;function kt(){var S;return typeof(S=d.pop()||_.lex()||1)!="number"&&(S instanceof Array&&(S=(d=S).pop()),S=u.symbols_[S]||S),S}typeof W.yy.parseError=="function"?this.parseError=W.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,n.setFunctionName(function(S){a.length=a.length-S*2,p.length=p.length-S,s.length=s.length-S},"popStack"),n.setFunctionName(kt,"lex");for(var N,rt,Y,A,_t,tt,D,bt,et,X={};;){if(Y=a[a.length-1],this.defaultActions[Y]?A=this.defaultActions[Y]:(N==null&&(N=kt()),A=E[Y]&&E[Y][N]),A===void 0||!A.length||!A[0]){var wt="";et=[];for(tt in E[Y])this.terminals_[tt]&&tt>2&&et.push("'"+this.terminals_[tt]+"'");wt=_.showPosition?"Parse error on line "+(U+1)+`:
`+_.showPosition()+`
Expecting `+et.join(", ")+", got '"+(this.terminals_[N]||N)+"'":"Parse error on line "+(U+1)+": Unexpected "+(N==1?"end of input":"'"+(this.terminals_[N]||N)+"'"),this.parseError(wt,{text:_.match,token:this.terminals_[N]||N,line:_.yylineno,loc:at,expected:et})}if(A[0]instanceof Array&&A.length>1)throw Error("Parse Error: multiple actions possible at state: "+Y+", token: "+N);switch(A[0]){case 1:a.push(N),p.push(_.yytext),s.push(_.yylloc),a.push(A[1]),N=null,rt?(N=rt,rt=null):(H=_.yyleng,v=_.yytext,U=_.yylineno,at=_.yylloc,vt>0&&vt--);break;case 2:if(D=this.productions_[A[1]][1],X.$=p[p.length-D],X._$={first_line:s[s.length-(D||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(D||1)].first_column,last_column:s[s.length-1].last_column},Ot&&(X._$.range=[s[s.length-(D||1)].range[0],s[s.length-1].range[1]]),(_t=this.performAction.apply(X,[v,H,U,W.yy,A[1],p,s].concat(Lt)))!==void 0)return _t;D&&(a=a.slice(0,D*-1*2),p=p.slice(0,D*-1),s=s.slice(0,D*-1)),a.push(this.productions_[A[1]][0]),p.push(X.$),s.push(X._$),bt=E[a[a.length-2]][a[a.length-1]],a.push(bt);break;case 3:return!0}}return!0},"parse")},x={EOF:1,parseError:n.setFunctionName(function(i,u){if(this.yy.parser)this.yy.parser.parseError(i,u);else throw Error(i)},"parseError"),setInput:n.setFunctionName(function(i,u){return this.yy=u||this.yy||{},this._input=i,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:n.setFunctionName(function(){var i=this._input[0];return this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i,i.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},"input"),unput:n.setFunctionName(function(i){var u=i.length,a=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-u),this.offset-=u;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),a.length-1&&(this.yylineno-=a.length-1);var p=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===d.length?this.yylloc.first_column:0)+d[d.length-a.length].length-a[0].length:this.yylloc.first_column-u},this.options.ranges&&(this.yylloc.range=[p[0],p[0]+this.yyleng-u]),this.yyleng=this.yytext.length,this},"unput"),more:n.setFunctionName(function(){return this._more=!0,this},"more"),reject:n.setFunctionName(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:n.setFunctionName(function(i){this.unput(this.match.slice(i))},"less"),pastInput:n.setFunctionName(function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:n.setFunctionName(function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:n.setFunctionName(function(){var i=this.pastInput(),u=Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+u+"^"},"showPosition"),test_match:n.setFunctionName(function(i,u){var a,d,p;if(this.options.backtrack_lexer&&(p={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(p.yylloc.range=this.yylloc.range.slice(0))),(d=i[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],a=this.performAction.call(this,this.yy,this,u,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),a)return a;if(this._backtrack)for(var s in p)this[s]=p[s];return!1},"test_match"),next:n.setFunctionName(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var i,u,a,d,p=this._currentRules(),s=0;s<p.length;s++)if((a=this._input.match(this.rules[p[s]]))&&(!u||a[0].length>u[0].length)){if(u=a,d=s,this.options.backtrack_lexer){if((i=this.test_match(a,p[s]))!==!1)return i;if(!this._backtrack)return!1;u=!1;continue}if(!this.options.flex)break}return u?(i=this.test_match(u,p[d]))!==!1&&i:this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:n.setFunctionName(function(){var i=this.next();return i||this.lex()},"lex"),begin:n.setFunctionName(function(i){this.conditionStack.push(i)},"begin"),popState:n.setFunctionName(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:n.setFunctionName(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:n.setFunctionName(function(i){return(i=this.conditionStack.length-1-Math.abs(i||0))>=0?this.conditionStack[i]:"INITIAL"},"topState"),pushState:n.setFunctionName(function(i){this.begin(i)},"pushState"),stateStackSize:n.setFunctionName(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:n.setFunctionName(function(i,u,a,d){switch(a){case 0:case 1:case 3:case 4:break;case 2:return 10;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 18;case 16:return 19;case 17:return":";case 18:return 6;case 19:return"INVALID"}},"anonymous"),rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18,19],inclusive:!0}}};function m(){this.yy={}}return g.lexer=x,n.setFunctionName(m,"Parser"),m.prototype=g,g.Parser=m,new m})();G.parser=G;var L="",K=[],V=[],z=[],M=n.setFunctionName(function(){K.length=0,V.length=0,L="",z.length=0,b.clearCommonDb()},"clear"),f=n.setFunctionName(function(t){L=t,K.push(t)},"addSection"),k=n.setFunctionName(function(){return K},"getSections"),w=n.setFunctionName(function(){let t=ht(),e=0;for(;!t&&e<100;)t=ht(),e++;return V.push(...z),V},"getTasks"),$=n.setFunctionName(function(){let t=[];return V.forEach(e=>{e.people&&t.push(...e.people)}),[...new Set(t)].sort()},"updateActors"),Z=n.setFunctionName(function(t,e){let l=e.substr(1).split(":"),o=0,r=[];l.length===1?(o=Number(l[0]),r=[]):(o=Number(l[0]),r=l[1].split(","));let c=r.map(h=>h.trim()),y={section:L,type:L,people:c,task:t,score:o};z.push(y)},"addTask"),Tt=n.setFunctionName(function(t){let e={section:L,type:L,description:t,task:t,classes:[]};V.push(e)},"addTaskOrg"),ht=n.setFunctionName(function(){let t=n.setFunctionName(function(l){return z[l].processed},"compileTask"),e=!0;for(let[l,o]of z.entries())t(l),e=e&&o.processed;return e},"compileTasks"),At=n.setFunctionName(function(){return $()},"getActors"),ut={getConfig:n.setFunctionName(()=>b.getConfigAlias().journey,"getConfig"),clear:M,setDiagramTitle:b.setDiagramTitle,getDiagramTitle:b.getDiagramTitle,setAccTitle:b.setAccTitle,getAccTitle:b.getAccTitle,setAccDescription:b.setAccDescription,getAccDescription:b.getAccDescription,addSection:f,getSections:k,getTasks:w,addTask:Z,addTaskOrg:Tt,getActors:At},St=n.setFunctionName(t=>`.label {
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
  ${P.getIconStyles()}
`,"getStyles"),dt=n.setFunctionName(function(t,e){return R.drawRect(t,e)},"drawRect"),Mt=n.setFunctionName(function(t,e){let l=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),o=t.append("g");function r(h){let g=B.Nb1().startAngle(Math.PI/2).endAngle(Math.PI/2*3).innerRadius(7.5).outerRadius(6.8181818181818175);h.append("path").attr("class","mouth").attr("d",g).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}function c(h){let g=B.Nb1().startAngle(Math.PI*3/2).endAngle(Math.PI/2*5).innerRadius(7.5).outerRadius(6.8181818181818175);h.append("path").attr("class","mouth").attr("d",g).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}function y(h){h.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return o.append("circle").attr("cx",e.cx-5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),o.append("circle").attr("cx",e.cx+5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),n.setFunctionName(r,"smile"),n.setFunctionName(c,"sad"),n.setFunctionName(y,"ambivalent"),e.score>3?r(o):e.score<3?c(o):y(o),l},"drawFace"),ft=n.setFunctionName(function(t,e){let l=t.append("circle");return l.attr("cx",e.cx),l.attr("cy",e.cy),l.attr("class","actor-"+e.pos),l.attr("fill",e.fill),l.attr("stroke",e.stroke),l.attr("r",e.r),l.class!==void 0&&l.attr("class",l.class),e.title!==void 0&&l.append("title").text(e.title),l},"drawCircle"),Ct=n.setFunctionName(function(t,e){return R.drawText(t,e)},"drawText"),Et=n.setFunctionName(function(t,e,l){let o=t.append("g"),r=R.getNoteRect();r.x=e.x,r.y=e.y,r.fill=e.fill,r.width=l.width*e.taskCount+l.diagramMarginX*(e.taskCount-1),r.height=l.height,r.class="journey-section section-type-"+e.num,r.rx=3,r.ry=3,dt(o,r),pt(l)(e.text,o,r.x,r.y,r.width,r.height,{class:"journey-section section-type-"+e.num},l,e.colour)},"drawSection"),yt=-1,It=n.setFunctionName(function(t,e,l){let o=e.x+l.width/2,r=t.append("g");yt++,r.append("line").attr("id","task"+yt).attr("x1",o).attr("y1",e.y).attr("x2",o).attr("y2",450).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),Mt(r,{cx:o,cy:300+(5-e.score)*30,score:e.score});let c=R.getNoteRect();c.x=e.x,c.y=e.y,c.fill=e.fill,c.width=l.width,c.height=l.height,c.class="task task-type-"+e.num,c.rx=3,c.ry=3,dt(r,c);let y=e.x+14;e.people.forEach(h=>{let g=e.actors[h].color;ft(r,{cx:y,cy:e.y,r:7,fill:g,stroke:"#000",title:h,pos:e.actors[h].position}),y+=10}),pt(l)(e.task,r,c.x,c.y,c.width,c.height,{class:"task"},l,e.colour)},"drawTask"),pt=(function(){function t(r,c,y,h,g,x,m,i){o(c.append("text").attr("x",y+g/2).attr("y",h+x/2+5).style("font-color",i).style("text-anchor","middle").text(r),m)}function e(r,c,y,h,g,x,m,i,u){let{taskFontSize:a,taskFontFamily:d}=i,p=r.split(/<br\s*\/?>/gi);for(let s=0;s<p.length;s++){let E=s*a-a*(p.length-1)/2,v=c.append("text").attr("x",y+g/2).attr("y",h).attr("fill",u).style("text-anchor","middle").style("font-size",a).style("font-family",d);v.append("tspan").attr("x",y+g/2).attr("dy",E).text(p[s]),v.attr("y",h+x/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),o(v,m)}}function l(r,c,y,h,g,x,m,i){let u=c.append("switch"),a=u.append("foreignObject").attr("x",y).attr("y",h).attr("width",g).attr("height",x).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");a.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(r),e(r,u,y,h,g,x,m,i),o(a,m)}function o(r,c){for(let y in c)y in c&&r.attr(y,c[y])}return n.setFunctionName(t,"byText"),n.setFunctionName(e,"byTspan"),n.setFunctionName(l,"byFo"),n.setFunctionName(o,"_setTextAttrs"),function(r){return r.textPlacement==="fo"?l:r.textPlacement==="old"?t:e}})(),q={drawCircle:ft,drawSection:Et,drawText:Ct,drawTask:It,initGraphics:n.setFunctionName(function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},"initGraphics")},Pt=n.setFunctionName(function(t){Object.keys(t).forEach(function(e){C[e]=t[e]})},"setConf"),j={},Q=0;function mt(t){let e=b.getConfigAlias().journey,l=e.maxLabelWidth;Q=0;let o=60;Object.keys(j).forEach(r=>{let c=j[r].color,y={cx:20,cy:o,r:7,fill:c,stroke:"#000",pos:j[r].position};q.drawCircle(t,y);let h=t.append("text").attr("visibility","hidden").text(r),g=h.node().getBoundingClientRect().width;h.remove();let x=[];if(g<=l)x=[r];else{let m=r.split(" "),i="";h=t.append("text").attr("visibility","hidden"),m.forEach(u=>{let a=i?`${i} ${u}`:u;if(h.text(a),h.node().getBoundingClientRect().width>l){if(i&&x.push(i),i=u,h.text(u),h.node().getBoundingClientRect().width>l){let d="";for(let p of u)d+=p,h.text(d+"-"),h.node().getBoundingClientRect().width>l&&(x.push(d.slice(0,-1)+"-"),d=p);i=d}}else i=a}),i&&x.push(i),h.remove()}x.forEach((m,i)=>{let u={x:40,y:o+7+i*20,fill:"#666",text:m,textMargin:e.boxTextMargin??5},a=q.drawText(t,u).node().getBoundingClientRect().width;a>Q&&a>e.leftMargin-a&&(Q=a)}),o+=Math.max(20,x.length*20)})}n.setFunctionName(mt,"drawActorLegend");var C=b.getConfigAlias().journey,O=0,jt=n.setFunctionName(function(t,e,l,o){let r,c=b.getConfigAlias(),y=c.journey.titleColor,h=c.journey.titleFontSize,g=c.journey.titleFontFamily,x=c.securityLevel;x==="sandbox"&&(r=B.select("#i"+e));let m=x==="sandbox"?B.select(r.nodes()[0].contentDocument.body):B.select("body");T.init();let i=m.select("#"+e);q.initGraphics(i);let u=o.db.getTasks(),a=o.db.getDiagramTitle(),d=o.db.getActors();for(let H in j)delete j[H];let p=0;d.forEach(H=>{j[H]={color:C.actorColours[p%C.actorColours.length],position:p},p++}),mt(i),O=C.leftMargin+Q,T.insert(0,0,O,Object.keys(j).length*50),Dt(i,u,0);let s=T.getBounds();a&&i.append("text").text(a).attr("x",O).attr("font-size",h).attr("font-weight","bold").attr("y",25).attr("fill",y).attr("font-family",g);let E=s.stopy-s.starty+C.diagramMarginY*2,v=O+s.stopx+C.diagramMarginX*2;b.configureSvgSize(i,E,v,C.useMaxWidth),i.append("line").attr("x1",O).attr("y1",C.height*4).attr("x2",v-O-4).attr("y2",C.height*4).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");let U=!!a*70;i.attr("viewBox",`${s.startx} -25 ${v} ${E+U}`),i.attr("preserveAspectRatio","xMinYMin meet"),i.attr("height",E+U+25)},"draw"),T={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:n.setFunctionName(function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},"init"),updateVal:n.setFunctionName(function(t,e,l,o){t[e]===void 0?t[e]=l:t[e]=o(l,t[e])},"updateVal"),updateBounds:n.setFunctionName(function(t,e,l,o){let r=b.getConfigAlias().journey,c=this,y=0;function h(g){return n.setFunctionName(function(x){y++;let m=c.sequenceItems.length-y+1;c.updateVal(x,"starty",e-m*r.boxMargin,Math.min),c.updateVal(x,"stopy",o+m*r.boxMargin,Math.max),c.updateVal(T.data,"startx",t-m*r.boxMargin,Math.min),c.updateVal(T.data,"stopx",l+m*r.boxMargin,Math.max),g!=="activation"&&(c.updateVal(x,"startx",t-m*r.boxMargin,Math.min),c.updateVal(x,"stopx",l+m*r.boxMargin,Math.max),c.updateVal(T.data,"starty",e-m*r.boxMargin,Math.min),c.updateVal(T.data,"stopy",o+m*r.boxMargin,Math.max))},"updateItemBounds")}n.setFunctionName(h,"updateFn"),this.sequenceItems.forEach(h())},"updateBounds"),insert:n.setFunctionName(function(t,e,l,o){let r=Math.min(t,l),c=Math.max(t,l),y=Math.min(e,o),h=Math.max(e,o);this.updateVal(T.data,"startx",r,Math.min),this.updateVal(T.data,"starty",y,Math.min),this.updateVal(T.data,"stopx",c,Math.max),this.updateVal(T.data,"stopy",h,Math.max),this.updateBounds(r,y,c,h)},"insert"),bumpVerticalPos:n.setFunctionName(function(t){this.verticalPos=this.verticalPos+t,this.data.stopy=this.verticalPos},"bumpVerticalPos"),getVerticalPos:n.setFunctionName(function(){return this.verticalPos},"getVerticalPos"),getBounds:n.setFunctionName(function(){return this.data},"getBounds")},it=C.sectionFills,gt=C.sectionColours,Dt=n.setFunctionName(function(t,e,l){let o=b.getConfigAlias().journey,r="",c=l+(o.height*2+o.diagramMarginY),y=0,h="#CCC",g="black",x=0;for(let[m,i]of e.entries()){if(r!==i.section){h=it[y%it.length],x=y%it.length,g=gt[y%gt.length];let a=0,d=i.section;for(let s=m;s<e.length&&e[s].section==d;s++)a+=1;let p={x:m*o.taskMargin+m*o.width+O,y:50,text:i.section,fill:h,num:x,colour:g,taskCount:a};q.drawSection(t,p,o),r=i.section,y++}let u=i.people.reduce((a,d)=>(j[d]&&(a[d]=j[d]),a),{});i.x=m*o.taskMargin+m*o.width+O,i.y=c,i.width=o.diagramMarginX,i.height=o.diagramMarginY,i.colour=g,i.fill=h,i.num=x,i.actors=u,q.drawTask(t,i,o),T.insert(i.x,i.y,i.x+i.width+o.taskMargin,450)}},"drawTasks"),xt={setConf:Pt,draw:jt},Rt={parser:G,db:ut,renderer:xt,styles:St,init:n.setFunctionName(t=>{xt.setConf(t.journey),ut.clear()},"init")};F.d(I,{diagram:function(){return Rt}})}});var ot=st((zt,Nt)=>{Nt.exports=function(J,I,F){var R=F("mermaid-config-utils_1"),P=F("logger-level-utils"),b=F("url-sanitizer"),n=P.setFunctionName((M,f)=>{let k=M.append("rect");if(k.attr("x",f.x),k.attr("y",f.y),k.attr("fill",f.fill),k.attr("stroke",f.stroke),k.attr("width",f.width),k.attr("height",f.height),f.name&&k.attr("name",f.name),f.rx&&k.attr("rx",f.rx),f.ry&&k.attr("ry",f.ry),f.attrs!==void 0)for(let w in f.attrs)k.attr(w,f.attrs[w]);return f.class&&k.attr("class",f.class),k},"drawRect"),B=P.setFunctionName((M,f)=>{n(M,{x:f.startx,y:f.starty,width:f.stopx-f.startx,height:f.stopy-f.starty,fill:f.fill,stroke:f.stroke,class:"rect"}).lower()},"drawBackgroundRect"),G=P.setFunctionName((M,f)=>{let k=f.text.replace(R.lineBreakRegex," "),w=M.append("text");w.attr("x",f.x),w.attr("y",f.y),w.attr("class","legend"),w.style("text-anchor",f.anchor),f.class&&w.attr("class",f.class);let $=w.append("tspan");return $.attr("x",f.x+f.textMargin*2),$.text(k),w},"drawText"),L=P.setFunctionName((M,f,k,w)=>{let $=M.append("image");$.attr("x",f),$.attr("y",k);let Z=b.sanitizeUrl(w);$.attr("xlink:href",Z)},"drawImage"),K=P.setFunctionName((M,f,k,w)=>{let $=M.append("use");$.attr("x",f),$.attr("y",k);let Z=b.sanitizeUrl(w);$.attr("xlink:href",`#${Z}`)},"drawEmbeddedImage"),V=P.setFunctionName(()=>({x:0,y:0,width:100,height:100,fill:"#EDF2AE",stroke:"#666",anchor:"start",rx:0,ry:0}),"getNoteRect"),z=P.setFunctionName(()=>({x:0,y:0,width:100,height:100,"text-anchor":"start",style:"#666",textMargin:0,rx:0,ry:0,tspan:!0}),"getTextObj");F.d(I,{getTextObj:function(){return z},drawImage:function(){return L},drawRect:function(){return n},drawBackgroundRect:function(){return B},getNoteRect:function(){return V},drawEmbeddedImage:function(){return K},drawText:function(){return G}})}});var ct=st((Ut,$t)=>{$t.exports=function(J,I,F){var R=F("logger-level-utils").setFunctionName(()=>`
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
`,"getIconStyles");F.d(I,{getIconStyles:function(){return R}})}});(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([["user-journey-diagram",16090],{"mermaid-journey-diagram_1":lt(),47544:lt(),"mermaid-shape-drawing-utils":ot(),621602:ot(),"font-awesome-icon-styles-helper":ct(),878353:ct()},null]);})();
//# sourceMappingURL=http://127.0.0.1:11434/web_cache_260316012/source_map/user-journey-diagram.js.bundle.js.map