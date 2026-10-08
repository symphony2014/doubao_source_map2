// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Nh' to 'unknown'
// - Renamed export 'PU' to 'unknown_1'
// - Renamed export 'Pf' to 'unknown_2'
// - Renamed export 'X0' to 'unknown_3'
// - Renamed export 'zu' to 'unknown_4'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 841401
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var chatPluginMatcherRegistry = require("chat-plugin-matcher-registry") /*id: 107672*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var infraStringFilter = require("infra-string-filter") /*id: 435337*/;
  let l = (e, t) => {
    let {
      matcher: n
    } = chatPluginMatcherRegistry.useSendBoxMatcher(t);
    let l = (n ?? []).map(t => t.matchPlugin(e) ? t.pluginIdentifier : undefined).filter(e => e !== undefined);
    let c = l[0];
    let d = reactCoreLibraryReexport.useMemo(() => uuidGeneratorUtil.generateUuid(), [c]);
    let u = infraStringFilter.filterInfraStrings(l);
    let {
      plugin: p,
      loading: f,
      error: h
    } = chatPluginIocManager.sendMsgBoxPluginHook(c ?? "", t);
    if (h) {
      throw h;
    }
    return {
      pluginLoadId: d,
      plugin: p,
      pluginIdentifier: c,
      loading: f,
      duplicateIdentifierList: u
    };
  };
  let c = e => {
    let {
      matcher: t
    } = chatPluginMatcherRegistry.useSendBoxBottomMatcher();
    let n = (t ?? []).map(t => t.matchPlugin(e) ? t.pluginIdentifier : undefined).filter(e => e !== undefined);
    let r = n[0];
    let o = infraStringFilter.filterInfraStrings(n);
    let {
      plugin: l,
      loading: c
    } = chatPluginIocManager.sendMsgBoxBottomHook(r ?? "");
    return {
      plugin: l,
      pluginIdentifier: r,
      loading: c,
      duplicateIdentifierList: o
    };
  };
  let d = e => {
    let {
      matcher: t
    } = chatPluginMatcherRegistry.useSendBoxTopMatcher();
    let n = (t ?? []).map(t => t.matchPlugin(e) ? t.pluginIdentifier : undefined).filter(e => e !== undefined);
    let r = n[0];
    let o = infraStringFilter.filterInfraStrings(n);
    let {
      plugin: l,
      loading: c
    } = chatPluginIocManager.sendMsgBoxTopHook(r ?? "");
    return {
      plugin: l,
      pluginIdentifier: r,
      loading: c,
      duplicateIdentifierList: o
    };
  };
  let u = e => {
    let {
      matcher: t
    } = chatPluginMatcherRegistry.useSendBoxRightMatcher();
    let n = (t ?? []).map(t => t.matchPlugin(e) ? t.pluginIdentifier : undefined).filter(e => e !== undefined);
    let r = n[0];
    let o = infraStringFilter.filterInfraStrings(n);
    let {
      plugin: l,
      loading: c
    } = chatPluginIocManager.sendMsgBoxRightHook(r ?? "");
    return {
      plugin: l,
      pluginIdentifier: r,
      loading: c,
      duplicateIdentifierList: o
    };
  };
  let p = e => {
    let {
      matcher: t
    } = chatPluginMatcherRegistry.useSendBoxLeftMatcher();
    let n = (t ?? []).map(t => t.matchPlugin(e) ? t.pluginIdentifier : undefined).filter(e => e !== undefined);
    let r = n[0];
    let o = infraStringFilter.filterInfraStrings(n);
    let {
      plugin: l,
      loading: c
    } = chatPluginIocManager.sendMsgBoxLeftHook(r ?? "");
    return {
      plugin: l,
      pluginIdentifier: r,
      loading: c,
      duplicateIdentifierList: o
    };
  };
  require.d(exports, {
    unknown: function () {
      return u;
    },
    unknown_1: function () {
      return c;
    },
    unknown_2: function () {
      return l;
    },
    unknown_3: function () {
      return d;
    },
    unknown_4: function () {
      return p;
    }
  });
}