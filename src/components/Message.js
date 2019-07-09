import React from 'react'

// class Message extends React.Component {  
//     render() {
//         return (
//             <div className="message">
//                 <div className="message-username">{this.props.username}</div>
//                 <div className="message-text">{this.props.text}</div>
//             </div>
//         )
//     }   
// }

// changed above class component,
// to a simplified functional component
// functional components have so many contraints, 
// so they a less prone to bugs :)

function Message(props) {
    return (
        <div className="message">
            <div className="message-username">{props.username}</div>
            <div className="message-text">{props.text}</div>
        </div>
    )
}

export default Message