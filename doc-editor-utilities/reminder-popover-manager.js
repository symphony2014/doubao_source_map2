// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'reminderManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 92677.dc8034b0.js
         * chunkId: 92677
         * moduleId: 525119
         */
module.exports = function (module, exports, require) {
  var domClassLayoutUtils = require("dom-class-layout-utils") /*id: 418505*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var inlineComponentFacade = require("inline-component-facade") /*id: 678614*/;
  var inlineComponentConstants = require("inline-component-constants") /*id: 427890*/;
  var docxReminderConstants = require("docx-reminder-constants") /*id: 770772*/;
  var dateTimeReminderUtils_1 = require("date-time-reminder-utils_1") /*id: 25358*/;
  var contentDeltaUtilityFunctions = require("content-delta-utility-functions") /*id: 348536*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var reminderPopoverConstantsUtils = require("reminder-popover-constants-utils") /*id: 719964*/;
  var contentModeTypes = require("content-mode-types") /*id: 145497*/;
  function m(e, n, r) {
    var i;
    if ((n = typeof (i = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, n || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  let _ = new class {
    init(e) {
      this.bindEvent();
    }
    showPopover(e) {
      let {
        block: n,
        reminderInfo: r,
        type: i,
        users: s,
        reminderRef: l
      } = e;
      this.debounceHideSimplePopover.cancel();
      if (this.block && this.reminderInfo && this.popoverType && this.users && this.reminderRef && this.isPopoverVisible) {
        let e = {
          blockId: this.block.id,
          reminderInfo: this.reminderInfo,
          type: this.popoverType,
          users: this.users
        };
        let u = {
          blockId: n.id,
          reminderInfo: r,
          type: i,
          users: s
        };
        if (!deepEqualUtil_1.deepEqual(e, u)) {
          this.setData({
            block: n,
            reminderInfo: r,
            type: i,
            users: s,
            reminderRef: l
          });
          this.triggerUpdatePopoverEvent({
            prev: e,
            curr: u
          });
          return;
        }
      }
      this.setData({
        block: n,
        reminderInfo: r,
        type: i,
        users: s,
        reminderRef: l
      });
      if (i === contentModeTypes.ContentModeType.Simple) {
        this.debounceShowSimplePopover();
      } else {
        this.triggerOpenPopoverEvent();
      }
    }
    hidePopover(e) {
      if (e === this.reminderInfo?.id && this.block && this.reminderInfo && this.popoverType) {
        if (this.popoverType === contentModeTypes.ContentModeType.Simple) {
          this.debounceShowSimplePopover.cancel();
          this.debounceHideSimplePopover();
        } else {
          this.triggerClosePopoverEvent();
        }
      }
    }
    updatePopover(e) {
      let {
        block: n,
        reminderInfo: r,
        users: i,
        reminderRef: s
      } = e;
      if (this.block && this.reminderInfo && this.popoverType && this.isPopoverVisible) {
        if (this.reminderInfo.id !== r.id) {
          return;
        }
        let e = {
          blockId: this.block.id,
          reminderInfo: this.reminderInfo,
          type: this.popoverType,
          users: this.users
        };
        let l = {
          blockId: n.id,
          reminderInfo: r,
          type: this.popoverType,
          users: i
        };
        if (!deepEqualUtil_1.deepEqual(e, l)) {
          this.setData({
            block: n,
            reminderInfo: r,
            type: this.popoverType,
            users: i,
            reminderRef: s
          });
          this.triggerUpdatePopoverEvent({
            prev: e,
            curr: l
          });
        }
      }
    }
    updateReminder(e) {
      this.assert();
      if (!this.block || !this.block.isTextEditable) {
        return;
      }
      let {
        expireTime: n,
        isWholeDay: r,
        notifyTime: i,
        reminderId: o,
        shouldNotify: s,
        action: l
      } = e;
      let {
        zoneState: c
      } = this.block.model;
      let p = c.getContent().ops.find(e => {
        let n = inlineComponentFacade.getComponentType(e);
        return !!n && n.id === o;
      });
      if (!p) {
        return;
      }
      let v = contentDeltaUtilityFunctions.B(c, p);
      let g = {
        id: o,
        type: inlineComponentConstants.mentionTypes.REMINDER,
        data: {
          expire_time: n,
          is_whole_day: r,
          should_notify: s,
          notify_time: i,
          create_user_id: this.reminderInfo.data.create_user_id
        }
      };
      this.setData({
        block: this.block,
        reminderInfo: g,
        type: this.popoverType,
        users: this.users,
        reminderRef: this.reminderRef
      });
      dateTimeReminderUtils_1.updateReminderComponent(this.block, v, g);
      if (l) {
        var m;
        this.block.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageClick("ccm_doc_reminder_panel_click", {
          record_id: (m = this.block) === null || m === undefined ? undefined : m.record.id,
          block_type: this.block?.type
        }, {
          click: "click_time_option",
          target: "none",
          sub_click: l
        });
      }
    }
    reset() {
      this.block = null;
      this.reminderInfo = null;
      this.popoverType = null;
      this.reminderRef = null;
      this.isMouseInReminderPopover = false;
      this.users = [];
      this.isPopoverVisible = false;
    }
    destroy() {
      this.reset();
      this.unBindEvent();
      this.debounceHideSimplePopover.cancel();
      this.debounceShowSimplePopover.cancel();
    }
    setData(e) {
      let {
        block: n,
        reminderInfo: r,
        type: i,
        users: o,
        reminderRef: s
      } = e;
      this.block = n;
      this.users = o;
      this.reminderInfo = r;
      this.popoverType = i;
      this.reminderRef = s;
    }
    bindEvent() {
      docxEditorEventConstantsAndManager.globalEventBus.on(reminderPopoverConstantsUtils.reminderActions.POPOVER_MOUSE_ENTER, this.onMouseEnterPopover);
      docxEditorEventConstantsAndManager.globalEventBus.on(reminderPopoverConstantsUtils.reminderActions.POPOVER_MOUSE_LEAVE, this.onMouseLeavePopover);
      document.addEventListener("mousedown", this.handleDocumentMouseDown);
      document.addEventListener("selectionchange", this.handleSelectionChange);
    }
    unBindEvent() {
      docxEditorEventConstantsAndManager.globalEventBus.off(reminderPopoverConstantsUtils.reminderActions.POPOVER_MOUSE_ENTER, this.onMouseEnterPopover);
      docxEditorEventConstantsAndManager.globalEventBus.off(reminderPopoverConstantsUtils.reminderActions.POPOVER_MOUSE_LEAVE, this.onMouseLeavePopover);
      document.removeEventListener("mousedown", this.handleDocumentMouseDown);
      document.removeEventListener("selectionchange", this.handleSelectionChange);
    }
    focusNodeIsReminder(e) {
      if (domClassLayoutUtils.domClassLayout.parents(e, "docx-reminder-popover") || domClassLayoutUtils.domClassLayout.parents(e, docxReminderConstants.componentName)) {
        return true;
      }
      if (!this.block) {
        return false;
      }
      let n = this.block.model.getSelection();
      if (!n || n.start.offset !== n.end.offset || n.start.offset <= 0) {
        return false;
      }
      let r = this.block.model.zoneState.getEntities({
        start: {
          ...n.start,
          offset: n.start.offset - 1
        },
        end: n.end
      });
      return r.length !== 0 && this.hasReminderAttribute(r[0]);
    }
    hasReminderAttribute(e) {
      return inlineComponentConstants.componentType in e.attributes && JSON.parse(e.attributes[inlineComponentConstants.componentType]).type === "reminder";
    }
    triggerClosePopoverEvent() {
      this.closePopover$.next();
      this.reset();
    }
    triggerOpenPopoverEvent() {
      this.isPopoverVisible = true;
      this.openPopover$.next();
    }
    triggerUpdatePopoverEvent(e) {
      this.updatePopover$.next(e);
    }
    assert() {}
    constructor() {
      m(this, "block", null);
      m(this, "reminderInfo", null);
      m(this, "popoverType", null);
      m(this, "isMouseInReminderPopover", false);
      m(this, "reminderRef", null);
      m(this, "users", []);
      m(this, "isPopoverVisible", false);
      m(this, "openPopover$", new observableSubjectClass.Subject());
      m(this, "updatePopover$", new observableSubjectClass.Subject());
      m(this, "closePopover$", new observableSubjectClass.Subject());
      m(this, "debounceHideSimplePopover", debounceUtil_1_1.debounce(() => {
        this.triggerClosePopoverEvent();
      }, reminderPopoverConstantsUtils.popoverOpenDelay, {
        trailing: true
      }));
      m(this, "debounceShowSimplePopover", debounceUtil_1_1.debounce(() => {
        this.triggerOpenPopoverEvent();
      }, reminderPopoverConstantsUtils.popoverCloseDelay, {
        trailing: true
      }));
      m(this, "onMouseEnterPopover", () => {
        this.assert();
        this.isMouseInReminderPopover = true;
        if (this.popoverType === contentModeTypes.ContentModeType.Simple) {
          this.debounceHideSimplePopover.cancel();
        }
      });
      m(this, "onMouseLeavePopover", () => {
        this.assert();
        this.isMouseInReminderPopover = false;
        if (this.popoverType === contentModeTypes.ContentModeType.Simple) {
          this.debounceHideSimplePopover();
        }
      });
      m(this, "handleDocumentMouseDown", e => {
        if (this.popoverType !== contentModeTypes.ContentModeType.Intact || !this.block || this.isMouseInReminderPopover) {
          return;
        }
        let n = e.target;
        if ((!e.target || !n.classList.contains(docxReminderConstants.componentName)) && (!e.target || !domClassLayoutUtils.domClassLayout.parents(e.target, "docx-reminder-popover")) && (!e.target || !domClassLayoutUtils.domClassLayout.parents(e.target, "add-reminder"))) {
          setTimeout(() => this.triggerClosePopoverEvent(), 300);
        }
      });
      m(this, "handleSelectionChange", () => {
        let e = window.getSelection();
        let n = e == null ? undefined : e.anchorNode;
        if (!n) {
          return;
        }
        let r = this.focusNodeIsReminder(n);
        if (this.popoverType === contentModeTypes.ContentModeType.Intact && !r) {
          this.triggerClosePopoverEvent();
        }
      });
    }
  }();
  require.d(exports, {
    reminderManager: function () {
      return _;
    }
  });
}