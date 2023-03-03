import React, { useEffect, useState } from 'react'
import Question from './Question'

function Home() {

    const [questions, setQuestions] = useState()
   

   const getQuestions = async () => {
  try {
    const response = await fetch("http://localhost:9292/questions", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });
    const data = await response.json();
    console.log(data);
    setQuestions(data);
  } catch (error) {
    console.error(error);
  }
}

useEffect(() => {
  getQuestions();
}, []);


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
                  Column 1
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home

