export default function CountReducer(count=0, action){
	switch(action.type){
		case "INCREMENT":
		return 	count + 1

		case "DECREMENT":
		return count - 1
		default:
			console.log(action)
			return count;
	}

	//return state
}
