// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'getResizeObserver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: template_search_popover.30dbc5de.js
         * chunkId: 75647
         * moduleId: 976180
         */
module.exports = function (module, exports, require) {
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var resizeObserverPolyfill = require("resize-observer-polyfill") /*id: 412454*/;
  let o = () => {
    let t;
    let e;
    let n = [];
    let o = debounceUtilWrapper.createDebounce(i => {
      e = i[0].contentRect;
      n.forEach(n => n(e, t && t.current || null));
    }, 10, {
      leading: true,
      trailing: true
    });
    let s = new resizeObserverPolyfill.ResizeObserver(o);
    let a = t => {
      let e = n.indexOf(t);
      if (e > -1) {
        n.splice(e, 1);
      }
    };
    return {
      init: e => {
        if ((t = e).current && t.current) {
          s.observe(t.current);
        }
      },
      onResize: i => {
        n.push(i);
        i(e, t && t.current || null);
        return () => {
          a(i);
        };
      },
      offResize: a,
      dispose: () => {
        n.length = 0;
        o.cancel();
        if (t && t.current) {
          s.unobserve(t.current);
          t = null;
        }
      },
      get rect() {
        return e;
      }
    };
  };
  let s = null;
  let a = () => {
    s ||= o();
    return s;
  };
  require.d(exports, {
    getResizeObserver: function () {
      return a;
    }
  });
}