import preactLogo from '../../assets/preact.svg';
import { PostsRenderer } from '../../components/PostsRenderer';
import './style.css';

export function Home() {
	return (
		<div class="home">
			<PostsRenderer />
		</div>
	);
}

