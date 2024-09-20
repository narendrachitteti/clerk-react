import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function App() {
  return (
    <header>
      <SignedOut>
        <center>
        <h3>Welcome to RaaP Portal</h3>
        <h4>please click on sign in</h4>
        <div style={{margin:"40px", border:"1px solid grey", borderRadius:"5px"}}>
        <SignInButton />
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