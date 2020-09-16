import React from 'react'
import {connect} from 'react-redux'
import {createPost, showAlert} from "../redux/actions";
import {Alert} from "./Alert";

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    }
  }

  submitHandler = event => {
    console.log(this.props)
    event.preventDefault();

    const {title} = this.state;

    if (!title.trim()) {
      return this.props.showAlert('Post title cannot be empty!')
    }

    const newPost = {
      title, id: Date.now().toString()
    };

    this.props.createPost(newPost);

    this.setState({title: ''})
  };

  changeInputHandler = event => {
    event.persist();
    this.setState(prev => ({...prev, ...{
        [event.target.name]: event.target.value
      }}));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>

        {this.props.alert && <Alert text={this.props.alert} />}

        <div className='form-group'>
          <label htmlFor="title"><h2>Title post</h2></label>
          <input
            placeholder='Enter title'
            type="text"
            className="form-control"
            id='title'
            name='title'
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
        </div>
        <button className='btn btn-success'>Create</button>
      </form>
    )
  }
}

const mapDispatchToProps = {
  createPost, showAlert
};

const mapStoreToProps = state => ({
  alert: state.app.alert
});

export default connect(mapStoreToProps, mapDispatchToProps)(PostForm)
