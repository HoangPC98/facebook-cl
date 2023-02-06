import { createContext, useContext } from "react";
const AppContext = createContext();
const NavContext = createContext();
const useNavContext = () => {
    return useContext(NavContext);
}

const useAppContext = () => {
    return useContext(AppContext);

}
export { AppContext, NavContext, useAppContext, useNavContext };