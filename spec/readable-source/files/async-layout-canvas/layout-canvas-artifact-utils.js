// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ef' to 'findRootArtifact'
// - Renamed export 'Yo' to 'normalizeArtifact'
// - Renamed export 'gu' to 'processArtifactCodes'
// - Renamed export 'jC' to 'normalizeArtifacts'
// - Renamed export 'ng' to 'findArtifactById'
// - Renamed export 'r9' to 'getOrderedVersions'
// - Renamed export 'se' to 'mergeArtifactLists'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 997557
         */
module.exports = function (module, exports, require) {
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var collectionOrderByUtil_1 = require("collection-order-by-util_1") /*id: 848677*/;
  var immerProduceCore = require("immer-produce-core") /*id: 949322*/;
  let s = (e, t) => {
    t.forEach(t => {
      let a = e.find(e => {
        var a;
        var i;
        return e.artifactKey === t.artifactKey && e.resourceVersion === t.resourceVersion && ((a = e.code) === null || a === undefined ? undefined : a.node_id.toString()) === ((i = t.code) === null || i === undefined ? undefined : i.node_id.toString());
      });
      if (a) {
        throttledDeepCloneUtil.throttledDeepClone(a, t);
      } else {
        e.push(t);
      }
    });
    return e;
  };
  let n = e => {
    let i = e.identifier ?? e.artifactId;
    let r = e.artifactType ?? e.type;
    return immerProduceCore.produce(e, e => {
      e.identifier = i;
      e.artifactId = i;
      e.artifactType = r;
      e.type = r;
    });
  };
  let l = e => e.map(n);
  let c = e => immerProduceCore.produce(e, e => {
    var i;
    if (e.code?.node_id) {
      e.code.node_id = (i = e.code.node_id) === null || i === undefined ? undefined : i.toString();
    }
    if (e.code?.content) {
      e.code.content = e.code.content.trimStart();
    }
  });
  let d = e => e.map(c);
  let p = (e, t) => e.filter(e => e.identifier === t || e.artifactId === t);
  let u = e => {
    let t = new Map();
    e.forEach(e => {
      if (e.version && !t.has(e.version) && e.artifactKey && e.resourceId && e.resourceVersion) {
        t.set(e.version, {
          artifactKey: e.artifactKey,
          version: e.version,
          title: e.title,
          resourceId: e.resourceId,
          resourceVersion: e.resourceVersion,
          artifactMeta: e
        });
      }
    });
    return collectionOrderByUtil_1.orderBy([...t.values()], ["version"], ["desc"]);
  };
  function m(e) {
    let t = e.find(e => {
      var t;
      return ((t = e.code) === null || t === undefined ? undefined : t.node_id.toString()) === "root";
    });
    if (t) {
      return t;
    }
    let a = e.find(e => e.artifactKey && e.resourceId && e.resourceVersion);
    if (a) {
      return immerProduceCore.produce(a, e => {
        e.code = {
          node_id: "root"
        };
      });
    }
  }
  require.d(exports, {
    findRootArtifact: function () {
      return m;
    },
    normalizeArtifact: function () {
      return n;
    },
    processArtifactCodes: function () {
      return d;
    },
    normalizeArtifacts: function () {
      return l;
    },
    findArtifactById: function () {
      return p;
    },
    getOrderedVersions: function () {
      return u;
    },
    mergeArtifactLists: function () {
      return s;
    }
  });
}