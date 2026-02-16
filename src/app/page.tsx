import { SignedOut, SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button/button";
import { SignInIcon } from "@/components/ui/icons/sign-in";

export default async function Home() {
	// const users = await getData();
	return (
		<div className="flex flex-col w-60 mx-auto justify-center grow">
			{/* <SignedIn>
      </SignedIn> */}
			<SignedOut>
				<div className="flex flex-col gap-20d p-16d bg-neutral-1 rounded-12d border-muted border">
					<p>Hi! Sign in to start.</p>
					<SignInButton>
						<Button intent={"secondary"} appearance={"subtle"} lifted>
							Sign In
							<SignInIcon />
						</Button>
					</SignInButton>
				</div>
			</SignedOut>
		</div>
	);
}
