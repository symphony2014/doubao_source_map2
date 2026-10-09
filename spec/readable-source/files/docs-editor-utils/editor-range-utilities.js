// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AX' to 'createRangeWithZone'
// - Renamed export 'F0' to 'isAtStart'
// - Renamed export 'F3' to 'isZoneVertical'
// - Renamed export 'Fw' to 'toStartEnd'
// - Renamed export 'JE' to 'isAtLastLine'
// - Renamed export 'Nz' to 'selectToStart'
// - Renamed export 'Oj' to 'transferSelection'
// - Renamed export 'Pm' to 'createActiveRange'
// - Renamed export 'QH' to 'convertRangeWithZone'
// - Renamed export 'TC' to 'toSelectionObject'
// - Renamed export 'Vb' to 'getStartLenArray'
// - Renamed export 'a7' to 'isAtFirstLine'
// - Renamed export 'hW' to 'isCaretAtEnd'
// - Renamed export 'mL' to 'isAtZoneEnd'
// - Renamed export 'rT' to 'selectToEnd'
// - Renamed export 'u0' to 'toPosition'
// - Renamed export 'wY' to 'isCaretVertical'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 780600
         */
module.exports = function (module, exports, require) {
  var activeEditorRange = require("active-editor-range") /*id: 466344*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var primitiveConverters = require("primitive-converters") /*id: 383327*/;
  function u(e) {
    return e.start.line === 0 && e.start.offset === 0;
  }
  function a(e) {
    let n = e.editor.getContentState().getZoneState(e.start.zoneId);
    if (!n) {
      return false;
    }
    let r = n.totalWidth() - 1;
    return e.toPosition().start + e.toPosition().len === r;
  }
  function s(e) {
    let n = "len" in e ? e : e.toPosition();
    return [n.start, n.start + n.len];
  }
  function d(e) {
    let n;
    if (Array.isArray(e)) {
      return {
        zoneId: zeroConstantModule_1.versionValue,
        start: e[0],
        len: e[1] - e[0]
      };
    } else {
      return e.toPosition();
    }
  }
  function f(e) {
    let n = e.toPosition();
    return {
      start: n.start,
      end: n.start + n.len
    };
  }
  function h(e, n) {
    if (!Array.isArray(n)) {
      n = [n.start, n.end];
    }
    let r = _(e.model.zoneState, n);
    return p(e, r);
  }
  function _(e, n) {
    let r = e.getZoneId();
    let o = e.offsetToPoint(n[0]);
    let i = e.offsetToPoint(n[1]);
    return {
      start: {
        ...o,
        zoneId: r
      },
      end: {
        ...i,
        zoneId: r
      }
    };
  }
  function p(e, n) {
    return new activeEditorRange.ActiveEditorRange({
      editor: e.editor,
      ...n,
      state: e.model.zoneState
    });
  }
  function g(e) {
    let {
      zoneId: n
    } = e.start;
    let r = e.editor.getContentState().getZoneState(n);
    if (!r) {
      return false;
    }
    let o = r.length();
    let i = r.getLine(o - 1);
    if (!i) {
      return false;
    }
    let l = e.editor.rectModule.getCaretRect({
      ...e.start,
      line: 0,
      offset: 0
    }, n);
    let c = e.editor.rectModule.getCaretRect({
      ...e.start,
      line: o - 1,
      offset: i.length() - 1
    }, n);
    return !E(l.top, c.top);
  }
  function E(e, n) {
    return e === undefined || n === undefined || Math.abs(e - n) < 8;
  }
  function m(e) {
    let n = e.toPosition();
    let {
      zoneId: r
    } = n;
    let o = e.editor.getContentState().getZoneState(r);
    if (!o) {
      return false;
    }
    let i = o.offsetToPoint(n.start + n.len + 1);
    let l = e.editor.rectModule.getCaretRect(e.end, r);
    let c = e.editor.rectModule.getCaretRect({
      ...i,
      zoneId: r
    }, r);
    return !E(l.top, c.top);
  }
  function b(e) {
    let n = e.toPosition();
    let {
      zoneId: r
    } = n;
    let o = e.editor.getContentState().getZoneState(r);
    if (!o) {
      return false;
    }
    let i = o.offsetToPoint(n.start + n.len + 1);
    let l = e.editor.rectModule.getCaretRect({
      ...e.start,
      offset: o.getModelText().length - 1
    }, r);
    let c = e.editor.rectModule.getCaretRect({
      ...i,
      zoneId: r
    }, r);
    return E(l.top, c.top);
  }
  function v(e) {
    let {
      zoneId: n
    } = e.start;
    let r = e.editor.rectModule.getCaretRect(e.end, n);
    if (e.start.line !== 0) {
      return false;
    }
    let o = e.editor.rectModule.getCaretRect({
      ...e.start,
      offset: 0
    }, n);
    return !!E(r.top, o.top);
  }
  function T(e) {
    let {
      zoneId: n
    } = e.end;
    let r = e.editor.rectModule.getCaretRect(e.end, n);
    let o = e.editor.getContentState().getZoneState(n);
    if (!o || e.start.line !== o.length() - 1) {
      return false;
    }
    let i = e.editor.rectModule.getCaretRect({
      ...e.start,
      offset: o.getModelText().length - 1
    }, n);
    return !!E(r.top, i.top);
  }
  function C(e, n) {
    e.model.setSelection({
      start: 0,
      len: 0
    }, n);
    e.focus();
  }
  function k(e) {
    let {
      zoneState: n
    } = e.model;
    let r = n.totalWidth();
    e.model.setSelection({
      start: r - 1,
      len: 0
    });
    e.focus();
  }
  function I(e, n) {
    let {
      left: r,
      top: o
    } = n;
    let i = e.left + r;
    let l = e.top + o;
    return {
      left: i,
      top: l,
      bottom: e.bottom + o,
      right: e.right + r,
      height: e.height,
      width: e.width,
      x: i,
      y: l
    };
  }
  function R(e, n, r) {
    let i;
    let l;
    let c;
    let {
      model: u
    } = e;
    let {
      model: a,
      editor: s
    } = n;
    let d = u.getSelection();
    if (!d) {
      return;
    }
    let f = I(s.rectModule.getCaretRect(d.start, u.zoneId), s.getRect(u.zoneId));
    let h = a.zoneState;
    let _ = r ? h.length() - 1 : 0;
    let p = h.getLine(_);
    if (!p) {
      return;
    }
    let E = p.length();
    let m = {
      line: _,
      offset: 0,
      zoneId: h.getZoneId()
    };
    let b = {
      line: _,
      offset: E,
      zoneId: h.getZoneId()
    };
    let C = I(s.rectModule.getRangeRect(new activeEditorRange.ActiveEditorRange({
      editor: s,
      start: m,
      end: b,
      state: h
    }), a.zoneId), s.getRect(a.zoneId));
    let k = new activeEditorRange.ActiveEditorRange({
      editor: s,
      start: m,
      end: m,
      state: h
    });
    let R = new activeEditorRange.ActiveEditorRange({
      editor: s,
      start: b,
      end: b,
      state: h
    });
    if (!g(k) && f.left <= C.left) {
      a.setSelection(k);
      n.focus();
      return;
    }
    if (!g(R) && f.left >= C.right) {
      a.setSelection(R);
      n.focus();
      return;
    }
    for (let e = 0; e < E; e++) {
      let n = r ? E - 1 - e : e;
      let u = {
        line: _,
        offset: n,
        zoneId: h.getZoneId()
      };
      let d = new activeEditorRange.ActiveEditorRange({
        editor: s,
        start: u,
        end: u,
        state: h
      });
      if (r ? !T(d) : !v(d)) {
        i = d;
        if (!r) {
          let e = {
            line: _,
            offset: Math.max(n - 2, 0),
            zoneId: h.getZoneId()
          };
          i = new activeEditorRange.ActiveEditorRange({
            editor: s,
            start: e,
            end: e,
            state: h
          });
        }
        break;
      }
      let p = I(s.rectModule.getRangeRect(d, a.zoneId), s.getRect(a.zoneId));
      if (p.left === f.left || e === 0 && (!r && p.left > f.left || r && p.left < f.left)) {
        i = d;
        break;
      }
      if (l && c && (!r && p.left > f.left || r && p.left < f.left)) {
        i = Math.abs(c.left - f.left) < Math.abs(p.left - f.left) ? l : d;
        break;
      }
      l = d;
      c = p;
    }
    if (i = i || l) {
      a.setSelection(i);
      n.focus();
    }
  }
  let y = e => {
    let n = e.toPosition();
    return {
      id: primitiveConverters.toNumber(n.zoneId),
      type: editorTypeConstants.blockTypes.TEXT,
      selection: {
        start: n.start,
        end: n.start + n.len
      }
    };
  };
  require.d(exports, {
    createRangeWithZone: function () {
      return _;
    },
    isAtStart: function () {
      return u;
    },
    isZoneVertical: function () {
      return g;
    },
    toStartEnd: function () {
      return f;
    },
    isAtLastLine: function () {
      return T;
    },
    selectToStart: function () {
      return C;
    },
    transferSelection: function () {
      return R;
    },
    createActiveRange: function () {
      return p;
    },
    convertRangeWithZone: function () {
      return h;
    },
    toSelectionObject: function () {
      return y;
    },
    getStartLenArray: function () {
      return s;
    },
    isAtFirstLine: function () {
      return v;
    },
    isCaretAtEnd: function () {
      return b;
    },
    isAtZoneEnd: function () {
      return a;
    },
    selectToEnd: function () {
      return k;
    },
    toPosition: function () {
      return d;
    },
    isCaretVertical: function () {
      return m;
    }
  });
}