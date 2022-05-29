import React from "react";

export default function AdminFooter() {
  return (
    <>
      <div>
        <footer className="main-footer">
          <strong>
            Copyright © {(new Date().getFullYear())} <a href="https://shriseismic.com">Seismic Hazard and Risk Investigations</a>. 
          </strong>
          
          <div className="float-right d-none d-sm-inline-block">
            <b>Version</b> 0.0.1
          </div>
        </footer>
        {/* Control Sidebar */}
        <aside className="control-sidebar control-sidebar-dark">
          {/* Control sidebar content goes here */}
        </aside>
        {/* /.control-sidebar */}
      </div>
    </>
  );
}
