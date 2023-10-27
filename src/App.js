import "./App.css"
import Menu from "./components/Menu"
import Categories from './components/Categories'
export default function App() {
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
      </section>

      <Categories />
      <Menu />
    </main>
  )
}
