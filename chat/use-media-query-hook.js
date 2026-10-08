// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GS' to 'mediaQueryHook'
// - Renamed export 'ZP' to 'useMediaQuery'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 510619
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let r = {
    media: "",
    matches: false,
    onchange: () => {},
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true
  };
  let o = function (e, t = false) {
    let [n, o] = reactCoreLibraryReexport.useState(t);
    let a = typeof e == "string" ? e : Object.entries(e).map(e => {
      let [t, n] = e;
      let i = t.replace(/[A-Z]/g, e => `-${e.toLowerCase()}`).toLowerCase();
      let r = n;
      if (typeof r == "boolean") {
        if (r) {
          return i;
        } else {
          return `not ${i}`;
        }
      } else {
        if (typeof r == "number" && /[height|width]$/.test(i)) {
          r = `${r}px`;
        }
        return `(${i}: ${r})`;
      }
    }).join(" and ");
    reactCoreLibraryReexport.useEffect(() => {
      let e = true;
      let t = typeof window == "undefined" ? r : window.matchMedia(a);
      let n = () => {
        if (e) {
          o(!!t.matches);
        }
      };
      t.addListener(n);
      o(t.matches);
      return () => {
        e = false;
        t.removeListener(n);
      };
    }, [a]);
    return n;
  };
  exports.useMediaQuery = o;
  require.d(exports, {
    mediaQueryHook: function () {
      return o;
    }
  });
}