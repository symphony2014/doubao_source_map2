// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A1' to 'getMessageText'
// - Renamed export 'Sh' to 'getLyricsText'
// - Renamed export 'TH' to 'extractSendLinks'
// - Renamed export 'UD' to 'formatMessage'
// - Renamed export 'WD' to 'validateMessage'
// - Renamed export 'cT' to 'parseContentBlocks'
// - Renamed export 'jp' to 'getSearchType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 976464
         */
module.exports = function (module, exports, require) {
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var localResourceCheck = require("local-resource-check") /*id: 392448*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let d = e => {
    if (!e) {
      return;
    }
    let t = messageContentTypeAndStatusChecker.FFC(e);
    if (localResourceCheck.isLocal(e)) {
      return "";
    } else if (t) {
      return "";
    } else {
      return undefined;
    }
  };
  let u = e => {
    if (messageContentTypeAndStatusChecker.G7Q(e) || messageContentTypeAndStatusChecker.lpb(e) || messageContentTypeAndStatusChecker.EkH(e)) {
      if (messageContentTypeAndStatusChecker.fjb(e)) {
        return p(e);
      } else if (e == null) {
        return undefined;
      } else {
        return e.content_obj?.text;
      }
    }
  };
  let p = e => {
    var i;
    var r;
    var o;
    if (!e || !messageContentTypeAndStatusChecker.fjb(e)) {
      return;
    }
    let s = "";
    if (Array.isArray(e.content_obj)) {
      e.content_obj.filter(e => (e == null ? undefined : e.block_type) === chatConstantsEnum.messageContentType.BLOCK_TEXT).forEach(e => {
        let t = safeJsonUtils.safeParse(e.content, {});
        if (t.text) {
          s += `${t.text}
`;
        }
      });
    } else if (Array.isArray((e == null ? undefined : e.content_blocks_tree?.children) || {})) {
      if (e != null && (o = e.content_blocks_tree) !== null && o !== undefined && (r = o.children) !== null && r !== undefined && (i = r.filter(e => (e == null ? undefined : e.block_type) === chatConstantsEnum.messageContentType.BLOCK_TEXT)) !== null && i !== undefined) {
        i.forEach(e => {
          let t = (e == null ? undefined : e.content_obj) || {};
          if (t == null ? undefined : t.text) {
            s += `${t.text}
`;
          }
        });
      }
    }
    return s || (e == null ? undefined : e.content_obj?.text);
  };
  let h = (e, t, n) => {
    if (!e) {
      return;
    }
    let l = u(e);
    if (isStringTypeCheck.isString(l)) {
      return l;
    }
    if (!messageContentTypeAndStatusChecker.FFC(e) && !messageContentTypeAndStatusChecker.XD1(e)) {
      if (t) {
        if (isEmptyUtil.isEmpty(e == null ? undefined : e.content_obj)) {
          return `${n} message.content\u{FF1A}${objectPathGetDefault.getObjectPathDefault(e, "content")}`;
        } else {
          return `${n} message.content\u{FF1A}

\`\`\`json
${JSON.stringify(e == null ? undefined : e.content_obj, undefined, 2)}
\`\`\`

`;
        }
      } else {
        return n;
      }
    }
  };
  let m = e => {
    let t = e == null ? undefined : e.match(/\[(\S*?)\](?=\(coco:\/\/sendMessage)/g);
    if (t == null ? undefined : t.length) {
      return t.map(e => e.split(/[\[\]]/).join(""));
    } else {
      return [];
    }
  };
  let f = e => {
    return messageContentTypeAndStatusChecker.isLyricsToSongLyric(e) && (e == null ? undefined : e.content_obj?.text) || "";
  };
  let g = e => messageContentTypeAndStatusChecker.q8s(e) ? "simple_search" : messageContentTypeAndStatusChecker.lcM(e) ? "deep_search" : messageContentTypeAndStatusChecker.RxW(e) ? "complex_search" : "ai_search";
  require.d(exports, {
    getMessageText: function () {
      return u;
    },
    getLyricsText: function () {
      return f;
    },
    extractSendLinks: function () {
      return m;
    },
    formatMessage: function () {
      return h;
    },
    validateMessage: function () {
      return d;
    },
    parseContentBlocks: function () {
      return p;
    },
    getSearchType: function () {
      return g;
    }
  });
}