import React, {Component} from 'react';

class MovieTableRow extends Component {


   render() {
      return (
          <tbody>
          <tr key={this.props.value._id}>
             <td>{this.props.value._id}</td>
             <td>{this.props.value.title}</td>
             <td>{this.props.value.genre.name}</td>
             <td>{this.props.value.numberInStock}</td>
             <td>{this.props.value.dailyRentalRate}</td>
             <td>{this.props.value.publishDate}</td>
             <td>
                <button onClick={() => this.props.onDelete(this.props.value._id)}
                        className="btn btn-danger btn-sm"> Delete
                </button>
             </td>
          </tr>
          </tbody>

      )
   }
}

export default MovieTableRow;
