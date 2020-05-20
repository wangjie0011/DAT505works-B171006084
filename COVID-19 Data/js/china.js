function chinaMap(){

		var del = document.getElementById("worldMap");
		if (del !=null){
			del.parentNode.removeChild(del);
		}
		var del1 = document.getElementById("chinaMap_Rescue");
		if (del1 !=null){
			del1.parentNode.removeChild(del1);
		}
		var div = document.createElement('div');
		div.id = "chinaMap";
		div.style.cssText="width: 1200px;height:600px;margin-left:275px;margin-top: 20px;border:0px solid #ccc"
		var bo = document.body;
		bo.insertBefore(div, bo.lastChild);

		var camera, scene, renderer;
		var controls;

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
								[{name:'Heilongjiang',value:[311,944,13,620,1.38]}],
								[{name:'Inner Mongolia',value:[46,201,1,154,0.50]}],
								[{name:'Beijing',value:[33,593,9,551,1.52]}],
								[{name:'Jilin Province',value:[8,112,1,103,0.89]}],
								[{name:'Liaoning',value:[0,146,2,144,1.37]}],
								[{name:'Hebei Province',value:[4,328,6,318,1.83]}],
								[{name:'Tianjin',value:[1,190,3,186,1.58]}],
								[{name:'Shanxi',value:[22,198,0,176,0.00]}],
								[{name:'Shaanxi',value:[43,306,3,260,0.98]}],
								[{name:'Guangdong Province',value:[13,1588,8,1567,0.50]}],
								[{name:'Gansu',value:[0,139,2,137,1.44]}],
								[{name:'Ningxia',value:[0,75,0,75,0.00]}],
								[{name:'Qinghai',value:[0,18,0,18,0.00]}],
								[{name:'Xinjiang',value:[0,76,3,73,3.95]}],
								[{name:'Xizang',value:[0,1,0,1,0.00]}],
								[{name:'Sichuan',value:[0,561,3,558,0.53]}],
								[{name:'Chongqing',value:[0,579,6,573,1.04]}],
								[{name:'Shandong',value:[8,787,7,772,0.89]}],
								[{name:'Henan',value:[0,1276,22,1254,1.72]}],
								[{name:'Jiangsu',value:[3,653,0,650,0.00]}],
								[{name:'Anhui',value:[0,991,6,985,0.61]}],
								[{name:'Hubei',value:[0,68128,4512,63616,6.62]}],
								[{name:'Zhejiang',value:[2,1268,1,1265,0.08]}],
								[{name:'Fujian',value:[2,356,1,353,0.28]}],
								[{name:'Yunnan',value:[2,185,2,181,1.08]}],
								[{name:'Jiangxi',value:[0,937,1,936,0.11]}],
								[{name:'Hunan',value:[0,1019,4,1015,0.39]}],
								[{name:'Guizhou',value:[0,147,2,145,1.36]}],
								[{name:'GuangXi',value:[0,254,2,252,0.79]}],
								[{name:'Hainan',value:[0,168,6,162,3.57]}],
								[{name:'Shanghai',value:[31,653,7,615,1.07]}],
								[{name:'Hong Kong',value:[156,1039,4,879,0.38]}],
								[{name:'Taiwan',value:[94,432,6,332,1.39]}],
								[{name:'Macao',value:[6,45,0,39,0.00]}]
							];

		var myChart = echarts.init(document.getElementById('chinaMap'));

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

			echarts.registerMap('china', geoJson);
			var series = [];

			[['Hubei', chinaDatas]].forEach(function(item, i) {
				series.push({
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
						symbol: function(params) {
							var value = params[2];
							var value_ = value[4];
							var pattern;
							if(value_>5){
								pattern = 'image://./image/star_deep.svg';
							}
							else if (value_<5 && value_>3) {
								pattern = 'image://./image/star.svg';
							}
							else if(value_<3 && value_>1){
								pattern = 'image://./image/star_min.svg';
							}
							else if (value_<1) {
								pattern = 'circle';
							}
							return pattern;
						},
						symbolSize: function(params){
							var value = params[2];
							var value_ = value[4];
							var size;
							if(value_>5){
								size = 38;
							}
							else if (value_<5 && value_>3) {
								size = 23;
							}
							else if(value_<3 && value_>1){
								size = 15;
							}
							else if (value_<1) {
								size = 8;
							}
							return size;
						},
						itemStyle: {
							normal: {
								show: false,
								color:function(params) {
									//console.log(params.data.value[2]);
									var value = params.data.value[2];
									var value_ = value[4];
									var pattern,pattern1;
									if(value_<5){
										pattern = '#faf8c8';
									}
									else{
										pattern = '#FFF265';
									}
									return pattern;
								},
							}
						},
						data: item[1].map(function(dataItem) {
							return {
								name: dataItem[0].name,
								value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
							};
						}),
					},
				);
			});

			var option = {
				tooltip: {
					trigger: 'item',
					backgroundColor: '#000000',
					borderColor: '#FFFFCC',
					showDelay: 0,
					hideDelay: 0,
					enterable: true,
					transitionDuration: 0,
					extraCssText: 'z-index:100',
					formatter: function(params) {
						var res = "";
						//console.log(params);
						var name = params.name;
						var value = params.value[2];
						res = name+"COVID-19 Data" + '<br/>' +
						"Existing confirmed:"+value[0]+'<br/>'+
						"Total confirmed:"+value[1]+'<br/>'+
						"Total death:"+value[2]+'<br/>'+
						"Total cure:"+value[3]+'<br/>'+
						"Death rate:"+value[4]+"%";
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
					regions:[
						{name:'湖北',itemStyle:{areaColor:"#4f070d",shadowColor:"#4f070d"}},
						{name:'广东',itemStyle:{areaColor:"#811c24",shadowColor:"#811c24"}},
						{name:'河南',itemStyle:{areaColor:"#811c24",shadowColor:"#811c24"}},
						{name:'浙江',itemStyle:{areaColor:"#811c24",shadowColor:"#811c24"}},
						{name:'香港',itemStyle:{areaColor:"#811c24",shadowColor:"#811c24"}},
						{name:'湖南',itemStyle:{areaColor:"#811c24",shadowColor:"#811c24"}},
						{name:'安徽',itemStyle:{areaColor:"#cb2a2f",shadowColor:"#cb2a2f"}},
						{name:'黑龙江',itemStyle:{areaColor:"#cb2a2f",shadowColor:"#cb2a2f"}},
						{name:'江西',itemStyle:{areaColor:"#cb2a2f",shadowColor:"#cb2a2f"}},
						{name:'山东',itemStyle:{areaColor:"#cb2a2f",shadowColor:"#cb2a2f"}},
						{name:'上海',itemStyle:{areaColor:"#cb2a2f",shadowColor:"#cb2a2f"}},
						{name:'江苏',itemStyle:{areaColor:"#cb2a2f",shadowColor:"#cb2a2f"}},
						{name:'北京',itemStyle:{areaColor:"#cb2a2f",shadowColor:"#cb2a2f"}},
						{name:'重庆',itemStyle:{areaColor:"#cb2a2f",shadowColor:"#cb2a2f"}},
						{name:'四川',itemStyle:{areaColor:"#cb2a2f",shadowColor:"#cb2a2f"}},
						{name:'台湾',itemStyle:{areaColor:"#e55a4e",shadowColor:"#e55a4e"}},
						{name:'福建',itemStyle:{areaColor:"#e55a4e",shadowColor:"#e55a4e"}},
						{name:'河北',itemStyle:{areaColor:"#e55a4e",shadowColor:"#e55a4e"}},
						{name:'陕西',itemStyle:{areaColor:"#e55a4e",shadowColor:"#e55a4e"}},
						{name:'广西',itemStyle:{areaColor:"#e55a4e",shadowColor:"#e55a4e"}},
						{name:'内蒙古',itemStyle:{areaColor:"#e55a4e",shadowColor:"#e55a4e"}},
						{name:'山西',itemStyle:{areaColor:"#e55a4e",shadowColor:"#e55a4e"}},
						{name:'天津',itemStyle:{areaColor:"#e55a4e",shadowColor:"#e55a4e"}},
						{name:'云南',itemStyle:{areaColor:"#e55a4e",shadowColor:"#e55a4e"}},
						{name:'海南',itemStyle:{areaColor:"#e55a4e",shadowColor:"#e55a4e"}},
						{name:'贵州',itemStyle:{areaColor:"#e55a4e",shadowColor:"#e55a4e"}},
						{name:'辽宁',itemStyle:{areaColor:"#e55a4e",shadowColor:"#e55a4e"}},
						{name:'甘肃',itemStyle:{areaColor:"#e55a4e",shadowColor:"#e55a4e"}},
						{name:'吉林',itemStyle:{areaColor:"#e55a4e",shadowColor:"#e55a4e"}},
						{name:'新疆',itemStyle:{areaColor:"#f59e83",shadowColor:"#f59e83"}},
						{name:'宁夏',itemStyle:{areaColor:"#f59e83",shadowColor:"#f59e83"}},
						{name:'澳门',itemStyle:{areaColor:"#f59e83",shadowColor:"#f59e83"}},
						{name:'青海',itemStyle:{areaColor:"#f59e83",shadowColor:"#f59e83"}},
						{name:'西藏',itemStyle:{areaColor:"#fdebcf",shadowColor:"#f59e83"}}
					],
					roam: true,
					itemStyle: {
						normal: {
							areaColor: '#CC9966',
							borderColor: '#000000',
							shadowColor: '#FFFFFF',
							shadowBlur: 4,
							shadowOffsetX: 5,
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

		});
}

//init();
//animate();
var star = ' path M 1077.53 388.206 C 1072.06 371.533 1056.51 360.326 1039.01 360.326 L 686.957 360.326 L 578.162 27.8249 C 572.876 11.2074 557.38 0 539.766 0 C 522.263 0 506.711 11.2074 501.37 27.7004 L 392.45 360.326 L 40.4676 360.326 C 22.9093 360.326 7.39878 371.533 2.00261 388.206 C -3.46275 404.713 2.52839 422.963 16.683 433.119 L 301.504 638.533 L 192.764 971.214 C 187.244 987.776 193.235 1005.86 207.445 1016.13 C 221.475 1026.34 240.846 1026.34 254.945 1016.13 L 539.766 810.588 L 824.642 1016.13 C 831.63 1021.19 839.973 1023.82 848.372 1023.82 C 856.701 1023.82 865.1 1021.19 872.142 1016.13 C 886.297 1005.86 892.288 987.776 886.768 971.214 L 778.138 638.533 L 1062.79 433.119 C 1076.93 422.963 1082.87 404.713 1077.53 388.206 Z'
function init() {

	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = 3000;

	scene = new THREE.Scene();


	renderer = new THREE.CSS3DRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	//document.getElementById( 'chinaMap' ).appendChild( renderer.domElement );

	controls = new THREE.TrackballControls( camera, renderer.domElement );
	controls.rotateSpeed = 0.5;
	controls.minDistance = 500;
	controls.maxDistance = 6000;
	controls.addEventListener( 'change', render );

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

	render();

}

function animate() {

	requestAnimationFrame( animate );

	TWEEN.update();

	controls.update();

}

function render() {

	renderer.render( scene, camera );

}
