// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

// import { useEffect, useState } from 'react'
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
// import { Database } from '@/types/supabase'

import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'


import { createClient } from '@/utils/supabase/server';


type Task = {
    id: number
    task: string
    score: number
    reference: string
  }


export default async function Page() {

    const supabase = await createClient();
    const { data: tasks } = await supabase.from("tasks").select();

    const totalScore = tasks?.reduce((sum, t) => sum + t.score, 0) ?? 0
    const totalPossible = tasks?.reduce((sum, t) => sum + 10, 0) ?? 0



    async function addTask(formData: FormData) {
        'use server'

        const supabase = await createClient();

        // const supabase = createServerActionClient<Database>({ cookies })
    
        const task = formData.get('task') as string
        const score = parseInt(formData.get('score') as string)
        const reference = formData.get('reference') as string

        console.log(task);
    
        if (!task || isNaN(score)) return
    
        await supabase.from('tasks').insert({ name: task, score: score, reference: reference })
        redirect('/table') // refresh the page with new data
      }

  return (
    <section>
            <img src="/index.gif"></img>

      {/* <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        The Human Obsolescence Index
      </h1> */}
      <p className="mb-4">
        {`As we approach the possibility of human obsolescence, we believe there will be signs. This index is a non-exhaustive list of those signs. Many of these are tasks an artificial general intelligence will be able to accomplish.`}
      </p>

      <div className="p-6 max-w-xl mx-auto">
      {/* <h1 className="text-2xl font-bold mb-4">Task List</h1> */}
      <table className="w-full border border-gray-300 mb-6">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">Task</th>
            <th className="border px-4 py-2 text-left">Score</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((t) => (
            <tr key={t.id}>
<td className="border px-4 py-2 whitespace-normal break-words">{t.name} [<a className="text-blue-700" href={t.reference}>source</a>]</td>
<td className="border px-4 py-2">{t.score}</td>
            </tr>
          ))}
        </tbody>
        
      </table>
      <p className="text-lg font-semibold mt-2">
  Total Score: <span className="text-blue-700">{totalScore}/{totalPossible}</span> 😨
</p>
    </div>

    

<br></br>


    <p>Have a new sign of human obsolescence? Contribute here.</p>


    <form action={addTask} className="space-y-4">
        <input
          name="task"
          type="text"
          placeholder="Task"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          name="score"
          type="number"
          placeholder="Score"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          name="reference"
          type="text"
          placeholder="Source"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <button
          type="submit"
          // className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          <img className="center" src="/submit.gif" alt="Flame" />
          {/* Give me a sign */}
        </button>
      </form>


      {/* <p className="mb-4">
        {`Is it God's plan to make us obsolete? Or is the product of the actions of a few malicious actors? These are amazing questions that we hope to uncover.`}
      </p> */}
      <div className="my-8">
      </div>
    </section>
  )
}
