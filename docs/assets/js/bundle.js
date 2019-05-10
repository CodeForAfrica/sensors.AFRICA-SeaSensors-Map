/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nmapboxgl.accessToken = 'pk.eyJ1IjoiY29kZWZvcmFmcmljYSIsImEiOiJjanZncTltbGMwNWNmNGFxdGVnMmgybm13In0.UaoGiLigmlo8tArnSIcRhg';\nvar map = new mapboxgl.Map({\n  container: 'map',\n  style: 'mapbox://styles/codeforafrica/cju18pxjf12yj1gp7qhdmgicd',\n  center: [39.003574, -5.208427],\n  zoom: 8.7\n});\nvar blastData = {\n  type: 'FeatureCollection',\n  features: [{\n    type: 'Feature',\n    geometry: {\n      type: 'Point',\n      coordinates: [39.07604, -5.49252]\n    },\n    properties: {\n      Id: 1,\n      Location: 'Maziwe Island',\n      Date: '6/4/2018',\n      Day: 'Monday',\n      Time: '12:29:53 PM',\n      'Time of Day': 'PM',\n      'Tidal State': 'Low',\n      'Spring/Neap': '',\n      'Wav-File-Name': 'Ish_Bomb20180604_122952_911',\n      'Blast Bearing': 28.66,\n      'Detection Radius(km)': '30'\n    }\n  }, {\n    type: 'Feature',\n    geometry: {\n      type: 'Point',\n      coordinates: [39.07604, -5.49252]\n    },\n    properties: {\n      Id: 2,\n      Location: 'Maziwe Island',\n      Date: '6/16/2018',\n      Day: 'Saturday',\n      Time: '8:29:45 AM',\n      'Time of Day': 'AM',\n      'Tidal State': 'Falling',\n      'Spring/Neap': 'Spring',\n      'Wav-File-Name': 'Ish_Bomb20180616_082945_232',\n      'Blast Bearing': 33.14,\n      'Detection Radius(km)': '30'\n    }\n  }, {\n    type: 'Feature',\n    geometry: {\n      type: 'Point',\n      coordinates: [39.07604, -5.49252]\n    },\n    properties: {\n      Id: 3,\n      Location: 'Maziwe Island',\n      Date: '6/16/2018',\n      Day: 'Saturday',\n      Time: '9:22:11 AM',\n      'Time of Day': 'AM',\n      'Tidal State': 'Falling',\n      'Spring/Neap': 'Spring',\n      'Wav-File-Name': 'Ish_Bomb20180616_092210_703',\n      'Blast Bearing': 31.72,\n      'Detection Radius(km)': '30'\n    }\n  }, {\n    type: 'Feature',\n    geometry: {\n      type: 'Point',\n      coordinates: [39.07604, -5.49252]\n    },\n    properties: {\n      Id: 4,\n      Location: 'Maziwe Island',\n      Date: '6/16/2018',\n      Day: 'Saturday',\n      Time: '9:23:03 AM',\n      'Time of Day': 'AM',\n      'Tidal State': 'Falling',\n      'Spring/Neap': 'Spring',\n      'Wav-File-Name': 'Ish_Bomb20180616_092302_786',\n      'Blast Bearing': 33.14,\n      'Detection Radius(km)': '30'\n    }\n  }, {\n    type: 'Feature',\n    geometry: {\n      type: 'Point',\n      coordinates: [39.07604, -5.49252]\n    },\n    properties: {\n      Id: 5,\n      Location: 'Maziwe Island',\n      Date: '6/16/2018',\n      Day: 'Saturday',\n      Time: '9:24:45 AM',\n      'Time of Day': 'AM',\n      'Tidal State': 'Falling',\n      'Spring/Neap': 'Spring',\n      'Wav-File-Name': 'Ish_Bomb20180616_092445_315',\n      'Blast Bearing': 33.14,\n      'Detection Radius(km)': '30'\n    }\n  }, {\n    type: 'Feature',\n    geometry: {\n      type: 'Point',\n      coordinates: [39.07604, -5.49252]\n    },\n    properties: {\n      Id: 6,\n      Location: 'Maziwe Island',\n      Date: '6/16/2018',\n      Day: 'Saturday',\n      Time: '9:29:57 AM',\n      'Time of Day': 'AM',\n      'Tidal State': 'Falling',\n      'Spring/Neap': 'Spring',\n      'Wav-File-Name': 'Ish_Bomb20180616_092956_809',\n      'Blast Bearing': 33.14,\n      'Detection Radius(km)': '30'\n    }\n  }, {\n    type: 'Feature',\n    geometry: {\n      type: 'Point',\n      coordinates: [39.07604, -5.49252]\n    },\n    properties: {\n      Id: 7,\n      Location: 'Maziwe Island',\n      Date: '6/25/2018',\n      Day: 'Monday',\n      Time: '8:15:53 AM',\n      'Time of Day': 'AM',\n      'Tidal State': 'Low',\n      'Spring/Neap': 'Neap',\n      'Wav-File-Name': 'Ish_Bomb20180625_081553_435',\n      'Blast Bearing': 28.62,\n      'Detection Radius(km)': '30'\n    }\n  }, {\n    type: 'Feature',\n    geometry: {\n      type: 'Point',\n      coordinates: [39.07604, -5.49252]\n    },\n    properties: {\n      Id: 8,\n      Location: 'Maziwe Island',\n      Date: '6/25/2018',\n      Day: 'Monday',\n      Time: '9:06:39 AM',\n      'Time of Day': 'AM',\n      'Tidal State': 'Low',\n      'Spring/Neap': 'Neap',\n      'Wav-File-Name': 'Ish_Bomb20180625_090639_061',\n      'Blast Bearing': 33.14,\n      'Detection Radius(km)': '30'\n    }\n  }, {\n    type: 'Feature',\n    geometry: {\n      type: 'Point',\n      coordinates: [39.07604, -5.49252]\n    },\n    properties: {\n      Id: 9,\n      Location: 'Maziwe Island',\n      Date: '7/10/2018',\n      Day: 'Tuesday',\n      Time: '9:31:09 AM',\n      'Time of Day': 'AM',\n      'Tidal State': 'Rising',\n      'Spring/Neap': '',\n      'Wav-File-Name': 'Ish_Bomb20180710_093109_449',\n      'Blast Bearing': 27.05,\n      'Detection Radius(km)': '30'\n    }\n  }, {\n    type: 'Feature',\n    geometry: {\n      type: 'Point',\n      coordinates: [39.07604, -5.49252]\n    },\n    properties: {\n      Id: 10,\n      Location: 'Maziwe Island',\n      Date: '7/10/2018',\n      Day: 'Tuesday',\n      Time: '9:31:31 AM',\n      'Time of Day': 'AM',\n      'Tidal State': 'Rising',\n      'Spring/Neap': '',\n      'Wav-File-Name': 'Ish_Bomb20180710_093130_896',\n      'Blast Bearing': 28.57,\n      'Detection Radius(km)': '30'\n    }\n  }, {\n    type: 'Feature',\n    geometry: {\n      type: 'Point',\n      coordinates: [39.07604, -5.49252]\n    },\n    properties: {\n      Id: 11,\n      Location: 'Maziwe Island',\n      Date: '7/11/2018',\n      Day: 'Wednesday',\n      Time: '7:59:01 AM',\n      'Time of Day': 'AM',\n      'Tidal State': 'Low',\n      'Spring/Neap': '',\n      'Wav-File-Name': 'Ish_Bomb20180711_075900_778',\n      'Blast Bearing': 28.57,\n      'Detection Radius(km)': '30'\n    }\n  }, {\n    type: 'Feature',\n    geometry: {\n      type: 'Point',\n      coordinates: [39.07604, -5.49252]\n    },\n    properties: {\n      Id: 12,\n      Location: 'Maziwe Island',\n      Date: '7/11/2018',\n      Day: 'Wednesday',\n      Time: '8:40:15 AM',\n      'Time of Day': 'AM',\n      'Tidal State': 'Low',\n      'Spring/Neap': '',\n      'Wav-File-Name': 'Ish_Bomb20180711_084015_258',\n      'Blast Bearing': 27.05,\n      'Detection Radius(km)': '30'\n    }\n  }, {\n    type: 'Feature',\n    geometry: {\n      type: 'Point',\n      coordinates: [39.07604, -5.49252]\n    },\n    properties: {\n      Id: 13,\n      Location: 'Maziwe Island',\n      Date: '7/11/2018',\n      Day: 'Wednesday',\n      Time: '8:40:34 AM',\n      'Time of Day': 'AM',\n      'Tidal State': 'Low',\n      'Spring/Neap': '',\n      'Wav-File-Name': 'Ish_Bomb20180711_084033_761',\n      'Blast Bearing': 27.05,\n      'Detection Radius(km)': '30'\n    }\n  }, {\n    type: 'Feature',\n    geometry: {\n      type: 'Point',\n      coordinates: [39.07604, -5.49252]\n    },\n    properties: {\n      Id: 14,\n      Location: 'Maziwe Island',\n      Date: '7/14/2018',\n      Day: 'Saturday',\n      Time: '12:32:11 PM',\n      'Time of Day': 'PM',\n      'Tidal State': 'Rising',\n      'Spring/Neap': 'Spring',\n      'Wav-File-Name': 'Ish_Bomb20180714_123210_673',\n      'Blast Bearing': 34.84,\n      'Detection Radius(km)': '30'\n    }\n  }, {\n    type: 'Feature',\n    geometry: {\n      type: 'Point',\n      coordinates: [39.07604, -5.49252]\n    },\n    properties: {\n      Id: 15,\n      Location: 'Maziwe Island',\n      Date: '7/15/2018',\n      Day: 'Sunday',\n      Time: '8:41:02 AM',\n      'Time of Day': 'AM',\n      'Tidal State': 'Falling',\n      'Spring/Neap': 'Spring',\n      'Wav-File-Name': 'Ish_Bomb20180715_084102_135',\n      'Blast Bearing': 33.23,\n      'Detection Radius(km)': '30'\n    }\n  }, {\n    type: 'Feature',\n    geometry: {\n      type: 'Point',\n      coordinates: [39.30479, -4.86934]\n    },\n    properties: {\n      Id: 16,\n      Location: 'Fish Eagle',\n      Date: '8/8/2018',\n      Day: 'Wednesday',\n      Time: '2:29:37 PM',\n      'Time of Day': 'PM',\n      'Tidal State': 'High',\n      'Spring/Neap': '',\n      'Wav-File-Name': 'Ish_Bomb20180808_142936_784',\n      'Blast Bearing': 15.38,\n      'Detection Radius(km)': '30'\n    }\n  }, {\n    type: 'Feature',\n    geometry: {\n      type: 'Point',\n      coordinates: [39.30479, -4.86934]\n    },\n    properties: {\n      Id: 17,\n      Location: 'Fish Eagle',\n      Date: '8/21/2018',\n      Day: 'Tuesday',\n      Time: '3:20:55 PM',\n      'Time of Day': 'PM',\n      'Tidal State': 'Falling',\n      'Spring/Neap': '',\n      'Wav-File-Name': 'Ish_Bomb20180821_152054_827',\n      'Blast Bearing': 15.41,\n      'Detection Radius(km)': '30'\n    }\n  }, {\n    type: 'Feature',\n    geometry: {\n      type: 'Point',\n      coordinates: [39.07585, -5.49254]\n    },\n    properties: {\n      Id: 18,\n      Location: 'Maziwe Island',\n      Date: '9/29/2018 9:35:14',\n      Day: 'Saturday',\n      Time: '09:35:14AM',\n      'Time of Day': 'AM',\n      'Tidal State': '',\n      'Spring/Neap': '',\n      'Wav-File-Name': 'Ish_Bomb20180929_093514_719',\n      'Blast Bearing': 17.54,\n      'Detection Radius(km)': '30'\n    }\n  }]\n};\n\nfunction applyPrecision(coordinates) {\n  return coordinates.map(function (c) {\n    return Number(c.toFixed(3));\n  });\n} // Get unique coordinates to use for mapping\n\n\nvar set = new Set(blastData.features.map(function (f) {\n  return applyPrecision(f.geometry.coordinates).join(',');\n}));\n\nvar coordinates = _toConsumableArray(set).map(function (c) {\n  return c.split(',').map(function (cstr) {\n    return Number(cstr);\n  });\n});\n\nfunction circlesSource(centers, radiusInKm) {\n  var points = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 64;\n  var features = centers.map(function (center) {\n    console.log(center);\n    var coords = {\n      latitude: center[1],\n      longitude: center[0]\n    };\n    var km = radiusInKm;\n    var ret = [];\n    var distanceX = km / (111.32 * Math.cos(coords.latitude * Math.PI / 180));\n    var distanceY = km / 110.574;\n\n    for (var i = 0; i < points; i++) {\n      theta = i / points * (2 * Math.PI);\n      x = distanceX * Math.cos(theta);\n      y = distanceY * Math.sin(theta);\n      ret.push([coords.longitude + x, coords.latitude + y]);\n    }\n\n    ret.push(ret[0]);\n    return {\n      type: 'Feature',\n      geometry: {\n        type: 'Polygon',\n        coordinates: [ret]\n      }\n    };\n  });\n  return {\n    type: 'geojson',\n    data: {\n      type: 'FeatureCollection',\n      features: features\n    }\n  };\n}\n\nfunction lineSource(centers, distanceInKm) {\n  var features = [];\n  centers.forEach(function (center) {\n    var bearings = blastData.features.filter(function (f) {\n      return applyPrecision(f.geometry.coordinates).join(',') == center.join(',');\n    }).map(function (f) {\n      return f.properties['Blast Bearing'];\n    });\n    features = features.concat(bearings.map(function (bearing) {\n      var distanceX = distanceInKm / (111.32 * Math.cos(center[1] * Math.PI / 180));\n      var distanceY = distanceInKm / 110.574;\n      theta = bearing * Math.PI / 180;\n      x = distanceX * Math.cos(theta);\n      y = distanceY * Math.sin(theta);\n      return {\n        type: 'Feature',\n        geometry: {\n          \"type\": \"LineString\",\n          coordinates: [center, [center[0] + x, center[1] + y]]\n        }\n      };\n    }));\n  });\n  return {\n    type: 'geojson',\n    data: {\n      type: 'FeatureCollection',\n      features: features\n    }\n  };\n}\n\nmap.on('load', function () {\n  map.addLayer({\n    id: 'points',\n    type: 'circle',\n    source: {\n      type: 'geojson',\n      data: blastData\n    },\n    layout: {},\n    paint: {\n      'circle-color': '#463354',\n      'circle-opacity': 0.8\n    }\n  });\n  map.addSource('circles', circlesSource(coordinates, 30));\n  map.addSource('lines', lineSource(coordinates, 30));\n  map.addLayer({\n    id: 'polygon',\n    type: 'fill',\n    source: 'circles',\n    paint: {\n      'fill-color': '#463354',\n      'fill-opacity': 0.6\n    }\n  });\n  map.addLayer({\n    \"id\": \"route\",\n    \"type\": \"line\",\n    \"source\": 'lines',\n    \"layout\": {\n      \"line-join\": \"round\",\n      \"line-cap\": \"round\"\n    },\n    \"paint\": {\n      \"line-color\": \"#1798A6\",\n      \"line-width\": 1\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./src/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/js/main.js */\"./src/js/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/main.js?");

/***/ })

/******/ });