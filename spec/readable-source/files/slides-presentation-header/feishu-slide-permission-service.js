// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$6' to 'SlidePermissionType'
// - Renamed export 'AL' to 'getSlidePermissionState'
// - Renamed export 'Ul' to 'getShareDomains'
// - Renamed export 'uh' to 'setSlideSharePermission'
// - Renamed export 'Nx' to 'getSlideSharePermission'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 99448.e1905545.js
         * chunkId: 99448
         * moduleId: 831253
         */
module.exports = function (module, exports, require) {
  var n;
  var feishuAccessTokenService = require("feishu-access-token-service") /*id: 578645*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let a = () => ({});
  var feishuApiOriginResolver = require("feishu-api-origin-resolver") /*id: 264487*/;
  (n = {})[n.Close = 1] = "Close";
  n[n.OrgRead = 2] = "OrgRead";
  n[n.OrgEdit = 3] = "OrgEdit";
  n[n.PublicRead = 4] = "PublicRead";
  n[n.PublicEdit = 5] = "PublicEdit";
  n[n.AssociatedOrgRead = 6] = "AssociatedOrgRead";
  n[n.AssociatedOrgEdit = 7] = "AssociatedOrgEdit";
  let o = n;
  let d = async e => {
    let {
      docToken: t
    } = e;
    try {
      var s;
      let e = await ((s = feishuAccessTokenService.getFeishuAccessTokenService()) === null || s === undefined ? undefined : s.getAuthHeadersAsync());
      let r = await feishuApiOriginResolver.getApiOrigin();
      let {
        data: d,
        code: c,
        msg: u
      } = await fetch(`${r}/space/api/suite/permission/public.v4/?token=${t || ""}&type=30`, {
        headers: e,
        method: "GET",
        ...a()
      }).then(e => e.json());
      if (d == null ? undefined : d.perm_public) {
        return {
          linkShareEntity: d == null ? undefined : d.perm_public?.link_share_entity_v2,
          hasModifiedLinkShare: d == null ? undefined : d.perm_public?.has_modified_link_share
        };
      }
      throw Error(`get slide share permission failed, code: ${c}, msg: ${u}, data: ${JSON.stringify(d)}`);
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "[AI-PPT] get_slide_share_permission_error",
        error: e,
        meta: {
          docToken: t
        }
      });
    }
  };
  let c = async e => {
    let {
      docToken: t,
      permission: s
    } = e;
    try {
      var n;
      let e = await ((n = feishuAccessTokenService.getFeishuAccessTokenService()) === null || n === undefined ? undefined : n.getAuthHeadersAsync());
      let r = await feishuApiOriginResolver.getApiOrigin();
      let {
        data: o,
        code: d,
        msg: c
      } = await fetch(`${r}/space/api/suite/permission/public/update.v5/`, {
        headers: e,
        method: "POST",
        ...a(),
        body: JSON.stringify({
          token: t,
          type: 30,
          link_share_entity: s
        })
      }).then(e => e.json());
      if ((o == null ? undefined : o.code) === 0) {
        return true;
      }
      throw Error(`set slide share permission failed, code: ${d}, msg: ${c}, data: ${JSON.stringify(o)}`);
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "[AI-PPT] set_slide_share_permission_error",
        error: e,
        meta: {
          docToken: t,
          permission: s
        }
      });
    }
  };
  let u = async e => {
    let {
      docToken: t
    } = e;
    try {
      var s;
      let e = await ((s = feishuAccessTokenService.getFeishuAccessTokenService()) === null || s === undefined ? undefined : s.getAuthHeadersAsync());
      let n = await feishuApiOriginResolver.getApiOrigin();
      let {
        data: a,
        code: o
      } = await fetch(`${n}/space/api/suite/permission/document/actions/state/`, {
        headers: e,
        method: "POST",
        body: JSON.stringify({
          token: t,
          type: 30,
          actions: ["view"]
        })
      }).then(e => e.json());
      if (o !== 0) {
        loggerServiceCore.defaultLogger.persist.warning({
          eventName: "[AI-PPT] get_slide_permission_state warning",
          error: Error(`get slide permission state failed, code: ${o}`),
          meta: {
            docToken: t,
            code: o,
            data: a
          }
        });
      }
      return {
        data: a,
        code: o
      };
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "[AI-PPT] get_slide_permission_state_error",
        error: e,
        meta: {
          docToken: t
        }
      });
    }
  };
  let p = async () => {
    let e = "www.doubao.com";
    try {
      let {
        data: s,
        code: n,
        msg: i
      } = await fetch("https://www.feishu.cn/space/api/infra/domains/all", {
        method: "GET"
      }).then(e => e.json());
      let r = s == null ? undefined : s.doubao?.share;
      if (n !== 0 || !r) {
        throw Error(`getShareDomains failed, code: ${n}, msg: ${i}, data: ${JSON.stringify(s)}`);
      }
      return r || e;
    } catch (t) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "[AI-PPT] getShareDomains error",
        error: t
      });
      return e;
    }
  };
  require.d(exports, {
    SlidePermissionType: function () {
      return o;
    },
    getSlidePermissionState: function () {
      return u;
    },
    getShareDomains: function () {
      return p;
    },
    setSlideSharePermission: function () {
      return c;
    },
    getSlideSharePermission: function () {
      return d;
    }
  });
}