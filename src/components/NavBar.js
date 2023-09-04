import CartWidget from "./CartWidget"
import Logo from "./Logo"
const NavBar = () => {
    return (
        <nav>
            <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> <Logo/> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Diamond Rings</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Ruby Rings</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Emerald Rings</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> <CartWidget/> </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
            </div>
        </nav>
    )
}
export default NavBar 