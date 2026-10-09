// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'l' to 'selectSvgElement'
// - Resolved require(840584) to 'select-svg-element'
// - Renamed variable 'i' to 'populateCommonDb'
// - Resolved require(521289) to 'populate-common-db'
// - Renamed variable 'o' to 'mermaidDiagramUtils'
// - Resolved require(583673) to 'mermaid-diagram-utils'
// - Renamed variable 'n' to 'mermaidConfigUtils_1'
// - Resolved require(401926) to 'mermaid-config-utils_1'
// - Renamed variable 's' to 'loggerLevelUtils'
// - Resolved require(696754) to 'logger-level-utils'
// - Renamed variable 'c' to 'mermaidDiagramParserFactory'
// - Resolved require(802699) to 'mermaid-diagram-parser-factory'
// - Updated imported property 'vZ' to 'defaultConfig' (module 401926)
// - Updated imported property 'iE' to 'getConfig' (module 401926)
// - Updated imported property 'ZH' to 'clearCommonDb' (module 401926)
// - Updated imported property 'GN' to 'setAccTitle' (module 401926)
// - Updated imported property 'eu' to 'getAccTitle' (module 401926)
// - Updated imported property 'g2' to 'setDiagramTitle' (module 401926)
// - Updated imported property 'Kr' to 'getDiagramTitle' (module 401926)
// - Updated imported property 'Mx' to 'getAccDescription' (module 401926)
// - Updated imported property 'U$' to 'setAccDescription' (module 401926)
// - Updated imported property 'v2' to 'configureSvgSize' (module 401926)
// - Updated imported property 'Rb' to 'cleanAndMerge' (module 583673)
// - Updated imported property 'eW' to 'setFunctionName' (module 696754)
// - Updated imported property 'cM' to 'logger' (module 696754)
// - Updated imported property 'A' to 'populateCommonDb' (module 521289)
// - Updated imported property 'Qc' to 'parseDiagram' (module 802699)
// - Updated imported property 'P' to 'selectSvgElement' (module 840584)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50861.9b8a4c84.js
         * chunkId: 50861
         * moduleId: 653628
         */
module.exports = function (module, exports, require) {
  var a;
  var selectSvgElement = require("select-svg-element") /*id: 840584*/;
  var populateCommonDb = require("populate-common-db") /*id: 521289*/;
  var mermaidDiagramUtils = require("mermaid-diagram-utils") /*id: 583673*/;
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var mermaidDiagramParserFactory = require("mermaid-diagram-parser-factory") /*id: 802699*/;
  var d = mermaidConfigUtils_1.defaultConfig.packet;
  a = class {
    getConfig() {
      let t = mermaidDiagramUtils.cleanAndMerge({
        ...d,
        ...mermaidConfigUtils_1.getConfig().packet
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
      mermaidConfigUtils_1.clearCommonDb();
      this.packet = [];
    }
    constructor() {
      this.packet = [];
      this.setAccTitle = mermaidConfigUtils_1.setAccTitle;
      this.getAccTitle = mermaidConfigUtils_1.getAccTitle;
      this.setDiagramTitle = mermaidConfigUtils_1.setDiagramTitle;
      this.getDiagramTitle = mermaidConfigUtils_1.getDiagramTitle;
      this.getAccDescription = mermaidConfigUtils_1.getAccDescription;
      this.setAccDescription = mermaidConfigUtils_1.setAccDescription;
    }
  };
  loggerLevelUtils.setFunctionName(a, "PacketDB");
  var u = a;
  var p = loggerLevelUtils.setFunctionName((t, e) => {
    populateCommonDb.populateCommonDb(t, e);
    let r = -1;
    let a = [];
    let l = 1;
    let {
      bitsPerRow: o
    } = e.getConfig();
    for (let {
      start: i,
      end: n,
      bits: c,
      label: d
    } of t.blocks) {
      if (i !== undefined && n !== undefined && n < i) {
        throw Error(`Packet block ${i} - ${n} is invalid. End must be greater than start.`);
      }
      if (i == null) {
        i = r + 1;
      }
      if (i !== r + 1) {
        throw Error(`Packet block ${i} - ${n ?? i} is not contiguous. It should start from ${r + 1}.`);
      }
      if (c === 0) {
        throw Error(`Packet block ${i} is invalid. Cannot have a zero bit field.`);
      }
      if (n == null) {
        n = i + (c ?? 1) - 1;
      }
      if (c == null) {
        c = n - i + 1;
      }
      r = n;
      loggerLevelUtils.logger.debug(`Packet block ${i} - ${r} with label ${d}`);
      while (a.length <= o + 1 && e.getPacket().length < 10000) {
        let [t, r] = h({
          start: i,
          end: n,
          bits: c,
          label: d
        }, l, o);
        a.push(t);
        if (t.end + 1 === l * o) {
          e.pushWord(a);
          a = [];
          l++;
        }
        if (!r) {
          break;
        }
        ({
          start: i,
          end: n,
          bits: c,
          label: d
        } = r);
      }
    }
    e.pushWord(a);
  }, "populate");
  var h = loggerLevelUtils.setFunctionName((t, e, r) => {
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
    let a = e * r - 1;
    let l = e * r;
    return [{
      start: t.start,
      end: a,
      label: t.label,
      bits: a - t.start
    }, {
      start: l,
      end: t.end,
      label: t.label,
      bits: t.end - l
    }];
  }, "getNextFittingBlock");
  var f = {
    parser: {
      yy: undefined
    },
    parse: loggerLevelUtils.setFunctionName(async t => {
      let r = await mermaidDiagramParserFactory.parseDiagram("packet", t);
      let a = f.parser?.yy;
      if (!(a instanceof u)) {
        throw Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
      }
      loggerLevelUtils.logger.debug(r);
      p(r, a);
    }, "parse")
  };
  var k = loggerLevelUtils.setFunctionName((t, e, r, a) => {
    let i = a.db;
    let o = i.getConfig();
    let {
      rowHeight: s,
      paddingY: c,
      bitWidth: d,
      bitsPerRow: u
    } = o;
    let p = i.getPacket();
    let h = i.getDiagramTitle();
    let f = s + c;
    let k = f * (p.length + 1) - (h ? 0 : s);
    let g = d * u + 2;
    let v = selectSvgElement.selectSvgElement(e);
    v.attr("viewbox", `0 0 ${g} ${k}`);
    mermaidConfigUtils_1.configureSvgSize(v, k, g, o.useMaxWidth);
    for (let [t, e] of p.entries()) {
      b(v, e, t, o);
    }
    v.append("text").text(h).attr("x", g / 2).attr("y", k - f / 2).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("class", "packetTitle");
  }, "draw");
  var b = loggerLevelUtils.setFunctionName((t, e, r, a) => {
    let {
      rowHeight: l,
      paddingX: i,
      paddingY: o,
      bitWidth: n,
      bitsPerRow: s,
      showBits: c
    } = a;
    let d = t.append("g");
    let u = r * (l + o) + o;
    for (let t of e) {
      let e = t.start % s * n + 1;
      let r = (t.end - t.start + 1) * n - i;
      d.append("rect").attr("x", e).attr("y", u).attr("width", r).attr("height", l).attr("class", "packetBlock");
      d.append("text").attr("x", e + r / 2).attr("y", u + l / 2).attr("class", "packetLabel").attr("dominant-baseline", "middle").attr("text-anchor", "middle").text(t.label);
      if (!c) {
        continue;
      }
      let a = t.end === t.start;
      let o = u - 2;
      d.append("text").attr("x", e + (a ? r / 2 : 0)).attr("y", o).attr("class", "packetByte start").attr("dominant-baseline", "auto").attr("text-anchor", a ? "middle" : "start").text(t.start);
      if (!a) {
        d.append("text").attr("x", e + r).attr("y", o).attr("class", "packetByte end").attr("dominant-baseline", "auto").attr("text-anchor", "end").text(t.end);
      }
    }
  }, "drawWord");
  var g = {
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
  var v = {
    parser: f,
    get db() {
      return new u();
    },
    renderer: {
      draw: k
    },
    styles: loggerLevelUtils.setFunctionName(function ({
      packet: t
    } = {}) {
      let e = mermaidDiagramUtils.cleanAndMerge(g, t);
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
      return v;
    }
  });
}