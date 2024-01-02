/*

//1)create a classcompoents
import React from "react";

class ProfileClass extends React.Component{
    render(){
        return(
            <h1>ProfileClass Component</h1>
        )
    }

    
}

export default ProfileClass;

*/

/*
2)accessing  props from componets
import React from "react";

class ProfileClass extends React.Component{
    render(){
        return(
            <>
            <h1>ProfileClass Component</h1>
            <h2>Name:{this.props.name}</h2>
            </>
        )
    }

    
}

export default ProfileClass;

*/

/** 
// 3)create state variables
import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count:0,
            count1:0
        };
        }


    render(){
        const{count,count1}=this.state;
        return(
            <>
            <h1>ProfileClass Component</h1>
           
            <h2>{count}</h2>
            <h2>{count1}</h2>
            
            </>
        )
    }

    
}

export default ProfileClass;

*/

/** 
//4)create more than one state variables

import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count:0,
            count1:0
        };
        }


    render(){
        const{count,count1}=this.state;
        return(
            <>
            <h1>ProfileClass Component</h1>
           
            <h2>{count}</h2>
            <h2>{count1}</h2>
            
            </>
        )
    }

    
}

export default ProfileClass;
*/


//5)update state variables
/** 
import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count:0,
            count1:0
        };
        }


    render(){
        const{count,count1}=this.state;
        return(
            <>
            <h1>ProfileClass Component</h1>
           
            <h2>{count}</h2>
            <h2>{count1}</h2>
            <button onClick={()=>{
                this.setState({
                    count:1,
                    count1:2
                })
            }}
            >SetCount</button>
            
            </>
        )
    }

    
}

export default ProfileClass;
*/

//6)life cycle
/** 
import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props);
//create statae
        this.state={
            count:0,
            count1:0
        };
        console.log("child-Constructor");

        }


        componentDidMount(){
            //API calss
            console.log("child-componentDidMount");
        }


    render(){
        const{count,count1}=this.state;
        console.log("child-render");
        return(
            <>
            <h1>ProfileClass Component</h1>
           
            <h2>{count}</h2>
            <h2>{count1}</h2>
            <button onClick={()=>{
                this.setState({
                    count:1,
                    count1:2
                })
            }}
            >SetCount</button>
            
            </>
        )
    }

    
}

export default ProfileClass;
*/



// 7
/** 
import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props);
//create statae
        this.state={
            count:0,
            count1:0
        };
        console.log("child-Constructor"+this.props.name);

        }


        componentDidMount(){
            //API calss
            console.log("child-componentDidMount"+this.props.name);
        }


    render(){
        const{count,count1}=this.state;
        console.log("child-render"+this.props.name);
        return(
            <>
            <h1>ProfileClass Component</h1>
           
            <h2>{count}</h2>
            <h2>{count1}</h2>
            <button onClick={()=>{
                this.setState({
                    count:1,
                    count1:2
                })
            }}
            >SetCount</button>
            
            </>
        )
    }

    
}

export default ProfileClass;
*/

//8)make an api call
/** 
import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userINfo:{
                name:"dummy name",
                location:"dummy location",
            }
        };
        console.log("child-Constructor"+this.props.name);
    }

   async componentDidMount(){

    const data=await fetch("https://api.github.com/users/kanchanasklm");
    const json=await data.json()
    console.log(json)
    this.setState({
        userINfo:json,
    });

    console.log("Child-componentDidMount"+this.props.name)

            
        }
    render(){
        const{}=this.state;
        console.log("child-render"+this.props.name);
        return(
            <>
            <h1>ProfileClass Component</h1>
            <img src={this.state.userINfo?.avatar_url}/>
            <h2>Name:{this.state.userINfo?.name}</h2>
            <h2>Location:{this.state.userINfo?.id}</h2>
           </>
        )
    }

}


export default ProfileClass;
*/



// 9()
/** 
import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userINfo:{
                name:"dummy name",
                location:"dummy location",
            }
        };
        console.log("child-Constructor"+this.props.name);
    }

   async componentDidMount(){

    const data=await fetch("https://api.github.com/users/kanchanasklm");
    const json=await data.json()
    console.log(json)
    this.setState({
        userINfo:json,
    });

    console.log("Child-componentDidMount"+this.props.name)

            
        }
    render(){
        const{}=this.state;
        console.log("child-render"+this.props.name);
        return(
            <>
            <h1>ProfileClass Component</h1>
            <img src={this.state.userINfo?.avatar_url}/>
            <h2>Name:{this.state.userINfo?.name}</h2>
            <h2>Location:{this.state.userINfo?.id}</h2>
           </>
        )
    }

}


export default ProfileClass;

*/


/** 
// 10))life cycle methods

import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userINfo:{
                name:"dummy name",
                location:"dummy location",
            }
        };
        console.log("child-Constructor"+this.props.name);
    }

   async componentDidMount(){

    const data=await fetch("https://api.github.com/users/kanchanasklm");
    const json=await data.json()
    console.log(json)
    this.setState({
        userINfo:json,
    });

    console.log("Child-componentDidMount"+this.props.name)

            
        }

        componentDidUpdate(){
            console.log("componenetDidUpdate")
        }

        componentWillUnmount(){
            console.log("componentWillUnmount")
        }
    render(){
        const{}=this.state;
        console.log("child-render"+this.props.name);
        return(
            <>
            <h1>ProfileClass Component</h1>
            <img src={this.state.userINfo?.avatar_url}/>
            <h2>Name:{this.state.userINfo?.name}</h2>
            <h2>Location:{this.state.userINfo?.id}</h2>
           </>
        )
    }

}


export default ProfileClass;


*/


/*
// 11)when  we want to write coode when count changes in class based components(all about componentDidUpdate)
import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userINfo:{
                name:"dummy name",
                location:"dummy location",
            }
        };
        console.log("child-Constructor"+this.props.name);
    }

   async componentDidMount(){

    const data=await fetch("https://api.github.com/users/kanchanasklm");
    const json=await data.json()
    console.log(json)
    this.setState({
        userINfo:json,
    });

    console.log("Child-componentDidMount"+this.props.name)

            
        }

        componentDidUpdate(prevProps,prevState){
            
            // if(
            //     this.state.count!==prevState.count || this.state.count!==prevState.count
            // )
            // {
            //     //write code what we want to do when count and count2 changes
            // }


            if(
                this.state.count!==prevState.count 
            )
            {
                //write code what we want to do when count changes
            }
            if(
                this.state.count!==prevState.count2
            )
            {
                //write code what we want to do when count changes
            }
            console.log("componenetDidUpdate")
        }

        componentWillUnmount(){
            console.log("componentWillUnmount")
        }
    render(){
        const{}=this.state;
        console.log("child-render"+this.props.name);
        return(
            <>
            <h1>ProfileClass Component</h1>
            <img src={this.state.userINfo?.avatar_url}/>
            <h2>Name:{this.state.userINfo?.name}</h2>
            <h2>Location:{this.state.userINfo?.id}</h2>
           </>
        )
    }

}


export default ProfileClass;

*/

//12)componentWillUnmount

import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userINfo:{
                name:"dummy name",
                location:"dummy location",
            }
        };
        console.log("child-Constructor"+this.props.name);
    }

    componentDidMount(){

    this.timer=setInterval(()=>{
        console.log("NamsteReact")
    },1000)

    console.log("Child-componentDidMount")
}

    componentDidUpdate(){ 
            console.log("componenetDidUpdate")
            
            }
    componentWillUnmount(){
            clearInterval(this.timer)
            console.log("componentWillUnmount")
        }
    render(){
        const{}=this.state;
        console.log("child-render"+this.props.name);
        return(
            <>
            <h1>ProfileClass Component</h1>
            <img src={this.state.userINfo?.avatar_url}/>
            <h2>Name:{this.state.userINfo?.name}</h2>
            <h2>Location:{this.state.userINfo?.id}</h2>
           </>
        )
    }

}


export default ProfileClass;





















                                                                                 
