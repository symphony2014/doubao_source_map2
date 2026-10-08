// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'n' to 'fontAwesomeIconStylesHelper'
// - Resolved require(878353) to 'font-awesome-icon-styles-helper'
// - Renamed variable 'u' to 'jsYamlCoreImplementation'
// - Resolved require(671191) to 'js-yaml-core-implementation'
// - Renamed variable 'a' to 'diagramElementSelector'
// - Resolved require(150827) to 'diagram-element-selector'
// - Renamed variable 'l' to 'mermaidSvgViewportSetup'
// - Resolved require(3049) to 'mermaid-svg-viewport-setup'
// - Renamed variable 'o' to 'mermaidLayoutRegistryRenderer'
// - Resolved require(484129) to 'mermaid-layout-registry-renderer'
// - Resolved require(968232) to 'mermaid-flowchart-edge-renderer'
// - Resolved require(173696) to 'diagram-arrow-offset-utils'
// - Renamed variable 'c' to 'mermaidNodeShapesRenderer'
// - Resolved require(411411) to 'mermaid-node-shapes-renderer'
// - Resolved require(954180) to 'subgraph-title-margins-calculator'
// - Resolved require(717687) to 'mermaid-style-utils'
// - Resolved require(990626) to 'icon-utils-text-rendering'
// - Renamed variable 'h' to 'mermaidDiagramUtils'
// - Resolved require(583673) to 'mermaid-diagram-utils'
// - Renamed variable 'd' to 'mermaidConfigUtils_1'
// - Resolved require(401926) to 'mermaid-config-utils_1'
// - Renamed variable 'p' to 'loggerLevelUtils'
// - Resolved require(696754) to 'logger-level-utils'
// - Renamed variable 'g' to 'axisAndZoomUtilities'
// - Resolved require(381804) to 'axis-and-zoom-utilities'
// - Renamed variable 'A' to 'colorChannelExtractor'
// - Resolved require(165290) to 'color-channel-extractor'
// - Renamed variable 'b' to 'colorAlphaSetter'
// - Resolved require(882094) to 'color-alpha-setter'
// - Updated imported property 'SY' to 'textUtilities' (module 401926)
// - Updated imported property 'nV' to 'getConfigAlias' (module 401926)
// - Updated imported property 'ZH' to 'clearCommonDb' (module 401926)
// - Updated imported property 'Fy' to 'frozenConfig' (module 401926)
// - Updated imported property 'GN' to 'setAccTitle' (module 401926)
// - Updated imported property 'U$' to 'setAccDescription' (module 401926)
// - Updated imported property 'g2' to 'setDiagramTitle' (module 401926)
// - Updated imported property 'eu' to 'getAccTitle' (module 401926)
// - Updated imported property 'Mx' to 'getAccDescription' (module 401926)
// - Updated imported property 'Kr' to 'getDiagramTitle' (module 401926)
// - Updated imported property 'Y4' to 'setConfig' (module 401926)
// - Updated imported property 'z' to 'load' (module 671191)
// - Updated imported property 'A' to 'Schema' (module 671191)
// - Updated imported property 'dW' to 'isValidShape' (module 411411)
// - Updated imported property 'cM' to 'logger' (module 696754)
// - Updated imported property 'eW' to 'setFunctionName' (module 696754)
// - Updated imported property 'Ln' to 'getEdgeId' (module 583673)
// - Updated imported property 'w8' to 'mermaidUtils' (module 583673)
// - Updated imported property 'Ys' to 'select' (module 381804)
// - Updated imported property 'q' to 'getDiagramElement' (module 150827)
// - Updated imported property '_b' to 'getRegisteredLayoutAlgorithm' (module 484129)
// - Updated imported property 'sY' to 'render' (module 484129)
// - Updated imported property 'j' to 'setupViewPortForSvg' (module 3049)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'Z' to 'extractColorChannel' (module 165290)
// - Updated imported property 'Z' to 'setColorWithAlpha' (module 882094)
// - Updated imported property 'G' to 'getIconStyles' (module 878353)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 77528.320cfa7f.js
         * chunkId: 77528
         * moduleId: 903652
         */
module.exports = function (module, exports, require) {
  var i;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var fontAwesomeIconStylesHelper = require("font-awesome-icon-styles-helper") /*id: 878353*/;
  var jsYamlCoreImplementation = require("js-yaml-core-implementation") /*id: 671191*/;
  var diagramElementSelector = require("diagram-element-selector") /*id: 150827*/;
  var mermaidSvgViewportSetup = require("mermaid-svg-viewport-setup") /*id: 3049*/;
  var mermaidLayoutRegistryRenderer = require("mermaid-layout-registry-renderer") /*id: 484129*/;
  require("mermaid-flowchart-edge-renderer") /*id: 968232*/;
  require("diagram-arrow-offset-utils") /*id: 173696*/;
  var mermaidNodeShapesRenderer = require("mermaid-node-shapes-renderer") /*id: 411411*/;
  require("subgraph-title-margins-calculator") /*id: 954180*/;
  require("mermaid-style-utils") /*id: 717687*/;
  require("icon-utils-text-rendering") /*id: 990626*/;
  var mermaidDiagramUtils = require("mermaid-diagram-utils") /*id: 583673*/;
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var colorChannelExtractor = require("color-channel-extractor") /*id: 165290*/;
  var colorAlphaSetter = require("color-alpha-setter") /*id: 882094*/;
  i = class {
    sanitizeText(e) {
      return mermaidConfigUtils_1.textUtilities.sanitizeText(e, this.config);
    }
    lookUpDomId(e) {
      for (let t of this.vertices.values()) {
        if (t.id === e) {
          return t.domId;
        }
      }
      return e;
    }
    addVertex(e, t, s, i, r, n) {
      let a;
      let l;
      let o = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
      let h = arguments.length > 7 ? arguments[7] : undefined;
      if (!e || e.trim().length === 0) {
        return;
      }
      if (h !== undefined) {
        let e;
        e = h.includes("\n") ? h + "\n" : "{\n" + h + "\n}";
        a = jsYamlCoreImplementation.load(e, {
          schema: jsYamlCoreImplementation.Schema
        });
      }
      let p = this.edges.find(t => t.id === e);
      if (p) {
        let e = a;
        if ((e == null ? undefined : e.animate) !== undefined) {
          p.animate = e.animate;
        }
        if ((e == null ? undefined : e.animation) !== undefined) {
          p.animation = e.animation;
        }
        if ((e == null ? undefined : e.curve) !== undefined) {
          p.interpolate = e.curve;
        }
        return;
      }
      let g = this.vertices.get(e);
      if (g === undefined) {
        g = {
          id: e,
          labelType: "text",
          domId: "flowchart-" + e + "-" + this.vertexCounter,
          styles: [],
          classes: []
        };
        this.vertices.set(e, g);
      }
      this.vertexCounter++;
      if (t !== undefined) {
        this.config = mermaidConfigUtils_1.getConfigAlias();
        l = this.sanitizeText(t.text.trim());
        g.labelType = t.type;
        if (l.startsWith("\"") && l.endsWith("\"")) {
          l = l.substring(1, l.length - 1);
        }
        g.text = l;
      } else if (g.text === undefined) {
        g.text = e;
      }
      if (s !== undefined) {
        g.type = s;
      }
      if (i != null) {
        i.forEach(e => {
          g.styles.push(e);
        });
      }
      if (r != null) {
        r.forEach(e => {
          g.classes.push(e);
        });
      }
      if (n !== undefined) {
        g.dir = n;
      }
      if (g.props === undefined) {
        g.props = o;
      } else if (o !== undefined) {
        Object.assign(g.props, o);
      }
      if (a !== undefined) {
        var A;
        var b;
        if (a.shape) {
          if (a.shape !== a.shape.toLowerCase() || a.shape.includes("_")) {
            throw Error(`No such shape: ${a.shape}. Shape names should be lowercase.`);
          }
          if (!mermaidNodeShapesRenderer.isValidShape(a.shape)) {
            throw Error(`No such shape: ${a.shape}.`);
          }
          g.type = a == null ? undefined : a.shape;
        }
        if (a == null ? undefined : a.label) {
          g.text = a == null ? undefined : a.label;
        }
        if (a == null ? undefined : a.icon) {
          g.icon = a == null ? undefined : a.icon;
          if (!((A = a.label) === null || A === undefined ? undefined : A.trim()) && g.text === e) {
            g.text = "";
          }
        }
        if (a == null ? undefined : a.form) {
          g.form = a == null ? undefined : a.form;
        }
        if (a == null ? undefined : a.pos) {
          g.pos = a == null ? undefined : a.pos;
        }
        if (a == null ? undefined : a.img) {
          g.img = a == null ? undefined : a.img;
          if (!((b = a.label) === null || b === undefined ? undefined : b.trim()) && g.text === e) {
            g.text = "";
          }
        }
        if (a == null ? undefined : a.constraint) {
          g.constraint = a.constraint;
        }
        if (a.w) {
          g.assetWidth = Number(a.w);
        }
        if (a.h) {
          g.assetHeight = Number(a.h);
        }
      }
    }
    addSingleLink(e, t, s, i) {
      let n = {
        start: e,
        end: t,
        type: undefined,
        text: "",
        labelType: "text",
        classes: [],
        isUserDefinedId: false,
        interpolate: this.edges.defaultInterpolate
      };
      loggerLevelUtils.logger.info("abc78 Got edge...", n);
      let u = s.text;
      if (u !== undefined) {
        n.text = this.sanitizeText(u.text.trim());
        if (n.text.startsWith("\"") && n.text.endsWith("\"")) {
          n.text = n.text.substring(1, n.text.length - 1);
        }
        n.labelType = u.type;
      }
      if (s !== undefined) {
        n.type = s.type;
        n.stroke = s.stroke;
        n.length = s.length > 10 ? 10 : s.length;
      }
      if (i && !this.edges.some(e => e.id === i)) {
        n.id = i;
        n.isUserDefinedId = true;
      } else {
        let e = this.edges.filter(e => e.start === n.start && e.end === n.end);
        if (e.length === 0) {
          n.id = mermaidDiagramUtils.getEdgeId(n.start, n.end, {
            counter: 0,
            prefix: "L"
          });
        } else {
          n.id = mermaidDiagramUtils.getEdgeId(n.start, n.end, {
            counter: e.length + 1,
            prefix: "L"
          });
        }
      }
      if (this.edges.length < (this.config.maxEdges ?? 500)) {
        loggerLevelUtils.logger.info("Pushing edge...");
        this.edges.push(n);
      } else {
        throw Error(`Edge limit exceeded. ${this.edges.length} edges found, but the limit is ${this.config.maxEdges}.

Initialize mermaid with maxEdges set to a higher number to allow more edges.
You cannot set this config via configuration inside the diagram as it is a secure config.
You have to call mermaid.initialize.`);
      }
    }
    isLinkData(e) {
      return e !== null && typeof e == "object" && "id" in e && typeof e.id == "string";
    }
    addLink(e, t, s) {
      let i = this.isLinkData(s) ? s.id.replace("@", "") : undefined;
      loggerLevelUtils.logger.info("addLink", e, t, i);
      for (let r of e) {
        for (let n of t) {
          let u = r === e[e.length - 1];
          let a = n === t[0];
          if (u && a) {
            this.addSingleLink(r, n, s, i);
          } else {
            this.addSingleLink(r, n, s, undefined);
          }
        }
      }
    }
    updateLinkInterpolate(e, t) {
      e.forEach(e => {
        if (e === "default") {
          this.edges.defaultInterpolate = t;
        } else {
          this.edges[e].interpolate = t;
        }
      });
    }
    updateLink(e, t) {
      e.forEach(e => {
        if (typeof e == "number" && e >= this.edges.length) {
          throw Error(`The index ${e} for linkStyle is out of bounds. Valid indices for linkStyle are between 0 and ${this.edges.length - 1}. (Help: Ensure that the index is within the range of existing edges.)`);
        }
        if (e === "default") {
          this.edges.defaultStyle = t;
        } else {
          var i;
          var r;
          var n;
          var a;
          var l;
          this.edges[e].style = t;
          if (!!((((i = this.edges[e]) === null || i === undefined ? undefined : i.style?.length) ?? 0) > 0) && !((n = this.edges[e]) === null || n === undefined ? undefined : (r = n.style) === null || r === undefined ? undefined : r.some(e => e == null ? undefined : e.startsWith("fill"))) && (l = this.edges[e]) !== null && l !== undefined && (a = l.style) !== null && a !== undefined) {
            a.push("fill:none");
          }
        }
      });
    }
    addClass(e, t) {
      let s = t.join().replace(/\\,/g, "§§§").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
      e.split(",").forEach(e => {
        let t = this.classes.get(e);
        if (t === undefined) {
          t = {
            id: e,
            styles: [],
            textStyles: []
          };
          this.classes.set(e, t);
        }
        if (s != null) {
          s.forEach(e => {
            if (/color/.exec(e)) {
              let s = e.replace("fill", "bgFill");
              t.textStyles.push(s);
            }
            t.styles.push(e);
          });
        }
      });
    }
    setDirection(e) {
      this.direction = e.trim();
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
    setClass(e, t) {
      for (let s of e.split(",")) {
        let e = this.vertices.get(s);
        if (e) {
          e.classes.push(t);
        }
        let i = this.edges.find(e => e.id === s);
        if (i) {
          i.classes.push(t);
        }
        let r = this.subGraphLookup.get(s);
        if (r) {
          r.classes.push(t);
        }
      }
    }
    setTooltip(e, t) {
      if (t !== undefined) {
        t = this.sanitizeText(t);
        for (let s of e.split(",")) {
          this.tooltips.set(this.version === "gen-1" ? this.lookUpDomId(s) : s, t);
        }
      }
    }
    setClickFun(e, t, s) {
      let i = this.lookUpDomId(e);
      if (mermaidConfigUtils_1.getConfigAlias().securityLevel !== "loose" || t === undefined) {
        return;
      }
      let r = [];
      if (typeof s == "string") {
        r = s.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        for (let e = 0; e < r.length; e++) {
          let t = r[e].trim();
          if (t.startsWith("\"") && t.endsWith("\"")) {
            t = t.substr(1, t.length - 2);
          }
          r[e] = t;
        }
      }
      if (r.length === 0) {
        r.push(e);
      }
      let n = this.vertices.get(e);
      if (n) {
        n.haveCallback = true;
        this.funs.push(() => {
          let e = document.querySelector(`[id="${i}"]`);
          if (e !== null) {
            e.addEventListener("click", () => {
              mermaidDiagramUtils.mermaidUtils.runFunc(t, ...r);
            }, false);
          }
        });
      }
    }
    setLink(e, t, s) {
      e.split(",").forEach(e => {
        let i = this.vertices.get(e);
        if (i !== undefined) {
          i.link = mermaidDiagramUtils.mermaidUtils.formatUrl(t, this.config);
          i.linkTarget = s;
        }
      });
      this.setClass(e, "clickable");
    }
    getTooltip(e) {
      return this.tooltips.get(e);
    }
    setClickEvent(e, t, s) {
      e.split(",").forEach(e => {
        this.setClickFun(e, t, s);
      });
      this.setClass(e, "clickable");
    }
    bindFunctions(e) {
      this.funs.forEach(t => {
        t(e);
      });
    }
    getDirection() {
      var e;
      if ((e = this.direction) === null || e === undefined) {
        return undefined;
      } else {
        return e.trim();
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
    setupToolTips(e) {
      let t = axisAndZoomUtilities.select(".mermaidTooltip");
      if ((t._groups || t)[0][0] === null) {
        t = axisAndZoomUtilities.select("body").append("div").attr("class", "mermaidTooltip").style("opacity", 0);
      }
      axisAndZoomUtilities.select(e).select("svg").selectAll("g.node").on("mouseover", e => {
        var s;
        let i = axisAndZoomUtilities.select(e.currentTarget);
        if (i.attr("title") === null) {
          return;
        }
        let r = (s = e.currentTarget) === null || s === undefined ? undefined : s.getBoundingClientRect();
        t.transition().duration(200).style("opacity", ".9");
        t.text(i.attr("title")).style("left", window.scrollX + r.left + (r.right - r.left) / 2 + "px").style("top", window.scrollY + r.bottom + "px");
        t.html(t.html().replace(/&lt;br\/&gt;/g, "<br/>"));
        i.classed("hover", true);
      }).on("mouseout", e => {
        t.transition().duration(500).style("opacity", 0);
        axisAndZoomUtilities.select(e.currentTarget).classed("hover", false);
      });
    }
    clear(e = "gen-2") {
      this.vertices = new Map();
      this.classes = new Map();
      this.edges = [];
      this.funs = [this.setupToolTips.bind(this)];
      this.subGraphs = [];
      this.subGraphLookup = new Map();
      this.subCount = 0;
      this.tooltips = new Map();
      this.firstGraphFlag = true;
      this.version = e;
      this.config = mermaidConfigUtils_1.getConfigAlias();
      mermaidConfigUtils_1.clearCommonDb();
    }
    setGen(e) {
      this.version = e || "gen-2";
    }
    defaultStyle() {
      return "fill:#ffa;stroke: #f66; stroke-width: 3px; stroke-dasharray: 5, 5;fill:#ffa;stroke: #666;";
    }
    addSubGraph(e, t, s) {
      var n;
      let u = e.text.trim();
      let a = s.text;
      if (e === s && /\s/.exec(s.text)) {
        u = undefined;
      }
      let l = loggerLevelUtils.setFunctionName(e => {
        let t;
        let s = {
          boolean: {},
          number: {},
          string: {}
        };
        let i = [];
        return {
          nodeList: e.filter(function (e) {
            let r = typeof e;
            if (e.stmt && e.stmt === "dir") {
              t = e.value;
              return false;
            } else {
              return e.trim() !== "" && (r in s ? !s[r].hasOwnProperty(e) && (s[r][e] = true) : !i.includes(e) && i.push(e));
            }
          }),
          dir: t
        };
      }, "uniq")(t.flat());
      let o = l.nodeList;
      let c = l.dir;
      let h = mermaidConfigUtils_1.getConfigAlias().flowchart ?? {};
      c = c ?? (h.inheritDir && (n = this.getDirection() ?? mermaidConfigUtils_1.getConfigAlias().direction) !== null && n !== undefined ? n : undefined);
      if (this.version === "gen-1") {
        for (let e = 0; e < o.length; e++) {
          o[e] = this.lookUpDomId(o[e]);
        }
      }
      u = u ?? "subGraph" + this.subCount;
      a = a || "";
      a = this.sanitizeText(a);
      this.subCount = this.subCount + 1;
      let g = {
        id: u,
        nodes: o,
        title: a.trim(),
        classes: [],
        dir: c,
        labelType: s.type
      };
      loggerLevelUtils.logger.info("Adding", g.id, g.nodes, g.dir);
      g.nodes = this.makeUniq(g, this.subGraphs).nodes;
      this.subGraphs.push(g);
      this.subGraphLookup.set(u, g);
      return u;
    }
    getPosForId(e) {
      for (let [t, s] of this.subGraphs.entries()) {
        if (s.id === e) {
          return t;
        }
      }
      return -1;
    }
    indexNodes2(e, t) {
      let s = this.subGraphs[t].nodes;
      this.secCount = this.secCount + 1;
      if (this.secCount > 2000) {
        return {
          result: false,
          count: 0
        };
      }
      this.posCrossRef[this.secCount] = t;
      if (this.subGraphs[t].id === e) {
        return {
          result: true,
          count: 0
        };
      }
      let i = 0;
      let r = 1;
      while (i < s.length) {
        let t = this.getPosForId(s[i]);
        if (t >= 0) {
          let s = this.indexNodes2(e, t);
          if (s.result) {
            return {
              result: true,
              count: r + s.count
            };
          }
          r += s.count;
        }
        i += 1;
      }
      return {
        result: false,
        count: r
      };
    }
    getDepthFirstPos(e) {
      return this.posCrossRef[e];
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
    destructStartLink(e) {
      let t = e.trim();
      let s = "arrow_open";
      switch (t[0]) {
        case "<":
          s = "arrow_point";
          t = t.slice(1);
          break;
        case "x":
          s = "arrow_cross";
          t = t.slice(1);
          break;
        case "o":
          s = "arrow_circle";
          t = t.slice(1);
      }
      let i = "normal";
      if (t.includes("=")) {
        i = "thick";
      }
      if (t.includes(".")) {
        i = "dotted";
      }
      return {
        type: s,
        stroke: i
      };
    }
    countChar(e, t) {
      let s = t.length;
      let i = 0;
      for (let r = 0; r < s; ++r) {
        if (t[r] === e) {
          ++i;
        }
      }
      return i;
    }
    destructEndLink(e) {
      let t = e.trim();
      let s = t.slice(0, -1);
      let i = "arrow_open";
      switch (t.slice(-1)) {
        case "x":
          i = "arrow_cross";
          if (t.startsWith("x")) {
            i = "double_" + i;
            s = s.slice(1);
          }
          break;
        case ">":
          i = "arrow_point";
          if (t.startsWith("<")) {
            i = "double_" + i;
            s = s.slice(1);
          }
          break;
        case "o":
          i = "arrow_circle";
          if (t.startsWith("o")) {
            i = "double_" + i;
            s = s.slice(1);
          }
      }
      let r = "normal";
      let n = s.length - 1;
      if (s.startsWith("=")) {
        r = "thick";
      }
      if (s.startsWith("~")) {
        r = "invisible";
      }
      let u = this.countChar(".", s);
      if (u) {
        r = "dotted";
        n = u;
      }
      return {
        type: i,
        stroke: r,
        length: n
      };
    }
    destructLink(e, t) {
      let s;
      let i = this.destructEndLink(e);
      if (t) {
        if ((s = this.destructStartLink(t)).stroke !== i.stroke) {
          return {
            type: "INVALID",
            stroke: "INVALID"
          };
        }
        if (s.type === "arrow_open") {
          s.type = i.type;
        } else {
          if (s.type !== i.type) {
            return {
              type: "INVALID",
              stroke: "INVALID"
            };
          }
          s.type = "double_" + s.type;
        }
        if (s.type === "double_arrow") {
          s.type = "double_arrow_point";
        }
        s.length = i.length;
        return s;
      }
      return i;
    }
    exists(e, t) {
      for (let s of e) {
        if (s.nodes.includes(t)) {
          return true;
        }
      }
      return false;
    }
    makeUniq(e, t) {
      let s = [];
      e.nodes.forEach((i, r) => {
        if (!this.exists(t, i)) {
          s.push(e.nodes[r]);
        }
      });
      return {
        nodes: s
      };
    }
    getTypeFromVertex(e) {
      if (e.img) {
        return "imageSquare";
      }
      if (e.icon) {
        if (e.form === "circle") {
          return "iconCircle";
        } else if (e.form === "square") {
          return "iconSquare";
        } else if (e.form === "rounded") {
          return "iconRounded";
        } else {
          return "icon";
        }
      }
      switch (e.type) {
        case "square":
        case undefined:
          return "squareRect";
        case "round":
          return "roundedRect";
        case "ellipse":
          return "ellipse";
        default:
          return e.type;
      }
    }
    findNode(e, t) {
      return e.find(e => e.id === t);
    }
    destructEdgeType(e) {
      let t = "none";
      let s = "arrow_point";
      switch (e) {
        case "arrow_point":
        case "arrow_circle":
        case "arrow_cross":
          s = e;
          break;
        case "double_arrow_point":
        case "double_arrow_circle":
        case "double_arrow_cross":
          s = t = e.replace("double_", "");
      }
      return {
        arrowTypeStart: t,
        arrowTypeEnd: s
      };
    }
    addNodeFromVertex(e, t, s, i, r, n) {
      var u;
      let l = s.get(e.id);
      let o = (u = i.get(e.id)) !== null && u !== undefined && u;
      let c = this.findNode(t, e.id);
      if (c) {
        c.cssStyles = e.styles;
        c.cssCompiledStyles = this.getCompiledStyles(e.classes);
        c.cssClasses = e.classes.join(" ");
      } else {
        let s = {
          id: e.id,
          label: e.text,
          labelStyle: "",
          parentId: l,
          padding: r.flowchart?.padding || 8,
          cssStyles: e.styles,
          cssCompiledStyles: this.getCompiledStyles(["default", "node", ...e.classes]),
          cssClasses: "default " + e.classes.join(" "),
          dir: e.dir,
          domId: e.domId,
          look: n,
          link: e.link,
          linkTarget: e.linkTarget,
          tooltip: this.getTooltip(e.id),
          icon: e.icon,
          pos: e.pos,
          img: e.img,
          assetWidth: e.assetWidth,
          assetHeight: e.assetHeight,
          constraint: e.constraint
        };
        if (o) {
          t.push({
            ...s,
            isGroup: true,
            shape: "rect"
          });
        } else {
          t.push({
            ...s,
            isGroup: false,
            shape: this.getTypeFromVertex(e)
          });
        }
      }
    }
    getCompiledStyles(e) {
      let t = [];
      for (let r of e) {
        let e = this.classes.get(r);
        if (e == null ? undefined : e.styles) {
          t = [...t, ...(e.styles ?? [])].map(e => e.trim());
        }
        if (e == null ? undefined : e.textStyles) {
          t = [...t, ...(e.textStyles ?? [])].map(e => e.trim());
        }
      }
      return t;
    }
    getData() {
      let e = mermaidConfigUtils_1.getConfigAlias();
      let t = [];
      let s = [];
      let i = this.getSubGraphs();
      let r = new Map();
      let n = new Map();
      for (let e = i.length - 1; e >= 0; e--) {
        let t = i[e];
        if (t.nodes.length > 0) {
          n.set(t.id, true);
        }
        for (let e of t.nodes) {
          r.set(e, t.id);
        }
      }
      for (let s = i.length - 1; s >= 0; s--) {
        let n = i[s];
        t.push({
          id: n.id,
          label: n.title,
          labelStyle: "",
          parentId: r.get(n.id),
          padding: 8,
          cssCompiledStyles: this.getCompiledStyles(n.classes),
          cssClasses: n.classes.join(" "),
          shape: "rect",
          dir: n.dir,
          isGroup: true,
          look: e.look
        });
      }
      this.getVertices().forEach(s => {
        this.addNodeFromVertex(s, t, r, n, e, e.look || "classic");
      });
      let u = this.getEdges();
      u.forEach((t, i) => {
        let {
          arrowTypeStart: l,
          arrowTypeEnd: o
        } = this.destructEdgeType(t.type);
        let c = [...(u.defaultStyle ?? [])];
        if (t.style) {
          c.push(...t.style);
        }
        let d = {
          id: mermaidDiagramUtils.getEdgeId(t.start, t.end, {
            counter: i,
            prefix: "L"
          }, t.id),
          isUserDefinedId: t.isUserDefinedId,
          start: t.start,
          end: t.end,
          type: t.type ?? "normal",
          label: t.text,
          labelpos: "c",
          thickness: t.stroke,
          minlen: t.length,
          classes: (t == null ? undefined : t.stroke) === "invisible" ? "" : "edge-thickness-normal edge-pattern-solid flowchart-link",
          arrowTypeStart: (t == null ? undefined : t.stroke) === "invisible" || (t == null ? undefined : t.type) === "arrow_open" ? "none" : l,
          arrowTypeEnd: (t == null ? undefined : t.stroke) === "invisible" || (t == null ? undefined : t.type) === "arrow_open" ? "none" : o,
          arrowheadStyle: "fill: #333",
          cssCompiledStyles: this.getCompiledStyles(t.classes),
          labelStyle: c,
          style: c,
          pattern: t.stroke,
          look: e.look,
          animate: t.animate,
          animation: t.animation,
          curve: t.interpolate || this.edges.defaultInterpolate || e.flowchart?.curve
        };
        s.push(d);
      });
      return {
        nodes: t,
        edges: s,
        other: {},
        config: e
      };
    }
    defaultConfig() {
      return mermaidConfigUtils_1.frozenConfig.flowchart;
    }
    constructor() {
      this.vertexCounter = 0;
      this.config = mermaidConfigUtils_1.getConfigAlias();
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
      this.setAccTitle = mermaidConfigUtils_1.setAccTitle;
      this.setAccDescription = mermaidConfigUtils_1.setAccDescription;
      this.setDiagramTitle = mermaidConfigUtils_1.setDiagramTitle;
      this.getAccTitle = mermaidConfigUtils_1.getAccTitle;
      this.getAccDescription = mermaidConfigUtils_1.getAccDescription;
      this.getDiagramTitle = mermaidConfigUtils_1.getDiagramTitle;
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
  loggerLevelUtils.setFunctionName(i, "FlowDB");
  var k = i;
  var f = loggerLevelUtils.setFunctionName(function (e, t) {
    return t.db.getClasses();
  }, "getClasses");
  var y = loggerLevelUtils.setFunctionName(async function (e, t, s, i) {
    let u;
    loggerLevelUtils.logger.info("REF0:");
    loggerLevelUtils.logger.info("Drawing state diagram (v2)", t);
    let {
      securityLevel: c,
      flowchart: A,
      layout: b
    } = mermaidConfigUtils_1.getConfigAlias();
    if (c === "sandbox") {
      u = axisAndZoomUtilities.select("#i" + t);
    }
    let k = c === "sandbox" ? u.nodes()[0].contentDocument : document;
    loggerLevelUtils.logger.debug("Before getData: ");
    let f = i.db.getData();
    loggerLevelUtils.logger.debug("Data: ", f);
    let y = diagramElementSelector.getDiagramElement(t, c);
    let m = i.db.getDirection();
    f.type = i.type;
    f.layoutAlgorithm = mermaidLayoutRegistryRenderer.getRegisteredLayoutAlgorithm(b);
    if (f.layoutAlgorithm === "dagre" && b === "elk") {
      loggerLevelUtils.logger.warn("flowchart-elk was moved to an external package in Mermaid v11. Please refer [release notes](https://github.com/mermaid-js/mermaid/releases/tag/v11.0.0) for more details. This diagram will be rendered using `dagre` layout as a fallback.");
    }
    f.direction = m;
    f.nodeSpacing = (A == null ? undefined : A.nodeSpacing) || 50;
    f.rankSpacing = (A == null ? undefined : A.rankSpacing) || 50;
    f.markers = ["point", "circle", "cross"];
    f.diagramId = t;
    loggerLevelUtils.logger.debug("REF1:", f);
    await mermaidLayoutRegistryRenderer.render(f, y);
    let E = f.config.flowchart?.diagramPadding ?? 8;
    mermaidDiagramUtils.mermaidUtils.insertTitle(y, "flowchartTitleText", (A == null ? undefined : A.titleTopMargin) || 0, i.db.getDiagramTitle());
    mermaidSvgViewportSetup.setupViewPortForSvg(y, E, "flowchart", (A == null ? undefined : A.useMaxWidth) || false);
    for (let e of f.nodes) {
      let s = axisAndZoomUtilities.select(`#${t} [id="${e.id}"]`);
      if (!s || !e.link) {
        continue;
      }
      let i = k.createElementNS("http://www.w3.org/2000/svg", "a");
      i.setAttributeNS("http://www.w3.org/2000/svg", "class", e.cssClasses);
      i.setAttributeNS("http://www.w3.org/2000/svg", "rel", "noopener");
      if (c === "sandbox") {
        i.setAttributeNS("http://www.w3.org/2000/svg", "target", "_top");
      } else if (e.linkTarget) {
        i.setAttributeNS("http://www.w3.org/2000/svg", "target", e.linkTarget);
      }
      let r = s.insert(function () {
        return i;
      }, ":first-child");
      let n = s.select(".label-container");
      if (n) {
        r.append(function () {
          return n.node();
        });
      }
      let u = s.select(".label");
      if (u) {
        r.append(function () {
          return u.node();
        });
      }
    }
  }, "draw");
  var m = function () {
    var e = loggerLevelUtils.setFunctionName(function (e, t, s, i) {
      s = s || {};
      i = e.length;
      for (; i--; s[e[i]] = t);
      return s;
    }, "o");
    var t = [1, 4];
    var s = [1, 3];
    var i = [1, 5];
    var n = [1, 8, 9, 10, 11, 27, 34, 36, 38, 44, 60, 84, 85, 86, 87, 88, 89, 102, 105, 106, 109, 111, 114, 115, 116, 121, 122, 123, 124];
    var u = [2, 2];
    var a = [1, 13];
    var l = [1, 14];
    var o = [1, 15];
    var c = [1, 16];
    var h = [1, 23];
    var d = [1, 25];
    var g = [1, 26];
    var A = [1, 27];
    var b = [1, 49];
    var k = [1, 48];
    var f = [1, 29];
    var y = [1, 30];
    var m = [1, 31];
    var E = [1, 32];
    var v = [1, 33];
    var D = [1, 44];
    var C = [1, 46];
    var x = [1, 42];
    var F = [1, 47];
    var T = [1, 43];
    var S = [1, 50];
    var _ = [1, 45];
    var B = [1, 51];
    var $ = [1, 52];
    var w = [1, 34];
    var L = [1, 35];
    var R = [1, 36];
    var I = [1, 37];
    var N = [1, 57];
    var W = [1, 8, 9, 10, 11, 27, 32, 34, 36, 38, 44, 60, 84, 85, 86, 87, 88, 89, 102, 105, 106, 109, 111, 114, 115, 116, 121, 122, 123, 124];
    var P = [1, 61];
    var M = [1, 60];
    var G = [1, 62];
    var O = [8, 9, 11, 75, 77, 78];
    var V = [1, 78];
    var U = [1, 91];
    var j = [1, 96];
    var Y = [1, 95];
    var Z = [1, 92];
    var z = [1, 88];
    var K = [1, 94];
    var H = [1, 90];
    var q = [1, 97];
    var X = [1, 93];
    var Q = [1, 98];
    var J = [1, 89];
    var ee = [8, 9, 10, 11, 40, 75, 77, 78];
    var et = [8, 9, 10, 11, 40, 46, 75, 77, 78];
    var es = [8, 9, 10, 11, 29, 40, 44, 46, 48, 50, 52, 54, 56, 58, 60, 63, 65, 67, 68, 70, 75, 77, 78, 89, 102, 105, 106, 109, 111, 114, 115, 116];
    var ei = [8, 9, 11, 44, 60, 75, 77, 78, 89, 102, 105, 106, 109, 111, 114, 115, 116];
    var er = [44, 60, 89, 102, 105, 106, 109, 111, 114, 115, 116];
    var en = [1, 121];
    var eu = [1, 122];
    var ea = [1, 124];
    var el = [1, 123];
    var eo = [44, 60, 62, 74, 89, 102, 105, 106, 109, 111, 114, 115, 116];
    var ec = [1, 133];
    var eh = [1, 147];
    var ed = [1, 148];
    var ep = [1, 149];
    var eg = [1, 150];
    var eA = [1, 135];
    var eb = [1, 137];
    var ek = [1, 141];
    var ef = [1, 142];
    var ey = [1, 143];
    var em = [1, 144];
    var eE = [1, 145];
    var ev = [1, 146];
    var eD = [1, 151];
    var eC = [1, 152];
    var ex = [1, 131];
    var eF = [1, 132];
    var eT = [1, 139];
    var eS = [1, 134];
    var e_ = [1, 138];
    var eB = [1, 136];
    var e$ = [8, 9, 10, 11, 27, 32, 34, 36, 38, 44, 60, 84, 85, 86, 87, 88, 89, 102, 105, 106, 109, 111, 114, 115, 116, 121, 122, 123, 124];
    var ew = [1, 154];
    var eL = [1, 156];
    var eR = [8, 9, 11];
    var eI = [8, 9, 10, 11, 14, 44, 60, 89, 105, 106, 109, 111, 114, 115, 116];
    var eN = [1, 176];
    var eW = [1, 172];
    var eP = [1, 173];
    var eM = [1, 177];
    var eG = [1, 174];
    var eO = [1, 175];
    var eV = [77, 116, 119];
    var eU = [8, 9, 10, 11, 12, 14, 27, 29, 32, 44, 60, 75, 84, 85, 86, 87, 88, 89, 90, 105, 109, 111, 114, 115, 116];
    var ej = [10, 106];
    var eY = [31, 49, 51, 53, 55, 57, 62, 64, 66, 67, 69, 71, 116, 117, 118];
    var eZ = [1, 247];
    var ez = [1, 245];
    var eK = [1, 249];
    var eH = [1, 243];
    var eq = [1, 244];
    var eX = [1, 246];
    var eQ = [1, 248];
    var eJ = [1, 250];
    var e1 = [1, 268];
    var e0 = [8, 9, 11, 106];
    var e2 = [8, 9, 10, 11, 60, 84, 105, 106, 109, 110, 111, 112];
    var e8 = {
      trace: loggerLevelUtils.setFunctionName(function () {}, "trace"),
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
      performAction: loggerLevelUtils.setFunctionName(function (e, t, s, i, r, n, u) {
        var a = n.length - 1;
        switch (r) {
          case 2:
          case 28:
          case 29:
          case 30:
          case 31:
          case 32:
            this.$ = [];
            break;
          case 3:
            if (!Array.isArray(n[a]) || n[a].length > 0) {
              n[a - 1].push(n[a]);
            }
            this.$ = n[a - 1];
            break;
          case 4:
          case 183:
          case 44:
          case 54:
          case 76:
          case 181:
            this.$ = n[a];
            break;
          case 11:
            i.setDirection("TB");
            this.$ = "TB";
            break;
          case 12:
            i.setDirection(n[a - 1]);
            this.$ = n[a - 1];
            break;
          case 27:
            this.$ = n[a - 1].nodes;
            break;
          case 33:
            this.$ = i.addSubGraph(n[a - 6], n[a - 1], n[a - 4]);
            break;
          case 34:
            this.$ = i.addSubGraph(n[a - 3], n[a - 1], n[a - 3]);
            break;
          case 35:
            this.$ = i.addSubGraph(undefined, n[a - 1], undefined);
            break;
          case 37:
            this.$ = n[a].trim();
            i.setAccTitle(this.$);
            break;
          case 38:
          case 39:
            this.$ = n[a].trim();
            i.setAccDescription(this.$);
            break;
          case 43:
          case 133:
            this.$ = n[a - 1] + n[a];
            break;
          case 45:
            i.addVertex(n[a - 1][n[a - 1].length - 1], undefined, undefined, undefined, undefined, undefined, undefined, n[a]);
            i.addLink(n[a - 3].stmt, n[a - 1], n[a - 2]);
            this.$ = {
              stmt: n[a - 1],
              nodes: n[a - 1].concat(n[a - 3].nodes)
            };
            break;
          case 46:
            i.addLink(n[a - 2].stmt, n[a], n[a - 1]);
            this.$ = {
              stmt: n[a],
              nodes: n[a].concat(n[a - 2].nodes)
            };
            break;
          case 47:
            i.addLink(n[a - 3].stmt, n[a - 1], n[a - 2]);
            this.$ = {
              stmt: n[a - 1],
              nodes: n[a - 1].concat(n[a - 3].nodes)
            };
            break;
          case 48:
            this.$ = {
              stmt: n[a - 1],
              nodes: n[a - 1]
            };
            break;
          case 49:
            i.addVertex(n[a - 1][n[a - 1].length - 1], undefined, undefined, undefined, undefined, undefined, undefined, n[a]);
            this.$ = {
              stmt: n[a - 1],
              nodes: n[a - 1],
              shapeData: n[a]
            };
            break;
          case 50:
            this.$ = {
              stmt: n[a],
              nodes: n[a]
            };
            break;
          case 51:
          case 128:
          case 130:
            this.$ = [n[a]];
            break;
          case 52:
            i.addVertex(n[a - 5][n[a - 5].length - 1], undefined, undefined, undefined, undefined, undefined, undefined, n[a - 4]);
            this.$ = n[a - 5].concat(n[a]);
            break;
          case 53:
            this.$ = n[a - 4].concat(n[a]);
            break;
          case 55:
            this.$ = n[a - 2];
            i.setClass(n[a - 2], n[a]);
            break;
          case 56:
            this.$ = n[a - 3];
            i.addVertex(n[a - 3], n[a - 1], "square");
            break;
          case 57:
            this.$ = n[a - 3];
            i.addVertex(n[a - 3], n[a - 1], "doublecircle");
            break;
          case 58:
            this.$ = n[a - 5];
            i.addVertex(n[a - 5], n[a - 2], "circle");
            break;
          case 59:
            this.$ = n[a - 3];
            i.addVertex(n[a - 3], n[a - 1], "ellipse");
            break;
          case 60:
            this.$ = n[a - 3];
            i.addVertex(n[a - 3], n[a - 1], "stadium");
            break;
          case 61:
            this.$ = n[a - 3];
            i.addVertex(n[a - 3], n[a - 1], "subroutine");
            break;
          case 62:
            this.$ = n[a - 7];
            i.addVertex(n[a - 7], n[a - 1], "rect", undefined, undefined, undefined, Object.fromEntries([[n[a - 5], n[a - 3]]]));
            break;
          case 63:
            this.$ = n[a - 3];
            i.addVertex(n[a - 3], n[a - 1], "cylinder");
            break;
          case 64:
            this.$ = n[a - 3];
            i.addVertex(n[a - 3], n[a - 1], "round");
            break;
          case 65:
            this.$ = n[a - 3];
            i.addVertex(n[a - 3], n[a - 1], "diamond");
            break;
          case 66:
            this.$ = n[a - 5];
            i.addVertex(n[a - 5], n[a - 2], "hexagon");
            break;
          case 67:
            this.$ = n[a - 3];
            i.addVertex(n[a - 3], n[a - 1], "odd");
            break;
          case 68:
            this.$ = n[a - 3];
            i.addVertex(n[a - 3], n[a - 1], "trapezoid");
            break;
          case 69:
            this.$ = n[a - 3];
            i.addVertex(n[a - 3], n[a - 1], "inv_trapezoid");
            break;
          case 70:
            this.$ = n[a - 3];
            i.addVertex(n[a - 3], n[a - 1], "lean_right");
            break;
          case 71:
            this.$ = n[a - 3];
            i.addVertex(n[a - 3], n[a - 1], "lean_left");
            break;
          case 72:
            this.$ = n[a];
            i.addVertex(n[a]);
            break;
          case 73:
            n[a - 1].text = n[a];
            this.$ = n[a - 1];
            break;
          case 74:
          case 75:
            n[a - 2].text = n[a - 1];
            this.$ = n[a - 2];
            break;
          case 77:
            var l = i.destructLink(n[a], n[a - 2]);
            this.$ = {
              type: l.type,
              stroke: l.stroke,
              length: l.length,
              text: n[a - 1]
            };
            break;
          case 78:
            var l = i.destructLink(n[a], n[a - 2]);
            this.$ = {
              type: l.type,
              stroke: l.stroke,
              length: l.length,
              text: n[a - 1],
              id: n[a - 3]
            };
            break;
          case 79:
          case 86:
          case 101:
          case 103:
            this.$ = {
              text: n[a],
              type: "text"
            };
            break;
          case 80:
          case 87:
          case 102:
            this.$ = {
              text: n[a - 1].text + "" + n[a],
              type: n[a - 1].type
            };
            break;
          case 81:
          case 88:
            this.$ = {
              text: n[a],
              type: "string"
            };
            break;
          case 82:
          case 89:
          case 104:
            this.$ = {
              text: n[a],
              type: "markdown"
            };
            break;
          case 83:
            var l = i.destructLink(n[a]);
            this.$ = {
              type: l.type,
              stroke: l.stroke,
              length: l.length
            };
            break;
          case 84:
            var l = i.destructLink(n[a]);
            this.$ = {
              type: l.type,
              stroke: l.stroke,
              length: l.length,
              id: n[a - 1]
            };
            break;
          case 85:
            this.$ = n[a - 1];
            break;
          case 105:
            this.$ = n[a - 4];
            i.addClass(n[a - 2], n[a]);
            break;
          case 106:
            this.$ = n[a - 4];
            i.setClass(n[a - 2], n[a]);
            break;
          case 107:
          case 115:
            this.$ = n[a - 1];
            i.setClickEvent(n[a - 1], n[a]);
            break;
          case 108:
          case 116:
            this.$ = n[a - 3];
            i.setClickEvent(n[a - 3], n[a - 2]);
            i.setTooltip(n[a - 3], n[a]);
            break;
          case 109:
            this.$ = n[a - 2];
            i.setClickEvent(n[a - 2], n[a - 1], n[a]);
            break;
          case 110:
            this.$ = n[a - 4];
            i.setClickEvent(n[a - 4], n[a - 3], n[a - 2]);
            i.setTooltip(n[a - 4], n[a]);
            break;
          case 111:
            this.$ = n[a - 2];
            i.setLink(n[a - 2], n[a]);
            break;
          case 112:
            this.$ = n[a - 4];
            i.setLink(n[a - 4], n[a - 2]);
            i.setTooltip(n[a - 4], n[a]);
            break;
          case 113:
            this.$ = n[a - 4];
            i.setLink(n[a - 4], n[a - 2], n[a]);
            break;
          case 114:
            this.$ = n[a - 6];
            i.setLink(n[a - 6], n[a - 4], n[a]);
            i.setTooltip(n[a - 6], n[a - 2]);
            break;
          case 117:
            this.$ = n[a - 1];
            i.setLink(n[a - 1], n[a]);
            break;
          case 118:
            this.$ = n[a - 3];
            i.setLink(n[a - 3], n[a - 2]);
            i.setTooltip(n[a - 3], n[a]);
            break;
          case 119:
            this.$ = n[a - 3];
            i.setLink(n[a - 3], n[a - 2], n[a]);
            break;
          case 120:
            this.$ = n[a - 5];
            i.setLink(n[a - 5], n[a - 4], n[a]);
            i.setTooltip(n[a - 5], n[a - 2]);
            break;
          case 121:
            this.$ = n[a - 4];
            i.addVertex(n[a - 2], undefined, undefined, n[a]);
            break;
          case 122:
            this.$ = n[a - 4];
            i.updateLink([n[a - 2]], n[a]);
            break;
          case 123:
            this.$ = n[a - 4];
            i.updateLink(n[a - 2], n[a]);
            break;
          case 124:
            this.$ = n[a - 8];
            i.updateLinkInterpolate([n[a - 6]], n[a - 2]);
            i.updateLink([n[a - 6]], n[a]);
            break;
          case 125:
            this.$ = n[a - 8];
            i.updateLinkInterpolate(n[a - 6], n[a - 2]);
            i.updateLink(n[a - 6], n[a]);
            break;
          case 126:
            this.$ = n[a - 6];
            i.updateLinkInterpolate([n[a - 4]], n[a]);
            break;
          case 127:
            this.$ = n[a - 6];
            i.updateLinkInterpolate(n[a - 4], n[a]);
            break;
          case 129:
          case 131:
            n[a - 2].push(n[a]);
            this.$ = n[a - 2];
            break;
          case 182:
          case 184:
            this.$ = n[a - 1] + "" + n[a];
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
        9: t,
        10: s,
        12: i
      }, {
        1: [3]
      }, e(n, u, {
        5: 6
      }), {
        4: 7,
        9: t,
        10: s,
        12: i
      }, {
        4: 8,
        9: t,
        10: s,
        12: i
      }, {
        13: [1, 9],
        14: [1, 10]
      }, {
        1: [2, 1],
        6: 11,
        7: 12,
        8: a,
        9: l,
        10: o,
        11: c,
        20: 17,
        22: 18,
        23: 19,
        24: 20,
        25: 21,
        26: 22,
        27: h,
        33: 24,
        34: d,
        36: g,
        38: A,
        42: 28,
        43: 38,
        44: b,
        45: 39,
        47: 40,
        60: k,
        84: f,
        85: y,
        86: m,
        87: E,
        88: v,
        89: D,
        102: C,
        105: x,
        106: F,
        109: T,
        111: S,
        113: 41,
        114: _,
        115: B,
        116: $,
        121: w,
        122: L,
        123: R,
        124: I
      }, e(n, [2, 9]), e(n, [2, 10]), e(n, [2, 11]), {
        8: [1, 54],
        9: [1, 55],
        10: N,
        15: 53,
        18: 56
      }, e(W, [2, 3]), e(W, [2, 4]), e(W, [2, 5]), e(W, [2, 6]), e(W, [2, 7]), e(W, [2, 8]), {
        8: P,
        9: M,
        11: G,
        21: 58,
        41: 59,
        72: 63,
        75: [1, 64],
        77: [1, 66],
        78: [1, 65]
      }, {
        8: P,
        9: M,
        11: G,
        21: 67
      }, {
        8: P,
        9: M,
        11: G,
        21: 68
      }, {
        8: P,
        9: M,
        11: G,
        21: 69
      }, {
        8: P,
        9: M,
        11: G,
        21: 70
      }, {
        8: P,
        9: M,
        11: G,
        21: 71
      }, {
        8: P,
        9: M,
        10: [1, 72],
        11: G,
        21: 73
      }, e(W, [2, 36]), {
        35: [1, 74]
      }, {
        37: [1, 75]
      }, e(W, [2, 39]), e(O, [2, 50], {
        18: 76,
        39: 77,
        10: N,
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
        14: U,
        44: j,
        60: Y,
        80: [1, 86],
        89: Z,
        95: [1, 83],
        97: [1, 84],
        101: 85,
        105: z,
        106: K,
        109: H,
        111: q,
        114: X,
        115: Q,
        116: J,
        120: 87
      }, e(W, [2, 185]), e(W, [2, 186]), e(W, [2, 187]), e(W, [2, 188]), e(ee, [2, 51]), e(ee, [2, 54], {
        46: [1, 99]
      }), e(et, [2, 72], {
        113: 112,
        29: [1, 100],
        44: b,
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
        89: D,
        102: C,
        105: x,
        106: F,
        109: T,
        111: S,
        114: _,
        115: B,
        116: $
      }), e(es, [2, 181]), e(es, [2, 142]), e(es, [2, 143]), e(es, [2, 144]), e(es, [2, 145]), e(es, [2, 146]), e(es, [2, 147]), e(es, [2, 148]), e(es, [2, 149]), e(es, [2, 150]), e(es, [2, 151]), e(es, [2, 152]), e(n, [2, 12]), e(n, [2, 18]), e(n, [2, 19]), {
        9: [1, 113]
      }, e(ei, [2, 26], {
        18: 114,
        10: N
      }), e(W, [2, 27]), {
        42: 115,
        43: 38,
        44: b,
        45: 39,
        47: 40,
        60: k,
        89: D,
        102: C,
        105: x,
        106: F,
        109: T,
        111: S,
        113: 41,
        114: _,
        115: B,
        116: $
      }, e(W, [2, 40]), e(W, [2, 41]), e(W, [2, 42]), e(er, [2, 76], {
        73: 116,
        62: [1, 118],
        74: [1, 117]
      }), {
        76: 119,
        79: 120,
        80: en,
        81: eu,
        116: ea,
        119: el
      }, {
        75: [1, 125],
        77: [1, 126]
      }, e(eo, [2, 83]), e(W, [2, 28]), e(W, [2, 29]), e(W, [2, 30]), e(W, [2, 31]), e(W, [2, 32]), {
        10: ec,
        12: eh,
        14: ed,
        27: ep,
        28: 127,
        32: eg,
        44: eA,
        60: eb,
        75: ek,
        80: [1, 129],
        81: [1, 130],
        83: 140,
        84: ef,
        85: ey,
        86: em,
        87: eE,
        88: ev,
        89: eD,
        90: eC,
        91: 128,
        105: ex,
        109: eF,
        111: eT,
        114: eS,
        115: e_,
        116: eB
      }, e(e$, u, {
        5: 153
      }), e(W, [2, 37]), e(W, [2, 38]), e(O, [2, 48], {
        44: ew
      }), e(O, [2, 49], {
        18: 155,
        10: N,
        40: eL
      }), e(ee, [2, 44]), {
        44: b,
        47: 157,
        60: k,
        89: D,
        102: C,
        105: x,
        106: F,
        109: T,
        111: S,
        113: 41,
        114: _,
        115: B,
        116: $
      }, {
        102: [1, 158],
        103: 159,
        105: [1, 160]
      }, {
        44: b,
        47: 161,
        60: k,
        89: D,
        102: C,
        105: x,
        106: F,
        109: T,
        111: S,
        113: 41,
        114: _,
        115: B,
        116: $
      }, {
        44: b,
        47: 162,
        60: k,
        89: D,
        102: C,
        105: x,
        106: F,
        109: T,
        111: S,
        113: 41,
        114: _,
        115: B,
        116: $
      }, e(eR, [2, 107], {
        10: [1, 163],
        96: [1, 164]
      }), {
        80: [1, 165]
      }, e(eR, [2, 115], {
        120: 167,
        10: [1, 166],
        14: U,
        44: j,
        60: Y,
        89: Z,
        105: z,
        106: K,
        109: H,
        111: q,
        114: X,
        115: Q,
        116: J
      }), e(eR, [2, 117], {
        10: [1, 168]
      }), e(eI, [2, 183]), e(eI, [2, 170]), e(eI, [2, 171]), e(eI, [2, 172]), e(eI, [2, 173]), e(eI, [2, 174]), e(eI, [2, 175]), e(eI, [2, 176]), e(eI, [2, 177]), e(eI, [2, 178]), e(eI, [2, 179]), e(eI, [2, 180]), {
        44: b,
        47: 169,
        60: k,
        89: D,
        102: C,
        105: x,
        106: F,
        109: T,
        111: S,
        113: 41,
        114: _,
        115: B,
        116: $
      }, {
        30: 170,
        67: eN,
        80: eW,
        81: eP,
        82: 171,
        116: eM,
        117: eG,
        118: eO
      }, {
        30: 178,
        67: eN,
        80: eW,
        81: eP,
        82: 171,
        116: eM,
        117: eG,
        118: eO
      }, {
        30: 180,
        50: [1, 179],
        67: eN,
        80: eW,
        81: eP,
        82: 171,
        116: eM,
        117: eG,
        118: eO
      }, {
        30: 181,
        67: eN,
        80: eW,
        81: eP,
        82: 171,
        116: eM,
        117: eG,
        118: eO
      }, {
        30: 182,
        67: eN,
        80: eW,
        81: eP,
        82: 171,
        116: eM,
        117: eG,
        118: eO
      }, {
        30: 183,
        67: eN,
        80: eW,
        81: eP,
        82: 171,
        116: eM,
        117: eG,
        118: eO
      }, {
        109: [1, 184]
      }, {
        30: 185,
        67: eN,
        80: eW,
        81: eP,
        82: 171,
        116: eM,
        117: eG,
        118: eO
      }, {
        30: 186,
        65: [1, 187],
        67: eN,
        80: eW,
        81: eP,
        82: 171,
        116: eM,
        117: eG,
        118: eO
      }, {
        30: 188,
        67: eN,
        80: eW,
        81: eP,
        82: 171,
        116: eM,
        117: eG,
        118: eO
      }, {
        30: 189,
        67: eN,
        80: eW,
        81: eP,
        82: 171,
        116: eM,
        117: eG,
        118: eO
      }, {
        30: 190,
        67: eN,
        80: eW,
        81: eP,
        82: 171,
        116: eM,
        117: eG,
        118: eO
      }, e(es, [2, 182]), e(n, [2, 20]), e(ei, [2, 25]), e(O, [2, 46], {
        39: 191,
        18: 192,
        10: N,
        40: V
      }), e(er, [2, 73], {
        10: [1, 193]
      }), {
        10: [1, 194]
      }, {
        30: 195,
        67: eN,
        80: eW,
        81: eP,
        82: 171,
        116: eM,
        117: eG,
        118: eO
      }, {
        77: [1, 196],
        79: 197,
        116: ea,
        119: el
      }, e(eV, [2, 79]), e(eV, [2, 81]), e(eV, [2, 82]), e(eV, [2, 168]), e(eV, [2, 169]), {
        76: 198,
        79: 120,
        80: en,
        81: eu,
        116: ea,
        119: el
      }, e(eo, [2, 84]), {
        8: P,
        9: M,
        10: ec,
        11: G,
        12: eh,
        14: ed,
        21: 200,
        27: ep,
        29: [1, 199],
        32: eg,
        44: eA,
        60: eb,
        75: ek,
        83: 140,
        84: ef,
        85: ey,
        86: em,
        87: eE,
        88: ev,
        89: eD,
        90: eC,
        91: 201,
        105: ex,
        109: eF,
        111: eT,
        114: eS,
        115: e_,
        116: eB
      }, e(eU, [2, 101]), e(eU, [2, 103]), e(eU, [2, 104]), e(eU, [2, 157]), e(eU, [2, 158]), e(eU, [2, 159]), e(eU, [2, 160]), e(eU, [2, 161]), e(eU, [2, 162]), e(eU, [2, 163]), e(eU, [2, 164]), e(eU, [2, 165]), e(eU, [2, 166]), e(eU, [2, 167]), e(eU, [2, 90]), e(eU, [2, 91]), e(eU, [2, 92]), e(eU, [2, 93]), e(eU, [2, 94]), e(eU, [2, 95]), e(eU, [2, 96]), e(eU, [2, 97]), e(eU, [2, 98]), e(eU, [2, 99]), e(eU, [2, 100]), {
        6: 11,
        7: 12,
        8: a,
        9: l,
        10: o,
        11: c,
        20: 17,
        22: 18,
        23: 19,
        24: 20,
        25: 21,
        26: 22,
        27: h,
        32: [1, 202],
        33: 24,
        34: d,
        36: g,
        38: A,
        42: 28,
        43: 38,
        44: b,
        45: 39,
        47: 40,
        60: k,
        84: f,
        85: y,
        86: m,
        87: E,
        88: v,
        89: D,
        102: C,
        105: x,
        106: F,
        109: T,
        111: S,
        113: 41,
        114: _,
        115: B,
        116: $,
        121: w,
        122: L,
        123: R,
        124: I
      }, {
        10: N,
        18: 203
      }, {
        44: [1, 204]
      }, e(ee, [2, 43]), {
        10: [1, 205],
        44: b,
        60: k,
        89: D,
        102: C,
        105: x,
        106: F,
        109: T,
        111: S,
        113: 112,
        114: _,
        115: B,
        116: $
      }, {
        10: [1, 206]
      }, {
        10: [1, 207],
        106: [1, 208]
      }, e(ej, [2, 128]), {
        10: [1, 209],
        44: b,
        60: k,
        89: D,
        102: C,
        105: x,
        106: F,
        109: T,
        111: S,
        113: 112,
        114: _,
        115: B,
        116: $
      }, {
        10: [1, 210],
        44: b,
        60: k,
        89: D,
        102: C,
        105: x,
        106: F,
        109: T,
        111: S,
        113: 112,
        114: _,
        115: B,
        116: $
      }, {
        80: [1, 211]
      }, e(eR, [2, 109], {
        10: [1, 212]
      }), e(eR, [2, 111], {
        10: [1, 213]
      }), {
        80: [1, 214]
      }, e(eI, [2, 184]), {
        80: [1, 215],
        98: [1, 216]
      }, e(ee, [2, 55], {
        113: 112,
        44: b,
        60: k,
        89: D,
        102: C,
        105: x,
        106: F,
        109: T,
        111: S,
        114: _,
        115: B,
        116: $
      }), {
        31: [1, 217],
        67: eN,
        82: 218,
        116: eM,
        117: eG,
        118: eO
      }, e(eY, [2, 86]), e(eY, [2, 88]), e(eY, [2, 89]), e(eY, [2, 153]), e(eY, [2, 154]), e(eY, [2, 155]), e(eY, [2, 156]), {
        49: [1, 219],
        67: eN,
        82: 218,
        116: eM,
        117: eG,
        118: eO
      }, {
        30: 220,
        67: eN,
        80: eW,
        81: eP,
        82: 171,
        116: eM,
        117: eG,
        118: eO
      }, {
        51: [1, 221],
        67: eN,
        82: 218,
        116: eM,
        117: eG,
        118: eO
      }, {
        53: [1, 222],
        67: eN,
        82: 218,
        116: eM,
        117: eG,
        118: eO
      }, {
        55: [1, 223],
        67: eN,
        82: 218,
        116: eM,
        117: eG,
        118: eO
      }, {
        57: [1, 224],
        67: eN,
        82: 218,
        116: eM,
        117: eG,
        118: eO
      }, {
        60: [1, 225]
      }, {
        64: [1, 226],
        67: eN,
        82: 218,
        116: eM,
        117: eG,
        118: eO
      }, {
        66: [1, 227],
        67: eN,
        82: 218,
        116: eM,
        117: eG,
        118: eO
      }, {
        30: 228,
        67: eN,
        80: eW,
        81: eP,
        82: 171,
        116: eM,
        117: eG,
        118: eO
      }, {
        31: [1, 229],
        67: eN,
        82: 218,
        116: eM,
        117: eG,
        118: eO
      }, {
        67: eN,
        69: [1, 230],
        71: [1, 231],
        82: 218,
        116: eM,
        117: eG,
        118: eO
      }, {
        67: eN,
        69: [1, 233],
        71: [1, 232],
        82: 218,
        116: eM,
        117: eG,
        118: eO
      }, e(O, [2, 45], {
        18: 155,
        10: N,
        40: eL
      }), e(O, [2, 47], {
        44: ew
      }), e(er, [2, 75]), e(er, [2, 74]), {
        62: [1, 234],
        67: eN,
        82: 218,
        116: eM,
        117: eG,
        118: eO
      }, e(er, [2, 77]), e(eV, [2, 80]), {
        77: [1, 235],
        79: 197,
        116: ea,
        119: el
      }, {
        30: 236,
        67: eN,
        80: eW,
        81: eP,
        82: 171,
        116: eM,
        117: eG,
        118: eO
      }, e(e$, u, {
        5: 237
      }), e(eU, [2, 102]), e(W, [2, 35]), {
        43: 238,
        44: b,
        45: 39,
        47: 40,
        60: k,
        89: D,
        102: C,
        105: x,
        106: F,
        109: T,
        111: S,
        113: 41,
        114: _,
        115: B,
        116: $
      }, {
        10: N,
        18: 239
      }, {
        10: eZ,
        60: ez,
        84: eK,
        92: 240,
        105: eH,
        107: 241,
        108: 242,
        109: eq,
        110: eX,
        111: eQ,
        112: eJ
      }, {
        10: eZ,
        60: ez,
        84: eK,
        92: 251,
        104: [1, 252],
        105: eH,
        107: 241,
        108: 242,
        109: eq,
        110: eX,
        111: eQ,
        112: eJ
      }, {
        10: eZ,
        60: ez,
        84: eK,
        92: 253,
        104: [1, 254],
        105: eH,
        107: 241,
        108: 242,
        109: eq,
        110: eX,
        111: eQ,
        112: eJ
      }, {
        105: [1, 255]
      }, {
        10: eZ,
        60: ez,
        84: eK,
        92: 256,
        105: eH,
        107: 241,
        108: 242,
        109: eq,
        110: eX,
        111: eQ,
        112: eJ
      }, {
        44: b,
        47: 257,
        60: k,
        89: D,
        102: C,
        105: x,
        106: F,
        109: T,
        111: S,
        113: 41,
        114: _,
        115: B,
        116: $
      }, e(eR, [2, 108]), {
        80: [1, 258]
      }, {
        80: [1, 259],
        98: [1, 260]
      }, e(eR, [2, 116]), e(eR, [2, 118], {
        10: [1, 261]
      }), e(eR, [2, 119]), e(et, [2, 56]), e(eY, [2, 87]), e(et, [2, 57]), {
        51: [1, 262],
        67: eN,
        82: 218,
        116: eM,
        117: eG,
        118: eO
      }, e(et, [2, 64]), e(et, [2, 59]), e(et, [2, 60]), e(et, [2, 61]), {
        109: [1, 263]
      }, e(et, [2, 63]), e(et, [2, 65]), {
        66: [1, 264],
        67: eN,
        82: 218,
        116: eM,
        117: eG,
        118: eO
      }, e(et, [2, 67]), e(et, [2, 68]), e(et, [2, 70]), e(et, [2, 69]), e(et, [2, 71]), e([10, 44, 60, 89, 102, 105, 106, 109, 111, 114, 115, 116], [2, 85]), e(er, [2, 78]), {
        31: [1, 265],
        67: eN,
        82: 218,
        116: eM,
        117: eG,
        118: eO
      }, {
        6: 11,
        7: 12,
        8: a,
        9: l,
        10: o,
        11: c,
        20: 17,
        22: 18,
        23: 19,
        24: 20,
        25: 21,
        26: 22,
        27: h,
        32: [1, 266],
        33: 24,
        34: d,
        36: g,
        38: A,
        42: 28,
        43: 38,
        44: b,
        45: 39,
        47: 40,
        60: k,
        84: f,
        85: y,
        86: m,
        87: E,
        88: v,
        89: D,
        102: C,
        105: x,
        106: F,
        109: T,
        111: S,
        113: 41,
        114: _,
        115: B,
        116: $,
        121: w,
        122: L,
        123: R,
        124: I
      }, e(ee, [2, 53]), {
        43: 267,
        44: b,
        45: 39,
        47: 40,
        60: k,
        89: D,
        102: C,
        105: x,
        106: F,
        109: T,
        111: S,
        113: 41,
        114: _,
        115: B,
        116: $
      }, e(eR, [2, 121], {
        106: e1
      }), e(e0, [2, 130], {
        108: 269,
        10: eZ,
        60: ez,
        84: eK,
        105: eH,
        109: eq,
        110: eX,
        111: eQ,
        112: eJ
      }), e(e2, [2, 132]), e(e2, [2, 134]), e(e2, [2, 135]), e(e2, [2, 136]), e(e2, [2, 137]), e(e2, [2, 138]), e(e2, [2, 139]), e(e2, [2, 140]), e(e2, [2, 141]), e(eR, [2, 122], {
        106: e1
      }), {
        10: [1, 270]
      }, e(eR, [2, 123], {
        106: e1
      }), {
        10: [1, 271]
      }, e(ej, [2, 129]), e(eR, [2, 105], {
        106: e1
      }), e(eR, [2, 106], {
        113: 112,
        44: b,
        60: k,
        89: D,
        102: C,
        105: x,
        106: F,
        109: T,
        111: S,
        114: _,
        115: B,
        116: $
      }), e(eR, [2, 110]), e(eR, [2, 112], {
        10: [1, 272]
      }), e(eR, [2, 113]), {
        98: [1, 273]
      }, {
        51: [1, 274]
      }, {
        62: [1, 275]
      }, {
        66: [1, 276]
      }, {
        8: P,
        9: M,
        11: G,
        21: 277
      }, e(W, [2, 34]), e(ee, [2, 52]), {
        10: eZ,
        60: ez,
        84: eK,
        105: eH,
        107: 278,
        108: 242,
        109: eq,
        110: eX,
        111: eQ,
        112: eJ
      }, e(e2, [2, 133]), {
        14: U,
        44: j,
        60: Y,
        89: Z,
        101: 279,
        105: z,
        106: K,
        109: H,
        111: q,
        114: X,
        115: Q,
        116: J,
        120: 87
      }, {
        14: U,
        44: j,
        60: Y,
        89: Z,
        101: 280,
        105: z,
        106: K,
        109: H,
        111: q,
        114: X,
        115: Q,
        116: J,
        120: 87
      }, {
        98: [1, 281]
      }, e(eR, [2, 120]), e(et, [2, 58]), {
        30: 282,
        67: eN,
        80: eW,
        81: eP,
        82: 171,
        116: eM,
        117: eG,
        118: eO
      }, e(et, [2, 66]), e(e$, u, {
        5: 283
      }), e(e0, [2, 131], {
        108: 269,
        10: eZ,
        60: ez,
        84: eK,
        105: eH,
        109: eq,
        110: eX,
        111: eQ,
        112: eJ
      }), e(eR, [2, 126], {
        120: 167,
        10: [1, 284],
        14: U,
        44: j,
        60: Y,
        89: Z,
        105: z,
        106: K,
        109: H,
        111: q,
        114: X,
        115: Q,
        116: J
      }), e(eR, [2, 127], {
        120: 167,
        10: [1, 285],
        14: U,
        44: j,
        60: Y,
        89: Z,
        105: z,
        106: K,
        109: H,
        111: q,
        114: X,
        115: Q,
        116: J
      }), e(eR, [2, 114]), {
        31: [1, 286],
        67: eN,
        82: 218,
        116: eM,
        117: eG,
        118: eO
      }, {
        6: 11,
        7: 12,
        8: a,
        9: l,
        10: o,
        11: c,
        20: 17,
        22: 18,
        23: 19,
        24: 20,
        25: 21,
        26: 22,
        27: h,
        32: [1, 287],
        33: 24,
        34: d,
        36: g,
        38: A,
        42: 28,
        43: 38,
        44: b,
        45: 39,
        47: 40,
        60: k,
        84: f,
        85: y,
        86: m,
        87: E,
        88: v,
        89: D,
        102: C,
        105: x,
        106: F,
        109: T,
        111: S,
        113: 41,
        114: _,
        115: B,
        116: $,
        121: w,
        122: L,
        123: R,
        124: I
      }, {
        10: eZ,
        60: ez,
        84: eK,
        92: 288,
        105: eH,
        107: 241,
        108: 242,
        109: eq,
        110: eX,
        111: eQ,
        112: eJ
      }, {
        10: eZ,
        60: ez,
        84: eK,
        92: 289,
        105: eH,
        107: 241,
        108: 242,
        109: eq,
        110: eX,
        111: eQ,
        112: eJ
      }, e(et, [2, 62]), e(W, [2, 33]), e(eR, [2, 124], {
        106: e1
      }), e(eR, [2, 125], {
        106: e1
      })],
      defaultActions: {},
      parseError: loggerLevelUtils.setFunctionName(function (e, t) {
        if (t.recoverable) {
          this.trace(e);
        } else {
          var s = Error(e);
          s.hash = t;
          throw s;
        }
      }, "parseError"),
      parse: loggerLevelUtils.setFunctionName(function (e) {
        var t = this;
        var s = [0];
        var i = [];
        var r = [null];
        var n = [];
        var u = this.table;
        var a = "";
        var l = 0;
        var o = 0;
        var c = 0;
        var h = n.slice.call(arguments, 1);
        var d = Object.create(this.lexer);
        var g = {
          yy: {}
        };
        for (var A in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, A)) {
            g.yy[A] = this.yy[A];
          }
        }
        d.setInput(e, g.yy);
        g.yy.lexer = d;
        g.yy.parser = this;
        if (d.yylloc === undefined) {
          d.yylloc = {};
        }
        var b = d.yylloc;
        n.push(b);
        var k = d.options && d.options.ranges;
        function f() {
          var e;
          if (typeof (e = i.pop() || d.lex() || 1) != "number") {
            if (e instanceof Array) {
              e = (i = e).pop();
            }
            e = t.symbols_[e] || e;
          }
          return e;
        }
        if (typeof g.yy.parseError == "function") {
          this.parseError = g.yy.parseError;
        } else {
          this.parseError = Object.getPrototypeOf(this).parseError;
        }
        loggerLevelUtils.setFunctionName(function (e) {
          s.length = s.length - e * 2;
          r.length = r.length - e;
          n.length = n.length - e;
        }, "popStack");
        loggerLevelUtils.setFunctionName(f, "lex");
        var y;
        var m;
        var E;
        var v;
        var D;
        var C;
        var x;
        var F;
        var T;
        var S = {};
        while (true) {
          E = s[s.length - 1];
          if (this.defaultActions[E]) {
            v = this.defaultActions[E];
          } else {
            if (y == null) {
              y = f();
            }
            v = u[E] && u[E][y];
          }
          if (v === undefined || !v.length || !v[0]) {
            var _ = "";
            T = [];
            for (C in u[E]) {
              if (this.terminals_[C] && C > 2) {
                T.push("'" + this.terminals_[C] + "'");
              }
            }
            _ = d.showPosition ? "Parse error on line " + (l + 1) + ":\n" + d.showPosition() + "\nExpecting " + T.join(", ") + ", got '" + (this.terminals_[y] || y) + "'" : "Parse error on line " + (l + 1) + ": Unexpected " + (y == 1 ? "end of input" : "'" + (this.terminals_[y] || y) + "'");
            this.parseError(_, {
              text: d.match,
              token: this.terminals_[y] || y,
              line: d.yylineno,
              loc: b,
              expected: T
            });
          }
          if (v[0] instanceof Array && v.length > 1) {
            throw Error("Parse Error: multiple actions possible at state: " + E + ", token: " + y);
          }
          switch (v[0]) {
            case 1:
              s.push(y);
              r.push(d.yytext);
              n.push(d.yylloc);
              s.push(v[1]);
              y = null;
              if (m) {
                y = m;
                m = null;
              } else {
                o = d.yyleng;
                a = d.yytext;
                l = d.yylineno;
                b = d.yylloc;
                if (c > 0) {
                  c--;
                }
              }
              break;
            case 2:
              x = this.productions_[v[1]][1];
              S.$ = r[r.length - x];
              S._$ = {
                first_line: n[n.length - (x || 1)].first_line,
                last_line: n[n.length - 1].last_line,
                first_column: n[n.length - (x || 1)].first_column,
                last_column: n[n.length - 1].last_column
              };
              if (k) {
                S._$.range = [n[n.length - (x || 1)].range[0], n[n.length - 1].range[1]];
              }
              if ((D = this.performAction.apply(S, [a, o, l, g.yy, v[1], r, n].concat(h))) !== undefined) {
                return D;
              }
              if (x) {
                s = s.slice(0, x * -1 * 2);
                r = r.slice(0, x * -1);
                n = n.slice(0, x * -1);
              }
              s.push(this.productions_[v[1]][0]);
              r.push(S.$);
              n.push(S._$);
              F = u[s[s.length - 2]][s[s.length - 1]];
              s.push(F);
              break;
            case 3:
              return true;
          }
        }
        return true;
      }, "parse")
    };
    var e4 = {
      EOF: 1,
      parseError: loggerLevelUtils.setFunctionName(function (e, t) {
        if (this.yy.parser) {
          this.yy.parser.parseError(e, t);
        } else {
          throw Error(e);
        }
      }, "parseError"),
      setInput: loggerLevelUtils.setFunctionName(function (e, t) {
        this.yy = t || this.yy || {};
        this._input = e;
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
      input: loggerLevelUtils.setFunctionName(function () {
        var e = this._input[0];
        this.yytext += e;
        this.yyleng++;
        this.offset++;
        this.match += e;
        this.matched += e;
        if (e.match(/(?:\r\n?|\n).*/g)) {
          this.yylineno++;
          this.yylloc.last_line++;
        } else {
          this.yylloc.last_column++;
        }
        if (this.options.ranges) {
          this.yylloc.range[1]++;
        }
        this._input = this._input.slice(1);
        return e;
      }, "input"),
      unput: loggerLevelUtils.setFunctionName(function (e) {
        var t = e.length;
        var s = e.split(/(?:\r\n?|\n)/g);
        this._input = e + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - t);
        this.offset -= t;
        var i = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (s.length - 1) {
          this.yylineno -= s.length - 1;
        }
        var r = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: s ? (s.length === i.length ? this.yylloc.first_column : 0) + i[i.length - s.length].length - s[0].length : this.yylloc.first_column - t
        };
        if (this.options.ranges) {
          this.yylloc.range = [r[0], r[0] + this.yyleng - t];
        }
        this.yyleng = this.yytext.length;
        return this;
      }, "unput"),
      more: loggerLevelUtils.setFunctionName(function () {
        this._more = true;
        return this;
      }, "more"),
      reject: loggerLevelUtils.setFunctionName(function () {
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
      less: loggerLevelUtils.setFunctionName(function (e) {
        this.unput(this.match.slice(e));
      }, "less"),
      pastInput: loggerLevelUtils.setFunctionName(function () {
        var e = this.matched.substr(0, this.matched.length - this.match.length);
        return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      upcomingInput: loggerLevelUtils.setFunctionName(function () {
        var e = this.match;
        if (e.length < 20) {
          e += this._input.substr(0, 20 - e.length);
        }
        return (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      showPosition: loggerLevelUtils.setFunctionName(function () {
        var e = this.pastInput();
        var t = Array(e.length + 1).join("-");
        return e + this.upcomingInput() + "\n" + t + "^";
      }, "showPosition"),
      test_match: loggerLevelUtils.setFunctionName(function (e, t) {
        var s;
        var i;
        var r;
        if (this.options.backtrack_lexer) {
          r = {
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
            r.yylloc.range = this.yylloc.range.slice(0);
          }
        }
        if (i = e[0].match(/(?:\r\n?|\n).*/g)) {
          this.yylineno += i.length;
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: i ? i[i.length - 1].length - i[i.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
        };
        this.yytext += e[0];
        this.match += e[0];
        this.matches = e;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
          this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(e[0].length);
        this.matched += e[0];
        s = this.performAction.call(this, this.yy, this, t, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
          this.done = false;
        }
        if (s) {
          return s;
        }
        if (this._backtrack) {
          for (var n in r) {
            this[n] = r[n];
          }
        }
        return false;
      }, "test_match"),
      next: loggerLevelUtils.setFunctionName(function () {
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
        var e;
        var t;
        var s;
        var i;
        var r = this._currentRules();
        var n = 0;
        for (; n < r.length; n++) {
          if ((s = this._input.match(this.rules[r[n]])) && (!t || s[0].length > t[0].length)) {
            t = s;
            i = n;
            if (this.options.backtrack_lexer) {
              if ((e = this.test_match(s, r[n])) !== false) {
                return e;
              }
              if (!this._backtrack) {
                return false;
              }
              t = false;
              continue;
            }
            if (!this.options.flex) {
              break;
            }
          }
        }
        if (t) {
          return (e = this.test_match(t, r[i])) !== false && e;
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
      lex: loggerLevelUtils.setFunctionName(function () {
        var e = this.next();
        return e || this.lex();
      }, "lex"),
      begin: loggerLevelUtils.setFunctionName(function (e) {
        this.conditionStack.push(e);
      }, "begin"),
      popState: loggerLevelUtils.setFunctionName(function () {
        if (this.conditionStack.length - 1 > 0) {
          return this.conditionStack.pop();
        } else {
          return this.conditionStack[0];
        }
      }, "popState"),
      _currentRules: loggerLevelUtils.setFunctionName(function () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
          return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
          return this.conditions.INITIAL.rules;
        }
      }, "_currentRules"),
      topState: loggerLevelUtils.setFunctionName(function (e) {
        if ((e = this.conditionStack.length - 1 - Math.abs(e || 0)) >= 0) {
          return this.conditionStack[e];
        } else {
          return "INITIAL";
        }
      }, "topState"),
      pushState: loggerLevelUtils.setFunctionName(function (e) {
        this.begin(e);
      }, "pushState"),
      stateStackSize: loggerLevelUtils.setFunctionName(function () {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {},
      performAction: loggerLevelUtils.setFunctionName(function (e, t, s, i) {
        switch (s) {
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
            t.yytext = "";
            return 40;
          case 8:
            this.pushState("shapeDataStr");
            return 40;
          case 9:
            this.popState();
            return 40;
          case 10:
            t.yytext = t.yytext.replace(/\n\s*/g, "<br/>");
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
            if (e.lex.firstGraph()) {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3lN$3hq-lR*b1lWZFNR$TF$%lhWTlZFbDF%$%01ZFdJe$$teFlNak-y$2to$2MxcFl%WFpp$jFaN$lsZEdjRnBET1d0aFdFNHd%REpP-jJSWE5-Smpl$*ww$2xoS2R*bFhiR3RN-l%1MlkyM$ZkbHB0Z%haa01*SndX$mRrZ$ZsWE1I%l$iRmt3$*tWck1*WnN%WFZp$jNCNldWaEtib$JZ$FQwPQ"
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
    function e6() {
      this.yy = {};
    }
    e8.lexer = e4;
    loggerLevelUtils.setFunctionName(e6, "Parser");
    e6.prototype = e8;
    e8.Parser = e6;
    return new e6();
  }();
  m.parser = m;
  var E = Object.assign({}, m);
  E.parse = e => {
    let t = e.replace(/}\s*\n/g, "}\n");
    return m.parse(t);
  };
  var v = loggerLevelUtils.setFunctionName((e, t) => {
    let s = colorChannelExtractor.extractColorChannel;
    let i = s(e, "r");
    let r = s(e, "g");
    let n = s(e, "b");
    return colorAlphaSetter.setColorWithAlpha(i, r, n, t);
  }, "fade");
  var D = {
    parser: E,
    get db() {
      return new k();
    },
    renderer: {
      getClasses: f,
      draw: y
    },
    styles: loggerLevelUtils.setFunctionName(e => `.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor || e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span {
    color: ${e.titleColor};
  }
  .cluster-label span p {
    background-color: transparent;
  }

  .label text,span {
    fill: ${e.nodeTextColor || e.textColor};
    color: ${e.nodeTextColor || e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
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
    fill: ${e.lineColor} !important;
    stroke-width: 0;
    stroke: ${e.lineColor};
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    p {
      background-color: ${e.edgeLabelBackground};
    }
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${v(e.edgeLabelBackground, 0.5)};
    // background-color:
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }

  rect.text {
    fill: none;
    stroke-width: 0;
  }

  .icon-shape, .image-shape {
    background-color: ${e.edgeLabelBackground};
    p {
      background-color: ${e.edgeLabelBackground};
      padding: 2px;
    }
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }
  ${fontAwesomeIconStylesHelper.getIconStyles()}
`, "getStyles"),
    init: loggerLevelUtils.setFunctionName(e => {
      e.flowchart ||= {};
      if (e.layout) {
        mermaidConfigUtils_1.setConfig({
          layout: e.layout
        });
      }
      e.flowchart.arrowMarkerAbsolute = e.arrowMarkerAbsolute;
      mermaidConfigUtils_1.setConfig({
        flowchart: {
          arrowMarkerAbsolute: e.arrowMarkerAbsolute
        }
      });
    }, "init")
  };
  require.d(exports, {
    diagram: function () {
      return D;
    }
  });
}