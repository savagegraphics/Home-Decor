import React from 'react'
import './Products.css'

type Props = {}

const Products = (props: Props) => {
  return (
<div className="html">
    <div className='body'>
        <h1 className='text-4xl font-bold text-stone-950 text-center'>Products</h1>
 <div className="grid-wrapper ml-[2px] lg:ml-[220px] my-[16px] lg:my-[64px]">
 <div className="tall">
		<img src="https://images.unsplash.com/photo-1588117472013-59bb13edafec?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt=""/>
	</div>
	<div>
		<img src="https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
	</div>
	<div>
		<img src="https://images.unsplash.com/photo-1588282322673-c31965a75c3e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1351&amp;q=80" alt="" />
	</div>
	<div className="wide">
		<img src="https://images.unsplash.com/photo-1587588354456-ae376af71a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" />
	</div>
	<div>
	</div>
</div>
    </div>
    </div>
  )
}

export default Products