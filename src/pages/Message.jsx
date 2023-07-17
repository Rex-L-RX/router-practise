import React, { useState } from 'react'
import { Link, Outlet,useNavigate } from 'react-router-dom'


export default function Message() {
    const navigate = useNavigate()
    const [messages] = useState([
        { id: '01', title: 'message1', content: 'content1' },
        { id: '02', title: 'message2', content: 'content2' },
        { id: '03', title: 'message3', content: 'content3' },
        { id: '04', title: 'message4', content: 'content4' }
    ])
    
    function showDetails(m){
        navigate('details',{
            replace: false,
            state:{
                id:m.id,
                title: m.title,
                content: m.content
            }
        })
    }
    return (
        <div>
            <ul>
                {
                    messages.map((m) => {
                        return (
                            <li key={m.id}>
                                {/* Passing parameters using params.
                                <Link to={`details/${m.id}/${m.title}/${m.content}`}>{m.title}</Link> */}

                                    {/* Passing parameters using Search
                                <Link to={`details?id=${m.id}&title=${m.title}&content=${m.content}`}>{m.title}</Link> */}
                                {/* Passing parameters using State */}
                                <Link 
                                    to="details" 
                                    state={{
                                        id:m.id,
                                        title: m.title,
                                        content: m.content
                                    }}>{m.title}
                                </Link>
                                <button onClick={()=>showDetails(m)}>Show Details</button>
                            </li>
                        )
                    })
                }
            </ul>
            <hr />
            {/* assign the location of route componet  */}
            <Outlet />
        </div>
    )
}
