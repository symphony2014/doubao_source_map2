// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DocxBlockViewWidthManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 145137
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var fileUtilsAndViewHelpers = require("file-utils-and-view-helpers") /*id: 192103*/;
  var viewTypeConstants = require("view-type-constants") /*id: 676077*/;
  var docxBlockViewConfig = require("docx-block-view-config") /*id: 727302*/;
  var docxEquationViewUtils = require("docx-equation-view-utils") /*id: 66547*/;
  function d(e, i, r) {
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
  exports.DocxBlockViewWidthManager = class {
    init() {
      let {
        viewService: e
      } = this.blockManager;
      this.subs = [e.blockViewMount$.subscribe(this.handleBlockMountOrUpdate), e.blockViewMove$.subscribe(this.handleBlockMountOrUpdate), e.blockViewUnmount$.subscribe(this.handleBlockUnmount)];
      this.blockManager.addListener(viewTypeConstants.viewSwitchType, this.handleBlockMountOrUpdate);
    }
    destroy() {
      this.subs.forEach(e => e.unsubscribe());
      this.blockManager.removeListener(viewTypeConstants.viewSwitchType, this.handleBlockMountOrUpdate);
    }
    constructor(e) {
      this.blockManager = e;
      d(this, "pathMap", new Map());
      d(this, "subs", undefined);
      d(this, "handleBlockMountOrUpdate", e => {
        let {
          blockId: i,
          parentId: r,
          record: o
        } = e.props;
        if (!r) {
          return;
        }
        let l = docxEquationViewUtils.findCellBlockInPath(this.blockManager, r);
        let s = docxEquationViewUtils.getBlockWidth(o);
        if (!l || isUndefinedCheck.isUndefined(s)) {
          return;
        }
        this.pathMap.set(i, this.blockManager.getBlockPath(i));
        let d = this.blockManager.getRecordByBlockId(i).id;
        let u = this.blockManager.getRecordByBlockId(l).id;
        let h = this.getViewMinWidth(d);
        if (h !== undefined) {
          s = h;
        }
        this.blockManager.eventEmitter.emit(docxBlockViewConfig.notifyBlockWidth, {
          cellId: u,
          recordId: d,
          minWidth: s
        });
      });
      d(this, "handleBlockUnmount", e => {
        let {
          recordId: i,
          blockId: r,
          record: o
        } = e.props;
        let l = this.pathMap.get(r);
        if (!l) {
          return;
        }
        this.pathMap.delete(r);
        let s = docxEquationViewUtils.findCellBlockInPath(this.blockManager, r, l, true);
        let d = docxEquationViewUtils.getBlockWidth(o);
        if (!s || isUndefinedCheck.isUndefined(d)) {
          return;
        }
        let u = this.blockManager.getRecordByBlockId(s).id;
        this.blockManager.eventEmitter.emit(docxBlockViewConfig.clearCellMinWidth, {
          cellId: u,
          recordId: i
        });
      });
      d(this, "getViewMinWidth", (e, i) => {
        let r = this.blockManager.getBlockModelsByRecordId(e)[0];
        if (r.type !== docBlockTypeConstants.blockTypeConstants.VIEW) {
          return;
        }
        let n = i || r.snapshot.view_type;
        let d = docxEquationViewUtils.getBlockWidth(r.record);
        if (n === viewTypeConstants.viewTypes.Preview) {
          let e = r.children[0];
          if (e && fileUtilsAndViewHelpers.getFileNameWithoutExtension(e.snapshot.file.name)) {
            d = docxBlockViewConfig.docxConfig;
          }
        }
        return d;
      });
      this.init();
    }
  };
}