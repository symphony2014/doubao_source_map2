// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A9' to 'useInlinePreviewEntity'
// - Renamed export 'QK' to 'normalizeTextStyles'
// - Renamed export 'SA' to 'renderChildElements'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 386172
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var docxUrlPreviewManager = require("docx-url-preview-manager") /*id: 334000*/;
  var larkLoggerTracingUtils = require("lark-logger-tracing-utils") /*id: 944519*/;
  var urlPreviewCacheUtilityModule = require("url-preview-cache-utility-module") /*id: 779458*/;
  let a = larkLoggerTracingUtils.startSpan(urlPreviewCacheUtilityModule.moduleTitle);
  function E(e, t) {
    let {
      richTextElement: i,
      richTextElements: o,
      tagPath: _ = []
    } = e;
    if ((i == null ? undefined : i.childIds)?.length && Object.keys(o || {}).length) {
      return i.childIds.map(n => {
        let i = o == null ? undefined : o[n];
        if (!i) {
          return null;
        }
        let a = i.tag;
        let E = t[a];
        if (!E) {
          return null;
        }
        let l = [..._, a];
        return reactCoreLibraryReexport.createElement(E, Object.assign({}, e, {
          tagPath: l,
          key: n,
          elementId: n,
          richTextElement: i,
          elementIndex: i.elementIndex
        }));
      }).filter(e => e);
    } else {
      return null;
    }
  }
  function l(e) {
    if (!e) {
      return {};
    }
    let t = ["color", "fontStyle", "fontWeight", "backgroundColor"];
    let n = {};
    Object.keys(e).forEach(r => {
      let i = {};
      if (t.indexOf(r) !== -1) {
        var o;
        o = e[r];
        i = r === "color" && o.indexOf("#") !== 0 ? {
          [r]: `#${o}`
        } : {
          [r]: o
        };
      }
      n = Object.assign({}, n, i);
    });
    return n;
  }
  async function c(e, t) {
    return Promise.all(Object.values((await docxUrlPreviewManager.getUrlPreviewWithCache({
      payload: {
        previewIds: e
      },
      options: {}
    }, t)) || {}).map(docxUrlPreviewManager.processPreviewEntity));
  }
  function T(e) {
    let [t, n] = reactCoreLibraryReexport.useState();
    reactCoreLibraryReexport.useEffect(() => {
      (async () => {
        if (e) {
          let t = false;
          Promise.all(["LocalOnly", "RemoteOnly"].map(async r => {
            let i = await c([e], r);
            if (i.length && (!t || r === "RemoteOnly")) {
              n(i[0]);
              t = true;
            }
          })).catch(e => {
            a.error(e, {
              attributes: {
                name: `${urlPreviewCacheUtilityModule.moduleTitle}.getInlinePreviewEntityWithStrategy.error`
              }
            });
          });
        }
      })();
    }, [e]);
    return t;
  }
  require.d(exports, {
    useInlinePreviewEntity: function () {
      return T;
    },
    normalizeTextStyles: function () {
      return l;
    },
    renderChildElements: function () {
      return E;
    }
  });
}