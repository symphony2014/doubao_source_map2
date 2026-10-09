// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Qc' to 'parseDiagram'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78089.de6f103c.js
         * chunkId: 78089
         * moduleId: 802699
         */
module.exports = function (module, exports, require) {
  require("git-graph-service-factory") /*id: 847165*/;
  require("info-services-factory") /*id: 913524*/;
  require("packet-services-factory") /*id: 107954*/;
  require("mermaid-pie-langium-services") /*id: 835221*/;
  require("mermaid-architecture-services") /*id: 919445*/;
  require("radar-services-factory") /*id: 20632*/;
  require("treemap-language-services-factory") /*id: 254429*/;
  var n;
  var mermaidLangiumGrammars = require("mermaid-langium-grammars") /*id: 78612*/;
  var a = {};
  var s = {
    info: mermaidLangiumGrammars.setName(async () => {
      let {
        createInfoServices: e
      } = await require.e("info-services-factory") /*id: 16492*/.then(require.bind(require, "info-services-factory-export") /*id: 813134*/);
      let t = e().Info.parser.LangiumParser;
      a.info = t;
    }, "info"),
    packet: mermaidLangiumGrammars.setName(async () => {
      let {
        createPacketServices: e
      } = await require.e("packet-services") /*id: 98728*/.then(require.bind(require, "packet-services-factory-exporter") /*id: 353267*/);
      let t = e().Packet.parser.LangiumParser;
      a.packet = t;
    }, "packet"),
    pie: mermaidLangiumGrammars.setName(async () => {
      let {
        createPieServices: e
      } = await require.e("pie-chart-services") /*id: 28467*/.then(require.bind(require, "mermaid-pie-langium-services_1") /*id: 638166*/);
      let t = e().Pie.parser.LangiumParser;
      a.pie = t;
    }, "pie"),
    architecture: mermaidLangiumGrammars.setName(async () => {
      let {
        createArchitectureServices: e
      } = await require.e("architecture-services") /*id: 93160*/.then(require.bind(require, "mermaid-architecture-services-exporter") /*id: 468403*/);
      let t = e().Architecture.parser.LangiumParser;
      a.architecture = t;
    }, "architecture"),
    gitGraph: mermaidLangiumGrammars.setName(async () => {
      let {
        createGitGraphServices: e
      } = await require.e("git-graph-services") /*id: 52288*/.then(require.bind(require, "git-graph-services-module") /*id: 27435*/);
      let t = e().GitGraph.parser.LangiumParser;
      a.gitGraph = t;
    }, "gitGraph"),
    radar: mermaidLangiumGrammars.setName(async () => {
      let {
        createRadarServices: e
      } = await require.e("radar-services-factory") /*id: 56578*/.then(require.bind(require, "radar-services-factory-export") /*id: 364869*/);
      let t = e().Radar.parser.LangiumParser;
      a.radar = t;
    }, "radar"),
    treemap: mermaidLangiumGrammars.setName(async () => {
      let {
        createTreemapServices: e
      } = await require.e("treemap-services") /*id: 96779*/.then(require.bind(require, "treemap-language-services-reexport") /*id: 953005*/);
      let t = e().Treemap.parser.LangiumParser;
      a.treemap = t;
    }, "treemap")
  };
  async function o(e, t) {
    let r = s[e];
    if (!r) {
      throw Error(`Unknown diagram type: ${e}`);
    }
    if (!a[e]) {
      await r();
    }
    let n = a[e].parse(t);
    if (n.lexerErrors.length > 0 || n.parserErrors.length > 0) {
      throw new l(n);
    }
    return n.value;
  }
  mermaidLangiumGrammars.setName(o, "parse");
  n = class extends Error {
    constructor(e) {
      super(`Parsing failed: ${e.lexerErrors.map(e => e.message).join("\n")} ${e.parserErrors.map(e => e.message).join("\n")}`);
      this.result = e;
    }
  };
  mermaidLangiumGrammars.setName(n, "MermaidParseError");
  var l = n;
  require.d(exports, {
    parseDiagram: function () {
      return o;
    }
  });
}