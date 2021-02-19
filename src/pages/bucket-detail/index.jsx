// import Link
import {Link} from '@reach/router' ;
// import Component
import Nav from '../../Component/Nav'
import Create from '../../Component/CreateItem'
import Table from '../../Component/Table'
// Import Assets

import deleteIcon from '../../assets/icons/delete-icon.png';
import printerIcon from '../../assets/icons/printer-white-icon.png';
import downArrowIcon from '../../assets/icons/down-arrow-white-icon.png';

function BucketDetailPage() {
	return (
		<div>
			{/* Navigation Bar */}
			<Nav />
			{/* Main Content Body */}
			<main className='container __margin--ylg'>
				{/* Add Item */}
				<Create label='Add New Item' extra/>
				{/* Item Table */}
				<section className='section table __shadow--sm'>
					<Table />
				</section>
				{/* Item Table Completed */}
				<section className='section table table--success __shadow--sm'>
					<Table />
				</section>
			</main>
		</div>
	);
}

export default BucketDetailPage;