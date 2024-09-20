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
      <h3>Welcome to RaaP Portal</h3>
      <h5>please click on profile icon</h5>
      <div style={{margin:"40px"}}>
        <UserButton />
        </div>
      </SignedIn>
    </header>
  );
}