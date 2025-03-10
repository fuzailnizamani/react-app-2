import globeImage from '../images/globe.png';

export default function Header () {
  return (
        <header className="nav-bar">
          <img src={globeImage} alt="Globe icon" />
          <h1>my travel journal</h1>
        </header>
  )
}