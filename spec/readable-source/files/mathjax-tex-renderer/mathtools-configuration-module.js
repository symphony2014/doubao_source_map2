// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Renamed variable 'i' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Resolved require(352636) to 'mathml-abstract-node-util'
// - Renamed variable 'u' to 'optionsMergeUtils'
// - Resolved require(625001) to 'options-merge-utils'
// - Resolved require(476838) to 'mathtools-tex-extension-module'
// - Renamed variable 's' to 'mathtoolsUtilities'
// - Resolved require(129369) to 'mathtools-utilities'
// - Renamed variable 'l' to 'mathtoolsTagFormat'
// - Resolved require(322551) to 'mathtools-tag-format'
// - Renamed variable 'c' to 'texMultlinedItem'
// - Resolved require(846201) to 'tex-multlined-item'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 540005
         */
module.exports = function (module, exports, require) {
  var r;
  var T = this && this.__values || function (t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var Q = e && t[e];
    var r = 0;
    if (Q) {
      return Q.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && r >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[r++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var n = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.MathtoolsConfiguration = exports.fixPrescripts = exports.PAIREDDELIMS = undefined;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var symbolParseMaps = require("symbol-parse-maps") /*id: 664746*/;
  var a = n(require("mathml-abstract-node-util") /*id: 352636*/);
  var optionsMergeUtils = require("options-merge-utils") /*id: 625001*/;
  require("mathtools-tex-extension-module") /*id: 476838*/;
  var mathtoolsUtilities = require("mathtools-utilities") /*id: 129369*/;
  var mathtoolsTagFormat = require("mathtools-tag-format") /*id: 322551*/;
  var texMultlinedItem = require("tex-multlined-item") /*id: 846201*/;
  function p(t) {
    var e;
    var Q;
    var r;
    var n;
    var o;
    var i;
    var u = t.data;
    try {
      var s = T(u.getList("mmultiscripts"));
      var l = s.next();
      for (; !l.done; l = s.next()) {
        var c = l.value;
        if (c.getProperty("fixPrescript")) {
          var p = a.default.getChildren(c);
          var h = 0;
          try {
            r = undefined;
            var f = T([1, 2]);
            var d = f.next();
            for (; !d.done; d = f.next()) {
              var D = d.value;
              if (!p[D]) {
                a.default.setChild(c, D, u.nodeFactory.create("node", "none"));
                h++;
              }
            }
          } catch (t) {
            r = {
              error: t
            };
          } finally {
            try {
              if (d && !d.done && (n = f.return)) {
                n.call(f);
              }
            } finally {
              if (r) {
                throw r.error;
              }
            }
          }
          try {
            o = undefined;
            var L = T([4, 5]);
            var m = L.next();
            for (; !m.done; m = L.next()) {
              var D = m.value;
              if (a.default.isType(p[D], "mrow") && a.default.getChildren(p[D]).length === 0) {
                a.default.setChild(c, D, u.nodeFactory.create("node", "none"));
              }
            }
          } catch (t) {
            o = {
              error: t
            };
          } finally {
            try {
              if (m && !m.done && (i = L.return)) {
                i.call(L);
              }
            } finally {
              if (o) {
                throw o.error;
              }
            }
          }
          if (h === 2) {
            p.splice(1, 2);
          }
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        if (l && !l.done && (Q = s.return)) {
          Q.call(s);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
  }
  exports.PAIREDDELIMS = "mathtools-paired-delims";
  exports.fixPrescripts = p;
  exports.MathtoolsConfiguration = mathjaxParserConfiguration.Configuration.create("mathtools", {
    handler: {
      macro: ["mathtools-macros", "mathtools-delimiters"],
      environment: ["mathtools-environments"],
      delimiter: ["mathtools-delimiters"],
      character: ["mathtools-characters"]
    },
    items: ((r = {})[texMultlinedItem.MultlinedItem.prototype.kind] = texMultlinedItem.MultlinedItem, r),
    init: function (t) {
      new symbolParseMaps.CommandMap(exports.PAIREDDELIMS, {}, {});
      t.append(mathjaxParserConfiguration.Configuration.local({
        handler: {
          macro: [exports.PAIREDDELIMS]
        },
        priority: -5
      }));
    },
    config: function (t, e) {
      var Q;
      var r;
      var n = e.parseOptions;
      var o = n.options.mathtools.pairedDelimiters;
      try {
        var i = T(Object.keys(o));
        var a = i.next();
        for (; !a.done; a = i.next()) {
          var u = a.value;
          mathtoolsUtilities.MathtoolsUtil.addPairedDelims(n, u, o[u]);
        }
      } catch (t) {
        Q = {
          error: t
        };
      } finally {
        try {
          if (a && !a.done && (r = i.return)) {
            r.call(i);
          }
        } finally {
          if (Q) {
            throw Q.error;
          }
        }
      }
      mathtoolsTagFormat.MathtoolsTagFormat(t, e);
    },
    postprocessors: [[p, -6]],
    options: {
      mathtools: {
        multlinegap: "1em",
        "multlined-pos": "c",
        "firstline-afterskip": "",
        "lastline-preskip": "",
        "smallmatrix-align": "c",
        shortvdotsadjustabove: ".2em",
        shortvdotsadjustbelow: ".2em",
        centercolon: false,
        "centercolon-offset": ".04em",
        "thincolon-dx": "-.04em",
        "thincolon-dw": "-.08em",
        "use-unicode": false,
        "prescript-sub-format": "",
        "prescript-sup-format": "",
        "prescript-arg-format": "",
        "allow-mathtoolsset": true,
        pairedDelimiters: optionsMergeUtils.expandable({}),
        tagforms: optionsMergeUtils.expandable({})
      }
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}