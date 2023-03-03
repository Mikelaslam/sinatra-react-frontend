import React from 'react';

function Question({ question }) {
  return (
    <div>
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="fw-bold">{question.title}</h5>
                <p className="card-text">{question.content}</p>
                <div className='d-flex flex-row'>
                    <p>By {question.user.username}</p>
                    <p className='px-3'> {question.created_at}</p>
                </div>
            </div>
            <hr/>
            <div className='p-4'>
                <h6>Comments {question.comments.length}</h6>
                {question.comments.map((comment)=>(
                <p className='bg-light bordered mb-2'>{comment.comment}</p>

                ))
                }

            </div>
        </div>
    </div>
  );
}

export default Question;
