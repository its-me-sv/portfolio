import { blogs } from '../../data/blog.data';

import { Card, Name } from './styles';


interface BlogsProps {}

const Blogs: React.FC<BlogsProps> = () => {
  return (
    <>
      {blogs.map((blog) => (
        <Card key={blog.name}>
          <a href={blog.url} target="_blank" rel="noreferrer">
            <Name>{blog.name}</Name>
          </a>
        </Card>
      ))}
    </>
  );
};

export default Blogs;
