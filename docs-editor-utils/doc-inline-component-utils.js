// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ix' to 'createEmbedContent'
// - Renamed export 'Q5' to 'getComponentType'
// - Renamed export 'QW' to 'safeJsonParse'
// - Renamed export 'WY' to 'parseJsonSafe'
// - Renamed export 'h3' to 'createBlockObject'
// - Renamed export 's' to 'findBlockType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 595942
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorModuleConstantsConfig = require("editor-module-constants-config") /*id: 414567*/;
  require("doc-block-constants_1") /*id: 329056*/;
  var contentDeltaUtilityFunctions = require("content-delta-utility-functions") /*id: 348536*/;
  var displayTypeConstants = require("display-type-constants") /*id: 897087*/;
  var inlineComponentConstants = require("inline-component-constants") /*id: 427890*/;
  function d(e, n) {
    return {
      id: uuidGeneratorUtil.generateUuid(),
      type: e,
      data: n
    };
  }
  function f(e, n) {
    return [{
      text: " ",
      mark: {
        [inlineComponentConstants.componentType]: JSON.stringify(e),
        ...n.mark
      },
      type: editorModuleConstantsConfig.editorContentTypes.EMBED
    }];
  }
  function h(e) {
    try {
      if (e) {
        return JSON.parse(e);
      }
    } catch (e) {}
    return null;
  }
  function _(e) {
    let n = contentDeltaUtilityFunctions.D(e);
    let r = objectPathGetDefault.getObjectPathDefault(n, `attributes.${inlineComponentConstants.componentType}`);
    if (r) {
      return h(r);
    } else {
      return null;
    }
  }
  let p = e => {
    let n = null;
    try {
      n = JSON.parse(e);
    } catch (e) {}
    return n;
  };
  let g = (e, n) => {
    let [i, c] = e;
    if (i === inlineComponentConstants.componentType) {
      return p(c)?.type;
    } else if (i === "equation") {
      return docBlockTypeConstants.blockTypeConstants.EQUATION;
    } else if (i === displayTypeConstants.displayInlineBlock) {
      return n.getBlockModelsByRecordId(c)[0]?.type || docBlockTypeConstants.blockTypeConstants.FILE;
    } else {
      return undefined;
    }
  };
  let E = (e, n, r) => {
    let o;
    let {
      numToAttrib: i
    } = e;
    if (i) {
      Object.values(i).find(e => {
        let i = g(e, n);
        if (r[i]) {
          o = i;
          return;
        }
      });
    }
    return o;
  };
  require.d(exports, {
    createEmbedContent: function () {
      return f;
    },
    getComponentType: function () {
      return _;
    },
    safeJsonParse: function () {
      return p;
    },
    parseJsonSafe: function () {
      return h;
    },
    createBlockObject: function () {
      return d;
    },
    findBlockType: function () {
      return E;
    }
  });
}