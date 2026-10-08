// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'SkillOverflowList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: search-skill-guidance-page-v2.6f4bfe01.js
         * chunkId: 29927
         * moduleId: 412695
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  var samanthaPopoverWrapperComponent = require("samantha-popover-wrapper-component") /*id: 137563*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var shuffleIconRtlComponent = require("shuffle-icon-rtl-component") /*id: 297545*/;
  var blueprintOverflowList = require("blueprint-overflow-list") /*id: 172119*/;
  var chatInputStyles = require("chat-input-styles") /*id: 373754*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = reactCoreLibraryReexport.memo(function (e) {
    let {
      list: t,
      className: n,
      moreButtonPopoverProps: i,
      small: a,
      gap: f = 8
    } = e;
    let g = useLatestCallbackHook_1.useLatestCallback((e, t, n) => reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Fragment, {
      children: e({
        small: a,
        isOverflow: n
      })
    }, t));
    let b = reactCoreLibraryReexport.useCallback((e, t) => g(e, t), [g]);
    let v = useLatestCallbackHook_1.useLatestCallback(e => reactJsxRuntimeCoreReexport.jsx(samanthaPopoverWrapperComponent.SamanthaPopover, {
      position: "bottomLeft",
      ...i,
      content: () => reactJsxRuntimeCoreReexport.jsx("div", {
        className: "flex flex-col",
        children: e.map((e, t) => g(e, t, true))
      }),
      contentClassName: o(i == null ? undefined : i.contentClassName, "p-4"),
      className: o(i == null ? undefined : i.className, chatInputStyles.classNames["more-button-popover"]),
      children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
        type: "tertiary",
        size: a ? "small" : "medium",
        className: "!bg-s-color-bg-float",
        icon: reactJsxRuntimeCoreReexport.jsx(shuffleIconRtlComponent.ShuffleIcon, {
          className: a ? "!text-14" : "p-2 !text-16"
        })
      })
    }));
    let y = {
      "--chat-input-tool-button-overflow-list-gap": `${f}px`
    };
    let w = useLatestRef_1.useLatestRef(t);
    let x = reactCoreLibraryReexport.useMemo(() => Array.from({
      length: t.length
    }).map((e, t) => e => {
      var n;
      var r;
      if ((r = w.current) === null || r === undefined) {
        return undefined;
      } else if ((n = r[t]) === null || n === undefined) {
        return undefined;
      } else {
        return n.call(r, e);
      }
    }), [t.length]);
    return reactJsxRuntimeCoreReexport.jsx(blueprintOverflowList.OverflowList, {
      className: o(chatInputStyles.classNames["overflow-list"], n),
      style: y,
      items: x,
      overflowRenderer: v,
      visibleItemRenderer: b,
      collapseFrom: "end"
    });
  }, deepEqualUtil_1.deepEqual);
  require.d(exports, {
    SkillOverflowList: function () {
      return f;
    }
  });
}