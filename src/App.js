import React from 'react'
import Chatkit from '@pusher/chatkit-client'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'

import { tokenUrl, instanceLocator } from './config'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      messages: []
    }
    this.sendMessage = this.sendMessage.bind(this)
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'moodybones',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })

    chatManager
    .connect()
      .then(currentUser => {
        this.currentUser = currentUser
        this.currentUser.subscribeToRoomMultipart({
          roomId: currentUser.rooms[0].id,
          hooks: {
            onMessage: message => {
              this.setState({
                messages: [...this.state.messages, message]
              })
            }
          }
        });
      })
  }

sendMessage(text) {
  this.currentUser.sendMessage({
    text,
    roomId: '19446565'
  })
}

  render() {
    // to test
    // console.log('this.state.message:', this.state.messages);
    return (
      <div className="app">
        <RoomList />
        <MessageList messages={this.state.messages} />
        <SendMessageForm sendMessage={this.sendMessage} />
        <NewRoomForm />
      </div>
    );
  }
}

export default App