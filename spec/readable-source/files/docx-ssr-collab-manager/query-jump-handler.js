// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'mY' to 'reminderConstants'
// - Renamed export 'ZP' to 'queryJumpManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 9960.98cb0478.js
         * chunkId: 9960
         * moduleId: 932663
         */
module.exports = function (module, exports, require) {
  var s;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docComponentStubConfig = require("doc-component-stub-config") /*id: 436674*/;
  var docxErrorToastHandler = require("docx-error-toast-handler") /*id: 230438*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var editorCommands = require("editor-commands") /*id: 361547*/;
  var dateTimeReminderUtils = require("date-time-reminder-utils") /*id: 20927*/;
  var collabTriggersProvider = require("collab-triggers-provider") /*id: 164012*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  (s = {}).Reminder = "reminder_id";
  let f = s;
  let v = e => {
    if (!browserEnvironmentDetectionUtils.browserDetector.isMobile && platformDocUtils.o0s.cleanParamFromSearch) {
      platformDocUtils.o0s.cleanParamFromSearch(location.href, e);
    }
  };
  let g = {
    [f.Reminder]: {
      deletedMsg: t("reminder.toast.deleted"),
      getJumpRecordId: (e, i) => {
        let {
          block_id: r,
          reminder_id: s
        } = i;
        let n = s && Array.isArray(s) ? s[0] : s;
        let o = m(i);
        if (o && n) {
          v("block_id");
          if (dateTimeReminderUtils.hasReminder(n, o, e)) {
            return r;
          } else {
            return "";
          }
        } else {
          return "";
        }
      }
    }
  };
  let p = Object.keys(g);
  let _ = new class {
    get jumped() {
      return this._jumped;
    }
    waitFetchMissing(e) {
      return new Promise(i => {
        if (!e.editorAPI.getService(collabTriggersProvider.collabProvider, {
          optional: true
        })?.isSynchronizing) {
          i();
        }
        let s = () => {
          docxEditorEventConstantsAndManager.globalEventBus.off(docxEditorEventConstantsAndManager.eventConstants.COMMON.ALL_MISSED_APPLIED, s);
          i();
        };
        docxEditorEventConstantsAndManager.globalEventBus.once(docxEditorEventConstantsAndManager.eventConstants.COMMON.ALL_MISSED_APPLIED, s);
      });
    }
    afterJumped() {
      this._jumped = true;
    }
    resetJumped() {
      this._jumped = false;
    }
    getQueryJumpInfo() {
      let e = platformDocUtils.o0s.parseQuery(location.href);
      return [p.find(i => !!e[i]), e];
    }
    maybeDoQueryJump(e) {
      let [i, r] = this.getQueryJumpInfo();
      if (i) {
        this.queryJump(e, i, r);
      }
    }
    async queryJump(e, i, r) {
      let s = m(r);
      await this.waitFetchMissing(e);
      if (s) {
        await function (e, i) {
          let r = e.getBlockStructsByRecordId(i)[0];
          return !!r && (!r.isDataPending() || new Promise(r => {
            let s = 0;
            let n = e.structService.mutation$.subscribe(() => {
              let n = e.getBlockStructsByRecordId(i)[0];
              if (n && !n.isDataPending()) {
                clearTimeout(s);
                r(true);
              }
            });
            s = window.setTimeout(() => {
              n.unsubscribe();
              r(false);
            }, 15000);
          }));
        }(e, s);
      }
      let n = g[i];
      let o = n.getJumpRecordId(e, r);
      if (o) {
        docxEditorEventConstantsAndManager.globalEventBus.trigger(editorCommands.editorCommands.LocateBlockWithRecordId, [o]);
      } else {
        this.showDeleteToast(i, n.deletedMsg);
      }
      this.afterJumped();
      v(i);
    }
    showDeleteToast(e, i) {
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp) {
        docComponentStubConfig.toastStub.showToast({
          type: 1,
          message: i,
          key: e,
          duration: 3
        });
        return;
      }
      docxErrorToastHandler.showErrorToast({
        closable: true,
        content: i,
        key: e
      });
    }
    constructor() {
      var e;
      var i;
      if ((e = typeof (i = function (e, i) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var s = r.call(e, i || "default");
          if (typeof s != "object") {
            return s;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (i === "string" ? String : Number)(e);
      }(e = "_jumped", "string")) == "symbol" ? i : i + "") in this) {
        Object.defineProperty(this, e, {
          value: false,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = false;
      }
    }
  }();
  function m(e) {
    let {
      block_id: i
    } = e;
    if (i && Array.isArray(i)) {
      return i[0];
    } else {
      return i;
    }
  }
  exports.queryJumpManager = _;
  require.d(exports, {
    reminderConstants: function () {
      return f;
    }
  });
}