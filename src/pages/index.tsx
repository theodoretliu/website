import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Teddy Liu</title>
      </Head>

      <div className="max-w-lg mx-auto px-6 flex flex-col gap-8 py-8">
        <main className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Hey, I'm Teddy!</h1>

          <div className="flex flex-col gap-2">
            <p className="">
              Currently, working on something new at{" "}
              <a
                href="https://www.southparkcommons.com/"
                target="_blank"
                className="underline text-blue-800"
              >
                South Park Commons
              </a>{" "}
              with{" "}
              <a
                href="https://www.linkedin.com/in/lucy-wang-944508132/"
                target="_blank"
                className="underline text-blue-800"
              >
                Lucy Wang
              </a>
              . Previously, a software engineer at{" "}
              <a
                href="https://www.qualified.com"
                target="_blank"
                className="underline text-blue-800"
              >
                Qualified
              </a>{" "}
              and{" "}
              <a
                href="https://www.gusto.com"
                target="_blank"
                className="underline text-blue-800"
              >
                Gusto
              </a>
              . Graduated from Harvard with a degree in Computer Science.
            </p>

            <p>
              Sometimes, I make and write things for myself and my friends
              &mdash; find those below.
            </p>

            <p>
              You can find me on{" "}
              <a
                href="https://github.com/theodoretliu"
                target="_blank"
                className="underline text-blue-800"
              >
                Github
              </a>{" "}
              and{" "}
              <a
                href="https://www.linkedin.com/in/theodore-liu/"
                target="_blank"
                className="underline text-blue-800"
              >
                LinkedIn
              </a>
              . My email is this domain minus the .com plus @gmail.com.
            </p>
          </div>
        </main>

        <section className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">Made Things</h2>

          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="https://crossword.theodoretliu.com"
                target="_blank"
                className="underline text-blue-800"
              >
                Mini Crossword Leaderboard
              </a>{" "}
              &mdash; historical data and statistics for the New York Times'
              mini crossword
            </li>

            <li>
              <a
                href="https://split.theodoretliu.com"
                target="_blank"
                className="underline text-blue-800"
              >
                Split
              </a>{" "}
              &mdash; quick and dirty bill splitting with shareable links and
              Venmo
            </li>

            <li>
              <a
                href="https://minesweeper.theodoretliu.com"
                target="_blank"
                className="underline text-blue-800"
              >
                Minesweeper
              </a>{" "}
              &mdash; simple reimplementation of the classic game (written in
              Svelte)
            </li>

            <li>
              <a
                href="https://gusto-equity.theodoretliu.com"
                target="_blank"
                className="underline text-blue-800"
              >
                Gusto Equity Projections
              </a>{" "}
              &mdash; tool for thinking about the value of stock grants while I
              was working at Gusto
            </li>

            <li>
              <a
                href="https://transpiler.theodoretliu.com"
                target="_blank"
                className="underline text-blue-800"
              >
                Python-to-OCaml Transpiler
              </a>{" "}
              &mdash; no longer works but was a proof of concept that translated
              Python to OCaml <span className="italic">before</span> LLMs ate
              the whole world
            </li>

            <li>
              <a
                href="https://visualtokyo.netlify.app"
                target="_blank"
                className="underline text-blue-800"
              >
                Visual Tokyo
              </a>{" "}
              &mdash; final project for Edo class at Harvard
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">Written Things</h2>

          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/nenya_edjah" className="underline text-blue-800">
                Tribute to Nenya Edjah
              </Link>{" "}
              &mdash; thoughts and reflections on my departed friend Nenya
            </li>

            <li>
              <a
                href="https://raw.githubusercontent.com/theodoretliu/thesis/master/writeup/thesis.pdf"
                target="_blank"
                className="underline text-blue-800"
              >
                Type-checking multidimensional arrays
              </a>{" "}
              &mdash; my senior year thesis on type-checking operations on
              multidimensional arrays
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
