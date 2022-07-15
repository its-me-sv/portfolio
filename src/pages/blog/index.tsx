import { useEffect } from "react";

import { useMenuContext } from "../../contexts/menu.context";

interface BlogsPageProps {}

const BlogsPage: React.FC<BlogsPageProps> = () => {
  const { setMenu } = useMenuContext();

  useEffect(() => setMenu!(6), []);
  
  return <h1>Blogs</h1>;
};

export default BlogsPage;
