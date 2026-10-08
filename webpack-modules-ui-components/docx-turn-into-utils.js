// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'addTurnIntoCommand'
// - Renamed export 'V' to 'collectTurnRules'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 140870
         */
module.exports = function (module, exports, require) {
  var docxToolboxConstants_3 = require("docx-toolbox-constants_3") /*id: 42034*/;
  var moduleSettingToken = require("module-setting-token") /*id: 907937*/;
  function l(e, r) {
    let n = [];
    let o = [];
    let i = [];
    let l = [];
    let a = [];
    let s = [];
    let c = [];
    let d = [];
    let u = [];
    let h = [];
    let p = [];
    let f = [];
    let g = [];
    let m = [];
    let k = [];
    let T = [];
    let v = [];
    e.map(e => e(r)).forEach(e => {
      if (e.specialTurnIntoCase) {
        n.push(e.specialTurnIntoCase);
      }
      if (e.specialTurnIntoActionRule) {
        o.push(e.specialTurnIntoActionRule);
      }
      if (e.canDoTurnIntoRule) {
        i.push(e.canDoTurnIntoRule);
      }
      if (e.extractBlockModelsRule) {
        l.push(e.extractBlockModelsRule);
      }
      if (e.needUpdateSelection) {
        a.push(e.needUpdateSelection);
      }
      if (e.fixOperateTargetsRule) {
        s.push(e.fixOperateTargetsRule);
      }
      if (e.filterOperateTargetsRule) {
        c.push(e.filterOperateTargetsRule);
      }
      if (e.targetInfoMatchRule) {
        d.push(e.targetInfoMatchRule);
      }
      if (e.sideEffectFromSource) {
        u.push(e.sideEffectFromSource);
      }
      if (e.sideEffectFromTarget) {
        h.push(e.sideEffectFromTarget);
      }
      if (e.modelsMatchRule) {
        p.push(e.modelsMatchRule);
      }
      if (e.matchRule) {
        f.push(e.matchRule);
      }
      if (e.targetInfoGetRule) {
        g.push(e.targetInfoGetRule);
      }
      if (e.actionBeforeBatchTurnInto) {
        m.push(e.actionBeforeBatchTurnInto);
      }
      if (e.actionAfterBatchTurnInto) {
        k.push(e.actionAfterBatchTurnInto);
      }
      if (e.getBaseRevisionBeforeBatchTurnInto) {
        T.push(e.getBaseRevisionBeforeBatchTurnInto);
      }
      if (e.getBaseBlockFormatRevisionBeforeBatchTurnInto) {
        v.push(e.getBaseBlockFormatRevisionBeforeBatchTurnInto);
      }
    });
    return {
      specialTurnIntoCases: n,
      specialTurnIntoActionRules: o,
      canDoTurnIntoRules: i,
      extractBlockModelsRules: l,
      needUpdateSelectionRules: a,
      fixOperateTargetsRules: s,
      filterOperateTargetsRules: c,
      targetInfoMatchRules: d,
      sideEffectsFromSource: u,
      sideEffectsFromTarget: h,
      modelsMatchRules: p,
      matchRules: f,
      targetInfoGetRules: g,
      actionsBeforeBatchTurnInto: m,
      actionsAfterBatchTurnInto: k,
      getBaseRevisionBeforeBatchTurnIntoRules: T,
      getBaseBlockFormatRevisionBeforeBatchTurnIntoRules: v
    };
  }
  function a(e, r) {
    let n = e.editorAPI.getService(moduleSettingToken.moduleSettingToken, {
      optional: true
    });
    if (n) {
      if (n != null) {
        n.add(docxToolboxConstants_3.toolboxCommands.TURN_INTO, r);
      }
    }
  }
  require.d(exports, {
    addTurnIntoCommand: function () {
      return a;
    },
    collectTurnRules: function () {
      return l;
    }
  });
}