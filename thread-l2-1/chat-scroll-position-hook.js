// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'useChatScrollPosition'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 470681
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  function o(e, t, n, o) {
    let {
      scrollRef: a
    } = chatRefsContext.useChatRefs();
    let s = reactCoreLibraryReexport.useRef({
      value: false
    });
    let c = reactCoreLibraryReexport.useRef({
      func: n
    });
    c.current.func = n;
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      var t;
      var n;
      if (o) {
        return;
      }
      if (!s.current.value) {
        s.current.value = true;
        return;
      }
      let i = a == null ? undefined : (e = a.current) === null || e === undefined ? undefined : e.getContainer();
      if (!i) {
        return;
      }
      let {
        scrollHeight: r,
        scrollTop: d
      } = i;
      let u = d - (((t = (n = c.current).func) === null || t === undefined ? undefined : t.call(n)) || 0);
      let p = new MutationObserver(() => {
        let e = i.scrollHeight;
        i.scrollTop = u - (e - r);
        v();
      });
      p.observe(i, {
        subtree: true,
        attributes: true
      });
      let m = () => {
        if (p) {
          if (p != null) {
            p.disconnect();
          }
          document.removeEventListener("wheel", f);
          p = undefined;
        }
      };
      let v = debounceUtil_1_1.debounce(m, 30);
      let f = () => {
        m();
      };
      document.addEventListener("wheel", f);
      return () => {
        m();
      };
    }, [e, t, o]);
  }
  require.d(exports, {
    useChatScrollPosition: function () {
      return o;
    }
  });
}