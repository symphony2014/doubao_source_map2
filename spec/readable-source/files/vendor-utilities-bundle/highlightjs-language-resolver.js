// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'resolveLanguage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 22007.b9e6c706.js
         * chunkId: 22007
         * moduleId: 553850
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers = require("typescript-helpers") /*id: 45459*/;
  var codeBlockHighlightjsConstants = require("code-block-highlightjs-constants") /*id: 433332*/;
  var highlightjsLanguageAliases = require("highlightjs-language-aliases") /*id: 807150*/;
  function a(e, t) {
    var n;
    var a;
    var l;
    var s;
    var d;
    var c;
    if (t === undefined) {
      t = codeBlockHighlightjsConstants.plainTextLabel;
    }
    if (!e) {
      return t;
    }
    try {
      var u = typescriptHelpers.createIterator(highlightjsLanguageAliases.languageAliases);
      var h = u.next();
      for (; !h.done; h = u.next()) {
        var f = typescriptHelpers.iteratorToArray(h.value, 2);
        var g = f[0];
        var p = f[1];
        if (typescriptHelpers.spreadArguments([g], p).find(function (t) {
          return e.toLowerCase() === t.toLowerCase();
        })) {
          return g;
        }
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        if (h && !h.done && (a = u.return)) {
          a.call(u);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
    try {
      var v = typescriptHelpers.createIterator(highlightjsLanguageAliases.languageNames);
      var m = v.next();
      for (; !m.done; m = v.next()) {
        var g = m.value;
        var C = e.split("").map(function (e) {
          return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }).join("");
        if (RegExp("^" + C, "i").test(g)) {
          return g;
        }
      }
    } catch (e) {
      l = {
        error: e
      };
    } finally {
      try {
        if (m && !m.done && (s = v.return)) {
          s.call(v);
        }
      } finally {
        if (l) {
          throw l.error;
        }
      }
    }
    try {
      var y = typescriptHelpers.createIterator(highlightjsLanguageAliases.languageNames);
      var S = y.next();
      for (; !S.done; S = y.next()) {
        var g = S.value;
        var b = e.split("").map(function (e) {
          return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }).join(".*");
        if (RegExp(b, "i").test(g)) {
          return g;
        }
      }
    } catch (e) {
      d = {
        error: e
      };
    } finally {
      try {
        if (S && !S.done && (c = y.return)) {
          c.call(y);
        }
      } finally {
        if (d) {
          throw d.error;
        }
      }
    }
    return t;
  }
  require.d(exports, {
    resolveLanguage: function () {
      return a;
    }
  });
}