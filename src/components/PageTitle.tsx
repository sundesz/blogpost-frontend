import GoBack from './GoBack';

interface PageTitleProps {
  title: string;
}
const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="page-title mb-5">
      <h1 className="display-5 fw-bold">{title}</h1>
      <GoBack />
    </div>
  );
};

export default PageTitle;
