// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'constant98'
// - Renamed export 'CF' to 'viewTypeCard'
// - Renamed export 'Dy' to 'constant4000'
// - Renamed export 'F3' to 'constant600'
// - Renamed export 'Fl' to 'constant180'
// - Renamed export 'I3' to 'zoneTypeFileBlock'
// - Renamed export 'Kb' to 'constant72'
// - Renamed export 'R8' to 'constant820'
// - Renamed export 'RV' to 'constant222'
// - Renamed export 'Sg' to 'constant560'
// - Renamed export 'Vc' to 'viewTypeFile'
// - Renamed export 'Zv' to 'constant2'
// - Renamed export 'aD' to 'getDocxConfig'
// - Renamed export 'g4' to 'constant282'
// - Renamed export 'i9' to 'constant600B'
// - Renamed export 'iV' to 'defaultIndex'
// - Renamed export 'oj' to 'getDocxConfigB'
// - Renamed export 'sS' to 'constant820B'
// - Renamed export 'u1' to 'defaultCount'
// - Renamed export 'vx' to 'flagEnabled'
// - Renamed export 'vz' to 'emptyString'
// - Renamed export 'xE' to 'constant4'
// - Renamed export 'zT' to 'constant410'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29302.5675d381.js
         * chunkId: 29302
         * moduleId: 725976
         */
module.exports = function (module, exports, require) {
  var docxBoolConfigGetters = require("docx-bool-config-getters") /*id: 475875*/;
  var viewTypeConstants = require("view-type-constants") /*id: 676077*/;
  let c = "file";
  let l = 0;
  let a = "";
  let u = "file-block";
  let s = 0;
  let d = viewTypeConstants.viewTypes.Card;
  let f = 4;
  let m = 1;
  function _() {
    if (docxBoolConfigGetters.getTrueConstant_1()) {
      return 16;
    } else {
      return 180;
    }
  }
  let p = 820;
  function b() {
    if (docxBoolConfigGetters.getTrueConstant_1()) {
      return 18;
    } else {
      return 222;
    }
  }
  let C = 560;
  let E = 410;
  let S = 820;
  let h = 4000;
  let A = 98;
  let D = 72;
  let I = 180;
  let T = 222;
  let g = 282;
  let M = 600;
  let P = 600;
  let v = 2;
  require.d(exports, {
    constant98: function () {
      return A;
    },
    viewTypeCard: function () {
      return d;
    },
    constant4000: function () {
      return h;
    },
    constant600: function () {
      return P;
    },
    constant180: function () {
      return I;
    },
    zoneTypeFileBlock: function () {
      return u;
    },
    constant72: function () {
      return D;
    },
    constant820: function () {
      return p;
    },
    constant222: function () {
      return T;
    },
    constant560: function () {
      return C;
    },
    viewTypeFile: function () {
      return c;
    },
    constant2: function () {
      return v;
    },
    getDocxConfig: function () {
      return _;
    },
    constant282: function () {
      return g;
    },
    constant600B: function () {
      return M;
    },
    defaultIndex: function () {
      return l;
    },
    getDocxConfigB: function () {
      return b;
    },
    constant820B: function () {
      return S;
    },
    defaultCount: function () {
      return s;
    },
    flagEnabled: function () {
      return m;
    },
    emptyString: function () {
      return a;
    },
    constant4: function () {
      return f;
    },
    constant410: function () {
      return E;
    }
  });
}