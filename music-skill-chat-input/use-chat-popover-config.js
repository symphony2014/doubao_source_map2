// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'useChatPopoverConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42241.852052e1.js
         * chunkId: 42241
         * moduleId: 82102
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  let a = e => {
    let {
      enableHidePopoverWhenMount: t = true,
      persistDefaultOpenPopoverWhenInteract: n,
      defaultOpenPopover: a = false
    } = e;
    let o = chatStoreManager.useStoreSelector("chatViewCoreStore", e => e.currentChatViewConfig);
    let c = isObjectOrFunction_1_1.isObjectOrFunction(n);
    let u = `${n == null ? undefined : n.prefix}_default_open_popover`;
    let [d, h] = reactCoreLibraryReexport.useState(() => c ? storageWrapperWithFallback.LocalStorageWrapper.getItem(u) === "true" : a);
    let f = e => {
      if (c) {
        h(e);
        storageWrapperWithFallback.LocalStorageWrapper.setItem(u, String(e));
      }
    };
    let {
      hidePopoverWhenMount: m,
      hidePopoverFrom: v
    } = reactCoreLibraryReexport.useMemo(() => {
      if (!t) {
        return {
          hidePopoverWhenMount: false,
          hidePopoverFrom: []
        };
      }
      let e = chatStoreManager.getStore("chatInputStore").getState().getHidePopoverWhenMount((o == null ? undefined : o.chatKey) || "");
      let n = chatStoreManager.getStore("chatInputStore").getState().getHidePopoverWhenMount((o == null ? undefined : o.chatId) || "");
      return {
        hidePopoverWhenMount: e || n,
        hidePopoverFrom: (e ? [(o == null ? undefined : o.chatKey) || ""] : []).concat(n ? [(o == null ? undefined : o.chatId) || ""] : [])
      };
    }, [t, o]);
    reactCoreLibraryReexport.useEffect(() => {
      if (v.length > 0) {
        v.forEach(e => {
          chatStoreManager.getStore("chatInputStore").getState().updateHidePopoverWhenMount(e, false);
        });
      }
    }, []);
    return {
      defaultOpenPopover: d && !m,
      skillHeaderProps: {
        onClickCollapseBtn: () => {
          f(false);
        },
        onClickExpandBtn: () => {
          f(true);
        },
        onClick: () => {
          f(true);
        }
      }
    };
  };
  require.d(exports, {
    useChatPopoverConfig: function () {
      return a;
    }
  });
}