import { Commit } from "../interfaces";
import { formatDate } from "../utils/format";

export default function CommitCard({commit}: {commit: Commit}) {
  const { sha, commit: { message, author }, url } = commit;

  return (
    <div className="h-72 max-w-md lg:max-w-lg min-w-0 w-full bg-gray-50 flex flex-col justify-center relative sm:py-12">
      <div className="relative group max-w-xl mx-auto ">
        <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-teal-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
          <div className="space-y-2">
            <p className="text-slate-800 py-2 font-main font-bold">{author.name}</p>
            <p className="text-slate-800 py-2 font-main font-bold">{formatDate(author.date)}</p>
            <p className="text-slate-800 py-2 font-oxygen">Message: {message}</p>
            <p className="text-slate-800 py-2 font-oxygen">Sha: {sha}</p>
            <a href={url} className="block pt-5 text-teal-400 group-hover:text-slate-800 transition duration-200 font-main font-medium" target="_blank">See Commit→</a>
          </div>
        </div>
      </div>
    </div>
  )
}