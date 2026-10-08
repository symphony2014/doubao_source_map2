// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mermaidPopulateCommonDb'
// - Resolved require(341035) to 'mermaid-populate-common-db'
// - Renamed variable 'a' to 'mermaidTextLayoutUtils'
// - Resolved require(997032) to 'mermaid-text-layout-utils'
// - Renamed variable 'l' to 'mermaidSvgElementSelector'
// - Resolved require(871430) to 'mermaid-svg-element-selector'
// - Renamed variable 'o' to 'mermaidConfigUtils'
// - Resolved require(101498) to 'mermaid-config-utils'
// - Renamed variable 'c' to 'mermaidDiagramParserFactory'
// - Resolved require(802699) to 'mermaid-diagram-parser-factory'
// - Updated imported property 'vZ' to 'configDefaults' (module 101498)
// - Updated imported property 'iE' to 'getConfig' (module 101498)
// - Updated imported property 'ZH' to 'clearAccData' (module 101498)
// - Updated imported property 'GN' to 'setAccTitle' (module 101498)
// - Updated imported property 'eu' to 'getAccTitle' (module 101498)
// - Updated imported property 'g2' to 'setDiagramTitle' (module 101498)
// - Updated imported property 'Kr' to 'getDiagramTitle' (module 101498)
// - Updated imported property 'Mx' to 'getAccDescription' (module 101498)
// - Updated imported property 'U$' to 'setAccDescription' (module 101498)
// - Updated imported property 'eW' to 'setName' (module 101498)
// - Updated imported property 'cM' to 'logger' (module 101498)
// - Updated imported property 'v2' to 'configureSvgSize' (module 101498)
// - Updated imported property 'Rb' to 'cleanAndMerge' (module 997032)
// - Updated imported property 'A' to 'populateCommonDb' (module 341035)
// - Updated imported property 'Qc' to 'parseDiagram' (module 802699)
// - Updated imported property 'P' to 'selectSvgElement' (module 871430)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45718.8b9bd884.js
         * chunkId: 45718
         * moduleId: 477536
         */
module.exports = function (module, exports, require) {
  var n;
  var mermaidPopulateCommonDb = require("mermaid-populate-common-db") /*id: 341035*/;
  var mermaidTextLayoutUtils = require("mermaid-text-layout-utils") /*id: 997032*/;
  var mermaidSvgElementSelector = require("mermaid-svg-element-selector") /*id: 871430*/;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var mermaidDiagramParserFactory = require("mermaid-diagram-parser-factory") /*id: 802699*/;
  var s = mermaidConfigUtils.configDefaults.packet;
  n = class {
    getConfig() {
      let t = mermaidTextLayoutUtils.cleanAndMerge({
        ...s,
        ...mermaidConfigUtils.getConfig().packet
      });
      if (t.showBits) {
        t.paddingY += 10;
      }
      return t;
    }
    getPacket() {
      return this.packet;
    }
    pushWord(t) {
      if (t.length > 0) {
        this.packet.push(t);
      }
    }
    clear() {
      mermaidConfigUtils.clearAccData();
      this.packet = [];
    }
    constructor() {
      this.packet = [];
      this.setAccTitle = mermaidConfigUtils.setAccTitle;
      this.getAccTitle = mermaidConfigUtils.getAccTitle;
      this.setDiagramTitle = mermaidConfigUtils.setDiagramTitle;
      this.getDiagramTitle = mermaidConfigUtils.getDiagramTitle;
      this.getAccDescription = mermaidConfigUtils.getAccDescription;
      this.setAccDescription = mermaidConfigUtils.setAccDescription;
    }
  };
  mermaidConfigUtils.setName(n, "PacketDB");
  var u = n;
  var h = mermaidConfigUtils.setName((t, e) => {
    mermaidPopulateCommonDb.populateCommonDb(t, e);
    let r = -1;
    let n = [];
    let a = 1;
    let {
      bitsPerRow: l
    } = e.getConfig();
    for (let {
      start: i,
      end: c,
      bits: s,
      label: u
    } of t.blocks) {
      if (i !== undefined && c !== undefined && c < i) {
        throw Error(`Packet block ${i} - ${c} is invalid. End must be greater than start.`);
      }
      if (i == null) {
        i = r + 1;
      }
      if (i !== r + 1) {
        throw Error(`Packet block ${i} - ${c ?? i} is not contiguous. It should start from ${r + 1}.`);
      }
      if (s === 0) {
        throw Error(`Packet block ${i} is invalid. Cannot have a zero bit field.`);
      }
      if (c == null) {
        c = i + (s ?? 1) - 1;
      }
      if (s == null) {
        s = c - i + 1;
      }
      r = c;
      mermaidConfigUtils.logger.debug(`Packet block ${i} - ${r} with label ${u}`);
      while (n.length <= l + 1 && e.getPacket().length < 10000) {
        let [t, r] = d({
          start: i,
          end: c,
          bits: s,
          label: u
        }, a, l);
        n.push(t);
        if (t.end + 1 === a * l) {
          e.pushWord(n);
          n = [];
          a++;
        }
        if (!r) {
          break;
        }
        ({
          start: i,
          end: c,
          bits: s,
          label: u
        } = r);
      }
    }
    e.pushWord(n);
  }, "populate");
  var d = mermaidConfigUtils.setName((t, e, r) => {
    if (t.start === undefined) {
      throw Error("start should have been set during first phase");
    }
    if (t.end === undefined) {
      throw Error("end should have been set during first phase");
    }
    if (t.start > t.end) {
      throw Error(`Block start ${t.start} is greater than block end ${t.end}.`);
    }
    if (t.end + 1 <= e * r) {
      return [t, undefined];
    }
    let n = e * r - 1;
    let i = e * r;
    return [{
      start: t.start,
      end: n,
      label: t.label,
      bits: n - t.start
    }, {
      start: i,
      end: t.end,
      label: t.label,
      bits: t.end - i
    }];
  }, "getNextFittingBlock");
  var f = {
    parser: {
      yy: undefined
    },
    parse: mermaidConfigUtils.setName(async t => {
      let r = await mermaidDiagramParserFactory.parseDiagram("packet", t);
      let n = f.parser?.yy;
      if (!(n instanceof u)) {
        throw Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
      }
      mermaidConfigUtils.logger.debug(r);
      h(r, n);
    }, "parse")
  };
  var g = mermaidConfigUtils.setName((t, e, r, n) => {
    let i = n.db;
    let a = i.getConfig();
    let {
      rowHeight: c,
      paddingY: s,
      bitWidth: u,
      bitsPerRow: h
    } = a;
    let d = i.getPacket();
    let f = i.getDiagramTitle();
    let g = c + s;
    let x = g * (d.length + 1) - (f ? 0 : c);
    let m = u * h + 2;
    let v = mermaidSvgElementSelector.selectSvgElement(e);
    v.attr("viewbox", `0 0 ${m} ${x}`);
    mermaidConfigUtils.configureSvgSize(v, x, m, a.useMaxWidth);
    for (let [t, e] of d.entries()) {
      p(v, e, t, a);
    }
    v.append("text").text(f).attr("x", m / 2).attr("y", x - g / 2).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("class", "packetTitle");
  }, "draw");
  var p = mermaidConfigUtils.setName((t, e, r, n) => {
    let {
      rowHeight: i,
      paddingX: a,
      paddingY: l,
      bitWidth: o,
      bitsPerRow: c,
      showBits: s
    } = n;
    let u = t.append("g");
    let h = r * (i + l) + l;
    for (let t of e) {
      let e = t.start % c * o + 1;
      let r = (t.end - t.start + 1) * o - a;
      u.append("rect").attr("x", e).attr("y", h).attr("width", r).attr("height", i).attr("class", "packetBlock");
      u.append("text").attr("x", e + r / 2).attr("y", h + i / 2).attr("class", "packetLabel").attr("dominant-baseline", "middle").attr("text-anchor", "middle").text(t.label);
      if (!s) {
        continue;
      }
      let n = t.end === t.start;
      let l = h - 2;
      u.append("text").attr("x", e + (n ? r / 2 : 0)).attr("y", l).attr("class", "packetByte start").attr("dominant-baseline", "auto").attr("text-anchor", n ? "middle" : "start").text(t.start);
      if (!n) {
        u.append("text").attr("x", e + r).attr("y", l).attr("class", "packetByte end").attr("dominant-baseline", "auto").attr("text-anchor", "end").text(t.end);
      }
    }
  }, "drawWord");
  var x = {
    byteFontSize: "10px",
    startByteColor: "black",
    endByteColor: "black",
    labelColor: "black",
    labelFontSize: "12px",
    titleColor: "black",
    titleFontSize: "14px",
    blockStrokeColor: "black",
    blockStrokeWidth: "1",
    blockFillColor: "#efefef"
  };
  var m = {
    parser: f,
    get db() {
      return new u();
    },
    renderer: {
      draw: g
    },
    styles: mermaidConfigUtils.setName(function ({
      packet: t
    } = {}) {
      let e = mermaidTextLayoutUtils.cleanAndMerge(x, t);
      return `
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`;
    }, "styles")
  };
  require.d(exports, {
    diagram: function () {
      return m;
    }
  });
}