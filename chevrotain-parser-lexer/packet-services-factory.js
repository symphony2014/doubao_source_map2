// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'createPacketServices'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78089.de6f103c.js
         * chunkId: 78089
         * moduleId: 107954
         */
module.exports = function (module, exports, require) {
  var n;
  var mermaidLangiumGrammars = require("mermaid-langium-grammars") /*id: 78612*/;
  var stubFileSystemProvider = require("stub-file-system-provider") /*id: 458102*/;
  var serviceContainerFactory = require("service-container-factory") /*id: 262527*/;
  var langiumServiceProviders = require("langium-service-providers") /*id: 425478*/;
  n = class extends mermaidLangiumGrammars.abstractMermaidTokenBuilder {
    constructor() {
      super(["packet"]);
    }
  };
  mermaidLangiumGrammars.setName(n, "PacketTokenBuilder");
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
    }), mermaidLangiumGrammars.packetGrammar, u);
    t.ServiceRegistry.register(r);
    return {
      shared: t,
      Packet: r
    };
  }
  mermaidLangiumGrammars.setName(c, "createPacketServices");
  require.d(exports, {
    createPacketServices: function () {
      return c;
    }
  });
}