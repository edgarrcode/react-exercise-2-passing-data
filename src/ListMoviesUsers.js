import React, { Component } from 'react'

class ListMoviesUsers extends Component {
  render() {
    const { profiles, users, movies, usersByMovie } = this.props;
    return(
      <div>
			{Object.keys(movies).map(id =>{
              const movieName = movies[id].name;
              const likedMovieID = []
              profiles.forEach(profile => {
                const profileFavMovie = profile.favoriteMovieID;
                if(id === profileFavMovie){
                  likedMovieID.push(profile.userID)
                }else{
                }
              });

              	return(
				<div key={id}>
                  <h2>
                  	{movieName}
                  </h2>
                  	{likedMovieID.length === 0 ? <p>None of the current users liked this movie.</p> : (
                     	<ul>{
                     		likedMovieID.map(userId => {
                     			return (
                     				<li key={userId}>
                     					{users[userId].name}
                					</li>
                     			);
                    		})
						}</ul>
					)}
				</div>
                )
            })}
        </div>
    )
  }
}

export default ListMoviesUsers