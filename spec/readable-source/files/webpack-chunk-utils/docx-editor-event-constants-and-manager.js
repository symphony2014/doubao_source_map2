// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'iN' to 'createEventListeners'
// - Renamed export 'vp' to 'EventEmitter'
// - Renamed export 'BX' to 'globalEventEmitter'
// - Renamed export 'Ul' to 'globalEditorState'
// - Renamed export 'qO' to 'globalReplaySubject'
// - Renamed export 'ZP' to 'globalEventBus'
// - Renamed export 'TB' to 'globalEventConstants'
// - Renamed export 'U3' to 'eventConstants'
// - Renamed export 'd5' to 'nativeEventDispatcher'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 267720
         */
module.exports = function (module, exports, require) {
  var eventEmitterUmd = require("event-emitter-umd") /*id: 692502*/;
  var o = eventEmitterUmd;
  var replaySubject = require("replay-subject") /*id: 229131*/;
  var inputDeviceTypes = require("input-device-types") /*id: 865354*/;
  var arrayObjectForeach = require("array-object-foreach") /*id: 434194*/;
  let _ = {
    COMMON: {
      UPDATE_OVERLAY_POSITION: "UPDATE_OVERLAY_POSITION",
      OPEN_IMAGE_VIEWER: "OPEN_IMAGE_VIEWER",
      CLOSE_IMAGE_VIEWER: "CLOSE_IMAGE_VIEWER",
      OPENED_IMAGE_VIEWER: "OPENED_IMAGE_VIEWER",
      CLOSED_IMAGE_VIEWER: "CLOSED_IMAGE_VIEWER",
      SHOW_OOPS: "SHOW_OOPS",
      FETCH_MISS: "FETCH_MISS",
      HEARTBEAT_CALLBACK: "HEARTBEAT_CALLBACK",
      ALL_MISSED_APPLIED: "ALL_MISSED_APPLIED",
      NEW_CHANGES_END: "NEW_CHANGES_END",
      HOVER_CATALOGUE: "HOVER_CATALOGUE",
      BLOCK_MENU_PANEL_SHOW: "BLOCK_MENU_PANEL_SHOW",
      FORCE_UPDATE_OVERLAY_STATUS: "FORCE_UPDATE_OVERLAY_STATUS",
      HIDE_BLOCK_TOOLBAR: "HIDE_BLOCK_TOOLBAR",
      HIDE_TEXT_TOOLBAR: "HIDE_TEXT_TOOLBAR",
      TEXT_TOOLBAR_STATUS_CHANGE: "TEXT_TOOLBAR_STATUS_CHANGE",
      FORCE_OVERLAY_UPDATE: "FORCE_OVERLAY_UPDATE",
      ENTER_MENU_ITEM_HAS_TOOLTIP: "ENTER_MENU_ITEM_HAS_TOOLTIP",
      LEAVE_MENU_ITEM_HAS_TOOLTIP: "LEAVE_MENU_ITEM_HAS_TOOLTIP",
      ADJUST_VIEWPORT: "ADJUST_VIEWPORT",
      FORCE_UPDATE_BLOCK_MENU_TOOLBAR_STATUS: "FORCE_UPDATE_BLOCK_MENU_TOOLBAR_STATUS",
      HIDE_INLINE_TRIGGER: "HIDE_INLINE_TRIGGER",
      DRAG_STATUS_CHANGE: "DRAG_STATUS_CHANGE",
      CLEAR_HEADER: "CLEAR_HEADER",
      CLOSE_MENTION_SHARE_PANEL: "CLOSE_MENTION_SHARE_PANEL",
      COLLAB_MODULE_INIT_FINISH: "COLLAB_MODULE_INIT_FINISH",
      TITLE_CHANGE: "TITLE_CHANGE",
      GLOBAL_POINTER_UP_EVENT: "GLOBAL_POINTER_UP_EVENT",
      GLOBAL_POINTER_DOWN_EVENT: "GLOBAL_POINTER_DOWN_EVENT",
      TAB_STATUS_CHANGE: "TAB_STATUS_CHANGE",
      OWNER_FG_UPDATED: "OWNER_FG_UPDATED",
      SPA_DOCUMENT_CONFIG_LOADED: "DOCUMENT_CONFIG_LOADED",
      DOWN_GRADING: "DOWN_GRADING",
      SYNC_REF_BLOCK_CURSOR_MESSAGE: "SYNC_REF_BLOCK_CURSOR_MESSAGE",
      NEW_DEGRADE_CONFIG: "NEW_DEGRADE_CONFIG",
      ENTER_RENDER_ALL_COMMENT: "ENTER_RENDER_ALL_COMMENT",
      QUIT_RENDER_ALL_COMMENT: "QUIT_RENDER_ALL_COMMENT",
      OPEN_FIND_PANEL: "OPEN_FIND_PANEL",
      DOCUMENT_SWITCH_DELETED: "DOCUMENT_SWITCH_DELETED",
      SUITE_DOCUMENT_ON_ERROR: "SUITE_DOCUMENT_ON_ERROR"
    },
    MOBILE: {
      DOCS: {},
      SHEET: {
        SET_TOOLBAR_DATA: "MOBILE_SHEET_SET_TOOLBAR_DATA",
        DB_CLICK: "MOBILE_SHEET_DB_CLICK"
      },
      COMMON: {
        BEGIN_DOC_EDIT: "BEGIN_DOC_EDIT",
        ENTER_EDIT: "ENTER_EDIT",
        EXIT_EDIT: "EXIT_EDIT",
        TOGGLE_EDIT: "TOGGLE_EDIT",
        SET_MENU: "SET_MENU",
        TITLE_CHANGE: "TITLE_CHANGE",
        KEYBOARD_CHANGED: "KEYBOARD_CHANGED",
        ANDROID_H5_KEYBOARD_CHANGED: "ANDROID_H5_KEYBOARD_CHANGED",
        KEYBOARD_VISIBLE_CHANGED: "KEYBOARD_VISIBLE_CHANGED",
        KEYBOARD_SHORTCUT: "KEYBOARD_SHORTCUT",
        INSERT_NEW_BLOCK_PANEL_CLICK: "INSERT_NEW_BLOCK_PANEL_CLICK",
        MENTION_PANEL_CLICK: "MENTION_PANEL_CLICK",
        INSERT_VIDEOS: "INSERT_VIDEOS",
        SCROLL_TO_VIEW: "SCROLL_TO_VIEW",
        SAVE_CACHE_BEFORE_CLEAR: "SAVE_CACHE_BEFORE_CLEAR",
        DOCUMENT_KEY_INVALID: "DOCUMENT_KEY_INVALID",
        REUPLOAD_IMAGE: "REUPLOAD_IMAGE",
        CHANGE_COVER_UPDATE_SYNC_CURSOR: "CHANGE_COVER_UPDATE_SYNC_CURSOR",
        ORIENTATION_CHANGED: "ORIENTATION_CHANGED",
        START_TAKE_SCREENSHOT: "START_TAKE_SCREENSHOT",
        FINISH_TAKE_SCREENSHOT: "FINISH_TAKE_SCREENSHOT",
        SWITCH_EDIT_MODE: "SWITCH_EDIT_MODE",
        HEADER_MENU_CLICK: "HEADER_MENU_CLICK",
        BLOCK_SWIPE_SELECT: "BLOCK_SWIPE_SELECT"
      },
      BLOCK_MENU: {
        SHOW_BLOCK_MENU: "SHOW_BLOCK_MENU",
        HIDE_BLOCK_MENU: "HIDE_BLOCK_MENU",
        LONG_PRESS_TO_CHANGE_BLOCK_MENU: "LONG_PRESS_TO_CHANGE_BLOCK_MENU"
      },
      RECOMMEND_MENU: {
        TRIGGER_COMMAND: "TRIGGER_COMMAND"
      },
      CROSS_BLOCK_SELECTION: {
        TOGGLE_CROSS_BLOCK_SELECTION: "TOGGLE_CROSS_BLOCK_SELECTION"
      },
      MINDNOTE: {
        EMBEDDED_FULLSCREEN_CHANGE: "embedded_fullscreen_change"
      },
      BITABLE: {
        FULLSCREEN_CHANGE: "FULLSCREEN_CHANGE"
      },
      CHART: {
        FULLSCREEN_CHANGE: "FULLSCREEN_CHANGE"
      },
      IMAGE: {
        DELETE_IMAGE: "DELETE_IMAGE",
        ADD_IMAGE: "ADD_IMAGE"
      },
      FILE: {
        FILE_PREVIEW_STATUS_CHANGE: "FILE_PREVIEW_STATUS_CHANGE",
        DOC_FILE_FULL_SCREEN_CHANGE: "DOC_FILE_FULL_SCREEN_CHANGE"
      },
      TASK: {
        SELECTION_RANGE_CHANGE: "SELECTION_RANGE_CHANGE"
      },
      WHITEBOARD: {
        FULLSCREEN_CHANGE: "WHITEBOARD_FULLSCREEN_CHANGE"
      }
    },
    HISTORY: {
      TOGGLE: "TOGGLE_HISTORY",
      TOGGLE_REVERT: "TOGGLE_HISTORY_REVERT"
    },
    EDITOR_PLUGIN: {
      PERFORM_AUTO_CAPITALIZATION: "PERFORM_AUTO_CAPITALIZATION"
    },
    TASK: {
      SELECTION_CHANGE: "SELECTION_CHANGE"
    },
    DOC_MINI_APP: {
      OPEN_IMAGE_VIEWER: "DOC_MINI_APP_OPEN_IMAGE_VIEWER"
    },
    VERSION_MANAGER: {
      SHOW_GUIDE: "SHOW_GUIDE"
    },
    SSR: {
      SSR_BOX_CLEAN: "SSR_BOX_CLEAN"
    }
  };
  let l = function (e, n = "") {
    arrayObjectForeach.arrayObjectForeach(e, (r, i) => {
      if (typeof r == "string") {
        e[i] = `${n}:${r}`;
      } else {
        l(r, n ? `${n}:${i}` : i);
      }
    });
  };
  l(_);
  var s = _;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  function d(e, n, r) {
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
  let T = ["keydown"];
  let p = new class {
    bindNativeEvent(e, n, r) {
      let i = this.hasBindMap.get(n);
      if (!i) {
        i = new Map();
        this.hasBindMap.set(n, i);
      }
      let o = `${e}:capture-${!!r}`;
      if (!i.has(o)) {
        n.addEventListener(e, e => {
          this.dispatchNativeEvent(e, r);
        }, r);
        i.set(o, true);
      }
    }
    getListenersByNode(e, n, r) {
      let i = [];
      while (n) {
        let o = this.fastListener.get(n);
        if (o && o[e]) {
          if (r) {
            i.unshift(...o[e]);
          } else {
            i.push(...o[e]);
          }
        }
        n = n.parentNode;
      }
      return i.filter(e => e.useCapture === r).sort((e, n) => e.priority - n.priority);
    }
    isSpecialEventTriggeredByDocument(e) {
      return T.includes(e);
    }
    dispatchNativeEvent(e, n) {
      let r;
      let {
        type: i
      } = e;
      let o = e.target;
      let a = this.getListenersByNode(i, o, n);
      if (o && o.contains) {
        if (this.isSpecialEventTriggeredByDocument(i)) {
          var u;
          var c;
          var _;
          var l;
          r = (_ = window.getSelection()) === null || _ === undefined ? undefined : (c = _.focusNode) === null || c === undefined ? undefined : (u = c.parentElement) === null || u === undefined ? undefined : u.closest(docxEditorConstantsConfig.editorContainerSelector);
          if (i === "keydown" && !r) {
            let e = function () {
              let n = document.querySelector(".docx-selection-hidden-textarea");
              return Number(n == null ? undefined : n.dataset?.currentRootBlockId);
            }();
            r = (l = document.querySelector(`[data-block-id="${e}"]`)) === null || l === undefined ? undefined : l.closest(docxEditorConstantsConfig.editorContainerSelector);
          }
        } else {
          let e = o instanceof Element ? o : o.parentElement;
          r = e == null ? undefined : e.closest(docxEditorConstantsConfig.editorContainerSelector);
        }
        for (let n = 0, i = a.length; n < i; n++) {
          let {
            listenDom: i,
            handle: o,
            onlyHandleSelfContainer: u,
            container: c
          } = a[n];
          if (this.shouldDispatchEvent(e, i, u, r, c)) {
            o(e);
          }
        }
      }
    }
    shouldDispatchEvent(e, n, r, i, o) {
      let a = e.target;
      let u = n.contains(a);
      if (r !== false && i) {
        let r = this.isSpecialEventTriggeredByDocument(e.type) || o ? o === i : i.contains(n);
        return u && r;
      }
      return u;
    }
    constructor() {
      var e = this;
      d(this, "fastListener", new WeakMap());
      d(this, "hasBindMap", new WeakMap());
      d(this, "on", function (n, r, i, {
        priority: o = 0,
        onlyHandleSelfContainer: a = true,
        useCapture: u = false,
        container: c
      } = {}) {
        e.bindNativeEvent(n, r, u);
        let _ = {
          listenDom: r,
          handle: i,
          priority: o,
          onlyHandleSelfContainer: a,
          container: c,
          useCapture: u
        };
        let l = e.fastListener.get(r);
        if (!l) {
          l = {};
          e.fastListener.set(r, l);
        }
        l[n] ||= [];
        for (let e = 0; e < l[n].length; e++) {
          if (l[n][e].priority > o) {
            l[n].splice(e, 0, _);
            return;
          }
        }
        l[n].push(_);
      });
      d(this, "off", (e, n, r) => {
        let i = this.fastListener.get(n);
        if (i && i[e]) {
          [...i[e]].forEach((n, o) => {
            if (n.handle === r) {
              i[e].splice(o, 1);
            }
          });
        }
      });
    }
  }();
  function S(e, n, r) {
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
  let f = new o();
  let A = f;
  let m = new replaySubject.ReplaySubject(1);
  var I = A;
  let O = new class {
    constructor() {
      S(this, "active", true);
      S(this, "selectedBlocks", []);
      S(this, "isTriggerredByClick", false);
      S(this, "isTriggerredByMobileSwipe", false);
      S(this, "hasEnteredPanel", false);
      S(this, "newGridColumnId", null);
      S(this, "editMode", inputDeviceTypes.InputDeviceType.Mouse);
      S(this, "pointerUp", true);
      S(this, "translationOnboarding", false);
      S(this, "editorLeft", 0);
      S(this, "hoverBlockId", undefined);
    }
  }();
  let R = e => e && (e instanceof o || typeof e == "object" && typeof e.on == "function" && typeof e.off == "function");
  function h(e) {
    var n = arguments.length;
    var r = Array(n > 1 ? n - 1 : 0);
    var i = 1;
    for (; i < n; i++) {
      r[i - 1] = arguments[i];
    }
    let o = f;
    let a = [...r];
    if (R(e)) {
      o = e;
    } else {
      a.unshift(e);
    }
    let u = a.filter(Boolean).filter(e => {
      let [n, r, i] = e;
      return typeof n == "object" && n && r && i || typeof n == "string" && n && r && !i;
    }).map(e => {
      let [n, r, i] = e;
      if (R(n)) {
        n.on(r, i);
      } else {
        o.on(n, r);
      }
      return () => {
        if (R(n)) {
          n.off(r, i);
        } else {
          o.off(n, r);
        }
      };
    });
    return function () {
      u.forEach(e => e());
    };
  }
  require.d(exports, {
    createEventListeners: function () {
      return h;
    },
    EventEmitter: function () {
      return o;
    },
    globalEventEmitter: function () {
      return f;
    },
    globalEditorState: function () {
      return O;
    },
    globalReplaySubject: function () {
      return m;
    },
    globalEventBus: function () {
      return I;
    },
    globalEventConstants: function () {
      return A;
    },
    eventConstants: function () {
      return s;
    },
    nativeEventDispatcher: function () {
      return p;
    }
  });
}