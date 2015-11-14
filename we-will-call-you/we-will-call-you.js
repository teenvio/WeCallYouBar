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
		
		jQuery('div#wewillcallyou-bottombar .wewillcallyou-top span:eq(0)').click(function(){
			weWillCallYou.show();
		});
		
		jQuery('div#wewillcallyou-bottombar .show-button').click(function(){
			weWillCallYou.hide();
		});
		
		jQuery('div#wewillcallyou-bottombar input[name=send]').click(function(){
			weWillCallYou.save();
		});
		
		weWillCallYou.timer=window.setInterval(function(){
			weWillCallYou.log('WeWillCallYou timer call');
			weWillCallYou.show();
		},15*1000);
	},
	
	show:function(){
		jQuery('div#wewillcallyou-bottombar .show-button').html('x');
		jQuery('div#wewillcallyou-bottombar').css('bottom',0);
	},
	
	hide:function(){
		jQuery('div#wewillcallyou-bottombar .show-button').html('^');
		jQuery('div#wewillcallyou-bottombar').css('bottom','-290px');
		window.clearInterval(weWillCallYou.timer);
		weWillCallYou.log('WeWillCallYou timer canceled');
	},
	
	log:function(str){
		if (console && console.log){
			console.log(str);
		}
	},
	
	save:function(){
		var error=0;
		
		if(jQuery('div#wewillcallyou-bottombar form input[name=acept]')[0].checked==false){
			error=1;
			jQuery('div#wewillcallyou-bottombar form input[name=acept]').parent().addClass('error');
		}else{
			jQuery('div#wewillcallyou-bottombar form input[name=acept]').parent().removeClass('error');
		}
		
		jQuery('div#wewillcallyou-bottombar form input').each(function(){
			var objinput=jQuery(this);
			if (this.value==""){
				objinput.addClass('error');
				error=1;
			}else{
				
				if (objinput.hasClass('email') && this.value.trim().match(/^[\w-_.]{1,}@[\w-_.]{1,}(\.\w{2,})+$/)==null){
					objinput.addClass('error');
					error=1;
				}else{
					objinput.removeClass('error');
				}
			}
			
		});
		
		if (error==0){
			var form=jQuery('div#wewillcallyou-bottombar form');
			var data=form.serialize();
			weWillCallYou.log(data);

			jQuery.post(wewillcallyouAjax.ajaxurl, data, function(response) {
			
				form.hide();
				jQuery('div#wewillcallyou-bottombar div.send-ok').show();
				
			});

			
		}
	}
};

if (jQuery){
	jQuery(document).ready(function(){
		weWillCallYou.init();
	});
}