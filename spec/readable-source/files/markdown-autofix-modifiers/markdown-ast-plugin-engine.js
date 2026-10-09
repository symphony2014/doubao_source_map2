// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'XS' to 'AstPlugin'
// - Renamed export 'z6' to 'processAst'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 52853.7f831412.js
         * chunkId: 52853
         * moduleId: 66280
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var throttledOrderByUtil = require("throttled-order-by-util") /*id: 363890*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var markdownParserSerializer = require("markdown-parser-serializer") /*id: 512638*/;
  var assertErrorUtility = require("assert-error-utility") /*id: 27936*/;
  let c = function (e, t, r = {}) {
    let {
      order: i = "pre_order",
      isReverse: n = false
    } = r;
    let l = false;
    let o = false;
    let c = false;
    let p = [[[], e]];
    let v = [];
    while (p.length) {
      let e = p.pop();
      assertErrorUtility.assert(e, "current must not be undefined");
      let [r, d] = e;
      let m = arrayFirstElement.getFirstElement(r);
      let h = markdownParserSerializer.hasNodeChildren(d) ? d.children.slice() : [];
      let y = n ? h : h.reverse();
      let g = markdownParserSerializer.hasNodeChildren(d) ? y.map(e => [[d, ...r], e]) : [];
      let b = function (e, t = false) {
        if (!m) {
          return;
        }
        let r = m.children.findIndex(e => e === d);
        assertErrorUtility.assert(isNumberUtil.isNumber(r), "Invoke insertAfter error in updateAst: parent is not parent of current");
        if (t) {
          m.children.splice(r, 1, ...e);
        } else {
          m.children.splice(r + 1, 0, ...e);
        }
      };
      let x = () => {
        if (c) {
          throw Error("You have to call stop synchronously");
        }
        l = true;
      };
      let _ = () => {
        if (c) {
          throw Error("You have to call skip synchronously");
        }
        o = true;
      };
      let w = () => {
        let e = m == null ? undefined : m.children.findIndex(e => e === d);
        if (e !== -1) {
          t(d, {
            stop: x,
            skip: _,
            insertAfter: b,
            parent: m,
            parents: r,
            index: e
          });
        }
      };
      if (i === "pre_order") {
        w();
        if (!o) {
          p.push(...g);
        }
      } else if (i === "post_order") {
        let t = g.filter(e => {
          let [, t] = e;
          return !v.includes(t);
        });
        if (t.length) {
          p.push(e);
          p.push(...t);
        } else {
          w();
          v.push(d);
        }
      } else if (i === "in_order") {
        if (markdownParserSerializer.hasNodeChildren(d) && g.length && g.every(e => {
          let [, t] = e;
          return !v.includes(t);
        })) {
          p.push(...g.slice(0, g.length - 1));
          p.push(e);
          p.push(g[g.length - 1]);
        } else {
          w();
          v.push(d);
        }
      }
      if (l) {
        break;
      }
      l = false;
      o = false;
    }
    c = true;
  };
  var hookPhaseEnum = require("hook-phase-enum") /*id: 385853*/;
  function v(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class d {
    constructor() {
      v(this, "name", undefined);
      v(this, "config", {});
      v(this, "modifier", undefined);
      v(this, "before", emptyExportFunction.emptyFunction);
      v(this, "after", emptyExportFunction.emptyFunction);
      v(this, "beforeEach", emptyExportFunction.emptyFunction);
      v(this, "afterEach", emptyExportFunction.emptyFunction);
    }
  }
  let m = e => {
    let {
      plugin: t,
      ast: r,
      skipWhenError: i = true,
      ...l
    } = e;
    let o = isFunctionUtil_1.isFunction(t.modifier) ? [t.modifier.bind(t)] : t.modifier.map(e => e.bind(t));
    t.before(r);
    for (let e of o) {
      t.beforeEach(r);
      try {
        c(r, (r, i) => e(r, {
          ...i,
          recursiveModifier(e) {
            m({
              plugin: t,
              ast: e,
              ...l
            });
          },
          ...l
        }), t.config);
      } catch (e) {
        if (!i) {
          throw e;
        }
      }
      t.afterEach(r);
    }
    t.after(r);
  };
  let h = e => {
    let {
      ast: t,
      plugins: r,
      fixEnding: i = false,
      skipWhenError: n,
      ...u
    } = e;
    let a = throttledOrderByUtil.throttledOrderBy(r, e => {
      return e.config?.priority ?? hookPhaseEnum.HookPhase.Normal;
    }).filter(e => {
      let {
        fixEndingOnly: r = false
      } = e.config ?? {};
      return !r || i;
    });
    let s = deepCloneWrapper_1.deepClone(t);
    for (let e of a) {
      m({
        plugin: e,
        ast: s,
        skipWhenError: n,
        ...u
      });
    }
    return s;
  };
  require.d(exports, {
    AstPlugin: function () {
      return d;
    },
    processAst: function () {
      return h;
    }
  });
}