// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'ChatSelectToolbar'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28821.95116918.js
         * chunkId: 28821
         * moduleId: 365771
         */
module.exports = function (module, exports, require) {
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var ringOutlinedIcon = require("ring-outlined-icon") /*id: 112124*/;
  var eyeIcon = require("eye-icon") /*id: 338021*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      text: n,
      classname: r,
      anchorElement: u,
      visible: m,
      onCopy: h,
      onFollowUp: _,
      clearSelection: p
    } = e;
    let v = i18nTranslationUtils.useTranslationWithFallback();
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      onHiddenTools: () => {}
    }), []);
    let f = [{
      icon: reactJsxRuntimeCoreReexport.jsx(ringOutlinedIcon.RingOutlinedIcon, {}),
      title: v("chat_selectText_copy"),
      onClick: () => {
        if (n) {
          if (h != null) {
            h({
              text: n
            });
          }
          if (p != null) {
            p();
          }
        }
      }
    }, {
      icon: reactJsxRuntimeCoreReexport.jsx(eyeIcon.eyeIcon, {}),
      title: v("chat_selectText_ask"),
      onClick: () => {
        if (n) {
          if (_ != null) {
            _({
              text: n
            });
          }
        }
        if (p != null) {
          p(true);
        }
      }
    }];
    let g = reactJsxRuntimeCoreReexport.jsx("div", {
      "data-word-selection-toolbar": "true",
      className: i(r, "toolContainer-tlVomx"),
      children: f.map(e => reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "toolItem-C_B5bD",
        onClick: () => {
          e.onClick();
        },
        children: [e.icon, reactJsxRuntimeCoreReexport.jsx("div", {
          className: "toolItem-title-UZzjLI",
          children: e.title
        })]
      }))
    });
    if (m && u) {
      return reactDomEntryWrapper.createPortal(g, u);
    } else {
      return null;
    }
  });
  require.d(exports, {
    ChatSelectToolbar: function () {
      return u;
    }
  });
}