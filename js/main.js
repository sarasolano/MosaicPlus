
(function() {
		'use strict';
		
	/* ===================================
		 Show data team data
		 ===================================== */
		function showTeamData(teamRactive) {
			teamRactive.set({team: team});
			teamRactive.on('imageload', function(e) {
  			console.log('image loaded');
			});
		}
	
		$(window).load(function(){

			var teamRactive = new Ractive({
				el: 'team',
				template: '#team-template'
			});
			
			showTeamData(teamRactive);

		});
})()