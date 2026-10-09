// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'createArchServices'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78089.de6f103c.js
         * chunkId: 78089
         * moduleId: 919445
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
      super(["architecture"]);
    }
  };
  mermaidLangiumGrammars.setName(n, "ArchitectureTokenBuilder");
  var u = n;
  i = class extends mermaidLangiumGrammars.abstractMermaidValueConverter {
    runCustomConverter(e, t, r) {
      if (e.name === "ARCH_ICON") {
        return t.replace(/[()]/g, "").trim();
      } else if (e.name === "ARCH_TEXT_ICON") {
        return t.replace(/["()]/g, "");
      } else if (e.name === "ARCH_TITLE") {
        return t.replace(/[[\]]/g, "").trim();
      } else {
        return undefined;
      }
    }
  };
  mermaidLangiumGrammars.setName(i, "ArchitectureValueConverter");
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
    }), mermaidLangiumGrammars.architectureGrammar, d);
    t.ServiceRegistry.register(r);
    return {
      shared: t,
      Architecture: r
    };
  }
  mermaidLangiumGrammars.setName(h, "createArchitectureServices");
  require.d(exports, {
    createArchServices: function () {
      return h;
    }
  });
}