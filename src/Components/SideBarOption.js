import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { enterRoom } from '../features/appSlice'
import { db } from '../firebase'


function SideBarOption({Icon, addChannelOption, title, id}) {

    const dispatch = useDispatch()

    const addChannel = () => {
        const channelName = prompt('Please enter channel Name')

        if(channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
    }

    const selectChannel = () => {
        
        if(id) {
            dispatch(enterRoom({
                roomId: id
            }))
        }
    }

    return (
        <div>
            <SideBarOptionContainer
                onClick={addChannelOption ? addChannel : selectChannel}
            >
                {Icon && <Icon fontSize='small' style={{padding: 10}} />}
                {Icon ? (
                    <h3>{title}</h3>
                ): 
                    <SideBarOptionChannel>
                        <span>#</span> {title}
                    </SideBarOptionChannel>}
            </SideBarOptionContainer>
        </div>
    )
}

export default SideBarOption


const SideBarOptionContainer = styled.div`
    display:flex;
    align-items: center;
    font-size: 12px;
    padding-left: 2px;
    cursor: pointer;

    :hover {
        opacity: 0.9;
        background-color: #340e36;
    }

    > h3 {
        font-weight: 500;
    }

    > h3 > span {
        padding: 15px;
    }
`

const SideBarOptionChannel = styled.h3`
    padding: 10px 0;
    font-weight: 300;
`