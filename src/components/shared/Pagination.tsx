interface Props {
  totalItems: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

// This component is responsible for rendering pagination controls and handling page changes.
export const Pagination = ({ totalItems, page, setPage }: Props) => {

    const handleNextPage = () => {
        setPage(page + 1);
    }

    const handlePrevPage = () => {
        setPage(prevPage => Math.max(prevPage - 1, 1));
    }

    const itemsPerPage = 10; 
    const totalPages = totalItems
        ? Math.ceil(totalItems / itemsPerPage)
        : 0;
    const isLastPage = page >= totalPages;

    const startItem = (page - 1) * itemsPerPage + 1;
    const endItem = Math.min(page * itemsPerPage, totalItems);

  return <div className="flex justify-between items-center">
    <p className="text-xs font-medium">
        Showing <span className="font-bold">
            {startItem} - {endItem}
        </span> of <span className="font-bold">{totalItems}</span> products
    </p>


    <div className="flex items-center gap-2">
        <button 
            onClick={handlePrevPage}
            disabled={page === 1}
            className="btn-paginated"
        >
            Previous
        </button>

        <span className="text-sm font-medium text-gray-700">
            Page <span className="font-bold">{page}</span> of <span className="font-bold">{totalPages}</span>
        </span>

        <button 
            onClick={handleNextPage}
            disabled={isLastPage}
            className="btn-paginated"
        >
            Next
        </button>
    </div>

  </div>;
};
