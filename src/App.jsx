import Question from "./components/Question/Questions"

export default function App() {
  return (
    <main className="w-full h-full bg-[#0d1117]">
      <h1 className="flex text-3xl p-6 justify-center font-bold bg-slate-900 shadow-sm shadow-white text-[#fff] italic">
        Quiz App
      </h1>
        <Question />
    </main>
  )
}