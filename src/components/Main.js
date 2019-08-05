import React, { Component } from "react";

import {library, dom} from "@fortawesome/fontawesome-svg-core";
import { faSpinner, faUser } from "@fortawesome/free-solid-svg-icons";
import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";

import bgImg from "../assets/images/bg.jpg";
library.add(faSpinner, faUser, faAccessibleIcon);
dom.watch();

class Main extends Component{
    
    render(){
        return(
            <div>
                <p>Main Page</p>
                <i class="fas fa-spinner fa-spin"></i>
                <i class="fas fa-user fa-spin"></i>
                <i class="fab fa-accessible-icon fa-spin"></i>
                <img src={bgImg}></img>
            </div>
        )
    }
}

export default Main;