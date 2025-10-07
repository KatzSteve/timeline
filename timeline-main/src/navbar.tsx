const RemotionLogo = () => (
	<img
		className="size-8 sm:size-12"
		src="/remotion-logo.svg"
		alt="Remotion Logo"
	/>
);

const TimelineLogo = () => (
	<div className="gap flex items-center gap-2 self-start select-none">
		<RemotionLogo />
		<h1 className="text-xl font-bold text-white/90 sm:text-4xl">Timeline</h1>
	</div>
);

const NavbarLink = ({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) => (
	<a
		href={href}
		target="_blank"
		rel="noreferrer"
		className="text-white/70 hover:text-white/100"
	>
		{children}
	</a>
);

export const Navbar = () => (
	<div className="flex w-full items-center justify-between">
		<TimelineLogo />
		<div className="flex items-center gap-8">
			<NavbarLink href="https://github.com/remotion-dev/timeline">
				Docs
			</NavbarLink>
			<NavbarLink href="https://www.remotion.dev">Remotion</NavbarLink>
		</div>
	</div>
);
