import React from 'react'
import { Link } from 'react-router-dom'
import footerLogo from '../../assets/logo/logo2.png'

const Footer = () => {
    return (
        <footer class="footer p-10 bg-base-200 text-base-content">
            <div>
                <img src={footerLogo} alt="Banner Logo" />
                <p>ELECTRIX LTD.<br />Providing reliable tech since 1982</p>
            </div>
            <div>
                <span class="footer-title">Services</span>
                <Link to='/' class="link link-hover">Branding</Link>
                <Link to='/' class="link link-hover">Design</Link>
                <Link to='/' class="link link-hover">Marketing</Link>
                <Link to='/' class="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span class="footer-title">Company</span>
                <Link to='/' class="link link-hover">About us</Link>
                <Link to='/' class="link link-hover">Contact</Link>
                <Link to='/' class="link link-hover">Jobs</Link>
                <Link to='/' class="link link-hover">Press kit</Link>
            </div>
            <div>
                <span class="footer-title">Legal</span>
                <Link to='/' class="link link-hover">Terms of use</Link>
                <Link to='/' class="link link-hover">Privacy policy</Link>
                <Link to='/' class="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    )
}

export default Footer