import React, { useState, useEffect } from "react"
import Grid from "@mui/material/Grid"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"

const CategoryFilter = ({ categories, onChangeSelected }) => {
  const [categoriesSelected, setCategoriesSelected] = useState([])

  useEffect(() => {
    setTimeout(() => {
      onChangeSelected(categoriesSelected)
    }, 100)
  }, [categoriesSelected])

  const handleChange = (event) => {
    /**
     * if exist -> remove
     * not exist => push
     */
    let newCat = []
    const value = event.target.value
    // 1 item exist in arr
    if (categoriesSelected.includes(value)) {
      // xoá
      newCat = categoriesSelected.filter((item) => item !== value)
    } else {
      newCat = [...categoriesSelected, value]
    }
    setCategoriesSelected(newCat)
  }
  return (
    <Grid>
      <h2>categories</h2>
      {categories &&
        categories.length > 0 &&
        categories.map((category) => {
          return (
            <div>
              <FormControlLabel
                control={<Checkbox onChange={handleChange} value={category._id} />}
                label={category.name}
              />
            </div>
          )
        })}
    </Grid>
  )
}
export default CategoryFilter
