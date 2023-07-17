import React from 'react'
//import { useParams } from 'react-router-dom' Passing parameters using params.
//import { useSearchParams } from 'react-router-dom' Passing parameters using Search.
import { useLocation } from 'react-router-dom'
export default function Details() {
    // Passing parameters using params.
    // const {id, title, content } = useParams()

    //Passing parameters using Search.
    // const [search] = useSearchParams()
    // const id = search.get(`id`)
    // const title= search.get(`title`)
    // const content = search.get(`content`)

    //Passing parameters using State.
    const { state: { id, title, content } } = useLocation()
    
    return (
        // Passing parameters using params.
        // <div>
        //   <ul>
        //     <li>Message id: {id}</li>
        //     <li>Message title: {title}</li>
        //     <li>Message content: {content}</li>
        //   </ul>
        // </div>
        <div>
            <ul>
                <li>Message id: {id}</li>
                <li>Message title: {title}</li>
                <li>Message content: {content}</li>
            </ul>
        </div>
    )
}
