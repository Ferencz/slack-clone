import styled from 'styled-components'
import React from 'react'

function Message({message, timestamp, user, userImage}) {
    const timeStamp = new Date(timestamp?.toDate().toString())
    return <MessageContainer>
        <img src={userImage} alt={user}/>
        <MessageInfo>
        <h4>
            {user} <span>{ timeStamp.toString() }</span>
        </h4>
        <p>{message}</p>
        </MessageInfo>
    </MessageContainer>
}

export default Message

const MessageInfo = styled.div`
    padding-left: 10px;

    > h4 > span {
        color: gray;
        font-weight: 300;
        margin-left: 4px;
        font-size: 10px;
    }
`

const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    
    > img {
        height: 50px;
        border-radius: 8px
    }
`