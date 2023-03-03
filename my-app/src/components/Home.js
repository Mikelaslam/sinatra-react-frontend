import React, { useEffect, useState } from 'react'
import Question from './Question'

function Home() {

    const [questions, setQuestions] = useState()
   

    useEffect(()=>{
        fetch("http://localhost:9292/questions", {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        })
        .then(r=>r.json())
        .then((response)=>{
            console.log(response)
            setQuestions(response)
        })

    }, [])

  return (
    <div>
        <div className="container ">
            <h1 className='py-3 '>Question Page {questions && questions.length}</h1>
            <div className="row ">
                <div className="col-sm-8">
                  {
                    questions && questions.map((question)=>(
                         <Question question={question} key={question.id} />
                    ))
                  }
                </div>
                <div className="col-sm-4">
                  One of two columns
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home

