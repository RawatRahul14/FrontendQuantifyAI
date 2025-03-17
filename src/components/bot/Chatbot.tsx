/**
 * Components 
 */
import Sidebar from "./utils/SideBar"


const App = () => {
    return (
        <div className="">
            {/* Sidebar */}

            <div className="">
                {/* Top app bar No need */}
                {/* <TopAppBar /> */}

                {/* Main Content */}


                <div className="">
                    <div className="">
                        <Sidebar />
                    </div>
                </div>

                {/* Prompt field */}
                <div className="">
                    <p className="">
                        Quantify AI may display inaccurate info, including about people, so double-check its repsonses.
                        <a href="" className="">
                            Your Privacy and Gemini Apps.
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default App