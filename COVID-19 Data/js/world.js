
function worldMap(){

	var del = document.getElementById("chinaMap");
	if (del !=null){
		del.parentNode.removeChild(del);
	}
	var div = document.createElement('div');
	div.id = "worldMap";
	div.style.cssText="width: 1200px;height:600px;margin-left:275px;margin-top: 20px;border:0px solid #ccc"
	var bo = document.body;
	bo.insertBefore(div, bo.lastChild);


		var myChart = echarts.init(document.getElementById('worldMap'));


		var uploadedDataURL = "json/world.json";

      let dataMap = [
            {"name": "Russia","人口总数": 10,"患者总数":20,"感染率":30},
            {"name": "Canada","人口总数": 10,"患者总数":20,"感染率":30},
            {"name": "China","人口总数": 10,"患者总数":20,"感染率":30},
            {"name": "United States","人口总数": 10,"患者总数":20,"感染率":30},
            {"name": "Austria","人口总数": 10,"患者总数":20,"感染率":30},
            {"name": "France","人口总数": 10,"患者总数":20,"感染率":30},
        ]
        let  nameComparison = {
            'Canada':'加拿大',
            'Russia':'俄罗斯',
            'China':'中国',
            'United States':'美国',
            'Singapore Rep.':'新加坡',
            'Dominican Rep.':'多米尼加',
            'Palestine':'巴勒斯坦',
            'Bahamas':'巴哈马',
            'Timor-Leste':'东帝汶',
            'Afghanistan':'阿富汗',
            'Guinea-Bissau':'几内亚比绍',
            "Côted'Ivoire":'科特迪瓦',
            'Siachen Glacier':'锡亚琴冰川',
            "Br. Indian Ocean Ter.":'英属印度洋领土',
            'Angola':'安哥拉',
            'Albania':'阿尔巴尼亚',
            'United Arab Emirates':'阿联酋',
            'Argentina':'阿根廷',
            'Armenia':'亚美尼亚',
            'French Southern and Antarctic Lands':'法属南半球和南极领地',
            'Australia':'澳大利亚',
            'Austria':'奥地利',
            'Azerbaijan':'阿塞拜疆',
            'Burundi':'布隆迪',
            'Belgium':'比利时',
            'Benin':'贝宁',
            'Burkina Faso':'布基纳法索',
            'Bangladesh':'孟加拉国',
            'Bulgaria':'保加利亚',
            'The Bahamas':'巴哈马',
            'Bosnia and Herz.':'波斯尼亚和黑塞哥维那',
            'Belarus':'白俄罗斯',
            'Belize':'伯利兹',
            'Bermuda':'百慕大',
            'Bolivia':'玻利维亚',
            'Brazil':'巴西',
            'Brunei':'文莱',
            'Bhutan':'不丹',
            'Botswana':'博茨瓦纳',
            'Central African Rep.':'中非',
            'Switzerland':'瑞士',
            'Chile':'智利',
            'Ivory Coast':'象牙海岸',
            'Cameroon':'喀麦隆',
            'Dem. Rep. Congo':'刚果民主共和国',
            'Congo':'刚果',
            'Colombia':'哥伦比亚',
            'Costa Rica':'哥斯达黎加',
            'Cuba':'古巴',
            'N. Cyprus':'北塞浦路斯',
            'Cyprus':'塞浦路斯',
            'Czech Rep.':'捷克',
            'Germany':'德国',
            'Djibouti':'吉布提',
            'Denmark':'丹麦',
            'Algeria':'阿尔及利亚',
            'Ecuador':'厄瓜多尔',
            'Egypt':'埃及',
            'Eritrea':'厄立特里亚',
            'Spain':'西班牙',
            'Estonia':'爱沙尼亚',
            'Ethiopia':'埃塞俄比亚',
            'Finland':'芬兰',
            'Fiji':'斐',
            'Falkland Islands':'福克兰群岛',
            'France':'法国',
            'Gabon':'加蓬',
            'United Kingdom':'英国',
            'Georgia':'格鲁吉亚',
            'Ghana':'加纳',
            'Guinea':'几内亚',
            'Gambia':'冈比亚',
            'Guinea Bissau':'几内亚比绍',
            'Eq. Guinea':'赤道几内亚',
            'Greece':'希腊',
            'Greenland':'格陵兰',
            'Guatemala':'危地马拉',
            'French Guiana':'法属圭亚那',
            'Guyana':'圭亚那',
            'Honduras':'洪都拉斯',
            'Croatia':'克罗地亚',
            'Haiti':'海地',
            'Hungary':'匈牙利',
            'Indonesia':'印度尼西亚',
            'India':'印度',
            'Ireland':'爱尔兰',
            'Iran':'伊朗',
            'Iraq':'伊拉克',
            'Iceland':'冰岛',
            'Israel':'以色列',
            'Italy':'意大利',
            'Jamaica':'牙买加',
            'Jordan':'约旦',
            'Japan':'日本',
            'Kazakhstan':'哈萨克斯坦',
            'Kenya':'肯尼亚',
            'Kyrgyzstan':'吉尔吉斯斯坦',
            'Cambodia':'柬埔寨',
            'Korea':'韩国',
            'Kosovo':'科索沃',
            'Kuwait':'科威特',
            'Lao PDR':'老挝',
            'Lebanon':'黎巴嫩',
            'Liberia':'利比里亚',
            'Libya':'利比亚',
            'Sri Lanka':'斯里兰卡',
            'Lesotho':'莱索托',
            'Lithuania':'立陶宛',
            'Luxembourg':'卢森堡',
            'Latvia':'拉脱维亚',
            'Morocco':'摩洛哥',
            'Moldova':'摩尔多瓦',
            'Madagascar':'马达加斯加',
            'Mexico':'墨西哥',
            'Macedonia':'马其顿',
            'Mali':'马里',
            'Myanmar':'缅甸',
            'Montenegro':'黑山',
            'Mongolia':'蒙古',
            'Mozambique':'莫桑比克',
            'Mauritania':'毛里塔尼亚',
            'Malawi':'马拉维',
            'Malaysia':'马来西亚',
            'Namibia':'纳米比亚',
            'New Caledonia':'新喀里多尼亚',
            'Niger':'尼日尔',
            'Nigeria':'尼日利亚',
            'Nicaragua':'尼加拉瓜',
            'Netherlands':'荷兰',
            'Norway':'挪威',
            'Nepal':'尼泊尔',
            'New Zealand':'新西兰',
            'Oman':'阿曼',
            'Pakistan':'巴基斯坦',
            'Panama':'巴拿马',
            'Peru':'秘鲁',
            'Philippines':'菲律宾',
            'Papua New Guinea':'巴布亚新几内亚',
            'Poland':'波兰',
            'Puerto Rico':'波多黎各',
            'Dem. Rep. Korea':'朝鲜',
            'Portugal':'葡萄牙',
            'Paraguay':'巴拉圭',
            'Qatar':'卡塔尔',
            'Romania':'罗马尼亚',
            'Rwanda':'卢旺达',
            'W. Sahara':'西撒哈拉',
            'Saudi Arabia':'沙特阿拉伯',
            'Sudan':'苏丹',
            'S. Sudan':'南苏丹',
            'Senegal':'塞内加尔',
            'Solomon Is.':'所罗门群岛',
            'Sierra Leone':'塞拉利昂',
            'El Salvador':'萨尔瓦多',
            'Somaliland':'索马里兰',
            'Somalia':'索马里',
            'Serbia':'塞尔维亚',
            'Suriname':'苏里南',
            'Slovakia':'斯洛伐克',
            'Slovenia':'斯洛文尼亚',
            'Sweden':'瑞典',
            'Swaziland':'斯威士兰',
            'Syria':'叙利亚',
            'Chad':'乍得',
            'Togo':'多哥',
            'Thailand':'泰国',
            'Tajikistan':'塔吉克斯坦',
            'Turkmenistan':'土库曼斯坦',
            'East Timor':'东帝汶',
            'Trinidad and Tobago':'特里尼达和多巴哥',
            'Tunisia':'突尼斯',
            'Turkey':'土耳其',
            'Tanzania':'坦桑尼亚',
            'Uganda':'乌干达',
            'Ukraine':'乌克兰',
            'Uruguay':'乌拉圭',
            'Uzbekistan':'乌兹别克斯坦',
            'Venezuela':'委内瑞拉',
            'Vietnam':'越南',
            'Vanuatu':'瓦努阿图',
            'West Bank':'西岸',
            'Yemen':'也门',
            'South Africa':'南非',
            'Zambia':'赞比亚',
            'Zimbabwe':'津巴布韦'
        };

		$.getJSON(uploadedDataURL, function(geoJson) {

			echarts.registerMap('world', geoJson);

			var option = {

          tooltip: {
                     trigger: 'item',
                     formatter: function (params) {
                         return params['name']+params.seriesName + '<br/>' + "人口总数:"+params['data']['人口总数']+'<br/>'+"患者总数:"+params['data']['患者总数']+'<br/>'+"感染率:"+params['data']['感染率'];
                      }
                 },

				    series: [{
              type: 'map3D',
              name: 'CONV19感染人数',
              map: 'world',
              roam: true,
              data: dataMap,
							regionHeight:1,
							boxHeight:20,

              symbolSize: 12,

 				        environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
				          offset: 0, color: '#000000'
				        }, {
				          offset: 0.7, color: '#000000'
				        }, {
				          offset: 1, color: '#000000'
				        }], false),

				        label: {
                    normal: {show: false},
                    emphasis: {show: false}
				        },

				        itemStyle: {
				            color: 'rgba(95,158,160,0.5)',
				            opacity: 1,
				            borderWidth: 0.5,
				            borderColor: '#000',
				        },

								data: [
									{ // 可对单个地图区域进行设置
										name: 'China', // 所对应的地图区域的名称
									//regionHeight: '', // 区域的高度，可以设置不同的高度用来表达数据的大小。当 GeoJSON 为建筑的数据时，也可以通过这个值表示简直的高度。
										itemStyle: { // 单个区域的样式设置
											color: '#FFFFFF',
											opacity: 1,
											borderWidth: 0.4,
											borderColor: '#5F9EA0'
										},
										regionHeight:3
								},
								{ // 可对单个地图区域进行设置
									name: 'Canada', // 所对应的地图区域的名称
								//regionHeight: '', // 区域的高度，可以设置不同的高度用来表达数据的大小。当 GeoJSON 为建筑的数据时，也可以通过这个值表示简直的高度。
									itemStyle: { // 单个区域的样式设置
										color: '#FFFFFF',
										opacity: 1,
										borderWidth: 0.4,
										borderColor: '#5F9EA0'
									},
									regionHeight:3
							}
							],

				        emphasis: {
				            label: {
				                show: false,
				                textStyle: {
				                    color: '#00000E',
				                    fontSize: 15,
				                }
				            },
				            itemStyle: {
				                color: '#FF4500',
				            }
				        },

				        groundPlane: {
				        	show: false,
				        	color: '#000000'
				        },

				        light: {
				            main: {
				                color: '#fff',
				                intensity: 1.2,
				                shadow: false,
				                //shadowQuality: 'high',
				                alpha: 55,
				                beta: 10
				            },
				            ambient: {
				                color: '#fff',
				                intensity: 0.5
				            }
				        },

				        viewControl: {
				        	projection: 'perspective',
				        	autoRotate: false,
				        	autoRotateDirection: 'cw',
				        	autoRotateSpeed: 10,
				        	autoRotateAfterStill: 3,
				        	damping: 0,
				        	rotateSensitivity: 1,
				        	zoomSensitivity: 1,
				        	panSensitivity: 1,
				        	panMouseButton: 'left',
				        	rotateMouseButton: 'left',

				        	distance: 100,
				        	minDistance: 40,
				        	maxDistance: 400,

				        	alpha: 40,
				        	beta: 0,
				        	minAlpha: -360,
				        	maxAlpha: 360,
				        	minBeta: -360,
				        	maxBeta: 360,

				        	center: [0,0,0],

				        	animation: true,
				        	animationDurationUpdate: 1000,
				        	animationEasingUpdate: 'cubicInOut'
				        },
			        },
						],
					};
			myChart.setOption(option);

		});
}


var camera, scene, renderer;
var controls;

//init();
//animate();

function init() {

	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = 3000;

	scene = new THREE.Scene();


	renderer = new THREE.CSS3DRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	//document.getElementById( 'worldMap' ).appendChild( renderer.domElement );


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
