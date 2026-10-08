// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'initEmbedPermission'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 191114
         */
module.exports = function (module, exports, require) {
  var n;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var embedObjectNameAccess = require("embed-object-name-access") /*id: 223936*/;
  var embedObjectProviderName = require("embed-object-provider-name") /*id: 129397*/;
  function c(e, i, r) {
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
  let d = dependencyInjectionContainer.Provide(embedObjectProviderName.embedObjectName)(n = class {
    get hasInitPermission() {
      return this.embed.hasInitPermission;
    }
    init(e) {
      this.embed = e;
      this.permissionChange$ = e.permissionChange$;
    }
    hasEmbedObj(e) {
      return this.embed.hasEmbedObj(e);
    }
    addEmbedObj(e, i, r, n) {
      return this.embed.addEmbedObj(e, i, r, n);
    }
    checkApplyEmbed(e, i, r) {
      return this.embed.checkApplyEmbed(e, i, r);
    }
    addPermissionFromMeta(e) {
      return this.embed.addPermissionFromMeta(e);
    }
    addEmbedObjToFetchPermission(e) {
      return this.embed.addEmbedObjToFetchPermission(e);
    }
    fetchEmbedObjsAllembedPerm() {
      return this.embed.fetchEmbedObjsAllembedPerm();
    }
    initPermissionIfNeed() {
      return this.embed.initPermissionIfNeed();
    }
    addInitPermissionCallback(e) {
      return this.embed.addInitPermissionCallback(e);
    }
    fetchNoPermUser(e) {
      return this.embed.fetchNoPermUser(e);
    }
    bulkGrantPermission(e) {
      return this.embed.bulkGrantPermission(e);
    }
    constructor() {
      c(this, "embed", undefined);
      c(this, "permissionChange$", undefined);
    }
  }) || n;
  function u() {
    docxEditorCore.registerProviders([d]);
    docxEditorCore.onInitHook(() => {
      let e = dependencyInjectionContainer.get(embedObjectNameAccess.embedObjectName);
      let i = dependencyInjectionContainer.get(docxEditorCore.CONFIG_TOKEN).get("dataHelper");
      e.init(i.embedObjectManager);
    });
  }
  require.d(exports, {
    initEmbedPermission: function () {
      return u;
    }
  });
}