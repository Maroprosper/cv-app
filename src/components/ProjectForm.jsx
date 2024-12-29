import { GoTrash } from 'react-icons/go';

const ProjectForm = ({project, onChange, onDelete, id}) => {
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
                            <label htmlFor="projectName" className="mb-1 text-sm font-medium">Project Name</label>
                            <input 
                            id="projectName"
                            className="rounded border p-2"
                            type="text"
                            value={project.name}
                            onChange={(e) => onChange(id, 'name', e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="projectDate" className="mb-1 text-sm font-medium">Date</label>
                            <input 
                            id="projectDate"
                            className="rounded border p-2"
                            type="text"
                            value={project.date}
                            onChange={(e) => onChange(id, 'date', e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium">Description</label>
                    <input
                        className="rounded border p-2"
                        type="text"
                        value={project.description}
                        onChange={(e) => onChange(id, 'description', e.target.value)}
                    />
                </div>
                </div>
            </div>
        </div>    
    );

}

export default ProjectForm;