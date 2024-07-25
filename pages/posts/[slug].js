// pages/posts/[slug].js
import { useRouter } from 'next/router';
import posts from '/components/Templates/Data/posts'
import slugify from 'slugify';

import { Container, Image, Row } from 'react-bootstrap';

import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'


const Post = () => {
    const router = useRouter();
    const { slug } = router.query;

    const post = posts.find(post => slugify(post.title, { lower: true }) === slug);

    if (!post) {
        return <p>Post not found</p>;
    }

    return (
        <>
            <Header />
            <Container fluid style={{ background: '#F5F5F5' }} className='p-lg-5 p-3'>
                <Container className='bg-white p-lg-5 p-3'>
                    <Row className='p-lg-5 p-3 bg-white'>
                        <Image src={post.image} width="100%" />
                        <h2 className='py-4 '>{post.title}</h2>

                        {post.content.map((item, index) => (
                            <div key={index}>
                                {item.type === 'title' ? (
                                    <h2> {item.text}</h2>
                                ) : (
                                    <p style={{ lineHeight: '32px' }}>{item.text}</p>
                                )}
                            </div>
                        ))}
                    </Row>
                </Container>
            </Container>

            <Footer />
        </>
    );
};

export default Post;




