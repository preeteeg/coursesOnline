import React from "react";
import { connect } from "react-redux";
import * as CourseActions from "../../redux/actions/courses/courseActions";
import PropTypes from "prop-types";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: { title: "" }
    };
  }

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
  };

  handleSubmit = event => {
    event.preventDefault();
    //1st dispatch the action
    //  this.props.dispatch(CourseActions.createCourse(this.state.course));
    //cleaner way, we dont need to call dispatch here since that's being handled in mapDispatchToProps now
    this.props.createCourse(this.state.course);

    console.log(this.state.course.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="course" onChange={this.handleChange} />
        <input type="submit" name="addCourse" value="add course" />
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired
};

//connect is a function that connect the component to redux
//such component is called container component
//step 4 mapStateToProps called again to re-render component
const mapStateToProps = state => {
  return { courses: state.courses }; // be specific , request only the data your component needs
};

const mapDispatchToProps = dispatch => {
  return {
    //dispatch is one that notifies react about an action
    createCourse: course => dispatch(CourseActions.createCourse(course))
  };
};

export default connect(
  mapStateToProps, //this function determines what state is passed to our component via props
  mapDispatchToProps // this lets us declare what actions to pass to our component on props
  //when we omit mapDispatchToProps, our component gets a dispatch prop injected automatically
  //mapDispatchToProps determines what actions are available on props in our component
)(CoursesPage);
