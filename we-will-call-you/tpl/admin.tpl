<div class="wrap">
	<h1>We'll Call You Options</h1>
	
	<form novalidate='novalidate' method='post'>
		<table class="form-table">
			<tr>
				<th scope="row">
					<label for='title'>__#title#__</label>
				</th>
				<td>
				<input id="title" class="regular-text" type="text" value="{value_title}" name="title">
				</td>
			</tr>
			<tr>
				<th scope="row">
					<label for='title'>__#action#__</label>
				</th>
				<td>
					<select id="default_role" name="action">
						<option value="subscriber" selected="selected">__#send-email#__</option>
						<option value="contributor">__#save-app#__</option>
						<option value="author">__#send-email-save-app#__</option>
					</select>
				</td>
			</tr>
		</table>
	</form>
	<p class="submit">
		<input type="submit" value="__#save#__" class="button button-primary" id="submit" name="submit">
	</p>
</div>