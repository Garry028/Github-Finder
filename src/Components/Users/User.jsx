import React, { useEffect, useState } from 'react';
import Spinner from '../layout/Spinner';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const User = ({ loading }) => {

    const [user, setUser] = useState({});

    // this will get single user
    const params = useParams();
    // console.log(params);
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`https://api.github.com/users/${params.login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

            // console.log(res.data);

            setUser(res.data);
        }
        getData();
        // eslint-disable-next-line
    }, []);
    // this empty array is for preventing default behaiviour 

    const {
        name,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        company
    } = user;

    if (loading) {
        return <Spinner />
    }

    return (<>
        <Link to='/' className='btn btn-light'>
            Back to search
        </Link>
        <div className="card grid-2">
            <div className="all-center">
                <img src={avatar_url} className="round-img" alt="" style={{ width: '150px' }} />
                <h1>{name}</h1>
                <p><strong>Location : </strong>{location}</p>
            </div>
            <div>
                {bio && (<>
                    <h3>Bio </h3>
                    <p>{bio}</p>
                </>
                )}
                <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
                <ul>
                    <li>
                        {login && <>
                            <strong>Username : </strong>{login}
                        </>}
                    </li>
                    <li>
                        {company && <>
                            <strong>Company : </strong>{company}
                        </>}
                    </li>
                    <li>
                        {blog && <>
                            <strong>blog : </strong>{blog}
                        </>}
                    </li>
                </ul>
            </div>
        </div>

        <div className="card text-center">
            <div className="badge badge-primary">Followers:{followers}</div>
            <div className="badge badge-success">Following:{following}</div>
            <div className="badge badge-light">Public Repos:{public_repos}</div>
            <div className="badge badge-dark">Public Gists:{public_gists}</div>
        </div>
    </>

    )
}


export default User;
