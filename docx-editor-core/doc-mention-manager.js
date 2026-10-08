// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZF' to 'getMentionUid'
// - Renamed export '_C' to 'getBlockMentionIds'
// - Renamed export '_k' to 'hasMissingMentionId'
// - Renamed export 'aO' to 'syncMentionIds'
// - Renamed export 'nF' to 'getMentionUserMap'
// - Renamed export 'nT' to 'sendMentionNotify'
// - Renamed export 'u' to 'isCurrentUser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 682074
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var toastNotificationManager_1 = require("toast-notification-manager_1") /*id: 737977*/;
  var docMentionNotificationManager = require("doc-mention-notification-manager") /*id: 350832*/;
  var mentionNotificationApiService = require("mention-notification-api-service") /*id: 610637*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var fileTypeSyncUtil = require("file-type-sync-util") /*id: 725466*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var contentDeltaUtilityFunctions = require("content-delta-utility-functions") /*id: 348536*/;
  var inlineComponentConstants = require("inline-component-constants") /*id: 427890*/;
  var docInlineComponentUtils = require("doc-inline-component-utils") /*id: 595942*/;
  var docBlockPermissionUtils = require("doc-block-permission-utils") /*id: 954681*/;
  function b(e, n) {
    if (!docBlockTypeConstants.agendaCodeTypes.includes(e.type)) {
      return [];
    }
    let i = e.snapshot.text;
    if (!i.apool) {
      return [];
    }
    let {
      apool: r
    } = i;
    let {
      nextNum: o,
      numToAttrib: l
    } = r;
    if (!o) {
      return [];
    }
    let a = [];
    for (let [e, i] of Object.values(l)) {
      if (e === inlineComponentConstants.componentType && i.indexOf(inlineComponentConstants.mentionTypes.USER) !== -1) {
        let e = docInlineComponentUtils.parseJsonSafe(i);
        if (e && e.data) {
          if (n) {
            if (n === e.data.mention_id) {
              return [e];
            }
          } else {
            a.push(e);
          }
        }
      }
    }
    return a;
  }
  function _(e) {
    var n;
    if ((n = e.structService.root) !== null && n !== undefined) {
      n.traverse(e => {
        b(e).forEach(n => {
          if (!n.data.mention_id) {
            docMentionNotificationManager.docMentionNotifier.addMentionId(docxEditorCore.getBlockModel(e), n.id, platformDocUtils.yw$());
          }
        });
      });
    }
  }
  function y(e) {
    return b(e).reduce((e, n) => {
      let i = n.data.mention_id;
      if (i) {
        e.push(i);
      }
      return e;
    }, []);
  }
  function E(e) {
    var n;
    let i = false;
    if ((n = e.structService.root) !== null && n !== undefined) {
      n.traverse(e => {
        b(e).forEach(e => {
          if (!e.data.mention_id) {
            i = true;
          }
        });
      });
    }
    return i;
  }
  function S(e, n, i) {
    var r;
    let o = new Map();
    let l = [];
    let a = new Set(e);
    if ((r = i.structService.root) !== null && r !== undefined) {
      r.traverse(e => {
        if (!a.size) {
          return false;
        }
        let {
          type: i,
          recordId: r
        } = e;
        if (docBlockPermissionUtils.SUPPORTED_BLOCKS.includes(i)) {
          (n.get(r) || []).forEach(e => {
            let {
              mentionId: n
            } = e;
            let {
              userId: i
            } = e.userInfo;
            if (!!a.has(i) && !o.has(i)) {
              l.push({
                userId: i,
                mentionId: n
              });
              o.set(i, n);
              a.delete(i);
            }
          });
        } else if (docBlockTypeConstants.agendaCodeTypes.includes(i)) {
          let n = e.snapshot;
          contentDeltaUtilityFunctions.I(n.text, inlineComponentConstants.componentType, e => {
            if (a.size === 0) {
              return false;
            }
            let n = docInlineComponentUtils.parseJsonSafe(e);
            if ((n == null ? undefined : n.type) !== inlineComponentConstants.mentionTypes.USER) {
              return;
            }
            let i = n.data.mention_id;
            let r = n.data.uid;
            if (!!i && !!r && !!a.has(r) && !o.has(r)) {
              l.push({
                userId: r,
                mentionId: i
              });
              o.set(r, i);
              a.delete(r);
            }
          });
        }
        return true;
      });
    }
    return l;
  }
  function I(e, n, i) {
    let r = i.structService.getBlockStructsByRecordId(n)[0];
    if (!r) {
      return;
    }
    let o = b(r, e)[0];
    if (o) {
      return o.data.uid;
    }
  }
  async function k(e, n) {
    var i;
    let r = [...e.userIds].concat((e == null ? undefined : (i = e.entities) === null || i === undefined ? undefined : i.users.map(e => e.id)) || []);
    let o = syncUrlBlockUtils.isSyncingActive() ? syncUrlBlockUtils.getUrlToken() : docTokenHelperUtils.resolveDocToken();
    let a = await mentionNotificationApiService.sendBatchMentionNotify({
      source: fileTypeSyncUtil.getCurrentFileType(),
      fileType: fileTypeSyncUtil.getDefaultFileType(),
      fileToken: o,
      ...e
    }).catch(e => {
      if (e.code === docBlockPermissionUtils.PermissionStatus.LIMIT_SINGLE) {
        toastNotificationManager_1.toastManager.show({
          type: "error",
          content: t("CreationDoc_Common_TooManyReq_Toast")
        });
      } else if (e.code === docBlockPermissionUtils.PermissionStatus.LIMIT_ALL) {
        toastNotificationManager_1.toastManager.show({
          type: "error",
          content: t("LarkCCM_Docs_Mention_TryAgainIn1_Toast")
        });
      } else {
        toastNotificationManager_1.toastManager.show({
          type: "error",
          content: t("LarkCCM_Docs_Mention_CantNotify_Toast")
        });
      }
      if (n != null) {
        n.updateMentionPanelNotifyStatus(r, true, e.code === docBlockPermissionUtils.PermissionStatus.LIMIT_ALL, true);
      }
    });
    if (!a) {
      return;
    }
    let {
      strange_users: d,
      not_notify_users: h
    } = a.data;
    if (a.code === docBlockPermissionUtils.PermissionStatus.SUCCESS && d && d.length) {
      toastNotificationManager_1.toastManager.show({
        type: "error",
        content: t("LarkCCM_Docs_Mention_CantNotify2_Toast")
      });
    }
    if (a.code === docBlockPermissionUtils.PermissionStatus.SUCCESS && h && h.length && n) {
      let e = t("LarkCCM_Docs_Mention_NotNotify_UserListed_Toast", {
        users: h.map(e => {
          return n.getUserInfo(e.id)?.userName;
        }).slice(0, 5).join(","),
        number: h.length
      });
      toastNotificationManager_1.toastManager.show({
        type: "error",
        content: e
      });
    }
    if (n != null) {
      n.updateMentionPanelNotifyStatus(r, true, !!e.isWhole, Array.from(new Set([...(d || []), ...(h || [])])).length === r.length);
    }
    return a;
  }
  function C(e) {
    return userEnvironmentUtils.getUserInfo().userId === e;
  }
  require.d(exports, {
    getMentionUid: function () {
      return I;
    },
    getBlockMentionIds: function () {
      return y;
    },
    hasMissingMentionId: function () {
      return E;
    },
    syncMentionIds: function () {
      return _;
    },
    getMentionUserMap: function () {
      return S;
    },
    sendMentionNotify: function () {
      return k;
    },
    isCurrentUser: function () {
      return C;
    }
  });
}