// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Renamed variable 'i' to 'optionsMergeUtils'
// - Resolved require(625001) to 'options-merge-utils'
// - Renamed variable 'a' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Resolved require(921652) to 'tex-parser-handlers'
// - Renamed variable 's' to 'symbolMacroClasses'
// - Resolved require(41578) to 'symbol-macro-classes'
// - Resolved require(683268) to 'tex-macro-config'
// - Renamed variable 'c' to 'mmlBeginEnvItem'
// - Resolved require(603746) to 'mml-begin-env-item'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 205321
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
  exports.ConfigMacrosConfiguration = undefined;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var optionsMergeUtils = require("options-merge-utils") /*id: 625001*/;
  var symbolParseMaps = require("symbol-parse-maps") /*id: 664746*/;
  var u = n(require("tex-parser-handlers") /*id: 921652*/);
  var symbolMacroClasses = require("symbol-macro-classes") /*id: 41578*/;
  var l = n(require("tex-macro-config") /*id: 683268*/);
  var mmlBeginEnvItem = require("mml-begin-env-item") /*id: 603746*/;
  var p = "configmacros-map";
  var h = "configmacros-env-map";
  exports.ConfigMacrosConfiguration = mathjaxParserConfiguration.Configuration.create("configmacros", {
    init: function (t) {
      new symbolParseMaps.CommandMap(p, {}, {});
      new symbolParseMaps.EnvironmentMap(h, u.default.environment, {}, {});
      t.append(mathjaxParserConfiguration.Configuration.local({
        handler: {
          macro: [p],
          environment: [h]
        },
        priority: 3
      }));
    },
    config: function (t, e) {
      (function (t) {
        var e;
        var Q;
        var r = t.parseOptions.handlers.retrieve(p);
        var n = t.parseOptions.options.macros;
        try {
          var o = T(Object.keys(n));
          var i = o.next();
          for (; !i.done; i = o.next()) {
            var a = i.value;
            var u = typeof n[a] == "string" ? [n[a]] : n[a];
            var c = Array.isArray(u[2]) ? new symbolMacroClasses.Macro(a, l.default.MacroWithTemplate, u.slice(0, 2).concat(u[2])) : new symbolMacroClasses.Macro(a, l.default.Macro, u);
            r.add(a, c);
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (i && !i.done && (Q = o.return)) {
              Q.call(o);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
      })(e);
      (function (t) {
        var e;
        var Q;
        var r = t.parseOptions.handlers.retrieve(h);
        var n = t.parseOptions.options.environments;
        try {
          var o = T(Object.keys(n));
          var i = o.next();
          for (; !i.done; i = o.next()) {
            var a = i.value;
            r.add(a, new symbolMacroClasses.Macro(a, l.default.BeginEnv, [true].concat(n[a])));
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (i && !i.done && (Q = o.return)) {
              Q.call(o);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
      })(e);
    },
    items: ((r = {})[mmlBeginEnvItem.BeginEnvItem.prototype.kind] = mmlBeginEnvItem.BeginEnvItem, r),
    options: {
      macros: optionsMergeUtils.expandable({}),
      environments: optionsMergeUtils.expandable({})
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}