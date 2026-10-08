// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'handlePdfChatMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: im-chat-l0.82349834.js
         * chunkId: 41884
         * moduleId: 502659
         */
module.exports = function (module, exports, require) {
  var chatFileOpenHandler = require("chat-file-open-handler") /*id: 145253*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let a = e => {
    try {
      new URL(e);
      return true;
    } catch (e) {
      return false;
    }
  };
  let u = e => {
    let {
      message: l,
      openFileByKey: i,
      openFileByLink: u
    } = e;
    let s = l.ext?.pdf_hover_position;
    let {
      page: c,
      area: d,
      pdfKey: v
    } = safeJsonUtils.safeParse(s, {});
    if (!isNumberUtil.isNumber(c) || !Array.isArray(d) || !v) {
      return;
    }
    let f = l.message_id;
    let p = JSON.parse(l.ext?.chat_ability || "{}");
    let _ = p == null ? undefined : p.ability_type;
    let m = {
      messageId: f,
      pdf: {
        anchorPage: c,
        highlightArea: [{
          page: c ?? 0,
          area: d,
          scrollIntoView: true
        }]
      }
    };
    let h = {
      messageId: f,
      skillType: _,
      entranceType: "click_send_ref_content",
      collectionId: v
    };
    return {
      onClick: () => a(v) ? u == null ? undefined : u(v, {
        ...m,
        attchmentType: "pdf"
      }, h) : i == null ? undefined : i(v, "PDF", m, h)
    };
  };
  let s = e => {
    let {
      message: t
    } = e;
    let n = chatStoreManager.useStoreSelector("chatViewCoreStore", e => e.currentChatViewConfig);
    let {
      openFileByKey: r,
      openFileByLink: o
    } = chatFileOpenHandler.createChatFileHandler({
      chatViewConfig: n
    });
    return u({
      message: t,
      openFileByKey: r,
      openFileByLink: o
    });
  };
  require.d(exports, {
    handlePdfChatMessage: function () {
      return s;
    }
  });
}