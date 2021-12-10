interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  return (
    <>
      <div className="container">{props.children}</div>
    </>
  );
};
