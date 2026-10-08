// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'createContextScope'
// - Renamed export 'k' to 'createContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 187414
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function o(e, t) {
    let n = reactCoreLibraryReexport.createContext(t);
    let o = e => {
      let {
        children: t,
        ...o
      } = e;
      let a = reactCoreLibraryReexport.useMemo(() => o, Object.values(o));
      return reactJsxRuntimeCoreReexport.jsx(n.Provider, {
        value: a,
        children: t
      });
    };
    o.displayName = e + "Provider";
    return [o, function (i) {
      let o = reactCoreLibraryReexport.useContext(n);
      if (o) {
        return o;
      }
      if (t !== undefined) {
        return t;
      }
      throw Error(`\`${i}\` must be used within \`${e}\``);
    }];
  }
  function a(e, t = []) {
    let n = [];
    let o = () => {
      let t = n.map(e => reactCoreLibraryReexport.createContext(e));
      return function (n) {
        let i = (n == null ? undefined : n[e]) || t;
        return reactCoreLibraryReexport.useMemo(() => ({
          [`__scope${e}`]: {
            ...n,
            [e]: i
          }
        }), [n, i]);
      };
    };
    o.scopeName = e;
    return [function (t, o) {
      let a = reactCoreLibraryReexport.createContext(o);
      let s = n.length;
      n = [...n, o];
      let u = t => {
        let {
          scope: o,
          children: u,
          ...c
        } = t;
        let l = (o == null ? undefined : o[e]?.[s]) || a;
        let f = reactCoreLibraryReexport.useMemo(() => c, Object.values(c));
        return reactJsxRuntimeCoreReexport.jsx(l.Provider, {
          value: f,
          children: u
        });
      };
      u.displayName = t + "Provider";
      return [u, function (n, i) {
        let c = (i == null ? undefined : i[e]?.[s]) || a;
        let l = reactCoreLibraryReexport.useContext(c);
        if (l) {
          return l;
        }
        if (o !== undefined) {
          return o;
        }
        throw Error(`\`${n}\` must be used within \`${t}\``);
      }];
    }, function () {
      var e = arguments.length;
      var t = Array(e);
      var n = 0;
      for (; n < e; n++) {
        t[n] = arguments[n];
      }
      let i = t[0];
      if (t.length === 1) {
        return i;
      }
      let o = () => {
        let e = t.map(e => ({
          useScope: e(),
          scopeName: e.scopeName
        }));
        return function (t) {
          let n = e.reduce((e, n) => {
            let {
              useScope: r,
              scopeName: i
            } = n;
            let o = r(t)[`__scope${i}`];
            return {
              ...e,
              ...o
            };
          }, {});
          return reactCoreLibraryReexport.useMemo(() => ({
            [`__scope${i.scopeName}`]: n
          }), [n]);
        };
      };
      o.scopeName = i.scopeName;
      return o;
    }(o, ...t)];
  }
  require.d(exports, {
    createContextScope: function () {
      return a;
    },
    createContext: function () {
      return o;
    }
  });
}