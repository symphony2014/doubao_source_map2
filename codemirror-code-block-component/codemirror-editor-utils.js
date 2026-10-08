// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D_' to 'getVisibleLineRange'
// - Renamed export 'bF' to 'createLineSelection'
// - Renamed export 'tD' to 'calculateTextDiff'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16516.625a9212.js
         * chunkId: 16516
         * moduleId: 977017
         */
module.exports = function (module, exports, require) {
  var codemirrorReactWrapper = require("codemirror-react-wrapper") /*id: 479374*/;
  function n(e) {
    let {
      scrollDOM: t
    } = e;
    let r = t.scrollTop;
    let o = r + t.clientHeight;
    let {
      from: n
    } = e.lineBlockAtHeight(r);
    let {
      to: i
    } = e.lineBlockAtHeight(o);
    return {
      from: n,
      to: i
    };
  }
  let i = function (e, t, r = {}) {
    let {
      scrollIntoView: n,
      selection: i
    } = r;
    let a = codemirrorReactWrapper.Text.of(t.split("\n"));
    let l = a.lineAt(a.length);
    let c = {};
    if (t.length >= e.length && t.startsWith(e)) {
      if (t.length === e.length) {
        return null;
      }
      c = {
        changes: {
          from: e.length,
          insert: t.slice(e.length)
        }
      };
    } else {
      c = {
        changes: {
          from: 0,
          to: e.length,
          insert: t
        }
      };
    }
    if (n) {
      c.scrollIntoView = n;
      c.selection = {
        anchor: l.from
      };
    }
    if (i == null ? undefined : i.anchor) {
      if (i.anchor === "START") {
        c.selection = {
          ...i,
          anchor: 0
        };
      } else if (i.anchor === "END") {
        c.selection = {
          ...i,
          anchor: l.to
        };
      } else if (i.anchor === "LAST_LINE") {
        c.selection = {
          ...i,
          anchor: l.from
        };
      }
    }
    return c;
  };
  function a(e, t, r) {
    let n = e.doc.lines;
    let i = Math.max(1, Math.min(t, n));
    let a = Math.max(1, Math.min(r, n));
    let l = Math.min(i, a);
    let c = Math.max(i, a);
    let s = e.doc.line(l).from;
    let u = e.doc.line(c).to;
    return {
      selection: codemirrorReactWrapper.EditorSelection.create([codemirrorReactWrapper.EditorSelection.range(s, u)]),
      scrollIntoView: true,
      effects: codemirrorReactWrapper.EditorView.scrollIntoView(s, {
        y: "start"
      })
    };
  }
  require.d(exports, {
    getVisibleLineRange: function () {
      return n;
    },
    createLineSelection: function () {
      return a;
    },
    calculateTextDiff: function () {
      return i;
    }
  });
}