// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'DocPasteHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 998221
         */
module.exports = function (module, exports, require) {
  let o;
  let i;
  let l;
  let a;
  let s;
  var hookServiceDiConstants_1 = require("hook-service-di-constants_1") /*id: 439395*/;
  var moduleSettingToken = require("module-setting-token") /*id: 907937*/;
  var blockSettingResolver = require("block-setting-resolver") /*id: 272995*/;
  var clipboardSecurityChecker = require("clipboard-security-checker") /*id: 991067*/;
  var docEditorActionMap = require("doc-editor-action-map") /*id: 987175*/;
  var uiComponentActionTypes = require("ui-component-action-types") /*id: 594795*/;
  var docBlockConstants = require("doc-block-constants") /*id: 159072*/;
  var docxBlockTypeConstants = require("docx-block-type-constants") /*id: 49433*/;
  var clipboardPasteDataHandlers = require("clipboard-paste-data-handlers") /*id: 324971*/;
  o = clipboardPasteDataHandlers.pasteLifecycleHooks.preprocessData;
  i = clipboardPasteDataHandlers.pasteLifecycleHooks.beforeBlockDataApply;
  l = clipboardPasteDataHandlers.pasteLifecycleHooks.afterRecordIdCreated;
  a = clipboardPasteDataHandlers.pasteLifecycleHooks.onDataApply;
  s = clipboardPasteDataHandlers.pasteLifecycleHooks.onDataAccept;
  class T {
    callHook(e, r) {
      var n;
      if ((n = this[e]) !== null && n !== undefined) {
        n.call(this, r);
      }
    }
    get hookService() {
      return this.blockManager.editorAPI.getService(hookServiceDiConstants_1.$$);
    }
    get moduleSetting() {
      return this.blockManager.editorAPI.getService(moduleSettingToken.moduleSettingToken);
    }
    [o](e) {
      var r;
      if ((r = this.hookService) !== null && r !== undefined) {
        r.callHook(hookServiceDiConstants_1.hookActionTypes.CLIPBOARD_PASTE, clipboardPasteDataHandlers.pasteLifecycleHooks.preprocessData, e);
      }
    }
    [i](e) {
      var r;
      if ((r = this.hookService) !== null && r !== undefined) {
        r.callHook(hookServiceDiConstants_1.hookActionTypes.CLIPBOARD_PASTE, clipboardPasteDataHandlers.pasteLifecycleHooks.beforeBlockDataApply, e);
      }
    }
    [l](e) {
      var r;
      var n;
      if ((n = this.hooks) !== null && n !== undefined && (r = n[clipboardPasteDataHandlers.pasteLifecycleHooks.afterRecordIdCreated]) !== null && r !== undefined) {
        r.call(n, e);
      }
    }
    [a](e) {
      var r;
      var n;
      var o;
      if ((n = this.hooks) !== null && n !== undefined && (r = n.onDataApply) !== null && r !== undefined) {
        r.call(n, e);
      }
      (function (e) {
        let {
          editorContext: {
            proxyClipboardData: r
          },
          data: n,
          isPasteIntoBlock: o,
          blockManager: i,
          selectedBlocks: l
        } = e;
        if (!r) {
          return;
        }
        let a = function (e, r, n) {
          let o = "other";
          let i = e.getData(docxBlockTypeConstants.fileTypes.DOCX_RECORD) || e.getData(docxBlockTypeConstants.fileTypes.DOCX_TEXT);
          if (i) {
            o = n.getRootRecordId() === JSON.parse(i)?.rootId ? "within_docs" : "cross_docs_docx";
          } else if (e.getData("application/x-editor-kit-business-key")) {
            o = "cross_docs_doc";
          }
          let {
            includesAutoOrderedHeading: a,
            hasOlHeading: s,
            hasUlHeading: c,
            hasTodoHeading: d
          } = function (e) {
            let {
              recordIds: r,
              recordMap: n
            } = e;
            let o = false;
            let i = false;
            for (let e of r) {
              let {
                snapshot: r
              } = n[e];
              if (r.type.startsWith("heading") && r.seq === "auto") {
                o = true;
                i = true;
                break;
              }
            }
            return {
              includesAutoOrderedHeading: String(o),
              hasOlHeading: String(i),
              hasUlHeading: String(false),
              hasTodoHeading: String(false)
            };
          }(r);
          return {
            value1: o,
            value2: a,
            value3: s,
            value4: c,
            value5: d
          };
        }(r, n, i);
        docEditorActionMap.collectBlockEvent({
          actionObject: o ? docBlockConstants.scopeTypes.TEXT : docBlockConstants.scopeTypes.BLOCK,
          source: uiComponentActionTypes.componentTypes.content_page,
          blockManager: i,
          actionType: docEditorActionMap.actionConstants.paste,
          actionValue: a,
          blocks: l,
          click: docEditorActionMap.uiActionTypes.hotkey_action
        }, {
          paste_block_data: function (e) {
            let {
              applyRecordIds: r,
              blockManager: n
            } = e;
            return Object.entries(r.reduce((e, r) => {
              let o = n.getRecord(r).snapshot.type;
              if (e[o]) {
                e[o]++;
              } else {
                e[o] = 1;
              }
              return e;
            }, {})).map(e => {
              let [r, n] = e;
              return {
                paste_block_type: r,
                paste_block_cnt: n
              };
            });
          }(e)
        });
      })(e);
      if ((o = this.hookService) !== null && o !== undefined) {
        o.callHook(hookServiceDiConstants_1.hookActionTypes.CLIPBOARD_PASTE, clipboardPasteDataHandlers.pasteLifecycleHooks.onDataApply, e);
      }
      this.onDataApplyOrAccept(e, "onDataApply", "onPasteRecordAfterApply");
    }
    [s](e) {
      var r;
      var n;
      var o;
      if ((r = this.hookService) !== null && r !== undefined) {
        r.callHook(hookServiceDiConstants_1.hookActionTypes.CLIPBOARD_PASTE, clipboardPasteDataHandlers.pasteLifecycleHooks.onDataAccept, e);
      }
      if ((o = this.hooks) !== null && o !== undefined && (n = o.onDataAccept) !== null && n !== undefined) {
        n.call(o, e);
      }
      this.onDataApplyOrAccept(e, "onDataAccept", "onPasteRecordAfterAccepted");
    }
    onDataApplyOrAccept(e, r, n) {
      let {
        recordIdToTempIdMap: o,
        applyRecordIds: i,
        data: l
      } = e;
      let {
        blockManager: a,
        data: s
      } = this;
      let c = [];
      this.iterateTempIdMap(i, o, e => {
        let {
          tempId: o,
          newRecordId: i
        } = e;
        let d = a.getBlockIdsByRecordId(i)[0];
        if (!clipboardSecurityChecker.isSecuritySupported() || r === "onDataAccept") {
          a.layoutManager.renderNodeByIdSync(d);
        }
        let p = a.getBlockModelByBlockIdNotCheck(d);
        if (!p) {
          c.push(i);
          return;
        }
        let f = s.payloadMap[o] || {};
        try {
          let e = blockSettingResolver.getBlockSetting(p.type, this.blockManager, n);
          if (e) {
            e({
              block: p,
              payload: f,
              pasteRootId: l.rootId
            });
          } else {
            var g;
            if ((g = p[n]) !== null && g !== undefined) {
              g.call(p, s.payloadMap[o] || {});
            }
          }
        } catch (e) {}
      });
      c.length;
    }
    constructor(e, r, n) {
      var o;
      var i;
      var l;
      this.blockManager = e;
      this.data = r;
      this.hooks = n;
      o = "iterateTempIdMap";
      i = (e, r, n) => {
        e.forEach(e => {
          n({
            tempId: r.get(e),
            newRecordId: e
          });
        });
      };
      if ((o = typeof (l = function (e, r) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var o = n.call(e, r || "default");
          if (typeof o != "object") {
            return o;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (r === "string" ? String : Number)(e);
      }(o, "string")) == "symbol" ? l : l + "") in this) {
        Object.defineProperty(this, o, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[o] = i;
      }
    }
  }
  require.d(exports, {
    DocPasteHandler: function () {
      return T;
    }
  });
}