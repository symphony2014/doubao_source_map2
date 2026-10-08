// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'ChatItemDropdownMenu'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.fab06bed.js
         * chunkId: 21179
         * moduleId: 929654
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationCheckers = require("chat-conversation-checkers") /*id: 104471*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var dbxDropdownMenuComponents = require("dbx-dropdown-menu-components") /*id: 491728*/;
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var horizontalDotsIcon = require("horizontal-dots-icon") /*id: 743464*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => require.e("chat-thread-share-ui") /*id: 33961*/.then(require.bind(require, "chat-item-menu-dropdown-and-modal") /*id: 481277*/).then(e => ({
    default: e.ChatItemMenuDropdown
  }))));
  let m = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => require.e("chat-thread-share-ui") /*id: 33961*/.then(require.bind(require, "chat-item-menu-dropdown-and-modal") /*id: 481277*/).then(e => ({
    default: e.ChatItemMenuModal
  }))));
  let v = e => {
    let {
      conversation: t
    } = e;
    let [n, i] = reactCoreLibraryReexport.useState(false);
    let s = chatConversationCheckers.isCocoSubConv(t);
    let [v, p] = reactCoreLibraryReexport.useState(false);
    let [g, _] = reactCoreLibraryReexport.useState({
      visible: false
    });
    let x = t => {
      chatStoreManager.getStore("flowWebLayoutStore").setState({
        sidebarInnerPopoverOpen: t
      });
      i(t);
      if (t) {
        var n;
        if ((n = e.onClickShowIcon) !== null && n !== undefined) {
          n.call(e, t);
        }
      } else {
        setTimeout(() => {
          var n;
          if ((n = e.onClickShowIcon) !== null && n !== undefined) {
            n.call(e, t);
          }
        }, 100);
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: a("relative", e.className),
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "relative flex items-center justify-center",
        children: reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenu, {
          trigger: "click",
          open: n,
          onOpenChange: x,
          children: [reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuTrigger, {
            onClick: e => {
              e.stopPropagation();
              return e.preventDefault();
            },
            children: reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
              onClick: e => {
                e.stopPropagation();
                return e.preventDefault();
              },
              variant: "icon",
              size: "sm",
              className: "-mr-4 text-dbx-text-tertiary",
              children: reactJsxRuntimeCoreReexport.jsx(horizontalDotsIcon.HorizontalDotsIcon, {
                "data-testid": "chat_item_dropdown_entry",
                "data-type": s ? "main-bot" : "bot"
              })
            })
          }), reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuPortal, {
            children: reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuContent, {
              side: "bottom",
              className: "z-101",
              onClick: e => {
                e.stopPropagation();
                e.preventDefault();
              },
              children: reactJsxRuntimeCoreReexport.jsx(f, {
                ...e,
                reportBotVisible: v,
                setReportBotVisible: p,
                editConversationDialogExts: g,
                setEditConversationDialogExts: _,
                setDropdownVis: x
              })
            })
          })]
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        onClick: e => {
          e.stopPropagation();
          e.preventDefault();
        },
        children: reactJsxRuntimeCoreReexport.jsx(m, {
          ...e,
          reportBotVisible: v,
          setReportBotVisible: p,
          editConversationDialogExts: g,
          setEditConversationDialogExts: _,
          setDropdownVis: i
        })
      })]
    });
  };
  require.d(exports, {
    ChatItemDropdownMenu: function () {
      return v;
    }
  });
}