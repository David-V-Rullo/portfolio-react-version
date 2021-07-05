import Findme from "./Findme";

const About = () => {
  return (
    <div className="container-fluid bg-dark text-light w-100">
      <div className="row justify-content-lg-between">
        <section className="col-md-2  bg-primary p-4">
          <p>
            I am an aspiring web developer who is currently attending the
            Rutgers University Full Stack Bootcamp. I am going blind and have
            had to abandon my law career for a career that is much more
            favorable to working from home
          </p>
        </section>
        <br />
        <section className="col-md-8 pt-4 mx-auto">
            <h4>Background</h4>
            <div className="pr-2 w-75">
                <p>
            I got my first computer when I was in the eigth grade. This was, to
            this day, the best Christmas gift I ever received. I poured every
            second into tinkering with that computer - a custom built Intel 486
            33mhz desktop with a whopping 2MB of ram and a bottomless 285MB hard
            drive.
                </p>
                <p>
            My first program was written in a DOS text editor; using QBASIC I
            was able to make a program that let me launch all of my games with a
            couple button pushes.
            </p>
          <p>I never stopped enjoying playing and tinkering with computers, but when it came time to decide to do after high school I opted to joine the Marines. During my time in the Marine Corps I received a commendation from the Admiral of the U.S. Navy 7th Fleet for turning a bunch of old computers found in garbage into functioning machines that my Marines could use to stay in touch with friends and family via a new fangled technology called the "Internet". </p>
          <p>Since my time in the Marine Corps I was a police officer for fourteen years and I am also a practicing attorney and prosecutor in New Jersey.</p>
          <p>Unfortunately, in 2017, I was diagnosed with a degenerative retina disease called Retinitus Pigmentosa. This disease has chipped away at my vision and left me almost totally blind. This forced me to reevaluate what I wanted to do. Given my lifelong interest in computers and a newfound understanding of the difficulties that living with a disability can be, I decided to become a full-stack web developer with a focus on UI/UX design and accessability. </p>
          <br />
          <p>I look forward to seeing what this new career has to offer!</p>
          </div>
        </section>
        <Findme />
      </div>
    </div>
  );
};

export default About;
