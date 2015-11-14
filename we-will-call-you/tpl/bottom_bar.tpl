<style type="text/css">
	div#wewillcallyou-bottombar{
		font-family: "Helvetica Neue","Liberation Sans",Helvetica,Arial,sans-serif;
		background-color: #fff;
		border: 1px solid #ccc;
		border-radius: 4px 4px 0 0;
		bottom: -260px;
		height: 300px;
		padding: 5px;
		position: fixed;
		right: 0;
		width: 300px;
		transition: all 0.3s ease-out 0s;
	}
        div#wewillcallyou-bottombar div.send-ok{
                display:none;
                text-align: center;
                margin-top: 26px;
        }
	div#wewillcallyou-bottombar input{
		display:inline-block;
		width:auto;
	}
        div#wewillcallyou-bottombar input.error{
                border:2px solid red;
        }
</style>
<div id="wewillcallyou-bottombar">
	<span>__#title_text#__</span>
	<span class='show-button'>^</span>
        <form action="#" onsubmit="return false;">
                <input type="hidden" name="action" value="wewillcallyou_ajax_save">
                <input type="text" name="name" placeholder="__#name#__" title="__#name#__">
                <input type="text" name="email" placeholder="__#email#__" class="email" title="__#email#__">
                <input type="text" name="phone" placeholder="__#phone#__" title="__#phone#__">
                <input type="checkbox" name="acept" value="1"> __#acept#__ <a href="__#conditions_url#__">__#conditions#__</a>
                <input type="button" name="send" value="__#send#__">
        </form>
        <div class="send-ok">__#send_thanks#__</div>
</div>