// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AR' to 'scrollUtils'
// - Renamed export 'Ct' to 'emptyFunction'
// - Renamed export 'DT' to 'docColorConfig'
// - Renamed export 'Jo' to 'checkClientFeature'
// - Renamed export 'K9' to 'emptyObject'
// - Renamed export 'Q1' to 'clipboardUtils'
// - Renamed export 'U3' to 'emptyObject_1'
// - Renamed export 'YV' to 'StatusManager'
// - Renamed export 'Yu' to 'getEmptyObject'
// - Renamed export '_c' to 'emptyObject_2'
// - Renamed export '_j' to 'emptyFunction_1'
// - Renamed export 'l1' to 'getEmptyObject_1'
// - Renamed export 'mm' to 'emptyObject_3'
// - Renamed export 'pP' to 'loadingUtils'
// - Renamed export 't6' to 'toastStub'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 436674
         */
module.exports = function (module, exports, require) {
  var docComponentConfigUtils = require("doc-component-config-utils") /*id: 123085*/;
  let o = {};
  let a = {};
  let u = {};
  let c = {};
  let _ = {
    CLEAR_KEY: "",
    RESET_KEY: "",
    getColorsFromLocal: () => "",
    getKeyFromColorValue: () => "",
    getKeyFromBlockBdColorValue: () => "",
    getHighlightPanelItems: () => ({}),
    getDocxHighlightPanelItems: () => ({}),
    setDocxHighlightPanel() {},
    getRgbaColorOfTargetTheme: () => "",
    getColorRgbaObjOfTargetTheme: () => "",
    getRealDocxBlockBackgroundKey: () => "",
    getPanelDocxBlockBackgroundKey: () => "",
    getDocxDefaultPanelValue: () => ({
      foregroundColor: {},
      backgroundColor: {},
      blockBackgroundColor: {}
    })
  };
  let l = () => {};
  let s = () => ({});
  let E = docComponentConfigUtils.uiToastStub || {
    showToast: () => ({})
  };
  let d = function (e) {
    let r = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    return window.clientFeatures?.[e] || r;
  };
  let T = {
    setData() {},
    getData: () => ({
      text: "",
      html: ""
    }),
    getDataSync: () => ({
      text: "",
      html: ""
    }),
    getCcmClipboardSecurityEnable: () => true
  };
  let p = {
    scrollToViewForGlobalComment() {},
    wrapScroll() {},
    preciseScroll() {},
    clearScroll() {},
    scrollSheetToView() {}
  };
  class S {
    getCurrentStatus() {
      return "";
    }
  }
  let f = () => ({});
  let A = {
    hideLoading() {},
    getHasHideLoading: () => false
  };
  let m = () => {};
  require.d(exports, {
    scrollUtils: function () {
      return p;
    },
    emptyFunction: function () {
      return l;
    },
    docColorConfig: function () {
      return _;
    },
    checkClientFeature: function () {
      return d;
    },
    emptyObject: function () {
      return c;
    },
    clipboardUtils: function () {
      return T;
    },
    emptyObject_1: function () {
      return o;
    },
    StatusManager: function () {
      return S;
    },
    getEmptyObject: function () {
      return s;
    },
    emptyObject_2: function () {
      return a;
    },
    emptyFunction_1: function () {
      return m;
    },
    getEmptyObject_1: function () {
      return f;
    },
    emptyObject_3: function () {
      return u;
    },
    loadingUtils: function () {
      return A;
    },
    toastStub: function () {
      return E;
    }
  });
}