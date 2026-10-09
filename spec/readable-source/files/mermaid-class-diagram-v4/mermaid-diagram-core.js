// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mermaidClassDiagramParser'
// - Resolved require(60711) to 'mermaid-class-diagram-parser'
// - Resolved require(878353) to 'font-awesome-icon-styles-helper'
// - Resolved require(150827) to 'diagram-element-selector'
// - Resolved require(3049) to 'mermaid-svg-viewport-setup'
// - Resolved require(484129) to 'mermaid-layout-registry-renderer'
// - Resolved require(968232) to 'mermaid-flowchart-edge-renderer'
// - Resolved require(173696) to 'diagram-arrow-offset-utils'
// - Resolved require(411411) to 'mermaid-node-shapes-renderer'
// - Resolved require(954180) to 'subgraph-title-margins-calculator'
// - Resolved require(717687) to 'mermaid-style-utils'
// - Resolved require(990626) to 'icon-utils-text-rendering'
// - Resolved require(583673) to 'mermaid-diagram-utils'
// - Resolved require(401926) to 'mermaid-config-utils_1'
// - Renamed variable 'n' to 'loggerLevelUtils'
// - Resolved require(696754) to 'logger-level-utils'
// - Updated imported property 'P0' to 'classDiagramParser' (module 60711)
// - Updated imported property 'dR' to 'ClassDB' (module 60711)
// - Updated imported property 'b0' to 'classDiagramRenderer' (module 60711)
// - Updated imported property 'Ee' to 'classDiagramStyles' (module 60711)
// - Updated imported property 'eW' to 'setFunctionName' (module 696754)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 77798.9d3a8c3f.js
         * chunkId: 77798
         * moduleId: 74065
         */
module.exports = function (module, exports, require) {
  var mermaidClassDiagramParser = require("mermaid-class-diagram-parser") /*id: 60711*/;
  require("font-awesome-icon-styles-helper") /*id: 878353*/;
  require("diagram-element-selector") /*id: 150827*/;
  require("mermaid-svg-viewport-setup") /*id: 3049*/;
  require("mermaid-layout-registry-renderer") /*id: 484129*/;
  require("mermaid-flowchart-edge-renderer") /*id: 968232*/;
  require("diagram-arrow-offset-utils") /*id: 173696*/;
  require("mermaid-node-shapes-renderer") /*id: 411411*/;
  require("subgraph-title-margins-calculator") /*id: 954180*/;
  require("mermaid-style-utils") /*id: 717687*/;
  require("icon-utils-text-rendering") /*id: 990626*/;
  require("mermaid-diagram-utils") /*id: 583673*/;
  require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var a = {
    parser: mermaidClassDiagramParser.classDiagramParser,
    get db() {
      return new mermaidClassDiagramParser.ClassDB();
    },
    renderer: mermaidClassDiagramParser.classDiagramRenderer,
    styles: mermaidClassDiagramParser.classDiagramStyles,
    init: loggerLevelUtils.setFunctionName(e => {
      e.class ||= {};
      e.class.arrowMarkerAbsolute = e.arrowMarkerAbsolute;
    }, "init")
  };
  require.d(exports, {
    diagram: function () {
      return a;
    }
  });
}