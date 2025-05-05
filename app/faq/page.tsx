'use client'

import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'



function getRandomDate() {
  const startDate = new Date('2031-01-01');
  const endDate = new Date('2032-12-31');
  const randomDate = new Date(
    startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())
  );
  return randomDate.toLocaleDateString();
}

function sumDigits(dateString) {
  const dateParts = dateString.replace(/-/g, '').replace(/\//g, '');
  let sum = 0;
  for (let i = 0; i < dateParts.length; i++) {
    sum += parseInt(dateParts[i]);
  }
  console.log(sum);
  return sum;
}

export default function Page() {


  const [randomDate, setRandomDate] = useState('');
  const [sumOfDigits, setSumOfDigits] = useState(0);

  useEffect(() => {
    const date = getRandomDate();
    setRandomDate(date);
    setSumOfDigits(sumDigits(date));
  }, []);


  return (
    <section>
      <img src="/faq.gif"></img>
      {/* <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Frequently asked questions
      </h1> */}
      <p className="mb-4">
        <b>What is the T.O.?</b>
      </p>
      <p className="mb-4">
      The enemy. Short for tech oligarch, we believe the T.O. is a cabal of powerful actors who have been leading the charge on artificial general intelligence (AGI) for the last decade. They are interested in destroying the human race as we know it. Prominent figures include Am Saltman and Melon Usk, though there are many others.

      </p>
      <p className="mb-4">
        <b>How do we know Human Obsolescence is intentional?</b>
      </p>
      <p className="mb-4">
      We have witnessed, time and time again, the T.O. deliberately orienting technology in the interest of human extinction. This is apparent even in a pre-AI context: take the creation of social media algorithms that promote division and misinformation. The prospect of AGI has already resulted in catastrophic deskilling and job loss (the 2028 Bureau of Labor Statistics reports that over thirty percent of people are unemployed, most as a result of AI).
      <br></br>
      <br></br>
      This is not an accident. The T.O. has always had an interest, whether explicitly stated or implied, to create a utopia for themselves without humans. Their dreams to "take humanity to the next level" are a thinly veiled attempt to create a world where humans are no longer necessary. Whatever the next generation of "humanity" is, it will not look anything like us. See <a className="underline" href="/blog/to-eschatology">this</a> post for explicit confessions of the T.O.'s intent to destroy humanity.
      </p>
      <p className="mb-4">
        <b>When is the date of human obsolescence?</b>
      </p>
      <p className="mb-4">
        {randomDate}.
      </p>
      <p className="mb-4">
        <b>Why?</b>
      </p>
      <p className="mb-4">
        This is an approximation based on our Obsolescence Index scores. For further proof,
        if you were to sum the digits of {randomDate}, you would get {sumOfDigits}. Multiplying {sumOfDigits} by {Math.floor(666 / sumOfDigits)} and adding {666 - sumOfDigits * Math.floor(666 / sumOfDigits)} gets you 666. Coincidence?
      </p>
      <p className="mb-4">
        <b>How do we stop this?</b>
      </p>

      <p className="mb-4">
      This is a difficult task, as the T.O. is both extremely mysterious and extremely powerful. We believe the best way to stop them is to raise awareness of their actions and keep your eyes open for clues. Please see <a className="underline"   href="/blog/conspiracy">this</a> blog post for best practices.
      </p>
      

      <div className="my-8">
      </div>
    </section>
  )
}
