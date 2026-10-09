// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'l' to 'reactIntersectionObserver_1'
// - Resolved require(728951) to 'react-intersection-observer_1'
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'n' to 'moduleReexportWrapper'
// - Resolved require(617542) to 'module-reexport-wrapper'
// - Renamed variable 's' to 'dayjsDateLibrary'
// - Resolved require(349712) to 'dayjs-date-library'
// - Renamed variable 'c' to 'chartSeriesComponentsModule'
// - Resolved require(660248) to 'chart-series-components-module'
// - Renamed variable 'b' to 'toutiaoSearchConstants'
// - Resolved require(937588) to 'toutiao-search-constants'
// - Renamed variable 'f' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'L' to 'cardWrapperComponent'
// - Resolved require(201819) to 'card-wrapper-component'
// - Renamed variable 'W' to 'chevronRightIcon_1'
// - Resolved require(839336) to 'chevron-right-icon_1'
// - Renamed variable 'R' to 'rightOutlinedIcon'
// - Resolved require(831095) to 'right-outlined-icon'
// - Updated imported property 'CA' to 'whiteColor' (module 937588)
// - Updated imported property 'x2' to 'whiteColorAlt' (module 937588)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'L' to 'ChevronRightIcon' (module 839336)
// - Updated imported property 'U' to 'RightOutlinedIcon' (module 831095)
// - Updated imported property 'YD' to 'useInView' (module 728951)
// - Updated imported property 'l' to 'CardWrapper' (module 201819)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 13468.dccdd582.js
         * chunkId: 13468
         * moduleId: 864213
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var d = classnamesUtils;
  var moduleReexportWrapper = require("module-reexport-wrapper") /*id: 617542*/;
  var dayjsDateLibrary = require("dayjs-date-library") /*id: 349712*/;
  var u = dayjsDateLibrary;
  var chartSeriesComponentsModule = require("chart-series-components-module") /*id: 660248*/;
  var toutiaoSearchConstants = require("toutiao-search-constants") /*id: 937588*/;
  let h = e => e < 412 ? 6 : 7;
  let w = (e, o) => {
    let t = o ?? h(e);
    return (e - 16) / t;
  };
  function m(e, o) {
    let {
      xField: l = "time",
      lineColor: r = toutiaoSearchConstants.whiteColor,
      showMultipleLines: a = false,
      lowTempData: d,
      paddingBottom: n = 0
    } = o || {};
    let s = {
      type: "line",
      name: "数值",
      encode: {
        x: l,
        y: "value"
      },
      label: {
        show: true,
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 400,
        fontFamily: "unset",
        color: toutiaoSearchConstants.whiteColorAlt,
        position: "top",
        formatter: e => (0, chartSeriesComponentsModule.html)`<div style="padding-left: 5px">${e.value}°</div>`
      },
      smooth: true,
      lineStyle: {
        cursor: "default",
        lineWidth: 1,
        stroke: r
      },
      marker: {
        show: true,
        cursor: "default",
        fill: "#FFFFFF",
        stroke: "#FFFFFF",
        lineWidth: 1,
        blendMode: "normal"
      },
      hover: {
        marker: {
          symbol: "none"
        }
      },
      showLegend: false
    };
    let u = [];
    u.push({
      ...s,
      data: e
    });
    if (a && d) {
      u.push({
        ...s,
        data: d,
        label: {
          ...s.label,
          position: "bottom"
        }
      });
    }
    let h = ((o == null ? undefined : o.itemWidthForPadding) ?? w(428)) / 2;
    let m = e => (e == null ? undefined : e.length) ? Math.min(...e.map(e => e.value)) : undefined;
    return {
      legend: {
        show: false
      },
      xAxis: {
        type: "category",
        padding: false,
        axisLabel: {
          alignToAxis: true
        },
        show: false
      },
      yAxis: {
        type: "value",
        show: false,
        min: m(d) ?? m(e)
      },
      tooltip: {
        show: false
      },
      series: u,
      padding: [20, h, n, h]
    };
  }
  var p = {
    weather: "weather-XXXNov",
    "weather-card": "weather-card-DV9YoB",
    weatherCard: "weather-card-DV9YoB",
    "weather-container": "weather-container-_ZxhsZ",
    weatherContainer: "weather-container-_ZxhsZ",
    "weather-video-bg": "weather-video-bg-bkK7_P",
    weatherVideoBg: "weather-video-bg-bkK7_P",
    "weather-content-overlay": "weather-content-overlay-lomlzE",
    weatherContentOverlay: "weather-content-overlay-lomlzE",
    "weather-header": "weather-header-tMX4Ok",
    weatherHeader: "weather-header-tMX4Ok",
    "weather-header-prefix": "weather-header-prefix-WUaCY1",
    weatherHeaderPrefix: "weather-header-prefix-WUaCY1",
    "weather-header-prefix-title": "weather-header-prefix-title-JYs3IZ",
    weatherHeaderPrefixTitle: "weather-header-prefix-title-JYs3IZ",
    temperature: "temperature-vxvChw",
    condition: "condition-gdLYqj",
    "temp-range": "temp-range-WRlbX7",
    tempRange: "temp-range-WRlbX7",
    quality: "quality-Dv8CSH",
    wind: "wind-tZ6qSo",
    "weather-content": "weather-content-FVPW_R",
    weatherContent: "weather-content-FVPW_R",
    hours: "hours-A2ImBO",
    day: "day-S_E18b",
    "day-pop": "day-pop-DL2sqo",
    dayPop: "day-pop-DL2sqo",
    "day-quality": "day-quality-u9er23",
    dayQuality: "day-quality-u9er23",
    "daily-item-selected": "daily-item-selected-ub6pla",
    dailyItemSelected: "daily-item-selected-ub6pla",
    "weather-detail-section": "weather-detail-section-pz5fyk",
    weatherDetailSection: "weather-detail-section-pz5fyk",
    "weather-slide-button": "weather-slide-button-spdfJa",
    weatherSlideButton: "weather-slide-button-spdfJa",
    "weather-slide-button-icon": "weather-slide-button-icon-Y23HjS",
    weatherSlideButtonIcon: "weather-slide-button-icon-Y23HjS",
    show: "show-qZUY97"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = e => {
    let {
      isTodayWeather: o,
      data: t,
      itemWidth: i,
      lowTempData: l,
      chartHeight: a = 66,
      bottom: d
    } = e;
    let [s, u] = reactCoreLibraryReexport.useState(0);
    reactCoreLibraryReexport.useEffect(() => {
      if (i > 0 && t.length > 0) {
        u(i * t.length);
      }
    }, [i, t.length]);
    let c = reactCoreLibraryReexport.useMemo(() => o ? m(t, {
      xField: "time",
      showMultipleLines: false,
      paddingBottom: 5,
      itemWidthForPadding: i
    }) : m(t, {
      xField: "time",
      showMultipleLines: true,
      lowTempData: l || [],
      paddingBottom: 20,
      itemWidthForPadding: i
    }), [o, t, l, d]);
    if (s <= 0 || !c) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: p["weather-temperature-chart"],
        style: {
          position: "absolute",
          bottom: d || 0,
          left: 0,
          width: `${s}px`,
          height: `${a}px`
        },
        children: reactJsxRuntimeCoreReexport.jsx(moduleReexportWrapper.default, {
          option: c,
          style: {
            height: `${a}px`
          },
          renderer: "svg"
        })
      });
    }
  };
  let g = {
    iconConfigList: [{
      idList: [1, 2, 3, 4, 5, 6, 7],
      weatherIcon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/icon/dbx_ic_weather_sunny.svg"
    }, {
      idList: [8, 9, 10, 11, 12, 80, 81, 82],
      weatherIcon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/icon/dbx_ic_weather_cloudy.svg"
    }, {
      idList: [13, 14, 36, 85],
      weatherIcon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/icon/dbx_ic_weather_overcast.svg"
    }, {
      idList: [37, 38, 39, 40, 41, 43, 87, 88, 89, 90],
      weatherIcon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/icon/dbx_ic_weather_thunderstorms.svg"
    }, {
      idList: [42],
      weatherIcon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/icon/dbx_ic_weather_lightning.svg"
    }, {
      idList: [22, 51, 52, 66, 91],
      weatherIcon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/icon/dbx_ic_weather_drizzle.svg"
    }, {
      idList: [15, 16, 17, 18, 19, 20, 21, 53, 64, 65, 67, 78, 86, 92],
      weatherIcon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/icon/dbx_ic_weather_rain.svg"
    }, {
      idList: [23, 54, 55, 56, 57, 68, 69, 70, 93],
      weatherIcon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/icon/dbx_ic_weather_showers.svg"
    }, {
      idList: [44, 45],
      weatherIcon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/icon/dbx_ic_weather_thunderstorms_hail.svg"
    }, {
      idList: [46, 48],
      weatherIcon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/icon/dbx_ic_weather_hail.svg"
    }, {
      idList: [47],
      weatherIcon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/icon/dbx_ic_weather_iceneedles.svg"
    }, {
      idList: [49, 50],
      weatherIcon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/icon/dbx_ic_weather_sleet.svg"
    }, {
      idList: [60, 61, 77, 94],
      weatherIcon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/icon/dbx_ic_weather_snow.svg"
    }, {
      idList: [25, 58, 59, 71, 72, 73],
      weatherIcon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/icon/dbx_ic_weather_lightsnow.svg"
    }, {
      idList: [24, 62, 63, 74, 75, 76],
      weatherIcon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/icon/dbx_ic_weather_heavysnow.svg"
    }, {
      idList: [26, 27, 28, 34, 35, 79, 83, 84],
      weatherIcon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/icon/dbx_ic_weather_fog.svg"
    }, {
      idList: [29, 31, 33],
      weatherIcon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/icon/dbx_ic_weather_sandstorm.svg"
    }, {
      idList: [30],
      weatherIcon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/icon/dbx_ic_weather_dust.svg"
    }, {
      idList: [32],
      weatherIcon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/icon/dbx_ic_weather_sand.svg"
    }],
    moonConfigList: [{
      idList: [30],
      weatherIcon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/icon/dbx_ic_weather_moon.svg",
      bgVideo: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/sunny-moon.mp4",
      bgPost: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/sunny-moon-post.jpg"
    }, {
      idList: [31],
      weatherIcon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/icon/dbx_ic_weather_cloudy_moon.svg",
      bgVideo: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/cloudy-moon.mp4",
      bgPost: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/cloudy-moon-post.jpg"
    }],
    bgConfigList: [{
      idList: [12, 8, 9, 10, 11, 80, 81, 82],
      bgVideo: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/cloudy.mp4",
      bgPost: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/cloudy-post.jpg"
    }, {
      idList: [22, 51, 52, 66, 91],
      bgVideo: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/drizzle.mp4",
      bgPost: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/drizzle-post.jpg"
    }, {
      idList: [26, 27, 28, 34, 35, 79, 83, 84],
      bgVideo: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/fog.mp4",
      bgPost: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/fog-post.jpg"
    }, {
      idList: [46, 47, 48],
      bgVideo: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/hail.mp4",
      bgPost: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/hail-post.jpg"
    }, {
      idList: [24, 62, 63, 74, 75, 76],
      bgVideo: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/heavysnow.mp4",
      bgPost: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/heavysnow-post.jpg"
    }, {
      idList: [15, 16, 17, 18, 19, 20, 21, 22, 23, 51, 52, 53, 54, 55, 56, 57, 64, 65, 66, 67, 68, 69, 70, 78, 86, 91, 92, 93],
      bgVideo: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/rain.mp4",
      bgPost: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/rain-post.jpg"
    }, {
      idList: [49, 50],
      bgVideo: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/sleet.mp4",
      bgPost: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/sleet-post.jpg"
    }, {
      idList: [60, 61, 77, 94, 25, 58, 59, 71, 72, 73],
      bgVideo: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/lightsnow.mp4",
      bgPost: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/lightsnow-post.jpg"
    }, {
      idList: [1, 2, 3, 4, 5, 6, 7],
      bgVideo: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/sunny.mp4",
      bgPost: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/sunny-post.jpg"
    }, {
      idList: [37, 38, 39, 40, 41, 43, 44, 45, 87, 88, 89, 90],
      bgVideo: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/thunderstorms.mp4",
      bgPost: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/thunderstorms-post.jpg"
    }, {
      idList: [29, 30, 31, 32, 33],
      bgVideo: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/sandstorm.mp4",
      bgPost: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/sandstorm-post.jpg"
    }, {
      idList: [13, 14, 36, 85],
      bgVideo: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/overcast.mp4",
      bgPost: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/overcast-post.jpg"
    }, {
      idList: [42],
      bgVideo: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/lightning.mp4",
      bgPost: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/ruyi_resource/bg/lightning-post.jpg"
    }]
  };
  let v = (e, o, t, l) => {
    let a = l || g;
    let d = a.iconConfigList.reduce((e, o) => {
      o.idList.forEach(t => {
        e[t] = o.weatherIcon;
      });
      return e;
    }, {});
    let n = a.moonConfigList.find(e => e.idList.includes(Number(t)))?.weatherIcon || d[Number(e)];
    if (!n) {
      throw Error(`\u{672A}\u{627E}\u{5230}conditionId: ${e}\u{5BF9}\u{5E94}\u{7684}\u{5929}\u{6C14}\u{56FE}\u{6807}`);
    }
    return reactJsxRuntimeCoreReexport.jsx("img", {
      style: {
        background: "transparent"
      },
      src: xssContentSanitizer.sanitizeUrl(n, null, {
        logType: "js.href/src",
        reportOnly: "false",
        blackConfig: "{}",
        configMode: "merge",
        isCloseSSRReport: false,
        bid: "flow_web",
        region: "cn",
        urlLimit: "-1",
        htmlLimit: "-1",
        isSaveValidUrl: false,
        isRuntimeLog: false,
        isDOMParser: true,
        escapeRule: "escape-report",
        reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
        scmBranch: "release_train_samantha_2026-03-09_1120843696898",
        scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
        scmVersion: "1.0.4.168",
        webpackPluginVersion: "3.4.5",
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTTBKelp*Z*tjR0pwT$cxa%0xWjFXa2RHT%d*WE9-$k1WMD%yWWxoQ2RtSnRWblZr%0%xMll6Tktha3d5T$d4ak0wNW9XakpWZ*1Od*JHc*hRek-w$2xk%2N*bFRP$3BpTWp*M1lqSTFiR0p1$$haWl-za*9Xa2RT-0dKcE1XbFpXRT$z$EROa2J*bFl$bTlh$0$sMllWZE9kb%pwT$dwa%1qRjNZakkx-kdKd$$-WmhWMD%yWW1re*R*bFlRWFZr%0%0MFdWaEtib$JZ$FQwPQ"
      }),
      ...o
    });
  };
  let y = e => {
    let {
      id: o,
      useBigIcon: t = false,
      icon: i,
      sourceMap: l
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: v(o, {
        className: t ? "w-54 h-54" : "w-28 h-28"
      }, i, l)
    });
  };
  let x = e => {
    let {
      hour: o,
      weatherId: t,
      icon: i,
      sourceMap: l
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex h-130 flex-col items-center gap-6 pt-12",
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: p.hours,
        children: o
      }), reactJsxRuntimeCoreReexport.jsx(y, {
        id: t ?? 0,
        icon: i,
        sourceMap: l
      })]
    });
  };
  let j = e => {
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: d("flex flex-col items-center gap-4 pt-12 pb-12 justify-between", e.hideQuality ? "h-216" : "h-246", e.isPredictDate && p["daily-item-selected"]),
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: `
          ${p.day}
          flex flex-col items-center text-xs
        `,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          children: e.desc
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "mb-6",
          children: e.time
        }), reactJsxRuntimeCoreReexport.jsx(y, {
          id: e.weatherId ?? 0,
          sourceMap: e.sourceMap
        }), !!e.pop && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: p["day-pop"],
          children: [e.pop, "%"]
        })]
      }), !e.hideQuality && reactJsxRuntimeCoreReexport.jsx("div", {
        className: `
            text-xs
            ${p["day-quality"]}
          `,
        children: e.air_quality_level || "暂无"
      })]
    });
  };
  let $ = e => {
    let {
      isTodayWeather: i,
      data: l,
      sourceMap: r,
      itemWidth: a
    } = e;
    let d = !i && l.every(e => !e.air_quality_level || e.air_quality_level.trim() === "");
    let n = l.map(e => ({
      time: e.desc,
      value: e.tempHigh
    })) ?? [];
    let s = l.map(e => ({
      time: e.desc,
      value: e.tempLow
    })) ?? [];
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "relative inline-block",
      style: {
        margin: "0  8px"
      },
      children: [reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "flex gap-0",
          children: i ? l.map((e, o) => {
            let t = `${e.weatherId}-${o}`;
            return reactJsxRuntimeCoreReexport.jsx("div", {
              className: "shrink-0",
              style: {
                width: `${a}px`
              },
              children: reactJsxRuntimeCoreReexport.jsx(x, {
                ...e,
                sourceMap: r
              })
            }, t);
          }) : l.map((e, o) => {
            let t = `${e.weatherId}-${o}`;
            return reactJsxRuntimeCoreReexport.jsx("div", {
              className: "shrink-0",
              style: {
                width: `${a}px`
              },
              children: reactJsxRuntimeCoreReexport.jsx(j, {
                ...e,
                isPredictDate: e.isPredictDate,
                sourceMap: r,
                hideQuality: d
              })
            }, t);
          })
        }), i ? reactJsxRuntimeCoreReexport.jsx(_, {
          isTodayWeather: i,
          data: l.map(e => ({
            time: e.hour || "",
            value: e.temp || 0
          })),
          chartHeight: 56,
          itemWidth: a || 0
        }) : reactJsxRuntimeCoreReexport.jsx(_, {
          isTodayWeather: i,
          data: n,
          lowTempData: s,
          itemWidth: a || 0,
          chartHeight: 110,
          bottom: d ? 12 : 38
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "hidden",
        "data-item-width": a
      })]
    });
  };
  let N = e => {
    let {
      city: a,
      data: d,
      isTodayWeather: n,
      sourceMap: s
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: p["weather-header"],
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: p["weather-header-prefix"],
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: p["weather-header-prefix-title"],
          children: a
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "flex items-center gap-16",
          children: [n ? reactJsxRuntimeCoreReexport.jsx("div", {
            className: p.temperature,
            children: `${d == null ? undefined : d.temperature}\xb0`
          }) : reactJsxRuntimeCoreReexport.jsxs("div", {
            className: p.temperature,
            children: [d == null ? undefined : d.tempRange?.[0], "~", d == null ? undefined : d.tempRange?.[1], "°"]
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "flex flex-col gap-2",
            children: [reactJsxRuntimeCoreReexport.jsxs("div", {
              className: `
                ${p.condition}
                flex items-center
              `,
              children: [reactJsxRuntimeCoreReexport.jsx("div", {
                className: "mr-10",
                children: d == null ? undefined : d.weather
              }), n && reactJsxRuntimeCoreReexport.jsxs("div", {
                className: `
                    ${p["temp-range"]}
                    ${p["temp-range__split"]}
                  `,
                children: [d == null ? undefined : d.tempRange?.[0], "~", d == null ? undefined : d.tempRange?.[1], "°"]
              }), (d == null ? undefined : d.quality) && reactJsxRuntimeCoreReexport.jsx("div", {
                className: p.quality,
                children: d.quality
              })]
            }), reactJsxRuntimeCoreReexport.jsxs("div", {
              className: "flex items-center gap-12",
              children: [(d == null ? undefined : d.windDir) && reactJsxRuntimeCoreReexport.jsx("div", {
                className: p.wind,
                children: d.windDir
              }), !!(d == null ? undefined : d.humidity) && reactJsxRuntimeCoreReexport.jsx("div", {
                className: p.wind,
                children: d == null ? undefined : d.humidity
              })]
            })]
          })]
        })]
      }), reactJsxRuntimeCoreReexport.jsx(y, {
        id: (d == null ? undefined : d.conditionId) ?? 0,
        icon: n ? d == null ? undefined : d.icon : undefined,
        useBigIcon: true,
        sourceMap: s
      })]
    });
  };
  var cardWrapperComponent = require("card-wrapper-component") /*id: 201819*/;
  var chevronRightIcon_1 = require("chevron-right-icon_1") /*id: 839336*/;
  var rightOutlinedIcon = require("right-outlined-icon") /*id: 831095*/;
  let k = e => {
    let {
      children: o,
      className: t,
      isTodayWeather: i,
      onTrackEvent: l,
      itemWidth: a,
      displayCount: n
    } = e;
    let s = reactCoreLibraryReexport.useRef(null);
    let [u, c] = reactCoreLibraryReexport.useState(false);
    let [b, m] = reactCoreLibraryReexport.useState(false);
    let [_, g] = reactCoreLibraryReexport.useState(false);
    let v = n ?? h(428);
    let y = a ?? w(428, v);
    let x = reactCoreLibraryReexport.useRef(null);
    let j = function (e = "scroll") {
      let o = s.current;
      if (!o) {
        m(false);
        g(false);
        return;
      }
      let t = o.scrollWidth - o.clientWidth;
      m(o.scrollLeft > 0);
      g(o.scrollLeft < t);
      if (e === "scroll") {
        if (x.current) {
          clearTimeout(x.current);
        }
        x.current = setTimeout(() => {
          l("venue_card_click", {
            click_option: "slider"
          });
        }, 250);
      }
    };
    let $ = function (e, o = 1) {
      if (!s.current) {
        return;
      }
      let t = v * y;
      if (!i) {
        t += 8;
      }
      t *= o;
      let l = s.current.scrollLeft + (e === "right" ? t : -t);
      s.current.scrollTo({
        left: l,
        behavior: "smooth"
      });
    };
    reactCoreLibraryReexport.useLayoutEffect(() => {
      j("init");
      let e = new ResizeObserver(() => j("resize"));
      if (s.current) {
        e.observe(s.current);
      }
      return () => {
        e.disconnect();
        if (x.current) {
          clearTimeout(x.current);
        }
      };
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: d(p["weather-detail-section"], t, "relative overflow-visible"),
      onMouseEnter: () => c(true),
      onMouseLeave: () => c(false),
      children: [reactJsxRuntimeCoreReexport.jsx("button", {
        className: d(p["weather-slide-button"], "left-4", {
          [p.show]: u && b,
          "pointer-events-none cursor-default": !b
        }),
        onClick: () => b && $("left"),
        "aria-label": "向左滑动",
        disabled: !b,
        children: reactJsxRuntimeCoreReexport.jsx(chevronRightIcon_1.ChevronRightIcon, {
          className: p["weather-slide-button-icon"]
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        ref: s,
        className: "w-full overflow-x-auto",
        onScroll: () => j("scroll"),
        children: o
      }), reactJsxRuntimeCoreReexport.jsx("button", {
        className: d(p["weather-slide-button"], "right-4", {
          [p.show]: u && _,
          "pointer-events-none cursor-default": !_
        }),
        onClick: () => _ && $("right"),
        "aria-label": "向右滑动",
        disabled: !_,
        children: reactJsxRuntimeCoreReexport.jsx(rightOutlinedIcon.RightOutlinedIcon, {
          className: p["weather-slide-button-icon"]
        })
      })]
    });
  };
  let F = e => {
    let {
      data: o,
      onTrackEvent: t
    } = e;
    let {
      display: a
    } = o ?? {};
    let [d, n] = reactIntersectionObserver_1.useInView({
      triggerOnce: true,
      initialInView: false,
      threshold: 0.8
    });
    let s = reactCoreLibraryReexport.useRef(null);
    let [c, b] = reactCoreLibraryReexport.useState(428);
    reactCoreLibraryReexport.useEffect(() => {
      if (!s.current) {
        return;
      }
      let e = new ResizeObserver(e => {
        let o = e[0];
        if (o && o.contentRect) {
          b(Math.round(o.contentRect.width));
        }
      });
      e.observe(s.current);
      return () => {
        e.disconnect();
      };
    }, []);
    let m = reactCoreLibraryReexport.useMemo(() => h(c), [c]);
    let _ = reactCoreLibraryReexport.useMemo(() => w(c, m), [c, m]);
    let {
      cityName: v,
      hourList: y,
      weekInfo: x,
      isTodayWeather: j,
      currentWeatherCondition: W
    } = reactCoreLibraryReexport.useMemo(() => function (e) {
      let r = {
        cityName: "",
        weekInfo: [],
        hourList: [],
        isTodayWeather: false,
        currentWeatherCondition: {
          temperature: 0,
          weather: "",
          tempRange: [0, 0],
          windDir: "",
          quality: "",
          icon: 0,
          conditionId: 0,
          humidity: ""
        }
      };
      if (!e) {
        return r;
      }
      let {
        city: a,
        aqi: d,
        time_feature: n,
        hourly: s,
        live_weather_data: {
          current: c
        },
        seven_forecast_data: b,
        target_date_weather: h,
        forecast: w
      } = e ?? {};
      r.cityName = a.name;
      let m = w || (b == null ? undefined : b.daily) || [];
      let p = m == null ? undefined : m[1];
      if ((n == null ? undefined : n.length) === 1 && (m == null ? undefined : m.length)) {
        p = m.find(e => e.predict_date === n[0]);
      }
      let f = false;
      if ((n == null ? undefined : n.length) === 1 && s) {
        f = n[0] === s[0].predict_date;
      }
      if (f) {
        Object.assign(r.currentWeatherCondition, {
          conditionId: Number(c.conditionId),
          icon: c.icon || -1,
          temperature: c.temp ?? 0,
          weather: c.weather ?? "",
          tempRange: [Number(p == null ? undefined : p.temp_low), Number(p == null ? undefined : p.temp_high)],
          windDir: c.wind_dir && c.wind_level ? `${c.wind_dir} ${c.wind_level} \u{7EA7}` : "",
          quality: (d == null ? undefined : d.quality_level) ? `\u{7A7A}\u{6C14}${d.quality_level}` : "",
          humidity: (h == null ? undefined : h.humidity) ? `\u{6E7F}\u{5EA6} ${h.humidity}%` : ""
        });
      } else {
        let e = `${p == null ? undefined : p.humidity}%`;
        let o = u(c.sun_rise);
        let t = Math.abs(u(p == null ? undefined : p.predict_date).diff(o, "day"));
        if (Number(p == null ? undefined : p.humidity) === 100 && t > 14) {
          e = "暂无";
        }
        Object.assign(r.currentWeatherCondition, {
          conditionId: (p == null ? undefined : p.weather_id_day) ?? 0,
          icon: (p == null ? undefined : p.icon_day) || -1,
          weather: (p == null ? undefined : p.weather_day) ?? "",
          tempRange: [Number((p == null ? undefined : p.temp_low_int) || (p == null ? undefined : p.temp_low)), Number((p == null ? undefined : p.temp_high_int) || (p == null ? undefined : p.temp_high))],
          quality: p && "air_quality_level" in p && p.air_quality_level ? `\u{7A7A}\u{6C14}${p.air_quality_level}` : "",
          humidity: (p == null ? undefined : p.humidity) ? `\u{6E7F}\u{5EA6} ${e}` : "",
          windDir: (p == null ? undefined : p.wind_dir_day) && (p == null ? undefined : p.wind_level_day) ? `${p.wind_dir_day} ${p.wind_level_day} \u{7EA7}` : ""
        });
      }
      let _ = function (e, o) {
        let {
          time_feature: t,
          liveDate: i
        } = o ?? {};
        let l = (t == null ? undefined : t.length) ? t[0] : "";
        let r = e.findIndex(e => e.predict_date === l);
        let a = [];
        if (r !== -1 && e.length - r >= 7) {
          a.push(...e.slice(r, r + 14));
        } else {
          a.push(...e.slice(-7));
        }
        return a.map(e => {
          let o = u(e == null ? undefined : e.predict_date).format("MM/DD");
          let t = Number(u(e == null ? undefined : e.predict_date).format("d"));
          let r = u(i || Date.now());
          let a = r.subtract(1, "day").format("YYYY-MM-DD");
          let d = r.format("YYYY-MM-DD");
          let n = r.add(1, "day").format("YYYY-MM-DD");
          let s = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][t];
          if ((e == null ? undefined : e.predict_date) === a) {
            s = "昨天";
          } else if ((e == null ? undefined : e.predict_date) === d) {
            s = "今天";
          } else if ((e == null ? undefined : e.predict_date) === n) {
            s = "明天";
          }
          return {
            time: o,
            desc: s,
            isPredictDate: l === (e == null ? undefined : e.predict_date),
            tempLow: Number(e ? "temp_low_int" in e ? e.temp_low_int : e.temp_low : undefined),
            tempHigh: Number(e ? "temp_high_int" in e ? e.temp_high_int : e.temp_high : undefined),
            weatherId: e == null ? undefined : e.weather_id_day,
            pop: e.pop,
            air_quality_level: "air_quality_level" in e ? e.air_quality_level : ""
          };
        });
      }(m, {
        time_feature: n,
        liveDate: c.sun_rise
      });
      return {
        ...r,
        weekInfo: _,
        hourList: function (e) {
          if (!e || (e == null ? undefined : e.length) === 0) {
            return [];
          }
          let o = new Date();
          return e.slice(0, 24).map((e, t) => {
            let i;
            if (t === 0) {
              try {
                let t = new Date(e.predict_time);
                if (Math.abs((o.getTime() - t.getTime()) / 3600000) <= 1) {
                  i = "现在";
                } else {
                  let o = e.predict_hour.toString().padStart(2, "0");
                  i = `${o}:00`;
                }
              } catch {
                let o = e.predict_hour.toString().padStart(2, "0");
                i = `${o}:00`;
              }
            } else {
              let o = e.predict_hour.toString().padStart(2, "0");
              i = `${o}:00`;
            }
            return {
              hour: i,
              temp: Number(e.temp),
              weatherId: Number(e.conditionId),
              icon: e.icon
            };
          });
        }(s),
        isTodayWeather: f
      };
    }(a), [a]);
    let R = (e, o) => {
      if (t != null) {
        t(e, {
          ...(o || {}),
          ala_src: j ? "moji_weather" : "future_weather"
        });
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (n) {
        R("venue_card_show");
      }
    }, [n]);
    let F = reactCoreLibraryReexport.useMemo(() => {
      let e = (a == null ? undefined : a.url_conf) || g;
      let o = e.moonConfigList.find(e => e.idList.includes(Number(W.icon)));
      return o || e.bgConfigList.find(e => e.idList.includes(Number(W.conditionId)));
    }, [W]);
    if (j && y.length < 24 || W && !F) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsxs(cardWrapperComponent.CardWrapper, {
        ref: e => {
          s.current = e;
          d(e);
          if (e) {
            b(e.clientWidth);
          }
        },
        classname: p.weather,
        cardClassName: p["weather-card"],
        children: [reactJsxRuntimeCoreReexport.jsx("video", {
          src: xssContentSanitizer.sanitizeUrl(F == null ? undefined : F.bgVideo, null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: false,
            bid: "flow_web",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: true,
            escapeRule: "escape-report",
            reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
            scmBranch: "release_train_samantha_2026-03-09_1120843696898",
            scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
            scmVersion: "1.0.4.168",
            webpackPluginVersion: "3.4.5",
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTTBKelp*Z*tjR0pwT$cxa%0xWjFXa2RHT%d*WE9-$k1WMD%yWWxoQ2RtSnRWblZr%0%xMll6Tktha3d5T$d4ak0wNW9XakpWZ*1Od*JHc*hRek-w$2xk%2N*bFRP$3BpTWp*M1lqSTFiR0p1$$haWl-za*9Xa2RT-0dKcE1XbFpXRT$z$EROa2J*bFl$bTlh$0$sMllW-zFhMXBZWjNWa1NFNDBX$mhL-m1SW$R%MD0"
          }),
          autoPlay: true,
          loop: true,
          muted: true,
          poster: F == null ? undefined : F.bgPost,
          playsInline: true,
          className: p["weather-video-bg"]
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: p["weather-content-overlay"],
          children: [reactJsxRuntimeCoreReexport.jsx(N, {
            isTodayWeather: j,
            city: v,
            data: W,
            sourceMap: (a == null ? undefined : a.url_conf) || g
          }), reactJsxRuntimeCoreReexport.jsx(k, {
            isTodayWeather: j,
            className: `
            ${j ? "pb-20" : "pb-8"}
          `,
            onTrackEvent: R,
            itemWidth: _,
            displayCount: m,
            children: j ? reactJsxRuntimeCoreReexport.jsx("div", {
              className: p["weather-content"],
              children: reactJsxRuntimeCoreReexport.jsx($, {
                isTodayWeather: j,
                data: y,
                sourceMap: (a == null ? undefined : a.url_conf) || g,
                itemWidth: _
              })
            }) : reactJsxRuntimeCoreReexport.jsx("div", {
              className: p["weather-content"],
              children: reactJsxRuntimeCoreReexport.jsx($, {
                isTodayWeather: j,
                data: x,
                sourceMap: (a == null ? undefined : a.url_conf) || g,
                itemWidth: _
              })
            })
          })]
        })]
      });
    }
  };
  require.r(exports);
  require.d(exports, {
    WeatherCard: function () {
      return F;
    }
  });
}