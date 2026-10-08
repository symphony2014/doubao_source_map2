// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'useCanvasBehavior'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67342.cd008787.js
         * chunkId: 67342
         * moduleId: 57087
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var trackEventContextManager = require("track-event-context-manager") /*id: 928797*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var useOnUnmountHook = require("use-on-unmount-hook") /*id: 297204*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var checkSingleEmptyTextBlock = require("check-single-empty-text-block") /*id: 963907*/;
  var collabTriggersProvider = require("collab-triggers-provider") /*id: 164012*/;
  var flowSyncCollabReexports = require("flow-sync-collab-reexports") /*id: 14778*/;
  var asyncSkillMessageLifecycle_2 = require("async-skill-message-lifecycle_2") /*id: 288954*/;
  var reactCanvasEventsContext = require("react-canvas-events-context") /*id: 578669*/;
  let g = "canvas_common_params";
  let b = e => {
    let {
      docRef: n
    } = e;
    let o = reactCanvasEventsContext.useCanvasEvents();
    let b = reactCoreLibraryReexport.useRef();
    let w = n.current;
    let x = reactCoreLibraryReexport.useRef();
    let y = reactCoreLibraryReexport.useRef();
    let k = e => {
      try {
        if (e == null) {
          return undefined;
        } else {
          return e.selectionService;
        }
      } catch (e) {
        return;
      }
    };
    let S = () => {
      var e;
      let n = w == null ? undefined : w.blockManager;
      if (!n) {
        return;
      }
      let o = (e = k(n)) === null || e === undefined ? undefined : e.getSelection();
      if (o == null) {
        return undefined;
      } else {
        return o.every(e => {
          if (e.type === "text") {
            return false;
          }
          let o = n.getBlockStructByBlockId(e.id);
          return !!o && o.record.snapshot.type === "image";
        });
      }
    };
    let R = e => {
      var n;
      var m;
      let p = w == null ? undefined : w.blockManager;
      if (!p || E()) {
        return;
      }
      let _ = (n = k(p)) === null || n === undefined ? undefined : n.getSelection();
      if ((_ == null ? undefined : _.length) === 0 && e) {
        let n = e.target;
        let r = n == null ? undefined : n.dataset?.copyOrCutBlockId;
        let a = p.getRecordByBlockId(Number(r));
        if (!a) {
          return;
        }
        return {
          selectedContentIndex: {
            start: {
              block_id: a.id,
              offset: 0
            },
            end: {
              block_id: a.id,
              offset: a.get(["text", "initialAttributedTexts", "text", "0"])?.length
            }
          }
        };
      }
      {
        let e = arrayFirstElement.getFirstElement(_);
        let n = lastElementHelper.getLastElement(_);
        if (e && n) {
          return {
            selectedContentIndex: {
              start: {
                block_id: p.getRecordByBlockId(e == null ? undefined : e.id)?.id || "",
                offset: e.selection?.start || 0
              },
              end: {
                block_id: p.getRecordByBlockId(n == null ? undefined : n.id)?.id || "",
                offset: (n == null ? undefined : n.selection?.end) || ((m = p.getRecordByBlockId(n == null ? undefined : n.id)) === null || m === undefined ? undefined : m.get(["text", "initialAttributedTexts", "text", "0"])?.length)
              }
            }
          };
        }
      }
    };
    let E = () => {
      var n;
      let o = w == null ? undefined : w.blockManager;
      if (o) {
        return ((n = k(o)) === null || n === undefined ? undefined : n.getContext()?.source) === "KeyboardSelectAll";
      }
    };
    let C = () => {
      let n = w == null ? undefined : w.blockManager;
      if (!n) {
        return;
      }
      let o = n.editorAPI.getService(collabTriggersProvider.collabProvider, {
        optional: true
      });
      return {
        originalDocumentVersion: (o == null ? undefined : o.getSyncVersion()) ?? ""
      };
    };
    let {
      run: $
    } = useDebouncedCallbackHook_1.useDebouncedCallback(e => {
      o.outputPreviewSlide({
        direction: e
      });
    }, {
      leading: false,
      trailing: true,
      wait: 500
    });
    let {
      run: j
    } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
      o.outputPreviewActClick();
    }, {
      leading: false,
      trailing: true,
      wait: 500
    });
    let N = async () => {
      if (!w) {
        return;
      }
      let {
        docId: e,
        blockManager: n
      } = w;
      let i = n && checkSingleEmptyTextBlock.checkSingleEmptyTextBlock(n);
      trackEventContextManager.setTrackEventContext(g, {
        artifact_type: "1",
        page_token: e,
        ai_doc_content_status: i ? "0" : "1",
        ...(await o.getSuperTaskParams())
      }, {
        global: true
      });
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (w && w.docPath === "flow-doc") {
        N();
        return () => {
          trackEventContextManager.clearTrackEventContext(g);
        };
      }
    }, [w]);
    let M = async () => {
      await promiseAsyncUtilities.createDelayedPromise(10);
      o.outputPreviewShow();
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (o.docPath === "flow-doc") {
        M();
      }
    }, [o.docId]);
    useOnUnmountHook.useOnUnmount(() => {
      if (o.docPath === "flow-doc") {
        o.outputPreviewExit();
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (!w || w.docPath !== "flow-doc") {
        return;
      }
      w.eventEmitter.on("init", e => {
        var n;
        var o;
        b.current = e.config.get("scroller");
        b.current.addEventListener("scroll", a);
        if ((n = k(e)) !== null && n !== undefined) {
          n.onSelectionChange(j);
        }
        if ((o = w.dataCollab) !== null && o !== undefined) {
          o.sync.on(flowSyncCollabReexports.FlowCollabLogger.UserChanges, s);
        }
      });
      let e = e => {
        o.sendMessageStatus({
          ...e,
          isWriteSkill: true
        });
      };
      let n = e => {
        o.aiGenerateContentShow(e);
      };
      let i = e => {
        o.aiGenerateButtonShow(e);
      };
      let r = e => {
        o.aiGenerateButtonClick(e);
      };
      let a = () => {
        if (!b.current) {
          return;
        }
        let e = b.current.scrollTop;
        $(!isUndefinedCheck.isUndefined(x.current) && x.current > e ? "up" : "down");
        x.current = e;
      };
      let s = () => {
        o.canvasFreeEditSave({
          editMethod: "by_manual"
        });
      };
      let {
        bizEvents: c,
        eventEmitter: d
      } = w;
      c.on("behavior.download", e => {
        let {
          type: n,
          clickFrom: i
        } = e;
        o.outputPreviewClick({
          buttonName: "download"
        });
        o.download({
          ...C(),
          type: n,
          clickFrom: i
        });
      });
      c.on("behavior.toggle-share", () => {
        o.outputPreviewClick({
          buttonName: "share"
        });
      });
      c.on("behavior.toggle-comment", () => {
        o.outputPreviewClick({
          buttonName: "comment"
        });
      });
      c.on("behavior.close-comment", () => {
        o.outputPreviewClick({
          buttonName: "close_comment"
        });
      });
      c.on("behavior.revision-panel.close-doc-canvas-popup-show", () => {
        o.closeDocCanvasPopupShow();
      });
      c.on("behavior.revision-panel.close-doc-canvas-popup-click", e => {
        o.closeDocCanvasPopupClick(e);
      });
      c.on("behavior.revision-panel.close-ai-modify-guidance-popup-show", () => {
        o.closeAiModifyGuidancePopupShow();
      });
      c.on("behavior.revision-panel.close-ai-modify-guidance-popup-click", e => {
        o.closeAiModifyGuidancePopupClick(e);
      });
      c.on("behavior.click-undo-redo", e => {
        let {
          key: n
        } = e;
        o.outputPreviewClick({
          buttonName: n
        });
      });
      c.on("behavior.click-edit-time", () => {
        o.outputPreviewClick({
          buttonName: "edit-time"
        });
      });
      c.on("behavior.click-more", () => {
        o.outputPreviewClick({
          buttonName: "more"
        });
      });
      c.on("behavior.click-more-item", e => {
        let {
          key: n
        } = e;
        o.outputPreviewClick({
          buttonName: n
        });
        if (n === "copy_all") {
          o.copy({
            clickFrom: "canvas_function",
            ...C()
          });
          y.current = Date.now();
        }
      });
      c.on("behavior.click-copy", e => {
        let {
          from: n,
          isCopyAll: i
        } = e;
        o.copy({
          clickFrom: n,
          copyType: E() || i ? "all" : "partial",
          ...(i ? {} : R()),
          ...C()
        });
        y.current = Date.now();
      });
      c.on("behavior.stop-streaming", () => {
        o.pauseWriting();
        o.breakMessage({
          scene: "canvas_tool_list"
        });
      });
      c.on("behavior.rewrite-panel.action", e => {
        let {
          action: n,
          rewriteKey: i,
          canvasBarType: r,
          rewriteCommand: a
        } = e;
        o.selectionBarAction({
          buttonName: n,
          rewriteKey: i,
          rewriteCommand: a,
          canvasBarType: r
        });
        if (n === "regenerate") {
          o.clickRegenerate();
        }
        if (n === "break") {
          o.breakMessage({
            scene: "canvas_selection_bar"
          });
        }
        if (n === "copy") {
          o.copy({
            clickFrom: "canvas_selection_bar",
            ...C()
          });
          y.current = Date.now();
        }
      });
      c.on("behavior.rewrite-panel.stream-start", () => {
        o.sendMessageStatus({
          scene: "canvas_selection_bar"
        });
      });
      c.on("behavior.rewrite-panel.input-action-browsing-switch-show", () => {
        o.browsingSwitchShow();
      });
      c.on("behavior.rewrite-panel.input-action-browsing-switch-click", e => {
        let {
          value: n
        } = e;
        o.browsingSwitchClick({
          value: n
        });
      });
      c.on("behavior.rewrite-panel.input-action-deep-thinking-switch-show", () => {
        o.deepThinkingSwitchShow();
      });
      d.on("behavior.text-toobar-visible-change", e => {
        let {
          visible: n
        } = e;
        if (n) {
          o.textSelectionBarShow();
        }
      });
      d.on("behavior.text-toobar-item-click", e => {
        let {
          name: n
        } = e;
        o.textSelectionBarClick({
          buttonName: n.replace(/\s+/g, "_").toLowerCase()
        });
      });
      d.on("behavior.click-copy", e => {
        let {
          from: n,
          isCopyAll: i
        } = e;
        o.copy({
          clickFrom: n,
          copyType: E() || i ? "all" : "partial",
          ...(i ? {} : R()),
          ...C()
        });
        y.current = Date.now();
      });
      d.on("behavior.copy", e => {
        let {
          event: n
        } = e;
        if (!y.current || !(Date.now() - y.current < 50)) {
          o.rightClickCopy({
            isImage: S(),
            copyType: E() ? "all" : "partial",
            ...R(n),
            ...C()
          });
        }
      });
      d.on("behavior.block-menu-visible-change", e => {
        let {
          visible: n
        } = e;
        if (n) {
          o.paragraphToolListShow();
        }
      });
      d.on("behavior.block-menu-item-click", e => {
        let {
          name: n
        } = e;
        o.paragraphToolListClick({
          buttonName: n
        });
      });
      d.on("behavior.image-loading-start", () => {
        o.pictureLoadingStart();
        loggerServiceCore.defaultLogger.persist.log({
          eventName: "doc_image_load_start"
        });
      });
      d.on("behavior.image-loading-finished", () => {
        o.pictureLoadingFinish({
          status: "success"
        });
        loggerServiceCore.defaultLogger.persist.log({
          eventName: "doc_image_load_success"
        });
      });
      d.on("tech.copy", e => {
        let {
          rootId: n,
          stage: o,
          extra: i
        } = e;
        loggerServiceCore.defaultLogger.persist.log({
          eventName: "doc_copy",
          meta: {
            ...i,
            rootId: n,
            stage: o
          }
        });
      });
      d.on("tech.copy-error", e => {
        let {
          scene: n,
          error: o,
          rootId: i,
          extra: r
        } = e;
        loggerServiceCore.defaultLogger.persist.error({
          error: o,
          eventName: "doc_copy_error",
          meta: {
            ...r,
            scene: n,
            rootId: i
          }
        });
      });
      d.on("tech.split-error", e => {
        let {
          scene: n,
          error: o,
          rootId: i,
          extra: r
        } = e;
        loggerServiceCore.defaultLogger.persist.error({
          error: o,
          eventName: "doc_split_error",
          meta: {
            ...r,
            scene: n,
            rootId: i
          }
        });
      });
      d.on("tech.split-start", e => {
        let {
          rootId: n,
          extra: o
        } = e;
        loggerServiceCore.defaultLogger.persist.log({
          eventName: "doc_split_start",
          meta: {
            ...o,
            rootId: n
          }
        });
      });
      d.on("tech.split-end", e => {
        let {
          rootId: n,
          hasError: o,
          extra: i
        } = e;
        loggerServiceCore.defaultLogger.persist.log({
          eventName: "doc_split_end",
          meta: {
            ...i,
            rootId: n,
            hasError: o
          }
        });
      });
      d.on("tech.split-trace-stuck", e => {
        let {
          rootId: n,
          data: o,
          extra: i
        } = e;
        loggerServiceCore.defaultLogger.persist.log({
          eventName: "doc_split_all_stuck",
          meta: {
            ...i,
            ...o,
            rootId: n
          }
        });
      });
      c.on("behavior.change-image-click", e => {
        let {
          action: n,
          recordId: i
        } = e;
        o.pictureButtonClick({
          buttonName: n,
          pictureId: i
        });
        if (n === "search_web" || n === "ai_generate") {
          o.pictureChangeEnterBarShow();
        }
      });
      c.on("behavior.ai-generate-image-submit", () => {
        o.pictureChangeEnterBarClick();
      });
      c.on("behavior.search-web-image-item-in-view-change", e => {
        let {
          inView: n,
          recordId: i
        } = e;
        if (n) {
          o.pictureSearchResultShow({
            pictureId: i
          });
        }
      });
      c.on("behavior.ai-generate-image-show", e => {
        let {
          recordId: n
        } = e;
        o.pictureSearchResultShow({
          pictureId: n
        });
      });
      c.on("behavior.search-web-image-item-click", e => {
        let {
          recordId: n
        } = e;
        o.pictureSearchResultClick({
          pictureId: n
        });
      });
      c.on("behavior.share-panel-click", e => {
        let {
          buttonName: n,
          clickStatus: i
        } = e;
        o.sharePanelClick({
          buttonName: n,
          clickStatus: i,
          ...C()
        });
      });
      asyncSkillMessageLifecycle_2.skillLifecycle.on("behavior.continue-writing.stream-start", e);
      asyncSkillMessageLifecycle_2.skillLifecycle.on("behavior.continue-writing.content-show", n);
      asyncSkillMessageLifecycle_2.skillLifecycle.on("behavior.continue-writing.actions-show", i);
      asyncSkillMessageLifecycle_2.skillLifecycle.on("behavior.continue-writing.action-click", r);
      return () => {
        var o;
        var l;
        var c;
        var d;
        asyncSkillMessageLifecycle_2.skillLifecycle.off("behavior.continue-writing.stream-start", e);
        asyncSkillMessageLifecycle_2.skillLifecycle.off("behavior.continue-writing.content-show", n);
        asyncSkillMessageLifecycle_2.skillLifecycle.off("behavior.continue-writing.actions-show", i);
        asyncSkillMessageLifecycle_2.skillLifecycle.off("behavior.continue-writing.action-click", r);
        if ((o = b.current) !== null && o !== undefined) {
          o.removeEventListener("scroll", a);
        }
        if (!((l = w.blockManager) === null || l === undefined ? undefined : l.isDestroyed()) && (d = k(w.blockManager)) !== null && d !== undefined) {
          d.offSelectionChange(j);
        }
        if ((c = w.dataCollab) !== null && c !== undefined) {
          c.sync.off(flowSyncCollabReexports.FlowCollabLogger.UserChanges, s);
        }
      };
    }, [w]);
  };
  require.d(exports, {
    useCanvasBehavior: function () {
      return b;
    }
  });
}