import Logo from "../../common/Logo";
import { ExtendedFab } from "../../ui/button";
import { NavLink } from "react-router-dom";
import { IconBtn } from "../../ui/button";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-inner">
                <div className="">
                    <Logo />
                </div>

                <ExtendedFab href="" text="New Chat" classes="" />

                <div className="">
                    <p className="">
                        Recent 
                    </p>

                    <nav>
                        <div className="">
                            <NavLink to="" className="nav-link" title="">
                                <span className="material-symbols-rounded icon-small">chat_bubble</span>

                                <span className="truncate">New Conversation</span>

                                <div className="state-layer"></div>
                            </NavLink>

                            <IconBtn icon="delete" size="small" classes="" title="Delete" />
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Sidebar