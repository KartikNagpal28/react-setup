import './SignUpTestimonial.css';

const SignUpTestimonial: React.FC = () => {
  return (
    <>
      <div className="testimonial-container">
        <div className="bottom-container flex h-[60vh] justify-between">
          <div className="quote-container">
            <p className="quote">
              “We have been using Tunnel to find guys to help on our projects. Now I cant imagine working without it.”
            </p>
          </div>
          <div className="right-container-footer">
            <p className="user-name">Adam M.</p>
            <div className="right-container-info">
              <p className="user-profession">Owner of BTS Construction</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpTestimonial;
