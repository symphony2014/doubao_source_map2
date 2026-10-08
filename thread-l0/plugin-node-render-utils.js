// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'createMessageNodeConfigs'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 56055.5eabc285.js
         * chunkId: 56055
         * moduleId: 595785
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var pluginNodeWrap = require("plugin-node-wrap") /*id: 443134*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = () => "";
  let c = e => {
    let {
      pluginIdentifier: t,
      node: n,
      pluginLoadCounter: c,
      inView: u,
      mouseOver: d,
      onFirstRender: f,
      renderContext: h
    } = e;
    let p = reactCoreLibraryReexport.useRef(false);
    let {
      plugin: g,
      loading: v,
      error: m
    } = chatPluginIocManager.receiveMsgNodeHook(t);
    let _ = reactCoreLibraryReexport.useMemo(() => uuidGeneratorUtil.generateUuid(), [t]);
    reactCoreLibraryReexport.useEffect(() => {
      if (c != null) {
        c(_, v);
      }
      if (!v && !!g && !p.current) {
        p.current = true;
        if (f != null) {
          f(t);
        }
      }
    }, [v]);
    reactCoreLibraryReexport.useEffect(() => {
      if (c != null) {
        c(_, v);
      }
      return () => {
        if (c != null) {
          c(_, false);
        }
      };
    }, [_]);
    if (m) {
      throw m;
    }
    if (v) {
      return null;
    }
    let x = pluginNodeWrap.PluginNodeWrap;
    if (g) {
      return reactJsxRuntimeCoreReexport.jsx(x, {
        useDefaultClassName: a,
        plugin: g,
        node: n,
        inView: u,
        mouseOver: d,
        renderContext: h
      });
    } else {
      return null;
    }
  };
  let u = e => ({
    messageNodeRenderConfigs: e.filter(e => !!e.type).map(e => ({
      node: e,
      pluginIdentifier: e.type,
      PluginNodeRender: c
    }))
  });
  require.d(exports, {
    createMessageNodeConfigs: function () {
      return u;
    }
  });
}