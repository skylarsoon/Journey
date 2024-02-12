import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const date = new Date()

const MyForm = () => {
  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    event.preventDefault()
    const name = event.target.name
    const value = event.target.value
    console.log("submission: ", {name}, {value})
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    inputs.date = date
    event.preventDefault();
    exportData(inputs)
    alert("Successfully Saved! Journal Entry: " + inputs.journal + " Song: " + inputs.song);
  }

  return (
    <form onSubmit = {handleSubmit}>
      <fieldset className = "journal-space"> 
        <legend>Journal Entry</legend>
        <textarea
          columns = {50}
          rows = {4}
          className = "text-input"
          id = "journal"
          type = "text"
          name = "journal"
          value = {inputs.journal || ""}
          onChange = {handleChange}
        />
      <br/>
      <label> Enter a song:
        <input
          className = "song-input"
          type = "text"
          name = "song"
          value = {inputs.song || ""}
          onChange = {handleChange}
        />
      </label>

      <br/>
      <button type="submit" name="button" id="save-button" onSubmit={handleSubmit}>Save</button>
      
      </fieldset>

    </form>
  )

}


const exportData = (input) => {
  const fileData = JSON.stringify(input);
  const blob = new Blob([fileData], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = `Journal ${date}.json`;
  link.href = url;
  link.click();
}


const App = () => {
  return (
    <>
      <MyForm />
    </>
  )
}

export default App
