
let dataMap_china = [
			{"name": "北京","0410": 10,"0411":20,"0412":30},
			{"name": "上海","0410": 10,"0411":20,"0412":30},
			{"name": "广东","0410": 10,"0411":20,"0412":30},
			{"name": "山西","0410": 10,"0411":20,"0412":30},
			{"name": "内蒙古","0410": 10,"0411":20,"0412":30},
			{"name": "西藏","0410": 10,"0411":20,"0412":30},
	]

function chinaMap(){

		var del = document.getElementById("worldMap");
		if (del !=null){
			del.parentNode.removeChild(del);
		}
		var div = document.createElement('div');
		div.id = "chinaMap";
		div.style.cssText="width: 1200px;height:600px;margin-left:275px;margin-top: 20px;border:0px solid #ccc"
		var bo = document.body;
		bo.insertBefore(div, bo.lastChild);

		var camera, scene, renderer;
		var controls;

		var myChart = echarts.init(document.getElementById('chinaMap'));

		var uploadedDataURL = "json/china.json";

		$.getJSON(uploadedDataURL, function(geoJson) {

			echarts.registerMap('china', geoJson);

			myChart.hideLoading();

			var option = {
          tooltip: {
                     trigger: 'item',
										 padding: 0,
										 enterable: true,
										 transitionDuration: 1,
										 textStyle: {
											 color: '#000',
											 decoration: 'none',
										 },
                     formatter: function (obj,data) {
											 setTimeout(function() {
												lineChartsFn("linechart",obj);
											 }, 100)
											 return '<div style="height:150px;width:200px;border-radius:5px;background:#000;opacity:0.5">' +
                '    <div style="height:20px;width:100%;border-radius:5px;background:#000;opacity:0.5">' +
                '        <span style="line-height:20px;margin-left:18px;color:#FFFFFF;opacity:1">' + obj.name +'确诊人数'+ '</span>' +
                '    </div>' +
                '    <div style="height:5px;width:100%;background:#000;opacity:0.5;">' +
                '    </div>' +
                '    <div id="linechart" style="height:150px;width:100%;border-radius:0 0 5px 0;background:#000;opacity:1;"></div>' +
                '</div>';
                      },
            },

				    geo: {
              type: 'map',
              name: 'CONV19感染人数',
              map: 'china',
              roam: true,
              //data: dataMap_china,
				      label: {
                    normal: {show: false},
                    emphasis: {show: true}
				       },
               itemStyle: {
     						normal: {
     							areaColor: 'rgba(127,255,255,0.75)',
     							borderColor: '#111',
     							shadowColor: 'rgba(127,255,255,0.75)',
                   shadowBlur: 4,
                   shadowOffsetX: 10,
     							opacity:0.5
     					},
     					emphasis: {
     							areaColor: '#2a333d'
     					}
     				   },
               z:-2,
				        emphasis: {
				            label: {
				                show: true,
				                textStyle: {
				                    color: '#00000E',
				                    fontSize: 15,
				                }
				            },
				            itemStyle: {
				                color: '#FF4500',
				            }
				        },
			     },

           series:[{
             type: 'bar',
             smooth: true,
             seriesLayoutBy: 'row',
             barWidth: 10,
           }

           ]
			};
			myChart.setOption(option);

		});
}

function lineChartsFn(odiv,obj) {
		myChartToolpie = echarts.init(document.getElementById(odiv));
		var data = [obj['data']['0410'],obj['data']['0411']]
		var option = {

				dataset:{
					source:[['xAxis','0410','0411'],
					['amount',data[0],data[1]]
				]
			},
				xAxis: {
            type: 'category',
            interval: true,
            axisLabel: {
                rotate: 45
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {},
        color: ['#4FA8F9', '#F5A623'],
        grid: {
            show: true,
            backgroundColor: '#FAFAFA',
						containLabel: false,
            left: 30,
            right: 20,
            top: 20
        },
        series: [{
            type: 'bar',
            smooth: true,
            seriesLayoutBy: 'row',
            barWidth: 10
        }]
		}

    myChartToolpie.setOption(option);
}

//init();
//animate();

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
