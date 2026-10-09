// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'docMentionNotifier'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 350832
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var l;
  var fileNodeSelectorUtils = require("file-node-selector-utils") /*id: 696977*/;
  var chatUserInfoService = require("chat-user-info-service") /*id: 152763*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var syncedReferenceBlockUtil = require("synced-reference-block-util") /*id: 759293*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var fileTypeSyncUtil = require("file-type-sync-util") /*id: 725466*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var syncedBlockFeatureFlags = require("synced-block-feature-flags") /*id: 711756*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var inlineComponentFacade = require("inline-component-facade") /*id: 678614*/;
  var docMentionManager = require("doc-mention-manager") /*id: 682074*/;
  var docBlockPermissionUtils = require("doc-block-permission-utils") /*id: 954681*/;
  var mentionUserServiceProvider = require("mention-user-service-provider") /*id: 326879*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  (r = {})[r.DEFAULT = 0] = "DEFAULT";
  r[r.CONTAINER = 1] = "CONTAINER";
  r[r.SINGLE = 2] = "SINGLE";
  let S = r;
  (o = {})[o.SUCCESS = 0] = "SUCCESS";
  o[o.CANCEL = 1] = "CANCEL";
  o[o.NOT_PERMISSION = 2] = "NOT_PERMISSION";
  o[o.FAILED = 3] = "FAILED";
  o[o.NOT_ALLOW = 4] = "NOT_ALLOW";
  o[o.SAME_USER = 5] = "SAME_USER";
  o[o.NOT_NEED_NOTIFICATION = 6] = "NOT_NEED_NOTIFICATION";
  let I = o;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  (l = {}).unexception = "unexception";
  l.linkMentionToContentStart = "link_mention_to_content_start";
  l.linkMentionToContentFail = "link_mention_to_content_fail";
  l.linkMentionToContentSuccess = "link_mention_to_content_success";
  let C = l;
  function T(e, n, i) {
    i.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("docx_mention_dev", {
      action: e,
      data: n
    });
  }
  var mentionNotificationApiService = require("mention-notification-api-service") /*id: 610637*/;
  var toastNotificationManager_1 = require("toast-notification-manager_1") /*id: 737977*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let w = "CreationDoc_ECM_NewContacts.BlockNotificationNotAllow";
  let O = "CreationDoc_ECM_NewContacts.BlockNotificationCancel";
  let A = "CreationDoc_ECM_NewContacts.BlockNotificationConfirmExternal";
  function D() {
    let e = t("LarkCCM_BlockSettings_UnableToSendMessage_Toast");
    toastNotificationManager_1.toastManager.remove(w);
    toastNotificationManager_1.toastManager.show({
      key: w,
      type: "error",
      content: e,
      duration: 3000,
      closable: false
    });
  }
  function L(e, n, i, r) {
    return new Promise(o => {
      let l = {
        left: 0,
        top: 0,
        height: 0,
        width: 0
      };
      if (e instanceof HTMLElement) {
        let n = e.getBoundingClientRect();
        l.left = n.x;
        l.top = n.y;
        l.height = n.height;
        l.width = n.width;
      } else {
        l = e;
      }
      let {
        left: a,
        top: s,
        height: u,
        width: d
      } = l;
      let h = reactJsxRuntimeCoreReexport.jsx("span", {
        style: {
          position: "fixed",
          left: `${a}px`,
          top: `${s}px`,
          height: `${u}px`,
          width: `${d}px`
        }
      });
      let f = () => {
        o(false);
        platformDocUtils.Gxh.remove();
        if (r != null) {
          r.editor.off("selectionchange", f);
        }
      };
      let g = window.setTimeout(() => {
        f();
      }, 3000);
      if (r != null) {
        r.editor.on("selectionchange", f);
      }
      platformDocUtils.Gxh.showMentionShareConfirm({
        userInfo: {
          id: n,
          name: i
        },
        className: "mention-sheet atuser-share-popover",
        children: h,
        onConfirm: () => {
          o(true);
          platformDocUtils.Gxh.remove();
        },
        onCancel: f,
        onPopoverMouseEnter: () => {
          if (g) {
            window.clearTimeout(g);
          }
        },
        onPopoverMouseLeave: () => {
          if (g) {
            window.clearTimeout(g);
          }
          g = window.setTimeout(() => {
            f();
          }, 1000);
        }
      });
    });
  }
  function P(e, n, i) {
    var r;
    if ((n = typeof (r = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, n || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, n, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = i;
    }
    return e;
  }
  var B = new class {
    get token() {
      if (syncUrlBlockUtils.isSyncingActive() && syncedBlockFeatureFlags.isSyncedBlockAuthorised(syncUrlBlockUtils.getUrlToken())) {
        return syncUrlBlockUtils.getUrlToken();
      } else {
        return docTokenHelperUtils.resolveDocToken();
      }
    }
    get fileType() {
      if (syncUrlBlockUtils.isSyncingActive() && syncedBlockFeatureFlags.isSyncedBlockAuthorised(syncUrlBlockUtils.getUrlToken())) {
        return fileTypeSyncUtil.getCurrentFileType();
      } else {
        return fileNodeSelectorUtils.getDefaultDocType(reduxStoreInitializer.reduxStore.getState());
      }
    }
    constructor() {
      P(this, "undoneSharePromise", undefined);
      P(this, "destroy", () => {
        this.undoneSharePromise = undefined;
      });
      P(this, "addMentionNotify", async e => {
        let {
          receiver: i,
          textBlock: r,
          id: o,
          needNotification: l,
          mentionId: a,
          isTodo: d
        } = e;
        let {
          id: h,
          name: g,
          isCrossTenant: p
        } = i;
        let {
          token: m
        } = this;
        if (h === chatUserInfoService.userInfoService.getCurrentUser().get("id")) {
          return {
            code: I.SAME_USER
          };
        }
        platformDocUtils.mmT.addUser(h);
        let [b] = await Promise.all([platformDocUtils.dhq(h), platformDocUtils.mmT.registerUserPermission(h, 8000)]);
        if (b) {
          if (l) {
            D();
          }
          return {
            code: I.NOT_ALLOW
          };
        }
        let y = r.model.zoneState.getContent().ops.find(e => {
          if (e.attributes?.[inlineComponentFacade.componentType]) {
            let {
              id: n
            } = JSON.parse(e.attributes[inlineComponentFacade.componentType]);
            if (o === n) {
              return true;
            }
          }
          return false;
        });
        if (!y) {
          return {
            code: I.CANCEL
          };
        }
        if (!l && docBlockPermissionUtils.isNotMobile) {
          return {
            code: I.NOT_NEED_NOTIFICATION
          };
        }
        let E = this.checkUserHasReadPermission(h);
        let k = this.checkUserHasSharePermission();
        if (!k && !E) {
          return {
            code: I.NOT_PERMISSION
          };
        }
        if (!docBlockPermissionUtils.isNotMobile && !E && k) {
          let e = await this.handleWhenNoMentionRefactorAndNoReceiverReadPermission({
            textBlock: r,
            userComponentNode: y,
            receiverId: h,
            name: g,
            needNotification: l,
            isTodo: d
          });
          if (e) {
            return e;
          }
        }
        if (!l && !docBlockPermissionUtils.isNotMobile) {
          return {
            code: I.NOT_NEED_NOTIFICATION
          };
        }
        let M = new Promise(this.shouldShowExternalConfirm(p) ? e => {
          let n = t("permission.invite_confirm", {}, "", g);
          toastNotificationManager_1.toastManager.show({
            key: A,
            content: reactJsxRuntimeCoreReexport.jsxs("div", {
              className: "toast-confirm",
              children: [reactJsxRuntimeCoreReexport.jsx("p", {
                className: "toast-text",
                children: n
              }), reactJsxRuntimeCoreReexport.jsx("button", {
                type: "button",
                className: "toast-button",
                onClick: () => {
                  toastNotificationManager_1.toastManager.remove(A);
                  e(false);
                },
                children: t("common.confirm")
              })]
            }),
            duration: 8000,
            className: "permissionToast",
            onClose: () => e(true)
          });
        } : d ? e => {
          platformDocUtils.Gxh.showTodoCancelToast({
            userInfo: {
              id: h,
              name: g
            },
            onTodoConfirm: n => {
              n.then(n => {
                if (n !== undefined) {
                  e(true);
                }
                return null;
              }).catch(e => {});
            }
          });
        } : e => {
          let n;
          toastNotificationManager_1.toastManager.remove(O);
          n = platformDocUtils.OlJ && platformDocUtils.tFW() && !E ? platformDocUtils.OlJ([g], S.SINGLE) : t("CreationDoc_FeishuDocs_Mention_Notification_Toast", {}, "", g);
          toastNotificationManager_1.toastManager.show({
            key: O,
            content: reactJsxRuntimeCoreReexport.jsxs("div", {
              className: "toast-confirm",
              children: [reactJsxRuntimeCoreReexport.jsx("p", {
                className: "toast-text",
                children: n
              }), reactJsxRuntimeCoreReexport.jsx("button", {
                type: "button",
                className: "toast-button",
                onClick: () => {
                  toastNotificationManager_1.toastManager.remove(O);
                  e(true);
                },
                children: t("common.undo")
              })]
            }),
            duration: 8000,
            className: "permissionToast",
            cancelText: t("common.undo"),
            onClose: () => e(false)
          });
        });
        if (await Promise.race([M, docxUtilityHelpers.delayPromise(8000)])) {
          return {
            code: I.CANCEL
          };
        }
        try {
          if (m !== this.token) {
            return {
              code: I.FAILED
            };
          }
          let {
            editorAPI: e
          } = r.model;
          let i = syncedReferenceBlockUtil.buildSyncedRefQuery(h, a, e);
          if (docBlockPermissionUtils.isNotMobile) {
            await this.sendNotifyWithMentionRefactor({
              textBlock: r,
              receiverId: h,
              mentionId: a,
              hasReceiverReadPermission: E,
              isTodo: d
            });
          } else {
            let l = {
              receiverId: h,
              mentionId: "",
              entities: i,
              editorAPI: e
            };
            let a = d ? await this.sendTodoNotify(l) : await this.sendNotify(l);
            if (!a) {
              return {
                code: I.FAILED
              };
            }
            T(C.linkMentionToContentStart, {
              mentionId: a.data.mention_id
            }, r.blockManager);
            if (a.data?.mention_id) {
              this.addMentionId(r.model, o, a.data.mention_id);
            }
          }
          return {
            code: I.SUCCESS
          };
        } catch (e) {
          T(C.unexception, {
            error: e,
            msg: "addMentionId 发送通知失败"
          }, r.blockManager);
          return {
            code: I.FAILED
          };
        }
      });
      P(this, "addTaskMemberMentionNotify", async (e, n, i) => {
        let {
          id: r,
          name: o
        } = e;
        if (r === chatUserInfoService.userInfoService.getCurrentUser().get("id")) {
          return {
            code: I.SAME_USER
          };
        }
        if (this.checkUserNotAllowNotify()) {
          D();
          return {
            code: I.NOT_ALLOW
          };
        }
        platformDocUtils.mmT.addUser(r);
        await platformDocUtils.mmT.registerUserPermission(r, 8000);
        let l = n(r);
        if (!l || this.checkUserHasReadPermission(r)) {
          return {
            code: I.CANCEL
          };
        }
        if (!this.checkUserHasSharePermission()) {
          return {
            code: I.NOT_PERMISSION
          };
        }
        if (!(await L(l, r, o))) {
          return {
            code: I.CANCEL
          };
        }
        this.undoneSharePromise = this.shareToOther({
          pageToken: this.token,
          otherUserId: r,
          editorAPI: i
        });
        try {
          await this.undoneSharePromise;
          return {
            code: I.SUCCESS
          };
        } catch (e) {
          return {
            code: I.FAILED
          };
        }
      });
      P(this, "addMentionId", (e, n, i) => {
        let {
          zoneState: r
        } = e;
        let o = {
          start: {
            line: 0,
            offset: 0
          },
          end: {
            line: r.length(),
            offset: r.getLine(r.length() - 1).length()
          }
        };
        let l = r.getEntities(o, (e, i) => {
          if (e === inlineComponentFacade.componentType) {
            let {
              id: e
            } = JSON.parse(i);
            return n === e;
          }
          return false;
        });
        if (!l.length) {
          T(C.linkMentionToContentFail, {
            mentionId: i,
            msg: "no entity"
          }, e.blockManager);
          return {
            code: I.FAILED
          };
        }
        let a = JSON.parse(l[0].attributes[inlineComponentFacade.componentType]);
        a.data.mention_id = i;
        let {
          start: s,
          end: c,
          attributes: u
        } = l[0];
        e.setAttributes({
          start: s,
          end: c
        }, {
          ...u,
          "inline-component": JSON.stringify(a)
        });
        T(C.linkMentionToContentSuccess, {
          mentionId: i
        }, e.blockManager);
      });
      P(this, "sendTodoNotify", async e => {
        let {
          receiverId: n,
          editorAPI: i
        } = e;
        await this.shareEditToOther({
          pageToken: this.token,
          otherUserId: n,
          editorAPI: i
        });
        return this.sendNotify(e);
      });
      P(this, "checkUserHasReadPermission", e => {
        if (!platformDocUtils.zX_) {
          return false;
        }
        let n = platformDocUtils.zX_(reduxStoreInitializer.reduxStore.getState(), e);
        return n && n[platformDocUtils.G0H.Readable];
      });
      P(this, "checkUserHasSharePermission", () => !!platformDocUtils.lwg && platformDocUtils.lwg(reduxStoreInitializer.reduxStore.getState()));
      P(this, "shouldShowExternalConfirm", e => {
        let n = platformDocUtils.IiI();
        return e && !platformDocUtils.J_i() && n;
      });
      P(this, "sendNotify", async e => {
        let {
          fileType: n,
          token: i,
          undoneSharePromise: r
        } = this;
        let o = chatUserInfoService.userInfoService.getCurrentUser().get("id");
        let {
          receiverId: l,
          mentionId: a,
          immediately: c,
          mentionUserService: u,
          entities: d
        } = e;
        if (!c && r) {
          await r;
        }
        if (docBlockPermissionUtils.isNotMobile) {
          return docMentionManager.sendMentionNotify({
            userIds: [l],
            mentionIds: {
              [l]: a
            },
            isWhole: mentionNotificationApiService.NotifyType.SINGLE,
            entities: d
          }, u);
        } else {
          return mentionNotificationApiService.sendMentionNotify(o, {
            fileType: n,
            fileToken: i,
            userId: l,
            source: "doc",
            mentionId: a
          });
        }
      });
      P(this, "shareToOther", async e => {
        let {
          pageToken: n,
          otherUserId: i,
          editorAPI: r,
          permType: o
        } = e;
        if (this.undoneSharePromise) {
          await this.undoneSharePromise;
        }
        let {
          fileType: l
        } = this;
        let a = {
          fileType: l,
          userId: i,
          noToast: true,
          source: "docx",
          finalPermType: platformDocUtils.tFW() ? o || platformDocUtils.Lsv() : undefined
        };
        try {
          if (n) {
            await platformDocUtils.CEi("READABLE", {
              ...a,
              fileToken: n
            });
          }
          let e = syncedReferenceBlockUtils.isChangeFromCurrentEditor_1(r);
          if (e && syncedReferenceBlockUtils.getSyncedBlockPermission(r)?.inviteCanView && !syncedBlockFeatureFlags.isSyncedBlockAuthorised(e)) {
            await platformDocUtils.CEi("READABLE", {
              ...a,
              fileToken: e
            });
          }
        } catch (e) {}
      });
      P(this, "shareEditToOther", async e => {
        let {
          pageToken: n,
          otherUserId: i,
          editorAPI: r
        } = e;
        let {
          fileType: o
        } = this;
        let l = {
          fileType: o,
          userId: i,
          noToast: true,
          source: "docx"
        };
        try {
          if (n) {
            await platformDocUtils.CEi("EDITABLE", {
              ...l,
              fileToken: n
            });
          }
          let e = syncedReferenceBlockUtils.isChangeFromCurrentEditor_1(r);
          if (e && syncedReferenceBlockUtils.getSyncedBlockPermission(r)?.inviteCanEdit && !syncedBlockFeatureFlags.isSyncedBlockAuthorised(e)) {
            await platformDocUtils.CEi("EDITABLE", {
              ...l,
              fileToken: e
            });
          }
        } catch (e) {}
      });
      P(this, "checkUserNotAllowNotify", () => false);
      P(this, "handleWhenNoMentionRefactorAndNoReceiverReadPermission", async e => {
        let {
          textBlock: n,
          userComponentNode: i,
          receiverId: r,
          name: o,
          needNotification: l,
          isTodo: a
        } = e;
        let {
          editor: s
        } = n;
        if (!i.attributes) {
          return {
            code: I.CANCEL
          };
        }
        let c = n.model.zoneState.getEntities([[inlineComponentFacade.componentType, i.attributes[inlineComponentFacade.componentType]]]);
        if (!c.length) {
          return {
            code: I.CANCEL
          };
        }
        let u = s.rectModule.getRawRangeRect(c[0]);
        if (!(await L(u, r, o, n))) {
          return {
            code: I.CANCEL
          };
        }
        if (!a || !l) {
          let {
            editorAPI: e
          } = n.blockManager;
          this.undoneSharePromise = this.shareToOther({
            pageToken: this.token,
            otherUserId: r,
            editorAPI: e
          });
        }
      });
      P(this, "sendNotifyWithMentionRefactor", async e => {
        let {
          textBlock: i,
          receiverId: r,
          mentionId: o,
          isTodo: l,
          hasReceiverReadPermission: a
        } = e;
        let {
          editorAPI: s
        } = i.model;
        let c = s.getService(mentionUserServiceProvider.mentionUserSvcKey, {
          optional: true
        });
        let d = i == null ? undefined : i.record?.id;
        let h = syncedReferenceBlockUtil.buildSyncedRefQuery(r, o, s, d);
        if (l) {
          await this.sendTodoNotify({
            receiverId: r,
            mentionId: o,
            entities: h,
            editorAPI: s
          });
        } else {
          if (!a) {
            this.undoneSharePromise = this.shareToOther({
              pageToken: this.token,
              otherUserId: r,
              editorAPI: s,
              permType: S.SINGLE
            });
          }
          await this.sendNotify({
            receiverId: r,
            mentionId: o,
            immediately: false,
            mentionUserService: c,
            entities: h
          });
        }
        T(C.linkMentionToContentStart, {
          mentionId: o
        }, i.blockManager);
      });
    }
  }();
  require.d(exports, {
    docMentionNotifier: function () {
      return B;
    }
  });
}