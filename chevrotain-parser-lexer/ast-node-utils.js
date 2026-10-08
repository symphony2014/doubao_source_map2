// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E$' to 'getRootNode'
// - Renamed export 'Me' to 'getNodeDocument'
// - Renamed export 'VY' to 'traverseTree'
// - Renamed export 'V_' to 'findAncestor'
// - Renamed export 'Zc' to 'recursiveTraverse'
// - Renamed export 'a1' to 'applyTypeDefaults'
// - Renamed export 'b2' to 'linkContainerRefs'
// - Renamed export 'fy' to 'findReferences'
// - Renamed export 'sx' to 'iterateChildren'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78089.de6f103c.js
         * chunkId: 78089
         * moduleId: 468838
         */
module.exports = function (module, exports, require) {
  var typeGuardValidators = require("type-guard-validators") /*id: 69877*/;
  var lazyCollectionIterator = require("lazy-collection-iterator") /*id: 734269*/;
  var positionRangeUtils_1 = require("position-range-utils_1") /*id: 465350*/;
  function s(e) {
    for (let [t, r] of Object.entries(e)) {
      if (!t.startsWith("$")) {
        if (Array.isArray(r)) {
          r.forEach((r, i) => {
            if (typeGuardValidators.isTypeObject(r)) {
              r.$container = e;
              r.$containerProperty = t;
              r.$containerIndex = i;
            }
          });
        } else if (typeGuardValidators.isTypeObject(r)) {
          r.$container = e;
          r.$containerProperty = t;
        }
      }
    }
  }
  function o(e, t) {
    let r = e;
    while (r) {
      if (t(r)) {
        return r;
      }
      r = r.$container;
    }
  }
  function l(e) {
    let t = u(e).$document;
    if (!t) {
      throw Error("AST node has no document.");
    }
    return t;
  }
  function u(e) {
    while (e.$container) {
      e = e.$container;
    }
    return e;
  }
  function c(e, t) {
    if (!e) {
      throw Error("Node must be an AstNode.");
    }
    let r = t == null ? undefined : t.range;
    return new lazyCollectionIterator.Sequence(() => ({
      keys: Object.keys(e),
      keyIndex: 0,
      arrayIndex: 0
    }), t => {
      while (t.keyIndex < t.keys.length) {
        let i = t.keys[t.keyIndex];
        if (!i.startsWith("$")) {
          let a = e[i];
          if (typeGuardValidators.isTypeObject(a)) {
            t.keyIndex++;
            if (f(a, r)) {
              return {
                done: false,
                value: a
              };
            }
          } else if (Array.isArray(a)) {
            while (t.arrayIndex < a.length) {
              let e = a[t.arrayIndex++];
              if (typeGuardValidators.isTypeObject(e) && f(e, r)) {
                return {
                  done: false,
                  value: e
                };
              }
            }
            t.arrayIndex = 0;
          }
        }
        t.keyIndex++;
      }
      return lazyCollectionIterator.iterationSentinel;
    });
  }
  function d(e, t) {
    if (!e) {
      throw Error("Root node must be an AstNode.");
    }
    return new lazyCollectionIterator.RecursiveSequence(e, e => c(e, t));
  }
  function h(e, t) {
    if (e) {
      if ((t == null ? undefined : t.range) && !f(e, t.range)) {
        return new lazyCollectionIterator.RecursiveSequence(e, () => []);
      }
    } else {
      throw Error("Root node must be an AstNode.");
    }
    return new lazyCollectionIterator.RecursiveSequence(e, e => c(e, t), {
      includeRoot: true
    });
  }
  function f(e, t) {
    if (!t) {
      return true;
    }
    let n = e.$cstNode?.range;
    return !!n && positionRangeUtils_1.comparePositions(n, t);
  }
  function p(e) {
    return new lazyCollectionIterator.Sequence(() => ({
      keys: Object.keys(e),
      keyIndex: 0,
      arrayIndex: 0
    }), t => {
      while (t.keyIndex < t.keys.length) {
        let r = t.keys[t.keyIndex];
        if (!r.startsWith("$")) {
          let i = e[r];
          if (typeGuardValidators.isRefText(i)) {
            t.keyIndex++;
            return {
              done: false,
              value: {
                reference: i,
                container: e,
                property: r
              }
            };
          }
          if (Array.isArray(i)) {
            while (t.arrayIndex < i.length) {
              let a = t.arrayIndex++;
              let s = i[a];
              if (typeGuardValidators.isRefText(s)) {
                return {
                  done: false,
                  value: {
                    reference: s,
                    container: e,
                    property: r,
                    index: a
                  }
                };
              }
            }
            t.arrayIndex = 0;
          }
        }
        t.keyIndex++;
      }
      return lazyCollectionIterator.iterationSentinel;
    });
  }
  function m(e, t) {
    for (let r of e.getTypeMetaData(t.$type).properties) {
      if (r.defaultValue !== undefined && t[r.name] === undefined) {
        t[r.name] = function e(t) {
          if (Array.isArray(t)) {
            return [...t.map(e)];
          } else {
            return t;
          }
        }(r.defaultValue);
      }
    }
  }
  require.d(exports, {
    getRootNode: function () {
      return u;
    },
    getNodeDocument: function () {
      return l;
    },
    traverseTree: function () {
      return d;
    },
    findAncestor: function () {
      return o;
    },
    recursiveTraverse: function () {
      return h;
    },
    applyTypeDefaults: function () {
      return m;
    },
    linkContainerRefs: function () {
      return s;
    },
    findReferences: function () {
      return p;
    },
    iterateChildren: function () {
      return c;
    }
  });
}