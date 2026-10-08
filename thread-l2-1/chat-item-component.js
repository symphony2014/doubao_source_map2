// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'ChatItemComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 479771
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var rtlChatIconComponent = require("rtl-chat-icon-component") /*id: 723947*/;
  var uiStyleClasses = require("ui-style-classes") /*id: 535902*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => {
    let {
      showAnimation: t,
      prefixIcon: n,
      children: l,
      isTool: c = false,
      isShowDefaultBotIcon: d = true
    } = e;
    let u = reactCoreLibraryReexport.useMemo(() => {
      let e = n || (d ? reactJsxRuntimeCoreReexport.jsx(rtlChatIconComponent.ChatRtlIcon, {}) : null);
      if (e) {
        return reactJsxRuntimeCoreReexport.jsx("span", {
          className: uiStyleClasses.cssClasses["icon-wrap"],
          children: e
        });
      } else {
        return null;
      }
    }, [n, d]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: r("flex justify-start gap-8", {
        [uiStyleClasses.cssClasses.tool]: c,
        [uiStyleClasses.cssClasses["fade-in"]]: t
      }),
      children: [u, l]
    });
  };
  require.d(exports, {
    ChatItemComponent: function () {
      return c;
    }
  });
}