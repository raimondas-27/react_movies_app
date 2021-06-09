import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";


class MovieTable extends Component {

   state = {
      movies: getMovies(),
      count: 1,
   }

   render() {
      const {movies: mv} = this.state
      {
         if (mv.length === 0) {
            return (
                <div className="alert alert-warning">
                   There are no movies at the moment
                </div>
            )
         }
      }

      return (
          <div>
             <div>
                <h3> Please see our movies: </h3>

                <p> This is how many movies are showing in movie-list : {mv.length}</p>

                <table className="table">
                   <thead>
                   <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Title</th>
                      <th scope="col">Genre_Id</th>
                      <th scope="col">Genre_name</th>
                      <th scope="col">NumberInStock</th>
                      <th scope="col">DailyRentalRate</th>
                      <th scope="col">Publish Date</th>
                      <th/>
                   </tr>
                   </thead>
                   {this.state.movies.map((element) => (
                       <tbody>
                       <tr key={element._id}>
                          <td>{element._id}</td>
                          <td>{element.title}</td>
                          <td>{element.genre._id}</td>
                          <td>{element.genre.name}</td>
                          <td>{element.numberInStock}</td>
                          <td>{element.dailyRentalRate}</td>
                          <td>{element.publishDate}</td>
                          <td>
                             <button onClick={() => this.handleDelete(element._id)}
                                     className="btn btn-danger btn-sm"> Delete
                             </button>
                          </td>
                       </tr>
                       </tbody>
                   ))}
                </table>
             </div>
          </div>)
   }

   handleDelete = (movieId) => {
      const moviesWithoutTheOneWeDeleted = this.state.movies.filter((movie) => movie._id !== movieId)
      this.setState({movies: moviesWithoutTheOneWeDeleted})
   }
}

// prisideti bootstrapa
//isitrauksim boostrapo css
//sugeneruosim lentele su movie duomenimis

export default MovieTable;
