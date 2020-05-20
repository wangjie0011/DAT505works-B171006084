function chinaMap_Rescue(){

	var del = document.getElementById("chinaMap");
	if (del !=null){
		del.parentNode.removeChild(del);
	}
  var del1 = document.getElementById("worldMap");
  if (del1 !=null){
    del1.parentNode.removeChild(del1);
  }
	var div = document.createElement('div');
	div.id = "chinaMap_Rescue";
	div.style.cssText="width: 1200px;height:600px;margin-left:275px;margin-top: 20px;border:0px solid #ccc"
	var bo = document.body;
	bo.insertBefore(div, bo.lastChild);

  var chinaGeoCoordMap = {
		'Heilongjiang': [127.9688, 45.368],
		'Inner Mongolia': [110.3467, 41.4899],
		"Jilin Province": [125.8154, 44.2584],
		'Beijing': [116.4551, 40.2539],
		"Liaoning": [123.1238, 42.1216],
		"Hebei Province": [114.4995, 38.1006],
		"Tianjin": [117.4219, 39.4189],
		"Shanxi": [112.3352, 37.9413],
		"Shaanxi": [109.1162, 34.2004],
		"Guangdong Province": [113.12244, 23.009505],
		"Gansu": [103.5901, 36.3043],
		"Ningxia": [106.3586, 38.1775],
		"Qinghai": [101.4038, 36.8207],
		"Xinjiang": [87.9236, 43.5883],
		"Xizang": [91.11, 29.97],
		"Sichuan": [103.9526, 30.7617],
		"Chongqing": [108.384366, 30.439702],
		"Shandong": [117.1582, 36.8701],
		"Henan": [113.4668, 34.6234],
		"Jiangsu": [118.8062, 31.9208],
		"Anhui": [117.29, 32.0581],
		"Hubei": [114.3896, 30.6628],
		"Zhejiang": [119.5313, 29.8773],
		"Fujian": [119.4543, 25.9222],
		"Jiangxi": [116.0046, 28.6633],
		"Hunan": [113.0823, 28.2568],
		"Guizhou": [106.6992, 26.7682],
		"Yunnan": [102.9199, 25.4663],
		"GuangXi": [108.479, 23.1152],
		"Hainan": [110.3893, 19.8516],
		'Shanghai': [121.4648, 31.2891],
		'Hong Kong':[114.12244, 22.3956],
		'Taiwan':[120.82244, 23.009505],
		'Macao':[113.5544, 22.309505]
	};


	var chinaDatas = [
								[{name:'Heilongjiang',value:[2020,1.27,8,1533]}],
								[{name:'Inner Mongolia',value:[2020,1.28,8,985]}],
								[{name:'Beijing',value:[2020,2.7,12,2043]}],
								[{name:'Jilin Province',value:[2020,1.24,14,1499]}],
								[{name:'Liaoning',value:[2020,1.26,11,2019]}],
								[{name:'Hebei Province',value:[2020,1.26,9,1062]}],
								[{name:'Tianjin',value:[2020,1.29,13,1152]}],
								[{name:'Shanxi',value:[2020,1.27,13,1504]}],
								[{name:'Shaanxi',value:[2020,1.26,19,1440]}],
								[{name:'Guangdong Province',value:[2020,1.25,24,2581]}],
								[{name:'Gansu',value:[2020,1.28,6,770]}],
								[{name:'Ningxia',value:[2020,1.28,6,782]}],
								[{name:'Qinghai',value:[2020,1.28,3,249]}],
								[{name:'Xinjiang',value:[2020,1.28,3,386]}],
								[{name:'Sichuan',value:[2020,1.25,10,1484]}],
								[{name:'Chongqing',value:[2020,1.26,18,1637]}],
								[{name:'Shandong',value:[2020,1.25,12,1892]}],
								[{name:'Henan',value:[2020,1.26,15,1358]}],
								[{name:'Jiangsu',value:[2020,1.25,13,2065]}],
								[{name:'Anhui',value:[2020,1.27,7,1274]}],
								[{name:'Zhejiang',value:[2020,1.25,5,1759]}],
								[{name:'Fujian',value:[2020,1.27,12,1393]}],
								[{name:'Yunnan',value:[2020,1.27,8,1139]}],
								[{name:'Jiangxi',value:[2020,1.27,9,1229]}],
								[{name:'Hunan',value:[2020,1.25,6,620]}],
								[{name:'Guizhou',value:[2020,1.27,9,1358]}],
								[{name:'GuangXi',value:[2020,1.27,8,866]}],
								[{name:'Hainan',value:[2020,1.28,7,8242]}],
								[{name:'Shanghai',value:[2020,1.24,9,1640]}],

								];


  var myChart = echarts.init(document.getElementById('chinaMap_Rescue'));
  var uploadedDataURL = "json/china.json";

	var convertData = function(data) {
		var res = [];
		for(var i = 0; i < data.length; i++) {
			console.log(dataItem);
			var dataItem = data[i];
			var fromCoord = chinaGeoCoordMap[dataItem[0].name];
			var toCoord = [114.3896, 30.6628];
			if(fromCoord && toCoord) {
				res.push([{
					coord: fromCoord,
					value: dataItem[0].value
				}, {
					coord: toCoord,
				}]);
			}
		}
		return res;
	};

  $.getJSON(uploadedDataURL, function(geoJson) {

    echarts.registerMap('chinaRescue', geoJson);
	var series = [];
	[['Hubei', chinaDatas]].forEach(function(item, i) {
	    console.log(item[0])
		series.push({
				type: 'lines',
				zlevel: 2,
				effect: {
					show: true,
					period: 4,
					trailLength: 0.02,

          symbol:cross,
					symbolSize: 15,
				},
				lineStyle: {
					normal: {
						width: 0,
						opacity: 1,
						curveness: .3
					}
				},
				data: convertData(item[1])
			}, {
				type: 'effectScatter',
				coordinateSystem: 'geo',
				zlevel: 2,
				rippleEffect: {
					period: 4,
					brushType: 'stroke',
					scale: 4
				},
				label: {
					normal: {
						show: true,
						position: 'right',
						offset: [5, 0],
						formatter: function(params){
							return params.data.name;
						},
						fontSize: 13,
            color:'#003300'
					},
					emphasis: {
						show: true
					}
				},
				symbol: cross,
				symbolSize: 5,
				itemStyle: {
					normal: {
						show: false,
						color: '#f00'
					}
				},
				data: item[1].map(function(dataItem) {
					return {
						name: dataItem[0].name,
						value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
					};
				}),
			},
			{
				type: 'scatter',
				coordinateSystem: 'geo',
				zlevel: 2,
				rippleEffect: {
					period: 4,
					brushType: 'stroke',
					scale: 4
				},
				label: {
					normal: {
						show: true,
						position: 'right',

						color: '#0f0',
						formatter: '{b}',
						textStyle: {
							color: "#0f0"
						}
					},
					emphasis: {
						show: true,
						color: "#f60"
					}
				},

        symbol:cross,
        symbolSize:50,
        data: [{
					name: item[0],
					value: chinaGeoCoordMap[item[0]].concat([10]),
				}],
			}
		);
	});

	option = {
		tooltip: {
			trigger: 'item',
			backgroundColor: '#000000',
			borderColor: '#FFFFCC',
			showDelay: 0,
			hideDelay: 0,
			enterable: true,
			transitionDuration: 0,
			extraCssText: 'z-index:100',
			formatter: function(params, ticket, callback) {
				var res = "";
				var name = params.name;
				var value = params.value[params.seriesIndex + 1];
				res = name+"COVID-19 Chinese Rescue Data" + '<br/>' +
				"First batch departure time:"+value[0]+'.'+value[1]+'<br/>'+
				"Total batch:"+value[2]+'<br/>'+
				"Total number:"+value[3];
				return res;
			}
		},
		backgroundColor:"#000000",
		geo: {
			map: 'china',
			zoom: 1.2,
			label: {
				emphasis: {
					show: false
				}
			},
			roam: true,
			itemStyle: {
				normal: {
          areaColor: '#CC9966',
          borderColor: '#000000',
          shadowColor: '#CC9966',
          shadowBlur: 4,
          shadowOffsetX: 10,
          opacity:0.5
				},
				emphasis: {
					color: '#000000' 
				},
			},
      z:-2
		},
		series: series
	};
  	myChart.setOption(option);
})
}

var cross='image://data:image/png;base64,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'
