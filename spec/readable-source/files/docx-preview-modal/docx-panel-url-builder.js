// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'getDocxPanelUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: inline-next-docx-panel.7c8dbe01.js
         * chunkId: 31601
         * moduleId: 202507
         */
module.exports = function (module, exports, require) {
  var partnerCcmDocxPaths = require("partner-ccm-docx-paths") /*id: 383740*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var pageUpgradeStatusCheck = require("page-upgrade-status-check") /*id: 259114*/;
  function s(e) {
    let {
      docId: t,
      clientId: n,
      isPreview: s = false,
      isHistory: l = false,
      isInline: c = false,
      version: d,
      debugRevision: u,
      isChatPage: h = false,
      isThreadPage: p = false
    } = e;
    let f = new URLSearchParams({
      docId: t
    });
    if (s) {
      f.set("preview", "1");
    }
    if (d) {
      f.set("version", String(d));
    }
    if (l) {
      f.set("isHistory", "1");
    }
    if (c) {
      f.set("isInline", "1");
    }
    if (u) {
      f.set("debug_revision", u);
    }
    if (n) {
      f.set("clientId", n);
    }
    if (p) {
      f.set("isThreadPage", "1");
    }
    let m = chatFgStoreHooks.getSourceKeySync("ai_doc_ssr_at_chat_page", {
      source: chatStorageKeys.chatStorageKeys.serverAB,
      defaultValue: "false"
    });
    if ((!!h || !!p) && !l && !c && m === "true" && !pageUpgradeStatusCheck.isValidPageId(t)) {
      f.set("useClientSSR", "1");
    }
    return `${partnerCcmDocxPaths.getDocxPath}${t}?${f.toString()}`;
  }
  require.d(exports, {
    getDocxPanelUrl: function () {
      return s;
    }
  });
}