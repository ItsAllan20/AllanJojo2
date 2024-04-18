import { useEffect, useState } from 'react'


function Form() {
  const [id, setID] = useState('')
  const [theme, setTheme] = useState('')
  const [question, setQuestion] = useState('')
  const [reponse, setReponse] = useState('')

  function envoieFormulaire(e){
    e.preventDefault()
    const formData = {
        id: id,
        theme: theme,
        question: question,
        reponse: question
    }
    //call api ici !
    fetch('http://localhost:8000/questions', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    console.log("célébrité créée avec succès !");
  }

  
  return (
    <>
      <form action="" onSubmit={(e)=>{envoieFormulaire(e)}}>
        <h1>Viens poser ta question !</h1>
        <input type="number" placeholder='Entrez votre id' onChange={(e)=>{setID(e.target.value)}}/><br />
        <input type="text" placeholder='Entrez le thème' onChange={(e)=>{setTheme(e.target.value)}}/><br />
        <input type="text" placeholder='Entrez la question'onChange={(e)=>{setQuestion(e.target.value)}}/><br />
        <input type="text" placeholder='Entrez la réponse'onChange={(e)=>{setReponse(e.target.value)}}/><br />
        <button type="submit">Valider ta question !</button>
      </form>
    </>
  )
}

export default Form