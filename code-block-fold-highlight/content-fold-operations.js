// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$V' to 'isLineFolded'
// - Renamed export 'BW' to 'FoldAction'
// - Renamed export 'Gt' to 'isSupportedLanguage'
// - Renamed export 'Jf' to 'hasContentAfter'
// - Renamed export 'Us' to 'FOLDED_CONSTANT'
// - Renamed export 'lo' to 'getDiffRanges'
// - Renamed export 'n1' to 'foldLines'
// - Renamed export 'tP' to 'autoFixFold'
// - Renamed export 'tb' to 'getLinesInRange'
// - Renamed export 'vL' to 'unfoldLines'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 22007.b9e6c706.js
         * chunkId: 22007
         * moduleId: 849924
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var typescriptHelpers = require("typescript-helpers") /*id: 45459*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var documentOperationConstants = require("document-operation-constants") /*id: 134823*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var clientsidePrefixConstant = require("clientside-prefix-constant") /*id: 888035*/;
  var editorConstantTypes = require("editor-constant-types") /*id: 392244*/;
  var u = "folded";
  var h = "" + clientsidePrefixConstant.clientsidePrefix + u;
  var f = clientsidePrefixConstant.clientsidePrefix + "unfold";
  (o = i ||= {}).fold = "fold";
  o.unfold = "unfold";
  function g(e) {
    return editorConstantTypes.SupportedLanguages.includes(e.toLowerCase());
  }
  function p(e) {
    var t = [];
    var n = {
      fromA: 0,
      toA: 0,
      fromB: 0,
      toB: 0
    };
    var o = null;
    e.ops.forEach(function (e) {
      var i = deltaSetCore.getOpLength(e);
      if (deltaSetCore.isRetainOp(e)) {
        if (o && !deltaSetCore.isRetainOp(o)) {
          t.push(typescriptHelpers.assignObject({}, n));
          n = {
            fromA: n.toA,
            toA: n.toA,
            fromB: n.toB,
            toB: n.toB
          };
        }
        n.fromA += i;
        n.toA += i;
        n.fromB += i;
        n.toB += i;
      } else if (deltaSetCore.isDeleteOp(e)) {
        n.toA += i;
      } else if (deltaSetCore.isInsertOp(e)) {
        n.toB += i;
      }
      o = e;
    });
    if (n.fromA !== n.toA || n.fromB !== n.toB) {
      t.push(n);
    }
    return t;
  }
  function v(e, t) {
    var n = e.getOffset();
    var o = e.getModelText();
    var i = o[o.length - 1] === documentOperationConstants.newlineChar ? n.end - 1 : n.end;
    return n.start > t.from && i <= t.to;
  }
  function m(e) {
    var i = e.getOps();
    var r = i[i.length - 1];
    return r && r.insert === documentOperationConstants.newlineChar && r.attributes?.[f] !== "true" && (r.attributes?.[u] === "true" || r.attributes?.[h] === "true");
  }
  function C(e, t, n) {
    return (t = Array.isArray(t) ? t.sort(function (e, t) {
      return e - t;
    }) : [t]).filter(function (t) {
      if (n) {
        return !m(e.lines[t]);
      } else {
        return m(e.lines[t]);
      }
    }).map(function (t) {
      return e.lines[t];
    });
  }
  function y(e, t, n, o, i, a = {}) {
    var l;
    var d;
    var c = new contentStructureDelta.ContentDelta({
      zoneId: t.getZoneId()
    });
    var u = {
      start: 0,
      end: 0
    };
    try {
      var h = typescriptHelpers.createIterator(n);
      var f = h.next();
      for (; !f.done; f = h.next()) {
        var g = f.value.getOffset();
        c.retain(g.end - u.end - 1);
        c.retain(1, o);
        u = g;
      }
    } catch (e) {
      l = {
        error: e
      };
    } finally {
      try {
        if (f && !f.done && (d = h.return)) {
          d.call(h);
        }
      } finally {
        if (l) {
          throw l.error;
        }
      }
    }
    if (c.length()) {
      return e.getContentState().apply(c, typescriptHelpers.assignObject(typescriptHelpers.assignObject({}, a), {
        extra: typescriptHelpers.assignObject(typescriptHelpers.assignObject({}, (a == null ? undefined : a.extra) || {}), {
          foldAction: i
        }),
        preventScrolling: true
      }));
    } else {
      return null;
    }
  }
  function S(e, t, n, o = false, r) {
    var a;
    var l = C(t, n, true);
    if (!l.length) {
      return null;
    }
    var s = o ? h : u;
    return y(e, t, l, ((a = {})[s] = "true", a[f] = "", a), i.fold, r);
  }
  function b(e, t, n, o = false, r) {
    var a;
    var l = C(t, n, false);
    if (!l.length) {
      return null;
    }
    (a = {})[h] = "";
    var s = a;
    if (!o) {
      s[u] = "";
    }
    if (o) {
      s[f] = "true";
    }
    return y(e, t, l, s, i.unfold, r);
  }
  function E(e, t, n) {
    if (e.isEditable()) {
      var o = [];
      t.lines.forEach(function (e) {
        if (m(e) && n.every(function (t) {
          return t.line.key !== e.key;
        })) {
          o.push(e.index);
        }
      });
      var i = e.undoModule.getNthUndoRecordFromTop();
      var r = {
        fromCodeFoldAutoFix: true
      };
      var a = b(e, t, o, false, i ? {
        extra: r
      } : {
        nonundoable: true,
        extra: r
      });
      if (i && a) {
        e.undoModule.mergeRecords(i, a);
      }
    }
  }
  function L(e, t, n) {
    var o = [];
    var i = e.lines;
    var r = t.index + 1;
    for (; r < i.length; r++) {
      var a = i[r];
      if (v(a, n)) {
        o.push(a);
        continue;
      }
      break;
    }
    return o;
  }
  function w(e, t) {
    var n = t.line;
    var o = t.range;
    var i = e.getLine(n.index + 1);
    return !!i && !!v(i, o);
  }
  require.d(exports, {
    isLineFolded: function () {
      return m;
    },
    FoldAction: function () {
      return i;
    },
    isSupportedLanguage: function () {
      return g;
    },
    hasContentAfter: function () {
      return w;
    },
    FOLDED_CONSTANT: function () {
      return u;
    },
    getDiffRanges: function () {
      return p;
    },
    foldLines: function () {
      return S;
    },
    autoFixFold: function () {
      return E;
    },
    getLinesInRange: function () {
      return L;
    },
    unfoldLines: function () {
      return b;
    }
  });
}