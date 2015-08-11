/***************************************************************************************************************************************************************
 *
 * Sidebar toggeling
 *
 **************************************************************************************************************************************************************/


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------


(function(App) {

	var module = {};

	//------------------------------------------------------------------------------------------------------------------------------------------------------------
	// private function: Check position
	//------------------------------------------------------------------------------------------------------------------------------------------------------------
	function checkPos() {
		App.debugging( 'Sidebar: Running checkPos', 'report' );

		var scroll = $('.js-sidebar').scrollTop();

		if(scroll > 10) {
			// App.debugging( 'Sidebar: checkPos: Passed 10px', 'report' );

			$('.js-body').addClass('has-scrolledSidebar');
		}
		else {
			// App.debugging( 'Sidebar: checkPos: Below 10px', 'report' );

			$('.js-body').removeClass('has-scrolledSidebar');
		}
	};


	//------------------------------------------------------------------------------------------------------------------------------------------------------------
	// Module init method
	//------------------------------------------------------------------------------------------------------------------------------------------------------------
	module.init = function() {
		App.debugging( 'Sidebar: Initiating', 'report' );

		//////////////////////////////////////////////////| BUTTON LISTENERS
		$('.js-toggleMenu').on('click', function() {
			App.debugging( 'Sidebar: Button clicked', 'interaction' );

			$('.js-body').toggleClass('has-openSidebar');
		});

		//////////////////////////////////////////////////| SCROLL THROTTLER
		$('.js-sidebar').on('scroll', GUI.throttle(checkPos, 30) );
	};


	App.sidebar = module;


}(App));


// start the module
App.sidebar.init();