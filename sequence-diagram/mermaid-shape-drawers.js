// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AD' to 'getTextObj'
// - Renamed export 'AE' to 'drawImage'
// - Renamed export 'Mu' to 'drawRect'
// - Renamed export 'O' to 'drawBackgroundRect'
// - Renamed export 'kc' to 'getNoteRect'
// - Renamed export 'rB' to 'drawEmbeddedImage'
// - Renamed export 'yU' to 'drawText'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14080.0682d617.js
         * chunkId: 14080
         * moduleId: 88456
         */
module.exports = function (module, exports, require) {
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var urlSanitizer = require("url-sanitizer") /*id: 568747*/;
  var a = mermaidConfigUtils.setName((t, e) => {
    let i = t.append("rect");
    i.attr("x", e.x);
    i.attr("y", e.y);
    i.attr("fill", e.fill);
    i.attr("stroke", e.stroke);
    i.attr("width", e.width);
    i.attr("height", e.height);
    if (e.name) {
      i.attr("name", e.name);
    }
    if (e.rx) {
      i.attr("rx", e.rx);
    }
    if (e.ry) {
      i.attr("ry", e.ry);
    }
    if (e.attrs !== undefined) {
      for (let t in e.attrs) {
        i.attr(t, e.attrs[t]);
      }
    }
    if (e.class) {
      i.attr("class", e.class);
    }
    return i;
  }, "drawRect");
  var s = mermaidConfigUtils.setName((t, e) => {
    a(t, {
      x: e.startx,
      y: e.starty,
      width: e.stopx - e.startx,
      height: e.stopy - e.starty,
      fill: e.fill,
      stroke: e.stroke,
      class: "rect"
    }).lower();
  }, "drawBackgroundRect");
  var l = mermaidConfigUtils.setName((t, e) => {
    let i = e.text.replace(mermaidConfigUtils.lineBreakRegex, " ");
    let n = t.append("text");
    n.attr("x", e.x);
    n.attr("y", e.y);
    n.attr("class", "legend");
    n.style("text-anchor", e.anchor);
    if (e.class) {
      n.attr("class", e.class);
    }
    let a = n.append("tspan");
    a.attr("x", e.x + e.textMargin * 2);
    a.text(i);
    return n;
  }, "drawText");
  var o = mermaidConfigUtils.setName((t, e, i, r) => {
    let a = t.append("image");
    a.attr("x", e);
    a.attr("y", i);
    let s = urlSanitizer.sanitizeUrl(r);
    a.attr("xlink:href", s);
  }, "drawImage");
  var c = mermaidConfigUtils.setName((t, e, i, r) => {
    let a = t.append("use");
    a.attr("x", e);
    a.attr("y", i);
    let s = urlSanitizer.sanitizeUrl(r);
    a.attr("xlink:href", `#${s}`);
  }, "drawEmbeddedImage");
  var h = mermaidConfigUtils.setName(() => ({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    fill: "#EDF2AE",
    stroke: "#666",
    anchor: "start",
    rx: 0,
    ry: 0
  }), "getNoteRect");
  var u = mermaidConfigUtils.setName(() => ({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    "text-anchor": "start",
    style: "#666",
    textMargin: 0,
    rx: 0,
    ry: 0,
    tspan: true
  }), "getTextObj");
  require.d(exports, {
    getTextObj: function () {
      return u;
    },
    drawImage: function () {
      return o;
    },
    drawRect: function () {
      return a;
    },
    drawBackgroundRect: function () {
      return s;
    },
    getNoteRect: function () {
      return h;
    },
    drawEmbeddedImage: function () {
      return c;
    },
    drawText: function () {
      return l;
    }
  });
}