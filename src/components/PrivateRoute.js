import { Navigate } from "react-router"

export default function PrivateRoute ({children}) {
  return sessionStorage.getItem('token') ? children : <Navigate to="/" />
}