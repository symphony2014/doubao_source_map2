// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerMentionDocManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 675739
         */
module.exports = function (module, exports, require) {
  var o;
  var r;
  var l;
  var a;
  var s;
  var c;
  var d;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  var mentionDocDataUpdateProvider = require("mention-doc-data-update-provider") /*id: 387558*/;
  var mentionDocManagerToken_1 = require("mention-doc-manager-token_1") /*id: 303079*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var eventEmitterUmd = require("event-emitter-umd") /*id: 692502*/;
  var C = eventEmitterUmd;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var debugLoggerFactory = require("debug-logger-factory") /*id: 102743*/;
  var subscriptionCleanup = require("subscription-cleanup") /*id: 355225*/;
  var inlineComponentFacade = require("inline-component-facade") /*id: 678614*/;
  var docInlineComponentUtils = require("doc-inline-component-utils") /*id: 595942*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var mentionDocStorage = require("mention-doc-storage") /*id: 483967*/;
  var documentEventTypes = require("document-event-types") /*id: 887808*/;
  function P(e, i, n) {
    var o;
    if ((i = typeof (o = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var o = n.call(e, i || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  let D = debugLoggerFactory.createLogger("MentionDocManager");
  let _ = dependencyInjectionContainer.Provide(mentionDocManagerToken_1.mentionDocMgrToken)((o = (c = class extends C {
    init() {
      this.subscriptions = [this.editorAPI.lifecycle.editorReady$.subscribe(this.handleEditorReady), this.editorAPI.structService.mutation$.subscribe(this.handleMutations)];
      this.clearDeprecatedMentionDocStorage();
    }
    destroy() {
      this.mentionDocDataMap.clear();
      this.removeAllListeners();
      subscriptionCleanup.unsubscribeAll(this.subscriptions);
    }
    onServiceDispose() {
      this.destroy();
    }
    getAllMentionDocData() {
      return Object.fromEntries(this.mentionDocDataMap.entries());
    }
    getAllBlockIdToMentionDoc() {
      return Array.from(this.blockIdToMentionDocMap);
    }
    getMentionDocDataByToken(e) {
      let i = this.mentionDocDataMap.get(e);
      return i || (D("getMentionDocDataByToken Error: no such token in data"), null);
    }
    getMentionDocDataByBlockId(e) {
      let i = [];
      let n = this.getTokensByBlockId(e);
      if (n.length) {
        n.forEach(e => {
          let n = this.getMentionDocDataByToken(e);
          if (n) {
            i.push(n);
          }
        });
      }
      return i;
    }
    getMentionDocTitleByToken(e) {
      let n = this.getMentionDocDataByToken(e)?.title;
      return n || null;
    }
    getTokensByBlockId(e) {
      return this.blockIdToMentionDocMap.get(e) || [];
    }
    getBlockIdsByToken(e) {
      let i = [];
      this.blockIdToMentionDocMap.forEach((n, o) => {
        if (n.includes(e)) {
          i.push(o);
        }
      });
      return i;
    }
    setMentionDocData(e, i) {
      this.mentionDocDataMap.set(e, i);
      this.emit(documentEventTypes.EventTypes.MENTION_ADD, e);
    }
    deleteMentionDocData(e) {
      if (!this.mentionDocDataMap.has(e)) {
        D("deleteMentionDocData Warn: this mentionDoc not exist");
      }
      this.emit(documentEventTypes.EventTypes.MENTION_DELETE, e);
    }
    setBlockIdToMentionDoc(e, i) {
      this.blockIdToMentionDocMap.set(e, i);
    }
    deleteBlockIdToMentionDoc(e) {
      if (!this.blockIdToMentionDocMap.has(e)) {
        D("deleteBlockIdToMentionDoc Warn: this blockId not exist");
      }
      this.blockIdToMentionDocMap.delete(e);
    }
    updateMentionDocNewTitle(e, i) {
      let n = this.getMentionDocDataByToken(e);
      if (n) {
        n.newTitle = i || platformDocUtils.getEmptyString(n.file_type) || t("common.unnamed_document");
        this.emit(documentEventTypes.EventTypes.NEW_TITLE_UPDATE, e);
      }
    }
    updateMentionDocTitle(e, i) {
      let n = this.getMentionDocDataByToken(e);
      if (!n) {
        D("updateMentionDocTitle: Error, mention doc not exist");
        return;
      }
      n.title = i;
    }
    updateMentionDocType(e, i) {
      let n = this.getMentionDocDataByToken(e);
      if (!n) {
        D("updateMentionDocType: Error, mention doc not exist");
        return;
      }
      n.icon_type = i;
    }
    updateMentionDocIconInfo(e, i, n, o) {
      let r = this.getMentionDocDataByToken(e);
      let l = false;
      if (!r) {
        D("updateMentionDocIconInfo: Error, mention doc not exist");
        return;
      }
      if (i && !deepEqualUtil_1.deepEqual(r.obj_info, i)) {
        r.obj_info = i;
        l = true;
      }
      let a = r.icon_info;
      if (n && ((a == null ? undefined : a.type) !== n.type || (a == null ? undefined : a.key) !== n.key || (a == null ? undefined : a.iconInfoStr) !== o)) {
        r.icon_info = {
          ...a,
          type: n.type,
          key: n.key,
          iconInfoStr: o || (a == null ? undefined : a.iconInfoStr)
        };
        l = true;
      }
      if (l) {
        this.emit(documentEventTypes.EventTypes.ICON_INFO_UPDATE, e);
      }
    }
    batchUpdateMentionDocTitle(e) {
      if (e) {
        for (let [i, n] of Object.entries(e)) {
          this.updateMentionDocTitle(i, n);
        }
      }
    }
    register(e, i) {
      this.on(e, i);
    }
    unregister(e, i) {
      this.off(e, i);
    }
    handleBlockAdd(e) {
      if (!editorTextBlockUtilities.isAgendaBlock(e.type)) {
        return;
      }
      let {
        id: i,
        snapshot: n
      } = e;
      let o = this.getMentionDocDataFromSnapshot(n);
      o.forEach(e => {
        if (!this.getMentionDocDataByToken(e.token)) {
          this.setMentionDocData(e.token, e);
          if (!docxFeatureFlags.isNotMobileH5()) {
            return;
          }
          let i = mentionDocStorage.mentionDocStorage.getItem(e.token);
          if (!i) {
            mentionDocStorage.mentionDocStorage.removeItem(e.token);
            return;
          }
          let {
            title: n,
            iconInfo: o
          } = i;
          if (!isUndefinedCheck.isUndefined(n)) {
            this.updateMentionDocNewTitle(e.token, n);
          }
          if (!isUndefinedCheck.isUndefined(o)) {
            this.updateMentionDocIconInfo(e.token, undefined, o);
          }
        }
      });
      if (o.length) {
        this.setBlockIdToMentionDoc(i, o.map(e => e.token));
      }
    }
    handleBlockUpdate(e) {
      if (!editorTextBlockUtilities.isAgendaBlock(e.type)) {
        return;
      }
      let {
        snapshot: i,
        id: n
      } = e;
      let o = this.getMentionDocDataFromSnapshot(i);
      let r = this.getTokensByBlockId(n);
      if (o.length) {
        this.setBlockIdToMentionDoc(n, o.map(e => e.token));
      } else if (r.length) {
        this.deleteBlockIdToMentionDoc(n);
      }
      o.forEach(e => {
        if (!this.getMentionDocDataByToken(e.token)) {
          this.setMentionDocData(e.token, e);
        }
      });
      r.forEach(e => {
        this.cleanMentionDocData(e);
      });
    }
    handleBlockRemove(e) {
      let {
        id: i
      } = e;
      let n = this.getMentionDocDataByBlockId(i);
      if (editorTextBlockUtilities.isAgendaBlock(e.type) && n.length) {
        this.deleteBlockIdToMentionDoc(i);
        n.forEach(e => {
          this.cleanMentionDocData(e.token);
        });
      }
    }
    constructor(...e) {
      var i;
      var n;
      super(...e);
      P(this, "mentionDocDataMap", new Map());
      P(this, "blockIdToMentionDocMap", new Map());
      i = "editorAPI";
      if (n = d) {
        Object.defineProperty(this, i, {
          enumerable: n.enumerable,
          configurable: n.configurable,
          writable: n.writable,
          value: n.initializer ? n.initializer.call(this) : undefined
        });
      }
      P(this, "subscriptions", undefined);
      P(this, "handleMutations", e => {
        let {
          mutations: i
        } = e;
        for (let {
          block: e
        } of i.removed) {
          this.handleBlockRemove(e);
        }
        for (let {
          block: e
        } of i.added) {
          this.handleBlockAdd(e);
        }
        for (let {
          block: e
        } of i.updated) {
          this.handleBlockUpdate(e);
        }
      });
      P(this, "handleEditorReady", () => {
        var e;
        if ((e = this.editorAPI.structService.root) !== null && e !== undefined) {
          e.traverse(e => {
            this.handleBlockAdd(e);
          });
        }
      });
      P(this, "cleanMentionDocData", e => {
        if (!this.getBlockIdsByToken(e).length && this.getMentionDocDataByToken(e)) {
          this.deleteMentionDocData(e);
        }
      });
      P(this, "clearDeprecatedMentionDocStorage", () => {
        let {
          length: e
        } = localStorage;
        for (let i = 0; i < e; i++) {
          let e = localStorage.key(i);
          if ((e == null ? undefined : e.indexOf(mentionDocStorage.storagePrefix)) === 0) {
            localStorage.removeItem(e);
          }
        }
      });
      P(this, "getMentionDocDataFromSnapshot", function (e) {
        let i = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        let n = [];
        Object.values(objectPathGetDefault.getObjectPathDefault(e, "text.apool.numToAttrib")).forEach(e => {
          let [i, o] = e;
          if (i !== inlineComponentFacade.componentType || o.indexOf(inlineComponentFacade.mentionTypes.DOC) === -1) {
            return;
          }
          let r = docInlineComponentUtils.parseJsonSafe(o);
          if (!(r == null ? undefined : r.data)) {
            return;
          }
          let l = r.data;
          if (l.title === "") {
            l.title = platformDocUtils.getEmptyString(l.file_type) || t("common.unnamed_document");
          }
          n.push(r.data);
        });
        let o = new Set();
        if (i) {
          return n.filter(e => !o.has(e.token) && o.add(e.token));
        } else {
          return n;
        }
      });
    }
  }).prototype, r = "editorAPI", l = [docxEditorCore.EDITOR_API_TOKEN], s = {}, Object.keys(a = {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }).forEach(function (e) {
    s[e] = a[e];
  }), s.enumerable = !!s.enumerable, s.configurable = !!s.configurable, ("value" in s || s.initializer) && (s.writable = true), d = (s = l.slice().reverse().reduce(function (e, i) {
    return i(o, r, e) || e;
  }, s)).initializer === undefined ? (Object.defineProperty(o, r, s), null) : s, c)) || c;
  function A() {
    docxEditorCore.registerProviders([_, {
      provide: mentionDocDataUpdateProvider.mentionDocDataToken,
      useAsync: async () => {
        let {
          MentionDocDataUpdateImpl: e
        } = await docxTaskSchedulerUtilities.scheduleTaskWithConfig({
          action: () => require.e("mentiondoc_dataupdate") /*id: 8952*/.then(require.bind(require, "mention-doc-data-update-impl") /*id: 401428*/),
          name: docxTaskSchedulerUtilities.delayToFirstScreenMarker
        });
        return e;
      }
    }]);
    docxEditorCore.onInitHook(() => {
      dependencyInjectionContainer.get(mentionDocManagerToken_1.mentionDocMgrToken).init();
      dependencyInjectionContainer.getAsync(mentionDocDataUpdateProvider.mentionDocDataToken).then(e => {
        e.init();
      });
    });
  }
  require.d(exports, {
    registerMentionDocManager: function () {
      return A;
    }
  });
}