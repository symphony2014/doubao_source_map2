// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fj' to 'getZoneDeltaInfo'
// - Renamed export 'In' to 'getZoneContentRange'
// - Renamed export 'Mo' to 'getZoneModelText'
// - Renamed export 'aY' to 'getDeltaByKey'
// - Renamed export 'g2' to 'getDeltaTarget'
// - Renamed export 'mY' to 'addDeltaVersion'
// - Renamed export 'mb' to 'getDeltaSet'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68834.ebc1ffcc.js
         * chunkId: 68834
         * moduleId: 893015
         */
module.exports = function (module, exports, require) {
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var editorZoneDeltaState = require("editor-zone-delta-state") /*id: 800502*/;
  var editorZoneState = require("editor-zone-state") /*id: 962363*/;
  var editorDeltaSetUtils = require("editor-delta-set-utils") /*id: 201746*/;
  let s = e => editorDeltaSetUtils.isContentDelta(e) ? e : e.target;
  let d = (e, t) => {
    if (editorDeltaSetUtils.isContentDelta(e)) {
      return null;
    } else {
      return e.deltaSet.get(t) ?? null;
    }
  };
  let u = e => editorDeltaSetUtils.isContentDelta(e) ? new deltaSetCore.DeltaSet() : e.deltaSet;
  let c = e => {
    let t = s(e);
    return new editorZoneDeltaState.ZoneDeltaState("", t).getModelText();
  };
  let m = (e, t, r) => {
    let n = new editorZoneState.EditorZoneState("", s(e));
    let i = editorDeltaSetUtils.getZoneContent({
      target: n,
      start: t,
      end: r
    }).getContent();
    if (editorDeltaSetUtils.isContentDelta(e)) {
      return i;
    } else {
      return {
        deltaSet: u(e),
        target: i
      };
    }
  };
  let h = function (e, t = zeroConstantModule_1.versionValue) {
    let r = e.get(t);
    if (!r) {
      throw Error(`zoneId is not existed in given deltaSet: ${t}`);
    }
    if (!editorDeltaSetUtils.isContentDelta(r)) {
      throw Error("zoneId is not target to ZoneDelta type");
    }
    return {
      deltaSet: e,
      target: r
    };
  };
  let f = e => u(e).add(zeroConstantModule_1.versionValue, s(e));
  require.d(exports, {
    getZoneDeltaInfo: function () {
      return h;
    },
    getZoneContentRange: function () {
      return m;
    },
    getZoneModelText: function () {
      return c;
    },
    getDeltaByKey: function () {
      return d;
    },
    getDeltaTarget: function () {
      return s;
    },
    addDeltaVersion: function () {
      return f;
    },
    getDeltaSet: function () {
      return u;
    }
  });
}