// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'normalizeLanguageName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 74381
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var codeBlockConstants_1 = require("code-block-constants_1") /*id: 881225*/;
  var codeLanguageDefinitions = require("code-language-definitions") /*id: 862192*/;
  function a(e, t) {
    var r;
    var a;
    var s;
    var l;
    var u;
    var c;
    if (t === undefined) {
      t = codeBlockConstants_1.defaultLanguageName;
    }
    if (!e) {
      return t;
    }
    try {
      var h = typescriptHelpers_1.getValues(codeLanguageDefinitions.languageDefinitions);
      var d = h.next();
      for (; !d.done; d = h.next()) {
        var f = typescriptHelpers_1.readIterator(d.value, 2);
        var A = f[0];
        var g = f[1];
        if (typescriptHelpers_1.spreadArray([A], g).find(function (t) {
          return e.toLowerCase() === t.toLowerCase();
        })) {
          return A;
        }
      }
    } catch (e) {
      r = {
        error: e
      };
    } finally {
      try {
        if (d && !d.done && (a = h.return)) {
          a.call(h);
        }
      } finally {
        if (r) {
          throw r.error;
        }
      }
    }
    try {
      var p = typescriptHelpers_1.getValues(codeLanguageDefinitions.languageNameList);
      var m = p.next();
      for (; !m.done; m = p.next()) {
        var A = m.value;
        var y = e.split("").map(function (e) {
          return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }).join("");
        if (RegExp("^" + y, "i").test(A)) {
          return A;
        }
      }
    } catch (e) {
      s = {
        error: e
      };
    } finally {
      try {
        if (m && !m.done && (l = p.return)) {
          l.call(p);
        }
      } finally {
        if (s) {
          throw s.error;
        }
      }
    }
    try {
      var v = typescriptHelpers_1.getValues(codeLanguageDefinitions.languageNameList);
      var b = v.next();
      for (; !b.done; b = v.next()) {
        var A = b.value;
        var w = e.split("").map(function (e) {
          return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }).join(".*");
        if (RegExp(w, "i").test(A)) {
          return A;
        }
      }
    } catch (e) {
      u = {
        error: e
      };
    } finally {
      try {
        if (b && !b.done && (c = v.return)) {
          c.call(v);
        }
      } finally {
        if (u) {
          throw u.error;
        }
      }
    }
    return t;
  }
  require.d(exports, {
    normalizeLanguageName: function () {
      return a;
    }
  });
}