import React from 'react';
import styled from 'styled-components';

const BlogContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const BlogCard = styled.div`
  width: calc(33.333% - 2rem);
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: 1rem;
`;

const BlogTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const BlogDate = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #4b4bff;
  margin-bottom: 1rem;
`;

const BlogExcerpt = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const BlogLink = styled.a`
  display: block;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background-color: #4b4bff;
  text-align: center;
  text-decoration: none;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #3c3cc7;
  }
`;

const BlogCardsPrimary = () => {
    const blogPosts = [{ id: 1, image: 'https://picsum.photos/id/237/200/300', title: 'Lorem ipsum dolor sit amet', date: 'January 1, 2022', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla eu maximus semper, odio sapien bibendum urna, ut sodales lorem arcu vitae nisl.', link: '#', }, { id: 2, image: 'https://picsum.photos/id/238/200/300', title: 'Sed euismod nulla eu maximus semper', date: 'February 1, 2022', excerpt: 'Sed euismod nulla eu maximus semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales lorem arcu vitae nisl.', link: '#', }, { id: 3, image: 'https://picsum.photos/id/239/200/300', title: 'Consectetur adipiscing elit', date: 'March 1, 2022', excerpt: 'Consectetur adipiscing elit. Sed euismod nulla eu maximus semper. Lorem ipsum dolor sit amet, ut sodales lorem arcu vitae nisl.', link: '#', },];

    return (
 <BlogContainer>
            {blogPosts.map((post) => (
                <BlogCard key={post.id}>
                    <BlogImage src={post.image} alt={post.title} />
                    <BlogContent>
                        <BlogTitle>{post.title}</BlogTitle>
                        <BlogDate>{post.date}</BlogDate>
                        <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                        <BlogLink href={post.link}>Read more</BlogLink>
                    </BlogContent>
                </BlogCard>
            ))}
        </BlogContainer>
       
    );
};

export default BlogCardsPrimary;
