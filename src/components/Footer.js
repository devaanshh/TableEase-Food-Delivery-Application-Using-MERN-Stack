import React from 'react';

export default function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top" style={{ color: 'black' }}>
        <div className="col-md-4 d-flex align-items-center">
          <span className="text-muted">Table Ease</span>
        </div>
        <div className="col-md-8 d-flex align-items-center justify-content-end">
          <ul className="nav col-md-4 list-unstyled d-flex justify-content-end">
            <li className="ms-3">
              <a className="text-muted" href="https://www.linkedin.com/in/devansh-singh-61743b23b/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#0077B5" d="M21.2,0H2.8C1.3,0,0,1.3,0,2.8v18.4C0,22.7,1.3,24,2.8,24h18.4c1.5,0,2.8-1.3,2.8-2.8V2.8C24,1.3,22.7,0,21.2,0z M7.8,20.2H4.4V9.5h3.4V20.2z M5.7,8c-0.9,0-1.5-0.6-1.5-1.3c0-0.8,0.6-1.3,1.5-1.3s1.5,0.6,1.5,1.3C7.2,7.5,6.6,8,5.7,8z M21.2,20.2h-3.3v-5.5c0-1.3,0-3-1.9-3c-1.9,0-2.2,1.5-2.2,3V20.2H9.2V9.5h3.2v1.6c0.4-0.7,1.1-1.4,2.9-1.4c2.1,0,3.8,1.4,3.8,4.5V20.2z" />
                </svg>
              </a>
            </li>

            <li className="ms-3">
              {/* Updated GitHub icon */}
              <a className="text-muted" href="https://github.com/devaanshh" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
