app.filter('millSecondsToTimeString', function() {
 	return function(millseconds) {
    	var seconds = Math.floor(millseconds / 1000);
    	var minutes = Math.floor(seconds / 60);
    	var seconds = seconds - (minutes * 60);

    	return minutes + ':' + seconds;
  	}
});
