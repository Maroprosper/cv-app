import { GoTrash } from 'react-icons/go';

const SkillsForm = ({skill, onChange, onDelete, id}) => {
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
                    <label htmlFor="projectDate" className="mb-1 text-sm font-medium">Skill Name</label>
                    <input 
                    id="projectDate"
                    className="rounded border p-2"
                    type="text"
                    value={skill.name}
                    onChange={(e) => onChange(id, 'name', e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default SkillsForm;