import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="nav-brand">
            <h1>Q&A Chronicles</h1>
          </div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#books">Books</a>
            <a href="#services">Services</a>
            <a href="#community">Community</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Empowering Faith, Family, and Financial Freedom</h1>
          <p className="hero-subtitle">
            Q&A Chronicles creatively blends biblical wisdom, entrepreneurial strategy, 
            and family empowerment into an inspiring ecosystem for personal and professional growth.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Explore Our Books</button>
            <button className="btn-secondary">Join Our Community</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/Quetheauthorprofilepic2.jpg" alt="Q&A Chronicles Authors" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Q&A Chronicles</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Our Mission</h3>
              <p>
                At Q&A Chronicles, we believe that faith, family, and financial freedom are not separate journeys 
                but interconnected paths that lead to a fulfilling life. Our mission is to provide practical, 
                biblical wisdom that empowers couples and individuals to thrive in their relationships, 
                businesses, and spiritual walk.
              </p>
              <h3>Our Vision</h3>
              <p>
                To create a global community where faith-driven entrepreneurs and families can find the tools, 
                resources, and support they need to build lasting legacies that honor God and strengthen relationships.
              </p>
            </div>
            <div className="about-image">
              <img src="/Q&APatreon(1084x576px)(FacebookCover).jpg" alt="Q&A Chronicles Community" />
            </div>
          </div>
        </div>
      </section>

      {/* Books & Products Section */}
      <section id="books" className="books">
        <div className="container">
          <h2>Our Books & Resources</h2>
          <div className="books-grid">
            <div className="book-card">
              <img src="/TheHustlethatHonorsGod(coverpage).jpg" alt="The Hustle That Honors God" />
              <h3>The Hustle That Honors God</h3>
              <p>Thriving in Business and Family</p>
              <div className="book-links">
                <a href="#" className="btn-amazon">Buy on Amazon</a>
                <a href="#" className="btn-barnes">Buy on Barnes & Noble</a>
              </div>
            </div>
            
            <div className="book-card">
              <img src="/CrownAndcover3dfinal.png" alt="Crown & Cover Series" />
              <h3>You're Her Husband, Not Her Roommate</h3>
              <p>Crown & Cover Series</p>
              <div className="book-links">
                <a href="#" className="btn-amazon">Buy on Amazon</a>
                <a href="#" className="btn-barnes">Buy on Barnes & Noble</a>
              </div>
            </div>
            
            <div className="book-card">
              <img src="/TheCrown&CoverCouplesworkbook.jpg" alt="Crown & Cover Couples Workbook" />
              <h3>You're His Wife, Not His Mother</h3>
              <p>Crown & Cover Series</p>
              <div className="book-links">
                <a href="#" className="btn-amazon">Buy on Amazon</a>
                <a href="#" className="btn-barnes">Buy on Barnes & Noble</a>
              </div>
            </div>
            
            <div className="book-card">
              <img src="/Crown&Coverseriesadvertisementspecialoffer.jpg" alt="Crown & Cover Couples Workbook" />
              <h3>Crown & Cover Couples Workbook</h3>
              <p>A Journey Toward Deeper Connection, Growth & Commitment</p>
              <div className="book-links">
                <a href="#" className="btn-amazon">Buy on Amazon</a>
                <a href="#" className="btn-barnes">Buy on Barnes & Noble</a>
              </div>
            </div>
          </div>
          
          <div className="special-offer">
            <h3>Special Offer for Couples Ready to Grow</h3>
            <p>Buy both Crown & Cover books and get the Couples Companion Workbook FREE!</p>
            <ul>
              <li>✓ Just subscribe to our YouTube channel</li>
              <li>✓ Drop your email through our Stan Store or Gumroad link</li>
              <li>✓ ...and it's yours.</li>
            </ul>
            <p className="tagline">Because healing your home should come with real tools.</p>
            <p className="motto">Let's grow together — not apart.</p>
          </div>
        </div>
      </section>

      {/* Digital Products & Services */}
      <section id="services" className="services">
        <div className="container">
          <h2>Digital Products & Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Faith & Flow Content Planner App</h3>
              <p>Streamline your content creation with faith-based planning tools.</p>
            </div>
            <div className="service-card">
              <h3>Faith & Business Audio Experience</h3>
              <p>Immersive audio content for faith-driven entrepreneurs.</p>
            </div>
            <div className="service-card">
              <h3>Q&A Chronicles Community Membership</h3>
              <p>Exclusive access to our growing community of faith-based families.</p>
            </div>
            <div className="service-card">
              <h3>Personalized Business Consultations</h3>
              <p>One-on-one guidance for your faith-based business journey.</p>
            </div>
            <div className="service-card">
              <h3>Strategic Funnel & Marketing Services</h3>
              <p>Professional marketing solutions that align with your values.</p>
            </div>
            <div className="service-card">
              <h3>Prophetic Wear Collection</h3>
              <p>Apparel & merchandise that speaks to your faith journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="community">
        <div className="container">
          <h2>Join Our Community</h2>
          <div className="community-content">
            <div className="community-platforms">
              <h3>Connect With Us</h3>
              <div className="social-links">
                <a href="https://www.instagram.com/qnachronicles" target="_blank" rel="noopener noreferrer">
                  <span>📱</span> Instagram @qnachronicles
                </a>
                <a href="https://www.tiktok.com/@qnachronicles" target="_blank" rel="noopener noreferrer">
                  <span>🎵</span> TikTok @qnachronicles
                </a>
                <a href="https://www.youtube.com/@qnachronicles" target="_blank" rel="noopener noreferrer">
                  <span>📺</span> YouTube @qnachronicles
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <span>👥</span> Facebook
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <span>📌</span> Pinterest
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <span>💬</span> Telegram
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <span>🍋</span> Lemon8
                </a>
              </div>
            </div>
            
            <div className="community-features">
              <h3>Community Features</h3>
              <ul>
                <li>Patreon Community Access</li>
                <li>Gumroad Digital Products & Blog</li>
                <li>Atypical Homemaker Content</li>
                <li>Live Q&A Sessions</li>
                <li>Exclusive Resources</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Special Initiatives */}
      <section className="initiatives">
        <div className="container">
          <h2>Special Initiatives</h2>
          <div className="initiative-card">
            <h3>Sprinter Van Cross-country Faith & Family Journey</h3>
            <p>Follow our family's adventure as we travel across the country, sharing faith-based content and connecting with communities nationwide.</p>
          </div>
          
          <div className="initiative-card">
            <h3>New Thing Hustle</h3>
            <ul>
              <li>Faceless Monetization: Affiliate marketing, dropshipping, viral content automation</li>
              <li>YouTube Content Creation leveraging AI</li>
              <li>Innovative digital marketing strategies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact & Connect</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <p>Ready to start your journey with Q&A Chronicles? We'd love to hear from you!</p>
              
              <div className="contact-form">
                <h4>Newsletter Signup</h4>
                <form>
                  <input type="email" placeholder="Enter your email address" />
                  <button type="submit" className="btn-primary">Subscribe</button>
                </form>
              </div>
              
              <div className="direct-contact">
                <h4>Direct Inquiry</h4>
                <form>
                  <input type="text" placeholder="Your Name" />
                  <input type="email" placeholder="Your Email" />
                  <textarea placeholder="Your Message" rows="4"></textarea>
                  <button type="submit" className="btn-primary">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Q&A Chronicles</h3>
              <p>Empowering Faith, Family, and Financial Freedom</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Quick Links</h4>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#books">Books</a>
                <a href="#services">Services</a>
              </div>
              <div className="footer-column">
                <h4>Community</h4>
                <a href="https://www.instagram.com/qnachronicles">Instagram</a>
                <a href="https://www.tiktok.com/@qnachronicles">TikTok</a>
                <a href="https://www.youtube.com/@qnachronicles">YouTube</a>
                <a href="#">Patreon</a>
              </div>
              <div className="footer-column">
                <h4>Resources</h4>
                <a href="#">Gumroad Store</a>
                <a href="#">Stan Store</a>
                <a href="#">Blog</a>
                <a href="#">Consultations</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Q&A Chronicles. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

