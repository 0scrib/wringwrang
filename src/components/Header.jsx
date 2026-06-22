import { useLocation } from 'preact-iso';
import logoBackground from '../assets/logo-bg.png';
import { useEffect, useState } from 'preact/hooks';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<div class="nav-section">
					<a href="/" class={url == '/' && 'active'} >
						aubot<span class="correct-text">ABOUT*</span>taobu
					</a>
					<a href="/" class={url == '/' && 'active'} >
						ttsxe<span class="correct-text">TEXTS*</span>tszxt
					</a>
				</div>
				<div class="logo" style={{ backgroundImage: `url(${logoBackground})` }}>
					<span class="logo-text">wring</span><span class="logo-text">wrang</span>
				</div>
				<div class="nav-section">
					<a href="/" class={url == '/' && 'active'} >
						lvose<span class="correct-text">LOVES*</span>loovs
					</a>
					<a href="/" class={url == '/' && 'active'}>
						ttsxe<span class="correct-text">TEXTS*</span>tszxt
					</a>
				</div>
			</nav>
		</header>
	);
}
