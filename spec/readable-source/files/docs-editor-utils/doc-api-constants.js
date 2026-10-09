// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ef' to 'fileTypes'
// - Renamed export 'Gx' to 'driveErrors'
// - Renamed export 'MU' to 'statusCodes'
// - Renamed export 'NV' to 'capacityLimitCodes'
// - Renamed export 'Rw' to 'specificErrorCodes'
// - Renamed export 'W6' to 'capacityLimits'
// - Renamed export '_g' to 'attachmentTypes'
// - Renamed export 'aY' to 'operationStatus'
// - Renamed export 'q0' to 'contentTypes'
// - Renamed export 'zN' to 'referenceTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 499049
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var l;
  var c;
  var u;
  var a;
  var s;
  var d;
  (o = {})[o.REFERENCE_ALL = 0] = "REFERENCE_ALL";
  o[o.ONLY_REFERENCE = 1] = "ONLY_REFERENCE";
  o[o.NO_REFERENCE = 2] = "NO_REFERENCE";
  let f = o;
  let h = {
    TIMEOUT: "ECONNABORTED",
    SUCCESS: 0,
    FAILED: 1,
    INVALID_PARAMETERS: 2,
    NOT_FOUND: 3,
    FORBIDDEN: 4,
    LOGIN_REQUIRED: 5,
    DATA_EXCEED_LIMIT: 6,
    OBJCT_DELETED: 7,
    SCOPE_FAIL: 9,
    RESOURCE_EXPIRED: 600,
    CONNECT_ERROR: "-8",
    JS_INTERNAL_ERROR: "-9",
    REQUEST_BIZ_ERROR: "-10",
    NOTE_DELETED: 1002,
    CONNECT_ABORT: "CONNECT_ABORT",
    PROMPT_MODIFY_WHEN_VIOLATE_POLICIES: 10009,
    PROMPT_CONTACT_WHEN_VIOLATE_POLICIES: 10013,
    PASSWORD_REQUIRED: 10016,
    KEY_INVALID: 900021001,
    JSSDK_SESSION_SERVICE_TIMEOUT: 254126802
  };
  h.LOGIN_REQUIRED;
  h.INVALID_PARAMETERS;
  h.FORBIDDEN;
  h.NOTE_DELETED;
  h.OBJCT_DELETED;
  h.NOT_FOUND;
  h.PROMPT_MODIFY_WHEN_VIOLATE_POLICIES;
  h.PROMPT_CONTACT_WHEN_VIOLATE_POLICIES;
  (i = {})[i.NEW_PAGE = 0] = "NEW_PAGE";
  i[i.SHARE_AS_PAGE = 1] = "SHARE_AS_PAGE";
  i[i.TOPIC = 2] = "TOPIC";
  i[i.SPACE = 3] = "SPACE";
  let _ = i;
  (l = {})[l.OTHER = 0] = "OTHER";
  l[l.SIMILAR = 1] = "SIMILAR";
  l[l.BEHAVIOR = 2] = "BEHAVIOR";
  let p = l;
  p.OTHER;
  t("recommend_reason.other");
  p.SIMILAR;
  t("recommend_reason.similar");
  p.BEHAVIOR;
  t("recommend_reason.behavior");
  (c = {})[c.SUCCESSFUL = 0] = "SUCCESSFUL";
  c[c.FAILED = 1] = "FAILED";
  c[c.CROSS_BRAND = 900004511] = "CROSS_BRAND";
  c[c.CROSS_TENANT = 900004510] = "CROSS_TENANT";
  c.CANCELED = "canceled";
  let g = c;
  (u = {}).FILE = "docx_file";
  u.IMAGE = "docx_image";
  let E = u;
  (a = {})[a.Image = 1] = "Image";
  a[a.File = 2] = "File";
  let m = a;
  (s = {})[s.USER_DRIVE = 90001061] = "USER_DRIVE";
  s[s.USER_NO_DRIVE = 900011002] = "USER_NO_DRIVE";
  s[s.SPACE = 11001] = "SPACE";
  s[s.COPY_ATTACHMENT = 90008072] = "COPY_ATTACHMENT";
  s[s.FILE_SIZE_BEYOND_LIMIT = 90001043] = "FILE_SIZE_BEYOND_LIMIT";
  s[s.DOCS_SIZE_LIMIT = 90003085] = "DOCS_SIZE_LIMIT";
  let b = s;
  (d = {})[d.TENANT_CAPACITY_LIMIT = 90003081] = "TENANT_CAPACITY_LIMIT";
  d[d.USER_CAPACITY_LIMIT = 90003082] = "USER_CAPACITY_LIMIT";
  d[d.DEPARTMENT_CAPACITY_LIMIT = 90003083] = "DEPARTMENT_CAPACITY_LIMIT";
  let v = d;
  let T = [v.TENANT_CAPACITY_LIMIT, v.USER_CAPACITY_LIMIT, v.DEPARTMENT_CAPACITY_LIMIT];
  let C = [b.COPY_ATTACHMENT, b.USER_NO_DRIVE, v.DEPARTMENT_CAPACITY_LIMIT];
  require.d(exports, {
    fileTypes: function () {
      return E;
    },
    driveErrors: function () {
      return b;
    },
    statusCodes: function () {
      return h;
    },
    capacityLimitCodes: function () {
      return T;
    },
    specificErrorCodes: function () {
      return C;
    },
    capacityLimits: function () {
      return v;
    },
    attachmentTypes: function () {
      return m;
    },
    operationStatus: function () {
      return g;
    },
    contentTypes: function () {
      return _;
    },
    referenceTypes: function () {
      return f;
    }
  });
}