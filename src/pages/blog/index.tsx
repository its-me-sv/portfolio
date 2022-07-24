import { useEffect } from "react";

import { Container } from './styles';

import Blogs from "../../components/blogs";
import { useCommonContext } from '../../contexts/common.context';
import { useMenuContext } from "../../contexts/menu.context";

interface BlogsPageProps {}

const BlogsPage: React.FC<BlogsPageProps> = () => {
  const { isMobile } = useCommonContext();
  const { setMenu } = useMenuContext();

  useEffect(() => setMenu!(6), []);
  
  return (
    <Container mobile={isMobile}>
      <Blogs />
    </Container>
  );
};

export default BlogsPage;
