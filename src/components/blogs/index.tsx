import { blogs } from '../../data/blog.data';

import { Card, Name } from './styles';

import { useCommonContext } from '../../contexts/common.context';

interface BlogsProps {}

const Blogs: React.FC<BlogsProps> = () => {
  const { isDark } = useCommonContext();

  return (
    <>
      {blogs.map((blog) => (
        <Card dark={isDark} key={blog.name}>
          <a href={blog.url} target="_blank" rel="noreferrer">
            <Name dark={isDark}>{blog.name}</Name>
          </a>
        </Card>
      ))}
    </>
  );
};

export default Blogs;
