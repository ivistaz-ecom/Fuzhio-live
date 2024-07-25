'use client'
import Link from 'next/link';
import posts from '../Data/posts'
import slugify from 'slugify';

const IndexPage = () => {
    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/post/${slugify(post.title, { lower: true })}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IndexPage;
