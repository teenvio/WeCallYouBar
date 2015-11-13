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
	div#wewillcallyou-bottombar input{
		display:inline-block;
		width:auto;
	}
</style>
<div id="wewillcallyou-bottombar">
	<span>__#title_text#__</span>
	<span class='show-button'>^</span>
	<input type="text" name="name" placeholder="__#name#__" title="__#name#__">
	<input type="text" name="email" placeholder="__#email#__" title="__#email#__">
	<input type="text" name="phone" placeholder="__#phone#__" title="__#phone#__">
	<input type="checkbox" name="acept" value="1"> __#acept#__ <a href="__#conditions_url#__">__#conditions#__</a>
	<input type="button" value="__#send#__">
</div>