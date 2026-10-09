// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G_' to 'getConfigs'
// - Renamed export 'Vx' to 'assignConfig'
// - Renamed export 'eu' to 'serviceBlockConst'
// - Renamed export 'go' to 'localeCodes'
// - Renamed export 'iE' to 'getConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 913121
         */
module.exports = function (module, exports, require) {
  var n;
  var i;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var serviceBlockConstants = require("service-block-constants") /*id: 141454*/;
  var objectUndefinedUtils = require("object-undefined-utils") /*id: 250122*/;
  (n = i ||= {}).ZhCn = "zh_CN";
  n.EnUs = "en_US";
  n.JaJp = "ja_JP";
  n.Rw = "rw";
  n.Es = "es_ES";
  n.It = "it_IT";
  n.De = "de_DE";
  n.Fr = "fr_FR";
  n.PtBr = "pt_BR";
  n.Id = "id_ID";
  n.ViVn = "vi_VN";
  n.Th = "th_TH";
  n.KoKr = "ko_KR";
  n.Ru = "ru_RU";
  n.HiIn = "hi_IN";
  n.MsMy = "ms_MY";
  let c = {
    domains: {}
  };
  function u(e) {
    objectUndefinedUtils.assignDefined(c, e);
  }
  function l(e) {
    let t = c[e];
    if (typeof t == "function") {
      return t;
    } else {
      return deepCloneWrapper_1.deepClone(t);
    }
  }
  function f(e) {
    return e.reduce((e, t) => {
      let r = l(t);
      if (r !== undefined) {
        e[t] = r;
      }
      return e;
    }, {});
  }
  require.d(exports, {
    getConfigs: function () {
      return f;
    },
    assignConfig: function () {
      return u;
    },
    serviceBlockConst: function () {
      return serviceBlockConstants.s0l;
    },
    localeCodes: function () {
      return i;
    },
    getConfig: function () {
      return l;
    }
  });
}