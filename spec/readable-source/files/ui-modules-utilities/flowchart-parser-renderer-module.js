// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'i' to 'mermaidIconStylesHelper'
// - Resolved require(988348) to 'mermaid-icon-styles-helper'
// - Renamed variable 'n' to 'yamlSchemaUtils'
// - Resolved require(165530) to 'yaml-schema-utils'
// - Renamed variable 'l' to 'mermaidDiagramElementGetter'
// - Resolved require(553740) to 'mermaid-diagram-element-getter'
// - Renamed variable 'o' to 'svgViewportSetup'
// - Resolved require(509839) to 'svg-viewport-setup'
// - Renamed variable 'u' to 'mermaidLayoutRegistry'
// - Resolved require(103329) to 'mermaid-layout-registry'
// - Resolved require(836477) to 'mermaid-edge-rendering-utils'
// - Resolved require(744654) to 'line-arrow-offset-utils'
// - Renamed variable 'c' to 'mermaidNodeShapesRenderer_1'
// - Resolved require(608361) to 'mermaid-node-shapes-renderer_1'
// - Resolved require(152138) to 'mermaid-subgraph-title-margin-utils'
// - Resolved require(587619) to 'mermaid-node-style-utils'
// - Resolved require(5699) to 'mermaid-text-icon-utils'
// - Renamed variable 'd' to 'mermaidTextLayoutUtils'
// - Resolved require(997032) to 'mermaid-text-layout-utils'
// - Renamed variable 'h' to 'mermaidConfigUtils'
// - Resolved require(101498) to 'mermaid-config-utils'
// - Renamed variable 'p' to 'axisAndZoomUtilities'
// - Resolved require(381804) to 'axis-and-zoom-utilities'
// - Renamed variable 'g' to 'colorChannelExtractor'
// - Resolved require(165290) to 'color-channel-extractor'
// - Renamed variable 'f' to 'colorAlphaSetter'
// - Resolved require(882094) to 'color-alpha-setter'
// - Updated imported property 'SY' to 'textUtils' (module 101498)
// - Updated imported property 'nV' to 'getConfigAlias' (module 101498)
// - Updated imported property 'cM' to 'logger' (module 101498)
// - Updated imported property 'ZH' to 'clearAccData' (module 101498)
// - Updated imported property 'eW' to 'setName' (module 101498)
// - Updated imported property 'Fy' to 'frozenConfig' (module 101498)
// - Updated imported property 'GN' to 'setAccTitle' (module 101498)
// - Updated imported property 'U$' to 'setAccDescription' (module 101498)
// - Updated imported property 'g2' to 'setDiagramTitle' (module 101498)
// - Updated imported property 'eu' to 'getAccTitle' (module 101498)
// - Updated imported property 'Mx' to 'getAccDescription' (module 101498)
// - Updated imported property 'Kr' to 'getDiagramTitle' (module 101498)
// - Updated imported property 'Y4' to 'setConfig' (module 101498)
// - Updated imported property 'z' to 'load' (module 165530)
// - Updated imported property 'A' to 'Schema' (module 165530)
// - Updated imported property 'dW' to 'isValidShape' (module 608361)
// - Updated imported property 'Ln' to 'getEdgeId' (module 997032)
// - Updated imported property 'w8' to 'textLayoutUtils' (module 997032)
// - Updated imported property 'Ys' to 'select' (module 381804)
// - Updated imported property 'q' to 'getDiagramElement' (module 553740)
// - Updated imported property '_b' to 'getRegisteredLayoutAlgorithm' (module 103329)
// - Updated imported property 'sY' to 'render' (module 103329)
// - Updated imported property 'j' to 'setupSvgViewport' (module 509839)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'Z' to 'extractColorChannel' (module 165290)
// - Updated imported property 'Z' to 'setColorWithAlpha' (module 882094)
// - Updated imported property 'G' to 'getIconStyles' (module 988348)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 41045.8c41cec3.js
         * chunkId: 41045
         * moduleId: 101112
         */
module.exports = function (module, exports, require) {
  var a;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var mermaidIconStylesHelper = require("mermaid-icon-styles-helper") /*id: 988348*/;
  var yamlSchemaUtils = require("yaml-schema-utils") /*id: 165530*/;
  var mermaidDiagramElementGetter = require("mermaid-diagram-element-getter") /*id: 553740*/;
  var svgViewportSetup = require("svg-viewport-setup") /*id: 509839*/;
  var mermaidLayoutRegistry = require("mermaid-layout-registry") /*id: 103329*/;
  require("mermaid-edge-rendering-utils") /*id: 836477*/;
  require("line-arrow-offset-utils") /*id: 744654*/;
  var mermaidNodeShapesRenderer_1 = require("mermaid-node-shapes-renderer_1") /*id: 608361*/;
  require("mermaid-subgraph-title-margin-utils") /*id: 152138*/;
  require("mermaid-node-style-utils") /*id: 587619*/;
  require("mermaid-text-icon-utils") /*id: 5699*/;
  var mermaidTextLayoutUtils = require("mermaid-text-layout-utils") /*id: 997032*/;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var colorChannelExtractor = require("color-channel-extractor") /*id: 165290*/;
  var colorAlphaSetter = require("color-alpha-setter") /*id: 882094*/;
  a = class {
    sanitizeText(t) {
      return mermaidConfigUtils.textUtils.sanitizeText(t, this.config);
    }
    lookUpDomId(t) {
      for (let e of this.vertices.values()) {
        if (e.id === t) {
          return e.domId;
        }
      }
      return t;
    }
    addVertex(t, e, r, a, s, i) {
      let l;
      let o;
      let u = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
      let d = arguments.length > 7 ? arguments[7] : undefined;
      if (!t || t.trim().length === 0) {
        return;
      }
      if (d !== undefined) {
        let t;
        t = d.includes("\n") ? d + "\n" : "{\n" + d + "\n}";
        l = yamlSchemaUtils.load(t, {
          schema: yamlSchemaUtils.Schema
        });
      }
      let p = this.edges.find(e => e.id === t);
      if (p) {
        let t = l;
        if ((t == null ? undefined : t.animate) !== undefined) {
          p.animate = t.animate;
        }
        if ((t == null ? undefined : t.animation) !== undefined) {
          p.animation = t.animation;
        }
        if ((t == null ? undefined : t.curve) !== undefined) {
          p.interpolate = t.curve;
        }
        return;
      }
      let g = this.vertices.get(t);
      if (g === undefined) {
        g = {
          id: t,
          labelType: "text",
          domId: "flowchart-" + t + "-" + this.vertexCounter,
          styles: [],
          classes: []
        };
        this.vertices.set(t, g);
      }
      this.vertexCounter++;
      if (e !== undefined) {
        this.config = mermaidConfigUtils.getConfigAlias();
        o = this.sanitizeText(e.text.trim());
        g.labelType = e.type;
        if (o.startsWith("\"") && o.endsWith("\"")) {
          o = o.substring(1, o.length - 1);
        }
        g.text = o;
      } else if (g.text === undefined) {
        g.text = t;
      }
      if (r !== undefined) {
        g.type = r;
      }
      if (a != null) {
        a.forEach(t => {
          g.styles.push(t);
        });
      }
      if (s != null) {
        s.forEach(t => {
          g.classes.push(t);
        });
      }
      if (i !== undefined) {
        g.dir = i;
      }
      if (g.props === undefined) {
        g.props = u;
      } else if (u !== undefined) {
        Object.assign(g.props, u);
      }
      if (l !== undefined) {
        var f;
        var y;
        if (l.shape) {
          if (l.shape !== l.shape.toLowerCase() || l.shape.includes("_")) {
            throw Error(`No such shape: ${l.shape}. Shape names should be lowercase.`);
          }
          if (!mermaidNodeShapesRenderer_1.isValidShape(l.shape)) {
            throw Error(`No such shape: ${l.shape}.`);
          }
          g.type = l == null ? undefined : l.shape;
        }
        if (l == null ? undefined : l.label) {
          g.text = l == null ? undefined : l.label;
        }
        if (l == null ? undefined : l.icon) {
          g.icon = l == null ? undefined : l.icon;
          if (!((f = l.label) === null || f === undefined ? undefined : f.trim()) && g.text === t) {
            g.text = "";
          }
        }
        if (l == null ? undefined : l.form) {
          g.form = l == null ? undefined : l.form;
        }
        if (l == null ? undefined : l.pos) {
          g.pos = l == null ? undefined : l.pos;
        }
        if (l == null ? undefined : l.img) {
          g.img = l == null ? undefined : l.img;
          if (!((y = l.label) === null || y === undefined ? undefined : y.trim()) && g.text === t) {
            g.text = "";
          }
        }
        if (l == null ? undefined : l.constraint) {
          g.constraint = l.constraint;
        }
        if (l.w) {
          g.assetWidth = Number(l.w);
        }
        if (l.h) {
          g.assetHeight = Number(l.h);
        }
      }
    }
    addSingleLink(t, e, r, a) {
      let i = {
        start: t,
        end: e,
        type: undefined,
        text: "",
        labelType: "text",
        classes: [],
        isUserDefinedId: false,
        interpolate: this.edges.defaultInterpolate
      };
      mermaidConfigUtils.logger.info("abc78 Got edge...", i);
      let n = r.text;
      if (n !== undefined) {
        i.text = this.sanitizeText(n.text.trim());
        if (i.text.startsWith("\"") && i.text.endsWith("\"")) {
          i.text = i.text.substring(1, i.text.length - 1);
        }
        i.labelType = n.type;
      }
      if (r !== undefined) {
        i.type = r.type;
        i.stroke = r.stroke;
        i.length = r.length > 10 ? 10 : r.length;
      }
      if (a && !this.edges.some(t => t.id === a)) {
        i.id = a;
        i.isUserDefinedId = true;
      } else {
        let t = this.edges.filter(t => t.start === i.start && t.end === i.end);
        if (t.length === 0) {
          i.id = mermaidTextLayoutUtils.getEdgeId(i.start, i.end, {
            counter: 0,
            prefix: "L"
          });
        } else {
          i.id = mermaidTextLayoutUtils.getEdgeId(i.start, i.end, {
            counter: t.length + 1,
            prefix: "L"
          });
        }
      }
      if (this.edges.length < (this.config.maxEdges ?? 500)) {
        mermaidConfigUtils.logger.info("Pushing edge...");
        this.edges.push(i);
      } else {
        throw Error(`Edge limit exceeded. ${this.edges.length} edges found, but the limit is ${this.config.maxEdges}.

Initialize mermaid with maxEdges set to a higher number to allow more edges.
You cannot set this config via configuration inside the diagram as it is a secure config.
You have to call mermaid.initialize.`);
      }
    }
    isLinkData(t) {
      return t !== null && typeof t == "object" && "id" in t && typeof t.id == "string";
    }
    addLink(t, e, r) {
      let a = this.isLinkData(r) ? r.id.replace("@", "") : undefined;
      mermaidConfigUtils.logger.info("addLink", t, e, a);
      for (let s of t) {
        for (let i of e) {
          let n = s === t[t.length - 1];
          let l = i === e[0];
          if (n && l) {
            this.addSingleLink(s, i, r, a);
          } else {
            this.addSingleLink(s, i, r, undefined);
          }
        }
      }
    }
    updateLinkInterpolate(t, e) {
      t.forEach(t => {
        if (t === "default") {
          this.edges.defaultInterpolate = e;
        } else {
          this.edges[t].interpolate = e;
        }
      });
    }
    updateLink(t, e) {
      t.forEach(t => {
        if (typeof t == "number" && t >= this.edges.length) {
          throw Error(`The index ${t} for linkStyle is out of bounds. Valid indices for linkStyle are between 0 and ${this.edges.length - 1}. (Help: Ensure that the index is within the range of existing edges.)`);
        }
        if (t === "default") {
          this.edges.defaultStyle = e;
        } else {
          var a;
          var s;
          var i;
          var l;
          var o;
          this.edges[t].style = e;
          if (!!((((a = this.edges[t]) === null || a === undefined ? undefined : a.style?.length) ?? 0) > 0) && !((i = this.edges[t]) === null || i === undefined ? undefined : (s = i.style) === null || s === undefined ? undefined : s.some(t => t == null ? undefined : t.startsWith("fill"))) && (o = this.edges[t]) !== null && o !== undefined && (l = o.style) !== null && l !== undefined) {
            l.push("fill:none");
          }
        }
      });
    }
    addClass(t, e) {
      let r = e.join().replace(/\\,/g, "§§§").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
      t.split(",").forEach(t => {
        let e = this.classes.get(t);
        if (e === undefined) {
          e = {
            id: t,
            styles: [],
            textStyles: []
          };
          this.classes.set(t, e);
        }
        if (r != null) {
          r.forEach(t => {
            if (/color/.exec(t)) {
              let r = t.replace("fill", "bgFill");
              e.textStyles.push(r);
            }
            e.styles.push(t);
          });
        }
      });
    }
    setDirection(t) {
      this.direction = t.trim();
      if (/.*</.exec(this.direction)) {
        this.direction = "RL";
      }
      if (/.*\^/.exec(this.direction)) {
        this.direction = "BT";
      }
      if (/.*>/.exec(this.direction)) {
        this.direction = "LR";
      }
      if (/.*v/.exec(this.direction)) {
        this.direction = "TB";
      }
      if (this.direction === "TD") {
        this.direction = "TB";
      }
    }
    setClass(t, e) {
      for (let r of t.split(",")) {
        let t = this.vertices.get(r);
        if (t) {
          t.classes.push(e);
        }
        let a = this.edges.find(t => t.id === r);
        if (a) {
          a.classes.push(e);
        }
        let s = this.subGraphLookup.get(r);
        if (s) {
          s.classes.push(e);
        }
      }
    }
    setTooltip(t, e) {
      if (e !== undefined) {
        e = this.sanitizeText(e);
        for (let r of t.split(",")) {
          this.tooltips.set(this.version === "gen-1" ? this.lookUpDomId(r) : r, e);
        }
      }
    }
    setClickFun(t, e, r) {
      let a = this.lookUpDomId(t);
      if (mermaidConfigUtils.getConfigAlias().securityLevel !== "loose" || e === undefined) {
        return;
      }
      let s = [];
      if (typeof r == "string") {
        s = r.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        for (let t = 0; t < s.length; t++) {
          let e = s[t].trim();
          if (e.startsWith("\"") && e.endsWith("\"")) {
            e = e.substr(1, e.length - 2);
          }
          s[t] = e;
        }
      }
      if (s.length === 0) {
        s.push(t);
      }
      let i = this.vertices.get(t);
      if (i) {
        i.haveCallback = true;
        this.funs.push(() => {
          let t = document.querySelector(`[id="${a}"]`);
          if (t !== null) {
            t.addEventListener("click", () => {
              mermaidTextLayoutUtils.textLayoutUtils.runFunc(e, ...s);
            }, false);
          }
        });
      }
    }
    setLink(t, e, r) {
      t.split(",").forEach(t => {
        let a = this.vertices.get(t);
        if (a !== undefined) {
          a.link = mermaidTextLayoutUtils.textLayoutUtils.formatUrl(e, this.config);
          a.linkTarget = r;
        }
      });
      this.setClass(t, "clickable");
    }
    getTooltip(t) {
      return this.tooltips.get(t);
    }
    setClickEvent(t, e, r) {
      t.split(",").forEach(t => {
        this.setClickFun(t, e, r);
      });
      this.setClass(t, "clickable");
    }
    bindFunctions(t) {
      this.funs.forEach(e => {
        e(t);
      });
    }
    getDirection() {
      var t;
      if ((t = this.direction) === null || t === undefined) {
        return undefined;
      } else {
        return t.trim();
      }
    }
    getVertices() {
      return this.vertices;
    }
    getEdges() {
      return this.edges;
    }
    getClasses() {
      return this.classes;
    }
    setupToolTips(t) {
      let e = axisAndZoomUtilities.select(".mermaidTooltip");
      if ((e._groups || e)[0][0] === null) {
        e = axisAndZoomUtilities.select("body").append("div").attr("class", "mermaidTooltip").style("opacity", 0);
      }
      axisAndZoomUtilities.select(t).select("svg").selectAll("g.node").on("mouseover", t => {
        var r;
        let a = axisAndZoomUtilities.select(t.currentTarget);
        if (a.attr("title") === null) {
          return;
        }
        let s = (r = t.currentTarget) === null || r === undefined ? undefined : r.getBoundingClientRect();
        e.transition().duration(200).style("opacity", ".9");
        e.text(a.attr("title")).style("left", window.scrollX + s.left + (s.right - s.left) / 2 + "px").style("top", window.scrollY + s.bottom + "px");
        e.html(e.html().replace(/&lt;br\/&gt;/g, "<br/>"));
        a.classed("hover", true);
      }).on("mouseout", t => {
        e.transition().duration(500).style("opacity", 0);
        axisAndZoomUtilities.select(t.currentTarget).classed("hover", false);
      });
    }
    clear(t = "gen-2") {
      this.vertices = new Map();
      this.classes = new Map();
      this.edges = [];
      this.funs = [this.setupToolTips.bind(this)];
      this.subGraphs = [];
      this.subGraphLookup = new Map();
      this.subCount = 0;
      this.tooltips = new Map();
      this.firstGraphFlag = true;
      this.version = t;
      this.config = mermaidConfigUtils.getConfigAlias();
      mermaidConfigUtils.clearAccData();
    }
    setGen(t) {
      this.version = t || "gen-2";
    }
    defaultStyle() {
      return "fill:#ffa;stroke: #f66; stroke-width: 3px; stroke-dasharray: 5, 5;fill:#ffa;stroke: #666;";
    }
    addSubGraph(t, e, r) {
      var i;
      let n = t.text.trim();
      let l = r.text;
      if (t === r && /\s/.exec(r.text)) {
        n = undefined;
      }
      let o = mermaidConfigUtils.setName(t => {
        let e;
        let r = {
          boolean: {},
          number: {},
          string: {}
        };
        let a = [];
        return {
          nodeList: t.filter(function (t) {
            let s = typeof t;
            if (t.stmt && t.stmt === "dir") {
              e = t.value;
              return false;
            } else {
              return t.trim() !== "" && (s in r ? !r[s].hasOwnProperty(t) && (r[s][t] = true) : !a.includes(t) && a.push(t));
            }
          }),
          dir: e
        };
      }, "uniq")(e.flat());
      let u = o.nodeList;
      let c = o.dir;
      let d = mermaidConfigUtils.getConfigAlias().flowchart ?? {};
      c = c ?? (d.inheritDir && (i = this.getDirection() ?? mermaidConfigUtils.getConfigAlias().direction) !== null && i !== undefined ? i : undefined);
      if (this.version === "gen-1") {
        for (let t = 0; t < u.length; t++) {
          u[t] = this.lookUpDomId(u[t]);
        }
      }
      n = n ?? "subGraph" + this.subCount;
      l = l || "";
      l = this.sanitizeText(l);
      this.subCount = this.subCount + 1;
      let p = {
        id: n,
        nodes: u,
        title: l.trim(),
        classes: [],
        dir: c,
        labelType: r.type
      };
      mermaidConfigUtils.logger.info("Adding", p.id, p.nodes, p.dir);
      p.nodes = this.makeUniq(p, this.subGraphs).nodes;
      this.subGraphs.push(p);
      this.subGraphLookup.set(n, p);
      return n;
    }
    getPosForId(t) {
      for (let [e, r] of this.subGraphs.entries()) {
        if (r.id === t) {
          return e;
        }
      }
      return -1;
    }
    indexNodes2(t, e) {
      let r = this.subGraphs[e].nodes;
      this.secCount = this.secCount + 1;
      if (this.secCount > 2000) {
        return {
          result: false,
          count: 0
        };
      }
      this.posCrossRef[this.secCount] = e;
      if (this.subGraphs[e].id === t) {
        return {
          result: true,
          count: 0
        };
      }
      let a = 0;
      let s = 1;
      while (a < r.length) {
        let e = this.getPosForId(r[a]);
        if (e >= 0) {
          let r = this.indexNodes2(t, e);
          if (r.result) {
            return {
              result: true,
              count: s + r.count
            };
          }
          s += r.count;
        }
        a += 1;
      }
      return {
        result: false,
        count: s
      };
    }
    getDepthFirstPos(t) {
      return this.posCrossRef[t];
    }
    indexNodes() {
      this.secCount = -1;
      if (this.subGraphs.length > 0) {
        this.indexNodes2("none", this.subGraphs.length - 1);
      }
    }
    getSubGraphs() {
      return this.subGraphs;
    }
    firstGraph() {
      return !!this.firstGraphFlag && (this.firstGraphFlag = false, true);
    }
    destructStartLink(t) {
      let e = t.trim();
      let r = "arrow_open";
      switch (e[0]) {
        case "<":
          r = "arrow_point";
          e = e.slice(1);
          break;
        case "x":
          r = "arrow_cross";
          e = e.slice(1);
          break;
        case "o":
          r = "arrow_circle";
          e = e.slice(1);
      }
      let a = "normal";
      if (e.includes("=")) {
        a = "thick";
      }
      if (e.includes(".")) {
        a = "dotted";
      }
      return {
        type: r,
        stroke: a
      };
    }
    countChar(t, e) {
      let r = e.length;
      let a = 0;
      for (let s = 0; s < r; ++s) {
        if (e[s] === t) {
          ++a;
        }
      }
      return a;
    }
    destructEndLink(t) {
      let e = t.trim();
      let r = e.slice(0, -1);
      let a = "arrow_open";
      switch (e.slice(-1)) {
        case "x":
          a = "arrow_cross";
          if (e.startsWith("x")) {
            a = "double_" + a;
            r = r.slice(1);
          }
          break;
        case ">":
          a = "arrow_point";
          if (e.startsWith("<")) {
            a = "double_" + a;
            r = r.slice(1);
          }
          break;
        case "o":
          a = "arrow_circle";
          if (e.startsWith("o")) {
            a = "double_" + a;
            r = r.slice(1);
          }
      }
      let s = "normal";
      let i = r.length - 1;
      if (r.startsWith("=")) {
        s = "thick";
      }
      if (r.startsWith("~")) {
        s = "invisible";
      }
      let n = this.countChar(".", r);
      if (n) {
        s = "dotted";
        i = n;
      }
      return {
        type: a,
        stroke: s,
        length: i
      };
    }
    destructLink(t, e) {
      let r;
      let a = this.destructEndLink(t);
      if (e) {
        if ((r = this.destructStartLink(e)).stroke !== a.stroke) {
          return {
            type: "INVALID",
            stroke: "INVALID"
          };
        }
        if (r.type === "arrow_open") {
          r.type = a.type;
        } else {
          if (r.type !== a.type) {
            return {
              type: "INVALID",
              stroke: "INVALID"
            };
          }
          r.type = "double_" + r.type;
        }
        if (r.type === "double_arrow") {
          r.type = "double_arrow_point";
        }
        r.length = a.length;
        return r;
      }
      return a;
    }
    exists(t, e) {
      for (let r of t) {
        if (r.nodes.includes(e)) {
          return true;
        }
      }
      return false;
    }
    makeUniq(t, e) {
      let r = [];
      t.nodes.forEach((a, s) => {
        if (!this.exists(e, a)) {
          r.push(t.nodes[s]);
        }
      });
      return {
        nodes: r
      };
    }
    getTypeFromVertex(t) {
      if (t.img) {
        return "imageSquare";
      }
      if (t.icon) {
        if (t.form === "circle") {
          return "iconCircle";
        } else if (t.form === "square") {
          return "iconSquare";
        } else if (t.form === "rounded") {
          return "iconRounded";
        } else {
          return "icon";
        }
      }
      switch (t.type) {
        case "square":
        case undefined:
          return "squareRect";
        case "round":
          return "roundedRect";
        case "ellipse":
          return "ellipse";
        default:
          return t.type;
      }
    }
    findNode(t, e) {
      return t.find(t => t.id === e);
    }
    destructEdgeType(t) {
      let e = "none";
      let r = "arrow_point";
      switch (t) {
        case "arrow_point":
        case "arrow_circle":
        case "arrow_cross":
          r = t;
          break;
        case "double_arrow_point":
        case "double_arrow_circle":
        case "double_arrow_cross":
          r = e = t.replace("double_", "");
      }
      return {
        arrowTypeStart: e,
        arrowTypeEnd: r
      };
    }
    addNodeFromVertex(t, e, r, a, s, i) {
      var n;
      let o = r.get(t.id);
      let u = (n = a.get(t.id)) !== null && n !== undefined && n;
      let c = this.findNode(e, t.id);
      if (c) {
        c.cssStyles = t.styles;
        c.cssCompiledStyles = this.getCompiledStyles(t.classes);
        c.cssClasses = t.classes.join(" ");
      } else {
        let r = {
          id: t.id,
          label: t.text,
          labelStyle: "",
          parentId: o,
          padding: s.flowchart?.padding || 8,
          cssStyles: t.styles,
          cssCompiledStyles: this.getCompiledStyles(["default", "node", ...t.classes]),
          cssClasses: "default " + t.classes.join(" "),
          dir: t.dir,
          domId: t.domId,
          look: i,
          link: t.link,
          linkTarget: t.linkTarget,
          tooltip: this.getTooltip(t.id),
          icon: t.icon,
          pos: t.pos,
          img: t.img,
          assetWidth: t.assetWidth,
          assetHeight: t.assetHeight,
          constraint: t.constraint
        };
        if (u) {
          e.push({
            ...r,
            isGroup: true,
            shape: "rect"
          });
        } else {
          e.push({
            ...r,
            isGroup: false,
            shape: this.getTypeFromVertex(t)
          });
        }
      }
    }
    getCompiledStyles(t) {
      let e = [];
      for (let s of t) {
        let t = this.classes.get(s);
        if (t == null ? undefined : t.styles) {
          e = [...e, ...(t.styles ?? [])].map(t => t.trim());
        }
        if (t == null ? undefined : t.textStyles) {
          e = [...e, ...(t.textStyles ?? [])].map(t => t.trim());
        }
      }
      return e;
    }
    getData() {
      let t = mermaidConfigUtils.getConfigAlias();
      let e = [];
      let r = [];
      let a = this.getSubGraphs();
      let s = new Map();
      let i = new Map();
      for (let t = a.length - 1; t >= 0; t--) {
        let e = a[t];
        if (e.nodes.length > 0) {
          i.set(e.id, true);
        }
        for (let t of e.nodes) {
          s.set(t, e.id);
        }
      }
      for (let r = a.length - 1; r >= 0; r--) {
        let i = a[r];
        e.push({
          id: i.id,
          label: i.title,
          labelStyle: "",
          parentId: s.get(i.id),
          padding: 8,
          cssCompiledStyles: this.getCompiledStyles(i.classes),
          cssClasses: i.classes.join(" "),
          shape: "rect",
          dir: i.dir,
          isGroup: true,
          look: t.look
        });
      }
      this.getVertices().forEach(r => {
        this.addNodeFromVertex(r, e, s, i, t, t.look || "classic");
      });
      let n = this.getEdges();
      n.forEach((e, a) => {
        let {
          arrowTypeStart: o,
          arrowTypeEnd: u
        } = this.destructEdgeType(e.type);
        let c = [...(n.defaultStyle ?? [])];
        if (e.style) {
          c.push(...e.style);
        }
        let h = {
          id: mermaidTextLayoutUtils.getEdgeId(e.start, e.end, {
            counter: a,
            prefix: "L"
          }, e.id),
          isUserDefinedId: e.isUserDefinedId,
          start: e.start,
          end: e.end,
          type: e.type ?? "normal",
          label: e.text,
          labelpos: "c",
          thickness: e.stroke,
          minlen: e.length,
          classes: (e == null ? undefined : e.stroke) === "invisible" ? "" : "edge-thickness-normal edge-pattern-solid flowchart-link",
          arrowTypeStart: (e == null ? undefined : e.stroke) === "invisible" || (e == null ? undefined : e.type) === "arrow_open" ? "none" : o,
          arrowTypeEnd: (e == null ? undefined : e.stroke) === "invisible" || (e == null ? undefined : e.type) === "arrow_open" ? "none" : u,
          arrowheadStyle: "fill: #333",
          cssCompiledStyles: this.getCompiledStyles(e.classes),
          labelStyle: c,
          style: c,
          pattern: e.stroke,
          look: t.look,
          animate: e.animate,
          animation: e.animation,
          curve: e.interpolate || this.edges.defaultInterpolate || t.flowchart?.curve
        };
        r.push(h);
      });
      return {
        nodes: e,
        edges: r,
        other: {},
        config: t
      };
    }
    defaultConfig() {
      return mermaidConfigUtils.frozenConfig.flowchart;
    }
    constructor() {
      this.vertexCounter = 0;
      this.config = mermaidConfigUtils.getConfigAlias();
      this.vertices = new Map();
      this.edges = [];
      this.classes = new Map();
      this.subGraphs = [];
      this.subGraphLookup = new Map();
      this.tooltips = new Map();
      this.subCount = 0;
      this.firstGraphFlag = true;
      this.secCount = -1;
      this.posCrossRef = [];
      this.funs = [];
      this.setAccTitle = mermaidConfigUtils.setAccTitle;
      this.setAccDescription = mermaidConfigUtils.setAccDescription;
      this.setDiagramTitle = mermaidConfigUtils.setDiagramTitle;
      this.getAccTitle = mermaidConfigUtils.getAccTitle;
      this.getAccDescription = mermaidConfigUtils.getAccDescription;
      this.getDiagramTitle = mermaidConfigUtils.getDiagramTitle;
      this.funs.push(this.setupToolTips.bind(this));
      this.addVertex = this.addVertex.bind(this);
      this.firstGraph = this.firstGraph.bind(this);
      this.setDirection = this.setDirection.bind(this);
      this.addSubGraph = this.addSubGraph.bind(this);
      this.addLink = this.addLink.bind(this);
      this.setLink = this.setLink.bind(this);
      this.updateLink = this.updateLink.bind(this);
      this.addClass = this.addClass.bind(this);
      this.setClass = this.setClass.bind(this);
      this.destructLink = this.destructLink.bind(this);
      this.setClickEvent = this.setClickEvent.bind(this);
      this.setTooltip = this.setTooltip.bind(this);
      this.updateLinkInterpolate = this.updateLinkInterpolate.bind(this);
      this.setClickFun = this.setClickFun.bind(this);
      this.bindFunctions = this.bindFunctions.bind(this);
      this.lex = {
        firstGraph: this.firstGraph.bind(this)
      };
      this.clear();
      this.setGen("gen-2");
    }
  };
  mermaidConfigUtils.setName(a, "FlowDB");
  var y = a;
  var k = mermaidConfigUtils.setName(function (t, e) {
    return e.db.getClasses();
  }, "getClasses");
  var b = mermaidConfigUtils.setName(async function (t, e, r, a) {
    let n;
    mermaidConfigUtils.logger.info("REF0:");
    mermaidConfigUtils.logger.info("Drawing state diagram (v2)", e);
    let {
      securityLevel: c,
      flowchart: g,
      layout: f
    } = mermaidConfigUtils.getConfigAlias();
    if (c === "sandbox") {
      n = axisAndZoomUtilities.select("#i" + e);
    }
    let y = c === "sandbox" ? n.nodes()[0].contentDocument : document;
    mermaidConfigUtils.logger.debug("Before getData: ");
    let k = a.db.getData();
    mermaidConfigUtils.logger.debug("Data: ", k);
    let b = mermaidDiagramElementGetter.getDiagramElement(e, c);
    let m = a.db.getDirection();
    k.type = a.type;
    k.layoutAlgorithm = mermaidLayoutRegistry.getRegisteredLayoutAlgorithm(f);
    if (k.layoutAlgorithm === "dagre" && f === "elk") {
      mermaidConfigUtils.logger.warn("flowchart-elk was moved to an external package in Mermaid v11. Please refer [release notes](https://github.com/mermaid-js/mermaid/releases/tag/v11.0.0) for more details. This diagram will be rendered using `dagre` layout as a fallback.");
    }
    k.direction = m;
    k.nodeSpacing = (g == null ? undefined : g.nodeSpacing) || 50;
    k.rankSpacing = (g == null ? undefined : g.rankSpacing) || 50;
    k.markers = ["point", "circle", "cross"];
    k.diagramId = e;
    mermaidConfigUtils.logger.debug("REF1:", k);
    await mermaidLayoutRegistry.render(k, b);
    let A = k.config.flowchart?.diagramPadding ?? 8;
    mermaidTextLayoutUtils.textLayoutUtils.insertTitle(b, "flowchartTitleText", (g == null ? undefined : g.titleTopMargin) || 0, a.db.getDiagramTitle());
    svgViewportSetup.setupSvgViewport(b, A, "flowchart", (g == null ? undefined : g.useMaxWidth) || false);
    for (let t of k.nodes) {
      let r = axisAndZoomUtilities.select(`#${e} [id="${t.id}"]`);
      if (!r || !t.link) {
        continue;
      }
      let a = y.createElementNS("http://www.w3.org/2000/svg", "a");
      a.setAttributeNS("http://www.w3.org/2000/svg", "class", t.cssClasses);
      a.setAttributeNS("http://www.w3.org/2000/svg", "rel", "noopener");
      if (c === "sandbox") {
        a.setAttributeNS("http://www.w3.org/2000/svg", "target", "_top");
      } else if (t.linkTarget) {
        a.setAttributeNS("http://www.w3.org/2000/svg", "target", t.linkTarget);
      }
      let s = r.insert(function () {
        return a;
      }, ":first-child");
      let i = r.select(".label-container");
      if (i) {
        s.append(function () {
          return i.node();
        });
      }
      let n = r.select(".label");
      if (n) {
        s.append(function () {
          return n.node();
        });
      }
    }
  }, "draw");
  var m = function () {
    var t = mermaidConfigUtils.setName(function (t, e, r, a) {
      r = r || {};
      a = t.length;
      for (; a--; r[t[a]] = e);
      return r;
    }, "o");
    var e = [1, 4];
    var r = [1, 3];
    var a = [1, 5];
    var i = [1, 8, 9, 10, 11, 27, 34, 36, 38, 44, 60, 84, 85, 86, 87, 88, 89, 102, 105, 106, 109, 111, 114, 115, 116, 121, 122, 123, 124];
    var n = [2, 2];
    var l = [1, 13];
    var o = [1, 14];
    var u = [1, 15];
    var c = [1, 16];
    var d = [1, 23];
    var p = [1, 25];
    var g = [1, 26];
    var f = [1, 27];
    var y = [1, 49];
    var k = [1, 48];
    var b = [1, 29];
    var m = [1, 30];
    var A = [1, 31];
    var x = [1, 32];
    var E = [1, 33];
    var v = [1, 44];
    var _ = [1, 46];
    var S = [1, 42];
    var C = [1, 47];
    var T = [1, 43];
    var w = [1, 50];
    var D = [1, 45];
    var F = [1, 51];
    var L = [1, 52];
    var B = [1, 34];
    var $ = [1, 35];
    var M = [1, 36];
    var W = [1, 37];
    var R = [1, 57];
    var I = [1, 8, 9, 10, 11, 27, 32, 34, 36, 38, 44, 60, 84, 85, 86, 87, 88, 89, 102, 105, 106, 109, 111, 114, 115, 116, 121, 122, 123, 124];
    var N = [1, 61];
    var O = [1, 60];
    var P = [1, 62];
    var U = [8, 9, 11, 75, 77, 78];
    var V = [1, 78];
    var Y = [1, 91];
    var G = [1, 96];
    var H = [1, 95];
    var X = [1, 92];
    var j = [1, 88];
    var z = [1, 94];
    var Z = [1, 90];
    var q = [1, 97];
    var K = [1, 93];
    var Q = [1, 98];
    var J = [1, 89];
    var tt = [8, 9, 10, 11, 40, 75, 77, 78];
    var te = [8, 9, 10, 11, 40, 46, 75, 77, 78];
    var tr = [8, 9, 10, 11, 29, 40, 44, 46, 48, 50, 52, 54, 56, 58, 60, 63, 65, 67, 68, 70, 75, 77, 78, 89, 102, 105, 106, 109, 111, 114, 115, 116];
    var ta = [8, 9, 11, 44, 60, 75, 77, 78, 89, 102, 105, 106, 109, 111, 114, 115, 116];
    var ts = [44, 60, 89, 102, 105, 106, 109, 111, 114, 115, 116];
    var ti = [1, 121];
    var tn = [1, 122];
    var tl = [1, 124];
    var to = [1, 123];
    var tu = [44, 60, 62, 74, 89, 102, 105, 106, 109, 111, 114, 115, 116];
    var tc = [1, 133];
    var td = [1, 147];
    var th = [1, 148];
    var tp = [1, 149];
    var tg = [1, 150];
    var tf = [1, 135];
    var ty = [1, 137];
    var tk = [1, 141];
    var tb = [1, 142];
    var tm = [1, 143];
    var tA = [1, 144];
    var tx = [1, 145];
    var tE = [1, 146];
    var tv = [1, 151];
    var t_ = [1, 152];
    var tS = [1, 131];
    var tC = [1, 132];
    var tT = [1, 139];
    var tw = [1, 134];
    var tD = [1, 138];
    var tF = [1, 136];
    var tL = [8, 9, 10, 11, 27, 32, 34, 36, 38, 44, 60, 84, 85, 86, 87, 88, 89, 102, 105, 106, 109, 111, 114, 115, 116, 121, 122, 123, 124];
    var tB = [1, 154];
    var t$ = [1, 156];
    var tM = [8, 9, 11];
    var tW = [8, 9, 10, 11, 14, 44, 60, 89, 105, 106, 109, 111, 114, 115, 116];
    var tR = [1, 176];
    var tI = [1, 172];
    var tN = [1, 173];
    var tO = [1, 177];
    var tP = [1, 174];
    var tU = [1, 175];
    var tV = [77, 116, 119];
    var tY = [8, 9, 10, 11, 12, 14, 27, 29, 32, 44, 60, 75, 84, 85, 86, 87, 88, 89, 90, 105, 109, 111, 114, 115, 116];
    var tG = [10, 106];
    var tH = [31, 49, 51, 53, 55, 57, 62, 64, 66, 67, 69, 71, 116, 117, 118];
    var tX = [1, 247];
    var tj = [1, 245];
    var tz = [1, 249];
    var tZ = [1, 243];
    var tq = [1, 244];
    var tK = [1, 246];
    var tQ = [1, 248];
    var tJ = [1, 250];
    var t1 = [1, 268];
    var t0 = [8, 9, 11, 106];
    var t2 = [8, 9, 10, 11, 60, 84, 105, 106, 109, 110, 111, 112];
    var t8 = {
      trace: mermaidConfigUtils.setName(function () {}, "trace"),
      yy: {},
      symbols_: {
        error: 2,
        start: 3,
        graphConfig: 4,
        document: 5,
        line: 6,
        statement: 7,
        SEMI: 8,
        NEWLINE: 9,
        SPACE: 10,
        EOF: 11,
        GRAPH: 12,
        NODIR: 13,
        DIR: 14,
        FirstStmtSeparator: 15,
        ending: 16,
        endToken: 17,
        spaceList: 18,
        spaceListNewline: 19,
        vertexStatement: 20,
        separator: 21,
        styleStatement: 22,
        linkStyleStatement: 23,
        classDefStatement: 24,
        classStatement: 25,
        clickStatement: 26,
        subgraph: 27,
        textNoTags: 28,
        SQS: 29,
        text: 30,
        SQE: 31,
        end: 32,
        direction: 33,
        acc_title: 34,
        acc_title_value: 35,
        acc_descr: 36,
        acc_descr_value: 37,
        acc_descr_multiline_value: 38,
        shapeData: 39,
        SHAPE_DATA: 40,
        link: 41,
        node: 42,
        styledVertex: 43,
        AMP: 44,
        vertex: 45,
        STYLE_SEPARATOR: 46,
        idString: 47,
        DOUBLECIRCLESTART: 48,
        DOUBLECIRCLEEND: 49,
        PS: 50,
        PE: 51,
        "(-": 52,
        "-)": 53,
        STADIUMSTART: 54,
        STADIUMEND: 55,
        SUBROUTINESTART: 56,
        SUBROUTINEEND: 57,
        VERTEX_WITH_PROPS_START: 58,
        "NODE_STRING[field]": 59,
        COLON: 60,
        "NODE_STRING[value]": 61,
        PIPE: 62,
        CYLINDERSTART: 63,
        CYLINDEREND: 64,
        DIAMOND_START: 65,
        DIAMOND_STOP: 66,
        TAGEND: 67,
        TRAPSTART: 68,
        TRAPEND: 69,
        INVTRAPSTART: 70,
        INVTRAPEND: 71,
        linkStatement: 72,
        arrowText: 73,
        TESTSTR: 74,
        START_LINK: 75,
        edgeText: 76,
        LINK: 77,
        LINK_ID: 78,
        edgeTextToken: 79,
        STR: 80,
        MD_STR: 81,
        textToken: 82,
        keywords: 83,
        STYLE: 84,
        LINKSTYLE: 85,
        CLASSDEF: 86,
        CLASS: 87,
        CLICK: 88,
        DOWN: 89,
        UP: 90,
        textNoTagsToken: 91,
        stylesOpt: 92,
        "idString[vertex]": 93,
        "idString[class]": 94,
        CALLBACKNAME: 95,
        CALLBACKARGS: 96,
        HREF: 97,
        LINK_TARGET: 98,
        "STR[link]": 99,
        "STR[tooltip]": 100,
        alphaNum: 101,
        DEFAULT: 102,
        numList: 103,
        INTERPOLATE: 104,
        NUM: 105,
        COMMA: 106,
        style: 107,
        styleComponent: 108,
        NODE_STRING: 109,
        UNIT: 110,
        BRKT: 111,
        PCT: 112,
        idStringToken: 113,
        MINUS: 114,
        MULT: 115,
        UNICODE_TEXT: 116,
        TEXT: 117,
        TAGSTART: 118,
        EDGE_TEXT: 119,
        alphaNumToken: 120,
        direction_tb: 121,
        direction_bt: 122,
        direction_rl: 123,
        direction_lr: 124,
        $accept: 0,
        $end: 1
      },
      terminals_: {
        2: "error",
        8: "SEMI",
        9: "NEWLINE",
        10: "SPACE",
        11: "EOF",
        12: "GRAPH",
        13: "NODIR",
        14: "DIR",
        27: "subgraph",
        29: "SQS",
        31: "SQE",
        32: "end",
        34: "acc_title",
        35: "acc_title_value",
        36: "acc_descr",
        37: "acc_descr_value",
        38: "acc_descr_multiline_value",
        40: "SHAPE_DATA",
        44: "AMP",
        46: "STYLE_SEPARATOR",
        48: "DOUBLECIRCLESTART",
        49: "DOUBLECIRCLEEND",
        50: "PS",
        51: "PE",
        52: "(-",
        53: "-)",
        54: "STADIUMSTART",
        55: "STADIUMEND",
        56: "SUBROUTINESTART",
        57: "SUBROUTINEEND",
        58: "VERTEX_WITH_PROPS_START",
        59: "NODE_STRING[field]",
        60: "COLON",
        61: "NODE_STRING[value]",
        62: "PIPE",
        63: "CYLINDERSTART",
        64: "CYLINDEREND",
        65: "DIAMOND_START",
        66: "DIAMOND_STOP",
        67: "TAGEND",
        68: "TRAPSTART",
        69: "TRAPEND",
        70: "INVTRAPSTART",
        71: "INVTRAPEND",
        74: "TESTSTR",
        75: "START_LINK",
        77: "LINK",
        78: "LINK_ID",
        80: "STR",
        81: "MD_STR",
        84: "STYLE",
        85: "LINKSTYLE",
        86: "CLASSDEF",
        87: "CLASS",
        88: "CLICK",
        89: "DOWN",
        90: "UP",
        93: "idString[vertex]",
        94: "idString[class]",
        95: "CALLBACKNAME",
        96: "CALLBACKARGS",
        97: "HREF",
        98: "LINK_TARGET",
        99: "STR[link]",
        100: "STR[tooltip]",
        102: "DEFAULT",
        104: "INTERPOLATE",
        105: "NUM",
        106: "COMMA",
        109: "NODE_STRING",
        110: "UNIT",
        111: "BRKT",
        112: "PCT",
        114: "MINUS",
        115: "MULT",
        116: "UNICODE_TEXT",
        117: "TEXT",
        118: "TAGSTART",
        119: "EDGE_TEXT",
        121: "direction_tb",
        122: "direction_bt",
        123: "direction_rl",
        124: "direction_lr"
      },
      productions_: [0, [3, 2], [5, 0], [5, 2], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [4, 2], [4, 2], [4, 2], [4, 3], [16, 2], [16, 1], [17, 1], [17, 1], [17, 1], [15, 1], [15, 1], [15, 2], [19, 2], [19, 2], [19, 1], [19, 1], [18, 2], [18, 1], [7, 2], [7, 2], [7, 2], [7, 2], [7, 2], [7, 2], [7, 9], [7, 6], [7, 4], [7, 1], [7, 2], [7, 2], [7, 1], [21, 1], [21, 1], [21, 1], [39, 2], [39, 1], [20, 4], [20, 3], [20, 4], [20, 2], [20, 2], [20, 1], [42, 1], [42, 6], [42, 5], [43, 1], [43, 3], [45, 4], [45, 4], [45, 6], [45, 4], [45, 4], [45, 4], [45, 8], [45, 4], [45, 4], [45, 4], [45, 6], [45, 4], [45, 4], [45, 4], [45, 4], [45, 4], [45, 1], [41, 2], [41, 3], [41, 3], [41, 1], [41, 3], [41, 4], [76, 1], [76, 2], [76, 1], [76, 1], [72, 1], [72, 2], [73, 3], [30, 1], [30, 2], [30, 1], [30, 1], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [83, 1], [28, 1], [28, 2], [28, 1], [28, 1], [24, 5], [25, 5], [26, 2], [26, 4], [26, 3], [26, 5], [26, 3], [26, 5], [26, 5], [26, 7], [26, 2], [26, 4], [26, 2], [26, 4], [26, 4], [26, 6], [22, 5], [23, 5], [23, 5], [23, 9], [23, 9], [23, 7], [23, 7], [103, 1], [103, 3], [92, 1], [92, 3], [107, 1], [107, 2], [108, 1], [108, 1], [108, 1], [108, 1], [108, 1], [108, 1], [108, 1], [108, 1], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [113, 1], [82, 1], [82, 1], [82, 1], [82, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [91, 1], [79, 1], [79, 1], [120, 1], [120, 1], [120, 1], [120, 1], [120, 1], [120, 1], [120, 1], [120, 1], [120, 1], [120, 1], [120, 1], [47, 1], [47, 2], [101, 1], [101, 2], [33, 1], [33, 1], [33, 1], [33, 1]],
      performAction: mermaidConfigUtils.setName(function (t, e, r, a, s, i, n) {
        var l = i.length - 1;
        switch (s) {
          case 2:
          case 28:
          case 29:
          case 30:
          case 31:
          case 32:
            this.$ = [];
            break;
          case 3:
            if (!Array.isArray(i[l]) || i[l].length > 0) {
              i[l - 1].push(i[l]);
            }
            this.$ = i[l - 1];
            break;
          case 4:
          case 183:
          case 44:
          case 54:
          case 76:
          case 181:
            this.$ = i[l];
            break;
          case 11:
            a.setDirection("TB");
            this.$ = "TB";
            break;
          case 12:
            a.setDirection(i[l - 1]);
            this.$ = i[l - 1];
            break;
          case 27:
            this.$ = i[l - 1].nodes;
            break;
          case 33:
            this.$ = a.addSubGraph(i[l - 6], i[l - 1], i[l - 4]);
            break;
          case 34:
            this.$ = a.addSubGraph(i[l - 3], i[l - 1], i[l - 3]);
            break;
          case 35:
            this.$ = a.addSubGraph(undefined, i[l - 1], undefined);
            break;
          case 37:
            this.$ = i[l].trim();
            a.setAccTitle(this.$);
            break;
          case 38:
          case 39:
            this.$ = i[l].trim();
            a.setAccDescription(this.$);
            break;
          case 43:
          case 133:
            this.$ = i[l - 1] + i[l];
            break;
          case 45:
            a.addVertex(i[l - 1][i[l - 1].length - 1], undefined, undefined, undefined, undefined, undefined, undefined, i[l]);
            a.addLink(i[l - 3].stmt, i[l - 1], i[l - 2]);
            this.$ = {
              stmt: i[l - 1],
              nodes: i[l - 1].concat(i[l - 3].nodes)
            };
            break;
          case 46:
            a.addLink(i[l - 2].stmt, i[l], i[l - 1]);
            this.$ = {
              stmt: i[l],
              nodes: i[l].concat(i[l - 2].nodes)
            };
            break;
          case 47:
            a.addLink(i[l - 3].stmt, i[l - 1], i[l - 2]);
            this.$ = {
              stmt: i[l - 1],
              nodes: i[l - 1].concat(i[l - 3].nodes)
            };
            break;
          case 48:
            this.$ = {
              stmt: i[l - 1],
              nodes: i[l - 1]
            };
            break;
          case 49:
            a.addVertex(i[l - 1][i[l - 1].length - 1], undefined, undefined, undefined, undefined, undefined, undefined, i[l]);
            this.$ = {
              stmt: i[l - 1],
              nodes: i[l - 1],
              shapeData: i[l]
            };
            break;
          case 50:
            this.$ = {
              stmt: i[l],
              nodes: i[l]
            };
            break;
          case 51:
          case 128:
          case 130:
            this.$ = [i[l]];
            break;
          case 52:
            a.addVertex(i[l - 5][i[l - 5].length - 1], undefined, undefined, undefined, undefined, undefined, undefined, i[l - 4]);
            this.$ = i[l - 5].concat(i[l]);
            break;
          case 53:
            this.$ = i[l - 4].concat(i[l]);
            break;
          case 55:
            this.$ = i[l - 2];
            a.setClass(i[l - 2], i[l]);
            break;
          case 56:
            this.$ = i[l - 3];
            a.addVertex(i[l - 3], i[l - 1], "square");
            break;
          case 57:
            this.$ = i[l - 3];
            a.addVertex(i[l - 3], i[l - 1], "doublecircle");
            break;
          case 58:
            this.$ = i[l - 5];
            a.addVertex(i[l - 5], i[l - 2], "circle");
            break;
          case 59:
            this.$ = i[l - 3];
            a.addVertex(i[l - 3], i[l - 1], "ellipse");
            break;
          case 60:
            this.$ = i[l - 3];
            a.addVertex(i[l - 3], i[l - 1], "stadium");
            break;
          case 61:
            this.$ = i[l - 3];
            a.addVertex(i[l - 3], i[l - 1], "subroutine");
            break;
          case 62:
            this.$ = i[l - 7];
            a.addVertex(i[l - 7], i[l - 1], "rect", undefined, undefined, undefined, Object.fromEntries([[i[l - 5], i[l - 3]]]));
            break;
          case 63:
            this.$ = i[l - 3];
            a.addVertex(i[l - 3], i[l - 1], "cylinder");
            break;
          case 64:
            this.$ = i[l - 3];
            a.addVertex(i[l - 3], i[l - 1], "round");
            break;
          case 65:
            this.$ = i[l - 3];
            a.addVertex(i[l - 3], i[l - 1], "diamond");
            break;
          case 66:
            this.$ = i[l - 5];
            a.addVertex(i[l - 5], i[l - 2], "hexagon");
            break;
          case 67:
            this.$ = i[l - 3];
            a.addVertex(i[l - 3], i[l - 1], "odd");
            break;
          case 68:
            this.$ = i[l - 3];
            a.addVertex(i[l - 3], i[l - 1], "trapezoid");
            break;
          case 69:
            this.$ = i[l - 3];
            a.addVertex(i[l - 3], i[l - 1], "inv_trapezoid");
            break;
          case 70:
            this.$ = i[l - 3];
            a.addVertex(i[l - 3], i[l - 1], "lean_right");
            break;
          case 71:
            this.$ = i[l - 3];
            a.addVertex(i[l - 3], i[l - 1], "lean_left");
            break;
          case 72:
            this.$ = i[l];
            a.addVertex(i[l]);
            break;
          case 73:
            i[l - 1].text = i[l];
            this.$ = i[l - 1];
            break;
          case 74:
          case 75:
            i[l - 2].text = i[l - 1];
            this.$ = i[l - 2];
            break;
          case 77:
            var o = a.destructLink(i[l], i[l - 2]);
            this.$ = {
              type: o.type,
              stroke: o.stroke,
              length: o.length,
              text: i[l - 1]
            };
            break;
          case 78:
            var o = a.destructLink(i[l], i[l - 2]);
            this.$ = {
              type: o.type,
              stroke: o.stroke,
              length: o.length,
              text: i[l - 1],
              id: i[l - 3]
            };
            break;
          case 79:
          case 86:
          case 101:
          case 103:
            this.$ = {
              text: i[l],
              type: "text"
            };
            break;
          case 80:
          case 87:
          case 102:
            this.$ = {
              text: i[l - 1].text + "" + i[l],
              type: i[l - 1].type
            };
            break;
          case 81:
          case 88:
            this.$ = {
              text: i[l],
              type: "string"
            };
            break;
          case 82:
          case 89:
          case 104:
            this.$ = {
              text: i[l],
              type: "markdown"
            };
            break;
          case 83:
            var o = a.destructLink(i[l]);
            this.$ = {
              type: o.type,
              stroke: o.stroke,
              length: o.length
            };
            break;
          case 84:
            var o = a.destructLink(i[l]);
            this.$ = {
              type: o.type,
              stroke: o.stroke,
              length: o.length,
              id: i[l - 1]
            };
            break;
          case 85:
            this.$ = i[l - 1];
            break;
          case 105:
            this.$ = i[l - 4];
            a.addClass(i[l - 2], i[l]);
            break;
          case 106:
            this.$ = i[l - 4];
            a.setClass(i[l - 2], i[l]);
            break;
          case 107:
          case 115:
            this.$ = i[l - 1];
            a.setClickEvent(i[l - 1], i[l]);
            break;
          case 108:
          case 116:
            this.$ = i[l - 3];
            a.setClickEvent(i[l - 3], i[l - 2]);
            a.setTooltip(i[l - 3], i[l]);
            break;
          case 109:
            this.$ = i[l - 2];
            a.setClickEvent(i[l - 2], i[l - 1], i[l]);
            break;
          case 110:
            this.$ = i[l - 4];
            a.setClickEvent(i[l - 4], i[l - 3], i[l - 2]);
            a.setTooltip(i[l - 4], i[l]);
            break;
          case 111:
            this.$ = i[l - 2];
            a.setLink(i[l - 2], i[l]);
            break;
          case 112:
            this.$ = i[l - 4];
            a.setLink(i[l - 4], i[l - 2]);
            a.setTooltip(i[l - 4], i[l]);
            break;
          case 113:
            this.$ = i[l - 4];
            a.setLink(i[l - 4], i[l - 2], i[l]);
            break;
          case 114:
            this.$ = i[l - 6];
            a.setLink(i[l - 6], i[l - 4], i[l]);
            a.setTooltip(i[l - 6], i[l - 2]);
            break;
          case 117:
            this.$ = i[l - 1];
            a.setLink(i[l - 1], i[l]);
            break;
          case 118:
            this.$ = i[l - 3];
            a.setLink(i[l - 3], i[l - 2]);
            a.setTooltip(i[l - 3], i[l]);
            break;
          case 119:
            this.$ = i[l - 3];
            a.setLink(i[l - 3], i[l - 2], i[l]);
            break;
          case 120:
            this.$ = i[l - 5];
            a.setLink(i[l - 5], i[l - 4], i[l]);
            a.setTooltip(i[l - 5], i[l - 2]);
            break;
          case 121:
            this.$ = i[l - 4];
            a.addVertex(i[l - 2], undefined, undefined, i[l]);
            break;
          case 122:
            this.$ = i[l - 4];
            a.updateLink([i[l - 2]], i[l]);
            break;
          case 123:
            this.$ = i[l - 4];
            a.updateLink(i[l - 2], i[l]);
            break;
          case 124:
            this.$ = i[l - 8];
            a.updateLinkInterpolate([i[l - 6]], i[l - 2]);
            a.updateLink([i[l - 6]], i[l]);
            break;
          case 125:
            this.$ = i[l - 8];
            a.updateLinkInterpolate(i[l - 6], i[l - 2]);
            a.updateLink(i[l - 6], i[l]);
            break;
          case 126:
            this.$ = i[l - 6];
            a.updateLinkInterpolate([i[l - 4]], i[l]);
            break;
          case 127:
            this.$ = i[l - 6];
            a.updateLinkInterpolate(i[l - 4], i[l]);
            break;
          case 129:
          case 131:
            i[l - 2].push(i[l]);
            this.$ = i[l - 2];
            break;
          case 182:
          case 184:
            this.$ = i[l - 1] + "" + i[l];
            break;
          case 185:
            this.$ = {
              stmt: "dir",
              value: "TB"
            };
            break;
          case 186:
            this.$ = {
              stmt: "dir",
              value: "BT"
            };
            break;
          case 187:
            this.$ = {
              stmt: "dir",
              value: "RL"
            };
            break;
          case 188:
            this.$ = {
              stmt: "dir",
              value: "LR"
            };
        }
      }, "anonymous"),
      table: [{
        3: 1,
        4: 2,
        9: e,
        10: r,
        12: a
      }, {
        1: [3]
      }, t(i, n, {
        5: 6
      }), {
        4: 7,
        9: e,
        10: r,
        12: a
      }, {
        4: 8,
        9: e,
        10: r,
        12: a
      }, {
        13: [1, 9],
        14: [1, 10]
      }, {
        1: [2, 1],
        6: 11,
        7: 12,
        8: l,
        9: o,
        10: u,
        11: c,
        20: 17,
        22: 18,
        23: 19,
        24: 20,
        25: 21,
        26: 22,
        27: d,
        33: 24,
        34: p,
        36: g,
        38: f,
        42: 28,
        43: 38,
        44: y,
        45: 39,
        47: 40,
        60: k,
        84: b,
        85: m,
        86: A,
        87: x,
        88: E,
        89: v,
        102: _,
        105: S,
        106: C,
        109: T,
        111: w,
        113: 41,
        114: D,
        115: F,
        116: L,
        121: B,
        122: $,
        123: M,
        124: W
      }, t(i, [2, 9]), t(i, [2, 10]), t(i, [2, 11]), {
        8: [1, 54],
        9: [1, 55],
        10: R,
        15: 53,
        18: 56
      }, t(I, [2, 3]), t(I, [2, 4]), t(I, [2, 5]), t(I, [2, 6]), t(I, [2, 7]), t(I, [2, 8]), {
        8: N,
        9: O,
        11: P,
        21: 58,
        41: 59,
        72: 63,
        75: [1, 64],
        77: [1, 66],
        78: [1, 65]
      }, {
        8: N,
        9: O,
        11: P,
        21: 67
      }, {
        8: N,
        9: O,
        11: P,
        21: 68
      }, {
        8: N,
        9: O,
        11: P,
        21: 69
      }, {
        8: N,
        9: O,
        11: P,
        21: 70
      }, {
        8: N,
        9: O,
        11: P,
        21: 71
      }, {
        8: N,
        9: O,
        10: [1, 72],
        11: P,
        21: 73
      }, t(I, [2, 36]), {
        35: [1, 74]
      }, {
        37: [1, 75]
      }, t(I, [2, 39]), t(U, [2, 50], {
        18: 76,
        39: 77,
        10: R,
        40: V
      }), {
        10: [1, 79]
      }, {
        10: [1, 80]
      }, {
        10: [1, 81]
      }, {
        10: [1, 82]
      }, {
        14: Y,
        44: G,
        60: H,
        80: [1, 86],
        89: X,
        95: [1, 83],
        97: [1, 84],
        101: 85,
        105: j,
        106: z,
        109: Z,
        111: q,
        114: K,
        115: Q,
        116: J,
        120: 87
      }, t(I, [2, 185]), t(I, [2, 186]), t(I, [2, 187]), t(I, [2, 188]), t(tt, [2, 51]), t(tt, [2, 54], {
        46: [1, 99]
      }), t(te, [2, 72], {
        113: 112,
        29: [1, 100],
        44: y,
        48: [1, 101],
        50: [1, 102],
        52: [1, 103],
        54: [1, 104],
        56: [1, 105],
        58: [1, 106],
        60: k,
        63: [1, 107],
        65: [1, 108],
        67: [1, 109],
        68: [1, 110],
        70: [1, 111],
        89: v,
        102: _,
        105: S,
        106: C,
        109: T,
        111: w,
        114: D,
        115: F,
        116: L
      }), t(tr, [2, 181]), t(tr, [2, 142]), t(tr, [2, 143]), t(tr, [2, 144]), t(tr, [2, 145]), t(tr, [2, 146]), t(tr, [2, 147]), t(tr, [2, 148]), t(tr, [2, 149]), t(tr, [2, 150]), t(tr, [2, 151]), t(tr, [2, 152]), t(i, [2, 12]), t(i, [2, 18]), t(i, [2, 19]), {
        9: [1, 113]
      }, t(ta, [2, 26], {
        18: 114,
        10: R
      }), t(I, [2, 27]), {
        42: 115,
        43: 38,
        44: y,
        45: 39,
        47: 40,
        60: k,
        89: v,
        102: _,
        105: S,
        106: C,
        109: T,
        111: w,
        113: 41,
        114: D,
        115: F,
        116: L
      }, t(I, [2, 40]), t(I, [2, 41]), t(I, [2, 42]), t(ts, [2, 76], {
        73: 116,
        62: [1, 118],
        74: [1, 117]
      }), {
        76: 119,
        79: 120,
        80: ti,
        81: tn,
        116: tl,
        119: to
      }, {
        75: [1, 125],
        77: [1, 126]
      }, t(tu, [2, 83]), t(I, [2, 28]), t(I, [2, 29]), t(I, [2, 30]), t(I, [2, 31]), t(I, [2, 32]), {
        10: tc,
        12: td,
        14: th,
        27: tp,
        28: 127,
        32: tg,
        44: tf,
        60: ty,
        75: tk,
        80: [1, 129],
        81: [1, 130],
        83: 140,
        84: tb,
        85: tm,
        86: tA,
        87: tx,
        88: tE,
        89: tv,
        90: t_,
        91: 128,
        105: tS,
        109: tC,
        111: tT,
        114: tw,
        115: tD,
        116: tF
      }, t(tL, n, {
        5: 153
      }), t(I, [2, 37]), t(I, [2, 38]), t(U, [2, 48], {
        44: tB
      }), t(U, [2, 49], {
        18: 155,
        10: R,
        40: t$
      }), t(tt, [2, 44]), {
        44: y,
        47: 157,
        60: k,
        89: v,
        102: _,
        105: S,
        106: C,
        109: T,
        111: w,
        113: 41,
        114: D,
        115: F,
        116: L
      }, {
        102: [1, 158],
        103: 159,
        105: [1, 160]
      }, {
        44: y,
        47: 161,
        60: k,
        89: v,
        102: _,
        105: S,
        106: C,
        109: T,
        111: w,
        113: 41,
        114: D,
        115: F,
        116: L
      }, {
        44: y,
        47: 162,
        60: k,
        89: v,
        102: _,
        105: S,
        106: C,
        109: T,
        111: w,
        113: 41,
        114: D,
        115: F,
        116: L
      }, t(tM, [2, 107], {
        10: [1, 163],
        96: [1, 164]
      }), {
        80: [1, 165]
      }, t(tM, [2, 115], {
        120: 167,
        10: [1, 166],
        14: Y,
        44: G,
        60: H,
        89: X,
        105: j,
        106: z,
        109: Z,
        111: q,
        114: K,
        115: Q,
        116: J
      }), t(tM, [2, 117], {
        10: [1, 168]
      }), t(tW, [2, 183]), t(tW, [2, 170]), t(tW, [2, 171]), t(tW, [2, 172]), t(tW, [2, 173]), t(tW, [2, 174]), t(tW, [2, 175]), t(tW, [2, 176]), t(tW, [2, 177]), t(tW, [2, 178]), t(tW, [2, 179]), t(tW, [2, 180]), {
        44: y,
        47: 169,
        60: k,
        89: v,
        102: _,
        105: S,
        106: C,
        109: T,
        111: w,
        113: 41,
        114: D,
        115: F,
        116: L
      }, {
        30: 170,
        67: tR,
        80: tI,
        81: tN,
        82: 171,
        116: tO,
        117: tP,
        118: tU
      }, {
        30: 178,
        67: tR,
        80: tI,
        81: tN,
        82: 171,
        116: tO,
        117: tP,
        118: tU
      }, {
        30: 180,
        50: [1, 179],
        67: tR,
        80: tI,
        81: tN,
        82: 171,
        116: tO,
        117: tP,
        118: tU
      }, {
        30: 181,
        67: tR,
        80: tI,
        81: tN,
        82: 171,
        116: tO,
        117: tP,
        118: tU
      }, {
        30: 182,
        67: tR,
        80: tI,
        81: tN,
        82: 171,
        116: tO,
        117: tP,
        118: tU
      }, {
        30: 183,
        67: tR,
        80: tI,
        81: tN,
        82: 171,
        116: tO,
        117: tP,
        118: tU
      }, {
        109: [1, 184]
      }, {
        30: 185,
        67: tR,
        80: tI,
        81: tN,
        82: 171,
        116: tO,
        117: tP,
        118: tU
      }, {
        30: 186,
        65: [1, 187],
        67: tR,
        80: tI,
        81: tN,
        82: 171,
        116: tO,
        117: tP,
        118: tU
      }, {
        30: 188,
        67: tR,
        80: tI,
        81: tN,
        82: 171,
        116: tO,
        117: tP,
        118: tU
      }, {
        30: 189,
        67: tR,
        80: tI,
        81: tN,
        82: 171,
        116: tO,
        117: tP,
        118: tU
      }, {
        30: 190,
        67: tR,
        80: tI,
        81: tN,
        82: 171,
        116: tO,
        117: tP,
        118: tU
      }, t(tr, [2, 182]), t(i, [2, 20]), t(ta, [2, 25]), t(U, [2, 46], {
        39: 191,
        18: 192,
        10: R,
        40: V
      }), t(ts, [2, 73], {
        10: [1, 193]
      }), {
        10: [1, 194]
      }, {
        30: 195,
        67: tR,
        80: tI,
        81: tN,
        82: 171,
        116: tO,
        117: tP,
        118: tU
      }, {
        77: [1, 196],
        79: 197,
        116: tl,
        119: to
      }, t(tV, [2, 79]), t(tV, [2, 81]), t(tV, [2, 82]), t(tV, [2, 168]), t(tV, [2, 169]), {
        76: 198,
        79: 120,
        80: ti,
        81: tn,
        116: tl,
        119: to
      }, t(tu, [2, 84]), {
        8: N,
        9: O,
        10: tc,
        11: P,
        12: td,
        14: th,
        21: 200,
        27: tp,
        29: [1, 199],
        32: tg,
        44: tf,
        60: ty,
        75: tk,
        83: 140,
        84: tb,
        85: tm,
        86: tA,
        87: tx,
        88: tE,
        89: tv,
        90: t_,
        91: 201,
        105: tS,
        109: tC,
        111: tT,
        114: tw,
        115: tD,
        116: tF
      }, t(tY, [2, 101]), t(tY, [2, 103]), t(tY, [2, 104]), t(tY, [2, 157]), t(tY, [2, 158]), t(tY, [2, 159]), t(tY, [2, 160]), t(tY, [2, 161]), t(tY, [2, 162]), t(tY, [2, 163]), t(tY, [2, 164]), t(tY, [2, 165]), t(tY, [2, 166]), t(tY, [2, 167]), t(tY, [2, 90]), t(tY, [2, 91]), t(tY, [2, 92]), t(tY, [2, 93]), t(tY, [2, 94]), t(tY, [2, 95]), t(tY, [2, 96]), t(tY, [2, 97]), t(tY, [2, 98]), t(tY, [2, 99]), t(tY, [2, 100]), {
        6: 11,
        7: 12,
        8: l,
        9: o,
        10: u,
        11: c,
        20: 17,
        22: 18,
        23: 19,
        24: 20,
        25: 21,
        26: 22,
        27: d,
        32: [1, 202],
        33: 24,
        34: p,
        36: g,
        38: f,
        42: 28,
        43: 38,
        44: y,
        45: 39,
        47: 40,
        60: k,
        84: b,
        85: m,
        86: A,
        87: x,
        88: E,
        89: v,
        102: _,
        105: S,
        106: C,
        109: T,
        111: w,
        113: 41,
        114: D,
        115: F,
        116: L,
        121: B,
        122: $,
        123: M,
        124: W
      }, {
        10: R,
        18: 203
      }, {
        44: [1, 204]
      }, t(tt, [2, 43]), {
        10: [1, 205],
        44: y,
        60: k,
        89: v,
        102: _,
        105: S,
        106: C,
        109: T,
        111: w,
        113: 112,
        114: D,
        115: F,
        116: L
      }, {
        10: [1, 206]
      }, {
        10: [1, 207],
        106: [1, 208]
      }, t(tG, [2, 128]), {
        10: [1, 209],
        44: y,
        60: k,
        89: v,
        102: _,
        105: S,
        106: C,
        109: T,
        111: w,
        113: 112,
        114: D,
        115: F,
        116: L
      }, {
        10: [1, 210],
        44: y,
        60: k,
        89: v,
        102: _,
        105: S,
        106: C,
        109: T,
        111: w,
        113: 112,
        114: D,
        115: F,
        116: L
      }, {
        80: [1, 211]
      }, t(tM, [2, 109], {
        10: [1, 212]
      }), t(tM, [2, 111], {
        10: [1, 213]
      }), {
        80: [1, 214]
      }, t(tW, [2, 184]), {
        80: [1, 215],
        98: [1, 216]
      }, t(tt, [2, 55], {
        113: 112,
        44: y,
        60: k,
        89: v,
        102: _,
        105: S,
        106: C,
        109: T,
        111: w,
        114: D,
        115: F,
        116: L
      }), {
        31: [1, 217],
        67: tR,
        82: 218,
        116: tO,
        117: tP,
        118: tU
      }, t(tH, [2, 86]), t(tH, [2, 88]), t(tH, [2, 89]), t(tH, [2, 153]), t(tH, [2, 154]), t(tH, [2, 155]), t(tH, [2, 156]), {
        49: [1, 219],
        67: tR,
        82: 218,
        116: tO,
        117: tP,
        118: tU
      }, {
        30: 220,
        67: tR,
        80: tI,
        81: tN,
        82: 171,
        116: tO,
        117: tP,
        118: tU
      }, {
        51: [1, 221],
        67: tR,
        82: 218,
        116: tO,
        117: tP,
        118: tU
      }, {
        53: [1, 222],
        67: tR,
        82: 218,
        116: tO,
        117: tP,
        118: tU
      }, {
        55: [1, 223],
        67: tR,
        82: 218,
        116: tO,
        117: tP,
        118: tU
      }, {
        57: [1, 224],
        67: tR,
        82: 218,
        116: tO,
        117: tP,
        118: tU
      }, {
        60: [1, 225]
      }, {
        64: [1, 226],
        67: tR,
        82: 218,
        116: tO,
        117: tP,
        118: tU
      }, {
        66: [1, 227],
        67: tR,
        82: 218,
        116: tO,
        117: tP,
        118: tU
      }, {
        30: 228,
        67: tR,
        80: tI,
        81: tN,
        82: 171,
        116: tO,
        117: tP,
        118: tU
      }, {
        31: [1, 229],
        67: tR,
        82: 218,
        116: tO,
        117: tP,
        118: tU
      }, {
        67: tR,
        69: [1, 230],
        71: [1, 231],
        82: 218,
        116: tO,
        117: tP,
        118: tU
      }, {
        67: tR,
        69: [1, 233],
        71: [1, 232],
        82: 218,
        116: tO,
        117: tP,
        118: tU
      }, t(U, [2, 45], {
        18: 155,
        10: R,
        40: t$
      }), t(U, [2, 47], {
        44: tB
      }), t(ts, [2, 75]), t(ts, [2, 74]), {
        62: [1, 234],
        67: tR,
        82: 218,
        116: tO,
        117: tP,
        118: tU
      }, t(ts, [2, 77]), t(tV, [2, 80]), {
        77: [1, 235],
        79: 197,
        116: tl,
        119: to
      }, {
        30: 236,
        67: tR,
        80: tI,
        81: tN,
        82: 171,
        116: tO,
        117: tP,
        118: tU
      }, t(tL, n, {
        5: 237
      }), t(tY, [2, 102]), t(I, [2, 35]), {
        43: 238,
        44: y,
        45: 39,
        47: 40,
        60: k,
        89: v,
        102: _,
        105: S,
        106: C,
        109: T,
        111: w,
        113: 41,
        114: D,
        115: F,
        116: L
      }, {
        10: R,
        18: 239
      }, {
        10: tX,
        60: tj,
        84: tz,
        92: 240,
        105: tZ,
        107: 241,
        108: 242,
        109: tq,
        110: tK,
        111: tQ,
        112: tJ
      }, {
        10: tX,
        60: tj,
        84: tz,
        92: 251,
        104: [1, 252],
        105: tZ,
        107: 241,
        108: 242,
        109: tq,
        110: tK,
        111: tQ,
        112: tJ
      }, {
        10: tX,
        60: tj,
        84: tz,
        92: 253,
        104: [1, 254],
        105: tZ,
        107: 241,
        108: 242,
        109: tq,
        110: tK,
        111: tQ,
        112: tJ
      }, {
        105: [1, 255]
      }, {
        10: tX,
        60: tj,
        84: tz,
        92: 256,
        105: tZ,
        107: 241,
        108: 242,
        109: tq,
        110: tK,
        111: tQ,
        112: tJ
      }, {
        44: y,
        47: 257,
        60: k,
        89: v,
        102: _,
        105: S,
        106: C,
        109: T,
        111: w,
        113: 41,
        114: D,
        115: F,
        116: L
      }, t(tM, [2, 108]), {
        80: [1, 258]
      }, {
        80: [1, 259],
        98: [1, 260]
      }, t(tM, [2, 116]), t(tM, [2, 118], {
        10: [1, 261]
      }), t(tM, [2, 119]), t(te, [2, 56]), t(tH, [2, 87]), t(te, [2, 57]), {
        51: [1, 262],
        67: tR,
        82: 218,
        116: tO,
        117: tP,
        118: tU
      }, t(te, [2, 64]), t(te, [2, 59]), t(te, [2, 60]), t(te, [2, 61]), {
        109: [1, 263]
      }, t(te, [2, 63]), t(te, [2, 65]), {
        66: [1, 264],
        67: tR,
        82: 218,
        116: tO,
        117: tP,
        118: tU
      }, t(te, [2, 67]), t(te, [2, 68]), t(te, [2, 70]), t(te, [2, 69]), t(te, [2, 71]), t([10, 44, 60, 89, 102, 105, 106, 109, 111, 114, 115, 116], [2, 85]), t(ts, [2, 78]), {
        31: [1, 265],
        67: tR,
        82: 218,
        116: tO,
        117: tP,
        118: tU
      }, {
        6: 11,
        7: 12,
        8: l,
        9: o,
        10: u,
        11: c,
        20: 17,
        22: 18,
        23: 19,
        24: 20,
        25: 21,
        26: 22,
        27: d,
        32: [1, 266],
        33: 24,
        34: p,
        36: g,
        38: f,
        42: 28,
        43: 38,
        44: y,
        45: 39,
        47: 40,
        60: k,
        84: b,
        85: m,
        86: A,
        87: x,
        88: E,
        89: v,
        102: _,
        105: S,
        106: C,
        109: T,
        111: w,
        113: 41,
        114: D,
        115: F,
        116: L,
        121: B,
        122: $,
        123: M,
        124: W
      }, t(tt, [2, 53]), {
        43: 267,
        44: y,
        45: 39,
        47: 40,
        60: k,
        89: v,
        102: _,
        105: S,
        106: C,
        109: T,
        111: w,
        113: 41,
        114: D,
        115: F,
        116: L
      }, t(tM, [2, 121], {
        106: t1
      }), t(t0, [2, 130], {
        108: 269,
        10: tX,
        60: tj,
        84: tz,
        105: tZ,
        109: tq,
        110: tK,
        111: tQ,
        112: tJ
      }), t(t2, [2, 132]), t(t2, [2, 134]), t(t2, [2, 135]), t(t2, [2, 136]), t(t2, [2, 137]), t(t2, [2, 138]), t(t2, [2, 139]), t(t2, [2, 140]), t(t2, [2, 141]), t(tM, [2, 122], {
        106: t1
      }), {
        10: [1, 270]
      }, t(tM, [2, 123], {
        106: t1
      }), {
        10: [1, 271]
      }, t(tG, [2, 129]), t(tM, [2, 105], {
        106: t1
      }), t(tM, [2, 106], {
        113: 112,
        44: y,
        60: k,
        89: v,
        102: _,
        105: S,
        106: C,
        109: T,
        111: w,
        114: D,
        115: F,
        116: L
      }), t(tM, [2, 110]), t(tM, [2, 112], {
        10: [1, 272]
      }), t(tM, [2, 113]), {
        98: [1, 273]
      }, {
        51: [1, 274]
      }, {
        62: [1, 275]
      }, {
        66: [1, 276]
      }, {
        8: N,
        9: O,
        11: P,
        21: 277
      }, t(I, [2, 34]), t(tt, [2, 52]), {
        10: tX,
        60: tj,
        84: tz,
        105: tZ,
        107: 278,
        108: 242,
        109: tq,
        110: tK,
        111: tQ,
        112: tJ
      }, t(t2, [2, 133]), {
        14: Y,
        44: G,
        60: H,
        89: X,
        101: 279,
        105: j,
        106: z,
        109: Z,
        111: q,
        114: K,
        115: Q,
        116: J,
        120: 87
      }, {
        14: Y,
        44: G,
        60: H,
        89: X,
        101: 280,
        105: j,
        106: z,
        109: Z,
        111: q,
        114: K,
        115: Q,
        116: J,
        120: 87
      }, {
        98: [1, 281]
      }, t(tM, [2, 120]), t(te, [2, 58]), {
        30: 282,
        67: tR,
        80: tI,
        81: tN,
        82: 171,
        116: tO,
        117: tP,
        118: tU
      }, t(te, [2, 66]), t(tL, n, {
        5: 283
      }), t(t0, [2, 131], {
        108: 269,
        10: tX,
        60: tj,
        84: tz,
        105: tZ,
        109: tq,
        110: tK,
        111: tQ,
        112: tJ
      }), t(tM, [2, 126], {
        120: 167,
        10: [1, 284],
        14: Y,
        44: G,
        60: H,
        89: X,
        105: j,
        106: z,
        109: Z,
        111: q,
        114: K,
        115: Q,
        116: J
      }), t(tM, [2, 127], {
        120: 167,
        10: [1, 285],
        14: Y,
        44: G,
        60: H,
        89: X,
        105: j,
        106: z,
        109: Z,
        111: q,
        114: K,
        115: Q,
        116: J
      }), t(tM, [2, 114]), {
        31: [1, 286],
        67: tR,
        82: 218,
        116: tO,
        117: tP,
        118: tU
      }, {
        6: 11,
        7: 12,
        8: l,
        9: o,
        10: u,
        11: c,
        20: 17,
        22: 18,
        23: 19,
        24: 20,
        25: 21,
        26: 22,
        27: d,
        32: [1, 287],
        33: 24,
        34: p,
        36: g,
        38: f,
        42: 28,
        43: 38,
        44: y,
        45: 39,
        47: 40,
        60: k,
        84: b,
        85: m,
        86: A,
        87: x,
        88: E,
        89: v,
        102: _,
        105: S,
        106: C,
        109: T,
        111: w,
        113: 41,
        114: D,
        115: F,
        116: L,
        121: B,
        122: $,
        123: M,
        124: W
      }, {
        10: tX,
        60: tj,
        84: tz,
        92: 288,
        105: tZ,
        107: 241,
        108: 242,
        109: tq,
        110: tK,
        111: tQ,
        112: tJ
      }, {
        10: tX,
        60: tj,
        84: tz,
        92: 289,
        105: tZ,
        107: 241,
        108: 242,
        109: tq,
        110: tK,
        111: tQ,
        112: tJ
      }, t(te, [2, 62]), t(I, [2, 33]), t(tM, [2, 124], {
        106: t1
      }), t(tM, [2, 125], {
        106: t1
      })],
      defaultActions: {},
      parseError: mermaidConfigUtils.setName(function (t, e) {
        if (e.recoverable) {
          this.trace(t);
        } else {
          var r = Error(t);
          r.hash = e;
          throw r;
        }
      }, "parseError"),
      parse: mermaidConfigUtils.setName(function (t) {
        var e = this;
        var r = [0];
        var a = [];
        var s = [null];
        var i = [];
        var n = this.table;
        var l = "";
        var o = 0;
        var u = 0;
        var c = 0;
        var d = i.slice.call(arguments, 1);
        var p = Object.create(this.lexer);
        var g = {
          yy: {}
        };
        for (var f in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, f)) {
            g.yy[f] = this.yy[f];
          }
        }
        p.setInput(t, g.yy);
        g.yy.lexer = p;
        g.yy.parser = this;
        if (p.yylloc === undefined) {
          p.yylloc = {};
        }
        var y = p.yylloc;
        i.push(y);
        var k = p.options && p.options.ranges;
        function b() {
          var t;
          if (typeof (t = a.pop() || p.lex() || 1) != "number") {
            if (t instanceof Array) {
              t = (a = t).pop();
            }
            t = e.symbols_[t] || t;
          }
          return t;
        }
        if (typeof g.yy.parseError == "function") {
          this.parseError = g.yy.parseError;
        } else {
          this.parseError = Object.getPrototypeOf(this).parseError;
        }
        mermaidConfigUtils.setName(function (t) {
          r.length = r.length - t * 2;
          s.length = s.length - t;
          i.length = i.length - t;
        }, "popStack");
        mermaidConfigUtils.setName(b, "lex");
        var m;
        var A;
        var x;
        var E;
        var v;
        var _;
        var S;
        var C;
        var T;
        var w = {};
        while (true) {
          x = r[r.length - 1];
          if (this.defaultActions[x]) {
            E = this.defaultActions[x];
          } else {
            if (m == null) {
              m = b();
            }
            E = n[x] && n[x][m];
          }
          if (E === undefined || !E.length || !E[0]) {
            var D = "";
            T = [];
            for (_ in n[x]) {
              if (this.terminals_[_] && _ > 2) {
                T.push("'" + this.terminals_[_] + "'");
              }
            }
            D = p.showPosition ? "Parse error on line " + (o + 1) + ":\n" + p.showPosition() + "\nExpecting " + T.join(", ") + ", got '" + (this.terminals_[m] || m) + "'" : "Parse error on line " + (o + 1) + ": Unexpected " + (m == 1 ? "end of input" : "'" + (this.terminals_[m] || m) + "'");
            this.parseError(D, {
              text: p.match,
              token: this.terminals_[m] || m,
              line: p.yylineno,
              loc: y,
              expected: T
            });
          }
          if (E[0] instanceof Array && E.length > 1) {
            throw Error("Parse Error: multiple actions possible at state: " + x + ", token: " + m);
          }
          switch (E[0]) {
            case 1:
              r.push(m);
              s.push(p.yytext);
              i.push(p.yylloc);
              r.push(E[1]);
              m = null;
              if (A) {
                m = A;
                A = null;
              } else {
                u = p.yyleng;
                l = p.yytext;
                o = p.yylineno;
                y = p.yylloc;
                if (c > 0) {
                  c--;
                }
              }
              break;
            case 2:
              S = this.productions_[E[1]][1];
              w.$ = s[s.length - S];
              w._$ = {
                first_line: i[i.length - (S || 1)].first_line,
                last_line: i[i.length - 1].last_line,
                first_column: i[i.length - (S || 1)].first_column,
                last_column: i[i.length - 1].last_column
              };
              if (k) {
                w._$.range = [i[i.length - (S || 1)].range[0], i[i.length - 1].range[1]];
              }
              if ((v = this.performAction.apply(w, [l, u, o, g.yy, E[1], s, i].concat(d))) !== undefined) {
                return v;
              }
              if (S) {
                r = r.slice(0, S * -1 * 2);
                s = s.slice(0, S * -1);
                i = i.slice(0, S * -1);
              }
              r.push(this.productions_[E[1]][0]);
              s.push(w.$);
              i.push(w._$);
              C = n[r[r.length - 2]][r[r.length - 1]];
              r.push(C);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse")
    };
    var t4 = {
      EOF: 1,
      parseError: mermaidConfigUtils.setName(function (t, e) {
        if (this.yy.parser) {
          this.yy.parser.parseError(t, e);
        } else {
          throw Error(t);
        }
      }, "parseError"),
      setInput: mermaidConfigUtils.setName(function (t, e) {
        this.yy = e || this.yy || {};
        this._input = t;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = "";
        this.conditionStack = ["INITIAL"];
        this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        };
        if (this.options.ranges) {
          this.yylloc.range = [0, 0];
        }
        this.offset = 0;
        return this;
      }, "setInput"),
      input: mermaidConfigUtils.setName(function () {
        var t = this._input[0];
        this.yytext += t;
        this.yyleng++;
        this.offset++;
        this.match += t;
        this.matched += t;
        if (t.match(/(?:\r\n?|\n).*/g)) {
          this.yylineno++;
          this.yylloc.last_line++;
        } else {
          this.yylloc.last_column++;
        }
        if (this.options.ranges) {
          this.yylloc.range[1]++;
        }
        this._input = this._input.slice(1);
        return t;
      }, "input"),
      unput: mermaidConfigUtils.setName(function (t) {
        var e = t.length;
        var r = t.split(/(?:\r\n?|\n)/g);
        this._input = t + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - e);
        this.offset -= e;
        var a = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (r.length - 1) {
          this.yylineno -= r.length - 1;
        }
        var s = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: r ? (r.length === a.length ? this.yylloc.first_column : 0) + a[a.length - r.length].length - r[0].length : this.yylloc.first_column - e
        };
        if (this.options.ranges) {
          this.yylloc.range = [s[0], s[0] + this.yyleng - e];
        }
        this.yyleng = this.yytext.length;
        return this;
      }, "unput"),
      more: mermaidConfigUtils.setName(function () {
        this._more = true;
        return this;
      }, "more"),
      reject: mermaidConfigUtils.setName(function () {
        if (this.options.backtrack_lexer) {
          this._backtrack = true;
          return this;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
      }, "reject"),
      less: mermaidConfigUtils.setName(function (t) {
        this.unput(this.match.slice(t));
      }, "less"),
      pastInput: mermaidConfigUtils.setName(function () {
        var t = this.matched.substr(0, this.matched.length - this.match.length);
        return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      upcomingInput: mermaidConfigUtils.setName(function () {
        var t = this.match;
        if (t.length < 20) {
          t += this._input.substr(0, 20 - t.length);
        }
        return (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      showPosition: mermaidConfigUtils.setName(function () {
        var t = this.pastInput();
        var e = Array(t.length + 1).join("-");
        return t + this.upcomingInput() + "\n" + e + "^";
      }, "showPosition"),
      test_match: mermaidConfigUtils.setName(function (t, e) {
        var r;
        var a;
        var s;
        if (this.options.backtrack_lexer) {
          s = {
            yylineno: this.yylineno,
            yylloc: {
              first_line: this.yylloc.first_line,
              last_line: this.last_line,
              first_column: this.yylloc.first_column,
              last_column: this.yylloc.last_column
            },
            yytext: this.yytext,
            match: this.match,
            matches: this.matches,
            matched: this.matched,
            yyleng: this.yyleng,
            offset: this.offset,
            _more: this._more,
            _input: this._input,
            yy: this.yy,
            conditionStack: this.conditionStack.slice(0),
            done: this.done
          };
          if (this.options.ranges) {
            s.yylloc.range = this.yylloc.range.slice(0);
          }
        }
        if (a = t[0].match(/(?:\r\n?|\n).*/g)) {
          this.yylineno += a.length;
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: a ? a[a.length - 1].length - a[a.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
        };
        this.yytext += t[0];
        this.match += t[0];
        this.matches = t;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
          this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(t[0].length);
        this.matched += t[0];
        r = this.performAction.call(this, this.yy, this, e, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
          this.done = false;
        }
        if (r) {
          return r;
        }
        if (this._backtrack) {
          for (var i in s) {
            this[i] = s[i];
          }
        }
        return false;
      }, "test_match"),
      next: mermaidConfigUtils.setName(function () {
        if (this.done) {
          return this.EOF;
        }
        if (!this._input) {
          this.done = true;
        }
        if (!this._more) {
          this.yytext = "";
          this.match = "";
        }
        var t;
        var e;
        var r;
        var a;
        var s = this._currentRules();
        var i = 0;
        for (; i < s.length; i++) {
          if ((r = this._input.match(this.rules[s[i]])) && (!e || r[0].length > e[0].length)) {
            e = r;
            a = i;
            if (this.options.backtrack_lexer) {
              if ((t = this.test_match(r, s[i])) !== false) {
                return t;
              }
              if (!this._backtrack) {
                return false;
              }
              e = false;
              continue;
            }
            if (!this.options.flex) {
              break;
            }
          }
        }
        if (e) {
          return (t = this.test_match(e, s[a])) !== false && t;
        } else if (this._input === "") {
          return this.EOF;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
      }, "next"),
      lex: mermaidConfigUtils.setName(function () {
        var t = this.next();
        return t || this.lex();
      }, "lex"),
      begin: mermaidConfigUtils.setName(function (t) {
        this.conditionStack.push(t);
      }, "begin"),
      popState: mermaidConfigUtils.setName(function () {
        if (this.conditionStack.length - 1 > 0) {
          return this.conditionStack.pop();
        } else {
          return this.conditionStack[0];
        }
      }, "popState"),
      _currentRules: mermaidConfigUtils.setName(function () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
          return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
          return this.conditions.INITIAL.rules;
        }
      }, "_currentRules"),
      topState: mermaidConfigUtils.setName(function (t) {
        if ((t = this.conditionStack.length - 1 - Math.abs(t || 0)) >= 0) {
          return this.conditionStack[t];
        } else {
          return "INITIAL";
        }
      }, "topState"),
      pushState: mermaidConfigUtils.setName(function (t) {
        this.begin(t);
      }, "pushState"),
      stateStackSize: mermaidConfigUtils.setName(function () {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {},
      performAction: mermaidConfigUtils.setName(function (t, e, r, a) {
        switch (r) {
          case 0:
            this.begin("acc_title");
            return 34;
          case 1:
            this.popState();
            return "acc_title_value";
          case 2:
            this.begin("acc_descr");
            return 36;
          case 3:
            this.popState();
            return "acc_descr_value";
          case 4:
            this.begin("acc_descr_multiline");
            break;
          case 5:
          case 12:
          case 14:
          case 17:
          case 20:
          case 23:
          case 33:
            this.popState();
            break;
          case 6:
            return "acc_descr_multiline_value";
          case 7:
            this.pushState("shapeData");
            e.yytext = "";
            return 40;
          case 8:
            this.pushState("shapeDataStr");
            return 40;
          case 9:
            this.popState();
            return 40;
          case 10:
            e.yytext = e.yytext.replace(/\n\s*/g, "<br/>");
            return 40;
          case 11:
            return 40;
          case 13:
            this.begin("callbackname");
            break;
          case 15:
            this.popState();
            this.begin("callbackargs");
            break;
          case 16:
            return 95;
          case 18:
            return 96;
          case 19:
            return "MD_STR";
          case 21:
            this.begin("md_string");
            break;
          case 22:
            return "STR";
          case 24:
            this.pushState("string");
            break;
          case 25:
            return 84;
          case 26:
            return 102;
          case 27:
            return 85;
          case 28:
            return 104;
          case 29:
            return 86;
          case 30:
            return 87;
          case 31:
            return 97;
          case 32:
            this.begin("click");
            break;
          case 34:
            return 88;
          case 35:
          case 36:
          case 37:
            if (t.lex.firstGraph()) {
              this.begin("dir");
            }
            return 12;
          case 38:
            return 27;
          case 39:
            return 32;
          case 40:
          case 41:
          case 42:
          case 43:
            return 98;
          case 44:
            this.popState();
            return 13;
          case 45:
          case 46:
          case 47:
          case 48:
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
            this.popState();
            return 14;
          case 55:
            return 121;
          case 56:
            return 122;
          case 57:
            return 123;
          case 58:
            return 124;
          case 59:
            return 78;
          case 60:
            return 105;
          case 61:
          case 102:
            return 111;
          case 62:
            return 46;
          case 63:
            return 60;
          case 64:
          case 103:
            return 44;
          case 65:
            return 8;
          case 66:
            return 106;
          case 67:
          case 101:
            return 115;
          case 68:
          case 71:
          case 74:
            this.popState();
            return 77;
          case 69:
            this.pushState("edgeText");
            return 75;
          case 70:
          case 73:
          case 76:
            return 119;
          case 72:
            this.pushState("thickEdgeText");
            return 75;
          case 75:
            this.pushState("dottedEdgeText");
            return 75;
          case 77:
            return 77;
          case 78:
            this.popState();
            return 53;
          case 79:
          case 115:
            return "TEXT";
          case 80:
            this.pushState("ellipseText");
            return 52;
          case 81:
            this.popState();
            return 55;
          case 82:
            this.pushState("text");
            return 54;
          case 83:
            this.popState();
            return 57;
          case 84:
            this.pushState("text");
            return 56;
          case 85:
            return 58;
          case 86:
            this.pushState("text");
            return 67;
          case 87:
            this.popState();
            return 64;
          case 88:
            this.pushState("text");
            return 63;
          case 89:
            this.popState();
            return 49;
          case 90:
            this.pushState("text");
            return 48;
          case 91:
            this.popState();
            return 69;
          case 92:
            this.popState();
            return 71;
          case 93:
            return 117;
          case 94:
            this.pushState("trapText");
            return 68;
          case 95:
            this.pushState("trapText");
            return 70;
          case 96:
            return 118;
          case 97:
            return 67;
          case 98:
            return 90;
          case 99:
            return "SEP";
          case 100:
            return 89;
          case 104:
            return 109;
          case 105:
            return 114;
          case 106:
            return 116;
          case 107:
            this.popState();
            return 62;
          case 108:
            this.pushState("text");
            return 62;
          case 109:
            this.popState();
            return 51;
          case 110:
            this.pushState("text");
            return 50;
          case 111:
            this.popState();
            return 31;
          case 112:
            this.pushState("text");
            return 29;
          case 113:
            this.popState();
            return 66;
          case 114:
            this.pushState("text");
            return 65;
          case 116:
            return "QUOTE";
          case 117:
            return 9;
          case 118:
            return 10;
          case 119:
            return 11;
        }
      }, "anonymous"),
      rules: [/^(?:accTitle\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*\{\s*)/, /^(?:[\}])/, /^(?:[^\}]*)/, /^(?:@\{)/, /^(?:["])/, /^(?:["])/, /^(?:[^\"]+)/, /^(?:[^}^"]+)/, /^(?:\})/, /^(?:call[\s]+)/, /^(?:\([\s]*\))/, /^(?:\()/, /^(?:[^(]*)/, /^(?:\))/, /^(?:[^)]*)/, /^(?:[^`"]+)/, /^(?:[`]["])/, /^(?:["][`])/, /^(?:[^"]+)/, /^(?:["])/, /^(?:["])/, /^(?:style\b)/, /^(?:default\b)/, /^(?:linkStyle\b)/, /^(?:interpolate\b)/, /^(?:classDef\b)/, /^(?:class\b)/, /^(?:href[\s])/, /^(?:click[\s]+)/, /^(?:[\s\n])/, /^(?:[^\s\n]*)/, /^(?:flowchart-elk\b)/, /^(?:graph\b)/, /^(?:flowchart\b)/, /^(?:subgraph\b)/, /^(?:end\b\s*)/, /^(?:_self\b)/, /^(?:_blank\b)/, /^(?:_parent\b)/, /^(?:_top\b)/, /^(?:(\r?\n)*\s*\n)/, /^(?:\s*LR\b)/, /^(?:\s*RL\b)/, /^(?:\s*TB\b)/, /^(?:\s*BT\b)/, /^(?:\s*TD\b)/, /^(?:\s*BR\b)/, /^(?:\s*<)/, /^(?:\s*>)/, /^(?:\s*\^)/, /^(?:\s*v\b)/, /^(?:.*direction\s+TB[^\n]*)/, /^(?:.*direction\s+BT[^\n]*)/, /^(?:.*direction\s+RL[^\n]*)/, /^(?:.*direction\s+LR[^\n]*)/, /^(?:[^\s\"]+@(?=[^\{\"]))/, /^(?:[0-9]+)/, /^(?:#)/, /^(?::::)/, /^(?::)/, /^(?:&)/, /^(?:;)/, /^(?:,)/, /^(?:\*)/, /^(?:\s*[xo<]?--+[-xo>]\s*)/, /^(?:\s*[xo<]?--\s*)/, /^(?:[^-]|-(?!-)+)/, /^(?:\s*[xo<]?==+[=xo>]\s*)/, /^(?:\s*[xo<]?==\s*)/, /^(?:[^=]|=(?!))/, /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/, /^(?:\s*[xo<]?-\.\s*)/, /^(?:[^\.]|\.(?!))/, /^(?:\s*~~[\~]+\s*)/, /^(?:[-/\)][\)])/, /^(?:[^\(\)\[\]\{\}]|!\)+)/, /^(?:\(-)/, /^(?:\]\))/, /^(?:\(\[)/, /^(?:\]\])/, /^(?:\[\[)/, /^(?:\[\|)/, /^(?:>)/, /^(?:\)\])/, /^(?:\[\()/, /^(?:\)\)\))/, /^(?:\(\(\()/, /^(?:[\\(?=\])][\]])/, /^(?:\/(?=\])\])/, /^(?:\/(?!\])|\\(?!\])|[^\\\[\]\(\)\{\}\/]+)/, /^(?:\[\/)/, /^(?:\[\\)/, /^(?:<)/, /^(?:>)/, /^(?:\^)/, /^(?:\\\|)/, /^(?:v\b)/, /^(?:\*)/, /^(?:#)/, /^(?:&)/, /^(?:([A-Za-z0-9!"\#$%&'*+\.`?\\_\/]|-(?=[^\>\-\.])|(?!))+)/, /^(?:-)/, /^(?:[\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6]|[\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377]|[\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5]|[\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA]|[\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE]|[\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA]|[\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0]|[\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977]|[\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2]|[\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A]|[\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39]|[\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8]|[\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C]|[\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C]|[\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99]|[\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0]|[\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D]|[\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3]|[\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10]|[\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1]|[\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81]|[\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3]|[\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6]|[\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A]|[\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081]|[\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D]|[\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0]|[\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310]|[\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C]|[\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711]|[\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7]|[\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C]|[\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16]|[\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF]|[\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC]|[\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D]|[\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D]|[\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3]|[\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F]|[\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128]|[\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184]|[\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3]|[\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6]|[\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE]|[\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C]|[\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D]|[\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC]|[\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B]|[\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788]|[\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805]|[\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB]|[\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28]|[\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5]|[\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4]|[\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|[\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D]|[\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36]|[\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D]|[\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC]|[\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF]|[\uFFD2-\uFFD7\uFFDA-\uFFDC])/, /^(?:\|)/, /^(?:\|)/, /^(?:\))/, /^(?:\()/, /^(?:\])/, /^(?:\[)/, /^(?:(\}))/, /^(?:\{)/, /^(?:[^\[\]\(\)\{\}\|\"]+)/, /^(?:")/, /^(?:(\r?\n)+)/, /^(?:\s)/, /^(?:$)/],
      conditions: {
        shapeDataEndBracket: {
          rules: [21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114],
          inclusive: false
        },
        shapeDataStr: {
          rules: [9, 10, 21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114],
          inclusive: false
        },
        shapeData: {
          rules: [8, 11, 12, 21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114],
          inclusive: false
        },
        callbackargs: {
          rules: [17, 18, 21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114],
          inclusive: false
        },
        callbackname: {
          rules: [14, 15, 16, 21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114],
          inclusive: false
        },
        href: xssContentSanitizer.sanitizeUrl({
          rules: [21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114],
          inclusive: false
        }, null, {
          logType: "js.href/src",
          reportOnly: "false",
          blackConfig: "{}",
          configMode: "merge",
          isCloseSSRReport: false,
          bid: "flow_web",
          region: "cn",
          urlLimit: "-1",
          htmlLimit: "-1",
          isSaveValidUrl: false,
          isRuntimeLog: false,
          isDOMParser: true,
          escapeRule: "escape-report",
          reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
          scmBranch: "release_train_samantha_2026-03-09_1120843696898",
          scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
          scmVersion: "1.0.4.168",
          webpackPluginVersion: "3.4.5",
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3lN$3hq-lR*b1lWZFNR$TF$%lhWTlZFRjF%$%01ZFdJe$$teFlNak-y$2to$2MxcFl%WFpp$jFaN$lsZEdjRnBET1d0aFdFNHd%REpP-jJSWE5-Smpl$*ww$2xoS2R*bFhiR3RN-l%1MlkyM$ZkbHB0Z%haa01*SndX$mRrZ$ZsWE1I%ldS$2h%$jFWMFZs%lZSWFZp$jNCNldWaEtib$JZ$FQwPQ"
        }),
        click: {
          rules: [21, 24, 33, 34, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114],
          inclusive: false
        },
        dottedEdgeText: {
          rules: [21, 24, 74, 76, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114],
          inclusive: false
        },
        thickEdgeText: {
          rules: [21, 24, 71, 73, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114],
          inclusive: false
        },
        edgeText: {
          rules: [21, 24, 68, 70, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114],
          inclusive: false
        },
        trapText: {
          rules: [21, 24, 77, 80, 82, 84, 88, 90, 91, 92, 93, 94, 95, 108, 110, 112, 114],
          inclusive: false
        },
        ellipseText: {
          rules: [21, 24, 77, 78, 79, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114],
          inclusive: false
        },
        text: {
          rules: [21, 24, 77, 80, 81, 82, 83, 84, 87, 88, 89, 90, 94, 95, 107, 108, 109, 110, 111, 112, 113, 114, 115],
          inclusive: false
        },
        vertex: {
          rules: [21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114],
          inclusive: false
        },
        dir: {
          rules: [21, 24, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114],
          inclusive: false
        },
        acc_descr_multiline: {
          rules: [5, 6, 21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114],
          inclusive: false
        },
        acc_descr: {
          rules: [3, 21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114],
          inclusive: false
        },
        acc_title: {
          rules: [1, 21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114],
          inclusive: false
        },
        md_string: {
          rules: [19, 20, 21, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114],
          inclusive: false
        },
        string: {
          rules: [21, 22, 23, 24, 77, 80, 82, 84, 88, 90, 94, 95, 108, 110, 112, 114],
          inclusive: false
        },
        INITIAL: {
          rules: [0, 2, 4, 7, 13, 21, 24, 25, 26, 27, 28, 29, 30, 31, 32, 35, 36, 37, 38, 39, 40, 41, 42, 43, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 72, 74, 75, 77, 80, 82, 84, 85, 86, 88, 90, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 108, 110, 112, 114, 116, 117, 118, 119],
          inclusive: true
        }
      }
    };
    function t6() {
      this.yy = {};
    }
    t8.lexer = t4;
    mermaidConfigUtils.setName(t6, "Parser");
    t6.prototype = t8;
    t8.Parser = t6;
    return new t6();
  }();
  m.parser = m;
  var A = Object.assign({}, m);
  A.parse = t => {
    let e = t.replace(/}\s*\n/g, "}\n");
    return m.parse(e);
  };
  var x = mermaidConfigUtils.setName((t, e) => {
    let r = colorChannelExtractor.extractColorChannel;
    let a = r(t, "r");
    let s = r(t, "g");
    let i = r(t, "b");
    return colorAlphaSetter.setColorWithAlpha(a, s, i, e);
  }, "fade");
  var E = {
    parser: A,
    get db() {
      return new y();
    },
    renderer: {
      getClasses: k,
      draw: b
    },
    styles: mermaidConfigUtils.setName(t => `.label {
    font-family: ${t.fontFamily};
    color: ${t.nodeTextColor || t.textColor};
  }
  .cluster-label text {
    fill: ${t.titleColor};
  }
  .cluster-label span {
    color: ${t.titleColor};
  }
  .cluster-label span p {
    background-color: transparent;
  }

  .label text,span {
    fill: ${t.nodeTextColor || t.textColor};
    color: ${t.nodeTextColor || t.textColor};
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
  .rough-node .label text , .node .label text, .image-shape .label, .icon-shape .label {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .rough-node .label,.node .label, .image-shape .label, .icon-shape .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }


  .root .anchor path {
    fill: ${t.lineColor} !important;
    stroke-width: 0;
    stroke: ${t.lineColor};
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
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

  /* For html labels only */
  .labelBkg {
    background-color: ${x(t.edgeLabelBackground, 0.5)};
    // background-color:
  }

  .cluster rect {
    fill: ${t.clusterBkg};
    stroke: ${t.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  .cluster span {
    color: ${t.titleColor};
  }
  /* .cluster div {
    color: ${t.titleColor};
  } */

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

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }

  rect.text {
    fill: none;
    stroke-width: 0;
  }

  .icon-shape, .image-shape {
    background-color: ${t.edgeLabelBackground};
    p {
      background-color: ${t.edgeLabelBackground};
      padding: 2px;
    }
    rect {
      opacity: 0.5;
      background-color: ${t.edgeLabelBackground};
      fill: ${t.edgeLabelBackground};
    }
    text-align: center;
  }
  ${mermaidIconStylesHelper.getIconStyles()}
`, "getStyles"),
    init: mermaidConfigUtils.setName(t => {
      t.flowchart ||= {};
      if (t.layout) {
        mermaidConfigUtils.setConfig({
          layout: t.layout
        });
      }
      t.flowchart.arrowMarkerAbsolute = t.arrowMarkerAbsolute;
      mermaidConfigUtils.setConfig({
        flowchart: {
          arrowMarkerAbsolute: t.arrowMarkerAbsolute
        }
      });
    }, "init")
  };
  require.d(exports, {
    diagram: function () {
      return E;
    }
  });
}