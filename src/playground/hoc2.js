import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>this info is: {props.info}</p>
    </div>
);

const requireAthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.isAuthenticated && props.info}
            <WrappedComponent />
        </div>
    );
};

const AuthInfo = requireAthentication(Info);


ReactDOM.render(<AuthInfo isAuthenticated={false} info="Please Log in" />, document.getElementById('app'));
// const withAdminWarning = (WrappedComponent) => {
//     return(props)=>(
//         <div>
//             <p>Wrning massage</p>
//             <WrappedComponent {...props}/>
//         </div>
//     )
// }


// const requireAuthenticated = (WrappedComponent) => {
//     return(props)=>(
//         <div>
//             {props.isAuthenticated ? '' :<p>not author</p>}
//             <WrappedComponent {...props}/>
//         </div>
//     )
// }

// // const AdminInfo = withAdminWarning(Info);

// const AuthorInfo = requireAuthenticated(Info);

