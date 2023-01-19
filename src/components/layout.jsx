import { Routes, Route, Outlet, Link } from "react-router-dom"

import Header from "./header"
import Footer from "./footer"

import theme from "../theme.json"
import logo from "../assets/logo.png"

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
