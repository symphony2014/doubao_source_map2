// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'HK' to 'groupDocumentNodesByParent'
// - Renamed export '_C' to 'createDocumentNode'
// - Renamed export 'rI' to 'hasTextIndent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 868545
         */
module.exports = function (module, exports, require) {
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var createDocumentNodeHelper = require("create-document-node-helper") /*id: 980168*/;
  function c(e = {}, n = docBlockTypeConstants.blockTypeConstants.TEXT) {
    return createDocumentNodeHelper.createEmptyDocumentNode({
      folded: false,
      ...e
    }, n);
  }
  function u(e) {
    return Reflect.get(e.snapshot, "text_indent") === 1;
  }
  function a(e) {
    let n = new Map();
    e.forEach(e => {
      let {
        parent: o
      } = e;
      if (!o) {
        return;
      }
      let i = o.id;
      let l = n.get(i) ?? [];
      l.push(e);
      n.set(i, l);
    });
    return [...n.values()].reduce((e, n) => {
      e.push(...function (e) {
        let n = [];
        let r = [];
        for (let l of e) {
          if (r.length === 0 || lastElementHelper.getLastElement(r).id !== l.previousSibling?.id) {
            r = [l];
            n.push(r);
          } else {
            r.push(l);
          }
        }
        return n;
      }(n));
      return e;
    }, []);
  }
  require.d(exports, {
    groupDocumentNodesByParent: function () {
      return a;
    },
    createDocumentNode: function () {
      return c;
    },
    hasTextIndent: function () {
      return u;
    }
  });
}