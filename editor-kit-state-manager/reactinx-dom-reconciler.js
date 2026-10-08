// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'TextSymbol'
// - Renamed export 'F' to 'FragmentSymbol'
// - Renamed export 'D' to 'DivSymbol'
// - Renamed export 'O' to 'OrderedListSymbol'
// - Renamed export 'C' to 'ReactInXExports'
// - Renamed export 'B' to 'UnorderedListSymbol'
// - Renamed export 'A' to 'AnchorSymbol'
// - Renamed export 'q' to 'BreakSymbol'
// - Renamed export 'o' to 'ListItemSymbol'
// - Renamed export 'n' to 'exportPassthrough'
// - Renamed export 'r' to 'reconcile'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 454385
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var o;
  var a;
  var elementTypeDefinitions = require("element-type-definitions") /*id: 972519*/;
  var tsRuntimeHelpers = require("ts-runtime-helpers") /*id: 287285*/;
  var objectOmitHelper = require("object-omit-helper") /*id: 598375*/;
  var deepEqualityCheck_1 = require("deep-equality-check_1") /*id: 956585*/;
  var setElementAttributes = require("set-element-attributes") /*id: 394222*/;
  var reactLifecycleDiffConstants = require("react-lifecycle-diff-constants") /*id: 971280*/;
  var domEnvManager = require("dom-env-manager") /*id: 219737*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var reactRenderContext = require("react-render-context") /*id: 466226*/;
  require("react-dom-entry-wrapper") /*id: 640848*/;
  var baseXComponent = require("base-x-component") /*id: 802436*/;
  var reactInXComponent = require("react-in-x-component") /*id: 485336*/;
  var reactinxElementFactory = require("reactinx-element-factory") /*id: 276161*/;
  var reactinxDomRenderer = require("reactinx-dom-renderer") /*id: 415017*/;
  function E(t) {
    return t === elementTypeDefinitions.divSymbol || t === elementTypeDefinitions.textSymbol || t === elementTypeDefinitions.zeroSpaceSymbol || t === elementTypeDefinitions.unorderedListSymbol || t === elementTypeDefinitions.orderedListSymbol || t === elementTypeDefinitions.listItemSymbol || t === elementTypeDefinitions.anchorSymbol || t === elementTypeDefinitions.breakSymbol;
  }
  function b(t) {
    return t.split(";").reduce(function (t, e) {
      if (!e.trim()) {
        return t;
      }
      var n = e.split(":");
      t[n[0].trim().toLowerCase().replace(/([-][a-z])/g, function (t) {
        return t.toUpperCase().replace("-", "");
      })] = n[1].trim();
      return t;
    }, {});
  }
  var elementJsonSerializer = require("element-json-serializer") /*id: 39786*/;
  function I(t) {
    return {
      type: o.REMOVE,
      node: t
    };
  }
  function T(t, e, n) {
    if (n) {
      return {
        type: o.INSERT_BEFORE,
        node: t,
        referenceNode: n,
        parentNode: e
      };
    } else {
      return {
        type: o.APPEND,
        node: t,
        parentNode: e
      };
    }
  }
  function _(t) {
    return t.startsWith(reactLifecycleDiffConstants.markPrefix);
  }
  function S(t, e, n) {
    var r;
    var i = t.type;
    var o = t.props;
    if (typeof i == "function" && o.state) {
      var a = new i(o);
      if (!new Set(((r = n == null ? undefined : n.previousParentState) === null || r === undefined ? undefined : r.getState()) || []).has(o.state)) {
        o.state.instance = a;
      }
      if (a.preRender) {
        var s = a.preRender().key;
        if (s) {
          o.state.setCustomKey(s);
          return s;
        }
      }
    }
    return t.props.key || "" + e;
  }
  function A(t) {
    return t.__index !== undefined && t.__key !== undefined;
  }
  function C(t, e) {
    if (t.nodeType !== Node.TEXT_NODE) {
      var n;
      var r;
      var i = t.__index;
      var o = t.__key;
      if (o && !_(o) && i !== undefined) {
        var a = e == null ? undefined : e.getItemByIndex(i);
        if (!a) {
          return;
        }
        var s = a.instance;
        if (!s) {
          return;
        }
        F(s);
        return;
      }
      try {
        var u = tsRuntimeHelpers.createIterator(Array.from(t.childNodes));
        var c = u.next();
        for (; !c.done; c = u.next()) {
          var f = c.value;
          C(f, e);
        }
      } catch (t) {
        n = {
          error: t
        };
      } finally {
        try {
          if (c && !c.done && (r = u.return)) {
            r.call(u);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
    }
  }
  function N(t, e, n) {
    var r;
    var i;
    var a = [];
    var s = 3;
    for (; s < arguments.length; s++) {
      a[s - 3] = arguments[s];
    }
    if ((a == null ? undefined : a.length) === 1 && reactInXComponent.isReactInXType(a[0]?.type)) {
      return reactinxElementFactory.createDomElement.apply(undefined, tsRuntimeHelpers.spreadArgs([t, e, n], a));
    }
    var c = [];
    try {
      var f = tsRuntimeHelpers.createIterator(a);
      var d = f.next();
      for (; !d.done; d = f.next()) {
        var h = d.value;
        var p = h.type;
        var v = h.ref;
        var m = h.props;
        var E = m.children;
        var b = N.apply(undefined, tsRuntimeHelpers.spreadArgs([p, objectOmitHelper.omit(m, ["children"]), v], E));
        if (b) {
          c.push(b);
        }
      }
    } catch (t) {
      r = {
        error: t
      };
    } finally {
      try {
        if (d && !d.done && (i = f.return)) {
          i.call(f);
        }
      } finally {
        if (r) {
          throw r.error;
        }
      }
    }
    return reactinxElementFactory.createDomElement.apply(undefined, tsRuntimeHelpers.spreadArgs([t, e, n], c));
  }
  function L(t, e) {
    domEnvManager.setEnvMode("DOM");
    var n;
    var s = t.type;
    var c = t.ref;
    var f = t.props;
    var p = f.children;
    var g = N.apply(undefined, tsRuntimeHelpers.spreadArgs([s, objectOmitHelper.omit(f, ["children"]), c], p));
    var m = [];
    while (domEnvManager.taskQueue.length) {
      (function () {
        var s = tsRuntimeHelpers.spreadArray((s = domEnvManager.taskQueue.shift()) !== null && s !== undefined ? s : [], 3);
        var u = s[0];
        var c = s[1];
        var f = s[2];
        if (c || f) {
          if (f && reactInXComponent.isReactInXInstance(f)) {
            m.push(f);
            var p = (e == null ? undefined : e.renderContext) || ((n = (E = e == null ? undefined : e.reactInXInstances) === null || E === undefined ? undefined : E[0]) === null || n === undefined ? undefined : n.props.pluginRenderContext);
            if (p) {
              f.props.pluginRenderContext = p;
            } else {
              for (var g = 0; g < domEnvManager.taskQueue.length; ++g) {
                var E = tsRuntimeHelpers.spreadArray(domEnvManager.taskQueue[g], 3);
                var b = E[2];
                if ((b == null ? undefined : b.props)?.state?.reactInXInstanceList && Array.isArray(b.props.state.reactInXInstanceList) && b.renderContext) {
                  f.props.pluginRenderContext = b.renderContext;
                  break;
                }
              }
            }
          }
          var x = (f == null ? undefined : f.props)?.state?.reactInXInstanceList;
          if (Array.isArray(x) && m.length) {
            x.splice.apply(x, tsRuntimeHelpers.spreadArgs([0, x.length], m));
            m.length = 0;
          }
          if (!!u && !(c instanceof DocumentFragment)) {
            X(function () {
              u(c);
            }, {
              vNode: t
            });
          }
          if (f instanceof baseXComponent.XComponent) {
            domEnvManager.nodeList.push({
              type: reactLifecycleDiffConstants.LifecycleEvents.DID_MOUNT,
              callback: function () {
                f.componentDidMount();
              },
              info: {
                instance: f
              }
            });
          }
        }
      })();
    }
    var E = e == null ? undefined : e.reactInXInstances;
    if (m.length && E) {
      while ((E == null ? undefined : E.length) > 0) {
        E.pop();
      }
      E.push.apply(E, tsRuntimeHelpers.spreadArgs(m));
    }
    domEnvManager.setEnvMode("V-DOM");
    return g;
  }
  function O(t, e, n, r) {
    var a = [];
    var s = t.length - 1;
    for (; s >= 0; --s) {
      var u = t[s];
      var c = u.node;
      var f = u.vNode;
      var d = u.shouldMove;
      if (c) {
        a.push.apply(a, tsRuntimeHelpers.spreadArgs(w(f, c, tsRuntimeHelpers.objectAssign(tsRuntimeHelpers.objectAssign({}, r), {
          referenceNode: n
        }))));
        if (d) {
          a.push(T(c, c.parentNode, n));
        }
        n = c;
      } else {
        var h = L(f, {
          reactInXInstances: (r == null ? undefined : r.parentState)?.reactInXInstanceList || f.props.state?.reactInXInstanceList
        });
        a.push(T(h, e, n));
        n = h;
      }
    }
    return a;
  }
  function w(t, e, n) {
    var r;
    var i;
    var u;
    var H = [];
    if (Array.isArray(t) && (e instanceof NodeList || Array.isArray(e))) {
      H.push.apply(H, tsRuntimeHelpers.spreadArgs(function (t, e, n) {
        var o = n.parentNode;
        var a = [];
        var s = [];
        var u = 0;
        var c = 0;
        var f = false;
        var h = 0;
        for (; c < t.length; ++c) {
          var p = e[c];
          if (!p) {
            break;
          }
          var v = t[c];
          var y = p.__key || "" + c;
          var g = S(v, c - h, n);
          f ||= A(p);
          if (typeof v.type == "function" && v.type.__ignore) {
            h++;
          }
          if (!function (t, e) {
            if (_(t) && _(e)) {
              var n = t.slice(reactLifecycleDiffConstants.markPrefix.length).split(reactLifecycleDiffConstants.defaultSeparator);
              var r = new Set(e.slice(reactLifecycleDiffConstants.markPrefix.length).split(reactLifecycleDiffConstants.defaultSeparator));
              return n.some(function (t) {
                return r.has(t);
              });
            }
            return t === e;
          }(y, g)) {
            break;
          }
          u = c;
          s.push({
            node: p,
            vNode: v
          });
        }
        if (c === t.length) {
          for (var m = c; m < e.length; ++m) {
            var p = e[m];
            var E = A(p);
            if (!!E || !f && !E) {
              C(p, n.previousParentState);
            }
            a.push(I(p));
          }
          a.push.apply(a, tsRuntimeHelpers.spreadArgs(O(s, o, null, n)));
          return a;
        }
        if (c === e.length) {
          var b = null;
          var m = t.length - 1;
          for (; m >= c; --m) {
            var v = t[m];
            var x = L(v, {
              reactInXInstances: (n == null ? undefined : n.parentState)?.reactInXInstanceList || v.props.state?.reactInXInstanceList
            });
            a.push(T(x, o, b));
            b = x;
          }
          a.push.apply(a, tsRuntimeHelpers.spreadArgs(O(s, o, b, n)));
          return a;
        }
        var N = new Map();
        var m = c;
        for (; m < e.length; ++m) {
          (function (t) {
            var n = e[t];
            var r = n.__key || "" + t;
            f ||= A(n);
            if (_(r)) {
              r.slice(reactLifecycleDiffConstants.markPrefix.length).split(reactLifecycleDiffConstants.defaultSeparator).forEach(function (t) {
                N.set("" + reactLifecycleDiffConstants.markPrefix + t, n);
              });
            } else {
              N.set(r, n);
            }
          })(m);
        }
        for (; c < t.length; ++c) {
          (function () {
            var e;
            var r = t[c];
            var i = S(r, c - h, n);
            if (_(i)) {
              i.slice(reactLifecycleDiffConstants.markPrefix.length).split(reactLifecycleDiffConstants.defaultSeparator).some(function (t) {
                return !!N.has("" + reactLifecycleDiffConstants.markPrefix + t) && (e = N.get("" + reactLifecycleDiffConstants.markPrefix + t), true);
              });
            } else {
              e = N.get(i);
            }
            if (e) {
              var o = e.__index;
              var a = o < u;
              s.push({
                node: e,
                vNode: r,
                shouldMove: a
              });
              u = a ? u : o;
              if (_(i)) {
                e.__key.slice(reactLifecycleDiffConstants.markPrefix.length).split(reactLifecycleDiffConstants.defaultSeparator).forEach(function (t) {
                  N.delete("" + reactLifecycleDiffConstants.markPrefix + t);
                });
              } else {
                N.delete(i);
              }
            } else {
              s.push({
                node: null,
                vNode: r
              });
            }
          })();
        }
        a.push.apply(a, tsRuntimeHelpers.spreadArgs(O(s, o, null, n)));
        Array.from(N.keys()).forEach(function (t) {
          if (_(t)) {
            if (N.has(t)) {
              var e = N.get(t);
              C(e, n.previousParentState);
              a.push(I(e));
              e.__key.slice(reactLifecycleDiffConstants.markPrefix.length).split(reactLifecycleDiffConstants.defaultSeparator).forEach(function (t) {
                N.delete("" + reactLifecycleDiffConstants.markPrefix + t);
              });
            }
          } else {
            var r = N.get(t);
            var i = A(r);
            if (!!i || !f && !i) {
              C(r, n.previousParentState);
            }
            a.push(I(r));
            N.delete(t);
          }
        });
        return a;
      }(t, e, n)));
      return H;
    }
    var V = t;
    var Y = [];
    if (!E(t.type)) {
      var G = e == null ? undefined : e.__index;
      if (t.props.state && n.parentState && G !== undefined) {
        var q = t.props.state;
        var Q = (u = n.previousParentState) === null || u === undefined ? undefined : u.getItemByIndex(G);
        if (!Q) {
          return H;
        }
        var J = Q.getContainer() || e;
        if (!J) {
          return H;
        }
        n = {
          parentNode: J,
          parentState: q,
          previousParentState: Q.instance?.state || Q
        };
        var tt = Q.instance;
        if (!tt) {
          return H;
        }
        var te = tsRuntimeHelpers.objectAssign(tsRuntimeHelpers.objectAssign({}, tt.props), {
          state: q
        });
        j(tt, te);
        tt.props = te;
        q.instance = tt;
        if (deepEqualityCheck_1.deepEqual(q.getViewContent(), Q.getViewContent())) {
          if (!M(q.instance, q)) {
            (function t(e, n) {
              if ((n == null ? undefined : n.instance) && e) {
                e.instance = n.instance;
                var r;
                var i;
                var o;
                var a;
                var s;
                var u = tsRuntimeHelpers.objectAssign(tsRuntimeHelpers.objectAssign({}, e.instance.props), {
                  state: e
                });
                j(e.instance, u);
                e.instance.props = u;
                var c = (o = e.getState) === null || o === undefined ? undefined : o.call(e);
                if (c) {
                  if (Array.isArray(c)) {
                    try {
                      var f = tsRuntimeHelpers.createIterator(c);
                      var d = f.next();
                      for (; !d.done; d = f.next()) {
                        var h = d.value;
                        var p = h.index;
                        var v = p !== undefined && ((a = n == null ? undefined : n.getItemByIndex) === null || a === undefined ? undefined : a.call(n, p));
                        t(h, v);
                      }
                    } catch (t) {
                      r = {
                        error: t
                      };
                    } finally {
                      try {
                        if (d && !d.done && (i = f.return)) {
                          i.call(f);
                        }
                      } finally {
                        if (r) {
                          throw r.error;
                        }
                      }
                    }
                  } else {
                    var p = c.index;
                    var v = p !== undefined && ((s = n == null ? undefined : n.getItemByIndex) === null || s === undefined ? undefined : s.call(n, p));
                    t(c, v);
                  }
                }
              }
            })(q, Q);
            z(q.instance, Q);
            return [];
          }
          z(q.instance, Q);
        }
      }
      V = (i = tsRuntimeHelpers.spreadArray(function t(e) {
        var r;
        var i = e.type;
        var o = e.props;
        var a = [];
        if (typeof i == "function") {
          var s = undefined;
          if (e.props.state?.instance) {
            s = e.props.state.instance;
            a.unshift({
              instance: s,
              prevState: e.props.state
            });
          } else {
            s = new i(o);
            a.unshift({
              instance: s,
              prevState: null
            });
          }
          if ((r = s.preRender) !== null && r !== undefined) {
            r.call(s);
          }
          if (!E((e = s.render()).type)) {
            var u = tsRuntimeHelpers.spreadArray(t(e), 2);
            var c = u[0];
            var f = u[1];
            a.unshift.apply(a, tsRuntimeHelpers.spreadArgs(f));
            return [c, a];
          }
          return [e, a];
        }
        if (E(e.type)) {
          return [e, a];
        } else {
          return [null, a];
        }
      }(t), 2))[0];
      Y = i[1];
    }
    if (!V) {
      if (e) {
        H.push(I(e));
      }
      return H;
    }
    r = V;
    if (e && e.nodeType !== Node.TEXT_NODE && (to = r, elementTypeDefinitions.elementTagMap[to.type] === e.tagName.toLowerCase())) {
      H.push.apply(H, tsRuntimeHelpers.spreadArgs(function (t, e) {
        var n = t.props;
        var r = ["key", "ref"];
        var i = [];
        var s = [];
        Object.keys(n).forEach(function (t) {
          if (t === "children") {
            var u;
            var c = n.children;
            var f = e.childNodes;
            if (c.length === 1 && typeof c[0] == "string") {
              if (f.length === 1 && f[0] instanceof Text) {
                if (f[0].nodeValue !== c[0]) {
                  s.push((u = c[0], {
                    type: o.TEXT,
                    node: e,
                    text: u
                  }));
                }
              } else {
                f.forEach(function (t) {
                  s.push(I(t));
                });
                var d = document.createTextNode(c[0]);
                s.push(T(d, e, null));
              }
            }
          } else if (!r.includes(t) && !t.startsWith("on")) {
            var h = e.getAttribute(t === "className" ? "class" : t);
            var p = [null, undefined].includes(n[t]) ? "" : n[t];
            if (h === null) {
              if (p && (t !== "style" || t === "style" && Object.keys(p).length)) {
                if (t === "style") {
                  i.push.apply(i, tsRuntimeHelpers.spreadArgs(D(p, {})));
                } else {
                  i.push({
                    type: a.ATTRIBUTES,
                    key: t,
                    value: p
                  });
                }
              }
            } else if (h !== p.toString()) {
              if (t === "style") {
                i.push.apply(i, tsRuntimeHelpers.spreadArgs(D(p, h)));
              } else {
                i.push({
                  type: a.ATTRIBUTES,
                  key: t,
                  value: p
                });
              }
            }
          }
        });
        if (i.length) {
          s.push({
            type: o.ATTRIBUTES,
            node: e,
            attrs: i
          });
        }
        return s;
      }(V, e)));
      var tn = V.props.children;
      if ((tn == null ? undefined : tn.length) === 1 && typeof tn[0] == "string") {
        if (Y != null) {
          Y.forEach(function (t) {
            z(t.instance, t.prevState);
          });
        }
        return H;
      }
      if (tn.length > 1 || (e == null ? undefined : e.childNodes)?.length > 1) {
        H.push.apply(H, tsRuntimeHelpers.spreadArgs(w(tn, e == null ? undefined : e.childNodes, tsRuntimeHelpers.objectAssign(tsRuntimeHelpers.objectAssign({}, n), {
          parentNode: e
        }))));
      } else {
        var tr = n.parentState?.reactInXInstanceList?.[0];
        var ti = (tr == null ? undefined : tr.props)?.container;
        if (ti === e) {
          if (reactInXComponent.isReactInXType(tn[0].type)) {
            var to;
            var ta;
            var ts;
            var tl = n.parentState?.instance?.renderContext;
            ta = tr;
            ts = tl;
            domEnvManager.nodeList.push({
              type: reactLifecycleDiffConstants.LifecycleEvents.REACT_IN_X_FORCE_UPDATE,
              callback: function () {
                ta.forceUpdate(ts);
              },
              info: {
                instance: ta
              }
            });
          } else {
            (function (t) {
              t.unmount();
            })(tr);
            var tl = n.parentState?.instance?.renderContext;
            var tu = L(tn[0], {
              reactInXInstances: (n == null ? undefined : n.parentState)?.reactInXInstanceList || t.props.state?.reactInXInstanceList,
              renderContext: tl
            });
            H.push(T(tu, e, null));
          }
        } else if (ti && reactInXComponent.isReactInXType(tn[0].type)) {
          (function (t) {
            t.unmount();
          })(tr);
          var tc = reactinxElementFactory.createComponent(tn[0].type, tsRuntimeHelpers.objectAssign(tsRuntimeHelpers.objectAssign({}, tn[0].props), {
            container: e
          })).instance;
          var tl = n.parentState?.instance?.renderContext;
          tc.props.pluginRenderContext = tl;
          var tf = (n == null ? undefined : n.parentState)?.reactInXInstanceList || t.props.state?.reactInXInstanceList;
          if (tf) {
            tf.splice(0, 1, tc);
          }
          domEnvManager.nodeList.push({
            type: reactLifecycleDiffConstants.LifecycleEvents.DID_MOUNT,
            callback: function () {
              if (tc != null) {
                tc.componentDidMount();
              }
            },
            info: {
              instance: tc
            }
          });
        } else if (tn.length) {
          H.push.apply(H, tsRuntimeHelpers.spreadArgs(w(tn[0], e == null ? undefined : e.firstChild, tsRuntimeHelpers.objectAssign(tsRuntimeHelpers.objectAssign({}, n), {
            parentNode: e
          }))));
        }
      }
    } else {
      var J = e == null ? undefined : e.parentElement;
      if (!J) {
        if (Y != null) {
          Y.forEach(function (t) {
            z(t.instance, t.prevState);
          });
        }
        return H;
      }
      H.push(I(e));
      var tu = L(t, {
        reactInXInstances: (n == null ? undefined : n.parentState)?.reactInXInstanceList || t.props.state?.reactInXInstanceList
      });
      H.push(T(tu, J, n.referenceNode || null));
    }
    if (Y != null) {
      Y.forEach(function (t) {
        z(t.instance, t.prevState);
      });
    }
    return H;
  }
  function D(t, e) {
    if (typeof t == "string") {
      t = b(t);
    }
    if (typeof e == "string") {
      e = b(e);
    }
    var n;
    var r;
    var i;
    var o;
    var s = [];
    if (typeof t == "string") {
      s.push({
        type: a.STYLE,
        key: "cssText",
        value: t
      });
    } else {
      if (typeof e == "string") {
        s.push({
          type: a.STYLE,
          key: "cssText",
          value: ""
        });
        e = "";
      }
      if (e) {
        for (var l in e) {
          if (!t || !(l in t)) {
            s.push({
              type: a.STYLE,
              key: l,
              value: ""
            });
          }
        }
      }
      if (t) {
        for (var u in t) {
          if (!e || ((r = (n = t[u]) === null || n === undefined ? undefined : n.trim) === null || r === undefined ? undefined : r.call(n)) !== ((o = (i = e[u]) === null || i === undefined ? undefined : i.trim) === null || o === undefined ? undefined : o.call(i))) {
            s.push({
              type: a.STYLE,
              key: u,
              value: t[u]
            });
          }
        }
      }
    }
    return s;
  }
  function P(t) {
    var e = [];
    var n = 1;
    for (; n < arguments.length; n++) {
      e[n - 1] = arguments[n];
    }
  }
  function k(t) {
    var e;
    var n = t.diffResult;
    var r = t.previousState;
    var i = t.ReactContextProvider;
    domEnvManager.setRootObj(i);
    e = n.state;
    if (!domEnvManager.nodeMap.get(e.constructor)) {
      P("Can not find component for state.", n.state);
      return;
    }
    domEnvManager.clearList();
    domEnvManager.setEnvMode("V-DOM");
    var s = function t(e, n) {
      var r;
      var i;
      var o;
      var a = e.state;
      var s = e.changes;
      var u = e.ignoreForceUpdate;
      var c = [];
      var f = n.instance;
      var p = n.parent;
      if (!f) {
        if (p) {
          throw Error("The previousParentState.instance should not be null.");
        }
        (function (t) {
          var e = [];
          var n = 1;
          for (; n < arguments.length; n++) {
            e[n - 1] = arguments[n];
          }
        })("The previousParentState.instance should not be null.");
        return c;
      }
      var m = tsRuntimeHelpers.objectAssign(tsRuntimeHelpers.objectAssign({}, f.props), {
        state: a
      });
      j(f, m);
      var E = !u && (!s || M(f, a, {
        changes: s
      }));
      f.props = m;
      a.instance = f;
      if (E) {
        var b = f.render();
        var x = a.getContainer();
        if (x) {
          c.push.apply(c, tsRuntimeHelpers.spreadArgs(w(b, a.getNode(), {
            parentNode: x,
            parentState: a,
            previousParentState: n
          })));
          z(f, n);
        } else {
          P("The parentNode should not be empty.");
        }
        return c;
      }
      if (!s || s.length === 0) {
        return c;
      }
      var _ = f.childrenCommonProps ? tsRuntimeHelpers.objectAssign({}, f.childrenCommonProps) : null;
      if (!_) {
        var S = n.getState();
        var A = 0;
        for (; A < S.length; ++A) {
          var C = S[A].instance;
          if (C) {
            _ = C.props;
            break;
          }
        }
      }
      var N = {
        parentState: a,
        referenceNode: null
      };
      var A = s.length - 1;
      for (; A >= 0; --A) {
        var L = s[A];
        switch (L.type) {
          case reactLifecycleDiffConstants.DiffOperations.LINE_DELETE:
          case reactLifecycleDiffConstants.DiffOperations.LEAF_DELETE:
            var O = true;
            if (L.type === reactLifecycleDiffConstants.DiffOperations.LINE_DELETE) {
              O = (r = L.shouldBeAppliedToDOMTree) === null || r === undefined || r;
            }
            (function (t, e, n = true) {
              t.forEach(function (t) {
                var r = t.getNode();
                if (!r) {
                  throw Error("The previousState._node should not be empty when reconcile unmounted child.");
                }
                if (n) {
                  e.push(I(r));
                }
                if (t.instance) {
                  F(t.instance);
                }
              });
            })(L.deletes, c, O);
            break;
          case reactLifecycleDiffConstants.DiffOperations.LINE_INSERT:
          case reactLifecycleDiffConstants.DiffOperations.LEAF_INSERT:
            var D = L.inserts;
            var O = true;
            if (L.type === reactLifecycleDiffConstants.DiffOperations.LINE_INSERT) {
              if (L.referenceNode) {
                N.referenceNode = L.referenceNode;
              }
              O = (i = L.shouldBeAppliedToDOMTree) === null || i === undefined || i;
            }
            for (var k = D.length - 1; k >= 0; --k) {
              var R = D[k].state;
              N.referenceNode = function (t, e, n) {
                var a = t.state;
                var s = t.referenceNode;
                var u = t.parentState;
                var c = t.shouldBeAppliedToDOMTree;
                var f = domEnvManager.nodeMap.get(a.constructor);
                if (f) {
                  domEnvManager.setEnvMode("DOM");
                  var p = reactinxElementFactory.createElement(f, tsRuntimeHelpers.objectAssign(tsRuntimeHelpers.objectAssign({}, e), {
                    state: a,
                    key: a.getKey()
                  }));
                  if (p) {
                    for (p = Array.isArray(p) ? p[0] : p; domEnvManager.taskQueue.length;) {
                      (function () {
                        var t = tsRuntimeHelpers.spreadArray((u = domEnvManager.taskQueue.shift()) !== null && u !== undefined ? u : [], 3);
                        var e = t[0];
                        var n = t[1];
                        var a = t[2];
                        if (n || a) {
                          if (a && reactInXComponent.isReactInXInstance(a)) {
                            for (var s = 0; s < domEnvManager.taskQueue.length; ++s) {
                              var u = tsRuntimeHelpers.spreadArray(domEnvManager.taskQueue[s], 3);
                              var c = u[2];
                              if ((c == null ? undefined : c.props)?.state?.reactInXInstanceList && Array.isArray(c.props.state.reactInXInstanceList) && c.renderContext) {
                                a.props.pluginRenderContext = c.renderContext;
                                if (Array.isArray(c.props.state?.reactInXInstanceList)) {
                                  c.props.state.reactInXInstanceList.push(a);
                                }
                                break;
                              }
                            }
                          }
                          if (!!e && !(n instanceof DocumentFragment)) {
                            X(function () {
                              e(n);
                            }, {
                              instance: a
                            });
                          }
                          if (a instanceof baseXComponent.XComponent) {
                            domEnvManager.nodeList.push({
                              type: reactLifecycleDiffConstants.LifecycleEvents.DID_MOUNT,
                              callback: function () {
                                var t;
                                if ((t = a.componentDidMount) !== null && t !== undefined) {
                                  t.call(a);
                                }
                              },
                              info: {
                                instance: a
                              }
                            });
                          }
                        }
                      })();
                    }
                    domEnvManager.setEnvMode("V-DOM");
                    var m = u.getContainer();
                    if (s && s.parentNode && s.parentNode !== m) {
                      m = s.parentNode;
                    }
                    if (c === undefined || c) {
                      n.push(T(p, m, s));
                    }
                    return p;
                  }
                  return null;
                }
                throw Error("The component of the state map could not be found.");
              }(tsRuntimeHelpers.objectAssign(tsRuntimeHelpers.objectAssign({
                state: R
              }, N), {
                shouldBeAppliedToDOMTree: O
              }), _, c);
            }
            break;
          case reactLifecycleDiffConstants.DiffOperations.LINE_UPDATE:
          case reactLifecycleDiffConstants.DiffOperations.LEAF_UPDATE:
            var D = L.inserts;
            var U = L.deletes;
            var B = L.type === reactLifecycleDiffConstants.DiffOperations.LEAF_UPDATE && L.shouldMove;
            var O = true;
            if (L.type === reactLifecycleDiffConstants.DiffOperations.LINE_UPDATE) {
              if (L.referenceNode) {
                N.referenceNode = L.referenceNode;
              }
              O = (o = L.shouldBeAppliedToDOMTree) === null || o === undefined || o;
            }
            for (var k = D.length - 1; k >= 0; --k) {
              var K = D[k];
              var Z = K.state;
              var W = K.changes;
              var H = U[k];
              (function (e, n, r = true) {
                var i;
                var a = e.state;
                var s = e.referenceNode;
                var u = e.parentState;
                var c = e.shouldMove;
                var f = e.previousState.instance;
                if (!f) {
                  P("The instance of previous state should not be empty.");
                  return;
                }
                var d = f.state || e.previousState;
                var h = u.getContainer();
                if (!h) {
                  throw Error("The parent node should not be empty.");
                }
                var p = d.getNode();
                if (!p) {
                  throw Error("The previousState._node should not be empty.");
                }
                if (!h.contains(p) && r) {
                  n.push(T(p, h, s || null));
                }
                if (e.state.leaves !== undefined && e.changes?.length) {
                  n.push.apply(n, tsRuntimeHelpers.spreadArgs(t({
                    state: e.state,
                    changes: e.changes
                  }, d)));
                } else {
                  var v = tsRuntimeHelpers.objectAssign(tsRuntimeHelpers.objectAssign({}, f.props), {
                    state: a
                  });
                  j(f, v);
                  f.props = v;
                  a.instance = f;
                  var y = f.render();
                  if (r) {
                    n.push.apply(n, tsRuntimeHelpers.spreadArgs(w(y, p, {
                      parentNode: p,
                      parentState: a,
                      previousParentState: d,
                      referenceNode: s
                    })));
                  }
                  if (c) {
                    n.push(T(p, h, s));
                  }
                  z(f, d);
                }
              })(tsRuntimeHelpers.objectAssign({
                state: Z,
                previousState: H,
                changes: W,
                shouldMove: B
              }, N), c, O);
              N.referenceNode = H.getNode();
            }
            break;
          case reactLifecycleDiffConstants.DiffOperations.LINE_CONSTANT:
          case reactLifecycleDiffConstants.DiffOperations.LEAF_CONSTANT:
            var D = L.inserts;
            var U = L.deletes;
            var B = L.type === reactLifecycleDiffConstants.DiffOperations.LEAF_CONSTANT && L.shouldMove;
            var k = D.length - 1;
            for (; k >= 0; --k) {
              var Z = D[k].state;
              var H = U[k];
              (function (t, e) {
                var n = t.state;
                var r = t.previousState;
                var i = t.parentState;
                var o = t.shouldMove;
                var a = t.referenceNode;
                var s = r.instance;
                if (s) {
                  var u = tsRuntimeHelpers.objectAssign(tsRuntimeHelpers.objectAssign({}, s.props), {
                    state: n
                  });
                  j(s, u);
                  var c = M(s, n, {
                    isStateConstant: true
                  });
                  s.props = u;
                  n.instance = s;
                  var f = n.getNode();
                  var d = i.getContainer();
                  if (c) {
                    var h = s.render();
                    if (f) {
                      e.push.apply(e, tsRuntimeHelpers.spreadArgs(w(h, f, {
                        parentNode: f,
                        parentState: n
                      })));
                      if (!d) {
                        throw Error("The parent node should not be empty.");
                      }
                      if (o) {
                        e.push(T(f, d, a));
                      }
                      z(s, r);
                    } else {
                      throw Error("The node of state should not be empty.");
                    }
                  } else {
                    if ("getCustomKey" in r && "setCustomKey" in n && r.getCustomKey()) {
                      n.setCustomKey(r.getCustomKey());
                    }
                    if (o && f && d) {
                      e.push(T(f, d, a));
                    }
                  }
                } else {
                  throw Error("The instance of previousState should not be empty.");
                }
              })(tsRuntimeHelpers.objectAssign({
                state: Z,
                previousState: H,
                shouldMove: B
              }, N), c);
              N.referenceNode = H.getNode();
            }
        }
      }
      z(f, n);
      return c;
    }(n, r);
    R(domEnvManager.bufferList);
    (function (t) {
      t.forEach(function (t) {
        var e;
        var n;
        switch (t.type) {
          case o.TEXT:
            var r = t.node;
            var i = t.text;
            if (r.firstChild) {
              r.firstChild.nodeValue = i;
            }
            break;
          case o.ATTRIBUTES:
            var r = t.node;
            var s = t.attrs;
            if (r instanceof Text) {
              break;
            }
            try {
              var u = tsRuntimeHelpers.createIterator(s);
              var c = u.next();
              for (; !c.done; c = u.next()) {
                var f;
                var d = c.value;
                var h = d.type;
                var p = d.key;
                var v = d.value;
                if (h === a.STYLE) {
                  f = r.style;
                  if (p[0] === "-") {
                    f.setProperty(p, v);
                  } else if (v === null) {
                    f[p] = "";
                  } else if (typeof v != "number") {
                    f[p] = v;
                  } else {
                    f[p] = v + "px";
                  }
                } else {
                  var y = p === "className" ? "class" : p;
                  if (v) {
                    r.setAttribute(y, v);
                  } else {
                    r.removeAttribute(y);
                  }
                }
              }
            } catch (t) {
              e = {
                error: t
              };
            } finally {
              try {
                if (c && !c.done && (n = u.return)) {
                  n.call(u);
                }
              } finally {
                if (e) {
                  throw e.error;
                }
              }
            }
            break;
          case o.REMOVE:
            var r = t.node;
            r.remove();
            break;
          case o.APPEND:
            var r = t.node;
            var g = t.parentNode;
            g.append(r);
            break;
          case o.INSERT_BEFORE:
            var r = t.node;
            var g = t.parentNode;
            var m = t.referenceNode;
            if (m && !g.contains(m)) {
              throw Error("referenceNode was unexpectedly deleted and is no longer a child node of parentNode\nreferenceNode: " + elementJsonSerializer.serializeElement(m) + "\nparentNode: " + elementJsonSerializer.serializeElement(g) + "\nreferenceNodeIndex: " + m.__index);
            }
            g.insertBefore(r, m);
        }
      });
    })(s);
    R(domEnvManager.nodeList);
    domEnvManager.setRootObj(null);
  }
  function R(t) {
    while (t.length) {
      var e = t.shift();
      if (e) {
        e.callback();
      }
    }
  }
  (r = o ||= {}).TEXT = "TEXT";
  r.ATTRIBUTES = "ATTRIBUTES";
  r.APPEND = "APPEND";
  r.REMOVE = "REMOVE";
  r.INSERT_BEFORE = "INSERT_BEFORE";
  (i = a ||= {}).STYLE = "STYLE";
  i.ATTRIBUTES = "ATTRIBUTES";
  function M(t, e, n = {}) {
    var r = tsRuntimeHelpers.objectAssign(tsRuntimeHelpers.objectAssign({}, t.props), {
      state: e
    });
    return !!(t == null ? undefined : t.shouldComponentForceUpdate(r, n));
  }
  function z(t, e) {
    if (t.componentDidUpdate) {
      var n = e ? tsRuntimeHelpers.objectAssign(tsRuntimeHelpers.objectAssign({}, t.props), {
        state: e
      }) : tsRuntimeHelpers.objectAssign({}, t.props);
      domEnvManager.nodeList.push({
        type: reactLifecycleDiffConstants.LifecycleEvents.DID_UPDATE,
        callback: function () {
          t.componentDidUpdate(n);
        },
        info: {
          instance: t
        }
      });
    }
  }
  function U(t) {
    if (t.componentWillUnmount) {
      domEnvManager.bufferList.push({
        type: reactLifecycleDiffConstants.LifecycleEvents.WILL_UNMOUNT,
        callback: function () {
          t.componentWillUnmount();
        },
        info: {
          instance: t
        }
      });
    }
  }
  function F(t) {
    U(t);
    var e = t.render();
    (e = Array.isArray(e) ? e : [e]).forEach(function (t) {
      if (typeof t != "string") {
        (function t(e) {
          if (!reactInXComponent.isReactInXType(e.type)) {
            if (E(e.type)) {
              var n;
              var r;
              if (typeof e.ref == "function") {
                n = e.ref;
                domEnvManager.bufferList.push({
                  type: reactLifecycleDiffConstants.LifecycleEvents.DETACH_REF,
                  callback: function () {
                    n(null);
                  },
                  info: undefined
                });
              }
              o = e.props.children;
            } else if (typeof e.type == "function") {
              var o;
              var a = e.type;
              var l = undefined;
              U(l = e.props.state?.instance ? e.props.state.instance : new a(e.props));
              o = l.render();
            } else if (e.type === elementTypeDefinitions.fragmentSymbol) {
              o = e.props.children;
            }
            (Array.isArray(o) ? o : [o]).forEach(function (e) {
              if (typeof e != "string") {
                t(e);
              }
            });
          }
        })(t);
      }
    });
  }
  function X(t, e) {
    domEnvManager.nodeList.push({
      type: reactLifecycleDiffConstants.LifecycleEvents.ATTACH_REF,
      callback: t,
      info: e
    });
  }
  function j(t, e) {
    t.componentWillReceiveProps(e);
  }
  var B = elementTypeDefinitions.fragmentSymbol;
  var K = elementTypeDefinitions.divSymbol;
  var Z = elementTypeDefinitions.textSymbol;
  var W = elementTypeDefinitions.zeroSpaceSymbol;
  var H = elementTypeDefinitions.unorderedListSymbol;
  var V = elementTypeDefinitions.listItemSymbol;
  var Y = elementTypeDefinitions.orderedListSymbol;
  var G = elementTypeDefinitions.listItemSymbol;
  var q = elementTypeDefinitions.anchorSymbol;
  var Q = elementTypeDefinitions.breakSymbol;
  var J = Object.freeze({
    __proto__: null,
    Fragment: B,
    Div: K,
    Text: Z,
    ZeroSpace: W,
    BulletList: H,
    Bullet: V,
    OrderedList: Y,
    Ordered: G,
    A: q,
    Br: Q,
    createElement: reactinxElementFactory.createElement,
    cloneElement: reactinxElementFactory.cloneElement,
    isValidElement: reactinxElementFactory.isElementType,
    Component: baseXComponent.XComponent,
    render: reactinxDomRenderer.renderReactInX,
    unmount: reactinxDomRenderer.unmountComponents,
    reconcile: k,
    ReactInX: reactInXComponent.ReactInXComponent,
    isReactInXClass: reactInXComponent.isReactInXType,
    PluginRenderContext: reactRenderContext.renderContext,
    setDOMAttributes: setElementAttributes.setDomAttributes
  });
  require.d(exports, {
    TextSymbol: function () {
      return Z;
    },
    FragmentSymbol: function () {
      return B;
    },
    DivSymbol: function () {
      return K;
    },
    OrderedListSymbol: function () {
      return Y;
    },
    ReactInXExports: function () {
      return J;
    },
    UnorderedListSymbol: function () {
      return H;
    },
    AnchorSymbol: function () {
      return q;
    },
    BreakSymbol: function () {
      return Q;
    },
    ListItemSymbol: function () {
      return G;
    },
    exportPassthrough: function () {
      return V;
    },
    reconcile: function () {
      return k;
    }
  });
}