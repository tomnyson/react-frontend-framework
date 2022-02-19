import React, { useEffect } from "react"
import LayoutDashboard from "../components/layout/LayoutDashboard"
import { useGlobalContext } from "../context/globalContext"
import { NavLink, useNavigate } from "react-router-dom"
const PrivateRouter = ({ children }) => {
  const [state] = useGlobalContext()
  const { token } = state.auth
  let navigate = useNavigate()

  useEffect(() => {
    if (!(token || localStorage.getItem("TOKEN"))) {
      navigate("/login")
    }
  }, [])
  return <LayoutDashboard>{children}</LayoutDashboard>
}

export default PrivateRouter
