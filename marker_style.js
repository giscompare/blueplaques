//marker_style.js (Jan 16 2015)
//(c)www.gomapping.tk    
//All content copyright © 2015 GoMapping unless otherwise noted.
//author: Ophelia Chan

var map; // The map object
var currentinfo = null;
var myCentreLat =  53.799683;
var myCentreLng = -1.546904;

var initialZoom = 14;


function infoCallback(infowindow, marker) {
		return function() {
			if(currentinfo) { currentinfo.close();} 
			infowindow.open(map, marker);   
		currentinfo = infowindow;}; 
}


function addMarker(myPos,myTitle,myInfo) {
	var marker = new google.maps.Marker({
		position: myPos, 
		map: map, 
		title: myTitle,
		icon: 'http://www.gomapping.tk/map1/blue.png'
	});
	var infowindow = new google.maps.InfoWindow({
		content: myInfo,
		maxWidth: 400
	});
	google.maps.event.addListener(marker, 'click', infoCallback(infowindow, marker));
}


function initialize() {
	var latlng = new google.maps.LatLng(myCentreLat,myCentreLng);
	var myOptions = {
		zoom: initialZoom,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);

	for (id in os_markers) { 
		var info = "<div class=infowindow><h2>" + os_markers[id].title + "</h2><p>" + os_markers[id].caption + "</p></div>"; 
		var osPt = new OSRef(os_markers[id].easting,os_markers[id].northing); 
		var llPt = osPt.toLatLng(osPt); 
		llPt.OSGB36ToWGS84(); 
 		addMarker(new google.maps.LatLng(llPt.lat,llPt.lng),os_markers[id].title,info);
	}
 
	google.maps.event.addListener(map,'center_changed',function() {
		window.setTimeout(function() {
		map.panTo(initialize());
		},15000);
	});
}


function display1(){
	var latlng = new google.maps.LatLng(myCentreLat,myCentreLng);
	var myOptions = {
		zoom: initialZoom,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
 
	for (id in os_markers){
		if (os_markers[id].category == "one"){
			var info = "<div class=infowindow><h2>" + os_markers[id].title + "</h2><p>" + os_markers[id].caption + "</p></div>"; 
			var osPt = new OSRef(os_markers[id].easting,os_markers[id].northing); 
			var llPt = osPt.toLatLng(osPt); 
			llPt.OSGB36ToWGS84(); 
			addMarker(new google.maps.LatLng(llPt.lat,llPt.lng),os_markers[id].title,info);
		}
	}
}


function display2(){
	var latlng = new google.maps.LatLng(myCentreLat,myCentreLng);
	var myOptions = {
		zoom: initialZoom,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
 
	for (id in os_markers){
		if (os_markers[id].category == "two"){
			var info = "<div class=infowindow><h2>" + os_markers[id].title + "</h2><p>" + os_markers[id].caption + "</p></div>"; 
			var osPt = new OSRef(os_markers[id].easting,os_markers[id].northing); 
			var llPt = osPt.toLatLng(osPt); 
			llPt.OSGB36ToWGS84(); 
			addMarker(new google.maps.LatLng(llPt.lat,llPt.lng),os_markers[id].title,info);
		}
	}
}


function display3(){
	var latlng = new google.maps.LatLng(myCentreLat,myCentreLng);
	var myOptions = {
		zoom: initialZoom,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
 
	for (id in os_markers){
		if (os_markers[id].category == "three"){
			var info = "<div class=infowindow><h2>" + os_markers[id].title + "</h2><p>" + os_markers[id].caption + "</p></div>"; 
			var osPt = new OSRef(os_markers[id].easting,os_markers[id].northing); 
			var llPt = osPt.toLatLng(osPt); 
			llPt.OSGB36ToWGS84(); 
			addMarker(new google.maps.LatLng(llPt.lat,llPt.lng),os_markers[id].title,info);
		}
	}
}
