// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'docsModeActionTypes'
// - Renamed export 'Z' to 'docsModeReducer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 566129
         */
module.exports = function (module, exports, require) {
  var i;
  var featureConstantsTypes = require("feature-constants-types") /*id: 882886*/;
  var storeActionConstants = require("store-action-constants") /*id: 119654*/;
  var reducerFactoryUtil = require("reducer-factory-util") /*id: 978342*/;
  (i = {}).SWITCH_MODE = "switchMode";
  i.CHANGE_SHOW = "changeFG";
  i.CHANGE_BOTH = "changeBoth";
  let c = i;
  let _ = reducerFactoryUtil.createReducer({
    [storeActionConstants.actionTypes.ChangeDocsModeState]: (e, n) => {
      let {
        type: r,
        value: i
      } = n.payload;
      let o = {
        ...e
      };
      switch (r) {
        case c.SWITCH_MODE:
          o.docsMode = i;
          return o;
        case c.CHANGE_SHOW:
          o.headBtnInfestedType = i.headBtnInfestedType;
          o.isShow = i.isShow;
          return o;
        case c.CHANGE_BOTH:
          return Object.assign(o, i);
        default:
          return o;
      }
    }
  }, {
    docsMode: featureConstantsTypes.EditorModes.READING,
    isShow: false,
    headBtnInfestedType: featureConstantsTypes.InfestActions.NONE
  });
  exports.docsModeReducer = _;
  require.d(exports, {
    docsModeActionTypes: function () {
      return c;
    }
  });
}