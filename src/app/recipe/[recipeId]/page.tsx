import React from 'react'
import Image from 'next/image'

async function getData(recipeId:string) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeId}`)
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }




    export default async function Page({params}:{params:{recipeId:string}}) {
        const data = await getData(params.recipeId)
        
        if (data.meals && data.meals.length > 0) {
            const meal = data.meals[0];
            
            console.log(meal.strArea);
            console.log(meal.strCategory);
            console.log(meal.strInstructions);
    
            return (
                <main className='px-20'>
                    <div className="flex justify-between px-20">
                        <div className='w-1/2'>
                            <h1 className="font-bold text-6xl leading-snug pt-3">{meal.strMeal}</h1>
                            <div className="flex gap-20 mt-6 text-lg font-semibold">
                                <span className='border-solid border-2 border-black rounded-2xl px-6 py-2'>{meal.strCategory}</span>
                                <span className='border-solid border-2 border-black px-6 py-2 rounded-2xl'>{meal.strArea}</span>
                            </div>
                            <p className='pt-10'>
                                {meal.strInstructions}
                            </p>
                        </div>
                        <div className='m-auto'>
                            <Image 
                                src={meal.strMealThumb}
                                width={500}
                                height={500}
                                alt=''
                                style={{borderRadius: '15px', overflow: 'hidden'}}
                            />
                        </div>
                    </div>
                </main>
            );
        } else {
            return (
                <main className='px-20'>
                    <h1>No meal found</h1>
                </main>
            );
        }
        
  }

