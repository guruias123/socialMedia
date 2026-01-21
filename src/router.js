import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./module/header"

const Home = lazy(() => import("./Home"));

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}
export default Router
