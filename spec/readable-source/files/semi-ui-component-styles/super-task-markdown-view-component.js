// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'markdownRendererComponentWrapper'
// - Resolved require(880688) to 'markdown-renderer-component-wrapper'
// - Renamed variable 'i' to 'chatPluginContentRenderer'
// - Resolved require(797443) to 'chat-plugin-content-renderer'
// - Renamed variable 'l' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property '_' to 'ChatPluginRenderer' (module 797443)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 506522
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var markdownRendererComponentWrapper = require("markdown-renderer-component-wrapper") /*id: 880688*/;
  var chatPluginContentRenderer = require("chat-plugin-content-renderer") /*id: 797443*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function s(e) {
    let {
      mode: t,
      markDown: a,
      isStreaming: s
    } = e;
    let c = reactCoreLibraryReexport.useRef(null);
    let d = reactCoreLibraryReexport.useRef({
      scrollTop: 0
    });
    let u = reactCoreLibraryReexport.useCallback(() => {
      if (!s) {
        return;
      }
      let e = c.current;
      if (e && (Math.abs(e.scrollTop + e.clientHeight - e.scrollHeight) < 10 || d.current.scrollTop === e.scrollTop)) {
        e.scrollTop = e.scrollHeight - e.clientHeight;
        d.current.scrollTop = e.scrollTop;
      }
    }, [s]);
    let p = reactCoreLibraryReexport.useMemo(() => ({
      Table: e => reactJsxRuntimeCoreReexport.jsx(chatPluginContentRenderer.ChatPluginRenderer, {
        ...e
      })
    }), []);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: c,
      className: "h-full w-full overflow-y-auto",
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "mx-auto box-content max-w-[700px] px-dbx-14 py-dbx-8",
        children: reactJsxRuntimeCoreReexport.jsx(markdownRendererComponentWrapper.MdBoxLazy, {
          className: "mdbox-PglbwW",
          theme: "samantha",
          mode: t,
          markDown: a,
          slots: p,
          eventCallbacks: {
            onLinkClick(e, t) {
              let a = t.url;
              if (a.startsWith("#") && c.current) {
                (function (e, t) {
                  let a = decodeURIComponent(t.split("#")[1]);
                  try {
                    let t = e.querySelector(`#${a}`);
                    if (t) {
                      t.scrollIntoView({
                        behavior: "smooth"
                      });
                      return;
                    }
                  } catch (e) {
                    loggerServiceCore.defaultLogger.console.error({
                      message: "query link hash error",
                      error: e
                    });
                  }
                  try {
                    var n;
                    var r;
                    let i = e.querySelectorAll("h1,h2,h3,h4,h5,h6");
                    let l = (n = t.split("#")[1]) === null || n === undefined ? undefined : n.trim().toLowerCase().replace(/\s+/g, "");
                    if (!l) {
                      return;
                    }
                    let o = a.toLowerCase();
                    for (let e of i) {
                      let t = e == null ? undefined : (r = e.innerText) === null || r === undefined ? undefined : r.toLowerCase().replace(/\s+/g, "");
                      if (t === l || t === o) {
                        e.scrollIntoView({
                          behavior: "smooth"
                        });
                        break;
                      }
                    }
                  } catch (e) {
                    loggerServiceCore.defaultLogger.console.error({
                      message: "query link hash error",
                      error: e
                    });
                  }
                })(c.current, a);
              }
            }
          },
          smooth: {
            enable: s,
            maxFirstTextSmoothSize: 10,
            onUpdate: u
          }
        })
      })
    });
  }
  require.d(exports, {
    SuperTaskMarkdownView: function () {
      return s;
    }
  });
}