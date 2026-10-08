// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'useSafariHighlight'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 62381.cb92c622.js
         * chunkId: 62381
         * moduleId: 885774
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  let r = (e, t) => {
    let n = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (!userAgentDeviceDetector.isSafari()) {
        return;
      }
      if (!n.current) {
        let e = document.createElement("style");
        e.textContent = ".safari-selection-highlight *::selection{background-color:transparent !important;text-shadow:none !important;}.safari-selection-highlight *::-webkit-selection{background-color:transparent !important;text-shadow:none !important;}.safari-selection-highlight{position:relative;}.safari-selection-highlight::after{content:'';position:absolute;inset:0;pointer-events:none;background:var(--safari-selection-bg, none);z-index:1;}";
        document.head.appendChild(e);
        n.current = true;
      }
      let i = () => {
        var t;
        let i = window.getSelection();
        let l = ((t = e.current) === null || t === undefined ? undefined : t.getRootElement()) ?? null;
        if (!l || !i || i.rangeCount === 0) {
          return;
        }
        let r = i.getRangeAt(0);
        if (r.collapsed) {
          l.style.removeProperty("--safari-selection-bg");
          l.classList.remove("safari-selection-highlight");
          return;
        }
        let o = l.getBoundingClientRect();
        let a = Array.from(r.getClientRects()).map(e => {
          let t = e.left - o.left;
          let n = e.top - o.top;
          let i = e.width;
          let l = e.height;
          return `linear-gradient(0deg, color-mix(in srgb, var(--dbx-text-highlight-hover, rgba(0,102,255,1)) 30%, transparent), color-mix(in srgb, var(--dbx-text-highlight-hover, rgba(0,102,255,1)) 30%, transparent)) ${t}px ${n}px / ${i}px ${l}px no-repeat`;
        }).join(", ");
        l.style.setProperty("--safari-selection-bg", a);
        l.classList.add("safari-selection-highlight");
      };
      let r = () => {
        var t;
        document.removeEventListener("selectionchange", i, true);
        let l = ((t = e.current) === null || t === undefined ? undefined : t.getRootElement()) ?? null;
        if (l) {
          l.style.removeProperty("--safari-selection-bg");
          l.classList.remove("safari-selection-highlight");
        }
      };
      if (t) {
        document.addEventListener("selectionchange", i, true);
      } else {
        r();
      }
      return () => {
        r();
      };
    }, [e, t]);
  };
  require.d(exports, {
    useSafariHighlight: function () {
      return r;
    }
  });
}