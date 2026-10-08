// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'createPieServices'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78089.de6f103c.js
         * chunkId: 78089
         * moduleId: 835221
         */
module.exports = function (module, exports, require) {
  var n;
  var i;
  var mermaidLangiumGrammars = require("mermaid-langium-grammars") /*id: 78612*/;
  var stubFileSystemProvider = require("stub-file-system-provider") /*id: 458102*/;
  var serviceContainerFactory = require("service-container-factory") /*id: 262527*/;
  var langiumServiceProviders = require("langium-service-providers") /*id: 425478*/;
  n = class extends mermaidLangiumGrammars.abstractMermaidTokenBuilder {
    constructor() {
      super(["pie", "showData"]);
    }
  };
  mermaidLangiumGrammars.setName(n, "PieTokenBuilder");
  var u = n;
  i = class extends mermaidLangiumGrammars.abstractMermaidValueConverter {
    runCustomConverter(e, t, r) {
      if (e.name === "PIE_SECTION_LABEL") {
        return t.replace(/"/g, "").trim();
      }
    }
  };
  mermaidLangiumGrammars.setName(i, "PieValueConverter");
  var c = i;
  var d = {
    parser: {
      TokenBuilder: mermaidLangiumGrammars.setName(() => new u(), "TokenBuilder"),
      ValueConverter: mermaidLangiumGrammars.setName(() => new c(), "ValueConverter")
    }
  };
  function h(e = stubFileSystemProvider.fileSystemFactory) {
    let t = serviceContainerFactory.createContainer(langiumServiceProviders.getSharedServices(e), mermaidLangiumGrammars.astReflection);
    let r = serviceContainerFactory.createContainer(langiumServiceProviders.getLanguageServices({
      shared: t
    }), mermaidLangiumGrammars.pieGrammar, d);
    t.ServiceRegistry.register(r);
    return {
      shared: t,
      Pie: r
    };
  }
  mermaidLangiumGrammars.setName(h, "createPieServices");
  require.d(exports, {
    createPieServices: function () {
      return h;
    }
  });
}