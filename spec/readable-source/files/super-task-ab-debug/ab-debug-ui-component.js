// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'disableSelectBarConst'
// - Resolved require(554633) to 'disable-select-bar-const'
// - Renamed variable 'n' to 'popoverComponent'
// - Resolved require(973583) to 'popover-component'
// - Renamed variable 'a' to 'switchAdapterComponent'
// - Resolved require(962937) to 'switch-adapter-component'
// - Renamed variable 'l' to 'semiBannerComponent'
// - Resolved require(493101) to 'semi-banner-component'
// - Renamed variable 's' to 'closeIconComponent_1_1'
// - Resolved require(259726) to 'close-icon-component_1_1'
// - Renamed variable 'c' to 'reactCodemirrorEditorComponent'
// - Resolved require(160872) to 'react-codemirror-editor-component'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Z' to 'PopoverComponent' (module 973583)
// - Updated imported property 'g' to 'disableSelectBar' (module 554633)
// - Updated imported property 'Z' to 'SwitchComponent' (module 962937)
// - Updated imported property 'V' to 'CloseIcon' (module 259726)
// - Updated imported property 'M' to 'CodeMirrorEditor' (module 160872)
// - Updated imported property 'Z' to 'SemiBanner' (module 493101)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: super-task-ab-debug.d939873d.js
         * chunkId: 22412
         * moduleId: 132314
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var disableSelectBarConst = require("disable-select-bar-const") /*id: 554633*/;
  var popoverComponent = require("popover-component") /*id: 973583*/;
  var switchAdapterComponent = require("switch-adapter-component") /*id: 962937*/;
  var semiBannerComponent = require("semi-banner-component") /*id: 493101*/;
  var closeIconComponent_1_1 = require("close-icon-component_1_1") /*id: 259726*/;
  var reactCodemirrorEditorComponent = require("react-codemirror-editor-component") /*id: 160872*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = () => {
    let [e, t] = reactCoreLibraryReexport.useState({
      params: window.localStorage.getItem("__DEBUG_AB_PARAMS") || "",
      enabled: !!window.localStorage.getItem("__DEBUG_AB_PARAMS_ENABLED")
    });
    let [r, u] = reactCoreLibraryReexport.useState(false);
    let [m, h] = reactCoreLibraryReexport.useState(null);
    return reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
      clickToHide: false,
      trigger: "custom",
      visible: r,
      showArrow: true,
      content: reactJsxRuntimeCoreReexport.jsxs("div", {
        onClick: e => e.stopPropagation(),
        style: {
          display: "flex",
          width: "400px",
          gap: 8,
          padding: 8,
          flexDirection: "column"
        },
        className: disableSelectBarConst.disableSelectBar,
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          style: {
            display: "flex",
            gap: 8,
            alignItems: "center"
          },
          children: [reactJsxRuntimeCoreReexport.jsx("span", {
            children: "A/B 实验参数"
          }), reactJsxRuntimeCoreReexport.jsx(switchAdapterComponent.SwitchComponent, {
            className: "mr-8",
            style: {
              flexShrink: 0
            },
            defaultChecked: e.enabled,
            onChange: e => {
              window.localStorage.setItem("__DEBUG_AB_PARAMS_ENABLED", e ? "true" : "");
              t(t => ({
                ...t,
                enabled: e
              }));
            }
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            style: {
              flex: 1,
              textAlign: "right"
            },
            children: reactJsxRuntimeCoreReexport.jsx(closeIconComponent_1_1.CloseIcon, {
              onClick: () => u(false),
              className: "size-14"
            })
          })]
        }), reactJsxRuntimeCoreReexport.jsx(reactCodemirrorEditorComponent.CodeMirrorEditor, {
          value: e.params,
          editable: true,
          height: "200px",
          language: "json",
          onChange: e => {
            try {
              JSON.parse(e);
              h(null);
            } catch (e) {
              h(e);
            }
            let r = (e || "").trim();
            window.localStorage.setItem("__DEBUG_AB_PARAMS", r);
            t(e => ({
              ...e,
              params: r
            }));
          }
        }), m && reactJsxRuntimeCoreReexport.jsx(semiBannerComponent.SemiBanner, {
          type: "warning",
          description: m.message
        })]
      }),
      position: "top",
      children: reactJsxRuntimeCoreReexport.jsx("span", {
        style: {
          marginLeft: 4,
          cursor: "pointer",
          fontSize: 10,
          height: "14px",
          lineHeight: "14px",
          padding: "0 4px",
          backgroundColor: "var(--s-color-bg-trans-primary, rgba(0, 0, 0, 0.06))",
          borderRadius: 8
        },
        onClick: e => {
          u(!r);
          e.stopPropagation();
        },
        children: "A/B"
      })
    });
  };
  require.r(exports);
  require.d(exports, {
    ABDebug: function () {
      return u;
    }
  });
}