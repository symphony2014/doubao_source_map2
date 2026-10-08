// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'processBrowserShim'
// - Resolved require(488992) to 'process-browser-shim'
// - Resolved require(991070) to 'debug-module-factory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-skill-bar.fa8b92d0.js
         * chunkId: 18910
         * moduleId: 471456
         */
module.exports = function (module, exports, require) {
  let i;
  var processBrowserShim = require("process-browser-shim") /*id: 488992*/;
  exports.formatArgs = function (t) {
    t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
    if (!this.useColors) {
      return;
    }
    let n = "color: " + this.color;
    t.splice(1, 0, n, "color: inherit");
    let i = 0;
    let r = 0;
    t[0].replace(/%[a-zA-Z%]/g, e => {
      if (e !== "%%") {
        i++;
        if (e === "%c") {
          r = i;
        }
      }
    });
    t.splice(r, 0, n);
  };
  exports.save = function (e) {
    try {
      if (e) {
        exports.storage.setItem("debug", e);
      } else {
        exports.storage.removeItem("debug");
      }
    } catch (e) {}
  };
  exports.load = function () {
    let e;
    try {
      e = exports.storage.getItem("debug") || exports.storage.getItem("DEBUG");
    } catch (e) {}
    if (!e && processBrowserShim !== undefined && "env" in processBrowserShim) {
      e = processBrowserShim.env.DEBUG;
    }
    return e;
  };
  exports.useColors = function () {
    let e;
    return typeof window != "undefined" && !!window.process && (window.process.type === "renderer" || !!window.process.__nwjs) || (typeof navigator == "undefined" || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && (typeof document != "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window != "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator != "undefined" && navigator.userAgent && (e = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e[1], 10) >= 31 || typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
  };
  exports.storage = function () {
    try {
      return localStorage;
    } catch (e) {}
  }();
  i = false;
  exports.destroy = () => {
    i ||= true;
  };
  exports.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
  exports.log = console.debug || console.log || (() => {});
  module.exports = require("debug-module-factory") /*id: 991070*/(exports);
  let {
    formatters: o
  } = module.exports;
  o.j = function (e) {
    try {
      return JSON.stringify(e);
    } catch (e) {
      return "[UnexpectedJSONParseError]: " + e.message;
    }
  };
}