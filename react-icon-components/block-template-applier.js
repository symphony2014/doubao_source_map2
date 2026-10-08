// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'TemplateInsertSource'
// - Renamed export 'S' to 'applyBlockTemplate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 909266
         */
module.exports = function (module, exports, require) {
  var l;
  var docTokenManager = require("doc-token-manager") /*id: 632370*/;
  var fileTypeConstants = require("file-type-constants") /*id: 276005*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var toastNotificationManager_1 = require("toast-notification-manager_1") /*id: 737977*/;
  var docEditorActionMap = require("doc-editor-action-map") /*id: 987175*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var documentBlockInsertUtil = require("document-block-insert-util") /*id: 907868*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var blockFlashEnhancementManager = require("block-flash-enhancement-manager") /*id: 710621*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxTokenMappingResolver = require("docx-token-mapping-resolver") /*id: 586713*/;
  var docxIdParser = require("docx-id-parser") /*id: 476973*/;
  var docxSnapshotHandler = require("docx-snapshot-handler") /*id: 595708*/;
  var docxBlockitManager = require("docx-blockit-manager") /*id: 829862*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var docxApiConstantsExports = require("docx-api-constants-exports") /*id: 81404*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var apiClientInstance = require("api-client-instance") /*id: 22981*/;
  var spaceApiConfig = require("space-api-config") /*id: 11507*/;
  async function E(e, r = 22, o = 5000) {
    try {
      return await apiClientInstance.apiClient.post(`/block/create/?resource_token=${e}&resource_type=22&block_id=${uuidGeneratorUtil.generateUuid()}`, {
        resource_token: e,
        resource_type: r,
        block_id: uuidGeneratorUtil.generateUuid()
      }, {
        baseURL: spaceApiConfig.getSpaceApiFn(),
        timeout: o
      });
    } catch (e) {
      return {
        code: e == null ? undefined : e.code,
        msg: e == null ? undefined : e.message,
        isError: true
      };
    }
  }
  var changeSourceConstants = require("change-source-constants") /*id: 363583*/;
  var blockSettingResolver = require("block-setting-resolver") /*id: 272995*/;
  var docxContentStructureUtils = require("docx-content-structure-utils") /*id: 125185*/;
  var docxRecordSnapshotTransformer = require("docx-record-snapshot-transformer") /*id: 634523*/;
  var docxBlockUtils = require("docx-block-utils") /*id: 4213*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var revisionSelectionHandler = require("revision-selection-handler") /*id: 227683*/;
  var editorRevisionOperations = require("editor-revision-operations") /*id: 907135*/;
  var docxTemplateActionManager = require("docx-template-action-manager") /*id: 267506*/;
  function S(e, r, o) {
    var l;
    if ((r = typeof (l = function (e, r) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var o = e[Symbol.toPrimitive];
      if (o !== undefined) {
        var l = o.call(e, r || "default");
        if (typeof l != "object") {
          return l;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }(r, "string")) == "symbol" ? l : l + "") in e) {
      Object.defineProperty(e, r, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[r] = o;
    }
    return e;
  }
  class D {
    getSelectedBlocks() {
      let {
        selectionAPI: e
      } = this.context;
      let r = e.getSelection();
      if (docxEditorEventConstantsAndManager.globalEditorState.isTriggerredByClick) {
        docxEditorEventConstantsAndManager.globalEditorState.isTriggerredByClick = false;
        r = docxEditorEventConstantsAndManager.globalEditorState.selectedBlocks;
      }
      return r;
    }
    get parentBlock() {
      let {
        blockManager: e
      } = this.context;
      let r = e.getBlockModelByBlockId(this.selectedBlocks[0].id);
      if (!r.parent) {
        return r;
      }
      let o = r.parent;
      return (o == null ? undefined : o.type) === docBlockTypeConstants.blockTypeConstants.VIEW && o.parent || o;
    }
    validateBlockMap(e) {
      let r = Object.keys(e);
      let o = [{
        message: t("LarkCCM_Template_InsertFailed_Toast"),
        validator: () => docxContentStructureUtils.isValidContentLength(r),
        reason: "block_template_insert_exceeded"
      }, {
        message: t("LarkCCM_DocX_JiraBlock_InsertToCom_Fail_Toast"),
        validator: () => !r.some(r => e[r].data.type === docBlockTypeConstants.blockTypeConstants.JIRA_FILTER),
        reason: "block_template_insert_unsupported"
      }];
      if (!docxFeatureFlags.isMzEnabled()) {
        o.push({
          message: t("LarkCCM_PartialTemplate_CannotInsertTemplateWithChart_Toast"),
          validator: () => !r.some(r => docBlockTypeConstants.chartEmbeddedTypes.includes(e[r].data.type)),
          reason: "block_template_insert_unsupported"
        });
      }
      if (!docxFeatureFlags.isNxEnabled()) {
        o.push({
          message: t("LarkCCM_Templates_CanNotInsertTemplatesContainSheetsBitable_renametest"),
          validator: () => !r.some(r => !docxContentStructureUtils.isNonEmbeddedBlockType(e[r].data.type)),
          reason: "block_template_insert_unsupported"
        });
      }
      return docxContentStructureUtils.findInvalidRecord(o);
    }
    validateISVBlockMap(e) {
      let r = Object.keys(e);
      return docxContentStructureUtils.findInvalidRecord([{
        message: t("LarkCCM_Docs_Component_TemplateNA_Toast"),
        validator: () => !r.some(r => e[r].data.type === docBlockTypeConstants.blockTypeConstants.ISV),
        reason: "block_template_insert_unsupported"
      }]);
    }
    async applyBlockTemplateByToken(e) {
      let {
        token: r,
        beforeApply: o
      } = e;
      let l = await Promise.all([docxTemplateActionManager.checkDocCreateCopyAction(r), docxApiConstantsExports.docxApiService.fetchClientVarsFull({
        token: r,
        extraParams: {
          open_type: 1
        }
      })]);
      if (!l[0]) {
        return;
      }
      let {
        data: n
      } = l[1];
      let {
        block_map: a
      } = n;
      let i = this.validateBlockMap(a);
      if (browserEnvironmentDetectionUtils.browserDetector.isOpendoc) {
        i = i || this.validateISVBlockMap(a);
      }
      if (i) {
        toastNotificationManager_1.toastManager.error({
          content: i.message,
          duration: 4000
        });
        this.context.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("ccm_doc_toast_view", {
          toast_reason: i.reason
        });
        return;
      }
      let s = docxContentStructureUtils.transformRecordMap(n.block_map);
      let {
        moduleService: d
      } = this.context.blockManager.editorAPI;
      await Promise.all(Object.keys(s).map(async e => {
        let r = s[e];
        try {
          return d.loadBlockModule(r.snapshot.type);
        } catch (e) {}
      }));
      await this.applyBlockTemplate({
        recordMap: s,
        pageId: n.id,
        beforeApply: o
      });
      return {
        applyRecordIds: this.applyRecordIds
      };
    }
    async beforeApplyBlockTemplate(e) {
      let r = {};
      let o = Object.entries(e).map(async e => {
        let [o, l] = e;
        let {
          type: a
        } = l.snapshot;
        if (a === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE) {
          let e = await E(docTokenManager.getDocToken());
          if (e.isError) {
            throw Error("generateSyncedSourceBlockToken error");
          }
          let l = e.data.token;
          syncedReferenceBlockUtils.setSyncedBlockDataManager(l, true);
          r[o] = l;
        }
      });
      await Promise.all(o);
      return r;
    }
    async applyBlockTemplate(e) {
      let r;
      let {
        blockManager: o,
        isAppend: l
      } = this.context;
      let {
        recordMap: n,
        pageId: a,
        beforeApply: i
      } = e;
      let c = o.config.get("revising");
      revisionSelectionHandler.clearRevisionsFromRecords([a], n);
      if (c) {
        let e = editorRevisionOperations.createAddRevision(o);
        revisionSelectionHandler.applyRevisionToRecords([a], n, e);
        r = {
          type: e.type,
          revisionId: e.revisionId
        };
      }
      let s = this.generateRecordPayloadMap(n);
      try {
        let e = await this.beforeApplyBlockTemplate(n);
        if (!this.selectedBlocks.length) {
          throw Error("get selectedBlocks empty");
        }
        await o.applyTransaction("applyBlockTemplate", r => {
          if (i != null) {
            i(r);
          }
          let o = n[a].snapshot.children;
          let {
            position: c,
            parentRecordId: s
          } = this.getInsertPosition(l);
          let d = this.parentBlock;
          let u = o.map(o => {
            let l = {
              parentBlockStruct: d,
              recordMap: n,
              op: r,
              tempIdToRecordIdMap: this.oldRecordIdToNewIdMap,
              beforeCreateNewRecord: this.handleBeforeCreateNewRecord.bind(this),
              afterCreateNewRecord: this.handleAfterCreateNewRecord.bind(this)
            };
            return docxRecordSnapshotTransformer.transformRecord(l, o, s, {
              shouldReplaceAuthor: true,
              assignRecordIdMap: e
            });
          });
          r.insert(s, ["children", c], u);
        }, {
          afterTransactionAccepted: () => {
            this.handleDataApplyOrAccept(s, "onDataAccept", "onPasteRecordAfterAccepted");
          },
          source: changeSourceConstants.changeSourceConstants.PASTE,
          extra: {
            revisionContext: r
          }
        });
        this.handleDataApplyOrAccept(s, "onDataApply", "onPasteRecordAfterApply");
      } catch (e) {
        return Promise.reject(e);
      }
    }
    handleDataApplyOrAccept(e, r, o) {
      let {
        blockManager: l
      } = this.context;
      let n = [];
      this.applyRecordIds.forEach(r => {
        let a = this.newRecordIdToOldIdMap.get(r);
        let i = l.getBlockIdsByRecordId(r)[0];
        l.layoutManager.renderNodeByIdSync(i);
        let c = l.getBlockModelByBlockIdNotCheck(i);
        if (!c) {
          n.push(r);
          return;
        }
        try {
          let r = blockSettingResolver.getBlockSetting(c.type, l, o);
          if (a && r) {
            r({
              block: c,
              payload: e[a] || {}
            });
          }
        } catch (e) {}
      });
      n.length;
    }
    generateRecordPayloadMap(e) {
      let {
        blockManager: r
      } = this.context;
      let o = {};
      Object.entries(e).forEach(e => {
        let [l, n] = e;
        (function (e, r, o, l) {
          let {
            type: n
          } = l.snapshot;
          switch (n) {
            case docBlockTypeConstants.blockTypeConstants.ISV:
              {
                var i;
                let {
                  app_block_id: n
                } = l.snapshot;
                r[o] = {
                  schema: (i = docxBlockitManager.blockitModuleFactory.getBlockitModule()) === null || i === undefined ? undefined : i.generateSchema(n, {
                    uuid: docxTokenMappingResolver.resolveDocToken(e.getRootRecordId())
                  })
                };
                break;
              }
            case docBlockTypeConstants.blockTypeConstants.TASK:
              {
                let {
                  task_id: n
                } = l.snapshot;
                let i = `${fileTypeConstants.BasicFileType.DOCX}_${e.rootRecordId}`;
                r[o] = {
                  recordId: o,
                  isReference: false,
                  taskId: n,
                  objectTypeToken: i
                };
                break;
              }
            case docBlockTypeConstants.blockTypeConstants.TASK_LIST:
              {
                let {
                  token: e
                } = l.snapshot;
                r[o] = {
                  guid: e && docxIdParser.parseDocxId(e)
                };
                break;
              }
            case docBlockTypeConstants.blockTypeConstants.OKRX:
              {
                let {
                  token: e
                } = l.snapshot;
                r[o] = {
                  token: e
                };
                break;
              }
            case docBlockTypeConstants.blockTypeConstants.FILE:
              {
                let {
                  file: e
                } = l.snapshot;
                r[o] = {
                  token: e.token
                };
                break;
              }
            case docBlockTypeConstants.blockTypeConstants.IMAGE:
              r[o] = {
                oldRecord: l
              };
              break;
            case docBlockTypeConstants.blockTypeConstants.MINDMAP:
            case docBlockTypeConstants.blockTypeConstants.SHEET:
            case docBlockTypeConstants.blockTypeConstants.BITABLE:
            case docBlockTypeConstants.blockTypeConstants.BASE_REFER:
              r[o] = {
                token: l.snapshot.token
              };
              break;
            case docBlockTypeConstants.blockTypeConstants.WHITEBOARD:
              docxSnapshotHandler.updateDocxSnapshot(r, l);
              break;
            case docBlockTypeConstants.blockTypeConstants.CHART_EMBEDDED:
            case docBlockTypeConstants.blockTypeConstants.URL_PREVIEW:
              r[o] = {
                token: l.snapshot.token
              };
          }
        })(r, o, l, n);
      });
      return o;
    }
    handleBeforeCreateNewRecord(e) {
      let {
        blockManager: r
      } = this.context;
      return docxBlockUtils.applyBlockSnapshot({
        blockManager: r,
        snapshot: e,
        applyFrom: docBlockTypeConstants.pasteOperationTypes.outerTemplateClone
      });
    }
    handleAfterCreateNewRecord(e, r) {
      this.newRecordIdToOldIdMap.set(r, e);
      this.oldRecordIdToNewIdMap.set(e, r);
      this.applyRecordIds.push(r);
    }
    getInsertPosition(e) {
      let {
        blockManager: r,
        fold: o
      } = this.context;
      let l = r.getBlockModelByBlockId(this.selectedBlocks[this.selectedBlocks.length - 1].id);
      let n = l.parent;
      if ((n == null ? undefined : n.type) === docBlockTypeConstants.blockTypeConstants.VIEW) {
        l = n;
      }
      let a = false;
      if (l.type.startsWith("heading") && l.record.snapshot.folded) {
        let e = o.findFoldedBlocks(l.id);
        if (e == null ? undefined : e.length) {
          let o = e.pop();
          l = r.getBlockModelByBlockId(o);
          a = true;
        }
      }
      let i = this.parentBlock.children.findIndex(e => e.id === l.id);
      return {
        position: e || a ? i + 1 : i,
        parentRecordId: this.parentBlock.record.id
      };
    }
    constructor(e) {
      S(this, "context", undefined);
      S(this, "newRecordIdToOldIdMap", new Map());
      S(this, "oldRecordIdToNewIdMap", new Map());
      S(this, "applyRecordIds", []);
      S(this, "selectedBlocks", undefined);
      this.context = e;
      this.selectedBlocks = this.getSelectedBlocks();
    }
  }
  var docxToolboxTypes = require("docx-toolbox-types") /*id: 153659*/;
  (l = {})[l.SLASH = 0] = "SLASH";
  l[l.TOOLBOX = 1] = "TOOLBOX";
  l[l.TEMPLATE_CENTER = 2] = "TEMPLATE_CENTER";
  let H = l;
  let G = async e => {
    let {
      context: r,
      template: o,
      beforeApply: l,
      applyFrom: v,
      isFromSearch: _
    } = e;
    let {
      blockManager: g,
      fold: b,
      selectionAPI: C,
      isAppend: x
    } = r;
    let w = new D({
      blockManager: g,
      fold: b,
      selectionAPI: C,
      isAppend: x
    });
    try {
      let e = await w.applyBlockTemplateByToken({
        token: o.obj_token,
        beforeApply: l
      });
      if (e == null ? undefined : e.applyRecordIds) {
        var T;
        let r = (T = e.applyRecordIds) === null || T === undefined ? undefined : T.map(e => g.getBlockViewsByRecordId(e)[0]);
        blockFlashEnhancementManager.flashBlocks(r);
        if (v === H.SLASH || x) {
          await documentBlockInsertUtil.insertBlocks({
            blockManager: g,
            blocks: r,
            newBlockType: docBlockTypeConstants.blockTypeConstants.TEXT
          });
        }
        docxTemplateActionManager.reportTemplateAlgorithmData({
          template: o,
          objToken: docTokenManager.getDocToken(),
          objType: fileTypeConstants.BasicFileType.DOCX,
          reportType: docxToolboxTypes.DocxTypes.BLOCK
        });
        await docxUtilityHelpers.delayPromise(0);
        let l = e.applyRecordIds.reduce((e, r) => {
          let o = g.getBlockIdsByRecordId(r);
          if (o) {
            return e.concat(o);
          } else {
            return e;
          }
        }, []);
        g.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent(v === H.SLASH ? "ccm_doc_slash_panel_click" : "ccm_doc_add_panel_click", {
          click: docEditorActionMap.uiActionTypes.block_action,
          target: "none",
          action_type: docEditorActionMap.actionConstants.insert_template,
          action_value: JSON.stringify({
            value1: platformDocUtils.p5T(o.obj_token),
            value2: platformDocUtils.ORn[o.obj_type],
            value3: platformDocUtils.p5T(o.name)
          }),
          is_search_result: _,
          template_block_data: docxEditorBlockMetadataUtils.getMultipleBlockInfo(l, g)
        });
      }
    } catch (r) {
      g.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("ccm_doc_toast_view", {
        toast_reason: "block_template_insert_failed"
      });
      g.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("template_center_perf_dev", {
        type: "apply_block_template",
        status: "fail",
        message: r == null ? undefined : r.message
      });
      toastNotificationManager_1.toastManager.error({
        content: t("CreationDoc_PartialTemplate_InsertFailed_Toast"),
        actionText: t("common.translated_retry"),
        duration: 4000,
        onActionClick: () => {
          G(e);
          g.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("ccm_doc_toast_click", {
            click: "retry",
            toast_reason: "block_template_insert_failed"
          });
        }
      });
    }
  };
  require.d(exports, {
    TemplateInsertSource: function () {
      return H;
    },
    applyBlockTemplate: function () {
      return G;
    }
  });
}