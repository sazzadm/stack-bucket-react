// import Component
import Nav from '../../Component/Nav'
import Create from '../../Component/CreateItem'
import Table from '../../Component/Table'
// Import Assets
import editIcon from '../../assets/icons/edit-icon.png';
import deleteIcon from '../../assets/icons/delete-icon.png';
import printerIcon from '../../assets/icons/printer-icon.png';


function BucketPage() {
	return (
		<div>
			{/* Navigation Bar */}
			<Nav />
			{/* Main Content Body */}
			<main className='container __margin--ylg'>
				{/* Add New Bucket Section */}
				<Create label='Create New Bucket'/>
				{/* Buckets Table */}
				<div className='section table __shadow--sm'>
					<Table />
				</div>
			</main>
		</div>
	);
}

export default BucketPage;