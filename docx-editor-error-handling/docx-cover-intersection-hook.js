// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useCoverIntersection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 462592
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var docxCoverIntersectionHandler = require("docx-cover-intersection-handler") /*id: 584038*/;
  var reactContextHookUtil = require("react-context-hook-util") /*id: 884866*/;
  var docxFileCoverUtils = require("docx-file-cover-utils") /*id: 326877*/;
  function a(e, i, r) {
    let a = reactContextHookUtil.useMyContext();
    let [c, d] = reactCoreLibraryReexport.useState("");
    let u = reactCoreLibraryReexport.useRef(null);
    let [h, f] = reactCoreLibraryReexport.useState(false);
    let g = reactCoreLibraryReexport.useCallback(e => {
      e.forEach(e => {
        let {
          intersectionRatio: i,
          boundingClientRect: n
        } = e;
        let {
          height: l
        } = n;
        let s = Math.floor(l * i);
        docxCoverIntersectionHandler.notifyHeightChange(s, r, a);
        if (e.isIntersecting) {
          f(true);
        } else {
          f(false);
        }
      });
    }, [a]);
    reactCoreLibraryReexport.useEffect(() => {
      if (i && (i.token || i.url)) {
        if (!docxFileCoverUtils.isGifMimeType(i.mime_type)) {
          d("");
          return;
        }
      } else {
        d("");
        return;
      }
    }, [i]);
    reactCoreLibraryReexport.useEffect(() => {
      if (e) {
        u.current = new IntersectionObserver(g, {
          rootMargin: "0px",
          threshold: [0, 0.2, 0.4, 0.6, 0.8, 1]
        });
        u.current.observe(e);
      }
      return () => {
        var e;
        if ((e = u.current) !== null && e !== undefined) {
          e.disconnect();
        }
      };
    }, [e, g]);
    if (e) {
      if (h) {
        return "";
      } else {
        return c;
      }
    } else {
      return "";
    }
  }
  require.d(exports, {
    useCoverIntersection: function () {
      return a;
    }
  });
}