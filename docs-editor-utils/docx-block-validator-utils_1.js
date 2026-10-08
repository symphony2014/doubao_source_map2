// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AE' to 'isHeadingWithSeqAndHeading'
// - Renamed export 'DB' to 'isOrderedListBlock'
// - Renamed export 'Il' to 'isHeadingWithSeq'
// - Renamed export 'S9' to 'isHeadingWithOrderedSubtype'
// - Renamed export 'cd' to 'isListBlockType'
// - Renamed export 'i7' to 'hasSeqProperty'
// - Renamed export 'kL' to 'hasSeqLevelProperty'
// - Renamed export 'sr' to 'listTypeConstant'
// - Renamed export 'wE' to 'isHeadingWithSeqProperty'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 869432
         */
module.exports = function (module, exports, require) {
  var docxBlockValidatorUtils = require("docx-block-validator-utils") /*id: 713166*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  let l = e => docBlockTypeConstants.listBlockTypes.includes(e);
  let c = 7;
  function u(e) {
    return Reflect.get(e.snapshot, "seq") !== undefined;
  }
  function a(e) {
    return Reflect.get(e.snapshot, "seq_level") !== undefined;
  }
  function s(e) {
    return docxBlockValidatorUtils.isHeadingBlock(e.type) && u(e);
  }
  function d(e) {
    return e.type === docBlockTypeConstants.blockTypeConstants.ORDERED || e.subType === docBlockTypeConstants.blockTypeConstants.ORDERED;
  }
  function f(e) {
    return docxBlockValidatorUtils.isHeadingBlock(e.type) && e.subType === docBlockTypeConstants.blockTypeConstants.ORDERED;
  }
  function h(e, n) {
    return docxBlockValidatorUtils.isHeadingBlock(e.type) && f(n);
  }
  function _(e, n) {
    return s(e) && docxBlockValidatorUtils.isHeadingBlock(n.type);
  }
  require.d(exports, {
    isHeadingWithSeqAndHeading: function () {
      return _;
    },
    isOrderedListBlock: function () {
      return f;
    },
    isHeadingWithSeq: function () {
      return d;
    },
    isHeadingWithOrderedSubtype: function () {
      return h;
    },
    isListBlockType: function () {
      return l;
    },
    hasSeqProperty: function () {
      return u;
    },
    hasSeqLevelProperty: function () {
      return a;
    },
    listTypeConstant: function () {
      return c;
    },
    isHeadingWithSeqProperty: function () {
      return s;
    }
  });
}