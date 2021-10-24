import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-gray-200 py-5">
            <p className="text-center"><Link to="/" className="font-bold hover:text-primary transition-colors">Watch.</Link> - &copy; 2021 Felyna Amelia</p>
        </footer>
    )
}
