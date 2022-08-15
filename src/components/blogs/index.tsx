import { blogs } from '../../data/blog.data';

import { Card, Name } from './styles';
import { CredBtn } from '../../utils/styles.util';
import { blogsPageTranslations } from '../../utils/translations.util';

import { useCommonContext } from '../../contexts/common.context';

interface BlogsProps {}

const Blogs: React.FC<BlogsProps> = () => {
  const { language } = useCommonContext();

  return (
    <>
      {blogs.map((blog) => (
        <Card key={blog.name}>
          <Name>{blog.name}</Name>
          <a href={blog.url} target="_blank" rel="noreferrer">
            <CredBtn>🚀 {blogsPageTranslations.read[+language]}</CredBtn>
          </a>
        </Card>
      ))}
    </>
  );
};

export default Blogs;
