import "./comments.scss";

const Comments = () => {
  return (
    <div className="comments">
      <div className="write">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      <div className="comment">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="info">
          <span>John Doe</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            dolorem, ullam voluptates consectetur consequuntur odio? Mollitia,
            voluptates delectus, enim repellendus eveniet, quasi ab vitae rerum
            harum dignissimos exercitationem consequuntur corrupti!
          </p>
        </div>
        <span className="date">1 hour ago</span>
      </div>
    </div>
  );
};

export default Comments;
