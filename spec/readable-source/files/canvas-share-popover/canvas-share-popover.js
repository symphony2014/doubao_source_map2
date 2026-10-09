// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'CanvasSharePopover'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-share-popover.d05211cb.js
         * chunkId: 91643
         * moduleId: 251164
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var clipboardCopyHelper = require("clipboard-copy-helper") /*id: 735474*/;
  var s = clipboardCopyHelper;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var useDebounceCallbackHook_1_1 = require("use-debounce-callback-hook_1_1") /*id: 420834*/;
  var typographyWrapperModule = require("typography-wrapper-module") /*id: 954330*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var rtlLinkIcon = require("rtl-link-icon") /*id: 70222*/;
  var rtlChatCheckIconComponent = require("rtl-chat-check-icon-component") /*id: 690527*/;
  var rtlInfoIcon = require("rtl-info-icon") /*id: 853560*/;
  var shuffleIconRtlComponent_1 = require("shuffle-icon-rtl-component_1") /*id: 231343*/;
  var v = {
    container: "container-AQAW_3",
    header: "header-EFqe4C",
    sharedHeader: "sharedHeader-w_H1LS",
    sharedBox: "sharedBox-tWcH_Z",
    link: "link-CjQ2Gg",
    copy: "copy-eGaNJE",
    tooltip: "tooltip-GllG4d",
    actions: "actions-oJ6vf6",
    info: "info-efoo9z",
    icon: "icon-tIqbic",
    stopShare: "stopShare-xeEjCc"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = reactCoreLibraryReexport.forwardRef(function (e, i) {
    let {
      copyingTime: t,
      i18nConfig: a,
      link: o,
      top: f,
      bottom: b,
      onCopy: g,
      onBeforeCopy: x,
      onAfterCopy: k,
      onStop: N,
      classname: y,
      linkBoxClassname: C,
      disabled: j = false,
      copyIcon: S = reactJsxRuntimeCoreReexport.jsx(rtlLinkIcon.LinkIcon, {})
    } = e;
    let Z = !!j && !!a.copyWarning;
    let [$, R] = reactCoreLibraryReexport.useState(false);
    useDebounceCallbackHook_1_1.useDebounceCallback(() => {
      R(false);
    }, $ ? t : 0);
    let T = async (e, i, n) => {
      let a = e || o;
      if (t) {
        R(true);
      }
      try {
        await navigator.clipboard.write([new ClipboardItem({
          "text/plain": new Blob([a], {
            type: "text/plain"
          })
        })]);
      } catch (e) {
        s(a);
      }
      if (k != null) {
        k(a, i, n);
      }
    };
    reactCoreLibraryReexport.useImperativeHandle(i, () => ({
      handleCopyLink: T
    }));
    let E = reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
      type: "primary",
      disabled: j,
      className: v.copy,
      onClick: () => {
        if (x != null) {
          x();
        }
        if (g) {
          g(o);
          return;
        }
        T();
      },
      icon: $ ? reactJsxRuntimeCoreReexport.jsx(rtlChatCheckIconComponent.RtlChatCheckIcon, {}) : S,
      children: $ ? a.copying : a.copy
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: r(v.container, y),
      children: [f, (a == null ? undefined : a.header) && reactJsxRuntimeCoreReexport.jsx("div", {
        className: r(v.header, v.sharedHeader),
        children: a.header
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: r(v.sharedBox, C),
        children: [reactJsxRuntimeCoreReexport.jsx(typographyWrapperModule.TypographyWrapper.Text, {
          className: v.link,
          ellipsis: {
            showTooltip: false
          },
          children: o
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          children: Z ? reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
            trigger: "hover",
            content: a.copyWarning,
            wrapperClassName: v.tooltip,
            position: "top",
            children: E
          }) : E
        })]
      }), N && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: v.actions,
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: v.info,
          children: [reactJsxRuntimeCoreReexport.jsx(rtlInfoIcon.RtlInfoIcon, {
            className: v.icon
          }), a.desc]
        }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          type: "quartary",
          className: v.stopShare,
          onClick: N,
          icon: reactJsxRuntimeCoreReexport.jsx(shuffleIconRtlComponent_1.ShuffleIcon, {}),
          children: a.stop
        })]
      }), b]
    });
  });
  require.d(exports, {
    CanvasSharePopover: function () {
      return f;
    }
  });
}