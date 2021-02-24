import React from "react";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Error from "./errors/Error";
import Home from "./Home";
import Mission_vision from "./Misson_vision/misson_vision";
import Our_pateron from "./scrl_spy/Our_pateron";
import Contact from "./contact_us/Contact"
import B_com from "./sylabuss/B_Com/B_com";
import B_Com_videos from "./sylabuss/B_Com/B_Com_videos/B_Com_videos";
import B_Com_sylabuss from "./sylabuss/B_Com/B_Com_Sylabuss/B_Com_Sylabuss";
import M_com_videos from "./sylabuss/M_com/M_Com_videos/M_Com_videos";
import M_com_sylabuss from "./sylabuss/M_com/M_Com_Sylabuss/M_Com_Sylabuss";
import Cop_in_Stock_Marketing from "./sylabuss/Cop_in_Stock_Marketing/Cop_in_Stock_Marketing";
import Cop_in_Stock_Marketing_videos from "./sylabuss/Cop_in_Stock_Marketing/Cop_in_Stock_Marketing_videos/Cop_in_Stock_Marketing_videos";
import Cop_in_Stock_Marketing_sylabuss from "./sylabuss/Cop_in_Stock_Marketing/Cop_in_Stock_Marketing_sylabuss/Cop_in_Stock_Marketing_sylabuss";
import M_com from "./sylabuss/M_com/M_com";
import About from "./about_college/about";
import {Switch, Route} from "react-router-dom";
const App = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/mission_vision" component={Mission_vision} />
                <Route path="/our_pateron" component={Our_pateron} />
                <Route path="/B_com" component={B_com} />
                <Route path="/M_com" component={M_com} />
                <Route path="/contact" component={Contact} />
                <Route path="/B-com/B_Com_videos/" component={B_Com_videos} />
                <Route path="/:B-com/:B_Com_sylabuss/" component={B_Com_sylabuss} />
                <Route path ="/M-com/M_com_videos/" component={M_com_videos} />
                <Route path="/M-com/:M_com_sylabuss" component={M_com_sylabuss} />
                <Route path="/Cop_in_Stock_Marketing" component={Cop_in_Stock_Marketing} />
                <Route path="/Cop-in_Stock_Marketing/Cop_in_Stock_Marketing_videos/" component={Cop_in_Stock_Marketing_videos} />
                <Route path="/Cop-in_Stock_Marketing/Cop_in_Stock_Marketing_sylabuss/" component={Cop_in_Stock_Marketing_sylabuss} />
                <Route path="/about_college" component={About} />
                <Route component={Error} />
            </Switch>
        </>
    );
};

export default App;