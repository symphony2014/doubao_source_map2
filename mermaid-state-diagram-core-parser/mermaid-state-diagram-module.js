// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'mermaidStateDiagramParser'
// - Resolved require(426467) to 'mermaid-state-diagram-parser'
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
// - Renamed variable 'i' to 'mermaidConfigUtils'
// - Resolved require(101498) to 'mermaid-config-utils'
// - Updated imported property 'J8' to 'parser' (module 426467)
// - Updated imported property 'oI' to 'StateDB' (module 426467)
// - Updated imported property '_$' to 'diagramRenderer' (module 426467)
// - Updated imported property 'Ee' to 'getStyles' (module 426467)
// - Updated imported property 'eW' to 'setName' (module 101498)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 39061.8678db0e.js
         * chunkId: 39061
         * moduleId: 324362
         */
module.exports = function (module, exports, require) {
  var mermaidStateDiagramParser = require("mermaid-state-diagram-parser") /*id: 426467*/;
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
  var s = {
    parser: mermaidStateDiagramParser.parser,
    get db() {
      return new mermaidStateDiagramParser.StateDB(2);
    },
    renderer: mermaidStateDiagramParser.diagramRenderer,
    styles: mermaidStateDiagramParser.getStyles,
    init: mermaidConfigUtils.setName(t => {
      t.state ||= {};
      t.state.arrowMarkerAbsolute = t.arrowMarkerAbsolute;
    }, "init")
  };
  require.d(exports, {
    diagram: function () {
      return s;
    }
  });
}