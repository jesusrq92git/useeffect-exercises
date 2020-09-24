import React, {useState, useEffect, useCallback} from 'react';
import getUser from './helpers/getUser';
import getPosts from './helpers/getPosts';

const FetchCard = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const updateUser = () => {
    getUser()
      .then(newUser=>{
        setUser(newUser);
      })
  }

  const updatePosts = useCallback(
    () => {
      getPosts(user.id)
        .then(newPosts=>{
          setPosts(newPosts);
        })
    }, [user.id]
  )
  
  useEffect(()=>{
    updateUser();
  }, []);

  useEffect(()=>{
    if(!!user?.id){
      updatePosts();
    }
  }, [user, updatePosts]);
  
  return (
    <div>
      <button onClick={updateUser}>
        Another user
      </button>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>

      <br/>
      <h2>Posts - user: {user.id}</h2>
      <ul>
        {
          posts.map(post=>(
            <li key={post.id}> Titulo: {post.title}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default FetchCard;