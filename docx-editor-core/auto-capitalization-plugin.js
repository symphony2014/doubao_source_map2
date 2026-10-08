// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'zV' to 'getDocxTranslation'
// - Renamed export 'bz' to 'autoCapPlugin'
// - Renamed export 'Tw' to 'getTranslateStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 782204
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var knowledgeDocxTranslationShardingFlags = require("knowledge-docx-translation-sharding-flags") /*id: 264348*/;
  var docxInlineBlockRenderers = require("docx-inline-block-renderers") /*id: 381474*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var activeEditorRange = require("active-editor-range") /*id: 466344*/;
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var f = debugBrowserConfig;
  var priorityConstants = require("priority-constants") /*id: 219839*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var undoRedoEvents = require("undo-redo-events") /*id: 266127*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var keyboardKeyCodes = require("keyboard-key-codes") /*id: 73916*/;
  var editorRevisionAddHandler = require("editor-revision-add-handler") /*id: 856858*/;
  var keyboardActionConstants = require("keyboard-action-constants") /*id: 171499*/;
  var contentDeltaUtilityFunctions = require("content-delta-utility-functions") /*id: 348536*/;
  function S(e, n, i) {
    if (!i || typeof i.value != "function") {
      throw TypeError(`Only methods can be decorated with @Bind. <${n}> is not a method!`);
    }
    return {
      configurable: true,
      get() {
        let e = i.value.bind(this);
        e.plugin = this;
        Object.defineProperty(this, n, {
          value: e,
          configurable: true,
          writable: true
        });
        return e;
      }
    };
  }
  var displayTypeConstants = require("display-type-constants") /*id: 897087*/;
  var inlineComponentFacade = require("inline-component-facade") /*id: 678614*/;
  let C = ["。", ".", "？", "?", "！", "!"];
  let T = [",", ".", "?", ":", ";", "'", "!"];
  let M = RegExp(`[${C.map(e => `\\${e}`).join("")}]\\s+`, "g");
  let R = RegExp(`^[a-z][a-z'-]*[${T.map(e => `\\${e}`).join("")}]?$`);
  let N = ["link", "inlineCode"];
  let w = [keyboardKeyCodes.keyCodeMap.UP, keyboardKeyCodes.keyCodeMap.DOWN, keyboardKeyCodes.keyCodeMap.LEFT, keyboardKeyCodes.keyCodeMap.RIGHT, keyboardKeyCodes.keyCodeMap.PAGE_UP, keyboardKeyCodes.keyCodeMap.PAGE_DOWN, keyboardKeyCodes.keyCodeMap.HOME, keyboardKeyCodes.keyCodeMap.END];
  let O = ["deleteForward", "deleteBackward", "deleteToLineStart", "deleteToLineEnd", "deleteEntireWordBackward", "deleteEntireWordForward", "deleteRange"];
  let A = [keyboardKeyCodes.keyCodeMap.CONTROL, keyboardKeyCodes.keyCodeMap.ALT, keyboardKeyCodes.keyCodeMap.LEFT_WINDOW_KEY, keyboardKeyCodes.keyCodeMap.RIGHT_WINDOW_KEY, keyboardKeyCodes.keyCodeMap.SHIFT];
  let D = [inlineComponentFacade.componentType, displayTypeConstants.displayInlineBlock, "objectID"];
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  (r = B || {})[r.DISABLE = 0] = "DISABLE";
  r[r.ENABLE = 1] = "ENABLE";
  var B = r;
  let x = e => {
    e.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("ccm_doc_content_page_click", {
      click: "auto_capitalization",
      target: "none"
    });
  };
  function U(e, n, i) {
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
  let z = f("AutoCapitalization:global");
  let H = new class {
    setEnabled(e) {
      if (this.enabled !== e) {
        this.enabled = e;
        z("set enabled: ", e);
      }
    }
    constructor() {
      U(this, "enabled", false);
      U(this, "deleteWordInfo", null);
      U(this, "handleStoreStateChange", () => {
        this.setEnabled(function () {
          let {
            appState: {
              userSettings: e
            }
          } = reduxStoreInitializer.reduxStore.getState();
          return e.get("enable_auto_capitalize") === B.ENABLE;
        }());
      });
      U(this, "getEnabled", () => this.enabled);
      reduxStoreInitializer.reduxStore.subscribe(this.handleStoreStateChange);
    }
  }();
  function F(e, n, i) {
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
  function $(e, n, i, r, o) {
    var l = {};
    Object.keys(r).forEach(function (e) {
      l[e] = r[e];
    });
    l.enumerable = !!l.enumerable;
    l.configurable = !!l.configurable;
    if ("value" in l || l.initializer) {
      l.writable = true;
    }
    l = i.slice().reverse().reduce(function (i, r) {
      return r(e, n, i) || i;
    }, l);
    if (o && l.initializer !== undefined) {
      l.value = l.initializer ? l.initializer.call(o) : undefined;
      l.initializer = undefined;
    }
    if (l.initializer === undefined) {
      Object.defineProperty(e, n, l);
      return null;
    } else {
      return l;
    }
  }
  let Z = f("AutoCapitalization:normal");
  let W = f("AutoCapitalization:trace");
  $((o = class extends baseRendererClass.BaseRenderer {
    get shouldCapitalizeIfNecessary() {
      return this._shouldCapitalizeIfNecessary;
    }
    set shouldCapitalizeIfNecessary(e) {
      this._shouldCapitalizeIfNecessary = e;
      W.enabled;
    }
    destroy() {
      this.bindEvents(false);
    }
    bindEvents() {
      let e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
      let n = e ? "on" : "off";
      this.editor[n](editorEventConstants.editorEventTypes.KEYDOWN, this.handleKeydown, priorityConstants.priorityConstants.AUTO_CAPITALIZATION_KEYDOWN_PRIORITY);
      this.editor[n](keyboardActionConstants.KeyboardActions.STOPPED_KEYDOWN, this.handleKeydown);
      this.editor[n](keyboardActionConstants.KeyboardActions.ENTER, this.handleEnter);
      this.editor[n](keyboardActionConstants.KeyboardActions.AFTER_ENTER, this.handleAfterEnter);
      this.editor[n](keyboardActionConstants.KeyboardActions.AFTER_SHIFT_ENTER, this.handleAfterShiftEnter);
      this.editor[n]("click", this.setShouldCapitalizeIfNecessaryFalse);
      this.editor[n](editorEventConstants.editorEventTypes.BLUR, this.setShouldCapitalizeIfNecessaryFalse);
      this.blockManager.eventEmitter[n](undoRedoEvents.undoRedoEvents.AFTER_UNDO_REDO, this.setShouldCapitalizeIfNecessaryFalse);
      this.editor[n](editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.handleContentChange);
      this.editor[n](editorEventConstants.editorEventTypes.INPUT, this.handleInput);
      this.editor[n](editorEventConstants.editorEventTypes.COMPOSITION_END, this.setShouldCapitalizeIfNecessaryTrue);
    }
    handleKeydown(e) {
      if (e.keyCode === keyboardKeyCodes.keyCodeMap.SPACEBAR) {
        if (!this.shouldCapitalizeIfNecessary) {
          this.log("return because shouldCapitalizeIfNecessary false");
          return;
        }
        this.handleTriggerKeys(e);
      } else {
        this.handleOtherKeys(e);
      }
    }
    handleEnter() {
      this.tmpShouldCapitalizeIfNecessary = this.shouldCapitalizeIfNecessary;
      this._prevSelection = this.editor.selection.getSelection();
      this._prevActiveZone = this.editor.getContentState().getActiveZone();
    }
    handleAfterEnter(e) {
      if (!this.tmpShouldCapitalizeIfNecessary) {
        this.log("return because tmpShouldCapitalizeIfNecessary false");
        return;
      }
      this.handleTriggerKeys(e, "enter");
    }
    handleAfterShiftEnter(e) {
      if (!this.shouldCapitalizeIfNecessary) {
        this.log("return because shouldCapitalizeIfNecessary false");
        return;
      }
      this.handleTriggerKeys(e, "shiftEnter");
    }
    handleTriggerKeys(e, n) {
      if (!this.enabled()) {
        this.log("return because enabled false");
        return;
      }
      let i = this.editor.selection.getSelection();
      let r = this.editor.getContentState().getActiveZone();
      if (n === "enter") {
        i = this._prevSelection;
        r = this._prevActiveZone;
      }
      if (!i || !r || !i.isCollapsed()) {
        return;
      }
      if (n === "shiftEnter" && !(i = this.fixRangeForShiftEnter(i))) {
        this.log("return because selection false after fixed");
        return;
      }
      let o = r.getLine(i.start.line);
      if (!o) {
        return;
      }
      let l = o.getText();
      let a = l.substring(0, l.length - 1);
      if (a.length === 0) {
        return;
      }
      let {
        offset: s
      } = i.start;
      if (s === 0 || !/[a-z]/.test(a[s - 1]) && !T.includes(a[s - 1])) {
        this.log("return because pre letter illegal");
        return;
      }
      let c = function (e, n) {
        let i = e.length;
        let r = [];
        let o = 0;
        let l = -1;
        let a = -1;
        let s = M.exec(e);
        while (s) {
          let i = e.substring(o, s.index);
          if (s[0][0] === "." && /\.[a-zA-Z]^/.test(i)) {
            s = M.exec(e);
            continue;
          }
          let c = s.index + s[0].length;
          r.push({
            sentence: i,
            end: c,
            offsetOfEndPunctuation: s.index
          });
          o = c;
          l++;
          if (a === -1 && o >= n) {
            a = l;
            M.lastIndex = 0;
            break;
          }
          s = M.exec(e);
        }
        if (a === -1) {
          a = l + 1;
          let n = "";
          n = C.indexOf(e[i - 1]) > -1 ? e.substring(o, i - 1) : e.substring(o, i);
          r.push({
            sentence: n,
            end: i,
            offsetOfEndPunctuation: -1
          });
        }
        if (a === 0) {
          return {
            sentence: r[a].sentence,
            offset: 0,
            offsetOfPrevEndPunctuation: -1
          };
        } else {
          return {
            sentence: r[a].sentence,
            offset: r[a - 1].end,
            offsetOfPrevEndPunctuation: r[a - 1].offsetOfEndPunctuation
          };
        }
      }(a, s);
      if (this.shouldAutoCapitalize({
        sentencePosContext: c,
        selectionOffset: s,
        lineState: o
      })) {
        e.preventEvent();
        e.preventDefault();
        this.performAutoCapitalization({
          sentencePosContext: c,
          curSelection: i,
          lineState: o,
          shouldAddSpace: e.keyCode === keyboardKeyCodes.keyCodeMap.SPACEBAR
        });
      }
    }
    fixRangeForShiftEnter(e) {
      let n = this.editor.getContentState().getActiveZone().getLine(e.start.line - 1);
      if (!n) {
        return null;
      }
      let i = {
        line: e.start.line - 1,
        offset: n.getModelText().length - 1,
        zoneId: e.start.zoneId
      };
      return new activeEditorRange.ActiveEditorRange({
        editor: this.editor,
        start: i,
        end: i
      });
    }
    handleOtherKeys(e) {
      if (this.enabled()) {
        if (w.includes(e.keyCode)) {
          this.shouldCapitalizeIfNecessary = false;
          return;
        }
        if (!A.includes(e.keyCode)) {
          if (e.metaKey || e.ctrlKey) {
            this.shouldCapitalizeIfNecessary = false;
            return;
          }
          if (e.keyCode !== keyboardKeyCodes.keyCodeMap.PROCESSING_INPUT) {
            this.shouldCapitalizeIfNecessary = true;
          }
        }
      }
    }
    shouldAutoCapitalize(e) {
      var n;
      let {
        sentencePosContext: i,
        selectionOffset: r,
        lineState: o
      } = e;
      let l = i.offset;
      if (o.getAttributes(l, r).some(e => N.includes(e[0]))) {
        return false;
      }
      let a = i.sentence.substr(0, r - l);
      return !!R.test(a) && (!(i.offsetOfPrevEndPunctuation > -1) || !o.getEntities({
        start: i.offsetOfPrevEndPunctuation + 1,
        end: l
      }).some(e => D.some(n => e.attributes[n] !== undefined))) && (!H.deleteWordInfo || H.deleteWordInfo.selection[2] !== ((n = o.parent) === null || n === undefined ? undefined : n.getZoneId()) || H.deleteWordInfo.selection[0] !== o.index || H.deleteWordInfo.selection[1] !== i.offset || !H.deleteWordInfo.content.toLowerCase().startsWith(a) || !/^(\s|$)/.test(H.deleteWordInfo.content.substring(a.length)));
    }
    performAutoCapitalization(e) {
      this.log("performAutoCapitalization");
      let {
        sentencePosContext: n,
        curSelection: i,
        lineState: r,
        shouldAddSpace: o
      } = e;
      let l = n.offset;
      let a = l + 1;
      let c = n.sentence.substr(0, 1).toUpperCase();
      let u = r.getAttributes(l, a).toMap();
      this.editor.flushInput();
      let d = this.editor.getContentState();
      if (o) {
        let e = editorTextBlockUtilities.getInheritableAttributesForZone(this.editor.getContentState(), i);
        if (this.blockManager.config.get("revising")) {
          let n = this.selectionAPI.getSelection();
          let i = editorRevisionAddHandler.getInheritRevision(this.blockManager, n);
          if (i) {
            let [n, r] = i;
            Object.assign(e, {
              [n]: r
            });
          }
        }
        d.insertText(i.start, " ", e, {
          extra: {
            mergeMode: collaborativeEditingFlowSyncModule.CollabMode.SPLIT
          }
        });
      }
      d.replaceText({
        start: {
          ...i.start,
          offset: l
        },
        end: {
          ...i.start,
          offset: a
        }
      }, c, u, {
        extra: {
          mergeMode: collaborativeEditingFlowSyncModule.CollabMode.SPLIT
        }
      });
      x(this.blockManager);
      docxEditorEventConstantsAndManager.globalEventEmitter.emit(docxEditorEventConstantsAndManager.eventConstants.EDITOR_PLUGIN.PERFORM_AUTO_CAPITALIZATION);
    }
    setShouldCapitalizeIfNecessaryTrue() {
      this.shouldCapitalizeIfNecessary = true;
    }
    setShouldCapitalizeIfNecessaryFalse() {
      this.shouldCapitalizeIfNecessary = false;
    }
    handleContentChange(e) {
      if (!this.enabled()) {
        return;
      }
      let {
        options: n,
        deltaSet: i,
        previous: r
      } = e;
      if (n.type && O.includes(n.type)) {
        if (Object.entries(i.deltas).length > 1) {
          H.deleteWordInfo = null;
          return;
        }
        i.forEach(e => {
          if (!function (e) {
            let {
              ops: n
            } = e;
            return n.length === 2 && typeof n[0].retain == "number" && !!(n[0].retain > 0) && typeof n[1].delete == "number" && !!(n[1].delete > 0) || n.length === 1 && typeof n[0].delete == "number" && !!(n[0].delete > 0);
          }(e)) {
            H.deleteWordInfo = null;
            return;
          }
          let n = this.editor.getContentState().getActiveZone().getZoneId();
          let i = r.getZoneState(n);
          if (!i) {
            H.deleteWordInfo = null;
            return;
          }
          let o = 0;
          let l = 0;
          e.ops.forEach(e => {
            if (typeof e.retain == "number") {
              o = e.retain;
            } else {
              l = e.delete;
            }
          });
          let a = i.offsetToPoint(o);
          let s = i.getModelText().substr(o, l);
          let c = i.offsetToPoint(o + l - 1);
          if (a.line !== c.line) {
            H.deleteWordInfo = null;
            return;
          }
          if (!H.deleteWordInfo || H.deleteWordInfo.shouldResetNext || H.deleteWordInfo.selection[2] !== e.zoneId) {
            H.deleteWordInfo = {
              blockId: contentDeltaUtilityFunctions.toNumber(e.zoneId),
              selection: [a.line, a.offset, e.zoneId],
              content: s
            };
            return;
          }
          if (H.deleteWordInfo.selection[1] - 1 === a.offset) {
            H.deleteWordInfo = {
              blockId: contentDeltaUtilityFunctions.toNumber(e.zoneId),
              selection: [a.line, a.offset, e.zoneId],
              content: s + H.deleteWordInfo.content
            };
            return;
          }
          if (H.deleteWordInfo.selection[1] === a.offset) {
            H.deleteWordInfo = {
              blockId: contentDeltaUtilityFunctions.toNumber(e.zoneId),
              selection: H.deleteWordInfo.selection,
              content: H.deleteWordInfo.content + s
            };
            return;
          }
          H.deleteWordInfo = {
            blockId: contentDeltaUtilityFunctions.toNumber(e.zoneId),
            selection: [a.line, a.offset, e.zoneId],
            content: s
          };
        });
      }
    }
    handleInput() {
      if (!this.enabled()) {
        return;
      }
      let {
        line: e,
        offset: n,
        zoneId: i
      } = this.editor.selection.getSelection().start;
      if (H.deleteWordInfo && e === H.deleteWordInfo.selection[0] && n === H.deleteWordInfo.selection[1] && i === H.deleteWordInfo.selection[2]) {
        H.deleteWordInfo.shouldResetNext = true;
      }
    }
    log() {
      var e;
      var n = arguments.length;
      var i = Array(n);
      var r = 0;
      for (; r < n; r++) {
        i[r] = arguments[r];
      }
      Z(`blockId: ${(e = this.editor.selection) === null || e === undefined ? undefined : e.getSelection().start.zoneId}`, ...i);
    }
    constructor(e) {
      super();
      F(this, "name", "AutoCapitalization");
      F(this, "editor", undefined);
      F(this, "enabled", undefined);
      F(this, "_shouldCapitalizeIfNecessary", true);
      F(this, "tmpShouldCapitalizeIfNecessary", true);
      F(this, "_prevSelection", null);
      F(this, "_prevActiveZone", null);
      F(this, "blockManager", undefined);
      F(this, "selectionAPI", undefined);
      let {
        editor: n,
        blockManager: i,
        enabled: r,
        selectionAPI: o
      } = e;
      this.editor = n;
      this.blockManager = i;
      this.selectionAPI = o;
      this.enabled = r;
      this.log(`init enabled: ${this.enabled()}, shouldCapitalizeIfNecessary: ${this.shouldCapitalizeIfNecessary}`);
      this.bindEvents(true);
    }
  }).prototype, "handleKeydown", [S], Object.getOwnPropertyDescriptor(o.prototype, "handleKeydown"), o.prototype);
  $(o.prototype, "handleEnter", [S], Object.getOwnPropertyDescriptor(o.prototype, "handleEnter"), o.prototype);
  $(o.prototype, "handleAfterEnter", [S], Object.getOwnPropertyDescriptor(o.prototype, "handleAfterEnter"), o.prototype);
  $(o.prototype, "handleAfterShiftEnter", [S], Object.getOwnPropertyDescriptor(o.prototype, "handleAfterShiftEnter"), o.prototype);
  $(o.prototype, "setShouldCapitalizeIfNecessaryTrue", [S], Object.getOwnPropertyDescriptor(o.prototype, "setShouldCapitalizeIfNecessaryTrue"), o.prototype);
  $(o.prototype, "setShouldCapitalizeIfNecessaryFalse", [S], Object.getOwnPropertyDescriptor(o.prototype, "setShouldCapitalizeIfNecessaryFalse"), o.prototype);
  $(o.prototype, "handleContentChange", [S], Object.getOwnPropertyDescriptor(o.prototype, "handleContentChange"), o.prototype);
  $(o.prototype, "handleInput", [S], Object.getOwnPropertyDescriptor(o.prototype, "handleInput"), o.prototype);
  let G = o;
  var translateStatusPluginBridge = require("translate-status-plugin-bridge") /*id: 682283*/;
  function V() {
    return [[G, {
      enabled: H.getEnabled
    }]];
  }
  function X(e) {
    let n = docxInlineBlockRenderers.translatePluginMgr.getPlugin();
    if (n && (e == null ? undefined : e.get("translated")) && (knowledgeDocxTranslationShardingFlags.useTranslationLlmShardingFlag() || knowledgeDocxTranslationShardingFlags.useTranslationSlmShardingFlag())) {
      return [[n]];
    } else {
      return [];
    }
  }
  function J(e) {
    let n = translateStatusPluginBridge.translatePluginStore.getPlugin();
    if (n && (e == null ? undefined : e.get("translated")) && (knowledgeDocxTranslationShardingFlags.useTranslationLlmShardingFlag() || knowledgeDocxTranslationShardingFlags.useTranslationSlmShardingFlag())) {
      return [[n]];
    } else {
      return [];
    }
  }
  require.d(exports, {
    getDocxTranslation: function () {
      return X;
    },
    autoCapPlugin: function () {
      return V;
    },
    getTranslateStatus: function () {
      return J;
    }
  });
}