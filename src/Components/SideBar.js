import { FiberManualRecord, Create, BookmarkBorder, ExpandLess, Apps, PeopleAlt, Drafts, Inbox, InsertComment, FileCopy, ExpandMore, Add } from '@material-ui/icons'
import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import styled from 'styled-components'
import SideBarOption from './SideBarOption'
import { db, auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function SideBar() {
    const [user] = useAuthState(auth)

    const [rooms, loading, error ] = useCollection(db.collection('rooms'))

    return (
        <SideBarContainer>
            <SideBarHeader>
                <SideBarInfo>
                    <h2>SLACK CLONE HQ</h2>
                    <h3>
                        <FiberManualRecord />
                        {user?.displayName}
                    </h3>
                </SideBarInfo>
                <Create />
            </SideBarHeader>
            
            <SideBarOption Icon={InsertComment} title="Threads"/>
            <SideBarOption Icon={Inbox} title="Mentions & Reactions"/>
            <SideBarOption Icon={Drafts} title="Saved Items"/>
            <SideBarOption Icon={BookmarkBorder} title="Channel Browser"/>
            <SideBarOption Icon={PeopleAlt} title="People and User Groups"/>
            <SideBarOption Icon={Apps} title="Apps"/>
            <SideBarOption Icon={FileCopy} title="File Browser"/>
            <SideBarOption Icon={ExpandLess} title="Show Less"/>
            
            <hr />
            <SideBarOption Icon={ExpandMore} title="Channels"/>

            <hr/>
            <SideBarOption Icon={Add} addChannelOption title="Add Channel"/>

            {rooms?.docs.map(doc =>
            <SideBarOption 
                key={doc.id}
                id={doc.id}
                title={doc.data().name}
                />
            )}
            <ScrollHelper />

        </SideBarContainer>
    )
}

export default SideBar

const ScrollHelper = styled.div`
    padding-bottom: 200px;
`

const SideBarContainer = styled.div`
    color: white;
    background-color: var(--slack-color);
    flex: 0.3;
    max-width: 263px;
    border-top: 1px solid #49274b;
    margin-top: 60px;
    overflow-y: scroll;

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`

const SideBarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;  
    }
`

const SideBarInfo = styled.div`
    flex:1;
    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: limegreen;
    }
`