// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'ViewportScrollManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 546823
         */
module.exports = function (module, exports, require) {
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var scrollAnimationManager_1 = require("scroll-animation-manager_1") /*id: 895081*/;
  var lazyRecordClientvars = require("lazy-record-clientvars") /*id: 112384*/;
  var diHideLoadingManager = require("di-hide-loading-manager") /*id: 961599*/;
  var codeBlockConstants = require("code-block-constants") /*id: 48094*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var collaborationRecordBlockLoader = require("collaboration-record-block-loader") /*id: 561102*/;
  var selectionChangeHandler = require("selection-change-handler") /*id: 126916*/;
  var collabTriggersProvider = require("collab-triggers-provider") /*id: 164012*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
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
  class k {
    get _boundary() {
      let {
        container: e
      } = this.options;
      let i = this.options.container.getBoundingClientRect();
      let r = parseInt(e.style.paddingTop || "0", 10);
      let n = parseInt(e.style.paddingBottom || "0", 10);
      let o = this.options.blockManager.layoutManager.getScroller();
      if (browserEnvironmentDetectionUtils.browserDetector.isIPad && o && o instanceof Window) {
        i.height = this.options.blockManager.layoutManager.getViewportHelper().getViewportHeight() - 40;
        i.y = 0;
      }
      return new DOMRect(i.x, i.y + 0 + r, i.width, i.height - 50 - r - n);
    }
    setPreventScroll(e) {
      this.preventScroll = e;
    }
    get blockManager() {
      return this.options.blockManager;
    }
    _scrollFocusIntoView(e) {
      let i = this.options.selectionAPI.getContext();
      let r = [docxBlockSelectionHandler_1.commandTypes.SwitchDocsMode];
      if (this.options.selectionAPI.isSingleTextSelection(this.options.selectionAPI.getSelection()) && !r.includes(i == null ? undefined : i.source)) {
        this.options.blockManager.layoutManager.scrollToSelection(e.id, async () => {
          this.scrollCaretIntoView(e);
          if (!e.isFocus() && e.editor.isEditable()) {
            var i;
            e.focus();
            let r = (i = e.model.getSelection()) === null || i === undefined ? undefined : i.toPosition();
            if (!r) {
              return;
            }
            let n = {
              id: e.id,
              type: docxBlockSelectionHandler_1.blockTypes.TEXT,
              selection: {
                start: r.start,
                end: r.start + r.len
              }
            };
            this.options.selectionAPI.setSelection([n]);
          }
        });
        return;
      }
      if (i && ["arrowPress", "hotkey"].includes(i.source)) {
        this.scrollToBlockWithAnimation(e.id);
      }
    }
    scrollCaretIntoView(e, i) {
      var r;
      var n;
      var o;
      let l = e.model.zoneState.getContainer();
      if (!l) {
        return;
      }
      let a = this._boundary;
      let {
        editor: c,
        model: d
      } = e;
      let f = i || d.getSelection();
      if (!f || f.start.line !== f.end.line) {
        return;
      }
      let g = c.rectModule.getRawCaretRect(f.start);
      if (!g) {
        return;
      }
      if (g.left === 0 && g.top === 0) {
        return false;
      }
      r = g;
      n = a;
      let p = r.top - n.top < (n.bottom - n.top) / 2;
      let {
        container: m
      } = this.options;
      if (!function (e, i, r = 0) {
        return e.bottom >= i.top + r && e.top <= i.bottom + r;
      }(g, a, e.type === docBlockTypeConstants.blockTypeConstants.CODE ? 24 : 26)) {
        let e = function (e, i) {
          if (!e) {
            return null;
          }
          let r = e;
          let n = 0;
          while (r !== i && r !== null) {
            n += r.offsetTop;
            let e = r.offsetParent;
            if (!(e instanceof HTMLElement)) {
              return null;
            }
            r = e;
          }
          return n;
        }(l, m);
        if (!e) {
          return;
        }
        let i = l.getBoundingClientRect();
        let r = g.top - i.top;
        if ((l == null ? undefined : (o = l.closest) === null || o === undefined ? undefined : o.call(l, codeBlockConstants.codeFoldBlockSelector)) && g.top - i.top > codeBlockConstants.codeBlockMaxWidth) {
          r -= g.top - i.top - codeBlockConstants.codeBlockMaxWidth;
        }
        let n = p ? e - a.top + r : e - a.height + r;
        let c = this.options.blockManager.layoutManager.getScroller();
        if (browserEnvironmentDetectionUtils.browserDetector.isIPad && c && c instanceof Window) {
          c.scrollTo({
            top: n
          });
        } else {
          m.scrollTop = n;
        }
        return true;
      }
      return false;
    }
    scrollBlockIntoView(e) {
      if (!e) {
        return;
      }
      let i = {
        start: {
          line: 0,
          zoneId: String(e.id),
          offset: 0
        },
        end: {
          line: 0,
          zoneId: String(e.id),
          offset: 0
        }
      };
      return this.scrollCaretIntoView(e, i);
    }
    clearRecordChangeSource() {
      this.recordChangeSource = null;
    }
    async waitForSlicedBlockDataReady(e, i) {
      return (await collaborationRecordBlockLoader.fetchRecordChain(i, e, true)) === undefined;
    }
    async waitForLatestBlockDataReady(e, i) {
      let r = e.editorAPI.getService(collabTriggersProvider.collabProvider, {
        optional: true
      });
      if (!r) {
        return false;
      }
      if (!r.isInited) {
        await collaborationRecordBlockLoader.checkRecordPending(r, 60000);
        return false;
      }
      let {
        sync: o
      } = r;
      let l = o == null ? undefined : o.ioVersion;
      if (o && (l === undefined || l === o.getSyncVersion()) && (e.editorAPI.isDestroyed() || (await Promise.race([new Promise(e => {
        let i = () => {
          o.off(collaborativeEditingFlowSyncModule.GM.HEARTBEAT_CALLBACK, i);
          l = o.ioVersion;
          e();
        };
        o.on(collaborativeEditingFlowSyncModule.GM.HEARTBEAT_CALLBACK, i);
        o.forceSendHeartbeats("locateAnchor");
      }), collaborativeEditingFlowSyncModule._v(60000)]), o.ioVersion === undefined))) {
        return false;
      }
      let s = r.getSyncVersion();
      return (!o || l === undefined || !(l > s) || (await new Promise(e => {
        let i = null;
        let l = a => {
          if (a >= s) {
            o.off(collaborativeEditingFlowSyncModule.GM.VersionChange, l);
            if (i !== null) {
              clearTimeout(i);
            }
            let {
              buffer: s
            } = r;
            if (s && s.bufferPool.length) {
              s.consume(undefined, true);
            }
            e(undefined);
          }
        };
        i = setTimeout(() => {
          i = null;
          o.off(collaborativeEditingFlowSyncModule.GM.VersionChange, l);
          e(collaborationRecordBlockLoader.recordErrorCodes.HEART_BEATS_TIMEOUT);
        }, 60000);
        o.on(collaborativeEditingFlowSyncModule.GM.VersionChange, l);
      })) === undefined) && (await collaborationRecordBlockLoader.fetchRecordChain(e, i)) === undefined;
    }
    binarySearchBlockId(e, i) {
      let {
        blockManager: n
      } = this.options;
      let o = n.getBlockStructByBlockId(e)?.children;
      if (!o) {
        return null;
      }
      let [l, s] = [0, o.length - 1];
      while (l <= s) {
        let e = Math.floor(l + (s - l) / 2);
        let {
          id: r
        } = o[e];
        let n = i(r);
        if (n === 0) {
          return r;
        }
        if (n < 0) {
          s = e - 1;
        } else {
          l = e + 1;
        }
      }
      return null;
    }
    setup() {
      let {
        blockManager: e,
        selectionAPI: i
      } = this.options;
      this.changeSub = e.dataService.change$.subscribe(this.handleRecordContentChange);
      i.onSelectionChange(this.lastSelectionChangeTrigger.handleSelectionChange);
      this.lastSelectionChangeTrigger.init(this.adjustViewport, i, e);
      docxEditorEventConstantsAndManager.globalEventBus.on(docxEditorEventConstantsAndManager.eventConstants.COMMON.ADJUST_VIEWPORT, this.adjustViewport);
    }
    destroy() {
      var e;
      let {
        selectionAPI: i
      } = this.options;
      if ((e = this.changeSub) !== null && e !== undefined) {
        e.unsubscribe();
      }
      i.offSelectionChange(this.lastSelectionChangeTrigger.handleSelectionChange);
      docxEditorEventConstantsAndManager.globalEventBus.off(docxEditorEventConstantsAndManager.eventConstants.COMMON.ADJUST_VIEWPORT, this.adjustViewport);
      this.lastSelectionChangeTrigger.destroy();
      this.debouncedClearRecordChangeSource.cancel();
      if (this.focusChangeTimer) {
        window.clearTimeout(this.focusChangeTimer);
        this.focusChangeTimer = undefined;
      }
    }
    constructor(e) {
      var i = this;
      this.options = e;
      S(this, "lastSelectionChangeTrigger", new selectionChangeHandler.SelectionChangeHandler());
      S(this, "recordChangeSource", null);
      S(this, "changeSub", undefined);
      S(this, "curSelectedBlockId", undefined);
      S(this, "preventScroll", false);
      S(this, "focusChangeTimer", undefined);
      S(this, "debouncedClearRecordChangeSource", debounceUtil_1_1.debounce(this.clearRecordChangeSource.bind(this)));
      S(this, "adjustViewport", function () {
        if (arguments.length > 0 && arguments[0] !== undefined) {
          arguments[0];
        }
        let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : i.options.selectionAPI.getSelection();
        if (e.length > 1 || !e.length) {
          if (i.focusChangeTimer) {
            window.clearTimeout(i.focusChangeTimer);
            i.focusChangeTimer = undefined;
          }
          return;
        }
        i.curSelectedBlockId = e[0].id;
        if (!i.focusChangeTimer && i.recordChangeSource !== collaborativeEditingFlowSyncModule.kq.REMOTE && i.options.blockManager.editable) {
          i.focusChangeTimer = window.setTimeout(() => {
            let e = i.curSelectedBlockId;
            let {
              blockManager: r
            } = i.options;
            if (r.hasBlockStructByBlockId(e)) {
              let o = r.getBlockViewByBlockId(e);
              if (i.recordChangeSource !== collaborativeEditingFlowSyncModule.kq.REMOTE && o && !i.preventScroll) {
                i._scrollFocusIntoView(o);
              }
            }
            i.focusChangeTimer = undefined;
          });
        }
      });
      S(this, "isBlockInViewport", e => this.options.blockManager.layoutManager.isBlockInViewport(e));
      S(this, "scrollToBlock", async (e, i, r, n, o) => {
        let s = this.options.blockManager.getBlockStructByBlockId(e)?.recordId;
        if (s) {
          await this.scrollToRecord(s, i, r, o);
          return true;
        } else {
          this.options.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
            action: "scroll_to_block_fail",
            info: JSON.stringify({
              stack: Error("scroll_to_block_fail").stack || "",
              callerName: n
            })
          });
          return false;
        }
      });
      S(this, "scrollToBlockWithAnimation", e => {
        let i;
        let r = false;
        this.scrollToBlock(e, async () => {
          if (r) {
            return;
          }
          let o = this.options.blockManager.config.get("pageMainBoundary") ?? this.options.selectionAPI.options.boundaryAreaContainer;
          let l = this.options.blockManager.getBlockViewByBlockId(e);
          if (l) {
            i = scrollAnimationManager_1.animateScrollToTarget({
              scroller: browserEnvironmentDetectionUtils.browserDetector.isMobile ? document.scrollingElement : o,
              duration: 200,
              target: l.hostElement
            });
          }
        });
        return () => {
          r = true;
          if (i != null) {
            i();
          }
        };
      });
      S(this, "scrollToRecord", async (e, i, r, n) => {
        let {
          forceShowFoldedBlock: o = true,
          shouldSyncDataIfStaled: a
        } = n || {};
        let {
          blockManager: u,
          eventEmitter: p
        } = this.options;
        let {
          editorAPI: m
        } = u;
        if (!(await this.waitForSlicedBlockDataReady(e, u))) {
          if (!a) {
            return null;
          }
          {
            let {
              lazyRecordStatus: i
            } = u;
            if (browserEnvironmentDetectionUtils.browserDetector.isLark && i && i.useCache && !(await this.waitForLatestBlockDataReady(u, e))) {
              return null;
            }
          }
        }
        let {
          dataService: v
        } = m;
        let b = v.getRecordByRecordId(e);
        if (b) {
          let i = b.snapshot.parent_id;
          if (i) {
            let r = v.getRecordByRecordId(i);
            let n = r && r.snapshot.children;
            if (n && !n.includes(e)) {
              b = r;
            }
          }
        }
        if (b) {
          b.snapshot.type;
        }
        await collaborationRecordBlockLoader.ensureBlockReady(e, u, {
          priorityConfig: {
            timeout: 60000
          }
        });
        let [y] = u.getBlockIdsByRecordId(e);
        if (y) {
          let s;
          let {
            fold: a,
            rect: g
          } = this.options;
          p.emit(lazyRecordClientvars.tableHideLoading, y);
          let m = a.findFoldedByBlock(y);
          if (o || !m) {
            let i = docxBlockUtils_1.getRootGridBlockId(u, y);
            await a.forceShowFoldedBlock(i, u.editable);
            [y] = u.getBlockIdsByRecordId(e);
          } else {
            [y] = u.getBlockIdsByRecordId(e);
            y = m || y;
          }
          u.getBlockPath(y).forEach(e => {
            let i = u.getBlockStructByBlockId(e);
            if (i && i.type === docBlockTypeConstants.blockTypeConstants.TABLE) {
              s = i.id;
            }
          });
          if (s) {
            let e = u.getBlockViewByBlockIdNotCheck(s);
            if (e && e.props.isShowLoading) {
              await new Promise(e => {
                setTimeout(() => {
                  diHideLoadingManager.unSubHideLoading(s, u);
                  e();
                }, 5000);
                diHideLoadingManager.subHideLoading(s, i => {
                  if (i === s) {
                    diHideLoadingManager.unSubHideLoading(s, u);
                    e();
                  }
                }, u);
              });
            }
            u.layoutManager.enableDescendantRender(s);
          }
          if (y) {
            await u.layoutManager.scrollToSelection(y, i, Object.assign({}, n, {
              tableId: s
            }));
            if (!r) {
              docxTableLayoutUtils.scrollTableHorizontal(u, y, g.getBlockRect(y));
            }
            return y;
          }
        }
        return null;
      });
      S(this, "getBlockIds", e => {
        let {
          parentBlockId: r = this.options.blockManager.rootBlockId,
          offsets: n,
          maxDepth: o = 2
        } = e;
        let l = [];
        let [s, a] = n;
        let {
          blockManager: c,
          rect: d
        } = this.options;
        if (s > a) {
          throw Error("offsets error");
        }
        let u = this.binarySearchBlockId(r, e => this.binarySearchMatcherWithOffset(e, s));
        if (!u) {
          return [];
        }
        l.push(u);
        if (s === a) {
          return l;
        }
        let h = c.getBlockStructByBlockId(u)?.next;
        while (h) {
          let {
            id: e,
            depth: i
          } = h;
          let {
            top: r
          } = d.getBlockRect(e);
          if (r > a && i === 2) {
            break;
          }
          if (i <= o && r < a) {
            l.push(e);
          }
          h = h.next;
        }
        return l;
      });
      S(this, "binarySearchMatcherWithOffset", (e, i) => {
        let {
          rect: r,
          blockManager: n
        } = this.options;
        let {
          top: o,
          bottom: l
        } = r.getBlockRect(e);
        if (o > i) {
          let o = n.getBlockStructByBlockId(e);
          if (o && o.previousSibling) {
            let {
              id: e
            } = o.previousSibling;
            let {
              bottom: n
            } = r.getBlockRect(e);
            if (n < i) {
              return 0;
            }
          }
          return -1;
        }
        return +(l < i);
      });
      S(this, "handleRecordContentChange", e => {
        this.recordChangeSource = e.options.from;
        this.debouncedClearRecordChangeSource();
      });
      this.setup();
    }
  }
  require.d(exports, {
    ViewportScrollManager: function () {
      return k;
    }
  });
}