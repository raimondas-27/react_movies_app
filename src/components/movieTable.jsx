import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";


class MovieTable extends Component {

   state = {
      movies: getMovies(),
      count: 1,
   }

   skaicius () {
      return this.state.movies.length
   }

   render() {
      return (
          <div>
             <div>
                <h3> Please see our movies: </h3>

                <p> This is how many movies are showing in movie-list : {this.skaicius()}</p>

                <table className="table">
                   <thead>
                   <tr>
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
                          <td>{element.title}</td>
                          <td>{element.genre._id}</td>
                          <td>{element.genre.name}</td>
                          <td>{element.numberInStock}</td>
                          <td>{element.dailyRentalRate}</td>
                          <td>{element.publishDate}</td>
                          <td>
                             <button onClick={this.handleDelete} className="btn btn-danger btn-sm"> Delete</button>
                          </td>
                       </tr>
                       </tbody>
                   ))}
                </table>
             </div>
          </div>)
   }

   handleDelete = () => {
      console.log("deleting....")
   }
}

// prisideti bootstrapa
//isitrauksim boostrapo css
//sugeneruosim lentele su movie duomenimis

export default MovieTable;
