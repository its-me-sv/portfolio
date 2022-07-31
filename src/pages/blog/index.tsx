import { useEffect } from "react";

import { Container } from './styles';

import Blogs from "../../components/blogs";
import { useMenuContext } from "../../contexts/menu.context";

interface BlogsPageProps {}

const BlogsPage: React.FC<BlogsPageProps> = () => {
  const { setMenu } = useMenuContext();

  useEffect(() => setMenu!(6), []);
  
  return (
    <Container>
      <Blogs />
    </Container>
  );
};

export default BlogsPage;
