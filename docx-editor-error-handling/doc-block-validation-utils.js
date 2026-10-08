// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A1' to 'validateNextHeadings'
// - Renamed export 'GI' to 'isPendingRecord'
// - Renamed export 'Nf' to 'isNotNull'
// - Renamed export '_G' to 'validateDeleteChild'
// - Renamed export 'cv' to 'validatePrevHeadings'
// - Renamed export 'mi' to 'hasPendingRecord'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 906066
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  function o(e) {
    return !e || e.snapshot.type === docBlockTypeConstants.blockTypeConstants.PENDING;
  }
  function l(e) {
    let i = -1;
    if (/heading\d/.test(e)) {
      i = parseInt(/\d/.exec(e)[0]);
    }
    return i;
  }
  function s(e) {
    let i = l(e.type);
    if (i < -1) {
      return false;
    }
    let r = e.previousSibling;
    while (r) {
      if (o(r.record)) {
        return false;
      }
      let e = l(r.record.snapshot.type);
      if (e > 0 && i >= e) {
        break;
      }
      r = r.previousSibling;
    }
    return true;
  }
  function a(e) {
    let i = l(e.type);
    let r = e.nextSibling;
    while (r) {
      if (o(r.record)) {
        return false;
      }
      let e = l(r.record.snapshot.type);
      if (e > 0 && i >= e) {
        break;
      }
      r = r.nextSibling;
    }
    return true;
  }
  function c(e) {
    let {
      record: i,
      lazyConsumer: r
    } = e;
    let {
      type: n
    } = e.action;
    if (n === "DELETE_CHILD") {
      if (r.isCriticalRecordsApplied()) {
        return true;
      }
      let n = i.snapshot.children?.[e.action.index];
      if (!n) {
        return false;
      }
      let l = e.modelService.getBlockModelsByRecordId(n)[0];
      if (!l.type.startsWith("heading")) {
        return true;
      }
      if (!s(l)) {
        return false;
      }
    }
    return true;
  }
  function d(e) {
    return e !== null;
  }
  require.d(exports, {
    validateNextHeadings: function () {
      return a;
    },
    isPendingRecord: function () {
      return o;
    },
    isNotNull: function () {
      return d;
    },
    validateDeleteChild: function () {
      return c;
    },
    validatePrevHeadings: function () {
      return s;
    },
    hasPendingRecord: function () {
      return function e(i) {
        return !!o(i.record) || !!i.children.length && i.children.some(i => e(i));
      };
    }
  });
}