
import './App.css';

function App() {
  return (
    <div>
    <h2>Sign Up</h2>
    <form>
      <label>
        Name:
        <input type="text"  />
      </label>
      <label>
        Email:
        <input type="email" />
      </label>
      <label>
        Password:
        <input type="password" />
      </label>
      <label>
        Confirm Password:
        <input type="cpassword" />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  </div>
  )
}

export default App;
