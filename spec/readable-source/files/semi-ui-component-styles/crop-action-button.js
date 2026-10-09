// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'CropButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 135834
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var topBarActionItem = require("top-bar-action-item") /*id: 543961*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var c = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M19.502 9.5a.514.514 0 0 0 .512-.454c.24-1.433.451-2.169.906-2.625s1.187-.666 2.612-.907a.513.513 0 0 0-.002-1.026c-1.423-.241-2.155-.453-2.61-.908-.455-.457-.666-1.192-.906-2.622A.514.514 0 0 0 19.502.5a.52.52 0 0 0-.515.456c-.241 1.432-.452 2.167-.907 2.624-.454.455-1.185.667-2.607.909a.514.514 0 0 0-.473.513.52.52 0 0 0 .47.512c1.425.24 2.156.447 2.61.9.455.454.666 1.19.907 2.634a.52.52 0 0 0 .515.452m-7.44-.995 1.432-2.047c.395.501.976.818 1.558.907l.222.038-1.575 2.249-.569.812 2.715 3.878a4.002 4.002 0 0 1 3.698 7.023 4 4 0 0 1-5.336-5.876l-2.297-3.281-2.298 3.281a4.002 4.002 0 0 1-5.335 5.876 4 4 0 0 1 3.697-7.023l2.715-3.878L5.53 3.098A1 1 0 0 1 7.17 1.951l4.74 6.77zm3.548 10.73a2 2 0 1 1 3.277-2.293 2 2 0 0 1-3.277 2.294m-7.4 0a2 2 0 1 0-3.277-2.293 2 2 0 0 0 3.276 2.294",
      clipRule: "evenodd"
    })
  }), {}));
  var containerComponent = require("container-component") /*id: 237250*/;
  var textToolContext = require("text-tool-context") /*id: 533002*/;
  var translationContextProvider = require("translation-context-provider") /*id: 849355*/;
  var reactContextProviderHook = require("react-context-provider-hook") /*id: 719110*/;
  var v = {
    "crop-button": "crop-button-UWfnf4",
    title: "title-oDBHvj",
    disabled: "disabled-uAPRlQ"
  };
  let h = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      disabled: a,
      className: n,
      hideTitle: r = false,
      onClick: o,
      iconClassName: h
    } = e;
    let _ = translationContextProvider.useTranslation();
    let g = textToolContext.useToolContext();
    let f = reactContextProviderHook.useContextValue();
    return reactJsxRuntimeCoreReexport.jsxs(containerComponent.Container, {
      disabled: a,
      ref: t,
      className: i(n, v["crop-button"], {
        [v.disabled]: a
      }),
      onClick: () => {
        var e;
        var t;
        var n;
        if (!a) {
          if ((e = f.onClickCrop) !== null && e !== undefined) {
            e.call(f);
          }
          if (g != null && (n = g.ref) !== null && n !== undefined && (t = n.current) !== null && t !== undefined) {
            t.next(textToolContext.ToolMode.CROP);
          }
          if (o != null) {
            o();
          }
        }
      },
      "data-onboarding-id": "crop_btn",
      children: [reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
        disabled: a,
        "data-testid": "container_inner_crop_btn",
        children: reactJsxRuntimeCoreReexport.jsx(c, {
          className: h
        })
      }), !r && reactJsxRuntimeCoreReexport.jsx("div", {
        className: v.title,
        children: _("screenshot_capture")
      })]
    });
  });
  require.d(exports, {
    CropButton: function () {
      return h;
    }
  });
}