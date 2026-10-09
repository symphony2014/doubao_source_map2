// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chartCoreLibrary'
// - Resolved require(241865) to 'chart-core-library'
// - Renamed variable 'r' to 'installModuleDependencies'
// - Resolved require(358507) to 'install-module-dependencies'
// - Updated imported property 'D' to 'installDependencies' (module 358507)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 786949
         */
module.exports = function (module, exports, require) {
  var chartCoreLibrary = require("chart-core-library") /*id: 241865*/;
  var installModuleDependencies = require("install-module-dependencies") /*id: 358507*/;
  require.r(exports);
  require.d(exports, {
    Chart: function () {
      return chartCoreLibrary.Chart;
    },
    ComponentModel: function () {
      return chartCoreLibrary.ComponentModel;
    },
    Model: function () {
      return chartCoreLibrary.Model;
    },
    SeriesModel: function () {
      return chartCoreLibrary.SeriesModel;
    },
    connect: function () {
      return chartCoreLibrary.connect;
    },
    createPattern: function () {
      return chartCoreLibrary.createPattern;
    },
    element: function () {
      return chartCoreLibrary.element;
    },
    enableDirtyRect: function () {
      return chartCoreLibrary.enableDirtyRect;
    },
    html: function () {
      return chartCoreLibrary.html;
    },
    jsx: function () {
      return chartCoreLibrary.jsx;
    },
    patterns: function () {
      return chartCoreLibrary.patterns;
    },
    plugins: function () {
      return chartCoreLibrary.plugins;
    },
    registerChart: function () {
      return chartCoreLibrary.registerChart;
    },
    registerComponent: function () {
      return chartCoreLibrary.registerComponent;
    },
    registerInteraction: function () {
      return chartCoreLibrary.registerInteraction;
    },
    registerLocale: function () {
      return chartCoreLibrary.registerLocale;
    },
    registerMap: function () {
      return chartCoreLibrary.registerMap;
    },
    registerPlugin: function () {
      return chartCoreLibrary.registerPlugin;
    },
    registerPreprocessor: function () {
      return chartCoreLibrary.registerPreprocessor;
    },
    registerTheme: function () {
      return chartCoreLibrary.registerTheme;
    },
    setCancelAnimationFrame: function () {
      return chartCoreLibrary.setCancelAnimationFrame;
    },
    setCanvasCreator: function () {
      return chartCoreLibrary.setCanvasCreator;
    },
    setImageLoader: function () {
      return chartCoreLibrary.setImageLoader;
    },
    setJSXRenderer: function () {
      return chartCoreLibrary.setJSXRenderer;
    },
    setRequestAnimationFrame: function () {
      return chartCoreLibrary.setRequestAnimationFrame;
    },
    use: function () {
      return installModuleDependencies.installDependencies;
    },
    version: function () {
      return chartCoreLibrary.version;
    },
    xul: function () {
      return chartCoreLibrary.xul;
    },
    xulObj: function () {
      return chartCoreLibrary.xulObj;
    }
  });
}