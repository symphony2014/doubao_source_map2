// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'useTheme'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17574.32d72dbf.js
         * chunkId: 17574
         * moduleId: 53880
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var r = (e, t, n, o, r, a, i, s) => {
    let l = document.documentElement;
    let c = ["light", "dark"];
    function d(t) {
      var n;
      (Array.isArray(e) ? e : [e]).forEach(e => {
        let n = e === "class";
        let o = n && a ? r.map(e => a[e] || e) : r;
        if (n) {
          l.classList.remove(...o);
          l.classList.add(a && a[t] ? a[t] : t);
        } else {
          l.setAttribute(e, t);
        }
      });
      n = t;
      if (s && c.includes(n)) {
        l.style.colorScheme = n;
      }
    }
    if (o) {
      d(o);
    } else {
      try {
        let e = localStorage.getItem(t) || n;
        let o = i && e === "system" ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : e;
        d(o);
      } catch (e) {}
    }
  };
  var a = reactCoreLibraryReexport.createContext(undefined);
  var i = {
    setTheme: e => {},
    themes: []
  };
  var s = () => {
    return reactCoreLibraryReexport.useContext(a) ?? i;
  };
  reactCoreLibraryReexport.memo(({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: a,
    enableColorScheme: i,
    defaultTheme: s,
    value: l,
    themes: c,
    nonce: d,
    scriptProps: u
  }) => {
    let p = JSON.stringify([n, t, s, e, c, l, a, i]).slice(1, -1);
    return reactCoreLibraryReexport.createElement("script", {
      ...u,
      suppressHydrationWarning: true,
      nonce: typeof window == "undefined" ? d : "",
      dangerouslySetInnerHTML: {
        __html: `(${r.toString()})(${p})`
      }
    });
  });
  require.d(exports, {
    useTheme: function () {
      return s;
    }
  });
}