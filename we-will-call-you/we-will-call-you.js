/**
 * JS We Will You Plugin
 * @autor Victor J. Chamorro <victor@ipdea.com>
 * @copyright Ipdea Land, S.L. / Teenivo.com
 */

var weWillCallYou={
	
	timer:null,
	
	init:function(){
		weWillCallYou.log('WeWillCallYou load!');
		
		jQuery('div#wewillcallyou-bottombar').mouseenter(function(){
			weWillCallYou.show();
		});
		jQuery('div#wewillcallyou-bottombar .show-button').click(function(){
			weWillCallYou.hide();
		});
		
		weWillCallYou.timer=window.setInterval(function(){
			weWillCallYou.log('WeWillCallYou timer call');
			weWillCallYou.show();
		},30*1000);
	},
	
	show:function(){
		jQuery('div#wewillcallyou-bottombar .show-button').html('x');
		jQuery('div#wewillcallyou-bottombar').css('bottom',0);
	},
	
	hide:function(){
		jQuery('div#wewillcallyou-bottombar .show-button').html('^');
		jQuery('div#wewillcallyou-bottombar').css('bottom','-260px');
		window.clearInterval(weWillCallYou.timer);
		weWillCallYou.log('WeWillCallYou timer canceled');
	},
	
	log:function(str){
		if (console && console.log){
			console.log(str);
		}
	}
};

if (jQuery){
	jQuery(document).ready(function(){
		weWillCallYou.init();
	});
}