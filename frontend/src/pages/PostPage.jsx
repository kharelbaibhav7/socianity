import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const PostPage = () => {

    const navigate = useNavigate()

    return (
        <div>
            <ul>
                <li><Link to="/post/event"> Organize event </Link></li>
                <li><Link to="/post/fundraising">Raise donation</Link></li>
                <li><Link to="/post/contribution">Describe a contributor</Link></li>
            </ul>
        </div>
    )
}

export default PostPage