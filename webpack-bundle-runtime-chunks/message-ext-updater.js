// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'updateMessageExtension'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 1543.afbc0065.js
         * chunkId: 1543
         * moduleId: 16409
         */
module.exports = function (module, exports, require) {
  var chatMessageStoreUpdater = require("chat-message-store-updater") /*id: 401891*/;
  function r(e, t, i, r, s) {
    let {
      research_suggest: a,
      suggest_skill: o
    } = s || {};
    chatMessageStoreUpdater.updateChatMessages({
      conversationId: t,
      immerUpdate: e => {
        let {
          draftMessageMap: t
        } = e;
        let n = t[i];
        if (n) {
          if (n.ext) {
            n.ext.sp = r;
            if (o) {
              n.ext.suggest_skill = o;
            }
            if (a) {
              n.ext.research_suggest = a;
            }
          } else {
            n.ext = {
              sp: r,
              ...(o ? {
                suggest_skill: o
              } : {}),
              ...(a ? {
                research_suggest: a
              } : {})
            };
          }
        }
      }
    });
  }
  require.d(exports, {
    updateMessageExtension: function () {
      return r;
    }
  });
}