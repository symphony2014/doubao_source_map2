// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'zod'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11775.2ee22081.js
         * chunkId: 11775
         * moduleId: 225502
         */
module.exports = function (module, exports, require) {
  let r;
  (e8 = tt ||= {}).assertEqual = e => e;
  e8.assertIs = function (e) {};
  e8.assertNever = function (e) {
    throw Error();
  };
  e8.arrayToEnum = e => {
    let t = {};
    for (let a of e) {
      t[a] = a;
    }
    return t;
  };
  e8.getValidEnumValues = e => {
    let t = e8.objectKeys(e).filter(t => typeof e[e[t]] != "number");
    let a = {};
    for (let r of t) {
      a[r] = e[r];
    }
    return e8.objectValues(a);
  };
  e8.objectValues = e => e8.objectKeys(e).map(function (t) {
    return e[t];
  });
  e8.objectKeys = typeof Object.keys == "function" ? e => Object.keys(e) : e => {
    let t = [];
    for (let a in e) {
      if (Object.prototype.hasOwnProperty.call(e, a)) {
        t.push(a);
      }
    }
    return t;
  };
  e8.find = (e, t) => {
    for (let a of e) {
      if (t(a)) {
        return a;
      }
    }
  };
  e8.isInteger = typeof Number.isInteger == "function" ? e => Number.isInteger(e) : e => typeof e == "number" && isFinite(e) && Math.floor(e) === e;
  e8.joinValues = function (e, t = " | ") {
    return e.map(e => typeof e == "string" ? `'${e}'` : e).join(t);
  };
  e8.jsonStringifyReplacer = (e, t) => typeof t == "bigint" ? t.toString() : t;
  (ta ||= {}).mergeShapes = (e, t) => ({
    ...e,
    ...t
  });
  let s = tt.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
  let i = e => {
    switch (typeof e) {
      case "undefined":
        return s.undefined;
      case "string":
        return s.string;
      case "number":
        if (isNaN(e)) {
          return s.nan;
        } else {
          return s.number;
        }
      case "boolean":
        return s.boolean;
      case "function":
        return s.function;
      case "bigint":
        return s.bigint;
      case "symbol":
        return s.symbol;
      case "object":
        if (Array.isArray(e)) {
          return s.array;
        }
        if (e === null) {
          return s.null;
        }
        if (e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function") {
          return s.promise;
        }
        if (typeof Map != "undefined" && e instanceof Map) {
          return s.map;
        }
        if (typeof Set != "undefined" && e instanceof Set) {
          return s.set;
        }
        if (typeof Date != "undefined" && e instanceof Date) {
          return s.date;
        }
        return s.object;
      default:
        return s.unknown;
    }
  };
  let n = tt.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
  class d extends Error {
    constructor(e) {
      super();
      this.issues = [];
      this.addIssue = e => {
        this.issues = [...this.issues, e];
      };
      this.addIssues = (e = []) => {
        this.issues = [...this.issues, ...e];
      };
      let t = new.target.prototype;
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(this, t);
      } else {
        this.__proto__ = t;
      }
      this.name = "ZodError";
      this.issues = e;
    }
    get errors() {
      return this.issues;
    }
    format(e) {
      let t = e || function (e) {
        return e.message;
      };
      let a = {
        _errors: []
      };
      let r = e => {
        for (let s of e.issues) {
          if (s.code === "invalid_union") {
            s.unionErrors.map(r);
          } else if (s.code === "invalid_return_type") {
            r(s.returnTypeError);
          } else if (s.code === "invalid_arguments") {
            r(s.argumentsError);
          } else if (s.path.length === 0) {
            a._errors.push(t(s));
          } else {
            let e = a;
            let r = 0;
            while (r < s.path.length) {
              let a = s.path[r];
              if (r === s.path.length - 1) {
                e[a] = e[a] || {
                  _errors: []
                };
                e[a]._errors.push(t(s));
              } else {
                e[a] = e[a] || {
                  _errors: []
                };
              }
              e = e[a];
              r++;
            }
          }
        }
      };
      r(this);
      return a;
    }
    static assert(e) {
      if (!(e instanceof d)) {
        throw Error(`Not a ZodError: ${e}`);
      }
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, tt.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(e = e => e.message) {
      let t = {};
      let a = [];
      for (let r of this.issues) {
        if (r.path.length > 0) {
          t[r.path[0]] = t[r.path[0]] || [];
          t[r.path[0]].push(e(r));
        } else {
          a.push(e(r));
        }
      }
      return {
        formErrors: a,
        fieldErrors: t
      };
    }
    get formErrors() {
      return this.flatten();
    }
  }
  d.create = e => new d(e);
  let o = (e, t) => {
    let a;
    switch (e.code) {
      case n.invalid_type:
        a = e.received === s.undefined ? "Required" : `Expected ${e.expected}, received ${e.received}`;
        break;
      case n.invalid_literal:
        a = `Invalid literal value, expected ${JSON.stringify(e.expected, tt.jsonStringifyReplacer)}`;
        break;
      case n.unrecognized_keys:
        a = `Unrecognized key(s) in object: ${tt.joinValues(e.keys, ", ")}`;
        break;
      case n.invalid_union:
        a = "Invalid input";
        break;
      case n.invalid_union_discriminator:
        a = `Invalid discriminator value. Expected ${tt.joinValues(e.options)}`;
        break;
      case n.invalid_enum_value:
        a = `Invalid enum value. Expected ${tt.joinValues(e.options)}, received '${e.received}'`;
        break;
      case n.invalid_arguments:
        a = "Invalid function arguments";
        break;
      case n.invalid_return_type:
        a = "Invalid function return type";
        break;
      case n.invalid_date:
        a = "Invalid date";
        break;
      case n.invalid_string:
        if (typeof e.validation == "object") {
          if ("includes" in e.validation) {
            a = `Invalid input: must include "${e.validation.includes}"`;
            if (typeof e.validation.position == "number") {
              a = `${a} at one or more positions greater than or equal to ${e.validation.position}`;
            }
          } else if ("startsWith" in e.validation) {
            a = `Invalid input: must start with "${e.validation.startsWith}"`;
          } else if ("endsWith" in e.validation) {
            a = `Invalid input: must end with "${e.validation.endsWith}"`;
          } else {
            tt.assertNever(e.validation);
          }
        } else {
          a = e.validation !== "regex" ? `Invalid ${e.validation}` : "Invalid";
        }
        break;
      case n.too_small:
        a = e.type === "array" ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : "Invalid input";
        break;
      case n.too_big:
        a = e.type === "array" ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : "Invalid input";
        break;
      case n.custom:
        a = "Invalid input";
        break;
      case n.invalid_intersection_types:
        a = "Intersection results could not be merged";
        break;
      case n.not_multiple_of:
        a = `Number must be a multiple of ${e.multipleOf}`;
        break;
      case n.not_finite:
        a = "Number must be finite";
        break;
      default:
        a = t.defaultError;
        tt.assertNever(e);
    }
    return {
      message: a
    };
  };
  let u = o;
  function l() {
    return u;
  }
  let c = e => {
    let {
      data: t,
      path: a,
      errorMaps: r,
      issueData: s
    } = e;
    let i = [...a, ...(s.path || [])];
    let n = {
      ...s,
      path: i
    };
    if (s.message !== undefined) {
      return {
        ...s,
        path: i,
        message: s.message
      };
    }
    let d = "";
    for (let e of r.filter(e => !!e).slice().reverse()) {
      d = e(n, {
        data: t,
        defaultError: d
      }).message;
    }
    return {
      ...s,
      path: i,
      message: d
    };
  };
  function h(e, t) {
    let a = l();
    let r = c({
      issueData: t,
      data: e.data,
      path: e.path,
      errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, a, a === o ? undefined : o].filter(e => e)
    });
    e.common.issues.push(r);
  }
  class p {
    constructor() {
      this.value = "valid";
    }
    dirty() {
      if (this.value === "valid") {
        this.value = "dirty";
      }
    }
    abort() {
      if (this.value !== "aborted") {
        this.value = "aborted";
      }
    }
    static mergeArray(e, t) {
      let a = [];
      for (let r of t) {
        if (r.status === "aborted") {
          return m;
        }
        if (r.status === "dirty") {
          e.dirty();
        }
        a.push(r.value);
      }
      return {
        status: e.value,
        value: a
      };
    }
    static async mergeObjectAsync(e, t) {
      let a = [];
      for (let e of t) {
        let t = await e.key;
        let r = await e.value;
        a.push({
          key: t,
          value: r
        });
      }
      return p.mergeObjectSync(e, a);
    }
    static mergeObjectSync(e, t) {
      let a = {};
      for (let r of t) {
        let {
          key: t,
          value: s
        } = r;
        if (t.status === "aborted" || s.status === "aborted") {
          return m;
        }
        if (t.status === "dirty") {
          e.dirty();
        }
        if (s.status === "dirty") {
          e.dirty();
        }
        if (t.value !== "__proto__" && (s.value !== undefined || r.alwaysSet)) {
          a[t.value] = s.value;
        }
      }
      return {
        status: e.value,
        value: a
      };
    }
  }
  let m = Object.freeze({
    status: "aborted"
  });
  let f = e => ({
    status: "dirty",
    value: e
  });
  let _ = e => ({
    status: "valid",
    value: e
  });
  let y = e => e.status === "aborted";
  let v = e => e.status === "dirty";
  let g = e => e.status === "valid";
  let k = e => typeof Promise != "undefined" && e instanceof Promise;
  function b(e, t, a, r) {
    if (a === "a" && !r) {
      throw TypeError("Private accessor was defined without a getter");
    }
    if (typeof t == "function" ? e !== t || !r : !t.has(e)) {
      throw TypeError("Cannot read private member from an object whose class did not declare it");
    }
    if (a === "m") {
      return r;
    } else if (a === "a") {
      return r.call(e);
    } else if (r) {
      return r.value;
    } else {
      return t.get(e);
    }
  }
  function x(e, t, a, r, s) {
    if (r === "m") {
      throw TypeError("Private method is not writable");
    }
    if (r === "a" && !s) {
      throw TypeError("Private accessor was defined without a setter");
    }
    if (typeof t == "function" ? e !== t || !s : !t.has(e)) {
      throw TypeError("Cannot write private member to an object whose class did not declare it");
    }
    if (r === "a") {
      s.call(e, a);
    } else if (s) {
      s.value = a;
    } else {
      t.set(e, a);
    }
    return a;
  }
  if (typeof SuppressedError == "function") {
    SuppressedError;
  }
  (e7 = tr ||= {}).errToObj = e => typeof e == "string" ? {
    message: e
  } : e || {};
  e7.toString = e => typeof e == "string" ? e : e == null ? undefined : e.message;
  class w {
    constructor(e, t, a, r) {
      this._cachedPath = [];
      this.parent = e;
      this.data = t;
      this._path = a;
      this._key = r;
    }
    get path() {
      if (!this._cachedPath.length) {
        if (this._key instanceof Array) {
          this._cachedPath.push(...this._path, ...this._key);
        } else {
          this._cachedPath.push(...this._path, this._key);
        }
      }
      return this._cachedPath;
    }
  }
  let Z = (e, t) => {
    if (g(t)) {
      return {
        success: true,
        data: t.value
      };
    }
    if (!e.common.issues.length) {
      throw Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error) {
          return this._error;
        }
        let t = new d(e.common.issues);
        this._error = t;
        return this._error;
      }
    };
  };
  function T(e) {
    if (!e) {
      return {};
    }
    let {
      errorMap: t,
      invalid_type_error: a,
      required_error: r,
      description: s
    } = e;
    if (t && (a || r)) {
      throw Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
    }
    if (t) {
      return {
        errorMap: t,
        description: s
      };
    } else {
      return {
        errorMap: (t, s) => {
          let {
            message: d
          } = e;
          if (t.code === "invalid_enum_value") {
            return {
              message: d ?? s.defaultError
            };
          } else if (s.data === undefined) {
            return {
              message: d ?? r ?? s.defaultError
            };
          } else if (t.code !== "invalid_type") {
            return {
              message: s.defaultError
            };
          } else {
            return {
              message: d ?? a ?? s.defaultError
            };
          }
        },
        description: s
      };
    }
  }
  class O {
    constructor(e) {
      this.spa = this.safeParseAsync;
      this._def = e;
      this.parse = this.parse.bind(this);
      this.safeParse = this.safeParse.bind(this);
      this.parseAsync = this.parseAsync.bind(this);
      this.safeParseAsync = this.safeParseAsync.bind(this);
      this.spa = this.spa.bind(this);
      this.refine = this.refine.bind(this);
      this.refinement = this.refinement.bind(this);
      this.superRefine = this.superRefine.bind(this);
      this.optional = this.optional.bind(this);
      this.nullable = this.nullable.bind(this);
      this.nullish = this.nullish.bind(this);
      this.array = this.array.bind(this);
      this.promise = this.promise.bind(this);
      this.or = this.or.bind(this);
      this.and = this.and.bind(this);
      this.transform = this.transform.bind(this);
      this.brand = this.brand.bind(this);
      this.default = this.default.bind(this);
      this.catch = this.catch.bind(this);
      this.describe = this.describe.bind(this);
      this.pipe = this.pipe.bind(this);
      this.readonly = this.readonly.bind(this);
      this.isNullable = this.isNullable.bind(this);
      this.isOptional = this.isOptional.bind(this);
    }
    get description() {
      return this._def.description;
    }
    _getType(e) {
      return i(e.data);
    }
    _getOrReturnCtx(e, t) {
      return t || {
        common: e.parent.common,
        data: e.data,
        parsedType: i(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      };
    }
    _processInputParams(e) {
      return {
        status: new p(),
        ctx: {
          common: e.parent.common,
          data: e.data,
          parsedType: i(e.data),
          schemaErrorMap: this._def.errorMap,
          path: e.path,
          parent: e.parent
        }
      };
    }
    _parseSync(e) {
      let t = this._parse(e);
      if (k(t)) {
        throw Error("Synchronous parse encountered promise.");
      }
      return t;
    }
    _parseAsync(e) {
      return Promise.resolve(this._parse(e));
    }
    parse(e, t) {
      let a = this.safeParse(e, t);
      if (a.success) {
        return a.data;
      }
      throw a.error;
    }
    safeParse(e, t) {
      var a;
      let r = {
        common: {
          issues: [],
          async: (a = t == null ? undefined : t.async) !== null && a !== undefined && a,
          contextualErrorMap: t == null ? undefined : t.errorMap
        },
        path: (t == null ? undefined : t.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: i(e)
      };
      let s = this._parseSync({
        data: e,
        path: r.path,
        parent: r
      });
      return Z(r, s);
    }
    async parseAsync(e, t) {
      let a = await this.safeParseAsync(e, t);
      if (a.success) {
        return a.data;
      }
      throw a.error;
    }
    async safeParseAsync(e, t) {
      let a = {
        common: {
          issues: [],
          contextualErrorMap: t == null ? undefined : t.errorMap,
          async: true
        },
        path: (t == null ? undefined : t.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: i(e)
      };
      let r = this._parse({
        data: e,
        path: a.path,
        parent: a
      });
      return Z(a, await (k(r) ? r : Promise.resolve(r)));
    }
    refine(e, t) {
      let a = e => typeof t == "string" || t === undefined ? {
        message: t
      } : typeof t == "function" ? t(e) : t;
      return this._refinement((t, r) => {
        let s = e(t);
        let i = () => r.addIssue({
          code: n.custom,
          ...a(t)
        });
        if (typeof Promise != "undefined" && s instanceof Promise) {
          return s.then(e => !!e || (i(), false));
        } else {
          return !!s || (i(), false);
        }
      });
    }
    refinement(e, t) {
      return this._refinement((a, r) => !!e(a) || (r.addIssue(typeof t == "function" ? t(a, r) : t), false));
    }
    _refinement(e) {
      return new e_({
        schema: this,
        typeName: tn.ZodEffects,
        effect: {
          type: "refinement",
          refinement: e
        }
      });
    }
    superRefine(e) {
      return this._refinement(e);
    }
    optional() {
      return ey.create(this, this._def);
    }
    nullable() {
      return ev.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return Q.create(this, this._def);
    }
    promise() {
      return ef.create(this, this._def);
    }
    or(e) {
      return et.create([this, e], this._def);
    }
    and(e) {
      return es.create(this, e, this._def);
    }
    transform(e) {
      return new e_({
        ...T(this._def),
        schema: this,
        typeName: tn.ZodEffects,
        effect: {
          type: "transform",
          transform: e
        }
      });
    }
    default(e) {
      return new eg({
        ...T(this._def),
        innerType: this,
        defaultValue: typeof e == "function" ? e : () => e,
        typeName: tn.ZodDefault
      });
    }
    brand() {
      return new ew({
        typeName: tn.ZodBranded,
        type: this,
        ...T(this._def)
      });
    }
    catch(e) {
      return new ek({
        ...T(this._def),
        innerType: this,
        catchValue: typeof e == "function" ? e : () => e,
        typeName: tn.ZodCatch
      });
    }
    describe(e) {
      return new this.constructor({
        ...this._def,
        description: e
      });
    }
    pipe(e) {
      return eZ.create(this, e);
    }
    readonly() {
      return eT.create(this);
    }
    isOptional() {
      return this.safeParse(undefined).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  }
  let C = /^c[^\s-]{8,}$/i;
  let N = /^[0-9a-z]+$/;
  let S = /^[0-9A-HJKMNP-TV-Z]{26}$/;
  let E = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
  let j = /^[a-z0-9_-]{21}$/i;
  let I = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
  let P = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
  let R = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
  let A = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
  let $ = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  let M = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))";
  let L = RegExp(`^${M}$`);
  function D(e) {
    let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
    if (e.precision) {
      t = `${t}\\.\\d{${e.precision}}`;
    } else if (e.precision == null) {
      t = `${t}(\\.\\d+)?`;
    }
    return t;
  }
  function z(e) {
    let t = `${M}T${D(e)}`;
    let a = [];
    a.push(e.local ? "Z?" : "Z");
    if (e.offset) {
      a.push("([+-]\\d{2}:?\\d{2})");
    }
    t = `${t}(${a.join("|")})`;
    return RegExp(`^${t}$`);
  }
  class V extends O {
    _parse(e) {
      var t;
      var a;
      let i;
      if (this._def.coerce) {
        e.data = String(e.data);
      }
      if (this._getType(e) !== s.string) {
        let t = this._getOrReturnCtx(e);
        h(t, {
          code: n.invalid_type,
          expected: s.string,
          received: t.parsedType
        });
        return m;
      }
      let d = new p();
      for (let s of this._def.checks) {
        if (s.kind === "min") {
          if (e.data.length < s.value) {
            h(i = this._getOrReturnCtx(e, i), {
              code: n.too_small,
              minimum: s.value,
              type: "string",
              inclusive: true,
              exact: false,
              message: s.message
            });
            d.dirty();
          }
        } else if (s.kind === "max") {
          if (e.data.length > s.value) {
            h(i = this._getOrReturnCtx(e, i), {
              code: n.too_big,
              maximum: s.value,
              type: "string",
              inclusive: true,
              exact: false,
              message: s.message
            });
            d.dirty();
          }
        } else if (s.kind === "length") {
          let t = e.data.length > s.value;
          let a = e.data.length < s.value;
          if (t || a) {
            i = this._getOrReturnCtx(e, i);
            if (t) {
              h(i, {
                code: n.too_big,
                maximum: s.value,
                type: "string",
                inclusive: true,
                exact: true,
                message: s.message
              });
            } else if (a) {
              h(i, {
                code: n.too_small,
                minimum: s.value,
                type: "string",
                inclusive: true,
                exact: true,
                message: s.message
              });
            }
            d.dirty();
          }
        } else if (s.kind === "email") {
          if (!P.test(e.data)) {
            h(i = this._getOrReturnCtx(e, i), {
              validation: "email",
              code: n.invalid_string,
              message: s.message
            });
            d.dirty();
          }
        } else if (s.kind === "emoji") {
          r ||= RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
          if (!r.test(e.data)) {
            h(i = this._getOrReturnCtx(e, i), {
              validation: "emoji",
              code: n.invalid_string,
              message: s.message
            });
            d.dirty();
          }
        } else if (s.kind === "uuid") {
          if (!E.test(e.data)) {
            h(i = this._getOrReturnCtx(e, i), {
              validation: "uuid",
              code: n.invalid_string,
              message: s.message
            });
            d.dirty();
          }
        } else if (s.kind === "nanoid") {
          if (!j.test(e.data)) {
            h(i = this._getOrReturnCtx(e, i), {
              validation: "nanoid",
              code: n.invalid_string,
              message: s.message
            });
            d.dirty();
          }
        } else if (s.kind === "cuid") {
          if (!C.test(e.data)) {
            h(i = this._getOrReturnCtx(e, i), {
              validation: "cuid",
              code: n.invalid_string,
              message: s.message
            });
            d.dirty();
          }
        } else if (s.kind === "cuid2") {
          if (!N.test(e.data)) {
            h(i = this._getOrReturnCtx(e, i), {
              validation: "cuid2",
              code: n.invalid_string,
              message: s.message
            });
            d.dirty();
          }
        } else if (s.kind === "ulid") {
          if (!S.test(e.data)) {
            h(i = this._getOrReturnCtx(e, i), {
              validation: "ulid",
              code: n.invalid_string,
              message: s.message
            });
            d.dirty();
          }
        } else if (s.kind === "url") {
          try {
            new URL(e.data);
          } catch (t) {
            h(i = this._getOrReturnCtx(e, i), {
              validation: "url",
              code: n.invalid_string,
              message: s.message
            });
            d.dirty();
          }
        } else if (s.kind === "regex") {
          s.regex.lastIndex = 0;
          if (!s.regex.test(e.data)) {
            h(i = this._getOrReturnCtx(e, i), {
              validation: "regex",
              code: n.invalid_string,
              message: s.message
            });
            d.dirty();
          }
        } else if (s.kind === "trim") {
          e.data = e.data.trim();
        } else if (s.kind === "includes") {
          if (!e.data.includes(s.value, s.position)) {
            h(i = this._getOrReturnCtx(e, i), {
              code: n.invalid_string,
              validation: {
                includes: s.value,
                position: s.position
              },
              message: s.message
            });
            d.dirty();
          }
        } else if (s.kind === "toLowerCase") {
          e.data = e.data.toLowerCase();
        } else if (s.kind === "toUpperCase") {
          e.data = e.data.toUpperCase();
        } else if (s.kind === "startsWith") {
          if (!e.data.startsWith(s.value)) {
            h(i = this._getOrReturnCtx(e, i), {
              code: n.invalid_string,
              validation: {
                startsWith: s.value
              },
              message: s.message
            });
            d.dirty();
          }
        } else if (s.kind === "endsWith") {
          if (!e.data.endsWith(s.value)) {
            h(i = this._getOrReturnCtx(e, i), {
              code: n.invalid_string,
              validation: {
                endsWith: s.value
              },
              message: s.message
            });
            d.dirty();
          }
        } else if (s.kind === "datetime") {
          if (!z(s).test(e.data)) {
            h(i = this._getOrReturnCtx(e, i), {
              code: n.invalid_string,
              validation: "datetime",
              message: s.message
            });
            d.dirty();
          }
        } else if (s.kind === "date") {
          if (!L.test(e.data)) {
            h(i = this._getOrReturnCtx(e, i), {
              code: n.invalid_string,
              validation: "date",
              message: s.message
            });
            d.dirty();
          }
        } else if (s.kind === "time") {
          if (!RegExp(`^${D(s)}$`).test(e.data)) {
            h(i = this._getOrReturnCtx(e, i), {
              code: n.invalid_string,
              validation: "time",
              message: s.message
            });
            d.dirty();
          }
        } else if (s.kind === "duration") {
          if (!I.test(e.data)) {
            h(i = this._getOrReturnCtx(e, i), {
              validation: "duration",
              code: n.invalid_string,
              message: s.message
            });
            d.dirty();
          }
        } else if (s.kind === "ip") {
          t = e.data;
          if (((a = s.version) !== "v4" && !!a || !R.test(t)) && (a !== "v6" && !!a || !A.test(t))) {
            h(i = this._getOrReturnCtx(e, i), {
              validation: "ip",
              code: n.invalid_string,
              message: s.message
            });
            d.dirty();
          }
        } else if (s.kind === "base64") {
          if (!$.test(e.data)) {
            h(i = this._getOrReturnCtx(e, i), {
              validation: "base64",
              code: n.invalid_string,
              message: s.message
            });
            d.dirty();
          }
        } else {
          tt.assertNever(s);
        }
      }
      return {
        status: d.value,
        value: e.data
      };
    }
    _regex(e, t, a) {
      return this.refinement(t => e.test(t), {
        validation: t,
        code: n.invalid_string,
        ...tr.errToObj(a)
      });
    }
    _addCheck(e) {
      return new V({
        ...this._def,
        checks: [...this._def.checks, e]
      });
    }
    email(e) {
      return this._addCheck({
        kind: "email",
        ...tr.errToObj(e)
      });
    }
    url(e) {
      return this._addCheck({
        kind: "url",
        ...tr.errToObj(e)
      });
    }
    emoji(e) {
      return this._addCheck({
        kind: "emoji",
        ...tr.errToObj(e)
      });
    }
    uuid(e) {
      return this._addCheck({
        kind: "uuid",
        ...tr.errToObj(e)
      });
    }
    nanoid(e) {
      return this._addCheck({
        kind: "nanoid",
        ...tr.errToObj(e)
      });
    }
    cuid(e) {
      return this._addCheck({
        kind: "cuid",
        ...tr.errToObj(e)
      });
    }
    cuid2(e) {
      return this._addCheck({
        kind: "cuid2",
        ...tr.errToObj(e)
      });
    }
    ulid(e) {
      return this._addCheck({
        kind: "ulid",
        ...tr.errToObj(e)
      });
    }
    base64(e) {
      return this._addCheck({
        kind: "base64",
        ...tr.errToObj(e)
      });
    }
    ip(e) {
      return this._addCheck({
        kind: "ip",
        ...tr.errToObj(e)
      });
    }
    datetime(e) {
      var t;
      var a;
      if (typeof e == "string") {
        return this._addCheck({
          kind: "datetime",
          precision: null,
          offset: false,
          local: false,
          message: e
        });
      } else {
        return this._addCheck({
          kind: "datetime",
          precision: (e == null ? undefined : e.precision) === undefined ? null : e == null ? undefined : e.precision,
          offset: (t = e == null ? undefined : e.offset) !== null && t !== undefined && t,
          local: (a = e == null ? undefined : e.local) !== null && a !== undefined && a,
          ...tr.errToObj(e == null ? undefined : e.message)
        });
      }
    }
    date(e) {
      return this._addCheck({
        kind: "date",
        message: e
      });
    }
    time(e) {
      if (typeof e == "string") {
        return this._addCheck({
          kind: "time",
          precision: null,
          message: e
        });
      } else {
        return this._addCheck({
          kind: "time",
          precision: (e == null ? undefined : e.precision) === undefined ? null : e == null ? undefined : e.precision,
          ...tr.errToObj(e == null ? undefined : e.message)
        });
      }
    }
    duration(e) {
      return this._addCheck({
        kind: "duration",
        ...tr.errToObj(e)
      });
    }
    regex(e, t) {
      return this._addCheck({
        kind: "regex",
        regex: e,
        ...tr.errToObj(t)
      });
    }
    includes(e, t) {
      return this._addCheck({
        kind: "includes",
        value: e,
        position: t == null ? undefined : t.position,
        ...tr.errToObj(t == null ? undefined : t.message)
      });
    }
    startsWith(e, t) {
      return this._addCheck({
        kind: "startsWith",
        value: e,
        ...tr.errToObj(t)
      });
    }
    endsWith(e, t) {
      return this._addCheck({
        kind: "endsWith",
        value: e,
        ...tr.errToObj(t)
      });
    }
    min(e, t) {
      return this._addCheck({
        kind: "min",
        value: e,
        ...tr.errToObj(t)
      });
    }
    max(e, t) {
      return this._addCheck({
        kind: "max",
        value: e,
        ...tr.errToObj(t)
      });
    }
    length(e, t) {
      return this._addCheck({
        kind: "length",
        value: e,
        ...tr.errToObj(t)
      });
    }
    nonempty(e) {
      return this.min(1, tr.errToObj(e));
    }
    trim() {
      return new V({
        ...this._def,
        checks: [...this._def.checks, {
          kind: "trim"
        }]
      });
    }
    toLowerCase() {
      return new V({
        ...this._def,
        checks: [...this._def.checks, {
          kind: "toLowerCase"
        }]
      });
    }
    toUpperCase() {
      return new V({
        ...this._def,
        checks: [...this._def.checks, {
          kind: "toUpperCase"
        }]
      });
    }
    get isDatetime() {
      return !!this._def.checks.find(e => e.kind === "datetime");
    }
    get isDate() {
      return !!this._def.checks.find(e => e.kind === "date");
    }
    get isTime() {
      return !!this._def.checks.find(e => e.kind === "time");
    }
    get isDuration() {
      return !!this._def.checks.find(e => e.kind === "duration");
    }
    get isEmail() {
      return !!this._def.checks.find(e => e.kind === "email");
    }
    get isURL() {
      return !!this._def.checks.find(e => e.kind === "url");
    }
    get isEmoji() {
      return !!this._def.checks.find(e => e.kind === "emoji");
    }
    get isUUID() {
      return !!this._def.checks.find(e => e.kind === "uuid");
    }
    get isNANOID() {
      return !!this._def.checks.find(e => e.kind === "nanoid");
    }
    get isCUID() {
      return !!this._def.checks.find(e => e.kind === "cuid");
    }
    get isCUID2() {
      return !!this._def.checks.find(e => e.kind === "cuid2");
    }
    get isULID() {
      return !!this._def.checks.find(e => e.kind === "ulid");
    }
    get isIP() {
      return !!this._def.checks.find(e => e.kind === "ip");
    }
    get isBase64() {
      return !!this._def.checks.find(e => e.kind === "base64");
    }
    get minLength() {
      let e = null;
      for (let t of this._def.checks) {
        if (t.kind === "min" && (e === null || t.value > e)) {
          e = t.value;
        }
      }
      return e;
    }
    get maxLength() {
      let e = null;
      for (let t of this._def.checks) {
        if (t.kind === "max" && (e === null || t.value < e)) {
          e = t.value;
        }
      }
      return e;
    }
  }
  V.create = e => {
    var t;
    return new V({
      checks: [],
      typeName: tn.ZodString,
      coerce: (t = e == null ? undefined : e.coerce) !== null && t !== undefined && t,
      ...T(e)
    });
  };
  class U extends O {
    constructor() {
      super(...arguments);
      this.min = this.gte;
      this.max = this.lte;
      this.step = this.multipleOf;
    }
    _parse(e) {
      let t;
      if (this._def.coerce) {
        e.data = Number(e.data);
      }
      if (this._getType(e) !== s.number) {
        let t = this._getOrReturnCtx(e);
        h(t, {
          code: n.invalid_type,
          expected: s.number,
          received: t.parsedType
        });
        return m;
      }
      let a = new p();
      for (let r of this._def.checks) {
        if (r.kind === "int") {
          if (!tt.isInteger(e.data)) {
            h(t = this._getOrReturnCtx(e, t), {
              code: n.invalid_type,
              expected: "integer",
              received: "float",
              message: r.message
            });
            a.dirty();
          }
        } else if (r.kind === "min") {
          if (r.inclusive ? e.data < r.value : e.data <= r.value) {
            h(t = this._getOrReturnCtx(e, t), {
              code: n.too_small,
              minimum: r.value,
              type: "number",
              inclusive: r.inclusive,
              exact: false,
              message: r.message
            });
            a.dirty();
          }
        } else if (r.kind === "max") {
          if (r.inclusive ? e.data > r.value : e.data >= r.value) {
            h(t = this._getOrReturnCtx(e, t), {
              code: n.too_big,
              maximum: r.value,
              type: "number",
              inclusive: r.inclusive,
              exact: false,
              message: r.message
            });
            a.dirty();
          }
        } else if (r.kind === "multipleOf") {
          if (function (e, t) {
            let a = (e.toString().split(".")[1] || "").length;
            let r = (t.toString().split(".")[1] || "").length;
            let s = a > r ? a : r;
            return parseInt(e.toFixed(s).replace(".", "")) % parseInt(t.toFixed(s).replace(".", "")) / Math.pow(10, s);
          }(e.data, r.value) !== 0) {
            h(t = this._getOrReturnCtx(e, t), {
              code: n.not_multiple_of,
              multipleOf: r.value,
              message: r.message
            });
            a.dirty();
          }
        } else if (r.kind === "finite") {
          if (!Number.isFinite(e.data)) {
            h(t = this._getOrReturnCtx(e, t), {
              code: n.not_finite,
              message: r.message
            });
            a.dirty();
          }
        } else {
          tt.assertNever(r);
        }
      }
      return {
        status: a.value,
        value: e.data
      };
    }
    gte(e, t) {
      return this.setLimit("min", e, true, tr.toString(t));
    }
    gt(e, t) {
      return this.setLimit("min", e, false, tr.toString(t));
    }
    lte(e, t) {
      return this.setLimit("max", e, true, tr.toString(t));
    }
    lt(e, t) {
      return this.setLimit("max", e, false, tr.toString(t));
    }
    setLimit(e, t, a, r) {
      return new U({
        ...this._def,
        checks: [...this._def.checks, {
          kind: e,
          value: t,
          inclusive: a,
          message: tr.toString(r)
        }]
      });
    }
    _addCheck(e) {
      return new U({
        ...this._def,
        checks: [...this._def.checks, e]
      });
    }
    int(e) {
      return this._addCheck({
        kind: "int",
        message: tr.toString(e)
      });
    }
    positive(e) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: false,
        message: tr.toString(e)
      });
    }
    negative(e) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: false,
        message: tr.toString(e)
      });
    }
    nonpositive(e) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: true,
        message: tr.toString(e)
      });
    }
    nonnegative(e) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: true,
        message: tr.toString(e)
      });
    }
    multipleOf(e, t) {
      return this._addCheck({
        kind: "multipleOf",
        value: e,
        message: tr.toString(t)
      });
    }
    finite(e) {
      return this._addCheck({
        kind: "finite",
        message: tr.toString(e)
      });
    }
    safe(e) {
      return this._addCheck({
        kind: "min",
        inclusive: true,
        value: Number.MIN_SAFE_INTEGER,
        message: tr.toString(e)
      })._addCheck({
        kind: "max",
        inclusive: true,
        value: Number.MAX_SAFE_INTEGER,
        message: tr.toString(e)
      });
    }
    get minValue() {
      let e = null;
      for (let t of this._def.checks) {
        if (t.kind === "min" && (e === null || t.value > e)) {
          e = t.value;
        }
      }
      return e;
    }
    get maxValue() {
      let e = null;
      for (let t of this._def.checks) {
        if (t.kind === "max" && (e === null || t.value < e)) {
          e = t.value;
        }
      }
      return e;
    }
    get isInt() {
      return !!this._def.checks.find(e => e.kind === "int" || e.kind === "multipleOf" && tt.isInteger(e.value));
    }
    get isFinite() {
      let e = null;
      let t = null;
      for (let a of this._def.checks) {
        if (a.kind === "finite" || a.kind === "int" || a.kind === "multipleOf") {
          return true;
        }
        if (a.kind === "min") {
          if (t === null || a.value > t) {
            t = a.value;
          }
        } else if (a.kind === "max" && (e === null || a.value < e)) {
          e = a.value;
        }
      }
      return Number.isFinite(t) && Number.isFinite(e);
    }
  }
  U.create = e => new U({
    checks: [],
    typeName: tn.ZodNumber,
    coerce: (e == null ? undefined : e.coerce) || false,
    ...T(e)
  });
  class K extends O {
    constructor() {
      super(...arguments);
      this.min = this.gte;
      this.max = this.lte;
    }
    _parse(e) {
      let t;
      if (this._def.coerce) {
        e.data = BigInt(e.data);
      }
      if (this._getType(e) !== s.bigint) {
        let t = this._getOrReturnCtx(e);
        h(t, {
          code: n.invalid_type,
          expected: s.bigint,
          received: t.parsedType
        });
        return m;
      }
      let a = new p();
      for (let r of this._def.checks) {
        if (r.kind === "min") {
          if (r.inclusive ? e.data < r.value : e.data <= r.value) {
            h(t = this._getOrReturnCtx(e, t), {
              code: n.too_small,
              type: "bigint",
              minimum: r.value,
              inclusive: r.inclusive,
              message: r.message
            });
            a.dirty();
          }
        } else if (r.kind === "max") {
          if (r.inclusive ? e.data > r.value : e.data >= r.value) {
            h(t = this._getOrReturnCtx(e, t), {
              code: n.too_big,
              type: "bigint",
              maximum: r.value,
              inclusive: r.inclusive,
              message: r.message
            });
            a.dirty();
          }
        } else if (r.kind === "multipleOf") {
          if (e.data % r.value !== BigInt(0)) {
            h(t = this._getOrReturnCtx(e, t), {
              code: n.not_multiple_of,
              multipleOf: r.value,
              message: r.message
            });
            a.dirty();
          }
        } else {
          tt.assertNever(r);
        }
      }
      return {
        status: a.value,
        value: e.data
      };
    }
    gte(e, t) {
      return this.setLimit("min", e, true, tr.toString(t));
    }
    gt(e, t) {
      return this.setLimit("min", e, false, tr.toString(t));
    }
    lte(e, t) {
      return this.setLimit("max", e, true, tr.toString(t));
    }
    lt(e, t) {
      return this.setLimit("max", e, false, tr.toString(t));
    }
    setLimit(e, t, a, r) {
      return new K({
        ...this._def,
        checks: [...this._def.checks, {
          kind: e,
          value: t,
          inclusive: a,
          message: tr.toString(r)
        }]
      });
    }
    _addCheck(e) {
      return new K({
        ...this._def,
        checks: [...this._def.checks, e]
      });
    }
    positive(e) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: false,
        message: tr.toString(e)
      });
    }
    negative(e) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: false,
        message: tr.toString(e)
      });
    }
    nonpositive(e) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: true,
        message: tr.toString(e)
      });
    }
    nonnegative(e) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: true,
        message: tr.toString(e)
      });
    }
    multipleOf(e, t) {
      return this._addCheck({
        kind: "multipleOf",
        value: e,
        message: tr.toString(t)
      });
    }
    get minValue() {
      let e = null;
      for (let t of this._def.checks) {
        if (t.kind === "min" && (e === null || t.value > e)) {
          e = t.value;
        }
      }
      return e;
    }
    get maxValue() {
      let e = null;
      for (let t of this._def.checks) {
        if (t.kind === "max" && (e === null || t.value < e)) {
          e = t.value;
        }
      }
      return e;
    }
  }
  K.create = e => {
    var t;
    return new K({
      checks: [],
      typeName: tn.ZodBigInt,
      coerce: (t = e == null ? undefined : e.coerce) !== null && t !== undefined && t,
      ...T(e)
    });
  };
  class B extends O {
    _parse(e) {
      if (this._def.coerce) {
        e.data = !!e.data;
      }
      if (this._getType(e) !== s.boolean) {
        let t = this._getOrReturnCtx(e);
        h(t, {
          code: n.invalid_type,
          expected: s.boolean,
          received: t.parsedType
        });
        return m;
      }
      return _(e.data);
    }
  }
  B.create = e => new B({
    typeName: tn.ZodBoolean,
    coerce: (e == null ? undefined : e.coerce) || false,
    ...T(e)
  });
  class W extends O {
    _parse(e) {
      let t;
      if (this._def.coerce) {
        e.data = new Date(e.data);
      }
      if (this._getType(e) !== s.date) {
        let t = this._getOrReturnCtx(e);
        h(t, {
          code: n.invalid_type,
          expected: s.date,
          received: t.parsedType
        });
        return m;
      }
      if (isNaN(e.data.getTime())) {
        h(this._getOrReturnCtx(e), {
          code: n.invalid_date
        });
        return m;
      }
      let a = new p();
      for (let r of this._def.checks) {
        if (r.kind === "min") {
          if (e.data.getTime() < r.value) {
            h(t = this._getOrReturnCtx(e, t), {
              code: n.too_small,
              message: r.message,
              inclusive: true,
              exact: false,
              minimum: r.value,
              type: "date"
            });
            a.dirty();
          }
        } else if (r.kind === "max") {
          if (e.data.getTime() > r.value) {
            h(t = this._getOrReturnCtx(e, t), {
              code: n.too_big,
              message: r.message,
              inclusive: true,
              exact: false,
              maximum: r.value,
              type: "date"
            });
            a.dirty();
          }
        } else {
          tt.assertNever(r);
        }
      }
      return {
        status: a.value,
        value: new Date(e.data.getTime())
      };
    }
    _addCheck(e) {
      return new W({
        ...this._def,
        checks: [...this._def.checks, e]
      });
    }
    min(e, t) {
      return this._addCheck({
        kind: "min",
        value: e.getTime(),
        message: tr.toString(t)
      });
    }
    max(e, t) {
      return this._addCheck({
        kind: "max",
        value: e.getTime(),
        message: tr.toString(t)
      });
    }
    get minDate() {
      let e = null;
      for (let t of this._def.checks) {
        if (t.kind === "min" && (e === null || t.value > e)) {
          e = t.value;
        }
      }
      if (e != null) {
        return new Date(e);
      } else {
        return null;
      }
    }
    get maxDate() {
      let e = null;
      for (let t of this._def.checks) {
        if (t.kind === "max" && (e === null || t.value < e)) {
          e = t.value;
        }
      }
      if (e != null) {
        return new Date(e);
      } else {
        return null;
      }
    }
  }
  W.create = e => new W({
    checks: [],
    coerce: (e == null ? undefined : e.coerce) || false,
    typeName: tn.ZodDate,
    ...T(e)
  });
  class F extends O {
    _parse(e) {
      if (this._getType(e) !== s.symbol) {
        let t = this._getOrReturnCtx(e);
        h(t, {
          code: n.invalid_type,
          expected: s.symbol,
          received: t.parsedType
        });
        return m;
      }
      return _(e.data);
    }
  }
  F.create = e => new F({
    typeName: tn.ZodSymbol,
    ...T(e)
  });
  class q extends O {
    _parse(e) {
      if (this._getType(e) !== s.undefined) {
        let t = this._getOrReturnCtx(e);
        h(t, {
          code: n.invalid_type,
          expected: s.undefined,
          received: t.parsedType
        });
        return m;
      }
      return _(e.data);
    }
  }
  q.create = e => new q({
    typeName: tn.ZodUndefined,
    ...T(e)
  });
  class H extends O {
    _parse(e) {
      if (this._getType(e) !== s.null) {
        let t = this._getOrReturnCtx(e);
        h(t, {
          code: n.invalid_type,
          expected: s.null,
          received: t.parsedType
        });
        return m;
      }
      return _(e.data);
    }
  }
  H.create = e => new H({
    typeName: tn.ZodNull,
    ...T(e)
  });
  class J extends O {
    constructor() {
      super(...arguments);
      this._any = true;
    }
    _parse(e) {
      return _(e.data);
    }
  }
  J.create = e => new J({
    typeName: tn.ZodAny,
    ...T(e)
  });
  class Y extends O {
    constructor() {
      super(...arguments);
      this._unknown = true;
    }
    _parse(e) {
      return _(e.data);
    }
  }
  Y.create = e => new Y({
    typeName: tn.ZodUnknown,
    ...T(e)
  });
  class G extends O {
    _parse(e) {
      let t = this._getOrReturnCtx(e);
      h(t, {
        code: n.invalid_type,
        expected: s.never,
        received: t.parsedType
      });
      return m;
    }
  }
  G.create = e => new G({
    typeName: tn.ZodNever,
    ...T(e)
  });
  class X extends O {
    _parse(e) {
      if (this._getType(e) !== s.undefined) {
        let t = this._getOrReturnCtx(e);
        h(t, {
          code: n.invalid_type,
          expected: s.void,
          received: t.parsedType
        });
        return m;
      }
      return _(e.data);
    }
  }
  X.create = e => new X({
    typeName: tn.ZodVoid,
    ...T(e)
  });
  class Q extends O {
    _parse(e) {
      let {
        ctx: t,
        status: a
      } = this._processInputParams(e);
      let r = this._def;
      if (t.parsedType !== s.array) {
        h(t, {
          code: n.invalid_type,
          expected: s.array,
          received: t.parsedType
        });
        return m;
      }
      if (r.exactLength !== null) {
        let e = t.data.length > r.exactLength.value;
        let s = t.data.length < r.exactLength.value;
        if (e || s) {
          h(t, {
            code: e ? n.too_big : n.too_small,
            minimum: s ? r.exactLength.value : undefined,
            maximum: e ? r.exactLength.value : undefined,
            type: "array",
            inclusive: true,
            exact: true,
            message: r.exactLength.message
          });
          a.dirty();
        }
      }
      if (r.minLength !== null && t.data.length < r.minLength.value) {
        h(t, {
          code: n.too_small,
          minimum: r.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: r.minLength.message
        });
        a.dirty();
      }
      if (r.maxLength !== null && t.data.length > r.maxLength.value) {
        h(t, {
          code: n.too_big,
          maximum: r.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: r.maxLength.message
        });
        a.dirty();
      }
      if (t.common.async) {
        return Promise.all([...t.data].map((e, a) => r.type._parseAsync(new w(t, e, t.path, a)))).then(e => p.mergeArray(a, e));
      }
      let i = [...t.data].map((e, a) => r.type._parseSync(new w(t, e, t.path, a)));
      return p.mergeArray(a, i);
    }
    get element() {
      return this._def.type;
    }
    min(e, t) {
      return new Q({
        ...this._def,
        minLength: {
          value: e,
          message: tr.toString(t)
        }
      });
    }
    max(e, t) {
      return new Q({
        ...this._def,
        maxLength: {
          value: e,
          message: tr.toString(t)
        }
      });
    }
    length(e, t) {
      return new Q({
        ...this._def,
        exactLength: {
          value: e,
          message: tr.toString(t)
        }
      });
    }
    nonempty(e) {
      return this.min(1, e);
    }
  }
  Q.create = (e, t) => new Q({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: tn.ZodArray,
    ...T(t)
  });
  class ee extends O {
    constructor() {
      super(...arguments);
      this._cached = null;
      this.nonstrict = this.passthrough;
      this.augment = this.extend;
    }
    _getCached() {
      if (this._cached !== null) {
        return this._cached;
      }
      let e = this._def.shape();
      let t = tt.objectKeys(e);
      return this._cached = {
        shape: e,
        keys: t
      };
    }
    _parse(e) {
      if (this._getType(e) !== s.object) {
        let t = this._getOrReturnCtx(e);
        h(t, {
          code: n.invalid_type,
          expected: s.object,
          received: t.parsedType
        });
        return m;
      }
      let {
        status: t,
        ctx: a
      } = this._processInputParams(e);
      let {
        shape: r,
        keys: i
      } = this._getCached();
      let d = [];
      if (!(this._def.catchall instanceof G) || this._def.unknownKeys !== "strip") {
        for (let e in a.data) {
          if (!i.includes(e)) {
            d.push(e);
          }
        }
      }
      let o = [];
      for (let e of i) {
        let t = r[e];
        let s = a.data[e];
        o.push({
          key: {
            status: "valid",
            value: e
          },
          value: t._parse(new w(a, s, a.path, e)),
          alwaysSet: e in a.data
        });
      }
      if (this._def.catchall instanceof G) {
        let e = this._def.unknownKeys;
        if (e === "passthrough") {
          for (let e of d) {
            o.push({
              key: {
                status: "valid",
                value: e
              },
              value: {
                status: "valid",
                value: a.data[e]
              }
            });
          }
        } else if (e === "strict") {
          if (d.length > 0) {
            h(a, {
              code: n.unrecognized_keys,
              keys: d
            });
            t.dirty();
          }
        } else if (e === "strip") ;else {
          throw Error("Internal ZodObject error: invalid unknownKeys value.");
        }
      } else {
        let e = this._def.catchall;
        for (let t of d) {
          let r = a.data[t];
          o.push({
            key: {
              status: "valid",
              value: t
            },
            value: e._parse(new w(a, r, a.path, t)),
            alwaysSet: t in a.data
          });
        }
      }
      if (a.common.async) {
        return Promise.resolve().then(async () => {
          let e = [];
          for (let t of o) {
            let a = await t.key;
            let r = await t.value;
            e.push({
              key: a,
              value: r,
              alwaysSet: t.alwaysSet
            });
          }
          return e;
        }).then(e => p.mergeObjectSync(t, e));
      } else {
        return p.mergeObjectSync(t, o);
      }
    }
    get shape() {
      return this._def.shape();
    }
    strict(e) {
      tr.errToObj;
      return new ee({
        ...this._def,
        unknownKeys: "strict",
        ...(e !== undefined ? {
          errorMap: (t, a) => {
            var r;
            var s;
            let d = ((s = (r = this._def).errorMap) === null || s === undefined ? undefined : s.call(r, t, a).message) ?? a.defaultError;
            if (t.code === "unrecognized_keys") {
              return {
                message: tr.errToObj(e).message ?? d
              };
            } else {
              return {
                message: d
              };
            }
          }
        } : {})
      });
    }
    strip() {
      return new ee({
        ...this._def,
        unknownKeys: "strip"
      });
    }
    passthrough() {
      return new ee({
        ...this._def,
        unknownKeys: "passthrough"
      });
    }
    extend(e) {
      return new ee({
        ...this._def,
        shape: () => ({
          ...this._def.shape(),
          ...e
        })
      });
    }
    merge(e) {
      return new ee({
        unknownKeys: e._def.unknownKeys,
        catchall: e._def.catchall,
        shape: () => ({
          ...this._def.shape(),
          ...e._def.shape()
        }),
        typeName: tn.ZodObject
      });
    }
    setKey(e, t) {
      return this.augment({
        [e]: t
      });
    }
    catchall(e) {
      return new ee({
        ...this._def,
        catchall: e
      });
    }
    pick(e) {
      let t = {};
      tt.objectKeys(e).forEach(a => {
        if (e[a] && this.shape[a]) {
          t[a] = this.shape[a];
        }
      });
      return new ee({
        ...this._def,
        shape: () => t
      });
    }
    omit(e) {
      let t = {};
      tt.objectKeys(this.shape).forEach(a => {
        if (!e[a]) {
          t[a] = this.shape[a];
        }
      });
      return new ee({
        ...this._def,
        shape: () => t
      });
    }
    deepPartial() {
      return function e(t) {
        if (t instanceof ee) {
          let a = {};
          for (let r in t.shape) {
            let s = t.shape[r];
            a[r] = ey.create(e(s));
          }
          return new ee({
            ...t._def,
            shape: () => a
          });
        }
        if (t instanceof Q) {
          return new Q({
            ...t._def,
            type: e(t.element)
          });
        }
        if (t instanceof ey) {
          return ey.create(e(t.unwrap()));
        }
        if (t instanceof ev) {
          return ev.create(e(t.unwrap()));
        }
        if (t instanceof ei) {
          return ei.create(t.items.map(t => e(t)));
        } else {
          return t;
        }
      }(this);
    }
    partial(e) {
      let t = {};
      tt.objectKeys(this.shape).forEach(a => {
        let r = this.shape[a];
        if (e && !e[a]) {
          t[a] = r;
        } else {
          t[a] = r.optional();
        }
      });
      return new ee({
        ...this._def,
        shape: () => t
      });
    }
    required(e) {
      let t = {};
      tt.objectKeys(this.shape).forEach(a => {
        if (e && !e[a]) {
          t[a] = this.shape[a];
        } else {
          let e = this.shape[a];
          while (e instanceof ey) {
            e = e._def.innerType;
          }
          t[a] = e;
        }
      });
      return new ee({
        ...this._def,
        shape: () => t
      });
    }
    keyof() {
      return eh(tt.objectKeys(this.shape));
    }
  }
  ee.create = (e, t) => new ee({
    shape: () => e,
    unknownKeys: "strip",
    catchall: G.create(),
    typeName: tn.ZodObject,
    ...T(t)
  });
  ee.strictCreate = (e, t) => new ee({
    shape: () => e,
    unknownKeys: "strict",
    catchall: G.create(),
    typeName: tn.ZodObject,
    ...T(t)
  });
  ee.lazycreate = (e, t) => new ee({
    shape: e,
    unknownKeys: "strip",
    catchall: G.create(),
    typeName: tn.ZodObject,
    ...T(t)
  });
  class et extends O {
    _parse(e) {
      let {
        ctx: t
      } = this._processInputParams(e);
      let a = this._def.options;
      if (t.common.async) {
        return Promise.all(a.map(async e => {
          let a = {
            ...t,
            common: {
              ...t.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await e._parseAsync({
              data: t.data,
              path: t.path,
              parent: a
            }),
            ctx: a
          };
        })).then(function (e) {
          for (let t of e) {
            if (t.result.status === "valid") {
              return t.result;
            }
          }
          for (let a of e) {
            if (a.result.status === "dirty") {
              t.common.issues.push(...a.ctx.common.issues);
              return a.result;
            }
          }
          let a = e.map(e => new d(e.ctx.common.issues));
          h(t, {
            code: n.invalid_union,
            unionErrors: a
          });
          return m;
        });
      }
      {
        let e;
        let r = [];
        for (let s of a) {
          let a = {
            ...t,
            common: {
              ...t.common,
              issues: []
            },
            parent: null
          };
          let i = s._parseSync({
            data: t.data,
            path: t.path,
            parent: a
          });
          if (i.status === "valid") {
            return i;
          }
          if (i.status === "dirty" && !e) {
            e = {
              result: i,
              ctx: a
            };
          }
          if (a.common.issues.length) {
            r.push(a.common.issues);
          }
        }
        if (e) {
          t.common.issues.push(...e.ctx.common.issues);
          return e.result;
        }
        let s = r.map(e => new d(e));
        h(t, {
          code: n.invalid_union,
          unionErrors: s
        });
        return m;
      }
    }
    get options() {
      return this._def.options;
    }
  }
  et.create = (e, t) => new et({
    options: e,
    typeName: tn.ZodUnion,
    ...T(t)
  });
  let ea = e => {
    if (e instanceof el) {
      return ea(e.schema);
    }
    if (e instanceof e_) {
      return ea(e.innerType());
    }
    if (e instanceof ec) {
      return [e.value];
    }
    if (e instanceof ep) {
      return e.options;
    }
    if (e instanceof em) {
      return tt.objectValues(e.enum);
    } else if (e instanceof eg) {
      return ea(e._def.innerType);
    } else if (e instanceof q) {
      return [undefined];
    } else if (e instanceof H) {
      return [null];
    } else if (e instanceof ey) {
      return [undefined, ...ea(e.unwrap())];
    } else if (e instanceof ev) {
      return [null, ...ea(e.unwrap())];
    } else if (e instanceof ew) {
      return ea(e.unwrap());
    } else if (e instanceof eT) {
      return ea(e.unwrap());
    } else if (e instanceof ek) {
      return ea(e._def.innerType);
    } else {
      return [];
    }
  };
  class er extends O {
    _parse(e) {
      let {
        ctx: t
      } = this._processInputParams(e);
      if (t.parsedType !== s.object) {
        h(t, {
          code: n.invalid_type,
          expected: s.object,
          received: t.parsedType
        });
        return m;
      }
      let a = this.discriminator;
      let r = t.data[a];
      let i = this.optionsMap.get(r);
      if (i) {
        if (t.common.async) {
          return i._parseAsync({
            data: t.data,
            path: t.path,
            parent: t
          });
        } else {
          return i._parseSync({
            data: t.data,
            path: t.path,
            parent: t
          });
        }
      } else {
        h(t, {
          code: n.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [a]
        });
        return m;
      }
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get options() {
      return this._def.options;
    }
    get optionsMap() {
      return this._def.optionsMap;
    }
    static create(e, t, a) {
      let r = new Map();
      for (let a of t) {
        let t = ea(a.shape[e]);
        if (!t.length) {
          throw Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
        }
        for (let s of t) {
          if (r.has(s)) {
            throw Error(`Discriminator property ${String(e)} has duplicate value ${String(s)}`);
          }
          r.set(s, a);
        }
      }
      return new er({
        typeName: tn.ZodDiscriminatedUnion,
        discriminator: e,
        options: t,
        optionsMap: r,
        ...T(a)
      });
    }
  }
  class es extends O {
    _parse(e) {
      let {
        status: t,
        ctx: a
      } = this._processInputParams(e);
      let r = (e, r) => {
        if (y(e) || y(r)) {
          return m;
        }
        let d = function e(t, a) {
          let r = i(t);
          let n = i(a);
          if (t === a) {
            return {
              valid: true,
              data: t
            };
          }
          if (r === s.object && n === s.object) {
            let r = tt.objectKeys(a);
            let s = tt.objectKeys(t).filter(e => r.indexOf(e) !== -1);
            let i = {
              ...t,
              ...a
            };
            for (let r of s) {
              let s = e(t[r], a[r]);
              if (!s.valid) {
                return {
                  valid: false
                };
              }
              i[r] = s.data;
            }
            return {
              valid: true,
              data: i
            };
          }
          if (r === s.array && n === s.array) {
            if (t.length !== a.length) {
              return {
                valid: false
              };
            }
            let r = [];
            for (let s = 0; s < t.length; s++) {
              let i = e(t[s], a[s]);
              if (!i.valid) {
                return {
                  valid: false
                };
              }
              r.push(i.data);
            }
            return {
              valid: true,
              data: r
            };
          }
          if (r === s.date && n === s.date && +t == +a) {
            return {
              valid: true,
              data: t
            };
          }
          return {
            valid: false
          };
        }(e.value, r.value);
        if (d.valid) {
          if (v(e) || v(r)) {
            t.dirty();
          }
          return {
            status: t.value,
            value: d.data
          };
        } else {
          h(a, {
            code: n.invalid_intersection_types
          });
          return m;
        }
      };
      if (a.common.async) {
        return Promise.all([this._def.left._parseAsync({
          data: a.data,
          path: a.path,
          parent: a
        }), this._def.right._parseAsync({
          data: a.data,
          path: a.path,
          parent: a
        })]).then(([e, t]) => r(e, t));
      } else {
        return r(this._def.left._parseSync({
          data: a.data,
          path: a.path,
          parent: a
        }), this._def.right._parseSync({
          data: a.data,
          path: a.path,
          parent: a
        }));
      }
    }
  }
  es.create = (e, t, a) => new es({
    left: e,
    right: t,
    typeName: tn.ZodIntersection,
    ...T(a)
  });
  class ei extends O {
    _parse(e) {
      let {
        status: t,
        ctx: a
      } = this._processInputParams(e);
      if (a.parsedType !== s.array) {
        h(a, {
          code: n.invalid_type,
          expected: s.array,
          received: a.parsedType
        });
        return m;
      }
      if (a.data.length < this._def.items.length) {
        h(a, {
          code: n.too_small,
          minimum: this._def.items.length,
          inclusive: true,
          exact: false,
          type: "array"
        });
        return m;
      }
      if (!this._def.rest && a.data.length > this._def.items.length) {
        h(a, {
          code: n.too_big,
          maximum: this._def.items.length,
          inclusive: true,
          exact: false,
          type: "array"
        });
        t.dirty();
      }
      let r = [...a.data].map((e, t) => {
        let r = this._def.items[t] || this._def.rest;
        if (r) {
          return r._parse(new w(a, e, a.path, t));
        } else {
          return null;
        }
      }).filter(e => !!e);
      if (a.common.async) {
        return Promise.all(r).then(e => p.mergeArray(t, e));
      } else {
        return p.mergeArray(t, r);
      }
    }
    get items() {
      return this._def.items;
    }
    rest(e) {
      return new ei({
        ...this._def,
        rest: e
      });
    }
  }
  ei.create = (e, t) => {
    if (!Array.isArray(e)) {
      throw Error("You must pass an array of schemas to z.tuple([ ... ])");
    }
    return new ei({
      items: e,
      typeName: tn.ZodTuple,
      rest: null,
      ...T(t)
    });
  };
  class en extends O {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      let {
        status: t,
        ctx: a
      } = this._processInputParams(e);
      if (a.parsedType !== s.object) {
        h(a, {
          code: n.invalid_type,
          expected: s.object,
          received: a.parsedType
        });
        return m;
      }
      let r = [];
      let i = this._def.keyType;
      let d = this._def.valueType;
      for (let e in a.data) {
        r.push({
          key: i._parse(new w(a, e, a.path, e)),
          value: d._parse(new w(a, a.data[e], a.path, e)),
          alwaysSet: e in a.data
        });
      }
      if (a.common.async) {
        return p.mergeObjectAsync(t, r);
      } else {
        return p.mergeObjectSync(t, r);
      }
    }
    get element() {
      return this._def.valueType;
    }
    static create(e, t, a) {
      return new en(t instanceof O ? {
        keyType: e,
        valueType: t,
        typeName: tn.ZodRecord,
        ...T(a)
      } : {
        keyType: V.create(),
        valueType: e,
        typeName: tn.ZodRecord,
        ...T(t)
      });
    }
  }
  class ed extends O {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      let {
        status: t,
        ctx: a
      } = this._processInputParams(e);
      if (a.parsedType !== s.map) {
        h(a, {
          code: n.invalid_type,
          expected: s.map,
          received: a.parsedType
        });
        return m;
      }
      let r = this._def.keyType;
      let i = this._def.valueType;
      let d = [...a.data.entries()].map(([e, t], s) => ({
        key: r._parse(new w(a, e, a.path, [s, "key"])),
        value: i._parse(new w(a, t, a.path, [s, "value"]))
      }));
      if (a.common.async) {
        let e = new Map();
        return Promise.resolve().then(async () => {
          for (let a of d) {
            let r = await a.key;
            let s = await a.value;
            if (r.status === "aborted" || s.status === "aborted") {
              return m;
            }
            if (r.status === "dirty" || s.status === "dirty") {
              t.dirty();
            }
            e.set(r.value, s.value);
          }
          return {
            status: t.value,
            value: e
          };
        });
      }
      {
        let e = new Map();
        for (let a of d) {
          let r = a.key;
          let s = a.value;
          if (r.status === "aborted" || s.status === "aborted") {
            return m;
          }
          if (r.status === "dirty" || s.status === "dirty") {
            t.dirty();
          }
          e.set(r.value, s.value);
        }
        return {
          status: t.value,
          value: e
        };
      }
    }
  }
  ed.create = (e, t, a) => new ed({
    valueType: t,
    keyType: e,
    typeName: tn.ZodMap,
    ...T(a)
  });
  class eo extends O {
    _parse(e) {
      let {
        status: t,
        ctx: a
      } = this._processInputParams(e);
      if (a.parsedType !== s.set) {
        h(a, {
          code: n.invalid_type,
          expected: s.set,
          received: a.parsedType
        });
        return m;
      }
      let r = this._def;
      if (r.minSize !== null && a.data.size < r.minSize.value) {
        h(a, {
          code: n.too_small,
          minimum: r.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: r.minSize.message
        });
        t.dirty();
      }
      if (r.maxSize !== null && a.data.size > r.maxSize.value) {
        h(a, {
          code: n.too_big,
          maximum: r.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: r.maxSize.message
        });
        t.dirty();
      }
      let i = this._def.valueType;
      function d(e) {
        let a = new Set();
        for (let r of e) {
          if (r.status === "aborted") {
            return m;
          }
          if (r.status === "dirty") {
            t.dirty();
          }
          a.add(r.value);
        }
        return {
          status: t.value,
          value: a
        };
      }
      let o = [...a.data.values()].map((e, t) => i._parse(new w(a, e, a.path, t)));
      if (a.common.async) {
        return Promise.all(o).then(e => d(e));
      } else {
        return d(o);
      }
    }
    min(e, t) {
      return new eo({
        ...this._def,
        minSize: {
          value: e,
          message: tr.toString(t)
        }
      });
    }
    max(e, t) {
      return new eo({
        ...this._def,
        maxSize: {
          value: e,
          message: tr.toString(t)
        }
      });
    }
    size(e, t) {
      return this.min(e, t).max(e, t);
    }
    nonempty(e) {
      return this.min(1, e);
    }
  }
  eo.create = (e, t) => new eo({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: tn.ZodSet,
    ...T(t)
  });
  class eu extends O {
    constructor() {
      super(...arguments);
      this.validate = this.implement;
    }
    _parse(e) {
      let {
        ctx: t
      } = this._processInputParams(e);
      if (t.parsedType !== s.function) {
        h(t, {
          code: n.invalid_type,
          expected: s.function,
          received: t.parsedType
        });
        return m;
      }
      function a(e, a) {
        return c({
          data: e,
          path: t.path,
          errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, l(), o].filter(e => e),
          issueData: {
            code: n.invalid_arguments,
            argumentsError: a
          }
        });
      }
      function r(e, a) {
        return c({
          data: e,
          path: t.path,
          errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, l(), o].filter(e => e),
          issueData: {
            code: n.invalid_return_type,
            returnTypeError: a
          }
        });
      }
      let i = {
        errorMap: t.common.contextualErrorMap
      };
      let u = t.data;
      if (this._def.returns instanceof ef) {
        let e = this;
        return _(async function (...t) {
          let s = new d([]);
          let n = await e._def.args.parseAsync(t, i).catch(e => {
            s.addIssue(a(t, e));
            throw s;
          });
          let o = await Reflect.apply(u, this, n);
          return await e._def.returns._def.type.parseAsync(o, i).catch(e => {
            s.addIssue(r(o, e));
            throw s;
          });
        });
      }
      {
        let e = this;
        return _(function (...t) {
          let s = e._def.args.safeParse(t, i);
          if (!s.success) {
            throw new d([a(t, s.error)]);
          }
          let n = Reflect.apply(u, this, s.data);
          let o = e._def.returns.safeParse(n, i);
          if (!o.success) {
            throw new d([r(n, o.error)]);
          }
          return o.data;
        });
      }
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...e) {
      return new eu({
        ...this._def,
        args: ei.create(e).rest(Y.create())
      });
    }
    returns(e) {
      return new eu({
        ...this._def,
        returns: e
      });
    }
    implement(e) {
      return this.parse(e);
    }
    strictImplement(e) {
      return this.parse(e);
    }
    static create(e, t, a) {
      return new eu({
        args: e || ei.create([]).rest(Y.create()),
        returns: t || Y.create(),
        typeName: tn.ZodFunction,
        ...T(a)
      });
    }
  }
  class el extends O {
    get schema() {
      return this._def.getter();
    }
    _parse(e) {
      let {
        ctx: t
      } = this._processInputParams(e);
      return this._def.getter()._parse({
        data: t.data,
        path: t.path,
        parent: t
      });
    }
  }
  el.create = (e, t) => new el({
    getter: e,
    typeName: tn.ZodLazy,
    ...T(t)
  });
  class ec extends O {
    _parse(e) {
      if (e.data !== this._def.value) {
        let t = this._getOrReturnCtx(e);
        h(t, {
          received: t.data,
          code: n.invalid_literal,
          expected: this._def.value
        });
        return m;
      }
      return {
        status: "valid",
        value: e.data
      };
    }
    get value() {
      return this._def.value;
    }
  }
  function eh(e, t) {
    return new ep({
      values: e,
      typeName: tn.ZodEnum,
      ...T(t)
    });
  }
  ec.create = (e, t) => new ec({
    value: e,
    typeName: tn.ZodLiteral,
    ...T(t)
  });
  class ep extends O {
    constructor() {
      super(...arguments);
      ts.set(this, undefined);
    }
    _parse(e) {
      if (typeof e.data != "string") {
        let t = this._getOrReturnCtx(e);
        let a = this._def.values;
        h(t, {
          expected: tt.joinValues(a),
          received: t.parsedType,
          code: n.invalid_type
        });
        return m;
      }
      if (!b(this, ts, "f")) {
        x(this, ts, new Set(this._def.values), "f");
      }
      if (!b(this, ts, "f").has(e.data)) {
        let t = this._getOrReturnCtx(e);
        let a = this._def.values;
        h(t, {
          received: t.data,
          code: n.invalid_enum_value,
          options: a
        });
        return m;
      }
      return _(e.data);
    }
    get options() {
      return this._def.values;
    }
    get enum() {
      let e = {};
      for (let t of this._def.values) {
        e[t] = t;
      }
      return e;
    }
    get Values() {
      let e = {};
      for (let t of this._def.values) {
        e[t] = t;
      }
      return e;
    }
    get Enum() {
      let e = {};
      for (let t of this._def.values) {
        e[t] = t;
      }
      return e;
    }
    extract(e, t = this._def) {
      return ep.create(e, {
        ...this._def,
        ...t
      });
    }
    exclude(e, t = this._def) {
      return ep.create(this.options.filter(t => !e.includes(t)), {
        ...this._def,
        ...t
      });
    }
  }
  ts = new WeakMap();
  ep.create = eh;
  class em extends O {
    constructor() {
      super(...arguments);
      ti.set(this, undefined);
    }
    _parse(e) {
      let t = tt.getValidEnumValues(this._def.values);
      let a = this._getOrReturnCtx(e);
      if (a.parsedType !== s.string && a.parsedType !== s.number) {
        let e = tt.objectValues(t);
        h(a, {
          expected: tt.joinValues(e),
          received: a.parsedType,
          code: n.invalid_type
        });
        return m;
      }
      if (!b(this, ti, "f")) {
        x(this, ti, new Set(tt.getValidEnumValues(this._def.values)), "f");
      }
      if (!b(this, ti, "f").has(e.data)) {
        let e = tt.objectValues(t);
        h(a, {
          received: a.data,
          code: n.invalid_enum_value,
          options: e
        });
        return m;
      }
      return _(e.data);
    }
    get enum() {
      return this._def.values;
    }
  }
  ti = new WeakMap();
  em.create = (e, t) => new em({
    values: e,
    typeName: tn.ZodNativeEnum,
    ...T(t)
  });
  class ef extends O {
    unwrap() {
      return this._def.type;
    }
    _parse(e) {
      let {
        ctx: t
      } = this._processInputParams(e);
      if (t.parsedType !== s.promise && t.common.async === false) {
        h(t, {
          code: n.invalid_type,
          expected: s.promise,
          received: t.parsedType
        });
        return m;
      } else {
        return _((t.parsedType === s.promise ? t.data : Promise.resolve(t.data)).then(e => this._def.type.parseAsync(e, {
          path: t.path,
          errorMap: t.common.contextualErrorMap
        })));
      }
    }
  }
  ef.create = (e, t) => new ef({
    type: e,
    typeName: tn.ZodPromise,
    ...T(t)
  });
  class e_ extends O {
    innerType() {
      return this._def.schema;
    }
    sourceType() {
      if (this._def.schema._def.typeName === tn.ZodEffects) {
        return this._def.schema.sourceType();
      } else {
        return this._def.schema;
      }
    }
    _parse(e) {
      let {
        status: t,
        ctx: a
      } = this._processInputParams(e);
      let r = this._def.effect || null;
      let s = {
        addIssue: e => {
          h(a, e);
          if (e.fatal) {
            t.abort();
          } else {
            t.dirty();
          }
        },
        get path() {
          return a.path;
        }
      };
      s.addIssue = s.addIssue.bind(s);
      if (r.type === "preprocess") {
        let e = r.transform(a.data, s);
        if (a.common.async) {
          return Promise.resolve(e).then(async e => {
            if (t.value === "aborted") {
              return m;
            }
            let r = await this._def.schema._parseAsync({
              data: e,
              path: a.path,
              parent: a
            });
            if (r.status === "aborted") {
              return m;
            } else if (r.status === "dirty" || t.value === "dirty") {
              return f(r.value);
            } else {
              return r;
            }
          });
        }
        {
          if (t.value === "aborted") {
            return m;
          }
          let r = this._def.schema._parseSync({
            data: e,
            path: a.path,
            parent: a
          });
          if (r.status === "aborted") {
            return m;
          } else if (r.status === "dirty" || t.value === "dirty") {
            return f(r.value);
          } else {
            return r;
          }
        }
      }
      if (r.type === "refinement") {
        let e = e => {
          let t = r.refinement(e, s);
          if (a.common.async) {
            return Promise.resolve(t);
          }
          if (t instanceof Promise) {
            throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
          }
          return e;
        };
        if (a.common.async !== false) {
          return this._def.schema._parseAsync({
            data: a.data,
            path: a.path,
            parent: a
          }).then(a => a.status === "aborted" ? m : (a.status === "dirty" && t.dirty(), e(a.value).then(() => ({
            status: t.value,
            value: a.value
          }))));
        }
        {
          let r = this._def.schema._parseSync({
            data: a.data,
            path: a.path,
            parent: a
          });
          if (r.status === "aborted") {
            return m;
          } else {
            if (r.status === "dirty") {
              t.dirty();
            }
            e(r.value);
            return {
              status: t.value,
              value: r.value
            };
          }
        }
      }
      if (r.type === "transform") {
        if (a.common.async !== false) {
          return this._def.schema._parseAsync({
            data: a.data,
            path: a.path,
            parent: a
          }).then(e => g(e) ? Promise.resolve(r.transform(e.value, s)).then(e => ({
            status: t.value,
            value: e
          })) : e);
        }
        {
          let e = this._def.schema._parseSync({
            data: a.data,
            path: a.path,
            parent: a
          });
          if (!g(e)) {
            return e;
          }
          let i = r.transform(e.value, s);
          if (i instanceof Promise) {
            throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
          }
          return {
            status: t.value,
            value: i
          };
        }
      }
      tt.assertNever(r);
    }
  }
  e_.create = (e, t, a) => new e_({
    schema: e,
    typeName: tn.ZodEffects,
    effect: t,
    ...T(a)
  });
  e_.createWithPreprocess = (e, t, a) => new e_({
    schema: t,
    effect: {
      type: "preprocess",
      transform: e
    },
    typeName: tn.ZodEffects,
    ...T(a)
  });
  class ey extends O {
    _parse(e) {
      if (this._getType(e) === s.undefined) {
        return _(undefined);
      } else {
        return this._def.innerType._parse(e);
      }
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  ey.create = (e, t) => new ey({
    innerType: e,
    typeName: tn.ZodOptional,
    ...T(t)
  });
  class ev extends O {
    _parse(e) {
      if (this._getType(e) === s.null) {
        return _(null);
      } else {
        return this._def.innerType._parse(e);
      }
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  ev.create = (e, t) => new ev({
    innerType: e,
    typeName: tn.ZodNullable,
    ...T(t)
  });
  class eg extends O {
    _parse(e) {
      let {
        ctx: t
      } = this._processInputParams(e);
      let a = t.data;
      if (t.parsedType === s.undefined) {
        a = this._def.defaultValue();
      }
      return this._def.innerType._parse({
        data: a,
        path: t.path,
        parent: t
      });
    }
    removeDefault() {
      return this._def.innerType;
    }
  }
  eg.create = (e, t) => new eg({
    innerType: e,
    typeName: tn.ZodDefault,
    defaultValue: typeof t.default == "function" ? t.default : () => t.default,
    ...T(t)
  });
  class ek extends O {
    _parse(e) {
      let {
        ctx: t
      } = this._processInputParams(e);
      let a = {
        ...t,
        common: {
          ...t.common,
          issues: []
        }
      };
      let r = this._def.innerType._parse({
        data: a.data,
        path: a.path,
        parent: {
          ...a
        }
      });
      if (k(r)) {
        return r.then(e => ({
          status: "valid",
          value: e.status === "valid" ? e.value : this._def.catchValue({
            get error() {
              return new d(a.common.issues);
            },
            input: a.data
          })
        }));
      } else {
        return {
          status: "valid",
          value: r.status === "valid" ? r.value : this._def.catchValue({
            get error() {
              return new d(a.common.issues);
            },
            input: a.data
          })
        };
      }
    }
    removeCatch() {
      return this._def.innerType;
    }
  }
  ek.create = (e, t) => new ek({
    innerType: e,
    typeName: tn.ZodCatch,
    catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
    ...T(t)
  });
  class eb extends O {
    _parse(e) {
      if (this._getType(e) !== s.nan) {
        let t = this._getOrReturnCtx(e);
        h(t, {
          code: n.invalid_type,
          expected: s.nan,
          received: t.parsedType
        });
        return m;
      }
      return {
        status: "valid",
        value: e.data
      };
    }
  }
  eb.create = e => new eb({
    typeName: tn.ZodNaN,
    ...T(e)
  });
  let ex = Symbol("zod_brand");
  class ew extends O {
    _parse(e) {
      let {
        ctx: t
      } = this._processInputParams(e);
      let a = t.data;
      return this._def.type._parse({
        data: a,
        path: t.path,
        parent: t
      });
    }
    unwrap() {
      return this._def.type;
    }
  }
  class eZ extends O {
    _parse(e) {
      let {
        status: t,
        ctx: a
      } = this._processInputParams(e);
      if (a.common.async) {
        return (async () => {
          let e = await this._def.in._parseAsync({
            data: a.data,
            path: a.path,
            parent: a
          });
          if (e.status === "aborted") {
            return m;
          } else if (e.status === "dirty") {
            t.dirty();
            return f(e.value);
          } else {
            return this._def.out._parseAsync({
              data: e.value,
              path: a.path,
              parent: a
            });
          }
        })();
      }
      {
        let e = this._def.in._parseSync({
          data: a.data,
          path: a.path,
          parent: a
        });
        if (e.status === "aborted") {
          return m;
        } else if (e.status === "dirty") {
          t.dirty();
          return {
            status: "dirty",
            value: e.value
          };
        } else {
          return this._def.out._parseSync({
            data: e.value,
            path: a.path,
            parent: a
          });
        }
      }
    }
    static create(e, t) {
      return new eZ({
        in: e,
        out: t,
        typeName: tn.ZodPipeline
      });
    }
  }
  class eT extends O {
    _parse(e) {
      let t = this._def.innerType._parse(e);
      let a = e => {
        if (g(e)) {
          e.value = Object.freeze(e.value);
        }
        return e;
      };
      if (k(t)) {
        return t.then(e => a(e));
      } else {
        return a(t);
      }
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  function eO(e, t = {}, a) {
    if (e) {
      return J.create().superRefine((r, s) => {
        var n;
        if (!e(r)) {
          let e = typeof t == "function" ? t(r) : typeof t == "string" ? {
            message: t
          } : t;
          let d = (n = e.fatal ?? a) === null || n === undefined || n;
          let o = typeof e == "string" ? {
            message: e
          } : e;
          s.addIssue({
            code: "custom",
            ...o,
            fatal: d
          });
        }
      });
    } else {
      return J.create();
    }
  }
  eT.create = (e, t) => new eT({
    innerType: e,
    typeName: tn.ZodReadonly,
    ...T(t)
  });
  let eC = {
    object: ee.lazycreate
  };
  (te = tn ||= {}).ZodString = "ZodString";
  te.ZodNumber = "ZodNumber";
  te.ZodNaN = "ZodNaN";
  te.ZodBigInt = "ZodBigInt";
  te.ZodBoolean = "ZodBoolean";
  te.ZodDate = "ZodDate";
  te.ZodSymbol = "ZodSymbol";
  te.ZodUndefined = "ZodUndefined";
  te.ZodNull = "ZodNull";
  te.ZodAny = "ZodAny";
  te.ZodUnknown = "ZodUnknown";
  te.ZodNever = "ZodNever";
  te.ZodVoid = "ZodVoid";
  te.ZodArray = "ZodArray";
  te.ZodObject = "ZodObject";
  te.ZodUnion = "ZodUnion";
  te.ZodDiscriminatedUnion = "ZodDiscriminatedUnion";
  te.ZodIntersection = "ZodIntersection";
  te.ZodTuple = "ZodTuple";
  te.ZodRecord = "ZodRecord";
  te.ZodMap = "ZodMap";
  te.ZodSet = "ZodSet";
  te.ZodFunction = "ZodFunction";
  te.ZodLazy = "ZodLazy";
  te.ZodLiteral = "ZodLiteral";
  te.ZodEnum = "ZodEnum";
  te.ZodEffects = "ZodEffects";
  te.ZodNativeEnum = "ZodNativeEnum";
  te.ZodOptional = "ZodOptional";
  te.ZodNullable = "ZodNullable";
  te.ZodDefault = "ZodDefault";
  te.ZodCatch = "ZodCatch";
  te.ZodPromise = "ZodPromise";
  te.ZodBranded = "ZodBranded";
  te.ZodPipeline = "ZodPipeline";
  te.ZodReadonly = "ZodReadonly";
  let eN = V.create;
  let eS = U.create;
  let eE = eb.create;
  let ej = K.create;
  let eI = B.create;
  let eP = W.create;
  let eR = F.create;
  let eA = q.create;
  let e$ = H.create;
  let eM = J.create;
  let eL = Y.create;
  let eD = G.create;
  let ez = X.create;
  let eV = Q.create;
  let eU = ee.create;
  let eK = ee.strictCreate;
  let eB = et.create;
  let eW = er.create;
  let eF = es.create;
  let eq = ei.create;
  let eH = en.create;
  let eJ = ed.create;
  let eY = eo.create;
  let eG = eu.create;
  let eX = el.create;
  let eQ = ec.create;
  let e0 = ep.create;
  let e1 = em.create;
  let e9 = ef.create;
  let e2 = e_.create;
  let e4 = ey.create;
  let e5 = ev.create;
  let e6 = e_.createWithPreprocess;
  let e3 = eZ.create;
  var e8;
  var e7;
  var te;
  var tt;
  var ta;
  var tr;
  var ts;
  var ti;
  var tn;
  var td = Object.freeze({
    __proto__: null,
    defaultErrorMap: o,
    setErrorMap: function (e) {
      u = e;
    },
    getErrorMap: l,
    makeIssue: c,
    EMPTY_PATH: [],
    addIssueToContext: h,
    ParseStatus: p,
    INVALID: m,
    DIRTY: f,
    OK: _,
    isAborted: y,
    isDirty: v,
    isValid: g,
    isAsync: k,
    get util() {
      return tt;
    },
    get objectUtil() {
      return ta;
    },
    ZodParsedType: s,
    getParsedType: i,
    ZodType: O,
    datetimeRegex: z,
    ZodString: V,
    ZodNumber: U,
    ZodBigInt: K,
    ZodBoolean: B,
    ZodDate: W,
    ZodSymbol: F,
    ZodUndefined: q,
    ZodNull: H,
    ZodAny: J,
    ZodUnknown: Y,
    ZodNever: G,
    ZodVoid: X,
    ZodArray: Q,
    ZodObject: ee,
    ZodUnion: et,
    ZodDiscriminatedUnion: er,
    ZodIntersection: es,
    ZodTuple: ei,
    ZodRecord: en,
    ZodMap: ed,
    ZodSet: eo,
    ZodFunction: eu,
    ZodLazy: el,
    ZodLiteral: ec,
    ZodEnum: ep,
    ZodNativeEnum: em,
    ZodPromise: ef,
    ZodEffects: e_,
    ZodTransformer: e_,
    ZodOptional: ey,
    ZodNullable: ev,
    ZodDefault: eg,
    ZodCatch: ek,
    ZodNaN: eb,
    BRAND: ex,
    ZodBranded: ew,
    ZodPipeline: eZ,
    ZodReadonly: eT,
    custom: eO,
    Schema: O,
    ZodSchema: O,
    late: eC,
    get ZodFirstPartyTypeKind() {
      return tn;
    },
    coerce: {
      string: e => V.create({
        ...e,
        coerce: true
      }),
      number: e => U.create({
        ...e,
        coerce: true
      }),
      boolean: e => B.create({
        ...e,
        coerce: true
      }),
      bigint: e => K.create({
        ...e,
        coerce: true
      }),
      date: e => W.create({
        ...e,
        coerce: true
      })
    },
    any: eM,
    array: eV,
    bigint: ej,
    boolean: eI,
    date: eP,
    discriminatedUnion: eW,
    effect: e2,
    enum: e0,
    function: eG,
    instanceof: (e, t = {
      message: `Input not instance of ${e.name}`
    }) => eO(t => t instanceof e, t),
    intersection: eF,
    lazy: eX,
    literal: eQ,
    map: eJ,
    nan: eE,
    nativeEnum: e1,
    never: eD,
    null: e$,
    nullable: e5,
    number: eS,
    object: eU,
    oboolean: () => eI().optional(),
    onumber: () => eS().optional(),
    optional: e4,
    ostring: () => eN().optional(),
    pipeline: e3,
    preprocess: e6,
    promise: e9,
    record: eH,
    set: eY,
    strictObject: eK,
    string: eN,
    symbol: eR,
    transformer: e2,
    tuple: eq,
    undefined: eA,
    union: eB,
    unknown: eL,
    void: ez,
    NEVER: m,
    ZodIssueCode: n,
    quotelessJson: e => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:"),
    ZodError: d
  });
  require.d(exports, {
    zod: function () {
      return td;
    }
  });
}