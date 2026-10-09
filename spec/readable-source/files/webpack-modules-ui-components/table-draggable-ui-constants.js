// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Lm' to 'maxDragDistance'
// - Renamed export 'P1' to 'headerCellStyle'
// - Renamed export 'PF' to 'dragHandleStyle'
// - Renamed export 'TI' to 'axisHandleStyles'
// - Renamed export 'ad' to 'axisContainerStyles'
// - Renamed export 'fA' to 'draggableProviderName'
// - Renamed export 'hY' to 'dragAxis'
// - Renamed export 'jJ' to 'dragHandleSize'
// - Renamed export 'oL' to 'tableDropChangeEvent'
// - Renamed export 'w4' to 'axisCellStyles'
// - Renamed export 'xO' to 'dragHandleOffset'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 886815
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var layoutAxisConstants = require("layout-axis-constants") /*id: 909193*/;
  let l = "TABLE_DROP_CHANGE";
  let a = 2;
  let s = 20;
  let c = 10;
  let d = 26;
  let u = {
    backgroundColor: "var(--primary-content-default)",
    borderTopLeftRadius: "2px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
  let h = {
    borderRight: "1px solid var(--primary-content-default)",
    borderBottom: "1px solid var(--primary-content-default)",
    fontSize: "12px",
    textAlign: "center",
    opacity: "0.8",
    borderBottomRightRadius: "2px",
    backgroundColor: "var(--primary-fill-solid-01)",
    padding: "0 10px"
  };
  let p = {
    [layoutAxisConstants.gridAxis.row]: {
      display: "flex",
      flexDirection: "row"
    },
    [layoutAxisConstants.gridAxis.col]: {
      display: "flex",
      flexDirection: "column"
    }
  };
  let f = {
    [layoutAxisConstants.gridAxis.row]: {
      width: "10px",
      height: "40px",
      borderBottomLeftRadius: "2px"
    },
    [layoutAxisConstants.gridAxis.col]: {
      minWidth: "50px",
      height: "10px",
      borderTopRightRadius: "2px",
      position: "absolute",
      width: "100%",
      top: "-10px"
    }
  };
  let g = {
    [layoutAxisConstants.gridAxis.row]: {
      minWidth: "100px",
      height: "40px",
      borderTop: "1px solid var(--primary-content-default)",
      lineHeight: "40px",
      borderTopRightRadius: "2px"
    },
    [layoutAxisConstants.gridAxis.col]: {
      height: "80px",
      minWidth: "50px",
      borderLeft: "1px solid var(--primary-content-default)",
      lineHeight: "70px",
      borderBottomLeftRadius: "2px"
    }
  };
  let m = docxEditorCore.getProviderName("table-draggable");
  require.d(exports, {
    maxDragDistance: function () {
      return s;
    },
    headerCellStyle: function () {
      return h;
    },
    dragHandleStyle: function () {
      return u;
    },
    axisHandleStyles: function () {
      return f;
    },
    axisContainerStyles: function () {
      return p;
    },
    draggableProviderName: function () {
      return m;
    },
    dragAxis: function () {
      return a;
    },
    dragHandleSize: function () {
      return c;
    },
    tableDropChangeEvent: function () {
      return l;
    },
    axisCellStyles: function () {
      return g;
    },
    dragHandleOffset: function () {
      return d;
    }
  });
}