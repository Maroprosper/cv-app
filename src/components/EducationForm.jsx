import { GoTrash } from 'react-icons/go';

const EducationForm = ({education, onChange, onDelete, id}) => {

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
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="school" className="mb-1 text-sm font-medium">School</label>
                        <input 
                        id="school"
                        className="rounded border p-2"
                        type="text"
                        value={education.school}
                        onChange={(e) => onChange(id, 'school', e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="duration" className="mb-1 text-sm font-medium">Date</label>
                        <input 
                        id="duration"
                        className="rounded border p-2"
                        type="text"
                        value={education.date}
                        onChange={(e) => onChange(id, 'date', e.target.value)}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="degree" className="mb-1 text-sm font-medium">Degree</label>
                        <input 
                        id="degree"
                        className="rounded border p-2"
                        type="text"
                        value={education.degree}
                        onChange={(e) => onChange(id, 'degree', e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="gpa" className="mb-1 text-sm font-medium">CGPA</label>
                        <input 
                        id="gpa"
                        className="rounded border p-2"
                        type="text"
                        value={education.gpa}
                        onChange={(e) => onChange(id, 'gpa', e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium">Additional Information</label>
                    <input
                        className="rounded border p-2"
                        type="text"
                        value={education.info}
                        onChange={(e) => onChange(id, 'info', e.target.value)}
                    />
                </div>
            </div>
        </div>
        </div>       
    );
}

export default EducationForm;