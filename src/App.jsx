import { useState, useEffect } from "react"

import { Home } from "./pages/Home"
import { Loading } from "./components/Loading"

const PageLoad = () => {
    return <div>
        <Home />
    </div>
}
export const App = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const interval = setTimeout(() => {
            setLoading(true)
        }, 500);
 
        //Clearing the interval
        return () => clearInterval(interval);
    }, [])

    return <div className="App">
        { !loading ?
            <Loading />
            :
            <PageLoad /> 
        }
    </div>
}