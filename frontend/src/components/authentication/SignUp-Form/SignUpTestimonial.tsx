import './SignUpTestimonial.css';

const SignUpTestimonial: React.FC = () => {
  return (
    <>
      <div className="testimonial-container">
        <div className="bottom-container flex h-[60vh] justify-between">
          <div className="quote-container">
            <p className="quote">"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt iste saepe!"</p>
          </div>
          <div className="right-container-footer">
            <p className="user-name">Lorem M.</p>
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
