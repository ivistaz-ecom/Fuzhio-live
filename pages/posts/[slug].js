import { useRouter } from 'next/router';
import posts from '/components/Templates/Data/posts';
import slugify from 'slugify';
import { Container, Image, Row } from 'react-bootstrap';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import SeoComponents from "../../components/SeoComponents/Seo";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Post = () => {
    const pathname = usePathname();
    const [domainName, setDomainName] = useState("");
    
    const router = useRouter();
    const { slug } = router.query;

    const post = posts.find(post => slugify(post.title, { lower: true }) === slug);

    if (!post) {
        return <p>Loading...</p>;
    }
    const title = post.title || "Default Title";  
    const description = post.excerpt || "Default description for SEO.";  
    const path = `${pathname}`;
    const metaImage = post.image || ""; 

    return (
        <>
            <SeoComponents
                title={title}
                description={description}
                path={path}
                metaImage={metaImage}
            />
            <Header />
            <Container fluid style={{ background: '#F5F5F5' }} className='p-lg-5 p-3'>
                <Container className='bg-white p-lg-5 p-3' style={{ marginTop: '70px' }}>
                    <Row className='p-lg-5 p-3 bg-white'>
                        <Image src={post.image} width="100%" />
                        
                        <h2 className='py-4'>{title}</h2>

                        
                        <p style={{ lineHeight: '32px', fontStyle: 'italic' }}>{description}</p> 

                        {post.content.map((item, index) => (
                            <div key={index}>
                                {item.type === 'title' ? (
                                    <h2>{item.text}</h2> 
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
