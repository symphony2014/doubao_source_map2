// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Rr' to 'startSpan'
// - Renamed export 'ZP' to 'defaultLogger'
// - Renamed export 'Lk' to 'parseUrlInfo'
// - Renamed export 'Qy' to 'mergeSpanContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 944519
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var i;
  var a;
  var c;
  var u;
  var aceLoggerCoreManager = require("ace-logger-core-manager") /*id: 711568*/;
  (r = a ||= {}).Search = "search";
  r.Messenger = "messenger";
  r.MessengerCreateGroup = "messenger.create-group";
  r.MessengerFeed = "messenger.feed";
  r.MessengerPinnedChats = "messenger.pinned-chats";
  r.MessengerChat = "messenger.chat";
  r.MessengerChatMessage = "messenger.chat-message";
  r.MessengerNameCard = "messenger.name-card";
  r.Video = "video";
  r.VC = "vc";
  r.CCM = "ccm";
  r.CCMDoc = "ccm.doc";
  r.CCMSlider = "ccm.slider";
  r.CCMSheet = "ccm.sheet";
  r.Mail = "mail";
  r.Calendar = "calendar";
  r.Contacts = "contacts";
  r.ContactsShareLink = "contacts.share-link";
  r.ContactsShareQRCode = "contacts.share-qrcode";
  r.ContactsSearch = "contacts.search";
  r.Ai = "ai";
  r.Other = "other";
  (o = c ||= {}).WechatQRCode = "wechat.qrcode";
  o.WechatLink = "wechat.link";
  o.LarkQRCode = "lark.qrcode";
  o.LarkLink = "lark.link";
  o.Other = "other";
  (i = u ||= {}).RustSDK = "RustSDK";
  i.JSSDK = "JSSDK";
  i.Memory = "memory";
  i.LocalStorage = "LocalStorage";
  i.IndexDB = "IndexDB";
  i.Disk = "disk";
  i.None = "none";
  let l = new aceLoggerCoreManager.LoggerManager({
    flushDelay: 500
  });
  function f(e, t, n) {
    let r;
    if (!t) {
      return l.logger.startSpan(e, n);
    }
    if (t.spanId && t.traceId) {
      r = {
        spanId: t.spanId,
        traceId: t.traceId,
        traceFlags: aceLoggerCoreManager.TraceFlags.NONE
      };
    }
    let o = Object.assign({
      module: t.module,
      userSource: t.userSource || c.Other
    }, t.attributes);
    if (t.app) {
      o.app = t.app;
      o.appVersion = t.appVersion;
    }
    return l.logger.startSpan(e, Object.assign(Object.assign({}, n), {
      parent: r,
      attributes: o,
      startTime: t.userStartTime || aceLoggerCoreManager.defaultLoggerManager.timer.now()
    }));
  }
  function d(e, t, n) {
    if (!t) {
      return Object.assign({
        traceId: e.context.traceId,
        spanId: e.context.spanId,
        module: a.Other
      }, n);
    }
    let r = Object.assign(Object.assign(Object.assign({}, t), n), {
      traceId: e.context.traceId,
      spanId: e.context.spanId,
      module: t && t.module || a.Other
    });
    if (t.attributes && n && n.attributes) {
      r.attributes = Object.assign(Object.assign({}, t.attributes), n.attributes);
    }
    return r;
  }
  function m(e) {
    if (!e) {
      return {
        protocol: "unknown",
        domain: "unknown"
      };
    }
    let t = e.match(/^(https?):\/\/([^/]+)/);
    return {
      protocol: t && t[1] || "file",
      domain: t && t[2] || "unknown"
    };
  }
  l.logger.setAttributes({
    lib: "lark-widgets"
  });
  var _ = l.logger;
  require.d(exports, {
    startSpan: function () {
      return f;
    },
    defaultLogger: function () {
      return _;
    },
    parseUrlInfo: function () {
      return m;
    },
    mergeSpanContext: function () {
      return d;
    }
  });
}