import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/avatar.jpg" />

        <Title title="SUKANYA LUECHA (CREAM)">
          <h3>Position : It Support</h3>
        </Title>

        <Title title="Contact">
     
          <p>current date: {moment().format("D MMM YYYY")}</p>
          <p>Date of Birth: {moment("2002/09/13").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66980180056
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'hide'}
          </button>
          <p>Email : s64122202049@ssru.ac.th</p>
          <p>www.cream049.com</p>
        </Title>
    
        <Title title="Education">
          <p>Bachelor of Science in Information Technology (IT)</p>
          <p>Suan Sunandha Rajabhat University</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Motto">
          <p>"Learning and starting over no limit</p>
        </Title>

        <Title title="Skills and Abilities">
          <p>• Use After Effects programs to create animations.</p>
          <p>• Use Photoshop, Illustrator programs.</p>
          <p>• Microsoft Office</p>
        </Title>

        <Title title="Soft skills">
          <p>• communication skills</p>
          <p>• Time management skills</p>
          <p>• Skills for working with others</p>
          <p>• Decision making skills</p>
          <p>• Emotional skills</p>
        </Title>
      </div>
    </main>
  )
}

export default App
