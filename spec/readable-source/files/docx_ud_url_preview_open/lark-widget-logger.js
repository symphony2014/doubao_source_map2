// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Rr' to 'startSpan'
// - Renamed export 'ZP' to 'logger'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_ud_url_preview_open.ff701428.js
         * chunkId: 31314
         * moduleId: 360994
         */
module.exports = function (module, exports, require) {
  var n;
  var r;
  var o;
  var s;
  var l;
  var a;
  var aceLoggerCoreManager = require("ace-logger-core-manager") /*id: 711568*/;
  (n = s ||= {}).Search = "search";
  n.Messenger = "messenger";
  n.MessengerCreateGroup = "messenger.create-group";
  n.MessengerFeed = "messenger.feed";
  n.MessengerPinnedChats = "messenger.pinned-chats";
  n.MessengerChat = "messenger.chat";
  n.MessengerChatMessage = "messenger.chat-message";
  n.MessengerNameCard = "messenger.name-card";
  n.Video = "video";
  n.VC = "vc";
  n.CCM = "ccm";
  n.CCMDoc = "ccm.doc";
  n.CCMSlider = "ccm.slider";
  n.CCMSheet = "ccm.sheet";
  n.Mail = "mail";
  n.Calendar = "calendar";
  n.Contacts = "contacts";
  n.ContactsShareLink = "contacts.share-link";
  n.ContactsShareQRCode = "contacts.share-qrcode";
  n.ContactsSearch = "contacts.search";
  n.Ai = "ai";
  n.Other = "other";
  (r = l ||= {}).WechatQRCode = "wechat.qrcode";
  r.WechatLink = "wechat.link";
  r.LarkQRCode = "lark.qrcode";
  r.LarkLink = "lark.link";
  r.Other = "other";
  (o = a ||= {}).RustSDK = "RustSDK";
  o.JSSDK = "JSSDK";
  o.Memory = "memory";
  o.LocalStorage = "LocalStorage";
  o.IndexDB = "IndexDB";
  o.Disk = "disk";
  o.None = "none";
  let u = new aceLoggerCoreManager.LoggerManager({
    flushDelay: 500
  });
  function g(e, t, i) {
    let n;
    if (!t) {
      return u.logger.startSpan(e, i);
    }
    if (t.spanId && t.traceId) {
      n = {
        spanId: t.spanId,
        traceId: t.traceId,
        traceFlags: aceLoggerCoreManager.TraceFlags.NONE
      };
    }
    let r = Object.assign({
      module: t.module,
      userSource: t.userSource || l.Other
    }, t.attributes);
    if (t.app) {
      r.app = t.app;
      r.appVersion = t.appVersion;
    }
    return u.logger.startSpan(e, Object.assign(Object.assign({}, i), {
      parent: n,
      attributes: r,
      startTime: t.userStartTime || aceLoggerCoreManager.defaultLoggerManager.timer.now()
    }));
  }
  u.logger.setAttributes({
    lib: "lark-widgets"
  });
  var M = u.logger;
  require.d(exports, {
    startSpan: function () {
      return g;
    },
    logger: function () {
      return M;
    }
  });
}