import { useEffect, useState } from "react"
import axios from 'axios'
import Navbar from "../component/Navbar"
import RateLimitedUi from "../component/RateLimitedUi";

const HomePage = () => {

  const [isRateLimited, setRateLimited] = useState(false);
  const [notes,setNotes] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/posts");
        console.log(res.data);
      } catch (error) {
        console.error(error);
        console.log("Error fetching posts");
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
