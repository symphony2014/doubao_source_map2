// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'GridLayoutManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 433020
         */
module.exports = function (module, exports, require) {
  var bearVirtualLayoutReconciler = require("bear-virtual-layout-reconciler") /*id: 247503*/;
  var zIndexConstants = require("z-index-constants") /*id: 470454*/;
  var numberStringUtils = require("number-string-utils") /*id: 762471*/;
  var renderEventConstants = require("render-event-constants") /*id: 189091*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  function c(e, n, i) {
    var r;
    if ((n = typeof (r = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, n || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, n, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = i;
    }
    return e;
  }
  function u(e) {
    return numberStringUtils.concatToNumber(zIndexConstants.zIndexMax, e);
  }
  class d {
    saveCalculateModel(e, n) {
      this.caculateModelMap.set(e, n ? bearVirtualLayoutReconciler.CalculateModel.HORIZONTAL : bearVirtualLayoutReconciler.CalculateModel.VERTICAL);
    }
    deleteCalculateModel(e) {
      this.caculateModelMap.delete(e);
    }
    getCalculateModel(e, n) {
      let o = this.caculateModelMap.get(e) ?? bearVirtualLayoutReconciler.CalculateModel.HORIZONTAL;
      let l = (o = n && !n.show ? bearVirtualLayoutReconciler.CalculateModel.IGNORE : o) === bearVirtualLayoutReconciler.CalculateModel.VERTICAL ? bearVirtualLayoutReconciler.CalculateModel.IGNORE : o;
      return {
        calculateModel: o,
        splitCalculateModel: l
      };
    }
    getLayoutNodeConfig(e, n) {
      let {
        calculateModel: i
      } = this.getCalculateModel(e.id, n);
      return {
        calculateModel: i
      };
    }
    iterateLayoutNodeChildren(e, n, i) {
      let {
        id: r,
        children: o
      } = e;
      let {
        splitCalculateModel: l
      } = this.getCalculateModel(r, n);
      o.forEach(e => {
        i(e.id);
        i(u(e.id), {
          calculateModel: l,
          ignoreMarginCollapse: true
        });
      });
    }
    insertChild(e, n, i, r) {
      let o = e.getChangeNode(n.id);
      let {
        splitCalculateModel: l
      } = this.getCalculateModel(n.id, r);
      let s = i.position;
      e.insertChildRaw(o, s * 2, i.id);
      let c = u(i.id);
      o.modifications.push({
        childId: c,
        index: s * 2 + 1,
        action: renderEventConstants.nodeActions.INSERT_CHILD,
        config: {
          calculateModel: l
        }
      });
      e.getChangeNode(c).modifications.push({
        action: renderEventConstants.nodeActions.UPDATE_PARENT,
        parentId: o.nodeId
      });
      this.updateChildrenNodes(e, n, l);
    }
    removeChild(e, n, i, r, o) {
      let l = e.getChangeNode(n.id);
      let {
        splitCalculateModel: s
      } = this.getCalculateModel(n.id, o);
      l.modifications.push({
        childId: u(i.id),
        index: r * 2 + 1,
        action: renderEventConstants.nodeActions.DELETE_CHILD,
        config: {
          calculateModel: s
        }
      });
      e.removeChildRaw(l, r * 2, i.id);
      this.updateChildrenNodes(e, n, s);
    }
    updateChildrenNodes(e, n, i) {
      n.children.forEach(n => {
        let {
          id: r
        } = n;
        e.addModification(r, {
          action: renderEventConstants.nodeActions.UPDATE
        });
        let o = u(r);
        e.addModification(o, {
          action: renderEventConstants.nodeActions.UPDATE
        });
        e.getChangeNode(o).config = {
          calculateModel: i
        };
      });
    }
    constructor() {
      c(this, "type", docBlockTypeConstants.blockTypeConstants.GRID);
      c(this, "caculateModelMap", new Map());
    }
  }
  require.d(exports, {
    GridLayoutManager: function () {
      return d;
    }
  });
}