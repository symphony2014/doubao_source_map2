// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'mermaidClassDiagramParser_1'
// - Resolved require(651870) to 'mermaid-class-diagram-parser_1'
// - Resolved require(988348) to 'mermaid-icon-styles-helper'
// - Resolved require(553740) to 'mermaid-diagram-element-getter'
// - Resolved require(509839) to 'svg-viewport-setup'
// - Resolved require(103329) to 'mermaid-layout-registry'
// - Resolved require(836477) to 'mermaid-edge-rendering-utils'
// - Resolved require(744654) to 'line-arrow-offset-utils'
// - Resolved require(608361) to 'mermaid-node-shapes-renderer_1'
// - Resolved require(152138) to 'mermaid-subgraph-title-margin-utils'
// - Resolved require(587619) to 'mermaid-node-style-utils'
// - Resolved require(5699) to 'mermaid-text-icon-utils'
// - Resolved require(997032) to 'mermaid-text-layout-utils'
// - Renamed variable 's' to 'mermaidConfigUtils'
// - Resolved require(101498) to 'mermaid-config-utils'
// - Updated imported property 'P0' to 'parserInstance' (module 651870)
// - Updated imported property 'dR' to 'ClassDB' (module 651870)
// - Updated imported property 'b0' to 'diagramRenderer' (module 651870)
// - Updated imported property 'Ee' to 'classDiagramParser' (module 651870)
// - Updated imported property 'eW' to 'setName' (module 101498)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10244.d40828c2.js
         * chunkId: 10244
         * moduleId: 848557
         */
module.exports = function (module, exports, require) {
  var mermaidClassDiagramParser_1 = require("mermaid-class-diagram-parser_1") /*id: 651870*/;
  require("mermaid-icon-styles-helper") /*id: 988348*/;
  require("mermaid-diagram-element-getter") /*id: 553740*/;
  require("svg-viewport-setup") /*id: 509839*/;
  require("mermaid-layout-registry") /*id: 103329*/;
  require("mermaid-edge-rendering-utils") /*id: 836477*/;
  require("line-arrow-offset-utils") /*id: 744654*/;
  require("mermaid-node-shapes-renderer_1") /*id: 608361*/;
  require("mermaid-subgraph-title-margin-utils") /*id: 152138*/;
  require("mermaid-node-style-utils") /*id: 587619*/;
  require("mermaid-text-icon-utils") /*id: 5699*/;
  require("mermaid-text-layout-utils") /*id: 997032*/;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var i = {
    parser: mermaidClassDiagramParser_1.parserInstance,
    get db() {
      return new mermaidClassDiagramParser_1.ClassDB();
    },
    renderer: mermaidClassDiagramParser_1.diagramRenderer,
    styles: mermaidClassDiagramParser_1.classDiagramParser,
    init: mermaidConfigUtils.setName(t => {
      t.class ||= {};
      t.class.arrowMarkerAbsolute = t.arrowMarkerAbsolute;
    }, "init")
  };
  require.d(exports, {
    diagram: function () {
      return i;
    }
  });
}