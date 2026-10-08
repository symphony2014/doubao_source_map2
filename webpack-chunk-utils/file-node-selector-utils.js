// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'mx' to 'getDefaultDocType'
// - Renamed export 'om' to 'getShouldPrintFlag'
// - Renamed export 'Qh' to 'getNodeSelector'
// - Renamed export 'nG' to 'getOwnerNameSelector'
// - Renamed export 'bJ' to 'getCurrentDocToken'
// - Renamed export 'ui' to 'getSuiteClientError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 696977
         */
module.exports = function (module, exports, require) {
  var i;
  var o;
  var a;
  var u;
  var c;
  var createSelector = require("create-selector") /*id: 228436*/;
  let l = e => e.entities.users;
  let s = e => e.entities.objs;
  var docTokenManager = require("doc-token-manager") /*id: 632370*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var immutableCore = require("immutable-core") /*id: 81885*/;
  (i = {}).Node = "Node";
  i.Obj = "Obj";
  i.Shortcut = "Shortcut";
  let p = i;
  (o = {})[o.Wiki = 2] = "Wiki";
  o[o.Space = 1] = "Space";
  let S = o;
  (a = {})[a.SYNCED = 0] = "SYNCED";
  a[a.UNUSABLE = 10] = "UNUSABLE";
  a[a.DOWNLOAD_PENDING = 11] = "DOWNLOAD_PENDING";
  a[a.DOWNLOADING = 12] = "DOWNLOADING";
  a[a.DOWNLOADED = 13] = "DOWNLOADED";
  a[a.DOWNLOAD_FAILED = 14] = "DOWNLOAD_FAILED";
  a[a.DOWNLOAD_LIMITATION = 15] = "DOWNLOAD_LIMITATION";
  a[a.DOWNLOADING_RESOURCES = 16] = "DOWNLOADING_RESOURCES";
  a[a.DOWNLOAD_RESOURCES_FAILED = 17] = "DOWNLOAD_RESOURCES_FAILED";
  a[a.UPLOAD_PENDING = 21] = "UPLOAD_PENDING";
  a[a.UPLOADING = 22] = "UPLOADING";
  a[a.UPLOADED = 23] = "UPLOADED";
  a[a.UPLOAD_FAILED = 24] = "UPLOAD_FAILED";
  let f = a;
  (u = {})[u.SUCCESS = 0] = "SUCCESS";
  u[u.GET_FAIL = 1] = "GET_FAIL";
  u[u.SET_FAIL_WHEN_CREAT = 2] = "SET_FAIL_WHEN_CREAT";
  u[u.NO_SECURITY = 3] = "NO_SECURITY";
  u[u.NOT_READY = 4] = "NOT_READY";
  let A = u;
  (c = {})[c.UNABLE = 0] = "UNABLE";
  c[c.ABLE = 1] = "ABLE";
  let m = c;
  var fileNodeTypeConstants = require("file-node-type-constants") /*id: 144238*/;
  let O = {
    name: "",
    type: null,
    subtype: "",
    url: "",
    owner_type: -1,
    create_uid: "",
    owner_id: "",
    edit_uid: "",
    sharer_id: "",
    delete_uid: "",
    obj_id: "",
    create_time: 0,
    edit_time: 0,
    my_edit_time: 0,
    pin_time: 0,
    open_time: 0,
    share_time: 0,
    star_time: 0,
    activity_time: 0,
    is_stared: false,
    is_pined: false,
    is_subscribed: false,
    is_subscribed_comment: false,
    is_external: false,
    complaint: false,
    external_hint: false,
    description: "",
    share_version: -1,
    is_hidden: false,
    is_share_folder: false,
    link_obj_token: "",
    template_id: "",
    is_template: false,
    icon: "",
    icon_encrypted_type: 0,
    icon_nonce: "",
    icon_key: "",
    icon_type: fileNodeTypeConstants.iconType.UNSET,
    icon_fsunit: "",
    icon_has_perm: true,
    icon_info: "",
    thumbnail: "",
    thumbnail_url: "",
    thumbnail_type: "",
    thumbnail_secret: "",
    thumbnail_nonce: "",
    not_wiki_obj: undefined,
    wiki_space_id: "",
    wiki_space_name: "",
    wiki_space_type: null,
    wiki_space_create_uid: "",
    wiki_subtype: null,
    wiki_sub_token: "",
    wiki_version: null,
    wiki_homepage_obj_token: "",
    wiki_homepage_obj_type: null,
    wiki_homepage_wikiToken: "",
    edit_user_name: "",
    owner_user_name: "",
    owner_user_type: "",
    create_user_name: "",
    create_date: "",
    delete_flag: 0,
    title_secure_key_deleted: false,
    create_source: -1,
    tenant_id: "",
    sub_type: 0,
    path_count: 0,
    parent_path_name: "",
    parent_token: "",
    cover_id: "",
    cover_thumbnail: "",
    cover_icon: "",
    link_token: undefined,
    revision: 0,
    size: "",
    index: 1,
    is_share_root: false,
    expire_time: 0,
    space_id: "",
    has_perm: true,
    real_sub_type: 0,
    security_name: "",
    get_sec_label_code: A.NOT_READY,
    can_set_sec_label: m.UNABLE,
    sec_label: null,
    security_label_id: "",
    recommend_label_id: "",
    sec_label_banner_status: 0,
    sec_label_banner_type: undefined,
    security_level: 0,
    secret_key_delete: false,
    can_set_retention: false,
    template_type: 0,
    sec_label_type: undefined,
    file_risk_tag: false,
    storage_size: undefined,
    prev_owner_id: "",
    double_check_default_label: false,
    default_label_id: "",
    must_set_label: false,
    display_tag: undefined,
    parent_folder_name: "",
    parent_folder_token: "",
    parent_folder_obj_type: undefined,
    fresh_info: undefined,
    extra_fields: undefined,
    is_offline_active: false,
    is_offline_usable: f.UNUSABLE,
    is_fake_node: false,
    enterprise_search_entity: 0,
    supports_cross_tenant_sub_with_perceive_perm: fileNodeTypeConstants.crossTenantPermission.UNSUPPORT_CROSS_TENANT_WITH_READ_PERM,
    collaborators_count: 0,
    browser_user_count: 0,
    expected_permission_adjustment: 1,
    secret_label_id: "",
    secret_label_name: "",
    permitted: undefined,
    container_entity: undefined
  };
  let R = {
    shortcut_name: "",
    shortcut_owner_id: "",
    shortcut_edit_uid: "",
    shortcut_edit_time: 0,
    shortcut_create_time: 0,
    shortcut_open_time: 0,
    shortcut_icon_info: "",
    shortcut_expire_time: 0,
    shortcut_token: "",
    obj_token: "",
    obj_biz_type: S.Space,
    obj_node_token: "",
    has_wiki_child: false
  };
  let h = {
    ...O,
    parent_obj_token: "",
    node_token: "",
    entity_token: "",
    entity_type: null,
    ...R,
    meta_token: "",
    meta_type: null,
    token: "",
    title: ""
  };
  let N = {
    ...h
  };
  let C = {
    ...h
  };
  var documentTypeNameLabels = require("document-type-name-labels") /*id: 564045*/;
  var fileTypeConstants = require("file-type-constants") /*id: 276005*/;
  class b extends immutableCore.Record(N, "Node: base data unit of explorer system") {
    get(e) {
      return super.get(e);
    }
    get name() {
      if (typeof window == "undefined") {
        return "";
      }
      if (!this.get("has_perm")) {
        return t("explorer.no_perm_file_name");
      }
      let e = this.get("name");
      return e || (fileTypeConstants.supportedTypeIds.includes(this.type) ? documentTypeNameLabels.fileTypeDefaultNames[this.type] : "");
    }
  }
  class g extends immutableCore.Record(C, "Obj: base data unit of suite system") {
    get(e) {
      return super.get(e);
    }
    get name() {
      if (!this.get("has_perm")) {
        return t("explorer.no_perm_file_name");
      }
      let e = this.get("title");
      if (!e && this.obj_token && this.type !== null) {
        return documentTypeNameLabels.fileTypeDefaultNames[this.type];
      } else {
        return e;
      }
    }
    get wikiInfo() {
      let {
        obj_token: e,
        wiki_space_id: n,
        wiki_space_name: r,
        wiki_space_type: i,
        wiki_space_create_uid: o,
        wiki_subtype: a,
        wiki_sub_token: u,
        wiki_homepage_obj_token: c,
        wiki_homepage_obj_type: _,
        wiki_homepage_wikiToken: l,
        wiki_version: s
      } = this;
      return {
        wikiToken: e,
        spaceId: n,
        spaceName: r,
        spaceType: i,
        spaceCreateUid: o,
        objType: a,
        objToken: u,
        wikiVersion: s,
        homePage: {
          objToken: c,
          objType: _,
          wikiToken: l
        }
      };
    }
  }
  function P(e, n) {
    if (arrayIsArrayUtil.isArray(e) || immutableCore.List.isList(e)) {
      return e.map(e => M(e, n));
    } else {
      return M(e, n);
    }
  }
  function M(e, n) {
    return function (e, n) {
      let r = function (e, n) {
        let {
          meta_token: r,
          meta_type: i
        } = e;
        let o = {
          ...e
        };
        if (i === p.Node) {
          let e = n.nodes[r];
          if (!e) {
            return null;
          }
          o = {
            ...o,
            ...e
          };
          i = e.entity_type;
          r = e.entity_token;
        }
        if (i === p.Shortcut) {
          let e = n.shortcuts[r];
          if (!e) {
            return null;
          }
          o = {
            ...o,
            ...e
          };
          i = p.Obj;
          r = e.obj_token;
        }
        if (i === p.Obj) {
          let e = n.objs[r];
          if (!e) {
            return null;
          }
          o = {
            ...o,
            ...e
          };
        }
        return o;
      }(e, n);
      return r && function (e) {
        let n = {
          ...e,
          title: e.name
        };
        if (e.link_obj_token) {
          n.obj_token = e.link_obj_token;
        }
        if (e.node_token) {
          n.token = e.node_token;
          return new b(n);
        } else if (e.type === fileTypeConstants.ObjectType.FOLDER && e.meta_type !== p.Shortcut) {
          n.token = e.obj_token;
          return new b(n);
        } else {
          return new g(n);
        }
      }(r);
    }({
      meta_token: e,
      meta_type: p.Obj
    }, {
      objs: n
    });
  }
  let v = () => docTokenManager.getDocToken();
  let y = () => fileTypeConstants.BasicFileType.DOCX.toString();
  let w = createSelector.createSelector(s, v, (e, n) => P(n, e));
  let U = e => createSelector.createSelector(e => e, s, (n, r) => e ? P(e, r) : w(n));
  let k = e => createSelector.createSelector(l, U(e), (e, n) => n && e.get(n.get("owner_id")));
  let B = e => e.appState.shouldPrint;
  let H = (e, n) => {
    var r;
    var i;
    return (e == null ? undefined : (i = e.appState) === null || i === undefined ? undefined : (r = i.suiteClientVarsErrorMap) === null || r === undefined ? undefined : r.get(n)) || null;
  };
  require.d(exports, {
    getDefaultDocType: function () {
      return y;
    },
    getShouldPrintFlag: function () {
      return B;
    },
    getNodeSelector: function () {
      return v;
    },
    getOwnerNameSelector: function () {
      return k;
    },
    getCurrentDocToken: function () {
      return w;
    },
    getSuiteClientError: function () {
      return H;
    }
  });
}