// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$i' to 'initDomMode'
// - Renamed export 'F' to 'enqueueTask'
// - Renamed export 'HA' to 'getEnvMode'
// - Renamed export 'L3' to 'taskQueue'
// - Renamed export 'RM' to 'setRootObj'
// - Renamed export 'WC' to 'clearList'
// - Renamed export 'Xd' to 'nodeList'
// - Renamed export 'Yn' to 'serverRenderer'
// - Renamed export 'aZ' to 'setEnvMode'
// - Renamed export 'gS' to 'nodeMap'
// - Renamed export 'hb' to 'isDom'
// - Renamed export 'u1' to 'bufferList'
// - Renamed export 'xi' to 'getRootObj'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 219737
         */
module.exports = function (module, exports, require) {
  var n = "V-DOM";
  var o = null;
  var i = new WeakMap();
  var u = [];
  function a(t) {
    u.push(t);
  }
  function s() {
    return n;
  }
  function c(t) {
    n = t;
  }
  var f = [];
  var l = [];
  function p() {
    f.length = 0;
  }
  function d() {
    return o;
  }
  function h(t) {
    o = t;
  }
  var y = false;
  function b(t) {
    if (t) {
      n = "DOM";
      u.length = 0;
    }
    y = t;
  }
  function g() {
    return y;
  }
  var v = {
    renderToStaticMarkup: function (t) {
      return "外部没有传入 react-dom/server's renderToStaticMarkup 方法，无法渲染 react component";
    }
  };
  require.d(exports, {
    initDomMode: function () {
      return b;
    },
    enqueueTask: function () {
      return a;
    },
    getEnvMode: function () {
      return s;
    },
    taskQueue: function () {
      return u;
    },
    setRootObj: function () {
      return h;
    },
    clearList: function () {
      return p;
    },
    nodeList: function () {
      return f;
    },
    serverRenderer: function () {
      return v;
    },
    setEnvMode: function () {
      return c;
    },
    nodeMap: function () {
      return i;
    },
    isDom: function () {
      return g;
    },
    bufferList: function () {
      return l;
    },
    getRootObj: function () {
      return d;
    }
  });
}