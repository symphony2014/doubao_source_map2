// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'useThreadScrollHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 322787
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var threadUiStateContext = require("thread-ui-state-context") /*id: 993650*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  function o(e) {
    let {
      expanded: t,
      setDisableAllAnimations: n
    } = threadUiStateContext.useThreadUiContext();
    let o = reactCoreLibraryReexport.useRef({
      value: false
    });
    let a = reactCoreLibraryReexport.useRef({
      value: false
    });
    let s = reactCoreLibraryReexport.useRef({
      height: 0
    });
    let c = reactCoreLibraryReexport.useRef({
      top: 0,
      height: 0
    });
    let {
      scrollRef: d
    } = chatRefsContext.useChatRefs();
    reactCoreLibraryReexport.useEffect(() => {
      var n;
      if (e || !t) {
        return;
      }
      let i = d == null ? undefined : (n = d.current) === null || n === undefined ? undefined : n.getContainer();
      if (!i) {
        return;
      }
      let l = new MutationObserver(() => {
        s.current.height = i.scrollHeight;
        if (a.current.value) {
          i.scrollTo({
            top: 0
          });
          return;
        }
        if (o.current.value) {
          i.scrollTop = c.current.top - (s.current.height - c.current.height);
        }
      });
      l.observe(i, {
        subtree: true,
        attributes: true
      });
      let r = document.getElementById("to-bottom-button");
      let u = () => {
        a.current.value = true;
        o.current.value = false;
        i.scrollTo({
          top: 0
        });
        setTimeout(() => {
          a.current.value = false;
        }, 500);
      };
      if (r != null) {
        r.addEventListener("click", u);
      }
      return () => {
        l.disconnect();
        if (r != null) {
          r.removeEventListener("click", u);
        }
      };
    }, [e, t]);
    reactCoreLibraryReexport.useEffect(() => {
      var i;
      if (e || !t) {
        return;
      }
      let l = d == null ? undefined : (i = d.current) === null || i === undefined ? undefined : i.getContainer();
      if (!l) {
        return;
      }
      let r = () => {
        c.current.top = l.scrollTop;
        c.current.height = s.current.height;
        if (l.scrollTop < -5 && !a.current.value) {
          o.current.value = true;
          n(true);
        } else {
          n(true);
          o.current.value = false;
        }
      };
      l.addEventListener("scroll", r);
      return () => {
        n(false);
        o.current.value = false;
        l.removeEventListener("scroll", r);
      };
    }, [e, t]);
  }
  require.d(exports, {
    useThreadScrollHandler: function () {
      return o;
    }
  });
}