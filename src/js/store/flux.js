const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes:[],
			continentes:[],
			favoritos:[],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			addFav:(name,id)=>{
				const store = getStore();
				console.log("elem add to fav",name)
				
				setStore({favoritos:[...store.favoritos,{name,id}]})
			},
			deleteFav:(index)=>{
				const store = getStore();
				setStore({favoritos:[...store.favoritos.filter((fav)=>fav.id !== index)]})
			},
			getPersonajes: ()=>{
				fetch("https://thronesapi.com/api/v2/Characters")
					.then(response => response.json())
					.then(result => {
						console.log(result)
						setStore({personajes: result})
					})
			},
			getContinentes: ()=>{
				fetch("https://thronesapi.com/api/v2/Continents")
					.then(response => response.json())
					.then(result => setStore({continentes: result}))
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
