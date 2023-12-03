"use client";
import Link from "next/link";
import { styles } from "../globals.css";
import Tooltip from "@mui/material/Tooltip";
import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';
export default function RootLayout({ children }) {
  return (
    <div>
      <nav className="nav">
        <ul>
          <Tooltip
            title="Not allowed for users"
            arrow
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <li>
              <Link href="#">Dashboard</Link>
            </li>
          </Tooltip>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/profile">My Profile</Link>
          </li>
          <li>
            <button onClick={() => localStorage.clear()}>
              <Link href="/">logout</Link>
            </button>
          </li>
        </ul>
      </nav>
      <div
        style={{
          padding: "0 20px",
          minHeight: "calc(100vh - 133px)",
        }}
      >
        {children}
      </div>
      <footer>
        All rights reserved &copy; Mohamed Helmy {new Date().getFullYear()}
      </footer>
    </div>
  );
}
