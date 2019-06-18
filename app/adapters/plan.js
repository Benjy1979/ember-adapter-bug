import DS from 'ember-data';
import {computed} from '@ember/object';

export default DS.JSONAPIAdapter.extend({
	headers: computed(function() {
		alert("Called this brpoken");
		return {
			'Content-Type':'application/json',
			'x-access-token':'TOKENHERE'
		}
	})
});
