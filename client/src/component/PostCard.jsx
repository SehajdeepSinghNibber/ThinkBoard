import { Link } from "react-router"
import { formatDate } from "../lib/utils"
import { PenSquareIcon, Trash2Icon } from "lucide-react"

const PostCard = ({post}) => {
  return (
    <Link to ={`/post/${post._id}`} className="card bg-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-black" >
      <div className="card-body">
        <h3 className="card-title text-based-content">{post.title}</h3>
        <p className="text-based-content/70 line-clamp-3">{post.content}</p>
        <div className="card-action justify-between items-center mt-4">
            <span className="text-sm text-based-content/60">
                {formatDate(post.createdAt)}
            </span>
            <div className="flex items-center gap-2 mt-2">
              <button className="btn btn-ghost btn-xs">
                <PenSquareIcon className="size-4" />
              </button>

              <button className="btn btn-ghost btn-xs text-error">
                <Trash2Icon className="size-4" />
              </button>
            </div>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
