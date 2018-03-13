import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>this info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return(props)=>(
        <div>
            <p>Wrning massage</p>
            <WrappedComponent {...props}/>
        </div>
    )
}


const requireAuthenticated = (WrappedComponent) => {
    return(props)=>(
        <div>
            {props.isAuthenticated ? '' :<p>not author</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

// const AdminInfo = withAdminWarning(Info);

const AuthorInfo = requireAuthenticated(Info);

ReactDOM.render(<AuthorInfo isAuthenticated={false} info="This are the details" />, document.getElementById('app'));