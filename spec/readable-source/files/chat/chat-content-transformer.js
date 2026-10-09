// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'transformChatContent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 590923
         */
module.exports = function (module, exports, require) {
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var contentTypeEnums = require("content-type-enums") /*id: 153202*/;
  var chatBotStateConstants = require("chat-bot-state-constants") /*id: 924042*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var chatContentTypesMap = require("chat-content-types-map") /*id: 408630*/;
  let s = (e, t) => {
    let n = {};
    if (t != null) {
      t.forEach(e => {
        n[e.identifier] = e.fileName;
      });
    }
    return (e == null ? undefined : e.map(e => {
      var s;
      var c;
      var h;
      var g;
      var p;
      var v;
      var S;
      var P;
      var C;
      var E;
      var T;
      var R;
      var I;
      var A;
      var D;
      var L;
      var O;
      var G;
      var j;
      var H;
      var K;
      var Q;
      var Y;
      var ee;
      var en;
      var ei;
      var er;
      var ea;
      var es;
      if (e.entity_type === contentTypeEnums.resourceType.Image) {
        let t = getFileExtension.getFileExtension(((R = e.entity_content) === null || R === undefined ? undefined : R.image?.key) || "");
        return {
          type: chatContentTypesMap.chatContentTypes.vlm_image,
          identifier: e.identifier,
          name: n[e.identifier] || `image.${t}`,
          key: (I = e.entity_content) === null || I === undefined ? undefined : I.image?.key,
          url: (D = e.entity_content) === null || D === undefined ? undefined : (A = D.image) === null || A === undefined ? undefined : A.image_ori?.url,
          file_review_state: e.file_name_state ?? chatBotStateConstants.reviewStates.ReviewState_Processing,
          file_parse_state: e.file_parse_state ?? chatBotStateConstants.parseStates.ParseState_Processing,
          option: {
            width: (O = e.entity_content) === null || O === undefined ? undefined : (L = O.image) === null || L === undefined ? undefined : L.image_ori?.width,
            height: (j = e.entity_content) === null || j === undefined ? undefined : (G = j.image) === null || G === undefined ? undefined : G.image_ori?.height
          }
        };
      }
      if (e.entity_type === contentTypeEnums.resourceType.Directory) {
        return {
          type: chatContentTypesMap.chatContentTypes.directory,
          identifier: e.identifier,
          name: e.entity_content.directory?.name,
          key: e.identifier,
          url: "",
          file_review_state: e.file_name_state ?? chatBotStateConstants.reviewStates.ReviewState_Processing,
          file_parse_state: e.file_parse_state ?? chatBotStateConstants.parseStates.ParseState_Success
        };
      } else if ([contentTypeEnums.mediaType.Audio, contentTypeEnums.mediaType.Video].includes((s = e.entity_content) === null || s === undefined ? undefined : s.file?.file_type)) {
        return {
          type: contentTypeEnums.mediaType.Audio === ((H = e.entity_content) === null || H === undefined ? undefined : H.file?.file_type) ? "audio" : "video",
          identifier: e.identifier,
          name: (K = e.entity_content) === null || K === undefined ? undefined : K.file?.file_name,
          key: (Q = e.entity_content) === null || Q === undefined ? undefined : Q.file?.key,
          md5: (Y = e.entity_content) === null || Y === undefined ? undefined : Y.file?.md5,
          url: ((ee = e.entity_content) === null || ee === undefined ? undefined : ee.file?.url) || ((er = e.entity_content) === null || er === undefined ? undefined : (ei = er.file) === null || ei === undefined ? undefined : (en = ei.image) === null || en === undefined ? undefined : en.image_ori?.url),
          size: isNullishCheck.isNil((ea = e.entity_content) === null || ea === undefined ? undefined : ea.file?.size) ? 0 : Number((es = e.entity_content) === null || es === undefined ? undefined : es.file?.size),
          file_review_state: chatBotStateConstants.reviewStates.ReviewState_Access,
          file_parse_state: chatBotStateConstants.parseStates.ParseState_Success
        };
      } else {
        return {
          type: chatContentTypesMap.chatContentTypes[((c = e.entity_content) === null || c === undefined ? undefined : c.file?.file_type) || "attachment"],
          identifier: e.identifier,
          name: (h = e.entity_content) === null || h === undefined ? undefined : h.file?.file_name,
          key: (g = e.entity_content) === null || g === undefined ? undefined : g.file?.key,
          md5: (p = e.entity_content) === null || p === undefined ? undefined : p.file?.md5,
          url: ((v = e.entity_content) === null || v === undefined ? undefined : v.file?.url) || ((C = e.entity_content) === null || C === undefined ? undefined : (P = C.file) === null || P === undefined ? undefined : (S = P.image) === null || S === undefined ? undefined : S.image_ori?.url),
          size: isNullishCheck.isNil((E = e.entity_content) === null || E === undefined ? undefined : E.file?.size) ? 0 : Number((T = e.entity_content) === null || T === undefined ? undefined : T.file?.size),
          file_review_state: e.file_name_state ?? chatBotStateConstants.reviewStates.ReviewState_Processing,
          file_parse_state: e.file_parse_state ?? chatBotStateConstants.parseStates.ParseState_Processing
        };
      }
    })) || [];
  };
  require.d(exports, {
    transformChatContent: function () {
      return s;
    }
  });
}