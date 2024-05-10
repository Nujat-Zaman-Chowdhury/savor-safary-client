

const MyFoodItemPage = () => {
    return (
        <table className="divide-y divide-gray-200 overflow-x-auto my-6 container mx-auto">
    <thead className="bg-gray-50">
        <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
            </th>
            
        </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
        <tr className="">
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex-shrink-0 h-32 w-32">
                        <img className="rounded-md" src="https://i.pravatar.cc/150?img=1" alt=""/>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Price
                </span>
            </td>
            
            <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">Update</a>
            </td>
        </tr>


    </tbody>
</table>
    );
};

export default MyFoodItemPage;