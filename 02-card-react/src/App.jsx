import Card from './components/Card'
import './App.css'

function App() {

  return (
    <div className="container">
      <Card 
        title="Youtube"
        description="Youtube is a video platform where 
          anybody can upload videos and watch it too."
      />
      <Card 
        title="Instagram"
        description="Instagram is a social media platform 
        where anybody can upload reels, photos and follow
        other people."
      />
      <Card 
        title="Linkedin"
        description="Linkedin is a professional platform where 
          companies are hiring and you can apply for jobs."
      />
    </div>
  )
}

export default App
