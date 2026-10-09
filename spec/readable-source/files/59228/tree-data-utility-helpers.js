// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Be' to 'handleUncheckState'
// - Renamed export 'G$' to 'getParentKeysSet'
// - Renamed export 'I8' to 'buildTreeEntities'
// - Renamed export 'MP' to 'createCheckedKeysSet'
// - Renamed export 'Pi' to 'calcPositionNumber'
// - Renamed export '_1' to 'convertValuesByConfig'
// - Renamed export 'af' to 'resolveValuesFromMap'
// - Renamed export 'cM' to 'getChildKeys'
// - Renamed export 'fM' to 'calcCheckedStates'
// - Renamed export 'gU' to 'collectChildKeys'
// - Renamed export 'gW' to 'handleCheckState'
// - Renamed export 'gy' to 'extractNodeValues'
// - Renamed export 'hX' to 'matchFilterNode'
// - Renamed export 'lH' to 'filterTreeWithSearch'
// - Renamed export 'mD' to 'getParentPathKeys'
// - Renamed export 'oH' to 'flattenTreeToNodes'
// - Renamed export 'oX' to 'convertObjectToTree'
// - Renamed export 'qG' to 'calcMotionType'
// - Renamed export 'so' to 'getDescendantKeys'
// - Renamed export 'tS' to 'filterExistingKeys'
// - Renamed export 'tt' to 'ensureArrayFormat'
// - Renamed export 'vP' to 'getDisabledCheckedKeys'
// - Renamed export 'wp' to 'calcDropPosition'
// - Renamed export 'yI' to 'getRootCheckedKeys'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18629.286ea62c.js
         * chunkId: 18629
         * moduleId: 869686
         */
module.exports = function (module, exports, require) {
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var isNullCheck = require("is-null-check") /*id: 36126*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var arrayMaxByUtilWrapper = require("array-max-by-util-wrapper") /*id: 477121*/;
  var dataProcessor = require("data-processor") /*id: 395538*/;
  var throttledArrayDiffUtil = require("throttled-array-diff-util") /*id: 222302*/;
  function u(e) {
    return !isNullCheck.isNull(e) && !isUndefinedCheck.isUndefined(e);
  }
  function g(e, t, n, s = false) {
    let l = [];
    let d = !!s;
    let h = objectPathGetDefault.getObjectPathDefault(n, "key", "key");
    let c = objectPathGetDefault.getObjectPathDefault(n, "children", "children");
    (function e(a, p = null) {
      return a.map((u, g) => {
        var f;
        f = p ? p.pos : "0";
        let y = `${f}-${g}`;
        let b = u[h];
        let m = {};
        if (n) {
          Object.entries(throttledOmitPathStringify.omitPathStringify(n, "children")).forEach(e => {
            let [t, n] = e;
            let i = u[n];
            if (!isUndefinedCheck.isUndefined(i)) {
              m[t] = i;
            }
          });
        }
        let C = Object.assign(Object.assign(Object.assign({}, throttledPathFilterStringify.throttledPathStr(u, ["key", "label", "value", "icon", "disabled", "isLeaf"])), m), {
          parent: p,
          pos: y,
          children: null,
          data: u,
          _innerDataTag: true,
          isEnd: [...(p ? p.isEnd : []), g === a.length - 1]
        });
        let E = typeof s == "boolean";
        if (!d || !E && s.has(b)) {
          l.push(C);
        }
        if (t.has(b) && (!d || !E && s.has(b))) {
          C.children = e(u[c] || [], C);
        } else {
          C.children = [];
        }
        return C;
      });
    })(e);
    return l;
  }
  function f(e) {
    let t = [];
    let n = (e, t, i, a) => {
      let r = [...i, e];
      let s = {
        key: r.join("-"),
        label: e,
        value: t
      };
      if (isObjectOrFunction_1_1.isObjectOrFunction(t)) {
        let e = [];
        Object.entries(t).forEach(t => {
          n(t[0], t[1], r, e);
        });
        s.children = e;
      }
      a.push(s);
    };
    Object.entries(e).forEach(e => n(e[0], e[1], [], t));
    return t;
  }
  function y(e, t) {
    let n = {};
    let i = {};
    let r = {};
    let s = objectPathGetDefault.getObjectPathDefault(t, "value", "value");
    (function (e, t, n) {
      let i = objectPathGetDefault.getObjectPathDefault(n, "key", "key");
      let r = objectPathGetDefault.getObjectPathDefault(n, "children", "children");
      let s = (n, o, l) => {
        var d;
        let h = n ? n[r] : e;
        let c = n ? (d = l.pos, `${d}-${o}`) : "0";
        if (n) {
          let e = objectPathGetDefault.getObjectPathDefault(n, i, null);
          t({
            data: Object.assign({}, n),
            ind: o,
            pos: c,
            key: e !== null ? e : c,
            parentPos: l.node ? l.pos : null,
            level: Number(l.level) + 1
          });
        }
        if (h) {
          h.forEach((e, t) => {
            s(e, t, {
              node: n,
              pos: c,
              level: l ? Number(l.level) + 1 : -1
            });
          });
        }
      };
      s(null);
    })(e, e => {
      let {
        pos: t,
        key: o,
        parentPos: l
      } = e;
      let d = Object.assign({}, e);
      let h = objectPathGetDefault.getObjectPathDefault(d, `data.${s}`, null);
      if (h !== null) {
        r[h] = o;
      }
      n[t] = d;
      i[o] = d;
      d.parent = n[l];
      if (d.parent) {
        d.parent.children = d.parent.children || [];
        d.parent.children.push(d);
      }
    }, t);
    return {
      posEntities: n,
      keyEntities: i,
      valueEntities: r
    };
  }
  function b(e, t, n = false) {
    if (!u(e)) {
      return [];
    }
    if (!n && Array.isArray(e)) {
      e = e.length ? [e[0]] : [];
    } else if (!Array.isArray(e)) {
      e = [e];
    }
    if (isEmptyUtil.isEmpty(t)) {
      return e;
    }
    let i = [];
    e.forEach(e => {
      if (e in t) {
        i.push(t[e]);
      } else if (e) {
        i.push(e);
      }
    });
    return i;
  }
  function m(e, t) {
    let n = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    let i = [];
    let a = e => {
      if (!e) {
        return;
      }
      let {
        children: n
      } = e;
      if (u(n)) {
        n.forEach(e => {
          i.push(e.key);
          a(t[e.key]);
        });
      }
    };
    e.forEach(e => {
      if (n) {
        i.push(e);
      }
      a(t[e]);
    });
    return i;
  }
  function C(e, t) {
    let n = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    let i = [];
    e.forEach(e => {
      if (t[e] && t[e].parent) {
        i.push(t[e].parent.key);
      }
    });
    return function (e, t, n = []) {
      let i = [];
      if (e) {
        e.forEach(e => {
          let a = t[e];
          if (a && a.children) {
            a.children.forEach(e => {
              if (!n.length || !n.includes(e.key)) {
                i.push(e.key);
              }
            });
          }
        });
      }
      return i;
    }(dataProcessor.processData(i), t, n ? [] : e);
  }
  function E(e, t) {
    let n = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    let i = [];
    let a = e => {
      if (e.parent) {
        i.push(e.parent.key);
        a(e.parent);
      }
    };
    e.forEach(e => {
      if (t[e]) {
        a(t[e]);
      }
      if (n) {
        i.push(e);
      }
    });
    return i;
  }
  function v(e, t) {
    let n = Array.isArray(e) ? e : [e];
    let i = new Set([...m(n, t, true)]);
    let a = new Set([]);
    let r = [];
    let o = function (e, t) {
      let n = {};
      e.forEach(e => {
        if (!t[e]) {
          return;
        }
        let {
          level: i
        } = t[e];
        if (n[i]) {
          n[i].push(e);
        } else {
          n[i] = [e];
        }
      });
      return n;
    }(n, t);
    let l = e => {
      let {
        key: n,
        parent: s,
        level: l
      } = e;
      if (!s || r.includes(n)) {
        return;
      }
      let d = C([n], t);
      r = [...r, ...d];
      if (d.every(e => i.has(e))) {
        i.add(s.key);
        if (l - 1 in o && l) {
          o[l - 1].push(s.key);
        } else {
          o[l - 1] = [s.key];
        }
      } else {
        let e = E([n], t, false);
        a = new Set([...a, ...e]);
      }
    };
    while (!isEmptyUtil.isEmpty(o)) {
      let e = arrayMaxByUtilWrapper.getMaxBy(Object.keys(o).map(e => Number(e)));
      o[e].forEach(e => l(t[e]));
      delete o[e];
    }
    return {
      checkedKeys: i,
      halfCheckedKeys: a
    };
  }
  function x(e = [], t) {
    let n = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    return new Set((Array.isArray(e) || (e = [e]), n) ? E(e, t, true) : e);
  }
  function k(e, t, n, i) {
    return new Set(E(b(e, i, n), t, false));
  }
  function S(e, t, n) {
    let i = "show";
    let a = [...e];
    let r = [...t];
    if (Math.abs(a.length - r.length) !== 1) {
      return {
        motionType: i,
        motionKeys: []
      };
    }
    let s = [];
    if (a.length > r.length) {
      i = "hide";
      s = throttledArrayDiffUtil.throttledArrayDiff(a, r);
    } else {
      s = throttledArrayDiffUtil.throttledArrayDiff(r, a);
    }
    return {
      motionType: s.length === 1 ? i : "show",
      motionKeys: s.length === 1 ? m(s, n, false) : []
    };
  }
  function N(e, t, n, i) {
    if (!n) {
      return true;
    }
    let a = n;
    let r = t;
    if (typeof n == "boolean") {
      a = (e, t) => {
        let n = e.toLowerCase();
        return t.toString().toLowerCase().includes(n);
      };
    }
    if (i) {
      r = t[i];
    }
    return a(e, r, t);
  }
  function D(e) {
    if (Array.isArray(e)) {
      return e;
    } else {
      return [e];
    }
  }
  function O(e, t, n = false, i) {
    let a = [];
    let r = new Set(e);
    if (n) {
      e.forEach(e => {
        if (t[e] && !u(t[e].children)) {
          a.push(e);
        }
        if (!t[e] && i) {
          a.push(e);
        }
      });
    } else {
      e.forEach(e => {
        if (!t[e]) {
          if (i) {
            a.push(e);
          }
          return;
        }
        let {
          parent: n
        } = t[e];
        if (!n || !r.has(n.key)) {
          a.push(e);
        }
      });
    }
    return a;
  }
  function w(e, t, n) {
    let i = [];
    let a = e => {
      if (n[e].children) {
        n[e].children.forEach(e => {
          let {
            key: n
          } = e;
          i.push(n);
          if (t.has(n)) {
            a(n);
          }
        });
      }
    };
    a(e);
    return i;
  }
  function P(e, t, n, i) {
    let a = m([e], t, true);
    let r = t[e];
    n = new Set([...n, e]);
    let s = e => {
      if (!e.parent) {
        return;
      }
      let {
        key: a
      } = e;
      if (C([a], t).every(e => n.has(e))) {
        let t = e.parent;
        n.add(t.key);
        s(t);
      } else {
        let e = E([a], t, false);
        i = new Set([...i, ...e]);
      }
    };
    s(r);
    return {
      checkedKeys: new Set([...n, ...a]),
      halfCheckedKeys: i
    };
  }
  function T(e, t, n, i) {
    let a = m([e], t, true);
    let r = t[e];
    a.forEach(e => {
      if (n.has(e)) {
        n.delete(e);
      }
      if (i.has(e)) {
        i.delete(e);
      }
    });
    let s = e => {
      let a = e.parent;
      if (!a || !n.has(a.key) && !i.has(a.key)) {
        return;
      }
      let {
        key: r
      } = e;
      let o = C([r], t).some(e => n.has(e) || i.has(e));
      let l = E([r], t, false);
      if (o) {
        l.forEach(e => {
          if (n.has(e)) {
            n.delete(e);
            i.add(e);
          }
        });
      } else {
        if (n.has(a.key)) {
          n.delete(a.key);
        }
        if (i.has(a.key)) {
          i.delete(a.key);
        }
        s(a);
      }
    };
    if (r) {
      s(r);
    }
    return {
      checkedKeys: n,
      halfCheckedKeys: i
    };
  }
  function K(e) {
    let {
      showFilteredOnly: t,
      keyEntities: n,
      inputValue: i,
      treeData: a,
      filterTreeNode: r,
      filterProps: s,
      prevExpandedKeys: o,
      keyMaps: l
    } = e;
    let d = [];
    let h = E(d = Object.values(n).filter(e => N(i, e.data, r, s)).map(e => e.key), n, false);
    if (o.length) {
      let e = o.filter(e => !!n[e]);
      h = h.concat(e);
    }
    let c = new Set([...m(d, n, true), ...h]);
    return {
      flattenNodes: g(a, new Set(h), l, t && c),
      filteredKeys: new Set(d),
      filteredExpandedKeys: new Set(h),
      filteredShownKeys: c
    };
  }
  function _(e, t) {
    let n = objectPathGetDefault.getObjectPathDefault(t, "value", "value");
    let i = objectPathGetDefault.getObjectPathDefault(t, "key", "key");
    if (Array.isArray(e)) {
      return e.map(e => objectPathGetDefault.getObjectPathDefault(e, n, e[i]));
    } else {
      return objectPathGetDefault.getObjectPathDefault(e, n, e[i]);
    }
  }
  function Z(e, t, n) {
    if (t && u(e)) {
      return _(e, n);
    } else {
      return e;
    }
  }
  function I(e, t) {
    return [...e].filter(e => e in t);
  }
  function j(e, t) {
    let n = objectPathGetDefault.getObjectPathDefault(t, "disabled", "disabled");
    let {
      checkedKeys: i
    } = v(Object.keys(e).filter(t => e[t].data[n]), e);
    return i;
  }
  function R(e, t) {
    let {
      clientY: n
    } = e;
    let {
      top: i,
      bottom: a,
      height: r
    } = t.nodeInstance.getBoundingClientRect();
    if (n <= i + r * 0.45) {
      return -1;
    } else {
      return +(n >= a - r * 0.45);
    }
  }
  function $(e, t) {
    return m([e], t, true);
  }
  function L(e, t) {
    let n = e.split("-");
    return t + Number(n[n.length - 1]);
  }
  require.d(exports, {
    handleUncheckState: function () {
      return T;
    },
    getParentKeysSet: function () {
      return x;
    },
    buildTreeEntities: function () {
      return y;
    },
    createCheckedKeysSet: function () {
      return k;
    },
    calcPositionNumber: function () {
      return L;
    },
    convertValuesByConfig: function () {
      return Z;
    },
    resolveValuesFromMap: function () {
      return b;
    },
    getChildKeys: function () {
      return w;
    },
    calcCheckedStates: function () {
      return v;
    },
    collectChildKeys: function () {
      return m;
    },
    handleCheckState: function () {
      return P;
    },
    extractNodeValues: function () {
      return _;
    },
    matchFilterNode: function () {
      return N;
    },
    filterTreeWithSearch: function () {
      return K;
    },
    getParentPathKeys: function () {
      return E;
    },
    flattenTreeToNodes: function () {
      return g;
    },
    convertObjectToTree: function () {
      return f;
    },
    calcMotionType: function () {
      return S;
    },
    getDescendantKeys: function () {
      return $;
    },
    filterExistingKeys: function () {
      return I;
    },
    ensureArrayFormat: function () {
      return D;
    },
    getDisabledCheckedKeys: function () {
      return j;
    },
    calcDropPosition: function () {
      return R;
    },
    getRootCheckedKeys: function () {
      return O;
    }
  });
}