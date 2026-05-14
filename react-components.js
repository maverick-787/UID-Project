const { useState, useEffect } = React;

const defaultReviews = [
  {
    id: 1,
    stars: 5,
    text: "The Butter Chicken Biryani had me calling back the same night for a second order. Absolutely incredible — better than my mom's, and that says a lot.",
    author: "Rahul Varma",
    role: "Regular Customer · Mumbai",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80"
  },
  {
    id: 2,
    stars: 5,
    text: "Ordering was seamless. The packaging was beautiful, everything arrived warm. The Malabar Prawns are now a weekly ritual for me.",
    author: "Priya Nair",
    role: "Food Blogger · Kerala",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=80&q=80"
  },
  {
    id: 3,
    stars: 5,
    text: "Ordered for a family dinner of 12. Every single dish was perfect. The Dal Makhani is clearly slow-cooked with love. 10/10, will always recommend.",
    author: "Anand Krishnan",
    role: "Software Engineer · Bangalore",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&q=80"
  },
  {
    id: 4,
    stars: 4,
    text: "The paneer tikka was extremely soft and well-marinated. Delivery was quick, though I wish they had more dessert options.",
    author: "Sneha Patel",
    role: "Vegetarian Foodie",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80"
  },
  {
    id: 5,
    stars: 5,
    text: "As someone who appreciates authentic Kerala cuisine, the Fish Moilee blew my mind. The coconut milk balance was perfect. A must try!",
    author: "Thomas George",
    role: "Local Guide",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80"
  },
  {
    id: 6,
    stars: 5,
    text: "Saffron & Ember is my go-to for late-night cravings. The Chicken 65 is always crispy, and the Gulab Jamun melts in your mouth.",
    author: "Ayesha Khan",
    role: "Student",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80"
  },
  {
    id: 7,
    stars: 5,
    text: "The eco-friendly packaging is a massive plus. Food quality is consistently top-notch. Can't recommend them enough for weekend dinners.",
    author: "Vikram Singh",
    role: "Eco-Advocate",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80"
  }
];

function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);

  // Form State
  const [newReviewText, setNewReviewText] = useState("");
  const [newRating, setNewRating] = useState(5);

  useEffect(() => {
    // Load reviews from local storage, merge with defaults
    const storedReviews = JSON.parse(localStorage.getItem('reviews') || '[]');
    setReviews([...defaultReviews, ...storedReviews]);

    // Check if user is logged in
    const userStr = localStorage.getItem('currentUser');
    if (userStr) {
      setCurrentUser(JSON.parse(userStr));
    }
  }, []);

  const handleNext = () => {
    if (currentIndex < reviews.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newReviewText.trim()) return;

    const newReview = {
      id: Date.now(),
      stars: newRating,
      text: newReviewText,
      author: currentUser.name,
      role: "Verified Diner",
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=80&q=80" // Default avatar
    };

    const storedReviews = JSON.parse(localStorage.getItem('reviews') || '[]');
    storedReviews.push(newReview);
    localStorage.setItem('reviews', JSON.stringify(storedReviews));

    setReviews(prev => [...prev, newReview]);
    setNewReviewText("");
    setCurrentIndex(reviews.length); // jump to new review
    
    // Using global showToast from script.js
    if (window.showToast) window.showToast("⭐ Review added successfully!");
  };

  return (
    <div className="testimonials reveal visible">
      <h3>What Our Guests Say 💬</h3>
      
      <div className="carousel-container">
        <div 
          className="carousel-track" 
          style={{ transform: \`translateX(-\${currentIndex * 100}%)\` }}
        >
          {reviews.map((r, i) => (
            <div className="carousel-item" key={r.id}>
              <div className="testimonial-card">
                <div className="t-stars">{"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}</div>
                <p className="t-text">"{r.text}"</p>
                <div className="t-author">
                  <img className="t-avatar" src={r.avatar} alt={r.author} />
                  <div>
                    <div className="t-name">{r.author}</div>
                    <div className="t-role">{r.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="carousel-controls">
          <button className="carousel-btn" onClick={handlePrev} disabled={currentIndex === 0}>←</button>
          <button className="carousel-btn" onClick={handleNext} disabled={currentIndex === reviews.length - 1}>→</button>
        </div>
      </div>

      {currentUser ? (
        <div className="review-form-container">
          <h4>Leave a Review</h4>
          <form onSubmit={handleSubmitReview}>
            <div className="review-form-group">
              <label>Rating</label>
              <div className="star-rating-select">
                {[1,2,3,4,5].map(star => (
                  <span 
                    key={star} 
                    className={star <= newRating ? "active" : ""}
                    onClick={() => setNewRating(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <div className="review-form-group">
              <label>Your Review</label>
              <textarea 
                placeholder="Tell us what you loved..." 
                value={newReviewText}
                onChange={(e) => setNewReviewText(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="cf-submit" style={{width: 'auto', padding: '0.8rem 2rem'}}>Submit Review</button>
          </form>
        </div>
      ) : (
        <div style={{textAlign: 'center', marginTop: '2rem', color: 'var(--mid)', fontSize: '0.9rem'}}>
          <a href="login.html" style={{color: 'var(--ember)', fontWeight: 'bold', textDecoration: 'none'}}>Log in</a> to write a review.
        </div>
      )}
    </div>
  );
}

const rootElement = document.getElementById('react-testimonials-root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<Testimonials />);
}
