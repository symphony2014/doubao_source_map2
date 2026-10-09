// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'SchemaValidator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_schema.e09e7e82.js
         * chunkId: 99280
         * moduleId: 342110
         */
module.exports = function (module, exports, require) {
  function i(e) {
    return encodeURI(e.replace(/~/g, "~0").replace(/\//g, "~1"));
  }
  let a = {
    prefixItems: true,
    items: true,
    allOf: true,
    anyOf: true,
    oneOf: true
  };
  let o = {
    $defs: true,
    definitions: true,
    properties: true,
    patternProperties: true,
    dependentSchemas: true
  };
  let n = {
    id: true,
    $id: true,
    $ref: true,
    $schema: true,
    $anchor: true,
    $vocabulary: true,
    $comment: true,
    default: true,
    enum: true,
    const: true,
    required: true,
    type: true,
    maximum: true,
    minimum: true,
    exclusiveMaximum: true,
    exclusiveMinimum: true,
    multipleOf: true,
    maxLength: true,
    minLength: true,
    pattern: true,
    format: true,
    maxItems: true,
    minItems: true,
    uniqueItems: true,
    maxProperties: true,
    minProperties: true
  };
  let d = typeof self != "undefined" && self.location ? new URL(self.location.origin + self.location.pathname + location.search) : new URL("https://github.com/cfworker");
  function s(e, t = Object.create(null), r = d, l = "") {
    if (e && typeof e == "object" && !Array.isArray(e)) {
      let i = e.$id || e.id;
      if (i) {
        let a = new URL(i, r.href);
        if (a.hash.length > 1) {
          t[a.href] = e;
        } else {
          a.hash = "";
          if (l === "") {
            r = a;
          } else {
            s(e, t, r);
          }
        }
      }
    } else if (e !== true && e !== false) {
      return t;
    }
    let u = r.href + (l ? "#" + l : "");
    if (t[u] !== undefined) {
      throw Error(`Duplicate schema URI "${u}".`);
    }
    t[u] = e;
    if (e === true || e === false) {
      return t;
    }
    if (e.__absolute_uri__ === undefined) {
      Object.defineProperty(e, "__absolute_uri__", {
        enumerable: false,
        value: u
      });
    }
    if (e.$ref && e.__absolute_ref__ === undefined) {
      let t = new URL(e.$ref, r.href);
      t.hash = t.hash;
      Object.defineProperty(e, "__absolute_ref__", {
        enumerable: false,
        value: t.href
      });
    }
    if (e.$recursiveRef && e.__absolute_recursive_ref__ === undefined) {
      let t = new URL(e.$recursiveRef, r.href);
      t.hash = t.hash;
      Object.defineProperty(e, "__absolute_recursive_ref__", {
        enumerable: false,
        value: t.href
      });
    }
    if (e.$anchor) {
      t[new URL("#" + e.$anchor, r.href).href] = e;
    }
    for (let d in e) {
      if (n[d]) {
        continue;
      }
      let u = `${l}/${i(d)}`;
      let c = e[d];
      if (Array.isArray(c)) {
        if (a[d]) {
          let e = c.length;
          for (let i = 0; i < e; i++) {
            s(c[i], t, r, `${u}/${i}`);
          }
        }
      } else if (o[d]) {
        for (let e in c) {
          s(c[e], t, r, `${u}/${i(e)}`);
        }
      } else {
        s(c, t, r, u);
      }
    }
    return t;
  }
  function l(e, t) {
    let r = typeof e;
    if (r !== typeof t) {
      return false;
    }
    if (Array.isArray(e)) {
      if (!Array.isArray(t)) {
        return false;
      }
      let r = e.length;
      if (r !== t.length) {
        return false;
      }
      for (let i = 0; i < r; i++) {
        if (!l(e[i], t[i])) {
          return false;
        }
      }
      return true;
    }
    if (r === "object") {
      if (!e || !t) {
        return e === t;
      }
      let r = Object.keys(e);
      let i = Object.keys(t);
      if (r.length !== i.length) {
        return false;
      }
      for (let i of r) {
        if (!l(e[i], t[i])) {
          return false;
        }
      }
      return true;
    }
    return e === t;
  }
  let u = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
  let c = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let f = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;
  function m(e) {
    return e.test.bind(e);
  }
  let p = {
    date: h,
    time: y.bind(undefined, false),
    "date-time": function (e) {
      let t = e.split($);
      return t.length == 2 && h(t[0]) && y(true, t[1]);
    },
    duration: e => e.length > 1 && e.length < 80 && (/^P\d+([.,]\d+)?W$/.test(e) || /^P[\dYMDTHS]*(\d[.,]\d+)?[YMDHS]$/.test(e) && /^P([.,\d]+Y)?([.,\d]+M)?([.,\d]+D)?(T([.,\d]+H)?([.,\d]+M)?([.,\d]+S)?)?$/.test(e)),
    uri: function (e) {
      return g.test(e) && b.test(e);
    },
    "uri-reference": m(/^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i),
    "uri-template": m(/^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i),
    url: m(/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u{00a1}-\u{ffff}0-9]+-?)*[a-z\u{00a1}-\u{ffff}0-9]+)(?:\.(?:[a-z\u{00a1}-\u{ffff}0-9]+-?)*[a-z\u{00a1}-\u{ffff}0-9]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu),
    email: e => {
      if (e[0] === "\"") {
        return false;
      }
      let [t, r, ...i] = e.split("@");
      return !!t && !!r && i.length === 0 && !(t.length > 64) && !(r.length > 253) && t[0] !== "." && !t.endsWith(".") && !t.includes("..") && !!/^[a-z0-9.-]+$/i.test(r) && !!/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+$/i.test(t) && r.split(".").every(e => /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/i.test(e));
    },
    hostname: m(/^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i),
    ipv4: m(/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/),
    ipv6: m(/^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i),
    regex: function (e) {
      if (v.test(e)) {
        return false;
      }
      try {
        new RegExp(e);
        return true;
      } catch (e) {
        return false;
      }
    },
    uuid: m(/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i),
    "json-pointer": m(/^(?:\/(?:[^~/]|~0|~1)*)*$/),
    "json-pointer-uri-fragment": m(/^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i),
    "relative-json-pointer": m(/^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/),
    date: m(/^\d\d\d\d-[0-1]\d-[0-3]\d$/),
    time: m(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i),
    "date-time": m(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i),
    "uri-reference": m(/^(?:(?:[a-z][a-z0-9+-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i)
  };
  function h(e) {
    var t;
    let r = e.match(u);
    if (!r) {
      return false;
    }
    let i = +r[1];
    let a = +r[2];
    let o = +r[3];
    return a >= 1 && a <= 12 && o >= 1 && o <= (a == 2 && (t = i) % 4 == 0 && (t % 100 != 0 || t % 400 == 0) ? 29 : c[a]);
  }
  function y(e, t) {
    let r = t.match(f);
    if (!r) {
      return false;
    }
    let i = +r[1];
    let a = +r[2];
    let o = +r[3];
    let n = !!r[5];
    return (i <= 23 && a <= 59 && o <= 59 || i == 23 && a == 59 && o == 60) && (!e || n);
  }
  let $ = /t|\s/i;
  let g = /\/|:/;
  let b = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  let v = /[^\\]\\Z/;
  class w {
    constructor(e, t = "2019-09", r = true) {
      this.schema = e;
      this.draft = t;
      this.shortCircuit = r;
      this.lookup = s(e);
    }
    validate(e) {
      return function e(t, r, a = "2019-09", o = s(r), n = true, d = null, u = "#", c = "#", f = Object.create(null)) {
        let m;
        if (r === true) {
          return {
            valid: true,
            errors: []
          };
        }
        if (r === false) {
          return {
            valid: false,
            errors: [{
              instanceLocation: u,
              keyword: "false",
              keywordLocation: u,
              error: "False boolean schema."
            }]
          };
        }
        let h = typeof t;
        switch (h) {
          case "boolean":
          case "number":
          case "string":
            m = h;
            break;
          case "object":
            m = t === null ? "null" : Array.isArray(t) ? "array" : "object";
            break;
          default:
            throw Error(`Instances of "${h}" type are not supported.`);
        }
        let {
          $ref: y,
          $recursiveRef: $,
          $recursiveAnchor: g,
          type: b,
          const: v,
          enum: w,
          required: k,
          not: S,
          anyOf: _,
          allOf: x,
          oneOf: I,
          if: T,
          then: O,
          else: L,
          format: R,
          properties: j,
          patternProperties: A,
          additionalProperties: V,
          unevaluatedProperties: z,
          minProperties: H,
          maxProperties: E,
          propertyNames: P,
          dependentRequired: q,
          dependentSchemas: N,
          dependencies: C,
          prefixItems: D,
          items: M,
          additionalItems: B,
          unevaluatedItems: U,
          contains: G,
          minContains: W,
          maxContains: K,
          minItems: F,
          maxItems: Z,
          uniqueItems: X,
          minimum: J,
          maximum: Q,
          exclusiveMinimum: Y,
          exclusiveMaximum: ee,
          multipleOf: et,
          minLength: er,
          maxLength: ei,
          pattern: ea,
          __absolute_ref__: eo,
          __absolute_recursive_ref__: en
        } = r;
        let ed = [];
        if (g === true && d === null) {
          d = r;
        }
        if ($ === "#") {
          let i = d === null ? o[en] : d;
          let s = `${c}/$recursiveRef`;
          let l = e(t, d === null ? r : d, a, o, n, i, u, s, f);
          if (!l.valid) {
            ed.push({
              instanceLocation: u,
              keyword: "$recursiveRef",
              keywordLocation: s,
              error: "A subschema had errors."
            }, ...l.errors);
          }
        }
        if (y !== undefined) {
          let r = o[eo || y];
          if (r === undefined) {
            let e = `Unresolved $ref "${y}".`;
            if (eo && eo !== y) {
              e += `  Absolute URI "${eo}".`;
            }
            throw Error(e += `
Known schemas:
- ${Object.keys(o).join("\n- ")}`);
          }
          let i = `${c}/$ref`;
          let s = e(t, r, a, o, n, d, u, i, f);
          if (!s.valid) {
            ed.push({
              instanceLocation: u,
              keyword: "$ref",
              keywordLocation: i,
              error: "A subschema had errors."
            }, ...s.errors);
          }
          if (a === "4" || a === "7") {
            return {
              valid: ed.length === 0,
              errors: ed
            };
          }
        }
        if (Array.isArray(b)) {
          let e = b.length;
          let r = false;
          for (let i = 0; i < e; i++) {
            if (m === b[i] || b[i] === "integer" && m === "number" && t % 1 == 0 && t == t) {
              r = true;
              break;
            }
          }
          if (!r) {
            ed.push({
              instanceLocation: u,
              keyword: "type",
              keywordLocation: `${c}/type`,
              error: `Instance type "${m}" is invalid. Expected "${b.join("\", \"")}".`
            });
          }
        } else if (b === "integer") {
          if (m !== "number" || t % 1 || t != t) {
            ed.push({
              instanceLocation: u,
              keyword: "type",
              keywordLocation: `${c}/type`,
              error: `Instance type "${m}" is invalid. Expected "${b}".`
            });
          }
        } else if (b !== undefined && m !== b) {
          ed.push({
            instanceLocation: u,
            keyword: "type",
            keywordLocation: `${c}/type`,
            error: `Instance type "${m}" is invalid. Expected "${b}".`
          });
        }
        if (v !== undefined) {
          if (m === "object" || m === "array") {
            if (!l(t, v)) {
              ed.push({
                instanceLocation: u,
                keyword: "const",
                keywordLocation: `${c}/const`,
                error: `Instance does not match ${JSON.stringify(v)}.`
              });
            }
          } else if (t !== v) {
            ed.push({
              instanceLocation: u,
              keyword: "const",
              keywordLocation: `${c}/const`,
              error: `Instance does not match ${JSON.stringify(v)}.`
            });
          }
        }
        if (w !== undefined) {
          if (m === "object" || m === "array") {
            if (!w.some(e => l(t, e))) {
              ed.push({
                instanceLocation: u,
                keyword: "enum",
                keywordLocation: `${c}/enum`,
                error: `Instance does not match any of ${JSON.stringify(w)}.`
              });
            }
          } else if (!w.some(e => t === e)) {
            ed.push({
              instanceLocation: u,
              keyword: "enum",
              keywordLocation: `${c}/enum`,
              error: `Instance does not match any of ${JSON.stringify(w)}.`
            });
          }
        }
        if (S !== undefined) {
          let r = `${c}/not`;
          if (e(t, S, a, o, n, d, u, r).valid) {
            ed.push({
              instanceLocation: u,
              keyword: "not",
              keywordLocation: r,
              error: "Instance matched \"not\" schema."
            });
          }
        }
        let es = [];
        if (_ !== undefined) {
          let r = `${c}/anyOf`;
          let i = ed.length;
          let s = false;
          for (let i = 0; i < _.length; i++) {
            let l = _[i];
            let c = Object.create(f);
            let m = e(t, l, a, o, n, g === true ? d : null, u, `${r}/${i}`, c);
            ed.push(...m.errors);
            s = s || m.valid;
            if (m.valid) {
              es.push(c);
            }
          }
          if (s) {
            ed.length = i;
          } else {
            ed.splice(i, 0, {
              instanceLocation: u,
              keyword: "anyOf",
              keywordLocation: r,
              error: "Instance does not match any subschemas."
            });
          }
        }
        if (x !== undefined) {
          let r = `${c}/allOf`;
          let i = ed.length;
          let s = true;
          for (let i = 0; i < x.length; i++) {
            let l = x[i];
            let c = Object.create(f);
            let m = e(t, l, a, o, n, g === true ? d : null, u, `${r}/${i}`, c);
            ed.push(...m.errors);
            s = s && m.valid;
            if (m.valid) {
              es.push(c);
            }
          }
          if (s) {
            ed.length = i;
          } else {
            ed.splice(i, 0, {
              instanceLocation: u,
              keyword: "allOf",
              keywordLocation: r,
              error: "Instance does not match every subschema."
            });
          }
        }
        if (I !== undefined) {
          let r = `${c}/oneOf`;
          let i = ed.length;
          let s = I.filter((i, s) => {
            let l = Object.create(f);
            let c = e(t, i, a, o, n, g === true ? d : null, u, `${r}/${s}`, l);
            ed.push(...c.errors);
            if (c.valid) {
              es.push(l);
            }
            return c.valid;
          }).length;
          if (s === 1) {
            ed.length = i;
          } else {
            ed.splice(i, 0, {
              instanceLocation: u,
              keyword: "oneOf",
              keywordLocation: r,
              error: `Instance does not match exactly one subschema (${s} matches).`
            });
          }
        }
        if (m === "object" || m === "array") {
          Object.assign(f, ...es);
        }
        if (T !== undefined) {
          let r = `${c}/if`;
          if (e(t, T, a, o, n, d, u, r, f).valid) {
            if (O !== undefined) {
              let i = e(t, O, a, o, n, d, u, `${c}/then`, f);
              if (!i.valid) {
                ed.push({
                  instanceLocation: u,
                  keyword: "if",
                  keywordLocation: r,
                  error: "Instance does not match \"then\" schema."
                }, ...i.errors);
              }
            }
          } else if (L !== undefined) {
            let i = e(t, L, a, o, n, d, u, `${c}/else`, f);
            if (!i.valid) {
              ed.push({
                instanceLocation: u,
                keyword: "if",
                keywordLocation: r,
                error: "Instance does not match \"else\" schema."
              }, ...i.errors);
            }
          }
        }
        if (m === "object") {
          if (k !== undefined) {
            for (let e of k) {
              if (!(e in t)) {
                ed.push({
                  instanceLocation: u,
                  keyword: "required",
                  keywordLocation: `${c}/required`,
                  error: `Instance does not have required property "${e}".`
                });
              }
            }
          }
          let r = Object.keys(t);
          if (H !== undefined && r.length < H) {
            ed.push({
              instanceLocation: u,
              keyword: "minProperties",
              keywordLocation: `${c}/minProperties`,
              error: `Instance does not have at least ${H} properties.`
            });
          }
          if (E !== undefined && r.length > E) {
            ed.push({
              instanceLocation: u,
              keyword: "maxProperties",
              keywordLocation: `${c}/maxProperties`,
              error: `Instance does not have at least ${E} properties.`
            });
          }
          if (P !== undefined) {
            let r = `${c}/propertyNames`;
            for (let s in t) {
              let t = `${u}/${i(s)}`;
              let l = e(s, P, a, o, n, d, t, r);
              if (!l.valid) {
                ed.push({
                  instanceLocation: u,
                  keyword: "propertyNames",
                  keywordLocation: r,
                  error: `Property name "${s}" does not match schema.`
                }, ...l.errors);
              }
            }
          }
          if (q !== undefined) {
            let e = `${c}/dependantRequired`;
            for (let r in q) {
              if (r in t) {
                for (let i of q[r]) {
                  if (!(i in t)) {
                    ed.push({
                      instanceLocation: u,
                      keyword: "dependentRequired",
                      keywordLocation: e,
                      error: `Instance has "${r}" but does not have "${i}".`
                    });
                  }
                }
              }
            }
          }
          if (N !== undefined) {
            for (let r in N) {
              let s = `${c}/dependentSchemas`;
              if (r in t) {
                let l = e(t, N[r], a, o, n, d, u, `${s}/${i(r)}`, f);
                if (!l.valid) {
                  ed.push({
                    instanceLocation: u,
                    keyword: "dependentSchemas",
                    keywordLocation: s,
                    error: `Instance has "${r}" but does not match dependant schema.`
                  }, ...l.errors);
                }
              }
            }
          }
          if (C !== undefined) {
            let r = `${c}/dependencies`;
            for (let s in C) {
              if (s in t) {
                let l = C[s];
                if (Array.isArray(l)) {
                  for (let e of l) {
                    if (!(e in t)) {
                      ed.push({
                        instanceLocation: u,
                        keyword: "dependencies",
                        keywordLocation: r,
                        error: `Instance has "${s}" but does not have "${e}".`
                      });
                    }
                  }
                } else {
                  let c = e(t, l, a, o, n, d, u, `${r}/${i(s)}`);
                  if (!c.valid) {
                    ed.push({
                      instanceLocation: u,
                      keyword: "dependencies",
                      keywordLocation: r,
                      error: `Instance has "${s}" but does not match dependant schema.`
                    }, ...c.errors);
                  }
                }
              }
            }
          }
          let s = Object.create(null);
          let l = false;
          if (j !== undefined) {
            let r = `${c}/properties`;
            for (let c in j) {
              if (!(c in t)) {
                continue;
              }
              let m = `${u}/${i(c)}`;
              let p = e(t[c], j[c], a, o, n, d, m, `${r}/${i(c)}`);
              if (p.valid) {
                f[c] = s[c] = true;
              } else {
                l = n;
                ed.push({
                  instanceLocation: u,
                  keyword: "properties",
                  keywordLocation: r,
                  error: `Property "${c}" does not match schema.`
                }, ...p.errors);
                if (l) {
                  break;
                }
              }
            }
          }
          if (!l && A !== undefined) {
            let r = `${c}/patternProperties`;
            for (let c in A) {
              let m = new RegExp(c);
              let p = A[c];
              for (let h in t) {
                if (!m.test(h)) {
                  continue;
                }
                let y = `${u}/${i(h)}`;
                let $ = e(t[h], p, a, o, n, d, y, `${r}/${i(c)}`);
                if ($.valid) {
                  f[h] = s[h] = true;
                } else {
                  l = n;
                  ed.push({
                    instanceLocation: u,
                    keyword: "patternProperties",
                    keywordLocation: r,
                    error: `Property "${h}" matches pattern "${c}" but does not match associated schema.`
                  }, ...$.errors);
                }
              }
            }
          }
          if (l || V === undefined) {
            if (!l && z !== undefined) {
              let r = `${c}/unevaluatedProperties`;
              for (let s in t) {
                if (!f[s]) {
                  let l = `${u}/${i(s)}`;
                  let c = e(t[s], z, a, o, n, d, l, r);
                  if (c.valid) {
                    f[s] = true;
                  } else {
                    ed.push({
                      instanceLocation: u,
                      keyword: "unevaluatedProperties",
                      keywordLocation: r,
                      error: `Property "${s}" does not match unevaluated properties schema.`
                    }, ...c.errors);
                  }
                }
              }
            }
          } else {
            let r = `${c}/additionalProperties`;
            for (let c in t) {
              if (s[c]) {
                continue;
              }
              let m = `${u}/${i(c)}`;
              let p = e(t[c], V, a, o, n, d, m, r);
              if (p.valid) {
                f[c] = true;
              } else {
                l = n;
                ed.push({
                  instanceLocation: u,
                  keyword: "additionalProperties",
                  keywordLocation: r,
                  error: `Property "${c}" does not match additional properties schema.`
                }, ...p.errors);
              }
            }
          }
        } else if (m === "array") {
          if (Z !== undefined && t.length > Z) {
            ed.push({
              instanceLocation: u,
              keyword: "maxItems",
              keywordLocation: `${c}/maxItems`,
              error: `Array has too many items (${t.length} > ${Z}).`
            });
          }
          if (F !== undefined && t.length < F) {
            ed.push({
              instanceLocation: u,
              keyword: "minItems",
              keywordLocation: `${c}/minItems`,
              error: `Array has too few items (${t.length} < ${F}).`
            });
          }
          let r = t.length;
          let i = 0;
          let s = false;
          if (D !== undefined) {
            let l = `${c}/prefixItems`;
            let m = Math.min(D.length, r);
            for (; i < m; i++) {
              let r = e(t[i], D[i], a, o, n, d, `${u}/${i}`, `${l}/${i}`);
              f[i] = true;
              if (!r.valid && (s = n, ed.push({
                instanceLocation: u,
                keyword: "prefixItems",
                keywordLocation: l,
                error: "Items did not match schema."
              }, ...r.errors), s)) {
                break;
              }
            }
          }
          if (M !== undefined) {
            let l = `${c}/items`;
            if (Array.isArray(M)) {
              let c = Math.min(M.length, r);
              for (; i < c; i++) {
                let r = e(t[i], M[i], a, o, n, d, `${u}/${i}`, `${l}/${i}`);
                f[i] = true;
                if (!r.valid && (s = n, ed.push({
                  instanceLocation: u,
                  keyword: "items",
                  keywordLocation: l,
                  error: "Items did not match schema."
                }, ...r.errors), s)) {
                  break;
                }
              }
            } else {
              for (; i < r; i++) {
                let r = e(t[i], M, a, o, n, d, `${u}/${i}`, l);
                f[i] = true;
                if (!r.valid && (s = n, ed.push({
                  instanceLocation: u,
                  keyword: "items",
                  keywordLocation: l,
                  error: "Items did not match schema."
                }, ...r.errors), s)) {
                  break;
                }
              }
            }
            if (!s && B !== undefined) {
              let l = `${c}/additionalItems`;
              for (; i < r; i++) {
                let r = e(t[i], B, a, o, n, d, `${u}/${i}`, l);
                f[i] = true;
                if (!r.valid) {
                  s = n;
                  ed.push({
                    instanceLocation: u,
                    keyword: "additionalItems",
                    keywordLocation: l,
                    error: "Items did not match additional items schema."
                  }, ...r.errors);
                }
              }
            }
          }
          if (G !== undefined) {
            if (r === 0 && W === undefined) {
              ed.push({
                instanceLocation: u,
                keyword: "contains",
                keywordLocation: `${c}/contains`,
                error: "Array is empty. It must contain at least one item matching the schema."
              });
            } else if (W !== undefined && r < W) {
              ed.push({
                instanceLocation: u,
                keyword: "minContains",
                keywordLocation: `${c}/minContains`,
                error: `Array has less items (${r}) than minContains (${W}).`
              });
            } else {
              let i = `${c}/contains`;
              let s = ed.length;
              let l = 0;
              for (let s = 0; s < r; s++) {
                let r = e(t[s], G, a, o, n, d, `${u}/${s}`, i);
                if (r.valid) {
                  f[s] = true;
                  l++;
                } else {
                  ed.push(...r.errors);
                }
              }
              if (l >= (W || 0)) {
                ed.length = s;
              }
              if (W === undefined && K === undefined && l === 0) {
                ed.splice(s, 0, {
                  instanceLocation: u,
                  keyword: "contains",
                  keywordLocation: i,
                  error: "Array does not contain item matching schema."
                });
              } else if (W !== undefined && l < W) {
                ed.push({
                  instanceLocation: u,
                  keyword: "minContains",
                  keywordLocation: `${c}/minContains`,
                  error: `Array must contain at least ${W} items matching schema. Only ${l} items were found.`
                });
              } else if (K !== undefined && l > K) {
                ed.push({
                  instanceLocation: u,
                  keyword: "maxContains",
                  keywordLocation: `${c}/maxContains`,
                  error: `Array may contain at most ${K} items matching schema. ${l} items were found.`
                });
              }
            }
          }
          if (!s && U !== undefined) {
            let s = `${c}/unevaluatedItems`;
            for (; i < r; i++) {
              if (f[i]) {
                continue;
              }
              let r = e(t[i], U, a, o, n, d, `${u}/${i}`, s);
              f[i] = true;
              if (!r.valid) {
                ed.push({
                  instanceLocation: u,
                  keyword: "unevaluatedItems",
                  keywordLocation: s,
                  error: "Items did not match unevaluated items schema."
                }, ...r.errors);
              }
            }
          }
          if (X) {
            for (let e = 0; e < r; e++) {
              let i = t[e];
              let a = typeof i == "object" && i !== null;
              for (let o = 0; o < r; o++) {
                if (e === o) {
                  continue;
                }
                let r = t[o];
                let n = typeof r == "object" && r !== null;
                if (i === r || a && n && l(i, r)) {
                  ed.push({
                    instanceLocation: u,
                    keyword: "uniqueItems",
                    keywordLocation: `${c}/uniqueItems`,
                    error: `Duplicate items at indexes ${e} and ${o}.`
                  });
                  e = Number.MAX_SAFE_INTEGER;
                  o = Number.MAX_SAFE_INTEGER;
                }
              }
            }
          }
        } else if (m === "number") {
          if (a === "4") {
            if (J !== undefined && (Y === true && t <= J || t < J)) {
              ed.push({
                instanceLocation: u,
                keyword: "minimum",
                keywordLocation: `${c}/minimum`,
                error: `${t} is less than ${Y ? "or equal to " : ""} ${J}.`
              });
            }
            if (Q !== undefined && (ee === true && t >= Q || t > Q)) {
              ed.push({
                instanceLocation: u,
                keyword: "maximum",
                keywordLocation: `${c}/maximum`,
                error: `${t} is greater than ${ee ? "or equal to " : ""} ${Q}.`
              });
            }
          } else {
            if (J !== undefined && t < J) {
              ed.push({
                instanceLocation: u,
                keyword: "minimum",
                keywordLocation: `${c}/minimum`,
                error: `${t} is less than ${J}.`
              });
            }
            if (Q !== undefined && t > Q) {
              ed.push({
                instanceLocation: u,
                keyword: "maximum",
                keywordLocation: `${c}/maximum`,
                error: `${t} is greater than ${Q}.`
              });
            }
            if (Y !== undefined && t <= Y) {
              ed.push({
                instanceLocation: u,
                keyword: "exclusiveMinimum",
                keywordLocation: `${c}/exclusiveMinimum`,
                error: `${t} is less than ${Y}.`
              });
            }
            if (ee !== undefined && t >= ee) {
              ed.push({
                instanceLocation: u,
                keyword: "exclusiveMaximum",
                keywordLocation: `${c}/exclusiveMaximum`,
                error: `${t} is greater than or equal to ${ee}.`
              });
            }
          }
          if (et !== undefined) {
            let e = t % et;
            if (Math.abs(0 - e) >= 1.1920929e-7 && Math.abs(et - e) >= 1.1920929e-7) {
              ed.push({
                instanceLocation: u,
                keyword: "multipleOf",
                keywordLocation: `${c}/multipleOf`,
                error: `${t} is not a multiple of ${et}.`
              });
            }
          }
        } else if (m === "string") {
          let e = er === undefined && ei === undefined ? 0 : function (e) {
            let t;
            let r = 0;
            let i = e.length;
            let a = 0;
            while (a < i) {
              r++;
              if ((t = e.charCodeAt(a++)) >= 55296 && t <= 56319 && a < i && ((t = e.charCodeAt(a)) & 64512) == 56320) {
                a++;
              }
            }
            return r;
          }(t);
          if (er !== undefined && e < er) {
            ed.push({
              instanceLocation: u,
              keyword: "minLength",
              keywordLocation: `${c}/minLength`,
              error: `String is too short (${e} < ${er}).`
            });
          }
          if (ei !== undefined && e > ei) {
            ed.push({
              instanceLocation: u,
              keyword: "maxLength",
              keywordLocation: `${c}/maxLength`,
              error: `String is too long (${e} > ${ei}).`
            });
          }
          if (ea !== undefined && !new RegExp(ea).test(t)) {
            ed.push({
              instanceLocation: u,
              keyword: "pattern",
              keywordLocation: `${c}/pattern`,
              error: "String does not match pattern."
            });
          }
          if (R !== undefined && p[R] && !p[R](t)) {
            ed.push({
              instanceLocation: u,
              keyword: "format",
              keywordLocation: `${c}/format`,
              error: `String does not match format "${R}".`
            });
          }
        }
        return {
          valid: ed.length === 0,
          errors: ed
        };
      }(e, this.schema, this.draft, this.lookup, this.shortCircuit);
    }
    addSchema(e, t) {
      if (t) {
        e = {
          ...e,
          $id: t
        };
      }
      s(e, this.lookup);
    }
  }
  var schemaValidationDefinitions = require("schema-validation-definitions") /*id: 72946*/;
  class S extends w {
    addSchemaSafely(e) {
      let t = e.$id;
      if (!t) {
        throw Error("schema need id");
      }
      if (!this.ids.has(t)) {
        this.addSchema(e);
        this.ids.add(t);
      }
      return this;
    }
    addBaseSchema(e = false) {
      if (e) {
        this.addSchemaSafely(schemaValidationDefinitions.baseWithChildren);
      }
      this.addSchemaSafely(schemaValidationDefinitions.baseSchema);
      this.addSchemaSafely(schemaValidationDefinitions.tokenSchema);
      return this;
    }
    addTokenSchema() {
      return this.addSchemaSafely(schemaValidationDefinitions.tokenSchema);
    }
    addResourceTokenSchema() {
      return this.addSchemaSafely(schemaValidationDefinitions.resourceTokenSchema);
    }
    addRgbaSchema() {
      return this.addSchemaSafely(schemaValidationDefinitions.rgbaSchema);
    }
    addRgbSchema() {
      return this.addSchemaSafely(schemaValidationDefinitions.rgbSchema);
    }
    addUserIdSchema() {
      return this.addSchemaSafely(schemaValidationDefinitions.userIdSchema);
    }
    addUuid4Schema() {
      return this.addSchemaSafely(schemaValidationDefinitions.uuid4Schema);
    }
    constructor(...e) {
      var t;
      var r;
      var i;
      super(...e);
      t = "ids";
      r = new Set();
      if ((t = typeof (i = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var i = r.call(e, t || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(t, "string")) == "symbol" ? i : i + "") in this) {
        Object.defineProperty(this, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = r;
      }
    }
  }
  require.d(exports, {
    SchemaValidator: function () {
      return S;
    }
  });
}