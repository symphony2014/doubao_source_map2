// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A8' to 'chatPageDataManager'
// - Renamed export 'u$' to 'ChatBlockNode'
// - Renamed export 'ul' to 'toolDataCacheManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 27661.f1334209.js
         * chunkId: 27661
         * moduleId: 247150
         */
module.exports = function (module, exports, require) {
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var taskStatusConstants_1 = require("task-status-constants_1") /*id: 324746*/;
  var doubaoBrowserAutomationActions = require("doubao-browser-automation-actions") /*id: 72920*/;
  var skillToolActionIcons = require("skill-tool-action-icons") /*id: 892735*/;
  var fileDownloadUtils = require("file-download-utils") /*id: 555717*/;
  function _(e, o, t) {
    var r;
    if ((o = typeof (r = function (e, o) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var t = e[Symbol.toPrimitive];
      if (t !== undefined) {
        var r = t.call(e, o || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (o === "string" ? String : Number)(e);
    }(o, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, o, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[o] = t;
    }
    return e;
  }
  let C = {
    pageDataCache: new Map(),
    pageDataChangeEvents: new eventEmitterWrapper_1.eventEmitter(),
    pageSelectChangeEvents: new eventEmitterWrapper_1.eventEmitter(),
    pageOutlineCache: new Map(),
    pageOutlineChangeEvents: new eventEmitterWrapper_1.eventEmitter(),
    onPageDataStreamDataUpdate(e, o) {
      this.pageDataChangeEvents.on(e, o);
      return () => {
        this.pageDataChangeEvents.off(e, o);
      };
    },
    onPageSelectChange(e, o) {
      this.pageSelectChangeEvents.on(e, o);
      return () => {
        this.pageSelectChangeEvents.off(e, o);
      };
    },
    savePPTPageData(e, o) {
      let t = [...(this.pageDataCache.get(e) || [])];
      let r = t.findIndex(e => e.node_id === o.node_id);
      if (r < 0) {
        t.push({
          ...o
        });
      } else {
        t[r] = {
          ...o
        };
      }
      t.sort((e, o) => e.node_id - o.node_id);
      this.pageDataCache.set(e, t);
      this.pageDataChangeEvents.emit(e, t);
    },
    changeSelectedPage(e, o, t, r) {
      this.pageSelectChangeEvents.emit(e, {
        version: o,
        selectedPageNodeId: t,
        isFinish: r
      });
    },
    getPPTPageData(e) {
      return this.pageDataCache.get(e) || [];
    },
    onPageOutlineStreamDataUpdate(e, o) {
      this.pageOutlineChangeEvents.on(e, o);
      return () => {
        this.pageOutlineChangeEvents.off(e, o);
      };
    },
    savePPTPageOutlineData(e, o) {
      this.pageOutlineCache.set(e, o);
      this.pageOutlineChangeEvents.emit(e, o);
    },
    getPPTPageOutlineData(e) {
      return this.pageOutlineCache.get(e) || "";
    }
  };
  let p = {
    cache: new Map(),
    events: new eventEmitterWrapper_1.eventEmitter(),
    get(e, o) {
      let t = this.cache.get(e);
      let {
        is_finish: r,
        display_extra: n,
        artifact: l
      } = o;
      let i = {
        is_finish: r,
        display_extra: n,
        artifact: l
      };
      if ((t == null ? undefined : t.key) !== JSON.stringify(i)) {
        t = {
          key: JSON.stringify(i),
          manager: new d(e, o)
        };
        this.cache.set(e, t);
      }
      return t.manager;
    },
    emitBlockUpdate(e) {
      let {
        manager: o
      } = this.cache.get(e) || {};
      if (o) {
        this.events.emit(this.getBlockEventName(e), o);
      }
    },
    getBlockEventName: e => `block-${e}`,
    onBlockUpdate(e, o) {
      let t = this.getBlockEventName(e);
      this.events.on(t, o);
      return () => {
        this.events.off(t, o);
      };
    }
  };
  class u {
    apppendChild(e) {
      let o = this.childrenNodes.findIndex(o => o.blockId === e.blockId);
      if (o < 0) {
        this.childrenNodes.push(e);
      } else {
        this.childrenNodes[o] = e;
      }
    }
    getChildren() {
      return this.childrenNodes;
    }
    isHeaderBlock() {
      return this.block.block_type === chatConstantsEnum.messageContentType.BLOCK_HEADER_TEXT;
    }
    isPPTGenToolBlock() {
      return this.block.block_type === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT_OP;
    }
    isSeparatorBlock() {
      return this.block.block_type === chatConstantsEnum.messageContentType.BLOCK_SPLIT;
    }
    isTextBlock() {
      return this.block.block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT;
    }
    getTextContent() {
      if (this.isTextBlock()) {
        return this.block.content_obj;
      } else {
        return null;
      }
    }
    isToolBlock() {
      return this.block.block_type === chatConstantsEnum.messageContentType.BLOCK_SUPERTASK_TOOL;
    }
    showInCardContent() {
      if (this.isToolBlock()) {
        let {
          name: e
        } = this.getToolDataManager() || {};
        return !e || !["browser_use"].includes(e);
      }
      return this.isTextBlock() || this.isHeaderBlock() || this.isSeparatorBlock() || this.isPPTGenToolBlock();
    }
    shouldShowLoadingStatus() {
      return this.showInCardContent() && !this.isHeaderBlock() && !this.isSeparatorBlock();
    }
    getToolDataManager() {
      if (this.isToolBlock() || this.isPPTGenToolBlock()) {
        this.toolData ||= p.get(this.blockId, this.block.content_obj || {});
        this.toolData.messageId = this.messageId;
        return this.toolData;
      } else {
        return null;
      }
    }
    customUpdate(e) {
      if (this.isPPTGenToolBlock()) {
        var t;
        let r = this.getToolDataManager();
        if (!(r == null ? undefined : r.toolData?.artifact)) {
          return;
        }
        let {
          resource_id: l,
          resource_content_type: i,
          version: a
        } = r.toolData.artifact;
        let s = C.getPPTPageData(l);
        let c = (s == null ? undefined : s[s.length - 1]) || undefined;
        let _ = e == null ? undefined : (t = e.content_blocks) === null || t === undefined ? undefined : t.find(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_SUPERTASK);
        let p = _ == null ? undefined : _.is_finish;
        let u = r.getPPTNodeId();
        if (i === "type/ppt") {
          let e = p ? u : `${u}` == `${c == null ? undefined : c.node_id}` ? undefined : u;
          C.changeSelectedPage(l, a, e, p);
        }
      }
    }
    get blockId() {
      return this.block.id;
    }
    get parentId() {
      return this.block.parent_id;
    }
    constructor(e, o, t) {
      _(this, "messageId", undefined);
      _(this, "conversationId", undefined);
      _(this, "block", undefined);
      _(this, "toolData", undefined);
      _(this, "childrenNodes", []);
      this.block = e;
      this.messageId = o;
      this.conversationId = t;
    }
  }
  class d {
    toJSON() {
      return {
        blockId: this.blockId,
        toolId: this.toolId,
        name: this.name,
        display_extra: this.displayExtra,
        stream: this.stream,
        input: this.input,
        output: this.output,
        is_finish: this.isFinish(),
        is_error: this.isError(),
        toolData: this.toolData,
        ppt_page_node_id: this.getPPTNodeId(),
        displayInfo: this.getDisplayConfig()
      };
    }
    setPPTNodeId(e) {
      this.ppt_page_node_id = e;
    }
    getPPTNodeId() {
      return this.ppt_page_node_id;
    }
    get toolId() {
      return this.toolData.id || this.toolData.artifact?.resource_id;
    }
    get name() {
      return this.toolData.name;
    }
    get displayExtra() {
      return this.toolData.display_extra;
    }
    get stream() {
      return this.toolData.stream;
    }
    async wait() {
      if (!this.mcp_content_ready && this.mcp_content_key) {
        return new Promise((e, o) => {
          this.promises.push({
            resolve: e,
            reject: o
          });
        });
      }
    }
    getDisplayConfig() {
      return skillToolActionIcons.resolveToolActionConfig(this);
    }
    loadInputAndOutput() {
      if (!this.mcp_content_ready && this.mcp_content_key && !this.tosLoading) {
        this.tosLoading = true;
        fileDownloadUtils.fetchFileText(this.mcp_content_key).then(e => {
          let o = safeJsonUtils.safeParse(e, null);
          if (o) {
            this.input = safeJsonUtils.safeParse(o.input, {});
            this.output = o.output?.content || [];
            this.promises.forEach(e => {
              let {
                resolve: o
              } = e;
              o(null);
            });
            this.mcp_content_ready = true;
          }
        }).finally(() => {
          this.tosLoading = false;
        });
      }
    }
    isFinish() {
      return !!this.toolData.is_finish || this.toolData.artifact?.status === 2;
    }
    isError() {
      return !!this.toolData.is_error || this.toolData.artifact?.status === 3;
    }
    getImageKeys() {
      return this.displayExtra?.image_keys || [];
    }
    getBriefImageUrl() {
      if (![doubaoBrowserAutomationActions.ActionConstants.BrowserScrollDown, doubaoBrowserAutomationActions.ActionConstants.BrowserScrollUp, doubaoBrowserAutomationActions.ActionConstants.BrowserClick, doubaoBrowserAutomationActions.ActionConstants.BrowserNavigate, doubaoBrowserAutomationActions.ActionConstants.BrowserInput].includes(this.name)) {
        return "";
      }
      let o = this.displayExtra?.brief || "";
      if ((e => {
        try {
          new URL(e);
          return true;
        } catch (e) {
          return false;
        }
      })(o)) {
        return o;
      } else {
        return "";
      }
    }
    getSearchReference() {
      if ([doubaoBrowserAutomationActions.ActionConstants.Search, doubaoBrowserAutomationActions.ActionConstants.ScholarSearch, doubaoBrowserAutomationActions.ActionConstants.WebSearch, doubaoBrowserAutomationActions.ActionConstants.general_search, doubaoBrowserAutomationActions.ActionConstants.scholar_search].includes(this.name)) {
        return function (e) {
          var o;
          var t;
          let r = (o = e.output) === null || o === undefined ? undefined : o.find(e => e.type === "reference");
          return (r == null ? undefined : r.data) && ((t = safeJsonUtils.safeParse(r.data, []).filter(e => {
            var r;
            return e.render?.cite_title && ((r = e.render) === null || r === undefined ? undefined : r.link?.url);
          })) === null || t === undefined ? undefined : t.map(e => {
            return {
              card_type: "text",
              ...(e.render?.link || {})
            };
          })) || [];
        }(this);
      } else {
        return [];
      }
    }
    async getImageSearchRefs() {
      if ([doubaoBrowserAutomationActions.ActionConstants.ImageSearch, doubaoBrowserAutomationActions.ActionConstants.image_search, doubaoBrowserAutomationActions.ActionConstants.visual_search, doubaoBrowserAutomationActions.ActionConstants.ImageGeneration, doubaoBrowserAutomationActions.ActionConstants.ImageMatting].includes(this.name)) {
        await this.wait();
        return function (e) {
          var o;
          let t = (o = e.output) === null || o === undefined ? undefined : o.find(e => e.type === "reference");
          if (t == null ? undefined : t.data) {
            return safeJsonUtils.safeParse(t.data, []).filter(e => {
              var t;
              var r;
              return e.doc_type === "image" && ((r = e.render) === null || r === undefined ? undefined : (t = r.images) === null || t === undefined ? undefined : t[0].url_list?.[0]);
            }).map(e => {
              var t;
              var r;
              var n;
              let l;
              let {
                format: i = "",
                width: a = 0,
                height: s = 0,
                url_list: c = [],
                thumbnail_url: _ = ""
              } = ((t = e.render) === null || t === undefined ? undefined : t.images?.[0]) || {};
              l = Math.min(480 / (r = a), 480 / (n = s));
              let C = {
                width: Math.round(r * (l = Math.min(l, 1))),
                height: Math.round(n * l)
              };
              return {
                format: i,
                width: a,
                height: s,
                url: c[0] || "",
                thumb_width: C.width,
                thumb_height: C.height,
                thumb_url: _
              };
            });
          } else {
            return [];
          }
        }(this);
      } else {
        return [];
      }
    }
    getBrief() {
      return this.displayExtra?.brief || this.input?.input_query || this.input?.query || "";
    }
    getCanvasParams() {
      let {
        getCanvasParams: o,
        onlyShowImage: t
      } = skillToolActionIcons.resolveToolActionConfig(this);
      let r = o == null ? undefined : o();
      return r || (t && this.displayExtra?.image_keys ? {
        type: taskStatusConstants_1.taskTypes.SuperTask,
        conversationId: "",
        messageId: "",
        superTaskData: {
          type: taskStatusConstants_1.toolTypes.Tool,
          toolData: this
        }
      } : undefined);
    }
    canInteractive() {
      let {
        interactive: e
      } = skillToolActionIcons.resolveToolActionConfig(this);
      return !!e && e();
    }
    canOpenCanvas() {
      return !!this.getCanvasParams();
    }
    constructor(e, o) {
      _(this, "messageId", undefined);
      _(this, "blockId", undefined);
      _(this, "toolData", undefined);
      _(this, "input", undefined);
      _(this, "output", undefined);
      _(this, "mcp_content_key", undefined);
      _(this, "mcp_content_ready", false);
      _(this, "tosLoading", false);
      _(this, "promises", []);
      _(this, "ppt_page_node_id", undefined);
      this.blockId = e;
      let {
        mcp_content_key: t,
        mcp_content: r,
        ...n
      } = o;
      this.toolData = n;
      this.mcp_content_key = t;
      let {
        input: i = ""
      } = r || {};
      this.input = safeJsonUtils.safeParse(i, {});
      if (t) {
        this.mcp_content_ready = false;
        this.loadInputAndOutput();
      } else {
        let {
          output: e = {
            content: []
          }
        } = r || {};
        this.output = e.content;
        this.mcp_content_ready = true;
      }
    }
  }
  require.d(exports, {
    chatPageDataManager: function () {
      return C;
    },
    ChatBlockNode: function () {
      return u;
    },
    toolDataCacheManager: function () {
      return p;
    }
  });
}