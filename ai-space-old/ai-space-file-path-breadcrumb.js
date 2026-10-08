// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'renderFilePathBreadcrumb'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 432898
         */
module.exports = function (module, exports, require) {
  var popoverComponent = require("popover-component") /*id: 973583*/;
  var shuffleIconRtlComponent = require("shuffle-icon-rtl-component") /*id: 297545*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var typographyWrapperModule = require("typography-wrapper-module") /*id: 954330*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var arrowRightRtlIcon = require("arrow-right-rtl-icon") /*id: 371018*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function p(e) {
    let {
      name: t,
      showSeparator: i = true,
      active: n = false,
      onClick: a
    } = e;
    let {
      Text: o
    } = typographyWrapperModule.TypographyWrapper;
    let d = reactCoreLibraryReexport.useCallback((e, t) => reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
      content: e,
      children: t
    }), []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "container-JKF5Cq",
      onClick: a,
      children: [reactJsxRuntimeCoreReexport.jsx(o, {
        "data-testid": "ai_space_file_list_path_item_label",
        className: l("name-dnNSsE", {
          "active-Ye_kUL": n
        }),
        ellipsis: {
          showTooltip: {
            renderTooltip: d
          }
        },
        children: t
      }), i && reactJsxRuntimeCoreReexport.jsx(_, {})]
    });
  }
  function _() {
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "separator-HEfUNH",
      children: reactJsxRuntimeCoreReexport.jsx(arrowRightRtlIcon.ArrowRightRtlIcon, {
        className: "icon-tleA7h"
      })
    });
  }
  var m = {
    container: "container-WA_kwT",
    "collapse-wrapper": "collapse-wrapper-mBiQ2i",
    "icon-wrapper": "icon-wrapper-SOsRHQ",
    icon: "icon-Z2lTpt",
    "collapse-popover-wrapper": "collapse-popover-wrapper-wu_112"
  };
  function h(e) {
    let {
      pathList: t,
      onClickItem: i
    } = e;
    let {
      firstItems: r,
      collapseItems: o,
      lastItems: l
    } = function (e) {
      let t = e.length;
      if (e.length <= 4) {
        return {
          firstItems: [],
          collapseItems: [],
          lastItems: e
        };
      } else {
        return {
          firstItems: e.slice(0, 1),
          collapseItems: e.slice(1, t - 2),
          lastItems: e.slice(t - 2)
        };
      }
    }(t);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: m.container,
      children: [r.map(e => reactJsxRuntimeCoreReexport.jsx(p, {
        name: e.name,
        showSeparator: true,
        active: false,
        onClick: () => {
          if (i != null) {
            i(e);
          }
        }
      }, e.id)), o.length > 0 && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: m["collapse-wrapper"],
        children: [reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
          position: "bottomLeft",
          content: reactJsxRuntimeCoreReexport.jsx("div", {
            className: m["collapse-popover-wrapper"],
            children: o.map((e, t) => {
              let n = t === o.length - 1;
              return reactJsxRuntimeCoreReexport.jsx(p, {
                name: e.name,
                showSeparator: !n,
                active: false,
                onClick: () => {
                  if (i != null) {
                    i(e);
                  }
                }
              }, e.id);
            })
          }),
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: m["icon-wrapper"],
            children: reactJsxRuntimeCoreReexport.jsx(shuffleIconRtlComponent.ShuffleIcon, {
              className: m.icon
            })
          })
        }), reactJsxRuntimeCoreReexport.jsx(_, {})]
      }), l.map((e, t) => {
        let n = t === l.length - 1;
        return reactJsxRuntimeCoreReexport.jsx(p, {
          name: e.name,
          showSeparator: !n,
          active: n,
          onClick: () => {
            if (i != null) {
              i(e);
            }
          }
        }, e.id);
      })]
    });
  }
  require.d(exports, {
    renderFilePathBreadcrumb: function () {
      return h;
    }
  });
}