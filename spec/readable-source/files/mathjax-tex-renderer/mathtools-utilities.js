// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mathjaxEqnarrayTags'
// - Resolved require(962632) to 'mathjax-eqnarray-tags'
// - Resolved require(142412) to 'mathjax-utilities'
// - Resolved require(658610) to 'mathjax-tex-parser'
// - Resolved require(342117) to 'message-format-util'
// - Renamed variable 'u' to 'symbolMacroClasses'
// - Resolved require(41578) to 'symbol-macro-classes'
// - Renamed variable 's' to 'optionsMergeUtils'
// - Resolved require(625001) to 'options-merge-utils'
// - Renamed variable 'l' to 'mathtoolsMethodsHandler'
// - Resolved require(588022) to 'mathtools-methods-handler'
// - Renamed variable 'c' to 'mathtoolsConfigurationModule'
// - Resolved require(540005) to 'mathtools-configuration-module'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 129369
         */
module.exports = function (module, exports, require) {
  var r = this && this.__read || function (t, e) {
    var Q = typeof Symbol == "function" && t[Symbol.iterator];
    if (!Q) {
      return t;
    }
    var r;
    var T;
    var n = Q.call(t);
    var o = [];
    try {
      while ((e === undefined || e-- > 0) && !(r = n.next()).done) {
        o.push(r.value);
      }
    } catch (t) {
      T = {
        error: t
      };
    } finally {
      try {
        if (r && !r.done && (Q = n.return)) {
          Q.call(n);
        }
      } finally {
        if (T) {
          throw T.error;
        }
      }
    }
    return o;
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
  exports.MathtoolsUtil = undefined;
  var mathjaxEqnarrayTags = require("mathjax-eqnarray-tags") /*id: 962632*/;
  var o = T(require("mathjax-utilities") /*id: 142412*/);
  var i = T(require("mathjax-tex-parser") /*id: 658610*/);
  var a = T(require("message-format-util") /*id: 342117*/);
  var symbolMacroClasses = require("symbol-macro-classes") /*id: 41578*/;
  var optionsMergeUtils = require("options-merge-utils") /*id: 625001*/;
  var mathtoolsMethodsHandler = require("mathtools-methods-handler") /*id: 588022*/;
  var mathtoolsConfigurationModule = require("mathtools-configuration-module") /*id: 540005*/;
  exports.MathtoolsUtil = {
    setDisplayLevel: function (t, e) {
      if (e) {
        var Q = r(optionsMergeUtils.lookup(e, {
          "\\displaystyle": [true, 0],
          "\\textstyle": [false, 0],
          "\\scriptstyle": [false, 1],
          "\\scriptscriptstyle": [false, 2]
        }, [null, null]), 2);
        var T = Q[0];
        var n = Q[1];
        if (T !== null) {
          t.attributes.set("displaystyle", T);
          t.attributes.set("scriptlevel", n);
        }
      }
    },
    checkAlignment: function (t, e) {
      var Q = t.stack.Top();
      if (Q.kind !== mathjaxEqnarrayTags.EqnArrayItem.prototype.kind) {
        throw new a.default("NotInAlignment", "%1 can only be used in aligment environments", e);
      }
      return Q;
    },
    addPairedDelims: function (t, e, Q) {
      t.handlers.retrieve(mathtoolsConfigurationModule.PAIREDDELIMS).add(e, new symbolMacroClasses.Macro(e, mathtoolsMethodsHandler.MathtoolsMethods.PairedDelimiters, Q));
    },
    spreadLines: function (t, e) {
      if (t.isKind("mtable")) {
        var Q = t.attributes.get("rowspacing");
        if (Q) {
          var r = o.default.dimen2em(e);
          Q = Q.split(/ /).map(function (t) {
            return o.default.Em(Math.max(0, o.default.dimen2em(t) + r));
          }).join(" ");
        } else {
          Q = e;
        }
        t.attributes.set("rowspacing", Q);
      }
    },
    plusOrMinus: function (t, e) {
      if (!(e = e.trim()).match(/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)$/)) {
        throw new a.default("NotANumber", "Argument to %1 is not a number", t);
      }
      if (e.match(/^[-+]/)) {
        return e;
      } else {
        return "+" + e;
      }
    },
    getScript: function (t, e, Q) {
      var r = o.default.trimSpaces(t.GetArgument(e));
      if (r === "") {
        return t.create("node", "none");
      }
      var T = t.options.mathtools[`prescript-${Q}-format`];
      if (T) {
        r = `${T}{${r}}`;
      }
      return new i.default(r, t.stack.env, t.configuration).mml();
    }
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}