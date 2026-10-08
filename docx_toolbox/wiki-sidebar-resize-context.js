// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Jw' to 'useWikiContext'
// - Renamed export 'Qt' to 'useSidebarResize'
// - Renamed export 'bS' to 'WikiProvider'
// - Renamed export 'g8' to 'isResizing'
// - Renamed export 'tL' to 'useResizeState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 419331
         */
module.exports = function (module, exports, require) {
  var o;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = reactCoreLibraryReexport.createContext(null);
  let u = e => {
    let {
      onWikiSidebarResize: n,
      tokenFromWiki: r,
      getClientVarsRequestExtraParams: o,
      reportWikiFirstContentLoaded: i,
      reportWikiAllContentLoaded: l,
      children: u,
      workspaceProps: s
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(c.Provider, {
      value: {
        onSidebarResize: n,
        isInWiki: !!r,
        token: r,
        tokenFromWiki: r,
        workspaceProps: s,
        getClientVarsRequestExtraParams: o,
        reportWikiFirstContentLoaded: i,
        reportWikiAllContentLoaded: l
      },
      children: u
    });
  };
  let s = () => reactCoreLibraryReexport.useContext(c);
  (o = {})[o.IDLE = 0] = "IDLE";
  o[o.RESIZING = 1] = "RESIZING";
  let d = o;
  let h = e => e === d.RESIZING;
  let f = function ({
    onResizeStart: e,
    onResizeEnd: n
  } = {}) {
    let r = s();
    let o = reactCoreLibraryReexport.useRef(d.IDLE);
    let a = reactCoreLibraryReexport.useCallback(() => o.current = d.IDLE, []);
    let c = reactCoreLibraryReexport.useMemo(() => debounceUtil_1_1.debounce(() => {
      a();
      if (n != null) {
        n();
      }
    }, 300, {
      trailing: true
    }), [n, a]);
    let u = reactCoreLibraryReexport.useCallback(() => {
      if (!h(o.current)) {
        o.current = d.RESIZING;
        if (e != null) {
          e();
        }
      }
      c();
    }, [e, c]);
    reactCoreLibraryReexport.useEffect(() => {
      let e;
      if (r && r.isInWiki) {
        var n;
        e = (n = r.onSidebarResize) === null || n === undefined ? undefined : n.call(r, u);
      }
      return () => {
        a();
        c.cancel();
        if (e != null) {
          e();
        }
      };
    }, [r, a, c, u]);
    return o;
  };
  let p = () => {
    let e = s();
    let [n, r] = reactCoreLibraryReexport.useState(d.IDLE);
    let o = reactCoreLibraryReexport.useMemo(() => debounceUtil_1_1.debounce(() => {
      r(d.IDLE);
    }, 300, {
      trailing: true
    }), []);
    let a = reactCoreLibraryReexport.useCallback(() => {
      r(d.RESIZING);
      o();
    }, [o]);
    reactCoreLibraryReexport.useEffect(() => {
      let n;
      if (e && e.isInWiki) {
        var r;
        n = (r = e.onSidebarResize) === null || r === undefined ? undefined : r.call(e, a);
      }
      return () => {
        if (n != null) {
          n();
        }
      };
    }, [e, o, a]);
    reactCoreLibraryReexport.useEffect(() => () => {
      o.cancel();
    }, []);
    return n;
  };
  require.d(exports, {
    useWikiContext: function () {
      return s;
    },
    useSidebarResize: function () {
      return f;
    },
    WikiProvider: function () {
      return u;
    },
    isResizing: function () {
      return h;
    },
    useResizeState: function () {
      return p;
    }
  });
}