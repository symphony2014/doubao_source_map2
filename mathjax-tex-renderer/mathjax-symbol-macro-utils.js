// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(142412) to 'mathjax-utilities'
// - Resolved require(342117) to 'message-format-util'
// - Renamed variable 'i' to 'symbolMacroClasses'
// - Resolved require(41578) to 'symbol-macro-classes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 656307
         */
module.exports = function (module, exports, require) {
  var r;
  var T = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  var n = T(require("mathjax-utilities") /*id: 142412*/);
  var o = T(require("message-format-util") /*id: 342117*/);
  var symbolMacroClasses = require("symbol-macro-classes") /*id: 41578*/;
  (function (t) {
    function e(t, e) {
      if (t.string.substr(t.i, e.length) !== e || e.match(/\\[a-z]+$/i) && t.string.charAt(t.i + e.length).match(/[a-z]/i)) {
        return 0;
      } else {
        t.i += e.length;
        return 1;
      }
    }
    t.disassembleSymbol = function (t, e) {
      var Q = [t, e.char];
      if (e.attributes) {
        for (var r in e.attributes) {
          Q.push(r);
          Q.push(e.attributes[r]);
        }
      }
      return Q;
    };
    t.assembleSymbol = function (t) {
      var e = t[0];
      var Q = t[1];
      var r = {};
      var T = 2;
      for (; T < t.length; T += 2) {
        r[t[T]] = t[T + 1];
      }
      return new symbolMacroClasses.Symbol(e, Q, r);
    };
    t.GetCSname = function (t, e) {
      if (t.GetNext() !== "\\") {
        throw new o.default("MissingCS", "%1 must be followed by a control sequence", e);
      }
      return n.default.trimSpaces(t.GetArgument(e)).substr(1);
    };
    t.GetCsNameArgument = function (t, e) {
      var Q = n.default.trimSpaces(t.GetArgument(e));
      if (Q.charAt(0) === "\\") {
        Q = Q.substr(1);
      }
      if (!Q.match(/^(.|[a-z]+)$/i)) {
        throw new o.default("IllegalControlSequenceName", "Illegal control sequence name for %1", e);
      }
      return Q;
    };
    t.GetArgCount = function (t, e) {
      var Q = t.GetBrackets(e);
      if (Q && !(Q = n.default.trimSpaces(Q)).match(/^[0-9]+$/)) {
        throw new o.default("IllegalParamNumber", "Illegal number of parameters specified in %1", e);
      }
      return Q;
    };
    t.GetTemplate = function (t, e, Q) {
      var r = t.GetNext();
      var T = [];
      var n = 0;
      var i = t.i;
      while (t.i < t.string.length) {
        if ((r = t.GetNext()) === "#") {
          if (i !== t.i) {
            T[n] = t.string.substr(i, t.i - i);
          }
          if (!(r = t.string.charAt(++t.i)).match(/^[1-9]$/)) {
            throw new o.default("CantUseHash2", "Illegal use of # in template for %1", Q);
          }
          if (parseInt(r) !== ++n) {
            throw new o.default("SequentialParam", "Parameters for %1 must be numbered sequentially", Q);
          }
          i = t.i + 1;
        } else if (r === "{") {
          if (i !== t.i) {
            T[n] = t.string.substr(i, t.i - i);
          }
          if (T.length > 0) {
            return [n.toString()].concat(T);
          }
          return n;
        }
        t.i++;
      }
      throw new o.default("MissingReplacementString", "Missing replacement string for definition of %1", e);
    };
    t.GetParameter = function (t, Q, r) {
      if (r == null) {
        return t.GetArgument(Q);
      }
      var T = t.i;
      var n = 0;
      var i = 0;
      while (t.i < t.string.length) {
        var a = t.string.charAt(t.i);
        if (a === "{") {
          if (t.i === T) {
            i = 1;
          }
          t.GetArgument(Q);
          n = t.i - T;
        } else if (e(t, r)) {
          if (i) {
            T++;
            n -= 2;
          }
          return t.string.substr(T, n);
        } else if (a === "\\") {
          t.i++;
          n++;
          i = 0;
          var u = t.string.substr(t.i).match(/[a-z]+|./i);
          if (u) {
            t.i += u[0].length;
            n = t.i - T;
          }
        } else {
          t.i++;
          n++;
          i = 0;
        }
      }
      throw new o.default("RunawayArgument", "Runaway argument for %1?", Q);
    };
    t.MatchParam = e;
    t.addDelimiter = function (e, Q, r, T) {
      e.configuration.handlers.retrieve(t.NEW_DELIMITER).add(Q, new symbolMacroClasses.Symbol(Q, r, T));
    };
    t.addMacro = function (e, Q, r, T, n = "") {
      e.configuration.handlers.retrieve(t.NEW_COMMAND).add(Q, new symbolMacroClasses.Macro(n || Q, r, T));
    };
    t.addEnvironment = function (e, Q, r, T) {
      e.configuration.handlers.retrieve(t.NEW_ENVIRONMENT).add(Q, new symbolMacroClasses.Macro(Q, r, T));
    };
    t.NEW_DELIMITER = "new-Delimiter";
    t.NEW_COMMAND = "new-Command";
    t.NEW_ENVIRONMENT = "new-Environment";
  })(r ||= {});
  exports.default = r;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}