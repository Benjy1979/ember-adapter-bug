import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	host: function() { 
		console.log("LIVE ENDs:" + ENV.LIVE_ENDPOINT);
		// We don't want to hardcode the url here.
        return "radiant-reef-77202.herokuapp.com";
   // }.property().volatile(), // volatile recalculates on every request
	}.property(),

	headers: computed(function() {
		return  {
			'Content-Type': 'application/json',
			'x-access-token': 'exampletokenabc123'
		};
	})
});
