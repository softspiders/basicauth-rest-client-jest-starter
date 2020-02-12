const fetch = require("cross-fetch");

function getRequest(url, user) {
	return fetch(url, {
		headers: {
      "Authorization": user.username + ":" + user.password
    }
	})
		.then(response => {
			if (response.status === 401) {
				return response.statusText;
			} else {
				return response.json();
			}		
		})
		.catch(err => console.log(err));
};

function postRequest(url, user) {
	return fetch(url, {
	    method: 'POST',
	    headers: {
      "Authorization": user.username + ":" + user.password
    	}
	  })
	  .then(response => {
			if (response.status === 401) {
				return response.statusText;
			} else {
				return response.json();
			}		
		})
		.catch(err => console.log(err));
};

function putRequest(url, user) {
	return fetch(url, {
	    method: 'PUT',
	    headers: {
      "Authorization": user.username + ":" + user.password
    	}
	  })
	  .then(response => {
			if (response.status === 401) {
				return response.statusText;
			} else {
				return response.json();
			}		
		})
		.catch(err => console.log(err));
};

function deleteRequest(url, user) {
	return fetch(url, {
	    method: 'DELETE',
	    headers: {
      "Authorization": user.username + ":" + user.password
    	}
	  })
	  .then(response => {
			if (response.status === 401) {
				return response.statusText;
			} else {
				return response.json();
			}		
		})
		.catch(err => console.log(err));
};

exports.getRequest = getRequest;
exports.postRequest = postRequest;
exports.putRequest = putRequest;
exports.deleteRequest = deleteRequest;