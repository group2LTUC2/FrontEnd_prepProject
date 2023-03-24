import './HeroSection.css'
import img from '../../img1.jpg'
function HeroSection() {
    return (
      <div
        className="hero"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="hero-content">
          <h1>Welcome to Sadaqah Box</h1>
          <p>Support our mission to make a difference in the lives of those in need during this holy month.</p>
          <button >Donate Now 🤗</button>
        </div>
      </div>
    );
  }

  export default HeroSection;