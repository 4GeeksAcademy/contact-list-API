const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getContacts: () => {
				fetch('https://playground.4geeks.com/apis/fake/contact/agenda/contact_marc')
					.then(resp => {
						console.log("is response succesful: " + resp.ok); 
						console.log("status code: " + resp.status); 
						return resp.json();
					})
					.then(data => {
						console.log(data); 
						setStore({ contacts: data })
						console.log(getStore().contacts)
					})
					.catch(error => {
						console.log(error);
					});
			},

			uploadContact: (objContact) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(objContact)
				})
					.then(response => {
						console.log("uplaod response: ", response)
						console.log("uplaod JSON:", response.json())
						getActions().getContacts()
					})
					.catch(error => console.log(error))
			},
			editContact: (objContact) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${objContact.id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(objContact)
				})
					.then(response => {
						console.log("uplaod response: ", response)
						console.log("uplaod JSON:", response.json())
						getActions().getContacts()
					})
					.catch(error => console.log(error))
			},

			deleteContact: (id) => {
				console.log("deleteID", id)
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						console.log("uplaod response: ", response)
						console.log("uplaod JSON:", response.json())
						getActions().getContacts()
					})
					.catch(error => console.log(error))
			}


		}
	};
};

export default getState;
