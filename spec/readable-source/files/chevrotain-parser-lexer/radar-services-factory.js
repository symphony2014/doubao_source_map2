// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'createRadarServices'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78089.de6f103c.js
         * chunkId: 78089
         * moduleId: 20632
         */
module.exports = function (module, exports, require) {
  var n;
  var mermaidLangiumGrammars = require("mermaid-langium-grammars") /*id: 78612*/;
  var stubFileSystemProvider = require("stub-file-system-provider") /*id: 458102*/;
  var serviceContainerFactory = require("service-container-factory") /*id: 262527*/;
  var langiumServiceProviders = require("langium-service-providers") /*id: 425478*/;
  n = class extends mermaidLangiumGrammars.abstractMermaidTokenBuilder {
    constructor() {
      super(["radar-beta"]);
    }
  };
  mermaidLangiumGrammars.setName(n, "RadarTokenBuilder");
  var l = n;
  var u = {
    parser: {
      TokenBuilder: mermaidLangiumGrammars.setName(() => new l(), "TokenBuilder"),
      ValueConverter: mermaidLangiumGrammars.setName(() => new mermaidLangiumGrammars.commonValueConverter(), "ValueConverter")
    }
  };
  function c(e = stubFileSystemProvider.fileSystemFactory) {
    let t = serviceContainerFactory.createContainer(langiumServiceProviders.getSharedServices(e), mermaidLangiumGrammars.astReflection);
    let r = serviceContainerFactory.createContainer(langiumServiceProviders.getLanguageServices({
      shared: t
    }), mermaidLangiumGrammars.radarGrammar, u);
    t.ServiceRegistry.register(r);
    return {
      shared: t,
      Radar: r
    };
  }
  mermaidLangiumGrammars.setName(c, "createRadarServices");
  require.d(exports, {
    createRadarServices: function () {
      return c;
    }
  });
}