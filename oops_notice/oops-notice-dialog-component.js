// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'reactSpaceComponent'
// - Resolved require(676942) to 'react-space-component'
// - Renamed variable 'r' to 'universalButtonWrapper'
// - Resolved require(299462) to 'universal-button-wrapper'
// - Renamed variable 'l' to 'dialogConfirmComponent'
// - Resolved require(103822) to 'dialog-confirm-component'
// - Renamed variable 'a' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 's' to 'reactLoadableComponent'
// - Resolved require(35867) to 'react-loadable-component'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(4910) to 'platform-fe-biz-exclusive-notice'
// - Resolved require.bind(985818) to 'exclusive-notice-component'
// - Updated imported property 'T' to 'Space' (module 676942)
// - Updated imported property 'zx' to 'UniversalButton' (module 299462)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: oops_notice.c4d63499.js
         * chunkId: 60975
         * moduleId: 141014
         */
module.exports = function (module, exports, require) {
  var reactSpaceComponent = require("react-space-component") /*id: 676942*/;
  var universalButtonWrapper = require("universal-button-wrapper") /*id: 299462*/;
  var dialogConfirmComponent = require("dialog-confirm-component") /*id: 103822*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactLoadableComponent = require("react-loadable-component") /*id: 35867*/;
  var c = reactLoadableComponent;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = c({
    loader: async () => (await require.e("platform-fe-biz-exclusive-notice") /*id: 4910*/.then(require.bind(require, "exclusive-notice-component") /*id: 985818*/)).ExclusiveNotice,
    loading: () => null
  });
  function p(e) {
    let {
      message: n,
      handleCopy: i,
      handleRefresh: s,
      copyable: c
    } = e;
    let p = reactCoreLibraryReexport.useMemo(() => reactJsxRuntimeCoreReexport.jsxs(reactSpaceComponent.Space, {
      size: "small",
      style: {
        margin: "-2px 0 -2px -4px"
      },
      children: [c && reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
        type: "text",
        color: "primary",
        onClick: i,
        children: t("CreationDoc_DocX_CopyContent_Button")
      }), reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
        type: "text",
        color: "primary",
        onClick: s,
        children: t("CreationDoc_DocX_Refresh_Button")
      })]
    }), [i, s, c]);
    return reactJsxRuntimeCoreReexport.jsx(dialogConfirmComponent.Dialog, {
      visible: true,
      width: "100%",
      centered: false,
      keyboardClosable: false,
      closable: false,
      header: null,
      bodyHeightResponsiveMode: "off",
      style: {
        minHeight: 0,
        height: 0,
        top: 0
      },
      bodyStyle: {
        minHeight: 0,
        top: 0,
        height: 0,
        padding: 0,
        margin: 0
      },
      mask: false,
      footer: null,
      className: "oops_notice_dialog",
      children: reactJsxRuntimeCoreReexport.jsx(u, {
        type: "error",
        level: 200,
        align: "center",
        banner: true,
        visible: true,
        showIcon: true,
        message: n,
        action: p
      })
    });
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return p;
    }
  });
}