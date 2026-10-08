// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'mj' to 'getSecureUrl'
// - Renamed export 'wK' to 'LinkScenes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 644273
         */
module.exports = function (module, exports, require) {
  (n = o ||= {}).MESSENGER = "messager";
  n.CCM = "ccm";
  n.CALENDAR = "calendar";
  n.EMAIL = "email";
  n.OPENPLATFORM = "openPlatform";
  n.VC = "vc";
  (i = a ||= {}).MESSENGER_CHAT = "messenger_chat";
  i.MESSENGER_CHAT_SHARED_LINK_CARD = "messenger_chat_shared_link_card";
  i.MESSENGER_SEARCH_LINK = "messenger_search_link";
  i.MESSENGER_INCHAT_SEARCH_LINK = "messenger_inchat_search_link";
  i.MESSENGER_PROFILE = "messenger_profile";
  i.MESSENGER_SITE = "messenger_site";
  i.MESSENGER_FAVORITE = "messenger_favorite";
  i.MESSENGER_PIN = "messenger_pin";
  i.MESSENGER_FILE = "messenger_file";
  i.EVENT_DESCRIPTION = "event_description";
  i.EVENT_ATTACHMENT_PREVIEW = "event_attachment_preview";
  i.EMAIL_BODY = "email_body";
  i.EMAIL_ATTACHMENT_PREVIEW = "email_attachment_preview";
  i.CCM_DOCS = "ccm_docs";
  i.CCM_SHEET = "ccm_sheet";
  i.CCM_SLIDES = "ccm_slides";
  i.CCM_BITABLE = "ccm_bitable";
  i.CCM_MINDNOTE = "ccm_mindnote";
  i.CCM_DRIVE = "ccm_drive";
  i.DRIVESDK_CREATION = "drivesdk_creation";
  i.DOCS_SDK_COMMENT = "docs_sdk_comment";
  i.BITABLE_SDK_APPBUILDER = "bitable_sdk_appbuilder";
  i.MESSENGER_GROUP_ANNOUNCEMENT = "messenger_group_announcement";
  i.OPENDOC_CONFERENCE_RECORDS = "opendoc_conference_records";
  i.OP_GADGET = "op_gadget";
  i.OP_MESSAGE_CARD = "op_message_card";
  i.OP_H5 = "op_H5";
  i.CCM_DEFAULT = "ccm_default";
  var n;
  var i;
  var o;
  var a;
  var s = {
    enable: true,
    whiteList: [],
    baseUrl: "",
    interceptors: []
  };
  function c(e, t = {}) {
    return function (e, t = {}) {
      var r;
      var n;
      var i = (s.interceptors || []).reduce(function (t, r) {
        return t || r(e);
      }, "");
      if (i) {
        return {
          secure: true,
          targetUrl: i
        };
      }
      n = e;
      var a = !s.enable || typeof n == "string" && !!n && (!!/^(mailto|tel):/.test(n) || (/^(?:(\w+)\:)?\/\//.test(n) || (n = "http://" + n), r = function (e) {
        try {
          return new URL(e).hostname;
        } catch (r) {
          var t = /^((\w+):)?(\/\/((\w+)?(:(\w+))?@)?([^\/\?:]+)(:(\d+))?)?(\/?([^\/\?#][^\?#]*)?)?(\?([^#]+))?(#(\w*))?/.exec(e);
          return t && t[8] || "";
        }
      }(n), s.whiteList.some(function (e) {
        if (e instanceof RegExp) {
          return e.test(r);
        } else if (typeof e == "string") {
          return new RegExp(e).test(r);
        } else {
          return typeof e != "function" || e(r);
        }
      })));
      var c = a ? e : function (e, t) {
        var r = t.baseUrl || s.baseUrl;
        if (!r) {
          return e;
        }
        var n = t.scene || o.CCM;
        var i = function (e) {
          if (e.lang) {
            return e.lang;
          }
          try {
            return navigator.language || "";
          } catch (e) {
            return "";
          }
        }(t);
        return r + "?target=" + encodeURIComponent(e) + "&scene=" + n + "&logParams=" + encodeURIComponent(JSON.stringify(t.logParams || {})) + "&lang=" + i;
      }(e, t);
      return {
        secure: a,
        targetUrl: c
      };
    }(e, t).targetUrl;
  }
  require.d(exports, {
    getSecureUrl: function () {
      return c;
    },
    LinkScenes: function () {
      return a;
    }
  });
}