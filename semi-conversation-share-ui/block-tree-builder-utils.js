// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'sH' to 'buildBlockTree'
// - Renamed export 'y5' to 'buildBlockNodes'
// - Renamed export 'h3' to 'checkBlockTypeMatch'
// - Renamed export 'Yg' to 'useMemoBlockNodes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 600253
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var collectionMatchUtil = require("collection-match-util") /*id: 394199*/;
  var blockTypeConstants_1 = require("block-type-constants_1") /*id: 701432*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var arrayUniqByMatcher = require("array-uniq-by-matcher") /*id: 898750*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var attachmentConstants = require("attachment-constants") /*id: 373585*/;
  let d = [{
    execute: e => {
      let t = e.filter(e => {
        var i;
        var l;
        return e.block?.block_type === chatConstantsEnum.messageContentType.BLOCK_REFERENCE && ((l = e.block) === null || l === undefined ? undefined : (i = l.content) === null || i === undefined ? undefined : i.reference_block?.type) !== attachmentConstants.ReferenceType.ReferenceTypePPTTemplate;
      });
      arrayUniqByMatcher.uniqByMatcher(t, "block.parent_id").forEach(t => {
        if (!t.block) {
          return;
        }
        let n = t.block.parent_id;
        if (e.find(e => {
          return e.parentId === n && e.block?.block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT;
        })) {
          let t = uuidGeneratorUtil.generateUuid();
          e.push({
            id: t,
            type: "custom_type:reference_text_node",
            block: {},
            parentId: n,
            children: []
          });
          e.forEach(e => {
            if (e.parentId === n && (e.block?.block_type === chatConstantsEnum.messageContentType.BLOCK_REFERENCE || e.block?.block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT)) {
              e.parentId = t;
            }
          });
        }
      });
      return e;
    }
  }];
  let u = {
    generateNodeType: (e, t) => function (e, t) {
      var i;
      var r;
      var a;
      var c;
      var u;
      var m;
      var f;
      var g;
      var b;
      var y;
      var w;
      var R;
      var C;
      var j;
      var E;
      var I;
      var F;
      var A;
      var B;
      var D;
      var z;
      var H;
      var J;
      var K;
      var Q;
      var Y;
      if (e.block_type === 10025 && (e == null ? undefined : (i = e.content) === null || i === undefined ? undefined : i.search_query_result_block?.search_type) === 1) {
        return "block_type:10025 | search_query_result_block.search_type:1";
      }
      if (e.block_type === 10025 && (e == null ? undefined : (r = e.content) === null || r === undefined ? undefined : r.search_query_result_block?.search_type) === 2) {
        return "block_type:10025 | search_query_result_block.search_type:2";
      }
      if (e.block_type === 10025 && (e == null ? undefined : (a = e.content) === null || a === undefined ? undefined : a.search_query_result_block?.search_type) === 3) {
        return "block_type:10025 | search_query_result_block.search_type:3";
      }
      if (e.block_type === 10025 && (e == null ? undefined : (c = e.content) === null || c === undefined ? undefined : c.search_query_result_block?.search_type) === 4) {
        return "block_type:10025 | search_query_result_block.search_type:4";
      }
      if (e.block_type === 10030 && (e == null ? undefined : (u = e.content) === null || u === undefined ? undefined : u.artifact_block?.resource_type) === 1) {
        return "block_type:10030 | artifact_block.resource_type:1";
      } else if (e.block_type === 10030 && (e == null ? undefined : (m = e.content) === null || m === undefined ? undefined : m.artifact_block?.resource_type) === 2) {
        return "block_type:10030 | artifact_block.resource_type:2";
      } else if (e.block_type === 10030 && (e == null ? undefined : (f = e.content) === null || f === undefined ? undefined : f.artifact_block?.resource_type) === 3) {
        return "block_type:10030 | artifact_block.resource_type:3";
      } else if (e.block_type === 10030 && (e == null ? undefined : (g = e.content) === null || g === undefined ? undefined : g.artifact_block?.resource_type) === 4) {
        return "block_type:10030 | artifact_block.resource_type:4";
      } else if (e.block_type === 10030 && (e == null ? undefined : (b = e.content) === null || b === undefined ? undefined : b.artifact_block?.resource_type) === 5) {
        return "block_type:10030 | artifact_block.resource_type:5";
      } else if (e.block_type === 10030 && (e == null ? undefined : (y = e.content) === null || y === undefined ? undefined : y.artifact_block?.resource_type) === 6) {
        return "block_type:10030 | artifact_block.resource_type:6";
      } else if (e.block_type === 10030 && (e == null ? undefined : (w = e.content) === null || w === undefined ? undefined : w.artifact_block?.resource_type) === 7) {
        return "block_type:10030 | artifact_block.resource_type:7";
      } else if (e.block_type === 10030 && (e == null ? undefined : (R = e.content) === null || R === undefined ? undefined : R.artifact_block?.resource_type) === 8) {
        return "block_type:10030 | artifact_block.resource_type:8";
      } else if (e.block_type === 10030 && (e == null ? undefined : (C = e.content) === null || C === undefined ? undefined : C.artifact_block?.resource_type) === 9) {
        return "block_type:10030 | artifact_block.resource_type:9";
      } else if (e.block_type === 10030 && (e == null ? undefined : (j = e.content) === null || j === undefined ? undefined : j.artifact_block?.resource_type) === 10) {
        return "block_type:10030 | artifact_block.resource_type:10";
      } else if (e.block_type === 10030 && (e == null ? undefined : (E = e.content) === null || E === undefined ? undefined : E.artifact_block?.resource_type) === 11) {
        return "block_type:10030 | artifact_block.resource_type:11";
      } else if (e.block_type === 10040 && (e == null ? undefined : (I = e.content) === null || I === undefined ? undefined : I.thinking_block?.scene) === 0) {
        return "block_type:10040 | thinking_block.scene:0";
      } else if (e.block_type === 10040 && (e == null ? undefined : (F = e.content) === null || F === undefined ? undefined : F.thinking_block?.scene) === 1) {
        return "block_type:10040 | thinking_block.scene:1";
      } else if (e.block_type === 10040 && (e == null ? undefined : (A = e.content) === null || A === undefined ? undefined : A.thinking_block?.scene) === undefined) {
        return "block_type:10040 | thinking_block.scene:undefined";
      } else if (e.block_type === 10056 && (e == null ? undefined : (B = e.content) === null || B === undefined ? undefined : B.reference_block?.type) === 1) {
        return "block_type:10056 | reference_block.type:1";
      } else if (e.block_type === 10056 && (e == null ? undefined : (D = e.content) === null || D === undefined ? undefined : D.reference_block?.type) === 2) {
        return "block_type:10056 | reference_block.type:2";
      } else if (e.block_type === 10056 && (e == null ? undefined : (z = e.content) === null || z === undefined ? undefined : z.reference_block?.type) === 3) {
        return "block_type:10056 | reference_block.type:3";
      } else if (e.block_type === 10056 && (e == null ? undefined : (H = e.content) === null || H === undefined ? undefined : H.reference_block?.type) === 4) {
        return "block_type:10056 | reference_block.type:4";
      } else if (e.block_type === 10056 && (e == null ? undefined : (J = e.content) === null || J === undefined ? undefined : J.reference_block?.type) === 5) {
        return "block_type:10056 | reference_block.type:5";
      } else if (e.block_type === 10056 && (e == null ? undefined : (K = e.content) === null || K === undefined ? undefined : K.reference_block?.type) === 6) {
        return "block_type:10056 | reference_block.type:6";
      } else if (e.block_type === 10056 && (e == null ? undefined : (Q = e.content) === null || Q === undefined ? undefined : Q.reference_block?.type) === 7) {
        return "block_type:10056 | reference_block.type:7";
      } else if (e.block_type === 10056 && (e == null ? undefined : (Y = e.content) === null || Y === undefined ? undefined : Y.reference_block?.type) === 8) {
        return "block_type:10056 | reference_block.type:8";
      } else if (e.block_type === 2008) {
        return "block_type:2008";
      } else if (e.block_type === 2074) {
        return "block_type:2074";
      } else if (e.block_type === 10000) {
        return "block_type:10000";
      } else if (e.block_type === 10001) {
        return "block_type:10001";
      } else if (e.block_type === 10002) {
        return "block_type:10002";
      } else if (e.block_type === 10003) {
        return "block_type:10003";
      } else if (e.block_type === 10004) {
        return "block_type:10004";
      } else if (e.block_type === 10005) {
        return "block_type:10005";
      } else if (e.block_type === 10006) {
        return "block_type:10006";
      } else if (e.block_type === 10007) {
        return "block_type:10007";
      } else if (e.block_type === 10008) {
        return "block_type:10008";
      } else if (e.block_type === 10009) {
        return "block_type:10009";
      } else if (e.block_type === 10010) {
        return "block_type:10010";
      } else if (e.block_type === 10011) {
        return "block_type:10011";
      } else if (e.block_type === 10012) {
        return "block_type:10012";
      } else if (e.block_type === 10013) {
        return "block_type:10013";
      } else if (e.block_type === 10014) {
        return "block_type:10014";
      } else if (e.block_type === 10015) {
        return "block_type:10015";
      } else if (e.block_type === 10016) {
        return "block_type:10016";
      } else if (e.block_type === 10018) {
        return "block_type:10018";
      } else if (e.block_type === 10019) {
        return "block_type:10019";
      } else if (e.block_type === 10020) {
        return "block_type:10020";
      } else if (e.block_type === 10021) {
        return "block_type:10021";
      } else if (e.block_type === 10022) {
        return "block_type:10022";
      } else if (e.block_type === 10023) {
        return "block_type:10023";
      } else if (e.block_type === 10024) {
        return "block_type:10024";
      } else if (e.block_type === 10026) {
        return "block_type:10026";
      } else if (e.block_type === 10027) {
        return "block_type:10027";
      } else if (e.block_type === 10028) {
        return "block_type:10028";
      } else if (e.block_type === 10050) {
        return "block_type:10050";
      } else if (e.block_type === 10051) {
        return "block_type:10051";
      } else if (e.block_type === 10052) {
        return "block_type:10052";
      } else if (e.block_type === 10053) {
        return "block_type:10053";
      } else if (e.block_type === 10054) {
        return "block_type:10054";
      } else if (e.block_type === 10055) {
        return "block_type:10055";
      } else if (e.block_type === 10057) {
        return "block_type:10057";
      } else if (e.block_type === 10058) {
        return "block_type:10058";
      } else if (e.block_type === 10059) {
        return "block_type:10059";
      } else if (e.block_type === 10060) {
        return "block_type:10060";
      } else if (e.block_type === 10100) {
        return "block_type:10100";
      } else if (e.block_type === 10101) {
        return "block_type:10101";
      } else if (e.block_type === 10102) {
        return "block_type:10102";
      }
      return null;
    }(e, 0),
    buildNode(e, t) {
      return {
        parentId: e.parent_id,
        id: e.block_id,
        block: e,
        type: this.generateNodeType(e, t),
        children: []
      };
    },
    buildTree: e => function (e) {
      for (let t of d) {
        e = t.execute(e);
      }
      if (e.length === 0) {
        return [];
      }
      let i = e => e === "" || e === "0" || e == null ? null : e;
      let l = new Map();
      for (let n of e) {
        let e = i(n.parentId);
        let r = l.get(e) ?? [];
        r.push({
          ...n,
          children: []
        });
        l.set(e, r);
      }
      let r = new Map();
      let o = new Set();
      let a = e => {
        if (r.has(e.id)) {
          return r.get(e.id) || [];
        }
        if (o.has(e.id)) {
          e.children = [];
          r.set(e.id, []);
          return [];
        }
        o.add(e.id);
        let n = l.get(e.id) ?? [];
        let i = [];
        for (let e of n) {
          let t = a(e);
          i.push(e, ...t);
        }
        o.delete(e.id);
        e.children = i;
        r.set(e.id, i);
        return i;
      };
      let s = l.get(null) ?? [];
      for (let e of s) {
        a(e);
      }
      return s;
    }(e)
  };
  let p = e => e.map(e => u.buildNode(e, ""));
  let m = e => reactCoreLibraryReexport.useMemo(() => p(e), [e]);
  let v = e => e.length && collectionMatchUtil.checkCollectionMatch(e, e => e.type && blockTypeConstants_1.blockTypes.includes(e.type));
  let f = e => reactCoreLibraryReexport.useMemo(() => {
    let t = e.map(e => u.buildNode(e, ""));
    return u.buildTree(t);
  }, [e]);
  require.d(exports, {
    buildBlockTree: function () {
      return f;
    },
    buildBlockNodes: function () {
      return p;
    },
    checkBlockTypeMatch: function () {
      return v;
    },
    useMemoBlockNodes: function () {
      return m;
    }
  });
}