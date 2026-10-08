// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f3' to 'createContainer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78089.de6f103c.js
         * chunkId: 78089
         * moduleId: 262527
         */
module.exports = function (module, exports, require) {
  var n;
  function i(e, t, r, n, i, a, o, l, c) {
    return s([e, t, r, n, i, a, o, l, c].reduce(u, {}));
  }
  (n ||= {}).merge = (e, t) => u(u({}, e), t);
  let a = Symbol("isProxy");
  function s(e, t) {
    let r = new Proxy({}, {
      deleteProperty: () => false,
      set: () => {
        throw Error("Cannot set property on injected service container");
      },
      get: (n, i) => i === a || l(n, i, e, t || r),
      getOwnPropertyDescriptor: (n, i) => {
        l(n, i, e, t || r);
        return Object.getOwnPropertyDescriptor(n, i);
      },
      has: (t, r) => r in e,
      ownKeys: () => [...Object.getOwnPropertyNames(e)]
    });
    return r;
  }
  let o = Symbol();
  function l(e, t, r, n) {
    if (t in e) {
      if (e[t] instanceof Error) {
        throw Error("Construction failure. Please make sure that your dependencies are constructable.", {
          cause: e[t]
        });
      }
      if (e[t] === o) {
        throw Error("Cycle detected. Please make \"" + String(t) + "\" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies");
      }
      return e[t];
    }
    if (t in r) {
      let i = r[t];
      e[t] = o;
      try {
        e[t] = typeof i == "function" ? i(n) : s(i, n);
      } catch (r) {
        e[t] = r instanceof Error ? r : undefined;
        throw r;
      }
      return e[t];
    }
  }
  function u(e, t) {
    if (t) {
      for (let [r, n] of Object.entries(t)) {
        if (n !== undefined) {
          let t = e[r];
          if (t !== null && n !== null && typeof t == "object" && typeof n == "object") {
            e[r] = u(t, n);
          } else {
            e[r] = n;
          }
        }
      }
    }
    return e;
  }
  require.d(exports, {
    createContainer: function () {
      return i;
    }
  });
}