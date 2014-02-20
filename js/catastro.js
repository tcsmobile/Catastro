/**
 * 
 */

function init() {

	document.addEventListener("deviceready", onDeviceReady, true);	

	/********Init Connection with kinvey Back End********/
	var promise = Kinvey.init({
		appKey : 'kid_TPEkUaJmB9',
		appSecret : '86e9e6362d254b78bb9adf588b48de6d'
	});

}