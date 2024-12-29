import { GoTrash } from 'react-icons/go';
const ReferenceForm = ({reference, onChange, onDelete, id}) => {
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
                <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="refereeName" className="mb-1 text-sm font-medium">Referee Name</label>
                            <input 
                            id="refereeName"
                            className="rounded border p-2"
                            type="text"
                            value={reference.name}
                            onChange={(e) => onChange(id, 'name', e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="projectDate" className="mb-1 text-sm font-medium">Phone Number</label>
                            <input 
                            id="projectDate"
                            className="rounded border p-2"
                            type="tel"
                            value={reference.phone}
                            onChange={(e) => onChange(id, 'phone-number', e.target.value)}
                            />
                        </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="occupation" className="mb-1 text-sm font-medium">Occupation</label>
                            <input 
                            id="occupation"
                            className="rounded border p-2"
                            type="text"
                            value={reference.occupation}
                            onChange={(e) => onChange(id, 'occupation', e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="address" className="mb-1 text-sm font-medium">Address</label>
                            <input 
                            id="address"
                            className="rounded border p-2"
                            type="text"
                            value={reference.address}
                            onChange={(e) => onChange(id, 'address', e.target.value)}
                            />
                        </div>
                </div>

            </div>
        </div> 
    );
}

export default ReferenceForm;