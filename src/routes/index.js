import { BrowserRouter as Router, Navigate, Route, Routes as RoutesInSite } from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { Error } from "../pages/Error/Error";
import { User } from "../pages/User/User";
import { CreateCard } from "../pages/CreateCard/CreateCard";

export function Routes(){
    return(
        <>
            <Router>
                <RoutesInSite>
                    <Route path='*' element={<Home />}></Route>
                    <Route path='/error' element={<Error />}></Route>
                    <Route path='/createcard/:githubname' element={<CreateCard />}></Route>
                    <Route path='/user/:githubname' element={<User />}></Route>
                </RoutesInSite>
            </Router>
        </>
    )
}