import "./App.css"
import Menu from "./components/Menu"
import Categories from "./components/Categories"
import menu from "./datas"
import { useState } from "react"
export default function App() {
  const [menus, setMenus] = useState([])

  function filteredMenu(mainCategory) {
    if (mainCategory == "All") {
      setMenus(menu)
    } else {
      const mainMenus = menu.filter((item) => item.category == mainCategory)
      setMenus(mainMenus)
    }
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
      </section>

      <Categories filteredMenu={filteredMenu} />
      <div className="section-center">
        {menus.map((item) => (
          <Menu key={item.id} {...item} />
        ))}
      </div>
    </main>
  )
}
