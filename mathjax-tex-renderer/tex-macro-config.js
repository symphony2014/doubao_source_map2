// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(342117) to 'message-format-util'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Resolved require(559929) to 'tex-base-command-map'
// - Resolved require(142412) to 'mathjax-utilities'
// - Resolved require(656307) to 'mathjax-symbol-macro-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 683268
         */
module.exports = function (module, exports, require) {
  var r = this && this.__createBinding || (Object.create ? function (t, e, Q, r = Q) {
    var T = Object.getOwnPropertyDescriptor(e, Q);
    if (!T || ("get" in T ? !e.__esModule : T.writable || T.configurable)) {
      T = {
        enumerable: true,
        get: function () {
          return e[Q];
        }
      };
    }
    Object.defineProperty(t, r, T);
  } : function (t, e, Q, r = Q) {
    t[r] = e[Q];
  });
  var T = this && this.__setModuleDefault || (Object.create ? function (t, e) {
    Object.defineProperty(t, "default", {
      enumerable: true,
      value: e
    });
  } : function (t, e) {
    t.default = e;
  });
  var n = this && this.__importStar || function (t) {
    if (t && t.__esModule) {
      return t;
    }
    var e = {};
    if (t != null) {
      for (var Q in t) {
        if (Q !== "default" && Object.prototype.hasOwnProperty.call(t, Q)) {
          r(e, t, Q);
        }
      }
    }
    T(e, t);
    return e;
  };
  var o = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  var i = o(require("message-format-util") /*id: 342117*/);
  var a = n(require("symbol-parse-maps") /*id: 664746*/);
  var u = o(require("tex-base-command-map") /*id: 559929*/);
  var s = o(require("mathjax-utilities") /*id: 142412*/);
  var l = o(require("mathjax-symbol-macro-utils") /*id: 656307*/);
  var c = {};
  c.NewCommand = function (t, e) {
    var Q = l.default.GetCsNameArgument(t, e);
    var r = l.default.GetArgCount(t, e);
    var T = t.GetBrackets(e);
    var n = t.GetArgument(e);
    l.default.addMacro(t, Q, c.Macro, [n, r, T]);
  };
  c.NewEnvironment = function (t, e) {
    var Q = s.default.trimSpaces(t.GetArgument(e));
    var r = l.default.GetArgCount(t, e);
    var T = t.GetBrackets(e);
    var n = t.GetArgument(e);
    var o = t.GetArgument(e);
    l.default.addEnvironment(t, Q, c.BeginEnv, [true, n, o, r, T]);
  };
  c.MacroDef = function (t, e) {
    var Q = l.default.GetCSname(t, e);
    var r = l.default.GetTemplate(t, e, "\\" + Q);
    var T = t.GetArgument(e);
    if (r instanceof Array) {
      l.default.addMacro(t, Q, c.MacroWithTemplate, [T].concat(r));
    } else {
      l.default.addMacro(t, Q, c.Macro, [T, r]);
    }
  };
  c.Let = function (t, e) {
    var Q = l.default.GetCSname(t, e);
    var r = t.GetNext();
    if (r === "=") {
      t.i++;
      r = t.GetNext();
    }
    var T = t.configuration.handlers;
    if (r === "\\") {
      e = l.default.GetCSname(t, e);
      var n = T.get("delimiter").lookup("\\" + e);
      if (n) {
        l.default.addDelimiter(t, "\\" + Q, n.char, n.attributes);
        return;
      }
      var o = T.get("macro").applicable(e);
      if (!o) {
        return;
      }
      if (o instanceof a.MacroMap) {
        var i = o.lookup(e);
        l.default.addMacro(t, Q, i.func, i.args, i.symbol);
        return;
      }
      n = o.lookup(e);
      var u = l.default.disassembleSymbol(Q, n);
      l.default.addMacro(t, Q, function (t, e) {
        var Q = [];
        var r = 2;
        for (; r < arguments.length; r++) {
          Q[r - 2] = arguments[r];
        }
        var T = l.default.assembleSymbol(Q);
        return o.parser(t, T);
      }, u);
      return;
    }
    t.i++;
    var s = T.get("delimiter").lookup(r);
    if (s) {
      l.default.addDelimiter(t, "\\" + Q, s.char, s.attributes);
      return;
    }
    l.default.addMacro(t, Q, c.Macro, [r]);
  };
  c.MacroWithTemplate = function (t, e, Q, r) {
    var T = [];
    var n = 4;
    for (; n < arguments.length; n++) {
      T[n - 4] = arguments[n];
    }
    var o = parseInt(r, 10);
    if (o) {
      var a = [];
      t.GetNext();
      if (T[0] && !l.default.MatchParam(t, T[0])) {
        throw new i.default("MismatchUseDef", "Use of %1 doesn't match its definition", e);
      }
      for (var u = 0; u < o; u++) {
        a.push(l.default.GetParameter(t, e, T[u + 1]));
      }
      Q = s.default.substituteArgs(t, a, Q);
    }
    t.string = s.default.addArgs(t, Q, t.string.slice(t.i));
    t.i = 0;
    s.default.checkMaxMacros(t);
  };
  c.BeginEnv = function (t, e, Q, r, T, n) {
    if (e.getProperty("end") && t.stack.env.closing === e.getName()) {
      delete t.stack.env.closing;
      var o = t.string.slice(t.i);
      t.string = r;
      t.i = 0;
      t.Parse();
      t.string = o;
      t.i = 0;
      return t.itemFactory.create("end").setProperty("name", e.getName());
    }
    if (T) {
      var i = [];
      if (n != null) {
        var a = t.GetBrackets("\\begin{" + e.getName() + "}");
        i.push(a == null ? n : a);
      }
      for (var u = i.length; u < T; u++) {
        i.push(t.GetArgument("\\begin{" + e.getName() + "}"));
      }
      Q = s.default.substituteArgs(t, i, Q);
      r = s.default.substituteArgs(t, [], r);
    }
    t.string = s.default.addArgs(t, Q, t.string.slice(t.i));
    t.i = 0;
    return t.itemFactory.create("beginEnv").setProperty("name", e.getName());
  };
  c.Macro = u.default.Macro;
  exports.default = c;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}