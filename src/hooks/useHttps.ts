import { useCallback } from 'react'
import axios from 'axios'

const tmbd_url: string = process.env.REACT_APP_TMBD_URL as string

const movies = axios.create({
  baseURL: tmbd_url,
})

const useHttps = () => {
  const sendRequest = useCallback(
    async (
      url: string,
      callback: (data: any) => void,
      loadingFunc?: (value: boolean) => void,
      errorFunc?: (value: any) => void
    ) => {
      try {
        if (loadingFunc) {
          loadingFunc(true)
        }
        const response = await movies.get(url)
        callback(response.data)
        if (loadingFunc) {
          loadingFunc(false)
        }
      } catch (error: any) {
        if (errorFunc) {
          errorFunc(error)
        }
        if (loadingFunc) {
          loadingFunc(false)
        }
      }
    },
    []
  )

  return sendRequest
}

export default useHttps
