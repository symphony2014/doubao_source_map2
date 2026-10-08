// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Resolved require(658610) to 'mathjax-tex-parser'
// - Resolved require(352636) to 'mathml-abstract-node-util'
// - Renamed variable 'a' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Resolved require(559929) to 'tex-base-command-map'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 478504
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
  exports.CenternotConfiguration = exports.filterCenterOver = undefined;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var o = T(require("mathjax-tex-parser") /*id: 658610*/);
  var i = T(require("mathml-abstract-node-util") /*id: 352636*/);
  var symbolParseMaps = require("symbol-parse-maps") /*id: 664746*/;
  var u = T(require("tex-base-command-map") /*id: 559929*/);
  function s(t) {
    var e;
    var Q;
    var T = t.data;
    try {
      var n = r(T.getList("centerOver"));
      var o = n.next();
      for (; !o.done; o = n.next()) {
        var a = o.value;
        var u = i.default.getTexClass(a.childNodes[0].childNodes[0]);
        if (u !== null) {
          i.default.setProperties(a.parent.parent.parent.parent.parent.parent, {
            texClass: u
          });
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        if (o && !o.done && (Q = n.return)) {
          Q.call(n);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
  }
  new symbolParseMaps.CommandMap("centernot", {
    centerOver: "CenterOver",
    centernot: ["Macro", "\\centerOver{#1}{{⧸}}", 1]
  }, {
    CenterOver: function (t, e) {
      var Q = "{" + t.GetArgument(e) + "}";
      var r = t.ParseArg(e);
      var T = new o.default(Q, t.stack.env, t.configuration).mml();
      var n = t.create("node", "TeXAtom", [new o.default(Q, t.stack.env, t.configuration).mml(), t.create("node", "mpadded", [t.create("node", "mpadded", [r], {
        width: 0,
        lspace: "-.5width"
      }), t.create("node", "mphantom", [T])], {
        width: 0,
        lspace: "-.5width"
      })]);
      t.configuration.addNode("centerOver", T);
      t.Push(n);
    },
    Macro: u.default.Macro
  });
  exports.filterCenterOver = s;
  exports.CenternotConfiguration = mathjaxParserConfiguration.Configuration.create("centernot", {
    handler: {
      macro: ["centernot"]
    },
    postprocessors: [s]
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}