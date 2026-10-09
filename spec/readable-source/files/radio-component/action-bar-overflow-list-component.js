// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'ActionBarOverflowList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 343172
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var samanthaDropdownWrapper = require("samantha-dropdown-wrapper") /*id: 686264*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var shuffleIconRtlComponent = require("shuffle-icon-rtl-component") /*id: 297545*/;
  var rtlChevronIcon = require("rtl-chevron-icon") /*id: 90045*/;
  var blueprintOverflowList = require("blueprint-overflow-list") /*id: 172119*/;
  var samanthaContextMenu = require("samantha-context-menu") /*id: 245967*/;
  var _ = {
    container: "container-dXR_BY",
    "item-wrapper": "item-wrapper-MvY1iU",
    disabled: "disabled-Q7bYMq",
    content: "content-nz1wIZ",
    "icon-wrapper": "icon-wrapper-OKw0HE",
    title: "title-OlYJ3y",
    divider: "divider-Y1pmHG",
    "context-menu-wrapper": "context-menu-wrapper-FESO81",
    "arrow-wrapper": "arrow-wrapper-K1J2Ou",
    "spin-wrapper": "spin-wrapper-R8EB4I"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function f(e) {
    let {
      actions: i,
      onMount: t
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      if (t != null) {
        t();
      }
    }, []);
    let a = reactFunctionMemoHook.useMemoizedCallback(e => {
      let i = e.reduce((i, t, n) => {
        let {
          key: a,
          icon: r,
          disabled: o,
          preventDefault: s,
          disabledTip: l,
          title: c,
          onClick: d,
          render: u,
          loading: p
        } = t;
        i.push({
          key: a,
          icon: r,
          disabled: o,
          disabledTip: l,
          preventDefault: s,
          render: () => u ? u({
            position: "actionBar_overflowItem"
          }) : c,
          onClick: d,
          loading: p
        });
        let m = e[n + 1];
        if (m && t.groupKey !== m.groupKey) {
          i.push({
            type: "divider"
          });
        }
        return i;
      }, []);
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: _["item-wrapper"],
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: _.divider
        }), reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown, {
          trigger: "click",
          position: "bottomRight",
          render: reactJsxRuntimeCoreReexport.jsx(samanthaContextMenu.SamanthaContextMenu, {
            className: _["context-menu-wrapper"],
            dataTestId: "ai_space_file_item_dropdown_menu",
            menus: i
          }),
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: _.content,
            "data-testid": "ai_space_file_item_dropdown_button",
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: _["icon-wrapper"],
              children: reactJsxRuntimeCoreReexport.jsx(shuffleIconRtlComponent.ShuffleIcon, {})
            })
          })
        })]
      }, "dropdown-reference");
    });
    let f = reactFunctionMemoHook.useMemoizedCallback((e, i) => {
      let {
        key: t,
        title: n,
        icon: a,
        render: o,
        disabled: d,
        disabledTip: p,
        onClick: m,
        menu: f,
        loading: v
      } = e;
      let g = reactJsxRuntimeCoreReexport.jsx("div", {
        className: _.content,
        onClick: d || v ? undefined : m,
        children: o ? o({
          position: "actionBar_visibleItem"
        }) : reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [v ? reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
            size: "small",
            wrapperClassName: _["spin-wrapper"]
          }) : reactJsxRuntimeCoreReexport.jsx("div", {
            className: _["icon-wrapper"],
            children: a
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: _.title,
            children: n
          }), f ? reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown, {
            menu: f,
            trigger: "hover",
            position: "bottomRight",
            clickToHide: true,
            className: "mt-3 !rounded-[10px]",
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: _["arrow-wrapper"],
              children: reactJsxRuntimeCoreReexport.jsx(rtlChevronIcon.RtlChevronIcon, {})
            })
          }) : null]
        })
      });
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        "data-testid": `ai_space_action_${t}`,
        className: r(_["item-wrapper"], {
          [_.disabled]: d || v
        }),
        children: [i > 0 && reactJsxRuntimeCoreReexport.jsx("div", {
          className: _.divider
        }), d && p ? reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
          content: p,
          children: g
        }) : g]
      }, t);
    });
    return reactJsxRuntimeCoreReexport.jsx(blueprintOverflowList.OverflowList, {
      "data-testId": "ai_space_file_list_action_bar",
      className: _.container,
      observeParents: true,
      collapseFrom: "end",
      items: i.filter(e => e.title || e.render),
      minVisibleItems: 1,
      overflowRenderer: a,
      visibleItemRenderer: f
    });
  }
  require.d(exports, {
    ActionBarOverflowList: function () {
      return f;
    }
  });
}