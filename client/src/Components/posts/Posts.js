import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../Layout/Spinner';
import PostItem from './PostItem';
import PostForm from './PostForm';

import { getPosts } from '../../actions/post';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const [displayThoughtForm, toggleThoughtForm] = useState(false);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='card-panel purple accent-4'>
        <div className='container '>
          <h1 className='center white-text'>Thoughts</h1>
          <p className='white-text'>
            <i className='fas fa-user'></i> Welcome to thought stadium
          </p>
        </div>
      </div>

      <div className='card-panel center  cyan lighten-5'>
        <button
          onClick={() => toggleThoughtForm(!displayThoughtForm)}
          type='button'
          className='waves-effect waves-light btn-large '
        >
          Create a new Thought
        </button>

        {displayThoughtForm && <PostForm />}
      </div>

      <div className='card-panel orange'>
        {posts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
