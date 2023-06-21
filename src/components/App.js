import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App({ setQuestions, questions}) {
  const [page, setPage] = useState("List");

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion}/> : <QuestionList />}
    </main>
  );
}

export default App;
