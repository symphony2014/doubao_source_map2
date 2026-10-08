// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ic' to 'getUserTimeFormat'
// - Renamed export 'wv' to 'UrlPreviewDisplay'
// - Renamed export '$J' to 'processPreviewIcon'
// - Renamed export 'd1' to 'processPreviewEntity'
// - Renamed export 'S1' to 'initUrlPreviewManager'
// - Renamed export 'nU' to 'getUrlPreviewWithCache'
// - Renamed export 'Xn' to 'UrlPreviewApi'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 334000
         */
module.exports = function (module, exports, require) {
  let r;
  let i;
  var o = {};
  var getTempPreviewRequest = require("get-temp-preview-request") /*id: 114730*/;
  var urlPreviewResponseSchema_1 = require("url-preview-response-schema_1") /*id: 211365*/;
  var urlPreviewBatchRequestSchema = require("url-preview-batch-request-schema") /*id: 619049*/;
  var urlPreviewBatchResponseSchema = require("url-preview-batch-response-schema") /*id: 115270*/;
  var urlPreviewRequest = require("url-preview-request") /*id: 545572*/;
  var urlPreviewResponseSchema = require("url-preview-response-schema") /*id: 586174*/;
  var urlPreviewNotifyCreateRequest = require("url-preview-notify-create-request") /*id: 754159*/;
  var urlPreviewCreateResponse = require("url-preview-create-response") /*id: 265786*/;
  var urlPreviewCacheUtilityModule = require("url-preview-cache-utility-module") /*id: 779458*/;
  var cardPreviewConstants = require("card-preview-constants") /*id: 834568*/;
  var pullUrlPreviewTemplatesRequestProtobuf = require("pull-url-preview-templates-request-protobuf") /*id: 70711*/;
  var urlPreviewProtobufCodec = require("url-preview-protobuf-codec") /*id: 556562*/;
  let N = async (e, t) => {
    let r = [];
    [...new Set(Object.keys(e))].forEach(t => {
      let i = e[t];
      if (!i.previewBody?.states) {
        return;
      }
      let {
        states: o
      } = i.previewBody;
      Object.keys(o).forEach(e => {
        let t = o[e];
        if (t.templateId) {
          r.push(t.templateId);
        }
      });
    });
    let i = [...new Set(r)];
    if (i.length) {
      return (await t({
        cmd: 1320,
        requestCodec: pullUrlPreviewTemplatesRequestProtobuf.PullURLPreviewTemplatesRequest,
        responseCodec: urlPreviewProtobufCodec.urlPreviewCodec,
        payload: {
          templateIds: i
        }
      })).data?.templates;
    }
  };
  var errorConstantsCodes = require("error-constants-codes") /*id: 850732*/;
  var toastNotificationManagerWrapper = require("toast-notification-manager-wrapper") /*id: 314333*/;
  let L = "lark://client/core/copy?value=";
  async function p({
    params: e
  }) {
    let a;
    let {
      actionId: E,
      action: l,
      switchState: c,
      actionDepth: T = 1,
      copyUrlText: I
    } = e;
    if (!E || T > 10) {
      return a;
    }
    switch (l.method) {
      case errorConstantsCodes.D1o.OPEN_URL:
        let A = l.openUrlV2?.openUrl;
        let u = (A == null ? undefined : A.web) || (A == null ? undefined : A.url);
        if (u == null ? undefined : u.startsWith(L)) {
          let e = u.substring(L.length);
          urlPreviewCacheUtilityModule.copyToClipboard(decodeURIComponent(e));
          toastNotificationManagerWrapper.toastManagerWrapper.success(I);
          return;
        }
        window.open(u, "_blank");
        break;
      case errorConstantsCodes.D1o.LARK_COMMAND:
        break;
      case errorConstantsCodes.D1o.SHOW_TOAST:
        ({
          [errorConstantsCodes.G$$.success]: toastNotificationManagerWrapper.toastManagerWrapper.success,
          [errorConstantsCodes.G$$.info]: toastNotificationManagerWrapper.toastManagerWrapper.info,
          [errorConstantsCodes.G$$.error]: toastNotificationManagerWrapper.toastManagerWrapper.error,
          [errorConstantsCodes.G$$.warning]: toastNotificationManagerWrapper.toastManagerWrapper.warning
        })[l.showToast?.type || errorConstantsCodes.G$$.info](l.showToast?.content || "", l.showToast?.duration || 3000);
        break;
      case errorConstantsCodes.D1o.SWITCH_STATE:
        if (l.switchState?.nextStateId) {
          c(l.switchState?.nextStateId);
        }
    }
    return a;
  }
  var stringDeburrUtil_1 = require("string-deburr-util_1") /*id: 505593*/;
  let f = {
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
  let R = {
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
  let D = {
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
  let P = Object.keys(errorConstantsCodes.Cdw).reduce((e, t) => {
    let n = errorConstantsCodes.Cdw[t];
    let r = stringDeburrUtil_1.deburrString(t);
    e[n] = r;
    return e;
  }, {});
  let m = Object.assign({}, f);
  let U = Object.assign({}, O);
  let b = Object.assign({}, R);
  let v = Object.assign(Object.assign({}, D), {
    [errorConstantsCodes.Cdw.IMAGE]: Object.assign(Object.assign({}, D[errorConstantsCodes.Cdw.IMAGE]), {
      [errorConstantsCodes.ptQ.image]: "imageSetV2"
    })
  });
  var serviceBlockConstants = require("service-block-constants") /*id: 141454*/;
  var serviceBlockLocaleUtils = require("service-block-locale-utils") /*id: 913121*/;
  var docxConfigAccessor = require("docx-config-accessor") /*id: 195932*/;
  function w(e) {
    if (e instanceof Uint8Array) {
      return e;
    }
    let t = window.atob(e);
    let n = t.length;
    let r = new Uint8Array(n);
    for (let e = 0; e < n; e++) {
      r[e] = t.charCodeAt(e);
    }
    return r;
  }
  let k = async e => {
    let a = "";
    if (urlPreviewCacheUtilityModule.urlPreviewManager.env === "boe") {
      a = `https://${docxConfigAccessor.getDomain(serviceBlockLocaleUtils.serviceBlockConst.FILE)}/static-resource/v1/${e.imageKey}`;
    } else {
      let {
        domains: t,
        path: n
      } = docxConfigAccessor.getDynamicImageSetting(e.fsUnit);
      a = `${t[0]}${n}/${e.imageKey}`;
    }
    let E = await fetch(a);
    let l = await E.arrayBuffer();
    let c = e.crypto?.cipher?.secret;
    if (!c) {
      throw Error("[Url Preview] imageSetV2 secret is not defined");
    }
    let T = await window.crypto.subtle.importKey("raw", w(c), "AES-GCM", true, ["decrypt"]);
    let I = {
      name: "AES-GCM"
    };
    let A = e.crypto?.cipher?.nonce;
    if (A) {
      I.iv = w(A);
    }
    let u = e.crypto?.cipher?.additionalData;
    if (u) {
      I.additionalData = w(u);
    }
    let d = new Uint8Array(await window.crypto.subtle.decrypt(I, T, l));
    let g = function (e) {
      let t = e.slice(0, 4);
      t = new Uint8Array(t);
      let n = [];
      for (let e = 0; e < t.byteLength; e++) {
        n.push(t[e].toString(16));
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
      }(n.join("").toUpperCase());
    }(d);
    let N = new Blob([d], {
      type: g || "image/png"
    });
    return window.URL.createObjectURL(N);
  };
  require("rich-text-element-protobuf-definition") /*id: 517377*/;
  var protobufCodecHelper = require("protobuf-codec-helper") /*id: 98114*/;
  var urlPreviewManagerBridge = require("url-preview-manager-bridge") /*id: 249006*/;
  function j(e, t) {
    return protobufCodecHelper.createProtobufCodec("entities.RichTextElement", e).decode(t);
  }
  let B = e => {
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
  let z = e => {
    var n;
    let r = e.previewBody?.components;
    if (!e.previewBody) {
      if ((n = urlPreviewCacheUtilityModule.urlPreviewManager.logging) !== null && n !== undefined) {
        n.error("[OPEN_URL_PREVIEW] previewBody is undefined");
      }
      return e;
    }
    if (!r) {
      return e;
    }
    let i = urlPreviewCacheUtilityModule.generateRandomId();
    let o = urlPreviewCacheUtilityModule.generateRandomId();
    r = K(r);
    if (e.previewBody.componentHangPointPairs) {
      (function (e, t) {
        var _;
        var a;
        if (!t) {
          return;
        }
        let E = [];
        for (let [_, a] of Object.entries(t)) {
          if (a.type === 502) {
            for (let [t, l] of Object.entries(a.richtext?.richtext?.elements || {})) {
              let n = e[_]?.urlPreviewHangPointMap?.[t];
              if (n && l.tag === serviceBlockConstants.YCe.A) {
                l.urlPreviewHangPoint = n;
                if (n.previewId) {
                  E.push(n.previewId);
                }
              }
            }
          }
        }
        if (E.length) {
          if ((a = (_ = urlPreviewCacheUtilityModule.urlPreviewManager.logging) === null || _ === undefined ? undefined : _.info) !== null && a !== undefined) {
            a.call(_, `[OPEN_URL_PREVIEW] preload previewIds: ${E}`);
          }
          [...new Set(E)].forEach(e => {
            eE({
              payload: {
                previewIds: [e]
              },
              options: {}
            });
          });
        }
      })(e.previewBody.componentHangPointPairs, r.elements);
    }
    e.previewBody.currentStateId = i;
    let _ = e.previewBody.actions;
    if (_) {
      Object.keys(_).forEach(e => {
        _[e] = B(_[e]);
      });
    }
    e.previewBody.states = {
      [i]: {
        type: errorConstantsCodes.q2D.CARD,
        cardUrl: e.previewBody.cardUrl,
        actions: _,
        templateId: o,
        template: Object.assign(Object.assign({}, r), {
          rootComponentId: r.rootIds && r.rootIds[0]
        })
      }
    };
    return e;
  };
  let V = (e, t, n, r) => {
    if (!t || !n) {
      return;
    }
    let i = e;
    let o = n.split(".").reduce((e = {}, t) => e[t], r);
    t.split(".").forEach((e, t, n) => {
      if (!i[e] && t < n.length - 1) {
        i[e] = {};
      }
      if (t === n.length - 1) {
        i[e] = o;
      } else {
        i = i[e];
      }
    });
  };
  let F = (e, t) => {
    let n = e.elements;
    if (n) {
      Object.keys(n).forEach(e => {
        let r = n[e];
        let i = t.properties && t.properties[e];
        let o = t.styles && t.styles[e];
        if (i) {
          let {
            previewPropertyData: e,
            type: t
          } = i;
          let n = P[t];
          let o = {
            [n]: r[n] || {}
          };
          if (e && t !== errorConstantsCodes.Cdw.RICHTEXT) {
            Object.keys(e).forEach(r => {
              let i = e[r];
              if (!i) {
                return;
              }
              let _ = b[t][r];
              let a = v[t][r];
              V(o[n], _, a, i);
            });
            r = Object.assign(Object.assign({}, r), o);
          }
        }
        if (o) {
          let e = r.style || {};
          let {
            previewStyleData: t
          } = o;
          if (t) {
            Object.keys(t).forEach(n => {
              V(e, m[n], U[n], t[n]);
            });
            r.style = e;
          }
        }
      });
    }
    return e;
  };
  let Y = (e, t) => {
    Object.keys(e).forEach(n => {
      let i = e[n];
      if (t) {
        let e = i.previewBody?.states;
        if (e) {
          Object.keys(e).forEach(n => {
            let r = e[n];
            if (r == null ? undefined : r.templateId) {
              let e = t[r.templateId];
              e &&= F(e = K(e), r);
              r.template = e;
            }
          });
        }
      }
      i = z(i);
    });
    return e;
  };
  let K = e => {
    let t = e.elements;
    if (t) {
      Object.keys(t).forEach(e => {
        let l = t[e];
        let c = l.style;
        if (c) {
          Object.keys(c).forEach(e => {
            if (e === "backgroundColor") {
              let o = c[e]?.linear?.colorsV2;
              let _ = c[e]?.linear?.colorsV3;
              if (o && _) {
                o.push(_[0]);
              }
            }
          });
        }
        if (l.type === 512 && l.avatar?.chatterInfo) {
          l.avatar.chatterInfo.avatarKey = l.avatar?.chatterInfo?.avatar?.key;
        }
        if (l.type === 502 && l.richtext?.richtext) {
          l.richtext.richtext = function (e, t) {
            var r;
            let l = {
              innerText: ""
            };
            let c = false;
            l.innerText = e.innerText;
            let T = e.elements?.dictionary;
            let I = {};
            for (let [e, n] of Object.entries(T ?? {})) {
              try {
                let [r, i] = function (e, t) {
                  var n;
                  var r;
                  var i;
                  var o;
                  let _ = {};
                  let a = {
                    tag: serviceBlockConstants.YCe.UNKNOWN,
                    property: _
                  };
                  let E = false;
                  let l = e.tag;
                  a.tag = l;
                  a.style = e.style;
                  a.wideStyle = e.style;
                  a.childIds = e.childIds;
                  a.styleKeys = e.styleKeys;
                  if (typeof e.property == "string") {
                    e.property = w(e.property);
                  }
                  if (typeof e.property == "object" && !Array.isArray(e.property)) {
                    e.property = new Uint8Array(Array.from({
                      length: Math.max(...Object.keys(o = e.property).map(Number)) + 1
                    }, (e, t) => o[t] || 0));
                  }
                  switch (l) {
                    case serviceBlockConstants.YCe.TEXT:
                      _.text = j("TextProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.IMG:
                      break;
                    case serviceBlockConstants.YCe.P:
                      _.paragraph = j("ParagraphProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.FIGURE:
                      _.figure = j("FigureProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.AT:
                      _.at = j("AtProperty", e.property);
                      _.at.isOuter = t == null ? undefined : t.includes(_.at.userId);
                      break;
                    case serviceBlockConstants.YCe.A:
                      _.anchor = j("AnchorProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.B:
                      _.bold = j("BoldProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.I:
                      _.italic = j("ItalicProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.U:
                      _.underline = j("UnderlineProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.EMOTION:
                      let c = j("EmotionProperty", e.property);
                      _.emotion = c;
                      break;
                    case serviceBlockConstants.YCe.BUTTON:
                      let T = j("ButtonProperty", e.property);
                      let I = {
                        actionId: T.actionId,
                        disable: T.disable,
                        active: T.active,
                        mode: T.mode
                      };
                      if ((n = T.confirm) === null || n === undefined ? undefined : n.hasOwnProperty("title")) {
                        I.confirm = T.confirm;
                      } else {
                        I.confirm = {
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
                      if ((r = T.loading) === null || r === undefined ? undefined : r.hasOwnProperty("begin")) {
                        I.loading = T.loading;
                      } else {
                        I.loading = {
                          begin: "",
                          success: "",
                          fail: "",
                          beginI18nKey: "",
                          successI18nKey: "",
                          failI18nKey: ""
                        };
                      }
                      _.button = I;
                      break;
                    case serviceBlockConstants.YCe.SELECT:
                      let A = j("SelectProperty", e.property);
                      _.select = A;
                      break;
                    case serviceBlockConstants.YCe.PROGRESSSELECT:
                      _.progress = j("ProgressSelectOptionProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.DIV:
                      _.div = j("DivProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.TEXTABLEAREA:
                      _.textableArea = j("TextableAreaProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.TIME:
                      _.time = j("TimeProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.LINK:
                      _.link = j("LinkProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.MEDIA:
                    case serviceBlockConstants.YCe.SELECTMENU:
                    case serviceBlockConstants.YCe.OVERFLOWMENU:
                    case serviceBlockConstants.YCe.DATEPICKER:
                      break;
                    case serviceBlockConstants.YCe.DOCS:
                      _.docs = {};
                      break;
                    case serviceBlockConstants.YCe.H1:
                      _.h1 = {};
                      break;
                    case serviceBlockConstants.YCe.H2:
                      _.h2 = {};
                      break;
                    case serviceBlockConstants.YCe.H3:
                      _.h3 = {};
                      break;
                    case serviceBlockConstants.YCe.H4:
                      _.h4 = {};
                      break;
                    case serviceBlockConstants.YCe.H5:
                      _.h5 = {};
                      break;
                    case serviceBlockConstants.YCe.H6:
                      _.h6 = {};
                      break;
                    case serviceBlockConstants.YCe.UL:
                      _.ul = j("ULProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.OL:
                      _.ol = j("OLProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.LI:
                      _.li = {};
                      break;
                    case serviceBlockConstants.YCe.QUOTE:
                      _.quote = {};
                      break;
                    case serviceBlockConstants.YCe.CODE:
                      _.code = {};
                      break;
                    case serviceBlockConstants.YCe.CODE_BLOCK:
                      break;
                    case serviceBlockConstants.YCe.CODE_BLOCK_V2:
                      _.codeBlockV2 = j("CodeBlockV2Property", e.property);
                      break;
                    case serviceBlockConstants.YCe.TABLE:
                      _.table = j("TableProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.TABLE_ROW:
                      _.tableRow = j("TableRowProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.TABLE_CELL:
                      _.tableCell = j("TableCellProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.COLUMNS:
                      _.columns = j("ColumnsProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.COLUMN:
                      _.column = j("ColumnProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.HR:
                      _.hr = {};
                      break;
                    case serviceBlockConstants.YCe.TIMEPICKER:
                    case serviceBlockConstants.YCe.DATETIMEPICKER:
                      break;
                    case serviceBlockConstants.YCe.REACTION:
                      _.reaction = j("ReactionProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.MENTION:
                      _.mention = j("MentionProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.MY_AI_TOOL:
                      _.myAiTool = j("MyAIToolProperty", e.property);
                      break;
                    case serviceBlockConstants.YCe.UNKNOWN:
                    default:
                      _.unknown = {};
                      E = true;
                      if ((i = urlPreviewManagerBridge.urlPreviewManager?.logging) !== null && i !== undefined) {
                        i.warn(`unknown richtext tag in ser2cliRichTextElement ${e.tag}`);
                      }
                  }
                  a.property = _;
                  return [a, E];
                }(n, t);
                if (c = i) {
                  break;
                }
                I[e] = r;
              } catch (t) {
                if ((r = urlPreviewManagerBridge.urlPreviewManager?.logging) !== null && r !== undefined) {
                  r.error("ser2cli element failed", e, t);
                }
              }
            }
            if (!c) {
              l.elementIds = e.elementIds ?? [];
              l.imageIds = e.imageIds ?? [];
              l.atIds = e.atIds ?? [];
              l.anchorIds = e.anchorIds ?? [];
              l.mediaIds = e.mediaIds ?? [];
              l.elements = I ?? {};
            }
            return l;
          }(l.richtext?.richtext, l.richtext?.atOutChatterIds);
        }
      });
    }
    return e;
  };
  var protocolMessageTypes = require("protocol-message-types") /*id: 478848*/;
  var larkApiCommandSender = require("lark-api-command-sender") /*id: 828944*/;
  var pullVideoInfoRequest = require("pull-video-info-request") /*id: 953498*/;
  var pullVideoInfoResponse = require("pull-video-info-response") /*id: 917173*/;
  let J = new class {
    getInstance(e) {
      if ((e = e || urlPreviewCacheUtilityModule.urlPreviewManager?.cache?.cacheType) === urlPreviewCacheUtilityModule.CacheType.Memory) {
        return this.memCache;
      } else if (e === urlPreviewCacheUtilityModule.CacheType.Persistent) {
        return this.idbCache;
      } else {
        return null;
      }
    }
    isEnabled(e) {
      return (e || urlPreviewCacheUtilityModule.urlPreviewManager?.cache?.cacheType) !== urlPreviewCacheUtilityModule.CacheType.None;
    }
    async getItem(e, t) {
      var n;
      if (!this.isEnabled(t == null ? undefined : t.cacheType) || !e) {
        return;
      }
      let r = await ((n = this.getInstance(t == null ? undefined : t.cacheType)) === null || n === undefined ? undefined : n.getItem(e));
      if (r == null) {
        return undefined;
      } else {
        return r.value;
      }
    }
    getExpiredAt(e) {
      let n = e === undefined ? urlPreviewCacheUtilityModule.urlPreviewManager.cache?.expiredTime : e;
      if (n === undefined) {
        return urlPreviewCacheUtilityModule.cacheExpiryTime;
      } else if (n > 0) {
        return n + Date.now() / 1000;
      } else {
        return urlPreviewCacheUtilityModule.cacheExpiryTime;
      }
    }
    async setItem(e, t, n) {
      var r;
      if (this.isEnabled(n == null ? undefined : n.cacheType)) {
        if ((r = this.getInstance(n == null ? undefined : n.cacheType)) === null || r === undefined) {
          return undefined;
        } else {
          return r.setItem(e, t, this.getExpiredAt(n == null ? undefined : n.expiredTime));
        }
      }
    }
  }();
  async function $(e, t) {
    if (!e) {
      return;
    }
    let r = `VIDEO_${e}`;
    let i = await J.getItem(r, t);
    if (i) {
      return i;
    }
    let o = await larkApiCommandSender.sendApiCommand({
      cmd: protocolMessageTypes.tTi.PULL_VIDEO_INFO,
      requestCodec: pullVideoInfoRequest.VideoInfoRequest,
      responseCodec: pullVideoInfoResponse.PullVideoInfoResponse,
      payload: {
        urls: [e],
        isPc: false
      }
    });
    let _ = Object.values((o == null ? undefined : o.data)?.videoInfos || {})[0];
    if (_) {
      await J.setItem(r, _, Object.assign(Object.assign({}, t || {}), {
        expiredTime: _.expireTime ? Math.min(Number(_.expireTime) - Math.ceil(Date.now() / 1000), (t == null ? undefined : t.expiredTime) || Infinity) : t == null ? undefined : t.expiredTime
      }));
    }
    return _;
  }
  var asyncPromiseUtils = require("async-promise-utils") /*id: 860902*/;
  let ee = new urlPreviewCacheUtilityModule.MemoryCache({
    maxCount: 100
  });
  let et = async e => {
    let r = (await larkApiCommandSender.sendApiCommand({
      cmd: 1323,
      requestCodec: getTempPreviewRequest.TempPreviewRequest,
      responseCodec: urlPreviewResponseSchema_1.getPreviewResponseSchema,
      payload: {
        appId: e.options.appId,
        appScene: e.options.appScene,
        url: e.payload.url
      }
    })).data?.previewEntityV2;
    if (r) {
      if (!(r == null ? undefined : r.url)?.url) {
        r.url = {
          url: e.payload.url
        };
      }
      return r;
    }
  };
  function en(e) {
    return larkApiCommandSender.sendApiCommand({
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
  let er = async e => {
    let n = (await en(e)).data?.previewEntityMap;
    if (n) {
      Object.entries(n).forEach(([e, t]) => {
        if (!t.url?.url) {
          t.url = {
            url: e
          };
        }
      });
      return n;
    }
  };
  async function ei(e) {
    let n = (await en(e)).data?.previewResultMap;
    if (n) {
      return Object.entries(n).reduce((e, [t, n]) => {
        let {
          previewEntityV2: i
        } = n;
        if (i) {
          if (!(i == null ? undefined : i.url)?.url) {
            i.url = {
              url: t
            };
          }
          e[t] = i;
        }
        return e;
      }, {});
    } else {
      return [];
    }
  }
  let eo = async e => {
    let o;
    let _ = urlPreviewCacheUtilityModule.urlPreviewManager.cache.cacheType === urlPreviewCacheUtilityModule.CacheType.Memory;
    let a = [];
    let E = {};
    let l = e.payload.previewIds;
    if (_) {
      for (let e of l) {
        let t = await ee.getItem(e);
        if (t == null ? undefined : t.value) {
          E[e] = t.value;
        } else {
          a.push(e);
        }
      }
    } else {
      a = l;
    }
    let I = {};
    let A = 0;
    if (a.length > 0) {
      while (A < 3) {
        if ((o = await larkApiCommandSender.sendApiCommand({
          cmd: 1325,
          requestCodec: urlPreviewRequest.GetPreviewRequest,
          responseCodec: urlPreviewResponseSchema.GetPreviewResponse,
          payload: {
            appId: e.options.appId,
            appScene: e.options.appScene,
            previewIds: a
          }
        })).isError) {
          A++;
          await new Promise(e => setTimeout(e, 2000));
        } else {
          let e = o.data?.previewResultMap;
          if (e) {
            if (Object.values(e).some(e => e.previewStatus.statusCode === cardPreviewConstants.YwK.URL_PREVIEW_RESOURCE_EXHAUSTED || e.previewStatus.statusCode === cardPreviewConstants.YwK.URL_PREVIEW_SERVICE_UNAVAILABLE)) {
              A++;
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
      let E = o.data?.previewResultMap;
      if (E) {
        I = Object.entries(E).reduce((e, [t, n]) => {
          if (n.previewEntityV2) {
            e[t] = n.previewEntityV2;
          }
          return e;
        }, {});
        let e = await N(I, larkApiCommandSender.sendApiCommand);
        I = Y(I, e);
      }
      if (_ && I) {
        for (let [e, t] of Object.entries(I)) {
          let n = t.previewStrategy?.expires?.low;
          if (n || n === 0) {
            await ee.setItem(e, t, n);
          }
        }
      }
    }
    if (Object.keys(E).length || I && Object.keys(I).length) {
      return Object.assign(Object.assign({}, E), I);
    }
  };
  let e_ = async e => {
    let r = await larkApiCommandSender.sendApiCommand({
      cmd: 1322,
      requestCodec: urlPreviewNotifyCreateRequest.NotifyCreatePreviewRequest,
      responseCodec: urlPreviewCreateResponse.UrlPreviewCreateResp,
      payload: {
        appId: e.options.appId,
        appScene: e.options.appScene,
        urls: e.payload.urls
      }
    });
    if (r.data?.urlHangpointMap) {
      return {
        hangPointMap: r.data?.urlHangpointMap
      };
    }
  };
  let ea = async e => await p({
    params: e
  });
  let eE = asyncPromiseUtils.promiseDedupe(eo);
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var urlPreviewComponents = require("url-preview-components") /*id: 909577*/;
  var eT = e => reactCoreLibraryReexport.createElement(urlPreviewComponents.IconComponent, Object.assign({}, e));
  var iconComponent = require("icon-component") /*id: 932319*/;
  let eA = typeof window == "undefined" ? null : document.getElementsByTagName("link");
  let es = (e, t = false, n = (e, t) => e === t) => {
    reactCoreLibraryReexport.useEffect(() => {
      if (!eA) {
        return;
      }
      let r = document.createElement("link");
      r.href = e;
      let i = r.href;
      let o = Array.from(eA).find(e => n(e.href, i));
      if (o) {
        return () => {
          if (t) {
            document.head.removeChild(o);
          }
        };
      } else {
        r.type = "text/css";
        r.rel = "stylesheet";
        document.head.appendChild(r);
        return () => {
          if (t) {
            document.head.removeChild(r);
          }
        };
      }
    }, [e, t, n]);
  };
  var eu = e => {
    let t = docxConfigAccessor.getDomain(19);
    es(`https://${t}/obj/feishu-static/url-preview/ud-icons.css`);
    return reactCoreLibraryReexport.createElement(iconComponent.iconComponent, Object.assign({}, e));
  };
  var ed = e => urlPreviewCacheUtilityModule.urlPreviewManager.iconSourceType === "local" ? reactCoreLibraryReexport.createElement(eT, Object.assign({}, e)) : reactCoreLibraryReexport.createElement(eu, Object.assign({}, e));
  let eg = async e => {
    var t;
    let n;
    let {
      title: r,
      url: i,
      icon: o,
      extInfo: _
    } = e;
    let a = i && (i.web || i.url) || "";
    let E = o == null ? undefined : o.imageSetV2;
    let l = o == null ? undefined : o.udIcon;
    if (l) {
      n = {
        type: "UD_ICON",
        key: l.key,
        color: l.color
      };
    } else if (E) {
      let e = "";
      try {
        e = await k(E);
      } catch (e) {
        if ((t = urlPreviewCacheUtilityModule.urlPreviewManager?.logging) !== null && t !== undefined) {
          t.error("[URL_PREVIEW]imageSetV2 decode error");
        }
      }
      n = {
        type: "SERVER_ICON",
        url: e
      };
    } else {
      n = {
        type: "LOCAL_ICON",
        key: ""
      };
    }
    return {
      icon: n,
      title: (r == null ? undefined : r.title) || "",
      url: a,
      extInfo: _
    };
  };
  let eN = ({
    color: e,
    width: t = 14,
    height: n = 14,
    imageUrl: r
  }) => {
    let i = urlPreviewCacheUtilityModule.generateRandomId();
    let o = urlPreviewCacheUtilityModule.hexToColorMatrix(e);
    return `
    <svg
      viewBox="0 0 ${t} ${n}"
      width="${t}"
      height="${n}"
    >
      <filter id="${i}">
        <feColorMatrix in="SourceGraphic" colorInterpolationFilters="sRGB" type="matrix" values="${o}" />
      </filter>
      <image
        xlinkHref="${r}"
        x="0"
        y="0"
        width="${t}"
        height="${n}"
        filter="url(#${i})"
      />
    </svg>
  `;
  };
  let eS = async (e, t) => {
    var n;
    let r;
    let {
      title: i,
      url: o,
      icon: _
    } = e;
    let a = o && (o.web || o.url) || "";
    let E = _ == null ? undefined : _.imageSetV2;
    let l = _ == null ? undefined : _.udIcon;
    let c = (t == null ? undefined : t.iconColor) || "245bdb";
    let T = (t == null ? undefined : t.iconWidth) || 14;
    let I = (t == null ? undefined : t.iconHeight) || 14;
    if (l) {
      r = {
        type: "UD_ICON",
        key: l.key,
        color: l.color
      };
    } else if (E) {
      let e = "";
      try {
        e = await k(E);
      } catch (e) {
        if ((n = urlPreviewCacheUtilityModule.urlPreviewManager?.logging) !== null && n !== undefined) {
          n.error("[URL_PREVIEW]imageSetV2 decode error");
        }
      }
      r = {
        type: "SERVER_ICON",
        iconDomString: eN({
          color: c,
          imageUrl: e,
          width: T,
          height: I
        })
      };
    } else {
      r = {
        type: "LOCAL_ICON",
        key: ""
      };
    }
    return {
      icon: r,
      title: (i == null ? undefined : i.title) || "",
      url: a
    };
  };
  function eC(e, t) {
    var n = {};
    for (var r in e) {
      if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
        n[r] = e[r];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var i = 0;
      var r = Object.getOwnPropertySymbols(e);
      for (; i < r.length; i++) {
        if (t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i])) {
          n[r[i]] = e[r[i]];
        }
      }
    }
    return n;
  }
  let eL = reactCoreLibraryReexport.forwardRef((e, t) => {
    var {
      urlPreviewEntity: r,
      className: i
    } = e;
    var o = eC(e, ["urlPreviewEntity", "className"]);
    let [_, a] = reactCoreLibraryReexport.useState();
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      if (r) {
        E();
      }
      if ((e = o.onLoaded) !== null && e !== undefined) {
        e.call(o);
      }
    }, []);
    let E = async () => {
      a(await eg(r));
    };
    if (_) {
      return reactCoreLibraryReexport.createElement("span", Object.assign({}, o, {
        ref: t
      }), reactCoreLibraryReexport.createElement(urlPreviewComponents.UrlPreviewTag, Object.assign({
        className: i
      }, o, _, {
        udFontIcon: ed
      })));
    }
    let {
      url: l
    } = o;
    if (l) {
      return reactCoreLibraryReexport.createElement("span", Object.assign({}, o, {
        ref: t
      }), reactCoreLibraryReexport.createElement(urlPreviewComponents.UrlPreviewTag, Object.assign({
        className: i,
        udFontIcon: ed,
        title: o.title ?? ""
      }, o)));
    } else {
      return null;
    }
  });
  let ep = `data:image/svg+xml;charset=UTF-8,
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8739 15.6325L9.056 11.8146C8.6251 11.3837 7.92662 11.3837 7.49572 11.8146L2.2069 17.1034V4.41378H19.4499L20.7437 2.20688H1.10345C0.494345 2.20688 0 2.70122 0 3.31033V28.6896C0 29.2993 0.494345 29.7931 1.10345 29.7931H4.57269L12.8739 15.6325ZM27.5863 9.37927C27.5863 10.9031 26.3516 12.1379 24.8277 12.1379C23.3038 12.1379 22.0691 10.9031 22.0691 9.37927C22.0691 7.85541 23.3038 6.62065 24.8277 6.62065C26.3516 6.62065 27.5863 7.85541 27.5863 9.37927ZM25.2205 2.20688H30.8967C31.5058 2.20688 32.0001 2.70122 32.0001 3.31033V28.6896C32.0001 29.2987 31.5058 29.7931 30.8967 29.7931H9.04895L15.6961 18.4546L19.8622 22.6207L24.5993 17.8836C25.0302 17.4527 25.7287 17.4527 26.1596 17.8836L29.7932 21.5172V4.41378H23.9267L25.2205 2.20688Z" fill="#bbbfc4"/>
</svg>`.replace(/[\t\n\r]/gim, "").replace(/#/g, "%23");
  let eM = () => reactCoreLibraryReexport.createElement("img", {
    className: "open-url-preview__image--error",
    src: ep
  });
  let ef = e => {
    let {
      src: t,
      renderError: n = () => eM()
    } = e;
    let [r, i] = reactCoreLibraryReexport.useState(false);
    if (r) {
      return n();
    } else {
      return reactCoreLibraryReexport.createElement("img", {
        className: "open-url-preview__image",
        src: t,
        onError: () => {
          i(true);
        }
      });
    }
  };
  var urlPreviewElementRenderers = require("url-preview-element-renderers") /*id: 634744*/;
  var urlPreviewChattersRequest = require("url-preview-chatters-request") /*id: 804776*/;
  var pullUrlPreviewChattersListResponse = require("pull-url-preview-chatters-list-response") /*id: 406042*/;
  var pullChattersByIdsRequest = require("pull-chatters-by-ids-request") /*id: 746620*/;
  var chatterPullResponseEntity = require("chatter-pull-response-entity") /*id: 981911*/;
  async function eU(e, t) {
    let r = await larkApiCommandSender.sendApiCommand({
      cmd: protocolMessageTypes.tTi.PULL_URL_PREVIEW_CHATTERS_LIST,
      requestCodec: urlPreviewChattersRequest.UrlPreviewChatters,
      responseCodec: pullUrlPreviewChattersListResponse.pullUrlPreviewChattersListResponse,
      payload: {
        previewId: e,
        componentId: t
      }
    });
    return (r == null ? undefined : r.data)?.chatterIds || [];
  }
  async function eb(e) {
    let n = await larkApiCommandSender.sendApiCommand({
      cmd: protocolMessageTypes.tTi.PULL_CHATTERS_BY_IDS,
      requestCodec: pullChattersByIdsRequest.PullChattersByIdsRequest,
      responseCodec: chatterPullResponseEntity.PullChattersResponse,
      payload: {
        chatterIds: e
      }
    });
    let r = (n == null ? undefined : n.data)?.chatters;
    let i = {
      chatters: {}
    };
    if (r) {
      Object.entries(r).forEach(([e, t]) => {
        i.chatters[e] = {
          id: t.id,
          name: t.name,
          avatarKey: t.avatar.key
        };
      });
    }
    return i;
  }
  var cardPreviewLocaleConstants = require("card-preview-locale-constants") /*id: 7562*/;
  let ey = [{
    type: cardPreviewLocaleConstants.cardPreviewConstant.EMPTY,
    module: {
      Component: urlPreviewElementRenderers.ContainerElement
    }
  }, {
    type: cardPreviewLocaleConstants.cardPreviewConstant.LINEAR_LAYOUT,
    module: {
      Component: urlPreviewElementRenderers.LinearLayoutElement
    }
  }, {
    type: cardPreviewLocaleConstants.cardPreviewConstant.TEXT,
    module: {
      Component: urlPreviewElementRenderers.renderTextElement,
      wrapClassName: urlPreviewElementRenderers.textWrapClassName
    }
  }, {
    type: cardPreviewLocaleConstants.cardPreviewConstant.SPIN_BUTTON,
    module: {
      Component: urlPreviewElementRenderers.renderSpinButton
    }
  }, {
    type: cardPreviewLocaleConstants.cardPreviewConstant.TAG_LIST,
    module: {
      Component: urlPreviewElementRenderers.renderTagList,
      parseStyle: urlPreviewElementRenderers.cleanFlexStyle
    }
  }, {
    type: cardPreviewLocaleConstants.cardPreviewConstant.HEADER,
    module: {
      Component: e => {
        let [t, n] = reactCoreLibraryReexport.useState("");
        let {
          icon: r,
          faviconUrl: i
        } = e.element.header;
        reactCoreLibraryReexport.useEffect(() => {
          o();
        }, []);
        let o = async () => {
          if (r) {
            n(await k(r));
          } else {
            n(i || "");
          }
        };
        return reactCoreLibraryReexport.createElement(urlPreviewElementRenderers.PreviewHeader, Object.assign({}, e, {
          image: ef,
          udFontIcon: ed,
          iconUrl: t
        }));
      },
      wrapClassName: urlPreviewElementRenderers.headerWrapClassName
    }
  }, {
    type: cardPreviewLocaleConstants.cardPreviewConstant.RICHTEXT,
    module: {
      Component: e => reactCoreLibraryReexport.createElement(urlPreviewElementRenderers.renderRichText, Object.assign({}, e, {
        udFontIcon: ed
      }))
    }
  }, {
    type: cardPreviewLocaleConstants.cardPreviewConstant.IMAGE,
    module: {
      Component: e => {
        let [t, n] = reactCoreLibraryReexport.useState("");
        let [r, i] = reactCoreLibraryReexport.useState(false);
        let {
          image: o
        } = e.element;
        reactCoreLibraryReexport.useEffect(() => {
          _();
        }, []);
        let _ = async () => {
          if (o.image) {
            try {
              i(true);
              let e = await k(o.image);
              i(false);
              n(e);
            } catch (e) {
              i(false);
            }
          }
        };
        return reactCoreLibraryReexport.createElement(urlPreviewElementRenderers.renderImageElement, Object.assign({}, e, {
          udFontIcon: ed,
          imageUrl: t,
          loading: r
        }));
      },
      wrapClassName: urlPreviewElementRenderers.imageWrapClassName
    }
  }, {
    type: cardPreviewLocaleConstants.cardPreviewConstant.BUTTON,
    module: {
      Component: e => {
        let [t, n] = reactCoreLibraryReexport.useState("");
        let {
          icon: r
        } = e.element.button;
        reactCoreLibraryReexport.useEffect(() => {
          i();
        }, []);
        let i = async () => {
          if (r) {
            n(await k(r));
          }
        };
        return reactCoreLibraryReexport.createElement(urlPreviewElementRenderers.ButtonElement, Object.assign({}, e, {
          image: ef,
          udFontIcon: ed,
          iconUrl: t
        }));
      },
      wrapClassName: urlPreviewElementRenderers.buttonWrapClassName
    }
  }, {
    type: cardPreviewLocaleConstants.cardPreviewConstant.ICON_BUTTON,
    module: {
      Component: e => {
        let [t, n] = reactCoreLibraryReexport.useState("");
        let {
          icon: r
        } = e.element.iconButton;
        reactCoreLibraryReexport.useEffect(() => {
          i();
        }, []);
        let i = async () => {
          if (r) {
            n(await k(r));
          }
        };
        return reactCoreLibraryReexport.createElement(urlPreviewElementRenderers.IconButtonElement, Object.assign({}, e, {
          udFontIcon: ed,
          iconUrl: t
        }));
      },
      parseStyle: urlPreviewElementRenderers.cleanImageStyle
    }
  }, {
    type: cardPreviewLocaleConstants.cardPreviewConstant.VIDEO,
    module: {
      Component: function (e) {
        let {
          video: t
        } = e.element;
        let [n, r] = reactCoreLibraryReexport.useState("");
        reactCoreLibraryReexport.useEffect(() => {
          i();
        }, []);
        let i = async () => {
          if (t.coverImageUrl) {
            r(t.coverImageUrl);
          } else if (t.coverImage) {
            try {
              let e = await k(t.coverImage);
              r(e);
            } catch (e) {}
          }
        };
        return reactCoreLibraryReexport.createElement(urlPreviewElementRenderers.renderVideoElement, Object.assign({}, e, {
          coverImageUrl: n
        }));
      },
      parseStyle: urlPreviewElementRenderers.cleanAvatarStyle
    }
  }, {
    type: cardPreviewLocaleConstants.cardPreviewConstant.DOC_IMAGE,
    module: {
      Component: urlPreviewElementRenderers.renderDocImage,
      parseStyle: urlPreviewElementRenderers.cleanLayoutStyle,
      wrapClassName: urlPreviewElementRenderers.docImageWrapClass
    }
  }, {
    type: cardPreviewLocaleConstants.cardPreviewConstant.AVATAR,
    module: {
      Component: urlPreviewElementRenderers.renderAvatarElement
    }
  }, {
    type: cardPreviewLocaleConstants.cardPreviewConstant.CARD_CONTAINER,
    module: {
      Component: urlPreviewElementRenderers.CardContainer
    }
  }, {
    type: cardPreviewLocaleConstants.cardPreviewConstant.TIME,
    module: {
      Component: urlPreviewElementRenderers.TimeElement
    }
  }, {
    type: cardPreviewLocaleConstants.cardPreviewConstant.CHATTERS_PREVIEW,
    module: {
      Component: e => reactCoreLibraryReexport.createElement(urlPreviewElementRenderers.ChattersPreview, Object.assign({}, e, {
        getUrlPreviewChatterIds: eU,
        mGetChatters: eb
      })),
      parseStyle: urlPreviewElementRenderers.cleanTextStyle
    }
  }, {
    type: cardPreviewLocaleConstants.cardPreviewConstant.ENGINE,
    module: {
      Component: urlPreviewElementRenderers.renderEngineElement
    }
  }];
  async function eh(e) {
    urlPreviewCacheUtilityModule.urlPreviewManager.init(Object.assign(Object.assign({}, e), {
      registeredElements: urlPreviewCacheUtilityModule.deduplicateByType(ey.concat((e == null ? undefined : e.registeredElements) || [])),
      urls: {},
      inited: true
    }));
    window.__url_config = urlPreviewCacheUtilityModule.urlPreviewManager;
    return urlPreviewCacheUtilityModule.urlPreviewManager;
  }
  var appConfigExtendedInitializer = require("app-config-extended-initializer") /*id: 806887*/;
  async function ew(e, t) {
    let n = function () {
      let e = appConfigExtendedInitializer.extendedAppConfig.getByKey("user");
      if (!e || r) {
        return r;
      }
      let t = new urlPreviewCacheUtilityModule.AesGcmCrypto({
        privateKey: e.id.slice(0, 16).padEnd(16, "#")
      });
      let n = appConfigExtendedInitializer.extendedAppConfig.getByKey("locale");
      return r = new urlPreviewCacheUtilityModule.IndexedDbCache({
        maxCount: 100,
        crypto: t,
        dbName: `${e.id}_${e.tenantId}`,
        storeName: `${n}-PreviewEntity`
      });
    }();
    if (t === "LocalOnly" || t === "LocalFallbackRemote") {
      let r = await (n == null ? undefined : n.getItem(JSON.stringify(e)));
      if (t === "LocalOnly" || r) {
        if (r == null) {
          return undefined;
        } else {
          return r.value;
        }
      }
    }
    let i = await eE(e);
    if (n != null) {
      n.setItem(JSON.stringify(e), i);
    }
    return i;
  }
  var pullUserSettingRequest = require("pull-user-setting-request") /*id: 591152*/;
  var userSettingsSchemaDef = require("user-settings-schema-def") /*id: 805396*/;
  async function ex() {
    if (i === undefined) {
      i = larkApiCommandSender.sendApiCommand({
        cmd: 7009,
        requestCodec: pullUserSettingRequest.UserSettingRequest,
        responseCodec: userSettingsSchemaDef.UserSettingResponse,
        payload: {}
      }).then(e => e.data);
    }
    let n = await i;
    return (n == null ? undefined : n.setting)?.timeFormatSetting?.timeFormat;
  }
  require.d(exports, {
    getUserTimeFormat: function () {
      return ex;
    },
    UrlPreviewDisplay: function () {
      return eL;
    },
    processPreviewIcon: function () {
      return eS;
    },
    processPreviewEntity: function () {
      return eg;
    },
    initUrlPreviewManager: function () {
      return eh;
    },
    getUrlPreviewWithCache: function () {
      return ew;
    },
    UrlPreviewApi: function () {
      return o;
    }
  });
  require.r(o);
  require.d(o, {
    doUrlPreviewAction: function () {
      return ea;
    },
    getTempUrlPreview: function () {
      return et;
    },
    getTempUrlPreviewByBatch: function () {
      return er;
    },
    getTempUrlPreviewByBatchV2: function () {
      return ei;
    },
    getUrlPreviews: function () {
      return eo;
    },
    getUrlPreviewsWithMemoize: function () {
      return eE;
    },
    notifyCreatePreview: function () {
      return e_;
    },
    pullVideoInfo: function () {
      return $;
    }
  });
}