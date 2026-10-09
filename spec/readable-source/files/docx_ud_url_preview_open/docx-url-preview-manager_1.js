// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ic' to 'getUserTimeFormat'
// - Renamed export 'wv' to 'UrlPreviewLink'
// - Renamed export 'S1' to 'initPreviewConfig'
// - Renamed export 'd1' to 'processPreviewEntity'
// - Renamed export 'Xn' to 'urlPreviewActions'
// - Renamed export 'nU' to 'getPreviewWithCache'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_ud_url_preview_open.ff701428.js
         * chunkId: 31314
         * moduleId: 829826
         */
module.exports = function (module, exports, require) {
  let n;
  let r;
  var o;
  var s;
  var l;
  var a;
  var c;
  var u = {};
  var getTempPreviewRequest = require("get-temp-preview-request") /*id: 114730*/;
  var urlPreviewResponseSchema_1 = require("url-preview-response-schema_1") /*id: 211365*/;
  var urlPreviewBatchRequestSchema = require("url-preview-batch-request-schema") /*id: 619049*/;
  var urlPreviewBatchResponseSchema = require("url-preview-batch-response-schema") /*id: 115270*/;
  var urlPreviewRequest = require("url-preview-request") /*id: 545572*/;
  var urlPreviewResponseSchema = require("url-preview-response-schema") /*id: 586174*/;
  var urlPreviewNotifyCreateRequest = require("url-preview-notify-create-request") /*id: 754159*/;
  var urlPreviewCreateResponse = require("url-preview-create-response") /*id: 265786*/;
  var docxLarkUrlPreviewUtils = require("docx-lark-url-preview-utils") /*id: 146261*/;
  var cardPreviewConstants = require("card-preview-constants") /*id: 834568*/;
  var pullUrlPreviewTemplatesRequestProtobuf = require("pull-url-preview-templates-request-protobuf") /*id: 70711*/;
  var urlPreviewProtobufCodec = require("url-preview-protobuf-codec") /*id: 556562*/;
  let j = async (e, t) => {
    let n = [];
    [...new Set(Object.keys(e))].forEach(t => {
      let r = e[t];
      if (!r.previewBody?.states) {
        return;
      }
      let {
        states: o
      } = r.previewBody;
      Object.keys(o).forEach(e => {
        let t = o[e];
        if (t.templateId) {
          n.push(t.templateId);
        }
      });
    });
    let r = [...new Set(n)];
    if (r.length) {
      return (await t({
        cmd: 1320,
        requestCodec: pullUrlPreviewTemplatesRequestProtobuf.PullURLPreviewTemplatesRequest,
        responseCodec: urlPreviewProtobufCodec.urlPreviewCodec,
        payload: {
          templateIds: r
        }
      })).data?.templates;
    }
  };
  var errorConstantsCodes = require("error-constants-codes") /*id: 850732*/;
  var toastNotificationManagerWrapper = require("toast-notification-manager-wrapper") /*id: 314333*/;
  let w = "lark://client/core/copy?value=";
  async function T({
    params: e
  }) {
    let l;
    let {
      actionId: a,
      action: c,
      switchState: u,
      actionDepth: g = 1,
      copyUrlText: M
    } = e;
    if (!a || g > 10) {
      return l;
    }
    switch (c.method) {
      case errorConstantsCodes.D1o.OPEN_URL:
        let d = c.openUrlV2?.openUrl;
        let I = (d == null ? undefined : d.web) || (d == null ? undefined : d.url);
        if (I == null ? undefined : I.startsWith(w)) {
          let e = I.substring(w.length);
          docxLarkUrlPreviewUtils.copyToClipboard(decodeURIComponent(e));
          toastNotificationManagerWrapper.toastManagerWrapper.success(M);
          return;
        }
        window.open(I, "_blank");
        break;
      case errorConstantsCodes.D1o.LARK_COMMAND:
        break;
      case errorConstantsCodes.D1o.SHOW_TOAST:
        ({
          [errorConstantsCodes.G$$.success]: toastNotificationManagerWrapper.toastManagerWrapper.success,
          [errorConstantsCodes.G$$.info]: toastNotificationManagerWrapper.toastManagerWrapper.info,
          [errorConstantsCodes.G$$.error]: toastNotificationManagerWrapper.toastManagerWrapper.error,
          [errorConstantsCodes.G$$.warning]: toastNotificationManagerWrapper.toastManagerWrapper.warning
        })[c.showToast?.type || errorConstantsCodes.G$$.info](c.showToast?.content || "", c.showToast?.duration || 3000);
        break;
      case errorConstantsCodes.D1o.SWITCH_STATE:
        if (c.switchState?.nextStateId) {
          u(c.switchState?.nextStateId);
        }
    }
    return l;
  }
  var stringDeburrUtil_1 = require("string-deburr-util_1") /*id: 505593*/;
  let z = {
    [errorConstantsCodes.ptQ.size_level]: "sizeLevel",
    [errorConstantsCodes.ptQ.theme_color]: "textColorV2",
    [errorConstantsCodes.ptQ.background_type]: "backgroundColor.type",
    [errorConstantsCodes.ptQ.background_linear_deg]: "backgroundColor.linear.deg",
    [errorConstantsCodes.ptQ.background_linear_theme_colors]: "backgroundColor.linear.colorsV2",
    [errorConstantsCodes.ptQ.width]: "width",
    [errorConstantsCodes.ptQ.height]: "height",
    [errorConstantsCodes.ptQ.max_width]: "maxWidth",
    [errorConstantsCodes.ptQ.max_height]: "maxHeight",
    [errorConstantsCodes.ptQ.min_width]: "minWidth",
    [errorConstantsCodes.ptQ.min_height]: "minHeight",
    [errorConstantsCodes.ptQ.grow_weight]: "growHeight",
    [errorConstantsCodes.ptQ.shrink_weight]: "shrinkWeight",
    [errorConstantsCodes.ptQ.font_level]: "fontLevel",
    [errorConstantsCodes.ptQ.border_width]: "border.width",
    [errorConstantsCodes.ptQ.border_corner_radius]: "border.cornerRadius",
    [errorConstantsCodes.ptQ.border_theme_color]: "border.colorV2",
    [errorConstantsCodes.ptQ.aspect_ratio]: "aspectRatio"
  };
  let O = {
    [errorConstantsCodes.ptQ.size_level]: "i32",
    [errorConstantsCodes.ptQ.theme_color]: "themeColor",
    [errorConstantsCodes.ptQ.background_type]: "i32",
    [errorConstantsCodes.ptQ.background_linear_deg]: "i32",
    [errorConstantsCodes.ptQ.background_linear_theme_colors]: "themeColors.colors",
    [errorConstantsCodes.ptQ.width]: "layoutValue",
    [errorConstantsCodes.ptQ.height]: "layoutValue",
    [errorConstantsCodes.ptQ.max_width]: "layoutValue",
    [errorConstantsCodes.ptQ.max_height]: "layoutValue",
    [errorConstantsCodes.ptQ.min_width]: "layoutValue",
    [errorConstantsCodes.ptQ.min_height]: "layoutValue",
    [errorConstantsCodes.ptQ.grow_weight]: "i32",
    [errorConstantsCodes.ptQ.shrink_weight]: "i32",
    [errorConstantsCodes.ptQ.font_level]: "fontLevel",
    [errorConstantsCodes.ptQ.border_width]: "f",
    [errorConstantsCodes.ptQ.border_corner_radius]: "f",
    [errorConstantsCodes.ptQ.border_theme_color]: "themeColor",
    [errorConstantsCodes.ptQ.aspect_ratio]: "i32"
  };
  let b = {
    [errorConstantsCodes.Cdw.LINEAR_LAYOUT]: {
      [errorConstantsCodes.ptQ.orientation]: "orientation",
      [errorConstantsCodes.ptQ.spacing]: "spacing",
      [errorConstantsCodes.ptQ.wrap_width]: "wrapWidth",
      [errorConstantsCodes.ptQ.padding]: "padding",
      [errorConstantsCodes.ptQ.main_axis_justify]: "mainAxisJustify",
      [errorConstantsCodes.ptQ.cross_axis_align]: "crossAxisAlign",
      [errorConstantsCodes.ptQ.side_padding]: "sidePadding"
    },
    [errorConstantsCodes.Cdw.HEADER]: {
      [errorConstantsCodes.ptQ.icon]: "iconKey",
      [errorConstantsCodes.ptQ.title]: "title",
      [errorConstantsCodes.ptQ.lark_tag]: "larkTag",
      [errorConstantsCodes.ptQ.child_component_id]: "childComponentId",
      [errorConstantsCodes.ptQ.show_copy_Link_Btn]: "isNeedCopyLink",
      [errorConstantsCodes.ptQ.show_close_Btn]: "isNeedClose",
      [errorConstantsCodes.ptQ.theme]: "theme",
      [errorConstantsCodes.ptQ.type]: "type",
      [errorConstantsCodes.ptQ.tagColor]: "tagColor",
      [errorConstantsCodes.ptQ.tagTextColor]: "tagTextColor",
      [errorConstantsCodes.ptQ.header_tag]: "headerTag",
      [errorConstantsCodes.ptQ.favicon_url]: "faviconURL",
      [errorConstantsCodes.ptQ.icon_color]: "iconColor",
      [errorConstantsCodes.ptQ.ud_icon_key]: "udIcon.key",
      [errorConstantsCodes.ptQ.ud_icon_theme_color]: "udIcon.color"
    },
    [errorConstantsCodes.Cdw.RICHTEXT]: {},
    [errorConstantsCodes.Cdw.IMAGE]: {
      [errorConstantsCodes.ptQ.image]: "image",
      [errorConstantsCodes.ptQ.alt]: "alt",
      [errorConstantsCodes.ptQ.ud_icon_key]: "udIcon.key",
      [errorConstantsCodes.ptQ.ud_icon_theme_color]: "udIcon.color"
    },
    [errorConstantsCodes.Cdw.CHATTERS_PREVIEW]: {
      [errorConstantsCodes.ptQ.theme]: "theme",
      [errorConstantsCodes.ptQ.chatters_count]: "chattersCount",
      [errorConstantsCodes.ptQ.chatters_infos]: "chatterInfos",
      [errorConstantsCodes.ptQ.max_show_count]: "maxShowCount"
    },
    [errorConstantsCodes.Cdw.BUTTON]: {
      [errorConstantsCodes.ptQ.icon]: "icon",
      [errorConstantsCodes.ptQ.text]: "text",
      [errorConstantsCodes.ptQ.direction]: "direction",
      [errorConstantsCodes.ptQ.action_id]: "actionId",
      [errorConstantsCodes.ptQ.is_disable]: "isDisable",
      [errorConstantsCodes.ptQ.ud_icon_key]: "udIcon.key",
      [errorConstantsCodes.ptQ.ud_icon_theme_color]: "udIcon.color"
    },
    [errorConstantsCodes.Cdw.ICON_BUTTON]: {
      [errorConstantsCodes.ptQ.icon]: "icon",
      [errorConstantsCodes.ptQ.action_id]: "actionId",
      [errorConstantsCodes.ptQ.is_disable]: "isDisable",
      [errorConstantsCodes.ptQ.alt]: "alt",
      [errorConstantsCodes.ptQ.ud_icon_key]: "udIcon.key",
      [errorConstantsCodes.ptQ.ud_icon_theme_color]: "udIcon.color"
    },
    [errorConstantsCodes.Cdw.TEXT_BUTTON]: {
      [errorConstantsCodes.ptQ.text]: "text",
      [errorConstantsCodes.ptQ.action_id]: "actionId",
      [errorConstantsCodes.ptQ.is_disable]: "isDisable"
    },
    [errorConstantsCodes.Cdw.TIME]: {
      [errorConstantsCodes.ptQ.start_time_stamp]: "startTimeStamp",
      [errorConstantsCodes.ptQ.is_countdown]: "isCountdown",
      [errorConstantsCodes.ptQ.ntp_action_id]: "ntpActionId",
      [errorConstantsCodes.ptQ.is_end]: "isEnd",
      [errorConstantsCodes.ptQ.end_time_stamp]: "endTimeStamp"
    },
    [errorConstantsCodes.Cdw.TEXT]: {
      [errorConstantsCodes.ptQ.text]: "text",
      [errorConstantsCodes.ptQ.number_of_lines]: "numberOfLines"
    },
    [errorConstantsCodes.Cdw.TAG_LIST]: {
      [errorConstantsCodes.ptQ.tags]: "tags"
    },
    [errorConstantsCodes.Cdw.SPIN_BUTTON]: {
      [errorConstantsCodes.ptQ.icon]: "icon",
      [errorConstantsCodes.ptQ.items]: "items",
      [errorConstantsCodes.ptQ.selected_index]: "selectedIndex",
      [errorConstantsCodes.ptQ.direction]: "direction"
    },
    [errorConstantsCodes.Cdw.AVATAR]: {
      [errorConstantsCodes.ptQ.avatar_chatter_info]: "chatterInfo"
    },
    [errorConstantsCodes.Cdw.VIDEO]: {
      [errorConstantsCodes.ptQ.site]: "site",
      [errorConstantsCodes.ptQ.cover_image]: "coverImage",
      [errorConstantsCodes.ptQ.duration]: "duration",
      [errorConstantsCodes.ptQ.src_url]: "srcURL",
      [errorConstantsCodes.ptQ.vid]: "vid",
      [errorConstantsCodes.ptQ.iframe_url]: "iframeUrl"
    },
    [errorConstantsCodes.Cdw.CARD_CONTAINER]: {
      [errorConstantsCodes.ptQ.theme_color]: "maskColor"
    },
    [errorConstantsCodes.Cdw.DOC_IMAGE]: {
      [errorConstantsCodes.ptQ.doc_type]: "docType",
      [errorConstantsCodes.ptQ.thumbnail_url]: "thumbnailUrl",
      [errorConstantsCodes.ptQ.secret_url]: "secretUrl",
      [errorConstantsCodes.ptQ.secret_type]: "secretType",
      [errorConstantsCodes.ptQ.secret_key]: "secretKey",
      [errorConstantsCodes.ptQ.secret_nonce]: "secretNonce"
    }
  };
  let L = {
    [errorConstantsCodes.Cdw.LINEAR_LAYOUT]: {
      [errorConstantsCodes.ptQ.orientation]: "i32",
      [errorConstantsCodes.ptQ.spacing]: "f",
      [errorConstantsCodes.ptQ.wrap_width]: "f",
      [errorConstantsCodes.ptQ.padding]: "f",
      [errorConstantsCodes.ptQ.main_axis_justify]: "i32",
      [errorConstantsCodes.ptQ.cross_axis_align]: "i32",
      [errorConstantsCodes.ptQ.side_padding]: "padding"
    },
    [errorConstantsCodes.Cdw.HEADER]: {
      [errorConstantsCodes.ptQ.icon]: "imageSet",
      [errorConstantsCodes.ptQ.title]: "str",
      [errorConstantsCodes.ptQ.lark_tag]: "i32",
      [errorConstantsCodes.ptQ.child_component_id]: "str",
      [errorConstantsCodes.ptQ.show_copy_Link_Btn]: "b",
      [errorConstantsCodes.ptQ.show_close_Btn]: "b",
      [errorConstantsCodes.ptQ.theme]: "i32",
      [errorConstantsCodes.ptQ.type]: "i32",
      [errorConstantsCodes.ptQ.tagColor]: "themeColor",
      [errorConstantsCodes.ptQ.tagTextColor]: "themeColor",
      [errorConstantsCodes.ptQ.header_tag]: "str",
      [errorConstantsCodes.ptQ.favicon_url]: "str",
      [errorConstantsCodes.ptQ.icon_color]: "themeColor",
      [errorConstantsCodes.ptQ.ud_icon_key]: "str",
      [errorConstantsCodes.ptQ.ud_icon_theme_color]: "themeColor"
    },
    [errorConstantsCodes.Cdw.RICHTEXT]: {},
    [errorConstantsCodes.Cdw.IMAGE]: {
      [errorConstantsCodes.ptQ.image]: "imageSet",
      [errorConstantsCodes.ptQ.alt]: "str",
      [errorConstantsCodes.ptQ.ud_icon_key]: "str",
      [errorConstantsCodes.ptQ.ud_icon_theme_color]: "themeColor"
    },
    [errorConstantsCodes.Cdw.CHATTERS_PREVIEW]: {
      [errorConstantsCodes.ptQ.theme]: "i32",
      [errorConstantsCodes.ptQ.chatters_count]: "i32",
      [errorConstantsCodes.ptQ.chatters_infos]: "chatterInfos.chatterInfos",
      [errorConstantsCodes.ptQ.max_show_count]: "i32"
    },
    [errorConstantsCodes.Cdw.BUTTON]: {
      [errorConstantsCodes.ptQ.icon]: "imageSet",
      [errorConstantsCodes.ptQ.text]: "str",
      [errorConstantsCodes.ptQ.direction]: "i32",
      [errorConstantsCodes.ptQ.action_id]: "str",
      [errorConstantsCodes.ptQ.is_disable]: "b",
      [errorConstantsCodes.ptQ.ud_icon_key]: "str",
      [errorConstantsCodes.ptQ.ud_icon_theme_color]: "themeColor"
    },
    [errorConstantsCodes.Cdw.ICON_BUTTON]: {
      [errorConstantsCodes.ptQ.icon]: "imageSet",
      [errorConstantsCodes.ptQ.action_id]: "str",
      [errorConstantsCodes.ptQ.is_disable]: "b",
      [errorConstantsCodes.ptQ.alt]: "str",
      [errorConstantsCodes.ptQ.ud_icon_key]: "str",
      [errorConstantsCodes.ptQ.ud_icon_theme_color]: "themeColor"
    },
    [errorConstantsCodes.Cdw.TEXT_BUTTON]: {
      [errorConstantsCodes.ptQ.text]: "str",
      [errorConstantsCodes.ptQ.action_id]: "str",
      [errorConstantsCodes.ptQ.is_disable]: "b"
    },
    [errorConstantsCodes.Cdw.TIME]: {
      [errorConstantsCodes.ptQ.start_time_stamp]: "i64",
      [errorConstantsCodes.ptQ.is_countdown]: "b",
      [errorConstantsCodes.ptQ.ntp_action_id]: "str",
      [errorConstantsCodes.ptQ.is_end]: "b",
      [errorConstantsCodes.ptQ.end_time_stamp]: "i64"
    },
    [errorConstantsCodes.Cdw.TEXT]: {
      [errorConstantsCodes.ptQ.text]: "str",
      [errorConstantsCodes.ptQ.number_of_lines]: "i32"
    },
    [errorConstantsCodes.Cdw.TAG_LIST]: {
      [errorConstantsCodes.ptQ.tags]: "stringList.stringList"
    },
    [errorConstantsCodes.Cdw.SPIN_BUTTON]: {
      [errorConstantsCodes.ptQ.icon]: "imageSet",
      [errorConstantsCodes.ptQ.items]: "items.items",
      [errorConstantsCodes.ptQ.selected_index]: "i64",
      [errorConstantsCodes.ptQ.direction]: "i32"
    },
    [errorConstantsCodes.Cdw.AVATAR]: {
      [errorConstantsCodes.ptQ.avatar_chatter_info]: "chatterInfo"
    },
    [errorConstantsCodes.Cdw.VIDEO]: {
      [errorConstantsCodes.ptQ.site]: "i32",
      [errorConstantsCodes.ptQ.cover_image]: "imageSet",
      [errorConstantsCodes.ptQ.duration]: "i64",
      [errorConstantsCodes.ptQ.src_url]: "str",
      [errorConstantsCodes.ptQ.vid]: "str",
      [errorConstantsCodes.ptQ.iframe_url]: "str"
    },
    [errorConstantsCodes.Cdw.CARD_CONTAINER]: {
      [errorConstantsCodes.ptQ.theme_color]: "themeColor"
    },
    [errorConstantsCodes.Cdw.DOC_IMAGE]: {
      [errorConstantsCodes.ptQ.doc_type]: "i32",
      [errorConstantsCodes.ptQ.thumbnail_url]: "str",
      [errorConstantsCodes.ptQ.secret_url]: "str",
      [errorConstantsCodes.ptQ.secret_type]: "i32",
      [errorConstantsCodes.ptQ.secret_key]: "str",
      [errorConstantsCodes.ptQ.secret_nonce]: "str"
    }
  };
  let x = Object.keys(errorConstantsCodes.Cdw).reduce((e, t) => {
    let i = errorConstantsCodes.Cdw[t];
    let n = stringDeburrUtil_1.deburrString(t);
    e[i] = n;
    return e;
  }, {});
  let k = Object.assign({}, z);
  let _ = Object.assign({}, O);
  let S = Object.assign({}, b);
  let P = Object.assign(Object.assign({}, L), {
    [errorConstantsCodes.Cdw.IMAGE]: Object.assign(Object.assign({}, L[errorConstantsCodes.Cdw.IMAGE]), {
      [errorConstantsCodes.ptQ.image]: "imageSetV2"
    })
  });
  var serviceBlockConstants = require("service-block-constants") /*id: 141454*/;
  var serviceBlockLocaleUtils = require("service-block-locale-utils") /*id: 913121*/;
  var udPreviewConfigManager = require("ud-preview-config-manager") /*id: 266905*/;
  function Z(e) {
    if (e instanceof Uint8Array) {
      return e;
    }
    let t = window.atob(e);
    let i = t.length;
    let n = new Uint8Array(i);
    for (let e = 0; e < i; e++) {
      n[e] = t.charCodeAt(e);
    }
    return n;
  }
  let R = async e => {
    let l = "";
    if (docxLarkUrlPreviewUtils.previewConfig.env === "boe") {
      l = `https://${udPreviewConfigManager.getDomain(serviceBlockLocaleUtils.serviceBlockConst.FILE)}/static-resource/v1/${e.imageKey}`;
    } else {
      let {
        domains: t,
        path: i
      } = udPreviewConfigManager.getDynamicImageCfg(e.fsUnit);
      l = `${t[0]}${i}/${e.imageKey}`;
    }
    let a = await fetch(l);
    let c = await a.arrayBuffer();
    let u = e.crypto?.cipher?.secret;
    if (!u) {
      throw Error("[Url Preview] imageSetV2 secret is not defined");
    }
    let g = await window.crypto.subtle.importKey("raw", Z(u), "AES-GCM", true, ["decrypt"]);
    let M = {
      name: "AES-GCM"
    };
    let d = e.crypto?.cipher?.nonce;
    if (d) {
      M.iv = Z(d);
    }
    let I = e.crypto?.cipher?.additionalData;
    if (I) {
      M.additionalData = Z(I);
    }
    let p = new Uint8Array(await window.crypto.subtle.decrypt(M, g, c));
    let y = function (e) {
      let t = e.slice(0, 4);
      t = new Uint8Array(t);
      let i = [];
      for (let e = 0; e < t.byteLength; e++) {
        i.push(t[e].toString(16));
      }
      return function (e) {
        switch (e) {
          case "89504E47":
            return "image/png";
          case "47494638":
            return "image/gif";
          case "FFD8FFDB":
          case "FFD8FFE0":
          case "FFD8FFE1":
          case "FFD8FFE2":
          case "FFD8FFE3":
          case "FFD8FFE8":
            return "image/jpeg";
          case "52494646":
            return "image/webp";
          default:
            return "";
        }
      }(i.join("").toUpperCase());
    }(p);
    let h = new Blob([p], {
      type: y || "image/png"
    });
    return window.URL.createObjectURL(h);
  };
  require("rich-text-element-protobuf-definition") /*id: 517377*/;
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  var urlPreviewManagerBridge = require("url-preview-manager-bridge") /*id: 249006*/;
  function H(e, t) {
    return protobufCodecHelper.createProtobufCodec("entities.RichTextElement", e).decode(t);
  }
  let W = e => {
    e.get = {
      parameters: e.parameters
    };
    e.post = {
      parameters: e.parameters
    };
    e.command = {
      parameters: e.parameters,
      cmd: e.cmd,
      packet: e.packet
    };
    e.openUrlV2 = {
      openUrl: e.openUrl
    };
    return e;
  };
  let F = e => {
    var i;
    let n = e.previewBody?.components;
    if (!e.previewBody) {
      if ((i = docxLarkUrlPreviewUtils.previewConfig.logging) !== null && i !== undefined) {
        i.error("[OPEN_URL_PREVIEW] previewBody is undefined");
      }
      return e;
    }
    if (!n) {
      return e;
    }
    let r = docxLarkUrlPreviewUtils.generateRandomId();
    let o = docxLarkUrlPreviewUtils.generateRandomId();
    n = $(n);
    if (e.previewBody.componentHangPointPairs) {
      (function (e, t) {
        var s;
        var l;
        if (!t) {
          return;
        }
        let a = [];
        for (let [s, l] of Object.entries(t)) {
          if (l.type === 502) {
            for (let [t, c] of Object.entries(l.richtext?.richtext?.elements || {})) {
              let i = e[s]?.urlPreviewHangPointMap?.[t];
              if (i && c.tag === serviceBlockConstants.YCe.A) {
                c.urlPreviewHangPoint = i;
                if (i.previewId) {
                  a.push(i.previewId);
                }
              }
            }
          }
        }
        if (a.length) {
          if ((l = (s = docxLarkUrlPreviewUtils.previewConfig.logging) === null || s === undefined ? undefined : s.info) !== null && l !== undefined) {
            l.call(s, `[OPEN_URL_PREVIEW] preload previewIds: ${a}`);
          }
          [...new Set(a)].forEach(e => {
            eA({
              payload: {
                previewIds: [e]
              },
              options: {}
            });
          });
        }
      })(e.previewBody.componentHangPointPairs, n.elements);
    }
    e.previewBody.currentStateId = r;
    let s = e.previewBody.actions;
    if (s) {
      Object.keys(s).forEach(e => {
        s[e] = W(s[e]);
      });
    }
    e.previewBody.states = {
      [r]: {
        type: errorConstantsCodes.q2D.CARD,
        cardUrl: e.previewBody.cardUrl,
        actions: s,
        templateId: o,
        template: Object.assign(Object.assign({}, n), {
          rootComponentId: n.rootIds && n.rootIds[0]
        })
      }
    };
    return e;
  };
  let V = (e, t, i, n) => {
    if (!t || !i) {
      return;
    }
    let r = e;
    let o = i.split(".").reduce((e = {}, t) => e[t], n);
    t.split(".").forEach((e, t, i) => {
      if (!r[e] && t < i.length - 1) {
        r[e] = {};
      }
      if (t === i.length - 1) {
        r[e] = o;
      } else {
        r = r[e];
      }
    });
  };
  let K = (e, t) => {
    let i = e.elements;
    if (i) {
      Object.keys(i).forEach(e => {
        let n = i[e];
        let r = t.properties && t.properties[e];
        let o = t.styles && t.styles[e];
        if (r) {
          let {
            previewPropertyData: e,
            type: t
          } = r;
          let i = x[t];
          let o = {
            [i]: n[i] || {}
          };
          if (e && t !== errorConstantsCodes.Cdw.RICHTEXT) {
            Object.keys(e).forEach(n => {
              let r = e[n];
              if (!r) {
                return;
              }
              let s = S[t][n];
              let l = P[t][n];
              V(o[i], s, l, r);
            });
            n = Object.assign(Object.assign({}, n), o);
          }
        }
        if (o) {
          let e = n.style || {};
          let {
            previewStyleData: t
          } = o;
          if (t) {
            Object.keys(t).forEach(i => {
              V(e, k[i], _[i], t[i]);
            });
            n.style = e;
          }
        }
      });
    }
    return e;
  };
  let J = (e, t) => {
    Object.keys(e).forEach(i => {
      let r = e[i];
      if (t) {
        let e = r.previewBody?.states;
        if (e) {
          Object.keys(e).forEach(i => {
            let n = e[i];
            if (n == null ? undefined : n.templateId) {
              let e = t[n.templateId];
              e &&= K(e = $(e), n);
              n.template = e;
            }
          });
        }
      }
      r = F(r);
    });
    return e;
  };
  let $ = e => {
    let t = e.elements;
    if (t) {
      Object.keys(t).forEach(e => {
        let c = t[e];
        let u = c.style;
        if (u) {
          Object.keys(u).forEach(e => {
            if (e === "backgroundColor") {
              let o = u[e]?.linear?.colorsV2;
              let s = u[e]?.linear?.colorsV3;
              if (o && s) {
                o.push(s[0]);
              }
            }
          });
        }
        if (c.type === 512 && c.avatar?.chatterInfo) {
          c.avatar.chatterInfo.avatarKey = c.avatar?.chatterInfo?.avatar?.key;
        }
        if (c.type === 502 && c.richtext?.richtext) {
          c.richtext.richtext = function (e, t) {
            var n;
            let c = {
              innerText: ""
            };
            let u = false;
            c.innerText = e.innerText;
            let g = e.elements?.dictionary;
            let M = {};
            for (let [e, i] of Object.entries(g ?? {})) {
              try {
                let [n, r] = function (e, t) {
                  var i;
                  var n;
                  var r;
                  var o;
                  let s = {};
                  let l = {
                    tag: serviceBlockConstants.YCe.UNKNOWN,
                    property: s
                  };
                  let a = false;
                  let c = e.tag;
                  l.tag = c;
                  l.style = e.style;
                  l.wideStyle = e.style;
                  l.childIds = e.childIds;
                  l.styleKeys = e.styleKeys;
                  if (typeof e.property == "string") {
                    e.property = Z(e.property);
                  }
                  if (typeof e.property == "object" && !Array.isArray(e.property)) {
                    e.property = new Uint8Array(Array.from({
                      length: Math.max(...Object.keys(o = e.property).map(Number)) + 1
                    }, (e, t) => o[t] || 0));
                  }
                  switch (c) {
                    case serviceBlockConstants.YCe.TEXT:
                      s.text = H("TextProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.IMG:
                      break;
                    case serviceBlockConstants.YCe.P:
                      s.paragraph = H("ParagraphProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.FIGURE:
                      s.figure = H("FigureProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.AT:
                      s.at = H("AtProperty", e.property);
                      s.at.isOuter = t == null ? undefined : t.includes(s.at.userId);
                      break;
                    case serviceBlockConstants.YCe.A:
                      s.anchor = H("AnchorProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.B:
                      s.bold = H("BoldProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.I:
                      s.italic = H("ItalicProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.U:
                      s.underline = H("UnderlineProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.EMOTION:
                      let u = H("EmotionProperty", e.property);
                      s.emotion = u;
                      break;
                    case serviceBlockConstants.YCe.BUTTON:
                      let g = H("ButtonProperty", e.property);
                      let M = {
                        actionId: g.actionId,
                        disable: g.disable,
                        active: g.active,
                        mode: g.mode
                      };
                      if ((i = g.confirm) === null || i === undefined ? undefined : i.hasOwnProperty("title")) {
                        M.confirm = g.confirm;
                      } else {
                        M.confirm = {
                          title: "",
                          text: "",
                          confirm: "",
                          dismiss: "",
                          titleI18nKey: "",
                          textI18nKey: "",
                          confirmI18nKey: "",
                          dismissI18nKey: ""
                        };
                      }
                      if ((n = g.loading) === null || n === undefined ? undefined : n.hasOwnProperty("begin")) {
                        M.loading = g.loading;
                      } else {
                        M.loading = {
                          begin: "",
                          success: "",
                          fail: "",
                          beginI18nKey: "",
                          successI18nKey: "",
                          failI18nKey: ""
                        };
                      }
                      s.button = M;
                      break;
                    case serviceBlockConstants.YCe.SELECT:
                      let d = H("SelectProperty", e.property);
                      s.select = d;
                      break;
                    case serviceBlockConstants.YCe.PROGRESSSELECT:
                      s.progress = H("ProgressSelectOptionProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.DIV:
                      s.div = H("DivProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.TEXTABLEAREA:
                      s.textableArea = H("TextableAreaProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.TIME:
                      s.time = H("TimeProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.LINK:
                      s.link = H("LinkProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.MEDIA:
                    case serviceBlockConstants.YCe.SELECTMENU:
                    case serviceBlockConstants.YCe.OVERFLOWMENU:
                    case serviceBlockConstants.YCe.DATEPICKER:
                      break;
                    case serviceBlockConstants.YCe.DOCS:
                      s.docs = {};
                      break;
                    case serviceBlockConstants.YCe.H1:
                      s.h1 = {};
                      break;
                    case serviceBlockConstants.YCe.H2:
                      s.h2 = {};
                      break;
                    case serviceBlockConstants.YCe.H3:
                      s.h3 = {};
                      break;
                    case serviceBlockConstants.YCe.H4:
                      s.h4 = {};
                      break;
                    case serviceBlockConstants.YCe.H5:
                      s.h5 = {};
                      break;
                    case serviceBlockConstants.YCe.H6:
                      s.h6 = {};
                      break;
                    case serviceBlockConstants.YCe.UL:
                      s.ul = H("ULProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.OL:
                      s.ol = H("OLProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.LI:
                      s.li = {};
                      break;
                    case serviceBlockConstants.YCe.QUOTE:
                      s.quote = {};
                      break;
                    case serviceBlockConstants.YCe.CODE:
                      s.code = {};
                      break;
                    case serviceBlockConstants.YCe.CODE_BLOCK:
                      break;
                    case serviceBlockConstants.YCe.CODE_BLOCK_V2:
                      s.codeBlockV2 = H("CodeBlockV2Property", e.property);
                      break;
                    case serviceBlockConstants.YCe.TABLE:
                      s.table = H("TableProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.TABLE_ROW:
                      s.tableRow = H("TableRowProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.TABLE_CELL:
                      s.tableCell = H("TableCellProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.COLUMNS:
                      s.columns = H("ColumnsProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.COLUMN:
                      s.column = H("ColumnProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.HR:
                      s.hr = {};
                      break;
                    case serviceBlockConstants.YCe.TIMEPICKER:
                    case serviceBlockConstants.YCe.DATETIMEPICKER:
                      break;
                    case serviceBlockConstants.YCe.REACTION:
                      s.reaction = H("ReactionProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.MENTION:
                      s.mention = H("MentionProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.MY_AI_TOOL:
                      s.myAiTool = H("MyAIToolProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.UNKNOWN:
                    default:
                      s.unknown = {};
                      a = true;
                      if ((r = urlPreviewManagerBridge.urlPreviewManager?.logging) !== null && r !== undefined) {
                        r.warn(`unknown richtext tag in ser2cliRichTextElement ${e.tag}`);
                      }
                  }
                  l.property = s;
                  return [l, a];
                }(i, t);
                if (u = r) {
                  break;
                }
                M[e] = n;
              } catch (t) {
                if ((n = urlPreviewManagerBridge.urlPreviewManager?.logging) !== null && n !== undefined) {
                  n.error("ser2cli element failed", e, t);
                }
              }
            }
            if (!u) {
              c.elementIds = e.elementIds ?? [];
              c.imageIds = e.imageIds ?? [];
              c.atIds = e.atIds ?? [];
              c.anchorIds = e.anchorIds ?? [];
              c.mediaIds = e.mediaIds ?? [];
              c.elements = M ?? {};
            }
            return c;
          }(c.richtext?.richtext, c.richtext?.atOutChatterIds);
        }
      });
    }
    return e;
  };
  var protocolMessageTypes = require("protocol-message-types") /*id: 478848*/;
  var larkFrontierCoreClient = require("lark-frontier-core-client") /*id: 97734*/;
  var larkWidgetLogger = require("lark-widget-logger") /*id: 360994*/;
  var webCoreConfigManager = require("web-core-config-manager") /*id: 406357*/;
  let ei = () => webCoreConfigManager.configManager.getByKey("locale").replace(/-/g, "_");
  (o = a ||= {}).START = "start";
  o.END = "end";
  let en = webCoreConfigManager.configManager.get();
  let er = (e, t) => {
    en.debug;
  };
  async function eo(e, t) {
    let i = Object.assign(Object.assign({
      locale: ei()
    }, e.headers), {
      "x-command-version": webCoreConfigManager.configManager.getLarkVersion()
    });
    let n = webCoreConfigManager.configManager.getByKey("commonRequestHeaders");
    if (n !== undefined) {
      Object.assign(i, n);
    }
    er(a.START, e);
    let r = await larkFrontierCoreClient.sendLarkApiCommand(Object.assign(Object.assign({
      url: `${webCoreConfigManager.configManager.getByKey("urls").larkAPI}/im/gateway/`,
      logger: larkWidgetLogger.logger
    }, e), {
      headers: i
    }));
    let {
      isError: o,
      error: s
    } = r;
    if (o && t) {
      throw s;
    }
    er(a.END, Object.assign(Object.assign({}, r), {
      request: e
    }));
    return r;
  }
  var pullVideoInfoRequest = require("pull-video-info-request") /*id: 953498*/;
  var pullVideoInfoResponse = require("pull-video-info-response") /*id: 917173*/;
  let ea = new class {
    getInstance(e) {
      if ((e = e || docxLarkUrlPreviewUtils.previewConfig?.cache?.cacheType) === docxLarkUrlPreviewUtils.cacheTypes.Memory) {
        return this.memCache;
      } else if (e === docxLarkUrlPreviewUtils.cacheTypes.Persistent) {
        return this.idbCache;
      } else {
        return null;
      }
    }
    isEnabled(e) {
      return (e || docxLarkUrlPreviewUtils.previewConfig?.cache?.cacheType) !== docxLarkUrlPreviewUtils.cacheTypes.None;
    }
    async getItem(e, t) {
      var i;
      if (!this.isEnabled(t == null ? undefined : t.cacheType) || !e) {
        return;
      }
      let n = await ((i = this.getInstance(t == null ? undefined : t.cacheType)) === null || i === undefined ? undefined : i.getItem(e));
      if (n == null) {
        return undefined;
      } else {
        return n.value;
      }
    }
    getExpiredAt(e) {
      let i = e === undefined ? docxLarkUrlPreviewUtils.previewConfig.cache?.expiredTime : e;
      if (i === undefined) {
        return docxLarkUrlPreviewUtils.cacheVersion;
      } else if (i > 0) {
        return i + Date.now() / 1000;
      } else {
        return docxLarkUrlPreviewUtils.cacheVersion;
      }
    }
    async setItem(e, t, i) {
      var n;
      if (this.isEnabled(i == null ? undefined : i.cacheType)) {
        if ((n = this.getInstance(i == null ? undefined : i.cacheType)) === null || n === undefined) {
          return undefined;
        } else {
          return n.setItem(e, t, this.getExpiredAt(i == null ? undefined : i.expiredTime));
        }
      }
    }
  }();
  async function ec(e, t) {
    if (!e) {
      return;
    }
    let n = `VIDEO_${e}`;
    let r = await ea.getItem(n, t);
    if (r) {
      return r;
    }
    let o = await eo({
      cmd: protocolMessageTypes.tTi.PULL_VIDEO_INFO,
      requestCodec: pullVideoInfoRequest.VideoInfoRequest,
      responseCodec: pullVideoInfoResponse.PullVideoInfoResponse,
      payload: {
        urls: [e],
        isPc: false
      }
    });
    let s = Object.values((o == null ? undefined : o.data)?.videoInfos || {})[0];
    if (s) {
      await ea.setItem(n, s, Object.assign(Object.assign({}, t || {}), {
        expiredTime: s.expireTime ? Math.min(Number(s.expireTime) - Math.ceil(Date.now() / 1000), (t == null ? undefined : t.expiredTime) || Infinity) : t == null ? undefined : t.expiredTime
      }));
    }
    return s;
  }
  var docxPreviewUrlManager = require("docx-preview-url-manager") /*id: 686414*/;
  (s = c ||= {}).PB = "pb";
  s.JSON = "json";
  l = {
    gatewayPath: "/url-preview/preview/gateway"
  };
  let eg = function (e) {
    let t = function (e, t) {
      let {
        headers: i = {}
      } = e;
      let {
        gatewayPath: n,
        cmd: r
      } = t;
      let o = `${docxPreviewUrlManager.docxPreviewManager.getURL().larkAPI}${n}`;
      let s = docxPreviewUrlManager.docxPreviewManager.getSession().jssdk_session;
      if (s) {
        i["jssdk-session"] = s;
      }
      e.url ||= o;
      if (r) {
        e.cmd = r;
      }
      i["x-command-version"] ||= webCoreConfigManager.configManager.getLarkVersion();
      e.headers = i;
      e.credentials = "omit";
      return e;
    }(e, l);
    return larkFrontierCoreClient.sendLarkApiCommand(t);
  };
  var promiseDeferredAndMemoize = require("promise-deferred-and-memoize") /*id: 569657*/;
  let ed = new docxLarkUrlPreviewUtils.MemoryCache({
    maxCount: 100
  });
  let eI = async e => {
    let n = (await eg({
      cmd: 1323,
      requestCodec: getTempPreviewRequest.TempPreviewRequest,
      responseCodec: urlPreviewResponseSchema_1.getPreviewResponseSchema,
      payload: {
        appId: e.options.appId,
        appScene: e.options.appScene,
        url: e.payload.url
      }
    })).data?.previewEntityV2;
    if (n) {
      if (!(n == null ? undefined : n.url)?.url) {
        n.url = {
          url: e.payload.url
        };
      }
      return n;
    }
  };
  function ep(e) {
    return eg({
      cmd: 1329,
      requestCodec: urlPreviewBatchRequestSchema.getTempPreviewByBatchRequestSchema,
      responseCodec: urlPreviewBatchResponseSchema.previewBatchResponse,
      payload: {
        appId: e.options.appId,
        appScene: e.options.appScene,
        urls: e.payload.urls
      }
    });
  }
  let ey = async e => {
    let i = (await ep(e)).data?.previewEntityMap;
    if (i) {
      Object.entries(i).forEach(([e, t]) => {
        if (!t.url?.url) {
          t.url = {
            url: e
          };
        }
      });
      return i;
    }
  };
  async function eh(e) {
    let i = (await ep(e)).data?.previewResultMap;
    if (i) {
      return Object.entries(i).reduce((e, [t, i]) => {
        let {
          previewEntityV2: r
        } = i;
        if (r) {
          if (!(r == null ? undefined : r.url)?.url) {
            r.url = {
              url: t
            };
          }
          e[t] = r;
        }
        return e;
      }, {});
    } else {
      return [];
    }
  }
  let eN = async e => {
    let o;
    let s = docxLarkUrlPreviewUtils.previewConfig.cache.cacheType === docxLarkUrlPreviewUtils.cacheTypes.Memory;
    let l = [];
    let a = {};
    let c = e.payload.previewIds;
    if (s) {
      for (let e of c) {
        let t = await ed.getItem(e);
        if (t == null ? undefined : t.value) {
          a[e] = t.value;
        } else {
          l.push(e);
        }
      }
    } else {
      l = c;
    }
    let u = {};
    let g = 0;
    if (l.length > 0) {
      while (g < 3) {
        if ((o = await eg({
          cmd: 1325,
          requestCodec: urlPreviewRequest.GetPreviewRequest,
          responseCodec: urlPreviewResponseSchema.GetPreviewResponse,
          payload: {
            appId: e.options.appId,
            appScene: e.options.appScene,
            previewIds: l
          }
        })).isError) {
          g++;
          await new Promise(e => setTimeout(e, 2000));
        } else {
          let e = o.data?.previewResultMap;
          if (e) {
            if (Object.values(e).some(e => e.previewStatus.statusCode === cardPreviewConstants.YwK.URL_PREVIEW_RESOURCE_EXHAUSTED || e.previewStatus.statusCode === cardPreviewConstants.YwK.URL_PREVIEW_SERVICE_UNAVAILABLE)) {
              g++;
              await new Promise(e => setTimeout(e, 2000));
            } else {
              break;
            }
          } else {
            break;
          }
        }
      }
      if (!o) {
        return;
      }
      let a = o.data?.previewResultMap;
      if (a) {
        u = Object.entries(a).reduce((e, [t, i]) => {
          if (i.previewEntityV2) {
            e[t] = i.previewEntityV2;
          }
          return e;
        }, {});
        let e = await j(u, eg);
        u = J(u, e);
      }
      if (s && u) {
        for (let [e, t] of Object.entries(u)) {
          let i = t.previewStrategy?.expires?.low;
          if (i || i === 0) {
            await ed.setItem(e, t, i);
          }
        }
      }
    }
    if (Object.keys(a).length || u && Object.keys(u).length) {
      return Object.assign(Object.assign({}, a), u);
    }
  };
  let em = async e => {
    let n = await eg({
      cmd: 1322,
      requestCodec: urlPreviewNotifyCreateRequest.NotifyCreatePreviewRequest,
      responseCodec: urlPreviewCreateResponse.UrlPreviewCreateResp,
      payload: {
        appId: e.options.appId,
        appScene: e.options.appScene,
        urls: e.payload.urls
      }
    });
    if (n.data?.urlHangpointMap) {
      return {
        hangPointMap: n.data?.urlHangpointMap
      };
    }
  };
  let eC = async e => await T({
    params: e
  });
  let eA = promiseDeferredAndMemoize.memoizeAsyncFunction(eN);
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var docxUrlPreviewComponents = require("docx-url-preview-components") /*id: 75487*/;
  var ev = e => reactCoreLibraryReexport.createElement(docxUrlPreviewComponents.UdFontIcon, Object.assign({}, e));
  var udFontIconComponent = require("ud-font-icon-component") /*id: 743964*/;
  let ew = typeof window == "undefined" ? null : document.getElementsByTagName("link");
  let eT = (e, t = false, i = (e, t) => e === t) => {
    reactCoreLibraryReexport.useEffect(() => {
      if (!ew) {
        return;
      }
      let n = document.createElement("link");
      n.href = e;
      let r = n.href;
      let o = Array.from(ew).find(e => i(e.href, r));
      if (o) {
        return () => {
          if (t) {
            document.head.removeChild(o);
          }
        };
      } else {
        n.type = "text/css";
        n.rel = "stylesheet";
        document.head.appendChild(n);
        return () => {
          if (t) {
            document.head.removeChild(n);
          }
        };
      }
    }, [e, t, i]);
  };
  var eE = e => {
    let t = udPreviewConfigManager.getDomain(19);
    eT(`https://${t}/obj/feishu-static/url-preview/ud-icons.css`);
    return reactCoreLibraryReexport.createElement(udFontIconComponent.UdFontIcon, Object.assign({}, e));
  };
  var ez = e => docxLarkUrlPreviewUtils.previewConfig.iconSourceType === "local" ? reactCoreLibraryReexport.createElement(ev, Object.assign({}, e)) : reactCoreLibraryReexport.createElement(eE, Object.assign({}, e));
  let eO = async e => {
    var t;
    let i;
    let {
      title: n,
      url: r,
      icon: o,
      extInfo: s
    } = e;
    let l = r && (r.web || r.url) || "";
    let a = o == null ? undefined : o.imageSetV2;
    let c = o == null ? undefined : o.udIcon;
    if (c) {
      i = {
        type: "UD_ICON",
        key: c.key,
        color: c.color
      };
    } else if (a) {
      let e = "";
      try {
        e = await R(a);
      } catch (e) {
        if ((t = docxLarkUrlPreviewUtils.previewConfig?.logging) !== null && t !== undefined) {
          t.error("[URL_PREVIEW]imageSetV2 decode error");
        }
      }
      i = {
        type: "SERVER_ICON",
        url: e
      };
    } else {
      i = {
        type: "LOCAL_ICON",
        key: ""
      };
    }
    return {
      icon: i,
      title: (n == null ? undefined : n.title) || "",
      url: l,
      extInfo: s
    };
  };
  function eb(e, t) {
    var i = {};
    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
        i[n] = e[n];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var r = 0;
      var n = Object.getOwnPropertySymbols(e);
      for (; r < n.length; r++) {
        if (t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r])) {
          i[n[r]] = e[n[r]];
        }
      }
    }
    return i;
  }
  let eL = reactCoreLibraryReexport.forwardRef((e, t) => {
    var {
      urlPreviewEntity: n,
      className: r
    } = e;
    var o = eb(e, ["urlPreviewEntity", "className"]);
    let [s, l] = reactCoreLibraryReexport.useState();
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      if (n) {
        a();
      }
      if ((e = o.onLoaded) !== null && e !== undefined) {
        e.call(o);
      }
    }, []);
    let a = async () => {
      l(await eO(n));
    };
    if (s) {
      return reactCoreLibraryReexport.createElement("span", Object.assign({}, o, {
        ref: t
      }), reactCoreLibraryReexport.createElement(docxUrlPreviewComponents.urlPreviewInline, Object.assign({
        className: r
      }, o, s, {
        udFontIcon: ez
      })));
    }
    let {
      url: c
    } = o;
    if (c) {
      return reactCoreLibraryReexport.createElement("span", Object.assign({}, o, {
        ref: t
      }), reactCoreLibraryReexport.createElement(docxUrlPreviewComponents.urlPreviewInline, Object.assign({
        className: r,
        udFontIcon: ez,
        title: o.title ?? ""
      }, o)));
    } else {
      return null;
    }
  });
  let ex = `data:image/svg+xml;charset=UTF-8,
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8739 15.6325L9.056 11.8146C8.6251 11.3837 7.92662 11.3837 7.49572 11.8146L2.2069 17.1034V4.41378H19.4499L20.7437 2.20688H1.10345C0.494345 2.20688 0 2.70122 0 3.31033V28.6896C0 29.2993 0.494345 29.7931 1.10345 29.7931H4.57269L12.8739 15.6325ZM27.5863 9.37927C27.5863 10.9031 26.3516 12.1379 24.8277 12.1379C23.3038 12.1379 22.0691 10.9031 22.0691 9.37927C22.0691 7.85541 23.3038 6.62065 24.8277 6.62065C26.3516 6.62065 27.5863 7.85541 27.5863 9.37927ZM25.2205 2.20688H30.8967C31.5058 2.20688 32.0001 2.70122 32.0001 3.31033V28.6896C32.0001 29.2987 31.5058 29.7931 30.8967 29.7931H9.04895L15.6961 18.4546L19.8622 22.6207L24.5993 17.8836C25.0302 17.4527 25.7287 17.4527 26.1596 17.8836L29.7932 21.5172V4.41378H23.9267L25.2205 2.20688Z" fill="#bbbfc4"/>
</svg>`.replace(/[\t\n\r]/gim, "").replace(/#/g, "%23");
  let ek = () => reactCoreLibraryReexport.createElement("img", {
    className: "open-url-preview__image--error",
    src: ex
  });
  let e_ = e => {
    let {
      src: t,
      renderError: i = () => ek()
    } = e;
    let [n, r] = reactCoreLibraryReexport.useState(false);
    if (n) {
      return i();
    } else {
      return reactCoreLibraryReexport.createElement("img", {
        className: "open-url-preview__image",
        src: t,
        onError: () => {
          r(true);
        }
      });
    }
  };
  var docxUrlPreviewOpenComponents = require("docx-url-preview-open-components") /*id: 822132*/;
  var urlPreviewChattersRequest = require("url-preview-chatters-request") /*id: 804776*/;
  var pullUrlPreviewChattersListResponse = require("pull-url-preview-chatters-list-response") /*id: 406042*/;
  var pullChattersByIdsRequest = require("pull-chatters-by-ids-request") /*id: 746620*/;
  var chatterPullResponseEntity = require("chatter-pull-response-entity") /*id: 981911*/;
  async function eZ(e, t) {
    let n = await eo({
      cmd: protocolMessageTypes.tTi.PULL_URL_PREVIEW_CHATTERS_LIST,
      requestCodec: urlPreviewChattersRequest.UrlPreviewChatters,
      responseCodec: pullUrlPreviewChattersListResponse.pullUrlPreviewChattersListResponse,
      payload: {
        previewId: e,
        componentId: t
      }
    });
    return (n == null ? undefined : n.data)?.chatterIds || [];
  }
  async function eR(e) {
    let i = await eo({
      cmd: protocolMessageTypes.tTi.PULL_CHATTERS_BY_IDS,
      requestCodec: pullChattersByIdsRequest.PullChattersByIdsRequest,
      responseCodec: chatterPullResponseEntity.PullChattersResponse,
      payload: {
        chatterIds: e
      }
    });
    let n = (i == null ? undefined : i.data)?.chatters;
    let r = {
      chatters: {}
    };
    if (n) {
      Object.entries(n).forEach(([e, t]) => {
        r.chatters[e] = {
          id: t.id,
          name: t.name,
          avatarKey: t.avatar.key
        };
      });
    }
    return r;
  }
  var cardPreviewLocaleConstants_1 = require("card-preview-locale-constants_1") /*id: 568860*/;
  let eG = [{
    type: cardPreviewLocaleConstants_1.cardPreviewConstant.EMPTY,
    module: {
      Component: docxUrlPreviewOpenComponents.EmptyElement
    }
  }, {
    type: cardPreviewLocaleConstants_1.cardPreviewConstant.LINEAR_LAYOUT,
    module: {
      Component: docxUrlPreviewOpenComponents.HeaderElementWithLocale
    }
  }, {
    type: cardPreviewLocaleConstants_1.cardPreviewConstant.TEXT,
    module: {
      Component: docxUrlPreviewOpenComponents.TextElement,
      wrapClassName: docxUrlPreviewOpenComponents.RichTextUpdateTime
    }
  }, {
    type: cardPreviewLocaleConstants_1.cardPreviewConstant.SPIN_BUTTON,
    module: {
      Component: docxUrlPreviewOpenComponents.SpinButtonElement
    }
  }, {
    type: cardPreviewLocaleConstants_1.cardPreviewConstant.TAG_LIST,
    module: {
      Component: docxUrlPreviewOpenComponents.TagListElement,
      parseStyle: docxUrlPreviewOpenComponents.RichTextActionHandler
    }
  }, {
    type: cardPreviewLocaleConstants_1.cardPreviewConstant.HEADER,
    module: {
      Component: e => {
        let [t, i] = reactCoreLibraryReexport.useState("");
        let {
          icon: n,
          faviconUrl: r
        } = e.element.header;
        reactCoreLibraryReexport.useEffect(() => {
          o();
        }, []);
        let o = async () => {
          if (n) {
            i(await R(n));
          } else {
            i(r || "");
          }
        };
        return reactCoreLibraryReexport.createElement(docxUrlPreviewOpenComponents.HeaderWrapper, Object.assign({}, e, {
          image: e_,
          udFontIcon: ez,
          iconUrl: t
        }));
      },
      wrapClassName: docxUrlPreviewOpenComponents.LinearLayoutOrientationMap
    }
  }, {
    type: cardPreviewLocaleConstants_1.cardPreviewConstant.RICHTEXT,
    module: {
      Component: e => reactCoreLibraryReexport.createElement(docxUrlPreviewOpenComponents.HeaderElement, Object.assign({}, e, {
        udFontIcon: ez
      }))
    }
  }, {
    type: cardPreviewLocaleConstants_1.cardPreviewConstant.IMAGE,
    module: {
      Component: e => {
        let [t, i] = reactCoreLibraryReexport.useState("");
        let [n, r] = reactCoreLibraryReexport.useState(false);
        let {
          image: o
        } = e.element;
        reactCoreLibraryReexport.useEffect(() => {
          s();
        }, []);
        let s = async () => {
          if (o.image) {
            try {
              r(true);
              let e = await R(o.image);
              r(false);
              i(e);
            } catch (e) {
              r(false);
            }
          }
        };
        return reactCoreLibraryReexport.createElement(docxUrlPreviewOpenComponents.ImageElement, Object.assign({}, e, {
          udFontIcon: ez,
          imageUrl: t,
          loading: n
        }));
      },
      wrapClassName: docxUrlPreviewOpenComponents.TextStyleParser
    }
  }, {
    type: cardPreviewLocaleConstants_1.cardPreviewConstant.BUTTON,
    module: {
      Component: e => {
        let [t, i] = reactCoreLibraryReexport.useState("");
        let {
          icon: n
        } = e.element.button;
        reactCoreLibraryReexport.useEffect(() => {
          r();
        }, []);
        let r = async () => {
          if (n) {
            i(await R(n));
          }
        };
        return reactCoreLibraryReexport.createElement(docxUrlPreviewOpenComponents.ButtonElement, Object.assign({}, e, {
          image: e_,
          udFontIcon: ez,
          iconUrl: t
        }));
      },
      wrapClassName: docxUrlPreviewOpenComponents.IconButtonElement
    }
  }, {
    type: cardPreviewLocaleConstants_1.cardPreviewConstant.ICON_BUTTON,
    module: {
      Component: e => {
        let [t, i] = reactCoreLibraryReexport.useState("");
        let {
          icon: n
        } = e.element.iconButton;
        reactCoreLibraryReexport.useEffect(() => {
          r();
        }, []);
        let r = async () => {
          if (n) {
            i(await R(n));
          }
        };
        return reactCoreLibraryReexport.createElement(docxUrlPreviewOpenComponents.ImageElementWrapper, Object.assign({}, e, {
          udFontIcon: ez,
          iconUrl: t
        }));
      },
      parseStyle: docxUrlPreviewOpenComponents.IconButtonStyleParser
    }
  }, {
    type: cardPreviewLocaleConstants_1.cardPreviewConstant.VIDEO,
    module: {
      Component: function (e) {
        let {
          video: t
        } = e.element;
        let [i, n] = reactCoreLibraryReexport.useState("");
        reactCoreLibraryReexport.useEffect(() => {
          r();
        }, []);
        let r = async () => {
          if (t.coverImageUrl) {
            n(t.coverImageUrl);
          } else if (t.coverImage) {
            try {
              let e = await R(t.coverImage);
              n(e);
            } catch (e) {}
          }
        };
        return reactCoreLibraryReexport.createElement(docxUrlPreviewOpenComponents.ChattersPreviewItem, Object.assign({}, e, {
          coverImageUrl: i
        }));
      },
      parseStyle: docxUrlPreviewOpenComponents.VideoStyleParser
    }
  }, {
    type: cardPreviewLocaleConstants_1.cardPreviewConstant.DOC_IMAGE,
    module: {
      Component: docxUrlPreviewOpenComponents.DocImageElement,
      parseStyle: docxUrlPreviewOpenComponents.RichTextElement,
      wrapClassName: docxUrlPreviewOpenComponents.VideoElementWrapper
    }
  }, {
    type: cardPreviewLocaleConstants_1.cardPreviewConstant.AVATAR,
    module: {
      Component: docxUrlPreviewOpenComponents.AvatarElement
    }
  }, {
    type: cardPreviewLocaleConstants_1.cardPreviewConstant.CARD_CONTAINER,
    module: {
      Component: docxUrlPreviewOpenComponents.CardContainerElement
    }
  }, {
    type: cardPreviewLocaleConstants_1.cardPreviewConstant.TIME,
    module: {
      Component: docxUrlPreviewOpenComponents.LinearLayoutElement
    }
  }, {
    type: cardPreviewLocaleConstants_1.cardPreviewConstant.CHATTERS_PREVIEW,
    module: {
      Component: e => reactCoreLibraryReexport.createElement(docxUrlPreviewOpenComponents.ChattersPreviewList, Object.assign({}, e, {
        getUrlPreviewChatterIds: eZ,
        mGetChatters: eR
      })),
      parseStyle: docxUrlPreviewOpenComponents.ChattersPreviewElement
    }
  }, {
    type: cardPreviewLocaleConstants_1.cardPreviewConstant.ENGINE,
    module: {
      Component: docxUrlPreviewOpenComponents.VideoElement
    }
  }];
  async function eH(e) {
    docxLarkUrlPreviewUtils.previewConfig.init(Object.assign(Object.assign({}, e), {
      registeredElements: docxLarkUrlPreviewUtils.deduplicateByType(eG.concat((e == null ? undefined : e.registeredElements) || [])),
      urls: {},
      inited: true
    }));
    window.__url_config = docxLarkUrlPreviewUtils.previewConfig;
    return docxLarkUrlPreviewUtils.previewConfig;
  }
  async function eW(e, t) {
    let i = function () {
      let e = webCoreConfigManager.configManager.getByKey("user");
      if (!e || n) {
        return n;
      }
      let t = new docxLarkUrlPreviewUtils.AesCrypto({
        privateKey: e.id.slice(0, 16).padEnd(16, "#")
      });
      let i = webCoreConfigManager.configManager.getByKey("locale");
      return n = new docxLarkUrlPreviewUtils.IndexedDbCache({
        maxCount: 100,
        crypto: t,
        dbName: `${e.id}_${e.tenantId}`,
        storeName: `${i}-PreviewEntity`
      });
    }();
    if (t === "LocalOnly" || t === "LocalFallbackRemote") {
      let n = await (i == null ? undefined : i.getItem(JSON.stringify(e)));
      if (t === "LocalOnly" || n) {
        if (n == null) {
          return undefined;
        } else {
          return n.value;
        }
      }
    }
    let r = await eA(e);
    if (i != null) {
      i.setItem(JSON.stringify(e), r);
    }
    return r;
  }
  var pullUserSettingRequest = require("pull-user-setting-request") /*id: 591152*/;
  var userSettingsSchemaDef = require("user-settings-schema-def") /*id: 805396*/;
  async function eK() {
    if (r === undefined) {
      r = eg({
        cmd: 7009,
        requestCodec: pullUserSettingRequest.UserSettingRequest,
        responseCodec: userSettingsSchemaDef.UserSettingResponse,
        payload: {}
      }).then(e => e.data);
    }
    let i = await r;
    return (i == null ? undefined : i.setting)?.timeFormatSetting?.timeFormat;
  }
  require.d(exports, {
    getUserTimeFormat: function () {
      return eK;
    },
    UrlPreviewLink: function () {
      return eL;
    },
    initPreviewConfig: function () {
      return eH;
    },
    processPreviewEntity: function () {
      return eO;
    },
    urlPreviewActions: function () {
      return u;
    },
    getPreviewWithCache: function () {
      return eW;
    }
  });
  require.r(u);
  require.d(u, {
    doUrlPreviewAction: function () {
      return eC;
    },
    getTempUrlPreview: function () {
      return eI;
    },
    getTempUrlPreviewByBatch: function () {
      return ey;
    },
    getTempUrlPreviewByBatchV2: function () {
      return eh;
    },
    getUrlPreviews: function () {
      return eN;
    },
    getUrlPreviewsWithMemoize: function () {
      return eA;
    },
    notifyCreatePreview: function () {
      return em;
    },
    pullVideoInfo: function () {
      return ec;
    }
  });
}