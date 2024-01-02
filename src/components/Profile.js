/*
//1)create a functional components
const Profile=(props)=>{
    return(
        <div>
            <h3>Profile component</h3>
            
        </div>
    )
}

export default Profile;

*/

/*
import { useState } from "react";



// 2) accessing props from compoennts
const Profile=(props)=>{
    return(
        <div>
            <h3>Profile component</h3>
            <h2>Nmae:{props.name}</h2>
        </div>
    )
}

export default Profile;

*/

/*
// 3)create steate vraiable in functional compoents

import { useState } from "react";

const Profile=(props)=>{

    const[count]=useState("0")
    return(
        <div>
            <h3>Profile component</h3>
            <h2>{count}</h2>
            
        </div>
    )
}

export default Profile;

*/

/*
// 4)create more than one steate vraiable in functional compoents

import { useState } from "react";

const Profile=(props)=>{

    const[count]=useState("0")
    const[count1]=useState("1")
    return(
        <div>
            <h3>Profile component</h3>
            <h2>{count}</h2>
            <h3>{count1}</h3>
            
        </div>
    )
}

export default Profile;

*/

//5) update state variables
/*
import { useState } from "react";

const Profile=(props)=>{

    const[count,setCount]=useState(0)
    const[count1,setCount1]=useState(1)
    return(
        <div>
            <h3>Profile component</h3>
            <h2>{count}</h2>
            <h3>{count1}</h3>
            <button onClick={
                ()=>{setCount(1)}}>SetCount</button>
            <br/>
            <button onClick={
                ()=>{setCount1(2)}}>SetCount1</button>
            
        </div>
    )
}

export default Profile;

*/

/**
// 11)useEffect
import { useEffect, useState } from "react";

const Profile=(props)=>{

    const[count,setCount]=useState(0)
    const[count2,setCount1]=useState(1)

    // useEffect(()=>{
    //     //API call
    //     console.log("useEffect")
    // },[count]);


    useEffect(()=>{
        //API call
        console.log("useEffect")
    },[count]);

    useEffect(()=>{
        //API call
        console.log("useEffect")
    },[count2]);


    console.log("render");
    return(
        <div>
            <h3>Profile component</h3>
            <h2>{count}</h2>
            <h3>{count1}</h3>
            <button onClick={
                ()=>{setCount(1)}}>SetCount</button>
            <br/>
            <button onClick={
                ()=>{setCount1(2)}}>SetCount1</button>
            
        </div>
    )
}

export default Profile;

*/


//Unmount in useEffect
import { useEffect, useState } from "react";

const Profile=(props)=>{

    const[count,setCount]=useState(0)
    const[count2,setCount2]=useState(1)

    

    // useEffect(()=>{
    

    //     console.log("useEffect");

    //     return()=>{
    //         console.log("useEffectReturn")
    //     };


      
    // },[]);

    useEffect(()=>{
        const timer=setInterval(()=>{
            console.log("namste react op")
        },1000);

        

        return()=>{
            clearInterval(timer)
        };


      
    },[]);

    


    console.log("render");
    return(
        <div>
            <h3>Profile component</h3>
            <h2>{count}</h2>
            <h3>{count2}</h3>
            <button onClick={
                ()=>{setCount(1)}}>SetCount</button>
            <br/>
            <button onClick={
                ()=>{setCount2(2)}}>SetCount1</button>
            
        </div>
    )
}

export default Profile;

