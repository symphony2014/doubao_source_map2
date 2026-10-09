// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Renamed variable 'o' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Resolved require(342117) to 'message-format-util'
// - Resolved require(142412) to 'mathjax-utilities'
// - Renamed variable 'u' to 'symbolMacroClasses'
// - Resolved require(41578) to 'symbol-macro-classes'
// - Resolved require(559929) to 'tex-base-command-map'
// - Renamed variable 'l' to 'optionsMergeUtils'
// - Resolved require(625001) to 'options-merge-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 918725
         */
module.exports = function (module, exports, require) {
  var r = this && this.__values || function (t) {
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
  var T = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.SetOptionsConfiguration = exports.SetOptionsUtil = undefined;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var symbolParseMaps = require("symbol-parse-maps") /*id: 664746*/;
  var i = T(require("message-format-util") /*id: 342117*/);
  var a = T(require("mathjax-utilities") /*id: 142412*/);
  var symbolMacroClasses = require("symbol-macro-classes") /*id: 41578*/;
  var s = T(require("tex-base-command-map") /*id: 559929*/);
  var optionsMergeUtils = require("options-merge-utils") /*id: 625001*/;
  exports.SetOptionsUtil = {
    filterPackage: function (t, e) {
      if (e !== "tex" && !mathjaxParserConfiguration.ConfigurationHandler.get(e)) {
        throw new i.default("NotAPackage", "Not a defined package: %1", e);
      }
      var Q = t.options.setoptions;
      var r = Q.allowOptions[e];
      if (r === undefined && !Q.allowPackageDefault || r === false) {
        throw new i.default("PackageNotSettable", "Options can't be set for package \"%1\"", e);
      }
      return true;
    },
    filterOption: function (t, e, Q) {
      var r;
      var T = t.options.setoptions;
      var n = T.allowOptions[e] || {};
      var o = n.hasOwnProperty(Q) && !optionsMergeUtils.isObject(n[Q]) ? n[Q] : null;
      if (o === false || o === null && !T.allowOptionsDefault) {
        throw new i.default("OptionNotSettable", "Option \"%1\" is not allowed to be set", Q);
      }
      if (!((r = e === "tex" ? t.options : t.options[e]) === null || r === undefined ? undefined : r.hasOwnProperty(Q))) {
        if (e === "tex") {
          throw new i.default("InvalidTexOption", "Invalid TeX option \"%1\"", Q);
        }
        throw new i.default("InvalidOptionKey", "Invalid option \"%1\" for package \"%2\"", Q, e);
      }
      return true;
    },
    filterValue: function (t, e, Q, r) {
      return r;
    }
  };
  var c = new symbolParseMaps.CommandMap("setoptions", {
    setOptions: "SetOptions"
  }, {
    SetOptions: function (t, e) {
      var Q;
      var T;
      var n = t.GetBrackets(e) || "tex";
      var o = a.default.keyvalOptions(t.GetArgument(e));
      var i = t.options.setoptions;
      if (i.filterPackage(t, n)) {
        try {
          var u = r(Object.keys(o));
          var s = u.next();
          for (; !s.done; s = u.next()) {
            var l = s.value;
            if (i.filterOption(t, n, l)) {
              (n === "tex" ? t.options : t.options[n])[l] = i.filterValue(t, n, l, o[l]);
            }
          }
        } catch (t) {
          Q = {
            error: t
          };
        } finally {
          try {
            if (s && !s.done && (T = u.return)) {
              T.call(u);
            }
          } finally {
            if (Q) {
              throw Q.error;
            }
          }
        }
      }
    }
  });
  exports.SetOptionsConfiguration = mathjaxParserConfiguration.Configuration.create("setoptions", {
    handler: {
      macro: ["setoptions"]
    },
    config: function (t, e) {
      var Q = e.parseOptions.handlers.get("macro").lookup("require");
      if (Q) {
        c.add("Require", new symbolMacroClasses.Macro("Require", Q._func));
        c.add("require", new symbolMacroClasses.Macro("require", s.default.Macro, ["\\Require{#2}\\setOptions[#2]{#1}", 2, ""]));
      }
    },
    priority: 3,
    options: {
      setoptions: {
        filterPackage: exports.SetOptionsUtil.filterPackage,
        filterOption: exports.SetOptionsUtil.filterOption,
        filterValue: exports.SetOptionsUtil.filterValue,
        allowPackageDefault: true,
        allowOptionsDefault: true,
        allowOptions: optionsMergeUtils.expandable({
          tex: {
            FindTeX: false,
            formatError: false,
            package: false,
            baseURL: false,
            tags: false,
            maxBuffer: false,
            maxMaxros: false,
            macros: false,
            environments: false
          },
          setoptions: false,
          autoload: false,
          require: false,
          configmacros: false,
          tagformat: false
        })
      }
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}