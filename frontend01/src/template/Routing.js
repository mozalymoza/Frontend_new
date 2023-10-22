import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Mahasiswa from '../pages/Mahasiswa';
import Jurusan from '../pages/Jurusan';

function Routing() {
    return (
        <Router>
            <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <Link className="nav-link activer" to="/mhs">
                            Mahasiswa
                        </Link>
                        </li>
                        <li class="nav-item">
                        <Link className="nav-link activer" to="/jrs">
                            Jurusan
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>

                <Routes>
                    <Route path="/mhs" element={<Mahasiswa/>} />
                    <Route path="/jrs" element={<Jurusan/>} />
                </Routes>

            </div>
        </Router>
    )
}

export default Routing;