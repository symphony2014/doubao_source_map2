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
         * chunk file: 16090.35eabcc9.js
         * chunkId: 16090
         * moduleId: 621602
         */
module.exports = function (module, exports, require) {
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var urlSanitizer = require("url-sanitizer") /*id: 568747*/;
  var s = loggerLevelUtils.setFunctionName((t, e) => {
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
  var l = loggerLevelUtils.setFunctionName((t, e) => {
    s(t, {
      x: e.startx,
      y: e.starty,
      width: e.stopx - e.startx,
      height: e.stopy - e.starty,
      fill: e.fill,
      stroke: e.stroke,
      class: "rect"
    }).lower();
  }, "drawBackgroundRect");
  var o = loggerLevelUtils.setFunctionName((t, e) => {
    let i = e.text.replace(mermaidConfigUtils_1.lineBreakRegex, " ");
    let r = t.append("text");
    r.attr("x", e.x);
    r.attr("y", e.y);
    r.attr("class", "legend");
    r.style("text-anchor", e.anchor);
    if (e.class) {
      r.attr("class", e.class);
    }
    let a = r.append("tspan");
    a.attr("x", e.x + e.textMargin * 2);
    a.text(i);
    return r;
  }, "drawText");
  var c = loggerLevelUtils.setFunctionName((t, e, i, n) => {
    let r = t.append("image");
    r.attr("x", e);
    r.attr("y", i);
    let s = urlSanitizer.sanitizeUrl(n);
    r.attr("xlink:href", s);
  }, "drawImage");
  var h = loggerLevelUtils.setFunctionName((t, e, i, n) => {
    let r = t.append("use");
    r.attr("x", e);
    r.attr("y", i);
    let s = urlSanitizer.sanitizeUrl(n);
    r.attr("xlink:href", `#${s}`);
  }, "drawEmbeddedImage");
  var u = loggerLevelUtils.setFunctionName(() => ({
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
  var y = loggerLevelUtils.setFunctionName(() => ({
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
      return y;
    },
    drawImage: function () {
      return c;
    },
    drawRect: function () {
      return s;
    },
    drawBackgroundRect: function () {
      return l;
    },
    getNoteRect: function () {
      return u;
    },
    drawEmbeddedImage: function () {
      return h;
    },
    drawText: function () {
      return o;
    }
  });
}