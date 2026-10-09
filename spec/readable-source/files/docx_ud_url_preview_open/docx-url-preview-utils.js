// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A9' to 'useUrlPreview'
// - Renamed export 'QK' to 'parseElementStyle'
// - Renamed export 'SA' to 'renderRichText'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_ud_url_preview_open.ff701428.js
         * chunkId: 31314
         * moduleId: 217188
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var docxUrlPreviewManager_1 = require("docx-url-preview-manager_1") /*id: 829826*/;
  var larkWidgetLogger = require("lark-widget-logger") /*id: 360994*/;
  var docxLarkUrlPreviewUtils = require("docx-lark-url-preview-utils") /*id: 146261*/;
  let l = larkWidgetLogger.startSpan(docxLarkUrlPreviewUtils.moduleTag);
  function a(e, t) {
    let {
      richTextElement: r,
      richTextElements: o,
      tagPath: s = []
    } = e;
    if ((r == null ? undefined : r.childIds)?.length && Object.keys(o || {}).length) {
      return r.childIds.map(i => {
        let r = o == null ? undefined : o[i];
        if (!r) {
          return null;
        }
        let l = r.tag;
        let a = t[l];
        if (!a) {
          return null;
        }
        let c = [...s, l];
        return reactCoreLibraryReexport.createElement(a, Object.assign({}, e, {
          tagPath: c,
          key: i,
          elementId: i,
          richTextElement: r,
          elementIndex: r.elementIndex
        }));
      }).filter(e => e);
    } else {
      return null;
    }
  }
  function c(e) {
    if (!e) {
      return {};
    }
    let t = ["color", "fontStyle", "fontWeight", "backgroundColor"];
    let i = {};
    Object.keys(e).forEach(n => {
      let r = {};
      if (t.indexOf(n) !== -1) {
        var o;
        o = e[n];
        r = n === "color" && o.indexOf("#") !== 0 ? {
          [n]: `#${o}`
        } : {
          [n]: o
        };
      }
      i = Object.assign({}, i, r);
    });
    return i;
  }
  async function u(e, t) {
    return Promise.all(Object.values((await docxUrlPreviewManager_1.getPreviewWithCache({
      payload: {
        previewIds: e
      },
      options: {}
    }, t)) || {}).map(docxUrlPreviewManager_1.processPreviewEntity));
  }
  function g(e) {
    let [t, i] = reactCoreLibraryReexport.useState();
    reactCoreLibraryReexport.useEffect(() => {
      (async () => {
        if (e) {
          let t = false;
          Promise.all(["LocalOnly", "RemoteOnly"].map(async n => {
            let r = await u([e], n);
            if (r.length && (!t || n === "RemoteOnly")) {
              i(r[0]);
              t = true;
            }
          })).catch(e => {
            l.error(e, {
              attributes: {
                name: `${docxLarkUrlPreviewUtils.moduleTag}.getInlinePreviewEntityWithStrategy.error`
              }
            });
          });
        }
      })();
    }, [e]);
    return t;
  }
  require.d(exports, {
    useUrlPreview: function () {
      return g;
    },
    parseElementStyle: function () {
      return c;
    },
    renderRichText: function () {
      return a;
    }
  });
}