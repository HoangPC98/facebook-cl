import  { createContext, useState } from 'react'
import { AppContext, NavContext } from './Context';

function AppProvider({children}) {
	const [apiNav, setApiNav] = useState({})
	const [appState, setAppState ] = useState({})
	const navigationCtx = {
		apiNav,
		setApiNav
	}

	const appCtx = {
		appState,
		setAppState
	}
	return (
		<AppContext.Provider value={appCtx}>
			<NavContext.Provider value={navigationCtx}>
				{children}
			</NavContext.Provider>
		</AppContext.Provider>
	)
}

export { AppProvider }














