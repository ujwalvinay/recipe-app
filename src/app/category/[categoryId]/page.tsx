import React from "react"
import Card from "@/app/components/Card"

type Dictionary = {
    [key: string]: any
  }

async function getData(categoryId:string) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryId}`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }




    export default async function Page({params}:{params:{categoryId:string}}) {
        const data = await getData(params.categoryId)
        
        return (
        <main className='px-20'>
            <h1 className="font-bold text-6xl leading-snug pt-3">These are the <br /> best {params.categoryId} recipe !</h1>
            <div className="grid grid-cols-5 gap-8 mt-20 pb-10">
                {data.meals.map((meal:Dictionary) =>
                (
                    <Card name = {meal.strMeal} url={meal.strMealThumb} />
                ))}
            </div>
        </main> 
    )
  }