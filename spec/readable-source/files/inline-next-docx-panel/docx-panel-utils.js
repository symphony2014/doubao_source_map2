// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'docPanelUtils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: inline-next-docx-panel.7c8dbe01.js
         * chunkId: 31601
         * moduleId: 678171
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var rpcHostManager = require("rpc-host-manager") /*id: 953389*/;
  var corpcDebugLoggers = require("corpc-debug-loggers") /*id: 363765*/;
  var rpcChannelCore = require("rpc-channel-core") /*id: 737542*/;
  var docxPanelEventConstKeys = require("docx-panel-event-const-keys") /*id: 212120*/;
  var lifecycleEventManager = require("lifecycle-event-manager") /*id: 597916*/;
  let c = corpcDebugLoggers.getServiceDebug("utils");
  let d = {
    async getIsFirstLineEmpty(e) {
      let t = rpcHostManager.RpcHostManager.getInstance();
      if (t && e) {
        return new Promise((n, i) => {
          lifecycleEventManager.lifecycleManager.subscribeEvents(e, {
            async onEditorReady() {
              try {
                let i = await t.call(e, "utilsService.getIsFirstLineEmpty");
                n(i);
              } catch (e) {
                if (e instanceof rpcChannelCore.RpcError) {
                  c("[warn] getIsFirstLineEmpty failed:", e.message);
                }
                i(e);
              }
            }
          });
        });
      }
    },
    async isBlankDoc(e) {
      let t = rpcHostManager.RpcHostManager.getInstance();
      if (t && e) {
        return new Promise((n, i) => {
          lifecycleEventManager.lifecycleManager.subscribeEvents(e, {
            async onEditorReady() {
              try {
                let i = await t.call(e, "utilsService.isBlankDoc");
                n(i);
              } catch (e) {
                if (e instanceof rpcChannelCore.RpcError) {
                  c("[warn] isBlankDoc failed:", e.message);
                }
                i(e);
              }
            }
          });
        });
      }
    },
    subscribeIsBlankDoc(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (n && e) {
        return n.on(e, "utilsService.isBlankDocChanged", t);
      } else {
        return emptyExportFunction.emptyFunction;
      }
    },
    async getPanelExpandState(e) {
      let t = rpcHostManager.RpcHostManager.getInstance();
      if (t && e) {
        return new Promise((n, i) => {
          lifecycleEventManager.lifecycleManager.subscribeEvents(e, {
            async onEditorReady() {
              try {
                let i = await t.call(e, "utilsService.getPanelExpandState");
                n(i);
              } catch (e) {
                if (e instanceof rpcChannelCore.RpcError) {
                  c("[warn] getPanelExpandState failed:", e.message);
                }
                i(e);
              }
            }
          });
        });
      }
    },
    subscribePanelExpandStateChanged(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (n && e) {
        return n.on(e, "utilsService.panelExpandStateChanged", t);
      } else {
        return emptyExportFunction.emptyFunction;
      }
    },
    async triggerCoverIntersectionChange(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (n && e) {
        try {
          await n.call(e, "utilsService.triggerCoverIntersectionChange", t);
        } catch (e) {
          if (e instanceof rpcChannelCore.RpcError) {
            c("[warn] triggerCoverIntersectionChange failed:", e.message);
          }
        }
      }
    },
    async getPageMeta(e) {
      let t = rpcHostManager.RpcHostManager.getInstance();
      if (t && e) {
        try {
          return await t.call(e, "utilsService.getPageMeta");
        } catch (e) {
          if (e instanceof rpcChannelCore.RpcError) {
            c("[warn] getPageMeta failed:", e.message);
          }
          return;
        }
      }
    },
    async getBlockStructByBlockId(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (n && e) {
        try {
          return await n.call(e, "utilsService.getBlockStructByBlockId", t);
        } catch (e) {
          if (e instanceof rpcChannelCore.RpcError) {
            c("[warn] getBlockStructByBlockId failed:", e.message);
          }
          return;
        }
      }
    },
    async getRecordByBlockId(e, t) {
      let n = rpcHostManager.RpcHostManager.getInstance();
      if (n && e) {
        try {
          return await n.call(e, "utilsService.getRecordByBlockId", t);
        } catch (e) {
          if (e instanceof rpcChannelCore.RpcError) {
            c("[warn] getRecordByBlockId failed:", e.message);
          }
          return;
        }
      }
    },
    register(e, t) {
      e.registerMethod(docxPanelEventConstKeys.utilsGetLang, t.getLang);
      e.registerMethod(docxPanelEventConstKeys.utilsPolicySdkEnv, t.getPolicySdkEnv);
    }
  };
  require.d(exports, {
    docPanelUtils: function () {
      return d;
    }
  });
}