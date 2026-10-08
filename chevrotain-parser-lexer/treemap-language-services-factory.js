// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'createTreemapServices'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78089.de6f103c.js
         * chunkId: 78089
         * moduleId: 254429
         */
module.exports = function (module, exports, require) {
  var n;
  var i;
  var a;
  var mermaidLangiumGrammars = require("mermaid-langium-grammars") /*id: 78612*/;
  var stubFileSystemProvider = require("stub-file-system-provider") /*id: 458102*/;
  var serviceContainerFactory = require("service-container-factory") /*id: 262527*/;
  var langiumServiceProviders = require("langium-service-providers") /*id: 425478*/;
  n = class extends mermaidLangiumGrammars.abstractMermaidTokenBuilder {
    constructor() {
      super(["treemap"]);
    }
  };
  mermaidLangiumGrammars.setName(n, "TreemapTokenBuilder");
  var c = n;
  var d = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/;
  i = class extends mermaidLangiumGrammars.abstractMermaidValueConverter {
    runCustomConverter(e, t, r) {
      if (e.name === "NUMBER2") {
        return parseFloat(t.replace(/,/g, ""));
      }
      if (e.name === "SEPARATOR") {
        return t.substring(1, t.length - 1);
      }
      if (e.name === "STRING2") {
        return t.substring(1, t.length - 1);
      }
      if (e.name === "INDENTATION") {
        return t.length;
      }
      if (e.name === "ClassDef") {
        if (typeof t != "string") {
          return t;
        }
        let e = d.exec(t);
        if (e) {
          return {
            $type: "ClassDefStatement",
            className: e[1],
            styleText: e[2] || undefined
          };
        }
      }
    }
  };
  mermaidLangiumGrammars.setName(i, "TreemapValueConverter");
  var h = i;
  function f(e) {
    let t = e.validation.TreemapValidator;
    let r = e.validation.ValidationRegistry;
    if (r) {
      let e = {
        Treemap: t.checkSingleRoot.bind(t)
      };
      r.register(e, t);
    }
  }
  mermaidLangiumGrammars.setName(f, "registerValidationChecks");
  a = class {
    checkSingleRoot(e, t) {
      let r;
      for (let n of e.TreemapRows) {
        if (n.item) {
          if (r === undefined && n.indent === undefined) {
            r = 0;
          } else if (n.indent === undefined) {
            t("error", "Multiple root nodes are not allowed in a treemap.", {
              node: n,
              property: "item"
            });
          } else if (r !== undefined && r >= parseInt(n.indent, 10)) {
            t("error", "Multiple root nodes are not allowed in a treemap.", {
              node: n,
              property: "item"
            });
          }
        }
      }
    }
  };
  mermaidLangiumGrammars.setName(a, "TreemapValidator");
  var p = a;
  var m = {
    parser: {
      TokenBuilder: mermaidLangiumGrammars.setName(() => new c(), "TokenBuilder"),
      ValueConverter: mermaidLangiumGrammars.setName(() => new h(), "ValueConverter")
    },
    validation: {
      TreemapValidator: mermaidLangiumGrammars.setName(() => new p(), "TreemapValidator")
    }
  };
  function g(e = stubFileSystemProvider.fileSystemFactory) {
    let t = serviceContainerFactory.createContainer(langiumServiceProviders.getSharedServices(e), mermaidLangiumGrammars.astReflection);
    let r = serviceContainerFactory.createContainer(langiumServiceProviders.getLanguageServices({
      shared: t
    }), mermaidLangiumGrammars.treemapGrammar, m);
    t.ServiceRegistry.register(r);
    f(r);
    return {
      shared: t,
      Treemap: r
    };
  }
  mermaidLangiumGrammars.setName(g, "createTreemapServices");
  require.d(exports, {
    createTreemapServices: function () {
      return g;
    }
  });
}