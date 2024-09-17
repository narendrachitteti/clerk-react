import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function App() {
  return (
    <header>
      <SignedOut>
        <div style={{marginLeft:"500px", border:"1px solid grey", borderRadius:"5px"}}>
        <SignInButton />
        into RaaP Portal
        </div>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}