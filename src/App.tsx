import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import { Route, Routes, Navigate } from "react-router-dom"

function App() {

  return (
    <Container>
      <Routes>
      <Route path="/" element={<h1>Home</h1>}></Route>
      <Route path="/new" element={<h1>New</h1>}></Route>
      <Route path="/:id">
        <Route index element={<h1>Show</h1>}></Route>
        <Route path="edit" element={<h1>Edit</h1>}></Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
    </Container>
  )
}

export default App
