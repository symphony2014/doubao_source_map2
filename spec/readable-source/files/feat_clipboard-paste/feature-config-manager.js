// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'featureConfigManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24105.f3de81f0.js
         * chunkId: 24105
         * moduleId: 53274
         */
module.exports = function (module, exports, require) {
  var o;
  var n;
  var l;
  class s {
    static getInstance() {
      s.instance ||= new s();
      return s.instance;
    }
    getCore() {
      return Promise.resolve({});
    }
    init() {}
    registerMsgBox() {}
    deregisterMsgBox() {}
    async getFallbackConfig() {}
    async updateLatestConfig() {}
    getFeatureConfig() {
      return {
        status: "enabled",
        extra: {}
      };
    }
    checkFeatureEnabled(e, r) {
      return true;
    }
    showExpiredDialog(e) {
      return true;
    }
    showExpiredToast(e) {
      return true;
    }
    constructor() {}
  }
  n = undefined;
  if ((o = typeof (l = function (e, r) {
    if (typeof e != "object" || !e) {
      return e;
    }
    var i = e[Symbol.toPrimitive];
    if (i !== undefined) {
      var o = i.call(e, r || "default");
      if (typeof o != "object") {
        return o;
      }
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(e);
  }(o = "instance", "string")) == "symbol" ? l : l + "") in s) {
    Object.defineProperty(s, o, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    s[o] = n;
  }
  let a = s.getInstance();
  require.d(exports, {
    featureConfigManager: function () {
      return a;
    }
  });
}