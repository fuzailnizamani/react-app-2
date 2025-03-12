import markerImage from "../images/marker.png";

export default function Enter(prope) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
          <img 
              className="main-image"
              src= {prope.img.src}
              alt= {prope.img.alt} 
          />
      </div>
      <div className="info-container">
          <img 
              className="marker"
              src={markerImage} 
              alt="map marker icon"
          />
          <span className="country">{prope.country}</span>
          <a href={prope.googleMapsLink}>View on Google Maps</a>
          <h2 className="entry-title">{prope.title}</h2>
          <p className="trip-dates">{prope.dates}</p>
          <p className="entry-text">{prope.text}</p>
      </div>
    </article>
  )
}