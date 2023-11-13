import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Mahasiswa from "../pages/Mahasiswa";
import Jurusan from "../pages/Jurusan";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

function Routing() {

    const token = localStorage.getItem('token');
    const isLoggedIn = !!token;
    // const navigate useNavigate();
    const handleLogout = () => {
            localStorage.removeItem('token');
            console.log("Berhasil Logout");
            window.location.reload();
    y};
    return (
        <Router>
            <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">FrontEnd</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <Link class="nav-link active" to="/mhs" >Mahasiswa</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" to="/jrs" >Jurusan</Link>
        </li>
        {isLoggedIn ? (
            <li class="nav-item">
                <Link class="nav-link " onClick={handleLogout} >Logout</Link>
            </li>
        ) : (
            <li class="nav-item">
                <Link class="nav-link " to="/login" >Login</Link>
            </li>
        )}
        </ul>
    </div>
    </div>
</nav>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/mhs" element={<Mahasiswa/>} />
                <Route path="/jrs" element={<Jurusan/>} /> 
            </Routes>
            </div>
        </Router>
    );
}

export default Routing;