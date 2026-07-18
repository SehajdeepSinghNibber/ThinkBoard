import { useEffect, useState } from "react"
import axios from 'axios'
import Navbar from "../component/Navbar"
import RateLimitedUi from "../component/RateLimitedUi"
import toast from "react-hot-toast"

const HomePage = () => {

  const [isRateLimited, setRateLimited] = useState(false);
  const [notes,setNotes] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/posts");
        // console.log(res.data);
        setNotes(res.data)
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
    </div>
  )
}

export default HomePage
