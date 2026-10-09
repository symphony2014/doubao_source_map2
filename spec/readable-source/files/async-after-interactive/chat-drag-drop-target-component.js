// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 's' to 'chatInputToolSupport'
// - Resolved require(780828) to 'chat-input-tool-support'
// - Renamed variable 'l' to 'dragDropFileHook'
// - Resolved require(35695) to 'drag-drop-file-hook'
// - Renamed variable 'c' to 'chatRefsContext'
// - Resolved require(184894) to 'chat-refs-context'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'E' to 'useChatRefs' (module 184894)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'pO' to 'isFileSendEnabled' (module 780828)
// - Updated imported property 'vb' to 'isImageSendEnabled' (module 780828)
// - Updated imported property 't' to 'useDragDrop' (module 35695)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive.9af05afc.js
         * chunkId: 87048
         * moduleId: 684399
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatInputToolSupport = require("chat-input-tool-support") /*id: 780828*/;
  var dragDropFileHook = require("drag-drop-file-hook") /*id: 35695*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = () => {
    let {
      chatDropTargetRef: t,
      chatPageTargetRef: n
    } = chatRefsContext.useChatRefs();
    let {
      currentChatViewConfig: a
    } = chatStoreManager.useStoreSelector("chatViewCoreStore");
    let u = (a == null ? undefined : a.chatId) ?? "";
    let f = a == null ? undefined : a.chatType;
    let m = chatInputToolSupport.isFileSendEnabled(u, f);
    let v = chatInputToolSupport.isImageSendEnabled(u, f);
    let {
      isOver: p,
      divProps: h
    } = dragDropFileHook.useDragDrop({
      canSendFile: m,
      canSendImage: v
    });
    let {
      onDragEnter: g,
      onDragOver: b,
      onDragLeave: y,
      onDrop: w
    } = h;
    reactCoreLibraryReexport.useEffect(() => {
      if (n.current) {
        n.current.ondragenter = g;
        n.current.ondragover = b;
        n.current.ondragleave = y;
        n.current.ondrop = w;
      }
      return () => {
        if (n.current) {
          n.current.ondragenter = null;
          n.current.ondragover = null;
          n.current.ondragleave = null;
          n.current.ondrop = null;
        }
      };
    }, [m, v]);
    reactCoreLibraryReexport.useEffect(() => {
      if (n.current) {
        if (p) {
          n.current.classList.add("drag-over");
        } else {
          n.current.classList.remove("drag-over");
        }
      }
    }, [p]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: t,
      onDragEnter: g,
      className: i("absolute left-0 top-0 right-0 bottom-0 z-100", {
        hidden: !p
      })
    });
  };
  require.r(exports);
  require.d(exports, {
    DropTarget: function () {
      return u;
    }
  });
}