// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'TableScrollContainer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-file.6fc25773.js
         * chunkId: 3449
         * moduleId: 446359
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = () => {
    let e = reactCoreLibraryReexport.useRef(null);
    let t = reactCoreLibraryReexport.useRef(null);
    let n = reactCoreLibraryReexport.useCallback(() => {
      let n = e.current;
      let r = t.current;
      if (!n || !r) {
        return;
      }
      let {
        scrollLeft: i
      } = n;
      let o = n.scrollWidth - n.clientWidth - i;
      let {
        paddingLeft: s,
        paddingRight: a
      } = getComputedStyle(n);
      let l = parseFloat(s);
      let c = parseFloat(a);
      let u = Math.abs(n.scrollWidth - n.clientWidth) > 1;
      let d = Math.abs(i) < 1;
      let h = Math.abs(o) < 1;
      r.setAttribute("data-scroll-inline-overflow", u ? "true" : "false");
      r.setAttribute("data-scroll-inline-at-start", d ? "true" : "false");
      r.setAttribute("data-scroll-inline-start-overflow", i - l > 1 ? "true" : "false");
      r.setAttribute("data-scroll-inline-at-end", h ? "true" : "false");
      r.setAttribute("data-scroll-inline-end-overflow", o - c > 1 ? "true" : "false");
    }, [e, t]);
    let o = reactCoreLibraryReexport.useCallback(debounceUtilWrapper.createDebounce(n, 50, {
      leading: true,
      trailing: true
    }), [n]);
    reactCoreLibraryReexport.useEffect(() => () => {
      o.cancel();
    }, [o]);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      n();
    }, [n]);
    let s = reactCoreLibraryReexport.useRef(null);
    let a = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      let t = e.current;
      let r = t == null ? undefined : t.querySelector(":scope > table");
      if (!t || !r) {
        return;
      }
      let i = new ResizeObserver(n);
      s.current = i;
      i.observe(t);
      let o = new ResizeObserver(n);
      a.current = o;
      o.observe(r);
      return () => {
        i.disconnect();
        o.disconnect();
      };
    }, [n]);
    return {
      tableRootRef: t,
      scrollContainerRef: e,
      handleScroll: o
    };
  };
  let c = e => {
    let {
      children: t,
      className: n,
      raw: r,
      parents: i,
      ...o
    } = e;
    let {
      tableRootRef: c,
      scrollContainerRef: u,
      handleScroll: d
    } = l();
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: c,
      className: s(n, "mdbox-table-root", "table-container-s7xaQF"),
      ...o,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        ref: u,
        onScroll: d,
        className: s("table-scroll-container-OfUx5s", "mdbox-table-scroll-container"),
        children: reactJsxRuntimeCoreReexport.jsx("table", {
          children: t
        })
      })
    });
  };
  require.d(exports, {
    TableScrollContainer: function () {
      return c;
    }
  });
}