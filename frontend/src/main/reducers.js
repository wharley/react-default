import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	field: () => ({ value: 'Redux I love you'})
})

export default rootReducer