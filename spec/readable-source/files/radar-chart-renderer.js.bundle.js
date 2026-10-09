(()=>{var F=($,d)=>()=>(d||$((d={exports:{}}).exports,d),d.exports);var k=F((de,H)=>{H.exports=function($,d,l){var g=l("select-svg-element"),p=l("populate-common-db"),s=l("mermaid-diagram-utils"),c=l("mermaid-config-utils_1"),i=l("logger-level-utils"),f=l("mermaid-diagram-parser-factory"),v={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},C={axes:[],curves:[],options:v},x=structuredClone(C),T=c.defaultConfig.radar,L=i.setFunctionName(()=>s.cleanAndMerge({...T,...c.getConfig().radar}),"getConfig"),w=i.setFunctionName(()=>x.axes,"getAxes"),O=i.setFunctionName(()=>x.curves,"getCurves"),S=i.setFunctionName(()=>x.options,"getOptions"),q=i.setFunctionName(a=>{x.axes=a.map(e=>({name:e.name,label:e.label??e.name}))},"setAxes"),ee=i.setFunctionName(a=>{x.curves=a.map(e=>({name:e.name,label:e.label??e.name,entries:te(e.entries)}))},"setCurves"),te=i.setFunctionName(a=>{if(a[0].axis==null)return a.map(t=>t.value);let e=w();if(e.length===0)throw Error("Axes must be populated before curves for reference entries");return e.map(t=>{let r=a.find(n=>n.axis?.$refText===t.name);if(r===void 0)throw Error("Missing entry for axis "+t.label);return r.value})},"computeCurveEntries"),N={getAxes:w,getCurves:O,getOptions:S,setAxes:q,setCurves:ee,setOptions:i.setFunctionName(a=>{let e=a.reduce((t,r)=>(t[r.name]=r,t),{});x.options={showLegend:e.showLegend?.value??v.showLegend,ticks:e.ticks?.value??v.ticks,max:e.max?.value??v.max,min:e.min?.value??v.min,graticule:e.graticule?.value??v.graticule}},"setOptions"),getConfig:L,clear:i.setFunctionName(()=>{c.clearCommonDb(),x=structuredClone(C)},"clear"),setAccTitle:c.setAccTitle,getAccTitle:c.getAccTitle,setDiagramTitle:c.setDiagramTitle,getDiagramTitle:c.getDiagramTitle,getAccDescription:c.getAccDescription,setAccDescription:c.setAccDescription},ae=i.setFunctionName(a=>{p.populateCommonDb(a,N);let{axes:e,curves:t,options:r}=a;N.setAxes(e),N.setCurves(t),N.setOptions(r)},"populate"),re={parse:i.setFunctionName(async a=>{let e=await f.parseDiagram("radar",a);i.logger.debug(e),ae(e)},"parse")},ie=i.setFunctionName((a,e,t,r)=>{let n=r.db,u=n.getAxes(),m=n.getCurves(),o=n.getOptions(),h=n.getConfig(),b=n.getDiagramTitle(),y=ne(g.selectSvgElement(e),h),M=o.max??Math.max(...m.map(_=>Math.max(..._.entries))),A=o.min,D=Math.min(h.width,h.height)/2;le(y,u,D,o.ticks,o.graticule),oe(y,u,D,h),z(y,u,m,A,M,o.graticule,h),V(y,m,o.showLegend,h),y.append("text").attr("class","radarTitle").text(b).attr("x",0).attr("y",-h.height/2-h.marginTop)},"draw"),ne=i.setFunctionName((a,e)=>{let t=e.width+e.marginLeft+e.marginRight,r=e.height+e.marginTop+e.marginBottom,n={x:e.marginLeft+e.width/2,y:e.marginTop+e.height/2};return a.attr("viewbox",`0 0 ${t} ${r}`).attr("width",t).attr("height",r),a.append("g").attr("transform",`translate(${n.x}, ${n.y})`)},"drawFrame"),le=i.setFunctionName((a,e,t,r,n)=>{if(n==="circle")for(let u=0;u<r;u++){let m=t*(u+1)/r;a.append("circle").attr("r",m).attr("class","radarGraticule")}else if(n==="polygon"){let u=e.length;for(let m=0;m<r;m++){let o=t*(m+1)/r,h=e.map((b,y)=>{let M=y*2*Math.PI/u-Math.PI/2,A=o*Math.cos(M),D=o*Math.sin(M);return`${A},${D}`}).join(" ");a.append("polygon").attr("points",h).attr("class","radarGraticule")}}},"drawGraticule"),oe=i.setFunctionName((a,e,t,r)=>{let n=e.length;for(let u=0;u<n;u++){let m=e[u].label,o=u*2*Math.PI/n-Math.PI/2;a.append("line").attr("x1",0).attr("y1",0).attr("x2",t*r.axisScaleFactor*Math.cos(o)).attr("y2",t*r.axisScaleFactor*Math.sin(o)).attr("class","radarAxisLine"),a.append("text").text(m).attr("x",t*r.axisLabelFactor*Math.cos(o)).attr("y",t*r.axisLabelFactor*Math.sin(o)).attr("class","radarAxisLabel")}},"drawAxes");function z(a,e,t,r,n,u,m){let o=e.length,h=Math.min(m.width,m.height)/2;t.forEach((b,y)=>{if(b.entries.length!==o)return;let M=b.entries.map((A,D)=>{let _=Math.PI*2*D/o-Math.PI/2,G=W(A,r,n,h);return{x:G*Math.cos(_),y:G*Math.sin(_)}});u==="circle"?a.append("path").attr("d",B(M,m.curveTension)).attr("class",`radarCurve-${y}`):u==="polygon"&&a.append("polygon").attr("points",M.map(A=>`${A.x},${A.y}`).join(" ")).attr("class",`radarCurve-${y}`)})}function W(a,e,t,r){return r*(Math.min(Math.max(a,e),t)-e)/(t-e)}function B(a,e){let t=a.length,r=`M${a[0].x},${a[0].y}`;for(let n=0;n<t;n++){let u=a[(n-1+t)%t],m=a[n],o=a[(n+1)%t],h=a[(n+2)%t],b={x:m.x+(o.x-u.x)*e,y:m.y+(o.y-u.y)*e},y={x:o.x-(h.x-m.x)*e,y:o.y-(h.y-m.y)*e};r+=` C${b.x},${b.y} ${y.x},${y.y} ${o.x},${o.y}`}return`${r} Z`}function V(a,e,t,r){if(!t)return;let n=(r.width/2+r.marginRight)*3/4,u=-((r.height/2+r.marginTop)*3)/4;e.forEach((m,o)=>{let h=a.append("g").attr("transform",`translate(${n}, ${u+o*20})`);h.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${o}`),h.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(m.label)})}i.setFunctionName(z,"drawCurves"),i.setFunctionName(W,"relativeRadius"),i.setFunctionName(B,"closedRoundCurve"),i.setFunctionName(V,"drawLegend");var ce=i.setFunctionName((a,e)=>{let t="";for(let r=0;r<a.THEME_COLOR_LIMIT;r++){let n=a[`cScale${r}`];t+=`
		.radarCurve-${r} {
			color: ${n};
			fill: ${n};
			fill-opacity: ${e.curveOpacity};
			stroke: ${n};
			stroke-width: ${e.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${n};
			fill-opacity: ${e.curveOpacity};
			stroke: ${n};
		}
		`}return t},"genIndexStyles"),se=i.setFunctionName(a=>{let e=c.getDefaultThemeVars(),t=c.getConfig(),r=s.cleanAndMerge(e,t.themeVariables),n=s.cleanAndMerge(r.radar,a);return{themeVariables:r,radarOptions:n}},"buildRadarStyleOptions"),ue={parser:re,db:N,renderer:{draw:ie},styles:i.setFunctionName(function({radar:a}={}){let{themeVariables:e,radarOptions:t}=se(a);return`
	.radarTitle {
		font-size: ${e.fontSize};
		color: ${e.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${t.axisColor};
		stroke-width: ${t.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${t.axisLabelFontSize}px;
		color: ${t.axisColor};
	}
	.radarGraticule {
		fill: ${t.graticuleColor};
		fill-opacity: ${t.graticuleOpacity};
		stroke: ${t.graticuleColor};
		stroke-width: ${t.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${t.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${ce(e,t)}
	`},"styles")};l.d(d,{diagram:function(){return ue}})}});var E=F((ge,K)=>{K.exports=function($,d,l){var g=l("safe-property-set"),p=l("collection-transform-factory"),s=Object.prototype.hasOwnProperty,c=p.collectionTransform(function(i,f,v){s.call(i,v)?i[v].push(f):g.safeSetProperty(i,v,[f])});d.groupValuesToArray=c}});var U=F((pe,Z)=>{Z.exports=function($,d,l){var g=l("array-map-util"),p=l("object-matcher-factory"),s=l("collection-map-util"),c=l("array-is-array-util");d.mapWithMatcher=function(i,f){return(c.isArray(i)?g.arrayMap:s.mapCollection)(i,p.createMatcher(f,3))}}});var I=F((he,J)=>{J.exports=function($,d,l){d.arrayReduce=function(g,p,s,c){var i=-1,f=g==null?0:g.length;for(c&&f&&(s=g[++i]);++i<f;)s=p(s,g[i],i,g);return s}}});var j=F((fe,Q)=>{Q.exports=function($,d,l){var g=l("array-flatten-util_2"),p=l("collection-map-matcher");d.mapAndFlatten=function(s,c){return g.flattenArray(p.mapWithMatcher(s,c),1)}}});var P=F((ve,X)=>{X.exports=function($,d,l){function g(p,s){var c,i,f;p.accDescr&&(c=s.setAccDescription)!==null&&c!==void 0&&c.call(s,p.accDescr),p.accTitle&&(i=s.setAccTitle)!==null&&i!==void 0&&i.call(s,p.accTitle),p.title&&(f=s.setDiagramTitle)!==null&&f!==void 0&&f.call(s,p.title)}l("logger-level-utils").setFunctionName(g,"populateCommonDb"),l.d(d,{populateCommonDb:function(){return g}})}});var R=F((xe,Y)=>{Y.exports=function($,d,l){var g=l("array-reduce-util"),p=l("object-foreach-util_1_1"),s=l("object-matcher-factory");function c(v,C,x,T,L){return L(v,function(w,O,S){x=T?(T=!1,w):C(x,w,O,S)}),x}var i=l("array-is-array-util");function f(v,C,x){var T=i.isArray(v)?g.arrayReduce:c,L=arguments.length<3;return T(v,s.createMatcher(C,4),x,L,p.objectForEach)}l.d(d,{genericReduce:function(){return f}})}});(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([["radar-chart-renderer",63809],{"mermaid-radar-diagram_1":k(),163463:k(),"collection-array-grouper":E(),177883:E(),"collection-map-matcher":U(),300366:U(),"array-reduce-util":I(),309228:I(),"collection-map-flatten":j(),378218:j(),"populate-common-db":P(),521289:P(),"generic-reduce-util":R(),900464:R()},null]);})();
//# sourceMappingURL=http://127.0.0.1:11434/web_cache_260316012/source_map/radar-chart-renderer.js.bundle.js.map