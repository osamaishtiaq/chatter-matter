import React from 'react'
import Message from './Message'
import ReactDOM from 'react-dom'

class MessageList extends React.Component {

    componentWillUpdate() {
        const node = ReactDOM.findDOMNode(this)
        this.shouldScrollToBottom = (node.scrollTop + node.clientHeight + 100) >= node.scrollHeight
    }

    componentDidUpdate() {
        if (this.shouldScrollToBottom) {    
            const node = ReactDOM.findDOMNode(this)
            node.scrollTop = node.scrollHeight
        }
    }

    render() {
        return (
            <div className="message-list">
                {this.props.messages.map((message, index) => {
                    return <Message key={index+1} username={message.senderId} text={message.text} />
                })}
            </div>
        )
    }
}

export default MessageList