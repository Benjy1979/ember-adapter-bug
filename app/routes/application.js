import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
	store: service(),
	
	model() {
		alert("got here");
		var hey = this.get('store').createRecord('plan', {a_test_field: "my value"});
		hey.save()
		.then(function(data) {
			alert("Received:" + data);
		});
	}
});
