import React, { Component } from 'react';
import Layout from './components/Layout';
import BaseRouter from './router';

class Base extends Component{
  render(){
    return(
      <div className="test">
        <Layout/>
        <BaseRouter />
      </div>
    )
  }
}

export default Base;































// import React from 'react';
// import { Route, Link, withRouter } from 'react-router-dom';
// import About from './components/about';
// import HomePage from './components/homepage';
// import { GetPost } from './containers/actions/postactions';
// // import { connect } from 'react-redux';

// // class Base extends React.Component{
// //   constructor(props){
// //     super(props);
// //   }
// //   render(){
// //     return(
// //       <div>
// //         <header>
// //           <h1>Login</h1>
// //           <h1>Logout</h1>
// //         </header>
// //       </div>
// //     )
// //   }
// // }

// // export default Base;



// // when using class based we need to call the connect from react-redux as it will interphase the mapStatetoProps
// // const Base = () => {
// //   const dispatch = useDispatch();
// //   const postReducer = useSelector(state => state.postReducer);
// //   React.useEffect(()=> {
// //     FetchData();
// //   },[]);
// //   const FetchData= () => {
// //     dispatch(GetPost());
// //   }
// //   const showData = () => {
// //     if(!postReducer.data){
// //       return(
// //         <div>
// //           Data
// //         </div>
// //       )
// //     }
// //     if(postReducer.loading){
// //       return(
// //         <p>Loading....</p>
// //       )
// //     }
// //     if(postReducer.errorMessage !== ""){
// //       return(
// //         <h1>
// //           {postReducer.errorMessage}
// //         </h1>
// //       )
// //     }
// //     return <h1>
// //     Data Loaded successfully
// //     <br/>
// //       {postReducer.data.title}
// //     <br/>
// //       {postReducer.data.description}
// //     </h1>
// //   }

// //   return (
// //     <div>
// //       <Route path="/" exact component={HomePage} />
// //       <Route path="/data" component={About}/>
// //       <h1>Hello</h1>
// //       {showData()}
// //     </div>
// //   )
// // }

// // export default Base;