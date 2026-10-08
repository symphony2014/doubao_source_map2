// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'n' to 'tabsComponentAdapter'
// - Resolved require(826897) to 'tabs-component-adapter'
// - Renamed variable 's' to 'tabPaneComponent'
// - Resolved require(772025) to 'tab-pane-component'
// - Renamed variable 'a' to 'modalConfirmDialogManager'
// - Resolved require(948195) to 'modal-confirm-dialog-manager'
// - Renamed variable 'o' to 'cloudBrowserCanvasComponent'
// - Resolved require(61271) to 'cloud-browser-canvas-component'
// - Renamed variable 'l' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'T' to 'ModalConfirmDialog' (module 948195)
// - Updated imported property 'Z' to 'TabsComponent' (module 826897)
// - Updated imported property 'Z' to 'TabPane' (module 772025)
// - Updated imported property 'Z' to 'CloudBrowserCanvas' (module 61271)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29444.6ae7e4e8.js
         * chunkId: 29444
         * moduleId: 680480
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var tabsComponentAdapter = require("tabs-component-adapter") /*id: 826897*/;
  var tabPaneComponent = require("tab-pane-component") /*id: 772025*/;
  var modalConfirmDialogManager = require("modal-confirm-dialog-manager") /*id: 948195*/;
  var cloudBrowserCanvasComponent = require("cloud-browser-canvas-component") /*id: 61271*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var c = e => {
    let {
      taskBlocks: t,
      endpoint: r,
      onClose: c
    } = e;
    let [h, p] = reactCoreLibraryReexport.useState(false);
    return reactJsxRuntimeCoreReexport.jsx(modalConfirmDialogManager.ModalConfirmDialog, {
      visible: true,
      onCancel: c,
      hasCancel: false,
      onOk: c,
      title: "Debug Panel",
      width: 800,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        children: reactJsxRuntimeCoreReexport.jsxs(tabsComponentAdapter.TabsComponent, {
          type: "card",
          defaultActiveKey: "TaskMessage",
          children: [reactJsxRuntimeCoreReexport.jsx(tabPaneComponent.TabPane, {
            tab: "TaskMessage",
            itemKey: "TaskMessage",
            className: "debug-panel-P4Oldt",
            children: reactJsxRuntimeCoreReexport.jsx("pre", {
              children: JSON.stringify(t, null, 2)
            })
          }), reactJsxRuntimeCoreReexport.jsx(tabPaneComponent.TabPane, {
            tab: "CloudBrowser",
            itemKey: "CloudBrowser",
            children: r ? h ? "Cloud Browser 已断开连接" : reactJsxRuntimeCoreReexport.jsx(cloudBrowserCanvasComponent.CloudBrowserCanvas, {
              wsEndpoint: r,
              onError: () => p(true)
            }) : reactJsxRuntimeCoreReexport.jsx("div", {
              children: "暂无 CloudBrowser 实例"
            })
          })]
        })
      })
    });
  };
  require.r(exports);
  require.d(exports, {
    default: function () {
      return c;
    }
  });
}