import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { PostsContainer } from './styles'
import queryString from 'query-string'
import instance from '../../../api/config';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import styled from 'styled-components';

function Posts() {
    let navigate = useNavigate()
    let user = localStorage.getItem('carer_user');
    user = JSON.parse(user);
    const location = useLocation();
    let [data, setData] = useState([]);
    const [prevCoins, setPrevCoins] = useState(parseInt(user.userDetails.points));

    const handleAddCoins = async (pid) => {
        let new_points = parseInt(prevCoins) + 500;
        await instance.patch(`/users/addpoints/${user.userDetails.id}`, {
            "points": new_points
        })
            .then((res) => {
                console.log(res.data)
                user.userDetails.points = new_points
                localStorage.setItem('carer_user', JSON.stringify(user))
                instance.patch(`/posts/gothelp/${pid}`, {
                    gotHelp: true
                }).then((res) => {
                    console.log(res.data)
                }).catch((err) => {
                    console.log(err)
                })
                window.location.reload()
            })

            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        let city = queryString.parse(location.search);
        instance.get(`posts/all_posts/${city?.city?.toLowerCase()}`)
            .then((response) => {
                let temp = response.data.posts;
                // eslint-disable-next-line
                temp.map((p, i) => {
                    if (p.gotHelp === false) {
                        return (
                            data.push({
                                index: i + 1,
                                id: p.id,
                                name: p.name,
                                email: p.email,
                                message: p.message,
                                contact: p.contact,
                                created_at: p.created_at,
                                gotHelp: p.gotHelp
                            })
                        )
                    }
                });
                setData(data);
            }).catch((error) => {
                alert(error);
            })
        instance.post(`/users/getcoins/${user.userDetails.id}`)
            .then((res) => {
                setPrevCoins(parseInt(res.data.points))
            })
            .catch((err) => {
                console.log(err)
            })
            // eslint-disable-next-line
    }, []);
    useEffect(() => {
        let token = localStorage.carer_token
        if (!token) {
            navigate('/')
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <Header />
            <PostsContainer>
                {data.length > 0 ? (
                    <h1>{data.length} Search Results</h1>
                ) : (
                    <h1>No Results Found</h1>
                )}
                {data && data.map((p, i) => (
                    <CardContainer key={i}>
                        <h3>{p.name}</h3>
                        <h4>{p.contact}</h4>
                        <h4>{p.message}</h4>
                        <h4>{p.created_at}</h4>
                        <button onClick={() => handleAddCoins(p.id)}>Help</button>

                    </CardContainer>
                ))}
            </PostsContainer>
            <Footer />
        </>
    )
}

export default Posts

const CardContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: var(--primary-color-dark);
    color: var(--primary-color-light);
`;
