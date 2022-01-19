import aboutImage from '../../images/image-about.png';
function About() {
  return (
    <div className='about'>
      <div className='about__container'>
        <img className='about__image' src={aboutImage} alt='' />
        <div className='about__description'>
          <h2 className='about__title'>About the author</h2>
          <div className='about__text-box'>
            <p className='about__text'>
              This block describes the project author. Here you should indicate
              your name, what you do, and which development technologies you
              know.
            </p>
            <p className='about__text'>
              You can also talk about your experience with Practicum, what you
              learned there, and how you can help potential customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
