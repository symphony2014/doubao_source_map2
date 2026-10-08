// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'CountryCodeSelect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50418.2df2ac84.js
         * chunkId: 50418
         * moduleId: 336219
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var localeDirectionCheck = require("locale-direction-check") /*id: 255854*/;
  var semiSelectComponent = require("semi-select-component") /*id: 981226*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  let _ = () => storageWrapperWithFallback.LocalStorageWrapper.getItem("flow_user_country");
  require("empty-module-stub_4") /*id: 565569*/;
  var countryPhoneData = require("country-phone-data") /*id: 931001*/;
  let h = (e, n, i) => {
    let t = e.sort(n);
    let o = [];
    for (let e of t) {
      let n = i(e);
      let t = o.find(e => e.group === n);
      if (t) {
        t.list.push(e);
      } else {
        o.push({
          group: n,
          list: [e]
        });
      }
    }
    return o;
  };
  let m = () => h(countryPhoneData.countryList, (e, n) => {
    {
      let i = e.chinese_pinyin;
      let t = n.chinese_pinyin;
      let o = Math.min(i.length, t.length);
      for (let e = 0; e < o; e++) {
        if (i[e] > t[e]) {
          return 1;
        }
        if (i[e] < t[e]) {
          return -1;
        }
      }
      if (i.length > t.length) {
        return 1;
      } else if (i.length < t.length) {
        return -1;
      } else {
        return 0;
      }
    }
  }, e => e.chinese_pinyin[0][0].toUpperCase());
  let p = countryPhoneData.chinaRegionCodes;
  let g = (e, n) => ({
    specialList: n.map(n => {
      for (let {
        list: i
      } of e) {
        let e = i.find(e => e.country_code === n);
        if (e !== undefined) {
          return e;
        }
      }
    }).filter(Boolean),
    filteredList: e.map(e => ({
      ...e,
      list: e.list.filter(e => !n.includes(e.country_code))
    }))
  });
  let y = e => "+86";
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "none",
    viewBox: "0 0 16 16",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#06F",
      d: "M14.235 2.843a1 1 0 0 1 .255 1.391l-6.667 9.667a1 1 0 0 1-1.556.113L1.934 9.347A1 1 0 0 1 3.4 7.987l3.485 3.752 5.959-8.64a1 1 0 0 1 1.39-.256"
    })
  });
  var w = {
    "country-code-select": "country-code-select-aG7Dks",
    selected: "selected-U2tUrl",
    input: "input-oHaFOY",
    "country-code-select-item": "country-code-select-item-UuS1Ex",
    "selected-mark-icon": "selected-mark-icon-EC03hx",
    left: "left-R08XgI",
    right: "right-eEDDbf",
    focused: "focused-irhGtj",
    disabled: "disabled-c24RFa",
    countryCodeSelectDropdown: "country-code-select-dropdown-LWJrNP"
  };
  let A = e => {
    let {
      disabled: n,
      selected: i,
      value: t,
      label: o,
      style: a,
      focused: c,
      onMouseEnter: s,
      onClick: l
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      style: a,
      onClick: l,
      onMouseEnter: s,
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: r(w["country-code-select-item"], {
          [w.disabled]: n,
          [w.focused]: c
        }),
        children: [i ? reactJsxRuntimeCoreReexport.jsx(v, {
          className: w["selected-mark-icon"]
        }) : null, reactJsxRuntimeCoreReexport.jsx("div", {
          className: w.left,
          children: t
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: w.right,
          children: o
        })]
      })
    });
  };
  let E = e => reactJsxRuntimeCoreReexport.jsx("span", {
    className: w.selected,
    children: e.value
  });
  let b = e => {
    let n = _();
    let {
      defaultValue: i = y({
        storageRegion: n
      }),
      value: a = i,
      onChange: d,
      disabled: h = false,
      className: v,
      style: b,
      onlyCNCode: k,
      isEnglish: S = false
    } = e;
    let [N, x] = reactCoreLibraryReexport.useState(a);
    let [R, C] = reactCoreLibraryReexport.useState(false);
    let j = reactCoreLibraryReexport.useMemo(() => g(m(), p), []);
    reactCoreLibraryReexport.useEffect(() => {
      x(a);
    }, [a]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!isUndefinedCheck.isUndefined(N) && d != null) {
        d(N);
      }
    }, [N]);
    reactCoreLibraryReexport.useEffect(() => {
      if (R) {
        teaAnalyticsEventTracker.trackEvent("click_phone_login_region", {
          code: parseInt(N)
        });
      }
    }, [R]);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: reactJsxRuntimeCoreReexport.jsxs(semiSelectComponent.Select, {
        className: r(w["country-code-select"], v, {
          [w.disabled]: h
        }),
        style: b,
        value: N,
        onChange: e => {
          teaAnalyticsEventTracker.trackEvent("phone_login_region_result", {
            code: parseInt(String(e)),
            country: countryPhoneData.countryList.find(n => `+${n.phone_code}` === String(e))?.english_name
          });
          x(String(e));
        },
        onDropdownVisibleChange: C,
        dropdownStyle: {
          maxWidth: "320px",
          width: "calc(100vw - 32px)"
        },
        dropdownClassName: w.countryCodeSelectDropdown,
        position: localeDirectionCheck.isRtlLanguage() ? "bottomRight" : "bottomLeft",
        filter: (e, n) => {
          var i;
          var t;
          return !!((i = n.label) === null || i === undefined ? undefined : i.toString().includes(e)) || !!((t = n.value) === null || t === undefined ? undefined : t.toString().includes(e));
        },
        renderOptionItem: A,
        renderSelectedItem: E,
        inputProps: {
          className: w.input
        },
        disabled: h,
        children: [j.specialList.map(e => {
          let {
            phone_code: n,
            country_code: i,
            english_name: t,
            chinese_name: o
          } = e;
          return reactJsxRuntimeCoreReexport.jsx(semiSelectComponent.Select.Option, {
            value: `+${n}`,
            children: S ? t : o
          }, i);
        }), k ? [] : j.filteredList.map(e => {
          let {
            group: n,
            list: i
          } = e;
          return reactJsxRuntimeCoreReexport.jsx(semiSelectComponent.Select.OptGroup, {
            label: n,
            children: i.map(e => {
              let {
                english_name: n,
                chinese_name: i,
                phone_code: t,
                country_code: o
              } = e;
              return reactJsxRuntimeCoreReexport.jsx(semiSelectComponent.Select.Option, {
                value: `+${t}`,
                children: S ? n : i
              }, o);
            })
          }, n);
        })]
      })
    });
  };
  require.d(exports, {
    CountryCodeSelect: function () {
      return b;
    }
  });
}