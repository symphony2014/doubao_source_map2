// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CH' to 'isAiBlock'
// - Renamed export 'IW' to 'hasAiBlockInPath'
// - Renamed export 'M$' to 'isAiBlockType'
// - Renamed export 'qx' to 'findAiBlockContainer'
// - Renamed export 'vC' to 'getBlockTypeFromText'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 173943
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var inlineComponentFacade = require("inline-component-facade") /*id: 678614*/;
  var docBlockTypeExclusion = require("doc-block-type-exclusion") /*id: 52576*/;
  var copilotAiBlockClass = require("copilot-ai-block-class") /*id: 940498*/;
  let u = e => (e == null ? undefined : e.type) === docBlockTypeConstants.blockTypeConstants.AI;
  let a = e => (e == null ? undefined : e.type) === docBlockTypeConstants.blockTypeConstants.AI;
  function s(e, n) {
    return !!e.hasBlockModelByBlockId(n) && !u(e.getBlockModelByBlockIdNotCheck(n)) && [...e.getBlockPath(n), n].reverse().some(n => u(e.getBlockModelByBlockIdNotCheck(n)));
  }
  let d = (e, n) => {
    if (!e) {
      return;
    }
    if (docBlockTypeExclusion.excludedBlockTypes[e.type]) {
      return e.type;
    }
    if (!e.text) {
      return;
    }
    let {
      apool: r
    } = e.text;
    return inlineComponentFacade.findBlockType(r, n, docBlockTypeExclusion.excludedBlockTypes);
  };
  let f = e => (e == null ? undefined : e.hostElement) ? e.hostElement.querySelector(copilotAiBlockClass.aiBlockContainerClass) : null;
  require.d(exports, {
    isAiBlock: function () {
      return a;
    },
    hasAiBlockInPath: function () {
      return s;
    },
    isAiBlockType: function () {
      return u;
    },
    findAiBlockContainer: function () {
      return f;
    },
    getBlockTypeFromText: function () {
      return d;
    }
  });
}