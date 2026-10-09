// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'deltaSetCore'
// - Resolved require(47229) to 'delta-set-core'
// - Renamed variable 'n' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'l' to 'inlineComponentFacade'
// - Resolved require(678614) to 'inline-component-facade'
// - Renamed variable 'c' to 'docxFileCoverUtils'
// - Resolved require(326877) to 'docx-file-cover-utils'
// - Renamed variable 'a' to 'docxEditorConstantsConfig'
// - Resolved require(302915) to 'docx-editor-constants-config'
// - Renamed variable 'd' to 'browserEnvironmentDetectionUtils'
// - Resolved require(744607) to 'browser-environment-detection-utils'
// - Renamed variable 's' to 'userEnvironmentUtils'
// - Resolved require(107339) to 'user-environment-utils'
// - Renamed variable 'u' to 'codeBlockConstants'
// - Resolved require(48094) to 'code-block-constants'
// - Renamed variable 'f' to 'syncedReferenceBlockUtils'
// - Resolved require(262712) to 'synced-reference-block-utils'
// - Renamed variable 'h' to 'editorRangeUtilities'
// - Resolved require(780600) to 'editor-range-utilities'
// - Renamed variable 'g' to 'blockRangeModel'
// - Resolved require(398507) to 'block-range-model'
// - Renamed variable 'k' to 'docxFindScrollUtils'
// - Resolved require(514447) to 'docx-find-scroll-utils'
// - Renamed variable 'b' to 'findBlockConstants'
// - Resolved require(352857) to 'find-block-constants'
// - Renamed variable 'v' to 'docFindRectUtilities'
// - Resolved require(122406) to 'doc-find-rect-utilities'
// - Renamed variable 'p' to 'diProviderRevisionBaseService'
// - Resolved require(951946) to 'di-provider-revision-base-service'
// - Renamed variable 'm' to 'editorRevisionUtilities'
// - Resolved require(80308) to 'editor-revision-utilities'
// - Renamed variable 'y' to 'editorRevisionSelectionUtils'
// - Resolved require(421120) to 'editor-revision-selection-utils'
// - Renamed variable 'B' to 'syncedTranslationBlockUtils'
// - Resolved require(956836) to 'synced-translation-block-utils'
// - Renamed variable 'R' to 'textBlockAttributeUtils'
// - Resolved require(37833) to 'text-block-attribute-utils'
// - Renamed variable '_' to 'editorDeltaTextUtils'
// - Resolved require(728515) to 'editor-delta-text-utils'
// - Renamed variable 'T' to 'pasteRecordConstants'
// - Resolved require(780742) to 'paste-record-constants'
// - Renamed variable 'S' to 'blockSettingResolver'
// - Resolved require(272995) to 'block-setting-resolver'
// - Updated imported property 'ZP' to 'browserDetector' (module 744607)
// - Updated imported property '_e' to 'borderRadiusBase' (module 302915)
// - Updated imported property 'Z' to 'BlockRangeModel' (module 398507)
// - Updated imported property 'rj' to 'isSyncedReferenceBlock' (module 262712)
// - Updated imported property 'HG' to 'hasTranslateSnapshot' (module 956836)
// - Updated imported property 'Kk' to 'findRevisionInSelections' (module 421120)
// - Updated imported property 'TC' to 'toSelectionObject' (module 780600)
// - Updated imported property 'QH' to 'convertRangeWithZone' (module 780600)
// - Updated imported property 'AX' to 'createRangeWithZone' (module 780600)
// - Updated imported property 'YK' to 'isDeleteOperation' (module 80308)
// - Updated imported property 'tF' to 'getUserInfo' (module 107339)
// - Updated imported property 'P' to 'revisionBaseService' (module 951946)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'ZC' to 'compatibleBlock' (module 433991)
// - Updated imported property 'eT' to 'getDocxCoverHeight' (module 326877)
// - Updated imported property 'FL' to 'codeBlockMinWidth' (module 48094)
// - Updated imported property 'C' to 'scrollToFindResult' (module 514447)
// - Updated imported property '_q' to 'blockTypes' (module 352857)
// - Updated imported property 'Hx' to 'calcBlockRelativeRect' (module 122406)
// - Updated imported property 'lI' to 'findTextMatches' (module 122406)
// - Updated imported property 'pI' to 'getBlockSetting' (module 272995)
// - Updated imported property 'xH' to 'getAbstractSetting' (module 272995)
// - Updated imported property 'eB' to 'textualBlockType' (module 780742)
// - Updated imported property 'd' to 'isInsertString' (module 47229)
// - Updated imported property 'NT' to 'isInlineComponent' (module 37833)
// - Updated imported property '$0' to 'componentType' (module 678614)
// - Updated imported property 'Q5' to 'getComponentType' (module 678614)
// - Updated imported property 'O1' to 'mentionTypes' (module 678614)
// - Updated imported property 'GB' to 'isDeltaEmpty' (module 728515)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_find.9ec97f72.js
         * chunkId: 50944
         * moduleId: 836337
         */
module.exports = function (module, exports, require) {
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var inlineComponentFacade = require("inline-component-facade") /*id: 678614*/;
  var docxFileCoverUtils = require("docx-file-cover-utils") /*id: 326877*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var codeBlockConstants = require("code-block-constants") /*id: 48094*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var blockRangeModel = require("block-range-model") /*id: 398507*/;
  var docxFindScrollUtils = require("docx-find-scroll-utils") /*id: 514447*/;
  var findBlockConstants = require("find-block-constants") /*id: 352857*/;
  var docFindRectUtilities = require("doc-find-rect-utilities") /*id: 122406*/;
  var diProviderRevisionBaseService = require("di-provider-revision-base-service") /*id: 951946*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  var editorRevisionSelectionUtils = require("editor-revision-selection-utils") /*id: 421120*/;
  var syncedTranslationBlockUtils = require("synced-translation-block-utils") /*id: 956836*/;
  function w(e, o, r) {
    var i;
    if ((o = typeof (i = function (e, o) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, o || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (o === "string" ? String : Number)(e);
    }(o, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, o, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[o] = r;
    }
    return e;
  }
  let I = browserEnvironmentDetectionUtils.browserDetector.isMobile ? 0 : docxEditorConstantsConfig.borderRadiusBase;
  class M extends blockRangeModel.BlockRangeModel {
    get isReplaceable() {
      return !syncedReferenceBlockUtils.isSyncedReferenceBlock(this.blockManager.editorAPI) && !syncedTranslationBlockUtils.hasTranslateSnapshot(this.blockManager.getBlockModelByBlockIdNotCheck(this.blockId));
    }
    hasDeleteRevision() {
      let e = this.range || [0, 0];
      let o = this.blockManager.getBlockViewByBlockIdNotCheck(this.blockId);
      return !!o && !!editorRevisionSelectionUtils.findRevisionInSelections(this.blockManager, [editorRangeUtilities.toSelectionObject(editorRangeUtilities.convertRangeWithZone(o, e))], e => e && editorRevisionUtilities.isDeleteOperation(e) && e.userId === userEnvironmentUtils.getUserInfo().userId, {
        isCompleteWithinSelectionsOnly: true
      });
    }
    async replaceWith(e) {
      if (!this.isReplaceable) {
        return;
      }
      let o = this.currentBlockModel;
      this.range[1];
      this.range[0];
      let r = "";
      if (this.blockManager.config.get("revising")) {
        r = this.blockManager.editorAPI.getService(diProviderRevisionBaseService.revisionBaseService).generateRevisionId();
      }
      let i = editorRangeUtilities.createRangeWithZone(o.zoneState, [this.range[0], this.range[0] + 1]);
      let n = o.getAttributes(i.start, i.end).toMap();
      n.author = userEnvironmentUtils.getUserInfo().userId;
      await o.replaceText(this.range, {
        text: e,
        mark: n
      }, r);
    }
    scrollIntoView(e, o, r, i) {
      let {
        blockId: l
      } = this;
      let a = o.getRecordByBlockId(this.blockId).id;
      return e.scrollToRecord(a, async () => {
        let [e, a] = this.range;
        let d = this.blockManager.getBlockViewByBlockIdNotCheck(l);
        let s = (d == null ? undefined : d.type) === docBlockTypeConstants.blockTypeConstants.CODE;
        let f = s && d.isNewUI;
        let h = null;
        if (s) {
          d.renderViewportByRect(e);
          let {
            realScroller: o,
            codeResizeService: r,
            codeFoldService: i
          } = d;
          if (f) {
            if (i != null) {
              i.forceShowAllFoldedCodeBlocks();
            }
            if (r != null) {
              r.scrollIntoView(l, this.range);
            }
          }
          h = o;
        }
        let g = r.getCaretRect(l, e, l, true);
        let b = r.getCaretRect(l, a, l, false);
        let v = r.getBlockRect(l).top + docxFileCoverUtils.getDocxCoverHeight(o) + I;
        let p = {
          startTop: v + g.top,
          endBottom: v + b.bottom,
          scrollContainer: i
        };
        let {
          record: {
            snapshot: m
          }
        } = o.getBlockModelByBlockId(this.blockId);
        if (s && !m.wrap && h) {
          let {
            scrollLeft: e
          } = h;
          p.left = g.left + e;
          if (f) {
            p.left -= codeBlockConstants.codeBlockMinWidth;
          }
          p.right = b.right + e;
          p.horizonScrollContainer = h;
        }
        await docxFindScrollUtils.scrollToFindResult(p);
      });
    }
    constructor(e) {
      super(e);
      w(this, "range", undefined);
      w(this, "type", findBlockConstants.blockTypes.TextBlock);
      this.range = e.range;
    }
  }
  class C extends M {
    get isReplaceable() {
      return false;
    }
    scrollIntoView(e, o, r, i) {
      let {
        blockId: n
      } = this;
      let l = o.getRecordByBlockId(this.blockId).id;
      return e.scrollToRecord(l, async () => {
        let e = this.blockManager.getBlockViewByBlockId(n);
        let l = docFindRectUtilities.calcBlockRelativeRect({
          block: e,
          rect: r,
          range: this.range,
          offset: this.contentOffset
        });
        let a = r.getBlockRect(n).top + docxFileCoverUtils.getDocxCoverHeight(o) + I;
        let d = a + l.top;
        let s = a + l.bottom;
        await docxFindScrollUtils.scrollToFindResult({
          startTop: d,
          endBottom: s,
          scrollContainer: i
        });
      });
    }
    constructor(e) {
      super(e);
      w(this, "contentOffset", undefined);
      w(this, "type", findBlockConstants.blockTypes.TextEmbedBlock);
      this.contentOffset = e.offset;
    }
  }
  var textBlockAttributeUtils = require("text-block-attribute-utils") /*id: 37833*/;
  var editorDeltaTextUtils = require("editor-delta-text-utils") /*id: 728515*/;
  var pasteRecordConstants = require("paste-record-constants") /*id: 780742*/;
  var blockSettingResolver = require("block-setting-resolver") /*id: 272995*/;
  function x(e, o, r, i) {
    let n = {
      blockManager: e.blockManager,
      blockId: e.id,
      key: r
    };
    return docFindRectUtilities.findTextMatches(o, r).map(e => new M({
      ...n,
      range: [e.start + i, e.end + i]
    })).filter(e => !e.hasDeleteRevision());
  }
  function P(e) {
    let {
      block: o,
      keyword: r,
      isTitleChanged: i,
      blockManager: n
    } = e;
    return o.children.reduce((e, o) => {
      let l = blockSettingResolver.getBlockSetting(o.type, n, "find");
      if (l) {
        return e.concat(l({
          block: o,
          keyword: r,
          isTitleChanged: i,
          blockManager: n
        }));
      } else {
        return e;
      }
    }, []);
  }
  var E = [{
    blockSetting: {
      blockType: pasteRecordConstants.textualBlockType,
      find: function (e) {
        let {
          block: o,
          keyword: r,
          isTitleChanged: n,
          generateBlockMatches: c = x
        } = e;
        if (!o.matches || o.findKeyword !== r || n) {
          let e = [];
          let n = "";
          let a = 0;
          o.zoneState.getContent().forEach(d => {
            if (deltaSetCore.isInsertString(d) && textBlockAttributeUtils.isInlineComponent(d)) {
              e.push(...c(o, n, r, a));
              a += n.length;
              n = "";
              let i = function (e, o, r) {
                if ((o.attributes || {})[inlineComponentFacade.componentType]) {
                  let r = inlineComponentFacade.getComponentType(o);
                  if ((r == null ? undefined : r.type) === inlineComponentFacade.mentionTypes.DOC) {
                    var i;
                    let {
                      token: o,
                      title: n
                    } = r.data;
                    if (e.snapshot.translate && n) {
                      return n;
                    }
                    let l = (i = e.mentionDocManager.get()) === null || i === undefined ? undefined : i.getMentionDocDataByToken(o);
                    let c = (l == null ? undefined : l.newTitle) || (l == null ? undefined : l.title);
                    if (c) {
                      return c;
                    }
                  }
                }
                return editorDeltaTextUtils.isDeltaEmpty(o, r);
              }(o, d, o.blockManager.editorAPI.modelService);
              e.push(...function (e, o, r, i) {
                let n = {
                  blockManager: e.blockManager,
                  blockId: e.id,
                  key: r
                };
                return docFindRectUtilities.findTextMatches(o, r).map(e => new C({
                  ...n,
                  range: [i, i + 1],
                  offset: [e.start, e.end]
                })).filter(e => !e.hasDeleteRevision());
              }(o, i, r, a));
              a++;
              return;
            }
            n += d.insert;
          });
          if (n) {
            e.push(...c(o, n, r.normalize(), a));
          }
          o.matches = e;
          o.findKeyword = r;
        }
        let a = blockSettingResolver.getAbstractSetting(o.type, o.blockManager, "findChildren");
        let d = (a == null ? undefined : a({
          block: o,
          keyword: r,
          isTitleChanged: n,
          blockManager: o.blockManager
        })) || [];
        return o.matches.concat(d);
      }
    }
  }, {
    blockSetting: {
      blockType: docBlockTypeConstants.compatibleBlock,
      find: function (e) {
        let {
          block: o,
          keyword: r,
          isTitleChanged: i,
          blockManager: n
        } = e;
        return P({
          block: o,
          keyword: r,
          isTitleChanged: i,
          blockManager: n
        });
      },
      findChildren: P
    }
  }];
  require.r(exports);
  require.d(exports, {
    default: function () {
      return E;
    }
  });
}