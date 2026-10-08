// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'az' to 'createElement'
// - Renamed export 'l$' to 'isElementType'
// - Renamed export 'GE' to 'createDomElement'
// - Renamed export 'LM' to 'createComponent'
// - Renamed export 'Tm' to 'cloneElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 276161
         */
module.exports = function (module, exports, require) {
  var r;
  var elementTypeDefinitions = require("element-type-definitions") /*id: 972519*/;
  var tsRuntimeHelpers = require("ts-runtime-helpers") /*id: 287285*/;
  var objectOmitHelper = require("object-omit-helper") /*id: 598375*/;
  var domBlockElementCheck = require("dom-block-element-check") /*id: 123182*/;
  var arrayFlatIteratorUtil = require("array-flat-iterator-util") /*id: 125982*/;
  var setElementAttributes = require("set-element-attributes") /*id: 394222*/;
  var reactLifecycleDiffConstants = require("react-lifecycle-diff-constants") /*id: 971280*/;
  (r = {})[elementTypeDefinitions.fragmentSymbol] = function () {};
  r[elementTypeDefinitions.divSymbol] = function (t) {
    var e = document.createElement("div");
    setElementAttributes.setDomAttributes(e, t);
    return e;
  };
  r[elementTypeDefinitions.textSymbol] = function (t) {
    var e = t.content;
    var n = tsRuntimeHelpers.restHelper(t, ["content"]);
    var r = document.createElement("span");
    setElementAttributes.setDomAttributes(r, n);
    if (typeof e == "string") {
      r.textContent = e;
    }
    return r;
  };
  r[elementTypeDefinitions.zeroSpaceSymbol] = function (t) {
    var e = document.createElement("span");
    setElementAttributes.setDomAttributes(e, t);
    e.setAttribute("data-zero-space", "true");
    e.textContent = reactLifecycleDiffConstants.invisibleSep;
    return e;
  };
  r[elementTypeDefinitions.unorderedListSymbol] = function (t) {
    var e = document.createElement("ul");
    setElementAttributes.setDomAttributes(e, t);
    return e;
  };
  r[elementTypeDefinitions.orderedListSymbol] = function (t) {
    var e = document.createElement("ol");
    setElementAttributes.setDomAttributes(e, t);
    return e;
  };
  r[elementTypeDefinitions.listItemSymbol] = function (t) {
    var e = document.createElement("li");
    setElementAttributes.setDomAttributes(e, t);
    return e;
  };
  r[elementTypeDefinitions.anchorSymbol] = function (t) {
    var e = document.createElement("a");
    setElementAttributes.setDomAttributes(e, t);
    return e;
  };
  r[elementTypeDefinitions.breakSymbol] = function (t) {
    var e = document.createElement("br");
    setElementAttributes.setDomAttributes(e, t);
    return e;
  };
  var f = r;
  var domEnvManager = require("dom-env-manager") /*id: 219737*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function p(t) {
    return reactCoreLibraryReexport.isValidElement(t);
  }
  require("react-dom-entry-wrapper") /*id: 640848*/;
  var reactInXComponent = require("react-in-x-component") /*id: 485336*/;
  var y = {
    ref: true,
    children: true
  };
  var g = ["key", "__source", "__self"];
  var m = Symbol("type");
  var E = Symbol("props");
  function b(t, e) {
    var n = new t(e);
    if (e.state) {
      domEnvManager.nodeMap.set(e.state.constructor, t);
      e.state.instance = n;
    }
    return {
      element: n.render(),
      instance: n
    };
  }
  function x(t, e, n) {
    var r;
    var i;
    var l;
    var u = [];
    var c = 3;
    for (; c < arguments.length; c++) {
      u[c - 3] = arguments[c];
    }
    var h = null;
    var p = null;
    if (typeof t == "symbol") {
      r = null;
      if (f[t]) {
        r = f[t](objectOmitHelper.omit(e, g));
      }
      p = [n, h = r, null];
    } else if (typeof t == "function") {
      var y = b(t, e);
      p = [n, h = y.element, y.instance];
    }
    if (!h || Array.isArray(h)) {
      if (p) {
        domEnvManager.taskQueue.push(p);
      }
      return h;
    }
    var x = u.find(function (t) {
      return !_(t) || !reactInXComponent.isReactInXType(t.type);
    });
    var I = [];
    try {
      var T = tsRuntimeHelpers.createIterator(u.entries());
      var S = T.next();
      for (; !S.done; S = T.next()) {
        var A = tsRuntimeHelpers.spreadArray(S.value, 2);
        var C = A[0];
        var N = A[1];
        if (!_(N)) {
          I.push(N);
          continue;
        }
        if (reactInXComponent.isReactInXType(N.type)) {
          var L = h;
          var O = x ? domBlockElementCheck.isBlockElement(L) ? document.createElement("div") : document.createElement("span") : L;
          var w = b(N.type, tsRuntimeHelpers.objectAssign(tsRuntimeHelpers.objectAssign({}, N.props), {
            container: O
          })).instance;
          var D = function (t, e) {
            if (e.length === 1 && t === 0) {
              return Math.max(domEnvManager.taskQueue.length - 1, 0);
            }
            if (t > 0) {
              var n = e[t - 1];
              var r = domEnvManager.taskQueue.findIndex(function (t) {
                var e = t[1];
                if (Array.isArray(e)) {
                  return e[e.length - 1] === n;
                } else {
                  return e === n;
                }
              });
              if (r < 0) {
                return Math.max(domEnvManager.taskQueue.length - 1, 0);
              } else {
                return r + 1;
              }
            }
            var i = null;
            var o = t + 1;
            for (; o < e.length; o++) {
              if (!_(e[o])) {
                i = e[o];
                break;
              }
            }
            if (!i) {
              return Math.max(domEnvManager.taskQueue.length - 1, 0);
            }
            var a = domEnvManager.taskQueue.findIndex(function (t) {
              var e = t[1];
              if (Array.isArray(e)) {
                return e[0] === i;
              } else {
                return e === i;
              }
            });
            if (a < 0) {
              return Math.max(domEnvManager.taskQueue.length - 1, 0);
            } else {
              return Math.max(a - 1, 0);
            }
          }(C, u);
          domEnvManager.taskQueue.splice(D, 0, [N.ref, null, w]);
          if (O !== L) {
            I.push(O);
          }
        }
      }
    } catch (t) {
      i = {
        error: t
      };
    } finally {
      try {
        if (S && !S.done && (l = T.return)) {
          l.call(T);
        }
      } finally {
        if (i) {
          throw i.error;
        }
      }
    }
    if (p) {
      domEnvManager.taskQueue.push(p);
    }
    h.append.apply(h, tsRuntimeHelpers.spreadArgs(I));
    h[m] = t;
    h[E] = e;
    return h;
  }
  function I(t, e, n) {
    var r = [];
    var a = 3;
    for (; a < arguments.length; a++) {
      r[a - 3] = arguments[a];
    }
    Object.assign(e, {
      children: tsRuntimeHelpers.spreadArgs(r)
    });
    return {
      __typeof: elementTypeDefinitions.elementTypeSymbol,
      type: t,
      props: e,
      ref: n,
      key: null
    };
  }
  function T(t, e) {
    var n;
    var r;
    var s = [];
    var u = 2;
    for (; u < arguments.length; u++) {
      s[u - 2] = arguments[u];
    }
    if (typeof t != "symbol" && typeof t != "function" || typeof t == "symbol" && !f[t] || typeof t == "function" && !!t.prototype && !t.prototype.isXComponent) {
      return null;
    }
    var c = function (t) {
      var e = [];
      var n = arrayFlatIteratorUtil.flattenArray(tsRuntimeHelpers.spreadArgs(t), Infinity);
      var r = 0;
      for (; r < n.length; r++) {
        var i = n[r];
        if (i) {
          var a = Object.prototype.toString.call(i);
          if (a.includes("Function")) {
            throw Error("Function is invalid child");
          }
          if (a.includes("String") || a.includes("Number") || a.includes("BigInt")) {
            e.push("" + i);
          }
          if (a.includes("HTML") || _(i)) {
            e.push(i);
          }
          if (p(i)) {
            var s = [i];
            var u = n[r + 1];
            while (p(u)) {
              s.push(u);
              u = n[++r + 1];
            }
            e.push(T(reactInXComponent.ReactInXComponent, {
              container: null,
              pluginRenderContext: null,
              reactElement: s,
              ReactContextProvider: domEnvManager.getRootObj()
            }));
          }
        }
      }
      return e;
    }((n = (e == null ? undefined : e.children) ?? null, (r = tsRuntimeHelpers.spreadArgs(s)).length ? tsRuntimeHelpers.spreadArgs(r) : n ? Array.isArray(n) ? tsRuntimeHelpers.spreadArgs(n) : [n] : []));
    if (t === elementTypeDefinitions.fragmentSymbol) {
      return c;
    }
    var h = null;
    if ((e == null ? undefined : e.ref) !== undefined && typeof e.ref == "function") {
      h = e.ref;
    }
    var g = {};
    if (e) {
      for (var m in e) {
        if (Object.prototype.hasOwnProperty.call(e, m) && !y[m]) {
          g[m] = e[m];
        }
      }
    }
    if (domEnvManager.getEnvMode() === "V-DOM" || reactInXComponent.isReactInXType(t) && !domEnvManager.isDom()) {
      return I.apply(undefined, tsRuntimeHelpers.spreadArgs([t, g, h], c));
    } else if (domEnvManager.getEnvMode() === "DOM") {
      return x.apply(undefined, tsRuntimeHelpers.spreadArgs([t, g, h], c));
    } else {
      return null;
    }
  }
  function _(t) {
    return typeof t == "object" && t !== null && t.__typeof === elementTypeDefinitions.elementTypeSymbol;
  }
  function S(t, e) {
    var n;
    var r;
    var i;
    var a = [];
    var s = 2;
    for (; s < arguments.length; s++) {
      a[s - 2] = arguments[s];
    }
    if (t === null) {
      return null;
    } else {
      if (t instanceof HTMLElement) {
        n = t[m];
        r = t[E];
        i = Array.from(t.childNodes);
      } else {
        n = t.type;
        r = t.props;
        i = t.props.children;
      }
      return T.apply(undefined, tsRuntimeHelpers.spreadArgs([n, tsRuntimeHelpers.objectAssign(tsRuntimeHelpers.objectAssign({}, r), e)], i, a));
    }
  }
  require.d(exports, {
    createElement: function () {
      return T;
    },
    isElementType: function () {
      return _;
    },
    createDomElement: function () {
      return x;
    },
    createComponent: function () {
      return b;
    },
    cloneElement: function () {
      return S;
    }
  });
}