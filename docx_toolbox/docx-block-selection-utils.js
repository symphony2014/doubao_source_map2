// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'BlockSelectionManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 886406
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxBlockFoldUtils = require("docx-block-fold-utils") /*id: 186232*/;
  var docxBlockStyleUtils = require("docx-block-style-utils") /*id: 669427*/;
  class c {
    dealWithBlockSelectionIndent(e, n, r = 0) {
      if (!n || !e || !this.blockManager.hasBlockViewByBlockId(e)) {
        return n;
      }
      let o = this.blockManager.getBlockViewByBlockId(e);
      let l = n;
      if ([docBlockTypeConstants.blockTypeConstants.HEADING1, docBlockTypeConstants.blockTypeConstants.HEADING2, docBlockTypeConstants.blockTypeConstants.HEADING3, docBlockTypeConstants.blockTypeConstants.HEADING4, docBlockTypeConstants.blockTypeConstants.HEADING5, docBlockTypeConstants.blockTypeConstants.HEADING6, docBlockTypeConstants.blockTypeConstants.HEADING7, docBlockTypeConstants.blockTypeConstants.HEADING8, docBlockTypeConstants.blockTypeConstants.HEADING9, docBlockTypeConstants.blockTypeConstants.BULLET, docBlockTypeConstants.blockTypeConstants.ORDERED, docBlockTypeConstants.blockTypeConstants.TODO, docBlockTypeConstants.blockTypeConstants.TEXT, docBlockTypeConstants.blockTypeConstants.DIVIDER].includes(o.type)) {
        l = {
          ...n,
          x: n.x + r,
          left: n.left + r,
          width: n.width - r * 2,
          right: n.right + r
        };
      }
      return l;
    }
    getClosestBlock(e, n, r) {
      let c = this.blockManager.getBlockViewByBlockIdNotCheck(e);
      if (!c) {
        return docxEditorCore.ZERO_OFFSET;
      }
      if (c.type === docBlockTypeConstants.blockTypeConstants.TABLE || docxBlockFoldUtils.isListBlockType(c) && c.props.record.snapshot.folded) {
        return e;
      }
      let u = this.blockManager.getBlockStructByBlockId(e);
      let s = u;
      let d = docxBlockStyleUtils.getBlockRect(this.blockManager, e, this.scrollContainer);
      if (u && u.children.length > 0) {
        for (let e of u.children) {
          if (!this.blockManager.layoutManager.isBlockActive(e.id)) {
            continue;
          }
          let o = docxBlockStyleUtils.getBlockRect(this.blockManager, e.id, this.scrollContainer);
          if (!(o = this.dealWithBlockSelectionIndent(e.id, o, 4))) {
            break;
          }
          let {
            top: i,
            bottom: l,
            left: c,
            right: u
          } = o;
          if (i > r || c > n) {
            break;
          }
          if (l < r || u < n) {
            s = e;
            d = o;
          } else {
            s = e;
            d = o;
            break;
          }
        }
      }
      if (!s) {
        return docxEditorCore.ZERO_OFFSET;
      }
      let h = this.isPointInRect(d, n, r);
      if (s.id !== e && h) {
        return this.getClosestBlock(s.id, n, r);
      } else {
        return s.id;
      }
    }
    findClosestY(e, n) {
      let r = this.blockManager.getBlockViewByBlockId(e);
      if (docxBlockFoldUtils.isListBlockType(r) && this.fold.isFolded(e)) {
        return e;
      }
      let i = this.blockManager.getBlockStructByBlockId(e);
      let c = i;
      let u = false;
      if (i && i.children.length > 0) {
        for (let e of i.children) {
          let r = docxBlockStyleUtils.getBlockRect(this.blockManager, e.id, this.scrollContainer);
          if (!r) {
            break;
          }
          let {
            top: o,
            bottom: i
          } = r;
          if (o > n) {
            u = true;
            break;
          }
          if (i < n) {
            u = true;
            c = e;
          } else {
            u = false;
            c = e;
            break;
          }
        }
      }
      if (!c) {
        return docxEditorCore.ZERO_OFFSET;
      }
      let s = u && c.children.length <= 0;
      if (c.id === e) {
        return c.id;
      } else if (s) {
        return docxEditorCore.ZERO_OFFSET;
      } else {
        return this.findClosestY(c.id, n);
      }
    }
    findClosestX(e, n, r) {
      let i = this.blockManager.getBlockViewByBlockId(e);
      if (docxBlockFoldUtils.isListBlockType(i) && i.props.record.snapshot.folded) {
        return e;
      }
      let c = this.blockManager.getBlockStructByBlockId(e);
      let u = c;
      if (c && c.children.length > 0) {
        for (let e of c.children) {
          let r = docxBlockStyleUtils.getBlockRect(this.blockManager, e.id, this.scrollContainer);
          if (!r) {
            break;
          }
          let {
            left: o,
            right: i
          } = r;
          if (o > n) {
            break;
          }
          if (i < n) {
            u = e;
          } else {
            u = e;
            break;
          }
        }
      }
      if (!u) {
        return docxEditorCore.ZERO_OFFSET;
      }
      let s = u.id === e || r && r === u.record.snapshot.type ? u.id : this.findClosestX(u.id, n);
      if (r) {
        return s;
      }
      let d = this.blockManager.getBlockModelByBlockId(s);
      if (d.nextSibling) {
        return d.nextSibling.id;
      } else {
        return s;
      }
    }
    constructor(e, n, r) {
      var o;
      var i;
      var l;
      this.blockManager = e;
      this.scrollContainer = n;
      this.fold = r;
      o = "isPointInRect";
      i = (e, n, r) => e && n > e.left && n < e.right && r > e.top && r < e.bottom;
      if ((o = typeof (l = function (e, n) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var o = r.call(e, n || "default");
          if (typeof o != "object") {
            return o;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (n === "string" ? String : Number)(e);
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
    BlockSelectionManager: function () {
      return c;
    }
  });
}