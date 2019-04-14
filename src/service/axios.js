import axios from 'axios'
 
// get movies by title
const getMoviebyId=(movietitle)=>{
  return axios({
    method:'get',
    url:`http://localhost:8000/movies/movies/${movietitle}`,
  })
}

// get allmovies------------------------
const getAllMovies=()=>{
  return axios({
    method:'get',
    url:`http://localhost:8000/movies/movies`,
  }).then((data)=>{
    return data.data
  })
}

// get moviebygenre
const getMoviebyGenre=(moviebygenre)=>{
  return axios({
    method:'get',
    url:`http://localhost:8000/movies/genre/${moviebygenre}`,
  })
}

//read all movie comments for specific movie
const getMovieComments=(moviecommentsbytitle)=>{
  return axios({
    method:'get',
    url:`http://localhost:8000/movies/allcomments/${moviecommentsbytitle}`,
  })
}

//read all ratings for aspecific movie
const getMovieRatings=(specificrating)=>{
  return axios({
    method:'get',
    url:`http://localhost:8000/movies/allratings/${specificrating}`,
  })
}

// postcomments-----------------------------------------
const postComment=(postcomment,moviekey)=>{
  return axios({
    method:'post',
    url:`http://localhost:8000/comments/postcomment`,
    data:{
      text:postcomment,
      movie_id:moviekey
    },
  })
}

// postrating---------------------------------------------
const postRating=(starstruck,moviedataid)=>{
  return axios({
    method:'post',
    url:`http://localhost:8000/ratings/ratings`,
    data:{
      stars:starstruck,
      movie_id:moviedataid
    },
  })
}
export {getMoviebyId, getAllMovies, getMoviebyGenre, getMovieComments, getMovieRatings,postComment,postRating}