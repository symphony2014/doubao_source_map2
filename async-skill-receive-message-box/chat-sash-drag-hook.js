// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'useChatSashDrag'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 290223
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var asyncSkillReceiveMessageBox_1_1 = require("async-skill-receive-message-box_1_1") /*id: 794651*/;
  var chatLayoutDimensions = require("chat-layout-dimensions") /*id: 519623*/;
  let a = (e, t) => Number((e * 100 / t).toFixed(2));
  let s = (e, t) => {
    let s = reactCoreLibraryReexport.useRef(null);
    let c = reactCoreLibraryReexport.useCallback(t => {
      let {
        curPos: n
      } = t;
      if (e) {
        chatStoreManager.getStore("chatViewCanvasStore").setState(t => {
          let {
            sashPctMap: i
          } = t;
          return {
            sashPctMap: {
              ...i,
              [e]: a(n, document.body.clientWidth)
            }
          };
        });
        if (n <= chatLayoutDimensions.avatarSize) {
          chatStoreManager.getStore("sidebarStore").setState(() => ({
            isExpand: false
          }));
        }
      }
    }, [e]);
    let [, d] = asyncSkillReceiveMessageBox_1_1.useMessageBoxUpdate();
    return {
      sashRef: s,
      onDrag: c,
      onDragEnd: t ? () => {
        t();
        d();
      } : d,
      dragging: s.current?.dragging
    };
  };
  require.d(exports, {
    useChatSashDrag: function () {
      return s;
    }
  });
}