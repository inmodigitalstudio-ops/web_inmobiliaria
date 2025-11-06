import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Properties from './pages/Properties'
import About from './pages/About'
import Contact from './pages/Contact'
import Admin from './pages/Admin'


export default function App(){
return (
<div className="min-h-screen bg-white text-gray-900">
<nav className="border-b py-4">
<div className="container mx-auto px-4 flex items-center justify-between">
<Link to="/" className="font-bold text-xl">InmoDigitalStudio</Link>
<div className="space-x-4">
<Link to="/">Inicio</Link>
<Link to="/propiedades">Propiedades</Link>
<Link to="/sobre-mi">Sobre mí</Link>
<Link to="/contacto">Contacto</Link>
<Link to="/admin" className="ml-4 px-3 py-1 border rounded">Panel</Link>
</div>
</div>
</nav>
<main className="container mx-auto px-4 py-8">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/propiedades" element={<Properties/>} />
<Route path="/propiedades/:id" element={<Properties/>} />
<Route path="/sobre-mi" element={<About/>} />
<Route path="/contacto" element={<Contact/>} />
<Route path="/admin" element={<Admin/>} />
</Routes>
</main>
</div>
)
}