import headshot from '../images/Headshot.jpg'

const HeadEl = () => {
  return (
    <div className="container bg-dark text-light w-100">
      <div className="row justify-content-md-between">
        <div className="col-md-6 my-auto offset-1">
          <h1>
            Hi, <br></br>my name is David Rullo
          </h1>
          <p>
            This is my portfolio. Feel free to look around. Remember - If you
            break it, you buy it!
          </p>
        </div>
        <div className="col-md-4" id="profile-pic">
          <img
            src={headshot}
            className="img-fluid"
            alt="Profile pic of author"
          />
        </div>
      </div>
    </div>
  );
};

export default HeadEl
