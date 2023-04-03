import { useState } from 'react'
import { getData } from '../context/RequestActions'
const API_KEY: string = process.env.REACT_APP_TMBD_API_KEY as string

const useGetMovie = (type: string, id: any) => {
  const url = `/${type}/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos,credits,recomendations`
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()
  const [error, setError] = useState(null)

  const fetchData = () => {
    getData(url, setData, setLoading, setError)
  }

  return {
    data,
    loading,
    error,
    fetchData,
  }
}

export default useGetMovie
