// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'BaseAdapterClass'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 519643
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var devModeLogger = require("dev-mode-logger") /*id: 828307*/;
  class s {
    static get cssClasses() {
      return {};
    }
    static get strings() {
      return {};
    }
    static get numbers() {
      return {};
    }
    static get defaultAdapter() {
      return {
        getProp: emptyExportFunction.emptyFunction,
        getProps: emptyExportFunction.emptyFunction,
        getState: emptyExportFunction.emptyFunction,
        getStates: emptyExportFunction.emptyFunction,
        setState: emptyExportFunction.emptyFunction,
        getContext: emptyExportFunction.emptyFunction,
        getContexts: emptyExportFunction.emptyFunction,
        getCache: emptyExportFunction.emptyFunction,
        setCache: emptyExportFunction.emptyFunction,
        getCaches: emptyExportFunction.emptyFunction,
        stopPropagation: emptyExportFunction.emptyFunction,
        persistEvent: emptyExportFunction.emptyFunction
      };
    }
    constructor(e) {
      this._adapter = Object.assign(Object.assign({}, s.defaultAdapter), e);
    }
    getProp(e) {
      return this._adapter.getProp(e);
    }
    getProps() {
      return this._adapter.getProps();
    }
    getState(e) {
      return this._adapter.getState(e);
    }
    getStates() {
      return this._adapter.getStates();
    }
    setState(e, t) {
      return this._adapter.setState(Object.assign({}, e), t);
    }
    getContext(e) {
      return this._adapter.getContext(e);
    }
    getContexts() {
      return this._adapter.getContexts();
    }
    getCaches() {
      return this._adapter.getCaches();
    }
    getCache(e) {
      return this._adapter.getCache(e);
    }
    setCache(e, t) {
      return e && this._adapter.setCache(e, t);
    }
    stopPropagation(e) {
      this._adapter.stopPropagation(e);
    }
    _isControlledComponent(e = "value") {
      return e in this.getProps();
    }
    _isInProps(e) {
      return e in this.getProps();
    }
    init(e) {}
    destroy() {}
    log(e) {
      var t = arguments.length;
      var n = Array(t > 1 ? t - 1 : 0);
      var i = 1;
      for (; i < t; i++) {
        n[i - 1] = arguments[i];
      }
      devModeLogger.devModeLogger(e, ...n);
    }
    _persistEvent(e) {
      this._adapter.persistEvent(e);
    }
  }
  exports.BaseAdapterClass = s;
}