// pages/index.js
import Link from 'next/link';
import posts from '../Templates/Data/posts'
import slugify from 'slugify';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <Container fluid style={{ background: '#F5F5F5' }} className='p-lg-5 p-3'>
            <Container className='bg-white px-lg-5 p-3 custom-blog-design' >
                <Row className='px-lg-5 p-3'>
                    {posts.map(post => (
                        <div key={post.title} className='py-3 mt-5 shadow'>
                            <a href={`/posts/${slugify(post.title, { lower: true })}`}
                                style={{ color: 'rgba(0,0,0,0.65) !important' }}
                                className='text-dark'>
                                <Image src={post.image} width="100%" />
                            </a>
                            <div className='p-md-5 p-3'>
                                <a href={`/posts/${slugify(post.title, { lower: true })}`}
                                    style={{ color: 'rgba(0,0,0,0.65) !important' }}>
                                    <h2 className='pt-2'>{post.title}</h2>
                                </a>
                                <div>
                                    <p style={{ color: '#b34738', lineHeight: '32px', fontSize: '17px' }}>{post.date}</p>
                                </div>
                                <div>
                                    <p style={{ color: 'rgba(0,0,0,0.65)', lineHeight: '32px', fontSize: '17px' }}> {post.excerpt}</p>
                                </div>
                                <a href={`/posts/${slugify(post.title, { lower: true })}`} style={{ color: '#b34738 !important' }}>
                                    <h6>Read More</h6>
                                </a>
                            </div>
                        </div>
                    ))}
                </Row>
            </Container>
        </Container>

    );
};

export default Home;
