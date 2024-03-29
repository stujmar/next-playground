import Head from 'next/head'
import Layout from "../components/Layout"
import { summer } from "smarsh-summer";
import Link from 'next/link'
import Image from 'next/image'
import { addTwo } from '../util/math';

export default function Home() {

  console.log(addTwo(4));

  let toggle = true;

  const swapper = ({value, isTrue, isFalse, base }) => {
    if (!base) {
        return value ? isTrue : isFalse;
    } else {
        return value ? `${base} ${isTrue}` : `${base} ${isFalse}`;
    }
}

const pyramid = () => {
  let hashes = "";
  for (let i = 0; i < 7; i++) {
    hashes += "#";
    console.log(hashes);
  }
};

const fizzBuzz = () => {
  for (let i = 1; i < 101; i++) {
    let result = "";
    result += i % 3 === 0 ? "Fizz" : "";
    result += i % 5 === 0 ? "Buzz" : "";
    result += result === "" ? i : "";
    console.log(result);
  }
};

// console.log(swapper({
//   value:toggle,
//   isTrue: "truth",
//   isFalse: "I'm lying",
//   base: "these are base classes"
// }));

// console.log(swapper({
//   value:toggle,
//   isTrue: "truth",
//   isFalse: "I'm lying"
// }));

  // summer({
  //   numberOne: 10,
  //   numberTwo: 90
  // })

  console.log(typeof summer);

  return (
    <Layout>
      <div>
          <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
              <title>Create Next App</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center flex-1 px-20 text-left">
              <h1 className="text-6xl font-bold">
                Learn{' '}
                <a className="text-blue-600" href="https://nextjs.org">
                  Next.js!
                </a>
                <Link href="posts/first-post"><a> First Post</a></Link>
              </h1>
              <p className="mt-3 text-2xl">
                Get started by editing{' '}
                <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
                  pages/index.js
                </code>
              </p>

              <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                <a
                  href="https://nextjs.org/docs"
                  className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                >
                  <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
                  <p className="mt-4 text-xl bg-blue-200">
                    Find in-depth information about Next.js features and API.
                  </p>
                </a>

                <a
                  href="https://nextjs.org/learn"
                  className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                >
                  <h3 className="text-2xl font-bold">Learn &rarr;</h3>
                  <p className="mt-4 text-xl">
                    Learn about Next.js in an interactive course with quizzes!
                  </p>
                </a>

                <a
                  href="https://github.com/vercel/next.js/tree/master/examples"
                  className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                >
                  <h3 className="text-2xl font-bold">Examples &rarr;</h3>
                  <p className="mt-4 text-xl">
                    Discover and deploy boilerplate example Next.js projects.
                  </p>
                </a>

                <a
                  href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                >
                  <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
                  <p className="mt-4 text-xl">
                    Instantly deploy your Next.js site to a public URL with Vercel.
                  </p>
                </a>
              </div>
            </main>
          </div>
        </div>
    </Layout>
  )
}
