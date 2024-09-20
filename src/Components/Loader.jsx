import React from 'react'
import './css/loader.css'

export default function Loader() {
    return (
        <>
            <div className="d-flex w-full align-items-center vh-100">
                <section className="dots-container">
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                </section>
            </div>
        </>
    )
}
