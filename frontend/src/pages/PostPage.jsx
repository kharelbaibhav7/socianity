import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const PostPage = () => {

    const navigate = useNavigate()

    return (
        <div>
            <ul>
                <li><Link to="/events"> Organize event </Link></li>
                <li><Link to="/fundrasings">Raise donation</Link></li>
                <li><Link to="/contributions">Read about social contributors</Link></li>
            </ul>
        </div>
    )
}

export default PostPage