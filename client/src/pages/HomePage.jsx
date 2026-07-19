import { useEffect, useState } from "react"
import axios from 'axios'
import Navbar from "../component/Navbar"
import PostCard from "../component/PostCard"
import RateLimitedUi from "../component/RateLimitedUi"
import toast from "react-hot-toast"

const HomePage = () => {

  const [isRateLimited, setRateLimited] = useState(false);
  const [posts,setPosts] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/posts");
        console.log(res.data);
        setPosts(res.data)
        setRateLimited(false)
      } catch (error) {
        console.error(error);
        console.log("Error fetching posts");
        if(error.response.status === 429){
          setRateLimited(true)
        }
        else{
          toast.error("Failed to Load notes")
        }
      }
      finally{
        setLoading(false)
      }
    };

      fetchNotes();
    }, []);

  return (
    <div className="min-h-screen">
        <Navbar />

        {isRateLimited && <RateLimitedUi />}

        <div className="max-w-7xl mx-auto p-4 mt-6">
          {loading && (
            <div className="text-center text-primary py-10">
              Loading Notes...
            </div>
          )}

          {posts.length > 0 && !isRateLimited && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
    
    </div>
  )
}

export default HomePage
