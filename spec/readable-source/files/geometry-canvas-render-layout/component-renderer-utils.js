// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'VA' to 'createRenderer'
// - Renamed export 'gG' to 'getRenderer'
// - Renamed export 'qV' to 'registerRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 646116
         */
module.exports = function (module, exports, require) {
  var i = {};
  function r(t) {
    return i[t];
  }
  function o(t, e) {
    i[t] = e;
  }
  function a(t) {
    return {
      update: function (e, n) {
        return t.render(n, e);
      },
      destroy: function (e) {
        return t.unmountComponentAtNode(e);
      }
    };
  }
  i.html = {
    update: function (t, e) {
      return t.innerHTML = e + "";
    },
    destroy: function (t) {
      return t.innerHTML = "";
    }
  };
  require.d(exports, {
    createRenderer: function () {
      return a;
    },
    getRenderer: function () {
      return r;
    },
    registerRenderer: function () {
      return o;
    }
  });
}