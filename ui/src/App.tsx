import { fetchCommits } from "./utils/queries"
import CommitsList from "./components/CommitsList"
import { useQuery } from "@tanstack/react-query"
import { Commit } from "./interfaces"
import Layout from "./layouts/Layout"
import Spinner from "./components/Spinner"

function App() {
  const { isLoading, error, data: queriedCommits } = useQuery<Commit[], Error>({ 
    queryKey: ['commits'], 
    queryFn: fetchCommits,
    retry: 0
  })

  if (isLoading) {
    return (
      <Layout>
        <div className="flex justify-center items-center mt-20">
          <Spinner />
        </div>
      </Layout>
    )
  }

  if (error) {
    return (
      <Layout>
        <div className="text-center font-main mt-20">
          An error has occurred: {error.message}
        </div>
      </Layout>
    )
  }

  return (
    <div className="bg-clay lg:h-screen overflow-y-hidden">
      <Layout>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="grid items-center">
            <div className="group px-10 lg:px-0 mt-10 lg:mt-0 pb-28">
              <div className="bg-dark_blue py-36 text-center lg:ml-10 rounded-xl transition duration-400 ease-in-out group-hover:bg-teal-200 px-10">
                <p className="font-main text-white group-hover:text-dark_blue">This is the commit history for the GithubCommits repository</p>
                <p className="font-main text-white group-hover:text-dark_blue">If you want to check the complete repositoy go to the link</p>
                <a href="https://github.com/Robertorc83/GithubCommits" className="block pt-5 text-teal-400 group-hover:font-bold group-hover:text-slate-800 transition duration-200 font-main font-medium" target="_blank">See Repository →</a>
              </div>
            </div>
          </div>
          <CommitsList commits={queriedCommits} />
        </div>
      </Layout>
    </div>
  )
}

export default App