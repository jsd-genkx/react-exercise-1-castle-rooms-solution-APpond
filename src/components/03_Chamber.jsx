import Room from "./04_Room";
import PropTypes from "prop-types";

const Chamber = ({ message1, onReply }) => {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1>Chamber</h1>
      <p>Message for JSD7: {message1}</p>
      <Room message1={message1} onReply={onReply} />
    </div>
  );
};

Chamber.propTypes = {
  message1: PropTypes.string,
  onReply: PropTypes.func,
};

export default Chamber;
