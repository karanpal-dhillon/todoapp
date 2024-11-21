// import "./App.css";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <main className="bg-slate-500 ">
      <Header />
      <TodoList className="mx-auto min-h-screen flex items-center justify-center" />
      <Footer />
    </main>
  );
}

export default App;
