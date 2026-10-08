// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$2' to 'getAttributesAtOffset'
// - Renamed export 'aP' to 'applyTextReplacements'
// - Renamed export 'lC' to 'createContentStateFromAttributedText'
// - Renamed export 'yR' to 'updateCaptionInBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_caption_component.c983c629.js
         * chunkId: 39088
         * moduleId: 144976
         */
module.exports = function (module, exports, require) {
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetChangesetConverter_1 = require("delta-set-changeset-converter_1") /*id: 193797*/;
  var contentStateManager = require("content-state-manager") /*id: 519638*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var editorModuleConstantsConfig = require("editor-module-constants-config") /*id: 414567*/;
  var richTextSchemaResolverFactory = require("rich-text-schema-resolver-factory") /*id: 873026*/;
  var attributedTextToDeltaConverter = require("attributed-text-to-delta-converter") /*id: 917517*/;
  function h(e) {
    let i = attributedTextToDeltaConverter.convertAttributedTextToDelta(e);
    return new contentStateManager.ContentStateManager({
      deltaSet: i,
      schema: richTextSchemaResolverFactory.richTextSchemaResolver,
      modulesContainer: editorModuleConstantsConfig.editorModuleManager
    });
  }
  function p(e, i, n) {
    let o = n.getZoneState(zeroConstantModule_1.versionValue);
    if (!o) {
      return;
    }
    let s = o.clone();
    let c = e.sort((e, i) => e.range[0] - i.range[0]);
    let u = -1;
    let d = 0;
    for (let e of c) {
      let {
        range: n,
        mark: o
      } = e;
      if (n[0] < u) {
        throw Error("range overlap");
      }
      let [c, h] = [n[0] + d, n[1] + d];
      let p = new contentStructureDelta.ContentDelta({
        zoneId: zeroConstantModule_1.versionValue
      }).retain(c).delete(h - c).insert(i, o);
      s = s.apply(p, emptyExportFunction.emptyFunction);
      d += i.length - (n[1] - n[0]);
      u = n[1];
    }
    n.setContent(s.getContent());
  }
  function f(e, i) {
    let n = e.getZoneState(zeroConstantModule_1.versionValue);
    if (!n) {
      return {};
    }
    let r = n.offsetToPoint(i);
    let o = n.offsetToPoint(i + 1);
    let s = {
      start: {
        ...r,
        zoneId: zeroConstantModule_1.versionValue
      },
      end: {
        ...o,
        zoneId: zeroConstantModule_1.versionValue
      }
    };
    return e.getAttributes(s.start, s.end).toMap();
  }
  function v(e) {
    let {
      blockManager: n,
      recordId: r,
      captionDeltaSet: s,
      path: l = ["caption"]
    } = e;
    let a = n.getBlockModelsByRecordId(r);
    return n.applyTransaction(`${a[0]?.type}:update_caption`, e => {
      e.replace(r, l, {
        text: deltaSetChangesetConverter_1.extractAttributedTexts(s, {
          filterLocalAttributes: true,
          filterInitialAttributedText: true
        })
      });
    });
  }
  require.d(exports, {
    getAttributesAtOffset: function () {
      return f;
    },
    applyTextReplacements: function () {
      return p;
    },
    createContentStateFromAttributedText: function () {
      return h;
    },
    updateCaptionInBlock: function () {
      return v;
    }
  });
}