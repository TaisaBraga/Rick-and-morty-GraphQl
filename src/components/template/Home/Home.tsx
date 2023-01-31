import { ErrorPage } from '../../organisms/ErrorPage';
import { PaginationClick } from '../../molecules/PaginationClick';
import { CardPages } from '../../organisms/CardPages';
import { PaginationLoader } from '../../molecules/PaginationLoader';

export const Home = () => {

  return (
    <div>
      <CardPages />
      <PaginationLoader />
      <PaginationClick />
      <ErrorPage />
    </div >
  )
}
