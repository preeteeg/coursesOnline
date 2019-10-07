import React from "react";

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
    console.log(this.state.course.title);
    //this.setState(...this.state.course)
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="course" onChange={this.handleChange} />
        <input type="submit" name="addCourse" value="add course" />
      </form>
    );
  }
}

export default CoursesPage;
