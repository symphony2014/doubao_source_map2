// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'CodeUploadDropdown'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 12358.f77a465e.js
         * chunkId: 12358
         * moduleId: 951786
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var tooltipComponentExports = require("tooltip-component-exports") /*id: 341865*/;
  var dbxDropdownMenuComponents = require("dbx-dropdown-menu-components") /*id: 491728*/;
  var moveSvgIcon = require("move-svg-icon") /*id: 114428*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => {
    let {
      options: t,
      onChange: n,
      trackParams: c
    } = e;
    let d = e => {
      if (n != null) {
        n(e);
      }
    };
    let u = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenuSub, {
      children: [reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenuSubTrigger, {
        className: "gap-8",
        onClick: e => {
          e.preventDefault();
          return e.stopPropagation();
        },
        children: [reactJsxRuntimeCoreReexport.jsx(moveSvgIcon.MoveIcon, {
          className: "size-16"
        }), u("cici_web_ai_coding_code_upload")]
      }), reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuSubContent, {
        children: t.map((e, t) => {
          let n = reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuItem, {
            onClick: () => {
              teaAnalyticsEventTracker.trackEvent("click_upload_entrance_board", {
                ...c,
                button_name: e.track_button_name
              });
              d(e.value);
            },
            disabled: e.disabled,
            className: "text-left",
            children: e.label
          }, t);
          if (e.disabled) {
            return reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
              content: u("cici_web_ai_coding_upload_limit"),
              children: n
            });
          } else {
            return n;
          }
        })
      })]
    });
  };
  require.d(exports, {
    CodeUploadDropdown: function () {
      return c;
    }
  });
}