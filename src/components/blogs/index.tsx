import openIcon from '../../assets/icons/open.png';
import { blogs } from '../../data/blog.data';

import { Card, Name } from './styles';

import { useCommonContext } from '../../contexts/common.context';

interface BlogsProps {}

const Blogs: React.FC<BlogsProps> = () => {
  const { isDark, isMobile } = useCommonContext();

  return (
    <>
      {blogs.map((blog) => (
        <Card dark={isDark} mobile={isMobile} key={blog.name}>
          <Name dark={isDark}>{blog.name}</Name>
          {blog.url && (
            <a href={blog.url} target="_blank" rel="noreferrer">
              <img alt="read" src={openIcon} />
            </a>
          )}
        </Card>
      ))}
    </>
  );
};

export default Blogs;
