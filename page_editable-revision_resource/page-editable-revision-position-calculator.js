// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'PageEditableRevisionPositionCalculator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable-revision_resource.9a7282fa.js
         * chunkId: 57653
         * moduleId: 293539
         */
module.exports = function (module, exports, require) {
  var numberClampUtil = require("number-clamp-util") /*id: 317214*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var blockRectServiceId = require("block-rect-service-id") /*id: 768934*/;
  var compatibleEditorContext = require("compatible-editor-context") /*id: 6849*/;
  var docxCommentUtils = require("docx-comment-utils") /*id: 668699*/;
  var pageEditRevisionTypes = require("page-edit-revision-types") /*id: 758057*/;
  var docxCommentBlockSelectionUtils = require("docx-comment-block-selection-utils") /*id: 67708*/;
  function g(e, i, o) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var o = e[Symbol.toPrimitive];
      if (o !== undefined) {
        var n = o.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = o;
    }
    return e;
  }
  var f = class {
    getPositionData() {
      return Array.from(this.idToPosition.entries());
    }
    constructor(e) {
      g(this, "idWidthSelection", undefined);
      g(this, "idToPosition", undefined);
      g(this, "diffUpdatePositionList", undefined);
      g(this, "defaultCalculateStrategies", {
        [pageEditRevisionTypes.PositionModes.posBySelection]: (e, i) => {
          if (!this.idWidthSelection) {
            return null;
          }
          let {
            source: o,
            collectEvent: r,
            useRectCache: l = true
          } = i || {};
          let {
            id: s,
            selection: a
          } = this.idWidthSelection.selection;
          if (this.blockManager.hasBlockModelByBlockId(s)) {
            let i = this.getRangeById(e, s);
            if (i) {
              let c = numberClampUtil.clampNumber(a.start, i[0], i[1]);
              let d = numberClampUtil.clampNumber(a.end, i[0], i[1]);
              let u = docxCommentUtils.getRangeRectWithCache({
                blockId: s,
                range: [c, d],
                rect: this.rect,
                useCache: l,
                collectEvent: r,
                source: o
              });
              return this.convertRect(e, docxCommentBlockSelectionUtils.createCaretRectFromSelection(u, s));
            }
          }
          return null;
        },
        [pageEditRevisionTypes.PositionModes.posByDefault]: (e, i) => {
          try {
            let {
              source: o,
              collectEvent: n,
              useRectCache: r = true
            } = i || {};
            let l = this.getBlockIdsById(e);
            let {
              blockManager: s
            } = this;
            let d = null;
            l.forEach(i => {
              let l = this.fold.isShow(i);
              let u = null;
              let v = s.hasBlockViewByBlockId(i) ? s.getBlockViewByBlockId(i) : null;
              let g = (v == null ? undefined : v.type) === docBlockTypeConstants.blockTypeConstants.CODE && v.isNewUI;
              if (!docxCommentUtils.isMobileCommentClass(v)) {
                if (v !== null && editorTextBlockUtilities.isEditorInstance(v) && l) {
                  let l = this.getRangeById(e, i);
                  let s = docxCommentUtils.logRectCacheMiss({
                    blockId: i,
                    rect: this.rect,
                    useCache: r,
                    collectEvent: n,
                    source: o
                  });
                  if (l) {
                    docxCommentBlockSelectionUtils.adjustCodeSelectionForFolding(v, l);
                    let a = docxCommentUtils.getRangeRectWithCache({
                      blockId: v.id,
                      range: l,
                      rect: this.rect,
                      useCache: r,
                      collectEvent: n,
                      source: o
                    });
                    u = this.convertRect(e, docxCommentBlockSelectionUtils.createCaretRectFromSelection(a, v.id));
                    if (g) {
                      var f;
                      var p;
                      let [e, o] = ((p = v.codeResizeService) === null || p === undefined ? undefined : (f = p.isRangeInCodeBlock) === null || f === undefined ? undefined : f.call(p, i, a)) ?? [];
                      u.originalTop = u.top;
                      if (e) {
                        u.top = s.top;
                        u.bottom = u.top + a.height;
                      } else if (o) {
                        u.top = s.bottom;
                        u.bottom = u.top + a.height;
                      } else {
                        u.top = a.top;
                        u.bottom = a.bottom;
                        u.height = a.bottom - a.top;
                      }
                    }
                  } else {
                    u = this.convertRect(e, {
                      ...s,
                      blockId: i
                    });
                  }
                } else {
                  if (!v && d) {
                    return;
                  }
                  u = this.convertRect(e, {
                    ...docxCommentBlockSelectionUtils.m0(i, this.fold, this.rect, this.blockManager, {
                      useCache: r,
                      collectEvent: n,
                      source: o
                    }).blockRect,
                    blockId: i,
                    visible: l
                  });
                  let s = this.getPosOffsetByBlock(v);
                  if (u && s) {
                    u = {
                      ...u
                    };
                    Object.keys(s).forEach(e => {
                      if (u) {
                        u[e] += s[e];
                      }
                    });
                  }
                }
                if (u && d) {
                  let i = docxCommentBlockSelectionUtils.resolveParentFileBlockSelection(u, d, this.blockManager);
                  if (i) {
                    d = this.convertRect(e, {
                      ...i,
                      visible: l
                    });
                  } else if (u.top < d.top) {
                    d = this.convertRect(e, {
                      ...u,
                      visible: l
                    });
                  } else if (u.top === d.top && u.left < d.left) {
                    d = this.convertRect(e, {
                      ...u,
                      visible: l
                    });
                  }
                } else if (u) {
                  d = this.convertRect(e, {
                    ...u,
                    visible: l
                  });
                }
              }
            });
            return d;
          } catch (e) {
            return null;
          }
        }
      });
      g(this, "calculateStrategies", undefined);
      g(this, "blockManager", undefined);
      g(this, "getCalculateStrategyTypeCustom", undefined);
      g(this, "convertRect", undefined);
      g(this, "compareFn", undefined);
      g(this, "getPosOffsetByBlock", undefined);
      g(this, "getBlockIdsById", undefined);
      g(this, "getRangeById", undefined);
      g(this, "getFakeRect", undefined);
      g(this, "fold", undefined);
      g(this, "rect", undefined);
      g(this, "getCalculateStrategyType", e => {
        if (this.idWidthSelection?.selection && e === this.idWidthSelection?.id) {
          return pageEditRevisionTypes.PositionModes.posBySelection;
        }
        let n = this.getCalculateStrategyTypeCustom(e);
        if (n && this.calculateStrategies[n]) {
          return n;
        } else {
          return pageEditRevisionTypes.PositionModes.posByDefault;
        }
      });
      g(this, "getPositionById", e => this.idToPosition.get(e));
      g(this, "getCalculateStrategyByType", e => this.calculateStrategies[e].bind(this));
      g(this, "updatePositions", e => {
        this.resetDiff();
        let {
          extra: i,
          top: o,
          updatedIds: n,
          deletedIds: l
        } = e;
        if (i) {
          this.updatePositionMapBySelection(i);
        } else if (isNullishCheck.isNil(o)) {
          (l || []).forEach(e => this.deletePositionMapById(e));
          (n || []).forEach(e => this.updatePositionMapById(e));
        } else {
          this.updatePositionMapByTop(o);
        }
        let s = [...this.idToPosition.entries()];
        if (this.compareFn) {
          s.sort(this.compareFn);
          this.idToPosition = new Map(s);
        }
        return {
          idToRectTuples: s,
          idDiffs: this.diffUpdatePositionList
        };
      });
      g(this, "calcPositionById", (e, i) => {
        let o = this.getCalculateStrategyType(e);
        if (!this.calculateStrategies[o]) {
          return null;
        }
        let n = this.idToPosition.get(e);
        let r = this.calculateStrategies[o](e, i);
        if (!r && typeof this.getFakeRect == "function") {
          r = this.getFakeRect(e);
        }
        if (n && r && (i == null ? undefined : i.updateCalculatorCache)) {
          this.idToPosition.set(e, r);
        }
        return r;
      });
      g(this, "getPositionSize", () => this.idToPosition.size);
      g(this, "initCalCulator", () => {
        this.idToPosition = new Map();
        this.idWidthSelection = null;
        this.resetDiff();
      });
      g(this, "resetDiff", () => {
        this.diffUpdatePositionList = {
          [pageEditRevisionTypes.RevisionStates.added]: [],
          [pageEditRevisionTypes.RevisionStates.updated]: [],
          [pageEditRevisionTypes.RevisionStates.deleted]: []
        };
      });
      g(this, "updatePositionMapBySelection", e => {
        if (this.idToPosition.has(e.id) && (this.idWidthSelection || e.selection)) {
          this.idWidthSelection = e.selection ? e : null;
          this.updatePositionMapById(e.id);
        }
      });
      g(this, "updatePositionMapByTop", e => {
        this.idToPosition.forEach((i, o) => {
          let n = i.top;
          if (arrayIsArrayUtil.isArray(e)) {
            if (n >= e[0] && n <= e[1] && this.getBlockIdsById(o).length <= 20) {
              this.updatePositionMapById(o);
            }
          } else if (n >= e) {
            this.updatePositionMapById(o);
          }
        });
      });
      g(this, "updatePositionMapById", e => {
        let i = this.idToPosition.has(e) ? pageEditRevisionTypes.RevisionStates.updated : pageEditRevisionTypes.RevisionStates.added;
        let o = this.idToPosition.get(e);
        let n = this.calcPositionById(e);
        if (!!n && !deepEqualUtil_1.deepEqual(o, n)) {
          if (n) {
            this.idToPosition.set(e, n);
          }
          this.diffUpdatePositionList[i].push(e);
        }
      });
      g(this, "deletePositionMapById", e => {
        if (this.idToPosition.has(e)) {
          this.diffUpdatePositionList[pageEditRevisionTypes.RevisionStates.deleted].push(e);
        }
        this.idToPosition.delete(e);
      });
      g(this, "destroy", () => {
        this.idToPosition.clear();
        this.idWidthSelection = null;
        this.resetDiff();
      });
      this.blockManager = e.blockManager;
      this.getCalculateStrategyTypeCustom = e.getCalculateStrategyTypeCustom;
      this.convertRect = e.convertRect;
      this.compareFn = e.compareFn;
      this.getRangeById = e.getRangeById;
      this.getBlockIdsById = e.getBlockIdsById;
      this.getPosOffsetByBlock = e.getPosOffsetByBlock;
      this.getFakeRect = e.getFakeRect;
      this.calculateStrategies = {
        ...this.defaultCalculateStrategies,
        ...(e.calculateStrategies || {})
      };
      this.fold = this.blockManager.editorAPI.getService(compatibleEditorContext.compatibleContext).fold;
      this.rect = this.blockManager.editorAPI.getService(blockRectServiceId.blockRectServiceId);
      this.initCalCulator();
    }
  };
  require.d(exports, {
    PageEditableRevisionPositionCalculator: function () {
      return f;
    }
  });
}