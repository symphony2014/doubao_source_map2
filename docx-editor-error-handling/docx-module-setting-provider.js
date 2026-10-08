// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'settingProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 984704
         */
module.exports = function (module, exports, require) {
  var n;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var docxToolboxConstants_3 = require("docx-toolbox-constants_3") /*id: 42034*/;
  var moduleSettingProviderToken = require("module-setting-provider-token") /*id: 609239*/;
  function d(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  let u = dependencyInjectionContainer.Provide(moduleSettingProviderToken.moduleSettingToken)(n = class {
    add(e, i, r = {
      priority: 0
    }) {
      let n = this.settingMap.get(e) || [];
      let o = [];
      if (Array.isArray(i)) {
        o = i.filter(e => !n.find(i => i.item === e));
      } else if (!n.find(e => e.item === i)) {
        o.push(i);
      }
      if (o.length) {
        (n = n.concat(o.map(e => ({
          item: e,
          options: r
        })))).sort((e, i) => e.options.priority - i.options.priority);
        this.settingMap.set(e, n);
        this.settingChange$.next({
          key: e,
          action: docxToolboxConstants_3.toolboxActions.ADD,
          payload: o
        });
      }
    }
    get(e) {
      var i;
      if ((i = this.settingMap.get(e)) === null || i === undefined) {
        return undefined;
      } else {
        return i.map(e => e.item);
      }
    }
    addBlockSetting(e) {
      let i = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      let {
        blockType: r
      } = e;
      let n = this.blockTypeToSetting.get(r);
      let o = n && i ? {
        ...n,
        ...e
      } : e;
      this.blockTypeToSetting.set(r, o);
    }
    getBlockSetting(e) {
      return this.blockTypeToSetting.get(e);
    }
    remove(e) {
      if (this.settingMap.delete(e)) {
        this.settingChange$.next({
          key: e,
          action: docxToolboxConstants_3.toolboxActions.REMOVE
        });
      }
    }
    onServiceDispose() {
      this.settingMap.clear();
      this.blockTypeToSetting.clear();
      this.settingChange$.next({
        action: docxToolboxConstants_3.toolboxActions.DISPOSE
      });
    }
    subscribeToSettingChanges(e) {
      return this.settingChange$.subscribe(e);
    }
    constructor() {
      d(this, "settingMap", new Map());
      d(this, "blockTypeToSetting", new Map());
      d(this, "settingChange$", new observableSubjectClass.Subject());
    }
  }) || n;
  function h() {
    docxEditorCore.registerProviders([u]);
  }
  require.d(exports, {
    settingProvider: function () {
      return h;
    }
  });
}