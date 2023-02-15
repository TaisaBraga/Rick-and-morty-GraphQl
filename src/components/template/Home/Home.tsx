import { ErrorPage } from '../../organisms/ErrorPage';
import { PaginationClick } from '../../molecules/PaginationClick';
import { CardPages } from '../../organisms/CardPages';
import { PaginationLoader } from '../../molecules/PaginationLoader';
import { CardTog } from '../../../poc/CardTog';

export const Home = () => {

  return (
    <div>
      <CardTog />
      <PaginationLoader />
      <PaginationClick />
      <ErrorPage />
    </div >
  )
}
