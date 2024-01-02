/*
import { Outlet } from "react-router-dom";

const About=()=>{
    return(
        <>
        <h1>About us page</h1>
        <Outlet/>
        </>
    )
}

export default About;

*/

/*
import Profile from "./Profile";

import ProfileClass from "./ProfileClass";

const About=()=>{
    return(
        <>
        <h1>About us page</h1>
        
        <Profile/>
        <ProfileClass/>
        </>
    )
}

export default About;
*/


// 1)sendind data to componnets and accessed by props
/*
import Profile from "./Profile";

import ProfileClass from "./ProfileClass";

const About=()=>{
    return(
        <>
        <h1>About us page</h1>
        
        <Profile name={"Akshay"}/>
        <ProfileClass name={"Akshay Class"}/>
        </>
    )
}

export default About;

*/

//6(life cycle whwn parent have one child component)
/*
import Profile from "./Profile";

import ProfileClass from "./ProfileClass";
import { Component } from "react";

class About extends Component{

    constructor(props){
        super(props);
        console.log("Parent-Constructor");
    }
    componentDidMount(){
        console.log("Parent-componentDidMount");
    }
    render(){
        console.log("Parent-render")
    
    return(
        <>
        <h1>About us page</h1>
        
       
        <ProfileClass name={"Akshay Class"}/>
        </>
    )
}
}

export default About;
*/

// 7(if parent component has two children)
/*
import Profile from "./Profile";

import ProfileClass from "./ProfileClass";
import { Component } from "react";

class About extends Component{

    constructor(props){
        super(props);
        console.log("Parent-Constructor");
    }
    componentDidMount(){
        console.log("Parent-componentDidMount");
    }
    render(){
        console.log("Parent-render")
    
    return(
        <>
        <h1>About us page</h1>
        
       
        <ProfileClass name={"First Child"} />
        <ProfileClass name={"Second Child"} />
        </>
    )
}
}

export default About;

*/

// 8)
/*
//make an api call in child components
import Profile from "./Profile";

import ProfileClass from "./ProfileClass";
import { Component } from "react";

class About extends Component{

    constructor(props){
        super(props);
        console.log("Parent-Constructor");
    }
    componentDidMount(){
        console.log("Parent-componentDidMount");
    }
    render(){
        console.log("Parent-render")
    
    return(
        <>
        <h1>About us page</h1>
        
       
        <ProfileClass name={"First Child"} />
        
        </>
    )
}
}

export default About;

*/

/*
// 9)coment parent constructor
import Profile from "./Profile";

import ProfileClass from "./ProfileClass";
import { Component } from "react";

class About extends Component{

    constructor(props){
        super(props);
        // console.log("Parent-Constructor");
    }
    componentDidMount(){
        // console.log("Parent-componentDidMount");
    }
    render(){
        // console.log("Parent-render")
    
    return(
        <>
        <h1>About us page</h1>
        
       
        <ProfileClass name={"First Child"} />
        
        </>
    )
}
}

export default About;

*/


/** 
// 10)life cycle methods in child component


import Profile from "./Profile";

import ProfileClass from "./ProfileClass";
import { Component } from "react";

class About extends Component{

    constructor(props){
        super(props);
        // console.log("Parent-Constructor");
    }
    componentDidMount(){
        // console.log("Parent-componentDidMount");
    }
    render(){
        // console.log("Parent-render")
    
    return(
        <>
        <h1>About us page</h1>
        
       
        <ProfileClass name={"First Child"} />
        
        </>
    )
}
}

export default About;

*/

/** 
// 11)when  we want to write coode when count changes in class based components

import Profile from "./Profile";

import ProfileClass from "./ProfileClass";
import { Component } from "react";

class About extends Component{

    constructor(props){
        super(props);
        // console.log("Parent-Constructor");
    }
    componentDidMount(){
        // console.log("Parent-componentDidMount");
    }
    render(){
        // console.log("Parent-render")
    
    return(
        <>
        <h1>About us page</h1>
        
       
        <ProfileClass name={"First Child"} />
        
        </>
    )
}
}

export default About;

*/

/** 
// 12) for class componenet
import Profile from "./Profile";

import ProfileClass from "./ProfileClass";
import { Component } from "react";

class About extends Component{

    constructor(props){
        super(props);
        // console.log("Parent-Constructor");
    }
    componentDidMount(){
        // console.log("Parent-componentDidMount");
    }
    render(){
        // console.log("Parent-render")
    
    return(
        <>
        <h1>About us page</h1>
        
       
        <ProfileClass name={"First Child"} />
        
        </>
    )
}
}

export default About;

*/


// 12) for useEffect 
import Profile from "./Profile";

import ProfileClass from "./ProfileClass";
import { Component } from "react";

class About extends Component{

    constructor(props){
        super(props);
        // console.log("Parent-Constructor");
    }
    componentDidMount(){
        // console.log("Parent-componentDidMount");
    }
    render(){
        // console.log("Parent-render")
    
    return(
        <>
        <h1>About us page</h1>
        
       
        <Profile name={"First Child"} />
        
        </>
    )
}
}

export default About;

