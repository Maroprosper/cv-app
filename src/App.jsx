import { useState } from 'react'
import './App.css'
import { GoPlus } from 'react-icons/go';
import CompanyForm from './components/CompanyForm';
import EducationForm from './components/EducationForm'
import ProjectForm from './components/ProjectForm'

function App() {
  const [person, setPerson] = useState({name: '', objective:'', email:'', phone:'', website:'', location:''})
  const [experiences, setExperiences] = useState([{id: Date.now(), name: '', job:'', date: '', description:''}]);
  const [schools, setSchools] = useState([{id: Date.now(), school: '', date:'', degree: '', gpa:'', info:''}]);
  const [projects, setProjects] = useState([{id: Date.now(), name:'', date:'', description:''}])

  const addExperience = () => {
    const newCompany = {
      id: Date.now(),
      name: '',
      job: '',
      date: '',
      description: ''
    };
    setExperiences([...experiences, newCompany]);
  };

  const addDegree = () => {
    const newSchool = {
      id: Date.now(),
      school: '',
      date: '',
      degree: '',
      gpa: '',
      info: ''
    };
    setSchools([...schools, newSchool]);
  };

  const addProject = () => {
    const newProject = {
      id: Date.now(),
      name: '',
      date: '',
      description: ''
    };
    setProjects([...projects, newProject]);
  }

  const deleteExperience = (id) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  const deleteSchool = (id) => {
    setSchools(schools.filter(exp => exp.id !== id));
  };

  const deleteProject = (id) => {
    setProjects(projects.filter(exp => exp.id!== id));
  };

  const updateExperience = (id, field, value) => {
    setExperiences(experiences.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const updateSchool = (id, field, value) => {
    setSchools(schools.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const updateProject = (id, field, value) => {
    setProjects(projects.map(exp => 
      exp.id === id? { ...exp, [field]: value } : exp
    ));
  };

  return (
    <>
      <header className="flex justify-between w-full">
        <h1>OpenVitae</h1>
        <div>
          <ul className='flex gap-5'>
            <li>GitHub</li>
            <li>X</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </header>
      <aside className="w-2/5 bg-gray-50 p-4 mt-4 overflow-y-auto flex flex-col fixed h-screen">
        <section className="mb-6">
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 text-sm font-medium">Name</label>
              <input 
                id="name"
                className="rounded border p-2"
                type="text"
                value={person.name}
                onChange={(e) => setPerson({...person, name: e.target.value})}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="objective" className="mb-1 text-sm font-medium">Objective</label>
              <input 
                id="objective"
                className="rounded border p-2"
                type="text"
                value={person.objective}
                onChange={(e) => setPerson({...person, objective: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 text-sm font-medium">Email</label>
                <input 
                  id="email"
                  className="rounded border p-2"
                  type="email"
                  value={person.email}
                  onChange={(e) => setPerson({...person, email: e.target.value})}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="mb-1 text-sm font-medium">Phone</label>
                <input 
                  id="phone"
                  className="rounded border p-2"
                  type="tel"
                  value={person.phone}
                  onChange={(e) => setPerson({...person, phone: e.target.value})}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="website" className="mb-1 text-sm font-medium">Website</label>
                <input 
                  id="website"
                  className="rounded border p-2"
                  type="url"
                  value={person.website}
                  onChange={(e) => setPerson({...person, website: e.target.value})}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="location" className="mb-1 text-sm font-medium">Location</label>
                <input 
                  id="location"
                  className="rounded border p-2"
                  type="text"
                  value={person.location}
                  onChange={(e) => setPerson({...person, location: e.target.value})}
                />
              </div>
            </div>
            <div className="border-t flex flex-col pt-4 mt-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">Experience</h2>
              </div>
              
              {experiences.map(exp => (
                <CompanyForm
                  key={exp.id}
                  id={exp.id}
                  company={exp}
                  onChange={updateExperience}
                  onDelete={deleteExperience}
                />
              ))}
              <button 
                type="button"
                onClick={addExperience}
                className="bg-blue-500 self-end text-white rounded-md hover:bg-blue-600 flex justify-around items-center py-2 px-4"
              >
                  <GoPlus size={20} /> <p>Add Job</p>
              </button>
            </div> 
            <div>
              <div className="border-t flex flex-col pt-4 mt-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium">Education</h2>
                </div>

                {schools.map(exp => (
                <EducationForm
                  key={exp.id}
                  id={exp.id}
                  education={exp}
                  onChange={updateSchool}
                  onDelete={deleteSchool}
                />
              ))}

                <button 
                type="button"
                onClick={addDegree}
                className="bg-blue-500 self-end text-white rounded-md hover:bg-blue-600 flex justify-around items-center py-2 px-4"
                >
                    <GoPlus size={20} /> <p>Add Degree</p>
                </button>
               </div> 
            </div>
            <div>
              <div className="border-t flex flex-col pt-4 mt-4">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-medium">Projects</h2>
                  </div>

                  {projects.map(exp => (
                  <ProjectForm
                    key={exp.id}
                    id={exp.id}
                    project={exp}
                    onChange={updateProject}
                    onDelete={deleteProject}
                  />
                  ))}

                  <button 
                  type="button"
                  onClick={addProject}
                  className="bg-blue-500 self-end text-white rounded-md hover:bg-blue-600 flex justify-around items-center py-2 px-4"
                  >
                      <GoPlus size={20} /> <p>Add Project</p>
                  </button>
              </div>
            </div>   
          </form>
        </section>

      </aside>
      <main>
        
      </main>
    </>
  )
}

export default App
