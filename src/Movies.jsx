import { useState } from "react";
import { getMovies } from "./services/fakeMovieService.js";

function Movies(){
    const [movies,setMovies] = useState(getMovies);

    function handleDelete(movie){
        // API CALL to delete movie
        setMovies(movies.filter((m)=>m._id != movie._id));
    }

    if (movies.length == 0 ) return <p>There are no movies to display</p>

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {movies.map((movie)=>(
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td>
                            <button onClick={()=> handleDelete(movie)} className="btn btn-sm btn-danger">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Movies;