import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

     const [categories, setCategories] = useState(['Luis Suarez'])

     const onAddCategory = (newCategory)=>{

      if (categories.includes(newCategory) ) return;
      setCategories([newCategory,...categories])
     }

 

  return (
    <>
   
    <h1>GifExpertApp</h1>
  
    
    <AddCategory 
    
    onNewCategory= { (value) => onAddCategory(value)}
    currentCategories={ categories }
    />
    
  
      { 
        categories.map( (category) => (
            <GifGrid 
            key={category} 
            category={ category } />

          ))
      }
      

    </>
  )
}
 