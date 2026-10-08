// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'TextCommentRenderer'
// - Renamed export 'g' to 'inlineCodeConstant'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 192686
         */
module.exports = function (module, exports, require) {
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var clientsidePrefixConstant = require("clientside-prefix-constant") /*id: 888035*/;
  var docxCommentConstants = require("docx-comment-constants") /*id: 580976*/;
  var docxCommentFeatureFlags = require("docx-comment-feature-flags") /*id: 662786*/;
  var flowCommentServiceToken = require("flow-comment-service-token") /*id: 397738*/;
  function c(e, i, n) {
    var r;
    if ((i = typeof (r = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, i || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  let d = "inlineCode";
  class u extends baseRendererClass.BaseRenderer {
    match(e) {
      return e.startsWith(docxCommentConstants.commentIdPrefix) || e.startsWith(docxCommentConstants.commentFallbackFullPrefix) || e === docxCommentConstants.commentHighlightPrefixed || e.startsWith(docxCommentConstants.commentFullIdPrefix);
    }
    addTextCommentClass(e, i) {
      let {
        commentKey: n,
        isLocal: r = false
      } = i;
      e.add("text-comment");
      if (r) {
        e.add("local-comment");
      }
      e.add(n);
    }
    render(e) {
      let i;
      let {
        attributes: n,
        children: r
      } = e;
      let c = new Set();
      let u = false;
      if (docxCommentFeatureFlags.isMobileCommentRelationEnabled()) {
        let i = this.blockManager.editorAPI.getService(flowCommentServiceToken.commentServiceToken);
        let {
          activeCommentId: n
        } = i;
        if (n) {
          var p;
          let r = this.blockManager.getBlockModelByBlockIdNotCheck(Number(e.zoneId));
          let o = r == null ? undefined : r.record?.id;
          u = !!o && !!((p = i.getRecordsByCommentId(n)) === null || p === undefined ? undefined : p.has(o));
        }
      }
      for (let e in n) {
        if (Object.prototype.hasOwnProperty.call(n, e)) {
          if (e.startsWith(docxCommentConstants.commentIdPrefix)) {
            this.addTextCommentClass(c, {
              commentKey: e
            });
          }
          if (e.startsWith(docxCommentConstants.commentFallbackFullPrefix)) {
            this.addTextCommentClass(c, {
              commentKey: e.slice(clientsidePrefixConstant.clientsidePrefix.length),
              isLocal: true
            });
          }
          if (e.startsWith(docxCommentConstants.commentFullIdPrefix)) {
            this.addTextCommentClass(c, {
              commentKey: e.slice(docxCommentConstants.commentFallbackPrefix.length),
              isLocal: true
            });
          }
          if (e === docxCommentConstants.commentHighlightPrefixed || u && `${docxCommentConstants.commentIdPrefix}${i}` === e) {
            c.add("comment-hl");
          }
          if (e === d) {
            c.add("comment-inline-code-wrapper");
          }
        }
      }
      let f = Array(...c).join(" ");
      e.class += ` ${f}`;
      return r;
    }
    constructor({
      blockManager: e
    }) {
      super();
      c(this, "name", "TextComment");
      c(this, "blockManager", undefined);
      this.blockManager = e;
    }
  }
  require.d(exports, {
    TextCommentRenderer: function () {
      return u;
    },
    inlineCodeConstant: function () {
      return d;
    }
  });
}