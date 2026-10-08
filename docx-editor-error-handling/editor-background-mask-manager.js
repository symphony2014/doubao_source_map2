// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'getThemeBackgroundColor'
// - Renamed export 'Z' to 'BackgroundMaskEffect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 967604
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  var colorRgbUtils = require("color-rgb-utils") /*id: 194090*/;
  var docxViewStateUtil = require("docx-view-state-util") /*id: 596609*/;
  var themeColorManagerFacade = require("theme-color-manager-facade") /*id: 552375*/;
  var colorThemeTokens = require("color-theme-tokens") /*id: 635565*/;
  var uiThemeConstants = require("ui-theme-constants") /*id: 541237*/;
  var themeColorUtils = require("theme-color-utils") /*id: 191810*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var viewStateTypeConstants = require("view-state-type-constants") /*id: 739915*/;
  let p = e => {
    if (!e) {
      return e;
    }
    let i = themeColorManagerFacade.getTextColors(uiThemeConstants.panelTheme.Background);
    let r = themeColorUtils.findThemeKey(i, e);
    if (!r && colorThemeTokens.defaultBackgrounds.some(i => colorRgbUtils.compareColors(i, e))) {
      r = colorThemeTokens.colorConstants.DARK_NEUTRAL_BACKGROUND;
    }
    let n = r && themeColorManagerFacade.getBackgrounds(uiThemeConstants.panelTheme.Background).get(r);
    return themeColorUtils.getCssRgba(n) || e;
  };
  class m extends editorContextFacade.EditorContextFacade {
    getEffect() {
      return e => {
        let {
          record: i,
          blockId: r
        } = e;
        let {
          snapshot: l
        } = i;
        let a = p(l.background_color);
        let c = reactReduxCore.useSelector(docxViewStateUtil.getViewType);
        reactCoreLibraryReexport.useEffect(() => {
          let e = this.blockManager.getBlockViewByBlockIdNotCheck(r);
          if (e) {
            let {
              blockMaskManager: i,
              logId: r
            } = e;
            let n = this.getMaskContainer(c, e);
            i.toggleMask("background", !!a, {
              backgroundColor: a
            }, n, r.split("-")[0]);
          }
        }, [a, r, c]);
        reactCoreLibraryReexport.useEffect(() => {
          let e = this.blockManager.getBlockViewByBlockIdNotCheck(r);
          let i = e && this.getMaskContainer(c, e);
          return () => {
            if (e) {
              let {
                blockMaskManager: r,
                logId: n
              } = e;
              r.toggleMask("background", false, undefined, i, n.split("-")[0]);
            }
          };
        }, [r, c]);
      };
    }
    constructor(...e) {
      var i;
      var r;
      var n;
      super(...e);
      i = "getMaskContainer";
      r = (e, i) => e === viewStateTypeConstants.viewTypes.PAGINATION && i.hostElement.querySelector(`.${docBlockTypeConstants.presentationContainer}`) || undefined;
      if ((i = typeof (n = function (e, i) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var n = r.call(e, i || "default");
          if (typeof n != "object") {
            return n;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (i === "string" ? String : Number)(e);
      }(i, "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, i, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = r;
      }
    }
  }
  require.d(exports, {
    getThemeBackgroundColor: function () {
      return p;
    },
    BackgroundMaskEffect: function () {
      return m;
    }
  });
}