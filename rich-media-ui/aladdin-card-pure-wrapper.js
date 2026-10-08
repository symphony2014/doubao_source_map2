// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'emptyExportFunction'
// - Resolved require(232077) to 'empty-export-function'
// - Renamed variable 't' to 'skillTypeConstants'
// - Resolved require(188057) to 'skill-type-constants'
// - Renamed variable 'o' to 'skillCardRenderer'
// - Resolved require(600813) to 'skill-card-renderer'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'E' to 'skillTypes' (module 188057)
// - Updated imported property 'B' to 'renderSkillCard' (module 600813)
// - Updated imported property 'Z' to 'emptyFunction' (module 232077)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29866.6edd5fce.js
         * chunkId: 29866
         * moduleId: 417178
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var skillTypeConstants = require("skill-type-constants") /*id: 188057*/;
  var skillCardRenderer = require("skill-card-renderer") /*id: 600813*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = [skillTypeConstants.skillTypes.GaokaoYifenyiduan, skillTypeConstants.skillTypes.GaokaoControlscore, skillTypeConstants.skillTypes.GaokaoProvincescore];
  function l(e) {
    let {
      data: a,
      cardType: n,
      isOnlyAladdinCard: t = false
    } = e;
    if (c.includes(n) && !t) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(skillCardRenderer.renderSkillCard, {
        data: a,
        cardType: n,
        trackEvent: emptyExportFunction.emptyFunction
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    AladdinCardPureWrapper: function () {
      return l;
    }
  });
}