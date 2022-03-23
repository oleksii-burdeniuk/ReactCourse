import React from "react";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";

const News = () => {
  return (
    <p> Hello this is news</p>
  );
};
export default connect(null, { withAuthRedirect })(News);