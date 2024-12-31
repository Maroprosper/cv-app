import { useState, useEffect } from 'react'
import './App.css'
import { GoPlus, GoDownload } from 'react-icons/go';
import { CiMail, CiPhone, CiLocationOn, CiGlobe } from 'react-icons/ci';
import CompanyForm from './components/CompanyForm';
import EducationForm from './components/EducationForm'
import ProjectForm from './components/ProjectForm'
import SkillsForm from './components/SkillsForm'
import ReferenceForm from './components/ReferenceForm'
import OthersForm from './components/OthersForm';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

{/*const getPdfElement = () => document.getElementById('print-pdf');*/}
function App() {
  // Initialize states with data from localStorage or defaults
  const [person, setPerson] = useState(() => {
    const saved = localStorage.getItem('person');
    return saved ? JSON.parse(saved) : {
      name: '', 
      objective:'', 
      email:'', 
      phone:'', 
      website:'', 
      location:''
    };
  });

  const [experiences, setExperiences] = useState(() => {
    const saved = localStorage.getItem('experiences');
    return saved ? JSON.parse(saved) : [{id: Date.now(), name: '', job:'', date: '', description:''}];
  });

  const [schools, setSchools] = useState(() => {
    const saved = localStorage.getItem('schools');
    return saved ? JSON.parse(saved) : [{id: Date.now(), school: '', date:'', degree: '', gpa:'', info:''}];
  });

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('projects');
    return saved ? JSON.parse(saved) : [{id: Date.now(), name:'', date:'', description:''}];
  });

  const [skills, setSkills] = useState(() => {
    const saved = localStorage.getItem('skills');
    return saved ? JSON.parse(saved) : [{id: Date.now(), name:''}];
  });

  const [references, setReferences] = useState(() => {
    const saved = localStorage.getItem('references');
    return saved ? JSON.parse(saved) : [{id: Date.now(), name: '', phone: '', address:'', occupation:''}];
  });
  
  const [others, setOthers] = useState(() => {
    const saved = localStorage.getItem('others');
    return saved ? JSON.parse(saved) : {id: Date.now(), text: ''}
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('person', JSON.stringify(person));
  }, [person]);

  useEffect(() => {
    localStorage.setItem('experiences', JSON.stringify(experiences));
  }, [experiences]);

  useEffect(() => {
    localStorage.setItem('schools', JSON.stringify(schools));
  }, [schools]);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('skills', JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    localStorage.setItem('references', JSON.stringify(references));
  }, [references]);

  useEffect(() => {
    localStorage.setItem('others', JSON.stringify(others));
  }, [others]);

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

  const addSkill = () => {
    const newSkill = {
      id: Date.now(),
      name: '',
    };
    setSkills([...skills, newSkill])
  }

  const addReference = () => {
    const newReference = {
      id: Date.now(),
      name: '',
      phone: '',
      occupation: '',
      address: '',    
    };
    setReferences([...references, newReference]);
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

  const deleteSkill = (id) => {
    setSkills(skills.filter(exp => exp.id!== id));
  }

  const deleteReference = (id) => {
    setReferences(references.filter(exp => exp.id!== id));
  }
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

  const updateSkill = (id, field, value) => {
    setSkills(skills.map(exp => 
      exp.id === id? { ...exp, [field]: value } : exp
    ));
  }

  const updateReference = (id, field, value) => {
    setReferences(references.map(exp => 
      exp.id === id? { ...exp, [field]: value} : exp
    ));
  }
  const updateOthers = (id, field, value) => {
    setOthers({...others, [field]: value});
  }

  const generatePDF = async () => {
    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      // Get original element
      const originalElement = document.getElementById('print-pdf');
      
      // Create temporary container with desired width
      const tempContainer = document.createElement('div');
      tempContainer.style.width = '794px'; // A4 width in pixels
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.top = '-9999px';
      
      // Clone and append content
      const clonedContent = originalElement.cloneNode(true);
      tempContainer.appendChild(clonedContent);
      document.body.appendChild(tempContainer);
  
      // Generate canvas
      const canvas = await html2canvas(clonedContent, {
        scale: 2,
        useCORS: true,
        logging: false,
        width: 794, // A4 width in pixels
        windowWidth: 794
      });
  
      // Convert to PDF
      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      
      // Cleanup
      document.body.removeChild(tempContainer);
      
      pdf.save(`${person.name}-CV.pdf`);
    } catch (error) {
      console.error('PDF generation failed:', error);
    }
  };

  return (
    <div>
      <header className="flex justify-between items-center w-full py-2 px-4">
        <h1 className='text-xl font-bold'>OpenVitae</h1>
        <div>
          <ul className='flex gap-10 font-bold'>
            <li><a href='https://github.com/Maroprosper/'><FaGithub size={20}/></a></li>
            <li><a href='https://x.com/odogwuScript'><FaXTwitter size={20}/></a></li>
            <li><a href='https://www.linkedin.com/in/oghenemaro-ogbaudu-124a93278/'><FaLinkedinIn size={20}/></a></li>
          </ul>
        </div>
      </header>
      <div className='flex flex-col justify-between md:flex-row gap-5 md:fixed w-full'>
        <aside className="md:w-2/5 bg-gray-50 p-4 mt-4 overflow-y-auto flex flex-col md:h-screen">
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
                <textarea 
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

              <div>
                <div className="border-t flex flex-col pt-4 mt-4">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-medium">Skills</h2>
                      </div>

                      {skills.map(exp => (
                      <SkillsForm
                      key={exp.id}
                      id={exp.id}
                      skill={exp}
                      onChange={updateSkill}
                      onDelete={deleteSkill}
                    />
                    ))}
                    <button 
                    type="button"
                    onClick={addSkill}
                    className="bg-blue-500 self-end text-white rounded-md hover:bg-blue-600 flex justify-around items-center py-2 px-4"
                    >
                        <GoPlus size={20} /> <p>Add Skill</p>
                    </button>
                </div>       
              </div> 
              <div>
                  <div className="border-t flex flex-col pt-4 mt-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-medium">Referees</h2>
                    </div>
                    {references.map(exp => (
                      <ReferenceForm
                      key={exp.id}
                      id={exp.id}
                      reference={exp}
                      onChange={updateReference}
                      onDelete={deleteReference}
                    />
                    ))}
                    <button 
                    type="button"
                    onClick={addReference}
                    className="bg-blue-500 self-end text-white rounded-md hover:bg-blue-600 flex justify-around items-center py-2 px-4"
                    >
                        <GoPlus size={20} /> <p>Add Referee</p>
                    </button>
                  </div>
              </div> 
              <div>
                <div className="border-t flex flex-col pt-4 mt-4">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-medium">Others</h2>
                    </div>
                    <OthersForm
                      key={others.id}
                      id={others.id}
                      other={others}
                      onChange={updateOthers}
                      />
                </div>
      
              </div> 
            </form>
          </section>

        </aside>
        <main className='w-full md:w-3/5 flex justify-center overflow-y-auto md:h-screen pb-20'>
          <div className='md:min-h-screen flex flex-col items-center max-w-full md:max-w-[90%] p-10 mt-10'>
            <section id='print-pdf' className='border-t-4 border-black w-full h-auto p-10 bg-white shadow-md'>
              <h1 className='mt-2 font-bold text-center text-2xl'>{person.name}</h1>
              <p className='mt-2'>{person.objective}</p>
              <ul className='flex gap-4 flex-wrap justify-between mt-2'>
                <li className='flex items-center gap-1'><CiMail size={20} className='mt-1'/><p>{person.email}</p></li>
                <li className='flex items-center gap-1'><CiPhone size={20} className='mt-1'/><p>{person.phone}</p></li>
                <li className='flex items-center  gap-1'><CiLocationOn size={20} className='mt-1'/><p>{person.location}</p></li>
                <li className='flex items-center gap-1'><CiGlobe size={20} className='mt-1'/><p>{person.website}</p></li>
              </ul>
              <div className="mt-5">
                <h2 className='font-bold text-xl mb-2'>EDUCATION</h2>
                {schools.map(item => (
                  <div className='flex justify-between mb-4' key={item.id}>
                    <div>
                      <h3 className='font-bold'>{item.school}</h3>
                      <p>{item.degree}</p>
                      <p>{item.info}</p>
                    </div>
                    <div>
                      <p>{item.date}</p>
                      <span>{item.gpa} CGPA</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className='mt-5'>
                <h2 className='font-bold text-xl mb-2'>WORK EXPERIENCE</h2>
                {experiences.map(item => (
                  <div key={item.id} className='mb-4'>
                    <h3 className='font-bold'>{item.name}</h3>
                    <div className='flex justify-between'>
                      <p className='font-bold text-sm'>{item.job}</p>
                      <span>{item.date}</span>
                    </div>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
              <div className='mt-5' >
                <h2 className='font-bold text-xl mb-2'>PROJECTS</h2>
                {projects.map(item => (
                  <div key={item.id} className='mb-4'>
                    <div className='flex justify-between'>
                      <h3 className='font-bold'>{item.name}</h3>
                      <span>{item.date}</span>
                    </div>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
              <div className='mt-5' >
                <h2 className='font-bold text-xl mb-2'>SKILLS</h2>
                <ul className='list-disc'>
                  {skills.map(item => (
                    <li key={item.id} className='mb-1'>{item.name}</li>
                  ))}
                </ul>
              </div>
              <div className='mt-5' >
                <h2 className='font-bold text-xl mb-2'>REFEREES</h2>
                <div className='flex justify-between'>
                  {references.map(item => (
                    <div key={item.id} className='w-1/3'>
                      <h3 className='font-bold'>{item.name}</h3>
                      <p>{item.occupation}</p>
                      <p>{item.address}</p>
                      <span className='text-sm font-semibold'>{item.phone}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className='mt-5 mb-10'>
                <h2 className='font-bold text-xl mb-2'>OTHERS</h2>
                <p key={others.id}>{others.text}</p>
              </div>
            </section>
            <div className='self-center md:self-end my-5 md:fixed md:bottom-1'>
              <button 
                onClick={generatePDF}
                className="fixed bottom-4 right-6 bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600"
              >
                <GoDownload size={24} />
              </button>
          </div>
          </div>
        </main>
        
      </div>
    </div>
  )
}

export default App
