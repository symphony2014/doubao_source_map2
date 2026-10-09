// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'loadingComponent'
// - Resolved require(666260) to 'loading-component'
// - Renamed variable 'l' to 'playFilledIcon'
// - Resolved require(260366) to 'play-filled-icon'
// - Renamed variable 'o' to 'infoOutlinedIconComponent'
// - Resolved require(435892) to 'info-outlined-icon-component'
// - Renamed variable 'c' to 'errorConstantsCodes'
// - Resolved require(850732) to 'error-constants-codes'
// - Renamed variable 'i' to 'docxUrlPreviewManager'
// - Resolved require(334000) to 'docx-url-preview-manager'
// - Renamed variable 's' to 'docxUrlPreviewExports'
// - Resolved require(777722) to 'docx-url-preview-exports'
// - Renamed variable 'u' to 'localeContextHocWrappers'
// - Resolved require(945449) to 'locale-context-hoc-wrappers'
// - Renamed variable 'm' to 'optionalFunctionCall'
// - Resolved require(698252) to 'optional-function-call'
// - Updated imported property 'O4' to 'previewClassName' (module 777722)
// - Updated imported property 'U8' to 'useIsUnmounted' (module 777722)
// - Updated imported property 'LL' to 'CacheType' (module 777722)
// - Updated imported property 'vc' to 'urlPreviewManager' (module 777722)
// - Updated imported property 'Rh' to 'withLocaleConfig' (module 945449)
// - Updated imported property 'Xn' to 'UrlPreviewApi' (module 334000)
// - Updated imported property 'Z' to 'PlayFilledIcon' (module 260366)
// - Updated imported property 'g' to 'LoadingComponent' (module 666260)
// - Updated imported property 'Z' to 'InfoOutlinedIcon' (module 435892)
// - Updated imported property 'Z' to 'callIfFunction' (module 698252)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89517.e488f1de.js
         * chunkId: 89517
         * moduleId: 296242
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var loadingComponent = require("loading-component") /*id: 666260*/;
  var playFilledIcon = require("play-filled-icon") /*id: 260366*/;
  var infoOutlinedIconComponent = require("info-outlined-icon-component") /*id: 435892*/;
  var errorConstantsCodes = require("error-constants-codes") /*id: 850732*/;
  var docxUrlPreviewManager = require("docx-url-preview-manager") /*id: 334000*/;
  var docxUrlPreviewExports = require("docx-url-preview-exports") /*id: 777722*/;
  var localeContextHocWrappers = require("locale-context-hoc-wrappers") /*id: 945449*/;
  var optionalFunctionCall = require("optional-function-call") /*id: 698252*/;
  let f = `${docxUrlPreviewExports.previewClassName}-videoPreview`;
  var v = localeContextHocWrappers.withLocaleConfig(function (e) {
    let {
      id: r,
      url: t,
      site: u = errorConstantsCodes.pDI.UNKNOWN,
      iframeUrl: v,
      srcUrl: d,
      coverImageUrl: p,
      onVideoPlayClick: E,
      config: {
        lang: g
      }
    } = e;
    let [h, N] = reactCoreLibraryReexport.useState(false);
    let [w, _] = reactCoreLibraryReexport.useState(false);
    let [Z, $] = reactCoreLibraryReexport.useState("");
    let [U, D] = reactCoreLibraryReexport.useState(false);
    let L = docxUrlPreviewExports.useIsUnmounted();
    function C() {
      N(true);
      D(false);
    }
    function P(e) {
      _(true);
      if (d && u === errorConstantsCodes.pDI.UNKNOWN) {
        _(false);
        $(d);
        D(true);
        return;
      }
      return function e(r, n) {
        let a = r - 1;
        return docxUrlPreviewManager.UrlPreviewApi.pullVideoInfo(d || t, {
          cacheType: n ? docxUrlPreviewExports.CacheType.None : docxUrlPreviewExports.CacheType.Memory
        }).then(r => {
          var t;
          if ((r == null ? undefined : r.srcUrl) || L) {
            if (r == null) {
              return undefined;
            } else {
              return r.srcUrl;
            }
          }
          if (a) {
            return new Promise((r, t) => {
              setTimeout(() => e(a, n).then(r).catch(t), 5000);
            });
          }
          let l = "retry 5 times but no videoSrc";
          if ((t = docxUrlPreviewExports.urlPreviewManager.logging) !== null && t !== undefined) {
            t.warn(l);
          }
          throw Error(l);
        });
      }(5, e).then(e => {
        _(false);
        $(e || "");
        D(true);
      }).catch(() => {
        _(false);
        N(true);
      });
    }
    function I(e) {
      e.preventDefault();
      e.stopPropagation();
      N(false);
      if (!v) {
        P(true);
      }
    }
    function O(e) {
      e.preventDefault();
      e.stopPropagation();
      if (E != null) {
        E();
      }
      if (!v) {
        if (u === errorConstantsCodes.pDI.UNKNOWN && !d) {
          window.open(t);
          return;
        }
        P();
        return;
      }
      D(true);
    }
    function k() {
      return reactCoreLibraryReexport.createElement("div", {
        className: `${f}-poster-btns`,
        onClick: O
      }, reactCoreLibraryReexport.createElement("div", {
        className: `${f}-poster-btn`
      }, reactCoreLibraryReexport.createElement(playFilledIcon.PlayFilledIcon, {
        className: `${f}-poster-btn-icon`
      })));
    }
    return reactCoreLibraryReexport.createElement("div", {
      className: `${f}-container`,
      onClick: function (e) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, reactCoreLibraryReexport.createElement("div", {
      className: `${f}-content`
    }, U ? U ? w ? null : Z && r ? reactCoreLibraryReexport.createElement("div", null) : u === errorConstantsCodes.pDI.YOUTUBE ? null : reactCoreLibraryReexport.createElement("iframe", {
      width: "100%",
      height: "100%",
      src: v,
      onError: C,
      frameBorder: "0"
    }) : null : p ? reactCoreLibraryReexport.createElement("div", {
      className: `${f}-poster`
    }, reactCoreLibraryReexport.createElement("div", {
      className: `${f}-poster__cover-bg-img`,
      style: {
        backgroundImage: `url(${p})`
      }
    }), reactCoreLibraryReexport.createElement("div", {
      className: `${f}-poster__cover-img-container`
    }, reactCoreLibraryReexport.createElement("div", {
      className: `${f}-poster__cover-img`,
      style: {
        background: `url(${p}) center center / contain no-repeat`
      }
    })), w && reactCoreLibraryReexport.createElement("div", {
      className: `${f}-loading`
    }, reactCoreLibraryReexport.createElement(loadingComponent.LoadingComponent, {
      className: `${f}-icon`
    })), h && reactCoreLibraryReexport.createElement("div", {
      className: `${f}-player-error`
    }, reactCoreLibraryReexport.createElement(infoOutlinedIconComponent.InfoOutlinedIcon, {
      className: `${f}-error-tip`
    }), reactCoreLibraryReexport.createElement("span", null, optionalFunctionCall.callIfFunction(g.UrlPreview.Lark_Chat_VideoUrlErrorMessagePc), reactCoreLibraryReexport.createElement("i", {
      className: `${f}-error-retry`,
      onClick: I
    }, optionalFunctionCall.callIfFunction(g.UrlPreview.Lark_Chat_VideoUrlErrorMessagePcClick)))), !w && !h && k()) : reactCoreLibraryReexport.createElement("div", {
      className: `${f}-poster`
    }, k())));
  });
  require.r(exports);
  require.d(exports, {
    default: function () {
      return v;
    }
  });
}