import { GoTrash } from 'react-icons/go';

const CompanyForm = ({ company, onChange, onDelete, id }) => {
  return (
    <div className="border p-4 rounded-lg mb-4 relative">
      <button 
        onClick={() => onDelete(id)}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
        type="button"
      >
        <GoTrash size={20} />
      </button>
      
      <div className="space-y-4">
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Company Name</label>
          <input
            className="rounded border p-2"
            type="text"
            value={company.name}
            onChange={(e) => onChange(id, 'name', e.target.value)}
          />
        </div>
        
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Job Title</label>
          <input
            className="rounded border p-2"
            type="text"
            value={company.job}
            onChange={(e) => onChange(id, 'job', e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Date</label>
          <input
            className="rounded border p-2"
            type="text"
            value={company.date}
            onChange={(e) => onChange(id, 'date', e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Description</label>
          <textarea
            className="rounded border p-2"
            value={company.description}
            onChange={(e) => onChange(id, 'description', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyForm;