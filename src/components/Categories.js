import React, { useState } from "react"
import menu from "../datas"
import { useEffect } from "react"
const Categories = ({filteredMenu}) => {
  const [category, setCategory] = useState([])
  const [mainCategory, setMainCategory] = useState("All")
  useEffect(() => {
    let categorys = new Set()
    menu.forEach((item) => {
      categorys.add(item.category)
    })
    setCategory(['All',...categorys])
  }, [])

  useEffect(()=>{
    filteredMenu(mainCategory)
  },[mainCategory])
  return (
    <div className="btn-container">
      {category.map((btn) => (
        <button
          key={btn}
          type="button"
          className={
            btn === mainCategory ? `highlight filter-btn` : "filter-btn"
          }
          onClick={() => setMainCategory(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  )
}

export default Categories
