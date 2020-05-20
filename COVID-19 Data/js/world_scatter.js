
function worldMap(){

	var del = document.getElementById("chinaMap");
	if (del !=null){
		del.parentNode.removeChild(del);
	}
	var del1 = document.getElementById("chinaMap_Rescue");
	if (del1 !=null){
		del1.parentNode.removeChild(del1);
	}
	var div = document.createElement('div');
	div.id = "worldMap";
	div.style.cssText="width: 1200px;height:600px;margin-left:275px;margin-top: 20px;border:0px solid #ccc"
	var bo = document.body;
	bo.insertBefore(div, bo.lastChild);
		var latlong = {};
		latlong.AA={'latitude':12.5,'longitude':-69.9667};
		latlong.AC={'latitude':17.05,'longitude':-61.8};
		latlong.AE={'latitude':24.4667,'longitude':54.3667};
		latlong.AF={'latitude':33.0,'longitude':65.0};
		latlong.AG={'latitude':28.0,'longitude':3.0};
		latlong.AJ={'latitude':40.5,'longitude':47.5};
		latlong.AL={'latitude':41.0,'longitude':20.0};
		latlong.AM={'latitude':40.1811,'longitude':44.5136};
		latlong.AN={'latitude':42.5667,'longitude':1.48333};
		latlong.AO={'latitude':-16.5101,'longitude':15.4353};
		latlong.AR={'latitude':-33.98,'longitude':-59.285};
		latlong.AS={'latitude':-27.0,'longitude':133.0};
		latlong.AU={'latitude':48.2,'longitude':16.3667};
		latlong.AY={'latitude':-85.6221,'longitude':32.3438};
		latlong.BA={'latitude':26.2272,'longitude':50.5508};
		latlong.BB={'latitude':13.1667,'longitude':-59.5333};
		latlong.BC={'latitude':-22.0,'longitude':24.0};
		latlong.BD={'latitude':32.3333,'longitude':-64.75};
		latlong.BE={'latitude':50.8333,'longitude':4.33333};
		latlong.BF={'latitude':25.0833,'longitude':-77.35};
		latlong.BG={'latitude':23.8667,'longitude':89.3667};
		latlong.BH={'latitude':15.0,'longitude':-75.0};
		latlong.BK={'latitude':44.8983,'longitude':18.5583};
		latlong.BL={'latitude':-16.5,'longitude':-68.15};
		latlong.BM={'latitude':22.9333,'longitude':97.75};
		latlong.BN={'latitude':9.5,'longitude':2.25};
		latlong.BO={'latitude':53.9,'longitude':27.5667};
		latlong.BR={'latitude':-25.4167,'longitude':-49.25};
		latlong.BU={'latitude':43.0,'longitude':25.0};
		latlong.BX={'latitude':1.0,'longitude':114.0};
		latlong.BY={'latitude':-3.5,'longitude':30.0};
		latlong.CA={'latitude':60.0,'longitude':-95.0};
		latlong.CB={'latitude':13.0,'longitude':105.0};
		latlong.CD={'latitude':15.0,'longitude':19.0};
		latlong.CE={'latitude':7.0802,'longitude':80.3157};
		latlong.CF={'latitude':-1.0,'longitude':15.0};
		latlong.CG={'latitude':-4.32972,'longitude':15.315};
		latlong.CH={'latitude':35.0,'longitude':110.0};
		latlong.CI={'latitude':-30.0,'longitude':-71.0};
		latlong.CJ={'latitude':19.5,'longitude':-80.5};
		latlong.CM={'latitude':6.0,'longitude':12.0};
		latlong.CN={'latitude':-12.1667,'longitude':44.25};
		latlong.CO={'latitude':10.3997,'longitude':-75.5144};
		latlong.CS={'latitude':10.4833,'longitude':-84.0167};
		latlong.CT={'latitude':5.76795,'longitude':20.6757};
		latlong.CU={'latitude':21.5,'longitude':-80.0};
		latlong.CV={'latitude':16.0,'longitude':-24.0};
		latlong.CY={'latitude':35.0,'longitude':33.0};
		latlong.DA={'latitude':56.0,'longitude':10.0};
		latlong.DJ={'latitude':11.5,'longitude':43.0};
		latlong.DO={'latitude':15.4167,'longitude':-61.3333};
		latlong.DR={'latitude':19.0,'longitude':-70.6667};
		latlong.EC={'latitude':-2.0,'longitude':-77.5};
		latlong.EG={'latitude':27.0,'longitude':30.0};
		latlong.EI={'latitude':53.0,'longitude':-8.0};
		latlong.EK={'latitude':2.0,'longitude':10.0};
		latlong.EN={'latitude':59.0,'longitude':26.0};
		latlong.ER={'latitude':15.0,'longitude':39.0};
		latlong.ES={'latitude':13.8333,'longitude':-88.9167};
		latlong.ET={'latitude':8.0,'longitude':38.0};
		latlong.EZ={'latitude':50.0141,'longitude':16.0797};
		latlong.FI={'latitude':64.0,'longitude':26.0};
		latlong.FJ={'latitude':-18.0,'longitude':175.0};
		latlong.FP={'latitude':-17.6167,'longitude':-149.45};
		latlong.FR={'latitude':46.0,'longitude':2.0};
		latlong.GA={'latitude':13.4667,'longitude':-16.5667};
		latlong.GB={'latitude':0.383333,'longitude':9.45};
		latlong.GG={'latitude':41.725,'longitude':44.7908};
		latlong.GH={'latitude':8.0,'longitude':-2.0};
		latlong.GI={'latitude':36.1833,'longitude':-5.3667};
		latlong.GJ={'latitude':12.05,'longitude':-61.75};
		latlong.GL={'latitude':72.0,'longitude':-40.0};
		latlong.GM={'latitude':51.0,'longitude':9.0};
		latlong.GP={'latitude':16.25,'longitude':-61.5833};
		latlong.GR={'latitude':37.9833,'longitude':23.7333};
		latlong.GT={'latitude':15.5,'longitude':-90.25};
		latlong.GV={'latitude':11.0,'longitude':-10.0};
		latlong.GY={'latitude':5.0,'longitude':-59.0};
		latlong.GZ={'latitude':31.4223,'longitude':34.385};
		latlong.HA={'latitude':19.0,'longitude':-72.4167};
		latlong.HK={'latitude':22.25,'longitude':114.167};
		latlong.HO={'latitude':15.0,'longitude':-86.5};
		latlong.HR={'latitude':45.1667,'longitude':15.5};
		latlong.HU={'latitude':47.0,'longitude':20.0};
		latlong.IC={'latitude':65.0,'longitude':-18.0};
		latlong.ID={'latitude':-5.0,'longitude':120.0};
		latlong.IN={'latitude':19.8833,'longitude':75.3333};
		latlong.IR={'latitude':32.0,'longitude':53.0};
		latlong.IS={'latitude':31.5,'longitude':34.75};
		latlong.IT={'latitude':42.1,'longitude':11.8};
		latlong.IV={'latitude':5.7938,'longitude':-4.81201};
		latlong.IZ={'latitude':33.0,'longitude':44.0};
		latlong.JA={'latitude':36.0,'longitude':138.0};
		latlong.JE={'latitude':49.1961,'longitude':-2.12585};
		latlong.JM={'latitude':18.25,'longitude':-77.5};
		latlong.JO={'latitude':31.0,'longitude':36.0};
		latlong.KE={'latitude':1.0,'longitude':38.0};
		latlong.KG={'latitude':41.0,'longitude':75.0};
		latlong.KN={'latitude':39.0194,'longitude':125.755};
		latlong.KS={'latitude':37.0,'longitude':127.5};
		latlong.KU={'latitude':29.3375,'longitude':47.6581};
		latlong.KV={'latitude':42.5833,'longitude':21.0};
		latlong.KZ={'latitude':48.0,'longitude':68.0};
		latlong.LA={'latitude':18.0,'longitude':105.0};
		latlong.LE={'latitude':33.8333,'longitude':35.8333};
		latlong.LG={'latitude':57.0,'longitude':25.0};
		latlong.LH={'latitude':54.0167,'longitude':23.9667};
		latlong.LI={'latitude':6.31056,'longitude':-10.8047};
		latlong.LO={'latitude':48.6667,'longitude':19.5};
		latlong.LS={'latitude':-29.5,'longitude':28.5};
		latlong.LU={'latitude':49.75,'longitude':6.1667};
		latlong.LY={'latitude':25.0,'longitude':17.0};
		latlong.MA={'latitude':-20.0,'longitude':47.0};
		latlong.MB={'latitude':14.6667,'longitude':-61.0};
		latlong.MC={'latitude':22.1667,'longitude':113.55};
		latlong.MD={'latitude':47.0056,'longitude':28.8575};
		latlong.MF={'latitude':-12.8333,'longitude':45.1667};
		latlong.MG={'latitude':46.0,'longitude':105.0};
		latlong.MH={'latitude':16.75,'longitude':-62.2};
		latlong.MI={'latitude':-13.5,'longitude':34.0};
		latlong.MJ={'latitude':43.1131,'longitude':19.4072};
		latlong.MK={'latitude':42.0,'longitude':21.4333};
		latlong.ML={'latitude':17.0,'longitude':-4.0};
		latlong.MN={'latitude':43.7333,'longitude':7.4};
		latlong.MO={'latitude':32.0,'longitude':-5.0};
		latlong.MP={'latitude':-20.2833,'longitude':57.55};
		latlong.MR={'latitude':20.0,'longitude':-12.0};
		latlong.MT={'latitude':35.8333,'longitude':14.5833};
		latlong.MU={'latitude':23.6161,'longitude':58.5463};
		latlong.MV={'latitude':3.25,'longitude':73.0};
		latlong.MX={'latitude':17.9918,'longitude':-90.9312};
		latlong.MY={'latitude':2.5,'longitude':112.5};
		latlong.MZ={'latitude':-18.25,'longitude':35.0};
		latlong.NC={'latitude':-22.2667,'longitude':166.45};
		latlong.NG={'latitude':13.5167,'longitude':2.11667};
		latlong.NH={'latitude':-16.0,'longitude':167.0};
		latlong.NI={'latitude':10.0,'longitude':8.0};
		latlong.NL={'latitude':52.5,'longitude':5.75};
		latlong.NO={'latitude':62.0,'longitude':10.0};
		latlong.NP={'latitude':28.0,'longitude':84.0};
		latlong.NS={'latitude':5.83333,'longitude':-55.1667};
		latlong.NT={'latitude':12.25,'longitude':-68.75};
		latlong.NU={'latitude':12.1508,'longitude':-86.2683};
		latlong.NZ={'latitude':-41.0,'longitude':174.0};
		latlong.OD={'latitude':4.84597,'longitude':31.6012};
		latlong.OS={'latitude':40.0,'longitude':12.0};
		latlong.PA={'latitude':-23.0,'longitude':-58.0};
		latlong.PE={'latitude':-9.9329,'longitude':-76.2415};
		latlong.PK={'latitude':30.0,'longitude':70.0};
		latlong.PL={'latitude':52.0,'longitude':20.0};
		latlong.PM={'latitude':9.0,'longitude':-80.0};
		latlong.PO={'latitude':38.75,'longitude':-27.35};
		latlong.PS={'latitude':7.5,'longitude':134.5};
		latlong.PU={'latitude':11.85,'longitude':-15.5833};
		latlong.QA={'latitude':25.5,'longitude':51.25};
		latlong.RB={'latitude':44.8186,'longitude':20.4681};
		latlong.RE={'latitude':-21.1,'longitude':55.6};
		latlong.RI={'latitude':43.75,'longitude':20.75};
		latlong.RM={'latitude':9.0,'longitude':168.0};
		latlong.RN={'latitude':20.6,'longitude':92.3333};
		latlong.RO={'latitude':44.95,'longitude':26.0167};
		latlong.RP={'latitude':13.0,'longitude':122.0};
		latlong.RQ={'latitude':18.2359,'longitude':-66.4838};
		latlong.RS={'latitude':60.0,'longitude':100.0};
		latlong.RW={'latitude':-2.0,'longitude':30.0};
		latlong.SA={'latitude':24.6408,'longitude':46.7728};
		latlong.SE={'latitude':-4.5833,'longitude':55.6667};
		latlong.SF={'latitude':-29.0,'longitude':24.0};
		latlong.SG={'latitude':12.5561,'longitude':-16.7592};
		latlong.SI={'latitude':46.0,'longitude':15.0};
		latlong.SL={'latitude':8.5,'longitude':-11.5};
		latlong.SM={'latitude':43.7667,'longitude':12.4167};
		latlong.SN={'latitude':1.3667,'longitude':103.8};
		latlong.SO={'latitude':10.0,'longitude':49.0};
		latlong.SP={'latitude':40.3084,'longitude':-3.70596};
		latlong.ST={'latitude':13.8833,'longitude':-61.1333};
		latlong.SU={'latitude':13.5,'longitude':23.5};
		latlong.SV={'latitude':78.0,'longitude':20.0};
		latlong.SW={'latitude':62.0,'longitude':15.0};
		latlong.SY={'latitude':36.2028,'longitude':37.1586};
		latlong.SZ={'latitude':47.0,'longitude':8.0};
		latlong.TD={'latitude':11.0,'longitude':-61.0};
		latlong.TH={'latitude':15.0,'longitude':100.0};
		latlong.TI={'latitude':37.3962,'longitude':68.6448};
		latlong.TK={'latitude':21.4667,'longitude':-71.1333};
		latlong.TO={'latitude':10.8639,'longitude':0.205};
		latlong.TP={'latitude':0.333333,'longitude':6.73333};
		latlong.TS={'latitude':34.0,'longitude':9.0};
		latlong.TT={'latitude':-8.73308,'longitude':126.321};
		latlong.TU={'latitude':38.0315,'longitude':38.546};
		latlong.TW={'latitude':23.5,'longitude':121.0};
		latlong.TX={'latitude':37.95,'longitude':58.3833};
		latlong.TZ={'latitude':-6.0,'longitude':35.0};
		latlong.UG={'latitude':0.315556,'longitude':32.5656};
		latlong.UK={'latitude':54.0,'longitude':-2.0};
		latlong.UP={'latitude':49.0,'longitude':32.0};
		latlong.US={'latitude':36.17,'longitude':-78.76};
		latlong.UV={'latitude':13.0,'longitude':-2.0};
		latlong.UY={'latitude':-33.0,'longitude':-56.0};
		latlong.UZ={'latitude':41.0,'longitude':64.0};
		latlong.VC={'latitude':13.25,'longitude':-61.2};
		latlong.VE={'latitude':8.0,'longitude':-66.0};
		latlong.VI={'latitude':18.5,'longitude':-64.5};
		latlong.VM={'latitude':16.0,'longitude':106.0};
		latlong.VT={'latitude':41.9,'longitude':12.45};
		latlong.WA={'latitude':-22.0,'longitude':17.0};
		latlong.WE={'latitude':31.7049,'longitude':35.2038};
		latlong.WI={'latitude':24.5,'longitude':-13.0};
		latlong.WS={'latitude':-13.8333,'longitude':-171.733};
		latlong.WZ={'latitude':-26.5,'longitude':31.5};
		latlong.YM={'latitude':15.0,'longitude':48.0};
		latlong.ZA={'latitude':-15.4167,'longitude':28.2833};
		latlong.ZI={'latitude':-17.8178,'longitude':31.0447};

		var mapData = [
		{ 'code': 'BG','name': 'Bangladesh','value':[166368149,1.03,1127.38,8790,175,1.99],'color':'#58cd4c'},
		{ 'code': 'BR','name': 'Brazil','value':[210867954,0.75,24.76,97100,6761,6.96],'color':'#cda44c'},
		{ 'code': 'CF','name': 'Congo Democratic Republic','value':[82643624,3.09,34.7,674,33,4.89],'color':'#69daac'},
		{ 'code': 'CH','name': 'China','value':[1400050000,0.39,144.3,84393,4643,5.50],'color':'#cda44c'},
		{ 'code': 'GM','name': 'Germany','value':[82293457,0.22,230.44,162496,6649,4.09],'color':'#cda44c'},
		{ 'code': 'EG','name': 'Egypt','value':[99375741,1.87,99.13,6193,415,6.70],'color':'#58cd4c'},
		{ 'code': 'ET','name': 'Ethiopia','value':[106672306,2.46,97.38,133,3,2.25],'color':'#69daac'},
		{ 'code': 'FR','name': 'France','value':[65233271,0.39,118.24,130979,24760,18.90],'color':'#f87d1a'},
    { 'code': 'ID','name': 'Indonesia','value':[266794980,1.06,140.08,11192,845,7.55],'color':'#58cd4c'},
		{ 'code': 'IN','name': 'India','value':[1354051854,1.11,411.87,40263,1306,3.24],'color':'#cda44c'},
		{ 'code': 'IR','name': 'Iran','value':[82011735,1.05,49.76,97424,6203,6.36],'color':'#cda44c'},
		{ 'code': 'IT','name': 'Italy','value':[60482200,0.00,196.76,209328,28710,13.71],'color':'#f87d1a'},
    { 'code': 'JA','name': 'Japan','value':[127185332,0.00,336.53,15068,531,3.52],'color':'#58cd4c'},
    { 'code': 'KE','name': 'Kenya','value':[50950879,2.52,87.79,465,24,5.16],'color':'#69daac'},
		{ 'code': 'KS','name': 'Korea(Sorth)','value':[51269185,0.36,510.57,10793,250,2.31],'color':'#58cd4c'},
		{ 'code': 'BM','name': 'Myanmar','value':[53855735,0.91,79.6,151,6,3.97],'color':'#69daac'},
		{ 'code': 'MX','name': 'Mexico','value':[130759074,1.24,66.57,22088,2061,9.33],'color':'#cda44c'},
		{ 'code': 'NG','name': 'Nigeria','value':[195875237,2.61,212.04,2388,85,3.55],'color':'#69daac'},
    { 'code': 'RP','name': 'Philippines','value':[106512074,1.52,311.12,9223,607,6.58],'color':'#58cd4c'},
		{ 'code': 'PK','name': 'Pakistan','value':[200813818,1.93,227.7,19103,440,2.30],'color':'#58cd4c'},
    { 'code': 'RS','name': 'Russian Federation','value':[143964709,0.00,8.42,134687,1280,0.95],'color':'#cda44c'},
		{ 'code': 'TH','name': 'Thailand','value':[69183173,0.21,134.83,2969,54,1.81],'color':'#69daac'},
		{ 'code': 'TU','name': 'Turkey','value':[81916871,1.45,104.54,124375,3336,2.68],'color':'#cda44c'},
		{ 'code': 'TZ','name': 'Tanzania','value':[59091392,3.11,62.52,480,17,3.54],'color':'#69daac'},
    { 'code': 'UK','name': 'United Kingdom','value':[66573504,0.59,274.08,182260,28131,15.43],'color':'#f87d1a'},
		{ 'code': 'US','name': 'United States','value':[326766748,0.71,34.86,1134058,66415,5.85],'color':'#d61f1f'},
		{ 'code': 'VM','name': 'Viet Nam','value':[96491146,0.99,291.33,270,0,0.00],'color':'#69daac'},
		{ 'code': 'SF','name': 'South Africa','value':[57398421,1.20,47.01,6336,123,1.94],'color':'#58cd4c'}];

		var myChart = echarts.init(document.getElementById('worldMap'));
		var uploadedDataURL = "json/world.json";

		$.getJSON(uploadedDataURL, function(geoJson) {

			echarts.registerMap('world', geoJson);

			option = {
				tooltip: {
						 trigger: 'item',
						 formatter: function (params) {
								 return params['value'][8]+"COVID-19 Date" + '<br/>' +
								 "Population size:"+params['value'][2]+'<br/>'+
								 "Growth rate:"+params['value'][3]+"%"+'<br/>'+
								 "Population density:"+params['value'][4]+'<br/>'+
								 "Confirmed case:"+params['value'][5]+'<br/>'+
								 "Death case:"+params['value'][6]+'<br/>'+
								 "Death rate:"+params['value'][7]+"%";
							}
				 },
				 backgroundColor: '#000000',

				 geo: {
					 type: 'map',
					 map: 'world',
					 roam: true,
					 label: {
						normal: {show: false},
						emphasis: {show: true}
					},
					itemStyle: {
						normal: {
							areaColor: 'rgba(127,255,255,0.75)',
							borderColor: '#000000',
							shadowColor: 'rgba(127,255,255,0.75)',
              shadowBlur: 4,
              shadowOffsetX: 10,
							opacity:0.5
					},
					emphasis: {
							areaColor: '#2a333d'
					}
				},
				z:-2
			},
			series : [
				{
					type: 'scatter',
					coordinateSystem: 'geo',
					// symbol:‘circle,
					symbolKeepAspect: true,
					symbolSize: function(val) {
						var size;
						if(val[5]>1000000){
							size = val[5]/8500;
						}
						else if(val[5]<1000000 && val[5] > 100000){
							size = val[5]/2500;
						}
						else if(val[5]<100000 && val[5] > 10000){
							size = val[5]/1250;
						}
						else if(val[5]<10000 && val[5] > 5000){
							size = val[5]/300;
						}
						else if(val[5]<5000 && val[5] > 1000){
							size = val[5]/50;
						}
						else {
							size = val[5]/30;
						}

						return size;
					},
					data: mapData.map(function (itemOpt) {
							return {
									name: itemOpt.name,
									value: [
											latlong[itemOpt.code].longitude,
											latlong[itemOpt.code].latitude,
											itemOpt.value[0],
											itemOpt.value[1],
											itemOpt.value[2],
											itemOpt.value[3],
											itemOpt.value[4],
											itemOpt.value[5],
											itemOpt.name
									],

									itemStyle: {
											normal: {
												color: itemOpt.color,
											}
									}
							};
					}),
			}
	]
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

point='path://M830.8736 330.2144c0-168.064-152.0128-304.3072-320.9472-304.3072-168.96 0-316.8 136.2432-316.8 304.3072 0 155.8016 313.2416 528.9216 313.2416 528.9216s324.5056-367.8976 324.5056-528.9216z m-421.9392 10.752c0-57.4976 47.6416-104.1664 106.3168-104.1664 58.752 0 106.3168 46.592 106.3168 104.1664 0 57.5744-47.616 104.1664-106.3168 104.1664-58.6752-0.0768-106.3168-46.6688-106.3168-104.192z m208.128 527.2576c0.896 2.7136 1.3824 5.5552 1.3824 8.3456 0 28.7488-47.616 52.0704-106.3168 52.0704-58.6752 0-106.3168-23.3216-106.3168-52.0704 0-2.8416 0.512-5.632 1.408-8.3456-64.384 11.9552-107.6992 34.5344-107.6992 60.416 0 38.4 95.1808 69.4528 212.608 69.4528s212.6336-31.0528 212.6336-69.4528c-0.0512-25.8816-43.392-48.4608-107.6992-60.416z'
