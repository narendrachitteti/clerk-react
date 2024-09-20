import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function App() {
  return (
    <header>
      <SignedOut>
        <center>
        <div style={{margin:"40px", border:"1px solid grey", borderRadius:"5px"}}>
        <SignInButton />
        into RaaP Portal
        </div>
        </center>
      </SignedOut>
      <SignedIn>
        <div style={{marginLeft:"620px", marginTop:"-137px"}}>
          Welcome to RaaP 
        <UserButton />
        </div>
      </SignedIn>
    </header>
  );
}