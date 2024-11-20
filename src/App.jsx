// import "./App.css";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <main className="bg-slate-500 ">
      <Header />
      <TodoList />
      <Footer />
    </main>
  );
}

export default App;
