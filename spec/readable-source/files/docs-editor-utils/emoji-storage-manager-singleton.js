// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'EmojiStorageManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 980699
         */
module.exports = function (module, exports, require) {
  var emojiDataFetcher = require("emoji-data-fetcher") /*id: 192361*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var idleCallbackPolyfill_1 = require("idle-callback-polyfill_1") /*id: 55404*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  let u = e => {
    docxEventCollector.docEventCollector("doc_bug_track_dev", {
      action: "callout_emoji_check_v3_storage_error",
      info: e
    });
  };
  function a(e, n) {
    if (typeof e != "object" || e === null) {
      u(`${n}: not_object`);
      return false;
    }
    let r = 0;
    let o = Object.prototype.hasOwnProperty;
    try {
      for (let i in e) {
        if (o.call(e, i)) {
          let o = e[i];
          r++;
          if (typeof o != "string") {
            u(`${n}: not_string`);
            return false;
          }
          if (r === 10) {
            break;
          }
        }
      }
    } catch {
      u(`${n}: catch`);
      return false;
    }
    return !(r < 10) || (u(`${n}: count<10`), false);
  }
  var schedulerProvidersAccessor = require("scheduler-providers-accessor") /*id: 102884*/;
  var docBlockEmojiConstants = require("doc-block-emoji-constants") /*id: 664589*/;
  let f = "EMOJI_STORAGE_V3";
  let h = ["EMOJI_STORAGE_V1", "EMOJI_STORAGE_V2"];
  var emojiUtilsHandler = require("emoji-utils-handler") /*id: 626164*/;
  let p = (e, n, r) => {
    var i;
    let l = (i = n.getRecordByBlockId(e)) === null || i === undefined ? undefined : i.snapshot?.emoji_id;
    return emojiUtilsHandler.getMapValue(l, r);
  };
  let g = (e, n, r) => {
    let o = p(e, n, r);
    if (!o) {
      throw Error("getEmojiFromLocal failed: getData parsed failed");
    }
    return emojiUtilsHandler.getEmojiChar(o);
  };
  let E = (e, n) => {
    let o = n.getBlockStructByBlockId(e);
    let i = n.editorAPI.getService(schedulerProvidersAccessor.blockSchedulerProv);
    let l = o && i.getSSRContent(o);
    if (!l) {
      return null;
    }
    let {
      dom: c
    } = l;
    return c && c.querySelector(".emoji-mart-emoji span")?.innerHTML || null;
  };
  let m = (e, n, r) => {
    var i;
    let l = null;
    try {
      l = g(e, n, r);
    } catch (e) {}
    if (l) {
      return l;
    }
    let c = E(e, n);
    return c || (((i = n.getRecordByBlockId(e)) === null || i === undefined ? undefined : i.snapshot?.emoji_id) && r ? emojiUtilsHandler.getEmojiChar(docBlockEmojiConstants.defaultEmojiHex) : null);
  };
  let b = (e, n) => {
    if (typeof e != "string") {
      return e;
    }
    try {
      return JSON.parse(e);
    } catch (e) {
      if (e instanceof Error) {
        docxEventCollector.docEventCollector("doc_bug_track_dev", {
          action: "callout_emoji_storage_parse_failed",
          info: `${n},${JSON.stringify({
            stack: e.stack
          })}`
        });
      }
      return {};
    }
  };
  function v(e, n, r) {
    var o;
    if ((n = typeof (o = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var o = r.call(e, n || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? o : o + "") in e) {
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
  class T {
    static getInstance() {
      T.instance ||= new T();
      return T.instance;
    }
    async initEmojiDataStore(e = false) {
      if (this.emojiDataStore || e) {
        return;
      }
      let n = window.localStorage.getItem(f);
      if (n) {
        let e = b(n, "v3");
        if (e && a(e, "existingData")) {
          this.emojiDataStore = e;
          return;
        }
        window.localStorage.removeItem(f);
      }
      try {
        let e = platformDocUtils.HiA.getLanguage() === "zh";
        let n = await emojiDataFetcher.fetchEmojiData(e);
        let r = b(n);
        if (r && a(r, "setData")) {
          this.emojiDataStore = b(r);
          window.localStorage.setItem(f, JSON.stringify(this.emojiDataStore));
          return;
        }
      } catch (e) {}
    }
    clearOldStorage() {
      h.forEach(e => {
        window.localStorage.removeItem(e);
      });
    }
    getEmoji(e, n) {
      return m(e, n, this.emojiDataStore);
    }
    getEmojiUnified(e, n) {
      return p(e, n, this.emojiDataStore);
    }
    getUnified(e) {
      if (this.emojiDataStore) {
        return this.emojiDataStore[e];
      }
    }
    constructor() {
      v(this, "emojiDataStore", undefined);
      idleCallbackPolyfill_1.requestIdleCallback(() => {
        this.clearOldStorage();
        this.initEmojiDataStore(false);
      });
    }
  }
  v(T, "instance", undefined);
  T.getInstance();
  var C = T;
  require.d(exports, {
    EmojiStorageManager: function () {
      return C;
    }
  });
}