import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-transparent text-white py-24 mt-24">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div>
            <h2 className="text-3xl font-bold">We are Dezitech Engineering</h2>
            <p className="mt-4 text-dez-muted">Partner with Dezitech Engineering for world-class MEI contracting, industrial maintenance, and EPC solutions.</p>
          </div>
          <div>
            <h6 className="text-sm uppercase">Navigate</h6>
            <ul className="mt-4 space-y-2">
              <li><a href="#platform">Platform</a></li>
              <li><a href="#company">Company</a></li>
            </ul>
          </div>
          <div>
            <h6 className="text-sm uppercase">Connect</h6>
            <ul className="mt-4 space-y-2">
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-giant">Dezitech</div>

      <div className="container mx-auto mt-12 text-sm text-dez-muted">
        © {new Date().getFullYear()} Dezitech Engineering. All rights reserved.
      </div>
    </footer>
  );
}
