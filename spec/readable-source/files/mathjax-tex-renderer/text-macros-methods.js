// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(658610) to 'mathjax-tex-parser'
// - Renamed variable 'n' to 'mathjaxRetryHandler'
// - Resolved require(425825) to 'mathjax-retry-handler'
// - Resolved require(559929) to 'tex-base-command-map'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 259813
         */
module.exports = function (module, exports, require) {
  var r = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.TextMacrosMethods = undefined;
  var T = r(require("mathjax-tex-parser") /*id: 658610*/);
  var mathjaxRetryHandler = require("mathjax-retry-handler") /*id: 425825*/;
  var o = r(require("tex-base-command-map") /*id: 559929*/);
  exports.TextMacrosMethods = {
    Comment: function (t, e) {
      while (t.i < t.string.length && t.string.charAt(t.i) !== "\n") {
        t.i++;
      }
      t.i++;
    },
    Math: function (t, e) {
      t.saveText();
      var Q;
      var r;
      var n = t.i;
      var o = 0;
      while (r = t.GetNext()) {
        Q = t.i++;
        switch (r) {
          case "\\":
            if (t.GetCS() === ")") {
              r = "\\(";
            }
          case "$":
            if (o === 0 && e === r) {
              var i = t.texParser.configuration;
              var a = new T.default(t.string.substr(n, Q - n), t.stack.env, i).mml();
              t.PushMath(a);
              return;
            }
            break;
          case "{":
            o++;
            break;
          case "}":
            if (o === 0) {
              t.Error("ExtraCloseMissingOpen", "Extra close brace or missing open brace");
            }
            o--;
        }
      }
      t.Error("MathNotTerminated", "Math-mode is not properly terminated");
    },
    MathModeOnly: function (t, e) {
      t.Error("MathModeOnly", "'%1' allowed only in math mode", e);
    },
    Misplaced: function (t, e) {
      t.Error("Misplaced", "'%1' can not be used here", e);
    },
    OpenBrace: function (t, e) {
      var Q = t.stack.env;
      t.envStack.push(Q);
      t.stack.env = Object.assign({}, Q);
    },
    CloseBrace: function (t, e) {
      if (t.envStack.length) {
        t.saveText();
        t.stack.env = t.envStack.pop();
      } else {
        t.Error("ExtraCloseMissingOpen", "Extra close brace or missing open brace");
      }
    },
    OpenQuote: function (t, e) {
      if (t.string.charAt(t.i) === e) {
        t.text += "“";
        t.i++;
      } else {
        t.text += "‘";
      }
    },
    CloseQuote: function (t, e) {
      if (t.string.charAt(t.i) === e) {
        t.text += "”";
        t.i++;
      } else {
        t.text += "’";
      }
    },
    Tilde: function (t, e) {
      t.text += "\xA0";
    },
    Space: function (t, e) {
      for (t.text += " "; t.GetNext().match(/\s/);) {
        t.i++;
      }
    },
    SelfQuote: function (t, e) {
      t.text += e.substr(1);
    },
    Insert: function (t, e, Q) {
      t.text += Q;
    },
    Accent: function (t, e, Q) {
      var r = t.ParseArg(e);
      var T = t.create("token", "mo", {}, Q);
      t.addAttributes(T);
      t.Push(t.create("node", "mover", [r, T]));
    },
    Emph: function (t, e) {
      var Q = t.stack.env.mathvariant === "-tex-mathit" ? "normal" : "-tex-mathit";
      t.Push(t.ParseTextArg(e, {
        mathvariant: Q
      }));
    },
    SetFont: function (t, e, Q) {
      t.saveText();
      t.stack.env.mathvariant = Q;
    },
    SetSize: function (t, e, Q) {
      t.saveText();
      t.stack.env.mathsize = Q;
    },
    CheckAutoload: function (t, e) {
      var Q = t.configuration.packageData.get("autoload");
      var r = t.texParser;
      e = e.slice(1);
      var T = r.lookup("macro", e);
      if (!T || Q && T._func === Q.Autoload) {
        r.parse("macro", [r, e]);
        if (!T) {
          return;
        }
        mathjaxRetryHandler.retryAfter(Promise.resolve());
      }
      r.parse("macro", [t, e]);
    },
    Macro: o.default.Macro,
    Spacer: o.default.Spacer,
    Hskip: o.default.Hskip,
    rule: o.default.rule,
    Rule: o.default.Rule,
    HandleRef: o.default.HandleRef
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}