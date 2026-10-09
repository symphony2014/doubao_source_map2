// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'FP' to 'createAddRevision'
// - Renamed export 'PE' to 'createReplaceRevision'
// - Renamed export 'TT' to 'createReplaceDeleteOp'
// - Renamed export 'Tf' to 'createFormatRevision'
// - Renamed export 'UC' to 'createRevisionObject'
// - Renamed export 'aZ' to 'createDeleteRevision'
// - Renamed export 'bl' to 'createAddOperation'
// - Renamed export 'ok' to 'createDeleteOperation'
// - Renamed export 'ot' to 'createReplaceAddOp'
// - Renamed export 'q8' to 'createFormatOperation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 907135
         */
module.exports = function (module, exports, require) {
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var editorRevisionConstants = require("editor-revision-constants") /*id: 835842*/;
  var diProviderRevisionBaseService = require("di-provider-revision-base-service") /*id: 951946*/;
  function c(e) {
    let {
      type: n,
      revisionId: r,
      userId: l = userEnvironmentUtils.getUserInfo().userId,
      createTime: c = new Date().getTime(),
      details: u
    } = e;
    return {
      [`${editorRevisionConstants.revisionIdString}${r}`]: JSON.stringify(Object.assign({
        type: n,
        userId: l,
        createTime: c
      }, u ? {
        details: u
      } : null))
    };
  }
  function u(e) {
    return c(Object.assign(e, {
      type: editorRevisionConstants.diffOperationMap.ADD
    }));
  }
  function a(e) {
    return c(Object.assign(e, {
      type: editorRevisionConstants.diffOperationMap.FORMAT
    }));
  }
  function s(e) {
    return c(Object.assign(e, {
      type: editorRevisionConstants.diffOperationMap.DELETE
    }));
  }
  function d(e) {
    return c(Object.assign(e, {
      type: editorRevisionConstants.diffOperationMap.REPLACE
    }, e.details ? {
      details: {
        ...e.details,
        subType: editorRevisionConstants.replaceOpTypes.REPLACE_ADD
      }
    } : {
      details: {
        subType: editorRevisionConstants.replaceOpTypes.REPLACE_ADD
      }
    }));
  }
  function f(e) {
    return c(Object.assign(e, {
      type: editorRevisionConstants.diffOperationMap.REPLACE
    }, e.details ? {
      details: {
        ...e.details,
        subType: editorRevisionConstants.replaceOpTypes.REPLACE_DELETE
      }
    } : {
      details: {
        subType: editorRevisionConstants.replaceOpTypes.REPLACE_DELETE
      }
    }));
  }
  function h(e) {
    let {
      type: n,
      revisionId: r,
      userId: i = userEnvironmentUtils.getUserInfo().userId,
      createTime: l = new Date().getTime(),
      details: c
    } = e;
    let u = {
      type: n,
      userId: i,
      revisionId: r,
      createTime: l
    };
    if (c) {
      u.details = c;
    }
    return u;
  }
  function _(e, n = {}) {
    let r = e.editorAPI.getService(diProviderRevisionBaseService.revisionBaseService).generateRevisionId();
    return h(Object.assign({
      type: editorRevisionConstants.diffOperationMap.ADD,
      revisionId: r
    }, n));
  }
  function p(e, n = {}) {
    let r = e.editorAPI.getService(diProviderRevisionBaseService.revisionBaseService).generateRevisionId();
    return h(Object.assign({
      type: editorRevisionConstants.diffOperationMap.DELETE,
      revisionId: r
    }, n));
  }
  function g(e, n = {}) {
    let r = e.editorAPI.getService(diProviderRevisionBaseService.revisionBaseService).generateRevisionId();
    return h(Object.assign({
      type: editorRevisionConstants.diffOperationMap.FORMAT,
      revisionId: r
    }, n));
  }
  function E(e, n = {}) {
    return h(Object.assign({
      revisionId: e.editorAPI.getService(diProviderRevisionBaseService.revisionBaseService).generateRevisionId(),
      type: editorRevisionConstants.diffOperationMap.REPLACE,
      details: {
        subType: editorRevisionConstants.replaceOpTypes.REPLACE_DELETE
      }
    }, n));
  }
  require.d(exports, {
    createAddRevision: function () {
      return _;
    },
    createReplaceRevision: function () {
      return E;
    },
    createReplaceDeleteOp: function () {
      return f;
    },
    createFormatRevision: function () {
      return g;
    },
    createRevisionObject: function () {
      return h;
    },
    createDeleteRevision: function () {
      return p;
    },
    createAddOperation: function () {
      return u;
    },
    createDeleteOperation: function () {
      return s;
    },
    createReplaceAddOp: function () {
      return d;
    },
    createFormatOperation: function () {
      return a;
    }
  });
}