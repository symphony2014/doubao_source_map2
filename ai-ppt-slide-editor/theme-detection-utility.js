// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'getCurrentTheme'
// - Renamed export 'k' to 'observeThemeChange'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58943.d2e657c6.js
         * chunkId: 58943
         * moduleId: 452866
         */
module.exports = function (module, exports, require) {
  let r = "data-theme";
  function n() {
    var e;
    if (typeof document != "undefined" && (e = document.documentElement.getAttribute("data-theme")) !== null && e !== undefined) {
      return e;
    } else {
      return "";
    }
  }
  function a(e, t) {
    if (!e) {
      return;
    }
    let i = n();
    let a = new MutationObserver(e => {
      e.forEach(e => {
        if (e.type === "attributes" && e.attributeName === r) {
          let e = n();
          if (i !== e) {
            i = e;
            t(e);
          }
        }
      });
    });
    a.observe(document.documentElement, {
      attributes: true,
      attributeFilter: [r]
    });
    return () => {
      a.disconnect();
    };
  }
  require.d(exports, {
    getCurrentTheme: function () {
      return n;
    },
    observeThemeChange: function () {
      return a;
    }
  });
}