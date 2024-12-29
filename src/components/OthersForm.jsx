import { GoTrash } from 'react-icons/go';

const OthersForm = ({other, onChange,  id}) => {
    return (
        <div className="border p-4 rounded-lg mb-4 relative">
            
            <div className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="others" className="mb-1 text-sm font-medium">Others</label>
                    <textarea
                    id="others"
                    className="rounded border p-2"
                    type="text"
                    value={other.text}
                    onChange={(e) => onChange(id, 'text', e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default OthersForm;
