// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'ToolButtonOverflowList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 131745
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  var buttonComponent_1 = require("button-component_1") /*id: 893534*/;
  var horizontalDotsIcon = require("horizontal-dots-icon") /*id: 743464*/;
  var blueprintOverflowList = require("blueprint-overflow-list") /*id: 172119*/;
  var chatInputStyles = require("chat-input-styles") /*id: 373754*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = e => {};
  let p = new Promise(e => f = e);
  let _ = reactCoreLibraryReexport.lazy(async () => {
    await p;
    return {
      default: (await require.e("ondemand-more") /*id: 21867*/.then(require.bind(require, "tool-button-overflow-more-component") /*id: 409767*/)).ToolButtonOverflowMore
    };
  });
  let v = reactCoreLibraryReexport.memo(function (e) {
    let {
      list: t,
      className: n,
      small: r,
      scene: o,
      gap: p = 6,
      customControl: v
    } = e;
    let b = useLatestCallbackHook_1.useLatestCallback((e, t, n) => reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Fragment, {
      children: e({
        small: r,
        isOverflow: n,
        scene: o
      })
    }, t));
    let S = reactCoreLibraryReexport.useCallback((e, t) => b(e, t), [b]);
    let {
      skillToolUIV2: P
    } = chatLauncherConfigHooks.useSkillToolLayout(o);
    let C = useLatestCallbackHook_1.useLatestCallback(t => reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
      fallback: reactJsxRuntimeCoreReexport.jsx(buttonComponent_1.Button, {
        variant: "text",
        size: "lg",
        className: a("flex box-border rounded-xl px-7 py-5 !text-[14px] !leading-22 h-32"),
        onMouseOver: () => f(true),
        children: reactJsxRuntimeCoreReexport.jsx(horizontalDotsIcon.HorizontalDotsIcon, {
          className: a(P ? "size-18" : r ? "size-14" : "size-16")
        })
      }),
      children: reactJsxRuntimeCoreReexport.jsx(_, {
        ...e,
        content: reactJsxRuntimeCoreReexport.jsx(horizontalDotsIcon.HorizontalDotsIcon, {
          className: a(P ? "size-18" : r ? "size-14" : "size-16")
        }),
        children: t.map((e, t) => b(e, t, true))
      })
    }));
    let y = {
      "--chat-input-tool-button-overflow-list-gap": `${p}px`
    };
    let E = useLatestRef_1.useLatestRef(t);
    let x = reactCoreLibraryReexport.useMemo(() => Array.from({
      length: t.length
    }).map((e, t) => e => {
      var n;
      var i;
      if ((i = E.current) === null || i === undefined) {
        return undefined;
      } else if ((n = i[t]) === null || n === undefined) {
        return undefined;
      } else {
        return n.call(i, e);
      }
    }), [t.length]);
    if (v) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        style: y,
        className: a("flex overflow-hidden grow-1 shrink-1 items-center", n),
        children: x.map((e, t) => S(e, t))
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(blueprintOverflowList.OverflowList, {
        className: a(chatInputStyles.classNames["overflow-list"], n),
        style: y,
        items: x,
        overflowRenderer: C,
        visibleItemRenderer: S,
        collapseFrom: "end"
      });
    }
  }, deepEqualUtil_1.deepEqual);
  require.d(exports, {
    ToolButtonOverflowList: function () {
      return v;
    }
  });
}