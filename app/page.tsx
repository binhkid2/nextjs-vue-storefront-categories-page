import { SfButton } from '@storefront-ui/react';
import Breadcrumbs from './components/categories/Breadcrumbs';
import Filters from './components/categories/Filters';
import ProductCard from './components/categories/ProductCard';
import Pagination from './components/categories/Pagination';
export default function Home() {
  return (
   <>
   
<Breadcrumbs/>
<div className='mx-12 my-8'>
<div className='flex gap-6'>
<Filters/>
<div className='flex flex-wrap gap-2'>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
</div>

</div>
<Pagination/>
</div>

   </>
  );
}
