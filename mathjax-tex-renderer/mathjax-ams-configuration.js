// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Renamed variable 'i' to 'texEquationArrayItems'
// - Resolved require(953567) to 'tex-equation-array-items'
// - Renamed variable 'a' to 'mathjaxEquationTaggingSystem'
// - Resolved require(9120) to 'mathjax-equation-tagging-system'
// - Renamed variable 'u' to 'texAmsMethodsHandler'
// - Resolved require(528581) to 'tex-ams-methods-handler'
// - Resolved require(836207) to 'mathjax-tex-ams-symbols'
// - Renamed variable 's' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 89265
         */
module.exports = function (module, exports, require) {
  var r;
  var T;
  var n = this && this.__extends || (r = function (t, e) {
    return (r = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var Q in e) {
        if (Object.prototype.hasOwnProperty.call(e, Q)) {
          t[Q] = e[Q];
        }
      }
    })(t, e);
  }, function (t, e) {
    if (typeof e != "function" && e !== null) {
      throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
    }
    function Q() {
      this.constructor = t;
    }
    r(t, e);
    t.prototype = e === null ? Object.create(e) : (Q.prototype = e.prototype, new Q());
  });
  exports.AmsConfiguration = exports.AmsTags = undefined;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var texEquationArrayItems = require("tex-equation-array-items") /*id: 953567*/;
  var mathjaxEquationTaggingSystem = require("mathjax-equation-tagging-system") /*id: 9120*/;
  var texAmsMethodsHandler = require("tex-ams-methods-handler") /*id: 528581*/;
  require("mathjax-tex-ams-symbols") /*id: 836207*/;
  var symbolParseMaps = require("symbol-parse-maps") /*id: 664746*/;
  var l = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    n(e, t);
    return e;
  }(mathjaxEquationTaggingSystem.AbstractTags);
  exports.AmsTags = l;
  exports.AmsConfiguration = mathjaxParserConfiguration.Configuration.create("ams", {
    handler: {
      character: ["AMSmath-operatorLetter"],
      delimiter: ["AMSsymbols-delimiter", "AMSmath-delimiter"],
      macro: ["AMSsymbols-mathchar0mi", "AMSsymbols-mathchar0mo", "AMSsymbols-delimiter", "AMSsymbols-macros", "AMSmath-mathchar0mo", "AMSmath-macros", "AMSmath-delimiter"],
      environment: ["AMSmath-environment"]
    },
    items: ((T = {})[texEquationArrayItems.MultlineItem.prototype.kind] = texEquationArrayItems.MultlineItem, T[texEquationArrayItems.FlalignItem.prototype.kind] = texEquationArrayItems.FlalignItem, T),
    tags: {
      ams: l
    },
    init: function (t) {
      new symbolParseMaps.CommandMap(texAmsMethodsHandler.NEW_OPS, {}, {});
      t.append(mathjaxParserConfiguration.Configuration.local({
        handler: {
          macro: [texAmsMethodsHandler.NEW_OPS]
        },
        priority: -1
      }));
    },
    config: function (t, e) {
      if (e.parseOptions.options.multlineWidth) {
        e.parseOptions.options.ams.multlineWidth = e.parseOptions.options.multlineWidth;
      }
      delete e.parseOptions.options.multlineWidth;
    },
    options: {
      multlineWidth: "",
      ams: {
        multlineWidth: "100%",
        multlineIndent: "1em"
      }
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}