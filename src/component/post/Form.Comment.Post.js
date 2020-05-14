import React,{useState,Fragment} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addCommentPost } from './../../action/posts';

const FormCommentPost = ({postId,addCommentPost}) => {
    const [text, setText] = useState('')
    const onSubmit = e => {
        e.preventDefault();
        addCommentPost({text},postId);
        console.log(text);
        console.log(postId);
        setText('');
        
    }
    return (
        <Fragment>
            form comment post
            <form className="form my-1" onSubmit={e =>onSubmit(e)}>
            <textarea
            rows='5'
            cols='30'
            placeholder='enter comment post'
            value={text}
            onChange={e =>{setText(e.target.value)}}

            />
            <input type='submit' className='btn btn-dark my-1'/>
            </form>
        </Fragment>
    )
}

FormCommentPost.propTypes = {

}
// const mapStateToProps = state =>({
//     auth:state.auth
// })
export default connect(null,{addCommentPost})(FormCommentPost)
