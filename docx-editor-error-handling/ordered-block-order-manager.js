// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerOrderedBlockExtensions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 886188
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var orderedBlockConstants = require("ordered-block-constants") /*id: 976830*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var docLoggerSymbol = require("doc-logger-symbol") /*id: 192564*/;
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  var orderedBlockUtils = require("ordered-block-utils") /*id: 5008*/;
  var orderedBlockManager = require("ordered-block-manager") /*id: 107278*/;
  var renderEventConstants = require("render-event-constants") /*id: 189091*/;
  var translationSuffixUtils = require("translation-suffix-utils") /*id: 203170*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var asyncTickHelper = require("async-tick-helper") /*id: 954555*/;
  var docBlockDepthUtil = require("doc-block-depth-util") /*id: 511268*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function S(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  class k extends editorContextFacade.EditorContextFacade {
    get docLogger() {
      return diContainerInstance.diContainer.get(docLoggerSymbol.docLoggerSymbol);
    }
    destroy() {
      super.destroy();
      this.changeSub.unsubscribe();
      this.blockManager.removeListener(renderEventConstants.bufferChanged, this.onBufferChanged);
    }
    scheduleToUpdateOrder(e) {
      this.pending.add(e);
      if (!this.hasUpdateOrderScheduled) {
        this.hasUpdateOrderScheduled = true;
        Promise.resolve().then(() => {
          this.hasUpdateOrderScheduled = false;
          this.flushToUpdateOrder();
        });
      }
    }
    getPreviousBlockPosition(e, i) {
      if (i > 0) {
        if (!orderedBlockUtils.isBlockDeleted(e[i--])) {
          while (orderedBlockUtils.isBlockDeleted(e[i])) {
            --i;
          }
        }
        return i;
      }
      return -1;
    }
    getPreviousOrderedBlockPositionIncludeDeleted(e, i) {
      if (i > 0) {
        while (--i >= 0 && (!orderedBlockUtils.isOrderedBlock(e[i]) || orderedBlockUtils.isCopySequence(e[i])));
        return i;
      }
      return -1;
    }
    getPreviousOrderedBlockPosition(e, i) {
      let r = e[i];
      if (i > 0) {
        if (orderedBlockUtils.isBlockDeleted(e[i])) {
          while (--i >= 0 && (!orderedBlockUtils.isOrderedBlock(e[i]) || orderedBlockUtils.isCopySequence(e[i])));
        } else {
          while (--i >= 0) {
            let n = e[i];
            if (orderedBlockUtils.isOrderedBlock(e[i]) && !orderedBlockUtils.isBlockDeleted(e[i]) && !orderedBlockUtils.isCopySequence(e[i]) && function (e, i) {
              if (!browserEnvironmentDetectionUtils.browserDetector.isMobile) {
                return true;
              }
              let r = objectPathGetDefault.getObjectPathDefault(e, "snapshot.revisions.[0]", undefined);
              let n = objectPathGetDefault.getObjectPathDefault(i, "snapshot.revisions.[0]", undefined);
              if (!r || !n) {
                return true;
              }
              let o = objectPathGetDefault.getObjectPathDefault(r, "type");
              let l = objectPathGetDefault.getObjectPathDefault(r, "details.subType");
              let s = objectPathGetDefault.getObjectPathDefault(n, "type");
              let c = objectPathGetDefault.getObjectPathDefault(n, "details.subType");
              return o === s && l === c;
            }(r, n)) {
              break;
            }
          }
        }
        return i;
      }
      return -1;
    }
    getNextBlockPosition(e, i) {
      let r = e.length;
      if (i < r) {
        if (!orderedBlockUtils.isBlockDeleted(e[i++])) {
          while (orderedBlockUtils.isBlockDeleted(e[i])) {
            ++i;
          }
        }
        return i;
      }
      return r;
    }
    getNextOrderedBlockPositionIncludeDeleted(e, i) {
      let r = e.length;
      if (i < r) {
        while (++i <= r && (!orderedBlockUtils.isOrderedBlock(e[i]) || orderedBlockUtils.isCopySequence(e[i])));
        return i;
      }
      return r;
    }
    getNextOrderedBlockPosition(e, i) {
      let r = e.length;
      if (i < r) {
        if (orderedBlockUtils.isBlockDeleted(e[i])) {
          while (++i <= r && (!orderedBlockUtils.isOrderedBlock(e[i]) || orderedBlockUtils.isCopySequence(e[i])));
        } else {
          while (++i <= r && (!orderedBlockUtils.isOrderedBlock(e[i]) || orderedBlockUtils.isBlockDeleted(e[i]) || orderedBlockUtils.isCopySequence(e[i])));
        }
        return i;
      }
      return r;
    }
    getBlockOrder(e) {
      if (!e) {
        return 0;
      }
      let {
        map: i
      } = this;
      if (!i.has(e.record.id)) {
        if (!orderedBlockUtils.isOrderedBlock(e)) {
          return 0;
        }
        let n = 1;
        let o = orderedBlockUtils.isBlockDeleted(e);
        let l = e.parent?.children || [];
        let {
          position: s
        } = e;
        let a = this.getPreviousBlockPosition(l, s);
        if (a >= 0) {
          let e = l[a];
          while (e && orderedBlockUtils.isOrderedBlock(l[a]) && !i.has(l[a].record.id)) {
            let i = a - 1;
            if (o) {
              if (!orderedBlockUtils.isBlockDeleted(l[a])) {
                break;
              }
            } else {
              i = this.getPreviousBlockPosition(l, a);
            }
            if (i < 0) {
              break;
            }
            e = l[a = i];
          }
          if (!e) {
            this.docLogger.persist.info({
              eventName: "flowDoc_getBlockOrderNotFoundSiblingBlock",
              meta: {
                siblingPosition: a,
                childrenCount: l.length,
                children: l.map(e => typeof e).join(",")
              }
            });
          }
          if (orderedBlockUtils.hasNoSequence(l[a])) {
            n = this.getBlockOrder(l[a]) + 1;
          }
          a = o ? a + 1 : this.getNextBlockPosition(l, a);
          while (a !== s) {
            i.set(l[a].record.id, n++);
            a = o ? a + 1 : this.getNextBlockPosition(l, a);
          }
        }
        i.set(e.record.id, n);
        return n;
      }
      if (orderedBlockUtils.isOrderedBlock(e)) {
        return i.get(e.record.id);
      } else {
        i.delete(e.record.id);
        return 0;
      }
    }
    getBlockOrderNew(e) {
      if (!e) {
        return 0;
      }
      let {
        map: i
      } = this;
      if (!i.has(e.record.id)) {
        if (orderedBlockUtils.isBlockHeader(e)) {
          let r = Number(e.record.snapshot.seq);
          i.set(e.record.id, r);
          return r;
        }
        if (orderedBlockUtils.isCopySequence(e)) {
          let {
            id: r
          } = e.record;
          if (translationSuffixUtils.isTranslated(r) && i.has(translationSuffixUtils.removeTranslation(r))) {
            let e = i.get(translationSuffixUtils.removeTranslation(r)) || 1;
            i.set(r, e);
          } else if (e.previousSibling && i.has(e.previousSibling.recordId)) {
            let n = i.get(e.previousSibling.recordId) || 1;
            i.set(r, n);
          } else {
            i.set(r, 1);
          }
          return i.get(r);
        }
        let n = 1;
        let o = orderedBlockUtils.isBlockDeleted(e);
        let l = e.parent?.children || [];
        let {
          position: s
        } = e;
        let a = this.getPreviousOrderedBlockPosition(l, s);
        if (a >= 0) {
          while (!orderedBlockUtils.isBlockHeader(l[a]) && !i.has(l[a].record.id)) {
            let e = this.getPreviousOrderedBlockPositionIncludeDeleted(l, a);
            if (o) {
              if (!orderedBlockUtils.isBlockDeleted(l[a])) {
                break;
              }
            } else {
              e = this.getPreviousOrderedBlockPosition(l, a);
            }
            if (e < 0) {
              break;
            }
            a = e;
          }
          n = this.getBlockOrderNew(l[a]) + 1;
          a = o ? this.getNextOrderedBlockPositionIncludeDeleted(l, a) : this.getNextOrderedBlockPosition(l, a);
          while (a < s) {
            i.set(l[a].record.id, n++);
            a = o ? this.getNextOrderedBlockPositionIncludeDeleted(l, a) : this.getNextOrderedBlockPosition(l, a);
          }
        }
        i.set(e.record.id, n);
        return n;
      }
      if (orderedBlockUtils.isOrderedBlock(e)) {
        return i.get(e.record.id);
      } else {
        i.delete(e.record.id);
        return 0;
      }
    }
    updateOrder(e) {
      if (!orderedBlockUtils.isOrderedBlock(e)) {
        this.map.delete(e.record.id);
        return null;
      }
      let r = e.parent?.children || [];
      let n = r[this.getPreviousBlockPosition(r, e.position)];
      if (n && !orderedBlockUtils.hasNoSequence(n)) {
        this.map.set(e.record.id, 1);
        return 1;
      }
      let o = this.getBlockOrder(n) + 1;
      this.map.set(e.record.id, o);
      return o;
    }
    updateOrderNew(e) {
      if (!e.active || !orderedBlockUtils.isOrderedBlock(e)) {
        this.map.delete(e.record.id);
        return null;
      }
      if (orderedBlockUtils.isBlockHeader(e)) {
        let i = Number(e.record.snapshot.seq);
        this.map.set(e.record.id, i);
        return i;
      }
      if (orderedBlockUtils.isCopySequence(e)) {
        let {
          id: i
        } = e.record;
        if (translationSuffixUtils.isTranslated(i) && this.map.has(translationSuffixUtils.removeTranslation(i))) {
          let e = this.map.get(translationSuffixUtils.removeTranslation(i)) || 1;
          this.map.set(i, e);
        } else if (e.previousSibling && this.map.has(e.previousSibling.recordId)) {
          let r = this.map.get(e.previousSibling.recordId) || 1;
          this.map.set(i, r);
        } else {
          this.map.set(i, 1);
        }
        return this.map.get(i);
      }
      let r = e.parent?.children || [];
      let n = r[this.getPreviousOrderedBlockPosition(r, e.position)];
      let o = this.getBlockOrderNew(n) + 1;
      this.map.set(e.record.id, o);
      return o;
    }
    flushToUpdateOrder() {
      if (!this.pending.size) {
        return;
      }
      let e = this.blockManager;
      let i = [...this.pending].map(i => e.hasBlockStructByBlockId(i) ? e.getBlockStructByBlockId(i) : null);
      i.sort((e, i) => e ? i ? e.depth - i.depth || e.position - i.position : -1 : 1);
      this.pending.clear();
      let r = this.updateOrderCallbacks;
      reactDomEntryWrapper.unstable_batchedUpdates(() => {
        for (let n of i) {
          if (!n) {
            break;
          }
          let i = null;
          if ((i = orderedBlockUtils.hasNoSequence(n) ? this.updateOrder(n) : this.updateOrderNew(n)) != null) {
            var e;
            if ((e = r.get(n.id)) !== null && e !== undefined) {
              e(i);
            }
          }
        }
      });
    }
    getWrapper(e) {
      this.orderedListModule = this.editorContext.orderedListModule;
      return i => {
        let l = i.struct;
        let {
          id: a
        } = l;
        let [c, d] = reactCoreLibraryReexport.useState(() => {
          let e = this.orderedListModule ? this.orderedListModule.getOrder(l.recordId) : undefined;
          return e || (orderedBlockUtils.hasNoSequence(l) ? this.getBlockOrder(l) : this.getBlockOrderNew(l));
        });
        reactCoreLibraryReexport.useLayoutEffect(() => {
          let e = e => {
            if (c !== e) {
              d(e);
            }
          };
          let i = (i, r) => {
            if (i.has(a)) {
              this.scheduleToUpdateOrder(a);
              this.updateOrderCallbacks.set(a, e);
              return;
            }
            if (r.has(a)) {
              this.updateOrderCallbacks.delete(a);
            }
          };
          if (this.blockManager.layoutManager.isBlockActive(a)) {
            this.updateOrderCallbacks.set(a, e);
          }
          this.bufferChangedCallbacks.add(i);
          return () => {
            this.bufferChangedCallbacks.delete(i);
          };
        }, [a, c]);
        reactCoreLibraryReexport.useEffect(() => () => {
          this.updateOrderCallbacks.delete(a);
        }, [a]);
        let h = l.parent?.id;
        reactCoreLibraryReexport.useEffect(() => {
          let e = () => {
            this.scheduleToUpdateOrder(a);
          };
          let i = e => {
            if (this.pending.has(a) || docxEditorCore.isUpdateMutation(e)) {
              return;
            }
            let {
              position: i
            } = l;
            if (docxEditorCore.isAddMutation(e) && e.block.position > i || docxEditorCore.isRemoveMutation(e) && e.position > i) {
              return;
            }
            this.scheduleToUpdateOrder(a);
            let r = [];
            for (let e of orderedBlockUtils.hasNoSequence(l) ? orderedBlockUtils.getUnorderedBlocks(this.blockManager, a, orderedBlockConstants.OrderDirection.DOWN) : orderedBlockUtils.getOrderedBlocks(this.blockManager, a, orderedBlockConstants.OrderDirection.DOWN)) {
              this.scheduleToUpdateOrder(e.blockId);
            }
          };
          let {
            blockManager: r
          } = this;
          let {
            structService: s
          } = r;
          r.addListener(orderedBlockConstants.orderUpdateAction, e, a);
          s.addBlockUpdateListener(a, e);
          if (h) {
            s.addBlockChildrenUpdateListener(h, i);
          }
          return () => {
            r.removeListener(orderedBlockConstants.orderUpdateAction, e, a);
            s.removeBlockUpdateListener(a, e);
            if (h) {
              s.removeBlockChildrenUpdateListener(h, i);
            }
          };
        }, [a, h, l]);
        return reactJsxRuntimeCoreReexport.jsx(e, {
          ...i,
          order: c,
          level: docBlockDepthUtil.getBlockDepth(l)
        });
      };
    }
    constructor() {
      super();
      S(this, "map", this.blockManager.orderMap);
      S(this, "pending", new Set());
      S(this, "updateOrderCallbacks", new Map());
      S(this, "hasUpdateOrderScheduled", false);
      S(this, "bufferChangedCallbacks", new Set());
      S(this, "changeSub", undefined);
      S(this, "orderedListModule", undefined);
      S(this, "onBufferChanged", e => {
        var i;
        let {
          enterBlocks: r,
          leaveBlocks: n
        } = e;
        if (((i = this.orderedListModule) === null || i === undefined ? undefined : i.getEnv()) === orderedBlockManager.RenderEnvEnum.SHORTCUT) {
          return;
        }
        let o = new Set(r);
        let l = new Set(n);
        this.bufferChangedCallbacks.forEach(e => e(o, l));
      });
      S(this, "onAfterRecordChange", async () => {
        await asyncTickHelper.waitForTick();
        this.flushToUpdateOrder();
      });
      this.blockManager.addListener(renderEventConstants.bufferChanged, this.onBufferChanged);
      this.changeSub = this.blockManager.editorAPI.dataService.change$.subscribe(this.onAfterRecordChange);
    }
  }
  var orderedListSequenceManager = require("ordered-list-sequence-manager") /*id: 225567*/;
  function C() {
    docxEditorCore.registerViewExt(orderedBlockConstants.orderedProviderName, k);
    docxEditorCore.registerViewExt(orderedBlockConstants.orderedMonitorName, orderedListSequenceManager.OrderedListSequenceManager);
  }
  require.d(exports, {
    registerOrderedBlockExtensions: function () {
      return C;
    }
  });
}